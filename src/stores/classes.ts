import {defineStore} from 'pinia'
import {formatOptionalEntries} from "@/utils/refs";

const urls = [
  "class-artificer.json",
  "class-barbarian.json",
  "class-bard.json",
  "class-cleric.json",
  "class-druid.json",
  "class-fighter.json",
  "class-monk.json",
  "class-paladin.json",
  "class-ranger.json",
  "class-rogue.json",
  "class-sorcerer.json",
  "class-warlock.json",
  "class-wizard.json"
]

export const useClassesStore = defineStore("ClassesStore", {
  state: (): RootState => ({
    classes: [],
    subclasses: [],
    classFeatures: [],
    subclassFeatures: [],
    optionalFeatures: [],
    error: false
  }),
  actions: {
    async initClasses() {
      if(this.classes.length > 0) {
        return;
      }
      const local1 = [];
      const local2 = [];
      const local3 = [];
      const local4 = [];
      try {
        for (const u of urls) {
          const response = await fetch(`${import.meta.env.VITE_BASEURL}/data/class/${u}`);
          const data = await response.json();
          if (data.class) {
            local1.push(...data.class);
          }
          if (data.subclass) {
            local2.push(...data.subclass.filter((s:any) =>
              !["TDCSR"].includes(s.source) &&
              s.name != "Knowledge Domain (PSA)")
            );
          }
          if (data.classFeature) {
            local3.push(...data.classFeature);
          }
          if (data.subclassFeature) {
            local4.push(...data.subclassFeature);
          }
        }
        this.classes = local1;
        this.subclasses = local2;
        this.classFeatures = local3;
        this.subclassFeatures = local4;
        this.subclassFeatures.forEach(s => {
          if(s.name == "Giant Power" || s.name == "Giant's Havoc") {
            s.header = 1;
          }
        })

        const response = await fetch(`${import.meta.env.VITE_BASEURL}/data/optionalfeatures.json`);
        const data = await response.json();
        if (data.optionalfeature) {
          this.optionalFeatures = data.optionalfeature;
        }
      }
      catch (e) {
        console.error(e);
        this.error = true;
      }
    }
  },
  getters: {
    isLoad: (state) => state.classes.length > 0,
    getDefaults: (state) => state.classes.filter((b: any) =>
      b.source != "XPHB"
    ),
    getRequirements: (state) => {
      return (name: string): any => {
        let cl = state.classes.find((c:Class) => c.name === name);
        if(!cl || !cl.multiclassing.requirements) return null;
        let r = cl.multiclassing.requirements;
        if(r.or) {
          let or = r.or[0];
          return {
            "or": true,
            "abilities": or
          }
        }
        return {
          "or": false,
          "abilities": r
        }
      }
    },
    getClass() {
      return (name: string): Class|null => {
        if(!name) return null;
        let cl = this.classes.find((c:Class) => c.name === name);
        if(!cl) return null;
        return cl;
      }
    },
    getLevelSubclass() {
      return (name: string): number|null => {
        const cl = this.getClass(name);
        if(!cl) return null;
        let lvlSubclass: any = this.classFeatures.find((c:any) => c.className == cl.name && c.name == cl.subclassTitle)?.level;
        if(!lvlSubclass) return null;
        return parseInt(lvlSubclass);
      }
    },
    getFeatures() {
      return (name: string, subclass: string, level: number): any[]|null => {
        const cl = this.getClass(name);
        if(!cl) return null;
        let f: any[] = this.getClassFeatures(name, level);
        if(subclass && level != this.getLevelSubclass(name)) {
          f.push(...this.getSubclassFeatures(name, subclass, level));
        }
        return f
          .sort((a, b) => a.level - b.level)
        ;
      }
    },
    getSubclassesInfo() {
      return (name: string, level: number): any[] =>
        this.subclasses
          .filter((c:any) => c.className == name)
          .map((c:any) => {
            let tooltip = this.subclassFeatures.find((d:any) => c.className == name && d.subclassShortName == c.shortName)?.entries[0];
            if('string' != typeof tooltip) {
              tooltip = tooltip.entries[0];
            }
            let fts = this.subclassFeatures.filter((d:any) => c.className == name && d.subclassShortName == c.shortName && d.level == level && d.header);
            let infos: any = [];
            // if(c.additionalSpells) {
            //   infos.push({
            //     name: 'Expanded Spells',
            //     info: 'TODO'
            //   });
            // }
            fts.forEach((ft:any) => {
              infos.push({
                name: ft.name,
                info: ft.entries.filter((e:any) => "string" == typeof e && !e.startsWith("{@i")).join(' ')
              });
            })

            return {
              shortName: c.shortName,
              tooltip: tooltip,
              entries: infos,
            }
          })
          .sort((a, b) => a.shortName.localeCompare(b.shortName))
      ;
    },
    getOptionalInfo() {
      return (n: string): string => {
        const of = this.optionalFeatures.find((d:any) => d.name == n);
        if(of) return formatOptionalEntries(of.entries);
        return "";
      }
    },
    getChoicesByFeatureType() {
      return (featureType: string, name: string, subclass: string|null, level: number): any => {
        const choices: any[] = [];
        this.optionalFeatures.filter((c:any) => c.featureType.includes(featureType)).forEach((c:any) => {
          let valid = false;
          let prerequisite = [];
          if(c.prerequisite) {
            const p = c.prerequisite[0];
            if(p.level) {
              if(p.level.level && p.level.level >= level) valid = true;
              if(p.level.class && p.level.class.name == name) valid = true;
              if(p.level.subclass && p.level.subclass.name == subclass) valid = true;
            }
            if(p.pact) {
              valid = true
              prerequisite.push("Pact of the " + p.pact);
            }
            if(p.item) {
              valid = true
              prerequisite.push(p.item.join(', '));
            }
            if(p.spell) {
              valid = true
              prerequisite.push(p.spell.join(', '));
            }
          }
          else valid = true;
          if(valid) {
            choices.push({
              name: c.name,
              info: formatOptionalEntries(c.entries),
              prerequisite: prerequisite
            });
          }
        })
        return choices.sort((a, b) => a.name.localeCompare(b.name));
      }
    },
    cantripProgression() {
      return (name: string, subclass: string|null, level: number): number => {
        const classProgression = this.classes.find(c => c.name == name);
        const subclassProgression = this.subclasses.find(s => s.shortName == subclass && s.className == name);
        if(classProgression || subclassProgression) {
          const valClass = classProgression && classProgression.cantripProgression !== undefined ? classProgression.cantripProgression[level - 1] : 0;
          const valSub = subclassProgression && subclassProgression.cantripProgression !== undefined ? subclassProgression.cantripProgression[level - 1] : 0;
          return Math.max(valClass, valSub);
        }
        return 0;
      }
    },
    spellsKnownProgression() {
      return (name: string, subclass: string|null, level: number): number => {
        let val = 0
        const classProgression = this.classes.find(c => c.name == name);
        const subclassProgression = this.subclasses.find(s => s.shortName == subclass && s.className == name);
        if(classProgression || subclassProgression) {
          const valClass = classProgression && classProgression.spellsKnownProgression !== undefined ? classProgression.spellsKnownProgression[level - 1] : 0;
          const valSub = subclassProgression && subclassProgression.spellsKnownProgression !== undefined ? subclassProgression.spellsKnownProgression[level - 1] : 0;
          val = Math.max(valClass, valSub);
        }
        if(classProgression && classProgression.preparedSpells && val == 0) {
          if(!classProgression.spellsKnownProgressionFixed) val = -1
          else {
            classProgression.spellsKnownProgressionFixed.forEach((f:number, l:number) => {
              if(l <= level - 1) val += f;
            })
          }
        }
        return val;
      }
    },
    findSubclass() {
      return (name: string, subclass: string): Subclass|undefined => {
        return this.subclasses.find(c => c.className == name && c.shortName == subclass);
      }
    },
    getProgression() {
      return (optionalfeatureProgression: any, lastClass: any): any => {
        if(!optionalfeatureProgression) return null;
        // console.log(JSON.stringify(optionalfeatureProgression));

        const level = lastClass.level;
        let choose: any[] = [];

        optionalfeatureProgression.forEach((o:any) => {
          let count = 0;
          let featureType = o.featureType[0];
          if(o.progression.constructor == Array) count = o.progression[level - 1]
          else if('*' in o.progression) count = o.progression['*']
          else {
            if (level in o.progression) count = o.progression[level]
            else {
              // TODO : change if improve ability score
              let keys = Object.keys(o.progression);
              if(keys.length > 1) {
                keys.every(key => {
                  if(parseInt(key) <= level) count = o.progression[key];
                  else return false;
                })
              }
            }
          }

          if(count > 0) {
            choose.push({
              name: o.name,
              featureType: featureType,
              count: count,
              from: this.getChoicesByFeatureType(featureType, lastClass.name, lastClass.subclass, level)
            });
          }
        });
        if(choose.length == 0) return;

        return choose;
      }
    },
    getClassFeatures() {
      return (name: string, level: number): any[] => {
        const cl = this.getClass(name);
        if(!cl) return [];
        let chooseSubclass = level == this.getLevelSubclass(name);
        let fts = this.classFeatures.filter((d:any) => d.className == name && d.level == level);
        return fts.map(ft => {
          return {
            name: ft.name,
            origin: 'class',
            originName: name,
            level: ft.level,
            entries: extractClassEntries(ft.name, ft),
            chooseSubclass: ft.name == cl.subclassTitle && chooseSubclass
          }
        })
      }
    },
    getSubclassFeatures() {
      return (name: string, subclass: string, level: number): any[] => {
        const sc = this.findSubclass(name, subclass);
        if(!sc) return [];
        let fts = this.subclassFeatures.filter((d:any) => name == name && d.subclassShortName == subclass && d.level == level && d.header);
        return fts.map(ft => {
          return {
            name: ft.name,
            origin: 'subclass',
            originName: subclass,
            level: ft.level,
            entries: ft.entries.filter((e: any) => "string" == typeof e && !e.startsWith("{@i")).join(' '),
          }
        })
      }
    },
    getProficienciesGained() {
      return (name: string, subclass: string, level: number): any[] => {
        return classProficienciesGained.filter(c => c.level == level && ((c.originName == name && c.origin == 'class') || (c.originName == subclass && c.origin == 'subclass')));
      }
    }
  }
});

const extractClassEntries = (fn:string, det: any): any => {
  let entries: any = null;
  if(det) {
    entries = det.entries.map((de: any) => {
      if("string" == typeof de) {
        if(de.indexOf("{@i") == 0) return null;
        if(de.indexOf(". See {@book chapter") > 0) de = de.substring(0, de.indexOf(". See {@book chapter")+1);
        return de;
      }
      else if((fn == "Spellcasting" || fn == "Pact Magic") && de.type == "entries" && de.name == "Spellcasting Ability") {
        return de.entries[0];
      }
      return null;
    }).filter((de:any) => de !== null).join('\n');
  }
  return entries;
}

export interface RootState {
  classes: Class[]
  subclasses: Subclass[]
  classFeatures: ClassFeature[]
  subclassFeatures: SubclassFeature[]
  optionalFeatures: OptionalFeature[],
  error: boolean
}

export interface Class {
  name: string
  source: string
  page: number
  otherSources?: OtherSource[]
  hd: Hd
  proficiency: string[]
  spellcastingAbility?: string
  casterProgression?: string
  preparedSpells?: string
  preparedSpellsChange?: string
  cantripProgression?: number[]
  optionalfeatureProgression?: OptionalfeatureProgression[]
  startingProficiencies: StartingProficiencies
  startingEquipment: StartingEquipment
  multiclassing: Multiclassing
  classTableGroups?: ClassTableGroup[]
  classFeatures: any[]
  subclassTitle: string
  hasFluff: boolean
  hasFluffImages: boolean
  srd?: boolean
  spellsKnownProgression?: number[]
  additionalSpells?: AdditionalSpell[]
  basicRules?: boolean
  spellsKnownProgressionFixedByLevel?: SpellsKnownProgressionFixedByLevel
  spellsKnownProgressionFixed?: number[]
  spellsKnownProgressionFixedAllowLowerLevel?: boolean
}

export interface OtherSource {
  source: string
  page: number
}

export interface Hd {
  number: number
  faces: number
}

export interface OptionalfeatureProgression {
  name: string
  featureType: string[]
  progression: any
}

export interface StartingProficiencies {
  armor?: any[]
  weapons: any[]
  tools?: string[]
  toolProficiencies?: ToolProficiency[]
  skills: Skill[]
}

export interface ToolProficiency {
  "thieves' tools"?: boolean
  "herbalism kit"?: boolean
  anyMusicalInstrument?: number
  "tinker's tools"?: boolean
  anyArtisansTool?: number
}

export interface Skill {
  choose?: Choose
  any?: number
}

export interface Choose {
  from: string[]
  count: number
}

export interface StartingEquipment {
  additionalFromBackground: boolean
  default: string[]
  goldAlternative: string
  defaultData: DefaultDaum[]
}

export interface DefaultDaum {
  _?: any[]
  a?: any[]
  b?: any[]
  c?: any[]
}

export interface Multiclassing {
  requirements: Requirements
  proficienciesGained?: ProficienciesGained
}

export interface Requirements {
  int?: number
  str?: number
  cha?: number
  wis?: number
  or?: Or[]
  dex?: number
}

export interface Or {
  str: number
  dex: number
}

export interface ProficienciesGained {
  armor?: any[]
  weapons?: string[]
  tools?: string[]
  toolProficiencies?: ToolProficiency2[]
  skills?: Skill2[]
}

export interface ToolProficiency2 {
  "thieves' tools"?: boolean
  anyMusicalInstrument?: number
  "tinker's tools"?: boolean
}

export interface Skill2 {
  choose: Choose2
}

export interface Choose2 {
  from: string[]
  count: number
}

export interface ClassTableGroup {
  colLabels: string[]
  rows?: any[][]
  title?: string
  rowsSpellProgression?: number[][]
}

export interface AdditionalSpell {
  name: string
  known: Known
}

export interface Known {
  "10": N10[]
  "14": N14[]
  "18": N18[]
}

export interface N10 {
  choose: string
}

export interface N14 {
  choose: string
}

export interface N18 {
  choose: string
}

export interface SpellsKnownProgressionFixedByLevel {
  "11": N11
  "13": N13
  "15": N15
  "17": N17
}

export interface N11 {
  "6": number
}

export interface N13 {
  "7": number
}

export interface N15 {
  "8": number
}

export interface N17 {
  "9": number
}

export interface Subclass {
  name: string
  shortName: string
  source: string
  className: string
  classSource: string
  page: number
  otherSources?: OtherSource2[]
  additionalSpells?: AdditionalSpell2[]
  subclassFeatures: string[]
  hasFluffImages?: boolean
  srd?: boolean
  spellcastingAbility?: string
  optionalfeatureProgression?: OptionalfeatureProgression2[]
  basicRules?: boolean
  isReprinted?: boolean
  casterProgression?: string
  cantripProgression?: number[]
  spellsKnownProgression?: number[]
  subclassTableGroups?: SubclassTableGroup[]
}

export interface OtherSource2 {
  source: string
  page: number
}

export interface AdditionalSpell2 {
  expanded?: Expanded
  known?: Known2
  name?: string
  prepared?: Prepared
  innate?: Innate
  resourceName?: string
  ability?: string
}

export interface Expanded {
  "1"?: N1[]
  s1?: string[]
  s2?: string[]
  s3?: string[]
  s4?: string[]
  s5?: string[]
  "9"?: any[]
  "3"?: N3[]
  "5"?: N5[]
  "7"?: N7[]
  "11"?: N112[]
  "13"?: N132[]
  "15"?: N152[]
  "17"?: N172[]
  "19"?: N19[]
}

export interface N1 {
  all: string
}

export interface N3 {
  all: string
}

export interface N5 {
  all: string
}

export interface N7 {
  all: string
}

export interface N112 {
  all: string
}

export interface N132 {
  all: string
}

export interface N152 {
  all: string
}

export interface N172 {
  all: string
}

export interface N19 {
  all: string
}

export interface Known2 {
  "1": any
  "10"?: N102
  "3"?: string[]
  "5"?: string[]
  "7"?: string[]
  "9"?: string[]
  "13"?: string[]
  "17"?: string[]
  "2"?: string[]
  "14"?: string[]
  "6"?: N6[]
}

export interface N102 {
  daily: Daily
}

export interface Daily {
  "1": string[]
}

export interface N6 {
  choose: string
}

export interface Prepared {
  "3"?: string[]
  "5"?: string[]
  "9"?: string[]
  "13"?: string[]
  "17"?: any[]
  "2"?: string[]
  "7"?: string[]
  "1"?: string[]
}

export interface Innate {
  "6": any
  "11"?: N113
  "3": any
  "18"?: N182
  "10": any
}

export interface N113 {
  daily: Daily2
}

export interface Daily2 {
  "1": string[]
}

export interface N182 {
  daily: Daily3
}

export interface Daily3 {
  "1": string[]
}

export interface OptionalfeatureProgression2 {
  name: string
  featureType: string[]
  progression: Progression
  required?: Required
}

export interface Progression {
  "3"?: number
  "6"?: number
  "11"?: number
  "17"?: number
  "7"?: number
  "10"?: number
  "15"?: number
  "18"?: number
}

export interface Required {
  "3": string[]
}

export interface SubclassTableGroup {
  subclasses: Subclass2[]
  colLabels: string[]
  rows?: number[][]
  title?: string
  rowsSpellProgression?: number[][]
}

export interface Subclass2 {
  name: string
  source: string
}

export interface ClassFeature {
  name: string
  source: string
  page: number
  otherSources?: OtherSource3[]
  className: string
  classSource: string
  level: number
  entries: any[]
  header?: number
  srd?: boolean
  isClassFeatureVariant?: boolean
  basicRules?: boolean
  consumes?: Consumes
}

export interface OtherSource3 {
  source: string
  page: number
}

export interface Consumes {
  name: string
  amount?: number
}

export interface SubclassFeature {
  name: string
  source: string
  page: number
  otherSources?: OtherSource4[]
  className: string
  classSource: string
  subclassShortName: string
  subclassSource: string
  level: number
  entries: any[]
  header?: number
  type?: string
  srd?: boolean
  consumes?: Consumes2
  isClassFeatureVariant?: boolean
  basicRules?: boolean
}

export interface OtherSource4 {
  source: string
  page: number
}

export interface Consumes2 {
  name: string
  amount?: number
}

export interface OptionalFeature {
  name: string
  source: string
  page: number
  srd?: boolean
  featureType: string[]
  prerequisite?: Prerequisite[]
  entries: any[]
  isClassFeatureVariant?: boolean
  consumes?: Consumes3
  otherSources?: OtherSource5[]
  additionalSpells?: AdditionalSpell3[]
  skillProficiencies?: SkillProficiency[]
  senses?: Sense[]
  hasFluffImages?: boolean
  optionalfeatureProgression?: OptionalfeatureProgression3[]
}

export interface Prerequisite {
  level?: Level
  pact?: string
  item?: string[]
  spell?: string[]
}

export interface Level {
  level: number
  class: Class2
  subclass?: Subclass3
}

export interface Class2 {
  name: string
  source?: string
}

export interface Subclass3 {
  name: string
  source?: string
}

export interface Consumes3 {
  name: string
  amountMin?: number
  amountMax?: number
  amount?: number
}

export interface OtherSource5 {
  source: string
  page: number
}

export interface AdditionalSpell3 {
  innate?: Innate2
  resourceName?: string
  ability?: string
  known?: Known3
}

export interface Innate2 {
  _: any
}

export interface Known3 {
  _: GeneratedType[]
}

export interface GeneratedType {
  choose: string
  count: number
}

export interface SkillProficiency {
  deception: boolean
  persuasion: boolean
}

export interface Sense {
  darkvision?: number
  blindsight?: number
}

export interface OptionalfeatureProgression3 {
  name: string
  featureType: string[]
  progression: Progression2
}

export interface Progression2 {
  "*": number
}

const classOtherProgression: any[] = [
  {
    origin: "class",
    originName: "Fighter",
    name: "Action Surge",
    limit: "Rest",
    progression: {
      "1": 1,
      "17": 2
    }
  },
  {
    origin: "class",
    originName: "Fighter",
    name: "Second Wind",
    limit: "Rest",
    progression: {
      "1": 1
    },
    diceProgression: {
      "1": "d10"
    },
    formula: "{{dice}} + {{level}}"
  },
  {
    origin: "subclass",
    originName: "Battle Master",
    name: "Superiority Dice",
    limit: "Rest",
    progression: {
      "3": 4,
      "7": 5,
      "15": 6
    },
    diceProgression: {
      "3": "d8",
      "10": "d10",
      "18": "d12",
    }
  }
]

export const classProficienciesGained: any[] = [
  // Artificer
  // Alchemist
  {
    origin: "subclass",
    originName: "Alchemist",
    level: 3,
    tools: [{
      "alchemist's supplies": true
    }]
  },
  {
    origin: "subclass",
    originName: "Alchemist",
    level: 9,
    additionalSpells: [
      {
        "innate": {
          "9": {
            "daily": {
              "1": [
                "lesser restoration"
              ]
            },
            modAbility: "int"
          }
        }
      }
    ]
  },
  {
    origin: "subclass",
    originName: "Alchemist",
    level: 15,
    resist: ["acid", "poison"],
    conditionImmune: ["poisoned"],
    additionalSpells: [
      {
        "innate": {
          "15": {
            "daily": {
              "1": [
                "greater restoration",
                "heal"
              ]
            }
          }
        }
      }
    ]
  },
  {
    origin: "subclass",
    originName: "Armorer",
    level: 3,
    tools: [{
      "smith's tools": true
    }],
    armors: ["heavy"]
    // TODO : add optional feature option like Infusions
  },
  // Artillerist
  {
    origin: "subclass",
    originName: "Artillerist",
    level: 3,
    tools: [{
      "woodcarver's tools": true
    }]
  },
  // Battle Smith
  {
    origin: "subclass",
    originName: "Battle Smith",
    level: 3,
    tools: [{
      "smith's tools": true
    }],
    weapons: ["martial"]
  },
  // Barbarian
  {
    origin: "class",
    originName: "Barbarian",
    level: 3,
    skills: [{
      "choose": {
        "from": [
          "animal handling",
          "athletics",
          "intimidation",
          "nature",
          "perception",
          "survival"
        ],
        "count": 1
      }
    }]
  },
  {
    origin: "class",
    originName: "Barbarian",
    level: 10,
    skills: [{
      "choose": {
        "from": [
          "animal handling",
          "athletics",
          "intimidation",
          "nature",
          "perception",
          "survival"
        ],
        "count": 1
      }
    }]
  },
  {
    origin: "subclass",
    originName: "Ancestral Guardian",
    level: 10,
    additionalSpells: [{
      "innate": {
        "10": {
          "daily": {
            "1": [
              "augury",
              "clairvoyance"
            ]
          }
        }
      }
    }]
  },
  {
    origin: "subclass",
    originName: "Giant",
    level: 3,
    languages: [{
      "giant": true
    }]
  },
  // Bard
  {
    origin: "class",
    originName: "Bard",
    level: 3,
    expertise: [{
      anyProficientSkill: 2
    }]
  },
  {
    origin: "class",
    originName: "Bard",
    level: 10,
    expertise: [{
      anyProficientSkill: 2
    }]
  },
  {
    origin: "subclass",
    originName: "Lore",
    level: 3,
    skills: [{
      any: 3
    }]
  }
]