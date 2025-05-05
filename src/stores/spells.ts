import {defineStore} from 'pinia'
import {messageSpell, S} from "@/utils/refs";

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
      const response = await fetch(`${import.meta.env.VITE_BASEURL}/data/spells/sources.json`);
      const data = await response.json();
      let test: SpellClasses[] = [];
      Object.keys(data).forEach(k =>
        Object.keys(data[k]).forEach((j) => {
          const classes = [];
          if(data[k][j].class) {
            classes.push(...data[k][j].class.map((c:any) => c.name.toLowerCase()));
          }
          if(data[k][j].classVariant) {
            classes.push(...data[k][j].classVariant.map((c:any) => c.name.toLowerCase()));
          }
          test.push({
            name: j,
            classes: classes
          })
        })
      );
      this.sources = test;
    },
    async initSpells() {
      if(this.spells.length > 0) {
        return;
      }
      const localSpells = [];
      try {
        for (const u of urlSpells) {
          const response = await fetch(`${import.meta.env.VITE_BASEURL}${u}`);
          const data = await response.json();
          if (data.spell) {
            localSpells.push(...data.spell.map((s:any) => {
              return {
                ...s,
                info: S(messageSpell(s, false))
              }
            }));
          }
        }
        this.spells = localSpells;
      }
      catch (e) {
        console.error(e);
        this.error = true;
      }
    }
  },

  getters: {
    isLoad: (state) => state.spells.length > 0,
    spellsChoice() {
      return (className: string|null = null, level: number|null = null, schools: null|string[] = null): SpellInfo[] => {
        let names = []
        if(className != null) names = this.sources.filter((s:any) => s.classes.includes(className.toLowerCase())).map((s:any) => s.name);
        return this.spellsSort(this.spells
          .filter(s =>
            (className == null || names.includes(s.name)) &&
            (level == null || s.level == level) &&
            (schools == null || schools.includes(s.school))
          )
        );
      }
    },
    spellsChoiceFromList() {
      return (names: string[]): SpellInfo[] => {
        return this.spellsSort(this.spells
          .filter(s => names.includes(s.name))
        );
      }
    },
    spellsSort() {
      return (spells: SpellInfo[]): SpellInfo[] => {
        return spells
          .sort((a, b) => a.name.localeCompare(b.name))
          .sort((a, b) => a.time[0].unit.localeCompare(b.time[0].unit))
        ;
      }
    },
    findByName() {
      return (name: string): SpellInfo|undefined => {
        return this.spells.find(f => f.name.toLowerCase() == name.toLowerCase());
      }
    }
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
  info?: string
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
  sources: SpellClasses[];
  spells: SpellInfo[];
  error: boolean
};

export interface SpellClasses {
  name: string,
  classes: string[],
}