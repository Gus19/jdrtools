<script setup lang="ts">
  import {onMounted, computed, ref, watch} from "vue";
  import { uuid } from 'vue-uuid';
  import JsonEditor from 'vue3-ts-jsoneditor';
  import {useSpellsStore} from "@/stores/spells";
  import {useRacesStore} from "@/stores/races";
  import {useBackgroundsStore,classBackground} from "@/stores/backgrounds";
  import type {RaceBuilder} from "@/stores/races";
  import {LanguagesStandard,LanguagesExotic,LanguagesKey,Sizes,Skills,displaySubrace,S} from "@/utils/refs";
  import AccordionItem from "@/components/AccordionItem.vue";
  import CharacterInfo from "@/components/CharacterInfo.vue";
  import {useClassesStore} from "@/stores/classes";
  const spellsStore = useSpellsStore();
  const racesStore = useRacesStore();
  const bgStore = useBackgroundsStore();
  const classesStore = useClassesStore();
  const storagekey: string = 'character-builder';
  const dev: boolean = import.meta.env.DEV;
  const VITE_BASEURL = import.meta.env.VITE_BASEURL;
  const CHOOSE = "Choose";

  onMounted(async () => {
    await spellsStore.initSpells();
    await racesStore.initStore();
    await bgStore.initBackgrounds();
    await classesStore.initClasses();

    character.value = {
      ...defaultCharacter,
      ...getStorage()
    };
    chooses.value = {
      ...defaultChoose
    };
  });

  const step = ref<string>('');
  const steps = ref<any[]>([]);

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
      const a = character.value.race.name !== null;
      const b = character.value.race.source !== null;
      const c = character.value.subrace === null || character.value.subrace.name !== null;
      const d = character.value.class[0].name !== null;
      const e = character.value.background !== null;
      const f = (abPoints.value === 27 || character.value.abilities.option === 'free') && checkBonus();
      const g = f;
      const h = f;
      const i = f;
      const j = f;

      ss.push({
        name: 'race',
        valid: a
      });

      if(versions.value === null) {
        console.error("value null ici pas normal");
        return; //AllLoad not finish
      }
      if (a && versions.value.length > 1) {
        ss.push({
          name: 'version',
          valid: b
        });
      }
      if (a && b && character.value.subrace !== null) {
        ss.push({
          name: 'subrace',
          valid: c
        });
      }
      // todo check here if cantrip/spell/feat for race/subrace

      if ((a && b && c) || d) {
        ss.push({
          name: 'class',
          valid: d
        });
      }
      if (d || e) {
        ss.push({
          name: 'background',
          valid: e
        });
      }
      if (e) {
        ss.push({
          name: 'abilities',
          valid: f
        });
      }
      if(f) {
        ss.push({
          name: 'features',
          valid: false
        });
      }
      if(g) {
        ss.push({
          name: 'hp',
          valid: character.value.hp.max > 0
        });
        calcHPMax(true);
      }
      if(h) {
        ss.push({
          name: 'proficiencies',
          valid: false
        });
      }
      if(i) {
        ss.push({
          name: 'spells',
          valid: false
        });
      }
      if(j) {
        ss.push({
          name: 'equipment',
          valid: false
        });
      }
      // todo check here if cantrip/spell/feat for background
    }
    catch (e) {
    }
    finally {
      steps.value = ss;
      if(!step.value) lastStep();
    }
  }
  const validAbilities = computed(() => steps.value.find(s => s.name === "abilities" && s.valid));
  // watch(validAbilities, (newValue) => {
  //   if(newValue) {
  //     calcHPMax(true);
  //     calcHPAverage(false);
  //   }
  // });

  const calcAbility = (key: string) => {
    const t = tAb(key);
    return `${t} (${fn(mod(key))})`;
  }
  const tAb = (key: string) => {
    if(!character.value) return 10;
    return character.value.abilities[key].base+character.value.abilities[key].bonus;
  }
  const mod = (key: string) => {
    const t = tAb(key);
    return Math.floor((t - 10) / 2);
  }
  // formatNumber
  const fn = (n: number) => {
    return `${n > 0 ? `+${n}` : n}`;
  }

  const hasNext = computed(() => steps.value.findIndex(s => s.name === step.value) < steps.value.length - 1);
  const hasPrev = computed(() => steps.value.findIndex(s => s.name === step.value) > 0);

  const nextStep = () => {
    let i = steps.value.findIndex(s => s.name === step.value);
    step.value = steps.value[i+1].name;
  }
  const prevStep = () => {
    let i = steps.value.findIndex(s => s.name === step.value);
    step.value = steps.value[i-1].name;
  }

  const lastStep = () => {
    step.value = steps.value.find(s => !s.valid).name;
  }

  const faState = (b: boolean) => {
    return b ? 'fa-check' : 'fa-times';
  }

  const defaultClass = {
    name: "",
    level: 1,
    subclass: null,
    dice: null,
    hps: []
  }
  const defaultCharacter = {
    uuid: uuid.v4(),
    name: null,
    level: 1,
    race: {
      name: null,
      source: null,
      version: null
    },
    subrace: null,
    class: [
      {...defaultClass}
    ],
    background: null,
    abilities: {
      str: {
        base: 10,
        bonus: 0
      },
      dex: {
        base: 10,
        bonus: 0
      },
      con: {
        base: 10,
        bonus: 0
      },
      int: {
        base: 10,
        bonus: 0
      },
      wis: {
        base: 10,
        bonus: 0
      },
      cha: {
        base: 10,
        bonus: 0
      },
      option: 'spend'
    },
    hp: {
      max: 0,
      option: ''
    },
    ac: 0,
    save: [],
    spellcasting: ["int"],
    skillProf: [],
    skillExp: [],
    languages: [],
    vulnerable: [],
    resist: [],
    immune: [],
    conditionImmune: [],
    speed: {
      walk: null
    },
    darkvision: null,
    size: '',
    spells: [
      // {name: null, level: 0 à 9, from: race, subrace, class, subclass, origin: le name, }
    ],
    spellSlots: [
      // {1:0}
    ]
  }

  const character = ref<any>(null);

  const allLoad = computed(() => spellsStore.isLoad && racesStore.isLoad && bgStore.isLoad && classesStore.isLoad && character.value !== null && versions.value !== null);
  watch(allLoad, (newValue) => {
    if(newValue) {
      calcDatasRace(false);
      calcDatasClass(false);
      calcDatasBG(false);
      // calculStep();
    }
  }, {once: true});

  const reset = () => {
    if(confirm("Discard this character ?")) {
      character.value = {
        ...defaultCharacter
      };
      step.value = 'race';
      calcDatasRace(true);
      calcDatasClass(true);
      calcDatasBG(true);
    }
  }
  const defaultChoose = {
    ability: null,
    size: null,
    languages: []
  }
  const chooses = ref<any>(null);

  const logJson = () => {
    json.value = JSON.parse(JSON.stringify(character.value));
  }

  const saveStorage = function() {
    // if(import.meta.env.DEV) console.log('saveStorage');
    localStorage.setItem(storagekey, JSON.stringify(character.value));
    calculStep();
    logJson();
  };

  const getStorage = function() {
    return JSON.parse(localStorage.getItem(storagekey)||'{}');
  };

  watch(character, saveStorage, {deep: true});
  // watch(() => character.value?.level, () => {
  //   if(character.value.class.length === 1) {
  //     character.value.class[0].level = character.value.level;
  //   }
  // });

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
    character.value.subrace = r.subrace == 0 ? null : {
      name: null,
      source: null
    }
    calcDatasRace();
  };
  const versions = computed(() => racesStore.getRaceByName(character.value.race.name));
  const subraces = computed(() => racesStore.getSubraceByName(character.value.race.name, character.value.race.source));
  const isLineage = computed(() => versions.value !== null && character.value.race.source && versions.value.find(v => v.source === character.value.race.source)?.lineage);
  const computedUrlRace = computed(() => `${VITE_BASEURL}/races.html#${character.value.race.name}${character.value.subrace&&character.value.subrace.name!==null ? ' ('+character.value.subrace.name+')': ''}_${character.value.subrace?.source||character.value.race.source}`)
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
    if(!s) return v;
    let c: any = {
      ...v
    };
    Object.keys(s).forEach((k:string) => {
      if(k in c) {
        if(s.overwrite && s.overwrite[k]) {
          c[k] = s[k];
        }
        else if("string" == typeof c[k]) {
          if(c[k] !== s[k]) {
            c[k] += " " + s[k];
          }
        }
        else if(Array.isArray(s[k])) {
          c[k] = [
            ...c[k],
            ...s[k]
          ]
          if(k === "entries") {
            let overwrite = c[k].filter((e:any) => e.data && e.data.overwrite).map((e:any) => e.data.overwrite);
            if(overwrite) {
              c[k] = [
                ...c[k].filter((e: any) => !overwrite.includes(e.name))
              ]
            }
          }
        }
        else if("object" == typeof s[k]) {
          c[k] = {
            ...c[k],
            ...s[k]
          }
        }
        else {
          c[k] = s[k];
        }
      }
      else {
        c[k] = s[k];
      }
    });
    return c;
  });
  const computedRaceEntries = computed(() => {
    // if(!) return;
    return computedRace.value.entries.filter((e:any) =>
      e.name &&
      !["Age","Size","Languages","Language","Superior Darkvision","Darkvision","Alignment","Speed","Appearance"].includes(e.name) &&
      e.name.indexOf('Resistance') < 0 &&
      e.type === "entries"
      && !e.entries.find((e2: any) => "string" !== typeof e2)
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

  const inlineAbility = (ability: any[]) => {
    const s: string[] = [];
    // const a: any = ability[0];
    ability.forEach((a:any) => {
      Object.keys(a).forEach((k: string) => {
        if (k == "choose") {
          let am = a[k].amount ? a[k].amount : 1;
          s.push(`${a[k].count&&a[k].count>1?a[k].count+' ':''}other +${am}`);
        } else {
          s.push(`${k} ${fn(a[k])}`);
        }
      })
    });
    return s.join(', ');
  }
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
    calcDatasRace();
  }
  const changeSubrace = (s: any) => {
    if(character.value.subrace.name === displaySubrace(s)) return;
    character.value.subrace = {
      name: displaySubrace(s),
      source: s.source
    };
    calcDatasRace();
  }

  const calcDatasRace = (reset: boolean = true) => {
    if(reset) {
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
      character.value.languages = [];
      character.value.resist = [];
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
    if(d.darkvision) character.value.darkvision = d.darkvision;
    if(d.speed) {
      if("number" == typeof d.speed) character.value.speed.walk = d.speed;
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
    }
    if(d.languageProficiencies) {
      d.languageProficiencies.forEach((l:any) => {
        Object.keys(l).forEach(k => {
          if(LanguagesKey.includes(k)) {
            if(reset) character.value.languages.push(k)
            chooses.value.languages = [...chooses.value.languages, k];
          }
          else if(k === "anyStandard") {
            for (let i = 1; i <= l.anyStandard; i++) {
              if(reset) character.value.languages.push("")
              chooses.value.languages = [...chooses.value.languages, k];
            }
          }
        });
      });
    }
    if(d.resist) character.value.resist = d.resist;
    // if(d.entries.find((e:any) => e.name === 'Fey Ancestry') && !character.value.resist.includes('charmed')) character.value.resist = [...character.value.resist, 'charmed'];
  }

  const changeMulticlass = (e: any, i: number) => {
    // console.log(e.target.value, i);
    if(!e.target.value) return;
    const c = classes.value.find(cl => cl.name === e.target.value);
    changeClass(c, i);
    calcHPAverage(false);
    calcHPMax();
  }
  const changeMulticlassLevel = (e: any, i: number) => {
    character.value.class[i].level = parseInt(e.target.value);
    calcLevel();
    calcHPAverage(false);
    calcHPMax();
  }

  const changeClass = (c: any, i: number) => {
    if(character.value.class[i].name === c.name) return;

    if(i === 0 && character.value.class.length > 1) {
      character.value.class = [
        {
          ...defaultClass,
          level: character.value.level
        }
      ]
    }

    character.value.class[i].name = c.name;
    character.value.class[i].dice = c.hd.faces;
    calcDatasClass();
  }

  const calcDatasClass = (reset: boolean = true) => {
    if(reset) {
      // reset choose spells, equipment, subclass ...
    }
    //setHPAverage();
    character.value.class.forEach((c:any, i:number) => {
      const cl = classes.value.find(c1 => c1.name === c.name);
      if(!cl) return;
      if(i === 0) {
        character.value.save = cl.proficiency;
      }
    });
  }

  const changeBG = (b: any) => {
    if(character.value.background === b.name) return;
    character.value.background = b.name;
    calcDatasBG();
  }

  const calcDatasBG = (reset: boolean = true) => {

  }

  const classes = computed(() => classesStore.classes);
  const backgrounds = computed(() => bgStore.getDefaults);
  const bg = computed(() => backgrounds.value.find(b => b.name === character.value.background));

  const inlineSkill = (skills: any[]) => {
    const s: string[] = [];
    // const a: any = ability[0];
    skills.forEach((a:any) => {
      Object.keys(a).forEach((k: string) => s.push(textSkill(k, a)) )
    });
    return s.join(', ');
  }
  const textSkill = (k: string, a:any = null) => {
    if (k == "choose") {
      return `Choose ${a[k].count||1}`;
    } else if (k == "any") {
      return `Any ${a[k]||1}`;
    } else {
      const sk = Skills.find(s => s.prof === k);
      return `${sk.display} (${sk.attribute.substring(0,3)})`;
    }
  }

  const isSpendMode = computed(() => character.value.abilities.option === 'spend');
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
  const abilities: any[] = [
    {
      name: "Strength",
      key: "str"
    },
    {
      name: "Dexterity",
      key: "dex"
    },
    {
      name: "Constitution",
      key: "con"
    },
    {
      name: "Intelligence",
      key: "int"
    },
    {
      name: "Wisdom",
      key: "wis"
    },
    {
      name: "Charisma",
      key: "cha"
    }
  ]
  const abPoints = computed(() => {
    if(!isSpendMode) return null;
    let total = 0;
    abilities.forEach(a => total += costPoint[character.value.abilities[a.key].base]);
    return total;
  });
  const checkBonus = () => {
    let t = 0;
    let t2 = 0;
    for (const i in abilities) {
      const a = abilities[i].key;
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
    for (const i in abilities) {
      const a = abilities[i].key;
      t += character.value.abilities[a].bonus;
    }

    if(bonus === 2) {
      for (const i in abilities) {
        const a = abilities[i].key;
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
    for (const i in abilities) {
      const a = abilities[i].key;
      if(chooses.value.ability.from.includes(a) && character.value.abilities[a].bonus > 0) {
        t += 1;
      }
    }
    if (t >= chooses.value.ability.count && character.value.abilities[key].bonus === 0) return true
    return false;
  };
  const modCon = computed(() => mod('con'));
  const prof = computed(() => character.value.level <= 4 ? 2 : character.value.level <= 8 ? 3 : character.value.level <= 12 ? 4 : character.value.level <= 16 ? 5 : 6)
  watch(modCon, (newValue, oldValue) => {
    if(newValue) {
      calcHPMax();
    }
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

  const changeHP = (e: any, i: number, j: number) => {
    if (!e.target.value) return;
    character.value.class[i].hps[j] = parseInt(e.target.value);
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

</script>

<template>
  <div v-if="!allLoad">
    <p class="m-0 fst-italic">Loading all datas ...</p>
    <p class="m-0"><i class="fa" :class="faState(racesStore.isLoad)" /> Races</p>
    <p class="m-0"><i class="fa" :class="faState(spellsStore.isLoad)" /> Spells</p>
    <p class="m-0"><i class="fa" :class="faState(bgStore.isLoad)" /> Backgrounds</p>
    <p class="m-0"><i class="fa" :class="faState(classesStore.isLoad)" /> Classes</p>
    <p class="m-0"><i class="fa" :class="faState(character !== null)" /> Character</p>
  </div>
  <div v-else>
    <template v-if="dev">
      <div class="btn-group border-bottom fixed-bottom">
        <button class="btn btn-secondary" @click="logJson">logJson</button>
        <button class="btn btn-secondary" @click="json = steps">logSteps</button>
        <button class="btn btn-secondary" @click="json = versions">logVersions</button>
        <button class="btn btn-secondary" @click="json = subraces">logSubraces</button>
        <button class="btn btn-secondary" @click="json = computedRace">loadComputedRace</button>
        <button class="btn btn-secondary" @click="calcDatasRace(false)">calcDatas</button>
        <button class="btn btn-secondary" @click="calcDatasRace(true)">calcDatas with reset</button>
        <button class="btn btn-secondary" @click="json = chooses">logChooses</button>
        <button class="btn btn-secondary" @click="json = bg">logBg</button>
        <button class="btn btn-secondary" @click="json = classes">logClasses</button>
        <button class="btn btn-secondary" @click="calcHPAverage">setAverageHP</button>
        <button class="btn btn-secondary" @click="calcHPMax">calcHP</button>
      </div>
    </template>

    <div class="row">
      <div class="col-12">
        <div class="d-flex align-items-center mb-2">
<!--          <label class="me-2 fst-italic">Name</label>-->
<!--          <input type="text" v-model="character.name" class="form-control h36" />-->
<!--          <label class="ms-2 me-2 fst-italic">Level</label>-->
<!--          <input type="number" min="1" max="20" :value="character.level" @change="changeMulticlassLevel($event, 0)" class="form-control h36 w-25" :disabled="character.class.length > 1" />-->
          <button type="button" @click="reset" class="btn h36 ms-2 btn-danger">Reset</button>
          <button type="button" class="btn h36 ms-2 btn-info" disabled>Save</button>
          <button type="button" class="btn h36 ms-2 btn-secondary" disabled>Import</button>
          <button type="button" class="btn h36 ms-2 btn-success" disabled>Convert</button>
        </div>
      </div>
      <div class="col-6">
        <div class="accordion">
          <AccordionItem name="race" :steps="steps" :step="step" @click="changeStep"><!--@next-step="nextStep" @prev-step="prevStep"-->
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
          <AccordionItem name="class" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>First class</template>
            <template v-slot:header-value>{{ character.class[0].name || CHOOSE }}</template>
            <template v-slot:body>
              <div>
                <template v-for="(c,i) in classes" :key="i">
                  <button type="button" class="btn me-1 mb-1" @click="changeClass(c, 0)" :class="[
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
              <small class="fst-italic"><span class="text-primary">*</span> Quick background for {{ character.class[0].name }}</small>
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
              <p class="lh-1 fst-italic m-0 py-1 small" v-if="isSpendMode">
                Spend 27 points according to the Ability Score Point Cost (max 15 for every Ability Score).
                The number of assigned points is indicated at the bottom.
                A typical character would be: 15 - 14 - 13 - 12 - 10 - 8
              </p>

              <div v-for="a in abilities" :key="a.key" class="d-flex justify-content-center align-items-center my-2 text-center">
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
              <!--<div class="btn-group w-100 mt-1">
                <button type="button" class="btn btn-sm btn-success"  @click="" :disabled="abPoints !== 27 || !isSpendMode">Next</button>
              </div>-->
            </template>
          </AccordionItem>

          <AccordionItem name="features" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Features</template>
            <template v-slot:body>

              <!-- Racial Feat here if apply -->

              <template v-for="(cl,i) in character.class" :key="i">
                <div v-if="character.class.length > 1" class="input-group">
                  <select class="form-select form-select-sm flex-grow-1" @change="changeMulticlass($event, i)" :disabled="i === 0"><!--v-model="cl.name"-->
                    <option value="" :disabled="cl.name.length">{{CHOOSE}}</option>
                    <option v-for="c in classes" :key="c.name" :value="c.name" :selected="c.name === cl.name" :disabled="character.class.map((cl2: any) => cl2.name).includes(c.name)">{{ c.name }}</option>
                  </select>
                  <input type="number" min="1" max="20" :value="cl.level" @change="changeMulticlassLevel($event, i)" class="form-control" />
                  <button v-if="i > 0" type="button" class="btn btn-outline-danger" @click="removeOtherClass(i)">
                    <i class="fa-regular fa-trash-can"></i>
                  </button>
                  <button v-else type="button" class="btn btn-outline-secondary" @click="step = 'class'">
                    <i class="fa-solid fa-circle-arrow-right"></i>
                  </button>
                </div>
                <template v-for="(l,j) in cl.level" :key="j">
                  <div>{{cl.name }} {{ l }}</div>
                </template>
              </template>
              <button v-if="character.class[character.class.length-1].name" type="button" class="btn btn-sm btn-outline-info w-100" @click="addOtherClass">
                <i class="fa-solid fa-circle-plus"></i>
                Add an other class
              </button>
            </template>
          </AccordionItem>

          <AccordionItem name="hp" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Hit Points</template>
            <template v-slot:body>
              <div class="d-flex w-100 justify-content-evenly">
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
                <template v-for="(cl,i) in character.class" :key="i">
                  <div class="d-flex justify-content-center align-items-center my-2 text-center">
                    <label class="w-25 fw-bold">{{ cl.name }}</label>
                    <label class="w-25 fw-bold">d{{cl.dice}}</label>
                    <label class="w-25 fw-bold">CON</label>
                    <span class="w-25 fw-bold">Total</span>
                  </div>
                  <div v-for="(l,j) in cl.level" :key="j" class="d-flex justify-content-center align-items-center my-2 text-center">
                    <label class="w-25">{{ l }}</label>
                    <div class="w-25 d-flex justify-content-center">
                      <input type="number" class="form-control ability" :value="cl.hps[j]" @change="changeHP($event, i, j)" min="1" :max="cl.dice" :disabled="character.hp.option === 'average' || (i===0 && l===1)">
                    </div>
                    <div class="bonus w-25">
                      {{ fn(modCon) }}
                    </div>
                    <span class="total w-25 fw-bold">
                      {{ Math.max(cl.hps[j] + modCon, 1) }}
                    </span>
                  </div>
                </template>

                <p class="text-center m-0 py-1">HP Max: <span class="fw-bold">{{ character.hp.max }}</span></p>
              </template>
            </template>
          </AccordionItem>

          <AccordionItem name="proficiencies" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Proficiencies</template>
            <template v-slot:body>
<!--              <div v-if="chooses.languages.length">-->
<!--                <label class="me-1 w-100">Race languages:</label>-->
<!--                <div class="d-flex align-items-center">-->
<!--                  <template v-for="(c,i) in chooses.languages">-->
<!--                    <select class="form-select form-select-sm" v-model="character.languages[i]" :disabled="c !== 'anyStandard'">-->
<!--                      <option value="">{{CHOOSE}}</option>-->
<!--                      <optgroup label="Standard">-->
<!--                        <option v-for="l in LanguagesStandard" :key="l" :value="l.toLowerCase()" :disabled="character.languages.includes(l.toLowerCase())">{{ l }}</option>-->
<!--                      </optgroup>-->
<!--                      <optgroup label="Exotic">-->
<!--                        <option v-for="l in LanguagesExotic" :key="l" :value="l.toLowerCase()" :disabled="character.languages.includes(l.toLowerCase())">{{ l }}</option>-->
<!--                      </optgroup>-->
<!--                    </select>-->
<!--                  </template>-->
<!--                </div>-->
<!--              </div>-->
              <p class="fw-bold m-0">Skills</p>
              <div v-for="s in Skills" class="d-flex justify-content-center align-items-center my-1">
                <label class="w-50 text-end">{{ textSkill(s.prof) }}</label>
                <div class="w-25 text-center">
                  <div class="btn-group">
                    <button class="btn" :class="character.skillProf.includes(s.name) ? 'btn-primary' : 'btn-outline-secondary'">P</button>
                    <button class="btn" :class="character.skillExp.includes(s.name) ? 'btn-primary' : 'btn-outline-secondary'" :disabled="true">E</button>
                  </div>
                </div>
                <span class="w-25 text-start">{{ fn( mod(s.attribute.substring(0,3)) + (character.skillProf.includes(s.name)?prof:0) + (character.skillExp.includes(s.name)?prof:0) ) }}</span>
              </div>
            </template>
          </AccordionItem>

          <AccordionItem name="spells" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Spells</template>
            <template v-slot:body>
            </template>
          </AccordionItem>

          <AccordionItem name="equipment" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Equipment</template>
            <template v-slot:body>
            </template>
          </AccordionItem>

        </div>
      </div>
      <div class="col-6 character-info">

        <div class="d-flex align-items-center mb-2">
          <label class="me-2 fw-bold fst-italic">Name</label>
          <input type="text" v-model="character.name" class="form-control h36" />
        </div>

        <template v-if="show.character && computedRace">
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
              <div v-for="a in abilities" class="d-flex flex-column align-items-center flex-grow-1">
                <span>
                  {{a.key.toUpperCase()}}
                  <i class="fa-brands fa-product-hunt" v-if="character.save.includes(a.key)" title="Saving Throw" v-tooltip></i>
                  <i class="fa-solid fa-wand-magic-sparkles" v-if="character.spellcasting.includes(a.key)" title="Spellcasting" v-tooltip></i>
                </span>
                <span>{{calcAbility(a.key)}}</span>
              </div>
            </div>
          </template>

          <p v-if="character.race.name" class="fw-bold border-bottom text-center mt-2 mb-2 fs-1-1">
            {{ character.race.name }} {{ character.subrace?.name }}
            <a v-if="dev" :href="computedUrlRace" target="_blank">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
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
            {{ character.resist.join(', ') }}
          </CharacterInfo>
          <CharacterInfo v-if="['race','version','subrace'].includes(step)" v-for="e in computedRaceEntries">
            <template v-slot:label>{{ e.name }}:</template>
            {{ S(e.entries[0], false) }}
          </CharacterInfo>
          <CharacterInfo v-else>
            <template v-slot:label>{{ computedRaceEntries.map((e:any) => e.name).join(', ') }}</template>
          </CharacterInfo>

          <template v-if="character.background && bg">
            <p class="fw-bold border-bottom text-center mb-2 mt-1 fs-1-1">
              {{ character.background }}
              <a v-if="dev" :href="`${VITE_BASEURL}/backgrounds.html#${bg.name}_${bg.source}`" target="_blank">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </p>
            <CharacterInfo v-if="bg.skillProficiencies">
              <template v-slot:label>Skill Proficiencies:</template>
<!--              {{ Object.keys(bg.skillProficiencies[0]).map(k => Skills.find(s => s.prof === k)?.display).join(', ') }}-->
              {{ inlineSkill(bg.skillProficiencies) }}
            </CharacterInfo>
            <CharacterInfo>
              <template v-slot:label>Tool Proficiencies:</template>
            </CharacterInfo>
          </template>
        </template>
        <template v-else>
          <p class="text-center fst-italic">
            <template v-if="!character.race.name">Choose a race ...</template>
            <template v-if="character.race.name && !character.race.version">Choose a version ...</template>
          </p>
        </template>
        <json-editor v-if="show.json"
            mode="text"
            v-model:json="json"
            :dark-theme="true"
            :status-bar="false"
            :main-menu-bar="false"
            class="my-editor"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .h36 {
    height: 36px;
  }
  .ability {
    width: 75px;
  }
  p.small {
    text-align: justify;
    font-size: .875em;
  }
  .character-info p {
    margin: 0;
  }
  .character-info .form-select-sm {
    min-width: 100px;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: .5rem;
  }
  .fs-1-1 {
    font-size: 1.1rem;
  }
</style>