import {defineStore} from 'pinia'
import {cfl} from "@/utils/refs";

export const useItemsStore = defineStore("ItemsStore", {
  state: (): RootState => ({
    itemBase: [],
    itemProperty: [],
    itemType: [],
    error: false
  }),
  actions: {
    async initItems() {
      if (this.itemBase.length > 0) {
        // console.log("Items already loaded !")
        return;
      }
      try {
        const response = await fetch(`${import.meta.env.VITE_BASEURL}/data/items-base.json`);
        const data = await response.json();
        this.itemBase = data.baseitem;
        this.itemProperty = data.itemProperty;
        this.itemType = data.itemType;

        const response2 = await fetch(`${import.meta.env.VITE_BASEURL}/data/items.json`);
        const data2 = await response2.json();
        this.itemBase.push(...data2.item.filter((i:any) => i.rarity == 'none'));
        // this.itemBase.push(...data2.itemGroup.filter((i:any) => i.rarity == 'none'));
      }
      catch (e) {
        console.error(e);
        this.error = true;
      }
    }
  },
  getters: {
    isLoad: (state) => state.itemBase.length > 0 && state.itemProperty.length > 0 && state.itemType.length > 0,
    findByKey() {
      return (key: string): ItemBase|undefined => {
        const split = key.split('|');
        if(split.length != 2) {
          return;
        }
        return this.findByNameSource(split[0], split[1]);
      }
    },
    findByNameSource() {
      return (name: string, source: string = 'phb'): ItemBase|undefined => {
        return this.itemBase.find(f => f.name.toLowerCase() == name.toLowerCase() && f.source.toLowerCase() == source.toLowerCase());
      }
    },
    findItemType() {
      return (key: string): string|undefined => {
        if(!key) return undefined;
        return this.itemType.find(f => f.abbreviation.toLowerCase() == key.toLowerCase())?.name;
      }
    },
    findItemProperties() {
      return (item: ItemBase): string|undefined => {
        const p = item.property;
        let ret = [];
        if(item.age) {
          ret.push(cfl(item.age));
        }
        if(item.firearm) {
          ret.push('Firearm');
        }
        if(p) {
          ret.push(
            ...this.itemProperty.filter(ip => p.includes(ip.abbreviation.split('|')[0])).map(ip => {
              try {
                const a = /{{(.*?)}}/g;
                let g;
                let t = ip.template
                while (g = a.exec(ip.template)) {
                  if (g[1] == 'prop_name_lower') {
                    let name  = "";
                    if(ip.entries) name = ip.entries[0].name;
                    else if(ip.name) name = cfl(ip.name);
                      t = t.replace(g[0], name);
                  }
                  else if (g[1].indexOf('item.') == 0) {
                    const k = g[1].substring(5);
                    const r = item[k];
                    t = t.replace(g[0], r);
                  }
                }
                return t;
              }
              catch (e) {
                console.error(e);
                return "Error";
              }
            })
          );
        }
        if(ret.length == 0) return undefined;
        return ret.join(', ');
      }
    },
    search() {
      return (s: any, includeSpecial: boolean = false, maxValue: number|null = null, minValue: number|null = 0) => {
        return this.itemBase
          .filter(f => {
            let check = true;

            if(!includeSpecial && f.property?.includes("S")) return false;
            if(minValue != null) {
              if(!f.value) return false;
              else if(f.value < minValue) return false;
            }
            if(maxValue != null) {
              if(!f.value) return false;
              else if(f.value > maxValue) return false;
            }

            Object.keys(s).forEach(k => {
              if(!f[k]) check = false;
              else if(f[k] != s[k]) check = false;
            })
            return check;
          })
          .sort((a, b) => a.name > b.name ? 1 : -1)
          .map(f => {
            return `${f.name}|${f.source}`;
          })
        ;
      }
    }
  }
});

export interface EquipmentType {
  key: string;
  label: string;
  search: any;
}

export const equipmentType: EquipmentType[] = [
  {
    key: "weaponSimple",
    label: "simple weapon",
    search: {
      "weapon": true,
      "weaponCategory": "simple"
    }
  },
  {
    key: "weaponMartial",
    label: "martial weapon",
    search: {
      "weapon": true,
      "weaponCategory": "martial"
    }
  },
  {
    key: "weaponSimpleMelee",
    label: "simple melee weapon",
    search: {
      "weapon": true,
      "weaponCategory": "simple",
      "type": "M"
    }
  },
  {
    key: "weaponMartialMelee",
    label: "martial melee weapon",
    search: {
      "weapon": true,
      "weaponCategory": "martial",
      "type": "M"
    }
  },
  {
    key: "instrumentMusical",
    label: "musical instrument",
    search: {
      "type": "INS"
    }
  },
  {
    key: "setGaming",
    label: "gaming set",
    search: {
      "type": "GS"
    }
  },
  {
    key: "toolArtisan",
    label: "artisan's tools",
    search: {
      "type": "AT"
    }
  },
  {
    key: "focusSpellcastingHoly",
    label: "holy symbol",
    search: {
      "type": "SCF",
      "scfType": "holy"
    }
  },
  {
    key: "focusSpellcastingDruidic",
    label: "druidic focus",
    search: {
      "type": "SCF",
      "scfType": "druid"
    }
  },
  {
    key: "focusSpellcastingArcane",
    label: "arcane focus",
    search: {
      "type": "SCF",
      "scfType": "arcane"
    }
  },
  {
    key: "all",
    label: "All",
    search: {}
  }
]

export const equipmentProf: any[] = [
  // Armors
  {
    key: "light",
    parent: "armor",
    search: {
      "armor": true,
      "typa": "LA"
    }
  },
  {
    key: "medium",
    parent: "armor",
    search: {
      "armor": true,
      "typa": "MA"
    }
  },
  {
    key: "heavy",
    parent: "armor",
    search: {
      "armor": true,
      "typa": "HA"
    }
  },
  {
    key: "shield",
    parent: "armor",
    search: {
      "typa": "S"
    }
  },
  // Weapons
  {
    key: "simple",
    parent: "weapon",
    search: {
      "weapon": true,
      "weaponCategory": "simple"
    }
  },
  {
    key: "martial",
    parent: "weapon",
    search: {
      "weapon": true,
      "weaponCategory": "martial"
    }
  },
  // // Simple weapons
  // {
  //   key: "club",
  //   parent: "simple",
  //   search: {
  //     "weapon": true,
  //     "weaponCategory": "simple",
  //     "club": true
  //   }
  // },
  // {
  //   key: "dagger",
  //   parent: "simple",
  //   search: {
  //     "weapon": true,
  //     "weaponCategory": "simple",
  //     "dagger": true
  //   }
  // },
  // {
  //   key: "handaxe",
  //   parent: "simple",
  //   search: {
  //     "weapon": true,
  //     "weaponCategory": "simple",
  //     "axe": true
  //   }
  // },

]

export const findEquipmentType = (key: string) => {
  return equipmentType.find(et => key == et.key)
}

export type RootState = {
  itemBase: ItemBase[]
  itemProperty: ItemProperty[]
  itemType: ItemType[],
  error: boolean
}

export interface ItemBase {
  [key: string]: any | undefined,
  name: string
  source: string
  page: number
  type: string
  rarity: string
  weight?: number
  weaponCategory?: string
  age?: string
  property?: string[]
  range?: string
  reload?: number
  dmg1?: string
  dmgType?: string
  firearm?: boolean
  weapon?: boolean
  ammoType?: string
  srd?: boolean
  basicRules?: boolean
  value?: number
  arrow?: boolean
  packContents?: PackContent[]
  dmg2?: string
  axe?: boolean
  entries?: any[]
  needleBlowgun?: boolean
  ac?: number
  armor?: boolean
  strength?: string
  stealth?: boolean
  club?: boolean
  bolt?: boolean
  scfType?: string
  dagger?: boolean
  sword?: boolean
  hasFluff?: boolean
  cellEnergy?: boolean
  miscTags?: string[]
  polearm?: boolean
  crossbow?: boolean
  hasFluffImages?: boolean
  spear?: boolean
  lance?: boolean
  hammer?: boolean
  bow?: boolean
  mace?: boolean
  bulletFirearm?: boolean
  net?: boolean
  rapier?: boolean
  bulletSling?: boolean
  staff?: boolean
}

export interface PackContent {
  item: string
  quantity: number
}

export interface ItemProperty {
  abbreviation: string
  source: string
  page: number
  template: string
  entries?: Entry[]
  entriesTemplate?: EntriesTemplate[]
  name?: string
}

export interface Entry {
  type: string
  name: string
  page?: number
  entries: string[]
}

export interface EntriesTemplate {
  type: string
  name: string
  page: number
  entries: string[]
}

export interface ItemType {
  name: string
  abbreviation: string
  source: string
  page: number
  _copy?: Copy
  entries?: any[]
  entriesTemplate?: string[]
}

export interface Copy {
  abbreviation: string
  source: string
}
