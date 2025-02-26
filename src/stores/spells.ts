import {defineStore} from 'pinia'

const urlSpells = [
  "/data/spells/spells-aag.json",
  "/data/spells/spells-ai.json",
  "/data/spells/spells-bmt.json",
  "/data/spells/spells-ftd.json",
  "/data/spells/spells-ggr.json",
  "/data/spells/spells-idrotf.json",
  "/data/spells/spells-phb.json",
  "/data/spells/spells-sato.json",
  "/data/spells/spells-scc.json",
  "/data/spells/spells-tce.json",
  "/data/spells/spells-xge.json"
]

export const useSpellsStore = defineStore("SpellsStore", {
  state: (): RootState => ({
    sources: [],
    spells: [],
    error: false
  }),

  actions: {
    async initSources() {
      this.sources = [];
      const response = await fetch(`${import.meta.env.VITE_BASEURL}/data/generated/gendata-spell-source-lookup.json`);
      const data = await response.json();
      this.sources = data;
    },
    async initSpells() {
      if(this.spells.length > 0) {
        // console.log("Spells already loaded !")
        return;
      }
      const localSpells = [];
      try {
        for (const u of urlSpells) {
          const response = await fetch(`${import.meta.env.VITE_BASEURL}${u}`);
          const data = await response.json();
          if (data.spell) {
            localSpells.push(...data.spell);
          }
        }
        this.spells = localSpells;
      }
      catch (e) {
        console.error(e);
        this.error = true;
      }
      finally {
        // console.log("Spells loaded !!");
      }
    }
  },

  getters: {
    isLoad: (state) => state.spells.length > 0,
  }
});

export interface SpellInfo {
  name: string
  source: string
  page: number
  level: number
  school: string
  time: Time[]
  range: Range
  components: Components
  duration: Duration[]
  entries: any[]
  entriesHigherLevel?: EntriesHigherLevel[]
  miscTags?: string[]
  hasFluffImages?: boolean
  conditionInflict?: string[]
  savingThrow?: string[]
  affectsCreatureType?: string[]
  areaTags?: string[]
  damageInflict?: string[]
  spellAttack?: string[]
  srd: any
  basicRules?: boolean
  scalingLevelDice: any
  otherSources?: OtherSource[]
  meta?: Meta
  damageResist?: string[]
  abilityCheck?: string[]
  conditionImmune?: string[]
  damageVulnerable?: string[]
  damageImmune?: string[]
  hasFluff?: boolean
  additionalSources?: AdditionalSource[]
}

export interface Time {
  number: number
  unit: string
  condition?: string
}

export interface Range {
  type: string
  distance?: Distance
}

export interface Distance {
  type: string
  amount?: number
}

export interface Components {
  s?: boolean
  v?: boolean
  m: any
  r?: boolean
}

export interface Duration {
  type: string
  duration?: Duration2
  concentration?: boolean
  ends?: string[]
}

export interface Duration2 {
  type: string
  amount: number
  upTo?: boolean
}

export interface EntriesHigherLevel {
  type: string
  name: string
  entries: string[]
}

export interface OtherSource {
  source: string
  page?: number
}

export interface Meta {
  ritual: boolean
}

export interface AdditionalSource {
  source: string
  page: number
}

export type RootState = {
  sources: [];
  spells: SpellInfo[];
  error: boolean
};