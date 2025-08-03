<script setup lang="ts">
  import {onMounted, computed, ref, watch} from "vue";
  import { uuid } from 'vue-uuid';
  import JsonEditor from 'vue3-ts-jsoneditor';
  import {useSpellsStore} from "@/stores/spells";
  import {useRacesStore} from "@/stores/races";
  import {useBackgroundsStore,classBackground} from "@/stores/backgrounds";
  import {useFeatsStore} from "@/stores/feats";
  import {useTableplop} from "@/stores/tableplop";
  import {equipmentProf, equipmentType, type ItemBase, useItemsStore} from "@/stores/items";
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
    inlineEntries, Damages, cfl, CHOOSE, calculMoney, type Ability, messageSpell
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
  import FeatList from "@/components/FeatList.vue";
  import Condition from "@/components/Condition.vue";
  import {Parser} from "expr-eval";

  const props = defineProps({
    version: {type: String, required: true, default: ''},
  });

  const spellsStore = useSpellsStore();
  const racesStore = useRacesStore();
  const bgStore = useBackgroundsStore();
  const classesStore = useClassesStore();
  const featsStore = useFeatsStore();
  const itemsStore = useItemsStore();
  const storagekey = () => `character-builder-${props.version||'2014'}`;
  const dev: boolean = import.meta.env.DEV;

  const initStoreAndCharacter = async () => {
    refresh.value = true;
    await spellsStore.initSpells(props.version);
    await spellsStore.initSources();
    await racesStore.initStore(props.version);
    await bgStore.initBackgrounds(props.version);
    await classesStore.initClasses(props.version);
    await featsStore.initFeats(props.version);
    await itemsStore.initItems(props.version);

    if(props.version == "2024") {
      featsStore.transformFeatures.forEach((tf:any) => {
        let featureType: string[] = [];
        featureType.push(tf.category);
        if(tf.category == 'FS') {
          featureType.push('FS:P');
          featureType.push('FS:R');
        }
        classesStore.optionalFeatures.push({
          ...tf,
          featureType: featureType
        });
      });
    }

    character.value = {
      ...defaultCharacter(),
      ...getStorage()
    };
    chooses.value = {
      ...defaultChoose
    };
    refresh.value = false;
  }

  onMounted(initStoreAndCharacter);
  watch(() => props.version, initStoreAndCharacter)

  const search = ref<any>({});
  const changeSearch = (e: any, name: string) => {
    search.value[name] = e.target.value;
  }
  const showAllSpells = ref(false);

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
    if(!character.value) return false;
    return getManualStep(s)?.valid || false;
  }
  const toggleManualStep = () => {
    manualStep.value.valid = !manualStep.value.valid;
    calculStep();
  }

  const stepdisabled: any = computed(() => steps.value.find((s:any) => s.name == step.value)?.disabled || false);

  const toggleStartingEquipment = () => {
    toggleManualStep();
    character.value.equipment.items = character.value.equipment.items.filter((it:any) => it.custom)
    character.value.equipment.weight = 0;
    character.value.equipment.others.text = "";
    character.value.equipment.others.weight = 0;
    if(manualStep.value.valid) {
      const se = character.value.startingEquipment;

      character.value.money = calculMoney(se.rest || 0);
      const others: string[] = [];

      ['background', 'class'].forEach((k:any) => {
        Object.keys(se[k]).forEach(i => {
          let o = se[k][i];
          chooses.value.startingEquipment.find((f:any) => f.origin == k).values[i][o].forEach((it:any) => {
            addStartingEquipment(it, others);
          });
        })
      });

      se.manuals.forEach((m: any) => {
        if(m) {
          addEquipment(m.key, m.quantity || 1, others);
        }
      });

      character.value.equipment.others.text = others.join(', ');
    }
  }
  const addStartingEquipment = (it:any, others: any[]) => {
    if("string" == typeof it) {
      addEquipment(it, 1, others);
    }
    else if(it.item) {
      addEquipment(it.item, it.quantity || 1, others);
    }
    else {
      if(it.displayName) {
        others.push(cfl(it.displayName));
      }
      else if(it.special) {
        others.push(cfl(it.special));
      }
    }
    if(it.containsValue || it.value) {
      let money = calculMoney(it.containsValue || it.value);
      character.value.money.gp += money.gp;
      character.value.money.sp += money.sp;
      character.value.money.cp += money.cp;
    }
  }
  const addEquipment = (key: string, quantity: number, others: any[], custom: boolean = false) => {
    const eqs = character.value.equipment.items;
    const eq = eqs.find((e:any) => e.key == key);

    if(!custom) {
      const item = itemsStore.findByKey(key);
      if(item && item.packContents) {
        item.packContents.forEach((p:any) => {
          addStartingEquipment(p, others);
        });
        return;
      }
    }
    if(eq) {
      eq.quantity += quantity;
    }
    else {
      eqs.push({
        key: key,
        quantity: quantity,
        type: itemsStore.getTypeByKey(key),
        custom: custom
      });
    }
  }
  const maxWeight = computed(() => {
    if(!character.value) return null;
    return character.value.abilities.str.total * 15;
  })
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
      // const leveling = character.value.state == 'leveling';

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
        f = lastClass.value
        ss.push({
          name: 'levelup',
          valid: f
        });
        if (!f) return
      }

      let g = false; //Features
      if(f) {
        if(classFeatures.value) {
          let s = 'features';
          if (classFeatures.value.find((cf: any) => cf.chooseSubclass)) {
            removeManualStep(s);
            g = !!lastClass.value.subclass;
          }
          else {
            addManualStep(s);
            g = isManualValid(s);
          }
          ss.push({
            name: 'features',
            valid: g
          });
          if (!g) return;

          if(classFeatures.value.find((cf: any) => cf.name == 'Ability Score Improvement')) {
            let g2 = false;
            if(improvement.value) {
              if(improvement.value.option == "feat") {
                const n = character.value.feats.find((f: any) => f.level == level && f.origin == 'class' && f.name != null)?.name;

                if (n) {
                  const feat = feats.value.find((f: any) => f.name == n);
                  if (feat.ability && feat.ability[0].choose) {
                    let len = character.value.abilities.improvments.filter((ip: any) => ip.origin == 'feat' && ip.level == level).length;
                    g2 = len != 0;
                  } else {
                    g2 = true;
                  }
                }
              }
              if(improvement.value.option == "ability") {
                g2 = sumImproveAbility('class') == 2;
              }
            }
            ss.push({
              name: 'improvement',
              valid: g2
            });
            if (!g2) return;
          }
        }
        else {
          g = true;
        }
      }

      if(chooses.value && chooses.value.features) {
        const chs = chooses.value.features;
        let alltrue = true;
        chs.forEach((ch:any) => {
          let ft = ch.selected == ch.total;
          if(!ft) alltrue = false;
          ss.push({
            name: ch.name + ch.featureType,
            valid: ft
          });
        })
        if(!alltrue) return;
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
      if(chooses.value && (chooses.value.skills.length > 0 || chooses.value.expertises.length > 0)) {
        ['skills','expertises'].forEach(key => {
          chooses.value[key].forEach((ch:any) => {
            if(countProfByOrigin(key, ch.origin, ch.originName) != ch.count) {
              i = false; return false;
            };
          });
        });
        ss.push({
          name: 'proficiencies',
          valid: i
        });
        if(!i) return;
      }
      else {
        ss.push({
          name: 'proficiencies',
          valid: true,
          disabled: true
        });
      }

      let i2 = true;
      if(i && (chooses.value.languages.length > 0 || chooses.value.tools.length > 0 || chooses.value.weapon.length > 0)) {
        ['languages', 'tools', 'weapon'].filter(key => chooses.value[key]).forEach(key => {
          const chc: any = [];
          chooses.value[key].forEach((ch:any) => {
            const c = chc.find((f: any) => f.origin == ch.origin && f.originName == ch.originName);
            if(c) {
              c.count += ch.count;
            }
            else {
              chc.push({
                origin: ch.origin,
                originName: ch.originName,
                count: ch.count
              });
            }
          });
          chc.forEach((ch:any) => {
            if(countProfByOrigin(key, ch.origin, ch.originName) != ch.count) {
              i2 = false; return false;
            }
          });
        })
        ss.push({
          name: 'otherprof',
          valid: i2
        });
        if(!i2) return;
      }
      else {
        ss.push({
          name: 'otherprof',
          valid: true,
          disabled: true
        });
      }

      let j = false;
      if(i2) {
        let ch = chooses.value.cantrips;
        let sp = chooses.value.spells;
        let prepared = chooses.value.prepared;
        let as = chooses.value.additionalSpells;

        let j1 = true, j2 = true, j3 = true, j4 = true;

        if(as && as.length > 0) {
          as.forEach((asv:any) => {
            if(asv.optionChoice != null && asv.option == null) {
              j4 = false;
              return;
            }
            if(asv.count != 0 && asv.selected != asv.count) j4 = false;
            asv.spells.forEach((asp:any) => {
              if(asp.count != 0 && asp.selected != asp.count) j4 = false;
            });
          });
          ss.push({
            name: 'additionalSpells',
            valid: j4
          });
        }
        if(ch && ch.known > 0) {
          j1 = ch.known == ch.selected
          ss.push({
            name: 'cantrips',
            valid: j1
          });
        }
        if(sp && sp.known > 0) {
          j2 = sp.known == sp.selected || (sp.origin == "class" && sp.originName == "Wizard" && sp.selected >= sp.known);
          ss.push({
            name: 'spellsKnown',
            valid: j2
          });
        }
        if(prepared) {
          prepared.forEach((pr:any) => {
            if(pr.known > 0) {
              j3 = pr.known == pr.selected;
              ss.push({
                name: `spellsPrepared${pr.originName}`,
                valid: j3
              });
            }
          });
        }

        if(j1 && j2 && j3 && j4) {
          j = true;
        }
        if(!j) return;
      }
      else j = true;

      let k = !(level == 1);
      if(j && level == 1) {
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
          c.values.forEach((_:any, i: number) => {
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
          valid: k,
          disabled: k
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
    finally {
      steps.value = ss;
      if(!step.value || !steps.value.find(s => s.name == step.value)) lastStep();
    }
  }
  const validAbilities = computed(() => character.value.level > 1 || steps.value.find(s => s.name === "abilities")?.valid);

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
    let m = Math.floor((t - 10) / 2);
    if(onlyPositiv && m < 0) return 0
    return m;
  }
  const totalAbility = (key: string) => {
    const t = character.value.abilities[key].total;
    return `${t} (${fn(mod(key))})`;
  }

  const calcDatasAbilities = () => {
    Abilities.forEach(a => {
      const ab = character.value.abilities[a.key];
      const improve = character.value.abilities.improvments.filter((ip:any) => ip.ability == a.key).map((ip:any) => ip.value || 1).reduce((a:number, b:number) => a + b, 0);
      ab.improve = improve;
      ab.total = ab.base + ab.bonus + ab.improve;
    });
  }

  const lastStep = () => {
    step.value = steps.value.find(s => !s.valid)?.name || 'final';
  }
  const isFinish = computed(() => {
    return steps.value.find(s => !s.valid) == null;
  });

  const faState = (b: boolean) => {
    return b ? 'fa-check' : 'fa-times';
  }

  const defaultClass = () => {
    return {
      name: "",
      level: 1,
      subclass: null,
      dice: null,
      hps: [],
      casterProgression: null,
      preparedSpells: {has: false},
      spellcastingAbility: null
    }
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
        {...defaultClass()}
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
      save: [],
      spellcasting: [],
      spellcasterlevel: 0,
      features: [],
      hp: {
        max: 0,
        option: 'average'
      },
      ac: 10,
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
      blindsight: null,
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
      equipment: {
        items: [],
        weight: 0,
        others: {
          text: null,
          weight: 0
        }
      },
      money: {
        gp: 0,
        sp: 0,
        cp: 0
      },
      manualSteps: [],
      improvements: [],
      excludeFeatures: []
    }
  }

  const character = ref<any>(null);
  const refresh = ref<boolean>(false);
  const allLoad = computed(() => spellsStore.isLoad && racesStore.isLoad && bgStore.isLoad && featsStore.isLoad && itemsStore.isLoad && classesStore.isLoad && character.value !== null && versions.value !== null && !refresh.value);
  watch(allLoad, (newValue) => {
    if(newValue) {
      calcDatasRace(false);
      calcDatasClass(false);
      calcDatasBG(false);
      calcDatasAbilities();
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
    download(JSON.stringify(character.value, null, 2), `${character.value.name || 'NoName'}_jdrtools.json`, "application/json");
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

  const defaultChoose = {
    additionalSpells: [],
    ability: null,
    size: null,
    languages: [],
    tools: [],
    skills: [],
    weapon: [],
    expertises: [],
    cantrips: {},
    spells: {},
    prepared: [],
    startingEquipment: [],
    startingEquipmentManual: []
  }
  const chooses = ref<any>(null);

  const logJson = () => {
    json.value = JSON.parse(JSON.stringify(character.value));
  }

  const saveStorage = () => {
    if(dev) {
      console.log('watch character');
    }
    localStorage.setItem(storagekey(), JSON.stringify(character.value));
    calcAllChooses();
    calculStep();
    logJson();
  };

  const getStorage = () => {
    return JSON.parse(localStorage.getItem(storagekey())||'{}');
  };

  watch(character, saveStorage,{deep: true});
  watch(() => character.value && character.value.abilities, (newValue) => {
    if(newValue) {
      calcDatasAbilities();
    }
  }, {deep: true});

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
  const isLineage = computed(() =>
    (versions.value !== null && character.value.race.source && versions.value.find(v => v.source === character.value.race.source)?.lineage)
    ||
    (bg.value != null && bg.value.ability != undefined)
  );
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
      if(opt.blindsight !== undefined) c.blindsight = opt.blindsight;
      if(opt.resist !== undefined) c.resist = opt.resist;
    });

    return c;
  });
  const computedRaceEntries = computed(() => {
    return computedRace.value.entries.filter((e:any) =>
      e.name &&
      !["Age","Size","Languages","Language","Superior Darkvision","Darkvision","Alignment","Speed","Appearance","Tool Proficiency"].includes(e.name) &&
      e.name.indexOf('Resistance') < 0 &&
      e.type === "entries"
    )
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

  const addDefaultSkills = (origin: string, profs: any, originName: string) => {
    if(profs) {
      const sp = profs[0];
      Object.keys(sp).filter((k: string) => k != "choose" && k != "any").forEach((k: string) => {
        let name: any = Skills.find(s => s.prof == k)?.name;
        addSkillProf('skills', origin, name, false, originName);
      });
    }
  }
  const addDefaultExpertise = (origin: string, profs: any, originName: string) => {
    if(profs) {
      const sp = profs[0];
      Object.keys(sp).filter((k: string) => k != "anyProficientSkill").forEach((k: string) => {
        let name: any = Skills.find(s => s.prof == k)?.name;
        addSkillProf('expertises', origin, name, false, originName);
      });
    }
  }

  const addDefaultLanguage = (origin: string, profs: any, originName: string) => {
    if(profs) {
      const lp = profs[0];
      Object.keys(lp).filter((k: string) => LanguagesKey.includes(k)).forEach((k: string) => {
        addSkillProf('languages', origin, k, false, originName);
      });
    }
  }
  const addDefaultTools = (origin: string, profs: any, originName: string) => {
    if(profs) {
      const tp = profs[0];
      Object.keys(tp).filter((k: string) => ToolsKey.includes(k)).forEach((k: string) => {
        addSkillProf('tools', origin, k, false, originName);
      });
    }
  }

  const addDefaultEquipmentProf = (key: string, origin: string, profs: any, originName: string) => {
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
        addSkillProf(key, origin, sk, false, originName);
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
        addDefaultSkills('race', computedRace.value.skillProficiencies, computedRace.value.name);
        addDefaultLanguage('race', computedRace.value.languageProficiencies, computedRace.value.name);
        addDefaultTools('race', computedRace.value.toolProficiencies, computedRace.value.name);
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
      character.value.blindsight = null;
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
    character.value.darkvision = d.darkvision;
    character.value.blindsight = d.blindsight;
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
      calcDatasAbilities();
    }
    if(d.resist) {
      character.value.resist = [];
      d.resist.forEach((a: any) => {
        if("string" == typeof a) {
          addSkillProf('resist', 'race', a, false, d.name);
        }
      })
    }
    if(d.weaponProficiencies) {
      addDefaultEquipmentProf('weapon', 'race', d.weaponProficiencies[0], d.name);
    }
    if(d.armorProficiencies) {
      addDefaultEquipmentProf('armor', 'race', d.armorProficiencies[0], d.name);
    }
  }

  const changeFirstClass = (c: any) => {
    const i = 0;
    const cl = character.value.class[i];
    if(cl.name === c.name) return;
    character.value.leveling = [c.name];
    cl.name = c.name;
    initNewClass(cl, c);
    calculSpellcasterLevel();
    character.value.manualSteps = [];
    calcDatasClass(true);
    if(i == 0) {
      setHPAverage();
    }
  }
  const initNewClass = (cl:any, c:any) => {
    cl.subclass = null;
    cl.dice = c.hd.faces;
    cl.casterProgression = c.casterProgression || null;
    cl.preparedSpells = {has: c.preparedSpells != undefined || c.preparedSpellsProgression != undefined};
    cl.spellcastingAbility = c.spellcastingAbility || null;
  }

  const changeClass = (c: any) => {
    let nc = {
      ...defaultClass(),
      name: c.name,
      level: c.level
    }

    let l = character.value.level - 1;
    character.value.leveling[l] = c.name;
    character.value.class = character.value.class.filter((c:any) => character.value.leveling.includes(c.name));

    const cl = character.value.class.find((cl:any) => cl.name == c.name);
    if(!cl) {
      initNewClass(nc, c);
      character.value.class.push(nc);
    }
    character.value.class.forEach((cl:any) => {
      cl.level = character.value.leveling.filter((l:string) => l == cl.name).length
    });

    calculSpellcasterLevel();
    character.value.manualSteps = [];
    calcDatasClass(false);
    setHPAverage();
  }
  const resetSubclass = () => {
    resetSkills('subclass');
    resetLanguages('subclass');
    resetTools('subclass');
    resetWeapons('subclass');
    resetSpells('subclass');
    resetEquipmentProf('weapon', 'subclass');
    resetEquipmentProf('armor', 'subclass');
    resetFeatures('subclass');
    lastClass.value.option = null;
  }
  const changeSubclass = (e: any) => {
    if (!e.target.value) return;
    const subclass = e.target.value;
    resetSubclass();

    lastClass.value.subclass = subclass;
    const sub = classesStore.findSubclass(lastClass.value.name, subclass);
    if(sub) {
      if(sub.casterProgression) {
        lastClass.value.casterProgression = sub.casterProgression;
        lastClass.value.preparedSpells = {has: false /*sub.preparedSpells != undefined*/};
        lastClass.value.spellcastingAbility = sub.spellcastingAbility || null;
      }
      else if (computedLastClass.value && !computedLastClass.value.casterProgression) {
        lastClass.value.casterProgression = null;
        lastClass.value.spellcastingAbility = null;
      }
      calculSpellcasterLevel();
    }
    calcDatasClass(false);
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
            if(character.value.level > 1) {
              clvl = Math.ceil(c.level / 2);
            }
            break;
          case "artificer":
            clvl = Math.ceil(c.level / 2);
            break;
          case "1/3":
            clvl = Math.ceil(c.level / 3);
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
        if(props.version == "2024") {
          c.preparedSpells.count = classesStore.preparedSpellsProgression(c.name, c.subclass, c.level);
        }
        else {
          c.preparedSpells.count = clvl + mod(c.spellcastingAbility);
          if (c.preparedSpells.count <= 0) c.preparedSpells.count = 1;
        }
      }
    });
    character.value.spellcasterlevel = l;
  }

  const calcDatasClass = (reset: boolean = true) => {
    if(reset) {
      resetSkills('class');
      resetLanguages('class');
      resetTools('class');
      resetWeapons('class');
      resetSpells('class');
      resetEquipmentProf('weapon', 'class');
      resetEquipmentProf('armor', 'class');
      resetFeatures('class');
      resetSubclass();
      resetSpells('race'); // just in case
      changeStartingEquipment();
    }
    character.value.spellcasting = [];
    character.value.class.forEach((c:any, i:number) => {
      const cl = classes.value.find(c1 => c1.name === c.name);
      if(!cl) return;
      if(i == 0) {
        character.value.save = cl.proficiency;
        if(c.spellcastingAbility) {
          character.value.spellcasting.push(c.spellcastingAbility);
        }
        if(cl.startingProficiencies && c.level == 1) {
          addDefaultTools('class', cl.startingProficiencies.toolProficiencies, cl.name)
          addDefaultEquipmentProf('weapon', 'class', cl.startingProficiencies.weapons, cl.name);
          addDefaultEquipmentProf('armor', 'class', cl.startingProficiencies.armor, cl.name);
        }
      }
      else {
        if(c.spellcastingAbility && !character.value.spellcasting.includes(c.spellcastingAbility)) {
          character.value.spellcasting.push(c.spellcastingAbility);
        }
        if(cl.multiclassing.proficienciesGained && c.level == 1) {
          addDefaultTools('class', cl.multiclassing.proficienciesGained.toolProficiencies, cl.name)
          addDefaultEquipmentProf('armor', 'class', cl.multiclassing.proficienciesGained.armor, cl.name);
          addDefaultEquipmentProf('weapon', 'class', cl.multiclassing.proficienciesGained.weapons, cl.name);
        }
      }

      if(classProficienciesGained.value) {
        classProficienciesGained.value.forEach((cpg:any) => {
          addDefaultSkills(cpg.origin, cpg.skills, cpg.originName);
          addDefaultExpertise(cpg.origin, cpg.expertise, cpg.originName);
          addDefaultTools(cpg.origin, cpg.tools, cpg.originName);
          addDefaultLanguage(cpg.origin, cpg.languages, cpg.originName);
          addDefaultEquipmentProf('armor', cpg.origin, cpg.armors, cpg.originName);
          addDefaultEquipmentProf('weapon', cpg.origin, cpg.weapons, cpg.originName);
          ['resist', 'immune', 'vulnerable', 'conditionImmune'].forEach((k:string) => {
            if(cpg[k]) {
              cpg[k].forEach((a: any) => {
                if("string" == typeof a) {
                  addSkillProf(k, cpg.origin, a, false, cpg.originName);
                }
              })
            }
          });
          if(cpg.darkvision && (!character.value.darkvision || cpg.darkvision >= character.value.darkvision)) {
            character.value.darkvision = cpg.darkvision;
          }
          if(cpg.blindsight && (!character.value.blindsight || cpg.blindsight >= character.value.blindsight)) {
            character.value.blindsight = cpg.blindsight;
          }
          if(cpg.speed) {
            character.value.speed = {
              ...character.value.speed,
              ...cpg.speed
            }
          }
        });
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
      resetFeat('background');
      resetEquipmentProf('weapon', 'background');
      resetEquipmentProf('armor', 'background');
      addDefaultSkills('background', bg.value.skillProficiencies, bg.value.name);
      addDefaultLanguage('background', bg.value.languageProficiencies, bg.value.name);
      addDefaultTools('background', bg.value.toolProficiencies, bg.value.name);
      if(bg.value.weaponProficiencies) addDefaultEquipmentProf('weapon', 'background', bg.value.weaponProficiencies[0], bg.value.name);
      // no armorProficiencies
      character.value.startingEquipment.background = {};
      const msv = character.value.manualSteps.find((ms:any) => ms.step == 'startingEquipment');
      if(msv) {
        msv.valid = false;
      }
      if(props.version == "2024" && bg.value.ability) {
        character.value.abilities.str.bonus = 0;
        character.value.abilities.dex.bonus = 0;
        character.value.abilities.con.bonus = 0;
        character.value.abilities.int.bonus = 0;
        character.value.abilities.wis.bonus = 0;
        character.value.abilities.cha.bonus = 0;
      }
    }
  }
  const resetSkills = (origin: string, originName: string|null = null) => {
    character.value.skills = character.value.skills.filter((sk:any) => !(sk.origin == origin && sk.level == character.value.level && (originName == null || sk.originName == originName)));
    character.value.expertises = character.value.expertises.filter((sk:any) => !(sk.origin == origin && sk.level == character.value.level && (originName == null || sk.originName == originName)));
  }
  const addSkillProf = (key:string, origin: string, name: string, choose: boolean = true, originName:string) => {
    if(!name) return;
    const o = {
      name: name,
      origin: origin,
      originName: originName,
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

  const choosePreparedSpells = (lc: any, origin: string, originName: string, ch: any, max: number, known: number, fc: string) => {
    if (lc.preparedSpells.count && lc.preparedSpells.count > 0) {
      const selected = character.value.spells.filter((s: any) => s.origin == origin && s.originName == originName && s.spellslot > 0 && s.choose && s.prepared).length;
      ch.prepared.push({
        known: lc.preparedSpells.count,
        selected: selected,
        maxlevel: max,
        onlyPrepared: false,
        origin: 'class',
        originName: lc.name,
        from: {}
      })
      let idx = ch.prepared.length - 1;
      if (known == -1) {
        for (let l = 1; l <= max; l++) {
          ch.prepared[idx].from[l] = spellsStore.spellsChoice(fc, l);
        }
      } else if (known > 0) {
        ch.prepared[idx].onlyPrepared = true;
        for (let l = 1; l <= max; l++) {
          const spellsChooses = character.value.spells.filter((s: any) => s.origin == origin && s.originName == originName && s.spellslot == l && s.choose).map((s: any) => s.name);
          ch.prepared[idx].from[l] = spellsStore.spellsChoiceFromList(spellsChooses);
        }
      }
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
    ch.prepared = [];
    ch.tools = [];
    ch.additionalSpells = [];
    ch.startingEquipment = [];
    ch.startingEquipmentManual = [];
    ch.weapon = [];
    ch.features = [];

    const lc = lastClass.value;

    if(level == 1) {
      if (computedRace.value) {
        if(computedRace.value.skillProficiencies) {
          chooseAddSkill('race', computedRace.value.skillProficiencies[0], computedRace.value.name);
        }
        if(computedRace.value.languageProficiencies) {
          chooseAddLanguage('race', computedRace.value.languageProficiencies, computedRace.value.name);
        }
        if(computedRace.value.toolProficiencies) {
          chooseAddTools('race', computedRace.value.toolProficiencies[0], computedRace.value.name);
        }
      }
      if (lc) {
        const cl = classes.value.find((c:Class) => c.name === lc.name);
        if(cl) {
          if (cl.startingProficiencies.skills) {
            chooseAddSkill('class', cl.startingProficiencies.skills[0], cl.name)
          }
          if (cl.startingProficiencies.toolProficiencies) {
            chooseAddTools('class', cl.startingProficiencies.toolProficiencies[0], cl.name);
          }
        }
      }
      if (bg.value) {
        if(bg.value.skillProficiencies) {
          chooseAddSkill('background', bg.value.skillProficiencies[0], bg.value.name);
        }
        if(bg.value.languageProficiencies) {
          chooseAddLanguage('background', bg.value.languageProficiencies, bg.value.name);
        }
        if(bg.value.toolProficiencies) {
          chooseAddTools('background', bg.value.toolProficiencies[0], bg.value.name);
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
    else if (lc && lc.level == 1) {
      const cl = classes.value.find((c:Class) => c.name === lc.name);
      if(cl && cl.multiclassing.proficienciesGained) {
        if (cl.multiclassing.proficienciesGained.skills) {
          chooseAddSkill('class', cl.multiclassing.proficienciesGained.skills[0], cl.name)
        }
        if (cl.multiclassing.proficienciesGained.toolProficiencies) {
          chooseAddTools('class', cl.multiclassing.proficienciesGained.toolProficiencies[0], cl.name);
        }
      }
    }

    if(computedRace.value) {
      if (computedRace.value.additionalSpells) {
        chooseAddSpells('race', computedRace.value.name, computedRace.value.additionalSpells);
      }
    }

    if(computedLastClass.value) {
      if(computedLastClass.value.additionalSpells) {
        chooseAddSpells('class', computedLastClass.value.name, computedLastClass.value.additionalSpells);
      }
      if(computedLastClass.value.optionalfeatureProgression) {
        chooseFeatureProgression('class', computedLastClass.value.name, computedLastClass.value.optionalfeatureProgression);
      }
    }
    if(computedLastSubclass.value) {
      if(computedLastSubclass.value.additionalSpells) {
        let option = null;
        if(lastClass.value.option) option = lastClass.value.option;
        chooseAddSpells('subclass', computedLastSubclass.value.shortName, computedLastSubclass.value.additionalSpells, option);
      }
      if(computedLastSubclass.value.optionalfeatureProgression) {
        chooseFeatureProgression('subclass', lastClass.value.subclass, computedLastSubclass.value.optionalfeatureProgression);
      }
    }

    // if (feat.skillProficiencies) chooseAddSkill('feat', feat.skillProficiencies[0], f.name);
    // if (feat.expertise) chooseAddExpertise('feat', feat.expertise[0], f.name);
    if(classProficienciesGained.value) {
      classProficienciesGained.value.forEach((cpg:any) => {
        if(cpg.skills) chooseAddSkill(cpg.origin, cpg.skills[0], cpg.originName);
        if(cpg.expertise) chooseAddExpertise(cpg.origin, cpg.expertise[0], cpg.originName);
        if(cpg.languages) chooseAddLanguage(cpg.origin, cpg.languages, cpg.originName);
        if(cpg.tools) chooseAddTools(cpg.origin, cpg.tools[0], cpg.originName);
        if(cpg.weapons) chooseAddWeapons(cpg.origin, cpg.weapons[0], cpg.originName)
        if(cpg.optionalfeatureProgression) chooseFeatureProgression(cpg.origin, cpg.originName, cpg.optionalfeatureProgression);
        if(cpg.additionalSpells) {
          let option = null;
          if (lastClass.value.option) option = lastClass.value.option;
          chooseAddSpells(cpg.origin, cpg.originName, cpg.additionalSpells, option);
        }
      });
    }

    character.value.feats.filter((f:any) => f.level <= level && f.name).forEach((f:any) => {
      const feat = featsStore.findByName(f.name);
      if(feat) {
        if(f.level == level) {
          if (feat.skillProficiencies) chooseAddSkill('feat', feat.skillProficiencies[0], f.name);
          if (feat.expertise) chooseAddExpertise('feat', feat.expertise[0], f.name);
          if (feat.languageProficiencies) chooseAddLanguage('feat', feat.languageProficiencies, f.name);
          if (feat.toolProficiencies) chooseAddTools('feat', feat.toolProficiencies[0], f.name);
          if (feat.additionalSpells) chooseAddSpells('feat', f.name, feat.additionalSpells, f.option);
        }
        if(feat.optionalfeatureProgression) {
          chooseFeatureProgression('feat', feat.name, feat.optionalfeatureProgression);
        }
      }
    });
    const featuresNames: string[] = [];
    character.value.features.forEach((f:any) => {
      f.choices.forEach((c:string) => {
        const of = classesStore.optionalFeatures.find(of => of.name == c);
        if(of) {
          featuresNames.push(c);
          chooseFeatureProgression('feature', c, of.optionalfeatureProgression);
          if(of.additionalSpells) chooseAddSpells('feature', of.name, of.additionalSpells);
          if(of.skillProficiencies) chooseAddSkill('feature', of.skillProficiencies[0], of.name);
        }
      })
    });
    const test = character.value.features.filter((f:any) => f.level == level && f.name && f.origin == 'feature' && !featuresNames.includes(f.originName)).map((f:any) => f.name);
    if(test.length > 0) {
      character.value.features = character.value.features.filter((f:any) => !test.includes(f.name));
    }

    // Spells
    if(lc && (spellSlotsInfo.value || spellSlotsPactInfo.value)) {
      const cantrip = classesStore.cantripProgression(lc.name, lc.subclass, lc.level);
      const known = classesStore.spellsKnownProgression(lc.name, lc.subclass, lc.level);

      let max = null;
      if(spellSlotsInfo.value) max = spellSlotsInfo.value.max;
      if(spellSlotsPactInfo.value) max = Math.max(max, spellSlotsPactInfo.value.max);
      let fc = lc.name;
      let origin = "class";
      let originName = lc.name;
      if(['Fighter','Rogue'].includes(lastClass.value.name)) {
        fc = 'Wizard';
        origin = "subclass";
        originName = lastClass.value.subclass;
      }

      if (cantrip) {
        const selected = character.value.spells.filter((s: any) => s.origin == origin && s.originName == originName && s.spellslot == 0 && s.choose).length;
        ch.cantrips = {
          known: cantrip,
          selected: selected,
          origin: origin,
          originName: originName,
          from: spellsStore.spellsChoice(fc, 0)
        };
      }
      if(max) {
        if (known > 0) {
          const selected = character.value.spells.filter((s: any) => s.origin == origin && s.originName == originName && s.spellslot > 0 && s.choose).length;
          ch.spells = {
            known: known,
            selected: selected,
            maxlevel: max,
            prepared: lc.preparedSpells.count && lc.preparedSpells.count > 0 ? false : true,
            origin: origin,
            originName: originName,
            from: {}
          }
          for (let l = 1; l <= max; l++) {
            ch.spells.from[l] = spellsStore.spellsChoice(fc, l);
          }
        }

        choosePreparedSpells(lc, origin, originName, ch, max, known, fc);
        character.value.class.filter((c:any) => c.name != lc.name).forEach((lcc:any) => {
          let kn2 = classesStore.spellsKnownProgression(lcc.name, lcc.subclass, lcc.level)
          choosePreparedSpells(lcc, "class", lcc.name, ch, max, kn2, lcc.name);
        });
      }
    }
  }

  const chooseFeatureProgression = (origin: string, originName: string, optionalfeatureProgression: any) => {
    if(!lastClass.value) return;
    // const level = character.value.level;
    let progression = classesStore.getProgression(optionalfeatureProgression, lastClass.value);
    if (progression) {
      const ch = chooses.value.features;
      progression.forEach((p: any) => {
        let idx = ch.findIndex((c:any) => c.name == p.name && c.featureType == p.featureType);
        let selected = 0;
        character.value.features.filter((f:any) => f.name == p.name && f.featureType == p.featureType).forEach((f:any) => {
          selected += f.choices.length;
        });
        let choice = {
          origin: origin,
          originName: originName,
          count: p.count,
          featureType: p.featureType,
        };
        if(idx == -1) {
          ch.push({
            name: p.name,
            featureType: p.featureType,
            total: p.count,
            selected: selected,
            choices: [choice],
            from: p.from
          });
        }
        else {
          ch[idx].selected = selected;
          ch[idx].total += p.count;
          ch[idx].choices.push(choice);
        }
      });
    }
  }

  const chooseAddSkill = (origin:string, sp: any, originName:string) => {
    if(!sp) return;
    const ch = chooses.value.skills;
    if(sp.choose && sp.choose.from) {
      ch.push({
        origin: origin,
        originName: originName,
        count: sp.choose.count || 1,
        from: Skills.filter(s => sp.choose.from.includes(s.prof)).map(s => s.name)
      });
    }
    else if(sp.any) {
      ch.push({
        origin: origin,
        originName: originName,
        count: sp.any,
        from: Skills.map(s => s.name)
      });
    }
  }
  const chooseAddExpertise = (origin:string, sp: any, originName:string) => {
    if (!sp) return;
    const ch = chooses.value.expertises;
    ch.push({
      origin: origin,
      originName: originName,
      count: sp.anyProficientSkill,
      from: character.value.skills.map((s:any) => s.name)
    });
  }

  const chooseAddLanguage = (origin:string, lp: any, originName:string) => {
    if(!lp) return;
    const ch = chooses.value.languages;
    lp.forEach((l:any) => {
      Object.keys(l).filter(k => !LanguagesKey.includes(k)).forEach(k => {
        if(k === "anyStandard") {
          ch.push({
            origin: origin,
            originName: originName,
            count: l.anyStandard || 1,
            from: LanguagesStandard.map(l => l.key)
          });
        }
        else if(k === "any") {
          ch.push({
            origin: origin,
            originName: originName,
            count: l.any || 1,
            from: LanguagesKey
          });
        }
        else if(k === "choose") {
          ch.push({
            origin: origin,
            originName: originName,
            count: 1,
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
    character.value.languages = character.value.languages.filter((sk:any) => !(sk.origin == origin && sk.level == character.value.level));
  }

  const getToolsFrom = (k: string): string[] => {
    if(k == "any") return ToolsKey;
    if(k == "anyArtisansTool" || k == "artisan's tools") return ToolsArtisan.map(l => l.key);
    if(k == "anyMusicalInstrument" || k == "musical instrument") return ToolsInstrument.map(l => l.key);
    if(k == "anyGamingSet" || k == "gaming set") return ToolsGamingsets.map(l => l.key);
    console.error(`ToolsKey not supported`, k);
    return [];
  }

  const chooseAddTools = (origin:string, l: any, originName:string) => {
    if(!l) return;
    const ch = chooses.value.tools;
    Object.keys(l).filter(k => !ToolsKey.includes(k)).forEach(k => {
      if(k == "choose") {
        const from: string[] = [];
        l.choose.from.forEach((f:string) => {
          if(ToolsKey.includes(f)) from.push(f);
          else from.push(...getToolsFrom(f));
        });
        ch.push({
          origin: origin,
          originName: originName,
          count: l.choose.count || 1,
          from: from
        });
      }
      else {
        ch.push({
          origin: origin,
          originName: originName,
          count: l[k] || 1,
          from: getToolsFrom(k)
        });
      }
    });
  }
  const resetTools = (origin: string) => {
    character.value.tools = character.value.tools.filter((sk:any) => !(sk.origin == origin && sk.level == character.value.level));
  }

  const chooseAddWeapons = (origin:string, l: any, originName:string) => {
    if(!l) return;
    const ch = chooses.value.weapon;
    Object.keys(l).filter(k => k == "choose").forEach(_ => {
      const from: string[] = [];
      l.choose.from.forEach((f:string) => {
        equipmentProf.filter(ep => ep.key == f).forEach(ep => {
          from.push(...itemsStore.search(ep.search).map(sl => itemKeyToValue(sl)))
        });
      });
      ch.push({
        origin: origin,
        originName: originName,
        count: l.choose.count || 1,
        from: from
      });
    });
  }
  const resetWeapons = (origin: string) => {
    character.value.weapon = character.value.weapon.filter((sk:any) => !(sk.origin == origin && sk.level == character.value.level));
  }

  const extractSpellslotsFrom = (k: any, spellslots: any, from: any, origin: string, originName: string, limit: string|null = null, limitNumber: string|null = null) => {
    if ("string" == typeof k) {
      const n = k.indexOf('#') == -1 ? k : k.substring(0, k.indexOf('#'));
      const s = spellsStore.findByName(n);
      if (s) {
        from[s.level].push(s);
        addSpell(s.name, s.level, false, true, origin, originName);
        addSpellLimit(s.name, origin, originName, limit, limitNumber);
      }
      else {
        console.error(`Spell ${n} not found`);
      }
    }
    else if (k.choose) {
      if ("string" == typeof k.choose) {
        if(k.choose.length == 0) k.choose = "level=0;1;2;3;4;5;6;7;8;9";
        const split = k.choose.split("|");
        let resClass: any = null;
        let resLvl: any = null;
        let resSchool: any = null
        split.forEach((s: string) => {
          const a = /([^=]*)=([^=]*)/;
          const g = a.exec(s);
          if (g && g.length == 3) {
            if (g[1] == 'class') resClass = g[2];
            if (g[1] == 'level') resLvl = g[2];
            if (g[1] == 'school') resSchool = g[2].split(';');
          }
        })
        if (resLvl != null) {
          if(!isNaN(resLvl)) {
            const spls = spellsStore.spellsChoice(resClass, parseInt(resLvl), resSchool);
            from[resLvl].push(...spls);
            spellslots[resLvl] += k.count || 1;
          }
          else {
            resLvl.split(';').forEach((l: string) => {
              if(from[l].length == 0) {
                const spls = spellsStore.spellsChoice(resClass, parseInt(l), resSchool);
                from[l].push(...spls);
              }
            })
            globalCount.value += k.count || 1;
          }
        }
        else {
          console.error('Error extract spell choose', k.choose);
        }
      }
      else if(k.choose.from) {
        k.choose.from.forEach((f:string) => {
          const s = spellsStore.findByName(f);
          if (s) {
            from[s.level].push(s);
            spellslots[s.level] = k.choose.count || 1;
          }
        })
      }
      else {
        console.error('Wrong format additionalSpell', k.choose);
      }
    }
  }

  const globalCount = ref(0);
  const chooseAddSpells = (origin: string, originName: string, as: any, option:string|null = null) => {
    if(!as) return;
    const ch = chooses.value.additionalSpells;
    let indexChoice = null;
    if(as.length == 1 && !option) {
      indexChoice = 0;
    }
    else if(option) {
      indexChoice = as.findIndex((a:any, i: number) => a.name == option || (a.name == null && option == `Option ${i+1}`));
    }
    let o = {
      origin: origin,
      originName: originName,
      option: option,
      optionChoice: as.length > 1 ? as.map((a:any, i: number) => a.name || `Option ${i+1}`) : null,
      count: 0,
      selected: 0,
      spells: [] as any[]
    }
    globalCount.value = 0;
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
          if(kn == "_" || kn <= character.value.level) {
            if(c.known[kn].rest) {
              Object.keys(c.known[kn].rest).forEach((o: any) => {
                c.known[kn].rest[o].forEach((k: any) => extractSpellslotsFrom(k, spellslots, from, origin, originName));
              })
            }
            else if(c.known[kn]._) {
              c.known[kn]._.forEach((k: any) => extractSpellslotsFrom(k, spellslots, from, origin, originName));
            }
            else if(Array.isArray(c.known[kn])) {
              c.known[kn].forEach((k: any) => extractSpellslotsFrom(k, spellslots, from, origin, originName));
            }
          }
        })
      }
      if(c.innate) {
        Object.keys(c.innate).forEach(kn => {
          if(kn == "_" || kn == character.value.level) {
            let innate = c.innate[kn];
            if(Array.isArray(innate)) {
              innate.forEach((k: any) => extractSpellslotsFrom(k, spellslots, from, origin, originName));
            }
            if (innate.will) {
              innate.will.forEach((k: any) => extractSpellslotsFrom(k, spellslots, from, origin, originName, "will"));
            }
            if (innate.ritual) {
              innate.ritual.forEach((k: any) => extractSpellslotsFrom(k, spellslots, from, origin, originName, "ritual"));
            }
            if (innate.daily) {
              Object.keys(innate.daily).forEach((o: any) => {
                innate.daily[o].forEach((k: any) => extractSpellslotsFrom(k, spellslots, from, origin, originName, "daily", o));
              })
            }
            if (innate.rest) {
              Object.keys(innate.rest).forEach((o: any) => {
                innate.rest[o].forEach((k: any) => extractSpellslotsFrom(k, spellslots, from, origin, originName, "rest", o));
              })
            }
            if (innate.resource) {
              Object.keys(innate.resource).forEach((o: any) => {
                innate.resource[o].forEach((k: any) => extractSpellslotsFrom(k, spellslots, from, origin, originName, c.resourceName || "resource", o));
              })
            }
          }
        });
      }
      if(c.expanded && (spellSlotsPactInfo.value != null || spellSlotsInfo.value != null)) {
        Object.keys(c.expanded).forEach(kn => {
          if(!kn.startsWith('s')) {
            // something here ?
          }
          else {
            if (spellSlotsInfo.value) {
              if (spellSlotsInfo.value[kn] <= 0) return;
            }
            if (spellSlotsPactInfo.value) {
              if (spellSlotsPactInfo.value.max < parseInt(kn.substring(1))) return;
            }
          }
          c.expanded[kn].forEach((k: any) => extractSpellslotsFrom(k, spellslots, from, origin, originName));
        })
      }
      if(c.prepared && (spellSlotsPactInfo.value != null || spellSlotsInfo.value != null)) {
        Object.keys(c.prepared).forEach(kn => {
          if(kn == lastClass.value.level) {
            c.prepared[kn].forEach((k: any) => extractSpellslotsFrom(k, spellslots, from, origin, originName));
          }
        })
      }

      Object.keys(spellslots).forEach(spellslot => {
        if(from[spellslot] && from[spellslot].length > 0) {
          spells.push({
            spellslot: spellslot,
            count: spellslots[spellslot],
            selected: character.value.spells.filter((s:any) => s.origin == origin && (s.originName == originName || s.originName == null || originName == null) && s.level <= character.value.level && s.spellslot == spellslot && s.choose).length,
            from: from[spellslot]
          });
        }
      })

      if(c.name && as.length == 1 && (origin == "class" || origin == "subclass")) {
        o.originName = c.name
        o.origin = "feature";
      };
      o.count = globalCount.value;
      o.selected = character.value.spells.filter((s:any) => s.origin == o.origin && (s.originName == o.originName || s.originName == null || originName == null) && s.level <= character.value.level && s.choose).length,
      o.spells = spells;
    }
    if(o.spells.length > 0 || as.length > 1) {
      ch.push(o);
    }
  }

  const changeOption = (origin: string, originName: string, option: any) => {
    let item = null;
    if(origin == 'feat') {
      item = character.value.feats.find((s:any) => s.name == originName);
      character.value.spells = character.value.spells.filter((s:any) => !(s.origin == origin && s.originName == originName));
    }
    else if(origin == 'subclass') {
      item = character.value.class.find((s:any) => s.subclass == originName);
      character.value.spells = character.value.spells.filter((s:any) => !(s.origin == origin && s.originName == originName));
    }
    else {
      console.error('changeOption', 'origin not supported', origin);
    }
    if(item) {
      item.option = option;
    }
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

  const classes = computed(() => classesStore.getDefaults);
  const classesUp = computed(() => {
    if(character.value.level > 1) {
      let leveling = character.value.leveling.filter((_:any,i:number) => i < character.value.level - 1);
      return classes.value.map((c:any) => {
        return {
          ...c,
          level: leveling.filter((l:string) => l == c.name).length + 1
        }
      })
    }
  })
  const backgrounds = computed(() => bgStore.getDefaults);
  const feats = computed(() => featsStore.getDefaults(character.value));
  const bg = computed(() => backgrounds.value.find(b => b.name === character.value.background));
  const bgFeatures = computed(() => {
    if(!bg.value) return null;
    if(!bg.value.entries) return null;
    let fil = bg.value.entries.filter((be:any) => be.type == "entries" && be.data && be.data.isFeature);
    if(fil.length == 0) return null;
    return fil;
  });
  const bgStep = computed(() => ['background'].includes(step.value));

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

    if(props.version == "2024" && bg.value && bg.value.ability) {
      if(!bg.value.ability[0].choose.weighted.from.includes(key)) {
        return true;
      }
    }

    if(bonus === 2) {
      for (const i in Abilities) {
        const a = Abilities[i].key;
        if(a !== key && character.value.abilities[a].bonus === 2) {
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
  const modDex = computed(() => mod('dex'));
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

  const lastClass = computed(() => {
    let n = character.value.leveling.at(-1);
    let cl = character.value.class.find((cl:any) => cl.name == n);
    if(!cl || !cl.name) return null;
    return cl;
  });
  const computedLastClass = computed(() => lastClass.value ? classes.value.find(c => c.name === lastClass.value.name) : null);
  const computedLastSubclass = computed(() => lastClass.value && lastClass.value.subclass ? classesStore.findSubclass(lastClass.value.name, lastClass.value.subclass) : null);
  const classFeatures = computed(() => {
    if(!lastClass.value) return null;
    let cl = lastClass.value;
    return classesStore.getFeatures(cl.name, cl.subclass, cl.level);
  });
  const classProficienciesGained = computed(() => lastClass.value && classesStore.getProficienciesGained(lastClass.value.name, lastClass.value.subclass, lastClass.value.level, character.value.excludeFeatures));
  const filterOptions = (name: string, from: any[]) => {
    if(!from) return [];
    const s = !search.value[name] ? "" : search.value[name].toLowerCase();
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
      (!hasConcentration || f.duration[0].concentration)
      &&
      (!hasRitual || f.meta?.ritual)
    );
  }

  const setHPAverage = () => {
    calcHPAverage();
    calcHPMax();
  }
  const calcHPAverage = () => {
    let lc = lastClass.value;
    if(lc) {
      let l = lc.level - 1;
      if(character.value.hp.option === 'average' || !lc.hps[l]) {
        if (l == 0 && character.value.level == 1) {
          lc.hps[l] = lc.dice;
        } else {
          lc.hps[l] = (lc.dice / 2) + 1;
        }
      }
    }
  }
  const changeHP = (e: any) => {
    if (!e.target.value) return;
    lastClass.value.hps[lastClass.value.hps.length - 1] = parseInt(e.target.value);
    calcHPMax();
  }
  const calcHPMax = (force: boolean = false) => {
    if(!force && !validAbilities.value) {
      character.value.hp.max = 0;
      return;
    }
    let hp = 0;
    character.value.class.forEach((c:any) => {
      c.hps.forEach((d:number) => hp += Math.max(d+modCon.value,1));
      if(c.name == "Sorcerer" && c.subclass == "Draconic") hp += c.level
    });
    if(character.value.feats.find((f:any) => f.name == "Tough")) {
      hp += (character.value.level * 2);
    }
    character.value.hp.max = hp;
  }

  const fromProfs = (key:string, readonly: boolean = false) => {
    const from: string[] = [];
    if (chooses.value[key]) {
      chooses.value[key].forEach((ch: any) => {
        let multiple = 0;
        chooses.value[key].filter((f:any) => f.origin == ch.origin && f.originName == ch.originName).forEach((f:any) => {
          multiple += f.count;
        });
        const count = countProfByOrigin(key, ch.origin, ch.originName);
        if(ch.from) {
          if (readonly) {
            from.push(...ch.from);
          }
          else if(ch.count > count || multiple > count) {
            from.push(...ch.from);
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
  const jackofAllTrades = computed(() => character.value && character.value.class.find((cl:any) => cl.name == 'Bard' && cl.level >= 2) != null);
  const unarmoredDefense = computed(() => character.value && character.value.class.find((cl:any) => (cl.name == 'Monk' || cl.name == 'Barbarian') && cl.level >= 1) != null)
  const draconicResilience = computed(() => character.value && character.value.class.find((cl:any) => cl.name == 'Sorcerer' && cl.subclass == 'Draconic' && cl.level >= 1) != null)
  const calculSkills = computed(() => Skills.map(s => {
    const level = character.value.level;
    const skill = character.value.skills.find((c:any) => c.name == s.name);
    const expertise = character.value.expertises.find((c:any) => c.name == s.name);
    const from = fromProfs('skills');
    const fromExp = fromProfs('expertises');

    let profDisabled = !from.includes(s.name);
    let expDisabled = !fromExp.includes(s.name);
    let profSelected = false;
    let expSelected = false;
    if(skill) {
      profDisabled = skill.choose == false || skill.level != level;
      profSelected = true;
    }
    if(expertise) {
      expDisabled = expertise.choose == false || expertise.level != level;
      expSelected = true;
    }
    return {
      ...s,
      allDisabled: profDisabled && expDisabled && !profSelected,
      profDisabled: profDisabled,
      expDisabled: expDisabled,
      profSelected: profSelected,
      expSelected: expSelected,
      mod: fn(mod(s.attribute.substring(0,3)) + (!profSelected && jackofAllTrades.value ? Math.floor(prof.value / 2) : 0) + (profSelected?prof.value:0) + (expSelected?prof.value:0) )
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
        const count = countProfByOrigin(key,ch.origin,ch.originName);
        let multiple = 0;
        chooses.value[key].filter((f:any) => f.origin == ch.origin && f.originName == ch.originName).forEach((f:any) => {
          multiple += f.count;
        });
        if(count >= ch.count && count >= multiple) return true;
        addSkillProf(key, ch.origin, name, true, ch.originName);
        return false;
      })
    }
  }
  const countProfByOrigin = (key:string, origin: string, originName: string|null = null) => {
    return character.value[key].filter((s:any) => (s.origin == origin && (originName == null || s.originName == originName)) && s.choose && s.level == character.value.level).length;
  }
  const displayChoosesProf = (key: string, origin: string, originName: string|null = null) => {
    const c = chooses.value[key].find((sk:any) => sk.origin == origin && (originName == null || sk.originName == originName))
    let multiple = 0;
    chooses.value[key].filter((f:any) => f.origin == origin && (originName == null || f.originName == originName)).forEach((f:any) => {
      multiple += f.count;
    });
    if(c && countProfByOrigin(key, origin, originName) != multiple) {
      return null;
    };
    const s: string[] = [];
    const profs = character.value[key].filter((sk:any) => sk.origin == origin && (originName == null || sk.originName == originName) && ((c && sk.level == character.value.level) || character.value.level > 1)).map((sk:any) => sk.name);

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
  const computedLangRace = computed(() => displayChoosesProf('languages','race'));
  const computedLangBG = computed(() => displayChoosesProf('languages','background'));
  const computedToolsRace = computed(() => displayChoosesProf('tools','race'));
  const computedToolsBG = computed(() => displayChoosesProf('tools','background'));

  const computedExpertisesFeat = computed(() => displayChoosesProf('expertises','feat'));
  const computedSkillsFeat = computed(() => displayChoosesProf('skills','feat'));
  const computedToolsFeat = computed(() => displayChoosesProf('tools','feat'));
  const computedLangFeat = computed(() => displayChoosesProf('languages','feat'));
  const computedFeatures = (origin: string|null = null, originName: string|null = null) => {
    if(!character.value && !character.value.features) return
    const r = character.value.features.filter((f:any) => (f.origin == origin || origin == null) && (f.originName == originName || originName == null));
    origin != null && r.forEach((f:any) => {
      f.choices.forEach((c: string) => {
        r.push(...character.value.features.filter((f:any) => f.origin == 'feature' && f.originName == c));
      })
    });
    return r;
  };

  const openToken = () => {
    token.value = {
      show: true,
      error: null,
      url: character.value.appearance
    };
  }
  const changeToken = async () => {
    let check = false;
    let url = token.value.url ?? "";
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

  const resetFeat = (origin: string) => {
    const level = character.value.level;
    const ft = character.value.feats.find((f:any) => f.origin == origin && f.level == level);
    if(ft) {
      let prevName = ft.name;
      character.value.feats = character.value.feats.filter((sk: any) => !(sk.origin == origin && sk.level == level));
      character.value.abilities.improvments = character.value.abilities.improvments.filter((ip: any) => !(ip.origin == 'feat' && (ip.originName == prevName || prevName == null) && ip.level == level));
      resetSkills('feat');
      resetLanguages('feat');
      resetTools('feat');
      resetSpells('feat');
      resetEquipmentProf('weapon', 'feat');
      resetEquipmentProf('armor', 'feat');
      resetFeatures('feat');
    }
  }
  const changeFeats = (e: any, origin: string) => {
    resetFeat(origin);
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
    const feat = featsStore.findByName(name);
    if(feat == null) return;
    if(feat.ability && feat.ability[0].choose === undefined) {
      Object.keys(feat.ability[0]).forEach((a:any) => {
        improveAbility(a, 'feat', name);
      });
    }
    addDefaultSkills('feat', feat.skillProficiencies, feat.name);
    addDefaultLanguage('feat', feat.languageProficiencies, feat.name);
    addDefaultTools('feat', feat.toolProficiencies, feat.name);

    if(feat.weaponProficiencies) addDefaultEquipmentProf('weapon', 'feat', feat.weaponProficiencies[0], feat.name);
    if(feat.armorProficiencies) addDefaultEquipmentProf('armor', 'feat', feat.armorProficiencies[0], feat.name);
  }

  const improveAbility = (ability: string, origin: string, originName: string|null = null, value: number = 1) => {
    const level = character.value.level;
    if(!character.value.abilities.improvments) character.value.abilities.improvments = [];
    const imps = character.value.abilities.improvments;
    const f = imps.find((ip:any) => ip.origin == origin && ip.level == level && ip.ability == ability);

    const no = {
      origin: origin,
      originName: originName,
      level: level,
      ability: ability,
      value: value
    };

    if(origin != 'class') {
      character.value.abilities.improvments = imps.filter((ip: any) => !(ip.origin == origin && ip.level == level));
      if (f) {
        return;
      }
      character.value.abilities.improvments.push(no);
    }
    else if(origin == 'class') {
      if (f) {
        if(f.value == value) {
          character.value.abilities.improvments = imps.filter((ip: any) => !(ip.origin == origin && ip.level == level && ip.ability == ability));
        }
        else {
          f.value = value;
        }
      }
      else {
        if(value == 2) {
          character.value.abilities.improvments = imps.filter((ip: any) => !(ip.origin == origin && ip.level == level));
        }
        character.value.abilities.improvments.push(no);
      }
    }
  }

  const changeFeature = (e: any, feature: string, featureType: string) => {
    if (!e.target.value) return;
    const level = character.value.level;
    const option = e.target.value;
    const fts: any[] = character.value.features;

    const choose = chooses.value.features.find((f:any) => f.name == feature && f.featureType == featureType);
    choose.choices.every((choice:any) => {
      const ft = fts.find((f:any) => f.name == feature && f.origin == choice.origin && f.originName == choice.originName && f.featureType == choice.featureType);
      const nt = {
        name: feature,
        origin: choice.origin,
        originName: choice.originName,
        featureType: choice.featureType,
        level: level
      }

      if(!e.target.checked) {
        if(ft && ft.choices.includes(option)) {
          let choices = ft.choices.filter((c: string) => c != option);
          ft.choices = choices;
          resetSpells('feature', option);
          resetSkills('feature', option);
          return false;
        }
        return true;
      }
      if(choose.total == 1) {
        if(!ft) {
          fts.push({
            ...nt,
            choices: [option]
          });
        }
        else {
          resetSpells('feature', ft.choices[0]);
          resetSkills('feature', ft.choices[0]);
          ft.choices = [option];
        }
      }
      else {
        if(ft && ft.choices.length >= choice.count) return true;
        let choices = ft?.choices || [];
        choices.push(option);
        if(!ft) {
          fts.push({
            ...nt,
            choices: choices
          });
        }
        else {
          ft.choices = choices;
        }
        return false;
      }
    });
  }
  const isFeatureCheck = (feature: string, option: string) => {
    return character.value.features.find((ft:any) => ft.name == feature && ft.choices.includes(option))
  }
  const isFeatureDisabled = (feature: string, option: string, featureType: string) => {
    // return false;
    const ftc = isFeatureCheck(feature, option);
    if(ftc && ftc.featureType != featureType) return true;
    // const level = character.value.level;
    if(ftc) {
    //   if(ftc.level != level) return true;
      return false;
    }
    const ch = chooses.value.features.find((ft:any) => ft.name == feature && ft.featureType == featureType);
    if(ch.total == 1) return false;
    return ch.selected >= ch.total;
  }
  const resetFeatures = (origin: string) => {
    character.value.features = character.value.features.filter((sk:any) => !(sk.origin == origin && sk.level == character.value.level));
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
    let pact = character.value.class.find((c:any) => c.casterProgression == "pact");
    if(pact) {
      return spellSlotsPact(pact.level);
    }
  });

  const computedSpells = computed(() => {
    if(character.value && character.value.spells) {
      let r:any = [];
      character.value.spells.forEach((s:any) => {
        let is = r.findIndex((rf:any) => rf.spellslot == s.spellslot);
        if(is == -1) {
          r.push({
            spellslot: s.spellslot,
            origins: []
          });
          is = r.findIndex((rf:any) => rf.spellslot == s.spellslot);
        }
        let io = r[is].origins.findIndex((rf:any) => rf.name == s.originName);
        if(io == -1) {
          r[is].origins.push({
            name: s.originName,
            spells: []
          });
          io = r[is].origins.findIndex((rf:any) => rf.name == s.originName);
        }
        r[is].origins[io].spells.push({
          ...s,
          info: spellsStore.findByName(s.name)?.info
        });
        r[is].origins[io].spells.sort((a:any, b:any) => a.name.localeCompare(b.name));
      });
      return r.sort((a:any, b:any) => a.spellslot - b.spellslot);
    }
  });
  const resetSpells = (origin: string, originName: string|null = null) => {
    character.value.spells = character.value.spells.filter((sk:any) => !(sk.origin == origin && sk.level <= character.value.level && (originName == null || sk.originName == originName)));
  }
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
    if(origin == 'class' && originName == null) {
      originName = lastClass.value.name;
    }
    if(origin == 'subclass' && originName == null) {
      originName = lastClass.value.subclass;
    }
    if(!['race','background'].includes(origin) && originName == null) {
      throw new Error(`Empty originName ${origin}`);
    }
    const sp = character.value.spells.find((f:any) => f.name == name);
    if(sp == undefined) {
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
    else if(sp.choose != choose) {
      sp.origin = origin;
      sp.originName = originName;
      sp.choose = choose;
      sp.prepared = prepared;
    }
  }
  const addSpellLimit = (name: string, origin:string, originName:string, limit: string|null = null, limitNumber:string|null = null) => {
    if(limit) {
      if(!character.value.spellsLimit) character.value.spellsLimit = [];

      const spl = character.value.spellsLimit.find((s:any) => s.name == name);
      const o = {
        name: name,
        origin: origin,
        originName: originName,
        limit: limit,
        limitNumber:limitNumber
      };
      if(!spl) {
        character.value.spellsLimit.push(o)
      }
      else {
        spl.origin = origin;
        spl.originName = originName;
        spl.limit = limit;
        spl.limitNumber = limitNumber;
      }
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
    se.rest = null;
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
      se.manuals.forEach((e: any) => {
        if(e != null && e.key != null) {
          const it = itemsStore.findByKey(e.key);
          if(!it || !it.value || e.quantity <= 0) return;
          se.rest = se.rest - (it.value * e.quantity);
        }
      });
    }
  }

  const resetEquipmentProf = (key: string, origin: string) => {
    character.value[key] = character.value[key].filter((sk:any) => !(sk.origin == origin && sk.level == character.value.level));
  }
  const itemKeyToValue = (key:string) => {
    return key.split('|')[0].toLowerCase();
  }
  const itemsProf: any = computed(() => {
    if(!character.value) return;
    return {
      armor: character.value.armor,
      weapon: character.value.weapon,
      tools: character.value.tools
    }
  });
  const newManualEquipment = (type: string) => {
    const se = character.value.equipment.items;
    se[se.length] = {
      key: null,
      quantity: 1,
      type: type,
      custom: true
    };
  }
  const deleteBagpack = (ce: any) => {
    let se = character.value.equipment.items;
    character.value.equipment.items = se.filter((it:any) => it != ce);
    if(ce.key == character.value.equipment.armor) {
      character.value.equipment.armor = "";
    }
    if(ce.key == character.value.equipment.shield) {
      character.value.equipment.shield = "";
    }
  }
  watch(() => character.value && character.value.equipment.items, (nv) => {
    if(nv) {
      character.value.equipment.weight = 0;
      character.value.equipment.items.forEach((e: any) => {
        const it = itemsStore.findByKey(e.key);
        if(it && it.weight) {
          character.value.equipment.weight += it.weight * e.quantity;
        }
      })
    }
  }, {deep: true});

  const itemsAc = computed(() => {
    const armors = character.value.equipment.items.filter((ce:any) => ce.type == 'armor' && ce.key).map((ce:any) => itemsStore.findByKey(ce.key));
    return {
      armors: armors.filter((a:ItemBase) => a.armor && a.type != 'S'),
      shields: armors.filter((a:ItemBase) => a.armor && a.type == 'S')
    };
  });
  const calcAC = () => {
    let armor = itemsAc.value.armors.find((a:any) => a.key == character.value.equipment.armor);
    let shield = itemsAc.value.shields.find((a:any) => a.key == character.value.equipment.shield);
    let ac = 10;
    if(armor != null) {
      if(armor.type == "LA") ac = armor.ac + modDex.value;
      else if(armor.type == "MA") ac = armor.ac + Math.min(modDex.value,2);
      else ac = armor.ac;
    }
    else {
      if(draconicResilience.value) {
        ac = 13 + modDex.value;
      }
      else {
        ac = 10 + modDex.value;
      }
      if(unarmoredDefense.value) {
        ac += modCon.value;
      }
    }
    if(shield != null) {
      ac += shield.ac || 2;
    }
    character.value.ac = ac;
  }
  watch(() => character.value && [character.value.equipment.armor, character.value.equipment.shield, modDex.value, modCon.value], (nv) => {
    if(nv) {
      calcAC()
    }
  })

  const lvlUp = () => {
    if(confirm('Sure ? No turning back !')) {
      character.value.level += 1;
      character.value.leveling.push('');
      character.value.manualSteps = [];
    }
  }

  const improvement = computed(() => {
    if(!character.value) return;
    const level = character.value.level;
    return character.value.improvements.find((im: any) => im.level == level);
  });
  const changeImprovement = (e: any = null) => {
    const level = character.value.level;

    character.value.abilities.improvments = character.value.abilities.improvments.filter((ip: any) => !(ip.level == level));
    resetFeat('class');

    let option = e ? e.target.value : '';
    if(improvement.value) {
      improvement.value.option = option;
    }
    else {
      character.value.improvements.push({
        level: level,
        option: option
      })
    }
  }
  const abilityBeforeLevel = (key: string) => {
    const level = character.value.level;
    const ab = character.value.abilities[key];
    const improve = character.value.abilities.improvments.filter((ip:any) => ip.ability == key && ip.level < level).map((ip:any) => ip.value || 1).reduce((a:number, b:number) => a + b, 0);
    return ab.base + ab.bonus + improve;
  }
  const improveAbilityCheck = (origin: string, key: string, value: number) => {
    return character.value.abilities.improvments.find((ip:any) => ip.origin == origin && ip.level == character.value.level && ip.ability == key && ip.value == value) != null;
  }
  const sumImproveAbility = (origin: string) => {
    return character.value.abilities.improvments.filter((ip:any) => ip.origin == origin && ip.level == character.value.level).map((ip:any) => ip.value || 1).reduce((a:number, b:number) => a + b, 0);
  }
  const improveAbilityDisabled = (origin: string, key: string, value: number) => {
    if(improveAbilityCheck(origin, key, value)) return false;
    return sumImproveAbility(origin) >= 2;
  }

  const tableplop = useTableplop();
  const jsonTableplop = ref('');

  const TpCharacter = "Character", TpThrows = "Throws", TpActions = "Actions", TpSpells = "Spells", TpEquipment = "Equipment", TpFeatures = "Features";
  const handleTableplop = (withdownload: boolean = true) => {
    jsonTableplop.value = '';
    tableplop.resetData();

    const char = character.value;
    tableplop.character.name = char.name || 'NoName';
    if(char.appearance) {
      tableplop.character.appearances.push(char.appearance);
    }

    // addSections()
    const sections = [TpCharacter, TpThrows, TpActions];
    if(char.spells.length > 0) sections.push(TpSpells);
    sections.push(TpEquipment);
    sections.push(TpFeatures);

    sections.forEach(s => {
      const id = tableplop.addParent(s);
      tableplop.addProperty({
        id: id,
        type: "tab-section",
        value: s
      });
    });

    // Character
    const parentId = tableplop.getParent(TpCharacter);
    addAbilities(parentId);
    const [sectionId, section2Id] = tableplop.addHorizontalSection(parentId, "infos");
    addInfos(sectionId);
    addSenses(section2Id);
    addProfs(section2Id);
    addAppearance(parentId);
    addDetails(parentId);

    // Throws
    const throwsId = tableplop.getParent(TpThrows);
    tableplop.addProperty({
      parentId: throwsId,
      type: "number",
      name: "initiative",
      value: 0,
      message: "!r initiative = 1d20 + initiative",
      formula: "dex"
    });
    addSavingThrows(throwsId);
    addSkills(throwsId);
    // Actions
    addActions();
    // Spells
    addSpells();
    // Equipment
    const equipmentId = tableplop.getParent(TpEquipment);
    addMoney(equipmentId);
    addBagpack(equipmentId);
    // Features
    addFeatures();

    jsonTableplop.value = JSON.stringify(tableplop.character, null, 2);
    if(withdownload) download(jsonTableplop.value, tableplop.character.name + "_tableplop_import.json", "application/json");
    if(dev) json.value = tableplop.character;
  }
  const makeScore = (a:Ability, parentId:number) => {
    const e = a.name;
    const t = a.key, v = character.value.abilities[t].total;
    const scoreId = tableplop.addParent(e);

    tableplop.addProperty({
      id: scoreId,
      parentId: parentId,
      type: "ability",
      name: e,
      message: `${e} check: {1d20 + ${e}}`,
      formula: `floor ((${e}-score - 10) / 2)`,
    });
    tableplop.addProperty({
      parentId: scoreId,
      type: "number",
      name: e + "-score",
      value: v
    });
  }
  const addAbilities = (parentId:number) => {
    const name = "Abilities"
    const id = tableplop.addParent(name);
    tableplop.addProperty({
      id: id,
      type: "title-section",
      value: name,
      parentId: parentId
    });

    for (const a of Abilities) {
      makeScore(a, id);
    }

    const hpid = tableplop.addParent("hit-points");
    const e = character.value.hp.max;
    tableplop.addProperty({
      id: hpid,
      parentId: id,
      type: "health",
      name: "hit-points",
      value: e
    });
    tableplop.addProperty({
      parentId: hpid,
      type: "number",
      name: "hit-points-maximum",
      value: e
    });
    tableplop.addProperty({
      parentId: hpid,
      type: "number",
      name: "hit-points-temporary",
      value: ""
    });
  }
  const addInfos = (sectionId: number) => {
    const char = character.value;
    const name = "Infos"
    const id = tableplop.addParent(name);
    tableplop.addProperty({
      id: id,
      type: "title-section",
      value: name,
      parentId: sectionId
    });
    tableplop.addProperty({
      parentId: id,
      type: "number",
      name: "proficiency",
      value: prof.value
    })
    // makeAC(id);
    let e = char.ac || 10 + modDex.value;
    let f = "10 + dex"
    if(char.equipment.armor) {
      let armor = itemsAc.value.armors.find((a:any) => a.key == char.equipment.armor);
      if(armor != null) {
        if(armor.type == "LA") f = `${armor.ac} + dex`;
        else if(armor.type == "MA") f = `${armor.ac} + min(dex,2)`;
        else f = `${armor.ac}`;
      }
    }
    else if(unarmoredDefense.value) {
      f += " + con";
    }
    tableplop.addProperty({
      parentId: id,
      type: "number",
      name: "armor-class",
      value: e,
      formula: `${f} + (armor-shield?2:0)`
    });
    tableplop.addProperty({
      parentId: id,
      type: "checkbox",
      name: "armor-shield",
      value: char.equipment.shield && char.equipment.shield.length > 0 ? true : false,
    });

    // makeSpeed(id);
    Object.keys(char.speed).forEach((s: string) => {
      const a = `${s}-speed`;
      tableplop.addProperty({
        parentId: id,
        type: "number",
        name: a,
        value: char.speed[s]
      })
    });

    if(char.size) {
      tableplop.addProperty({
        parentId: id,
        type: "text",
        name: "size",
        value: Sizes[char.size]
      });
    }

    tableplop.addProperty({
      parentId: id,
      type: "text",
      name: "race",
      value: `${char.race.name}${char.subrace ? ` ${char.subrace.name}` : ``}`
    });
    tableplop.addProperty({
      parentId: id,
      type: "text",
      name: "background",
      value: `${char.background}`
    });

    if(char.class.length == 1) {
      let cl = char.class[0];
      tableplop.addProperty({
        parentId: id,
        type: "text",
        name: "class",
        value: `${cl.name}${cl.subclass ? ` (${cl.subclass})` : ``}`
      });
    }
    else {
      char.class.forEach((cl: any, i:number) => {
        tableplop.addProperty({
          parentId: id,
          type: "text",
          name: `class-${i+1}`,
          value: `${cl.name}${cl.subclass ? ` (${cl.subclass})` : ``}`
        });
      })
    }
    tableplop.addProperty({
      parentId: id,
      type: "number",
      name: "level",
      value: char.level
    });
    tableplop.addProperty({
      parentId: id,
      type: "number",
      name: "experience",
      value: 0
    });

    ['vulnerable', 'resist', 'immune', 'conditionImmune'].forEach(k => {
      if(character.value[k].length > 0) {
        tableplop.addProperty({
          parentId: id,
          type: "text",
          name: `${k}`,
          value: character.value[k].map((v: any) => v.name).join(', '),
        });
      }
    });
  }
  const addSenses = (sectionId: number) => {
    const name = "Senses"
    const parentId = tableplop.addParent(name);
    tableplop.addProperty({
      id: parentId,
      type: "title-section",
      value: name,
      parentId: sectionId
    });
    tableplop.addProperty({
      parentId: parentId,
      type: "text",
      name: "dark-vision",
      value: character.value.darkvision || 0
    })
    character.value.blindsight && tableplop.addProperty({
      parentId: parentId,
      type: "text",
      name: "blindsight",
      value: character.value.blindsight
    })
    tableplop.addProperty({
      parentId: parentId,
      type: "number",
      name: "passive-perception",
      formula: "10 + perception"
    });
    tableplop.addProperty({
      parentId: parentId,
      type: "number",
      name: "passive-stealth",
      formula: "10 + stealth"
    });
  }
  const addProfs = (sectionId: number) => {
    const name = "Profs"
    const parentId = tableplop.addParent(name);
    tableplop.addProperty({
      id: parentId,
      type: "title-section",
      value: name,
      parentId: sectionId
    });

    ['armor', 'weapon', 'tools', 'languages'].forEach(k => {
      tableplop.addProperty({
        parentId: parentId,
        type: "text",
        name: `${k}`,
        value: character.value[k].map((v:any) => v.name).join(', '),
      });
    })
  }
  const addAppearance = (parentId: number) => {
    const name = "appearance"
    const id = tableplop.addParent(name);
    const appearances: any[] = [];
    if(tableplop.character.appearances.length > 0) {
      appearances.push({
        url: tableplop.character.appearances[0],
        location: tableplop.character.appearances[0],
        iconSrc: tableplop.character.appearances[0]
      })
    }

    tableplop.addProperty({
      id: id,
      type: "appearance",
      parentId: parentId,
      data: {
        appearances: appearances
      }
    });
  }
  const addDetails = (parentId: number) => {
    const name = "Details"
    const id = tableplop.addParent(name);
    tableplop.addProperty({
      id: id,
      type: "title-section",
      value: name,
      parentId: parentId
    });

    let d = "";
    if(character.value.details) d = character.value.details?.replaceAll('\n', '<br>');
    tableplop.addProperty({
      type: "paragraph",
      value: `<p>${d}</p>`,
      parentId: id
    });
  }
  const addSavingThrows = (parentId: number) => {
    const name = "Saving Throws"
    const id = tableplop.addParent(name);
    tableplop.addProperty({
      id: id,
      type: "title-section",
      value: name,
      parentId: parentId
    });

    for (const a of Abilities) {
      const e = a.name;
      const name = `${e}-save`;
      const stid = tableplop.addParent(name);
      tableplop.addProperty({
        id: stid,
        parentId: id,
        type: "saving-throw",
        name: name,
        message: `${a.key.toUpperCase()} save: {1d20 + ${e}-save}`,
        formula: `${e} + (${name}-proficiency ? proficiency : 0)`,
      });
      tableplop.addProperty({
        parentId: stid,
        type: "checkbox",
        name: name + "-proficiency",
        value: character.value.save.includes(a.key)
      })
    }
  }
  const addSkills = (parentId: number) => {
    const name = "Skills"
    const id = tableplop.addParent(name);
    tableplop.addProperty({
      id: id,
      type: "title-section",
      value: name,
      parentId: parentId
    });

    for (const s of Skills) {
      const skid = tableplop.addParent(s.name);
      tableplop.addProperty({
        id: skid,
        parentId: id,
        type: "skill",
        name: s.name,
        data: {
          subtitle: s.attribute.substring(0, 3)
        },
        message: `${s.name} check: {1d20 + ${s.name}}`,
        formula: `${s.attribute} + (${s.name}-proficiency ? proficiency : jack-of-all-trades ? (floor (proficiency / 2)) : 0) + (${s.name}-expertise ? proficiency : 0)`,
      });
      tableplop.addProperty({
        parentId: skid,
        type: "checkbox",
        name: s.name + "-proficiency",
        value: character.value.skills.find((sk:any) => sk.name == s.name) != null
      });
      tableplop.addProperty({
        parentId: skid,
        type: "checkbox",
        name: s.name + "-expertise",
        value: character.value.expertises.find((sk:any) => sk.name == s.name) != null
      });
    }

    tableplop.addProperty({
      parentId: id,
      type: "checkbox",
      name: "jack-of-all-trades",
      value: jackofAllTrades.value
    })
  }
  const addActions = () => {
    const char = character.value;
    const parentId = tableplop.getParent(TpActions);

    const nw = "Weapons";
    const wid = tableplop.addParent(nw);
    tableplop.addProperty({
      id: wid,
      type: "title-section",
      value: nw,
      parentId: parentId
    });
    char.equipment.items.filter((ce:any) => ce.type == 'weapon').forEach((ce:any) => {
      let o = itemsStore.messageByKey(ce.key);
      if(o) {
        tableplop.addMessage({
          parentId: wid,
          ...o
        });
      }
    })

    char.class.forEach((cl:any) => {
      const clname = `actions-${cl.name}`;
      const clid = tableplop.addParent(clname);
      tableplop.addProperty({
        id: clid,
        type: "title-section",
        value: cl.name,
        parentId: parentId
      });
      tableplop.addProperty({
        type: "paragraph",
        value: "In progress ...",
        parentId: clid
      })
      classesStore.getOtherProgression(cl.name, cl.subclass, cl.level, character.value.excludeFeatures).forEach(pr => {
        let text = `${pr.name}`
        if(pr.diceProgression) {
          text += ` {${pr.diceProgression}}`
        }
        if(pr.limit) {
          text += ` / ${evalProgression(pr.limit)}`
        }
        let message = null;
        if(pr.formula) {
          message = `${pr.name}: ${evalFormula(pr.formula, {diceProgression: pr.diceProgression})}`;
        }
        else if(pr.diceProgression) {
          message = `${pr.name}: {${pr.diceProgression}}`;
        }
        tableplop.addCheckboxes(clid, pr.name, text, pr.progression ? evalProgression(pr.progression) : 1, false, message);
      });
    });

    const cfs = computedFeatures();
    if(cfs) {
      cfs.forEach((cf: any) => {
        const clname = `actions-${cf.name}`;
        let clid = tableplop.getParent(clname);
        if(clid == 0) {
          clid = tableplop.addParent(clname);
          tableplop.addProperty({
            id: clid,
            type: "title-section",
            value: cf.name,
            parentId: parentId
          });
        }
        cf.choices.forEach((choice:any) => {
          tableplop.addMessage({
            parentId: clid,
            name: choice,
            message: S(classesStore.getOptionalInfo(choice))
          });
        })
      });
    }
    const nr = "Rest";
    const rid = tableplop.addParent(nr);
    tableplop.addProperty({
      id: rid,
      type: "title-section",
      value: nr,
      parentId: parentId
    });
    tableplop.addCheckboxes(rid, 'rest-hd', 'Hit Dice', char.level, false);
    tableplop.addMessage({
      parentId: rid,
      name: 'Short rest',
      message: `Short rest : {d${char.class[0].dice} + constitution}`,
    });
  }
  const addSpells = () => {
    const char = character.value;
    if(char.spells.length == 0) return;
    const parentId = tableplop.getParent(TpSpells);

    if(spellSlotsPactInfo.value) {
      tableplop.addCheckboxes(parentId, `spell-slots-pact`, `Spell slots from pact magic lvl${spellSlotsPactInfo.value.max}`, spellSlotsPactInfo.value.slot, false);
    }
    if(spellSlotsInfo.value) {
      for (var i = 1; i <= spellSlotsInfo.value.max; i++) {
        tableplop.addCheckboxes(parentId, `spell-slots-${i}`, `Spell slots lvl${i}`, spellSlotsInfo.value[`s${i}`], false);
      }
    }

    computedSpells.value.forEach((cs:any) => {
      const spid = tableplop.addParent(`spell-${cs.spellslot}`);
      tableplop.addProperty({
        id: spid,
        type: "title-section",
        value: parseInt(cs.spellslot) == 0 ? `Cantrip` : `Level ${cs.spellslot}`,
        parentId: parentId
      });
      cs.origins.forEach((o:any) => {
        o.spells.forEach((s:any) => {
          const spell = spellsStore.findByName(s.name);
          if(!spell) return;

          let ltxt = "";
          const l = char.spellsLimit && char.spellsLimit.find((l:any) => l.name == s.name);
          if(l) {
            if(l.limitNumber) {
              // const split = l.limitNumber.split('');
              // const each = split.length == 2 && split[1] == "e";
              const nb = evalFormula(l.limitNumber);
              tableplop.addCheckboxes(spid, `${l.name}-limit`, `${l.name}/${cfl(l.limit)}`, nb, false);
            }
            else {
              if(l.limit == "will") ltxt = " (At will)";
              if(l.limit == "ritual") ltxt = " (Ritual only)";
            }
          }

          tableplop.addMessage({
            name: `${s.name}${ltxt}`,
            message: S(messageSpell(spell)),
            parentId: spid
          });
        })
      })
    })
  }
  const addMoney = (parentId: number) => {
    const money = character.value.money;
    const name = "Money";
    const id = tableplop.addParent(name);
    tableplop.addProperty({
      id: id,
      type: "title-section",
      value: name,
      parentId: parentId
    });
    tableplop.addProperty({
      type: "number",
      name: "Gold (gp)",
      value: money.gp,
      parentId: id
    });
    tableplop.addProperty({
      type: "number",
      name: "Silver (sp)",
      value: money.sp,
      parentId: id
    });
    tableplop.addProperty({
      type: "number",
      name: "Copper (cp)",
      value: money.cp,
      parentId: id
    });
    tableplop.addProperty({
      type: "paragraph",
      value: "Standard change : 1 gp = 10 sp = 100 cp",
      parentId: id
    })
  }
  const addBagpack = (parentId: number) => {
    const e = character.value.equipment;
    const id = tableplop.addParent('Bagpack');
    tableplop.addProperty({
      id: id,
      type: "title-section",
      value: "Equipment",
      parentId: parentId
    });

    tableplop.addProperty({
      type: "number",
      name: "Carrying (lb.)",
      parentId: id,
      formula: "strength-score * 15"
    });

    let p = "";
    ['armor','weapon','tool','other'].forEach(t => {
      p += `<h3>${equipmentType.find(e => e.key == t)?.label}</h3>`;
      p += `<p>`;
      p += e.items.filter((ce:any) => ce.type == t).map((ce:any) => {
        const item = itemsStore.findByKey(ce.key);
        const comp = [];
        if(item) {
          if(item.value) {
            const money = calculMoney(item.value)
            if (money.gp) comp.push(`${money.gp} gp`);
            if (money.sp) comp.push(`${money.sp} sp`);
            if (money.cp) comp.push(`${money.cp} cp`);
          }
          if(item.weight) {
            comp.push(`${item?.weight} lb.`);
          }
        }
        return `${ce.quantity} ${item?.name || ce.key}${comp.length > 0 ? ` (${comp.join(' / ')})` : ''}`;
      }).join('<br>');
      if(t == 'other' && e.others.text) {
        p += `<br>${e.others.text}`;
      }
      p += `<p>`;
    });

    p += `<p><b>Weight: </b> ${e.weight} + ${e.others.weight} = <b>${e.weight + e.others.weight} lb.</b></p>`;

    tableplop.addProperty({
      type: "paragraph",
      value: p,
      parentId: id
    })
  }
  const addFeatures = () => {
    const char = character.value;
    const parentId = tableplop.getParent(TpFeatures);

    if(computedRaceEntries.value.length > 0) {
      let name = `${ char.race.name }${ char.subrace ? ` ${char.subrace.name} ` : ``}`;
      const id = tableplop.addParent(name);
      tableplop.addProperty({
        id: id,
        type: "title-section",
        value: name,
        parentId: parentId
      });
      let p = computedRaceEntries.value.map((e:any) => `<p><b>${e.name}</b>: ${inlineEntries(e.entries)}</p>`).join('');
      tableplop.addProperty({
        type: "paragraph",
        value: p.replaceAll('\n', '<br>'),
        parentId: id
      });
    }
    if(bgFeatures.value) {
      let name = `${ char.background }`;
      const id = tableplop.addParent(name);
      tableplop.addProperty({
        id: id,
        type: "title-section",
        value: name,
        parentId: parentId
      });
      let p: any = bgFeatures.value.map((bgf:any) => `<p><b>${bgf.name.replace('Feature: ', '')}</b>: ${inlineEntries(bgf.entries)}</p>`).join('');
      tableplop.addProperty({
        type: "paragraph",
        value: p.replaceAll('\n', '<br>'),
        parentId: id
      });
    }
    if(char.feats.length > 0) {
      let name = `Feats`;
      const id = tableplop.addParent(name);
      tableplop.addProperty({
        id: id,
        type: "title-section",
        value: name,
        parentId: parentId
      });
      let p: any = char.feats.map((f:any) => `<h3>${f.name}${f.option ? ` : ${f.option}` : ``}</h3><p>${inlineEntries(feats.value.find((feat:any) => feat.name == f.name)?.entries)}</p>`).join('');
      tableplop.addProperty({
        type: "paragraph",
        value: p.replaceAll('\n', '<br>'),
        parentId: id
      });
    }

    char.class.forEach((cl:any) => {
      let name = `${ cl.name }${ cl.subclass ? ` (${cl.subclass}${cl.option ? ` ${cl.option}`: ``})` : ``}`;
      const id = tableplop.addParent(name);
      tableplop.addProperty({
        id: id,
        type: "title-section",
        value: name,
        parentId: parentId
      });
      for (let i = 1; i <= cl.level; i++) {
        const features = classesStore.getFeatures(cl.name, cl.subclass, i, character.value.excludeFeatures);
        let p: any = `<h3>Level ${i}</h3>`;
        features && features.forEach((cf:any) => {
          p += `<p><b>${cf.name}</b>: ${S(cf.entries)}</p>`
        })
        tableplop.addProperty({
          type: "paragraph",
          value: p.replaceAll('\n', '<br>'),
          parentId: id
        });
      }
    })
  }

  const evalFormula = (s: string, values:any = {}) => {
    const parser = new Parser();
    parser.functions.mod = mod;
    parser.functions.ceil = Math.ceil;
    if(s.length == 2 && s.split('')[1] == "e") {
      s = s.substring(0, s.length - 1);
    }
    character.value.class.forEach((cl:any) => {
      values[cl.name.toLowerCase()] = cl;
    });
    values['character'] = character.value;
    values['prof'] = prof.value;
    const expr = parser.parse(s);
    return expr.evaluate(values);
  }
  const evalProgression = (pr: any) => {
    if(pr.formula) return evalFormula(pr.formula);
    return pr;
  }

  const excludeFeature = (name: string, replaceFeature: any = null) => {
    character.value.excludeFeatures.push(name);
    if(replaceFeature && "string" == typeof replaceFeature) includeFeature(replaceFeature)
  }
  const includeFeature = (name: string, replaceFeature: any = null) => {
    character.value.excludeFeatures = character.value.excludeFeatures.filter((ef:string) => ef != name);
    if(replaceFeature && "string" == typeof replaceFeature) excludeFeature(replaceFeature)
  }

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
        <button class="btn btn-secondary" @click="json = steps">steps</button>
        <button class="btn btn-secondary" @click="json = chooses">chooses</button>
        <button class="btn btn-secondary" @click="() => handleTableplop(false)">handleTableplop</button>
<!--        <button class="btn btn-secondary" @click="json = evalFormula(`2e`)">evalFormula</button>-->
        <button class="btn btn-secondary" @click="json = classFeatures">classFeatures</button>
      </div>
    </template>

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
            <div class="btn-group-sm mw mt-2">
              <button type="button" class="btn btn-outline-secondary" @click="upload.show = false">
                <i class="fa-solid fa-xmark" />
                Close
              </button>
              <button type="button" class="btn btn-success ms-2" @click="uploadCharacter" :disabled="!upload.character">
                <i class="fa-solid fa-file-arrow-up" />
                Confirm
              </button>
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
            <div class="btn-group-sm mw mt-2">
              <button type="button" class="btn btn-outline-secondary" @click="token.show = false">
                <i class="fa-solid fa-xmark" />
                Close
              </button>
              <button type="button" class="btn btn-success ms-2" @click="changeToken">
                <i class="fa-solid fa-cloud-arrow-down" />
                Change
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="upload.show || token.show" class="modal-backdrop fade show"></div>

    <div class="row">
      <div class="col-12">
        <div class="btn-group btn-group-sm d-flex align-items-center">
          <button type="button" class="btn btn-danger" @click="reset">
            <i class="fa-regular fa-trash-can" />
            Reset
          </button>
          <button type="button" class="btn btn-info" @click="save">
            <i class="fa-solid fa-download" />
            Save
          </button>
          <button type="button" class="btn btn-secondary" @click="openUpload">
            <i class="fa-solid fa-file-arrow-up" />
            Import
          </button>
          <button type="button" class="btn btn-success" @click="() => handleTableplop()">
            <i class="fa-solid fa-gears" />
            Convert
          </button>
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
                  <template v-for="r in b.races" :key="r">
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
              <template v-for="v in versions" :key="v">
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
              <template v-for="s in subraces" :key="s">
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
                <template v-for="c in classes" :key="c">
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

          <AccordionItem name="levelup" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Level up</template>
            <template v-slot:header-value>{{ lastClass?.name || CHOOSE }}</template>
            <template v-slot:body>
              <template v-for="c in classesUp" :key="c">
                <button type="button" class="btn me-1 mb-1" @click="changeClass(c)" :class="[
                    c.name === lastClass?.name ? 'btn-primary' : c.level > 1 ? 'btn-outline-primary' : 'btn-outline-secondary',
                  ]">
                  {{ c.name }} {{ c.level }}
                </button>
              </template>
            </template>
          </AccordionItem>

          <AccordionItem name="background" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Background</template>
            <template v-slot:header-value>{{ character.background || CHOOSE }}</template>
            <template v-slot:body>
              <div>
                <template v-for="b in backgrounds" :key="b">
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
                  <div v-if="isLineage && (version != '2024' || (version == '2024' && bg && bg.ability && bg.ability[0].choose.weighted.from.includes(a.key)))" class="btn-group">
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
              <FeatList :character="character" origin="race" @change="changeFeats" @improve="improveAbility" />
            </template>
          </AccordionItem>

          <AccordionItem name="bgFeat" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Background Feat</template>
            <template v-slot:header-value>{{ character.feats.find((f:any) => f.level == 1 && f.origin == 'background')?.name }}</template>
            <template v-slot:body>
              <FeatList v-if="bg" :character="character" :from="bg.feats" origin="background" @change="changeFeats" @improve="improveAbility" />
            </template>
          </AccordionItem>

          <AccordionItem name="features" :steps="steps" :step="step" @click="changeStep" :manual-steps="character.manualSteps" @toggle-manual-step="toggleManualStep">
            <template v-slot:header-label>New class features</template>
            <template v-slot:body>
              <div v-for="(cf,i) in classFeatures" :key="`${lastClass.name}-${cf.name}`" :class="[`${i > 0 ? 'mt-2' : ''}`, `${character.excludeFeatures.find((ef: string) => ef == cf.name) ? 'text-muted' : ''}`]">
                <p class="fw-bold m-0 d-flex align-items-center">
                  {{ cf.name }} <i v-if="cf.entries && cf.chooseSubclass" class="ms-1 fa-solid fa-circle-question" :title="S(cf.entries)" v-tooltip></i>
                  <input v-if="cf.chooseSubclass" type="text" class="form-control form-control-sm ms-3" style="flex: 1" :value="search[cf.name]" @input="changeSearch($event, cf.name)" />
                  <template v-if="cf.isClassFeatureVariant">
                    <button v-if="character.excludeFeatures.find((ef: string) => ef == cf.name)" type="button" class="btn btn-sm btn-outline-warning ms-auto" @click="() => includeFeature(cf.name, cf.isClassFeatureVariant)" >
                      <i class="fa-solid me-1" :class="'string' == typeof cf.isClassFeatureVariant ? 'fa-right-left' : 'fa-plus-circle'" />
                      <template v-if="'string' == typeof cf.isClassFeatureVariant">Swap with {{cf.isClassFeatureVariant}}</template>
                      <template v-else>Include Feature</template>
                    </button>
                    <button v-else type="button" class="btn btn-sm btn-outline-warning ms-auto" @click="() => excludeFeature(cf.name, cf.isClassFeatureVariant)" >
                      <i class="fa-solid me-1" :class="'string' == typeof cf.isClassFeatureVariant ? 'fa-right-left' : 'fa-ban'" />
                      <template v-if="'string' == typeof cf.isClassFeatureVariant">Swap with {{cf.isClassFeatureVariant}}</template>
                      <template v-else>Exclude Feature</template>
                    </button>
                  </template>
                </p>
                <div class="form-check" v-if="!(cf.entries && cf.chooseSubclass)">
                  <p>{{ S(cf.entries) }}</p>
                </div>
                <template v-if="cf.chooseSubclass">
                  <div v-for="o in filterOptions(cf.name, classesStore.getSubclassesInfo(lastClass.name, cf.level))" class="form-check" :key="o.shortName">
                    <input class="form-check-input" type="radio" :value="o.shortName" @click="changeSubclass($event)" :checked="lastClass.subclass == o.shortName">
                    <label class="form-check-label" v-tooltip :title="S(o.tooltip)">
                      {{ o.shortName }}
                    </label>
                    <p v-for="e in o.entries"><b>{{e.name}}</b>: {{ S(e.info) }}</p>
                  </div>
                </template>
              </div>
            </template>
          </AccordionItem>

          <AccordionItem name="improvement" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Improvement</template>
            <template v-slot:body>
              <div class="btn-group btn-group-sm w-100 pb-1">
                <input type="radio" class="btn-check" id="improvement-ability" value="ability" @change="changeImprovement" :checked="improvement?.option == 'ability'" />
                <label class="btn" :class="improvement?.option == 'ability' ? 'btn-primary' : 'btn-outline-secondary'" for="improvement-ability">Ability</label>

                <input type="radio" class="btn-check" id="improvement-feat" value="feat" @change="changeImprovement" :checked="improvement?.option == 'feat'" />
                <label class="btn" :class="improvement?.option == 'feat' ? 'btn-primary' : 'btn-outline-secondary'" for="improvement-feat">Feat</label>
              </div>

              <template v-if="improvement?.option == 'feat'">
                <FeatList :character="character" origin="class" @change="changeFeats" @improve="improveAbility" />
              </template>
              <template v-if="improvement?.option == 'ability'">
                <div v-for="a in Abilities" :key="a.key" class="d-flex justify-content-center align-items-center my-2 text-center">
                  <label class="fw-bolder w-25">{{ a.name }}</label>
                  <div class="w-25 d-flex justify-content-center">
                    <input type="number" class="form-control ability" :value="abilityBeforeLevel(a.key)" disabled />
                  </div>
                  <div class="bonus w-25">
                    <div class="btn-group">
                      <button class="btn" @click="() => improveAbility(a.key, 'class', lastClass.name, 2)"
                              :class="improveAbilityCheck('class', a.key, 2) ? 'btn-primary' : 'btn-outline-secondary'"
                              :disabled="improveAbilityDisabled('class', a.key, 2)">
                        +2
                      </button>
                      <button class="btn" @click="() => improveAbility(a.key, 'class', lastClass.name, 1)"
                              :class="improveAbilityCheck('class', a.key, 1) ? 'btn-primary' : 'btn-outline-secondary'"
                              :disabled="improveAbilityDisabled('class', a.key, 1)">
                        +1
                      </button>
                    </div>
                  </div>

                  <span class="total w-25 fw-bold">{{ totalAbility(a.key) }}</span>
                </div>
              </template>
            </template>
          </AccordionItem>

          <AccordionItem v-for="ft in chooses.features" :name="ft.name + ft.featureType" :steps="steps" :step="step" @click="changeStep" :manual-steps="character.manualSteps" @toggle-manual-step="toggleManualStep">
            <template v-slot:header-label>{{ ft.name }}</template>
            <template v-slot:header-value>{{ ft.selected }}/{{ ft.total }}</template>
            <template v-slot:body>
              <input type="text" class="form-control form-control-sm mb-2" :value="search[ft.name]" @input="changeSearch($event, ft.name)" />
              <div v-for="o in filterOptions(ft.name, ft.from)" class="form-check pb-1" :key="o.name">
                <input class="form-check-input" :type="`${ft.total==1?'radio':'checkbox'}`" :value="o.name"
                       :checked="isFeatureCheck(ft.name, o.name)"
                       :disabled="isFeatureDisabled(ft.name, o.name, ft.featureType)"
                       @click="changeFeature($event, ft.name, ft.featureType)">
                <label class="form-check-label">
                  {{ o.name }}
                  <template v-if="o.prerequisite && o.prerequisite.length > 0"> ({{o.prerequisite.join(' or ')}})</template>
                </label>
                <p>{{ S(o.info) }}</p>
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
              <p class="m-0 fw-bold text-center" v-if="jackofAllTrades">Jack of All Trades</p>
            </template>
          </AccordionItem>

          <AccordionItem name="otherprof" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Other Proficiencies</template>
            <template v-slot:body>
              <template v-if="chooses.languages.length > 0 || stepdisabled">
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

              <template v-if="chooses.tools.length > 0 || toolsChoices.length > 0">
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

              <template v-if="chooses.weapon.length > 0 || stepdisabled">
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
                      <div v-if="l.parent == 'weapon'" v-for="sl in itemsStore.search(l.search)" class="form-check pb-1" :key="sl">
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
                <p class="fw-bold m-0">
                  {{ as.originName }}
                  <span class="small fst-normal" v-if="as.count"> ({{as.selected}}/{{as.count}})</span>
                </p>
                <div v-if="as.optionChoice" class="btn-group btn-group-sm mb-1 d-flex align-items-center">
                  <button type="button" class="btn" :class="as.option == o ? 'btn-primary' : 'btn-outline-secondary'" v-for="o in as.optionChoice" :key="o" @click="changeOption(as.origin, as.originName, o)">{{o}}</button>
                </div>
                <template v-for="asp in as.spells">
                  <p class="fst-italic m-0">
                    <template v-if="asp.spellslot == 0">Cantrip</template>
                    <template v-else>Level {{ asp.spellslot }}</template>
                    <span class="small fst-normal" v-if="asp.count"> ({{asp.selected}}/{{asp.count}})</span>
                  </p>
                  <div v-for="spell in filterOptions('additional', asp.from)" :key="spell" class="form-check pb-1">
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
                         @click="changeSpell($event, l, true, chooses.cantrips.origin, chooses.cantrips.originName)"
                         :checked="isSpellCheck(spell.name)"
                         :disabled="isSpellDisabled(spell.name, chooses.cantrips.origin, chooses.cantrips.originName)"
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
                         @click="changeSpell($event, l, chooses.spells.prepared, chooses.spells.origin, chooses.spells.originName)"
                         :checked="isSpellCheck(spell.name)"
                         :disabled="isSpellDisabled(spell.name, chooses.spells.origin, chooses.spells.originName)"
                  />
                  <SpellInfo :spell="spell" :open="showAllSpells" />
                </div>
              </template>
            </template>
          </AccordionItem>

          <AccordionItem v-for="ch in chooses.prepared" :key="ch.originName" :name="`spellsPrepared${ch.originName}`" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Spells Prepared{{chooses.prepared.length > 1 || ch.originName != lastClass.name ? ` ${ch.originName}` : ''}}</template>
            <template v-slot:header-value>{{ch.selected}}/{{ch.known}}</template>
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
              <template v-for="l in ch.maxlevel">
                <p class="fst-italic m-0">Level {{ l }}</p>
                <div v-for="spell in filterOptions('prepared', ch.from[l])" class="form-check pb-1">
                  <input class="form-check-input" type="checkbox" :value="spell.name"
                         @click="ch.onlyPrepared ? changeSpellPrepared($event) : changeSpell($event, l, true, ch.origin, ch.originName)"
                         :checked="isSpellPrepared(spell.name)"
                         :disabled="isSpellDisabled(spell.name, ch.origin, ch.originName)"
                  />
                  <SpellInfo :spell="spell" :open="showAllSpells" />
                </div>
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

                <div v-if="startingEquipment.origin == 'class' && version.length == 0" class="btn-group btn-group-sm w-100 pb-1">
                  <input type="radio" class="btn-check" id="startingEquipment-default" value="default" @change="changeStartingEquipment" :checked="character.startingEquipment.option == 'default'">
                  <label class="btn" :class="character.startingEquipment.option == 'default' ? 'btn-primary' : 'btn-outline-secondary'" for="startingEquipment-default">Default</label>

                  <input type="radio" class="btn-check" id="startingEquipment-gold" value="gold" @change="changeStartingEquipment" :checked="character.startingEquipment.option == 'gold'">
                  <label class="btn" :class="character.startingEquipment.option == 'gold' ? 'btn-primary' : 'btn-outline-secondary'" for="startingEquipment-gold">Gold alternative</label>
                </div>

                <template v-if="startingEquipment.origin == 'class' && character.startingEquipment.option == 'gold'">
                  <div class="d-flex align-items-center justify-content-between pt-1 pb-2">
                    <label class="me-1 flex-grow-1">Start with {{computedLastClass && S(computedLastClass.startingEquipment.goldAlternative) }} <span class="gp">gp</span> to buy your own equipment</label>
                    <input type="number" v-model="character.startingEquipment.gp" @change="calculGoldManual" class="form-control h36" style="max-width: 100px" step="1" min="0" />
                    <i v-if="computedLastClass && !stepdisabled" class="fa-solid fa-dice-d20 ms-1" @click="rollStartingGold"></i>
                  </div>
                  <template v-if="character.startingEquipment.gp">
                    <template v-for="(m,i) in character.startingEquipment.manuals" :key="m">
                      <ItemSearch v-if="m.origin == 'class'" type="all" :label="false" :profs="itemsProf" :disabled="stepdisabled"
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
                          <ItemInfo :item="item" :profs="itemsProf" />
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
                  <ItemSearch v-if="sem && sem.equipmentType" :profs="itemsProf" :disabled="stepdisabled"
                              :type="sem.equipmentType" :current="character.startingEquipment.manuals[i]"
                              @select="(item) => addManualItem(i, item, 1, sem.origin)" :min-value="0" />
                </template>
              </template>

            </template>
          </AccordionItem>

          <AccordionItem name="equipment" :steps="steps" :step="step" @click="changeStep" :manual-steps="character.manualSteps" @toggle-manual-step="toggleManualStep">
            <template v-slot:header-label>Equipment</template>
            <template v-slot:body>
              <p class="fw-bold m-0">Money</p>
              <div class="d-flex justify-content-between">
                <div v-for="m in Object.keys(character.money)" :key="m" class="d-flex align-items-center">
                  <label class="me-1 fw-bold" :class="m">{{ m.toUpperCase() }}</label>
                  <input type="number" v-model="character.money[m]" class="form-control h36" style="max-width: 100px" step="1" min="0" />
                </div>
              </div>

              <template v-for="t in ['armor','weapon','tool','other']" :key="t">
                <p class="fw-bold m-0 mt-2">{{ equipmentType.find(e => e.key == t)?.label }}</p>
                <template v-for="ce in character.equipment.items.filter((ce:any) => ce.type == t)" :key="ce">
                  <ItemSearch :type="t" :label="false" :profs="itemsProf"
                              :current="ce" @select="(item) => ce.key = item"
                              :has-delete="true" @quantity="(q) => ce.quantity = q"
                              :has-quantity="true" @delete="() => deleteBagpack(ce)" />
                </template>
                <button type="button" class="btn btn-sm btn-outline-success mt-1" @click="() => newManualEquipment(t)">
                  <i class="fa fa-solid fa-plus-circle" />
                  Add new item
                </button>

                <p v-if="t == 'armor'" class="fw-bold m-0 mt-2 d-flex align-items-center">
                  <label class="flex-1">Armor class</label>
                  <select class="form-select h36 mx-1 flex-1" v-model="character.equipment.armor">
                    <option value="">No armor</option>
                    <option v-for="o in itemsAc.armors" :value="o.key" :key="o.key">
                      {{ o.name }}
                    </option>
                  </select>
                  +
                  <select class="form-select h36 mx-1 flex-1" v-model="character.equipment.shield">
                    <option value="">No shield</option>
                    <option v-for="o in itemsAc.shields" :value="o.key" :key="o.key">
                      {{ o.name }}
                    </option>
                  </select>
                  =
                  <input disabled :value="character.ac" class="form-control h36 ms-1 text-center" style="max-width: 50px" />
                </p>
              </template>

              <textarea class="form-control w-100 mt-1" v-model="character.equipment.others.text" placeholder="Other items ..."></textarea>

              <p class="fw-bold m-0 mt-2 d-flex align-items-center">
                <label class="flex-grow-1">Weight</label>
                <input disabled :value="character.equipment.weight" class="form-control h36 mx-1" style="max-width: 100px" />
                +
                <input type="number" v-model="character.equipment.others.weight" class="form-control h36 mx-1" style="max-width: 100px" min="0" step="0.1" />
                =
                <input disabled :value="character.equipment.weight + character.equipment.others.weight" class="form-control h36 mx-1" style="max-width: 100px" />
                lb.
              </p>
              <p class="fw-bold m-0 mt-2 d-flex align-items-center">
                <label class="flex-grow-1 text-end">Carrying</label>
                <input disabled :value="maxWeight" class="form-control h36 mx-1" style="max-width: 100px" />
                lb.
              </p>
            </template>
          </AccordionItem>

          <button v-if="isFinish" type="button" class="btn btn-warning w-100 my-2" @click="lvlUp">
            <i class="fa-regular fa-circle-up"></i> Level up !
          </button>

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
            <CharacterInfo v-if="character.blindsight">
              <template v-slot:label>Blindsight:</template>
              {{ character.blindsight }} ft.
            </CharacterInfo>
          </div>

          <CharacterInfo v-if="character.resist.length">
            <template v-slot:label>Resistances:</template>
            <template v-for="(r,i) in character.resist.map((r:any) => r.name)" :key="r">
              <template v-if="i>0">,&#160;</template>
              <DamageType :name="r" />
            </template>
          </CharacterInfo>
          <CharacterInfo v-if="character.immune.length">
            <template v-slot:label>Immunities:</template>
            <template v-for="(r,i) in character.immune.map((r:any) => r.name)" :key="r">
              <template v-if="i>0">,&#160;</template>
              <DamageType :name="r" />
            </template>
          </CharacterInfo>
          <CharacterInfo v-if="character.conditionImmune.length">
            <template v-slot:label>Condition Immunities:</template>
            <template v-for="(r,i) in character.conditionImmune.map((r:any) => r.name)" :key="r">
              <template v-if="i>0">,&#160;</template>
              <Condition :name="r" />
            </template>
          </CharacterInfo>

          <CharacterInfo v-if="['race','version','subrace','raceOptions'].includes(step)" v-for="e in computedRaceEntries">
            <template v-slot:label>{{ e.name }}:</template>
            {{ inlineEntries(e.entries) }}
          </CharacterInfo>
          <CharacterInfo v-else-if="computedRaceEntries && computedRaceEntries.length > 0">
            <template v-slot:label>Features:</template>
            <template v-for="(e,i) in computedRaceEntries" :key="e.name">
              <template v-if="i>0">,&#160;</template>
              <span :title="inlineEntries(e.entries)" v-tooltip>{{e.name}}</span>
            </template>
          </CharacterInfo>
          <template v-if="character.level == 1">
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
          </template>

          <!-- Classes infos -->
          <template v-for="(cl,i) in character.class" :key="cl.name">
            <template v-if="cl.name.length">
              <p class="fw-bold border-bottom text-center mb-2 mt-1 fs-1-1">
                {{ cl.name }}
                <template v-if="cl.subclass"> ({{ cl.subclass }})</template>
              </p>
              <ClassInfo :name="cl.name" :subclass="cl.subclass" :level="cl.level" :is-first="i == 0" :valid-abilities="validAbilities" :spells-prepared="cl.preparedSpells.count" :character="character">
                <template v-slot:skills v-if="displayChoosesProf('skills','class',cl.name)">
                  {{ displayChoosesProf('skills','class',cl.name )}}
                </template>
                <template v-slot:expertises v-if="displayChoosesProf('expertises','class',cl.name)">
                  <CharacterInfo>
                    <template v-slot:label>Skill Expertises:</template>
                    {{ displayChoosesProf('expertises','class',cl.name) }}
                  </CharacterInfo>
                </template>
                <template v-slot:tools v-if="displayChoosesProf('tools','class',cl.name)">
                  {{ displayChoosesProf('tools','class',cl.name) }}
                </template>

                <CharacterInfo flex>
                  <template v-slot:label>Class features:</template>
                  <div class="d-flex flex-column flex-grow-1">
                    <template v-for="l in cl.level" :key="l">
                      <div v-if="classesStore.getClassFeatures(cl.name, l, character.excludeFeatures).length > 0">
                        <span class="badge text-bg-dark ps-0 pe-1">{{ l }}</span>
                        <template v-for="(ftc,i) in classesStore.getClassFeatures(cl.name, l, character.excludeFeatures)" :key="ftc">
                          <template v-if="i>0">,&#160;</template>
                          <span :title="S(ftc.entries)" v-tooltip>{{ftc.name}}</span>
                        </template>
                      </div>
                    </template>
                  </div>
                </CharacterInfo>

                <CharacterInfo v-if="cl.subclass" flex>
                  <template v-slot:label>Subclass features:</template>
                  <div class="d-flex flex-column flex-grow-1">
                    <template v-for="l in cl.level" :key="l">
                      <div v-if="classesStore.getSubclassFeatures(cl.name, cl.subclass, l, character.excludeFeatures).length > 0">
                        <span class="badge text-bg-dark ps-0 pe-1">{{ l }}</span>
                        <template v-for="(ftc,i) in classesStore.getSubclassFeatures(cl.name, cl.subclass, l, character.excludeFeatures)" :key="ftc">
                          <template v-if="i>0">,&#160;</template>
                          <span :title="S(ftc.entries)" v-tooltip>{{ftc.name}}</span>
                        </template>
                      </div>
                    </template>
                  </div>
                </CharacterInfo>

                <CharacterInfo v-for="ft in computedFeatures('class', cl.name)" :key="ft.feature">
                  <template v-slot:label>{{ ft.name }}:</template>
                  <template v-for="(ftc,i) in ft.choices.sort()" :key="ftc">
                    <template v-if="i>0">,&#160;</template>
                    <span :title="S(classesStore.getOptionalInfo(ftc))" v-tooltip>{{ftc}}</span>
                  </template>
                </CharacterInfo>
                <CharacterInfo v-if="cl.subclass" v-for="ft in computedFeatures('subclass', cl.subclass)" :key="ft.feature">
                  <template v-slot:label>{{ ft.name }}:</template>
                  <template v-for="(ftc,i) in ft.choices.sort()" :key="ftc">
                    <template v-if="i>0">,&#160;</template>
                    <span :title="S(classesStore.getOptionalInfo(ftc))" v-tooltip>{{ftc}}</span>
                  </template>
                </CharacterInfo>

                <CharacterInfo v-for="pr in classesStore.getOtherProgression(cl.name, cl.subclass, cl.level, character.excludeFeatures)" :key="pr">
                  <template v-slot:label>{{ pr.name }}:</template>
                  <template v-if="pr.progression">{{ evalProgression(pr.progression) }}</template>
                  <template v-if="pr.diceProgression"> {<template v-if="true">{{pr.diceProgression}}</template>}</template>
                  <template v-if="pr.limit"> / {{ evalProgression(pr.limit) }}</template>
                </CharacterInfo>

              </ClassInfo>
            </template>
          </template>

          <!-- Background infos -->
          <template v-if="character.background && bg">
            <p class="fw-bold border-bottom text-center mb-2 mt-1 fs-1-1">
              {{ character.background }}
            </p>
            <template v-if="character.level == 1 || version == '2024'">
              <CharacterInfo v-if="bg.ability">
                <template v-slot:label>Ability Scores:</template>
                {{ bg.ability[0].choose.weighted.from.join(', ') }}
              </CharacterInfo>
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
                <template v-else>{{ DS(bg.entries && bg.entries[0].items.find((ei:any) => ei.name == "Tool Proficiencies:" || ei.name == "Tool Proficiency:"), false) }}</template>
              </CharacterInfo>
            </template>

            <template v-if="bgFeatures">
              <CharacterInfo v-if="bgStep" v-for="bgf in bgFeatures">
                <template v-slot:label>{{ bgf.name.replace('Feature: ', '') }}:</template>
                {{ inlineEntries(bgf.entries) }}
              </CharacterInfo>
              <CharacterInfo v-else>
                <template v-slot:label>Features:</template>
                <template v-for="(bgf,i) in bgFeatures">
                  <template v-if="i>0">,&#160;</template>
                  <span :title="inlineEntries(bgf.entries)" v-tooltip>{{ bgf.name.replace('Feature: ', '') }}</span>
                </template>
              </CharacterInfo>
            </template>
          </template>

          <p v-if="character.feats.length > 0" class="fw-bold border-bottom text-center mb-2 mt-1 fs-1-1">
            Feats
          </p>
          <template v-for="ft in character.feats" :key="ft.name">
            <FeatInfo :feat="feats.find((feat:any) => feat.name == ft.name)" :choice="false"
                      :ability-selected="character.abilities.improvments.find((ip:any) => ip.origin=='feat' && ip.originName==ft.name && ip.level==ft.level)?.ability">
              <CharacterInfo v-for="f in computedFeatures('feat', ft.name)" :key="ft">
                <template v-slot:label>{{ f.name }}:</template>
                <template v-for="(ftc,i) in f.choices.sort()" :key="ftc">
                  <template v-if="i>0">,&#160;</template>
                  <span :title="S(classesStore.getOptionalInfo(ftc))" v-tooltip>{{ftc}}</span>
                </template>
              </CharacterInfo>
            </FeatInfo>
          </template>
          <CharacterInfo v-if="computedSkillsFeat">
            <template v-slot:label>Skill Proficiencies:</template>
            {{ computedSkillsFeat }}
          </CharacterInfo>
          <CharacterInfo v-if="computedExpertisesFeat">
            <template v-slot:label>Skill Expertises:</template>
            {{ computedExpertisesFeat }}
          </CharacterInfo>
          <CharacterInfo v-if="computedLangFeat">
            <template v-slot:label>Languages:</template>
            {{ computedLangFeat }}
          </CharacterInfo>
          <CharacterInfo v-if="computedToolsFeat">
            <template v-slot:label>Tool Proficiencies:</template>
            {{ computedToolsFeat }}
          </CharacterInfo>

          <template v-if="character.spells.length > 0 || spellSlotsInfo">
            <p class="fw-bold border-bottom text-center mb-2 mt-1 fs-1-1">Spells</p>
            <CharacterInfo v-if="spellSlotsInfo">
              <template v-slot:label>Spell slots:</template>
              <template v-for="j in 9">
                <template v-if="spellSlotsInfo[`s${j}`] > 0">
                  <template v-if="j>1">,&#160;</template>
                  Lvl{{j}}: {{spellSlotsInfo[`s${j}`]}}
                </template>
              </template>
            </CharacterInfo>
            <CharacterInfo v-if="spellSlotsPactInfo">
              <template v-slot:label>Spell slots from pact magic:</template>
              Lvl{{spellSlotsPactInfo.max}}: {{spellSlotsPactInfo.slot}}
            </CharacterInfo>
            <CharacterInfo v-for="cs in computedSpells" :key="cs" flex>
              <template v-slot:label>
                <template v-if="cs.spellslot == 0">Cantrip: </template>
                <template v-else>Level {{ cs.spellslot }}: </template>
              </template>
              <div class="d-flex flex-column flex-grow-1">
                <template v-for="o in cs.origins" :key="o">
                  <div>
                    <span class="badge text-bg-dark ps-0 pe-1">{{ o.name }}</span>
                    <template v-for="(s,i) in o.spells" :key="s">
                      <template v-if="i>0">,&#160;</template>
                      <span :title="s.info" v-tooltip :class="!s.prepared && 'text-muted'">{{ s.name }}</span>
                    </template>
                  </div>
                </template>
              </div>

            </CharacterInfo>

          </template>

          <p class="fw-bold text-center mb-2 mt-1 fs-1-1">Details</p>
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