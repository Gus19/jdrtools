import {defineStore} from 'pinia'
import {displaySubrace} from "@/utils/refs";

export const useRacesStore = defineStore("RacesStore", {
  state: (): RootState => ({
    racessource: null,
    builder: [],
    error: false
  }),

  actions: {
    async initStore() {
      if (this.racessource != null) {
        // console.log("Races already loaded !");
        return;
      }
      try {
        const response = await fetch(`${import.meta.env.VITE_BASEURL}/data/races.json`);
        const data = await response.json();
        // this.racessource = data;
        this.initsource(data);
      }
      catch (e) {
        console.error(e);
        this.error = true
      }
      finally {
        // console.log("Races loaded !!");
        this.initBuilder();
      }
    },
    initsource(data: Root) {
      let npctag = "NPC Race"
      this.racessource = {
        race: data.race.filter(s => !((s.traitTags||[]).includes(npctag))),
        subrace: data.subrace.filter(s => !((s.traitTags||[]).includes(npctag)) && s.name !== "Eladrin")
      }
    },
    initBuilder() {
      Object.keys(organisation).forEach((k: string) => {
        let races: RaceBuilder[] = [];
        organisation[k].forEach((n: string) => {
          const rf =  this.getRaceByName(n)||[];
          // if(rf.length <= 1) return;
          const srf = [];
          rf.forEach(r => {
            srf.push(...this.getSubraceByName(r.name, r.source)||[]);
          });
          races.push({
            name: n,
            version: rf.length,
            subrace: srf.length,
            source: rf.length == 1 ? rf[0].source : null
          });
        })
        this.builder.push({
          name: k,
          races: races
        });
      })
    }
  },

  getters: {
    isLoad: (state) => state.racessource !== null,
    countRaces: (state) => state.racessource && state.racessource.race.length,
    countSubraces: (state) => state.racessource && state.racessource.subrace.length,
    getRaceByName: (state) => {
      return (n: string) => state.racessource ? state.racessource.race.filter(r =>
        r.name == n
        && !('_copy' in r)
        && r.source != "XPHB"
        // && !('reprintedAs' in r)
      ).sort((a:any,b:any) => a.name > b.name ? 1 : 0) : null
    },
    getSubraceByName: (state) => {
      return (n: string, s:string|null = null) => state.racessource ? state.racessource.subrace.filter(r =>
        r.raceName == n
        && (s == null || r.raceSource == s)
        // && r.traitTags
      ).sort((a:any,b:any) => a.name && displaySubrace(a) > displaySubrace(b)) : null
    }
  }
});

const organisation: any = {
  "Common": [
    "Dragonborn",
    "Dwarf",
    "Elf",
    "Gnome",
    "Half-Elf",
    "Half-Orc",
    "Halfling",
    "Human",
    "Tiefling"
  ],
  "Exotic": [
    "Aarakocra",
    "Aasimar",
    "Changeling",
    "Deep Gnome",
    "Duergar",
    "Eladrin",
    "Fairy",
    "Firbolg",
    "Genasi",
    "Githyanki",
    "Githzerai",
    "Goliath",
    "Harengon",
    "Kenku",
    "Locathah",
    "Owlin",
    "Satyr",
    "Sea Elf",
    "Shadar-Kai",
    "Tabaxi",
    "Tortle",
    "Triton",
    "Verdan"
  ],
  "Monstrous": [
    "Bugbear",
    "Centaur",
    "Goblin",
    "Grung",
    "Hobgoblin",
    "Kobold",
    "Lizardfolk",
    "Minotaur",
    "Orc",
    "Shifter",
    "Yuan-Ti"
  ],
  "Specific": [
    "Aetherborn",
    "Astral Elf",
    "Autognome",
    "Aven",
    "Giff",
    "Hadozee",
    "Hexblood",
    "Kalashtar",
    "Kender",
    "Khenra",
    "Kor",
    "Loxodon",
    "Merfolk",
    "Naga",
    "Plasmoid",
    "Reborn",
    "Simic Hybrid",
    "Siren",
    "Thri-kreen",
    "Vampire",
    "Vedalken",
    "Warforged",
    // "Custom Lineage"
  ]
}

export type RootState = {
  racessource: Root | null,
  builder: Builder[],
  error: boolean
};

export interface Builder {
  name: string
  races: RaceBuilder[]
}

export interface RaceBuilder {
  name: string,
  /*races: Race[]
  subraces: Subrace[]*/
  version: number,
  subrace: number,
  source: string | null
}

export interface Root {
  race: Race[]
  subrace: Subrace[]
}

export interface Race {
  name: string
  source: string
  page: number
  size?: string[]
  speed: any
  ability?: Ability[]
  traitTags?: string[]
  languageProficiencies?: LanguageProficiency[]
  entries?: any[]
  otherSources?: OtherSource[]
  reprintedAs?: string[]
  age?: Age
  soundClip?: SoundClip
  hasFluff?: boolean
  hasFluffImages?: boolean
  lineage: any
  additionalSpells?: AdditionalSpell[]
  darkvision?: number
  resist?: any[]
  _versions?: Version[]
  heightAndWeight?: HeightAndWeight
  skillProficiencies?: SkillProficiency[]
  creatureTypes?: string[]
  creatureTypeTags?: string[]
  toolProficiencies?: ToolProficiency[]
  conditionImmune?: string[]
  _copy?: Copy
  feats?: Feat[]
  srd?: boolean
  basicRules?: boolean
  weaponProficiencies?: WeaponProficiency[]
  additionalSources?: AdditionalSource[]
  blindsight?: number
  immune?: string[]
  armorProficiencies?: ArmorProficiency[]
  vulnerable?: string[]
}

export interface Ability {
  str?: number
  con?: number
  int?: number
  wis?: number
  cha?: number
  choose?: Choose
  dex?: number
}

export interface Choose {
  from: string[]
  count?: number
  amount?: number
}

export interface LanguageProficiency {
  common?: boolean
  abyssal?: boolean
  draconic?: boolean
  anyStandard?: number
  other?: boolean
  goblin?: boolean
  primordial?: boolean
  aquan?: boolean
  infernal?: boolean
  auran?: boolean
  choose?: Choose2
  sylvan?: boolean
  orc?: boolean
  undercommon?: boolean
  halfling?: boolean
  elvish?: boolean
  giant?: boolean
  gnomish?: boolean
  terran?: boolean
  dwarvish?: boolean
  celestial?: boolean
}

export interface Choose2 {
  from: string[]
  count: number
}

export interface OtherSource {
  source: string
  page?: number
}

export interface Age {
  mature?: number
  max: number
}

export interface SoundClip {
  type: string
  path: string
}

export interface AdditionalSpell {
  innate?: Innate
  ability: any
  known?: Known
}

export interface Innate {
  "1": any
  "3": any
  "5"?: N5
}

export interface N5 {
  daily: Daily
}

export interface Daily {
  "1": string[]
}

export interface Known {
  "1": any
  _?: GeneratedType[]
}

export interface GeneratedType {
  choose: string
  count: number
}

export interface Version {
  _abstract?: Abstract
  _implementations?: Implementation[]
  name?: string
  source?: string
  _mod?: Mod2
  traitTags?: string[]
  skillProficiencies: any
  darkvision: any
  additionalSpells: any
}

export interface Abstract {
  name: string
  source: string
  _mod: Mod
}

export interface Mod {
  entries: Entry[]
}

export interface Entry {
  mode: string
  names?: string
  replace?: string
  items?: Items
}

export interface Items {
  type: string
  name: string
  entries: string[]
}

export interface Implementation {
  _variables: Variables
  resist?: string[]
}

export interface Variables {
  color: string
  damageType: string
}

export interface Mod2 {
  entries: Entries
}

export interface Entries {
  mode: string
  replace?: string
  items: Items2
}

export interface Items2 {
  name: string
  type: string
  entries: string[]
}

export interface HeightAndWeight {
  baseHeight: number
  heightMod: string
  baseWeight: number
  weightMod?: string
}

export interface SkillProficiency {
  any?: number
  persuasion?: boolean
  choose?: Choose3
  survival?: boolean
  perception?: boolean
  stealth?: boolean
  performance?: boolean
  intimidation?: boolean
  athletics?: boolean
  acrobatics?: boolean
}

export interface Choose3 {
  from: string[]
  count?: number
}

export interface ToolProficiency {
  any?: number
  "musical instrument"?: boolean
  "poisoner's kit"?: boolean
  "tinker's tools"?: boolean
  choose?: Choose4
  anyArtisansTool?: number
}

export interface Choose4 {
  from: string[]
}

export interface Copy {
  name: string
  source: string
  _mod: Mod3
  _preserve?: Preserve
}

export interface Mod3 {
  entries: any
}

export interface Preserve {
  reprintedAs: boolean
}

export interface Feat {
  any: number
}

export interface WeaponProficiency {
  "longsword|phb"?: boolean
  "spear|phb"?: boolean
  "javelin|phb"?: boolean
  choose?: Choose5
  firearms?: boolean
  "shortsword|phb"?: boolean
  "shortbow|phb"?: boolean
  "longbow|phb"?: boolean
  "battleaxe|phb"?: boolean
  "handaxe|phb"?: boolean
  "light hammer|phb"?: boolean
  "warhammer|phb"?: boolean
}

export interface Choose5 {
  fromFilter: string
  count: number
}

export interface AdditionalSource {
  source: string
  page: number
}

export interface ArmorProficiency {
  light: boolean
}

export interface Subrace {
  name?: string
  source: string
  raceName: string
  raceSource: string
  page: number
  ability?: Ability2[]
  entries?: any[]
  hasFluff?: boolean
  hasFluffImages?: boolean
  skillProficiencies?: SkillProficiency2[]
  speed: any
  traitTags?: string[]
  toolProficiencies?: ToolProficiency2[]
  srd?: boolean
  _versions?: Version2[]
  darkvision?: number
  resist?: string[]
  overwrite?: Overwrite2
  otherSources?: OtherSource2[]
  reprintedAs?: string[]
  languageProficiencies?: LanguageProficiency2[]
  additionalSpells?: AdditionalSpell2[]
  basicRules?: boolean
  heightAndWeight?: HeightAndWeight2
  armorProficiencies?: ArmorProficiency2[]
  alias?: string[]
  weaponProficiencies?: WeaponProficiency2[]
  skillToolLanguageProficiencies?: SkillToolLanguageProficiency[]
  age?: Age2
  soundClip?: SoundClip2
  feats?: Feat2[]
}

export interface Ability2 {
  int?: number
  wis?: number
  cha?: number
  str?: number
  choose?: Choose6
  con?: number
  dex?: number
}

export interface Choose6 {
  from: string[]
  count: number
  amount?: number
}

export interface SkillProficiency2 {
  survival?: boolean
  acrobatics?: boolean
  intimidation?: boolean
  athletics?: boolean
  deception?: boolean
  persuasion?: boolean
  "sleight of hand"?: boolean
  stealth?: boolean
  history?: boolean
  nature?: boolean
  any?: number
  "animal handling"?: boolean
  perception?: boolean
}

export interface ToolProficiency2 {
  "navigator's tools"?: boolean
  anyArtisansTool?: number
  "thieves' tools"?: boolean
  "tinker's tools"?: boolean
  any?: number
}

export interface Version2 {
  _abstract?: Abstract2
  _implementations?: Implementation2[]
  name?: string
  source?: string
  _mod?: Mod5
  skillProficiencies?: SkillProficiency3[]
  speed: any
  overwrite?: Overwrite
  additionalSpells: any
  weaponProficiencies: any
}

export interface Abstract2 {
  name: string
  source: string
  _mod: Mod4
}

export interface Mod4 {
  entries: Entry2[]
}

export interface Entry2 {
  mode: string
  names?: string
  replace?: string
  items?: Items3
}

export interface Items3 {
  type: string
  name: string
  entries: string[]
}

export interface Implementation2 {
  _variables: Variables2
  resist?: string[]
}

export interface Variables2 {
  color: string
  damageType: string
  area: string
  savingThrow: string
}

export interface Mod5 {
  entries: Entries2
}

export interface Entries2 {
  mode: string
  replace: string
  items: Items4
}

export interface Items4 {
  name: string
  type: string
  entries: string[]
}

export interface SkillProficiency3 {
  any: number
}

export interface Overwrite {
  skillProficiencies: boolean
}

export interface Overwrite2 {
  ability?: boolean
  traitTags?: boolean
  languageProficiencies?: boolean
  skillProficiencies?: boolean
}

export interface OtherSource2 {
  source: string
  page: number
}

export interface LanguageProficiency2 {
  common: boolean
  other?: boolean
  anyStandard?: number
  goblin?: boolean
  gnomish?: boolean
  undercommon?: boolean
  elvish?: boolean
  aquan?: boolean
  dwarvish?: boolean
}

export interface AdditionalSpell2 {
  innate?: Innate2
  ability: any
  known?: Known2
  expanded?: Expanded
}

export interface Innate2 {
  "3"?: N3
  "5": any
  "1": any
}

export interface N3 {
  daily: Daily2
}

export interface Daily2 {
  "1": string[]
}

export interface Known2 {
  "1": any
}

export interface Expanded {
  s1: string[]
  s2: string[]
  s3: string[]
  s4: string[]
  s5: string[]
}

export interface HeightAndWeight2 {
  baseHeight: number
  heightMod: string
  baseWeight: number
  weightMod: string
}

export interface ArmorProficiency2 {
  light: boolean
  medium: boolean
}

export interface WeaponProficiency2 {
  "longsword|phb"?: boolean
  "shortsword|phb"?: boolean
  "shortbow|phb"?: boolean
  "longbow|phb"?: boolean
  "greatsword|phb"?: boolean
  "spear|phb"?: boolean
  "trident|phb"?: boolean
  "light crossbow|phb"?: boolean
  "net|phb"?: boolean
  "rapier|phb"?: boolean
  "hand crossbow|phb"?: boolean
}

export interface SkillToolLanguageProficiency {
  choose: Choose7[]
}

export interface Choose7 {
  from: string[]
  count?: number
}

export interface Age2 {
  mature: number
  max: number
}

export interface SoundClip2 {
  type: string
  path: string
}

export interface Feat2 {
  any: number
}