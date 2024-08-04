import {defineStore} from 'pinia'
import {initBackgrounds} from "@/assets/backgrounds";

export const useBackgroundsStore = defineStore({
  id: "BackgroundsStore",
  state: (): RootState => ({
    backgrounds: [],
  }),
  actions: {
    async initBackgrounds() {
      if (this.backgrounds.length > 0) {
        // console.log("Backgrounds already loaded !")
        return;
      }
      if (import.meta.env.DEV) {
        console.log("Backgrounds loaded (on dev) !!")
        this.backgrounds = initBackgrounds;
        return;
      }
      try {
        const response = await fetch('https://5e.tools/data/backgrounds.json');
        const data = await response.json();
        this.backgrounds = data.background;
      }
      catch (e) {
        console.error(e);
        this.backgrounds = initBackgrounds;
      }
      finally {
        // console.log("Backgrounds loaded !!");
      }
    }
  },
  getters: {
    isLoad: (state) => state.backgrounds.length > 0,
    getDefaults: (state) => state.backgrounds.filter((b: any) => defaultBackgrounds.includes(b.name))
  }
});

export const defaultBackgrounds = [
  "Acolyte",
  "Anthropologist",
  "Archaeologist",
  "Athlete",
  "Charlatan",
  "City Watch",
  "Clan Crafter",
  "Cloistered Scholar",
  "Courtier",
  "Criminal",
  "Entertainer",
  "Faceless",
  "Faction Agent",
  "Far Traveler",
  "Feylost",
  "Fisher",
  "Folk Hero",
  "Giant Foundling",
  "Gladiator",
  "Guild Artisan",
  "Guild Merchant",
  "Haunted One",
  "Hermit",
  "House Agent",
  "Inheritor",
  "Investigator",// (VRGR)
  "Knight",
  "Knight of the Order",
  "Marine",
  "Mercenary Veteran",
  "Noble",
  "Outlander",
  "Pirate",
  "Rewarded",
  "Ruined",
  "Rune Carver",
  "Sage",
  "Sailor",
  "Shipwright",
  "Smuggler",
  "Soldier",
  "Spy",
  "Urban Bounty Hunter",
  "Urchin",
  "Uthgardt Tribe Member",
  "Waterdhavian Noble",
  "Witchlight Hand"
];

export const classBackground: any = {
  "Artificer": "Guild Artisan",
  "Barbarian": "Outlander",
  "Bard": "Entertainer",
  "Cleric": "Acolyte",
  "Druid": "Hermit",
  "Fighter": "Soldier",
  "Monk": "Hermit",
  // "Mystic": "Hermit",
  "Paladin": "Noble",
  "Ranger": "Outlander",
  "Rogue": "Charlatan",
  "Sorcerer": "Hermit",
  "Warlock": "Charlatan",
  "Wizard": "Sage",
}

export type RootState = {
  backgrounds: Root;
};

export type Root = Root2[]

export interface Root2 {
  name: string
  source: string
  page: number
  srd?: boolean
  basicRules?: boolean
  skillProficiencies?: SkillProficiency[]
  languageProficiencies?: LanguageProficiency[]
  startingEquipment?: StartingEquipment[]
  entries?: any[]
  hasFluff?: boolean
  toolProficiencies?: ToolProficiency[]
  feats?: Feat[]
  fromFeature?: FromFeature
  hasFluffImages?: boolean
  _copy?: Copy
  additionalSpells?: AdditionalSpell[]
  additionalSources?: AdditionalSource[]
  prerequisite?: Prerequisite[]
  skillToolLanguageProficiencies?: SkillToolLanguageProficiency[]
  otherSources?: OtherSource[]
  weaponProficiencies?: WeaponProficiency[]
}

export interface SkillProficiency {
  nature?: boolean
  survival?: boolean
  performance?: boolean
  "sleight of hand"?: boolean
  acrobatics?: boolean
  athletics?: boolean
  choose?: Choose
  history?: boolean
  persuasion?: boolean
  deception?: boolean
  stealth?: boolean
  religion?: boolean
  insight?: boolean
  investigation?: boolean
  "animal handling"?: boolean
  perception?: boolean
  intimidation?: boolean
  arcana?: boolean
  medicine?: boolean
  any?: number
}

export interface Choose {
  from: string[]
  count?: number
}

export interface LanguageProficiency {
  anyStandard?: number
  auran?: boolean
  any?: number
  elvish?: boolean
  giant?: boolean
  other?: boolean
  choose?: Choose2
  dwarvish?: boolean
  undercommon?: boolean
  draconic?: boolean
  "thieves' cant"?: boolean
  primordial?: boolean
}

export interface Choose2 {
  from: string[]
  count?: number
}

export interface StartingEquipment {
  _?: any[]
  a?: any[]
  b?: any[]
  c?: C[]
  d?: D[]
}

export interface C {
  special: string
}

export interface D {
  special: string
}

export interface ToolProficiency {
  "herbalism kit"?: boolean
  choose?: Choose3
  "musical instrument"?: boolean
  "navigator's tools"?: boolean
  "vehicles (space)"?: boolean
  "poisoner's kit"?: boolean
  anyArtisansTool?: number
  "disguise kit"?: boolean
  "thieves' tools"?: boolean
  "cartographer's tools"?: boolean
  "cook's utensils"?: boolean
  "artisan's tools"?: boolean
  "gaming set"?: boolean
  "vehicles (land)"?: boolean
  "vehicles (water)"?: boolean
  "carpenter's tools"?: boolean
  "forgery kit"?: boolean
  "alchemist's supplies"?: boolean
  "tinker's tools"?: boolean
  "brewer's supplies"?: boolean
  "vehicles (air)"?: boolean
  "calligrapher's supplies"?: boolean
}

export interface Choose3 {
  from: string[]
  count?: number
}

export interface Feat {
  "strixhaven initiate|scc"?: boolean
  "tough|phb"?: boolean
  "rune shaper|bgg"?: boolean
  "scion of the outer planes|sato"?: boolean
  "initiate of high sorcery|dsotdq"?: boolean
  "squire of solamnia|dsotdq"?: boolean
  "strike of the giants|bgg"?: boolean
  "magic initiate|phb"?: boolean
  "lucky|phb"?: boolean
  "skilled|phb"?: boolean
  "alert|phb"?: boolean
}

export interface FromFeature {
  additionalSpells?: boolean
  feats: boolean
}

export interface Copy {
  name: string
  source: string
  _mod?: Mod
}

export interface Mod {
  entries: any
}

export interface AdditionalSpell {
  expanded: Expanded
}

export interface Expanded {
  s1: string[]
  s2: string[]
  s3: string[]
  s4: string[]
  s5: string[]
  s0?: string[]
}

export interface AdditionalSource {
  source: string
  page: number
}

export interface Prerequisite {
  campaign?: string[]
  level?: Level
}

export interface Level {
  level: number
  class: Class
}

export interface Class {
  name: string
  visible: boolean
}

export interface SkillToolLanguageProficiency {
  anyLanguage?: number
  anyTool?: number
}

export interface OtherSource {
  source: string
  page: number
}

export interface WeaponProficiency {
  firearms: boolean
}
