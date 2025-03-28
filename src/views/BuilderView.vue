<script setup lang="ts">
  import {onMounted, computed, ref, watch, cloneVNode} from "vue";
  import { uuid } from 'vue-uuid';
  import JsonEditor from 'vue3-ts-jsoneditor';
  import {useSpellsStore} from "@/stores/spells";
  import {useRacesStore} from "@/stores/races";
  import {useBackgroundsStore,classBackground} from "@/stores/backgrounds";
  import {useFeatsStore} from "@/stores/feats";
  import {equipmentProf, useItemsStore} from "@/stores/items";
  import type {RaceBuilder} from "@/stores/races";
  import {
    Abilities,
    LanguagesStandard,
    LanguagesExotic,
    LanguagesKey,
    Sizes,
    Skills,
    displaySubrace,
    DS,
    S,
    roll,
    abilityRoll,
    textSkill,
    inlineSkill,
    fn,
    inlineAbility,
    spellSlots,
    LanguagesAll,
    inlineLang,
    ToolsOther,
    ToolsArtisan,
    ToolsInstrument,
    ToolsGamingsets,
    ToolsAll,
    ToolsKey,
    inlineTool,
    spellSlotsPact,
    rollFormula,
    inlineEntries, Damages, cfl
  } from "@/utils/refs";
  import AccordionItem from "@/components/AccordionItem.vue";
  import CharacterInfo from "@/components/CharacterInfo.vue";
  import {type Class, useClassesStore} from "@/stores/classes";
  import download from "downloadjs";
  import DamageType from "@/components/DamageType.vue";
  import ClassInfo from "@/components/ClassInfo.vue";
  import FeatInfo from "@/components/FeatInfo.vue";
  import SpellInfo from "@/components/SpellInfo.vue";
  import ItemInfo from "@/components/ItemInfo.vue";
  import ItemSearch from "@/components/ItemSearch.vue";
  import Money from "@/components/Money.vue";
  const spellsStore = useSpellsStore();
  const racesStore = useRacesStore();
  const bgStore = useBackgroundsStore();
  const classesStore = useClassesStore();
  const featsStore = useFeatsStore();
  const itemsStore = useItemsStore();
  const storagekey: string = 'character-builder';
  const dev: boolean = import.meta.env.DEV;
  const CHOOSE = "Choose";

  onMounted(async () => {
    await spellsStore.initSpells();
    await spellsStore.initSources();
    await racesStore.initStore();
    await bgStore.initBackgrounds();
    await classesStore.initClasses();
    await featsStore.initFeats();
    await itemsStore.initItems();

    character.value = {
      ...defaultCharacter(),
      ...getStorage()
    };
    chooses.value = {
      ...defaultChoose
    };
  });

  const search = ref<any>({});
  const changeSearch = (e: any, name: string) => {
    search.value[name] = e.target.value;
  }
  const showAllSpells = ref(false);
  const showAllFeats = ref(false);

  const step = ref<string>('');
  const steps = ref<any[]>([]);
  const addManualStep = (s: string) => {
    if(!character.value) return
    if(!character.value.manualSteps.find((ms:any) => ms.step == s)) {
      character.value.manualSteps.push({
        step: s,
        valid: false
      });
    }
  }
  const removeManualStep = (s: string) => {
    if(!character.value) return
    if(getManualStep(s)) {
      const ms = [
        ...character.value.manualSteps.filter((ms:any) => ms.step != s)
      ];
      character.value.manualSteps = ms;
    }
  }
  const getManualStep = (s: string) => {
    if(!character.value) return
    return character.value.manualSteps.find((ms:any) => ms.step == s);
  }
  const isManualValid = (s: string) => {
    if(!character.value) return
    return getManualStep(s).valid || false;
  }
  const toggleManualStep = () => {
    manualStep.value.valid = !manualStep.value.valid;
    calculStep();
  }
  const toggleStartingEquipment = () => {
    if(!manualStep.value.valid) {
      // TODO calcul all equipements
      // TODO if change startingequipment, invalid the step
      // character.value.equipment = []
    }
    else {
      character.value.equipment = [];
    }
    toggleManualStep();
  }
  const manualStep = computed(() => character.value && character.value.manualSteps.find((s:any) => s.step == step.value));

  const changeStep = (name: string) => {
    if(step.value != name) {
      step.value = name;
    }
    else {
      lastStep();
    }
  }

  const calculStep = () => {
    const ss = [];
    try {
      if(versions.value === null) {
        console.error("AllLoad not finish");
        return;
      }

      let f = false;
      const level = character.value.level;
      const leveling = character.value.state == 'leveling';
      // TODO if not leveling, only Equipment / Spells prepared / Details ?

      if(level == 1) {
        const a = character.value.race.name !== null;
        const b = character.value.race.source !== null;
        const c = character.value.subrace === null || character.value.subrace.name !== null;

        const hasRaceOptions = computedRaceOptions.value !== null;
        let roValid = true;
        if(hasRaceOptions) {
          computedRaceOptions.value.forEach((ro: any) => {
            if(!character.value.raceOptions.find((e:any) => ro.replace == e.replace)) {
              roValid = false;
            }
          });
        }

        const d = character.value.class[0].name !== null && character.value.class[0].name.length > 0;
        const e = character.value.background !== null;
        f = (abPoints.value === 27 || character.value.abilities.option === 'free') && checkBonus();

        ss.push({
          name: 'race',
          valid: a
        });
        if(!a) return;

        if (a && versions.value.length > 1) {
          ss.push({
            name: 'version',
            valid: b
          });
          if (!b) return;
        }
        if (a && b && character.value.subrace !== null) {
          ss.push({
            name: 'subrace',
            valid: c
          });
          if (!c) return;
        }

        if (hasRaceOptions) {
          ss.push({
            name: 'raceOptions',
            valid: roValid
          });
          if (!roValid) return;
        }

        if ((a && b && c) || d) {
          ss.push({
            name: 'class',
            valid: d
          });
          if (!d) return
        }
        if (d || e) {
          ss.push({
            name: 'background',
            valid: e
          });
          if (!e) return;
        }
        if (e) {
          ss.push({
            name: 'abilities',
            valid: f
          });
          if (!f) return;
        }

        const hasRacialFeat = computedRace.value && computedRace.value.feats;
        if (hasRacialFeat) {
          const racialFeatName = character.value.feats.find((f: any) => f.level == 1 && f.origin == 'race' && f.name != null)?.name;
          let racialFeatValid = false;
          if (racialFeatName) {
            const feat = feats.value.find((f: any) => f.name == racialFeatName);
            if (feat.ability && feat.ability[0].choose) {
              racialFeatValid = character.value.abilities.improvments.filter((ip: any) => ip.origin == 'feat' && ip.level == 1).length != 0;
            } else {
              racialFeatValid = true;
            }
          }
          ss.push({
            name: 'racialFeat',
            valid: racialFeatValid
          });
          if (!racialFeatValid) return;
        }

        const hasBgFeat = bg.value && bg.value.feats;
        if (hasBgFeat) {
          const bgFeatName = character.value.feats.find((f: any) => f.level == 1 && f.origin == 'background' && f.name != null)?.name;
          let bgFeatValid = false;
          if (bgFeatName) {
            const feat = feats.value.find((f: any) => f.name == bgFeatName);
            if(feat) bgFeatValid = true;
          }
          ss.push({
            name: 'bgFeat',
            valid: bgFeatValid
          });
          if (!bgFeatValid) return;
        }
        
      }
      else {
        f = true;
      }

      let g = false; //Features
      if(f && classFeatures.value) {
        let s = 'features';
        if(classFeatures.value.find((cf:any) => cf.chooseSubclass)) {
          removeManualStep(s)
          g = lastClass.value.subclass;
        }
        else if(classFeatures.value.find((cf:any) => cf.options !== null)) {
          removeManualStep(s)
          let allTrue = true;
          classFeatures.value.filter((cf:any) => cf.options !== null).forEach((cf:any) => {
            let choices = lastClass.value.features.find((ft: any) => ft.name == cf.name)?.choices.length;
            if(cf.options.count != choices) allTrue = false;
          });
          if(allTrue) g = true;
        }
        else {
          addManualStep(s);
          g = isManualValid(s);
        };
      }

      if(f) {
        ss.push({
          name: 'features',
          valid: g
        });
        if(!g) return;
      }

      addManualStep('hp');
      const h = isManualValid('hp');
      if(g) {
        ss.push({
          name: 'hp',
          valid: h
        });
        calcHPMax(true);
        if(!h) return;
      }

      let i = true;
      if(chooses.value && (chooses.value.skills || chooses.value.expertises.length > 0)) {
        ['skills','expertises'].forEach(key => {
          chooses.value[key].forEach((ch:any) => {
            if(countProfByOrigin(key,ch.origin) != ch.count) {
              i = false; return false;
            };
          });
        })
        ss.push({
          name: 'proficiencies',
          valid: i
        });
        if(!i) return;
      }

      let i2 = true;
      if(i && (chooses.value.languages.length > 0 || chooses.value.tools.length > 0)) {
        ['languages', 'tools'].forEach(key => {
          chooses.value[key] && chooses.value[key].forEach((ch:any) => {
            if(countProfByOrigin(key,ch.origin) != ch.count) {
              i2 = false; return false;
            };
          });
        })
        ss.push({
          name: 'otherprof',
          valid: i2
        });
        if(!i2) return;
      }

      let j = false;
      if(i2) {
        let ch = chooses.value.cantrips;
        let sp = chooses.value.spells;
        let pr = chooses.value.prepared;
        let as = chooses.value.additionalSpells;

        let j1 = true, j2 = true, j3 = true, j4 = true;

        if(ch && ch.known > 0) {
          j1 = ch.known == ch.selected
          ss.push({
            name: 'cantrips',
            valid: j1
          });
        }
        if(sp && sp.known > 0) {
          j2 = sp.known == sp.selected || (pr && pr.known > 0 && sp.selected >= sp.known);
          ss.push({
            name: 'spellsKnown',
            valid: j2
          });
        }
        if(pr && pr.known > 0) {
          j3 = pr.known == pr.selected;
          ss.push({
            name: 'spellsPrepared',
            valid: j3
          });
        }
        if(as && as.length > 0) {
          j4 = true;
          as.forEach((asv:any) => {
            if(as.optionChoice != null && as.option == null) {
              j4 = false;
              return;
            }
            asv.spells.forEach((asp:any) => {
              // const selected = character.value.spells.filter((s:any) => s.origin == asv.origin && s.level == level && s.spellslot == asp.spellslot).length;
              if(asp.selected != asp.count) j4 = false;
            });
          });
          ss.push({
            name: 'additionalSpells',
            valid: j4
          });
        }

        if(j1 && j2 && j3 && j4) {
          j = true;
        }
        if(!j) return;
      }
      else j = true;

      let k = false;
      if(j) {
        let k1 = true;
        const se = character.value.startingEquipment;
        if(se.option == 'gold') {
          if(se.manuals.find((m:any) => m == null || m.key == null)) k1 = false;
          if(se.gp == null || se.rest < 0) k1 = false;
        }
        else {
          chooses.value.startingEquipmentManual.forEach((c:any, i: number) => {
            if(c != null) {
              if(!se.manuals[i]) k1 = false;
            }
          });
        }
        chooses.value.startingEquipment.forEach((c:any) => {
          c.values.forEach((v:any, i: number) => {
            if(!se[c.origin][i]) k1 = false;
          });
        });

        if(k1) {
          addManualStep('startingEquipment');
          k = isManualValid('startingEquipment');
        }
        else {
          removeManualStep('startingEquipment');
        }
        ss.push({
          name: 'startingEquipment',
          valid: k
        });
        if(!k) return;
      }

      if(k) {
        addManualStep('equipment');
        let l = isManualValid('equipment');
        ss.push({
          name: 'equipment',
          valid: l
        });
      }

    }
    catch (e) {
      console.error(e);
    }
    finally {
      steps.value = ss;
      if(!step.value) lastStep();
    }
  }
  const validAbilities = computed(() => steps.value.find(s => s.name === "abilities")?.valid);

  const calcAbility = (key: string) => {
    const t = tAb(key);
    return `${t} (${fn(mod(key))})`;
  }
  const tAb = (key: string) => {
    if(!character.value) return 10;
    return character.value.abilities[key].base+character.value.abilities[key].bonus;
  }
  const mod = (key: string, onlyPositiv: boolean = false) => {
    if(!character.value) return 0;
    const t = character.value.abilities[key].total;
    return Math.floor((t - 10) / 2);
  }
  const totalAbility = (key: string) => {
    const t = character.value.abilities[key].total;
    return `${t} (${fn(mod(key))})`;
  }

  const calcDatasAbilities = (reset: boolean = false) => {
    Abilities.forEach(a => {
      const ab = character.value.abilities[a.key];
      const improve = character.value.abilities.improvments.filter((ip:any) => ip.ability == a.key).length;
      ab.improve = improve;
      ab.total = ab.base + ab.bonus + ab.improve;
    });
  }

  // const hasNext = computed(() => steps.value.findIndex(s => s.name === step.value) < steps.value.length - 1);
  // const hasPrev = computed(() => steps.value.findIndex(s => s.name === step.value) > 0);
  //
  // const nextStep = () => {
  //   let i = steps.value.findIndex(s => s.name === step.value);
  //   step.value = steps.value[i+1].name;
  // }
  // const prevStep = () => {
  //   let i = steps.value.findIndex(s => s.name === step.value);
  //   step.value = steps.value[i-1].name;
  // }

  const lastStep = () => {
    step.value = steps.value.find(s => !s.valid)?.name || 'final';
  }

  const faState = (b: boolean) => {
    return b ? 'fa-check' : 'fa-times';
  }

  const defaultClass = {
    name: "",
    level: 1,
    subclass: null,
    dice: null,
    hps: [],
    features: [],
    casterProgression: null
  }
  const defaultAb = {
    base: 10,
    bonus: 0,
    improve: 0,
    total: 10
  }
  const defaultCharacter = () => {
    return {
      uuid: uuid.v4(),
      state: 'leveling', // fixe/gestion/none ?
      name: null,
      appearance: null,
      level: 1,
      leveling: [
        "" // firstclass
      ],
      race: {
        name: null,
        source: null,
        version: null
      },
      subrace: null,
      raceOptions: [],
      class: [
        {...defaultClass}
      ],
      background: null,
      abilities: {
        str: {...defaultAb},
        dex: {...defaultAb},
        con: {...defaultAb},
        int: {...defaultAb},
        wis: {...defaultAb},
        cha: {...defaultAb},
        option: 'spend',
        improvments: []
      },
      hp: {
        max: 0,
        option: 'average'
      },
      ac: 0,
      save: [],
      spellcasting: [],
      spellcasterlevel: 0,
      skills: [],
      expertises: [],
      languages: [],
      tools: [],
      weapon: [],
      armor: [],
      vulnerable: [],
      resist: [],
      immune: [],
      conditionImmune: [],
      speed: {
        walk: null
      },
      darkvision: null,
      size: '',
      spells: [],
      feats: [],
      startingEquipment: {
        option: 'default',
        background: {},
        class: {},
        manuals: []
        //rest: 1,
        //gp: 0,
      },
      equipment: [],
      money: {
        gp: 0,
        sp: 0,
        cp: 0
      },
      manualSteps: []
    }
  }

  const character = ref<any>(null);

  const allLoad = computed(() => spellsStore.isLoad && racesStore.isLoad && bgStore.isLoad && featsStore.isLoad && itemsStore.isLoad && classesStore.isLoad && character.value !== null && versions.value !== null);
  watch(allLoad, (newValue) => {
    if(newValue) {
      calcDatasRace(false);
      calcDatasClass(false);
      calcDatasBG(false);
      calcDatasAbilities(false);
      // calculStep();
    }
  }, {once: true});

  const reset = () => {
    if(confirm("Discard this character ?")) {
      character.value = {
        ...defaultCharacter()
      };
      step.value = 'race';
    }
  }

  const error = ref<any>({
    show: false,
    message: null
  });
  const upload = ref<any>({
    show: false,
    character: null,
    error: null
  });
  const token = ref<any>({
    show: false,
    url: null,
    error: null
  });

  const save = () => {
    download(JSON.stringify(character.value, null, 2), `${character.value.name}_jdrtools.json`, "application/json");
  }
  const openUpload = () => {
    upload.value = {
      show: true,
      character: null,
      error: null
    };
  }
  const uploadCharacter = () => {
    let u = JSON.parse(upload.value.character);
    character.value = {
      ...defaultCharacter(),
      ...u
    };
    upload.value.show = false;
    calculStep();
    lastStep();
  }
  const convert = () => {
    alert('In progress ...')
  }

  const defaultChoose = {
    additionalSpells: [],
    ability: null,
    size: null,
    languages: [],
    tools: [],
    skills: [],
    expertises: [],
    cantrips: {},
    spells: {},
    prepared: {},
    startingEquipment: [],
    startingEquipmentManual: []
  }
  const chooses = ref<any>(null);

  const logJson = () => {
    json.value = JSON.parse(JSON.stringify(character.value));
  }

  const saveStorage = function() {
    localStorage.setItem(storagekey, JSON.stringify(character.value));
    calcAllChooses();
    calculStep();
    logJson();
  };

  const getStorage = function() {
    return JSON.parse(localStorage.getItem(storagekey)||'{}');
  };

  watch(character, saveStorage, {deep: true});
  watch(() => character.value && character.value.abilities, (newValue) => {
    if(newValue) {
      calcDatasAbilities(false);
    }
  }, {deep: true});

  const calcLevel = () => {
    let lvl = 0;
    character.value.class.forEach((cl:any) => lvl += cl.level);
    character.value.level = lvl;
  }

  const json = ref<any>(racesStore.builder);
  const show = ref<any>({
    json: dev,
    character: true
  });
  const changeRace = (r: RaceBuilder) => {
    if(character.value.race.name === r.name) {
      return;
    }
    character.value.race.name = r.name;
    character.value.race.source = r.source;
    character.value.race.version = null;
    character.value.raceOptions = [];
    character.value.subrace = r.subrace == 0 ? null : {
      name: null,
      source: null
    }
    calcDatasRace();
  };
  const versions = computed(() => racesStore.getRaceByName(character.value.race.name));
  const subraces = computed(() => racesStore.getSubraceByName(character.value.race.name, character.value.race.source));
  const isLineage = computed(() => versions.value !== null && character.value.race.source && versions.value.find(v => v.source === character.value.race.source)?.lineage);
  const computedRace = computed(() => {
    if(!versions.value) return;
    const v:any = versions.value.find(v => v.source === character.value.race.source);
    if(!v) return null;
    const s:any = character.value.subrace === null || subraces.value === null ? null : subraces.value.find(s => displaySubrace(s) === character.value.subrace.name && s.source === character.value.subrace.source);
    if(isLineage && !v.languageProficiencies) {
      v.languageProficiencies = [{
        "common": true,
        "anyStandard": 1
      }];
    }
     // return v;
    let c: any = {
      ...v
    };
    c.entries = [ // force initials values
      ...v.entries
    ]
    if(s) {
      Object.keys(s).forEach((k: string) => {
        if (k in c) {
          if (s.overwrite && s.overwrite[k]) {
            c[k] = s[k];
          } else if ("string" == typeof c[k]) {
            if (c[k] !== s[k]) {
              c[k] += " " + s[k];
            }
          } else if (Array.isArray(s[k])) {
            if (k == "entries") {
              c[k].push(...s[k].filter((e: any) => !(e.data && e.data.overwrite)));
              s[k].forEach((e: any) => {
                if(e.data && e.data.overwrite) {
                  let idx = c[k].findIndex((a: any) => a.name == e.data.overwrite);
                  if (idx >= 0) c[k][idx] = e;
                  else c[k].push(e);
                }
              });
            }
            else if (k != 'ability') {
              c[k] = s[k];
            }
            else {
              c[k] = [
                ...c[k],
                ...s[k]
              ]
            }
          } else if ("object" == typeof s[k]) {
            c[k] = s[k]
          } else {
            c[k] = s[k];
          }
        } else {
          c[k] = s[k];
        }
      });
    }

    if(c._versions && c._versions[0]._abstract) {
      const abs = c._versions[0]._abstract;
      c._versions[0]._implementations.forEach((e: any) => {
        let n = abs.name;
        const a = /{{(.*?)}}/g;
        let g = a.exec(abs.name);
        if(g) n = n.replace(abs.name, e._variables[g[1]]);
        let r = abs._mod.entries.find((en:any) => en.mode == 'removeArr')?.names;

        if(c._versions.find((v:any) => v.name == n)) return;

        let nv = {
          name: n,
          _mod: {
            entries: {
              replace: r,
              items: {
                name: `${r} ${n}`,
                type: "entries",
                entries: [
                  `Damage Type: ${Damages.find(d => d.name == e._variables.damageType)?.display}`,
                ]
              },
              otherReplace: abs._mod.entries.filter((ae:any) => ae.replace && ae.items).map((ae: any) => {
                const it = ae.items;
                return {
                  type: it.type,
                  name: it.name,
                  entries: [...it.entries.map((en: any) => {
                    const a = /{{(.*?)}}/g;
                    let s = en;
                    if("string" != typeof s) return s;
                    let g;
                    while (g = a.exec(s)) {
                      s = s.replace(g[0], e._variables[g[1]]);
                    }
                    return s;
                  })]
                }
              }),
            }
          },
          _variables: e._variables,
          resist: e._variables.resist || e.resist
        }
        c._versions.push(nv);
      })
    }

    character.value.raceOptions.forEach((ro:any) => {
      const opt = c._versions.find((o:any) => o.name == ro.option);

      let entries = {
        ...opt._mod.entries.items
      };
      if(entries.name.lastIndexOf(';') > 0) {
        entries.name = entries.name.substring(entries.name.lastIndexOf(';') + 1).trim();
      }
      let idx = c.entries.findIndex((e:any) => e.name == ro.replace);
      if(idx >= 0) {
        c.entries[idx] = entries;
      }
      else {
        c.entries.push(entries);
      }

      if(opt._mod.entries.otherReplace) {
        opt._mod.entries.otherReplace.forEach((or: any) => {
          let idx = c.entries.findIndex((e:any) => e.name == or.name);
          if(idx >= 0) {
            c.entries[idx] = or;
          }
          else {
            c.entries.push(or);
          }
        })
      }

      if(opt.speed !== undefined) c.speed = opt.speed;
      if(opt.skillProficiencies !== undefined) c.skillProficiencies = opt.skillProficiencies;
      if(opt.additionalSpells !== undefined) c.additionalSpells = opt.additionalSpells;
      if(opt.darkvision !== undefined) c.darkvision = opt.darkvision;
      if(opt.resist !== undefined) c.resist = opt.resist;
    });

    return c;
  });
  const computedRaceEntries = computed(() => {
    // if(!) return;
    return computedRace.value.entries.filter((e:any) =>
      e.name &&
      !["Age","Size","Languages","Language","Superior Darkvision","Darkvision","Alignment","Speed","Appearance","Tool Proficiency"].includes(e.name) &&
      e.name.indexOf('Resistance') < 0 &&
      e.type === "entries"
      // && "string" == typeof e.entries[0] /*.find((e2: any) => "string" !== typeof e2)*/
    )
    // if(!computedRace.value.traitTags) return;
    // return computedRace.value.entries.filter((e:any) => computedRace.value.traitTags.includes(e.name));
  })
  const computedSpeed = computed(() => {
    const keys = Object.keys(character.value.speed);
    if(keys.length == 1) return `${character.value.speed.walk} ft.`
    return keys.map((s:string) => `${s} ${character.value.speed[s] === true ? character.value.speed.walk : character.value.speed[s]} ft.`).join(', ');
  })
  const displayVersion = (v: any) => {
    let s = ''
    if(v.lineage) s = 'Lineage'
    if("ability" in v) s = inlineAbility(v.ability);
    if(s.length) return `${s} (${v.source})`;
    return v.source;
  }
  const computedRaceOptions = computed(() => {
    if(!computedRace.value) return null;
    if(!computedRace.value._versions) return null;

    const options: any[] = [];
    computedRace.value._versions.forEach((v: any) => {
      if(!v.name) return;
      let choice = {
        key: v.name,
        name: v.name.substring(v.name.lastIndexOf(';') + 1).trim(),
        entries: v._mod.entries.items.entries
      };
      const opt = options.find((o:any) => o.replace === v._mod.entries.replace);
      if(!opt) {
        options.push({
          replace: v._mod.entries.replace,
          entries: computedRace.value.entries.find((e:any) => e.name === v._mod.entries.replace)?.entries.filter((e2:any) => "string" == typeof e2),
          choices: [choice]
        });
      }
      else {
        opt.choices.push(choice);
      }
    });
    if(options.length == 0) return null;
    return options;
  });

  const changeRaceOptions = (e: any, replace: string) => {
    if (!e.target.value) return;
    const option = e.target.value;
    const ro = character.value.raceOptions.find((o: any) => o.replace == replace);
    if(ro) {
      ro.option = option;
    }
    else {
      character.value.raceOptions.push({
        replace: replace,
        option: option
      });
    }

    const opt = computedRace.value._versions.find((o:any) => o.name == option);
    if(opt.skillProficiencies !== undefined) resetSkills('race');
    if(opt.languageProficiencies !== undefined) resetLanguages('race');
    // if(opt.toolsProficiencies !== undefined) resetTools('race');
    if(opt.additionalSpells !== undefined) resetSpells('race');
    if(opt.weaponProficiencies !== undefined) resetEquipmentProf('weapon', 'race');
    if(opt.armorProficiencies !== undefined) resetEquipmentProf('armor', 'race');
    calcDatasRace(false);
    return;
  }
  const isRaceOptionsCheck = (replace: string, key: string) => {
    const ro = character.value.raceOptions.find((e: any) => e.replace === replace)
    if(!ro) return false;
    return ro.option == key;
  }

  const inlineClasses = computed(() => {
    const s: string[] = [];
    character.value.class.forEach((cl:any) => {
      if(cl.name && cl.name.length > 0) s.push(`${cl.name}${cl.subclass ? ` (${cl.subclass})` : ``} lvl ${cl.level}`)
    });
    if(s.length == 0) return null;
    return s.join(', ');
  })

  const changeRaceSource = (v: any) => {
    if(character.value.race.source === v.source) {
      return;
    }
    character.value.race.source = v.source;
    character.value.race.version = displayVersion(v);
    character.value.subrace = !subraces.value || subraces.value.length == 0 ? null : {
      name: null,
      source: null
    }
    character.value.raceOptions = [];
    calcDatasRace();
  }
  const changeSubrace = (s: any) => {
    if(character.value.subrace.name === displaySubrace(s)) return;
    character.value.subrace = {
      name: displaySubrace(s),
      source: s.source
    };
    character.value.raceOptions = [];
    calcDatasRace();
  }

  const addDefaultSkills = (origin: string, profs: any) => {
    if(profs) {
      const sp = profs[0];
      Object.keys(sp).filter((k: string) => k != "choose" && k != "any").forEach((k: string) => {
        let name: any = Skills.find(s => s.prof == k)?.name;
        addSkillProf('skills', origin, name, false);
      });
    }
  }
  const addDefaultLanguage = (origin: string, profs: any) => {
    if(profs) {
      const lp = profs[0];
      Object.keys(lp).filter((k: string) => LanguagesKey.includes(k)).forEach((k: string) => {
        addSkillProf('languages', origin, k, false);
      });
    }
  }
  const addDefaultTools = (origin: string, profs: any) => {
    if(profs) {
      const tp = profs[0];
      Object.keys(tp).filter((k: string) => ToolsKey.includes(k)).forEach((k: string) => {
        addSkillProf('tools', origin, k, false);
      });
    }
  }

  const addDefaultEquipmentProf = (key: string, origin: string, profs: any) => {
    if(profs) {
      let tp;
      if(Array.isArray(profs)) {
        tp = profs;
      }
      else {
        tp = Object.keys(profs)
      }
      tp.forEach((k: any) => {
        let sk;
        if("string" == typeof k) sk = S(k).split('|')[0];
        else if(k.proficiency) sk = k.proficiency;
        else return;
        addSkillProf(key, origin, sk, false);
      });
    }
  }

  const calcDatasRace = (reset: boolean = true) => {
    if(reset) {
      resetSkills('race');
      resetLanguages('race');
      resetTools('race');
      resetSpells('race');
      resetFeat('race');
      resetEquipmentProf('weapon', 'race');
      resetEquipmentProf('armor', 'race');
      if(computedRace.value) {
        addDefaultSkills('race', computedRace.value.skillProficiencies);
        addDefaultLanguage('race', computedRace.value.languageProficiencies);
        addDefaultTools('race', computedRace.value.toolProficiencies);
      }
      // chooses.value.languages = []; //don't use push or defaultChoose it's change ...
      character.value.abilities.str.bonus = 0;
      character.value.abilities.dex.bonus = 0;
      character.value.abilities.con.bonus = 0;
      character.value.abilities.int.bonus = 0;
      character.value.abilities.wis.bonus = 0;
      character.value.abilities.cha.bonus = 0;
      character.value.speed = {
        walk: null
      }
      character.value.darkvision = null;
      character.value.size = '';
      character.value.resist = [];
      character.value.manualSteps = [];
    }
    chooses.value = {
      ...defaultChoose
    };
    const d = computedRace.value;
    if(!d) return;
    if(d.size) {
      if(d.size.length == 1)
        character.value.size = d.size[0];
      else
        chooses.value.size = d.size;
    }
    /*if(d.darkvision)*/character.value.darkvision = d.darkvision;
    if(d.speed) {
      if("number" == typeof d.speed) character.value.speed = {walk: d.speed};
      else character.value.speed = {...character.value.speed, ...d.speed};
    }
    if(d.ability) {
      d.ability.forEach((a: any) => {
        if(a.str) character.value.abilities.str.bonus = a.str;
        if(a.dex) character.value.abilities.dex.bonus = a.dex;
        if(a.con) character.value.abilities.con.bonus = a.con;
        if(a.int) character.value.abilities.int.bonus = a.int;
        if(a.wis) character.value.abilities.wis.bonus = a.wis;
        if(a.cha) character.value.abilities.cha.bonus = a.cha;
        if(a.choose) {
          chooses.value.ability = {amount: 1, ...a.choose};
          if(reset) {
            a.choose.from.forEach((f: string) => character.value.abilities[f].bonus = 0);
          }
        }
      });
      calcDatasAbilities(reset);
    }
    if(d.resist) {
      character.value.resist = [];
      d.resist.forEach((a: any) => {
        //&& !character.value.resist.find((r:string) => r == a)
        if("string" == typeof a) character.value.resist.push(a);
      })
    }
    if(d.weaponProficiencies) {
      addDefaultEquipmentProf('weapon', 'race', d.weaponProficiencies[0]);
    }
    if(d.armorProficiencies) {
      addDefaultEquipmentProf('armor', 'race', d.armorProficiencies[0]);
    }
    // if(d.entries.find((e:any) => e.name === 'Fey Ancestry') && !character.value.resist.includes('charmed')) character.value.resist = [...character.value.resist, 'charmed'];
  }

  // const changeMulticlass = (e: any, i: number) => {
  //   if(!e.target.value) return;
  //   const c = classes.value.find(cl => cl.name === e.target.value);
  //   changeClass(c, i);
  //   calcHPAverage(false);
  //   calcHPMax();
  // }
  // const changeMulticlassLevel = (e: any, i: number) => {
  //   character.value.class[i].level = parseInt(e.target.value);
  //   calcLevel();
  //   calcHPAverage(false);
  //   calcHPMax();
  // }

  const changeFirstClass = (c: any) => {
    const i = 0;
    const cl = character.value.class[i];
    if(cl.name === c.name) return;
    // if(i === 0 && character.value.class.length > 1) {
    //   character.value.class = [
    //     {
    //       ...defaultClass,
    //       level: character.value.level
    //     }
    //   ]
    // }
    character.value.leveling = [c.name];
    cl.name = c.name;
    cl.subclass = null;
    cl.dice = c.hd.faces;
    cl.features = [];
    cl.casterProgression = c.casterProgression || null;
    // cl.preparedSpells = c.preparedSpells || null;
    cl.preparedSpells = {has: c.preparedSpells != undefined};
    cl.spellcastingAbility = c.spellcastingAbility || null;
    calculSpellcasterLevel();
    character.value.manualSteps = [];
    // character.value.spells = [];
    calcDatasClass(true);
    if(i === 0) {
      setHPAverage();
    }
  }
  const changeSubclass = (e: any) => {
    if (!e.target.value) return;
    const subclass = e.target.value;
    lastClass.value.subclass = subclass;
    // set casterProgression if subclass has property
    const sub = classesStore.findSubclass(lastClass.value.name, subclass);
    if(sub && sub.casterProgression) {
      lastClass.value.casterProgression = sub.casterProgression;
      lastClass.value.preparedSpells = {has: false /*sub.preparedSpells != undefined*/};
      lastClass.value.spellcastingAbility = sub.spellcastingAbility || null;
      calculSpellcasterLevel();
    }
  }
  const calculSpellcasterLevel = () => {
    let l = 0;
    character.value.class.forEach((c: any) => {
      let clvl = 0;
      if(c.casterProgression) {
        switch(c.casterProgression) {
          case "full":
            clvl = c.level;
            break;
          case "1/2":
          case "artificer":
            clvl = Math.round(c.level / 2);
            break;
          case "1/3":
            clvl = Math.round(c.level / 3);
            break;
          case "pact":
            // Not here
            break;
          default:
            console.error(`CasterProgression ${c.casterProgression} not supported`);
            break;
        }
        l += clvl;
      }
      if(c.preparedSpells && c.preparedSpells.has) {
        c.preparedSpells.count = clvl + mod(c.spellcastingAbility);
        if(c.preparedSpells.count <= 0) c.preparedSpells.count = 1;
      }
    });
    character.value.spellcasterlevel = l;
  }

  const calcDatasClass = (reset: boolean = true) => {
    if(reset) {
      // reset choose spells, equipment, subclass ...
      resetSkills('class');
      resetLanguages('class');
      resetTools('class');
      resetSpells('class');
      resetEquipmentProf('weapon', 'class');
      resetEquipmentProf('armor', 'class');
      resetSpells('race'); // just in case
      // character.value.startingEquipment.class = {};
      changeStartingEquipment();
    }
    character.value.class.forEach((c:any, i:number) => {
      const cl = classes.value.find(c1 => c1.name === c.name);
      if(!cl) return;
      if(i === 0) {
        character.value.save = cl.proficiency;
        character.value.spellcasting = cl.spellcastingAbility ? [cl.spellcastingAbility] : [];
        if(cl.startingProficiencies) {
          addDefaultTools('class', cl.startingProficiencies.toolProficiencies)
          addDefaultEquipmentProf('weapon', 'class', cl.startingProficiencies.weapons);
          addDefaultEquipmentProf('armor', 'class', cl.startingProficiencies.armor);
        }
      }
    });
  }

  const changeBG = (b: any) => {
    if(character.value.background === b.name) return;
    character.value.background = b.name;
    calcDatasBG();
  }
  const calcDatasBG = (reset: boolean = true) => {
    if(!bg.value) return;
    if(reset) {
      resetSkills('background');
      resetLanguages('background');
      resetTools('background');
      resetSpells('background');
      resetEquipmentProf('weapon', 'background');
      resetEquipmentProf('armor', 'background');
      addDefaultSkills('background', bg.value.skillProficiencies);
      addDefaultLanguage('background', bg.value.languageProficiencies);
      addDefaultTools('background', bg.value.toolProficiencies);
      if(bg.value.weaponProficiencies) addDefaultEquipmentProf('weapon', 'background', bg.value.weaponProficiencies[0]);
      // no armorProficiencies
      character.value.startingEquipment.background = {};
    }
  }
  const resetSkills = (origin: string) => {
    character.value.skills = character.value.skills.filter((sk:any) => sk.origin != origin && sk.level == character.value.level);
    character.value.expertises = character.value.expertises.filter((sk:any) => sk.origin != origin && sk.level == character.value.level);
  }
  const addSkillProf = (key:string, origin: string, name: string, choose: boolean = true) => {
    if(!name) return;
    const o = {
      name: name,
      origin: origin,
      level: character.value.level,
      choose: choose
    }
    let cs = character.value[key].findIndex((s:any) => s.name == name);
    if(cs != -1) {
      character.value[key][cs] = {
        ...o
      }
    }
    else {
      character.value[key].push(o);
    }
  }

  const calcAllChooses = () => {
    const ch = chooses.value;
    const level = character.value.level;
    ch.skills = [];
    ch.expertises = [];
    ch.languages = [];
    ch.spells = {};
    ch.cantrips = {};
    ch.prepared = {};
    ch.tools = [];
    ch.additionalSpells = [];
    ch.startingEquipment = [];
    ch.startingEquipmentManual = [];
    ch.weapon = [];

    const lc = lastClass.value;

    if(level == 1) {
      if (computedRace.value) {
        if(computedRace.value.skillProficiencies) {
          chooseAddSkill('race', computedRace.value.skillProficiencies[0]);
        }
        if(computedRace.value.languageProficiencies) {
          chooseAddLanguage('race', computedRace.value.languageProficiencies);
        }
        if(computedRace.value.toolProficiencies) {
          chooseAddTools('race', computedRace.value.toolProficiencies[0]);
        }
      }
      if (lc) {
        const cl = classes.value.find((c:Class) => c.name === lc.name);
        if(cl) {
          if (cl.startingProficiencies.skills) {
            chooseAddSkill('class', cl.startingProficiencies.skills[0])
          }
          if (cl.startingProficiencies.toolProficiencies) {
            chooseAddTools('class', cl.startingProficiencies.toolProficiencies[0]);
          }
        }
      }
      if (bg.value) {
        if(bg.value.skillProficiencies) {
          chooseAddSkill('background', bg.value.skillProficiencies[0]);
        }
        if(bg.value.languageProficiencies) {
          chooseAddLanguage('background', bg.value.languageProficiencies);
        }
        if(bg.value.toolProficiencies) {
          chooseAddTools('background', bg.value.toolProficiencies[0]);
        }
      }

      const r = [];
      if (bg.value && bg.value.startingEquipment) {
        let values = bg.value.startingEquipment;
        r.push({
          origin: 'background',
          originName: bg.value.name,
          values: values
        });
      }
      if (computedLastClass.value && computedLastClass.value.startingEquipment.defaultData) {
        let values = character.value.startingEquipment.option == 'default' ? computedLastClass.value.startingEquipment.defaultData : [];
        r.push({
          origin: 'class',
          originName: computedLastClass.value.name,
          values: values
        });
      }
      let c = 0;
      r.forEach((startingEquipment:any) => {
        startingEquipment.values.forEach((se:any,i:number) => {
          Object.keys(se).forEach(j => {
            if(j == "_") {
              character.value.startingEquipment[startingEquipment.origin][i] = j;
            }

            let seo = se[j]
            seo.forEach((item:any) => {
              if(item.equipmentType) {
                for (let k = 1; k <= (item.quantity || 1); k++) {
                  if(character.value.startingEquipment[startingEquipment.origin][i] == j) {
                    ch.startingEquipmentManual[c] = {
                      equipmentType: item.equipmentType,
                      origin: startingEquipment.origin
                    };
                  }
                  else if(character.value.startingEquipment.manuals && character.value.startingEquipment.manuals[c]) {
                    character.value.startingEquipment.manuals[c] = null;
                  }
                  c++;
                }
              }
            })
          });
        })
      })
      ch.startingEquipment = r;
    }

    if(computedRace.value) {
      if (computedRace.value.additionalSpells) {
        chooseAddSpells('race', computedRace.value.name, computedRace.value.additionalSpells);
      }
    }

    // Check from feats, subclass ...
    character.value.feats.filter((f:any) => f.level == level && f.name).forEach((f:any) => {
      const feat = featsStore.findByName(f.name);
      if(feat) {
        if (feat.skillProficiencies) chooseAddSkill('feat', feat.skillProficiencies[0]);
        if (feat.expertise) chooseAddExpertise('feat', feat.expertise[0]);
        if (feat.languageProficiencies) chooseAddLanguage('feat', feat.languageProficiencies);
        if (feat.toolProficiencies) chooseAddTools('feat', feat.toolProficiencies[0]);
        if (feat.additionalSpells) chooseAddSpells('feat', f.name, feat.additionalSpells, f.option);
      }
    })

    // Spells
    if(lc && (spellSlotsInfo.value || spellSlotsPactInfo.value)) {
      const cantrip = classesStore.cantripProgression(lc.name, lc.subclass, lc.level);
      const known = classesStore.spellsKnownProgression(lc.name, lc.subclass, lc.level);

      let max = null;
      if(spellSlotsInfo.value) max = spellSlotsInfo.value.max;
      if(spellSlotsPactInfo.value) max = spellSlotsPactInfo.value.max;

      if (cantrip) {
        const selected = character.value.spells.filter((s: any) => s.origin == "class" /*&& s.level == lc.level*/ && s.spellslot == 0 && s.choose).length;
        ch.cantrips = {
          known: cantrip,
          selected: selected,
          from: spellsStore.spellsChoice(lastClass.value.name, 0)
        };
      }
      if(max) {
        if (known > 0) {
          const selected = character.value.spells.filter((s: any) => s.origin == "class" /*&& s.level == lc.level*/ && s.spellslot > 0 && s.choose).length;
          ch.spells = {
            known: known,
            selected: selected,
            maxlevel: max,
            prepared: lc.preparedSpells.count && lc.preparedSpells.count > 0 ? false : true,
            from: {}
          }
          for (let l = 1; l <= max; l++) {
            ch.spells.from[l] = spellsStore.spellsChoice(lastClass.value.name, l);
          }
        }
        if (lc.preparedSpells.count && lc.preparedSpells.count > 0) {
          const selected = character.value.spells.filter((s: any) => s.origin == "class" /*&& s.level == lc.level*/ && s.spellslot > 0 && s.choose && s.prepared).length;
          ch.prepared = {
            known: lc.preparedSpells.count,
            selected: selected,
            maxlevel: max,
            onlyPrepared: false,
            from: {}
          }
          if (known == -1) {
            for (let l = 1; l <= max; l++) {
              ch.prepared.from[l] = spellsStore.spellsChoice(lastClass.value.name, l);
            }
          } else if (known > 0) {// wizard ... need to get the previusly chooses
            ch.prepared.onlyPrepared = true;
            for (let l = 1; l <= max; l++) {
              const spellsChooses = character.value.spells.filter((s: any) => s.origin == "class" && s.spellslot == l && s.choose).map((s: any) => s.name);
              ch.prepared.from[l] = spellsStore.spellsChoiceFromList(spellsChooses);
            }
          }
        }
      }
    }
  }
  const chooseAddSkill = (origin:string, sp: any) => {
    if(!sp) return;
    const ch = chooses.value.skills;
    if(sp.choose && sp.choose.from) {
      ch.push({
        origin: origin,
        count: sp.choose.count || 1,
        from: Skills.filter(s => sp.choose.from.includes(s.prof)).map(s => s.name)
      });
    }
    else if(sp.any) {
      ch.push({
        origin: origin,
        count: sp.any,
        from: Skills.map(s => s.name)
      });
    }
    else {
      Object.keys(sp).filter((k:any) => {
        // ch.push({
        //   origin: origin,
        //   count: sp.any,
        //   from: Skills.find(s => s.name == k)
        // });
      })
    }
  }
  const chooseAddExpertise = (origin:string, sp: any) => {
    if (!sp) return;
    const ch = chooses.value.expertises;
    ch.push({
      origin: origin,
      count: sp.anyProficientSkill,
      from: character.value.skills.map((s:any) => s.name)
    });
  }

  const chooseAddLanguage = (origin:string, lp: any) => {
    if(!lp) return;
    const ch = chooses.value.languages;
    lp.forEach((l:any) => {
      Object.keys(l).filter(k => !LanguagesKey.includes(k)).forEach(k => {
        if(k === "anyStandard") {
          ch.push({
            origin: origin,
            count: l.anyStandard,
            from: LanguagesStandard.map(l => l.key)
          });
        }
        else if(k === "any") {
          ch.push({
            origin: origin,
            count: l.any,
            from: LanguagesKey
          });
        }
        else if(k === "choose") {
          ch.push({
            origin: origin,
            ...l.choose
          });
        }
        else {
          console.error(`LanguageKey not supported`, k);
        }
      });
    });
  }
  const resetLanguages = (origin: string) => {
    character.value.languages = character.value.languages.filter((sk:any) => sk.origin != origin && sk.level == character.value.level);
  }

  const getToolsFrom = (k: string): string[] => {
    if(k == "any") return ToolsKey;
    if(k == "anyArtisansTool" || k == "artisan's tools") return ToolsArtisan.map(l => l.key);
    if(k == "anyMusicalInstrument" || k == "musical instrument") return ToolsInstrument.map(l => l.key);
    if(k == "anyGamingSet" || k == "gaming set") return ToolsGamingsets.map(l => l.key);
    console.error(`ToolsKey not supported`, k);
    return [];
  }

  const chooseAddTools = (origin:string, l: any) => {
    if(!l) return;
    const ch = chooses.value.tools;
    // lp.forEach((l:any) => {
    Object.keys(l).filter(k => !ToolsKey.includes(k)).forEach(k => {
      if(k == "choose") {
        const from: string[] = [];
        l.choose.from.forEach((f:string) => {
          if(ToolsKey.includes(f)) from.push(f);
          else from.push(...getToolsFrom(f));
        });
        ch.push({
          origin: origin,
          count: l.choose.count || 1,
          from: from
        });
      }
      else {
        ch.push({
          origin: origin,
          count: l[k] || 1,
          from: getToolsFrom(k)
        });
      }
    });
    // });
  }
  const resetTools = (origin: string) => {
    character.value.tools = character.value.tools.filter((sk:any) => sk.origin != origin && sk.level == character.value.level);
  }

  const extractSpellslotsFrom = (k: any, spellslots: any, from: any, origin: string) => {
    if ("string" == typeof k) {
      const n = k.indexOf('#') == -1 ? k : k.substring(0, k.indexOf('#'));
      const s = spellsStore.findByName(n);
      if (s) {
        from[s.level].push(s);
        spellslots[s.level]++;
        addSpell(s.name, s.level, false, true, origin);
      }
    }
    else if (k.choose) {
      if ("string" == typeof k.choose) {
        const split = k.choose.split("|");
        let resClass = null;
        let resLvl = null;
        split.forEach((s: string) => {
          const a = /([^=]*)=([^=]*)/;
          const g = a.exec(s);
          if (g && g.length == 3) {
            if (g[1] == 'class') resClass = g[2];
            if (g[1] == 'level') resLvl = parseInt(g[2]);
          }
        })
        if (resClass != null && resLvl != null) {
          const spls = spellsStore.spellsChoice(resClass, resLvl);
          from[resLvl].push(
              ...spls
          );
          spellslots[resLvl] += k.count || 1;
        }
      }
      else if(k.choose.from) {
        k.choose.from.forEach((f:string) => {
          const s = spellsStore.findByName(f);
          if (s) {
            from[s.level].push(s);
            spellslots[s.level] = k.choose.count || 1;
            // addSpell(s.name, s.level, tru, true, origin);
          }
        })
      }
      else {
        console.error('Wrong format additionalSpell', k.choose);
      }
    }
  }

  const chooseAddSpells = (origin: string, originName: string, as: any, option:string|null = null) => {
    if(!as) return;
    const ch = chooses.value.additionalSpells;
    let indexChoice = null;
    if(as.length == 1 && !option) {
      indexChoice = 0;
    }
    else if(option) {
      indexChoice = as.findIndex((a:any) => a.name == option);
    }
    let o = {
      origin: origin,
      originName: originName,
      option: option,
      optionChoice: as.length > 1 ? as.map((a:any) => a.name) : null,
      spells: [] as any[]
    }
    if(indexChoice != null) {
      const spells: any = [];

      let c = as[indexChoice];
      let spellslots: any = {};
      let from: any = {};

      for (let i = 0; i <= 9; i++) {
        spellslots[i] = 0;
        from[i] = [];
      }

      if(c.known) {
        Object.keys(c.known).forEach(kn => {
          if(kn == "_" || kn == character.value.level) {
            if(c.known[kn].rest) {
              Object.keys(c.known[kn].rest).forEach((o: any) => {
                c.known[kn].rest[o].forEach((k: any) => extractSpellslotsFrom(k, spellslots, from, origin));
              })
            }
            else if(c.known[kn]._) {
              c.known[kn]._.forEach((k: any) => extractSpellslotsFrom(k, spellslots, from, origin));
            }
            else {
              c.known[kn].forEach((k: any) => extractSpellslotsFrom(k, spellslots, from, origin));
            }
          }
        })
      }
      if(c.innate) {
        Object.keys(c.innate).forEach(kn => {
          if(kn == "_" || kn == character.value.level) {
            let innate = c.innate[kn];
            if(Array.isArray(innate)) {
              innate.forEach((k: any) => extractSpellslotsFrom(k, spellslots, from, origin));
            }
            if (innate.will) {
              innate.will.forEach((k: any) => extractSpellslotsFrom(k, spellslots, from, origin));
            }
            if (innate.ritual) {
              innate.ritual.forEach((k: any) => extractSpellslotsFrom(k, spellslots, from, origin));
            }
            if (innate.daily) {
              Object.keys(innate.daily).forEach((o: any) => {
                innate.daily[o].forEach((k: any) => extractSpellslotsFrom(k, spellslots, from, origin));
              })
            }
            if (innate.rest) {
              Object.keys(innate.rest).forEach((o: any) => {
                innate.rest[o].forEach((k: any) => extractSpellslotsFrom(k, spellslots, from, origin));
              })
            }
          }
        });
        // let innate = c.innate._;
      }
      if(c.expanded && (spellSlotsPactInfo.value != null || spellSlotsInfo.value != null)) {
        Object.keys(c.expanded).forEach(kn => {
          if(spellSlotsInfo.value) {
            if(spellSlotsInfo.value[kn] <= 0) return;
          }
          if(spellSlotsPactInfo.value) {
            if(spellSlotsPactInfo.value.max < parseInt(kn.substring(1))) return;
          }
          c.expanded[kn].forEach((k: any) => extractSpellslotsFrom(k, spellslots, from, origin));
        })
      }

      Object.keys(spellslots).forEach(spellslot => {
        if(from[spellslot] && from[spellslot].length > 0) {
          spells.push({
            spellslot: spellslot,
            count: spellslots[spellslot],
            selected: character.value.spells.filter((s:any) => s.origin == origin && s.originName == originName && s.level == character.value.level && s.spellslot == spellslot).length,
            from: from[spellslot]
          });
        }
      })

      o.spells = spells;
    }
    ch.push(o);
  }

  const changeOption = (origin: string, originName: string, option: any) => {
    let item = null;
    if(origin == 'feat') {
      item = character.value.feats.find((s:any) => s.name == originName);
      character.value.spells = character.value.spells.filter((s:any) => !(s.origin == origin && s.originName == originName));
    }
    else {
      console.error('changeOption', 'origin not supported', origin);
    }
    if(item) {
      item.option = option;
    }
  }

  const resetSpells = (origin: string) => {
    character.value.spells = character.value.spells.filter((sk:any) => sk.origin != origin && sk.level == character.value.level);
  }

  const languagesChoices = computed(() => {
    const from = fromProfs('languages', true);
    const ret = [];
    if(LanguagesStandard.find(l => from.includes(l.key))) {
      ret.push({
        name: "Standard",
        choices: LanguagesStandard
      })
    }
    if(LanguagesExotic.find(l => from.includes(l.key))) {
      ret.push({
        name: "Exotic",
        choices: LanguagesExotic
      })
    }
    return ret;
  });
  const toolsChoices = computed(() => {
    const from = fromProfs('tools', true);
    const ret = [];
    if(ToolsOther.find(l => from.includes(l.key))) {
      ret.push({
        name: "Others",
        choices: ToolsOther
      })
    }
    if(ToolsArtisan.find(l => from.includes(l.key))) {
      ret.push({
        name: "Artisan's tools",
        choices: ToolsArtisan
      })
    }
    if(ToolsInstrument.find(l => from.includes(l.key))) {
      ret.push({
        name: "Musical instruments",
        choices: ToolsInstrument
      })
    }
    if(ToolsGamingsets.find(l => from.includes(l.key))) {
      ret.push({
        name: "Gaming sets",
        choices: ToolsGamingsets
      })
    }

    return ret;
  });

  const resetFeat = (origin: string) => {
    const level = character.value.level;
    character.value.feats = character.value.feats.filter((sk:any) => sk.origin != origin && sk.level == level);
    character.value.abilities.improvments = character.value.abilities.improvments.filter((ip:any) => !(ip.origin == 'feat' && ip.level == level));
    resetSkills('feat');
    resetLanguages('feat');
    resetTools('feat');
    resetSpells('feat');
    resetEquipmentProf('weapon', 'feat');
    resetEquipmentProf('armor', 'feat');
  }

  const classes = computed(() => classesStore.getDefaults);
  const backgrounds = computed(() => bgStore.getDefaults);
  const feats = computed(() => featsStore.getDefaults(character.value));
  const bg = computed(() => backgrounds.value.find(b => b.name === character.value.background));
  const bgFeatures = computed(() => {
    if(!bg.value) return null;
    if(!bg.value.entries) return null;
    return bg.value.entries.filter((be:any) => be.type == "entries" && be.data && be.data.isFeature);
  });
  const bgStep = computed(() => ['background'].includes(step.value));
  const equipmentStep = computed(() => ['equipment'].includes(step.value));
  // const computedClasses = computed(() => classes.value.filter((cl:any) => character.value.class.map((x:any) => x.name).includes(cl.name)))

  const isSpendMode = computed(() => character.value && character.value.abilities.option === 'spend');
  const rolls = ref<any[]>([]);
  watch(isSpendMode, (newValue) => {
    if(newValue === false) {
      rolls.value = [
        abilityRoll(),
        abilityRoll(),
        abilityRoll(),
        abilityRoll(),
        abilityRoll(),
        abilityRoll(),
      ];
    }
  });

  const costPoint: any = {
    8  : 0,
    9  : 1,
    10 : 2,
    11 : 3,
    12 : 4,
    13 : 5,
    14 : 7,
    15 : 9
  }
  const abPoints = computed(() => {
    if(!isSpendMode) return null;
    let total = 0;
    Abilities.forEach(a => total += costPoint[character.value.abilities[a.key].base]);
    return total;
  });
  const checkBonus = () => {
    let t = 0;
    let t2 = 0;
    for (const i in Abilities) {
      const a = Abilities[i].key;
      t += character.value.abilities[a].bonus;
      if(chooses.value.ability && chooses.value.ability.from.includes(a) && character.value.abilities[a].bonus !== 0) {
        t2 += 1;
      }
    }
    if(isLineage.value) return t === 3;
    if(!chooses.value.ability) return true;
    return t2 == chooses.value.ability.count;
  };
  const setBonusLineage = (key:string, bonus: number) => {
    let cb = character.value.abilities[key].bonus;
    if(cb === bonus) {
      character.value.abilities[key].bonus = 0;
    }
    else {
      character.value.abilities[key].bonus = bonus;
    }
  }
  const disabledBonusLineage = (key:string, bonus: number) => {
    let t = 0;
    for (const i in Abilities) {
      const a = Abilities[i].key;
      t += character.value.abilities[a].bonus;
    }

    if(bonus === 2) {
      for (const i in Abilities) {
        const a = Abilities[i].key;
        if(a !== key && character.value.abilities[a].bonus === 2) { // || t >= 2
          return true;
        }
      }
      if(t === 1) return false
      if(t === 2 && character.value.abilities[key].bonus === 1) return false
      if(t > 1 && character.value.abilities[key].bonus !== 2) return true;
    }
    else if(bonus === 1) {
      if(t <= 3 && character.value.abilities[key].bonus === 2) return false
      if (t >= 3 && character.value.abilities[key].bonus !== 1) return true
    }
    return false;
  }
  const disabledBonusChoose = (key:string) => {
    let t = 0;
    for (const i in Abilities) {
      const a = Abilities[i].key;
      if(chooses.value.ability.from.includes(a) && character.value.abilities[a].bonus > 0) {
        t += 1;
      }
    }
    if (t >= chooses.value.ability.count && character.value.abilities[key].bonus === 0) return true
    return false;
  };
  const modCon = computed(() => mod('con'));
  const modInt = computed(() => mod('int'));
  const modWis = computed(() => mod('wis'));
  const modCha = computed(() => mod('cha'));
  const prof = computed(() => character.value.level <= 4 ? 2 : character.value.level <= 8 ? 3 : character.value.level <= 12 ? 4 : character.value.level <= 16 ? 5 : 6)
  watch(modCon, (newValue) => {
    if(newValue) {
      calcHPMax();
    }
  });
  watch(() => [modInt.value,modWis.value,modCha.value], (newValue) => {
    if (newValue) calculSpellcasterLevel();
  });

  const addOtherClass = () => {
    const nc = {
      ...defaultClass
    }
    character.value.class.push(nc);
  }
  const removeOtherClass = (i: number) => {
    character.value.class = character.value.class.filter((c:any,j:number) => j !== i);
    calcLevel();
    calcHPMax();
  }
  const lastClass = computed(() => {
    let n = character.value.leveling.at(-1);
    let cl = character.value.class.find((cl:any) => cl.name == n);
    if(!cl.name) return null;
    return cl;
  });
  const computedLastClass = computed(() => lastClass.value ? classes.value.find((c:Class) => c.name === lastClass.value.name) : null);
  const chooseSubclass = computed(() => {
    return lastClass.value && lastClass.value.level == classesStore.getLevelSubclass(lastClass.value.name);
  });
  const classFeatures = computed(() => {
    if(!lastClass.value) return null;
    let cl = lastClass.value;
    return classesStore.getFeatures(cl.name, cl.subclass, cl.level);
  });
  const filterOptions = (name: string, from: any[]) => {
    if(!from) return [];
    // if(!search.value[name]) return from;
    const s = !search.value[name] ? "" : search.value[name].toLowerCase();
    const hasAbilities = search.value[name+'-Abilities'] ?? false;
    const hasSpells = search.value[name+'-Spells'] ?? false;

    const hasConcentration = search.value[name+'-Concentration'] ?? false;
    const hasRitual = search.value[name+'-Ritual'] ?? false;

    return from.filter((f:any) =>
      (
        (f.name && f.name.toLowerCase().includes(s)) ||
        (f.shortName && f.shortName.toLowerCase().includes(s)) ||
        (f.info && "string" == typeof f.info && f.info.toLowerCase().includes(s)) ||
        (f.entries && (JSON.stringify(f.entries)).toLowerCase().includes(s)) ||
        (f.prerequisite && f.prerequisite.join(' ').toLowerCase().includes(s))
      )
      &&
      (!hasAbilities || f.hasAbility)
      &&
      (!hasSpells || f.hasSpells)
      &&
      (!hasConcentration || f.duration[0].concentration)
      &&
      (!hasRitual || f.meta?.ritual)
    );
  }

  const setHPAverage = () => {
    calcHPAverage();
    calcHPMax();
  }
  const calcHPAverage = (reset: boolean = true) => {
    character.value.class.forEach((c:any, i:number) => {
      if(reset) c.hps = [];
      else c.hps = c.hps.filter((h:number, j: number) => j < c.level);
      if(c.level && c.dice) {
        for (let l = 1; l <= c.level; l++) {
          if(character.value.hp.option === 'average' || !c.hps[l-1]) {
            if (i === 0 && l === 1) {
              c.hps[l - 1] = c.dice;
            } else {
              c.hps[l - 1] = (c.dice / 2) + 1;
            }
          }
        }
      }
    });
  }
  const changeHP = (e: any/*, i: number, j: number*/) => {
    if (!e.target.value) return;
    //character.value.class[i].hps[j] = parseInt(e.target.value);
    lastClass.value.hps[lastClass.value.hps.length - 1] = parseInt(e.target.value);
    calcHPMax();
  }
  const calcHPMax = (force: boolean = false) => {
    if(!force && !validAbilities.value) {
      character.value.hp.max = 0;
      return;
    }

    let hp = 0;
    character.value.class.forEach((c:any, i:number) => {
      c.hps.forEach((d:number) => hp += Math.max(d+modCon.value,1));
    });
    character.value.hp.max = hp;
  }

  const fromProfs = (key:string, readonly: boolean = false) => {
    const from: string[] = [];
    if (chooses.value[key]) {
      chooses.value[key].forEach((ch: any) => {
        const count = countProfByOrigin(key, ch.origin);
        if(ch.from) {
          if (readonly) {
            from.push(...ch.from);
          }
          else {
            ch.count > count && from.push(...ch.from);
          }
        }
      });
    }
    if(readonly) {
      const auto = character.value[key].filter((t:any) => !t.choose).map((t:any) => t.name);
      if(auto.length > 0) from.push(...auto);
    }
    return from;
  }
  const calculSkills = computed(() => Skills.map(s => {
    const skill = character.value.skills.find((c:any) => c.name == s.name);
    const expertise = character.value.expertises.find((c:any) => c.name == s.name);
    const from = fromProfs('skills');
    const fromExp = fromProfs('expertises');

    let profDisabled = !from.includes(s.name);
    let expDisabled = !fromExp.includes(s.name);
    let profSelected = false;
    let expSelected = false;
    if(skill) {
      profDisabled = skill.choose == false;
      profSelected = true;
    }
    if(expertise) {
      expDisabled = expertise.choose == false;
      expSelected = true;
    }
    return {
      ...s,
      allDisabled: profDisabled && expDisabled && !profSelected,
      profDisabled: profDisabled,
      expDisabled: expDisabled,
      profSelected: profSelected,
      expSelected: expSelected,
      mod: fn(mod(s.attribute.substring(0,3)) + (profSelected?prof.value:0) + (expSelected?prof.value:0) )
    }
  }))
  const changeProf = (key:string, name:string) => {
    const cs = character.value[key].find((s:any) => s.name == name);
    if(cs) {
      if(key == 'skills') {
        character.value.skills = character.value.skills.filter((s: any) => s.name != name);
        character.value.expertises = character.value.expertises.filter((s: any) => s.name != name);
      }
      else {
        character.value[key] = character.value[key].filter((s: any) => s.name != name);
      }
    }
    else {
      const chk = chooses.value[key].filter((s:any) => s.from.includes(name));
      if(chk.length == 0) return
      chk.every((ch:any) => {
        const count = countProfByOrigin(key,ch.origin);
        if(count >= ch.count) return true;
        addSkillProf(key, ch.origin, name);
        return false;
      })
    }
  }
  const countProfByOrigin = (key:string, origin: string) => {
    return character.value[key].filter((s:any) => s.origin == origin && s.choose).length;
  }
  const displayChoosesProf = (key: string, origin: string) => {
    const c = chooses.value[key].find((sk:any) => sk.origin == origin)
    if(!c) {
      return null;
    };
    if(countProfByOrigin(key, origin) != c.count) {
      return null;
    };
    const s: string[] = [];
    const profs = character.value[key].filter((sk:any) => sk.origin == origin && sk.level == character.value.level).map((sk:any) => sk.name);
    profs.forEach((a:string) => {
      if(key == "skills" || key == "expertises") {
        const sk: any = Skills.find(s => s.name == a);
        s.push(`${sk.display} (${sk.attribute.substring(0, 3)})`);
      }
      else if(key == "languages") {
        const sk: any = LanguagesAll.find(s => s.key == a);
        s.push(`${sk.name}`);
      }
      else if(key == "tools") {
        const sk: any = ToolsAll.find(s => s.key == a);
        s.push(`${sk.name}`);
      }
      else {
        console.error('KeyNotSupported', key);
      }
    })
    return s.join(', ');
  }
  const computedSkillsRace = computed(() => displayChoosesProf('skills','race'));
  const computedSkillsBG = computed(() => displayChoosesProf('skills','background'));
  const computedSkillsClass = computed(() => displayChoosesProf('skills','class'));  
  const computedSkillsFeat = computed(() => displayChoosesProf('skills','feat'));
  const computedExpertisesClass = computed(() => displayChoosesProf('expertises','class'));
  const computedExpertisesFeat = computed(() => displayChoosesProf('expertises','feat'));
  const computedLangRace = computed(() => displayChoosesProf('languages','race'));
  const computedLangBG = computed(() => displayChoosesProf('languages','background'));
  const computedToolsRace = computed(() => displayChoosesProf('tools','race'));
  const computedToolsBG = computed(() => displayChoosesProf('tools','background'));
  const computedToolsClass = computed(() => displayChoosesProf('tools','class'));
  const computedToolsFeat = computed(() => displayChoosesProf('tools','feat'));

  const openToken = () => {
    token.value = {
      show: true,
      error: null,
      url: character.value.appearance
    };
  }
  const changeToken = async () => {
    // debugger;
    let check = false;
    let url = token.value.url ?? "";
    // url = prompt("URL of your token", );
    if(url == null || url == "") {
      check = true;
    }
    else if(url.startsWith("http")) {
      check = true;
    }
    else {
      token.value.error = "Start with http:// or https://";
    }

    if(!check) {
      return;
    }

    if(url == null || url === character.value.appearance) {
      token.value.show = false;
      return;
    }
    if(url == "") {
      character.value.appearance = null;
      token.value.show = false;
      return;
    }
    let e = "URL not valid or accessible";
    try {
      const response = await fetch(url);
      if (response.ok) {
        character.value.appearance = url;
        token.value.show = false;
      }
      else {
        token.value.error = e;
      }
    }
    catch {
      token.value.error = e;
    }
  }

  const changeFeats = (e: any, origin: string) => {
    // resetLanguages('feat');
    // resetTools('feat');
    resetFeat('feat');
    const level = character.value.level;
    if (!e.target.value) return;
    const name = e.target.value;
    const ft = character.value.feats.find((f:any) => f.origin == origin && f.level == level);
    if(ft) ft.name = name;
    else {
      character.value.feats.push({
        origin: origin,
        level: level,
        name: name
      })
    }
    // clear / improve if only one ability
    const imps = character.value.abilities.improvments;
    character.value.abilities.improvments = imps.filter((ip:any) => !(ip.origin == 'feat' && ip.level == level));

    const feat = featsStore.findByName(name);
    if(feat == null) return;
    if(feat.ability && feat.ability[0].choose === undefined) {
      Object.keys(feat.ability[0]).forEach((a:any) => {
        improveAbility(a, 'feat');
      });
    }
    addDefaultSkills('feat', feat.skillProficiencies);
    addDefaultLanguage('feat', feat.languageProficiencies);
    addDefaultTools('feat', feat.toolProficiencies);

    if(feat.weaponProficiencies) addDefaultEquipmentProf('weapon', 'feat', feat.weaponProficiencies[0]);
    if(feat.armorProficiencies) addDefaultEquipmentProf('armor', 'feat', feat.armorProficiencies[0]);
  }
  const isFeatsCheck = (origin: string, name: string) => {
    const level = character.value.level;
    return character.value.feats.find((f:any) => f.origin == origin && f.level == level && f.name == name) !== undefined;
  }
  const improveAbility = (ability: string, origin: string) => {
    const level = character.value.level;
    if(!character.value.abilities.improvments) character.value.abilities.improvments = [];
    const imps = character.value.abilities.improvments;

    const f = imps.find((ip:any) => ip.origin == origin && ip.level == level && ip.ability == ability);
    if(f) {
      character.value.abilities.improvments = imps.filter((ip:any) => !(ip.origin == origin && ip.level == level && ip.ability == ability));
      return;
    }

    const limit = origin == 'leveling' ? 2 : 1;
    const current = imps.filter((ip:any) => ip.origin == origin && ip.level == level);
    const no = {
      origin: origin,
      level: level,
      ability: ability
    };
    if(current.length == 0 || (current.length == 1 && limit == 2)) {
      imps.push(no);
    }
    else if(current.length == 1 && limit == 1) {
      imps[0] = no;
    }
  }

  const changeFeature = (e: any, feature: string, limit: number) => {
    if (!e.target.value) return;
    const option = e.target.value;
    const fts: any[] = lastClass.value.features;
    const i = fts.findIndex((f:any) => f.name == feature);
    let choices: string[] = [];
    if(limit == 1) {
      choices = [option];
    }
    else {
      choices = fts[i] ? [...fts[i].choices] : [];
      if(e.target.checked) choices.push(e.target.value);
      else choices = choices.filter((c:string) => c !== e.target.value);
    }
    if(i == -1) {
      fts.push({
        name: feature,
        choices: choices
      });
    }
    else {
      fts[i].choices = choices;
    }
  }
  const isFeatureCheck = (feature: string, option: string) => {
    const ft = lastClass.value.features.find((f:any) => f.name == feature);
    if(ft == null) return false;
    if(ft.choices.length == 0) return false;
    return ft.choices.includes(option);
  }
  const isFeatureDisabled = (feature: string, limit: number, option: string) => {
    if(isFeatureCheck(feature, option)) return false;
    return limit > 1 && lastClass.value.features.find((f:any) => f.name == feature)?.choices.length >= limit;
  }

  const isOtherProfCheck = (key:string, name: string) => {
    return character.value[key].find((f:any) => f.name == name) !== undefined;
  }
  const isOtherProfDisabled = (key:string, name: string) => {
    if(character.value[key].find((f:any) => f.name == name && !f.choose) !== undefined) return true;
    if(isOtherProfCheck(key, name)) return false;
    return !fromProfs(key).includes(name);
  }

  const spellSlotsInfo = computed(() => spellSlots(character.value.spellcasterlevel));
  const spellSlotsPactInfo = computed(() => {
    if(lastClass.value && lastClass.value.casterProgression == "pact") {
      return spellSlotsPact(lastClass.value.level);
    }
    // if spellcasting = pact
  });

  const computedSpells = computed(() => {/*spellsStore.spellsChoiceFromList(character.value.spells.map((s:any) => s.name))*/
    if(character.value && character.value.spells) {
      return character.value.spells.map((s:any) => {
        return {
          ...s,
          info: spellsStore.findByName(s.name)?.info
        }
      })
    }
  });

  const changeSpell = (e: any, spellSlot: number, prepared:boolean = true, origin:string = "class", originName:string|null = null) => {
    if (!e.target.value) return;
    const name = e.target.value;
    const spells = character.value.spells;
    if(e.target.checked) {
      addSpell(name, spellSlot, true, prepared, origin, originName);
    }
    else {
      character.value.spells = spells.filter((s:any) => !(s.name == name && s.choose));
    }
  }
  const addSpell = (name: string, spellSlot: number, choose: boolean = true, prepared:boolean = true, origin:string = "class", originName:string|null = null) => {
    if(character.value.spells.find((f:any) => f.name == name) == undefined) {
      if(origin == 'class' && originName == null) {
        originName = lastClass.value.name;
      }
      if(!['race','background'].includes(name) && originName == null) {
        throw new Error("Empty originName");
      }

      character.value.spells.push({
        name: name,
        origin: origin,
        originName: originName,
        level: character.value.level,
        spellslot: spellSlot,
        choose: choose,
        prepared: prepared
      })
    }
  }

  const changeSpellPrepared = (e: any) => {
    if (!e.target.value) return;
    const name = e.target.value;
    const sp = character.value.spells.find((f:any) => f.name == name);
    sp.prepared = e.target.checked;
  }
  const isSpellCheck = (name: string) => {
    return character.value.spells.find((f:any) => f.name == name) !== undefined;
  }
  const isSpellPrepared = (name: string) => {
    return character.value.spells.find((f:any) => f.name == name && f.prepared) !== undefined;
  }
  const isSpellDisabled = (name: string, origin: string = "class", originName: string|null = null) => {
    return character.value.spells.find((f:any) => f.name == name && (!f.choose || f.origin != origin || (originName != null && f.originName != originName))) !== undefined;
  }

  const changeStartingEquipment = (e :any = null) => {
    const se = character.value.startingEquipment;
    se.gp = null;
    se.class = {};
    se.manuals = !se.manuals ? [] : se.manuals.filter((sem: any) => sem != null && sem.origin != 'class');
    se.option = e ? e.target.value : 'default';
    if(se.option == 'gold') {
      newManuelItem();
    }
  }
  const addManualItem = (i: number, item: string|null, quantity: number = 1, origin: string = '') => {
    const se = character.value.startingEquipment;
    if(!se.manuals) se.manuals = [];
    se.manuals[i] = {
      key: item,
      quantity: quantity,
      origin: origin
    };
    calculGoldManual();
  };
  const changeItemQuantity = (i: number, q: number = 1) => {
    const se = character.value.startingEquipment.manuals;
    if(se[i]) {
      se[i].quantity = Math.max(q, 1);
    }
    else {
      se[i] = {
        key: null,
        quantity: Math.max(q, 1)
      };
    }
    calculGoldManual();
  }
  const removeItem = (i: number) => {
    const me = character.value.startingEquipment.manuals;
    me.splice(i, 1);
    chooses.value.startingEquipmentManual.splice(i, 1);
    calculGoldManual();
  }
  const newManuelItem = () => {
    const se = character.value.startingEquipment.manuals;
    addManualItem(se.length, null, 1, 'class');
  }
  const rollStartingGold = () => {
    if(!computedLastClass.value) return;
    character.value.startingEquipment.gp = rollFormula(S(computedLastClass.value.startingEquipment.goldAlternative));
    calculGoldManual();
  }
  const calculGoldManual = () => {
    const se = character.value.startingEquipment;
    if(se.option == 'gold') {
      se.rest = se.gp * 100;
      se.manuals.forEach((e: any, i: number) => {
        if(e != null && e.key != null) {
          const it = itemsStore.findByKey(e.key);
          if(!it || !it.value || e.quantity <= 0) return;
          se.rest = se.rest - (it.value * e.quantity);
        }
      });
    }
  }

  const resetEquipmentProf = (key: string, origin: string) => {
    character.value[key] = character.value[key].filter((sk:any) => sk.origin != origin && sk.level == character.value.level);
  }
  const itemKeyToValue = (key:string) => {
    return key.split('|')[0].toLowerCase();
  }
  const itemsProf = computed(() => {
    if(!character.value) return null;
    return {
      armor: character.value.armor,
      weapon: character.value.weapon,
      tools: character.value.tools
    }
  });
</script>

<template>
  <div v-if="!allLoad">
    <p class="m-0 fst-italic">Loading all datas ...</p>
    <p class="m-0"><i class="fa" :class="faState(racesStore.isLoad)" /> Races</p>
    <p class="m-0"><i class="fa" :class="faState(spellsStore.isLoad)" /> Spells</p>
    <p class="m-0"><i class="fa" :class="faState(bgStore.isLoad)" /> Backgrounds</p>
    <p class="m-0"><i class="fa" :class="faState(classesStore.isLoad)" /> Classes</p>
    <p class="m-0"><i class="fa" :class="faState(featsStore.isLoad)" /> Feats</p>
    <p class="m-0"><i class="fa" :class="faState(itemsStore.isLoad)" /> Items</p>
    <p class="m-0"><i class="fa" :class="faState(character !== null)" /> Character</p>
  </div>
  <div v-else>
    <template v-if="dev">
      <div class="btn-group btn-group-sm mb-1 d-flex align-items-center">
        <button class="btn btn-secondary" @click="logJson">logJson</button>
        <button class="btn btn-secondary" @click="json = computedRace">computedRace</button>
        <button class="btn btn-secondary" @click="json = computedRaceOptions">computedRaceOptions</button>
        <button class="btn btn-secondary" @click="json = chooses.additionalSpells">chooses</button>
        <button class="btn btn-secondary" @click="json = itemsProf">itemsProf</button>
      </div>
    </template>

    <div class="modal fade modal-lg" :class="error.show ? 'show': ''" :style="error.show ? 'display: block' : ''">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body text-center">
            <p>There is an error ... Please check the JSON or open a <a href="https://github.com/Gus19/jdrtools/issues" target="_blank">GitHub issue</a></p>
            <p v-if="error.message">
              <code>{{ error.message }}</code>
            </p>
            <button type="button" class="btn btn-secondary" @click="error.show = false">OK</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade modal-lg" :class="upload.show ? 'show': ''" :style="upload.show ? 'display: block' : ''">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body text-center">
            <p class="m-0 pb-1">Paste the JSON of your character</p>
            <p v-if="upload.error" class="text-danger m-0">{{ upload.error }}</p>
            <json-editor
                mode="text"
                v-model:text="upload.character"
                :dark-theme="true"
                :status-bar="false"
                :main-menu-bar="false"
                class="my-editor text-start"
            />
            <div class="btn-group-sm mt-2">
              <button type="button" class="btn btn-outline-secondary" @click="upload.show = false">Close</button>
              <button type="button" class="btn btn-success ms-2" @click="uploadCharacter" :disabled="!upload.character">Upload</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade modal-lg" :class="token.show ? 'show': ''" :style="token.show ? 'display: block' : ''">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body text-center">
            <p class="m-0 pb-1">URL of your token</p>
            <p v-if="token.error" class="text-danger m-0 pb-1">{{ token.error }}</p>
            <input type="text" class="form-control" v-model="token.url" />
            <div class="btn-group-sm mt-2">
              <button type="button" class="btn btn-outline-secondary" @click="token.show = false">Close</button>
              <button type="button" class="btn btn-success ms-2" @click="changeToken">Change</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="error.show || upload.show || token.show" class="modal-backdrop fade show"></div>

    <div class="row">
      <div class="col-12">
        <div class="btn-group btn-group-sm d-flex align-items-center">
          <button type="button" class="btn btn-danger" @click="reset">Reset</button>
          <button type="button" class="btn btn-info" @click="save" :disabled="!character.name">Save</button>
          <button type="button" class="btn btn-secondary" @click="openUpload">Import</button>
          <button type="button" class="btn btn-success" @click="convert">Convert</button>
        </div>
      </div>
      <div class="col-lg-6 mt-2">
        <div class="accordion">
          <AccordionItem name="race" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Race</template>
            <template v-slot:header-value>{{ character.race.name || CHOOSE }}</template>
            <template v-slot:body>
              <template v-for="b in racesStore.builder" :key="b.name">
                <span>{{b.name}}</span>
                <div class="mb-1">
                  <template v-for="(r,i) in b.races" :key="i">
                    <button type="button" class="btn me-1 mb-1" @click="changeRace(r)" :class="[
                      r.name === character.race.name ? 'btn-primary' : 'btn-outline-secondary',
                      r.version === 0 && r.subrace === 0 ? 'btn-outline-danger' : ''
                    ]" :disabled="r.version === 0 && r.subrace === 0">
                      {{r.name}}<template v-if="r.version > 1 || r.subrace > 0">*</template>
                    </button>
                  </template>
                </div>
              </template>
              <small class="fst-italic">* Version or Subrace available</small>
            </template>
          </AccordionItem>

          <AccordionItem name="version" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Version</template>
            <template v-slot:header-value>{{ character.race.version || CHOOSE }}</template>
            <template v-slot:body>
              <template v-for="(v,i) in versions" :key="i">
                <button type="button" class="btn me-1 mb-1" @click="changeRaceSource(v)" :class="[
                  v.source === character.race.source ? 'btn-primary' : 'btn-outline-secondary',
                ]">
                  {{displayVersion(v)}}
                </button>
              </template>
            </template>
          </AccordionItem>

          <AccordionItem name="subrace" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Subrace</template>
            <template v-slot:header-value>{{ character.subrace.name || CHOOSE }}</template>
            <template v-slot:body>
              <template v-for="(s,i) in subraces" :key="i">
                <button type="button" class="btn me-1 mb-1" @click="changeSubrace(s)" :class="[
                    displaySubrace(s) === character.subrace.name ? 'btn-primary' : 'btn-outline-secondary',
                  ]">
                  {{ displaySubrace(s) }}
                </button>
              </template>
            </template>
          </AccordionItem>

          <AccordionItem name="raceOptions" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Options</template>
            <template v-slot:body>
              <div v-for="ro in computedRaceOptions" :key="ro.replace">
                <p class="fw-bold m-0 d-flex align-items-center">
                  {{ro.replace}}
                  <i v-if="ro.entries?.length > 0" class="ms-1 fa-solid fa-circle-question" :title="inlineEntries(ro.entries)" v-tooltip></i>
                </p>
                <div v-for="roc in ro.choices" class="form-check pb-1" :key="roc.key">
                  <input class="form-check-input" type="radio" :value="roc.key"
                         :checked="isRaceOptionsCheck(ro.replace, roc.key)"
                         @click="changeRaceOptions($event, ro.replace)"
                  />
                  <label class="form-check-label">
                    {{ roc.name }}
                  </label>
                  <p style="white-space: pre-line">{{ inlineEntries(roc.entries) }}</p>
                </div>
              </div>
            </template>
          </AccordionItem>

          <AccordionItem name="class" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>First class</template>
            <template v-slot:header-value>{{ character.class[0].name || CHOOSE }}</template>
            <template v-slot:body>
              <div>
                <template v-for="(c,i) in classes" :key="i">
                  <button type="button" class="btn me-1 mb-1" @click="changeFirstClass(c)" :class="[
                      c.name === character.class[0].name ? 'btn-primary' : 'btn-outline-secondary',
                    ]">
                    {{ c.name }}
                  </button>
                </template>
              </div>
              <small v-if="character.class.length > 1" class="fst-italic">
                <span class="text-danger"><i class="fa-solid fa-triangle-exclamation"></i></span> Change the first class will reset the multiclassing
              </small>
            </template>
          </AccordionItem>

          <AccordionItem name="background" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Background</template>
            <template v-slot:header-value>{{ character.background || CHOOSE }}</template>
            <template v-slot:body>
              <div>
                <template v-for="(b,i) in backgrounds" :key="i">
                  <button type="button" class="btn me-1 mb-1" @click="changeBG(b)" :class="[
                      b.name === character.background ? 'btn-primary' : classBackground[character.class[0].name] === b.name ? 'btn-outline-primary' : 'btn-outline-secondary',
                    ]">
                    {{ b.name }}<template v-if="classBackground[character.class[0].name] === b.name">*</template>
                  </button>
                </template>
              </div>

              <div class="d-flex justify-content-between">
                <small class="fst-italic"><span class="text-primary">*</span> Quick background for {{ character.class[0].name }}</small>
<!--                <small class="fst-italic"><span class="text-warning"><i class="fa-solid fa-warning" /></span> 2024 rules are not supported</small>-->
              </div>
            </template>
          </AccordionItem>

          <AccordionItem name="abilities" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Abilities</template>
            <template v-slot:body>
              <div class="d-flex w-100 justify-content-evenly">
                <div class="form-check">
                  <input class="form-check-input" type="radio" id="inlineRadio1" value="spend" v-model="character.abilities.option">
                  <label class="form-check-label" for="inlineRadio1">Spend 27 points</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" id="inlineRadio2" value="free" v-model="character.abilities.option">
                  <label class="form-check-label" for="inlineRadio2">Free</label>
                </div>
              </div>
              <p class="lh-1 fst-italic m-0 py-1 small">
                <template v-if="isSpendMode">
                  Spend 27 points according to the Ability Score Point Cost (max 15 for every Ability Score).
                  The number of assigned points is indicated at the bottom.
                  A typical character would be: 15 - 14 - 13 - 12 - 10 - 8
                </template>
                <template v-else>
                  Roll 6 series of 4d6, dropping the lowest die each time.
                  Assign the results to the 6 Ability Scores as you want.
                  Here's a roll :
                  <template v-for="(r,i) in rolls">
                    <template v-if="i>0">-</template>
                    <b>{{r.total}}</b>
                  </template>
                </template>
              </p>

              <div v-for="a in Abilities" :key="a.key" class="d-flex justify-content-center align-items-center my-2 text-center">
                <label class="fw-bolder w-25">{{ a.name }}</label>
                <div class="w-25 d-flex justify-content-center">
                  <input type="number" :min="isSpendMode ? 8 : 0" :max="isSpendMode ? 15 : undefined" v-model="character.abilities[a.key].base" class="form-control ability" />
                </div>
                <div class="bonus w-25">
                  <span v-if="!isLineage">
                    <template v-if="chooses.ability && chooses.ability.from.includes(a.key)">
                      <button class="btn" @click="setBonusLineage(a.key, chooses.ability.amount)" :disabled="disabledBonusChoose(a.key)" :class="character.abilities[a.key].bonus === chooses.ability.amount ? 'btn-primary' : 'btn-outline-secondary'">{{ fn(chooses.ability.amount) }}</button>
                    </template>
                    <template v-else-if="character.abilities[a.key].bonus">
                      {{ fn(character.abilities[a.key].bonus) }}
                    </template>
                  </span>
                  <div v-if="isLineage" class="btn-group">
                    <button class="btn" @click="setBonusLineage(a.key, 2)" :disabled="disabledBonusLineage(a.key, 2)" :class="character.abilities[a.key].bonus === 2 ? 'btn-primary' : 'btn-outline-secondary'">+2</button>
                    <button class="btn" @click="setBonusLineage(a.key, 1)" :disabled="disabledBonusLineage(a.key, 1)" :class="character.abilities[a.key].bonus === 1 ? 'btn-primary' : 'btn-outline-secondary'">+1</button>
                  </div>
                </div>

                <span class="total w-25 fw-bold">{{ calcAbility(a.key) }}</span>
              </div>

              <p class="text-center m-0 py-1" v-if="isSpendMode">Points cost: <span class="fw-bold" :class="!abPoints || abPoints > 27 ? 'text-danger' : 'text-success'">{{ abPoints||'Error' }}</span>/27</p>
            </template>
          </AccordionItem>

          <AccordionItem name="racialFeat" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Racial Feat</template>
            <template v-slot:header-value>{{ character.feats.find((f:any) => f.level == 1 && f.origin == 'race')?.name }}</template>
            <template v-slot:body>
              <div class="m-0 d-flex align-items-center mb-2">
                <span class="fw-bold">{{ CHOOSE }}</span>
                <input type="text" class="form-control form-control-sm ms-2" style="flex: 1" :value="search['feat']" @input="changeSearch($event, 'feat')" />
                <div class="ms-2">
                  <input type="checkbox" class="form-check-input" value="1" v-model="search['feat-Abilities']">
                  <label class="form-check-label ms-1">Abilities</label>
                </div>
                <div class="ms-2">
                  <input type="checkbox" class="form-check-input" v-model="search['feat-Spells']">
                  <label class="form-check-label ms-1">Spells</label>
                </div>
                <div class="ms-2">
                  <i class="fa-regular" :class="showAllFeats ? 'fa-eye-slash' : 'fa-eye'" @click="showAllFeats = !showAllFeats" />
                </div>
              </div>
              <div v-for="o in filterOptions('feat', feats)" class="form-check pb-1" :key="o.name">
                <input class="form-check-input" type="radio" :value="o.name"
                       :checked="isFeatsCheck('race', o.name)"
                       @click="changeFeats($event, 'race')"
                />
                <FeatInfo :feat="o" :selected="isFeatsCheck('race', o.name)" :open="showAllFeats"
                          :ability-selected="character.abilities.improvments.find((ip:any) => ip.origin=='feat' && ip.level==1)?.ability"
                          @improve="(ability) => improveAbility(ability, 'feat')" />
              </div>
            </template>
          </AccordionItem>

          <AccordionItem name="bgFeat" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Background Feat</template>
            <template v-slot:header-value>{{ character.feats.find((f:any) => f.level == 1 && f.origin == 'background')?.name }}</template>
            <template v-slot:body>
              <div v-if="bg" v-for="o in featsStore.findByBG(bg.feats)" class="form-check pb-1" :key="o.name">
                <input class="form-check-input" type="radio" :value="o.name"
                       :checked="isFeatsCheck('background', o.name)"
                       @click="changeFeats($event, 'background')"
                />
                <FeatInfo :feat="o" :selected="isFeatsCheck('background', o.name)" />
              </div>
            </template>
          </AccordionItem>

          <AccordionItem name="features" :steps="steps" :step="step" @click="changeStep" :manual-steps="character.manualSteps" @toggle-manual-step="toggleManualStep">
            <template v-slot:header-label>Features</template>
            <template v-slot:body>
<!--              <template v-for="(cl,i) in character.class" :key="i">-->
<!--                <div v-if="character.class.length > 1" class="input-group">-->
<!--                  <select class="form-select form-select-sm flex-grow-1" @change="changeMulticlass($event, i)" :disabled="i === 0">&lt;!&ndash;v-model="cl.name"&ndash;&gt;-->
<!--                    <option value="" :disabled="cl.name.length">{{CHOOSE}}</option>-->
<!--                    <option v-for="c in classes" :key="c.name" :value="c.name" :selected="c.name === cl.name" :disabled="character.class.map((cl2: any) => cl2.name).includes(c.name)">{{ c.name }}</option>-->
<!--                  </select>-->
<!--                  <input type="number" min="1" max="20" :value="cl.level" @change="changeMulticlassLevel($event, i)" class="form-control" />-->
<!--                  <button v-if="i > 0" type="button" class="btn btn-outline-danger" @click="removeOtherClass(i)">-->
<!--                    <i class="fa-regular fa-trash-can"></i>-->
<!--                  </button>-->
<!--                  <button v-else type="button" class="btn btn-outline-secondary" @click="step = 'class'">-->
<!--                    <i class="fa-solid fa-circle-arrow-right"></i>-->
<!--                  </button>-->
<!--                </div>-->
<!--                <template v-for="(l,j) in cl.level" :key="j">-->
<!--                  <div>{{cl.name }} {{ l }}</div>-->
<!--                </template>-->
<!--              </template>-->
<!--              <button v-if="character.class[character.class.length-1].name" type="button" class="btn btn-sm btn-outline-info w-100" @click="addOtherClass">-->
<!--                <i class="fa-solid fa-circle-plus"></i>-->
<!--                Add an other class-->
<!--              </button>-->
<!--                <template v-for="(cf,i) in classFeatures" :key="i">-->
<!--                  {{cf.lvl}}.{{cf.name}}-->
<!--                </template>-->
              <div v-for="(cf,i) in classFeatures" :key="`${lastClass.name}-${cf.name}`" :class="`${i > 0 ? 'mt-2' : ''}`">
                <p class="fw-bold m-0 d-flex align-items-center">
                  {{ cf.name }} <i v-if="cf.entries" class="ms-1 fa-solid fa-circle-question" :title="S(cf.entries)" v-tooltip></i>
                  <input v-if="(cf.choose && cf.options) || cf.chooseSubclass" type="text" class="form-control form-control-sm ms-3" style="flex: 1" :value="search[cf.name]" @input="changeSearch($event, cf.name)" />
                </p>
                <template v-if="cf.chooseSubclass">
                  <div v-for="o in filterOptions(cf.name, cf.subclasses)" class="form-check" :key="o.shortName">
                    <input class="form-check-input" type="radio" :value="o.shortName" @click="changeSubclass($event)" :checked="lastClass.subclass == o.shortName">
                    <label class="form-check-label">
                      {{ o.shortName }}
                    </label>
                    <p>{{ S(o.info) }}</p>
                  </div>
                </template>
                <template v-if="cf.choose && cf.options">
                  <span v-if="cf.options.count>1" class="fst-italic">Choose {{cf.options.count}}</span>
                  <div v-for="o in filterOptions(cf.name, cf.options.from)" class="form-check pb-1" :key="o.name">
                    <input class="form-check-input" :type="`${cf.options.count==1?'radio':'checkbox'}`" :value="o.name"
                           :checked="isFeatureCheck(cf.name, o.name)"
                           :disabled="isFeatureDisabled(cf.name, cf.options.count, o.name)"
                           @click="changeFeature($event, cf.name, cf.options.count)"
                    >
                    <label class="form-check-label">
                      {{ o.name }}
                      <template v-if="o.prerequisite && o.prerequisite.length > 0"> ({{o.prerequisite.join(' or ')}})</template>
                    </label>
                    <p>{{ S(o.info) }}</p>
                  </div>
                </template>
              </div>
            </template>
          </AccordionItem>

          <AccordionItem name="hp" :steps="steps" :step="step" @click="changeStep" :manual-steps="character.manualSteps" @toggle-manual-step="toggleManualStep">
            <template v-slot:header-label>Hit Points</template>
            <template v-slot:body>
              <div v-if="character.level > 1" class="d-flex w-100 justify-content-evenly">
                <div class="form-check">
                  <input class="form-check-input" type="radio" id="inlineRadio3" v-model="character.hp.option" value="average" @click="setHPAverage">
                  <label class="form-check-label" for="inlineRadio3">Average</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" id="inlineRadio4" v-model="character.hp.option" value="free">
                  <label class="form-check-label" for="inlineRadio4">Free</label>
                </div>
              </div>

              <template v-if="character.hp.option">
                <!-- Roll HP for all levels -->
                <!--<template v-for="(cl,i) in character.class" :key="i">
                  <div class="d-flex justify-content-center align-items-center my-2 text-center">
                    <label class="w-25 fw-bold">{{ cl.name }}</label>
                    <label class="w-25 fw-bold">d{{cl.dice}}</label>
                    <label class="w-25 fw-bold">CON</label>
                    <span class="w-25 fw-bold">Total</span>
                  </div>
                  <div v-for="(l,j) in cl.level" :key="j" class="d-flex justify-content-center align-items-center my-2 text-center">
                    <label class="w-25">{{ l }}</label>
                    <div class="w-25 d-flex justify-content-center justify-content-evenly align-items-center">
                      <input type="number" class="form-control ability" :value="cl.hps[j]" @change="changeHP($event, i, j)" min="1" :max="cl.dice" :disabled="character.hp.option === 'average' || (i===0 && l===1)">
                      <i v-if="!(character.hp.option === 'average' || (i===0 && l===1))" class="fa-solid fa-dice-d20" @click="cl.hps[j] = roll(cl.dice)"></i>
                      <i v-else-if="character.hp.option === 'free'" class="fa-solid fa-dice-d20 invisible"></i>
                    </div>
                    <div class="bonus w-25">
                      {{ fn(modCon) }}
                    </div>
                    <span class="total w-25 fw-bold">
                      {{ Math.max(cl.hps[j] + modCon, 1) }}
                    </span>
                  </div>
                </template>
                <p class="text-center m-0 py-1">HP Max: <span class="fw-bold">{{ character.hp.max }}</span></p>-->

                <!-- Current lvl only -->
                <div class="d-flex justify-content-center align-items-center my-2 text-center">
                  <label class="w-25 fw-bold">{{ lastClass.name }}</label>
                  <label class="w-25 fw-bold">d{{lastClass.dice}}</label>
                  <label class="w-25 fw-bold">CON</label>
                  <span class="w-25 fw-bold">Total</span>
                </div>
                <div class="d-flex justify-content-center align-items-center my-2 text-center">
                  <label class="w-25">{{ lastClass.level }}</label>
                  <div class="w-25 d-flex justify-content-center justify-content-evenly align-items-center">
                    <input type="number" class="form-control ability" :value="lastClass.hps.at(-1)" @change="changeHP($event)" min="1" :max="lastClass.dice" :disabled="character.hp.option === 'average' || character.level == 1">
                    <i v-if="!(character.hp.option === 'average' || character.level == 1)" class="fa-solid fa-dice-d20" @click="lastClass.hps[lastClass.hps.length-1] = roll(lastClass.dice)"></i>
                    <i v-else-if="character.hp.option === 'free'" class="fa-solid fa-dice-d20 invisible"></i>
                  </div>
                  <div class="bonus w-25">
                    {{ fn(modCon) }}
                  </div>
                  <span class="total w-25 fw-bold">
                    {{ Math.max(lastClass.hps.at(-1) + modCon, 1) }}
                  </span>
                </div>

              </template>
            </template>
          </AccordionItem>

          <AccordionItem name="proficiencies" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Skill Proficiencies</template>
            <template v-slot:body>
              <div v-for="s in calculSkills" class="d-flex justify-content-center align-items-center my-1">
                <label class="w-50 text-end" :class="s.allDisabled ? 'text-body-tertiary' : ''" :title="s.example" v-tooltip data-bs-placement="right">
                  {{ textSkill(s.prof) }}
                </label>
                <div class="w-25 text-center">
                  <div class="btn-group">
                    <button class="btn" :class="s.profSelected ? 'btn-primary' : s.profDisabled ? 'btn-outline-secondary' : 'btn-secondary'" :disabled="s.profDisabled" @click="() => changeProf('skills',s.name)">P</button>
                    <button class="btn" :class="s.expSelected ? 'btn-primary' : s.expDisabled ? 'btn-outline-secondary' : 'btn-secondary'" :disabled="s.expDisabled" @click="() => changeProf('expertises', s.name)">E</button>
                  </div>
                </div>
                <span class="w-25 text-start">{{ s.mod }}</span>
              </div>
            </template>
          </AccordionItem>

          <AccordionItem name="otherprof" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Other Proficiencies</template>
            <template v-slot:body>
              <template v-if="chooses.languages.length > 0">
                <p class="fw-bold m-0">Languages</p>
                <div class="d-flex">
                  <div class="flex-1" v-for="cl in languagesChoices" :key="cl.name">
                    <p class="fst-italic m-0">{{ cl.name }}</p>
                    <div v-for="l in cl.choices" class="form-check pb-1" :key="l.key">
                      <input class="form-check-input" type="checkbox" :value="l.key" @click="changeProf('languages', l.key)"
                             :checked="isOtherProfCheck('languages', l.key)"
                             :disabled="isOtherProfDisabled('languages', l.key)"
                      />
                      <label class="form-check-label">{{ l.name }}</label>
                    </div>
                  </div>
                </div>
              </template>

              <template v-if="chooses.tools.length > 0">
                <p class="fw-bold m-0">Tools</p>
                <div class="d-flex">
                  <div class="flex-1" v-for="cl in toolsChoices" :key="cl.name">
                    <p class="fst-italic m-0">{{ cl.name }}</p>
                    <div v-for="l in cl.choices" class="form-check pb-1" :key="l.key">
                      <input class="form-check-input" type="checkbox" :value="l.key" @click="changeProf('tools', l.key)"
                             :checked="isOtherProfCheck('tools', l.key)"
                             :disabled="isOtherProfDisabled('tools', l.key)"
                      />
                      <label class="form-check-label">{{ l.name }}</label>
                    </div>
                  </div>
                </div>
              </template>

              <!-- TODO : Display all if only choose or weapon simple/martial on prof -->
              <template v-if="chooses.weapon.length > 0 || dev">
                <p class="fw-bold m-0">Equipment</p>
                <div class="d-flex">
                  <div class="flex-1" v-for="cl in ['armor']" :key="cl">
                    <p class="fst-italic m-0">{{ cfl(cl) }}</p>
                    <div v-for="l in equipmentProf.filter(ep => ep.parent == cl)" class="form-check pb-1" :key="l.key">
                      <input class="form-check-input" type="checkbox" :value="l" @click="changeProf(cl, l.key)"
                             :checked="isOtherProfCheck(cl, l.key)"
                             :disabled="isOtherProfDisabled(cl, l.key)" />
                      <label class="form-check-label">{{cfl(l.key) }}</label>
                    </div>
                  </div>
                  <template v-for="cl in ['weapon']" :key="cl">
                    <div v-for="l in equipmentProf.filter(ep => ep.parent == cl)" class="flex-1 form-check pb-1" :key="l.key">
                      <input class="form-check-input" type="checkbox" :value="l.key" @click="changeProf(cl, l.key)"
                             :checked="isOtherProfCheck(cl, l.key)"
                             :disabled="isOtherProfDisabled(cl, l.key)" />
                      <label class="form-check-label fst-italic">{{cfl(l.key) }} {{ cl }}</label>
                      <div v-if="l.parent == 'weapon'" v-for="sl in itemsStore.search(l.search) " class="form-check pb-1" :key="sl">
                        <input class="form-check-input" type="checkbox" :value="itemKeyToValue(sl)" @click="changeProf(cl, itemKeyToValue(sl))"
                               :checked="isOtherProfCheck(cl, itemKeyToValue(sl))" :indeterminate="isOtherProfCheck(cl, l.key)"
                               :disabled="isOtherProfDisabled(cl, itemKeyToValue(sl))" />
                        <label class="form-check-label">
                          <ItemInfo :item="sl" />
                        </label>
                      </div>
                    </div>
                  </template>
                </div>
              </template>

            </template>
          </AccordionItem>

          <AccordionItem name="cantrips" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Cantrips</template>
            <template v-slot:header-value>{{chooses.cantrips.selected}}/{{chooses.cantrips.known}}</template>
            <template v-slot:body>
              <div class="m-0 d-flex align-items-center mb-2">
                <input type="text" class="form-control form-control-sm" style="flex: 1" :value="search['cantrip']" @input="changeSearch($event, 'cantrip')" />
                <div class="ms-2">
                  <input type="checkbox" class="form-check-input" value="1" v-model="search['cantrip-Concentration']">
                  <label class="form-check-label ms-1">Concentration</label>
                </div>
                <div class="ms-2">
                  <input type="checkbox" class="form-check-input" v-model="search['cantrip-Ritual']">
                  <label class="form-check-label ms-1">Ritual</label>
                </div>
                <div class="ms-2">
                  <i class="fa-regular" :class="showAllSpells ? 'fa-eye-slash' : 'fa-eye'" @click="showAllSpells = !showAllSpells" />
                </div>
              </div>
              <template v-for="l in [0]">
                <div v-for="spell in filterOptions('cantrip', chooses.cantrips.from)" class="form-check pb-1">
                  <input class="form-check-input" type="checkbox" :value="spell.name"
                         @click="changeSpell($event, l)"
                        :checked="isSpellCheck(spell.name)"
                        :disabled="isSpellDisabled(spell.name)"
                  />
                  <SpellInfo :spell="spell" :open="showAllSpells" />
                </div>
              </template>
            </template>
          </AccordionItem>

          <AccordionItem name="spellsKnown" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Spells Known</template>
            <template v-slot:header-value>{{chooses.spells.selected}}/{{chooses.spells.known}}</template>
            <template v-slot:body>
              <div class="m-0 d-flex align-items-center mb-2">
                <input type="text" class="form-control form-control-sm" style="flex: 1" :value="search['spell']" @input="changeSearch($event, 'spell')" />
                <div class="ms-2">
                  <input type="checkbox" class="form-check-input" value="1" v-model="search['spell-Concentration']">
                  <label class="form-check-label ms-1">Concentration</label>
                </div>
                <div class="ms-2">
                  <input type="checkbox" class="form-check-input" v-model="search['spell-Ritual']">
                  <label class="form-check-label ms-1">Ritual</label>
                </div>
                <div class="ms-2">
                  <i class="fa-regular" :class="showAllSpells ? 'fa-eye-slash' : 'fa-eye'" @click="showAllSpells = !showAllSpells" />
                </div>
              </div>
              <template v-for="l in chooses.spells.maxlevel">
                <p class="fst-italic m-0">Level {{ l }}</p>
                <div v-for="spell in filterOptions('spell', chooses.spells.from[l])" class="form-check pb-1">
                  <input class="form-check-input" type="checkbox" :value="spell.name"
                         @click="changeSpell($event, l, chooses.spells.prepared)"
                         :checked="isSpellCheck(spell.name)"
                         :disabled="isSpellDisabled(spell.name)"
                  />
                  <SpellInfo :spell="spell" :open="showAllSpells" />
                </div>
              </template>
            </template>
          </AccordionItem>

          <AccordionItem name="spellsPrepared" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Spells Prepared</template>
            <template v-slot:header-value>{{chooses.prepared.selected}}/{{chooses.prepared.known}}</template>
            <template v-slot:body>
              <div class="m-0 d-flex align-items-center mb-2">
                <input type="text" class="form-control form-control-sm" style="flex: 1" :value="search['prepared']" @input="changeSearch($event, 'prepared')" />
                <div class="ms-2">
                  <input type="checkbox" class="form-check-input" value="1" v-model="search['prepared-Concentration']">
                  <label class="form-check-label ms-1">Concentration</label>
                </div>
                <div class="ms-2">
                  <input type="checkbox" class="form-check-input" v-model="search['prepared-Ritual']">
                  <label class="form-check-label ms-1">Ritual</label>
                </div>
                <div class="ms-2">
                  <i class="fa-regular" :class="showAllSpells ? 'fa-eye-slash' : 'fa-eye'" @click="showAllSpells = !showAllSpells" />
                </div>
              </div>
              <template v-for="l in chooses.prepared.maxlevel">
                <p class="fst-italic m-0">Level {{ l }}</p>
                <div v-for="spell in filterOptions('prepared', chooses.prepared.from[l])" class="form-check pb-1">
                  <input class="form-check-input" type="checkbox" :value="spell.name"
                         @click="chooses.prepared.onlyPrepared ? changeSpellPrepared($event) : changeSpell($event, l)"
                         :checked="isSpellPrepared(spell.name)"
                         :disabled="isSpellDisabled(spell.name)"
                  />
                  <SpellInfo :spell="spell" :open="showAllSpells" />
                </div>
              </template>
            </template>
          </AccordionItem>

          <AccordionItem name="additionalSpells" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Additional Spells</template>
            <template v-slot:body>
              <div class="m-0 d-flex align-items-center mb-2">
                <input type="text" class="form-control form-control-sm" style="flex: 1" :value="search['additional']" @input="changeSearch($event, 'additional')" />
                <div class="ms-2">
                  <input type="checkbox" class="form-check-input" value="1" v-model="search['additional-Concentration']">
                  <label class="form-check-label ms-1">Concentration</label>
                </div>
                <div class="ms-2">
                  <input type="checkbox" class="form-check-input" v-model="search['additional-Ritual']">
                  <label class="form-check-label ms-1">Ritual</label>
                </div>
                <div class="ms-2">
                  <i class="fa-regular" :class="showAllSpells ? 'fa-eye-slash' : 'fa-eye'" @click="showAllSpells = !showAllSpells" />
                </div>
              </div>

              <template v-for="as in chooses.additionalSpells">
                <p class="fw-bold m-0">{{ as.originName }}</p>
                <div v-if="as.optionChoice" class="btn-group btn-group-sm mb-1 d-flex align-items-center">
                  <button type="button" class="btn" :class="as.option == o ? 'btn-primary' : 'btn-outline-secondary'" v-for="o in as.optionChoice" :key="o" @click="changeOption(as.origin, as.originName, o)">{{o}}</button>
                </div>
                <template v-for="asp in as.spells">
                  <p class="fst-italic m-0">
                    <template v-if="asp.spellslot == 0">Cantrip</template>
                    <template v-else>Level {{ asp.spellslot }}</template>
                    <span class="small fst-normal"> ({{asp.selected}}/{{asp.count}})</span>
                  </p>
                  <div v-for="spell in filterOptions('additional', asp.from)" class="form-check pb-1">
                    <input class="form-check-input" type="checkbox" :value="spell.name"
                           @click="changeSpell($event, asp.spellslot, true, as.origin, as.originName)"
                           :checked="isSpellCheck(spell.name)"
                           :disabled="isSpellDisabled(spell.name, as.origin, as.originName)"
                    />
                    <SpellInfo :spell="spell" :open="showAllSpells" />
                  </div>
                </template>
              </template>

            </template>
          </AccordionItem>

          <AccordionItem name="startingEquipment" :steps="steps" :step="step" @click="changeStep" :manual-steps="character.manualSteps" @toggle-manual-step="toggleStartingEquipment">
            <template v-slot:header-label>Starting equipment</template>
            <template v-slot:body>
              <template v-for="(startingEquipment,n) in chooses.startingEquipment">
                <p class="m-0" :class="n>0 ? 'mt-1' : ''">
                  <label class="fw-bold">{{ startingEquipment.originName }}</label>
                </p>

                <div v-if="startingEquipment.origin == 'class'" class="btn-group btn-group-sm w-100 pb-1">
                  <input type="radio" class="btn-check" id="startingEquipment-default" value="default" @change="changeStartingEquipment" :checked="character.startingEquipment.option == 'default'">
                  <label class="btn" :class="character.startingEquipment.option == 'default' ? 'btn-primary' : 'btn-outline-secondary'" for="startingEquipment-default">Default</label>

                  <input type="radio" class="btn-check" id="startingEquipment-gold" value="gold" @change="changeStartingEquipment" :checked="character.startingEquipment.option == 'gold'">
                  <label class="btn" :class="character.startingEquipment.option == 'gold' ? 'btn-primary' : 'btn-outline-secondary'" for="startingEquipment-gold">Gold alternative</label>
                </div>

                <template v-if="startingEquipment.origin == 'class' && character.startingEquipment.option == 'gold'">
                  <div class="d-flex align-items-center justify-content-between pt-1 pb-2">
                    <label class="me-1 flex-grow-1">Start with {{computedLastClass && S(computedLastClass.startingEquipment.goldAlternative) }} <span class="gp">gp</span> to buy your own equipment</label>
                    <input type="number" v-model="character.startingEquipment.gp" @change="calculGoldManual" class="form-control h36" style="max-width: 100px" step="1" min="0" />
                    <i v-if="computedLastClass" class="fa-solid fa-dice-d20 ms-1" @click="rollStartingGold"></i>
                  </div>
                  <template v-if="character.startingEquipment.gp">
                    <template v-for="(m,i) in character.startingEquipment.manuals" :key="m">
                      <ItemSearch v-if="m.origin == 'class'" type="all" :label="false"
                                  :current="m" @select="(item, q) => addManualItem(i, item, q, 'class')"
                                  :has-delete="true" @delete="() => removeItem(i)"
                                  :has-quantity="true" @quantity="(q) => changeItemQuantity(i, q)"
                                  :min-value="0" :max-value="character.startingEquipment.gp * 100" />
                    </template>
                    <div class="d-flex align-items-center justify-content-between mt-2">
                      <button type="button" class="btn btn-sm btn-outline-success" @click="newManuelItem">
                        <i class="fa fa-solid fa-plus-circle" />
                        Add new item
                      </button>
                      <div v-if="character.startingEquipment.rest != null">
                        <span>Rest: </span>
                        <Money v-if="character.startingEquipment.rest >= 0" :value="character.startingEquipment.rest" />
                        <b class="text-warning" v-else>You spend too much</b>
                      </div>
                    </div>
                  </template>
                </template>
                <template v-else>
                  <div class="d-flex w-100 pt-1" v-for="(se,i) in startingEquipment.values" :key="i">
                    <div class="form-check" :class="Object.keys(se).length > 1 && 'w-33'" v-for="(seo,j) in se" :key="j">
                      <input class="form-check-input" type="radio" :checked="character.startingEquipment[startingEquipment.origin][i] == j" @click="character.startingEquipment[startingEquipment.origin][i] = j">
                      <label class="form-check-label">
                        <template v-for="(item,k) in seo" :key="k">
                          <template v-if="k>0"><br /></template>
                          <ItemInfo :item="item" />
                        </template>
                      </label>
                    </div>
                  </div>
                </template>
              </template>

              <template v-if="chooses.startingEquipmentManual.filter((sem:any) => sem != null).length > 0">
                <p class="m-0 mt-1">
                  <label class="fw-bold">{{ CHOOSE }}</label>
                </p>
                <template v-for="(sem,i) in chooses.startingEquipmentManual" :key="i">
                  <ItemSearch v-if="sem && sem.equipmentType" :type="sem.equipmentType" :current="character.startingEquipment.manuals[i]" @select="(item) => addManualItem(i, item, 1, sem.origin)" :min-value="0" />
                </template>
              </template>

            </template>
          </AccordionItem>

          <AccordionItem name="equipment" :steps="steps" :step="step" @click="changeStep" :manual-steps="character.manualSteps" @toggle-manual-step="toggleManualStep">
            <template v-slot:header-label>Equipment</template>
            <template v-slot:body>
              <p class="text-center text-warning fw-bold m-0">In progress ...</p>
              <!-- TODO Computed Armor Training / Weapon Proficiencies / Tool Proficiencies here ? if lvl > 1 -->
              <p class="fw-bold m-0">Armors</p>
              <p class="fst-italic m-0">List armor and shields Calc CA here</p>
              <p class="fw-bold m-0">Weapons</p>
              <p class="fst-italic m-0">List weapons</p>
              <p class="fw-bold m-0">Tools</p>
              <p class="fst-italic m-0">List tools</p>
              <p class="fw-bold m-0">Money</p>
              <div class="d-flex justify-content-between">
                <div v-for="m in ['gp', 'sp', 'cp']" :key="m" class="d-flex align-items-center">
                  <label class="me-1 fw-bold" :class="m">{{ m.toUpperCase() }}</label>
                  <input type="number" v-model="character.money[m]" class="form-control h36" style="max-width: 100px" step="1" min="0" />
                </div>
              </div>
              <p class="fw-bold m-0">Bagpack</p>
              <p class="fst-italic m-0">All other items</p>
              <p class="fw-bold m-0">Sum weight</p>
            </template>
            {{ character.equipment }}
          </AccordionItem>
        </div>
      </div>
      <div class="col-lg-6 mt-2 character-info">

        <div class="d-flex align-items-center">
          <label class="me-2 fw-bold fst-italic">Name</label>
          <input type="text" v-model="character.name" class="form-control h36" />
          <div @click="openToken" class="cursor-pointer" title="Change your token" v-tooltip>
            <img v-if="character.appearance" :src="character.appearance" class="h36 ms-2" />
            <i v-else class="fa-regular fa-circle-user ms-2 text-primary" style="font-size: 36px"></i>
          </div>
        </div>

        <template v-if="show.character && computedRace">
          <div v-if="inlineClasses" class="text-center">
            {{inlineClasses}}
          </div>
          <div class="d-flex">
            <CharacterInfo>
              <template v-slot:label>Proficiency:</template>
              {{prof}}
            </CharacterInfo>
            <CharacterInfo v-if="character.hp.max">
              <template v-slot:label>HP Max:</template>
              {{character.hp.max}}
            </CharacterInfo>
            <CharacterInfo v-if="character.ac">
              <template v-slot:label>AC:</template>
              {{character.ac}}
            </CharacterInfo>
          </div>
          <template v-if="validAbilities">
            <div class="d-flex w-100">
              <div v-for="a in Abilities" class="d-flex flex-column align-items-center flex-grow-1">
                <span>
                  {{a.key.toUpperCase()}}
                  <i class="fa-brands fa-product-hunt" v-if="character.save.includes(a.key)" :title="`Saving Throw`" v-tooltip></i>
                  <i class="fa-solid fa-wand-magic-sparkles" v-if="character.spellcasting.includes(a.key)" title="Spellcasting" v-tooltip></i>
                </span>
                <span>{{totalAbility(a.key)}}</span>
              </div>
            </div>
          </template>

          <p v-if="character.race.name" class="fw-bold border-bottom text-center mt-2 mb-2 fs-1-1">
            {{ character.race.name }} {{ character.subrace?.name }}
          </p>
          <CharacterInfo v-if="!validAbilities && (computedRace.ability || isLineage)">
            <template v-slot:label>Ability Scores:</template>
            <template v-if="isLineage">Any +2 and other +1 OR three different +1</template>
            <template v-else>{{ inlineAbility(computedRace.ability) }}</template>
          </CharacterInfo>

          <div class="d-flex">
            <CharacterInfo v-if="chooses.size || character.size">
              <template v-slot:label>Size:</template>
              <div class="d-inline-flex align-items-center">
                <select v-if="chooses.size" class="form-select form-select-sm p-0 ps-2" v-model="character.size">
                  <option value="">{{CHOOSE}}</option>
                  <option v-for="s in chooses.size" :key="s" :value="s">{{Sizes[s]}}</option>
                </select>
                <template v-else>
                  {{ Sizes[character.size] }}
                </template>
              </div>
            </CharacterInfo>
            <CharacterInfo v-if="character.speed.walk">
              <template v-slot:label>Speed:</template>
              {{computedSpeed}}
            </CharacterInfo>
            <CharacterInfo v-if="character.darkvision">
              <template v-slot:label>Darkvision:</template>
              {{ character.darkvision }} ft.
            </CharacterInfo>
          </div>

          <CharacterInfo v-if="character.resist.length">
            <template v-slot:label>Resistances:</template>
            <template v-for="(r,i) in character.resist" :key="r">
              <template v-if="i>0">, </template>
              <DamageType :name="r" />
            </template>
          </CharacterInfo>

          <CharacterInfo v-if="['race','version','subrace','raceOptions'].includes(step)" v-for="e in computedRaceEntries">
            <template v-slot:label>{{ e.name }}:</template>
            {{ inlineEntries(e.entries) }}
          </CharacterInfo>
          <div v-else>
            <template v-for="(e,i) in computedRaceEntries" :key="e.name">
              <template v-if="i>0">, </template>
              <span :title="inlineEntries(e.entries)" v-tooltip>{{e.name}}</span>
            </template>
          </div>
          <CharacterInfo v-if="computedSkillsRace">
            <template v-slot:label>Skill Proficiencies:</template>
            {{ computedSkillsRace }}
          </CharacterInfo>

          <CharacterInfo v-if="computedRace.languageProficiencies">
            <template v-slot:label>Languages:</template>
            <template v-if="computedLangRace">{{ computedLangRace }}</template>
            <template v-else>{{ inlineLang(computedRace.languageProficiencies) }}</template>
          </CharacterInfo>
          <CharacterInfo v-if="computedRace.toolProficiencies">
            <template v-slot:label>Tool Proficiencies:</template>
            <template v-if="computedToolsRace">{{ computedToolsRace }}</template>
            <template v-else>{{ inlineTool(computedRace.toolProficiencies) }}</template>
          </CharacterInfo>

          <!-- Classes infos -->
          <template v-for="(cl,i) in character.class" :key="cl.name">
            <template v-if="cl.name.length">
              <p class="fw-bold border-bottom text-center mb-2 mt-1 fs-1-1">
                {{ cl.name }}
                <template v-if="cl.subclass"> ({{ cl.subclass }})</template>
              </p>
              <ClassInfo :name="cl.name" :subclass="cl.subclass" :level="cl.level" :is-first="i === 0" :valid-abilities="validAbilities"
                         :cantrips="chooses.cantrips?.known" :spells-known="chooses.spells?.known" :spells-prepared="chooses.prepared?.known">
                <template v-slot:skills v-if="computedSkillsClass">
                  {{computedSkillsClass}}
                </template>
                <template v-slot:expertises v-if="computedExpertisesClass">
                  <CharacterInfo>
                    <template v-slot:label>Skill Expertises:</template>
                    {{ computedExpertisesClass }}
                  </CharacterInfo>
                </template>
                <template v-slot:tools v-if="computedToolsClass">
                  {{computedToolsClass}}
                </template>
                <CharacterInfo v-for="ft in cl.features" :key="ft.feature">
                  <template v-slot:label>{{ ft.name }}:</template>
                  <template v-for="(ftc,i) in ft.choices" :key="ftc">
                    <template v-if="i>0">, </template>
                    <span :title="S(classesStore.getOptionalInfo(ftc))" v-tooltip>{{ftc}}</span>
                  </template>
                </CharacterInfo>
              </ClassInfo>
            </template>
          </template>

          <!-- Background infos -->
          <template v-if="character.background && bg">
            <p class="fw-bold border-bottom text-center mb-2 mt-1 fs-1-1">
              {{ character.background }}
            </p>

            <CharacterInfo v-if="bg.skillProficiencies">
              <template v-slot:label>Skill Proficiencies:</template>
              <template v-if="computedSkillsBG">{{ computedSkillsBG }}</template>
              <template v-else>{{ inlineSkill(bg.skillProficiencies, true) }}</template>
            </CharacterInfo>
            <CharacterInfo v-if="bg.languageProficiencies">
              <template v-slot:label>Languages:</template>
              <template v-if="computedLangBG">{{ computedLangBG }}</template>
              <template v-else>{{ inlineLang(bg.languageProficiencies) }}</template>
            </CharacterInfo>

            <CharacterInfo v-if="bg.toolProficiencies">
              <template v-slot:label>Tool Proficiencies:</template>
              <template v-if="computedToolsBG">{{computedToolsBG}}</template>
              <template v-else>{{ DS(bg.entries && bg.entries[0].items.find((ei:any) => ei.name == "Tool Proficiencies:"), false) }}</template>
            </CharacterInfo>
            <template v-if="bgFeatures">
              <CharacterInfo v-if="bgStep" v-for="bgf in bgFeatures">
                <template v-slot:label>{{ bgf.name }}:</template>
                {{ DS(bgf, false) }}
              </CharacterInfo>
              <div v-else>
                <template v-for="(bgf,i) in bgFeatures">
                  <template v-if="i>0">, </template>
                  <span :title="DS(bgf, false)" v-tooltip>{{bgf.name}}</span>
                </template>
              </div>
            </template>
          </template>

          <p v-if="character.feats.length > 0" class="fw-bold border-bottom text-center mb-2 mt-1 fs-1-1">
            Feats
          </p>
          <template v-for="ft in character.feats" :key="ft.name">
            <FeatInfo :feat="feats.find((feat:any) => feat.name == ft.name)" :choice="false"
                      :ability-selected="character.abilities.improvments.find((ip:any) => ip.origin=='feat' && ip.level==ft.level)?.ability">
                <CharacterInfo v-if="computedSkillsFeat">
                  <template v-slot:label>Skill Proficiencies:</template>
                  {{ computedSkillsFeat }}
                </CharacterInfo>
                <CharacterInfo v-if="computedExpertisesFeat">
                  <template v-slot:label>Skill Expertises:</template>
                  {{ computedExpertisesFeat }}
                </CharacterInfo>
              <CharacterInfo v-if="computedToolsFeat">
                <template v-slot:label>Tool Proficiencies:</template>
                {{ computedToolsFeat }}
              </CharacterInfo>
            </FeatInfo>
          </template>

          <template v-if="character.spells.length > 0 || spellSlotsInfo">
            <p class="fw-bold border-bottom text-center mb-2 mt-1 fs-1-1">Spells</p>
            <CharacterInfo v-if="spellSlotsInfo">
              <template v-slot:label>Spell slots:</template>
              <template v-for="j in 9">
                <template v-if="spellSlotsInfo[`s${j}`] > 0">
                  <template v-if="j>1">, </template>
                  Lvl{{j}}: {{spellSlotsInfo[`s${j}`]}}
                </template>
              </template>
            </CharacterInfo>
            <CharacterInfo v-if="spellSlotsPactInfo">
              <template v-slot:label>Spell slots from pact magic:</template>
              Lvl{{spellSlotsPactInfo.max}}: {{spellSlotsPactInfo.slot}}
            </CharacterInfo>
            <template v-for="l in [0,1,2,3,4,5,6,7,8,9]">
              <CharacterInfo v-if="computedSpells.find((c:any) => c.spellslot == l)">
                <template v-slot:label>
                  <template v-if="l == 0">Cantrip: </template>
                  <template v-else>Level {{ l }}: </template>
                </template>
                <template v-for="(s,i) in computedSpells.filter((c:any) => c.spellslot == l)" :key="s.name">
                  <template v-if="i>0">, </template>
                  <span :title="s.info" v-tooltip :class="!s.prepared && 'text-muted'">{{ s.name }}</span>
                </template>
              </CharacterInfo>
            </template>
          </template>

          <p class="fw-bold border-bottom text-center mb-2 mt-1 fs-1-1">Details</p>
          <textarea class="form-control w-100" v-model="character.details" rows="10" placeholder="Describe all the details of your character ..."></textarea>
        </template>
        <template v-else>
          <p class="text-center fst-italic">
            <template v-if="!character.race.name">Choose a race ...</template>
            <template v-if="character.race.name && !character.race.version">Choose a version ...</template>
          </p>
        </template>
      </div>
      <json-editor v-if="show.json"
                   mode="text"
                   v-model:json="json"
                   :dark-theme="true"
                   :status-bar="false"
                   :main-menu-bar="false"
                   class="my-editor col-12"
      />
    </div>
  </div>
</template>

<style scoped>
</style>