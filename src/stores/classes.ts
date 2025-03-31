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
            local2.push(...data.subclass);
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

        let lvlSubclass: any = null;
        cl.classFeatures.every((cf:any) => {
          if("object" == typeof cf) {
            let split = cf.classFeature.split('|');
            if(!lvlSubclass) lvlSubclass = split[3];
            return false;
          }
          return true;
        });
        return parseInt(lvlSubclass);
      }
    },
    getProgression() {
      return (name: string, subclass: string|null = null): any => {
        const cl = this.getClass(name);
        if(!cl) return null;
        // TODO mettre ça dans le choose ?
        return cl.optionalfeatureProgression;
      }
    },
    getFeatures() {
      return (name: string, subclass: string, level: number): any[]|null => {
        const cl = this.getClass(name);
        if(!cl) return null;
        // Choose into optionalfeatureProgression
        let f: any[] = [];

        cl.classFeatures.forEach((cf:any) => {
          let d;
          let subclassfeature: boolean = false;
          let tochoose: boolean = false;
          let featureType: string|null = null;
          if("string" == typeof cf) {
            d = cf;
          }
          else {
            d = cf.classFeature
            subclassfeature = true;
          }
          let chooseSubclass = subclassfeature && level == this.getLevelSubclass(name);
          let split = d.split("|");
          let l = split[3]; //level
          let fn = split[0];
          if(!level || level == l) {
            let options: any = null; // TODO : Si progression lvl (constructor == Array), il faut que ce soit toujours dispo, choix qu'au premier lvl là
            cl.optionalfeatureProgression && cl.optionalfeatureProgression.forEach((o:any) => {
              if(o.name == fn && ((o.progression.constructor == Array && o.progression[l-1] != 0) || l in o.progression)) { // Array = level progression, always true
                tochoose = true;
                featureType = o.featureType[0];
                if(featureType) {
                  options = {
                    count: o.progression.constructor == Array ? o.progression[l - 1] : o.progression[l],
                    from: this.getChoicesByFeatureType(featureType, name, subclass, level)
                  }
                }
              }
            });

            let det = this.classFeatures.find((d:ClassFeature) => d.className == name && d.level == l && d.name == fn);
            let entries: any = null;

            if(det) {
              entries = det.entries.map((de: any) => {
                if("string" == typeof de) {
                  if(de.indexOf("{@i") == 0) return null;
                  if(de.indexOf(". See {@book chapter") > 0) de = de.substring(0, de.indexOf(". See {@book chapter")+1);
                  return de;
                }
                else if(fn == "Spellcasting" && de.type == "entries" && de.name == "Spellcasting Ability") {
                  return de.entries[0];
                }
                return null;
              }).filter((de:any) => de !== null).join('\n');
            }

            f.push({
              name: split[0],
              level: l,
              entries: entries,
              choose: tochoose,
              options: options,
              chooseSubclass: chooseSubclass,
              subclasses: chooseSubclass && this.getSubclassesInfo(name)
            });
          }
          if(subclassfeature) {
            // TODO : features in another part
            // same push but from state.subclassFeatures
          }
        });
        return f;
      }
    },
    getSubclassesInfo() {
      return (a: string): any[] => this.subclasses.filter((c:any) => c.className == a).map((c:any) => {
        let info = this.subclassFeatures.find((d:any) => c.className == a && d.subclassShortName == c.shortName)?.entries[0];
        if('string' != typeof info) {
          info = info.entries[0];
        }
        return {
          shortName: c.shortName,
          info: info,
        }
      })
    },
    getOptionalInfo() {
      return (n: string): string => formatOptionalEntries(this.optionalFeatures.find((d:any) => d.name == n).entries);
    },
    getChoicesByFeatureType() {
      return (featureType: string, name: string, subclass: string, level: number): any => {
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
        return choices;
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
    }
  }
});

export type RootState = {
  classes: Class[];
  subclasses: Subclass[];
  classFeatures: ClassFeature[];
  subclassFeatures: SubclassFeature[];
  optionalFeatures: any[];
  error: boolean;
};

export interface Root {
  class: Class[]
  subclass: Subclass[]
  classFeature: ClassFeature[]
  subclassFeature: SubclassFeature[]
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
