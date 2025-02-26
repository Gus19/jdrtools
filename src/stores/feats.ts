import {defineStore} from 'pinia'

export const useFeatsStore = defineStore("FeatsStore", {
  state: (): RootState => ({
    feats: [],
    error: false
  }),
  actions: {
    async initFeats() {
      if (this.feats.length > 0) {
        // console.log("Feats already loaded !")
        return;
      }
      try {
        const response = await fetch(`${import.meta.env.VITE_BASEURL}/data/feats.json`);
        const data = await response.json();
        this.feats = data.feat;
      }
      catch (e) {
        console.error(e);
        this.error = true;
      }
      finally {
        // console.log("Feats loaded !!");
      }
    }
  },
  getters: {
    isLoad: (state) => state.feats.length > 0,
    getDefaults: (state) => state.feats.filter((b: any) =>
      true
    //     defaultFeats.includes(b.name) && (b.source != "XPHB")
    //   // && b.feats
    //   // && b.skillProficiencies[0].any
    )
    //prerequisite => only if prerequisite match
  }
});

export type RootState = {
  feats: Feat[];
  error: boolean
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