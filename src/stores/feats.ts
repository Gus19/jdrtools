import {defineStore} from 'pinia'
import {isSrc2024} from "@/utils/refs";

export const useFeatsStore = defineStore("FeatsStore", {
  state: (): RootState => ({
    feats: [],
    transformFeatures: [],
    error: false,
    version: ''
  }),
  actions: {
    async initFeats(version: string = '') {
      if(version != this.version) {
        this.version = version;
        this.feats = []
        this.transformFeatures = []
      }
      if (this.feats.length > 0) {
        return;
      }
      try {
        const response = await fetch(`${import.meta.env.VITE_BASEURL}/data${this.version}/feats.json`);
        const data = await response.json();
        this.feats = data.feat.filter((f:any) => {
          if(this.version == "2024") {
            return isSrc2024(f.source) && !["FS","FS:R","FS:P","EB"].includes(f.category) && f.name != "Ability Score Improvement"
          }
          else {
            return !["TDCSR"].includes(f.source)
          }
        });
        if(this.version == "2024") {
          this.transformFeatures = data.feat.filter((f:any) => isSrc2024(f.source) && ["FS","FS:R","FS:P","EB"].includes(f.category));
        }
      }
      catch (e) {
        console.error(e);
        this.error = true;
      }
    }
  },
  getters: {
    isLoad: (state) => state.feats.length > 0,
    getDefaults() {
      return (character: any): any[] => {
        const level = character.level ?? 1;
        let raceName = character.race?.name.toLowerCase() ?? "";
        const classNames = character.leveling;
        const bgName = character.background?.toLowerCase() ?? "";

        return this.feats.map(f => {
          let valid = false;
          let prerequisite: string[] = [];
          if(f.prerequisite) {
            f.prerequisite.forEach(p => {
              let v = true
              if(p.level && !isNaN(p.level) && level < p.level) v = false;
              if(p.level && isNaN(p.level) && p.level.class && classNames.includes(p.level.class.name)) v = false;

              if(p.race) {
                if(raceName.indexOf('dragonborn') == 0) raceName = "dragonborn";
                if(!p.race.map(r => r.name.toLowerCase()).includes(raceName)) v = false;
              }
              if((p.spellcasting || p.spellcasting2020 || p.spellcastingFeature || p.spellcastingPrepared) && character.spellcasting.length == 0) v = false;
              if(p.feat) {
                const tests = p.feat.map(ft => ft.substring(0, ft.indexOf('|')).toLowerCase());
                if(!character.feats.find((ft:any) => ft.name != null && tests.includes(ft.name.toLowerCase()))) v = false;
              }
              if(p.ability) {
                if(p.ability[0].str && character.abilities.str.total < p.ability[0].str) v = false;
                if(p.ability[0].dex && character.abilities.dex.total < p.ability[0].dex) v = false;
                if(p.ability[0].con && character.abilities.con.total < p.ability[0].con) v = false;
                if(p.ability[0].wis && character.abilities.wis.total < p.ability[0].wis) v = false;
                if(p.ability[0].int && character.abilities.int.total < p.ability[0].int) v = false;
                if(p.ability[0].cha && character.abilities.cha.total < p.ability[0].cha) v = false;
              }
              if(p.background && !p.background.map(b => b.name.toLowerCase()).includes(bgName)) v = false;
              if(p.other) prerequisite.push(p.other);
              if(p.otherSummary) prerequisite.push(p.otherSummary.entrySummary);
              if(p.campaign && !prerequisite.includes(`Campaign ${p.campaign[0]}`)) prerequisite.push(`Campaign ${p.campaign[0]}`)
              if(v) valid = true;
            });
          }
          else valid = true;
          if(valid) {
            return {
              name: f.name,
              prerequisite: prerequisite,
              prerequisites: f.prerequisite,
              hasAbility: f.ability !== undefined,
              ability: f.ability,
              hasSpells: f.additionalSpells !== undefined,
              entries: f.entries
            }
          }
          return null
        }).filter(e => e !== null);
      }
    },
    findByName() {
      return (name: string): Feat|undefined => {
        return this.feats.find(f => f.name == name);
      }
    },
    findByBG() {
      return (o: any): Feat[] => {
        let names: string[] = [];
        o.forEach((f:any) => {
          Object.keys(f).forEach(k => {
            let n = k.split('|')[0].toLowerCase();
            names.push(n.split(';')[0]);
          });
        })
        return this.feats.filter(f => names.includes(f.name.toLowerCase()));
      }
    }
  }
});

export type RootState = {
  feats: Feat[];
  transformFeatures: Feat[];
  error: boolean,
  version: string
};

export interface Feat {
  name: string
  source: string
  page?: number
  prerequisite?: Prerequisite[]
  ability?: Ability2[]
  additionalSpells?: AdditionalSpell[]
  entries: any[]
  hasFluffImages?: boolean
  toolProficiencies?: ToolProficiency[]
  optionalfeatureProgression?: OptionalfeatureProgression[]
  resist?: any[]
  languageProficiencies?: LanguageProficiency[]
  srd?: boolean
  weaponProficiencies?: WeaponProficiency[]
  armorProficiencies?: ArmorProficiency[]
  bonusSenses?: BonusSense[]
  traitTags?: string[]
  skillProficiencies?: SkillProficiency[]
  savingThrowProficiencies?: SavingThrowProficiency[]
  expertise?: Expertise[]
  skillToolLanguageProficiencies?: SkillToolLanguageProficiency[]
  additionalSources?: AdditionalSource[]
  category?: string
}

export interface Prerequisite {
  race?: Race[]
  spellcasting?: boolean
  level: any
  feat?: string[]
  spellcasting2020?: boolean
  ability?: Ability[]
  campaign?: string[]
  proficiency?: Proficiency[]
  spellcastingPrepared?: boolean
  spellcastingFeature?: boolean
  otherSummary?: OtherSummary
  other?: string
  background?: Background[]
}

export interface Race {
  name: string
  subrace?: string
  displayEntry?: string
}

export interface Ability {
  dex?: number
  int?: number
  cha?: number
  str?: number
  wis?: number
  con?: number
}

export interface Proficiency {
  weaponGroup?: string
  armor?: string
  weapon?: string
}

export interface OtherSummary {
  entry: string
  entrySummary: string
}

export interface Background {
  name: string
  displayEntry: string
}

export interface Ability2 {
  choose?: Choose
  con?: number
  int?: number
  str?: number
  dex?: number
  cha?: number
}

export interface Choose {
  from: string[]
  amount: number
  entry?: string
}

export interface AdditionalSpell {
  ability: any
  innate?: Innate
  known?: Known
  name?: string
}

export interface Innate {
  _: GeneratedType
}

export interface GeneratedType {
  daily?: Daily
  will?: string[]
  ritual?: string[]
  rest?: Rest
}

export interface Daily {
  "1e"?: any[]
  "1"?: any[]
}

export interface Rest {
  "1": N1[]
}

export interface N1 {
  choose: string
}

export interface Known {
  _: any[]
}

export interface ToolProficiency {
  anyArtisansTool?: number
  any?: number
  "poisoner's kit"?: boolean
  "cook's utensils"?: boolean
}

export interface OptionalfeatureProgression {
  name: string
  featureType: string[]
  progression: Progression
}

export interface Progression {
  "*": number
}

export interface LanguageProficiency {
  any?: number
  sylvan?: boolean
}

export interface WeaponProficiency {
  choose?: Choose2
  firearms?: boolean
}

export interface Choose2 {
  fromFilter: string
  count: number
}

export interface ArmorProficiency {
  medium?: boolean
  shield?: boolean
  light?: boolean
  heavy?: boolean
}

export interface BonusSense {
  darkvision: number
}

export interface SkillProficiency {
  choose: Choose3
}

export interface Choose3 {
  from: string[]
}

export interface SavingThrowProficiency {
  choose: Choose4
}

export interface Choose4 {
  from: string[]
}

export interface Expertise {
  anyProficientSkill: number
}

export interface SkillToolLanguageProficiency {
  choose: Choose5[]
}

export interface Choose5 {
  from: string[]
  count: number
}

export interface AdditionalSource {
  source: string
  page: number
}