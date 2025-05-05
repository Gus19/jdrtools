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
              s.name != "Knowledge Domain (PSA)"
            ));
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
          if(["Giant Power", "Giant's Havoc"].includes(s.name)) {
            s.header = 1;
          }
          if([
                "Colossus Slayer", "Giant Killer", "Horde Breaker", // Hunter lvl 3
                "Escape the Horde", "Multiattack Defense", "Steel Will", // Hunter lvl7
                "Volley", "Whirlwind Attack", // Hunter lvl 11
                "Evasion", "Stand Against the Tide", "Uncanny Dodge" // Hunter lvl 15
              ].includes(s.name)) {
            s.header = null;
          }
        })

        const response = await fetch(`${import.meta.env.VITE_BASEURL}/data/optionalfeatures.json`);
        const data = await response.json();
        if (data.optionalfeature) {
          this.optionalFeatures = data.optionalfeature;
          this.optionalFeatures.push(...complementsFeatures);
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
      return (name: string, subclass: string|null, level: number): any[]|null => {
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
              let keys = Object.keys(o.progression);
              if(keys.length >= 1) {
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
      return (name: string, subclass: string|null, level: number): any[] => {
        return classProficienciesGained.filter(c => c.level == level && ((c.originName == name && c.origin == 'class') || (c.originName == subclass && c.origin == 'subclass')));
      }
    },
    getOtherProgression() {
      return (name: string, subclass: string|null, level: number): any[] => {
        const pr = classOtherProgression.filter(c => (c.originName == name && c.origin == 'class') || (c.originName == subclass && c.origin == 'subclass'));
        return pr.map(c => {
          return {
            ...c,
            limit: extractProgression(level, c.limit),
            progression: extractProgression(level, c.progression)
          }
        }).filter(c => !!c.progression);
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

const extractProgression = (level: number, progression: any) => {
  if(!progression) return null;
  if("string" == typeof progression || "number" == typeof progression) return progression;
  if(progression.formula) {
    return progression;
  }
  let key = null;
  Object.keys(progression).forEach(k => {
    if(parseInt(k) <= level) key = k;
  });
  if(!key) return null;
  return progression[key];
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
  header?: number|null
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
  source?: string
  page?: number
  srd?: boolean
  featureType: string[]
  prerequisite?: Prerequisite[]
  entries: any[]
  isClassFeatureVariant?: boolean
  consumes?: Consumes3
  otherSources?: OtherSource5[]
  additionalSpells?: AdditionalSpell3[]
  skillProficiencies?: any[]
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
  // Artificier
  {
    name: "Infused Items",
    origin: "class",
    originName: "Artificer",
    parent: "Infusions",
    limit: "Long Rest", //{formula: "false ? 'Long Rest' : 'Test'"},
    progression: {
      "2":  2,
      "6":  3,
      "10": 4,
      "14": 5,
      "18": 6
    }
  },
  {
    name: "Flash of Genius",
    origin: "class",
    originName: "Artificer",
    parent: "Flash of Genius",
    limit: "Long Rest",
    progression: {
      "7": {formula: "mod('int')"}
    }
  },
  {
    name: "Spell-Storin Item",
    origin: "class",
    originName: "Artificer",
    parent: "Spell-Storin Item",
    limit: "Use",
    progression: {
      "11": {formula: "mod('int') * 2"}
    }
  },
  {
    name: "Magic Item",
    origin: "class",
    originName: "Artificer",
    parent: null,
    limit: null,
    progression: {
      "14": "+1 item attunement",
      "18": "+2 items attunement"
    }
  },
  {
    name: "Elixir",
    origin: "subclass",
    originName: "Alchemist",
    parent: "Experimental Elixir",
    limit: "Long Rest",
    progression: {
      "3": 1,
      "6": 2,
      "15": 3
    }
  },
  {
    name: "Arcane Jolt",
    origin: "subclass",
    originName: "Battle Smith",
    parent: "Arcane Jolt",
    limit: "Long Rest",
    progression: {
      "9": {formula: "mod('int')"}
    }
  },
  // {
  //   origin: "class",
  //   originName: "Fighter",
  //   name: "Action Surge",
  //   limit: "Rest",
  //   progression: {
  //     "1": 1,
  //     "17": 2
  //   }
  // },
  // {
  //   origin: "class",
  //   originName: "Fighter",
  //   name: "Second Wind",
  //   limit: "Rest",
  //   progression: {
  //     "1": 1
  //   },
  //   diceProgression: {
  //     "1": "d10"
  //   },
  //   formula: "{{dice}} + {{level}}"
  // },
  // {
  //   origin: "subclass",
  //   originName: "Battle Master",
  //   name: "Superiority Dice",
  //   limit: "Rest",
  //   progression: {
  //     "3": 4,
  //     "7": 5,
  //     "15": 6
  //   },
  //   diceProgression: {
  //     "3": "d8",
  //     "10": "d10",
  //     "18": "d12",
  //   }
  // }
]

export const classProficienciesGained: any[] = [
  // Artificer
  {
    originName: "Alchemist",
    origin: "subclass",
    level: 3,
    tools: [{
      "alchemist's supplies": true
    }]
  },
  {
    originName: "Alchemist",
    origin: "subclass",
    level: 9,
    additionalSpells: [
      {
        "innate": {
          "9": {
            "daily": {
              "mod('int')": [
                "lesser restoration"
              ]
            }
          }
        }
      }
    ]
  },
  {
    originName: "Alchemist",
    origin: "subclass",
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
    originName: "Armorer",
    origin: "subclass",
    level: 3,
    tools: [{
      "smith's tools": true
    }],
    armors: ["heavy"],
    optionalfeatureProgression: [
      {
        name: "Armor Model",
        featureType: [
          "ArmorModel"
        ],
        progression: {
          "3": 1
        }
      }
    ]
  },
  {
    originName: "Artillerist",
    origin: "subclass",
    level: 3,
    tools: [{
      "woodcarver's tools": true
    }]
  },
  {
    originName: "Battle Smith",
    origin: "subclass",
    level: 3,
    tools: [{
      "smith's tools": true
    }],
    weapons: ["martial"]
  },
  // Barbarian
  {
    originName: "Barbarian",
    origin: "class",
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
    originName: "Barbarian",
    origin: "class",
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
    originName: "Ancestral Guardian",
    origin: "subclass",
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
    originName: "Giant",
    origin: "subclass",
    level: 3,
    languages: [{
      "giant": true
    }]
  },
  {
    originName: "Totem Warrior",
    origin: "subclass",
    level: 3,
    optionalfeatureProgression: [
      {
        name: "Totem Spirit",
        featureType: [
          "TotemSpirit"
        ],
        progression: {
          "3": 1
        }
      }
    ]
  },
  {
    originName: "Totem Warrior",
    origin: "subclass",
    level: 6,
    optionalfeatureProgression: [
      {
        name: "Aspect of the Beast",
        featureType: [
          "AspectBeast"
        ],
        progression: {
          "6": 1
        }
      }
    ]
  },
  {
    originName: "Totem Warrior",
    origin: "subclass",
    level: 14,
    optionalfeatureProgression: [
      {
        name: "Totemic Attunement",
        featureType: [
          "TotemicAttunement"
        ],
        progression: {
          "14": 1
        }
      }
    ]
  },
  // Bard
  {
    originName: "Bard",
    origin: "class",
    level: 3,
    expertise: [{
      anyProficientSkill: 2
    }]
  },
  {
    originName: "Bard",
    origin: "class",
    level: 10,
    expertise: [{
      anyProficientSkill: 2
    }]
  },
  {
    originName: "Lore",
    origin: "subclass",
    level: 3,
    skills: [{
      any: 3
    }]
  },
  {
    originName: "Swords",
    origin: "subclass",
    level: 3,
    armors: ["medium"],
    weapons: ["scimitar"]
  },
  {
    originName: "Valor",
    origin: "subclass",
    level: 3,
    armors: ["medium","shield"],
    weapons: ["martial"]
  },
  // Cleric
  {
    originName: "Arcana",
    origin: "subclass",
    level: 1,
    skills: [{
      "arcana": true,
    }]
  },
  {
    originName: "Death",
    origin: "subclass",
    level: 1,
    weapons: ["martial"]
  },
  {
    originName: "Forge",
    origin: "subclass",
    level: 1,
    tools: [{
      "smith's tools": true
    }],
    armors: ["heavy"]
  },
  {
    originName: "Knowledge",
    origin: "subclass",
    level: 1,
    skills: [{
      "choose": {
        "from": [
          "arcana",
          "history",
          "nature",
          "religion"
        ],
        "count": 2
      }
    }],
    languages: [{
      "any": 2
    }]
  },
  {
    originName: "Life",
    origin: "subclass",
    level: 1,
    armors: ["heavy"]
  },
  {
    originName: "Nature",
    origin: "subclass",
    level: 1,
    skills: [{
      "choose": {
        "from": [
          "animal handling",
          "nature",
          "survival"
        ],
        "count": 1
      }
    }],
    armors: ["heavy"]
  },
  {
    originName: "Order",
    origin: "subclass",
    level: 1,
    skills: [{
      "choose": {
        "from": [
          "persuasion",
          "intimidation"
        ],
        "count": 1
      }
    }],
    armors: ["heavy"]
  },
  {
    originName: "Peace",
    origin: "subclass",
    level: 1,
    skills: [{
      "choose": {
        "from": [
          "insight",
          "performance",
          "persuasion"
        ],
        "count": 1
      }
    }]
  },
  {
    originName: "Tempest",
    origin: "subclass",
    level: 1,
    armors: ["heavy"],
    weapons: ["martial"]
  },
  {
    originName: "Twilight",
    origin: "subclass",
    level: 1,
    armors: ["heavy"],
    weapons: ["martial"]
  },
  {
    originName: "War",
    origin: "subclass",
    level: 1,
    armors: ["heavy"],
    weapons: ["martial"]
  },
  {
    originName: "War",
    origin: "subclass",
    level: 17,
    resist: ["slashing", "piercing", "bludgeoning"]
  },
  {
    originName: "Solidarity (PSA)",
    origin: "subclass",
    level: 1,
    armors: ["heavy"]
  },
  {
    originName: "Strength (PSA)",
    origin: "subclass",
    level: 1,
    skills: [{
      "choose": {
        "from": [
          "animal handling",
          "nature",
          "survival"
        ],
        "count": 1
      }
    }],
    armors: ["heavy"]
  },
  {
    originName: "Strength (PSA)",
    origin: "subclass",
    level: 17,
    resist: ["slashing", "piercing", "bludgeoning"]
  },
  {
    originName: "Zeal (PSA)",
    origin: "subclass",
    level: 1,
    armors: ["heavy"],
    weapons: ["martial"]
  },
  // Druid
  {
    originName: "Shepherd",
    origin: "subclass",
    level: 2,
    languages: [{
      "sylvan": true
    }]
  },
  {
    originName: "Spores",
    origin: "subclass",
    level: 14,
    conditionImmune: ["blinded", "deafened", "frightened", "poisoned"]
  },
  // Fighter
  {
    originName: "Arcane Archer",
    origin: "subclass",
    level: 3,
    skills: [{
      "choose": {
        "from": [
          "arcana",
          "nature",
        ],
        "count": 1
      }
    }]
  },
  {
    originName: "Purple Dragon Knight (Banneret)",
    origin: "subclass",
    level: 7,
    skills: [{
      "choose": {
        "from": [
          "persuasion",
          "animal handling",
          "insight",
          "intimidation",
          "performance"
        ],
        "count": 1
      }
    }],
    expertises: [{
      "persuasion": true
    }]
  },
  {
    originName: "Battle Master",
    origin: "subclass",
    level: 3,
    tools: [{anyArtisansTool: true}]
  },
  {
    originName: "Cavalier",
    origin: "subclass",
    level: 3,
    skills: [{
      "choose": {
        "from": [
          "animal handling",
          "history",
          "insight",
          "performance",
          "persuasion"
        ],
        "count": 1
      }
    }],
    languages: [{
      "any": 1
    }]
  },
  {
    originName: "Rune Knight",
    origin: "subclass",
    level: 3,
    tools: [{
      "smith's tools": true
    }],
    languages: [{
      "giant": true
    }]
  },
  {
    originName: "Samurai",
    origin: "subclass",
    level: 3,
    skills: [{
      "choose": {
        "from": [
          "history",
          "insight",
          "performance",
          "persuasion"
        ],
        "count": 1
      }
    }],
    languages: [{
      "any": 1
    }]
  },
  // Monk
  {
    originName: "Monk",
    origin: "class",
    level: 10,
    conditionImmune: ["poisoned", "disease"],
    immune: ["poison"]
  },
  {
    originName: "Mercy",
    origin: "subclass",
    level: 3,
    tools: [{
      "herbalism kit": true
    }],
    skills: [{
      "insight": true,
      "medicine": true
    }]
  },
  {
    originName: "Ascendant Dragon",
    origin: "subclass",
    level: 3,
    languages: [{
      "draconic": true
    }]
  },
  {
    originName: "Ascendant Dragon",
    origin: "subclass",
    level: 17,
    blindsight: 10
  },
  {
    originName: "Drunken Master",
    origin: "subclass",
    level: 3,
    skills: [{
      "performance": true
    }],
    tools: [{
      "brewer's supplies": true
    }],
  },
  {
    originName: "Kensei",
    origin: "subclass",
    level: 3,
    tools: [{
      "choose": {
        "from": [
          "calligrapher's supplies",
          "painter's supplies"
        ],
        "count": 1
      }
    }],
    weapons: [{from: ["martial","simple"], count: 2}]
  },
  // Paladin
  {
    originName: "Paladin",
    origin: "class",
    level: 3,
    conditionImmune: ["disease"]
  },
  // Ranger
  {
    originName: "Ranger",
    origin: "class",
    level: 3,
    additionalSpells: [
      {
        name: "Primal Awareness",
        prepared: {
          "3": [
            "speak with animals"
          ],
          "5": [
            "beast sense"
          ],
          "9": [
            "speak with plants"
          ],
          "13": [
            "locate creature"
          ],
          "17": [
            "commune with nature"
          ]
        }
      }
    ]
  },
  {
    originName: "Drakewarden",
    origin: "subclass",
    level: 3,
    languages: [{
      "draconic": true
    }]
  },
  {
    originName: "Fey Wanderer",
    origin: "subclass",
    level: 3,
    skills: [{
      "choose": {
        "from": [
          "deception",
          "performance",
          "persuasion"
        ],
        "count": 1
      }
    }]
  },
  {
    originName: "Fey Wanderer",
    origin: "subclass",
    level: 15,
    additionalSpells: [
      {
        "innate": {
          "15": {
            "daily": {
              "mod('wis')": [
                "misty step"
              ]
            }
          }
        }
      }
    ]
  },
  {
    originName: "Horizon Walker",
    origin: "subclass",
    level: 7,
    additionalSpells: [
      {
        "innate": {
          "7": {
            "rest": {
              "1": [
                "etherealness"
              ]
            }
          }
        }
      }
    ]
  },
  {
    originName: "Hunter",
    origin: "subclass",
    level: 3,
    optionalfeatureProgression: [
      {
        name: "Hunter's Prey",
        featureType: [
          "HunterPrey"
        ],
        progression: {
          "3": 1
        }
      }
    ]
  },
  {
    originName: "Hunter",
    origin: "subclass",
    level: 7,
    optionalfeatureProgression: [
      {
        name: "Defensive Tactics",
        featureType: [
          "DefensiveTactics"
        ],
        progression: {
          "7": 1
        }
      }
    ]
  },
  {
    originName: "Hunter",
    origin: "subclass",
    level: 11,
    optionalfeatureProgression: [
      {
        name: "Multiattack",
        featureType: [
          "Multiattack"
        ],
        progression: {
          "11": 1
        }
      }
    ]
  },
  {
    originName: "Hunter",
    origin: "subclass",
    level: 15,
    optionalfeatureProgression: [
      {
        name: "Superior Hunter's Defense",
        featureType: [
          "SuperiorHunterDefense"
        ],
        progression: {
          "15": 1
        }
      }
    ]
  },
  // Rogue
  {
    originName: "Assassin",
    origin: "subclass",
    level: 3,
    tools: [{
      "disguise kit": true,
      "poisoner's kit": true
    }]
  },
  {
    originName: "Mastermind",
    origin: "subclass",
    level: 3,
    tools: [{
      "anyGamingSet": 1,
      "disguise kit": true,
      "forgery kit": true
    }],
    languages: [{
      "any": 2
    }]
  },
  {
    originName: "Scout",
    origin: "subclass",
    level: 3,
    skills: [{
      "nature": true,
      "survival": true
    }]
  },
]

const complementsFeatures: OptionalFeature[] = [
  // Barbarian = Totem Warrior = Totem Spirit
  {
    "name": "Bear Totem",
    "featureType": [
      "TotemSpirit"
    ],
    "entries": [
      "While raging, you have resistance to all damage except psychic damage. The spirit of the bear makes you tough enough to stand up to any punishment."
    ]
  },
  {
    "name": "Eagle Totem",
    "featureType": [
      "TotemSpirit"
    ],
    "entries": [
      "While you're raging and aren't wearing heavy armor, other creatures have disadvantage on opportunity attack rolls against you, and you can use the {@action Dash} action as a bonus action on your turn. The spirit of the eagle makes you into a predator who can weave through the fray with ease."
    ]
  },
  {
    "name": "Elk Totem",
    "featureType": [
      "TotemSpirit"
    ],
    "entries": [
      "While you're raging and aren't wearing heavy armor, your walking speed increases by 15 feet. The spirit of the elk makes you extraordinarily swift."
    ]
  },
  {
    "name": "Tiger Totem",
    "featureType": [
      "TotemSpirit"
    ],
    "entries": [
      "While raging, you can add 10 feet to your long jump distance and 3 feet to your high jump distance. The spirit of the tiger empowers your leaps."
    ]
  },
  {
    "name": "Wolf Totem",
    "featureType": [
      "TotemSpirit"
    ],
    "entries": [
      "While you're raging, your friends have advantage on melee attack rolls against any creature within 5 feet of you that is hostile to you. The spirit of the wolf makes you a leader of hunters."
    ]
  },
  // Aspect
  {
    "name": "Bear Aspect",
    "featureType": [
      "AspectBeast"
    ],
    "entries": [
      "You gain the might of a bear. Your carrying capacity (including maximum load and maximum lift) is doubled, and you have advantage on Strength checks made to push, pull, lift, or break objects."
    ]
  },
  {
    "name": "Eagle Aspect",
    "featureType": [
      "AspectBeast"
    ],
    "entries": [
      "You gain the eyesight of an eagle. You can see up to 1 mile away with no difficulty, able to discern even fine details as though looking at something no more than 100 feet away from you. Additionally, dim light doesn't impose disadvantage on your Wisdom ({@skill Perception}) checks."
    ]
  },
  {
    "name": "Elk Aspect",
    "featureType": [
      "AspectBeast"
    ],
    "entries": [
      "Whether mounted or on foot, your travel pace is doubled, as is the travel pace of up to ten companions while they're within 60 feet of you and you're not {@condition incapacitated}. The elk spirit helps you roam far and fast."
    ]
  },
  {
    "name": "Tiger Aspect",
    "featureType": [
      "AspectBeast"
    ],
    "entries": [
      "You gain proficiency in two skills from the following list: {@skill Athletics}, {@skill Acrobatics}, {@skill Stealth}, and {@skill Survival}. The cat spirit hones your survival instincts."
    ],
    "skillProficiencies": [{
      "choose": {
        "from": [
          "athletics",
          "acrobatics",
          "stealth",
          "survival"
        ],
        "count": 2
      }
    }]
  },
  {
    "name": "Wolf Aspect",
    "featureType": [
      "AspectBeast"
    ],
    "entries": [
      "You gain the hunting sensibilities of a wolf. You can track other creatures while traveling at a fast pace, and you can move stealthily while traveling at a normal pace."
    ]
  },
  // Totemic Attunement
  {
    "name": "Bear Attunement",
    "featureType": [
      "TotemicAttunement"
    ],
    "entries": [
      "While you're raging, any creature within 5 feet of you that's hostile to you has disadvantage on attack rolls against targets other than you or another character with this feature. An enemy is immune to this effect if it can't see or hear you or if it can't be {@condition frightened}."
    ]
  },
  {
    "name": "Eagle Attunement",
    "featureType": [
      "TotemicAttunement"
    ],
    "entries": [
      "While raging, you have a flying speed equal to your current walking speed. This benefit works only in short bursts; you fall if you end your turn in the air and nothing else is holding you aloft."
    ]
  },
  {
    "name": "Elk Attunement",
    "featureType": [
      "TotemicAttunement"
    ],
    "entries": [
      "While raging, you can use a bonus action during your move to pass through the space of a Large or smaller creature. That creature must succeed on a Strength saving throw ({@dc 8} + your Strength bonus + your proficiency bonus) or be knocked {@condition prone} and take bludgeoning damage equal to {@damage 1d12} + your Strength modifier."
    ]
  },
  {
    "name": "Tiger Attunement",
    "featureType": [
      "TotemicAttunement"
    ],
    "entries": [
      "While you're raging, if you move at least 20 feet in a straight line toward a Large or smaller target right before making a melee weapon attack against it, you can use a bonus action to make an additional melee weapon attack against it."
    ]
  },
  {
    "name": "Wolf Attunement",
    "featureType": [
      "TotemicAttunement"
    ],
    "entries": [
      "While you're raging, you can use a bonus action on your turn to knock a Large or smaller creature {@condition prone} when you hit it with melee weapon attack."
    ]
  },
  // Artificer = Armorer = Armor Model
  {
    "name": "Guardian",
    "featureType": [
      "ArmorModel"
    ],
    "entries": [
      "You design your armor to be in the front line of conflict. It has the following features:",
      {
        "type": "entries",
        "name": "Thunder Gauntlets",
        "entries": [
          "Each of the armor's gauntlets counts as a simple melee weapon while you aren't holding anything in it, and it deals {@damage 1d8} thunder damage on a hit. A creature hit by the gauntlet has disadvantage on attack rolls against targets other than you until the start of your next turn, as the armor magically emits a distracting pulse when the creature attacks someone else."
        ]
      },
      {
        "type": "entries",
        "name": "Defensive Field",
        "entries": [
          "As a bonus action, you can gain temporary hit points equal to your level in this class, replacing any temporary hit points you already have. You lose these temporary hit points if you doff the armor. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
        ]
      }
    ]
  },
  {
    "name": "Infiltrator",
    "featureType": [
      "ArmorModel"
    ],
    "entries": [
      "You customize your armor for subtle undertakings. It has the following features:",
      {
        "type": "entries",
        "name": "Lightning Launcher",
        "entries": [
          "A gemlike node appears on one of your armored fists or on the chest (your choice). It counts as a simple ranged weapon, with a normal range of 90 feet and a long range of 300 feet, and it deals {@damage 1d6} lightning damage on a hit. Once on each of your turns when you hit a creature with it, you can deal an extra {@damage 1d6} lightning damage to that target."
        ]
      },
      {
        "type": "entries",
        "name": "Powered Steps",
        "entries": [
          "Your walking speed increases by 5 feet."
        ]
      },
      {
        "type": "entries",
        "name": "Dampening Field",
        "entries": [
          "You have advantage on Dexterity ({@skill Stealth}) checks. If the armor normally imposes disadvantage on such checks, the advantage and disadvantage cancel each other, as normal."
        ]
      }
    ]
  },
  // Ranger = Hunter = HunterPrey
  {
    "name": "Horde Breaker",
    "featureType": [
      "HunterPrey"
    ],
    "entries": [
      "Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon."
    ]
  },
  {
    "name": "Colossus Slayer",
    "featureType": [
      "HunterPrey"
    ],
    "entries": [
      "Your tenacity can wear down the most potent foes. When you hit a creature with a weapon attack, the creature takes an extra {@damage 1d8} damage if it's below its hit point maximum. You can deal this extra damage only once per turn."
    ]
  },
  {
    "name": "Giant Killer",
    "featureType": [
      "HunterPrey"
    ],
    "entries": [
      "When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack that creature immediately after its attack, provided that you can see the creature."
    ]
  },
  // Ranger = Hunter = Defensive Tactics
  {
    "name": "Escape the Horde",
    "featureType": [
      "DefensiveTactics"
    ],
    "entries": [
      "Opportunity attacks against you are made with disadvantage."
    ]
  },
  {
    "name": "Multiattack Defense",
    "featureType": [
      "DefensiveTactics"
    ],
    "entries": [
      "When a creature hits you with an attack, you gain a +4 bonus to AC against all subsequent attacks made by that creature for the rest of the turn."
    ]
  },
  {
    "name": "Steel Will",
    "featureType": [
      "DefensiveTactics"
    ],
    "entries": [
      "You have advantage on saving throws against being {@condition frightened}."
    ]
  },
  // Ranger = Hunter = Multiattack
  {
    "name": "Volley",
    "featureType": [
      "Multiattack"
    ],
    "entries": [
      "You can use your action to make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon's range. You must have ammunition for each target, as normal, and you make a separate attack roll for each target."
    ]
  },
  {
    "name": "Whirlwind Attack",
    "featureType": [
      "Multiattack"
    ],
    "entries": [
      "You can use your action to make a melee attack against any number of creatures within 5 feet of you, with a separate attack roll for each target."
    ]
  },
  // Ranger = Hunter = Superior Hunter's Defense
  {
    "name": "Evasion",
    "featureType": [
      "SuperiorHunterDefense"
    ],
    "entries": [
      "You can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or a {@spell lightning bolt} spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
    ]
  },
  {
    "name": "Stand Against the Tide",
    "featureType": [
      "SuperiorHunterDefense"
    ],
    "entries": [
      "When a hostile creature misses you with a melee attack, you can use your reaction to force that creature to repeat the same attack against another creature (other than itself) of your choice."
    ]
  },
  {
    "name": "Uncanny Dodge",
    "featureType": [
      "SuperiorHunterDefense"
    ],
    "entries": [
      "When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you."
    ]
  },
]