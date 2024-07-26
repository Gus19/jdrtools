import {computed, ref} from 'vue'
import {defineStore} from 'pinia'

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
  spells: SpellInfo[]
};

const urlSpells = [
  "https://5e.tools/data/spells/spells-aag.json",
  "https://5e.tools/data/spells/spells-ai.json",
  "https://5e.tools/data/spells/spells-bmt.json",
  "https://5e.tools/data/spells/spells-ftd.json",
  "https://5e.tools/data/spells/spells-ggr.json",
  "https://5e.tools/data/spells/spells-idrotf.json",
  "https://5e.tools/data/spells/spells-phb.json",
  "https://5e.tools/data/spells/spells-sato.json",
  "https://5e.tools/data/spells/spells-scc.json",
  "https://5e.tools/data/spells/spells-tce.json",
  "https://5e.tools/data/spells/spells-xge.json"
]

export const useSpellsStore = defineStore({
  id: "mainStore",
  state: () =>
    ({
      sources: [],
      spells: []
    } as RootState),

  actions: {
    async initSources() {
      this.sources = [];
      const response = await fetch('https://5e.tools/data/generated/gendata-spell-source-lookup.json');
      const data = await response.json();
      this.sources = data;
    },
    async initSpells() {
      if(this.spells.length > 0) {
        return;
      }
      const localSpells = [];
      try {
        let total = 0;
        for (const u of urlSpells) {
          const response = await fetch(u);
          const data = await response.json();
          if (data.spell) {
            total += data.spell.length;
            localSpells.push(...data.spell);
          }
        }
        this.spells = localSpells;
      }
      catch (e) {
        this.spells = initSpells;
      }
    }
  },
});

const initSpells = JSON.parse(`[
  {
    "name": "Air Bubble",
    "source": "AAG",
    "page": 22,
    "level": 2,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 24
        }
      }
    ],
    "entries": [
      "You create a spectral globe around the head of a willing creature you can see within range. The globe is filled with fresh air that lasts until the spell ends. If the creature has more than one head, the globe of air appears around only one of its heads (which is all the creature needs to avoid suffocation, assuming that all its heads share the same respiratory system)."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, you can create two additional globes of fresh air for each slot level above 2nd."
        ]
      }
    ],
    "miscTags": [
      "SGT"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Create Spelljamming Helm",
    "source": "AAG",
    "page": 22,
    "level": 5,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a crystal rod worth at least 5,000 gp, which the spell consumes",
        "cost": 500000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "Holding the rod used in the casting of the spell, you touch a Large or smaller chair that is unoccupied. The rod disappears, and the chair is transformed into a {@item spelljamming helm|AAG}."
    ]
  },
  {
    "name": "Distort Value",
    "source": "AI",
    "page": 75,
    "level": 1,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 8
        }
      }
    ],
    "entries": [
      "Do you need to squeeze a few more gold pieces out of a merchant as you try to sell that weird octopus statue you liberated from the chaos temple? Do you need to downplay the worth of some magical assets when the tax collector stops by? Distort value has you covered.",
      "You cast this spell on an object no more than 1 foot on a side, doubling the object's perceived value by adding illusory flourishes or polish to it, or reducing its perceived value by half with the help of illusory scratches, dents, and other unsightly features. Anyone examining the object can ascertain its true value with a successful Intelligence ({@skill Investigation}) check against your spell save DC."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, the maximum size of the object increases by 1 foot for each slot level above 1st."
        ]
      }
    ]
  },
  {
    "name": "Fast Friends",
    "source": "AI",
    "page": 75,
    "level": 3,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "When you need to make sure something gets done, you can't rely on vague promises, sworn oaths, or binding contracts of employment. When you cast this spell, choose one humanoid within range that can see and hear you, and that can understand you. The creature must succeed on a Wisdom saving throw or become {@condition charmed} by you for the duration. While the creature is {@condition charmed} in this way, it undertakes to perform any services or activities you ask of it in a friendly manner, to the best of its ability.",
      "You can set the creature new tasks when a previous task is completed, or if you decide to end its current task. If the service or activity might cause harm to the creature, or if it conflicts with the creature's normal activities and desires, the creature can make another Wisdom saving throw to try to end the effect. This save is made with advantage if you or your companions are fighting the creature. If the activity would result in certain death for the creature, the spell ends.",
      "When the spell ends, the creature knows it was {@condition charmed} by you."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd."
        ]
      }
    ],
    "conditionInflict": [
      "charmed"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "affectsCreatureType": [
      "humanoid"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "MT",
      "ST"
    ]
  },
  {
    "name": "Gift of Gab",
    "source": "AI",
    "page": 76,
    "level": 2,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "reaction",
        "condition": "which you take when you speak to another creature"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "r": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      {
        "type": "quote",
        "entries": [
          "When I met Jim Darkmagic, I wondered how he got anything done in that outfit. I have since learned that most of his talents involve standing and talking. His outfit is perfect for that."
        ],
        "by": "Môrgæn"
      },
      "Jim Darkmagic is said to have invented this spell, originally calling it {@i I said what?!} Have you ever been talking to the local monarch and accidentally mentioned how their son looks like your favorite hog from when you were growing up on the family farm? We've all been there! But rather than being beheaded for an honest slip of the tongue, you can pretend it never happened—by ensuring that no one knows it happened.",
      "When you cast this spell, you skillfully reshape the memories of listeners in your immediate area, so that each creature of your choice within 5 feet of you forgets everything you said within the last 6 seconds. Those creatures then remember that you actually said the words you speak as the verbal component of the spell."
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Incite Greed",
    "source": "AI",
    "page": 76,
    "level": 3,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a gem worth at least 50 gp",
        "cost": 5000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "When you cast this spell, you present the gem used as the material component and choose any number of creatures within range that can see you. Each target must succeed on a Wisdom saving throw or be {@condition charmed} by you until the spell ends, or until you or your companions do anything harmful to it. While {@condition charmed} in this way, a creature can do nothing but use its movement to approach you in a safe manner. While an affected creature is within 5 feet of you, it cannot move, but simply stares greedily at the gem you present.",
      "At the end of each of its turns, an affected target can make a Wisdom saving throw. If it succeeds, this effect ends for that target."
    ],
    "conditionInflict": [
      "charmed"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Jim's Glowing Coin",
    "source": "AI",
    "page": 76,
    "level": 2,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "s": true,
      "m": "a coin",
      "r": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        }
      }
    ],
    "entries": [
      "Of the many tactics employed by master magician and renowned adventurer Jim Darkmagic, the old glowing coin trick is a time-honored classic. When you cast the spell, you hurl the coin that is the spell's material component to any spot within range. The coin lights up as if under the effect of a {@spell light} spell. Each creature of your choice that you can see within 30 feet of the coin must succeed on a Wisdom saving throw or be distracted for the duration. While distracted, a creature has disadvantage on Wisdom ({@skill Perception}) checks and initiative rolls."
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Jim's Magic Missile",
    "source": "AI",
    "page": 76,
    "level": 1,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true,
      "r": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      {
        "type": "quote",
        "entries": [
          "Jim's magic missile is an ancient and powerful spell, as well as being the name of my band in Wizard Academy."
        ],
        "by": "Jim Darkmagic"
      },
      "Any apprentice wizard can cast a boring old magic missile. Sure, it always strikes its target. Yawn. Do away with the drudgery of your grandfather's magic with this improved version of the spell, as used by Jim Darkmagic!",
      "You create three twisting, whistling, hypoallergenic, gluten-free darts of magical force. Each dart targets a creature of your choice that you can see within range. Make a ranged spell attack for each missile. On a hit, a missile deals {@damage 2d4} force damage to its target.",
      "If the attack roll scores a critical hit, the target of that missile takes {@damage 5d4} force damage instead of you rolling damage twice for a critical hit. If the attack roll for any missile is a 1, all missiles miss their targets and blow up in your face, dealing 1 force damage per missile to you."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart, and the royalty component increases by 1 gp, for each slot level above 1st."
        ]
      }
    ],
    "damageInflict": [
      "force"
    ],
    "spellAttack": [
      "R"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "MT",
      "ST"
    ]
  },
  {
    "name": "Motivational Speech",
    "source": "AI",
    "page": 77,
    "level": 3,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "entries": [
      {
        "type": "quote",
        "entries": [
          "I once heard a motivational speech by Jim and it was the worst ninety seconds of my life. What does Omin see in him, anyway?"
        ],
        "by": "Walnut Dankgrass"
      },
      "You address allies, staff, or innocent bystanders to exhort and inspire them to greatness, whether they have anything to get excited about or not. Choose up to five creatures within range that can hear you. For the duration, each affected creature gains 5 temporary hit points and has advantage on Wisdom saving throws. If an affected creature is hit by an attack, it has advantage on the next attack roll it makes. Once an affected creature loses the temporary hit points granted by this spell, the spell ends for that creature."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, the temporary hit points increase by 5 for each slot level above 3rd."
        ]
      }
    ],
    "miscTags": [
      "ADV",
      "SGT",
      "THP"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Antagonize",
    "source": "BMT",
    "page": 50,
    "level": 3,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a playing card depicting a rogue"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You whisper magical words that antagonize one creature of your choice within range. The target must make a Wisdom saving throw. On a failed save, the target takes {@damage 4d4} psychic damage and must immediately use its reaction to make a melee attack against another creature of your choice that you can see. If the target can't make this attack (for example, because there is no one within its reach or because its reaction is unavailable), the target instead has disadvantage on the next attack roll it makes before the start of your next turn. On a successful save, the target takes half as much damage only."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, the damage increases by {@dice 1d4} for each slot level above 3rd."
        ]
      }
    ],
    "damageInflict": [
      "psychic"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "SGT"
    ]
  },
  {
    "name": "Spirit of Death",
    "source": "BMT",
    "page": 50,
    "level": 4,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a gilded playing card worth at least 400 gp and depicting an avatar of death",
        "cost": 40000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You call forth a spirit that embodies death. The spirit manifests in an unoccupied space you can see within range and uses the {@creature reaper spirit|BMT} stat block. The spirit disappears when it is reduced to 0 hit points or when the spell ends.",
      "The spirit is an ally to you and your companions. In combat, the spirit shares your initiative count and takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue the spirit any commands, it takes the {@action Dodge} action and uses its movement to avoid danger."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the reaper spirit stat block."
        ]
      }
    ],
    "miscTags": [
      "SGT",
      "SMN"
    ]
  },
  {
    "name": "Spray of Cards",
    "source": "BMT",
    "page": 50,
    "level": 2,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "cone",
      "distance": {
        "type": "feet",
        "amount": 15
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a deck of cards"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You spray a 15-foot cone of spectral cards. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes {@damage 2d10} force damage and has the {@condition blinded} condition until the end of its next turn. On a successful save, a creature takes half as much damage only."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by {@dice 1d10} for each slot level above 2nd."
        ]
      }
    ],
    "damageInflict": [
      "force"
    ],
    "conditionInflict": [
      "blinded"
    ],
    "savingThrow": [
      "dexterity"
    ]
  },
  {
    "name": "Ashardalon's Stride",
    "source": "FTD",
    "page": 19,
    "level": 3,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "The billowing flames of a dragon blast from your feet, granting you explosive speed. For the duration, your speed increases by 20 feet and moving doesn't provoke opportunity attacks.",
      "When you move within 5 feet of a creature or an object that isn't being worn or carried, it takes {@damage 1d6} fire damage from your trail of heat. A creature or object can take this damage only once during a turn."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, increase your speed by 5 feet for each spell slot level above 3rd. The spell deals an additional {@scaledamage 1d6|3-9|1d6} fire damage for each slot level above 3rd."
        ]
      }
    ],
    "damageInflict": [
      "fire"
    ],
    "miscTags": [
      "OBJ"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Draconic Transformation",
    "source": "FTD",
    "page": 19,
    "level": 7,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a statuette of a dragon, worth at least 500 gp",
        "cost": 50000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "With a roar, you draw on the magic of dragons to transform yourself, taking on draconic features. You gain the following benefits until the spell ends:",
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Blindsight",
            "entries": [
              "You have {@sense blindsight} with a range of 30 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're {@condition blinded} or in darkness. Moreover, you can see an {@condition invisible} creature, unless the creature successfully hides from you."
            ]
          },
          {
            "type": "item",
            "name": "Breath Weapon",
            "entries": [
              "When you cast this spell, and as a bonus action on subsequent turns for the duration, you can exhale shimmering energy in a 60-foot cone. Each creature in that area must make a Dexterity saving throw, taking {@damage 6d8} force damage on a failed save, or half as much damage on a successful one."
            ]
          },
          {
            "type": "item",
            "name": "Wings",
            "entries": [
              "Incorporeal wings sprout from your back, giving you a flying speed of 60 feet."
            ]
          }
        ]
      }
    ],
    "damageInflict": [
      "force"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "SGT",
      "UBA"
    ]
  },
  {
    "name": "Fizban's Platinum Shield",
    "source": "FTD",
    "page": 20,
    "level": 6,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a platinum-plated dragon scale, worth at least 500 gp",
        "cost": 50000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You create a field of silvery light that surrounds a creature of your choice within range (you can choose yourself). The field sheds dim light out to 5 feet. While surrounded by the field, a creature gains the following benefits:",
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Cover",
            "entries": [
              "The creature has half cover."
            ]
          },
          {
            "type": "item",
            "name": "Damage Resistance",
            "entries": [
              "The creature has resistance to acid, cold, fire, lightning, and poison damage."
            ]
          },
          {
            "type": "item",
            "name": "Evasion",
            "entries": [
              "If the creature is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the creature instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
            ]
          }
        ]
      },
      "As a bonus action on subsequent turns, you can move the field to another creature within 60 feet of the field."
    ],
    "miscTags": [
      "UBA"
    ]
  },
  {
    "name": "Nathair's Mischief",
    "source": "FTD",
    "page": 20,
    "level": 2,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "s": true,
      "m": "a piece of crust from an apple pie"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You fill a 20-foot cube you can see within range with fey and draconic magic. Roll on the Mischievous Surge table to determine the magical effect produced, and roll again at the start of each of your turns until the spell ends. You can move the cube up to 10 feet before you roll.",
      {
        "type": "table",
        "caption": "Mischievous Surge",
        "colLabels": [
          "d4",
          "Effect"
        ],
        "colStyles": [
          "col-2 text-center",
          "col-10"
        ],
        "rows": [
          [
            "1",
            "The smell of apple pie fills the air, and each creature in the cube must succeed on a Wisdom saving throw or become {@condition charmed} by you until the start of your next turn."
          ],
          [
            "2",
            "Bouquets of flowers appear all around, and each creature in the cube must succeed on a Dexterity saving throw or be {@condition blinded} until the start of your next turn as the flowers spray water in their faces."
          ],
          [
            "3",
            "Each creature in the cube must succeed on a Wisdom saving throw or begin giggling until the start of your next turn. A giggling creature is {@condition incapacitated} and uses all its movement to move in a random direction."
          ],
          [
            "4",
            "Drops of molasses hover in the cube, making it {@quickref difficult terrain||3} until the start of your next turn."
          ]
        ]
      }
    ],
    "savingThrow": [
      "dexterity",
      "wisdom"
    ],
    "miscTags": [
      "RO",
      "SGT"
    ]
  },
  {
    "name": "Raulothim's Psychic Lance",
    "source": "FTD",
    "page": 21,
    "level": 4,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You unleash a shimmering lance of psychic power from your forehead at a creature that you can see within range. Alternatively, you can utter a creature's name. If the named target is within range, it becomes the spell's target even if you can't see it. If the named target isn't within range, the lance dissipates without effect.",
      "The target must make an Intelligence saving throw. On a failed save, the target takes {@damage 7d6} psychic damage and is {@condition incapacitated} until the start of your next turn. On a successful save, the creature takes half as much damage and isn't {@condition incapacitated}."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 5th level or higher, the damage increases by {@scaledamage 7d6|4-9|1d6} for each slot level above 4th."
        ]
      }
    ],
    "damageInflict": [
      "psychic"
    ],
    "conditionInflict": [
      "incapacitated"
    ],
    "savingThrow": [
      "intelligence"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Rime's Binding Ice",
    "source": "FTD",
    "page": 21,
    "level": 2,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "cone",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "s": true,
      "m": "a vial of meltwater"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "A burst of cold energy emanates from you in a 30-foot cone. Each creature in that area must make a Constitution saving throw. On a failed save, a creature takes {@damage 3d8} cold damage and is hindered by ice formations for 1 minute, or until it or another creature within reach of it uses an action to break away the ice. A creature hindered by ice has its speed reduced to 0. On a successful save, a creature takes half as much damage and isn't hindered by ice."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, increase the cold damage by {@scaledamage 3d8|2-9|1d8} for each slot level above 2nd."
        ]
      }
    ],
    "damageInflict": [
      "cold"
    ],
    "savingThrow": [
      "constitution"
    ],
    "areaTags": [
      "N"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Summon Draconic Spirit",
    "source": "FTD",
    "page": 21,
    "level": 5,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "an object with the image of a dragon engraved on it, worth at least 500 gp",
        "cost": 50000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You call forth a {@creature draconic spirit|FTD}. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Draconic Spirit stat block. When you cast this spell, choose a family of dragon: chromatic, gem, or metallic. The creature resembles a dragon of the chosen family, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.",
      "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the {@action Dodge} action and uses its move to avoid danger."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 6th level or higher, use the higher level wherever the spell's level appears in the stat block."
        ]
      }
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "SGT",
      "SMN"
    ]
  },
  {
    "name": "Encode Thoughts",
    "source": "GGR",
    "page": 47,
    "level": 0,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 8
        }
      }
    ],
    "entries": [
      "Putting a finger to your head, you pull a memory, an idea, or a message from your mind and transform it into a tangible string of glowing energy called a thought strand, which persists for the duration or until you cast this spell again. The thought strand appears in an unoccupied space within 5 feet of you as a Tiny, weightless, semisolid object that can be held and carried like a ribbon. It is otherwise stationary.",
      "If you cast this spell while {@status concentration||concentrating} on a spell or an ability that allows you to read or manipulate the thoughts of others (such as {@spell detect thoughts} or {@spell modify memory}), you can transform the thoughts or memories you read, rather than your own, into a thought strand.",
      "Casting this spell while holding a thought strand allows you to instantly receive whatever memory, idea, or message the thought strand contains. (Casting {@spell detect thoughts} on the strand has the same effect.)"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Create Magen",
    "source": "IDRotF",
    "page": 318,
    "level": 7,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "hour"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a vial of quicksilver worth 500 gp and a life-sized human doll, both of which the spell consumes, and an intricate crystal rod worth at least 1,500 gp that is not consumed",
        "cost": 50000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "While casting the spell, you place a vial of quicksilver in the chest of a life-sized human doll stuffed with ash or dust. You then stitch up the doll and drip your blood on it. At the end of the casting, you tap the doll with a crystal rod, transforming it into a {@filter magen|bestiary|search=magen|source=IDRotF} clothed in whatever the doll was wearing. The type of magen is chosen by you during the casting of the spell. See {@adventure appendix C|IDRotF|21} for different kinds of magen and their statistics.",
      "When the magen appears, your hit point maximum decreases by an amount equal to the magen's challenge rating (minimum reduction of 1). Only a {@spell wish} spell can undo this reduction to your hit point maximum.",
      "Any magen you create with this spell obeys your commands without question."
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Frost Fingers",
    "source": "IDRotF",
    "page": 318,
    "level": 1,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "cone",
      "distance": {
        "type": "feet",
        "amount": 15
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "Freezing cold blasts from your fingertips in a 15-foot cone. Each creature in that area must make a Constitution saving throw, taking {@damage 2d8} cold damage on a failed save, or half as much damage on a successful one.",
      "The cold freezes nonmagical liquids in the area that aren't being worn or carried."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by {@dice 1d8} for each slot level above 1st."
        ]
      }
    ],
    "damageInflict": [
      "cold"
    ],
    "savingThrow": [
      "constitution"
    ],
    "areaTags": [
      "N"
    ]
  },
  {
    "name": "Acid Splash",
    "source": "PHB",
    "page": 211,
    "srd": true,
    "basicRules": true,
    "level": 0,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You hurl a bubble of acid. Choose one creature you can see within range, or choose two creatures you can see within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take {@damage 1d6} acid damage.",
      "This spell's damage increases by {@dice 1d6} when you reach 5th level ({@damage 2d6}), 11th level ({@damage 3d6}), and 17th level ({@damage 4d6})."
    ],
    "scalingLevelDice": {
      "label": "acid damage",
      "scaling": {
        "1": "1d6",
        "5": "2d6",
        "11": "3d6",
        "17": "4d6"
      }
    },
    "damageInflict": [
      "acid"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "SCL",
      "SGT"
    ],
    "areaTags": [
      "MT",
      "ST"
    ]
  },
  {
    "name": "Aid",
    "source": "PHB",
    "page": 211,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 50
      }
    ],
    "level": 2,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a tiny strip of white cloth"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 8
        }
      }
    ],
    "entries": [
      "Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, a target's hit points increase by an additional 5 for each slot level above 2nd."
        ]
      }
    ],
    "miscTags": [
      "HL"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Alarm",
    "source": "PHB",
    "page": 211,
    "srd": true,
    "level": 1,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a tiny bell and a piece of fine silver wire"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 8
        }
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible.",
      "A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping.",
      "An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet."
    ],
    "areaTags": [
      "C"
    ]
  },
  {
    "name": "Alter Self",
    "source": "PHB",
    "page": 211,
    "srd": true,
    "level": 2,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one.",
      {
        "type": "entries",
        "name": "Aquatic Adaptation",
        "entries": [
          "You adapt your body to an aquatic environment, sprouting gills and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed."
        ]
      },
      {
        "type": "entries",
        "name": "Change Appearance",
        "entries": [
          "You transform your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any. You can make yourself appear as a member of another race, though none of your statistics change. You also can't appear as a creature of a different size than you, and your basic shape stays the same; if you're bipedal, you can't use this spell to become quadrupedal, for instance. At any time for the duration of the spell, you can use your action to change your appearance in this way again."
        ]
      },
      {
        "type": "entries",
        "name": "Natural Weapons",
        "entries": [
          "You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal {@damage 1d6} bludgeoning, piercing, or slashing damage, as appropriate to the natural weapon you chose, and you are proficient with your unarmed strikes. Finally, the natural weapon is magic and you have a +1 bonus to the attack and damage rolls you make using it."
        ]
      }
    ],
    "damageInflict": [
      "bludgeoning",
      "piercing",
      "slashing"
    ]
  },
  {
    "name": "Animal Friendship",
    "source": "PHB",
    "page": 212,
    "srd": true,
    "level": 1,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a morsel of food"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 24
        }
      }
    ],
    "entries": [
      "This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be {@condition charmed} by you for the spell's duration. If you or one of your companions harms the target, the spell ends."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional beast for each slot level above 1st."
        ]
      }
    ],
    "conditionInflict": [
      "charmed"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "affectsCreatureType": [
      "beast"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Animal Messenger",
    "source": "PHB",
    "page": 212,
    "srd": true,
    "level": 2,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a morsel of food"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 24
        }
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "By means of this spell, you use an animal to deliver a message. Choose a Tiny beast you can see within range, such as a squirrel, a blue jay, or a bat. You specify a location, which you must have visited, and a recipient who matches a general description, such as \\"a man or woman dressed in the uniform of the town guard\\" or \\"a red-haired dwarf wearing a pointed hat.\\" You also speak a message of up to twenty-five words. The target beast travels for the duration of the spell toward the specified location, covering about 50 miles per 24 hours for a flying messenger, or 25 miles for other animals.",
      "When the messenger arrives, it delivers your message to the creature that you described, replicating the sound of your voice. The messenger speaks only to a creature matching the description you gave. If the messenger doesn't reach its destination before the spell ends, the message is lost, and the beast makes its way back to where you cast this spell."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "If you cast this spell using a spell slot of 3rd level or higher, the duration of the spell increases by 48 hours for each slot level above 2nd."
        ]
      }
    ],
    "affectsCreatureType": [
      "beast"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Animal Shapes",
    "source": "PHB",
    "page": 212,
    "srd": true,
    "level": 8,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 24
        },
        "concentration": true
      }
    ],
    "entries": [
      "Your magic turns others into beasts. Choose any number of willing creatures that you can see within range. You transform each target into the form of a {@filter Large or smaller beast with a challenge rating of 4 or lower|bestiary|challenge rating=[&0;&4]|type=beast|size=f;d;t;s;m;l|miscellaneous=!swarm}. On subsequent turns, you can use your action to transform affected creatures into new forms.",
      "The transformation lasts for the duration for each target, or until the target drops to 0 hit points or dies. You can choose a different form for each target. A target's game statistics are replaced by the statistics of the chosen beast, though the target retains its alignment and Intelligence, Wisdom, and Charisma scores. The target assumes the hit points of its new form, and when it reverts to its normal form, it returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked {@condition unconscious}. The creature is limited in the actions it can perform by the nature of its new form, and it can't speak or cast spells.",
      "The target's gear melds into the new form. The target can't activate, wield, or otherwise benefit from any of its equipment."
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Animate Dead",
    "source": "PHB",
    "page": 212,
    "srd": true,
    "level": 3,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 10
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a drop of blood, a piece of flesh, and a pinch of bone dust"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. The target becomes a {@creature skeleton} if you chose bones or a {@creature zombie} if you chose a corpse (the DM has the creature's game statistics).",
      "On each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creature is within 60 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.",
      "The creature is under your control for 24 hours, after which it stops obeying any command you've given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell, rather than animating a new one."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, you animate or reassert control over two additional undead creatures for each slot level above 3rd. Each of the creatures must come from a different corpse or pile of bones."
        ]
      }
    ],
    "affectsCreatureType": [
      "humanoid"
    ],
    "miscTags": [
      "PRM",
      "SMN",
      "UBA"
    ]
  },
  {
    "name": "Animate Objects",
    "source": "PHB",
    "page": 213,
    "srd": true,
    "level": 5,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Objects come to life at your command. Choose up to ten nonmagical objects within range that are not being worn or carried. Medium targets count as two objects, Large targets count as four objects, Huge targets count as eight objects. You can't animate any object larger than Huge. Each target animates and becomes a creature under your control until the spell ends or until reduced to 0 hit points.",
      "As a bonus action, you can mentally command any creature you made with this spell if the creature is within 500 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.",
      {
        "type": "table",
        "caption": "Animated Object Statistics",
        "colLabels": [
          "Size",
          "HP",
          "AC",
          "Attack",
          "Str",
          "Dex"
        ],
        "colStyles": [
          "col-2",
          "col-1 text-center",
          "col-1 text-center",
          "col-6",
          "col-1 text-center",
          "col-1 text-center"
        ],
        "rows": [
          [
            "{@creature animated object (tiny)|phb|Tiny}",
            "20",
            "18",
            "{@hit +8} to hit, {@damage 1d4 + 4} damage",
            "{@dice 1d20 - 3|4}",
            "{@dice 1d20 + 4|18}"
          ],
          [
            "{@creature animated object (small)|phb|Small}",
            "25",
            "16",
            "{@hit +6} to hit, {@damage 1d8 + 2} damage",
            "{@dice 1d20 - 2|6}",
            "{@dice 1d20 + 2|14}"
          ],
          [
            "{@creature animated object (medium)|phb|Medium}",
            "40",
            "13",
            "{@hit +5} to hit, {@damage 2d6 + 1} damage",
            "{@dice 1d20|10}",
            "{@dice 1d20 + 1|12}"
          ],
          [
            "{@creature animated object (large)|phb|Large}",
            "50",
            "10",
            "{@hit +6} to hit, {@damage 2d10 + 2} damage",
            "{@dice 1d20 + 2|14}",
            "{@dice 1d20|10}"
          ],
          [
            "{@creature animated object (huge)|phb|Huge}",
            "80",
            "10",
            "{@hit +8} to hit, {@damage 2d12 + 4} damage",
            "{@dice 1d20 + 4|18}",
            "{@dice 1d20 - 3|6}"
          ]
        ]
      },
      "An animated object is a construct with AC, hit points, attacks, Strength, and Dexterity determined by its size. Its Constitution is 10 and its Intelligence and Wisdom are 3, and its Charisma is 1. Its speed is 30 feet; if the object lacks legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the object is securely attached to a surface or a larger object, such as a chain bolted to a wall, its speed is 0. It has blindsight with a radius of 30 feet and is blind beyond that distance. When the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carries over to its original object form.",
      "If you command an object to attack, it can make a single melee attack against a creature within 5 feet of it. It makes a slam attack with an attack bonus and bludgeoning damage determined by its size. The DM might rule that a specific object inflicts slashing or piercing damage based on its form."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "If you cast this spell using a spell slot of 6th level or higher, you can animate two additional objects for each slot level above 5th."
        ]
      }
    ],
    "damageInflict": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "miscTags": [
      "OBJ",
      "SMN",
      "UBA"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Antilife Shell",
    "source": "PHB",
    "page": 213,
    "srd": true,
    "level": 5,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "radius",
      "distance": {
        "type": "feet",
        "amount": 10
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "A shimmering barrier extends out from you in a 10-foot radius and moves with you, remaining centered on you and hedging out creatures other than undead and constructs. The barrier lasts for the duration.",
      "The barrier prevents an affected creature from passing or reaching through. An affected creature can cast spells or make attacks with ranged or reach weapons through the barrier.",
      "If you move so that an affected creature is forced to pass through the barrier, the spell ends."
    ],
    "affectsCreatureType": [
      "aberration",
      "beast",
      "celestial",
      "dragon",
      "elemental",
      "fey",
      "fiend",
      "giant",
      "humanoid",
      "monstrosity",
      "ooze",
      "plant"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Antimagic Field",
    "source": "PHB",
    "page": 213,
    "srd": true,
    "basicRules": true,
    "level": 8,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "sphere",
      "distance": {
        "type": "feet",
        "amount": 10
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a pinch of powdered iron or iron filings"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "A 10-foot-radius invisible sphere of antimagic surrounds you. This area is divorced from the magical energy that suffuses the multiverse. Within the sphere, spells can't be cast, summoned creatures disappear, and even magic items become mundane. Until the spell ends, the sphere moves with you, centered on you.",
      "Spells and other magical effects, except those created by an artifact or a deity, are suppressed in the sphere and can't protrude into it. A slot expended to cast a suppressed spell is consumed. While an effect is suppressed, it doesn't function, but the time it spends suppressed counts against its duration.",
      {
        "type": "entries",
        "name": "Targeted Effects",
        "entries": [
          "Spells and other magical effects, such as {@spell magic missile} and {@spell charm person}, that target a creature or an object in the sphere have no effect on that target."
        ]
      },
      {
        "type": "entries",
        "name": "Areas of Magic",
        "entries": [
          "The area of another spell or magical effect, such as {@spell fireball}, can't extend into the sphere. If the sphere overlaps an area of magic, the part of the area that is covered by the sphere is suppressed. For example, the flames created by a wall of fire are suppressed within the sphere, creating a gap in the wall if the overlap is large enough."
        ]
      },
      {
        "type": "entries",
        "name": "Spells",
        "entries": [
          "Any active spell or other magical effect on a creature or an object in the sphere is suppressed while the creature or object is in it."
        ]
      },
      {
        "type": "entries",
        "name": "Magic Items",
        "entries": [
          "The properties and powers of magic items are suppressed in the sphere. For example, a +1 longsword in the sphere functions as a nonmagical longsword.",
          "A magic weapon's properties and powers are suppressed if it is used against a target in the sphere or wielded by an attacker in the sphere. If a magic weapon or a piece of magic ammunition fully leaves the sphere (for example, if you fire a magic arrow or throw a magic spear at a target outside the sphere), the magic of the item ceases to be suppressed as soon as it exits."
        ]
      },
      {
        "type": "entries",
        "name": "Magical Travel",
        "entries": [
          "Teleportation and planar travel fail to work in the sphere, whether the sphere is the destination or the departure point for such magical travel. A portal to another location, world, or plane of existence, as well as an opening to an extradimensional space such as that created by the rope trick spell, temporarily closes while in the sphere."
        ]
      },
      {
        "type": "entries",
        "name": "Creatures and Objects",
        "entries": [
          "A creature or object summoned or created by magic temporarily winks out of existence in the sphere. Such a creature instantly reappears once the space the creature occupied is no longer within the sphere."
        ]
      },
      {
        "type": "entries",
        "name": "Dispel Magic",
        "entries": [
          "Spells and magical effects such as {@spell dispel magic} have no effect on the sphere. Likewise, the spheres created by different {@spell antimagic field} spells don't nullify each other."
        ]
      }
    ],
    "miscTags": [
      "OBJ"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Antipathy/Sympathy",
    "source": "PHB",
    "page": 214,
    "srd": true,
    "level": 8,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "hour"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "either a lump of alum soaked in vinegar for the antipathy effect or a drop of honey for the sympathy effect"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "day",
          "amount": 10
        }
      }
    ],
    "entries": [
      "This spell attracts or repels creatures of your choice. You target something within range, either a Huge or smaller object or creature or an area that is no larger than a 200-foot cube. Then specify a kind of intelligent creature, such as red dragons, goblins, or vampires. You invest the target with an aura that either attracts or repels the specified creatures for the duration. Choose antipathy or sympathy as the aura's effect.",
      {
        "type": "entries",
        "name": "Antipathy",
        "entries": [
          "The enchantment causes creatures of the kind you designated to feel an intense urge to leave the area and avoid the target. When such a creature can see the target or comes within 60 feet of it, the creature must succeed on a Wisdom saving throw or become {@condition frightened}. The creature remains {@condition frightened} while it can see the target or is within 60 feet of it. While {@condition frightened} by the target, the creature must use its movement to move to the nearest safe spot from which it can't see the target. If the creature moves more than 60 feet from the target and can't see it, the creature is no longer {@condition frightened}, but the creature becomes {@condition frightened} again if it regains sight of the target or moves within 60 feet of it."
        ]
      },
      {
        "type": "entries",
        "name": "Sympathy",
        "entries": [
          "The enchantment causes the specified creatures to feel an intense urge to approach the target while within 60 feet of it or able to see it. When such a creature can see the target or comes within 60 feet of it, the creature must succeed on a Wisdom saving throw or use its movement on each of its turns to enter the area or move within reach of the target. When the creature has done so, it can't willingly move away from the target.",
          "If the target damages or otherwise harms an affected creature, the affected creature can make a Wisdom saving throw to end the effect, as described below."
        ]
      },
      {
        "type": "entries",
        "name": "Ending the Effect",
        "entries": [
          "If an affected creature ends its turn while not within 60 feet of the target or able to see it, the creature makes a Wisdom saving throw. On a successful save, the creature is no longer affected by the target and recognizes the feeling of repugnance or attraction as magical. In addition, a creature affected by the spell is allowed another Wisdom saving throw every 24 hours while the spell persists."
        ]
      },
      "A creature that successfully saves against this effect is immune to it for 1 minute, after which time it can be affected again."
    ],
    "conditionInflict": [
      "frightened"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "OBJ"
    ],
    "areaTags": [
      "C"
    ]
  },
  {
    "name": "Arcane Eye",
    "source": "PHB",
    "page": 214,
    "srd": true,
    "basicRules": true,
    "level": 4,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a bit of bat fur"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You create an invisible, magical eye within range that hovers in the air for the duration.",
      "You mentally receive visual information from the eye, which has normal vision and {@sense darkvision} out to 30 feet. The eye can look in every direction.",
      "As an action, you can move the eye up to 30 feet in any direction. There is no limit to how far away from you the eye can move, but it can't enter another plane of existence. A solid barrier blocks the eye's movement, but the eye can pass through an opening as small as 1 inch in diameter."
    ]
  },
  {
    "name": "Arcane Gate",
    "source": "PHB",
    "page": 214,
    "level": 6,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 500
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "You create linked teleportation portals that remain open for the duration. Choose two points on the ground that you can see, one point within 10 feet of you and one point within 500 feet of you. A circular portal, 10 feet in diameter, opens over each point. If the portal would open in the space occupied by a creature, the spell fails, and the casting is lost.",
      "The portals are two-dimensional glowing rings filled with mist, hovering inches from the ground and perpendicular to it at the points you choose. A ring is visible only from one side (your choice), which is the side that functions as a portal.",
      "Any creature or object entering the portal exits from the other portal as if the two were adjacent to each other; passing through a portal from the nonportal side has no effect. The mist that fills each portal is opaque and blocks vision through it. On your turn, you can rotate the rings as a bonus action so that the active side faces in a different direction."
    ],
    "miscTags": [
      "OBJ",
      "SGT",
      "TP",
      "UBA"
    ]
  },
  {
    "name": "Arcane Lock",
    "source": "PHB",
    "page": 215,
    "srd": true,
    "basicRules": true,
    "level": 2,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "gold dust worth at least 25 gp, which the spell consumes",
        "cost": 2500,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "permanent",
        "ends": [
          "dispel"
        ]
      }
    ],
    "entries": [
      "You touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration. You and the creatures you designate when you cast this spell can open the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute. Otherwise, it is impassable until it is broken or the spell is dispelled or suppressed. Casting {@spell knock} on the object suppresses {@spell arcane lock} for 10 minutes.",
      "While affected by this spell, the object is more difficult to break or force open; the DC to break it or pick any locks on it increases by 10."
    ],
    "miscTags": [
      "OBJ"
    ]
  },
  {
    "name": "Armor of Agathys",
    "source": "PHB",
    "page": 215,
    "level": 1,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a cup of water"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "entries": [
      "A protective magical force surrounds you, manifesting as a spectral frost that covers you and your gear. You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 cold damage."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, both the temporary hit points and the cold damage increase by 5 for each slot level above 1st."
        ]
      }
    ],
    "damageInflict": [
      "cold"
    ],
    "miscTags": [
      "THP"
    ]
  },
  {
    "name": "Arms of Hadar",
    "source": "PHB",
    "page": 215,
    "level": 1,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "radius",
      "distance": {
        "type": "feet",
        "amount": 10
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You invoke the power of Hadar, the Dark Hunger. Tendrils of dark energy erupt from you and batter all creatures within 10 feet of you. Each creature in that area must make a Strength saving throw. On a failed save, a target takes {@damage 2d6} necrotic damage and can't take reactions until its next turn. On a successful save, the creature takes half damage, but suffers no other effect."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by {@scaledamage 2d6|1-9|1d6} for each slot level above 1st."
        ]
      }
    ],
    "damageInflict": [
      "necrotic"
    ],
    "savingThrow": [
      "strength"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Astral Projection",
    "source": "PHB",
    "page": 215,
    "srd": true,
    "basicRules": true,
    "level": 9,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "hour"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 10
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "for each creature you affect with this spell, you must provide one jacinth worth at least 1,000 gp and one ornately carved bar of silver worth at least 100 gp, all of which the spell consumes",
        "cost": 110000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "special"
      }
    ],
    "entries": [
      "You and up to eight willing creatures within range project your astral bodies into the Astral Plane (the spell fails and the casting is wasted if you are already on that plane). The material body you leave behind is {@condition unconscious} and in a state of suspended animation, it doesn't need food or air and doesn't age.",
      "Your astral body resembles your mortal form in almost every way, replicating your game statistics and possessions. The principal difference is the addition of a silvery cord that extends from between your shoulder blades and trails behind you, fading to invisibility after 1 foot. This cord is your tether to your material body. As long as the tether remains intact, you can find your way home. If the cord is cut-something that can happen only when an effect specifically states that it does-your soul and body are separated, killing you instantly.",
      "Your astral form can freely travel through the Astral Plane and can pass through portals there leading to any other plane. If you enter a new plane or return to the plane you were on when casting this spell, your body and possessions are transported along the silver cord, allowing you to re-enter your body as you enter the new plane. Your astral form is a separate incarnation. Any damage or other effects that apply to it have no effect on your physical body, nor do they persist when you return to it.",
      "The spell ends for you and your companions when you use your action to dismiss it. When the spell ends, the affected creature returns to its physical body, and it awakens.",
      "The spell might also end early for you or one of your companions. A successful {@spell dispel magic} spell used against an astral or physical body ends the spell for that creature. If a creature's original body or its astral form drops to 0 hit points, the spell ends for that creature. If the spell ends and the silver cord is intact, the cord pulls the creature's astral form back to its body, ending its state of suspended animation.",
      "If you are returned to your body prematurely, your companions remain in their astral forms and must find their own way back to their bodies, usually by dropping to 0 hit points."
    ],
    "conditionInflict": [
      "unconscious"
    ],
    "miscTags": [
      "PRM",
      "PS"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Augury",
    "source": "PHB",
    "page": 215,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 50
      }
    ],
    "level": 2,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "specially marked sticks, bones, or similar tokens worth at least 25 gp",
        "cost": 2500
      }
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "By casting gem-inlaid sticks, rolling dragon bones, laying out ornate cards, or employing some other divining tool, you receive an omen from an otherworldly entity about the results of a specific course of action that you plan to take within the next 30 minutes. The DM chooses from the following possible omens:",
      {
        "type": "list",
        "items": [
          "Weal, for good results",
          "Woe, for bad results",
          "Weal and woe, for both good and bad results",
          "Nothing, for results that aren't especially good or bad"
        ]
      },
      "The spell doesn't take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion.",
      "If you cast the spell two or more times before completing your next long rest, there is a cumulative {@chance 25|||Random reading!|Regular reading} chance for each casting after the first that you get a random reading. The DM makes this roll in secret."
    ]
  },
  {
    "name": "Aura of Life",
    "source": "PHB",
    "page": 216,
    "level": 4,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "radius",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "Life-preserving energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each nonhostile creature in the aura (including you) has resistance to necrotic damage, and its hit point maximum can't be reduced. In addition, a nonhostile, living creature regains 1 hit point when it starts its turn in the aura with 0 hit points."
    ],
    "damageResist": [
      "necrotic"
    ],
    "miscTags": [
      "HL"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Aura of Purity",
    "source": "PHB",
    "page": 216,
    "level": 4,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "radius",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "Purifying energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each nonhostile creature in the aura (including you) can't become diseased, has resistance to poison damage, and has advantage on saving throws against effects that cause any of the following conditions: {@condition blinded}, {@condition charmed}, {@condition deafened}, {@condition frightened}, {@condition paralyzed}, {@condition poisoned}, and {@condition stunned}."
    ],
    "damageResist": [
      "poison"
    ],
    "miscTags": [
      "ADV"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Aura of Vitality",
    "source": "PHB",
    "page": 216,
    "level": 3,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "radius",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Healing energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. You can use a bonus action to cause one creature in the aura (including you) to regain {@dice 2d6} hit points."
    ],
    "miscTags": [
      "HL",
      "UBA"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Awaken",
    "source": "PHB",
    "page": 216,
    "srd": true,
    "level": 5,
    "school": "T",
    "time": [
      {
        "number": 8,
        "unit": "hour"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "an agate worth at least 1,000 gp, which the spell consumes",
        "cost": 100000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "After spending the casting time tracing magical pathways within a precious gemstone, you touch a Huge or smaller beast or plant. The target must have either no Intelligence score or an Intelligence of 3 or less. The target gains an Intelligence of 10. The target also gains the ability to speak one language you know. If the target is a plant, it gains the ability to move its limbs, roots, vines, creepers, and so forth, and it gains senses similar to a human's. Your DM chooses statistics appropriate for the awakened plant, such as the statistics for the {@creature awakened shrub} or the {@creature awakened tree}.",
      "The awakened beast or plant is {@condition charmed} by you for 30 days or until you or your companions do anything harmful to it. When the {@condition charmed} condition ends, the awakened creature chooses whether to remain friendly to you, based on how you treated it while it was {@condition charmed}."
    ],
    "conditionInflict": [
      "charmed"
    ],
    "affectsCreatureType": [
      "beast",
      "plant"
    ],
    "miscTags": [
      "PRM"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Bane",
    "source": "PHB",
    "page": 216,
    "srd": true,
    "level": 1,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a drop of blood"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a {@dice d4} and subtract the number rolled from the attack roll or saving throw."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
        ]
      }
    ],
    "savingThrow": [
      "charisma"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Banishing Smite",
    "source": "PHB",
    "page": 216,
    "level": 5,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "The next time you hit a creature with a weapon attack before this spell ends, your weapon crackles with force, and the attack deals an extra {@damage 5d10} force damage to the target. Additionally, if this attack reduces the target to 50 hit points or fewer, you banish it. If the target is native to a different plane of existence than the one you're on, the target disappears, returning to its home plane. If the target is native to the plane you're on, the creature vanishes into a harmless demiplane. While there, the target is {@condition incapacitated}. It remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied."
    ],
    "damageInflict": [
      "force"
    ],
    "conditionInflict": [
      "incapacitated"
    ],
    "miscTags": [
      "AAD"
    ]
  },
  {
    "name": "Banishment",
    "source": "PHB",
    "page": 217,
    "srd": true,
    "level": 4,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "an item distasteful to the target"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You attempt to send one creature that you can see within range to another plane of existence. The target must succeed on a Charisma saving throw or be banished.",
      "If the target is native to the plane of existence you're on, you banish the target to a harmless demiplane. While there, the target is {@condition incapacitated}. The target remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied.",
      "If the target is native to a different plane of existence than the one you're on, the target is banished with a faint popping noise, returning to its home plane. If the spell ends before 1 minute has passed, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. Otherwise, the target doesn't return."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th."
        ]
      }
    ],
    "conditionInflict": [
      "incapacitated"
    ],
    "savingThrow": [
      "charisma"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Barkskin",
    "source": "PHB",
    "page": 217,
    "srd": true,
    "level": 2,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a handful of oak bark"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You touch a willing creature. Until the spell ends, the target's skin has a rough, bark-like appearance, and the target's AC can't be less than 16, regardless of what kind of armor it is wearing."
    ],
    "miscTags": [
      "MAC"
    ],
    "areaTags": [
      "ST"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Beacon of Hope",
    "source": "PHB",
    "page": 217,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 50
      }
    ],
    "level": 3,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "This spell bestows hope and vitality. Choose any number of creatures within range. For the duration, each target has advantage on Wisdom saving throws and death saving throws, and regains the maximum number of hit points possible from any healing."
    ],
    "miscTags": [
      "ADV"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Beast Sense",
    "source": "PHB",
    "page": 217,
    "level": 2,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "You touch a willing beast. For the duration of the spell, you can use your action to see through the beast's eyes and hear what it hears, and continue to do so until you use your action to return to your normal senses. While perceiving through the beast's senses, you gain the benefits of any special senses possessed by that creature, though you are {@condition blinded} and {@condition deafened} to your own surroundings."
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Bestow Curse",
    "source": "PHB",
    "page": 218,
    "srd": true,
    "level": 3,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You touch a creature, and that creature must succeed on a Wisdom saving throw or become cursed for the duration of the spell. When you cast this spell, choose the nature of the curse from the following options:",
      {
        "type": "list",
        "items": [
          "Choose one ability score. While cursed, the target has disadvantage on ability checks and saving throws made with that ability score.",
          "While cursed, the target has disadvantage on attack rolls against you.",
          "While cursed, the target must make a Wisdom saving throw at the start of each of its turns. If it fails, it wastes its action that turn doing nothing.",
          "While the target is cursed, your attacks and spells deal an extra {@damage 1d8} necrotic damage to the target."
        ]
      },
      "A {@spell remove curse} spell ends this effect. At the DM's option, you may choose an alternative curse effect, but it should be no more powerful than those described above. The DM has final say on such a curse's effect."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "If you cast this spell using a spell slot of 4th level or higher, the duration is {@status concentration}, up to 10 minutes. If you use a spell slot of 5th level or higher, the duration is 8 hours. If you use a spell slot of 7th level or higher, the duration is 24 hours. If you use a 9th level spell slot, the spell lasts until it is dispelled. Using a spell slot of 5th level or higher grants a duration that doesn't require {@status concentration}."
        ]
      }
    ],
    "damageInflict": [
      "necrotic"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "PRM"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Bigby's Hand",
    "source": "PHB",
    "page": 218,
    "srd": "Arcane Hand",
    "level": 5,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "an eggshell and a snakeskin glove"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You create a Large hand of shimmering, translucent force in an unoccupied space that you can see within range. The hand lasts for the spell's duration, and it moves at your command, mimicking the movements of your own hand.",
      "The hand is an object that has AC 20 and hit points equal to your hit point maximum. If it drops to 0 hit points, the spell ends. It has a Strength of 26 ({@d20 8}) and a Dexterity of 10 ({@d20 0}). The hand doesn't fill its space.",
      "When you cast the spell and as a bonus action on your subsequent turns, you can move the hand up to 60 feet and then cause one of the following effects with it.",
      {
        "type": "entries",
        "name": "Clenched Fist",
        "entries": [
          "The hand strikes one creature or object within 5 feet of it. Make a melee spell attack for the hand using your game statistics. On a hit, the target takes {@damage 4d8} force damage."
        ]
      },
      {
        "type": "entries",
        "name": "Forceful Hand",
        "entries": [
          "The hand attempts to push a creature within 5 feet of it in a direction you choose. Make a check with the hand's Strength contested by the Strength ({@skill Athletics}) check of the target. If the target is Medium or smaller, you have advantage on the check. If you succeed, the hand pushes the target up to 5 feet plus a number of feet equal to five times your spellcasting ability modifier. The hand moves with the target to remain within 5 feet of it."
        ]
      },
      {
        "type": "entries",
        "name": "Grasping Hand",
        "entries": [
          "The hand attempts to grapple a Huge or smaller creature within 5 feet of it. You use the hand's Strength score to resolve the grapple. If the target is Medium or smaller, you have advantage on the check. While the hand is grappling the target, you can use a bonus action to have the hand crush it. When you do so, the target takes bludgeoning damage equal to {@damage 2d6} + your spellcasting ability modifier."
        ]
      },
      {
        "type": "entries",
        "name": "Interposing Hand",
        "entries": [
          "The hand interposes itself between you and a creature you choose until you give the hand a different command. The hand moves to stay between you and the target, providing you with half cover against the target. The target can't move through the hand's space if its Strength score is less than or equal to the hand's Strength score. If its Strength score is higher than the hand's Strength score, the target can move toward you through the hand's space, but that space is {@quickref difficult terrain||3} for the target."
        ]
      }
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 6th level or higher, the damage from the clenched fist option increases by {@scaledamage 4d8|5-9|2d8} and the damage from the grasping hand increases by {@scaledamage 2d6|5-9|2d6} for each slot level above 5th."
        ]
      }
    ],
    "damageInflict": [
      "bludgeoning",
      "force"
    ],
    "spellAttack": [
      "M"
    ],
    "abilityCheck": [
      "strength"
    ],
    "miscTags": [
      "DFT",
      "FMV",
      "OBJ",
      "SGT",
      "UBA"
    ]
  },
  {
    "name": "Blade Barrier",
    "source": "PHB",
    "page": 218,
    "srd": true,
    "basicRules": true,
    "level": 6,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "You create a vertical wall of whirling, razor-sharp blades made of magical energy. The wall appears within range and lasts for the duration. You can make a straight wall up to 100 feet long, 20 feet high, and 5 feet thick, or a ringed wall up to 60 feet in diameter, 20 feet high, and 5 feet thick. The wall provides three-quarters cover to creatures behind it, and its space is {@quickref difficult terrain||3}.",
      "When a creature enters the wall's area for the first time on a turn or starts its turn there, the creature must make a Dexterity saving throw. On a failed save, the creature takes {@damage 6d10} slashing damage. On a successful save, the creature takes half as much damage."
    ],
    "damageInflict": [
      "slashing"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "DFT"
    ],
    "areaTags": [
      "W"
    ]
  },
  {
    "name": "Blade Ward",
    "source": "PHB",
    "page": 218,
    "level": 0,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "round",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks."
    ],
    "damageResist": [
      "bludgeoning",
      "piercing",
      "slashing"
    ]
  },
  {
    "name": "Bless",
    "source": "PHB",
    "page": 219,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 50
      }
    ],
    "level": 1,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a sprinkling of holy water"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a {@dice d4} and add the number rolled to the attack roll or saving throw."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
        ]
      }
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Blight",
    "source": "PHB",
    "page": 219,
    "srd": true,
    "level": 4,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "Necromantic energy washes over a creature of your choice that you can see within range, draining moisture and vitality from it. The target must make a Constitution saving throw. The target takes {@damage 8d8} necrotic damage on a failed save, or half as much damage on a successful one. This spell has no effect on undead or constructs.",
      "If you target a plant creature or a magical plant, it makes the saving throw with disadvantage, and the spell deals maximum damage to it.",
      "If you target a nonmagical plant that isn't a creature, such as a tree or shrub, it doesn't make a saving throw, it simply withers and dies."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 5th level or higher, the damage increases by {@scaledamage 8d8|4-9|1d8} for each slot level above 4th."
        ]
      }
    ],
    "damageInflict": [
      "necrotic"
    ],
    "savingThrow": [
      "constitution"
    ],
    "affectsCreatureType": [
      "aberration",
      "beast",
      "celestial",
      "dragon",
      "elemental",
      "fey",
      "fiend",
      "giant",
      "humanoid",
      "monstrosity",
      "ooze",
      "plant"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Blinding Smite",
    "source": "PHB",
    "page": 219,
    "level": 3,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "The next time you hit a creature with a melee weapon attack during this spell's duration, your weapon flares with bright light, and the attack deals an extra {@damage 3d8} radiant damage to the target. Additionally, the target must succeed on a Constitution saving throw or be {@condition blinded} until the spell ends.",
      "A creature {@condition blinded} by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer {@condition blinded}."
    ],
    "damageInflict": [
      "radiant"
    ],
    "conditionInflict": [
      "blinded"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "AAD"
    ]
  },
  {
    "name": "Blindness/Deafness",
    "source": "PHB",
    "page": 219,
    "srd": true,
    "level": 2,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You can blind or deafen a foe. Choose one creature that you can see within range to make a Constitution saving throw. If it fails, the target is either {@condition blinded} or {@condition deafened} (your choice) for the duration. At the end of each of its turns, the target can make a Constitution saving throw. On a success, the spell ends."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
        ]
      }
    ],
    "conditionInflict": [
      "blinded",
      "deafened"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Blink",
    "source": "PHB",
    "page": 219,
    "srd": true,
    "level": 3,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        }
      }
    ],
    "entries": [
      "Roll a {@dice d20} at the end of each of your turns for the duration of the spell. On a roll of 11 or higher, you vanish from your current plane of existence and appear in the Ethereal Plane (the spell fails and the casting is wasted if you were already on that plane). At the start of your next turn, and when the spell ends if you are on the Ethereal Plane, you return to an unoccupied space of your choice that you can see within 10 feet of the space you vanished from. If no unoccupied space is available within that range, you appear in the nearest unoccupied space (chosen at random if more than one space is equally near). You can dismiss this spell as an action.",
      "While on the Ethereal Plane, you can see and hear the plane you originated from, which is cast in shades of gray, and you can't see anything there more than 60 feet away. You can only affect and be affected by other creatures on the Ethereal Plane. Creatures that aren't there can't perceive you or interact with you, unless they have the ability to do so."
    ],
    "miscTags": [
      "SGT"
    ]
  },
  {
    "name": "Blur",
    "source": "PHB",
    "page": 219,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 50
      }
    ],
    "level": 2,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Your body becomes blurred, shifting and wavering to all who can see you. For the duration, any creature has disadvantage on attack rolls against you. An attacker is immune to this effect if it doesn't rely on sight, as with blindsight, or can see through illusions, as with {@sense truesight}."
    ]
  },
  {
    "name": "Branding Smite",
    "source": "PHB",
    "page": 219,
    "srd": true,
    "level": 2,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "The next time you hit a creature with a weapon attack before this spell ends, the weapon gleams with astral radiance as you strike. The attack deals an extra {@damage 2d6} radiant damage to the target, which becomes visible if it's {@condition invisible}, and the target sheds dim light in a 5-foot radius and can't become {@condition invisible} until the spell ends."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, the extra damage increases by {@scaledamage 2d6|2-9|1d6} for each slot level above 2nd."
        ]
      }
    ],
    "damageInflict": [
      "radiant"
    ],
    "miscTags": [
      "AAD",
      "LGT"
    ]
  },
  {
    "name": "Burning Hands",
    "source": "PHB",
    "page": 220,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 51
      }
    ],
    "level": 1,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "cone",
      "distance": {
        "type": "feet",
        "amount": 15
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes {@damage 3d6} fire damage on a failed save, or half as much damage on a successful one.",
      "The fire ignites any flammable objects in the area that aren't being worn or carried."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by {@scaledamage 3d6|1-9|1d6} for each slot level above 1st."
        ]
      }
    ],
    "damageInflict": [
      "fire"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "OBJ"
    ],
    "areaTags": [
      "N"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Call Lightning",
    "source": "PHB",
    "page": 220,
    "srd": true,
    "level": 3,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "A storm cloud appears in the shape of a cylinder that is 10 feet tall with a 60-foot radius, centered on a point you can see within range directly above you. The spell fails if you can't see a point in the air where the storm cloud could appear (for example, if you are in a room that can't accommodate the cloud).",
      "When you cast the spell, choose a point you can see under the cloud. A bolt of lightning flashes down from the cloud to that point. Each creature within 5 feet of that point must make a Dexterity saving throw. A creature takes {@damage 3d10} lightning damage on a failed save, or half as much damage on a successful one. On each of your turns until the spell ends, you can use your action to call down lightning in this way again, targeting the same point or a different one.",
      "If you are outdoors in stormy conditions when you cast this spell, the spell gives you control over the existing storm instead of creating a new one. Under such conditions, the spell's damage increases by {@dice 1d10}."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th or higher level, the damage increases by {@scaledamage 3d10|3-9|1d10} for each slot level above 3rd."
        ]
      }
    ],
    "damageInflict": [
      "lightning"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "S",
      "Y"
    ]
  },
  {
    "name": "Calm Emotions",
    "source": "PHB",
    "page": 221,
    "srd": true,
    "level": 2,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You attempt to suppress strong emotions in a group of people. Each humanoid in a 20-foot-radius sphere centered on a point you choose within range must make a Charisma saving throw; a creature can choose to fail this saving throw if it wishes. If a creature fails its saving throw, choose one of the following two effects.",
      "You can suppress any effect causing a target to be {@condition charmed} or {@condition frightened}. When this spell ends, any suppressed effect resumes, provided that its duration has not expired in the meantime.",
      "Alternatively, you can make a target indifferent about creatures of your choice that it is hostile toward. This indifference ends if the target is attacked or harmed by a spell or if it witnesses any of its friends being harmed. When the spell ends, the creature becomes hostile again, unless the DM rules otherwise."
    ],
    "savingThrow": [
      "charisma"
    ],
    "affectsCreatureType": [
      "humanoid"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Chain Lightning",
    "source": "PHB",
    "page": 221,
    "srd": true,
    "basicRules": true,
    "level": 6,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 150
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a bit of fur; a piece of amber, glass, or a crystal rod; and three silver pins"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You create a bolt of lightning that arcs toward a target of your choice that you can see within range. Three bolts then leap from that target to as many as three other targets, each of which must be within 30 feet of the first target. A target can be a creature or an object and can be targeted by only one of the bolts.",
      "A target must make a Dexterity saving throw. The target takes {@damage 10d8} lightning damage on a failed save, or half as much damage on a successful one."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 7th level or higher, one additional bolt leaps from the first target to another target for each slot level above 6th."
        ]
      }
    ],
    "damageInflict": [
      "lightning"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "OBJ",
      "SGT"
    ],
    "areaTags": [
      "MT",
      "ST"
    ]
  },
  {
    "name": "Charm Person",
    "source": "PHB",
    "page": 221,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 51
      }
    ],
    "level": 1,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is {@condition charmed} by you until the spell ends or until you or your companions do anything harmful to it. The {@condition charmed} creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was {@condition charmed} by you."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."
        ]
      }
    ],
    "conditionInflict": [
      "charmed"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "affectsCreatureType": [
      "humanoid"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Chill Touch",
    "source": "PHB",
    "page": 221,
    "srd": true,
    "level": 0,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "round",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes {@damage 1d8} necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target.",
      "If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn.",
      "This spell's damage increases by {@dice 1d8} when you reach 5th level ({@damage 2d8}), 11th level ({@damage 3d8}), and 17th level ({@damage 4d8})."
    ],
    "scalingLevelDice": {
      "label": "necrotic damage",
      "scaling": {
        "1": "1d8",
        "5": "2d8",
        "11": "3d8",
        "17": "4d8"
      }
    },
    "damageInflict": [
      "necrotic"
    ],
    "spellAttack": [
      "R"
    ],
    "miscTags": [
      "SCL"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Chromatic Orb",
    "source": "PHB",
    "page": 221,
    "level": 1,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a diamond worth at least 50 gp",
        "cost": 5000
      }
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You hurl a 4-inch-diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature takes {@damage 3d8} damage of the type you chose."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by {@scaledamage 3d8|1-9|1d8} for each slot level above 1st."
        ]
      }
    ],
    "damageInflict": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "poison",
      "thunder"
    ],
    "spellAttack": [
      "R"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Circle of Death",
    "source": "PHB",
    "page": 221,
    "srd": true,
    "level": 6,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 150
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "the powder of a crushed black pearl worth at least 500 gp",
        "cost": 50000
      }
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "A sphere of negative energy ripples out in a 60-foot-radius sphere from a point within range. Each creature in that area must make a Constitution saving throw. A target takes {@damage 8d6} necrotic damage on a failed save, or half as much damage on a successful one."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 7th level or higher, the damage increases by {@scaledamage 8d6|6-9|2d6} for each slot level above 6th."
        ]
      }
    ],
    "damageInflict": [
      "necrotic"
    ],
    "savingThrow": [
      "constitution"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Circle of Power",
    "source": "PHB",
    "page": 221,
    "level": 5,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "radius",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "Divine energy radiates from you, distorting and diffusing magical energy within 30 feet of you. Until the spell ends, the sphere moves with you, centered on you. For the duration, each friendly creature in the area (including you) has advantage on saving throws against spells and other magical effects. Additionally, when an affected creature succeeds on a saving throw made against a spell or magical effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw."
    ],
    "miscTags": [
      "ADV"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Clairvoyance",
    "source": "PHB",
    "page": 222,
    "srd": true,
    "level": 3,
    "school": "D",
    "time": [
      {
        "number": 10,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "miles",
        "amount": 1
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a focus worth at least 100 gp, either a jeweled horn for hearing or a glass eye for seeing",
        "cost": 10000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "You create an invisible sensor within range in a location familiar to you (a place you have visited or seen before) or in an obvious location that is unfamiliar to you (such as behind a door, around a corner, or in a grove of trees). The sensor remains in place for the duration, and it can't be attacked or otherwise interacted with.",
      "When you cast the spell, you choose seeing or hearing. You can use the chosen sense through the sensor as if you were in its space. As your action, you can switch between seeing and hearing.",
      "A creature that can see the sensor (such as a creature benefiting from {@spell see invisibility} or {@sense truesight}) sees a luminous, intangible orb about the size of your fist."
    ]
  },
  {
    "name": "Clone",
    "source": "PHB",
    "page": 222,
    "srd": true,
    "level": 8,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "hour"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a diamond worth at least 1,000 gp and at least 1 cubic inch of flesh of the creature that is to be cloned, which the spell consumes, and a vessel worth at least 2,000 gp that has a sealable lid and is large enough to hold the creature being cloned, such as a huge urn, coffin, mud-filled cyst in the ground, or crystal container filled with salt water",
        "cost": 100000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "This spell grows an inert duplicate of a living creature as a safeguard against death. This clone forms inside the vessel used in the spell's casting and grows to full size and maturity after 120 days; you can also choose to have the clone be a younger version of the same creature. It remains inert and endures indefinitely, as long as its vessel remains undisturbed.",
      "At any time after the clone matures, if the original creature dies, its soul transfers to the clone, provided that the soul is free and willing to return. The clone is physically identical to the original and has the same personality, memories, and abilities, but none of the original's equipment. The original creature's physical remains, if they still exist, become inert and can't thereafter be restored to life, since the creature's soul is elsewhere."
    ],
    "miscTags": [
      "PRM"
    ]
  },
  {
    "name": "Cloud of Daggers",
    "source": "PHB",
    "page": 222,
    "level": 2,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a sliver of glass"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You fill the air with spinning daggers in a cube 5 feet on each side, centered on a point you choose within range. A creature takes {@damage 4d4} slashing damage when it enters the spell's area for the first time on a turn or starts its turn there."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by {@scaledamage 4d4|2-9|2d4} for each slot level above 2nd."
        ]
      }
    ],
    "damageInflict": [
      "slashing"
    ],
    "areaTags": [
      "C"
    ]
  },
  {
    "name": "Cloudkill",
    "source": "PHB",
    "page": 222,
    "srd": true,
    "level": 5,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "You create a 20-foot-radius sphere of poisonous, yellow-green fog centered on a point you choose within range. The fog spreads around corners. It lasts for the duration or until strong wind disperses the fog, ending the spell. Its area is {@quickref Vision and Light|PHB|2||heavily obscured}.",
      "When a creature enters the spell's area for the first time on a turn or starts its turn there, that creature must make a Constitution saving throw. The creature takes {@damage 5d8} poison damage on a failed save, or half as much damage on a successful one. Creatures are affected even if they hold their breath or don't need to breathe.",
      "The fog moves 10 feet away from you at the start of each of your turns, rolling along the surface of the ground. The vapors, being heavier than air, sink to the lowest level of the land, even pouring down openings."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 6th level or higher, the damage increases by {@scaledamage 5d8|5-9|1d8} for each slot level above 5th."
        ]
      }
    ],
    "damageInflict": [
      "poison"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "OBS"
    ],
    "areaTags": [
      "S"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Color Spray",
    "source": "PHB",
    "page": 222,
    "srd": true,
    "level": 1,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "cone",
      "distance": {
        "type": "feet",
        "amount": 15
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a pinch of powder or sand that is colored red, yellow, and blue"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "round",
          "amount": 1
        }
      }
    ],
    "entries": [
      "A dazzling array of flashing, colored light springs from your hand. Roll {@dice 6d10}; the total is how many hit points of creatures this spell can effect. Creatures in a 15-foot cone originating from you are affected in ascending order of their current hit points (ignoring {@condition unconscious} creatures and creatures that can't see).",
      "Starting with the creature that has the lowest current hit points, each creature affected by this spell is {@condition blinded} until the end of your next turn. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, roll an additional {@scaledice 6d10|1-9|2d10} for each slot level above 1st."
        ]
      }
    ],
    "conditionInflict": [
      "blinded"
    ],
    "areaTags": [
      "N"
    ]
  },
  {
    "name": "Command",
    "source": "PHB",
    "page": 223,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 51
      }
    ],
    "level": 1,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "round",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. The spell has no effect if the target is undead, if it doesn't understand your language, or if your command is directly harmful to it.",
      "Some typical commands and their effects follow. You might issue a command other than one described here. If you do so, the DM determines how the target behaves. If the target can't follow your command, the spell ends.",
      {
        "type": "entries",
        "name": "Approach",
        "entries": [
          "The target moves toward you by the shortest and most direct route, ending its turn if it moves within 5 feet of you."
        ]
      },
      {
        "type": "entries",
        "name": "Drop",
        "entries": [
          "The target drops whatever it is holding and then ends its turn."
        ]
      },
      {
        "type": "entries",
        "name": "Flee",
        "entries": [
          "The target spends its turn moving away from you by the fastest available means."
        ]
      },
      {
        "type": "entries",
        "name": "Grovel",
        "entries": [
          "The target falls {@condition prone} and then ends its turn."
        ]
      },
      {
        "type": "entries",
        "name": "Halt",
        "entries": [
          "The target doesn't move and takes no actions. A flying creature stays aloft, provided that it is able to do so. If it must move to stay aloft, it flies the minimum distance needed to remain in the air."
        ]
      }
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."
        ]
      }
    ],
    "conditionInflict": [
      "prone"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "affectsCreatureType": [
      "aberration",
      "beast",
      "celestial",
      "construct",
      "dragon",
      "elemental",
      "fey",
      "fiend",
      "giant",
      "humanoid",
      "monstrosity",
      "ooze",
      "plant"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Commune",
    "source": "PHB",
    "page": 223,
    "srd": true,
    "basicRules": true,
    "level": 5,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "incense and a vial of holy or unholy water"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        }
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "You contact your deity or a divine proxy and ask up to three questions that can be answered with a yes or no. You must ask your questions before the spell ends. You receive a correct answer for each question.",
      "Divine beings aren't necessarily omniscient, so you might receive \\"unclear\\" as an answer if a question pertains to information that lies beyond the deity's knowledge. In a case where a one-word answer could be misleading or contrary to the deity's interests, the DM might offer a short phrase as an answer instead.",
      "If you cast the spell two or more times before finishing your next long rest, there is a cumulative {@chance 25|||No answer!|Answer} chance for each casting after the first that you get no answer. The DM makes this roll in secret."
    ]
  },
  {
    "name": "Commune with Nature",
    "source": "PHB",
    "page": 224,
    "srd": true,
    "level": 5,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "You briefly become one with nature and gain knowledge of the surrounding territory. In the outdoors, the spell gives you knowledge of the land within 3 miles of you. In caves and other natural underground settings, the radius is limited to 300 feet. The spell doesn't function where nature has been replaced by construction, such as in dungeons and towns.",
      "You instantly gain knowledge of up to three facts of your choice about any of the following subjects as they relate to the area:",
      {
        "type": "list",
        "items": [
          "terrain and bodies of water",
          "prevalent plants, minerals, animals, or peoples",
          "powerful celestials, fey, fiends, elementals, or undead",
          "influence from other planes of existence",
          "buildings"
        ]
      },
      "For example, you could determine the location of powerful undead in the area, the location of major sources of safe drinking water, and the location of any nearby towns."
    ]
  },
  {
    "name": "Compelled Duel",
    "source": "PHB",
    "page": 224,
    "level": 1,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You attempt to compel a creature into a duel. One creature that you can see within range must make a Wisdom saving throw. On a failed save, the creature is drawn to you, compelled by your divine demand. For the duration, it has disadvantage on attack rolls against creatures other than you, and must make a Wisdom saving throw each time it attempts to move to a space that is more than 30 feet away from you; if it succeeds on this saving throw, this spell doesn't restrict the target's movement for that turn.",
      "The spell ends if you attack any other creature, if you cast a spell that targets a hostile creature other than the target, if a creature friendly to you damages the target or casts a harmful spell on it, or if you end your turn more than 30 feet away from the target."
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Comprehend Languages",
    "source": "PHB",
    "page": 224,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 52
      }
    ],
    "level": 1,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a pinch of soot and salt"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text.",
      "This spell doesn't decode secret messages in a text or a glyph, such as an arcane sigil, that isn't part of a written language."
    ]
  },
  {
    "name": "Compulsion",
    "source": "PHB",
    "page": 224,
    "srd": true,
    "level": 4,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Creatures of your choice that you can see within range and that can hear you must make a Wisdom saving throw. A target automatically succeeds on this saving throw if it can't be {@condition charmed}. On a failed save, a target is affected by this spell. Until the spell ends, you can use a bonus action on each of your turns to designate a direction that is horizontal to you. Each affected target must use as much of its movement as possible to move in that direction on its next turn. It can take its action before it moves. After moving in this way, it can make another Wisdom saving throw to try to end the effect.",
      "A target isn't compelled to move into an obviously deadly hazard, such as a fire or pit, but it will provoke opportunity attacks to move in the designated direction."
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "SGT",
      "UBA"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Cone of Cold",
    "source": "PHB",
    "page": 224,
    "srd": true,
    "basicRules": true,
    "level": 5,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "cone",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a small crystal or glass cone"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a Constitution saving throw. A creature takes {@damage 8d8} cold damage on a failed save, or half as much damage on a successful one.",
      "A creature killed by this spell becomes a frozen statue until it thaws."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 6th level or higher, the damage increases by {@scaledamage 8d8|5-9|1d8} for each slot level above 5th."
        ]
      }
    ],
    "damageInflict": [
      "cold"
    ],
    "savingThrow": [
      "constitution"
    ],
    "areaTags": [
      "N"
    ]
  },
  {
    "name": "Confusion",
    "source": "PHB",
    "page": 224,
    "srd": true,
    "level": 4,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "three nut shells"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "This spell assaults and twists creatures' minds, spawning delusions and provoking uncontrolled action. Each creature in a 10-foot-radius sphere centered on a point you choose within range must succeed on a Wisdom saving throw when you cast this spell or be affected by it.",
      "An affected target can't take reactions and must roll a {@dice d10} at the start of each of its turns to determine its behavior for that turn.",
      {
        "type": "table",
        "caption": "Confusion Behavior",
        "colLabels": [
          "{@dice d10}",
          "Behavior"
        ],
        "colStyles": [
          "col-1 text-center",
          "col-11"
        ],
        "rows": [
          [
            {
              "type": "cell",
              "roll": {
                "exact": 1
              }
            },
            "The creature uses all its movement to move in a random direction. To determine the direction, roll a {@dice d8} and assign a direction to each die face. The creature doesn't take an action this turn."
          ],
          [
            {
              "type": "cell",
              "roll": {
                "min": 2,
                "max": 6
              }
            },
            "The creature doesn't move or take actions this turn."
          ],
          [
            {
              "type": "cell",
              "roll": {
                "min": 7,
                "max": 8
              }
            },
            "The creature uses its action to make a melee attack against a randomly determined creature within its reach. If there is no creature within its reach, the creature does nothing this turn."
          ],
          [
            {
              "type": "cell",
              "roll": {
                "min": 9,
                "max": 10
              }
            },
            "The creature can act and move normally."
          ]
        ]
      },
      "At the end of each of its turns, an affected target can make a Wisdom saving throw. If it succeeds, this effect ends for that target."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 5th level or higher, the radius of the sphere increases by 5 feet for each slot level above 4th."
        ]
      }
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "RO"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Conjure Animals",
    "source": "PHB",
    "page": 225,
    "srd": true,
    "level": 3,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You summon fey spirits that take the form of beasts and appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears:",
      {
        "type": "list",
        "items": [
          "One {@filter beast of challenge rating 2 or lower|bestiary|challenge rating=[&0;&2]|type=beast|miscellaneous=!swarm}",
          "Two {@filter beasts of challenge rating 1 or lower|bestiary|challenge rating=[&0;&1]|type=beast|miscellaneous=!swarm}",
          "Four {@filter beasts of challenge rating 1/2 or lower|bestiary|challenge rating=[&0;&1/2]|type=beast|miscellaneous=!swarm}",
          "Eight {@filter beasts of challenge rating 1/4 or lower|bestiary|challenge rating=[&0;&1/4]|type=beast|miscellaneous=!swarm}"
        ]
      },
      "Each beast is also considered fey, and it disappears when it drops to 0 hit points or when the spell ends.",
      "The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions.",
      "The DM has the creatures' statistics."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 5th-level slot, three times as many with a 7th-level slot, and four times as many with a 9th-level slot."
        ]
      }
    ],
    "miscTags": [
      "SGT",
      "SMN"
    ]
  },
  {
    "name": "Conjure Barrage",
    "source": "PHB",
    "page": 225,
    "level": 3,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "cone",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "one piece of ammunition or a thrown weapon"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You throw a nonmagical weapon or fire a piece of nonmagical ammunition into the air to create a cone of identical weapons that shoot forward and then disappear. Each creature in a 60-foot cone must succeed on a Dexterity saving throw. A creature takes {@damage 3d8} damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the weapon or ammunition used as a component."
    ],
    "savingThrow": [
      "dexterity"
    ],
    "areaTags": [
      "N"
    ]
  },
  {
    "name": "Conjure Celestial",
    "source": "PHB",
    "page": 225,
    "srd": true,
    "level": 7,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You summon a {@filter celestial of challenge rating 4 or lower|bestiary|challenge rating=[&0;&4]|type=celestial|miscellaneous=!swarm}, which appears in an unoccupied space that you can see within range. The celestial disappears when it drops to 0 hit points or when the spell ends.",
      "The celestial is friendly to you and your companions for the duration. Roll initiative for the celestial, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you), as long as they don't violate its alignment. If you don't issue any commands to the celestial, it defends itself from hostile creatures but otherwise takes no actions.",
      "The DM has {@creature couatl||the celestial}'s statistics."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a 9th-level spell slot, you summon a {@filter celestial of challenge rating 5 or lower|bestiary|challenge rating=[&0;&5]|type=celestial|miscellaneous=!swarm}."
        ]
      }
    ],
    "miscTags": [
      "SGT",
      "SMN"
    ]
  },
  {
    "name": "Conjure Elemental",
    "source": "PHB",
    "page": 225,
    "srd": true,
    "level": 5,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "burning incense for air, soft clay for earth, sulfur and phosphorus for fire, or water and sand for water"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You call forth an elemental servant. Choose an area of air, earth, fire, or water that fills a 10-foot cube within range. An {@filter elemental of challenge rating 5 or lower|bestiary|challenge rating=[&0;&5]|type=elemental|miscellaneous=!swarm} appropriate to the area you chose appears in an unoccupied space within 10 feet of it. For example, a {@creature fire elemental} emerges from a bonfire, and an {@creature earth elemental} rises up from the ground. The elemental disappears when it drops to 0 hit points or when the spell ends.",
      "The elemental is friendly to you and your companions for the duration. Roll initiative for the elemental, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you). If you don't issue any commands to the elemental, it defends itself from hostile creatures but otherwise takes no actions.",
      "If your {@status concentration} is broken, the elemental doesn't disappear. Instead, you lose control of the elemental, it becomes hostile toward you and your companions, and it might attack. An uncontrolled elemental can't be dismissed by you, and it disappears 1 hour after you summoned it.",
      "The DM has the elemental's statistics."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 6th level or higher, the challenge rating increases by 1 for each slot level above 5th."
        ]
      }
    ],
    "miscTags": [
      "SMN"
    ]
  },
  {
    "name": "Conjure Fey",
    "source": "PHB",
    "page": 226,
    "srd": true,
    "level": 6,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You summon a {@filter fey creature of challenge rating 6 or lower|bestiary|challenge rating=[&0;&6]|type=fey|miscellaneous=!swarm}, or a fey spirit that takes the form of a {@filter beast of challenge rating 6 or lower|bestiary|challenge rating=[&0;&6]|type=beast|miscellaneous=!swarm}. It appears in an unoccupied space that you can see within range. The fey creature disappears when it drops to 0 hit points or when the spell ends.",
      "The fey creature is friendly to you and your companions for the duration. Roll initiative for the creature, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you), as long as they don't violate its alignment. If you don't issue any commands to the fey creature, it defends itself from hostile creatures but otherwise takes no actions.",
      "If your {@status concentration} is broken, the fey creature doesn't disappear. Instead, you lose control of the fey creature, it becomes hostile toward you and your companions, and it might attack. An uncontrolled fey creature can't be dismissed by you, and it disappears 1 hour after you summoned it.",
      "The DM has the fey creature's statistics."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 7th level or higher, the challenge rating increases by 1 for each slot level above 6th."
        ]
      }
    ],
    "miscTags": [
      "SGT",
      "SMN"
    ]
  },
  {
    "name": "Conjure Minor Elementals",
    "source": "PHB",
    "page": 226,
    "srd": true,
    "level": 4,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You summon elementals that appear in unoccupied spaces that you can see within range. You choose one the following options for what appears:",
      {
        "type": "list",
        "items": [
          "One {@filter elemental of challenge rating 2 or lower|bestiary|challenge rating=[&0;&2]|type=elemental|miscellaneous=!swarm}",
          "Two {@filter elementals of challenge rating 1 or lower|bestiary|challenge rating=[&0;&1]|type=elemental|miscellaneous=!swarm}",
          "Four {@filter elementals of challenge rating 1/2 or lower|bestiary|challenge rating=[&0;&1/2]|type=elemental|miscellaneous=!swarm}",
          "Eight {@filter elementals of challenge rating 1/4 or lower|bestiary|challenge rating=[&0;&1/4]|type=elemental|miscellaneous=!swarm}."
        ]
      },
      "An elemental summoned by this spell disappears when it drops to 0 hit points or when the spell ends.",
      "The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions.",
      "The DM has the creatures' statistics."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 6th-level slot and three times as many with an 8th-level slot."
        ]
      }
    ],
    "miscTags": [
      "SGT",
      "SMN"
    ]
  },
  {
    "name": "Conjure Volley",
    "source": "PHB",
    "page": 226,
    "level": 5,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 150
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "one piece of ammunition or one thrown weapon"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You fire a piece of nonmagical ammunition from a ranged weapon or throw a nonmagical weapon into the air and choose a point within range. Hundreds of duplicates of the ammunition or weapon fall in a volley from above and then disappear. Each creature in a 40-foot-radius, 20-foot-high cylinder centered on that point must make a Dexterity saving throw. A creature takes {@damage 8d8} damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the ammunition or weapon."
    ],
    "savingThrow": [
      "dexterity"
    ],
    "areaTags": [
      "Y"
    ]
  },
  {
    "name": "Conjure Woodland Beings",
    "source": "PHB",
    "page": 226,
    "srd": true,
    "level": 4,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "one holly berry per creature summoned"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You summon fey creatures that appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears:",
      {
        "type": "list",
        "items": [
          "One {@filter fey creature of challenge rating 2 or lower|bestiary|challenge rating=[&0;&2]|type=fey|miscellaneous=!swarm}",
          "Two {@filter fey creatures of challenge rating 1 or lower|bestiary|challenge rating=[&0;&1]|type=fey|miscellaneous=!swarm}",
          "Four {@filter fey creatures of challenge rating 1/2 or lower|bestiary|challenge rating=[&0;&1/2]|type=fey|miscellaneous=!swarm}",
          "Eight {@filter fey creatures of challenge rating 1/4 or lower|bestiary|challenge rating=[&0;&1/4]|type=fey|miscellaneous=!swarm}"
        ]
      },
      "A summoned creature disappears when it drops to 0 hit points or when the spell ends.",
      "The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which have their own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions.",
      "The DM has the creatures' statistics."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 6th-level slot and three times as many with an 8th-level slot."
        ]
      }
    ],
    "miscTags": [
      "SGT",
      "SMN"
    ]
  },
  {
    "name": "Contact Other Plane",
    "source": "PHB",
    "page": 226,
    "srd": true,
    "level": 5,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        }
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "You mentally contact a demigod, the spirit of a long-dead sage, or some other mysterious entity from another plane. Contacting this extraplanar intelligence can strain or even break your mind. When you cast this spell, make a DC 15 Intelligence saving throw. On a failure, you take {@damage 6d6} psychic damage and are insane until you finish a long rest. While insane, you can't take actions, can't understand what other creatures say, can't read, and speak only in gibberish. A {@spell greater restoration} spell cast on you ends this effect.",
      "On a successful save, you can ask the entity up to five questions. You must ask your questions before the spell ends. The DM answers each question with one word, such as \\"yes,\\" \\"no,\\" \\"maybe,\\" \\"never,\\" \\"irrelevant,\\" or \\"unclear\\" (if the entity doesn't know the answer to the question). If a one-word answer would be misleading, the DM might instead offer a short phrase as an answer."
    ],
    "damageInflict": [
      "psychic"
    ],
    "savingThrow": [
      "intelligence"
    ]
  },
  {
    "name": "Contagion",
    "source": "PHB",
    "page": 227,
    "srd": true,
    "level": 5,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "day",
          "amount": 7
        }
      }
    ],
    "entries": [
      "Your touch inflicts disease. Make a melee spell attack against a creature within your reach. On a hit, the target is {@condition poisoned}.",
      "At the end of each of the {@condition poisoned} target's turns, the target must make a Constitution saving throw. If the target succeeds on three of these saves, it is no longer {@condition poisoned}, and the spell ends. If the target fails three of these saves, the target is no longer {@condition poisoned}, but choose one of the diseases below. The target is subjected to the chosen disease for the spell's duration.",
      "Since this spell induces a natural disease in its target, any effect that removes a disease or otherwise ameliorates a disease's effects apply to it.",
      {
        "type": "entries",
        "name": "Blinding Sickness",
        "entries": [
          "Pain grips the creature's mind, and its eyes turn milky white. The creature has disadvantage on Wisdom checks and Wisdom saving throws and is {@condition blinded}."
        ]
      },
      {
        "type": "entries",
        "name": "Filth Fever",
        "entries": [
          "A raging fever sweeps through the creature's body. The creature has disadvantage on Strength checks, Strength saving throws, and attack rolls that use Strength."
        ]
      },
      {
        "type": "entries",
        "name": "Flesh Rot",
        "entries": [
          "The creature's flesh decays. The creature has disadvantage on Charisma checks and vulnerability to all damage."
        ]
      },
      {
        "type": "entries",
        "name": "Mindfire",
        "entries": [
          "The creature's mind becomes feverish. The creature has disadvantage on Intelligence checks and Intelligence saving throws, and the creature behaves as if under the effects of the {@spell confusion} spell during combat."
        ]
      },
      {
        "type": "entries",
        "name": "Seizure",
        "entries": [
          "The creature is overcome with shaking. The creature has disadvantage on Dexterity checks, Dexterity saving throws, and attack rolls that use Dexterity."
        ]
      },
      {
        "type": "entries",
        "name": "Slimy Doom",
        "entries": [
          "The creature begins to bleed uncontrollably. The creature has disadvantage on Constitution checks and Constitution saving throws. In addition, whenever the creature takes damage, it is {@condition stunned} until the end of its next turn."
        ]
      }
    ],
    "conditionInflict": [
      "blinded",
      "stunned",
      "poisoned"
    ],
    "spellAttack": [
      "M"
    ],
    "savingThrow": [
      "constitution"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Contingency",
    "source": "PHB",
    "page": 227,
    "srd": true,
    "level": 6,
    "school": "V",
    "time": [
      {
        "number": 10,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a statuette of yourself carved from ivory and decorated with gems worth at least 1,500 gp",
        "cost": 150000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "day",
          "amount": 10
        }
      }
    ],
    "entries": [
      "Choose a spell of 5th level or lower that you can cast, that has a casting time of 1 action, and that can target you. You cast that spell—called the contingent spell—as part of casting contingency, expending spell slots for both, but the contingent spell doesn't come into effect. Instead, it takes effect when a certain circumstance occurs. You describe that circumstance when you cast the two spells. For example, a contingency cast with {@spell water breathing} might stipulate that {@spell water breathing} comes into effect when you are engulfed in water or a similar liquid.",
      "The contingent spell takes effect immediately after the circumstance is met for the first time, whether or not you want it to, and then contingency ends.",
      "The contingent spell takes effect only on you, even if it can normally target others. You can use only one contingency spell at a time. If you cast this spell again, the effect of another contingency spell on you ends. Also, contingency ends on you if its material component is ever not on your person."
    ]
  },
  {
    "name": "Continual Flame",
    "source": "PHB",
    "page": 227,
    "srd": true,
    "level": 2,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "ruby dust worth 50 gp, which the spell consumes",
        "cost": 5000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "permanent",
        "ends": [
          "dispel"
        ]
      }
    ],
    "entries": [
      "A flame, equivalent in brightness to a torch, springs forth from an object that you touch. The effect looks like a regular flame, but it creates no heat and doesn't use oxygen. A continual flame can be covered or hidden but not smothered or quenched."
    ],
    "miscTags": [
      "LGT",
      "OBJ"
    ]
  },
  {
    "name": "Control Water",
    "source": "PHB",
    "page": 227,
    "srd": true,
    "level": 4,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 300
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a drop of water and a pinch of dust"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "Until the spell ends, you control any freestanding water inside an area you choose that is a cube up to 100 feet on a side. You can choose from any of the following effects when you cast this spell. As an action on your turn, you can repeat the same effect or choose a different one.",
      {
        "type": "entries",
        "name": "Flood",
        "entries": [
          "You cause the water level of all standing water in the area to rise by as much as 20 feet. If the area includes a shore, the flooding water spills over onto dry land.",
          "If you choose an area in a large body of water, you instead create a 20-foot tall wave that travels from one side of the area to the other and then crashes down. Any Huge or smaller vehicles in the wave's path are carried with it to the other side. Any Huge or smaller vehicles struck by the wave have a {@chance 25|||Capsizes!|No effect} chance of capsizing.",
          "The water level remains elevated until the spell ends or you choose a different effect. If this effect produced a wave, the wave repeats on the start of your next turn while the flood effect lasts."
        ]
      },
      {
        "type": "entries",
        "name": "Part Water",
        "entries": [
          "You cause water in the area to move apart and create a trench. The trench extends across the spell's area, and the separated water forms a wall to either side. The trench remains until the spell ends or you choose a different effect. The water then slowly fills in the trench over the course of the next round until the normal water level is restored."
        ]
      },
      {
        "type": "entries",
        "name": "Redirect Flow",
        "entries": [
          "You cause flowing water in the area to move in a direction you choose, even if the water has to flow over obstacles, up walls, or in other unlikely directions. The water in the area moves as you direct it, but once it moves beyond the spell's area, it resumes its flow based on the terrain conditions. The water continues to move in the direction you chose until the spell ends or you choose a different effect."
        ]
      },
      {
        "type": "entries",
        "name": "Whirlpool",
        "entries": [
          "This effect requires a body of water at least 50 feet square and 25 feet deep. You cause a whirlpool to form in the center of the area. The whirlpool forms a vortex that is 5 feet wide at the base, up to 50 feet wide at the top, and 25 feet tall. Any creature or object in the water and within 25 feet of the vortex is pulled 10 feet toward it. A creature can swim away from the vortex by making a Strength ({@skill Athletics}) check against your spell save DC.",
          "When a creature enters the vortex for the first time on a turn or starts its turn there, it must make a Strength saving throw. On a failed save, the creature takes {@damage 2d8} bludgeoning damage and is caught in the vortex until the spell ends. On a successful save, the creature takes half damage, and isn't caught in the vortex. A creature caught in the vortex can use its action to try to swim away from the vortex as described above, but has disadvantage on the Strength ({@skill Athletics}) check to do so.",
          "The first time each turn that an object enters the vortex, the object takes {@damage 2d8} bludgeoning damage; this damage occurs each round it remains in the vortex."
        ]
      }
    ],
    "damageInflict": [
      "bludgeoning"
    ],
    "savingThrow": [
      "strength"
    ],
    "abilityCheck": [
      "strength"
    ],
    "miscTags": [
      "FMV",
      "OBJ"
    ],
    "areaTags": [
      "N"
    ]
  },
  {
    "name": "Control Weather",
    "source": "PHB",
    "page": 228,
    "srd": true,
    "level": 8,
    "school": "T",
    "time": [
      {
        "number": 10,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "radius",
      "distance": {
        "type": "miles",
        "amount": 5
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "burning incense and bits of earth and wood mixed in water"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 8
        },
        "concentration": true
      }
    ],
    "entries": [
      "You take control of the weather within 5 miles of you for the duration. You must be outdoors to cast this spell. Moving to a place where you don't have a clear path to the sky ends the spell early.",
      "When you cast the spell, you change the current weather conditions, which are determined by the DM based on the climate and season. You can change precipitation, temperature, and wind. It takes {@dice 1d4 × 10} minutes for the new conditions to take effect. Once they do so, you can change the conditions again. When the spell ends, the weather gradually returns to normal.",
      "When you change the weather conditions, find a current condition on the following tables and change its stage by one, up or down. When changing the wind, you can change its direction.",
      {
        "type": "table",
        "caption": "Precipitation",
        "colLabels": [
          "Stage",
          "Condition"
        ],
        "colStyles": [
          "col-1 text-center",
          "col-11"
        ],
        "rows": [
          [
            "1",
            "Clear"
          ],
          [
            "2",
            "Light clouds"
          ],
          [
            "3",
            "Overcast or ground fog"
          ],
          [
            "4",
            "Rain, hail, or snow"
          ],
          [
            "5",
            "Torrential rain, driving hail, or blizzard"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "Temperature",
        "colLabels": [
          "Stage",
          "Condition"
        ],
        "colStyles": [
          "col-1 text-center",
          "col-11"
        ],
        "rows": [
          [
            "1",
            "Unbearable heat"
          ],
          [
            "2",
            "Hot"
          ],
          [
            "3",
            "Warm"
          ],
          [
            "4",
            "Cool"
          ],
          [
            "5",
            "Cold"
          ],
          [
            "6",
            "Arctic cold"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "Wind",
        "colLabels": [
          "Stage",
          "Condition"
        ],
        "colStyles": [
          "col-1 text-center",
          "col-11"
        ],
        "rows": [
          [
            "1",
            "Calm"
          ],
          [
            "2",
            "Moderate wind"
          ],
          [
            "3",
            "Strong wind"
          ],
          [
            "4",
            "Gale"
          ],
          [
            "5",
            "Storm"
          ]
        ]
      }
    ]
  },
  {
    "name": "Cordon of Arrows",
    "source": "PHB",
    "page": 228,
    "level": 2,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 5
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "four or more arrows or bolts"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 8
        }
      }
    ],
    "entries": [
      "You plant four pieces of nonmagical ammunition—{@item arrow|phb|arrows} or {@item crossbow bolt|phb|crossbow bolts}—in the ground within range and lay magic upon them to protect an area. Until the spell ends, whenever a creature other than you comes within 30 feet of the ammunition for the first time on a turn or ends its turn there, one piece of ammunition flies up to strike it. The creature must succeed on a Dexterity saving throw or take {@damage 1d6} piercing damage. The piece of ammunition is then destroyed. The spell ends when no ammunition remains.",
      "When you cast this spell, you can designate any creatures you choose, and the spell ignores them."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, the amount of ammunition that can be affected increases by two for each slot level above 2nd."
        ]
      }
    ],
    "damageInflict": [
      "piercing"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Counterspell",
    "source": "PHB",
    "page": 228,
    "srd": true,
    "basicRules": true,
    "level": 3,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "reaction",
        "condition": "which you take when you see a creature within 60 feet of you casting a spell"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a success, the creature's spell fails and has no effect."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, the interrupted spell has no effect if its level is less than or equal to the level of the spell slot you used."
        ]
      }
    ]
  },
  {
    "name": "Create Food and Water",
    "source": "PHB",
    "page": 229,
    "srd": true,
    "level": 3,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You create 45 pounds of food and 30 gallons of water on the ground or in containers within range, enough to sustain up to fifteen humanoids or five steeds for 24 hours. The food is bland but nourishing, and spoils if uneaten after 24 hours. The water is clean and doesn't go bad."
    ]
  },
  {
    "name": "Create or Destroy Water",
    "source": "PHB",
    "page": 229,
    "srd": true,
    "level": 1,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a drop of water if creating water or a few grains of sand if destroying it"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You either create or destroy water.",
      {
        "type": "entries",
        "name": "Create Water",
        "entries": [
          "You create up to 10 gallons of clean water within range in an open container. Alternatively, the water falls as rain in a 30-foot cube within range, extinguishing exposed flames in the area."
        ]
      },
      {
        "type": "entries",
        "name": "Destroy Water",
        "entries": [
          "You destroy up to 10 gallons of water in an open container within range. Alternatively, you destroy fog in a 30-foot cube within range."
        ]
      }
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, you create or destroy 10 additional gallons of water, or the size of the cube increases by 5 feet, for each slot level above 1st."
        ]
      }
    ],
    "miscTags": [
      "PRM"
    ],
    "areaTags": [
      "C"
    ]
  },
  {
    "name": "Create Undead",
    "source": "PHB",
    "page": 229,
    "srd": true,
    "level": 6,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 10
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "one clay pot filled with grave dirt, one clay pot filled with brackish water, and one 150 gp black onyx stone for each corpse",
        "cost": 15000
      }
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You can cast this spell only at night. Choose up to three corpses of Medium or Small humanoids within range. Each corpse becomes a {@creature ghoul} under your control. (The DM has game statistics for these creatures.)",
      "As a bonus action on each of your turns, you can mentally command any creature you animated with this spell if the creature is within 120 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.",
      "The creature is under your control for 24 hours, after which it stops obeying any command you have given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature before the current 24-hour period ends. This use of the spell reasserts your control over up to three creatures you have animated with this spell, rather than animating new ones."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a 7th-level spell slot, you can animate or reassert control over four {@creature ghoul||ghouls}. When you cast this spell using an 8th-level spell slot, you can animate or reassert control over five {@creature ghoul||ghouls} or two {@creature ghast||ghasts} or {@creature wight||wights}. When you cast this spell using a 9th-level spell slot, you can animate or reassert control over six {@creature ghoul||ghouls}, three {@creature ghast||ghasts} or {@creature wight||wights}, or two {@creature mummy||mummies}."
        ]
      }
    ],
    "affectsCreatureType": [
      "humanoid"
    ],
    "miscTags": [
      "PRM",
      "SMN",
      "UBA"
    ]
  },
  {
    "name": "Creation",
    "source": "PHB",
    "page": 229,
    "srd": true,
    "level": 5,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a tiny piece of matter of the same type of the item you plan to create"
    },
    "duration": [
      {
        "type": "special"
      }
    ],
    "entries": [
      "You pull wisps of shadow material from the Shadowfell to create a nonliving object of vegetable matter within range: soft goods, rope, wood, or something similar. You can also use this spell to create mineral objects such as stone, crystal, or metal. The object created must be no larger than a 5-foot cube, and the object must be of a form and material that you have seen before.",
      "The duration depends on the object's material. If the object is composed of multiple materials, use the shortest duration.",
      {
        "type": "table",
        "caption": "Creation",
        "colLabels": [
          "Material",
          "Duration"
        ],
        "colStyles": [
          "col-8",
          "col-4"
        ],
        "rows": [
          [
            "Vegetable matter",
            "1 day"
          ],
          [
            "Stone or crystal",
            "12 hours"
          ],
          [
            "Precious metals",
            "1 hour"
          ],
          [
            "Gems",
            "10 minutes"
          ],
          [
            "Adamantine or mithral",
            "1 minute"
          ]
        ]
      },
      "Using any material created by this spell as another spell's material component causes that spell to fail."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 6th level or higher, the cube increases by 5 feet for each slot level above 5th."
        ]
      }
    ]
  },
  {
    "name": "Crown of Madness",
    "source": "PHB",
    "page": 229,
    "level": 2,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "One humanoid of your choice that you can see within range must succeed on a Wisdom saving throw or become {@condition charmed} by you for the duration. While the target is {@condition charmed} in this way, a twisted crown of jagged iron appears on its head, and a madness glows in its eyes.",
      "The {@condition charmed} target must use its action before moving on each of its turns to make a melee attack against a creature other than itself that you mentally choose. The target can act normally on its turn if you choose no creature or if none are within its reach.",
      "On your subsequent turns, you must use your action to maintain control over the target, or the spell ends. Also, the target can make a Wisdom saving throw at the end of each of its turns. On a success, the spell ends."
    ],
    "conditionInflict": [
      "charmed"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "affectsCreatureType": [
      "humanoid"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Crusader's Mantle",
    "source": "PHB",
    "page": 230,
    "level": 3,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "radius",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Holy power radiates from you in an aura with a 30-foot radius, awakening boldness in friendly creatures. Until the spell ends, the aura moves with you, centered on you. While in the aura, each nonhostile creature in the aura (including you) deals an extra {@damage 1d4} radiant damage when it hits with a weapon attack."
    ],
    "damageInflict": [
      "radiant"
    ],
    "miscTags": [
      "AAD"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Cure Wounds",
    "source": "PHB",
    "page": 230,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 52
      }
    ],
    "level": 1,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "A creature you touch regains a number of hit points equal to {@dice 1d8} + your spellcasting ability modifier. This spell has no effect on undead or constructs."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, the healing increases by {@scaledice 1d8|1-9|1d8} for each slot level above 1st."
        ]
      }
    ],
    "affectsCreatureType": [
      "aberration",
      "beast",
      "celestial",
      "dragon",
      "elemental",
      "fey",
      "fiend",
      "giant",
      "humanoid",
      "monstrosity",
      "ooze",
      "plant"
    ],
    "miscTags": [
      "HL"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Dancing Lights",
    "source": "PHB",
    "page": 230,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 52
      }
    ],
    "level": 0,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a bit of phosphorus or wychwood, or a glowworm"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius.",
      "As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell's range."
    ],
    "miscTags": [
      "LGT",
      "UBA"
    ]
  },
  {
    "name": "Darkness",
    "source": "PHB",
    "page": 230,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 52
      }
    ],
    "level": 2,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "m": "bat fur and a drop of pitch or piece of coal"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "Magical darkness spreads from a point you choose within range to fill a 15-foot-radius sphere for the duration. The darkness spreads around corners. A creature with {@sense darkvision} can't see through this darkness, and nonmagical light can't illuminate it.",
      "If the point you choose is on an object you are holding or one that isn't being worn or carried, the darkness emanates from the object and moves with it. Completely covering the source of the darkness with an opaque object, such as a bowl or a helm, blocks the darkness.",
      "If any of this spell's area overlaps with an area of light created by a spell of 2nd level or lower, the spell that created the light is dispelled."
    ],
    "miscTags": [
      "OBJ"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Darkvision",
    "source": "PHB",
    "page": 230,
    "srd": true,
    "level": 2,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "either a pinch of dried carrot or an agate"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 8
        }
      }
    ],
    "entries": [
      "You touch a willing creature to grant it the ability to see in the dark. For the duration, that creature has {@sense darkvision} out to a range of 60 feet."
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Daylight",
    "source": "PHB",
    "page": 230,
    "srd": true,
    "level": 3,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "entries": [
      "A 60-foot-radius sphere of light spreads out from a point you choose within range. The sphere is bright light and sheds dim light for an additional 60 feet.",
      "If you chose a point on an object you are holding or one that isn't being worn or carried, the light shines from the object and moves with it. Completely covering the affected object with an opaque object, such as a bowl or a helm, blocks the light.",
      "If any of this spell's area overlaps with an area of darkness created by a spell of 3rd level or lower, the spell that created the darkness is dispelled."
    ],
    "miscTags": [
      "LGT",
      "OBJ"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Death Ward",
    "source": "PHB",
    "page": 230,
    "srd": true,
    "basicRules": true,
    "level": 4,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 8
        }
      }
    ],
    "entries": [
      "You touch a creature and grant it a measure of protection from death.",
      "The first time the target would drop to 0 hit points as a result of taking damage, the target instead drops to 1 hit point, and the spell ends.",
      "If the spell is still in effect when the target is subjected to an effect that would kill it instantaneously without dealing damage, that effect is instead negated against the target, and the spell ends."
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Delayed Blast Fireball",
    "source": "PHB",
    "page": 230,
    "srd": true,
    "basicRules": true,
    "level": 7,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 150
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a tiny ball of bat guano and sulfur"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "A beam of yellow light flashes from your pointing finger, then condenses to linger at a chosen point within range as a glowing bead for the duration. When the spell ends, either because your {@status concentration} is broken or because you decide to end it, the bead blossoms with a low roar into an explosion of flame that spreads around corners. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes fire damage equal to the total accumulated damage on a failed save, or half as much damage on a successful one.",
      "The spell's base damage is {@damage 12d6}. If at the end of your turn the bead has not yet detonated, the damage increases by {@dice 1d6}.",
      "If the glowing bead is touched before the interval has expired, the creature touching it must make a Dexterity saving throw. On a failed save, the spell ends immediately, causing the bead to erupt in flame. On a successful save, the creature can throw the bead up to 40 feet. When it strikes a creature or a solid object, the spell ends, and the bead explodes.",
      "The fire damages objects in the area and ignites flammable objects that aren't being worn or carried."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 8th level or higher, the base damage increases by {@scaledamage 12d6|7-9|1d6} for each slot level above 7th."
        ]
      }
    ],
    "damageInflict": [
      "fire"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "OBJ"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Demiplane",
    "source": "PHB",
    "page": 231,
    "srd": true,
    "level": 8,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You create a shadowy door on a flat solid surface that you can see within range. The door is large enough to allow Medium creatures to pass through unhindered. When opened, the door leads to a demiplane that appears to be an empty room 30 feet in each dimension, made of wood or stone. When the spell ends, the door disappears, and any creatures or objects inside the demiplane remain trapped there, as the door also disappears from the other side.",
      "Each time you cast this spell, you can create a new demiplane, or have the shadowy door connect to a demiplane you created with a previous casting of this spell. Additionally, if you know the nature and contents of a demiplane created by a casting of this spell by another creature, you can have the shadowy door connect to its demiplane instead."
    ],
    "miscTags": [
      "OBJ",
      "PRM",
      "SGT"
    ]
  },
  {
    "name": "Destructive Wave",
    "source": "PHB",
    "page": 231,
    "level": 5,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "radius",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You strike the ground, creating a burst of divine energy that ripples outward from you. Each creature you choose within 30 feet of you must succeed on a Constitution saving throw or take {@damage 5d6} thunder damage, as well as {@damage 5d6} radiant or necrotic damage (your choice), and be knocked {@condition prone}. A creature that succeeds on its saving throw takes half as much damage and isn't knocked {@condition prone}."
    ],
    "damageInflict": [
      "necrotic",
      "radiant",
      "thunder"
    ],
    "conditionInflict": [
      "prone"
    ],
    "savingThrow": [
      "constitution"
    ],
    "areaTags": [
      "MT",
      "S"
    ]
  },
  {
    "name": "Detect Evil and Good",
    "source": "PHB",
    "page": 231,
    "srd": true,
    "level": 1,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "For the duration, you know if there is an aberration, celestial, elemental, fey, fiend, or undead within 30 feet of you, as well as where the creature is located. Similarly, you know if there is a place or object within 30 feet of you that has been magically consecrated or desecrated.",
      "The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."
    ],
    "affectsCreatureType": [
      "aberration",
      "celestial",
      "elemental",
      "fey",
      "fiend",
      "undead"
    ]
  },
  {
    "name": "Detect Magic",
    "source": "PHB",
    "page": 231,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 52
      }
    ],
    "level": 1,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its {@book school of magic|PHB|10|The Schools of Magic}, if any.",
      "The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."
    ]
  },
  {
    "name": "Detect Poison and Disease",
    "source": "PHB",
    "page": 231,
    "srd": true,
    "level": 1,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a yew leaf"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "For the duration, you can sense the presence and location of poisons, poisonous creatures, and diseases within 30 feet of you. You also identify the kind of poison, poisonous creature, or disease in each case.",
      "The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."
    ]
  },
  {
    "name": "Detect Thoughts",
    "source": "PHB",
    "page": 231,
    "srd": true,
    "level": 2,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a copper piece"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "For the duration, you can read the thoughts of certain creatures. When you cast the spell and as your action on each turn until the spell ends, you can focus your mind on any one creature that you can see within 30 feet of you. If the creature you choose has an Intelligence of 3 or lower or doesn't speak any language, the creature is unaffected.",
      "You initially learn the surface thoughts of the creature—what is most on its mind in that moment. As an action, you can either shift your attention to another creature's thoughts or attempt to probe deeper into the same creature's mind. If you probe deeper, the target must make a Wisdom saving throw. If it fails, you gain insight into its reasoning (if any), its emotional state, and something that looms large in its mind (such as something it worries over, loves, or hates). If it succeeds, the spell ends. Either way, the target knows that you are probing into its mind, and unless you shift your attention to another creature's thoughts, the creature can use its action on its turn to make an Intelligence check contested by your Intelligence check; if it succeeds, the spell ends.",
      "Questions verbally directed at the target creature naturally shape the course of its thoughts, so this spell is particularly effective as part of an interrogation.",
      "You can also use this spell to detect the presence of thinking creatures you can't see. When you cast the spell or as your action during the duration, you can search for thoughts within 30 feet of you. The spell can penetrate barriers, but 2 feet of rock, 2 inches of any metal other than lead, or a thin sheet of lead blocks you. You can't detect a creature with an Intelligence of 3 or lower or one that doesn't speak any language.",
      "Once you detect the presence of a creature in this way, you can read its thoughts for the rest of the duration as described above, even if you can't see it, but it must still be within range."
    ],
    "savingThrow": [
      "wisdom"
    ],
    "abilityCheck": [
      "intelligence"
    ],
    "miscTags": [
      "SGT"
    ]
  },
  {
    "name": "Dimension Door",
    "source": "PHB",
    "page": 233,
    "srd": true,
    "basicRules": true,
    "level": 4,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 500
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You teleport yourself from your current location to any other spot within range. You arrive at exactly the spot desired. It can be a place you can see, one you can visualize, or one you can describe by stating distance and direction, such as \\"200 feet straight downward\\" or \\"upward to the northwest at a 45-degree angle, 300 feet.\\"",
      "You can bring along objects as long as their weight doesn't exceed what you can carry. You can also bring one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell.",
      "If you would arrive in a place already occupied by an object or a creature, you and any creature traveling with you each take {@damage 4d6} force damage, and the spell fails to teleport you."
    ],
    "damageInflict": [
      "force"
    ],
    "miscTags": [
      "TP"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Disguise Self",
    "source": "PHB",
    "page": 233,
    "srd": true,
    "basicRules": true,
    "level": 1,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You make yourself—including your clothing, armor, weapons, and other belongings on your person—look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can't change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.",
      "The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair.",
      "To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence ({@skill Investigation}) check against your spell save DC."
    ],
    "abilityCheck": [
      "intelligence"
    ],
    "miscTags": [
      "SGT"
    ]
  },
  {
    "name": "Disintegrate",
    "source": "PHB",
    "page": 233,
    "srd": true,
    "basicRules": true,
    "level": 6,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a lodestone and a pinch of dust"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "A thin green ray springs from your pointing finger to a target that you can see within range. The target can be a creature, an object, or a creation of magical force, such as the wall created by {@spell wall of force}.",
      "A creature targeted by this spell must make a Dexterity saving throw. On a failed save, the target takes {@damage 10d6 + 40} force damage. The target is disintegrated if this damage leaves it with 0 hit points.",
      "A disintegrated creature and everything it is wearing and carrying, except magic items, are reduced to a pile of fine gray dust. The creature can be restored to life only by means of a {@spell true resurrection} or a {@spell wish} spell.",
      "This spell automatically disintegrates a Large or smaller nonmagical object or a creation of magical force. If the target is a Huge or larger object or creation of force, this spell disintegrates a 10-foot-cube portion of it. A magic item is unaffected by this spell."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 7th level or higher, the damage increases by {@scaledamage 10d6 + 40|6-9|3d6} for each slot level above 6th."
        ]
      }
    ],
    "damageInflict": [
      "force"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "OBJ",
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Dispel Evil and Good",
    "source": "PHB",
    "page": 233,
    "srd": true,
    "level": 5,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "holy water or powdered silver and iron"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Shimmering energy surrounds and protects you from fey, undead, and creatures originating from beyond the Material Plane. For the duration, celestials, elementals, fey, fiends, and undead have disadvantage on attack rolls against you.",
      "You can end the spell early by using either of the following special functions.",
      {
        "type": "entries",
        "name": "Break Enchantment",
        "entries": [
          "As your action, you touch a creature you can reach that is {@condition charmed}, {@condition frightened}, or possessed by a celestial, an elemental, a fey, a fiend, or an undead. The creature you touch is no longer {@condition charmed}, {@condition frightened}, or possessed by such creatures."
        ]
      },
      {
        "type": "entries",
        "name": "Dismissal",
        "entries": [
          "As your action, make a melee spell attack against a celestial, an elemental, a fey, a fiend, or an undead you can reach. On a hit, you attempt to drive the creature back to its home plane. The creature must succeed on a Charisma saving throw or be sent back to its home plane (if it isn't there already). If they aren't on their home plane, undead are sent to the Shadowfell, and fey are sent to the Feywild."
        ]
      }
    ],
    "spellAttack": [
      "M"
    ],
    "savingThrow": [
      "charisma"
    ],
    "affectsCreatureType": [
      "celestial",
      "elemental",
      "fey",
      "fiend",
      "undead"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Dispel Magic",
    "source": "PHB",
    "page": 234,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 53
      }
    ],
    "level": 3,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "Choose one creature, object, or magical effect within range. Any spell of 3rd level or lower on the target ends. For each spell of 4th level or higher on the target, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a successful check, the spell ends."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, you automatically end the effects of a spell on the target if the spell's level is equal to or less than the level of the spell slot you used."
        ]
      }
    ],
    "miscTags": [
      "OBJ"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Dissonant Whispers",
    "source": "PHB",
    "page": 234,
    "level": 1,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You whisper a discordant melody that only one creature of your choice within range can hear, wracking it with terrible pain. The target must make a Wisdom saving throw. On a failed save, it takes {@damage 3d6} psychic damage and must immediately use its reaction, if available, to move as far as its speed allows away from you. The creature doesn't move into obviously dangerous ground, such as a fire or a pit. On a successful save, the target takes half as much damage and doesn't have to move away. A {@condition deafened} creature automatically succeeds on the save."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by {@scaledamage 3d6|1-9|1d6} for each slot level above 1st."
        ]
      }
    ],
    "damageInflict": [
      "psychic"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Divination",
    "source": "PHB",
    "page": 234,
    "srd": true,
    "basicRules": true,
    "level": 4,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "incense and a sacrificial offering appropriate to your religion, together worth at least 25 gp, which the spell consumes",
        "cost": 2500,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "Your magic and an offering put you in contact with a god or a god's servants. You ask a single question concerning a specific goal, event, or activity to occur within 7 days. The DM offers a truthful reply. The reply might be a short phrase, a cryptic rhyme, or an omen.",
      "The spell doesn't take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion.",
      "If you cast the spell two or more times before finishing your next long rest, there is a cumulative {@chance 25|||Random reading!|Regular reading} chance for each casting after the first that you get a random reading. The DM makes this roll in secret."
    ]
  },
  {
    "name": "Divine Favor",
    "source": "PHB",
    "page": 234,
    "srd": true,
    "level": 1,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Your prayer empowers you with divine radiance. Until the spell ends, your weapon attacks deal an extra {@damage 1d4} radiant damage on a hit."
    ],
    "damageInflict": [
      "radiant"
    ],
    "miscTags": [
      "AAD"
    ]
  },
  {
    "name": "Divine Word",
    "source": "PHB",
    "page": 234,
    "srd": true,
    "level": 7,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You utter a divine word, imbued with the power that shaped the world at the dawn of creation. Choose any number of creatures you can see within range. Each creature that can hear you must make a Charisma saving throw. On a failed save, a creature suffers an effect based on its current hit points:",
      {
        "type": "list",
        "items": [
          "50 hit points or fewer: {@condition deafened} for 1 minute",
          "40 hit points or fewer: {@condition deafened} and {@condition blinded} for 10 minutes",
          "30 hit points or fewer: {@condition blinded}, {@condition deafened}, and {@condition stunned} for 1 hour",
          "20 hit points or fewer: killed instantly"
        ]
      },
      "Regardless of its current hit points, a celestial, an elemental, a fey, or a fiend that fails its save is forced back to its plane of origin (if it isn't there already) and can't return to your current plane for 24 hours by any means short of a {@spell wish} spell."
    ],
    "conditionInflict": [
      "blinded",
      "deafened",
      "stunned"
    ],
    "savingThrow": [
      "charisma"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Dominate Beast",
    "source": "PHB",
    "page": 234,
    "srd": true,
    "level": 4,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You attempt to beguile a beast that you can see within range. It must succeed on a Wisdom saving throw or be {@condition charmed} by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.",
      "While the beast is {@condition charmed}, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as \\"Attack that creature,\\" \\"Run over there,\\" or \\"Fetch that object.\\" If the creature completes the order and doesn't receive further direction from you, it defends and preserves itself to the best of its ability.",
      "You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well.",
      "Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell with a 5th-level spell slot, the duration is {@status concentration}, up to 10 minutes. When you use a 6th-level spell slot, the duration is {@status concentration}, up to 1 hour. When you use a spell slot of 7th level or higher, the duration is {@status concentration}, up to 8 hours."
        ]
      }
    ],
    "conditionInflict": [
      "charmed"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "affectsCreatureType": [
      "beast"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Dominate Monster",
    "source": "PHB",
    "page": 235,
    "srd": true,
    "basicRules": true,
    "level": 8,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You attempt to beguile a creature that you can see within range. It must succeed on a Wisdom saving throw or be {@condition charmed} by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.",
      "While the creature is {@condition charmed}, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as \\"Attack that creature,\\" \\"Run over there,\\" or \\"Fetch that object.\\" If the creature completes the order and doesn't receive further direction from you, it defends and preserves itself to the best of its ability.",
      "You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well.",
      "Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell with a 9th-level spell slot, the duration is {@status concentration}, up to 8 hours."
        ]
      }
    ],
    "conditionInflict": [
      "charmed"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Dominate Person",
    "source": "PHB",
    "page": 235,
    "srd": true,
    "basicRules": true,
    "level": 5,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You attempt to beguile a humanoid that you can see within range. It must succeed on a Wisdom saving throw or be {@condition charmed} by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.",
      "While the target is {@condition charmed}, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as \\"Attack that creature,\\" \\"Run over there,\\" or \\"Fetch that object.\\" If the creature completes the order and doesn't receive further direction from you, it defends and preserves itself to the best of its ability.",
      "You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time you can also cause the creature to use a reaction, but this requires you to use your own reaction as well.",
      "Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a 6th-level spell slot, the duration is {@status concentration}, up to 10 minutes. When you use a 7th-level spell slot, the duration is {@status concentration}, up to 1 hour. When you use a spell slot of 8th level or higher, the duration is {@status concentration}, up to 8 hours."
        ]
      }
    ],
    "conditionInflict": [
      "charmed"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "affectsCreatureType": [
      "humanoid"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Drawmij's Instant Summons",
    "source": "PHB",
    "page": 235,
    "srd": "Instant Summons",
    "level": 6,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a sapphire worth 1,000 gp",
        "cost": 100000
      }
    },
    "duration": [
      {
        "type": "permanent",
        "ends": [
          "dispel"
        ]
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "You touch an object weighing 10 pounds or less whose longest dimension is 6 feet or less. The spell leaves an invisible mark on its surface and invisibly inscribes the name of the item on the sapphire you use as the material component. Each time you cast this spell, you must use a different sapphire.",
      "At any time thereafter, you can use your action to speak the item's name and crush the sapphire. The item instantly appears in your hand regardless of physical or planar distances, and the spell ends.",
      "If another creature is holding or carrying the item, crushing the sapphire doesn't transport the item to you, but instead you learn who the creature possessing the object is and roughly where that creature is located at that moment.",
      "{@spell Dispel magic} or a similar effect successfully applied to the sapphire ends this spell's effect."
    ],
    "miscTags": [
      "OBJ"
    ]
  },
  {
    "name": "Dream",
    "source": "PHB",
    "page": 236,
    "srd": true,
    "basicRules": true,
    "level": 5,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "special"
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a handful of sand, a dab of ink, and a writing quill plucked from a sleeping bird"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 8
        }
      }
    ],
    "entries": [
      "This spell shapes a creature's dreams. Choose a creature known to you as the target of this spell. The target must be on the same plane of existence as you. Creatures that don't sleep, such as elves, can't be contacted by this spell. You, or a willing creature you touch, enters a trance state, acting as a messenger. While in the trance, the messenger is aware of his or her surroundings, but can't take actions or move.",
      "If the target is asleep, the messenger appears in the target's dreams and can converse with the target as long as it remains asleep, through the duration of the spell. The messenger can also shape the environment of the dream, creating landscapes, objects, and other images. The messenger can emerge from the trance at any time, ending the effect of the spell early. The target recalls the dream perfectly upon waking. If the target is awake when you cast the spell, the messenger knows it, and can either end the trance (and the spell) or wait for the target to fall asleep, at which point the messenger appears in the target's dreams.",
      "You can make the messenger appear monstrous and terrifying to the target. If you do, the messenger can deliver a message of no more than ten words and then the target must make a Wisdom saving throw. On a failed save, echoes of the phantasmal monstrosity spawn a nightmare that lasts the duration of the target's sleep and prevents the target from gaining any benefit from that rest. In addition, when the target wakes up, it takes {@damage 3d6} psychic damage.",
      "If you have a body part, lock of hair, clipping from a nail, or similar portion of the target's body, the target makes its saving throw with disadvantage."
    ],
    "damageInflict": [
      "psychic"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Druidcraft",
    "source": "PHB",
    "page": 236,
    "srd": true,
    "level": 0,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "Whispering to the spirits of nature, you create one of the following effects within range:",
      {
        "type": "list",
        "items": [
          "You create a tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. The effect might manifest as a golden orb for clear skies, a cloud for rain, falling snowflakes for snow, and so on. This effect persists for 1 round.",
          "You instantly make a flower blossom, a seed pod open, or a leaf bud bloom.",
          "You create an instantaneous, harmless sensory effect, such as falling leaves, a puff of wind, the sound of a small animal, or the faint odor of skunk. The effect must fit in a 5-foot cube.",
          "You instantly light or snuff out a candle, a torch, or a small campfire."
        ]
      }
    ]
  },
  {
    "name": "Earthquake",
    "source": "PHB",
    "page": 236,
    "srd": true,
    "basicRules": true,
    "level": 8,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 500
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a pinch of dirt, a piece of rock, and a lump of clay"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You create a seismic disturbance at a point on the ground that you can see within range. For the duration, an intense tremor rips through the ground in a 100-foot-radius circle centered on that point and shakes creatures and structures in contact with the ground in that area.",
      "The ground in the area becomes {@quickref difficult terrain||3}. Each creature on the ground that is {@status concentration||concentrating} must make a Constitution saving throw. On a failed save, the creature's {@status concentration} is broken.",
      "When you cast this spell and at the end of each turn you spend {@status concentration||concentrating} on it, each creature on the ground in the area must make a Dexterity saving throw. On a failed save, the creature is knocked {@condition prone}.",
      "This spell can have additional effects depending on the terrain in the area, as determined by the DM.",
      {
        "type": "entries",
        "name": "Fissures",
        "entries": [
          "Fissures open throughout the spell's area at the start of your next turn after you cast the spell. A total of {@dice 1d6} such fissures open in locations chosen by the DM. Each is {@dice 1d10 × 10} feet deep, 10 feet wide, and extends from one edge of the spell's area to the opposite side. A creature standing on a spot where a fissure opens must succeed on a Dexterity saving throw or fall in. A creature that successfully saves moves with the fissure's edge as it opens.",
          "A fissure that opens beneath a structure causes it to automatically collapse (see below)."
        ]
      },
      {
        "type": "entries",
        "name": "Structures",
        "entries": [
          "The tremor deals 50 bludgeoning damage to any structure in contact with the ground in the area when you cast the spell and at the start of each of your turns until the spell ends. If a structure drops to 0 hit points, it collapses and potentially damages nearby creatures. A creature within half the distance of a structure's height must make a Dexterity saving throw. On a failed save, the creature takes {@damage 5d6} bludgeoning damage, is knocked {@condition prone}, and is buried in the rubble, requiring a DC 20 Strength ({@skill Athletics}) check as an action to escape. The DM can adjust the DC higher or lower, depending on the nature of the rubble. On a successful save, the creature takes half as much damage and doesn't fall {@condition prone} or become buried."
        ]
      }
    ],
    "damageInflict": [
      "bludgeoning"
    ],
    "conditionInflict": [
      "prone"
    ],
    "savingThrow": [
      "constitution",
      "dexterity"
    ],
    "abilityCheck": [
      "strength"
    ],
    "miscTags": [
      "DFT",
      "SGT"
    ],
    "areaTags": [
      "R"
    ]
  },
  {
    "name": "Eldritch Blast",
    "source": "PHB",
    "page": 237,
    "srd": true,
    "basicRules": true,
    "level": 0,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes {@damage 1d10} force damage.",
      "The spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam."
    ],
    "damageInflict": [
      "force"
    ],
    "spellAttack": [
      "R"
    ],
    "miscTags": [
      "SCL"
    ],
    "areaTags": [
      "MT",
      "ST"
    ]
  },
  {
    "name": "Elemental Weapon",
    "source": "PHB",
    "page": 237,
    "level": 3,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "A nonmagical weapon you touch becomes a magic weapon. Choose one of the following damage types: acid, cold, fire, lightning, or thunder. For the duration, the weapon has a +1 bonus to attack rolls and deals an extra {@damage 1d4} damage of the chosen type when it hits."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 5th or 6th level, the bonus to attack rolls increases to +2 and the extra damage increases to {@scaledamage 1d4|3-9|2d4}. When you use a spell slot of 7th level or higher, the bonus increases to +3 and the extra damage increases to {@scaledamage 1d4|3-9|3d4}."
        ]
      }
    ],
    "damageInflict": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder"
    ],
    "miscTags": [
      "AAD"
    ]
  },
  {
    "name": "Enhance Ability",
    "source": "PHB",
    "page": 237,
    "srd": true,
    "level": 2,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "fur or a feather from a beast"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You touch a creature and bestow upon it a magical enhancement. Choose one of the following effects; the target gains that effect until the spell ends.",
      {
        "type": "entries",
        "name": "Bear's Endurance",
        "entries": [
          "The target has advantage on Constitution checks. It also gains {@dice 2d6} temporary hit points, which are lost when the spell ends."
        ]
      },
      {
        "type": "entries",
        "name": "Bull's Strength",
        "entries": [
          "The target has advantage on Strength checks, and his or her carrying capacity doubles."
        ]
      },
      {
        "type": "entries",
        "name": "Cat's Grace",
        "entries": [
          "The target has advantage on Dexterity checks. It also doesn't take damage from falling 20 feet or less if it isn't {@condition incapacitated}."
        ]
      },
      {
        "type": "entries",
        "name": "Eagle's Splendor",
        "entries": [
          "The target has advantage on Charisma checks."
        ]
      },
      {
        "type": "entries",
        "name": "Fox's Cunning",
        "entries": [
          "The target has advantage on Intelligence checks."
        ]
      },
      {
        "type": "entries",
        "name": "Owl's Wisdom",
        "entries": [
          "The target has advantage on Wisdom checks."
        ]
      }
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
        ]
      }
    ],
    "miscTags": [
      "ADV",
      "THP"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Enlarge/Reduce",
    "source": "PHB",
    "page": 237,
    "srd": true,
    "level": 2,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a pinch of powdered iron"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You cause a creature or an object you can see within range to grow larger or smaller for the duration. Choose either a creature or an object that is neither worn nor carried. If the target is unwilling, it can make a Constitution saving throw. On a success, the spell has no effect.",
      "If the target is a creature, everything it is wearing and carrying changes size with it. Any item dropped by an affected creature returns to normal size at once.",
      {
        "name": "Enlarge",
        "type": "entries",
        "entries": [
          "The target's size doubles in all dimensions, and its weight is multiplied by eight. This growth increases its size by one category—from Medium to Large, for example. If there isn't enough room for the target to double its size, the creature or object attains the maximum possible size in the space available. Until the spell ends, the target also has advantage on Strength checks and Strength saving throws. The target's weapons also grow to match its new size. While these weapons are enlarged, the target's attacks with them deal {@damage 1d4} extra damage."
        ]
      },
      {
        "name": "Reduce",
        "type": "entries",
        "entries": [
          "The target's size is halved in all dimensions, and its weight is reduced to one-eighth of normal. This reduction decreases its size by one category—from Medium to Small, for example. Until the spell ends, the target also has disadvantage on Strength checks and Strength saving throws. The target's weapons also shrink to match its new size. While these weapons are reduced, the target's attacks with them deal {@damage 1d4} less damage (this can't reduce the damage below 1)."
        ]
      }
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "ADV",
      "OBJ",
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Ensnaring Strike",
    "source": "PHB",
    "page": 237,
    "level": 1,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "The next time you hit a creature with a weapon attack before this spell ends, a writhing mass of thorny vines appears at the point of impact, and the target must succeed on a Strength saving throw or be {@condition restrained} by the magical vines until the spell ends. A Large or larger creature has advantage on this saving throw. If the target succeeds on the save, the vines shrivel away.",
      "While {@condition restrained} by this spell, the target takes {@damage 1d6} piercing damage at the start of each of its turns. A creature {@condition restrained} by the vines or one that can touch the creature can use its action to make a Strength check against your spell save DC. On a success, the target is freed."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "If you cast this spell using a spell slot of 2nd level or higher, the damage increases by {@scaledamage 1d6|1-9|1d6} for each slot level above 1st."
        ]
      }
    ],
    "damageInflict": [
      "piercing"
    ],
    "conditionInflict": [
      "restrained"
    ],
    "savingThrow": [
      "strength"
    ],
    "abilityCheck": [
      "strength"
    ]
  },
  {
    "name": "Entangle",
    "source": "PHB",
    "page": 238,
    "srd": true,
    "level": 1,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Grasping weeds and vines sprout from the ground in a 20-foot square starting from a point within range. For the duration, these plants turn the ground in the area into {@quickref difficult terrain||3}.",
      "A creature in the area when you cast the spell must succeed on a Strength saving throw or be {@condition restrained} by the entangling plants until the spell ends. A creature {@condition restrained} by the plants can use its action to make a Strength check against your spell save DC. On a success, it frees itself.",
      "When the spell ends, the conjured plants wilt away."
    ],
    "conditionInflict": [
      "restrained"
    ],
    "savingThrow": [
      "strength"
    ],
    "abilityCheck": [
      "strength"
    ],
    "areaTags": [
      "Q"
    ]
  },
  {
    "name": "Enthrall",
    "source": "PHB",
    "page": 238,
    "srd": true,
    "level": 2,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You weave a distracting string of words, causing creatures of your choice that you can see within range and that can hear you to make a Wisdom saving throw. Any creature that can't be {@condition charmed} succeeds on this saving throw automatically, and if you or your companions are fighting a creature, it has advantage on the save. On a failed save, the target has disadvantage on Wisdom ({@skill Perception}) checks made to perceive any creature other than you until the spell ends or until the target can no longer hear you. The spell ends if you are {@condition incapacitated} or can no longer speak."
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Etherealness",
    "source": "PHB",
    "page": 238,
    "srd": true,
    "basicRules": true,
    "level": 7,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 8,
          "upTo": true
        }
      }
    ],
    "entries": [
      "You step into the border regions of the Ethereal Plane, in the area where it overlaps with your current plane. You remain in the Border Ethereal for the duration or until you use your action to dismiss the spell. During this time, you can move in any direction. If you move up or down, every foot of movement costs an extra foot. You can see and hear the plane you originated from, but everything there looks gray, and you can't see anything more than 60 feet away.",
      "While on the Ethereal Plane, you can only affect and be affected by other creatures on that plane. Creatures that aren't on the Ethereal Plane can't perceive you and can't interact with you, unless a special ability or magic has given them the ability to do so.",
      "You ignore all objects and effects that aren't on the Ethereal Plane, allowing you to move through objects you perceive on the plane you originated from.",
      "When the spell ends, you immediately return to the plane you originated from in the spot you currently occupy. If you occupy the same spot as a solid object or creature when this happens, you are immediately shunted to the nearest unoccupied space that you can occupy and take force damage equal to twice the number of feet you are moved.",
      "This spell has no effect if you cast it while you are on the Ethereal Plane or a plane that doesn't border it, such as one of the Outer Planes."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 8th level or higher, you can target up to three willing creatures (including you) for each slot level above 7th. The creatures must be within 10 feet of you when you cast the spell."
        ]
      }
    ],
    "damageInflict": [
      "force"
    ],
    "miscTags": [
      "PS",
      "SGT"
    ]
  },
  {
    "name": "Evard's Black Tentacles",
    "source": "PHB",
    "page": 238,
    "srd": "Black Tentacles",
    "level": 4,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a piece of tentacle from a giant octopus or a giant squid"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Squirming, ebony tentacles fill a 20-foot square on ground that you can see within range. For the duration, these tentacles turn the ground in the area into {@quickref difficult terrain||3}.",
      "When a creature enters the affected area for the first time on a turn or starts its turn there, the creature must succeed on a Dexterity saving throw or take {@damage 3d6} bludgeoning damage and be {@condition restrained} by the tentacles until the spell ends. A creature that starts its turn in the area and is already {@condition restrained} by the tentacles takes {@damage 3d6} bludgeoning damage.",
      "A creature {@condition restrained} by the tentacles can use its action to make a Strength or Dexterity check (its choice) against your spell save DC. On a success, it frees itself."
    ],
    "damageInflict": [
      "bludgeoning"
    ],
    "conditionInflict": [
      "restrained"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "abilityCheck": [
      "strength",
      "dexterity"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "Q"
    ]
  },
  {
    "name": "Expeditious Retreat",
    "source": "PHB",
    "page": 238,
    "srd": true,
    "level": 1,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "This spell allows you to move at an incredible pace. When you cast this spell, and then as a bonus action on each of your turns until the spell ends, you can take the {@action Dash} action."
    ],
    "miscTags": [
      "UBA"
    ]
  },
  {
    "name": "Eyebite",
    "source": "PHB",
    "page": 238,
    "srd": true,
    "level": 6,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "For the spell's duration, your eyes become an inky void imbued with dread power. One creature of your choice within 60 feet of you that you can see must succeed on a Wisdom saving throw or be affected by one of the following effects of your choice for the duration. On each of your turns until the spell ends, you can use your action to target another creature but can't target a creature again if it has succeeded on a saving throw against this casting of eyebite.",
      {
        "type": "entries",
        "name": "Asleep",
        "entries": [
          "The target falls {@condition unconscious}. It wakes up if it takes any damage or if another creature uses its action to shake the sleeper awake."
        ]
      },
      {
        "type": "entries",
        "name": "Panicked",
        "entries": [
          "The target is {@condition frightened} of you. On each of its turns, the {@condition frightened} creature must take the {@action Dash} action and move away from you by the safest and shortest available route, unless there is nowhere to move. If the target moves to a place at least 60 feet away from you where it can no longer see you, this effect ends."
        ]
      },
      {
        "type": "entries",
        "name": "Sickened",
        "entries": [
          "The target has disadvantage on attack rolls and ability checks. At the end of each of its turns, it can make another Wisdom saving throw. If it succeeds, the effect ends."
        ]
      }
    ],
    "conditionInflict": [
      "frightened",
      "unconscious"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Fabricate",
    "source": "PHB",
    "page": 239,
    "srd": true,
    "level": 4,
    "school": "T",
    "time": [
      {
        "number": 10,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You convert raw materials into products of the same material. For example, you can fabricate a wooden bridge from a clump of trees, a rope from a patch of hemp, and clothes from flax or wool.",
      "Choose raw materials that you can see within range. You can fabricate a Large or smaller object (contained within a 10-foot cube, or eight connected 5-foot cubes), given a sufficient quantity of raw material. If you are working with metal, stone, or another mineral substance, however, the fabricated object can be no larger than Medium (contained within a single 5-foot cube). The quality of objects made by the spell is commensurate with the quality of the raw materials.",
      "Creatures or magic items can't be created or transmuted by this spell. You also can't use it to create items that ordinarily require a high degree of craftsmanship, such as jewelry, weapons, glass, or armor, unless you have proficiency with the type of artisan's tools used to craft such objects."
    ],
    "miscTags": [
      "OBJ",
      "PRM",
      "SGT"
    ]
  },
  {
    "name": "Faerie Fire",
    "source": "PHB",
    "page": 239,
    "srd": true,
    "basicRules": true,
    "level": 1,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius.",
      "Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being {@condition invisible}."
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "ADV",
      "LGT"
    ],
    "areaTags": [
      "C"
    ]
  },
  {
    "name": "False Life",
    "source": "PHB",
    "page": 239,
    "srd": true,
    "level": 1,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a small amount of alcohol or distilled spirits"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "entries": [
      "Bolstering yourself with a necromantic facsimile of life, you gain {@dice 1d4 + 4} temporary hit points for the duration."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, you gain 5 additional temporary hit points for each slot level above 1st."
        ]
      }
    ],
    "miscTags": [
      "THP"
    ]
  },
  {
    "name": "Fear",
    "source": "PHB",
    "page": 239,
    "srd": true,
    "level": 3,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "cone",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a white feather or the heart of a hen"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You project a phantasmal image of a creature's worst fears. Each creature in a 30-foot cone must succeed on a Wisdom saving throw or drop whatever it is holding and become {@condition frightened} for the duration.",
      "While {@condition frightened} by this spell, a creature must take the {@action Dash} action and move away from you by the safest available route on each of its turns, unless there is nowhere to move. If the creature ends its turn in a location where it doesn't have line of sight to you, the creature can make a Wisdom saving throw. On a successful save, the spell ends for that creature."
    ],
    "conditionInflict": [
      "frightened"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "areaTags": [
      "N"
    ]
  },
  {
    "name": "Feather Fall",
    "source": "PHB",
    "page": 239,
    "srd": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 53
      }
    ],
    "level": 1,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "reaction",
        "condition": "which you take when you or a creature within 60 feet of you falls"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "m": "a small feather or a piece of down"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        }
      }
    ],
    "entries": [
      "Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature."
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Feeblemind",
    "source": "PHB",
    "page": 239,
    "srd": true,
    "level": 8,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 150
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a handful of clay, crystal, glass, or mineral spheres"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You blast the mind of a creature that you can see within range, attempting to shatter its intellect and personality. The target takes {@damage 4d6} psychic damage and must make an Intelligence saving throw.",
      "On a failed save, the creature's Intelligence and Charisma scores become 1. The creature can't cast spells, activate magic items, understand language, or communicate in any intelligible way. The creature can, however, identify its friends, follow them, and even protect them.",
      "At the end of every 30 days, the creature can repeat its saving throw against this spell. If it succeeds on its saving throw, the spell ends.",
      "The spell can also be ended by {@spell greater restoration}, {@spell heal}, or {@spell wish}."
    ],
    "damageInflict": [
      "psychic"
    ],
    "savingThrow": [
      "intelligence"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Feign Death",
    "source": "PHB",
    "page": 240,
    "level": 3,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a pinch of graveyard dirt"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "You touch a willing creature and put it into a cataleptic state that is indistinguishable from death.",
      "For the spell's duration, or until you use an action to touch the target and dismiss the spell, the target appears dead to all outward inspection and to spells used to determine the target's status. The target is {@condition blinded} and {@condition incapacitated}, and its speed drops to 0. The target has resistance to all damage except psychic damage. If the target is diseased or {@condition poisoned} when you cast the spell, or becomes diseased or {@condition poisoned} while under the spell's effect, the disease and poison have no effect until the spell ends."
    ],
    "damageResist": [
      "acid",
      "bludgeoning",
      "cold",
      "fire",
      "force",
      "lightning",
      "necrotic",
      "piercing",
      "poison",
      "radiant",
      "slashing",
      "thunder"
    ],
    "conditionInflict": [
      "blinded",
      "incapacitated"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Find Familiar",
    "source": "PHB",
    "page": 240,
    "srd": true,
    "level": 1,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "hour"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 10
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "10 gp worth of charcoal, incense, and herbs that must be consumed by fire in a brass brazier",
        "cost": 1000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "You gain the service of a familiar, a spirit that takes an animal form you choose: {@creature bat}, {@creature cat}, {@creature crab}, {@creature frog} (toad), {@creature hawk}, {@creature lizard}, {@creature octopus}, {@creature owl}, {@creature poisonous snake}, fish ({@creature quipper}), {@creature rat}, {@creature raven}, {@creature sea horse}, {@creature spider}, or {@creature weasel}. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of a beast.",
      "{@note Additional {@filter animal form choices|bestiary|Miscellaneous=Familiar} may be available at the DM's discretion.}",
      "Your familiar acts independently of you, but it always obeys your commands. In combat, it rolls its own initiative and acts on its own turn. A familiar can't attack, but it can take other actions as normal.",
      "When the familiar drops to 0 hit points, it disappears, leaving behind no physical form. It reappears after you cast this spell again. As an action, you can temporarily dismiss the familiar to a pocket dimension. Alternatively, you can dismiss it forever. As an action while it is temporarily dismissed, you can cause it to reappear in any unoccupied space within 30 feet of you. Whenever the familiar drops to 0 hit points or disappears into the pocket dimension, it leaves behind in its space anything it was wearing or carrying.",
      "While your familiar is within 100 feet of you, you can communicate with it telepathically. Additionally, as an action, you can see through your familiar's eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses that the familiar has. During this time, you are {@condition deafened||deaf} and {@condition blinded||blind} with regard to your own senses.",
      "You can't have more than one familiar at a time. If you cast this spell while you already have a familiar, you instead cause it to adopt a new form. Choose one of the forms from the above list. Your familiar transforms into the chosen creature.",
      "Finally, when you cast a spell with a range of touch, your familiar can deliver the spell as if it had cast the spell. Your familiar must be within 100 feet of you, and it must use its reaction to deliver the spell when you cast it. If the spell requires an attack roll, you use your attack modifier for the roll."
    ],
    "miscTags": [
      "PRM",
      "SGT",
      "SMN"
    ]
  },
  {
    "name": "Find Steed",
    "source": "PHB",
    "page": 240,
    "srd": true,
    "level": 2,
    "school": "C",
    "time": [
      {
        "number": 10,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You summon a spirit that assumes the form of an unusually intelligent, strong, and loyal steed, creating a long-lasting bond with it. Appearing in an unoccupied space within range, the steed takes on a form that you choose: a {@creature warhorse}, a {@creature pony}, a {@creature camel}, an {@creature elk}, or a {@creature mastiff}. (Your DM might allow other animals to be summoned as steeds.) The steed has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of its normal type. Additionally, if your steed has an Intelligence of 5 or less, its Intelligence becomes 6, and it gains the ability to understand one language of your choice that you speak.",
      "Your steed serves you as a mount, both in combat and out, and you have an instinctive bond with it that allows you to fight as a seamless unit. While mounted on your steed, you can make any spell you cast that targets only you also target your steed.",
      "When the steed drops to 0 hit points, it disappears, leaving behind no physical form. You can also dismiss your steed at any time as an action, causing it to disappear. In either case, casting this spell again summons the same steed, restored to its hit point maximum.",
      "While your steed is within 1 mile of you, you can communicate with each other telepathically.",
      "You can't have more than one steed bonded by this spell at a time. As an action, you can release the steed from its bond at any time, causing it to disappear."
    ],
    "miscTags": [
      "PRM",
      "SMN"
    ]
  },
  {
    "name": "Find the Path",
    "source": "PHB",
    "page": 240,
    "srd": true,
    "basicRules": true,
    "level": 6,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a set of divinatory tools—such as bones, ivory sticks, cards, teeth, or carved runes—worth 100 gp and an object from the location you wish to find",
        "cost": 10000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "day",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "This spell allows you to find the shortest, most direct physical route to a specific fixed location that you are familiar with on the same plane of existence. If you name a destination on another plane of existence, a destination that moves (such as a mobile fortress), or a destination that isn't specific (such as \\"a green dragon's lair\\"), the spell fails.",
      "For the duration, as long as you are on the same plane of existence as the destination, you know how far it is and in what direction it lies. While you are traveling there, whenever you are presented with a choice of paths along the way, you automatically determine which path is the shortest and most direct route (but not necessarily the safest route) to the destination."
    ]
  },
  {
    "name": "Find Traps",
    "source": "PHB",
    "page": 241,
    "srd": true,
    "level": 2,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You sense the presence of any trap within range that is within line of sight. A trap, for the purpose of this spell, includes anything that would inflict a sudden or unexpected effect you consider harmful or undesirable, which was specifically intended as such by its creator. Thus, the spell would sense an area affected by the {@spell alarm} spell, a {@spell glyph of warding}, or a mechanical pit trap, but it would not reveal a natural weakness in the floor, an unstable ceiling, or a hidden sinkhole.",
      "This spell merely reveals that a trap is present. You don't learn the location of each trap, but you do learn the general nature of the danger posed by a trap you sense."
    ]
  },
  {
    "name": "Finger of Death",
    "source": "PHB",
    "page": 241,
    "srd": true,
    "basicRules": true,
    "level": 7,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You send negative energy coursing through a creature that you can see within range, causing it searing pain. The target must make a Constitution saving throw. It takes {@damage 7d8 + 30} necrotic damage on a failed save, or half as much damage on a successful one.",
      "A humanoid killed by this spell rises at the start of your next turn as a {@creature zombie} that is permanently under your command, following your verbal orders to the best of its ability."
    ],
    "damageInflict": [
      "necrotic"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "PRM",
      "SGT",
      "SMN"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Fire Bolt",
    "source": "PHB",
    "page": 242,
    "srd": true,
    "basicRules": true,
    "level": 0,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes {@damage 1d10} fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried.",
      "This spell's damage increases by {@dice 1d10} when you reach 5th level ({@damage 2d10}), 11th level ({@damage 3d10}), and 17th level ({@damage 4d10})."
    ],
    "scalingLevelDice": {
      "label": "fire damage",
      "scaling": {
        "1": "1d10",
        "5": "2d10",
        "11": "3d10",
        "17": "4d10"
      }
    },
    "damageInflict": [
      "fire"
    ],
    "spellAttack": [
      "R"
    ],
    "miscTags": [
      "OBJ",
      "SCL"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Fire Shield",
    "source": "PHB",
    "page": 242,
    "srd": true,
    "level": 4,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a bit of phosphorus or a firefly"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        }
      }
    ],
    "entries": [
      "Thin and wispy flames wreathe your body for the duration, shedding bright light in a 10-foot radius and dim light for an additional 10 feet. You can end the spell early by using an action to dismiss it.",
      "The flames provide you with a warm shield or a chill shield, as you choose. The warm shield grants you resistance to cold damage, and the chill shield grants you resistance to fire damage.",
      "In addition, whenever a creature within 5 feet of you hits you with a melee attack, the shield erupts with flame. The attacker takes {@damage 2d8} fire damage from a warm shield, or {@damage 2d8} cold damage from a cold shield."
    ],
    "damageResist": [
      "cold",
      "fire"
    ],
    "damageInflict": [
      "cold",
      "fire"
    ],
    "miscTags": [
      "LGT"
    ]
  },
  {
    "name": "Fire Storm",
    "source": "PHB",
    "page": 242,
    "srd": true,
    "basicRules": true,
    "level": 7,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 150
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "A storm made up of sheets of roaring flame appears in a location you choose within range. The area of the storm consists of up to ten 10-foot cubes, which you can arrange as you wish. Each cube must have at least one face adjacent to the face of another cube. Each creature in the area must make a Dexterity saving throw. It takes {@damage 7d10} fire damage on a failed save, or half as much damage on a successful one.",
      "The fire damages objects in the area and ignites flammable objects that aren't being worn or carried. If you choose, plant life in the area is unaffected by this spell."
    ],
    "damageInflict": [
      "fire"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "OBJ"
    ],
    "areaTags": [
      "C"
    ]
  },
  {
    "name": "Fireball",
    "source": "PHB",
    "page": 241,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 53
      }
    ],
    "level": 3,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 150
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a tiny ball of bat guano and sulfur"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes {@damage 8d6} fire damage on a failed save, or half as much damage on a successful one.",
      "The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, the damage increases by {@scaledamage 8d6|3-9|1d6} for each slot level above 3rd."
        ]
      }
    ],
    "damageInflict": [
      "fire"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "OBJ"
    ],
    "areaTags": [
      "S"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Flame Blade",
    "source": "PHB",
    "page": 242,
    "srd": true,
    "level": 2,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "leaf of sumac"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "You evoke a fiery blade in your free hand. The blade is similar in size and shape to a scimitar, and it lasts for the duration. If you let go of the blade, it disappears, but you can evoke the blade again as a bonus action.",
      "You can use your action to make a melee spell attack with the fiery blade. On a hit, the target takes {@damage 3d6} fire damage.",
      "The flaming blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, the damage increases by {@scaledamage 3d6|2,4,6,8|1d6} for every two slot levels above 2nd."
        ]
      }
    ],
    "damageInflict": [
      "fire"
    ],
    "spellAttack": [
      "M"
    ],
    "miscTags": [
      "LGT",
      "UBA"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Flame Strike",
    "source": "PHB",
    "page": 242,
    "srd": true,
    "basicRules": true,
    "level": 5,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "pinch of sulfur"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "A vertical column of divine fire roars down from the heavens in a location you specify. Each creature in a 10-foot-radius, 40-foot-high cylinder centered on a point within range must make a Dexterity saving throw. A creature takes {@damage 4d6} fire damage and {@damage 4d6} radiant damage on a failed save, or half as much damage on a successful one."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 6th level or higher, the fire damage or the radiant damage (your choice) increases by {@scaledamage 4d6|5-9|1d6} for each slot level above 5th."
        ]
      }
    ],
    "damageInflict": [
      "fire",
      "radiant"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "areaTags": [
      "Y"
    ]
  },
  {
    "name": "Flaming Sphere",
    "source": "PHB",
    "page": 242,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 53
      }
    ],
    "level": 2,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a bit of tallow, a pinch of brimstone, and a dusting of powdered iron"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "A 5-foot-diameter sphere of fire appears in an unoccupied space of your choice within range and lasts for the duration. Any creature that ends its turn within 5 feet of the sphere must make a Dexterity saving throw. The creature takes {@damage 2d6} fire damage on a failed save, or half as much damage on a successful one.",
      "As a bonus action, you can move the sphere up to 30 feet. If you ram the sphere into a creature, that creature must make the saving throw against the sphere's damage, and the sphere stops moving this turn.",
      "When you move the sphere, you can direct it over barriers up to 5 feet tall and jump it across pits up to 10 feet wide. The sphere ignites flammable objects not being worn or carried, and it sheds bright light in a 20-foot radius and dim light for an additional 20 feet."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by {@scaledamage 2d6|2-9|1d6} for each slot level above 2nd."
        ]
      }
    ],
    "damageInflict": [
      "fire"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "LGT",
      "OBJ",
      "UBA"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Flesh to Stone",
    "source": "PHB",
    "page": 243,
    "srd": true,
    "level": 6,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a pinch of lime, water, and earth"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You attempt to turn one creature that you can see within range into stone. If the target's body is made of flesh, the creature must make a Constitution saving throw. On a failed save, it is {@condition restrained} as its flesh begins to harden. On a successful save, the creature isn't affected.",
      "A creature {@condition restrained} by this spell must make another Constitution saving throw at the end of each of its turns. If it successfully saves against this spell three times, the spell ends. If it fails its saves three times, it is turned to stone and subjected to the {@condition petrified} condition for the duration. The successes and failures don't need to be consecutive; keep track of both until the target collects three of a kind.",
      "If the creature is physically broken while {@condition petrified}, it suffers from similar deformities if it reverts to its original state.",
      "If you maintain your {@status concentration} on this spell for the entire possible duration, the creature is turned to stone until the effect is removed."
    ],
    "conditionInflict": [
      "petrified",
      "restrained"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "PRM",
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Fly",
    "source": "PHB",
    "page": 243,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 54
      }
    ],
    "level": 3,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a wing feather from any bird"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "You touch a willing creature. The target gains a flying speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd."
        ]
      }
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Fog Cloud",
    "source": "PHB",
    "page": 243,
    "srd": true,
    "level": 1,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is {@quickref Vision and Light|PHB|2||heavily obscured}. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, the radius of the fog increases by 20 feet for each slot level above 1st."
        ]
      }
    ],
    "miscTags": [
      "OBS"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Forbiddance",
    "source": "PHB",
    "page": 243,
    "srd": true,
    "level": 6,
    "school": "A",
    "time": [
      {
        "number": 10,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a sprinkling of holy water, rare incense, and powdered ruby worth at least 1,000 gp",
        "cost": 100000,
        "consume": "optional"
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "day",
          "amount": 1
        }
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "You create a ward against magical travel that protects up to 40,000 square feet of floor space to a height of 30 feet above the floor. For the duration, creatures can't teleport into the area or use portals, such as those created by the {@spell gate} spell, to enter the area. The spell proofs the area against planar travel, and therefore prevents creatures from accessing the area by way of the Astral Plane, Ethereal Plane, Feywild, Shadowfell, or the {@spell plane shift} spell.",
      "In addition, the spell damages types of creatures that you choose when you cast it. Choose one or more of the following: celestials, elementals, fey, fiends, and undead. When a chosen creature enters the spell's area for the first time on a turn or starts its turn there, the creature takes {@damage 5d10} radiant or necrotic damage (your choice when you cast this spell).",
      "When you cast this spell, you can designate a password. A creature that speaks the password as it enters the area takes no damage from the spell.",
      "The spell's area can't overlap with the area of another forbiddance spell. If you cast forbiddance every day for 30 days in the same location, the spell lasts until it is dispelled, and the material components are consumed on the last casting."
    ],
    "damageInflict": [
      "necrotic",
      "radiant"
    ],
    "affectsCreatureType": [
      "celestial",
      "elemental",
      "fey",
      "fiend",
      "undead"
    ],
    "miscTags": [
      "PIR",
      "PRM"
    ]
  },
  {
    "name": "Forcecage",
    "source": "PHB",
    "page": 243,
    "srd": true,
    "level": 7,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 100
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "ruby dust worth 1,500 gp",
        "cost": 150000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "entries": [
      "An immobile, invisible, cube-shaped prison composed of magical force springs into existence around an area you choose within range. The prison can be a cage or a solid box as you choose.",
      "A prison in the shape of a cage can be up to 20 feet on a side and is made from 1/2-inch diameter bars spaced 1/2 inch apart.",
      "A prison in the shape of a box can be up to 10 feet on a side, creating a solid barrier that prevents any matter from passing through it and blocking any spells cast into or out from the area.",
      "When you cast the spell, any creature that is completely inside the cage's area is trapped. Creatures only partially within the area, or those too large to fit inside the area, are pushed away from the center of the area until they are completely outside the area.",
      "A creature inside the cage can't leave it by nonmagical means. If the creature tries to use teleportation or interplanar travel to leave the cage, it must first make a Charisma saving throw. On a success, the creature can use that magic to exit the cage. On a failure, the creature can't exit the cage and wastes the use of the spell or effect. The cage also extends into the Ethereal Plane, blocking ethereal travel.",
      "This spell can't be dispelled by {@spell dispel magic}."
    ],
    "savingThrow": [
      "charisma"
    ],
    "areaTags": [
      "C"
    ]
  },
  {
    "name": "Foresight",
    "source": "PHB",
    "page": 244,
    "srd": true,
    "basicRules": true,
    "level": 9,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a hummingbird feather"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 8
        }
      }
    ],
    "entries": [
      "You touch a willing creature and bestow a limited ability to see into the immediate future. For the duration, the target can't be {@status surprised} and has advantage on attack rolls, ability checks, and saving throws. Additionally, other creatures have disadvantage on attack rolls against the target for the duration.",
      "This spell immediately ends if you cast it again before its duration ends."
    ],
    "miscTags": [
      "ADV"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Freedom of Movement",
    "source": "PHB",
    "page": 244,
    "srd": true,
    "basicRules": true,
    "level": 4,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a leather strap, bound around the arm or a similar appendage"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You touch a willing creature. For the duration, the target's movement is unaffected by {@quickref difficult terrain||3}, and spells and other magical effects can neither reduce the target's speed nor cause the target to be {@condition paralyzed} or {@condition restrained}.",
      "The target can also spend 5 feet of movement to automatically escape from nonmagical restraints, such as manacles or a creature that has it {@condition grappled}. Finally, being underwater imposes no penalties on the target's movement or attacks."
    ],
    "conditionImmune": [
      "paralyzed",
      "restrained"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Friends",
    "source": "PHB",
    "page": 244,
    "level": 0,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "s": true,
      "m": "a small amount of makeup applied to the face as this spell is cast"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn't hostile toward you. When the spell ends, the creature realizes that you used magic to influence its mood and becomes hostile toward you. A creature prone to violence might attack you. Another creature might seek retribution in other ways (at the DM's discretion), depending on the nature of your interaction with it."
    ],
    "miscTags": [
      "ADV"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Gaseous Form",
    "source": "PHB",
    "page": 244,
    "srd": true,
    "level": 3,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a bit of gauze and a wisp of smoke"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You transform a willing creature you touch, along with everything it's wearing and carrying, into a misty cloud for the duration. The spell ends if the creature drops to 0 hit points. An incorporeal creature isn't affected.",
      "While in this form, the target's only method of movement is a flying speed of 10 feet. The target can enter and occupy the space of another creature. The target has resistance to nonmagical damage, and it has advantage on Strength, Dexterity, and Constitution saving throws. The target can pass through small holes, narrow openings, and even mere cracks, though it treats liquids as though they were solid surfaces. The target can't fall and remains hovering in the air even when {@condition stunned} or otherwise {@condition incapacitated}.",
      "While in the form of a misty cloud, the target can't talk or manipulate objects, and any objects it was carrying or holding can't be dropped, used, or otherwise interacted with. The target can't attack or cast spells."
    ],
    "miscTags": [
      "ADV"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Gate",
    "source": "PHB",
    "page": 244,
    "srd": true,
    "basicRules": true,
    "level": 9,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a diamond worth at least 5,000 gp",
        "cost": 500000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You conjure a portal linking an unoccupied space you can see within range to a precise location on a different plane of existence. The portal is a circular opening, which you can make 5 to 20 feet in diameter. You can orient the portal in any direction you choose. The portal lasts for the duration.",
      "The portal has a front and a back on each plane where it appears. Travel through the portal is possible only by moving through its front. Anything that does so is instantly transported to the other plane, appearing in the unoccupied space nearest to the portal.",
      "Deities and other planar rulers can prevent portals created by this spell from opening in their presence or anywhere within their domains.",
      "When you cast this spell, you can speak the name of a specific creature (a pseudonym, title, or nickname doesn't work). If that creature is on a plane other than the one you are on, the portal opens in the named creature's immediate vicinity and draws the creature through it to the nearest unoccupied space on your side of the portal. You gain no special power over the creature, and it is free to act as the DM deems appropriate. It might leave, attack you, or help you."
    ],
    "miscTags": [
      "PS",
      "SGT",
      "TP"
    ]
  },
  {
    "name": "Geas",
    "source": "PHB",
    "page": 244,
    "srd": true,
    "level": 5,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "day",
          "amount": 30
        }
      }
    ],
    "entries": [
      "You place a magical command on a creature that you can see within range, forcing it to carry out some service or refrain from some action or course of activity as you decide. If the creature can understand you, it must succeed on a Wisdom saving throw or become {@condition charmed} by you for the duration. While the creature is {@condition charmed} by you, it takes {@damage 5d10} psychic damage each time it acts in a manner directly counter to your instructions, but no more than once each day. A creature that can't understand you is unaffected by the spell.",
      "You can issue any command you choose, short of an activity that would result in certain death. Should you issue a suicidal command, the spell ends.",
      "You can end the spell early by using an action to dismiss it. A {@spell remove curse}, {@spell greater restoration}, or {@spell wish} spell also ends it."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 7th or 8th level, the duration is 1 year. When you cast this spell using a spell slot of 9th level, the spell lasts until it is ended by one of the spells mentioned above."
        ]
      }
    ],
    "damageInflict": [
      "psychic"
    ],
    "conditionInflict": [
      "charmed"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "PRM",
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Gentle Repose",
    "source": "PHB",
    "page": 245,
    "srd": true,
    "level": 2,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a pinch of salt and one copper piece placed on each of the corpse's eyes, which must remain there for the duration"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "day",
          "amount": 10
        }
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "You touch a corpse or other remains. For the duration, the target is protected from decay and can't become undead.",
      "The spell also effectively extends the time limit on raising the target from the dead, since days spent under the influence of this spell don't count against the time limit of spells such as {@spell raise dead}."
    ]
  },
  {
    "name": "Giant Insect",
    "source": "PHB",
    "page": 245,
    "srd": true,
    "level": 4,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "You transform up to ten centipedes, three spiders, five wasps, or one scorpion within range into giant versions of their natural forms for the duration. A centipede becomes a {@creature giant centipede}, a spider becomes a {@creature giant spider}, a wasp becomes a {@creature giant wasp}, and a scorpion becomes a {@creature giant scorpion}.",
      "Each creature obeys your verbal commands, and in combat, they act on your turn each round. The DM has the statistics for these creatures and resolves their actions and movement.",
      "A creature remains in its giant size for the duration, until it drops to 0 hit points, or until you use an action to dismiss the effect on it.",
      "The DM might allow you to choose different targets. For example, if you transform a bee, its giant version might have the same statistics as a {@creature giant wasp}."
    ],
    "miscTags": [
      "SMN"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Glibness",
    "source": "PHB",
    "page": 245,
    "srd": true,
    "level": 8,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "entries": [
      "Until the spell ends, when you make a Charisma check, you can replace the number you roll with a 15. Additionally, no matter what you say, magic that would determine if you are telling the truth indicates that you are being truthful."
    ]
  },
  {
    "name": "Globe of Invulnerability",
    "source": "PHB",
    "page": 245,
    "srd": true,
    "basicRules": true,
    "level": 6,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "radius",
      "distance": {
        "type": "feet",
        "amount": 10
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a glass or crystal bead that shatters when the spell ends",
        "consume": true
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "An immobile, faintly shimmering barrier springs into existence in a 10-foot radius around you and remains for the duration.",
      "Any spell of 5th level or lower cast from outside the barrier can't affect creatures or objects within it, even if the spell is cast using a higher level spell slot. Such a spell can target creatures and objects within the barrier, but the spell has no effect on them. Similarly, the area within the barrier is excluded from the areas affected by such spells."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 7th level or higher, the barrier blocks spells of one level higher for each slot level above 6th."
        ]
      }
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Glyph of Warding",
    "source": "PHB",
    "page": 245,
    "srd": true,
    "level": 3,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "hour"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "incense and powdered diamond worth at least 200 gp, which the spell consumes",
        "cost": 20000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "permanent",
        "ends": [
          "dispel",
          "trigger"
        ]
      }
    ],
    "entries": [
      "When you cast this spell, you inscribe a glyph that later unleashes a magical effect. You inscribe it either on a surface (such as a table or a section of floor or wall) or within an object that can be closed (such as a book, a scroll, or a treasure chest) to conceal the glyph. The glyph can cover an area no larger than 10 feet in diameter. If the surface or object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered.",
      "The glyph is nearly invisible and requires a successful Intelligence ({@skill Investigation}) check against your spell save DC to be found.",
      "You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, the most typical triggers include touching or standing on the glyph, removing another object covering the glyph, approaching within a certain distance of the glyph, or manipulating the object on which the glyph is inscribed. For glyphs inscribed within an object, the most common triggers include opening that object, approaching within a certain distance of the object, or seeing or reading the glyph. Once a glyph is triggered, this spell ends.",
      "You can further refine the trigger so the spell activates only under certain circumstances or according to physical characteristics (such as height or weight), creature kind (for example, the ward could be set to affect aberrations or drow), or alignment. You can also set conditions for creatures that don't trigger the glyph, such as those who say a certain password.",
      "When you inscribe the glyph, choose explosive runes or a spell glyph.",
      {
        "type": "entries",
        "name": "Explosive Runes",
        "entries": [
          "When triggered, the glyph erupts with magical energy in a 20-foot-radius sphere centered on the glyph. The sphere spreads around corners. Each creature in the area must make a Dexterity saving throw. A creature takes {@damage 5d8} acid, cold, fire, lightning, or thunder damage on a failed saving throw (your choice when you create the glyph), or half as much damage on a successful one."
        ]
      },
      {
        "type": "entries",
        "name": "Spell Glyph",
        "entries": [
          "You can store a prepared spell of 3rd level or lower in the glyph by casting it as part of creating the glyph. The spell must target a single creature or an area. The spell being stored has no immediate effect when cast in this way. When the glyph is triggered, the stored spell is cast. If the spell has a target, it targets the creature that triggered the glyph. If the spell affects an area, the area is centered on that creature. If the spell summons hostile creatures or creates harmful objects or traps, they appear as close as possible to the intruder and attack it. If the spell requires {@status concentration}, it lasts until the end of its full duration."
        ]
      }
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, the damage of an explosive runes glyph increases by {@scaledamage 5d8|3-9|1d8} for each slot level above 3rd. If you create a spell glyph, you can store any spell of up to the same level as the slot you use for the glyph of warding."
        ]
      }
    ],
    "damageInflict": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "abilityCheck": [
      "intelligence"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Goodberry",
    "source": "PHB",
    "page": 246,
    "srd": true,
    "level": 1,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a sprig of mistletoe"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "Up to ten berries appear in your hand and are infused with magic for the duration. A creature can use its action to eat one berry. Eating a berry restores 1 hit point, and the berry provides enough nourishment to sustain a creature for one day.",
      "The berries lose their potency if they have not been consumed within 24 hours of the casting of this spell."
    ],
    "miscTags": [
      "HL"
    ]
  },
  {
    "name": "Grasping Vine",
    "source": "PHB",
    "page": 246,
    "level": 4,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You conjure a vine that sprouts from the ground in an unoccupied space of your choice that you can see within range. When you cast this spell, you can direct the vine to lash out at a creature within 30 feet of it that you can see. That creature must succeed on a Dexterity saving throw or be pulled 20 feet directly toward the vine.",
      "Until the spell ends, you can direct the vine to lash out at the same creature or another one as a bonus action on each of your turns."
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "FMV",
      "SGT",
      "UBA"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Grease",
    "source": "PHB",
    "page": 246,
    "srd": true,
    "level": 1,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a bit of pork rind or butter"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        }
      }
    ],
    "entries": [
      "Slick grease covers the ground in a 10-foot square centered on a point within range and turns it into {@quickref difficult terrain||3} for the duration.",
      "When the grease appears, each creature standing in its area must succeed on a Dexterity saving throw or fall {@condition prone}. A creature that enters the area or ends its turn there must also succeed on a Dexterity saving throw or fall {@condition prone}."
    ],
    "conditionInflict": [
      "prone"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "areaTags": [
      "Q"
    ]
  },
  {
    "name": "Greater Invisibility",
    "source": "PHB",
    "page": 246,
    "srd": true,
    "basicRules": true,
    "level": 4,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You or a creature you touch becomes {@condition invisible} until the spell ends. Anything the target is wearing or carrying is {@condition invisible} as long as it is on the target's person."
    ],
    "conditionInflict": [
      "invisible"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Greater Restoration",
    "source": "PHB",
    "page": 246,
    "srd": true,
    "basicRules": true,
    "level": 5,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "diamond dust worth at least 100 gp, which the spell consumes",
        "cost": 10000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You imbue a creature you touch with positive energy to undo a debilitating effect. You can reduce the target's {@condition exhaustion} level by one, or end one of the following effects on the target:",
      {
        "type": "list",
        "items": [
          "One effect that {@condition charmed} or {@condition petrified} the target",
          "One curse, including the target's attunement to a cursed magic item",
          "Any reduction to one of the target's ability scores",
          "One effect reducing the target's hit point maximum"
        ]
      }
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Guardian of Faith",
    "source": "PHB",
    "page": 246,
    "srd": true,
    "basicRules": true,
    "level": 4,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 8
        }
      }
    ],
    "entries": [
      "A Large spectral guardian appears and hovers for the duration in an unoccupied space of your choice that you can see within range. The guardian occupies that space and is indistinct except for a gleaming sword and shield emblazoned with the symbol of your deity.",
      "Any creature hostile to you that moves to a space within 10 feet of the guardian for the first time on a turn must succeed on a Dexterity saving throw. The creature takes 20 radiant damage on a failed save, or half as much damage on a successful one. The guardian vanishes when it has dealt a total of 60 damage."
    ],
    "damageInflict": [
      "radiant"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "SGT"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Guards and Wards",
    "source": "PHB",
    "page": 248,
    "srd": true,
    "level": 6,
    "school": "A",
    "time": [
      {
        "number": 10,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "burning incense, a small measure of brimstone and oil, a knotted string, a small amount of umber hulk blood, and a small silver rod worth at least 10 gp",
        "cost": 1000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 24
        }
      }
    ],
    "entries": [
      "You create a ward that protects up to 2,500 square feet of floor space (an area 50 feet square, or one hundred 5-foot squares or twenty-five 10-foot squares). The warded area can be up to 20 feet tall, and shaped as you desire. You can ward several stories of a stronghold by dividing the area among them, as long as you can walk into each contiguous area while you are casting the spell.",
      "When you cast this spell, you can specify individuals that are unaffected by any or all of the effects that you choose. You can also specify a password that, when spoken aloud, makes the speaker immune to these effects.",
      "Guards and wards creates the following effects within the warded area.",
      {
        "type": "entries",
        "name": "Corridors",
        "entries": [
          "Fog fills all the warded corridors, making them {@quickref Vision and Light|PHB|2||heavily obscured}. In addition, at each intersection or branching passage offering a choice of direction, there is a {@chance 50|||Disoriented!|No effect} chance that a creature other than you will believe it is going in the opposite direction from the one it chooses."
        ]
      },
      {
        "type": "entries",
        "name": "Doors",
        "entries": [
          "All doors in the warded area are magically locked, as if sealed by an {@spell arcane lock} spell. In addition, you can cover up to ten doors with an illusion (equivalent to the illusory object function of the {@spell minor illusion} spell) to make them appear as plain sections of wall."
        ]
      },
      {
        "type": "entries",
        "name": "Stairs",
        "entries": [
          "Webs fill all stairs in the warded area from top to bottom, as the {@spell web} spell. These strands regrow in 10 minutes if they are burned or torn away while guards and wards lasts."
        ]
      },
      {
        "type": "entries",
        "name": "Other Spell Effect",
        "entries": [
          "You can place your choice of one of the following magical effects within the warded area of the stronghold.",
          {
            "type": "list",
            "items": [
              "Place {@spell dancing lights} in four corridors. You can designate a simple program that the lights repeat as long as guards and wards lasts.",
              "Place {@spell magic mouth} in two locations.",
              "Place {@spell stinking cloud} in two locations. The vapors appear in the places you designate; they return within 10 minutes if dispersed by wind while guards and wards lasts.",
              "Place a constant {@spell gust of wind} in one corridor or room.",
              "Place a {@spell suggestion} in one location. You select an area of up to 5 feet square, and any creature that enters or passes through the area receives the suggestion mentally."
            ]
          }
        ]
      },
      "The whole warded area radiates magic. A {@spell dispel magic} cast on a specific effect, if successful, removes only that effect.",
      "You can create a permanently guarded and warded structure by casting this spell there every day for one year."
    ],
    "miscTags": [
      "OBS",
      "PIR",
      "PRM"
    ],
    "areaTags": [
      "Q"
    ]
  },
  {
    "name": "Guidance",
    "source": "PHB",
    "page": 248,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 54
      }
    ],
    "level": 0,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You touch one willing creature. Once before the spell ends, the target can roll a {@dice d4} and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends."
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Guiding Bolt",
    "source": "PHB",
    "page": 248,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 54
      }
    ],
    "level": 1,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "round",
          "amount": 1
        }
      }
    ],
    "entries": [
      "A flash of light streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes {@damage 4d6} radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by {@scaledamage 4d6|1-9|1d6} for each slot level above 1st."
        ]
      }
    ],
    "damageInflict": [
      "radiant"
    ],
    "spellAttack": [
      "R"
    ],
    "miscTags": [
      "ADV"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Gust of Wind",
    "source": "PHB",
    "page": 248,
    "srd": true,
    "level": 2,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "line",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a legume seed"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "A line of strong wind 60 feet long and 10 feet wide blasts from you in a direction you choose for the spell's duration. Each creature that starts its turn in the line must succeed on a Strength saving throw or be pushed 15 feet away from you in a direction following the line.",
      "Any creature in the line must spend 2 feet of movement for every 1 foot it moves when moving closer to you.",
      "The gust disperses gas or vapor, and it extinguishes candles, torches, and similar unprotected flames in the area. It causes protected flames, such as those of lanterns, to dance wildly and has a {@chance 50|||Extinguished!|No effect} chance to extinguish them.",
      "As a bonus action on each of your turns before the spell ends, you can change the direction in which the line blasts from you."
    ],
    "savingThrow": [
      "strength"
    ],
    "miscTags": [
      "FMV",
      "UBA"
    ],
    "areaTags": [
      "L"
    ]
  },
  {
    "name": "Hail of Thorns",
    "source": "PHB",
    "page": 249,
    "level": 1,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "The next time you hit a creature with a ranged weapon attack before the spell ends, this spell creates a rain of thorns that sprouts from your ranged weapon or ammunition. In addition to the normal effect of the attack, the target of the attack and each creature within 5 feet of it must make a Dexterity saving throw. A creature takes {@damage 1d10} piercing damage on a failed save, or half as much damage on a successful one."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "If you cast this spell using a spell slot of 2nd level or higher, the damage increases by {@scaledamage 1d10|1-6|1d10} for each slot level above 1st (to a maximum of {@damage 6d10})."
        ]
      }
    ],
    "damageInflict": [
      "piercing"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Hallow",
    "source": "PHB",
    "page": 249,
    "srd": true,
    "level": 5,
    "school": "V",
    "time": [
      {
        "number": 24,
        "unit": "hour"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "herbs, oils, and incense worth at least 1,000 gp, which the spell consumes",
        "cost": 100000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "permanent",
        "ends": [
          "dispel"
        ]
      }
    ],
    "entries": [
      "You touch a point and infuse an area around it with holy (or unholy) power. The area can have a radius up to 60 feet, and the spell fails if the radius includes an area already under the effect a hallow spell. The affected area is subject to the following effects.",
      "First, celestials, elementals, fey, fiends, and undead can't enter the area, nor can such creatures charm, frighten, or possess creatures within it. Any creature {@condition charmed}, {@condition frightened}, or possessed by such a creature is no longer {@condition charmed}, {@condition frightened}, or possessed upon entering the area. You can exclude one or more of those types of creatures from this effect.",
      "Second, you can bind an extra effect to the area. Choose the effect from the following list, or choose an effect offered by the DM. Some of these effects apply to creatures in the area; you can designate whether the effect applies to all creatures, creatures that follow a specific deity or leader, or creatures of a specific sort, such as orcs or trolls. When a creature that would be affected enters the spell's area for the first time on a turn or starts its turn there, it can make a Charisma saving throw. On a success, the creature ignores the extra effect until it leaves the area.",
      {
        "type": "entries",
        "name": "Courage",
        "entries": [
          "Affected creatures can't be {@condition frightened} while in the area."
        ]
      },
      {
        "type": "entries",
        "name": "Darkness",
        "entries": [
          "Darkness fills the area. Normal light, as well as magical light created by spells of a lower level than the slot you used to cast this spell, can't illuminate the area."
        ]
      },
      {
        "type": "entries",
        "name": "Daylight",
        "entries": [
          "Bright light fills the area. Magical darkness created by spells of a lower level than the slot you used to cast this spell can't extinguish the light."
        ]
      },
      {
        "type": "entries",
        "name": "Energy Protection",
        "entries": [
          "Affected creatures in the area have resistance to one damage type of your choice, except for bludgeoning, piercing, or slashing."
        ]
      },
      {
        "type": "entries",
        "name": "Energy Vulnerability",
        "entries": [
          "Affected creatures in the area have vulnerability to one damage type of your choice, except for bludgeoning, piercing, or slashing."
        ]
      },
      {
        "type": "entries",
        "name": "Everlasting Rest",
        "entries": [
          "Dead bodies interred in the area can't be turned into undead."
        ]
      },
      {
        "type": "entries",
        "name": "Extradimensional Interference",
        "entries": [
          "Affected creatures can't move or travel using teleportation or by extradimensional or interplanar means."
        ]
      },
      {
        "type": "entries",
        "name": "Fear",
        "entries": [
          "Affected creatures are {@condition frightened} while in the area."
        ]
      },
      {
        "type": "entries",
        "name": "Silence",
        "entries": [
          "No sound can emanate from within the area, and no sound can reach into it."
        ]
      },
      {
        "type": "entries",
        "name": "Tongues",
        "entries": [
          "Affected creatures can communicate with any other creature in the area, even if they don't share a common language."
        ]
      }
    ],
    "damageResist": [
      "acid",
      "cold",
      "fire",
      "force",
      "lightning",
      "necrotic",
      "poison",
      "psychic",
      "radiant",
      "thunder"
    ],
    "damageVulnerable": [
      "acid",
      "cold",
      "fire",
      "force",
      "lightning",
      "necrotic",
      "poison",
      "psychic",
      "radiant",
      "thunder"
    ],
    "savingThrow": [
      "charisma"
    ],
    "miscTags": [
      "LGT"
    ]
  },
  {
    "name": "Hallucinatory Terrain",
    "source": "PHB",
    "page": 249,
    "srd": true,
    "level": 4,
    "school": "I",
    "time": [
      {
        "number": 10,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 300
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a stone, a twig, and a bit of green plant"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 24
        }
      }
    ],
    "entries": [
      "You make natural terrain in a 150-foot cube in range look, sound, and smell like some other sort of natural terrain. Thus, open fields or a road can be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road. Manufactured structures, equipment, and creatures within the area aren't changed in appearance.",
      "The tactile characteristics of the terrain are unchanged, so creatures entering the area are likely to see through the illusion. If the difference isn't obvious by touch, a creature carefully examining the illusion can attempt an Intelligence ({@skill Investigation}) check against your spell save DC to disbelieve it. A creature who discerns the illusion for what it is, sees it as a vague image superimposed on the terrain."
    ],
    "abilityCheck": [
      "intelligence"
    ],
    "areaTags": [
      "C"
    ]
  },
  {
    "name": "Harm",
    "source": "PHB",
    "page": 249,
    "srd": true,
    "basicRules": true,
    "level": 6,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You unleash a virulent disease on a creature that you can see within range. The target must make a Constitution saving throw. On a failed save, it takes {@damage 14d6} necrotic damage, or half as much damage on a successful save. The damage can't reduce the target's hit points below 1. If the target fails the saving throw, its hit point maximum is reduced for 1 hour by an amount equal to the necrotic damage it took. Any effect that removes a disease allows a creature's hit point maximum to return to normal before that time passes."
    ],
    "damageInflict": [
      "necrotic"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Haste",
    "source": "PHB",
    "page": 250,
    "srd": true,
    "level": 3,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a shaving of licorice root"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Choose a willing creature that you can see within range. Until the spell ends, the target's speed is doubled, it gains a +2 bonus to AC, it has advantage on Dexterity saving throws, and it gains an additional action on each of its turns. That action can be used only to take the {@action Attack} (one weapon attack only), {@action Dash}, {@action Disengage}, {@action Hide}, or {@action Use an Object} action.",
      "When the spell ends, the target can't move or take actions until after its next turn, as a wave of lethargy sweeps over it."
    ],
    "miscTags": [
      "ADV",
      "MAC",
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Heal",
    "source": "PHB",
    "page": 250,
    "srd": true,
    "basicRules": true,
    "level": 6,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "Choose a creature that you can see within range. A surge of positive energy washes through the creature, causing it to regain 70 hit points. This spell also ends {@condition blinded||blindness}, {@condition deafened||deafness}, and any diseases affecting the target. This spell has no effect on constructs or undead."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 7th level or higher, the amount of healing increases by 10 for each slot level above 6th."
        ]
      }
    ],
    "affectsCreatureType": [
      "aberration",
      "beast",
      "celestial",
      "dragon",
      "elemental",
      "fey",
      "fiend",
      "giant",
      "humanoid",
      "monstrosity",
      "ooze",
      "plant"
    ],
    "miscTags": [
      "HL",
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Healing Word",
    "source": "PHB",
    "page": 250,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 54
      }
    ],
    "level": 1,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "A creature of your choice that you can see within range regains hit points equal to {@dice 1d4} + your spellcasting ability modifier. This spell has no effect on undead or constructs."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, the healing increases by {@scaledice 1d4|1-9|1d4} for each slot level above 1st."
        ]
      }
    ],
    "affectsCreatureType": [
      "aberration",
      "beast",
      "celestial",
      "dragon",
      "elemental",
      "fey",
      "fiend",
      "giant",
      "humanoid",
      "monstrosity",
      "ooze",
      "plant"
    ],
    "miscTags": [
      "HL",
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Heat Metal",
    "source": "PHB",
    "page": 250,
    "srd": true,
    "level": 2,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a piece of iron and a flame"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Choose a manufactured metal object, such as a metal weapon or a suit of heavy or medium metal armor, that you can see within range. You cause the object to glow red-hot. Any creature in physical contact with the object takes {@damage 2d8} fire damage when you cast the spell. Until the spell ends, you can use a bonus action on each of your subsequent turns to cause this damage again.",
      "If a creature is holding or wearing the object and takes the damage from it, the creature must succeed on a Constitution saving throw or drop the object if it can. If it doesn't drop the object, it has disadvantage on attack rolls and ability checks until the start of your next turn."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by {@scaledamage 2d8|2-9|1d8} for each slot level above 2nd."
        ]
      }
    ],
    "damageInflict": [
      "fire"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "OBJ",
      "SGT",
      "UBA"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Hellish Rebuke",
    "source": "PHB",
    "page": 250,
    "srd": true,
    "level": 1,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "reaction",
        "condition": "which you take in response to being damaged by a creature within 60 feet of you that you can see"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes {@damage 2d10} fire damage on a failed save, or half as much damage on a successful one."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by {@scaledamage 2d10|1-9|1d10} for each slot level above 1st."
        ]
      }
    ],
    "damageInflict": [
      "fire"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Heroes' Feast",
    "source": "PHB",
    "page": 250,
    "srd": true,
    "basicRules": true,
    "level": 6,
    "school": "C",
    "time": [
      {
        "number": 10,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a gem-encrusted bowl worth at least 1,000 gp, which the spell consumes",
        "cost": 100000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You bring forth a great feast, including magnificent food and drink. The feast takes 1 hour to consume and disappears at the end of that time, and the beneficial effects don't set in until this hour is over. Up to twelve creatures can partake of the feast.",
      "A creature that partakes of the feast gains several benefits. The creature is cured of all diseases and poison, becomes immune to poison and being {@condition frightened}, and makes all Wisdom saving throws with advantage. Its hit point maximum also increases by {@dice 2d10}, and it gains the same number of hit points. These benefits last for 24 hours."
    ],
    "damageImmune": [
      "poison"
    ],
    "conditionImmune": [
      "frightened"
    ],
    "miscTags": [
      "ADV"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Heroism",
    "source": "PHB",
    "page": 250,
    "srd": true,
    "level": 1,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to being {@condition frightened} and gains temporary hit points equal to your spellcasting ability modifier at the start of each of its turns. When the spell ends, the target loses any remaining temporary hit points from this spell."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
        ]
      }
    ],
    "conditionImmune": [
      "frightened"
    ],
    "miscTags": [
      "THP"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Hex",
    "source": "PHB",
    "page": 251,
    "level": 1,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "the petrified eye of a newt"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra {@damage 1d6} necrotic damage to the target whenever you hit it with an attack. Also, choose one ability when you cast the spell. The target has disadvantage on ability checks made with the chosen ability.",
      "If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to curse a new creature.",
      "A {@spell remove curse} cast on the target ends this spell early."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your {@status concentration} on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your {@status concentration} on the spell for up to 24 hours."
        ]
      }
    ],
    "damageInflict": [
      "necrotic"
    ],
    "miscTags": [
      "SGT",
      "UBA"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Hold Monster",
    "source": "PHB",
    "page": 251,
    "srd": true,
    "level": 5,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a small, straight piece of iron"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Choose a creature that you can see within range. The target must succeed on a Wisdom saving throw or be {@condition paralyzed} for the duration. This spell has no effect on undead. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 6th level or higher, you can target one additional creature for each slot level above 5th. The creatures must be within 30 feet of each other when you target them."
        ]
      }
    ],
    "conditionInflict": [
      "paralyzed"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "affectsCreatureType": [
      "aberration",
      "beast",
      "celestial",
      "construct",
      "dragon",
      "elemental",
      "fey",
      "fiend",
      "giant",
      "humanoid",
      "monstrosity",
      "ooze",
      "plant"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Hold Person",
    "source": "PHB",
    "page": 251,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 54
      }
    ],
    "level": 2,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a small, straight piece of iron"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be {@condition paralyzed} for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet of each other when you target them."
        ]
      }
    ],
    "conditionInflict": [
      "paralyzed"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "affectsCreatureType": [
      "humanoid"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Holy Aura",
    "source": "PHB",
    "page": 251,
    "srd": true,
    "basicRules": true,
    "level": 8,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a tiny reliquary worth at least 1,000 gp containing a sacred relic, such as a scrap of cloth from a saint's robe or a piece of parchment from a religious text",
        "cost": 100000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Divine light washes out from you and coalesces in a soft radiance in a 30-foot radius around you. Creatures of your choice in that radius when you cast this spell shed dim light in a 5-foot radius and have advantage on all saving throws, and other creatures have disadvantage on attack rolls against them until the spell ends. In addition, when a fiend or an undead hits an affected creature with a melee attack, the aura flashes with brilliant light. The attacker must succeed on a Constitution saving throw or be {@condition blinded} until the spell ends."
    ],
    "conditionInflict": [
      "blinded"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "ADV",
      "LGT"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Hunger of Hadar",
    "source": "PHB",
    "page": 251,
    "level": 3,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 150
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a pickled octopus tentacle"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You open a gateway to the dark between the stars, a region infested with unknown horrors. A 20-foot-radius sphere of blackness and bitter cold appears, centered on a point within range and lasting for the duration. This void is filled with a cacophony of soft whispers and slurping noises that can be heard up to 30 feet away. No light, magical or otherwise, can illuminate the area, and creatures fully within the area are {@condition blinded}.",
      "The void creates a warp in the fabric of space, and the area is {@quickref difficult terrain||3}. Any creature that starts its turn in the area takes {@damage 2d6} cold damage. Any creature that ends its turn in the area must succeed on a Dexterity saving throw or take {@damage 2d6} acid damage as milky, otherworldly tentacles rub against it."
    ],
    "damageInflict": [
      "acid",
      "cold"
    ],
    "conditionInflict": [
      "blinded"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "DFT"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Hunter's Mark",
    "source": "PHB",
    "page": 251,
    "srd": true,
    "level": 1,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You choose a creature you can see within range and mystically mark it as your quarry. Until the spell ends, you deal an extra {@damage 1d6} damage to the target whenever you hit it with a weapon attack, and you have advantage on any Wisdom ({@skill Perception}) or Wisdom ({@skill Survival}) check you make to find it. If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to mark a new creature."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your {@status concentration} on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your {@status concentration} on the spell for up to 24 hours."
        ]
      }
    ],
    "abilityCheck": [
      "wisdom"
    ],
    "miscTags": [
      "AAD",
      "ADV",
      "SGT",
      "UBA"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Hypnotic Pattern",
    "source": "PHB",
    "page": 252,
    "srd": true,
    "level": 3,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "s": true,
      "m": "a glowing stick of incense or a crystal vial filled with phosphorescent material"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You create a twisting pattern of colors that weaves through the air inside a 30-foot cube within range. The pattern appears for a moment and vanishes. Each creature in the area who sees the pattern must make a Wisdom saving throw. On a failed save, the creature becomes {@condition charmed} for the duration. While {@condition charmed} by this spell, the creature is {@condition incapacitated} and has a speed of 0.",
      "The spell ends for an affected creature if it takes any damage or if someone else uses an action to shake the creature out of its stupor."
    ],
    "conditionInflict": [
      "charmed",
      "incapacitated"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "areaTags": [
      "C"
    ]
  },
  {
    "name": "Ice Storm",
    "source": "PHB",
    "page": 252,
    "srd": true,
    "basicRules": true,
    "level": 4,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 300
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a pinch of dust and a few drops of water"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "A hail of rock-hard ice pounds to the ground in a 20-foot-radius, 40-foot-high cylinder centered on a point within range. Each creature in the cylinder must make a Dexterity saving throw. A creature takes {@damage 2d8} bludgeoning damage and {@damage 4d6} cold damage on a failed save, or half as much damage on a successful one.",
      "Hailstones turn the storm's area of effect into {@quickref difficult terrain||3} until the end of your next turn."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 5th level or higher, the bludgeoning damage increases by {@scaledamage 2d8|4-9|1d8} for each slot level above 4th."
        ]
      }
    ],
    "damageInflict": [
      "bludgeoning",
      "cold"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "areaTags": [
      "Y"
    ]
  },
  {
    "name": "Identify",
    "source": "PHB",
    "page": 252,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 54
      }
    ],
    "level": 1,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a pearl worth at least 100 gp and an owl feather",
        "cost": 10000
      }
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it.",
      "If you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it."
    ],
    "miscTags": [
      "OBJ"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Illusory Script",
    "source": "PHB",
    "page": 252,
    "srd": true,
    "level": 1,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "s": true,
      "m": {
        "text": "a lead-based ink worth at least 10 gp, which the spell consumes",
        "cost": 1000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "day",
          "amount": 10
        }
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "You write on parchment, paper, or some other suitable writing material and imbue it with a potent illusion that lasts for the duration.",
      "To you and any creatures you designate when you cast the spell, the writing appears normal, written in your hand, and conveys whatever meaning you intended when you wrote the text. To all others, the writing appears as if it were written in an unknown or magical script that is unintelligible. Alternatively, you can cause the writing to appear to be an entirely different message, written in a different hand and language, though the language must be one you know.",
      "Should the spell be dispelled, the original script and the illusion both disappear.",
      "A creature with {@sense truesight} can read the hidden message."
    ]
  },
  {
    "name": "Imprisonment",
    "source": "PHB",
    "page": 252,
    "srd": true,
    "basicRules": true,
    "level": 9,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a vellum depiction or a carved statuette in the likeness of the target, and a special component that varies according to the version of the spell you choose, worth at least 500 gp per Hit Die of the target",
        "cost": 50000
      }
    },
    "duration": [
      {
        "type": "permanent",
        "ends": [
          "dispel"
        ]
      }
    ],
    "entries": [
      "You create a magical restraint to hold a creature that you can see within range. The target must succeed on a Wisdom saving throw or be bound by the spell; if it succeeds, it is immune to this spell if you cast it again. While affected by this spell, the creature doesn't need to breathe, eat, or drink, and it doesn't age. Divination spells can't locate or perceive the target.",
      "When you cast the spell, you choose one of the following forms of imprisonment.",
      {
        "type": "entries",
        "name": "Burial",
        "entries": [
          "The target is entombed far beneath the earth in a sphere of magical force that is just large enough to contain the target. Nothing can pass through the sphere, nor can any creature teleport or use planar travel to get into or out of it."
        ]
      },
      "The special component for this version of the spell is a small mithral orb.",
      {
        "type": "entries",
        "name": "Chaining",
        "entries": [
          "Heavy chains, firmly rooted in the ground, hold the target in place. The target is {@condition restrained} until the spell ends, and it can't move or be moved by any means until then."
        ]
      },
      "The special component for this version of the spell is a fine chain of precious metal.",
      {
        "type": "entries",
        "name": "Hedged Prison",
        "entries": [
          "The spell transports the target into a tiny demiplane that is warded against teleportation and planar travel. The demiplane can be a labyrinth, a cage, a tower, or any similar confined structure or area of your choice."
        ]
      },
      "The special component for this version of the spell is a miniature representation of the prison made from jade.",
      {
        "type": "entries",
        "name": "Minimus Containment",
        "entries": [
          "The target shrinks to a height of 1 inch and is imprisoned inside a gemstone or similar object. Light can pass through the gemstone normally (allowing the target to see out and other creatures to see in), but nothing else can pass through, even by means of teleportation or planar travel. The gemstone can't be cut or broken while the spell remains in effect."
        ]
      },
      "The special component for this version of the spell is a large, transparent gemstone, such as a corundum, diamond, or ruby.",
      {
        "type": "entries",
        "name": "Slumber",
        "entries": [
          "The target falls asleep and can't be awoken."
        ]
      },
      "The special component for this version of the spell consists of rare soporific herbs.",
      {
        "type": "entries",
        "name": "Ending the Spell",
        "entries": [
          "During the casting of the spell, in any of its versions, you can specify a condition that will cause the spell to end and release the target. The condition can be as specific or as elaborate as you choose, but the DM must agree that the condition is reasonable and has a likelihood of coming to pass. The conditions can be based on a creature's name, identity, or deity but otherwise must be based on observable actions or qualities and not based on intangibles such as level, class, or hit points."
        ]
      },
      "A {@spell dispel magic} spell can end the spell only if it is cast as a 9th-level spell, targeting either the prison or the special component used to create it.",
      "You can use a particular special component to create only one prison at a time. If you cast the spell again using the same component, the target of the first casting is immediately freed from its binding."
    ],
    "conditionInflict": [
      "restrained"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Incendiary Cloud",
    "source": "PHB",
    "page": 253,
    "srd": true,
    "level": 8,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 150
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "A swirling cloud of smoke shot through with white-hot embers appears in a 20-foot-radius sphere centered on a point within range. The cloud spreads around corners and is {@quickref Vision and Light|PHB|2||heavily obscured}. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.",
      "When the cloud appears, each creature in it must make a Dexterity saving throw. A creature takes {@damage 10d8} fire damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell's area for the first time on a turn or ends its turn there.",
      "The cloud moves 10 feet directly away from you in a direction that you choose at the start of each of your turns."
    ],
    "damageInflict": [
      "fire"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "OBS"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Inflict Wounds",
    "source": "PHB",
    "page": 253,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 55
      }
    ],
    "level": 1,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "Make a melee spell attack against a creature you can reach. On a hit, the target takes {@damage 3d10} necrotic damage."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by {@scaledamage 3d10|1-9|1d10} for each slot level above 1st."
        ]
      }
    ],
    "damageInflict": [
      "necrotic"
    ],
    "spellAttack": [
      "M"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Insect Plague",
    "source": "PHB",
    "page": 254,
    "srd": true,
    "level": 5,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 300
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a few grains of sugar, some kernels of grain, and a smear of fat"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "Swarming, biting locusts fill a 20-foot-radius sphere centered on a point you choose within range. The sphere spreads around corners. The sphere remains for the duration, and its area is {@quickref Vision and Light|PHB|2||lightly obscured}. The sphere's area is {@quickref difficult terrain||3}.",
      "When the area appears, each creature in it must make a Constitution saving throw. A creature takes {@damage 4d10} piercing damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell's area for the first time on a turn or ends its turn there."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 6th level or higher, the damage increases by {@scaledamage 4d10|5-9|1d10} for each slot level above 5th."
        ]
      }
    ],
    "damageInflict": [
      "piercing"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "DFT",
      "OBS"
    ],
    "areaTags": [
      "S"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Invisibility",
    "source": "PHB",
    "page": 254,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 55
      }
    ],
    "level": 2,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "an eyelash encased in gum arabic"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "A creature you touch becomes {@condition invisible} until the spell ends. Anything the target is wearing or carrying is {@condition invisible} as long as it is on the target's person. The spell ends for a target that attacks or casts a spell."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
        ]
      }
    ],
    "conditionInflict": [
      "invisible"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Jump",
    "source": "PHB",
    "page": 254,
    "srd": true,
    "level": 1,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a grasshopper's hind leg"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You touch a creature. The creature's {@book jump distance|phb|8|Jumping} is tripled until the spell ends."
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Knock",
    "source": "PHB",
    "page": 254,
    "srd": true,
    "basicRules": true,
    "level": 2,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "Choose an object that you can see within range. The object can be a door, a box, a {@item chest|phb}, a set of {@item manacles|phb}, a padlock, or another object that contains a mundane or magical means that prevents access.",
      "A target that is held shut by a mundane lock or that is stuck or barred becomes unlocked, unstuck, or unbarred. If the object has multiple locks, only one of them is unlocked.",
      "If you choose a target that is held shut with {@spell arcane lock}, that spell is suppressed for 10 minutes, during which time the target can be opened and shut normally.",
      "When you cast the spell, a loud knock, audible from as far away as 300 feet, emanates from the target object."
    ],
    "miscTags": [
      "OBJ",
      "SGT"
    ]
  },
  {
    "name": "Legend Lore",
    "source": "PHB",
    "page": 254,
    "srd": true,
    "level": 5,
    "school": "D",
    "time": [
      {
        "number": 10,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "incense worth at least 250 gp, which the spell consumes, and four ivory strips worth at least 50 gp each",
        "cost": 25000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "Name or describe a person, place, or object. The spell brings to your mind a brief summary of the significant lore about the thing you named. The lore might consist of current tales, forgotten stories, or even secret lore that has never been widely known. If the thing you named isn't of legendary importance, you gain no information. The more information you already have about the thing, the more precise and detailed the information you receive is.",
      "The information you learn is accurate but might be couched in figurative language. For example, if you have a mysterious magic axe on hand, the spell might yield this information: \\"Woe to the evildoer whose hand touches the axe, for even the haft slices the hand of the evil ones. Only a true Child of Stone, lover and beloved of Moradin, may awaken the true powers of the axe, and only with the sacred word Rudnogg on the lips.\\""
    ],
    "miscTags": [
      "OBJ"
    ]
  },
  {
    "name": "Leomund's Secret Chest",
    "source": "PHB",
    "page": 254,
    "srd": "Secret Chest",
    "level": 4,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "an exquisite chest, 3 feet by 2 feet by 2 feet, constructed from rare materials worth at least 5,000 gp, and a Tiny replica made from the same materials worth at least 50 gp",
        "cost": 500000
      }
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You hide a chest, and all its contents, on the Ethereal Plane. You must touch the chest and the miniature replica that serves as a material component for the spell. The chest can contain up to 12 cubic feet of nonliving material (3 feet by 2 feet by 2 feet).",
      "While the chest remains on the Ethereal Plane, you can use an action and touch the replica to recall the chest. It appears in an unoccupied space on the ground within 5 feet of you. You can send the chest back to the Ethereal Plane by using an action and touching both the chest and the replica.",
      "After 60 days, there is a cumulative {@chance 5|||Effect ends!|Effect continues} chance per day that the spell's effect ends. This effect ends if you cast this spell again, if the smaller replica chest is destroyed, or if you choose to end the spell as an action. If the spell ends and the larger chest is on the Ethereal Plane, it is irretrievably lost."
    ],
    "miscTags": [
      "PRM"
    ]
  },
  {
    "name": "Leomund's Tiny Hut",
    "source": "PHB",
    "page": 255,
    "srd": "Tiny Hut",
    "level": 3,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "hemisphere",
      "distance": {
        "type": "feet",
        "amount": 10
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a small crystal bead"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 8
        }
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "A 10-foot-radius immobile dome of force springs into existence around and above you and remains stationary for the duration. The spell ends if you leave its area.",
      "Nine creatures of Medium size or smaller can fit inside the dome with you. The spell fails if its area includes a larger creature or more than nine creatures. Creatures and objects within the dome when you cast this spell can move through it freely. All other creatures and objects are barred from passing through it. Spells and other magical effects can't extend through the dome or be cast through it. The atmosphere inside the space is comfortable and dry, regardless of the weather outside.",
      "Until the spell ends, you can command the interior to become dimly lit or dark. The dome is opaque from the outside, of any color you choose, but it is transparent from the inside."
    ],
    "areaTags": [
      "H"
    ]
  },
  {
    "name": "Lesser Restoration",
    "source": "PHB",
    "page": 255,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 55
      }
    ],
    "level": 2,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You touch a creature and can end either one disease or one condition afflicting it. The condition can be {@condition blinded}, {@condition deafened}, {@condition paralyzed}, or {@condition poisoned}."
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Levitate",
    "source": "PHB",
    "page": 255,
    "srd": true,
    "basicRules": true,
    "level": 2,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "either a small leather loop or a piece of golden wire bent into a cup shape with a long shank on one end"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "One creature or loose object of your choice that you can see within range rises vertically, up to 20 feet, and remains suspended there for the duration. The spell can levitate a target that weighs up to 500 pounds. An unwilling creature that succeeds on a Constitution saving throw is unaffected.",
      "The target can move only by pushing or pulling against a fixed object or surface within reach (such as a wall or a ceiling), which allows it to move as if it were climbing. You can change the target's altitude by up to 20 feet in either direction on your turn. If you are the target, you can move up or down as part of your move. Otherwise, you can use your action to move the target, which must remain within the spell's range.",
      "When the spell ends, the target floats gently to the ground if it is still aloft."
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "OBJ",
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Light",
    "source": "PHB",
    "page": 255,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 55
      }
    ],
    "level": 0,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "m": "a firefly or phosphorescent moss"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action.",
      "If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell."
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "LGT",
      "OBJ"
    ]
  },
  {
    "name": "Lightning Arrow",
    "source": "PHB",
    "page": 255,
    "level": 3,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "The next time you make a ranged weapon attack during the spell's duration, the weapon's ammunition, or the weapon itself if it's a thrown weapon, transforms into a bolt of lightning. Make the attack roll as normal. The target takes {@damage 4d8} lightning damage on a hit, or half as much damage on a miss, instead of the weapon's normal damage.",
      "Whether you hit or miss, each creature within 10 feet of the target must make a Dexterity saving throw. Each of these creatures takes {@damage 2d8} lightning damage on a failed save, or half as much damage on a successful one.",
      "The piece of ammunition or weapon then returns to its normal form."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, the damage for both effects of the spell increases by {@scaledamage 4d8;2d8|3-9|1d8} for each slot level above 3rd."
        ]
      }
    ],
    "damageInflict": [
      "lightning"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Lightning Bolt",
    "source": "PHB",
    "page": 255,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 56
      }
    ],
    "level": 3,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "line",
      "distance": {
        "type": "feet",
        "amount": 100
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a bit of fur and a rod of amber, crystal, or glass"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "A stroke of lightning forming a line 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes {@damage 8d6} lightning damage on a failed save, or half as much damage on a successful one.",
      "The lightning ignites flammable objects in the area that aren't being worn or carried."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, the damage increases by {@scaledamage 8d6|3-9|1d6} for each slot level above 3rd."
        ]
      }
    ],
    "damageInflict": [
      "lightning"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "OBJ"
    ],
    "areaTags": [
      "L"
    ]
  },
  {
    "name": "Locate Animals or Plants",
    "source": "PHB",
    "page": 256,
    "srd": true,
    "level": 2,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a bit of fur from a bloodhound"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "Describe or name a specific kind of beast or plant. Concentrating on the voice of nature in your surroundings, you learn the direction and distance to the closest creature or plant of that kind within 5 miles, if any are present."
    ],
    "affectsCreatureType": [
      "beast",
      "plant"
    ]
  },
  {
    "name": "Locate Creature",
    "source": "PHB",
    "page": 256,
    "srd": true,
    "basicRules": true,
    "level": 4,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a bit of fur from a bloodhound"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Describe or name a creature that is familiar to you. You sense the direction to the creature's location, as long as that creature is within 1,000 feet of you. If the creature is moving, you know the direction of its movement.",
      "The spell can locate a specific creature known to you, or the nearest creature of a specific kind (such as a human or a {@creature unicorn}), so long as you have seen such a creature up close—within 30 feet—at least once. If the creature you described or named is in a different form, such as being under the effects of a {@spell polymorph} spell, this spell doesn't locate the creature.",
      "This spell can't locate a creature if running water at least 10 feet wide blocks a direct path between you and the creature."
    ]
  },
  {
    "name": "Locate Object",
    "source": "PHB",
    "page": 256,
    "srd": true,
    "level": 2,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a forked twig"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "Describe or name an object that is familiar to you. You sense the direction to the object's location, as long as that object is within 1,000 feet of you. If the object is in motion, you know the direction of its movement.",
      "The spell can locate a specific object known to you, as long as you have seen it up close—within 30 feet—at least once. Alternatively, the spell can locate the nearest object of a particular kind, such as a certain kind of apparel, jewelry, furniture, tool, or weapon.",
      "This spell can't locate an object if any thickness of lead, even a thin sheet, blocks a direct path between you and the object."
    ],
    "miscTags": [
      "OBJ"
    ]
  },
  {
    "name": "Longstrider",
    "source": "PHB",
    "page": 256,
    "srd": true,
    "level": 1,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a pinch of dirt"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You touch a creature. The target's speed increases by 10 feet until the spell ends."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
        ]
      }
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Mage Armor",
    "source": "PHB",
    "page": 256,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 56
      }
    ],
    "level": 1,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a piece of cured leather"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 8
        }
      }
    ],
    "entries": [
      "You touch a willing creature who isn't wearing armor, and a protective magical force surrounds it until the spell ends. The target's base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action."
    ],
    "miscTags": [
      "MAC"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Mage Hand",
    "source": "PHB",
    "page": 256,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 56
      }
    ],
    "level": 0,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        }
      }
    ],
    "entries": [
      "A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.",
      "You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it.",
      "The hand can't attack, activate magic items, or carry more than 10 pounds."
    ],
    "miscTags": [
      "OBJ"
    ]
  },
  {
    "name": "Magic Circle",
    "source": "PHB",
    "page": 256,
    "srd": true,
    "level": 3,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 10
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "holy water or powdered silver and iron worth at least 100 gp, which the spell consumes",
        "cost": 10000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You create a 10-foot-radius, 20-foot-tall cylinder of magical energy centered on a point on the ground that you can see within range. Glowing runes appear wherever the cylinder intersects with the floor or other surface.",
      "Choose one or more of the following types of creatures: celestials, elementals, fey, fiends, or undead. The circle affects a creature of the chosen type in the following ways:",
      {
        "type": "list",
        "items": [
          "The creature can't willingly enter the cylinder by nonmagical means. If the creature tries to use teleportation or interplanar travel to do so, it must first succeed on a Charisma saving throw.",
          "The creature has disadvantage on attack rolls against targets within the cylinder.",
          "Targets within the cylinder can't be {@condition charmed}, {@condition frightened}, or possessed by the creature."
        ]
      },
      "When you cast this spell, you can elect to cause its magic to operate in the reverse direction, preventing a creature of the specified type from leaving the cylinder and protecting targets outside it."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, the duration increases by 1 hour for each slot level above 3rd."
        ]
      }
    ],
    "savingThrow": [
      "charisma"
    ],
    "affectsCreatureType": [
      "celestial",
      "elemental",
      "fey",
      "fiend",
      "undead"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "Y"
    ]
  },
  {
    "name": "Magic Jar",
    "source": "PHB",
    "page": 257,
    "srd": true,
    "level": 6,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a gem, crystal, reliquary, or some other ornamental container worth at least 500 gp",
        "cost": 50000
      }
    },
    "duration": [
      {
        "type": "permanent",
        "ends": [
          "dispel"
        ]
      }
    ],
    "entries": [
      "Your body falls into a catatonic state as your soul leaves it and enters the container you used for the spell's material component. While your soul inhabits the container, you are aware of your surroundings as if you were in the container's space. You can't move or use reactions. The only action you can take is to project your soul up to 100 feet out of the container, either returning to your living body (and ending the spell) or attempting to possess a humanoid's body.",
      "You can attempt to possess any humanoid within 100 feet of you that you can see (creatures warded by a {@spell protection from evil and good} or {@spell magic circle} spell can't be possessed). The target must make a Charisma saving throw. On a failure, your soul moves into the target's body, and the target's soul becomes trapped in the container. On a success, the target resists your efforts to possess it, and you can't attempt to possess it again for 24 hours.",
      "Once you possess a creature's body, you control it. Your game statistics are replaced by the statistics of the creature, though you retain your alignment and your Intelligence, Wisdom, and Charisma scores. You retain the benefit of your own class features. If the target has any class levels, you can't use any of its class features.",
      "Meanwhile, the possessed creature's soul can perceive from the container using its own senses, but it can't move or take actions at all.",
      "While possessing a body, you can use your action to return from the host body to the container if it is within 100 feet of you, returning the host creature's soul to its body. If the host body dies while you're in it, the creature dies, and you must make a Charisma saving throw against your own spellcasting DC. On a success, you return to the container if it is within 100 feet of you. Otherwise, you die.",
      "If the container is destroyed or the spell ends, your soul immediately returns to your body. If your body is more than 100 feet away from you or if your body is dead when you attempt to return to it, you die. If another creature's soul is in the container when it is destroyed, the creature's soul returns to its body if the body is alive and within 100 feet. Otherwise, that creature dies.",
      "When the spell ends, the container is destroyed."
    ],
    "savingThrow": [
      "charisma"
    ],
    "affectsCreatureType": [
      "humanoid"
    ],
    "miscTags": [
      "SGT"
    ]
  },
  {
    "name": "Magic Missile",
    "source": "PHB",
    "page": 257,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 57
      }
    ],
    "level": 1,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals {@damage 1d4 + 1} force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st."
        ]
      }
    ],
    "damageInflict": [
      "force"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "MT",
      "ST"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Magic Mouth",
    "source": "PHB",
    "page": 257,
    "srd": true,
    "level": 2,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a small bit of honeycomb and jade dust worth at least 10 gp, which the spell consumes",
        "cost": 1000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "permanent",
        "ends": [
          "dispel"
        ]
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "You implant a message within an object in range, a message that is uttered when a trigger condition is met. Choose an object that you can see and that isn't being worn or carried by another creature. Then speak the message, which must be 25 words or less, though it can be delivered over as long as 10 minutes. Finally, determine the circumstance that will trigger the spell to deliver your message.",
      "When that circumstance occurs, a magical mouth appears on the object and recites the message in your voice and at the same volume you spoke. If the object you chose has a mouth or something that looks like a mouth (for example, the mouth of a statue), the magical mouth appears there so that the words appear to come from the object's mouth. When you cast this spell, you can have the spell end after it delivers its message, or it can remain and repeat its message whenever the trigger occurs.",
      "The triggering circumstance can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 30 feet of the object. For example, you could instruct the mouth to speak when any creature moves within 30 feet of the object or when a silver bell rings within 30 feet of it."
    ],
    "miscTags": [
      "OBJ",
      "SGT"
    ]
  },
  {
    "name": "Magic Weapon",
    "source": "PHB",
    "page": 257,
    "srd": true,
    "basicRules": true,
    "level": 2,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You touch a nonmagical weapon. Until the spell ends, that weapon becomes a magic weapon with a +1 bonus to attack rolls and damage rolls."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, the bonus increases to +2. When you use a spell slot of 6th level or higher, the bonus increases to +3."
        ]
      }
    ]
  },
  {
    "name": "Major Image",
    "source": "PHB",
    "page": 258,
    "srd": true,
    "basicRules": true,
    "level": 3,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a bit of fleece"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 20-foot cube. The image appears at a spot that you can see within range and lasts for the duration. It seems completely real, including sounds, smells, and temperature appropriate to the thing depicted. You can't create sufficient heat or cold to cause damage, a sound loud enough to deal thunder damage or deafen a creature, or a smell that might sicken a creature (like a {@creature troglodyte||troglodyte's} stench).",
      "As long as you are within range of the illusion, you can use your action to cause the image to move to any other spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Similarly, you can cause the illusion to make different sounds at different times, even making it carry on a conversation, for example.",
      "Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence ({@skill Investigation}) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and its other sensory qualities become faint to the creature."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 6th level or higher, the spell lasts until dispelled, without requiring your {@status concentration}."
        ]
      }
    ],
    "abilityCheck": [
      "intelligence"
    ],
    "miscTags": [
      "PRM",
      "SGT"
    ]
  },
  {
    "name": "Mass Cure Wounds",
    "source": "PHB",
    "page": 258,
    "srd": true,
    "basicRules": true,
    "level": 5,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "A wave of healing energy washes out from a point of your choice within range. Choose up to six creatures in a 30-foot-radius sphere centered on that point. Each target regains hit points equal to {@dice 3d8} + your spellcasting ability modifier. This spell has no effect on undead or constructs."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 6th level or higher, the healing increases by {@scaledice 3d8|5-9|1d8} for each slot level above 5th."
        ]
      }
    ],
    "affectsCreatureType": [
      "aberration",
      "beast",
      "celestial",
      "dragon",
      "elemental",
      "fey",
      "fiend",
      "giant",
      "humanoid",
      "monstrosity",
      "ooze",
      "plant"
    ],
    "miscTags": [
      "HL"
    ],
    "areaTags": [
      "MT",
      "S"
    ]
  },
  {
    "name": "Mass Heal",
    "source": "PHB",
    "page": 258,
    "srd": true,
    "basicRules": true,
    "level": 9,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "A flood of healing energy flows from you into injured creatures around you. You restore up to 700 hit points, divided as you choose among any number of creatures that you can see within range. Creatures healed by this spell are also cured of all diseases and any effect making them {@condition blinded} or {@condition deafened}. This spell has no effect on undead or constructs."
    ],
    "affectsCreatureType": [
      "aberration",
      "beast",
      "celestial",
      "dragon",
      "elemental",
      "fey",
      "fiend",
      "giant",
      "humanoid",
      "monstrosity",
      "ooze",
      "plant"
    ],
    "miscTags": [
      "HL",
      "SGT"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Mass Healing Word",
    "source": "PHB",
    "page": 258,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 57
      }
    ],
    "level": 3,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "As you call out words of restoration, up to six creatures of your choice that you can see within range regain hit points equal to {@dice 1d4} + your spellcasting ability modifier. This spell has no effect on undead or constructs."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, the healing increases by {@scaledice 1d4|3-9|1d4} for each slot level above 3rd."
        ]
      }
    ],
    "affectsCreatureType": [
      "aberration",
      "beast",
      "celestial",
      "dragon",
      "elemental",
      "fey",
      "fiend",
      "giant",
      "humanoid",
      "monstrosity",
      "ooze",
      "plant"
    ],
    "miscTags": [
      "HL",
      "SGT"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Mass Suggestion",
    "source": "PHB",
    "page": 258,
    "srd": true,
    "basicRules": true,
    "level": 6,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "m": "a snake's tongue and either a bit of honeycomb or a drop of sweet oil"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 24
        }
      }
    ],
    "entries": [
      "You suggest a course of activity (limited to a sentence or two) and magically influence up to twelve creatures of your choice that you can see within range and that can hear and understand you. Creatures that can't be {@condition charmed} are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act automatically negates the effect of the spell.",
      "Each target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do.",
      "You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a group of soldiers give all their money to the first beggar they meet. If the condition isn't met before the spell ends, the activity isn't performed.",
      "If you or any of your companions damage a creature affected by this spell, the spell ends for that creature."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a 7th-level spell slot, the duration is 10 days. When you use an 8th-level spell slot, the duration is 30 days. When you use a 9th-level spell slot, the duration is a year and a day."
        ]
      }
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Maze",
    "source": "PHB",
    "page": 258,
    "srd": true,
    "basicRules": true,
    "level": 8,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "You banish a creature that you can see within range into a labyrinthine demiplane. The target remains there for the duration or until it escapes the maze.",
      "The target can use its action to attempt to escape. When it does so, it makes a DC 20 Intelligence check. If it succeeds, it escapes, and the spell ends (a {@creature minotaur} or {@creature goristro} demon automatically succeeds).",
      "When the spell ends, the target reappears in the space it left or, if that space is occupied, in the nearest unoccupied space."
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Meld into Stone",
    "source": "PHB",
    "page": 259,
    "srd": true,
    "level": 3,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 8
        }
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "You step into a stone object or surface large enough to fully contain your body, melding yourself and all the equipment you carry with the stone for the duration. Using your movement, you step into the stone at a point you can touch. Nothing of your presence remains visible or otherwise detectable by nonmagical senses.",
      "While merged with the stone, you can't see what occurs outside it, and any Wisdom ({@skill Perception}) checks you make to hear sounds outside it are made with disadvantage. You remain aware of the passage of time and can cast spells on yourself while merged in the stone. You can use your movement to leave the stone where you entered it, which ends the spell. You otherwise can't move.",
      "Minor physical damage to the stone doesn't harm you, but its partial destruction or a change in its shape (to the extent that you no longer fit within it) expels you and deals {@damage 6d6} bludgeoning damage to you. The stone's complete destruction (or transmutation into a different substance) expels you and deals 50 bludgeoning damage to you. If expelled, you fall {@condition prone} in an unoccupied space closest to where you first entered."
    ],
    "damageInflict": [
      "bludgeoning"
    ],
    "conditionInflict": [
      "prone"
    ]
  },
  {
    "name": "Melf's Acid Arrow",
    "source": "PHB",
    "page": 259,
    "srd": "Acid Arrow",
    "level": 2,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "powdered rhubarb leaf and an adder's stomach"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes {@damage 4d4} acid damage immediately and {@damage 2d4} acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by {@scaledamage 4d4;2d4|2-9|1d4} for each slot level above 2nd."
        ]
      }
    ],
    "damageInflict": [
      "acid"
    ],
    "spellAttack": [
      "R"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Mending",
    "source": "PHB",
    "page": 259,
    "srd": true,
    "level": 0,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "two lodestones"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "This spell repairs a single break or tear in an object you touch, such as broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage.",
      "This spell can physically repair a magic item or construct, but the spell can't restore magic to such an object."
    ],
    "miscTags": [
      "OBJ"
    ]
  },
  {
    "name": "Message",
    "source": "PHB",
    "page": 259,
    "srd": true,
    "level": 0,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a short piece of copper wire"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "round",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.",
      "You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn't have to follow a straight line and can travel freely around corners or through openings."
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Meteor Swarm",
    "source": "PHB",
    "page": 259,
    "srd": true,
    "basicRules": true,
    "level": 9,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "miles",
        "amount": 1
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "Blazing orbs of fire plummet to the ground at four different points you can see within range. Each creature in a 40-foot-radius sphere centered on each point you choose must make a Dexterity saving throw. The sphere spreads around corners. A creature takes {@damage 20d6} fire damage and {@damage 20d6} bludgeoning damage on a failed save, or half as much damage on a successful one. A creature in the area of more than one fiery burst is affected only once.",
      "The spell damages objects in the area and ignites flammable objects that aren't being worn or carried."
    ],
    "damageInflict": [
      "bludgeoning",
      "fire"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "OBJ",
      "SGT"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Mind Blank",
    "source": "PHB",
    "page": 259,
    "srd": true,
    "level": 8,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 24
        }
      }
    ],
    "entries": [
      "Until the spell ends, one willing creature you touch is immune to psychic damage, any effect that would sense its emotions or read its thoughts, divination spells, and the {@condition charmed} condition. The spell even foils {@spell wish} spells and spells or effects of similar power used to affect the target's mind or to gain information about the target."
    ],
    "damageImmune": [
      "psychic"
    ],
    "conditionImmune": [
      "charmed"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Minor Illusion",
    "source": "PHB",
    "page": 260,
    "srd": true,
    "basicRules": true,
    "level": 0,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "s": true,
      "m": "a bit of fleece"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.",
      "If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.",
      "If you create an image of an object—such as a chair, muddy footprints, or a small chest—it must be no larger than a 5-foot cube. The image can't create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it.",
      "If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence ({@skill Investigation}) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature."
    ],
    "abilityCheck": [
      "intelligence"
    ]
  },
  {
    "name": "Mirage Arcane",
    "source": "PHB",
    "page": 260,
    "srd": true,
    "level": 7,
    "school": "I",
    "time": [
      {
        "number": 10,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "sight"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "day",
          "amount": 10
        }
      }
    ],
    "entries": [
      "You make terrain in an area up to 1 mile square look, sound, smell, and even feel like some other sort of terrain. The terrain's general shape remains the same, however. Open fields or a road could be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road.",
      "Similarly, you can alter the appearance of structures, or add them where none are present. The spell doesn't disguise, conceal, or add creatures.",
      "The illusion includes audible, visual, tactile, and olfactory elements, so it can turn clear ground into {@quickref difficult terrain||3} (or vice versa) or otherwise impede movement through the area. Any piece of the illusory terrain (such as a rock or stick) that is removed from the spell's area disappears immediately.",
      "Creatures with {@sense truesight} can see through the illusion to the terrain's true form; however, all other elements of the illusion remain, so while the creature is aware of the illusion's presence, the creature can still physically interact with the illusion."
    ]
  },
  {
    "name": "Mirror Image",
    "source": "PHB",
    "page": 260,
    "srd": true,
    "level": 2,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        }
      }
    ],
    "entries": [
      "Three illusory duplicates of yourself appear in your space. Until the spell ends, the duplicates move with you and mimic your actions, shifting position so it's impossible to track which image is real. You can use your action to dismiss the illusory duplicates.",
      "Each time a creature targets you with an attack during the spell's duration, roll a {@dice d20} to determine whether the attack instead targets one of your duplicates.",
      "If you have three duplicates, you must roll a 6 or higher to change the attack's target to a duplicate. With two duplicates, you must roll an 8 or higher. With one duplicate, you must roll an 11 or higher.",
      "A duplicate's AC equals 10 + your Dexterity modifier. If an attack hits a duplicate, the duplicate is destroyed. A duplicate can be destroyed only by an attack that hits it. It ignores all other damage and effects. The spell ends when all three duplicates are destroyed.",
      "A creature is unaffected by this spell if it can't see, if it relies on senses other than sight, such as blindsight, or if it can perceive illusions as false, as with {@sense truesight}."
    ]
  },
  {
    "name": "Mislead",
    "source": "PHB",
    "page": 260,
    "srd": true,
    "level": 5,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You become {@condition invisible} at the same time that an illusory double of you appears where you are standing. The double lasts for the duration, but the invisibility ends if you attack or cast a spell.",
      "You can use your action to move your illusory double up to twice your speed and make it gesture, speak, and behave in whatever way you choose.",
      "You can see through its eyes and hear through its ears as if you were located where it is. On each of your turns as a bonus action, you can switch from using its senses to using your own, or back again. While you are using its senses, you are {@condition blinded} and {@condition deafened} in regard to your own surroundings."
    ],
    "conditionInflict": [
      "blinded",
      "deafened",
      "invisible"
    ],
    "miscTags": [
      "SGT",
      "UBA"
    ]
  },
  {
    "name": "Misty Step",
    "source": "PHB",
    "page": 260,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 57
      }
    ],
    "level": 2,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see."
    ],
    "miscTags": [
      "SGT",
      "TP"
    ]
  },
  {
    "name": "Modify Memory",
    "source": "PHB",
    "page": 261,
    "srd": true,
    "level": 5,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You attempt to reshape another creature's memories. One creature that you can see must make a Wisdom saving throw. If you are fighting the creature, it has advantage on the saving throw. On a failed save, the target becomes {@condition charmed} by you for the duration. The {@condition charmed} target is {@condition incapacitated} and unaware of its surroundings, though it can still hear you. If it takes any damage or is targeted by another spell, this spell ends, and none of the target's memories are modified.",
      "While this charm lasts, you can affect the target's memory of an event that it experienced within the last 24 hours and that lasted no more than 10 minutes. You can permanently eliminate all memory of the event, allow the target to recall the event with perfect clarity and exacting detail, change its memory of the details of the event, or create a memory of some other event.",
      "You must speak to the target to describe how its memories are affected, and it must be able to understand your language for the modified memories to take root. Its mind fills in any gaps in the details of your description. If the spell ends before you have finished describing the modified memories, the creature's memory isn't altered. Otherwise, the modified memories take hold when the spell ends.",
      "A modified memory doesn't necessarily affect how a creature behaves, particularly if the memory contradicts the creature's natural inclinations, alignment, or beliefs. An illogical modified memory, such as implanting a memory of how much the creature enjoyed dousing itself in acid, is dismissed, perhaps as a bad dream. The DM might deem a modified memory too nonsensical to affect a creature in a significant manner.",
      "A {@spell remove curse} or {@spell greater restoration} spell cast on the target restores the creature's true memory."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "If you cast this spell using a spell slot of 6th level or higher, you can alter the target's memories of an event that took place up to 7 days ago (6th level), 30 days ago (7th level), 1 year ago (8th level), or any time in the creature's past (9th level)."
        ]
      }
    ],
    "conditionInflict": [
      "charmed",
      "incapacitated"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "PRM",
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Moonbeam",
    "source": "PHB",
    "page": 261,
    "srd": true,
    "level": 2,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "several seeds of any moonseed plant and a piece of opalescent feldspar"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "A silvery beam of pale light shines down in a 5-foot-radius, 40-foot-high cylinder centered on a point within range. Until the spell ends, dim light fills the cylinder.",
      "When a creature enters the spell's area for the first time on a turn or starts its turn there, it is engulfed in ghostly flames that cause searing pain, and it must make a Constitution saving throw. It takes {@damage 2d10} radiant damage on a failed save, or half as much damage on a successful one.",
      "A shapechanger makes its saving throw with disadvantage. If it fails, it also instantly reverts to its original form and can't assume a different form until it leaves the spell's light.",
      "On each of your turns after you cast this spell, you can use an action to move the beam up to 60 feet in any direction."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by {@scaledamage 2d10|2-9|1d10} for each slot level above 2nd."
        ]
      }
    ],
    "damageInflict": [
      "radiant"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "LGT"
    ],
    "areaTags": [
      "Y"
    ]
  },
  {
    "name": "Mordenkainen's Faithful Hound",
    "source": "PHB",
    "page": 261,
    "srd": "Faithful Hound",
    "level": 4,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a tiny silver whistle, a piece of bone, and a thread"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 8
        }
      }
    ],
    "entries": [
      "You conjure a phantom watchdog in an unoccupied space that you can see within range, where it remains for the duration, until you dismiss it as an action, or until you move more than 100 feet away from it.",
      "The hound is {@condition invisible} to all creatures except you and can't be harmed. When a Small or larger creature comes within 30 feet of it without first speaking the password that you specify when you cast this spell, the hound starts barking loudly. The hound sees {@condition invisible} creatures and can see into the Ethereal Plane. It ignores illusions.",
      "At the start of each of your turns, the hound attempts to bite one creature within 5 feet of it that is hostile to you. The hound's attack bonus is equal to your spellcasting ability modifier + your proficiency bonus. On a hit, it deals {@damage 4d8} piercing damage."
    ],
    "damageInflict": [
      "piercing"
    ],
    "miscTags": [
      "SGT"
    ]
  },
  {
    "name": "Mordenkainen's Magnificent Mansion",
    "source": "PHB",
    "page": 261,
    "srd": "Magnificent Mansion",
    "level": 7,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 300
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a miniature portal carved from ivory, a small piece of polished marble, and a tiny silver spoon, each item worth at least 5 gp",
        "cost": 1500
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 24
        }
      }
    ],
    "entries": [
      "You conjure an extradimensional dwelling in range that lasts for the duration. You choose where its one entrance is located. The entrance shimmers faintly and is 5 feet wide and 10 feet tall. You and any creature you designate when you cast the spell can enter the extradimensional dwelling as long as the portal remains open. You can open or close the portal if you are within 30 feet of it. While closed, the portal is invisible.",
      "Beyond the portal is a magnificent foyer with numerous chambers beyond. The atmosphere is clean, fresh, and warm.",
      "You can create any floor plan you like, but the space can't exceed 50 cubes, each cube being 10 feet on each side. The place is furnished and decorated as you choose. It contains sufficient food to serve a nine course banquet for up to 100 people. A staff of 100 near-transparent servants attends all who enter. You decide the visual appearance of these servants and their attire. They are completely obedient to your orders. Each servant can perform any task a normal human servant could perform, but they can't attack or take any action that would directly harm another creature. Thus the servants can fetch things, clean, mend, fold clothes, light fires, serve food, pour wine, and so on. The servants can go anywhere in the mansion but can't leave it. Furnishings and other objects created by this spell dissipate into smoke if removed from the mansion. When the spell ends, any creatures or objects left inside the extradimensional space are expelled into the open spaces nearest to the entrance."
    ],
    "miscTags": [
      "OBJ"
    ]
  },
  {
    "name": "Mordenkainen's Private Sanctum",
    "source": "PHB",
    "page": 262,
    "srd": "Private Sanctum",
    "level": 4,
    "school": "A",
    "time": [
      {
        "number": 10,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a thin sheet of lead, a piece of opaque glass, a wad of cotton or cloth, and powdered chrysolite"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 24
        }
      }
    ],
    "entries": [
      "You make an area within range magically secure. The area is a cube that can be as small as 5 feet to as large as 100 feet on each side. The spell lasts for the duration or until you use an action to dismiss it.",
      "When you cast the spell, you decide what sort of security the spell provides, choosing any or all of the following properties:",
      {
        "type": "list",
        "items": [
          "Sound can't pass through the barrier at the edge of the warded area.",
          "The barrier of the warded area appears dark and foggy, preventing vision (including {@sense darkvision}) through it.",
          "Sensors created by divination spells can't appear inside the protected area or pass through the barrier at its perimeter.",
          "Creatures in the area can't be targeted by divination spells.",
          "Nothing can teleport into or out of the warded area.",
          "Planar travel is blocked within the warded area."
        ]
      },
      "Casting this spell on the same spot every day for a year makes this effect permanent."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 5th level or higher, you can increase the size of the cube by 100 feet for each slot level beyond 4th. Thus you could protect a cube that can be up to 200 feet on one side by using a spell slot of 5th level."
        ]
      }
    ],
    "miscTags": [
      "PIR",
      "PRM"
    ],
    "areaTags": [
      "C"
    ]
  },
  {
    "name": "Mordenkainen's Sword",
    "source": "PHB",
    "page": 262,
    "srd": "Arcane Sword",
    "basicRules": true,
    "level": 7,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a miniature platinum sword with a grip and pommel of copper and zinc, worth 250 gp",
        "cost": 25000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You create a sword-shaped plane of force that hovers within range. It lasts for the duration.",
      "When the sword appears, you make a melee spell attack against a target of your choice within 5 feet of the sword. On a hit, the target takes {@damage 3d10} force damage. Until the spell ends, you can use a bonus action on each of your turns to move the sword up to 20 feet to a spot you can see and repeat this attack against the same target or a different one."
    ],
    "damageInflict": [
      "force"
    ],
    "spellAttack": [
      "M"
    ],
    "miscTags": [
      "SGT",
      "UBA"
    ],
    "areaTags": [
      "ST"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Move Earth",
    "source": "PHB",
    "page": 263,
    "srd": true,
    "level": 6,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "an iron blade and a small bag containing a mixture of soils—clay, loam, and sand"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 2
        },
        "concentration": true
      }
    ],
    "entries": [
      "Choose an area of terrain no larger than 40 feet on a side within range. You can reshape dirt, sand, or clay in the area in any manner you choose for the duration. You can raise or lower the area's elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can't exceed half the area's largest dimension. So, if you affect a 40-foot square, you can create a pillar up to 20 feet high, raise or lower the square's elevation by up to 20 feet, dig a trench up to 20 feet deep, and so on. It takes 10 minutes for these changes to complete.",
      "At the end of every 10 minutes you spend {@status concentration||concentrating} on the spell, you can choose a new area of terrain to affect.",
      "Because the terrain's transformation occurs slowly, creatures in the area can't usually be trapped or injured by the ground's movement.",
      "This spell can't manipulate natural stone or stone construction. Rocks and structures shift to accommodate the new terrain. If the way you shape the terrain would make a structure unstable, it might collapse.",
      "Similarly, this spell doesn't directly affect plant growth. The moved earth carries any plants along with it."
    ],
    "areaTags": [
      "Q"
    ]
  },
  {
    "name": "Nondetection",
    "source": "PHB",
    "page": 263,
    "srd": true,
    "level": 3,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a pinch of diamond dust worth 25 gp sprinkled over the target, which the spell consumes",
        "cost": 2500,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 8
        }
      }
    ],
    "entries": [
      "For the duration, you hide a target that you touch from divination magic. The target can be a willing creature or a place or an object no larger than 10 feet in any dimension. The target can't be targeted by any divination magic or perceived through magical scrying sensors."
    ],
    "miscTags": [
      "OBJ"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Nystul's Magic Aura",
    "source": "PHB",
    "page": 263,
    "srd": "Arcanist's Magic Aura",
    "level": 2,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a small square of silk"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 24
        }
      }
    ],
    "entries": [
      "You place an illusion on a creature or an object you touch so that divination spells reveal false information about it. The target can be a willing creature or an object that isn't being carried or worn by another creature.",
      "When you cast the spell, choose one or both of the following effects. The effect lasts for the duration. If you cast this spell on the same creature or object every day for 30 days, placing the same effect on it each time, the illusion lasts until it is dispelled.",
      {
        "type": "entries",
        "name": "False Aura",
        "entries": [
          "You change the way the target appears to spells and magical effects, such as {@spell detect magic}, that detect magical auras. You can make a nonmagical object appear magical, a magical object appear nonmagical, or change the object's magical aura so that it appears to belong to a specific school of magic that you choose. When you use this effect on an object, you can make the false magic apparent to any creature that handles the item."
        ]
      },
      {
        "type": "entries",
        "name": "Mask",
        "entries": [
          "You change the way the target appears to spells and magical effects that detect creature types, such as a paladin's {@classFeature Divine Sense|Paladin|PHB|1} or the trigger of a {@spell symbol} spell. You choose a creature type and other spells and magical effects treat the target as if it were a creature of that type or of that alignment."
        ]
      }
    ],
    "miscTags": [
      "OBJ",
      "PIR",
      "PRM"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Otiluke's Freezing Sphere",
    "source": "PHB",
    "page": 263,
    "srd": "Freezing Sphere",
    "level": 6,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 300
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a small crystal sphere"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "A frigid globe of cold energy streaks from your fingertips to a point of your choice within range, where it explodes in a 60-foot-radius sphere. Each creature within the area must make a Constitution saving throw. On a failed save, a creature takes {@damage 10d6} cold damage. On a successful save, it takes half as much damage.",
      "If the globe strikes a body of water or a liquid that is principally water (not including water-based creatures), it freezes the liquid to a depth of 6 inches over an area 30 feet square. This ice lasts for 1 minute. Creatures that were swimming on the surface of frozen water are trapped in the ice. A trapped creature can use an action to make a Strength check against your spell save DC to break free.",
      "You can refrain from firing the globe after completing the spell, if you wish. A small globe about the size of a sling stone, cool to the touch, appears in your hand. At any time, you or a creature you give the globe to can throw the globe (to a range of 40 feet) or hurl it with a sling (to the sling's normal range). It shatters on impact, with the same effect as the normal casting of the spell. You can also set the globe down without shattering it. After 1 minute, if the globe hasn't already shattered, it explodes."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 7th level or higher, the damage increases by {@scaledamage 10d6|6-9|1d6} for each slot level above 6th."
        ]
      }
    ],
    "damageInflict": [
      "cold"
    ],
    "savingThrow": [
      "constitution"
    ],
    "abilityCheck": [
      "strength"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Otiluke's Resilient Sphere",
    "source": "PHB",
    "page": 264,
    "srd": "Resilient Sphere",
    "level": 4,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a hemispherical piece of clear crystal and a matching hemispherical piece of gum arabic"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "A sphere of shimmering force encloses a creature or object of Large size or smaller within range. An unwilling creature must make a Dexterity saving throw. On a failed save, the creature is enclosed for the duration.",
      "Nothing—not physical objects, energy, or other spell effects—can pass through the barrier, in or out, though a creature in the sphere can breathe there. The sphere is immune to all damage, and a creature or object inside can't be damaged by attacks or effects originating from outside, nor can a creature inside the sphere damage anything outside it.",
      "The sphere is weightless and just large enough to contain the creature or object inside. An enclosed creature can use its action to push against the sphere's walls and thus roll the sphere at up to half the creature's speed. Similarly, the globe can be picked up and moved by other creatures.",
      "A {@spell disintegrate} spell targeting the globe destroys it without harming anything inside it."
    ],
    "damageImmune": [
      "acid",
      "bludgeoning",
      "cold",
      "fire",
      "force",
      "lightning",
      "necrotic",
      "piercing",
      "poison",
      "psychic",
      "radiant",
      "slashing",
      "thunder"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "OBJ"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Otto's Irresistible Dance",
    "source": "PHB",
    "page": 264,
    "srd": "Irresistible Dance",
    "basicRules": true,
    "level": 6,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Choose one creature that you can see within range. The target begins a comic dance in place: shuffling, tapping its feet, and capering for the duration. Creatures that can't be {@condition charmed} are immune to this spell.",
      "A dancing creature must use all its movement to dance without leaving its space and has disadvantage on Dexterity saving throws and attack rolls. While the target is affected by this spell, other creatures have advantage on attack rolls against it. As an action, a dancing creature makes a Wisdom saving throw to regain control of itself. On a successful save, the spell ends."
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Pass without Trace",
    "source": "PHB",
    "page": 264,
    "srd": true,
    "level": 2,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "ashes from a burned leaf of mistletoe and a sprig of spruce"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity ({@skill Stealth}) checks and can't be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage."
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Passwall",
    "source": "PHB",
    "page": 264,
    "srd": true,
    "basicRules": true,
    "level": 5,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a pinch of sesame seeds"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "entries": [
      "A passage appears at a point of your choice that you can see on a wooden, plaster, or stone surface (such as a wall, a ceiling, or a floor) within range, and lasts for the duration. You choose the opening's dimensions: up to 5 feet wide, 8 feet tall, and 20 feet deep. The passage creates no instability in a structure surrounding it.",
      "When the opening disappears, any creatures or objects still in the passage created by the spell are safely ejected to an unoccupied space nearest to the surface on which you cast the spell."
    ],
    "miscTags": [
      "OBJ",
      "SGT"
    ]
  },
  {
    "name": "Phantasmal Force",
    "source": "PHB",
    "page": 264,
    "level": 2,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a bit of fleece"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You craft an illusion that takes root in the mind of a creature that you can see within range. The target must make an Intelligence saving throw. On a failed save, you create a phantasmal object, creature, or other visible phenomenon of your choice that is no larger than a 10-foot cube and that is perceivable only to the target for the duration. This spell has no effect on undead or constructs.",
      "The phantasm includes sound, temperature, and other stimuli, also evident only to the creature.",
      "The target can use its action to examine the phantasm with an Intelligence ({@skill Investigation}) check against your spell save DC. If the check succeeds, the target realizes that the phantasm is an illusion, and the spell ends.",
      "While a target is affected by the spell, the target treats the phantasm as if it were real. The target rationalizes any illogical outcomes from interacting with the phantasm. For example, a target attempting to walk across a phantasmal bridge that spans a chasm falls once it steps onto the bridge. If the target survives the fall, it still believes that the bridge exists and comes up with some other explanation for its fall—it was pushed, it slipped, or a strong wind might have knocked it off.",
      "An affected target is so convinced of the phantasm's reality that it can even take damage from the illusion. A phantasm created to appear as a creature can attack the target. Similarly, a phantasm created to appear as fire, a pool of acid, or lava can burn the target. Each round on your turn, the phantasm can deal {@damage 1d6} psychic damage to the target if it is in the phantasm's area or within 5 feet of the phantasm, provided that the illusion is of a creature or hazard that could logically deal damage, such as by attacking. The target perceives the damage as a type appropriate to the illusion."
    ],
    "damageInflict": [
      "psychic"
    ],
    "savingThrow": [
      "intelligence"
    ],
    "abilityCheck": [
      "intelligence"
    ],
    "affectsCreatureType": [
      "aberration",
      "beast",
      "celestial",
      "dragon",
      "elemental",
      "fey",
      "fiend",
      "giant",
      "humanoid",
      "monstrosity",
      "ooze",
      "plant"
    ],
    "miscTags": [
      "SGT"
    ]
  },
  {
    "name": "Phantasmal Killer",
    "source": "PHB",
    "page": 265,
    "srd": true,
    "level": 4,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You tap into the nightmares of a creature you can see within range and create an illusory manifestation of its deepest fears, visible only to that creature. The target must make a Wisdom saving throw. On a failed save, the target becomes {@condition frightened} for the duration. At the end of each of the target's turns before the spell ends, the target must succeed on a Wisdom saving throw or take {@damage 4d10} psychic damage. On a successful save, the spell ends."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 5th level or higher, the damage increases by {@scaledamage 4d10|4-9|1d10} for each slot level above 4th."
        ]
      }
    ],
    "damageInflict": [
      "psychic"
    ],
    "conditionInflict": [
      "frightened"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Phantom Steed",
    "source": "PHB",
    "page": 265,
    "srd": true,
    "level": 3,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "A Large quasi-real, horselike creature appears on the ground in an unoccupied space of your choice within range. You decide the creature's appearance, but it is equipped with a saddle, bit, and bridle. Any of the equipment created by the spell vanishes in a puff of smoke if it is carried more than 10 feet away from the steed.",
      "For the duration, you or a creature you choose can ride the steed. The creature uses the statistics for a {@creature riding horse}, except it has a speed of 100 feet and can travel 10 miles in an hour, or 13 miles at a fast pace. When the spell ends, the steed gradually fades, giving the rider 1 minute to dismount. The spell ends if you use an action to dismiss it or if the steed takes any damage."
    ],
    "miscTags": [
      "SMN"
    ]
  },
  {
    "name": "Planar Ally",
    "source": "PHB",
    "page": 265,
    "srd": true,
    "level": 6,
    "school": "C",
    "time": [
      {
        "number": 10,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You beseech an otherworldly entity for aid. The being must be known to you: a god, a primordial, a demon prince, or some other being of cosmic power. That entity sends a {@filter celestial|bestiary|type=celestial|miscellaneous=!swarm}, an {@filter elemental|bestiary|type=elemental|miscellaneous=!swarm}, or a {@filter fiend|bestiary|type=fiend|miscellaneous=!swarm} loyal to it to aid you, making the creature appear in an unoccupied space within range. If you know a specific creature's name, you can speak that name when you cast this spell to request that creature, though you might get a different creature anyway (DM's choice).",
      "When the creature appears, it is under no compulsion to behave in any particular way. You can ask the creature to perform a service in exchange for payment, but it isn't obliged to do so. The requested task could range from simple (fly us across the chasm, or help us fight a battle) to complex (spy on our enemies, or protect us during our foray into the dungeon). You must be able to communicate with the creature to bargain for its services.",
      "Payment can take a variety of forms. A celestial might require a sizable donation of gold or magic items to an allied temple, while a fiend might demand a living sacrifice or a gift of treasure. Some creatures might exchange their service for a quest undertaken by you.",
      "As a rule of thumb, a task that can be measured in minutes requires a payment worth 100 gp per minute. A task measured in hours requires 1,000 gp per hour. And a task measured in days (up to 10 days) requires 10,000 gp per day. The DM can adjust these payments based on the circumstances under which you cast the spell. If the task is aligned with the creature's ethos, the payment might be halved or even waived. Nonhazardous tasks typically require only half the suggested payment, while especially dangerous tasks might require a greater gift. Creatures rarely accept tasks that seem suicidal.",
      "After the creature completes the task, or when the agreed-upon duration of service expires, the creature returns to its home plane after reporting back to you, if appropriate to the task and if possible. If you are unable to agree on a price for the creature's service, the creature immediately returns to its home plane.",
      "A creature enlisted to join your group counts as a member of it, receiving a full share of experience points awarded."
    ],
    "miscTags": [
      "SMN"
    ]
  },
  {
    "name": "Planar Binding",
    "source": "PHB",
    "page": 265,
    "srd": true,
    "level": 5,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "hour"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a jewel worth at least 1,000 gp, which the spell consumes",
        "cost": 100000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 24
        }
      }
    ],
    "entries": [
      "With this spell, you attempt to bind a {@filter celestial|bestiary|type=celestial|miscellaneous=!swarm}, an {@filter elemental|bestiary|type=elemental|miscellaneous=!swarm}, a {@filter fey|bestiary|type=fey|miscellaneous=!swarm}, or a {@filter fiend|bestiary|type=fiend|miscellaneous=!swarm} to your service. The creature must be within range for the entire casting of the spell. (Typically, the creature is first summoned into the center of an inverted {@spell magic circle} in order to keep it trapped while this spell is cast.) At the completion of the casting, the target must make a Charisma saving throw. On a failed save, it is bound to serve you for the duration. If the creature was summoned or created by another spell, that spell's duration is extended to match the duration of this spell.",
      "A bound creature must follow your instructions to the best of its ability. You might command the creature to accompany you on an adventure, to guard a location, or to deliver a message. The creature obeys the letter of your instructions, but if the creature is hostile to you, it strives to twist your words to achieve its own objectives. If the creature carries out your instructions completely before the spell ends, it travels to you to report this fact if you are on the same plane of existence. If you are on a different plane of existence, it returns to the place where you bound it and remains there until the spell ends."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of a higher level, the duration increases to 10 days with a 6th-level slot, to 30 days with a 7th-level slot, to 180 days with an 8th-level slot, and to a year and a day with a 9th-level spell slot."
        ]
      }
    ],
    "savingThrow": [
      "charisma"
    ],
    "affectsCreatureType": [
      "celestial",
      "elemental",
      "fey",
      "fiend"
    ],
    "miscTags": [
      "SMN"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Plane Shift",
    "source": "PHB",
    "page": 266,
    "srd": true,
    "level": 7,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a forked, metal rod worth at least 250 gp, attuned to a particular plane of existence",
        "cost": 25000
      }
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You and up to eight willing creatures who link hands in a circle are transported to a different plane of existence. You can specify a target destination in general terms, such as the City of Brass on the Elemental Plane of Fire or the palace of Dispater on the second level of the Nine Hells, and you appear in or near that destination. If you are trying to reach the City of Brass, for example, you might arrive in its Street of Steel, before its Gate of Ashes, or looking at the city from across the Sea of Fire, at the DM's discretion.",
      "Alternatively, if you know the sigil sequence of a teleportation circle on another plane of existence, this spell can take you to that circle. If the teleportation circle is too small to hold all the creatures you transported, they appear in the closest unoccupied spaces next to the circle.",
      "You can use this spell to banish an unwilling creature to another plane. Choose a creature within your reach and make a melee spell attack against it. On a hit, the creature must make a Charisma saving throw. If the creature fails this save, it is transported to a random location on the plane of existence you specify. A creature so transported must find its own way back to your current plane of existence."
    ],
    "spellAttack": [
      "M"
    ],
    "savingThrow": [
      "charisma"
    ],
    "miscTags": [
      "PS",
      "TP"
    ],
    "areaTags": [
      "MT",
      "ST"
    ]
  },
  {
    "name": "Plant Growth",
    "source": "PHB",
    "page": 266,
    "srd": true,
    "level": 3,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      },
      {
        "number": 8,
        "unit": "hour"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 150
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "This spell channels vitality into plants within a specific area. There are two possible uses for the spell, granting either immediate or long-term benefits.",
      "If you cast this spell using 1 action, choose a point within range. All normal plants in a 100-foot radius centered on that point become thick and overgrown. A creature moving through the area must spend 4 feet of movement for every 1 foot it moves.",
      "You can exclude one or more areas of any size within the spell's area from being affected.",
      "If you cast this spell over 8 hours, you enrich the land. All plants in a half-mile radius centered on a point within range become enriched for 1 year. The plants yield twice the normal amount of food when harvested."
    ]
  },
  {
    "name": "Poison Spray",
    "source": "PHB",
    "page": 266,
    "srd": true,
    "basicRules": true,
    "level": 0,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 10
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take {@damage 1d12} poison damage.",
      "This spell's damage increases by {@dice 1d12} when you reach 5th level ({@damage 2d12}), 11th level ({@damage 3d12}), and 17th level ({@damage 4d12})."
    ],
    "scalingLevelDice": {
      "label": "poison damage",
      "scaling": {
        "1": "1d12",
        "5": "2d12",
        "11": "3d12",
        "17": "4d12"
      }
    },
    "damageInflict": [
      "poison"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "SCL",
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Polymorph",
    "source": "PHB",
    "page": 266,
    "srd": true,
    "level": 4,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a caterpillar cocoon"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "This spell transforms a creature that you can see within range into a new form. An unwilling creature must make a Wisdom saving throw to avoid the effect. The spell has no effect on a shapechanger or a creature with 0 hit points.",
      "The transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form can be {@filter any beast|bestiary|type=beast|miscellaneous=!swarm} whose challenge rating is equal to or less than the target's (or the target's level, if it doesn't have a challenge rating). The target's game statistics, including mental ability scores, are replaced by the statistics of the chosen beast. It retains its alignment and personality.",
      "The target assumes the hit points of its new form. When it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious.",
      "The creature is limited in the actions it can perform by the nature of its new form, and it can't speak, cast spells, or take any other action that requires hands or speech.",
      "The target's gear melds into the new form. The creature can't activate, use, wield, or otherwise benefit from any of its equipment."
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Power Word Heal",
    "source": "PHB",
    "page": 266,
    "level": 9,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "A wave of healing energy washes over the creature you touch. The target regains all its hit points. If the creature is {@condition charmed}, {@condition frightened}, {@condition paralyzed}, or {@condition stunned}, the condition ends. If the creature is {@condition prone}, it can use its reaction to stand up. This spell has no effect on undead or constructs."
    ],
    "affectsCreatureType": [
      "aberration",
      "beast",
      "celestial",
      "dragon",
      "elemental",
      "fey",
      "fiend",
      "giant",
      "humanoid",
      "monstrosity",
      "ooze",
      "plant"
    ],
    "miscTags": [
      "HL"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Power Word Kill",
    "source": "PHB",
    "page": 266,
    "srd": true,
    "basicRules": true,
    "level": 9,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You utter a word of power that can compel one creature you can see within range to die instantly. If the creature you choose has 100 hit points or fewer, it dies. Otherwise, the spell has no effect."
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Power Word Stun",
    "source": "PHB",
    "page": 267,
    "srd": true,
    "basicRules": true,
    "level": 8,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You speak a word of power that can overwhelm the mind of one creature you can see within range, leaving it dumbfounded. If the target has 150 hit points or fewer, it is {@condition stunned}. Otherwise, the spell has no effect.",
      "The {@condition stunned} target must make a Constitution saving throw at the end of each of its turns. On a successful save, this stunning effect ends."
    ],
    "conditionInflict": [
      "stunned"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Prayer of Healing",
    "source": "PHB",
    "page": 267,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 57
      }
    ],
    "level": 2,
    "school": "V",
    "time": [
      {
        "number": 10,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "Up to six creatures of your choice that you can see within range each regain hit points equal to {@dice 2d8} + your spellcasting ability modifier. This spell has no effect on undead or constructs."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, the healing increases by {@scaledice 2d8|2-9|1d8} for each slot level above 2nd."
        ]
      }
    ],
    "affectsCreatureType": [
      "aberration",
      "beast",
      "celestial",
      "dragon",
      "elemental",
      "fey",
      "fiend",
      "giant",
      "humanoid",
      "monstrosity",
      "ooze",
      "plant"
    ],
    "miscTags": [
      "HL",
      "SGT"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Prestidigitation",
    "source": "PHB",
    "page": 267,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 57
      }
    ],
    "level": 0,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 10
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1,
          "upTo": true
        }
      }
    ],
    "entries": [
      "This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range:",
      {
        "type": "list",
        "items": [
          "You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.",
          "You instantaneously light or snuff out a candle, a torch, or a small campfire.",
          "You instantaneously clean or soil an object no larger than 1 cubic foot.",
          "You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.",
          "You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.",
          "You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn."
        ]
      },
      "If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
    ],
    "miscTags": [
      "OBJ"
    ]
  },
  {
    "name": "Prismatic Spray",
    "source": "PHB",
    "page": 267,
    "srd": true,
    "level": 7,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "cone",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "Eight multicolored rays of light flash from your hand. Each ray is a different color and has a different power and purpose. Each creature in a 60-foot cone must make a Dexterity saving throw. For each target, roll a {@dice d8} to determine which color ray affects it.",
      {
        "type": "entries",
        "name": "1-Red",
        "entries": [
          "The target takes {@damage 10d6} fire damage on a failed save, or half as much damage on a successful one."
        ]
      },
      {
        "type": "entries",
        "name": "2-Orange",
        "entries": [
          "The target takes {@damage 10d6} acid damage on a failed save, or half as much damage on a successful one."
        ]
      },
      {
        "type": "entries",
        "name": "3-Yellow",
        "entries": [
          "The target takes {@damage 10d6} lightning damage on a failed save, or half as much damage on a successful one."
        ]
      },
      {
        "type": "entries",
        "name": "4-Green",
        "entries": [
          "The target takes {@damage 10d6} poison damage on a failed save, or half as much damage on a successful one."
        ]
      },
      {
        "type": "entries",
        "name": "5-Blue",
        "entries": [
          "The target takes {@damage 10d6} cold damage on a failed save, or half as much damage on a successful one."
        ]
      },
      {
        "type": "entries",
        "name": "6-Indigo",
        "entries": [
          "On a failed save, the target is {@condition restrained}. It must then make a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the spell ends. If it fails its save three times, it permanently turns to stone and is subjected to the {@condition petrified} condition. The successes and failures don't need to be consecutive, keep track of both until the target collects three of a kind."
        ]
      },
      {
        "type": "entries",
        "name": "7-Violet",
        "entries": [
          "On a failed save, the target is {@condition blinded}. It must then make a Wisdom saving throw at the start of your next turn. A successful save ends the blindness. If it fails that save, the creature is transported to another plane of existence of the DM's choosing and is no longer {@condition blinded}. (Typically, a creature that is on a plane that isn't its home plane is banished home, while other creatures are usually cast into the Astral or Ethereal planes.)"
        ]
      },
      {
        "type": "entries",
        "name": "8-Special",
        "entries": [
          "The target is struck by two rays. Roll twice more, rerolling any 8."
        ]
      }
    ],
    "damageInflict": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "poison"
    ],
    "conditionInflict": [
      "blinded",
      "petrified",
      "restrained"
    ],
    "savingThrow": [
      "dexterity",
      "constitution",
      "wisdom"
    ],
    "miscTags": [
      "PRM"
    ],
    "areaTags": [
      "N"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Prismatic Wall",
    "source": "PHB",
    "page": 267,
    "srd": true,
    "level": 9,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        }
      }
    ],
    "entries": [
      "A shimmering, multicolored plane of light forms a vertical opaque wall—up to 90 feet long, 30 feet high, and 1 inch thick—centered on a point you can see within range. Alternatively, you can shape the wall into a sphere up to 30 feet in diameter centered on a point you choose within range. The wall remains in place for the duration. If you position the wall so that it passes through a space occupied by a creature, the spell fails, and your action and the spell slot are wasted.",
      "The wall sheds bright light out to a range of 100 feet and dim light for an additional 100 feet. You and creatures you designate at the time you cast the spell can pass through and remain near the wall without harm. If another creature that can see the wall moves to within 20 feet of it or starts its turn there, the creature must succeed on a Constitution saving throw or become {@condition blinded} for 1 minute.",
      "The wall consists of seven layers, each with a different color. When a creature attempts to reach into or pass through the wall, it does so one layer at a time through all the wall's layers. As it passes or reaches through each layer, the creature must make a Dexterity saving throw or be affected by that layer's properties as described below.",
      "The wall can be destroyed, also one layer at a time, in order from red to violet, by means specific to each layer. Once a layer is destroyed, it remains so for the duration of the spell. An {@spell antimagic field} has no effect on a prismatic wall.",
      {
        "type": "entries",
        "name": "Red",
        "entries": [
          "The creature takes {@damage 10d6} fire damage on a failed save, or half as much damage on a successful one. While this layer is in place, nonmagical ranged attacks can't pass through the wall. The layer can be destroyed by dealing at least 25 cold damage to it."
        ]
      },
      {
        "type": "entries",
        "name": "Orange",
        "entries": [
          "The creature takes {@damage 10d6} acid damage on a failed save, or half as much damage on a successful one. While this layer is in place, magical ranged attacks can't pass through the wall. The layer is destroyed by a strong wind."
        ]
      },
      {
        "type": "entries",
        "name": "Yellow",
        "entries": [
          "The creature takes {@damage 10d6} lightning damage on a failed save, or half as much damage on a successful one. This layer can be destroyed by dealing at least 60 force damage to it."
        ]
      },
      {
        "type": "entries",
        "name": "Green",
        "entries": [
          "The creature takes {@damage 10d6} poison damage on a failed save, or half as much damage on a successful one. A {@spell passwall} spell, or another spell of equal or greater level that can open a portal on a solid surface, destroys this layer."
        ]
      },
      {
        "type": "entries",
        "name": "Blue",
        "entries": [
          "The creature takes {@damage 10d6} cold damage on a failed save, or half as much damage on a successful one. This layer can be destroyed by dealing at least 25 fire damage to it."
        ]
      },
      {
        "type": "entries",
        "name": "Indigo",
        "entries": [
          "On a failed save, the creature is {@condition restrained}. It must then make a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the spell ends. If it fails its save three times, it permanently turns to stone and is subjected to the {@condition petrified} condition. The successes and failures don't need to be consecutive; keep track of both until the creature collects three of a kind.",
          "While this layer is in place, spells can't be cast through the wall. The layer is destroyed by bright light shed by a {@spell daylight} spell or a similar spell of equal or higher level."
        ]
      },
      {
        "type": "entries",
        "name": "Violet",
        "entries": [
          "On a failed save, the creature is {@condition blinded}. It must then make a Wisdom saving throw at the start of your next turn. A successful save ends the blindness. If it fails that save, the creature is transported to another plane of the DM's choosing and is no longer {@condition blinded}. (Typically, a creature that is on a plane that isn't its home plane is banished home, while other creatures are usually cast into the Astral or Ethereal planes.) This layer is destroyed by a {@spell dispel magic} spell or a similar spell of equal or higher level that can end spells and magical effects."
        ]
      }
    ],
    "damageInflict": [
      "acid",
      "cold",
      "fire",
      "force",
      "lightning",
      "poison"
    ],
    "conditionInflict": [
      "blinded",
      "petrified",
      "restrained"
    ],
    "savingThrow": [
      "constitution",
      "dexterity",
      "wisdom"
    ],
    "miscTags": [
      "LGT",
      "PRM",
      "SGT"
    ],
    "areaTags": [
      "W"
    ]
  },
  {
    "name": "Produce Flame",
    "source": "PHB",
    "page": 269,
    "srd": true,
    "level": 0,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        }
      }
    ],
    "entries": [
      "A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again.",
      "You can also attack with the flame, although doing so ends the spell. When you cast this spell, or as an action on a later turn, you can hurl the flame at a creature within 30 feet of you. Make a ranged spell attack. On a hit, the target takes {@damage 1d8} fire damage.",
      "This spell's damage increases by {@dice 1d8} when you reach 5th level ({@damage 2d8}), 11th level ({@damage 3d8}), and 17th level ({@damage 4d8})."
    ],
    "scalingLevelDice": {
      "label": "fire damage",
      "scaling": {
        "1": "1d8",
        "5": "2d8",
        "11": "3d8",
        "17": "4d8"
      }
    },
    "damageInflict": [
      "fire"
    ],
    "spellAttack": [
      "R"
    ],
    "miscTags": [
      "LGT",
      "SCL"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Programmed Illusion",
    "source": "PHB",
    "page": 269,
    "srd": true,
    "level": 6,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a bit of fleece and jade dust worth at least 25 gp",
        "cost": 2500
      }
    },
    "duration": [
      {
        "type": "permanent",
        "ends": [
          "dispel"
        ]
      }
    ],
    "entries": [
      "You create an illusion of an object, a creature, or some other visible phenomenon within range that activates when a specific condition occurs. The illusion is imperceptible until then. It must be no larger than a 30-foot cube, and you decide when you cast the spell how the illusion behaves and what sounds it makes. This scripted performance can last up to 5 minutes.",
      "When the condition you specify occurs, the illusion springs into existence and performs in the manner you described. Once the illusion finishes performing, it disappears and remains dormant for 10 minutes. After this time, the illusion can be activated again.",
      "The triggering condition can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 30 feet of the area. For example, you could create an illusion of yourself to appear and warn off others who attempt to open a trapped door, or you could set the illusion to trigger only when a creature says the correct word or phrase.",
      "Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence ({@skill Investigation}) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature."
    ],
    "abilityCheck": [
      "intelligence"
    ]
  },
  {
    "name": "Project Image",
    "source": "PHB",
    "page": 270,
    "srd": true,
    "level": 7,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "miles",
        "amount": 500
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a small replica of you made from materials worth at least 5 gp",
        "cost": 500
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "day",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You create an illusory copy of yourself that lasts for the duration. The copy can appear at any location within range that you have seen before, regardless of intervening obstacles. The illusion looks and sounds like you but is intangible. If the illusion takes any damage, it disappears, and the spell ends.",
      "You can use your action to move this illusion up to twice your speed, and make it gesture, speak, and behave in whatever way you choose. It mimics your mannerisms perfectly.",
      "You can see through its eyes and hear through its ears as if you were in its space. On your turn as a bonus action, you can switch from using its senses to using your own, or back again. While you are using its senses, you are {@condition blinded} and {@condition deafened} in regard to your own surroundings.",
      "Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence ({@skill Investigation}) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature."
    ],
    "conditionInflict": [
      "blinded",
      "deafened"
    ],
    "abilityCheck": [
      "intelligence"
    ],
    "miscTags": [
      "SGT",
      "UBA"
    ]
  },
  {
    "name": "Protection from Energy",
    "source": "PHB",
    "page": 270,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 58
      }
    ],
    "level": 3,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "For the duration, the willing creature you touch has resistance to one damage type of your choice: acid, cold, fire, lightning, or thunder."
    ],
    "damageResist": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Protection from Evil and Good",
    "source": "PHB",
    "page": 270,
    "srd": true,
    "level": 1,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "holy water or powdered silver and iron, which the spell consumes",
        "consume": true
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "Until the spell ends, one willing creature you touch is protected against certain types of creatures: aberrations, celestials, elementals, fey, fiends, and undead.",
      "The protection grants several benefits. Creatures of those types have disadvantage on attack rolls against the target. The target also can't be {@condition charmed}, {@condition frightened}, or possessed by them. If the target is already {@condition charmed}, {@condition frightened}, or possessed by such a creature, the target has advantage on any new saving throw against the relevant effect."
    ],
    "affectsCreatureType": [
      "aberration",
      "celestial",
      "elemental",
      "fey",
      "fiend",
      "undead"
    ],
    "miscTags": [
      "ADV"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Protection from Poison",
    "source": "PHB",
    "page": 270,
    "srd": true,
    "level": 2,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You touch a creature. If it is {@condition poisoned}, you neutralize the poison. If more than one poison afflicts the target, you neutralize one poison that you know is present, or you neutralize one at random.",
      "For the duration, the target has advantage on saving throws against being {@condition poisoned}, and it has resistance to poison damage."
    ],
    "damageResist": [
      "poison"
    ],
    "miscTags": [
      "ADV"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Purify Food and Drink",
    "source": "PHB",
    "page": 270,
    "srd": true,
    "level": 1,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 10
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "All nonmagical food and drink within a 5-foot-radius sphere centered on a point of your choice within range is purified and rendered free of poison and disease."
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Raise Dead",
    "source": "PHB",
    "page": 270,
    "srd": true,
    "basicRules": true,
    "level": 5,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "hour"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a diamond worth at least 500 gp, which the spell consumes",
        "cost": 50000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You return a dead creature you touch to life, provided that it has been dead no longer than 10 days. If the creature's soul is both willing and at liberty to rejoin the body, the creature returns to life with 1 hit point.",
      "This spell also neutralizes any poisons and cures nonmagical diseases that affected the creature at the time it died. This spell doesn't, however, remove magical diseases, curses, or similar effects; if these aren't first removed prior to casting the spell, they take effect when the creature returns to life. The spell can't return an undead creature to life.",
      "This spell closes all mortal wounds, but it doesn't restore missing body parts. If the creature is lacking body parts or organs integral for its survival—its head, for instance—the spell automatically fails.",
      "Coming back from the dead is an ordeal. The target takes a −4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears."
    ],
    "affectsCreatureType": [
      "aberration",
      "beast",
      "celestial",
      "construct",
      "dragon",
      "elemental",
      "fey",
      "fiend",
      "giant",
      "humanoid",
      "monstrosity",
      "ooze",
      "plant"
    ],
    "miscTags": [
      "HL"
    ]
  },
  {
    "name": "Rary's Telepathic Bond",
    "source": "PHB",
    "page": 270,
    "srd": "Telepathic Bond",
    "level": 5,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "pieces of eggshell from two different kinds of creatures"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "You forge a telepathic link among up to eight willing creatures of your choice within range, psychically linking each creature to all the others for the duration. Creatures with Intelligence scores of 2 or less aren't affected by this spell.",
      "Until the spell ends, the targets can communicate telepathically through the bond whether or not they have a common language. The communication is possible over any distance, though it can't extend to other planes of existence."
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Ray of Enfeeblement",
    "source": "PHB",
    "page": 271,
    "srd": true,
    "level": 2,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "A black beam of enervating energy springs from your finger toward a creature within range. Make a ranged spell attack against the target. On a hit, the target deals only half damage with weapon attacks that use Strength until the spell ends.",
      "At the end of each of the target's turns, it can make a Constitution saving throw against the spell. On a success, the spell ends."
    ],
    "spellAttack": [
      "R"
    ],
    "savingThrow": [
      "constitution"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Ray of Frost",
    "source": "PHB",
    "page": 271,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 58
      }
    ],
    "level": 0,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes {@damage 1d8} cold damage, and its speed is reduced by 10 feet until the start of your next turn.",
      "The spell's damage increases by {@dice 1d8} when you reach 5th level ({@damage 2d8}), 11th level ({@damage 3d8}), and 17th level ({@damage 4d8})."
    ],
    "scalingLevelDice": {
      "label": "cold damage",
      "scaling": {
        "1": "1d8",
        "5": "2d8",
        "11": "3d8",
        "17": "4d8"
      }
    },
    "damageInflict": [
      "cold"
    ],
    "spellAttack": [
      "R"
    ],
    "miscTags": [
      "SCL"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Ray of Sickness",
    "source": "PHB",
    "page": 271,
    "level": 1,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "A ray of sickening greenish energy lashes out toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes {@damage 2d8} poison damage and must make a Constitution saving throw. On a failed save, it is also {@condition poisoned} until the end of your next turn."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by {@scaledamage 2d8|1-9|1d8} for each slot level above 1st."
        ]
      }
    ],
    "damageInflict": [
      "poison"
    ],
    "conditionInflict": [
      "poisoned"
    ],
    "spellAttack": [
      "R"
    ],
    "savingThrow": [
      "constitution"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Regenerate",
    "source": "PHB",
    "page": 271,
    "srd": true,
    "basicRules": true,
    "level": 7,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a prayer wheel and holy water"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You touch a creature and stimulate its natural healing ability. The target regains {@dice 4d8 + 15} hit points. For the duration of the spell, the target regains 1 hit point at the start of each of its turns (10 hit points each minute).",
      "The target's severed body members (fingers, legs, tails, and so on), if any, are restored after 2 minutes. If you have the severed part and hold it to the stump, the spell instantaneously causes the limb to knit to the stump."
    ],
    "miscTags": [
      "HL"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Reincarnate",
    "source": "PHB",
    "page": 271,
    "srd": true,
    "level": 5,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "hour"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "rare oils and unguents worth at least 1,000 gp, which the spell consumes",
        "cost": 100000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You touch a dead humanoid or a piece of a dead humanoid. Provided that the creature has been dead no longer than 10 days, the spell forms a new adult body for it and then calls the soul to enter that body. If the target's soul isn't free or willing to do so, the spell fails.",
      "The magic fashions a new body for the creature to inhabit, which likely causes the creature's race to change. The DM rolls a {@dice d100} and consults the following table to determine what form the creature takes when restored to life, or the DM chooses a form.",
      {
        "type": "table",
        "caption": "Reincarnate Races",
        "colLabels": [
          "{@dice d100}",
          "Race"
        ],
        "colStyles": [
          "col-1 text-center no-wrap",
          "col-11"
        ],
        "rows": [
          [
            {
              "type": "cell",
              "roll": {
                "min": 1,
                "max": 4,
                "pad": true
              }
            },
            "{@race Dragonborn}"
          ],
          [
            {
              "type": "cell",
              "roll": {
                "min": 5,
                "max": 13,
                "pad": true
              }
            },
            "{@race dwarf (hill)||Dwarf, hill}"
          ],
          [
            {
              "type": "cell",
              "roll": {
                "min": 14,
                "max": 21
              }
            },
            "{@race dwarf (mountain)||Dwarf, mountain}"
          ],
          [
            {
              "type": "cell",
              "roll": {
                "min": 22,
                "max": 25
              }
            },
            "{@race elf (drow)||Elf, dark}"
          ],
          [
            {
              "type": "cell",
              "roll": {
                "min": 26,
                "max": 34
              }
            },
            "{@race elf (high)||Elf, high}"
          ],
          [
            {
              "type": "cell",
              "roll": {
                "min": 35,
                "max": 42
              }
            },
            "{@race elf (wood)||Elf, wood}"
          ],
          [
            {
              "type": "cell",
              "roll": {
                "min": 43,
                "max": 46
              }
            },
            "{@race gnome (forest)||Gnome, forest}"
          ],
          [
            {
              "type": "cell",
              "roll": {
                "min": 47,
                "max": 52
              }
            },
            "{@race gnome (rock)||Gnome, rock}"
          ],
          [
            {
              "type": "cell",
              "roll": {
                "min": 53,
                "max": 56
              }
            },
            "{@race Half-elf}"
          ],
          [
            {
              "type": "cell",
              "roll": {
                "min": 57,
                "max": 60
              }
            },
            "{@race Half-orc}"
          ],
          [
            {
              "type": "cell",
              "roll": {
                "min": 61,
                "max": 68
              }
            },
            "{@race halfling (lightfoot)||Halfling, lightfoot}"
          ],
          [
            {
              "type": "cell",
              "roll": {
                "min": 69,
                "max": 76
              }
            },
            "{@race halfling (stout)||Halfling, stout}"
          ],
          [
            {
              "type": "cell",
              "roll": {
                "min": 77,
                "max": 96
              }
            },
            "{@race Human}"
          ],
          [
            {
              "type": "cell",
              "roll": {
                "min": 97,
                "max": 0,
                "pad": true
              }
            },
            "{@race Tiefling}"
          ]
        ]
      },
      "The reincarnated creature recalls its former life and experiences. It retains the capabilities it had in its original form, except it exchanges its original race for the new one and changes its racial traits accordingly."
    ],
    "affectsCreatureType": [
      "humanoid"
    ],
    "miscTags": [
      "HL",
      "RO"
    ]
  },
  {
    "name": "Remove Curse",
    "source": "PHB",
    "page": 271,
    "srd": true,
    "basicRules": true,
    "level": 3,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "At your touch, all curses affecting one creature or object end. If the object is a cursed magic item, its curse remains, but the spell breaks its owner's attunement to the object so it can be removed or discarded."
    ],
    "miscTags": [
      "OBJ"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Resistance",
    "source": "PHB",
    "page": 272,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 58
      }
    ],
    "level": 0,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a miniature cloak"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You touch one willing creature. Once before the spell ends, the target can roll a {@dice d4} and add the number rolled to one saving throw of its choice. It can roll the die before or after making the saving throw. The spell then ends."
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Resurrection",
    "source": "PHB",
    "page": 272,
    "srd": true,
    "basicRules": true,
    "level": 7,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "hour"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a diamond worth at least 1,000 gp, which the spell consumes",
        "cost": 100000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You touch a dead creature that has been dead for no more than a century, that didn't die of old age, and that isn't undead. If its soul is free and willing, the target returns to life with all its hit points.",
      "This spell neutralizes any poisons and cures normal diseases afflicting the creature when it died. It doesn't, however, remove magical diseases, curses, and the like; if such effects aren't removed prior to casting the spell, they afflict the target on its return to life.",
      "This spell closes all mortal wounds and restores any missing body parts.",
      "Coming back from the dead is an ordeal. The target takes a −4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears.",
      "Casting this spell to restore life to a creature that has been dead for one year or longer taxes you greatly. Until you finish a long rest, you can't cast spells again, and you have disadvantage on all attack rolls, ability checks, and saving throws."
    ],
    "affectsCreatureType": [
      "undead"
    ],
    "miscTags": [
      "HL"
    ]
  },
  {
    "name": "Reverse Gravity",
    "source": "PHB",
    "page": 272,
    "srd": true,
    "level": 7,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 100
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a lodestone and iron filings"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "This spell reverses gravity in a 50-foot-radius, 100-foot-high cylinder centered on a point within range. All creatures and objects that aren't somehow anchored to the ground in the area fall upward and reach the top of the area when you cast this spell. A creature can make a Dexterity saving throw to grab onto a fixed object it can reach, thus avoiding the fall.",
      "If some solid object (such as a ceiling) is encountered in this fall, falling objects and creatures strike it just as they would during a normal downward fall. If an object or creature reaches the top of the area without striking anything, it remains there, oscillating slightly, for the duration.",
      "At the end of the duration, affected objects and creatures fall back down."
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "OBJ"
    ],
    "areaTags": [
      "Y"
    ]
  },
  {
    "name": "Revivify",
    "source": "PHB",
    "page": 272,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 58
      }
    ],
    "level": 3,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "diamonds worth 300 gp, which the spell consumes",
        "cost": 30000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You touch a creature that has died within the last minute. That creature returns to life with 1 hit point. This spell can't return to life a creature that has died of old age, nor can it restore any missing body parts."
    ],
    "miscTags": [
      "HL"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Rope Trick",
    "source": "PHB",
    "page": 272,
    "srd": true,
    "level": 2,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "powdered corn extract and a twisted loop of parchment"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You touch a length of rope that is up to 60 feet long. One end of the rope then rises into the air until the whole rope hangs perpendicular to the ground. At the upper end of the rope, an invisible entrance opens to an extradimensional space that lasts until the spell ends.",
      "The extradimensional space can be reached by climbing to the top of the rope. The space can hold as many as eight Medium or smaller creatures. The rope can be pulled into the space, making the rope disappear from view outside the space.",
      "Attacks and spells can't cross through the entrance into or out of the extradimensional space, but those inside can see out of it as if through a 3-foot-by-5-foot window centered on the rope.",
      "Anything inside the extradimensional space drops out when the spell ends."
    ]
  },
  {
    "name": "Sacred Flame",
    "source": "PHB",
    "page": 272,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 58
      }
    ],
    "level": 0,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take {@damage 1d8} radiant damage. The target gains no benefit from cover for this saving throw.",
      "The spell's damage increases by {@dice 1d8} when you reach 5th level ({@damage 2d8}), 11th level ({@damage 3d8}), and 17th level ({@damage 4d8})."
    ],
    "scalingLevelDice": {
      "label": "radiant damage",
      "scaling": {
        "1": "1d8",
        "5": "2d8",
        "11": "3d8",
        "17": "4d8"
      }
    },
    "damageInflict": [
      "radiant"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "SCL",
      "SGT"
    ],
    "areaTags": [
      "ST"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Sanctuary",
    "source": "PHB",
    "page": 272,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 58
      }
    ],
    "level": 1,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a small silver mirror"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn't protect the warded creature from area effects, such as the explosion of a {@spell fireball}.",
      "If the warded creature makes an attack, casts a spell that affects an enemy, or deals damage to another creature, this spell ends."
    ],
    "savingThrow": [
      "wisdom"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Scorching Ray",
    "source": "PHB",
    "page": 273,
    "srd": true,
    "level": 2,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You create three rays of fire and hurl them at targets within range. You can hurl them at one target or several.",
      "Make a ranged spell attack for each ray. On a hit, the target takes {@damage 2d6} fire damage."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, you create one additional ray for each slot level above 2nd."
        ]
      }
    ],
    "damageInflict": [
      "fire"
    ],
    "spellAttack": [
      "R"
    ],
    "areaTags": [
      "MT",
      "ST"
    ]
  },
  {
    "name": "Scrying",
    "source": "PHB",
    "page": 273,
    "srd": true,
    "level": 5,
    "school": "D",
    "time": [
      {
        "number": 10,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a focus worth at least 1,000 gp, such as a crystal ball, a silver mirror, or a font filled with holy water",
        "cost": 100000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "You can see and hear a particular creature you choose that is on the same plane of existence as you. The target must make a Wisdom saving throw, which is modified by how well you know the target and the sort of physical connection you have to it. If a target knows you're casting this spell, it can fail the saving throw voluntarily if it wants to be observed.",
      {
        "type": "table",
        "caption": "Knowledge of Target",
        "colLabels": [
          "Knowledge",
          "Save Modifier"
        ],
        "colStyles": [
          "col-11",
          "col-1 text-center"
        ],
        "rows": [
          [
            "Secondhand (you have heard of the target)",
            "+5"
          ],
          [
            "Firsthand (you have met the target)",
            "+0"
          ],
          [
            "Familiar (you know the target well)",
            "-5"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "Connection to Target",
        "colLabels": [
          "Connection",
          "Save Modifier"
        ],
        "colStyles": [
          "col-11",
          "col-1 text-center"
        ],
        "rows": [
          [
            "Likeness or picture",
            "-2"
          ],
          [
            "Possession or garment",
            "-4"
          ],
          [
            "Body part, lock of hair, bit of nail, or the like",
            "-10"
          ]
        ]
      },
      "On a successful save, the target isn't affected, and you can't use this spell against it again for 24 hours.",
      "On a failed save, the spell creates an invisible sensor within 10 feet of the target. You can see and hear through the sensor as if you were there. The sensor moves with the target, remaining within 10 feet of it for the duration. A creature that can see {@condition invisible} objects sees the sensor as a luminous orb about the size of your fist.",
      "Instead of targeting a creature, you can choose a location you have seen before as the target of this spell. When you do, the sensor appears at that location and doesn't move."
    ],
    "savingThrow": [
      "wisdom"
    ]
  },
  {
    "name": "Searing Smite",
    "source": "PHB",
    "page": 274,
    "level": 1,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "The next time you hit a creature with a melee weapon attack during the spell's duration, your weapon flares with white-hot intensity, and the attack deals an extra {@damage 1d6} fire damage to the target and causes the target to ignite in flames. At the start of each of its turns until the spell ends, the target must make a Constitution saving throw. On a failed save, it takes {@damage 1d6} fire damage. On a successful save, the spell ends. If the target or a creature within 5 feet of it uses an action to put out the flames, or if some other effect douses the flames (such as the target being submerged in water), the spell ends."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, the initial extra damage dealt by the attack increases by {@scaledamage 1d6|1-9|1d6} for each slot level above 1st."
        ]
      }
    ],
    "damageInflict": [
      "fire"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "AAD"
    ]
  },
  {
    "name": "See Invisibility",
    "source": "PHB",
    "page": 274,
    "srd": true,
    "level": 2,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a pinch of talc and a small sprinkling of powdered silver"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "entries": [
      "For the duration, you see {@condition invisible} creatures and objects as if they were visible, and you can see into the Ethereal Plane. Ethereal creatures and objects appear ghostly and translucent."
    ]
  },
  {
    "name": "Seeming",
    "source": "PHB",
    "page": 274,
    "srd": true,
    "level": 5,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 8
        }
      }
    ],
    "entries": [
      "This spell allows you to change the appearance of any number of creatures that you can see within range. You give each target you choose a new, illusory appearance. An unwilling target can make a Charisma saving throw, and if it succeeds, it is unaffected by this spell.",
      "The spell disguises physical appearance as well as clothing, armor, weapons, and equipment. You can make each creature seem 1 foot shorter or taller and appear thin, fat, or in between. You can't change a target's body type, so you must choose a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you. The spell lasts for the duration, unless you use your action to dismiss it sooner.",
      "The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to a creature's outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel the creature's head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair.",
      "A creature can use its action to inspect a target and make an Intelligence ({@skill Investigation}) check against your spell save DC. If it succeeds, it becomes aware that the target is disguised."
    ],
    "savingThrow": [
      "charisma"
    ],
    "abilityCheck": [
      "intelligence"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Sending",
    "source": "PHB",
    "page": 274,
    "srd": true,
    "level": 3,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "unlimited"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a short piece of fine copper wire"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "round",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You send a short message of twenty-five words or less to a creature with which you are familiar. The creature hears the message in its mind, recognizes you as the sender if it knows you, and can answer in a like manner immediately. The spell enables creatures with Intelligence scores of at least 1 to understand the meaning of your message.",
      "You can send the message across any distance and even to other planes of existence, but if the target is on a different plane than you, there is a {@chance 5|||Message lost!|Message arrives} chance that the message doesn't arrive."
    ]
  },
  {
    "name": "Sequester",
    "source": "PHB",
    "page": 274,
    "srd": true,
    "level": 7,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a powder composed of diamond, emerald, ruby, and sapphire dust worth at least 5,000 gp, which the spell consumes",
        "cost": 500000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "permanent",
        "ends": [
          "dispel"
        ]
      }
    ],
    "entries": [
      "By means of this spell, a willing creature or an object can be hidden away, safe from detection for the duration. When you cast the spell and touch the target, it becomes {@condition invisible} and can't be targeted by {@filter divination spells|spells|school=D} or perceived through scrying sensors created by divination spells.",
      "If the target is a creature, it falls into a state of suspended animation. Time ceases to flow for it, and it doesn't grow older.",
      "You can set a condition for the spell to end early. The condition can be anything you choose, but it must occur or be visible within 1 mile of the target. Examples include \\"after 1,000 years\\" or \\"when the {@creature tarrasque} awakens.\\" This spell also ends if the target takes any damage."
    ],
    "conditionInflict": [
      "invisible"
    ],
    "miscTags": [
      "OBJ"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Shapechange",
    "source": "PHB",
    "page": 274,
    "srd": true,
    "level": 9,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a jade circlet worth at least 1,500 gp, which you must place on your head before you cast the spell",
        "cost": 150000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You assume the form of a different creature for the duration. The new form can be of any creature with a challenge rating equal to your level or lower. The creature can't be a construct or an undead, and you must have seen the sort of creature at least once. You transform into an average example of that creature, one without any class levels or the Spellcasting trait.",
      "Your game statistics are replaced by the statistics of the chosen creature, though you retain your alignment and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus listed in its statistics is higher than yours, use the creature's bonus in place of yours. You can't use any legendary actions or lair actions of the new form.",
      "You assume the hit points and Hit Dice of the new form. When you revert to your normal form, you return to the number of hit points you had before you transformed. If you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked {@condition unconscious}.",
      "You retain the benefit of any features from your class, race, or other source and can use them, provided that your new form is physically capable of doing so. You can't use any special senses you have (for example, {@sense darkvision}) unless your new form also has that sense. You can only speak if the creature can normally speak.",
      "When you transform, you choose whether your equipment falls to the ground, merges into the new form, or is worn by it. Worn equipment functions as normal. The DM determines whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change shape or size to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge into your new form. Equipment that merges has no effect in that state.",
      "During this spell's duration, you can use your action to assume a different form following the same restrictions and rules for the original form, with one exception: if your new form has more hit points than your current one, your hit points remain at their current value."
    ],
    "affectsCreatureType": [
      "aberration",
      "beast",
      "celestial",
      "dragon",
      "elemental",
      "fey",
      "fiend",
      "giant",
      "humanoid",
      "monstrosity",
      "ooze",
      "plant"
    ]
  },
  {
    "name": "Shatter",
    "source": "PHB",
    "page": 275,
    "srd": true,
    "basicRules": true,
    "level": 2,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a chip of mica"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution saving throw. A creature takes {@damage 3d8} thunder damage on a failed save, or half as much damage on a successful one. A creature made of inorganic material such as stone, crystal, or metal has disadvantage on this saving throw.",
      "A nonmagical object that isn't being worn or carried also takes the damage if it's in the spell's area."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by {@scaledamage 3d8|2-9|1d8} for each slot level above 2nd."
        ]
      }
    ],
    "damageInflict": [
      "thunder"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "OBJ"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Shield",
    "source": "PHB",
    "page": 275,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 59
      }
    ],
    "level": 1,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "reaction",
        "condition": "which you take when you are hit by an attack or targeted by the {@spell magic missile} spell"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "round",
          "amount": 1
        }
      }
    ],
    "entries": [
      "An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from {@spell magic missile}."
    ],
    "miscTags": [
      "MAC"
    ]
  },
  {
    "name": "Shield of Faith",
    "source": "PHB",
    "page": 275,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 59
      }
    ],
    "level": 1,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a small parchment with a bit of holy text written on it"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration."
    ],
    "miscTags": [
      "MAC"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Shillelagh",
    "source": "PHB",
    "page": 275,
    "srd": true,
    "level": 0,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "mistletoe, a shamrock leaf, and a club or quarterstaff"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        }
      }
    ],
    "entries": [
      "The wood of a {@item club|phb} or {@item quarterstaff|phb} you are holding is imbued with nature's power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a {@dice d8}. The weapon also becomes magical, if it isn't already. The spell ends if you cast it again or if you let go of the weapon."
    ]
  },
  {
    "name": "Shocking Grasp",
    "source": "PHB",
    "page": 275,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 59
      }
    ],
    "level": 0,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes {@damage 1d8} lightning damage, and it can't take reactions until the start of its next turn.",
      "The spell's damage increases by {@dice 1d8} when you reach 5th level ({@damage 2d8}), 11th level ({@damage 3d8}), and 17th level ({@damage 4d8})."
    ],
    "scalingLevelDice": {
      "label": "lightning damage",
      "scaling": {
        "1": "1d8",
        "5": "2d8",
        "11": "3d8",
        "17": "4d8"
      }
    },
    "damageInflict": [
      "lightning"
    ],
    "spellAttack": [
      "M"
    ],
    "miscTags": [
      "SCL"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Silence",
    "source": "PHB",
    "page": 275,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 59
      }
    ],
    "level": 2,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "For the duration, no sound can be created within or pass through a 20-foot-radius sphere centered on a point you choose within range. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are {@condition deafened} while entirely inside it. Casting a spell that includes a verbal component is impossible there."
    ],
    "conditionInflict": [
      "deafened"
    ],
    "miscTags": [
      "OBJ"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Silent Image",
    "source": "PHB",
    "page": 276,
    "srd": true,
    "basicRules": true,
    "level": 1,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a bit of fleece"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot cube. The image appears at a spot within range and lasts for the duration. The image is purely visual; it isn't accompanied by sound, smell, or other sensory effects.",
      "You can use your action to cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking.",
      "Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence ({@skill Investigation}) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image."
    ],
    "abilityCheck": [
      "intelligence"
    ]
  },
  {
    "name": "Simulacrum",
    "source": "PHB",
    "page": 276,
    "srd": true,
    "level": 7,
    "school": "I",
    "time": [
      {
        "number": 12,
        "unit": "hour"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "snow or ice in quantities sufficient to make a life-size copy of the duplicated creature; some hair, fingernail clippings, or other piece of that creature's body placed inside the snow or ice; and powdered ruby worth 1,500 gp, sprinkled over the duplicate and consumed by the spell",
        "cost": 150000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "permanent",
        "ends": [
          "dispel"
        ]
      }
    ],
    "entries": [
      "You shape an illusory duplicate of one beast or humanoid that is within range for the entire casting time of the spell. The duplicate is a creature, partially real and formed from ice or snow, and it can take actions and otherwise be affected as a normal creature. It appears to be the same as the original, but it has half the creature's hit point maximum and is formed without any equipment. Otherwise, the illusion uses all the statistics of the creature it duplicates, except that it is a construct.",
      "The simulacrum is friendly to you and creatures you designate. It obeys your spoken commands, moving and acting in accordance with your wishes and acting on your turn in combat. The simulacrum lacks the ability to learn or become more powerful, so it never increases its level or other abilities, nor can it regain expended spell slots.",
      "If the simulacrum is damaged, you can repair it in an alchemical laboratory, using rare herbs and minerals worth 100 gp per hit point it regains. The simulacrum lasts until it drops to 0 hit points, at which point it reverts to snow and melts instantly.",
      "If you cast this spell again, any currently active duplicates you created with this spell are instantly destroyed."
    ],
    "affectsCreatureType": [
      "beast",
      "humanoid"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Sleep",
    "source": "PHB",
    "page": 276,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 59
      }
    ],
    "level": 1,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a pinch of fine sand, rose petals, or a cricket"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        }
      }
    ],
    "entries": [
      "This spell sends creatures into a magical slumber. Roll {@dice 5d8}; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring {@condition unconscious} creatures).",
      "Starting with the creature that has the lowest current hit points, each creature affected by this spell falls {@condition unconscious} until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected.",
      "Undead and creatures immune to being {@condition charmed} aren't affected by this spell."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, roll an additional {@scaledice 5d8|1-9|2d8} for each slot level above 1st."
        ]
      }
    ],
    "conditionInflict": [
      "unconscious"
    ],
    "affectsCreatureType": [
      "aberration",
      "beast",
      "celestial",
      "construct",
      "dragon",
      "elemental",
      "fey",
      "fiend",
      "giant",
      "humanoid",
      "monstrosity",
      "ooze",
      "plant",
      "undead"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Sleet Storm",
    "source": "PHB",
    "page": 276,
    "srd": true,
    "level": 3,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 150
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a pinch of dust and a few drops of water"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Until the spell ends, freezing rain and sleet fall in a 20-foot-tall cylinder with a 40-foot radius centered on a point you choose within range. The area is {@quickref Vision and Light|PHB|2||heavily obscured}, and exposed flames in the area are doused.",
      "The ground in the area is covered with slick ice, making it {@quickref difficult terrain||3}. When a creature enters the spell's area for the first time on a turn or starts its turn there, it must make a Dexterity saving throw. On a failed save, it falls {@condition prone}.",
      "If a creature starts its turn in the spell's area and is {@status concentration||concentrating} on a spell, the creature must make a successful Constitution saving throw against your spell save DC or lose {@status concentration}."
    ],
    "conditionInflict": [
      "prone"
    ],
    "savingThrow": [
      "dexterity",
      "constitution"
    ],
    "miscTags": [
      "OBS"
    ],
    "areaTags": [
      "Y"
    ]
  },
  {
    "name": "Slow",
    "source": "PHB",
    "page": 277,
    "srd": true,
    "level": 3,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a drop of molasses"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You alter time around up to six creatures of your choice in a 40-foot cube within range. Each target must succeed on a Wisdom saving throw or be affected by this spell for the duration.",
      "An affected target's speed is halved, it takes a −2 penalty to AC and Dexterity saving throws, and it can't use reactions. On its turn, it can use either an action or a bonus action, not both. Regardless of the creature's abilities or magic items, it can't make more than one melee or ranged attack during its turn.",
      "If the creature attempts to cast a spell with a casting time of 1 action, roll a {@dice d20}. On an 11 or higher, the spell doesn't take effect until the creature's next turn, and the creature must use its action on that turn to complete the spell. If it can't, the spell is wasted.",
      "A creature affected by this spell makes another Wisdom saving throw at the end of each of its turns. On a successful save, the effect ends for it."
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "MAC"
    ],
    "areaTags": [
      "C",
      "MT"
    ]
  },
  {
    "name": "Spare the Dying",
    "source": "PHB",
    "page": 277,
    "srd": true,
    "basicRules": true,
    "level": 0,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs."
    ],
    "affectsCreatureType": [
      "aberration",
      "beast",
      "celestial",
      "dragon",
      "elemental",
      "fey",
      "fiend",
      "giant",
      "humanoid",
      "monstrosity",
      "ooze",
      "plant"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Speak with Animals",
    "source": "PHB",
    "page": 277,
    "srd": true,
    "level": 1,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        }
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the DM's discretion."
    ],
    "affectsCreatureType": [
      "beast"
    ]
  },
  {
    "name": "Speak with Dead",
    "source": "PHB",
    "page": 277,
    "srd": true,
    "basicRules": true,
    "level": 3,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 10
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "burning incense"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        }
      }
    ],
    "entries": [
      "You grant the semblance of life and intelligence to a corpse of your choice within range, allowing it to answer the questions you pose. The corpse must still have a mouth and can't be undead. The spell fails if the corpse was the target of this spell within the last 10 days.",
      "Until the spell ends, you can ask the corpse up to five questions. The corpse knows only what it knew in life, including the languages it knew. Answers are usually brief, cryptic, or repetitive, and the corpse is under no compulsion to offer a truthful answer if you are hostile to it or it recognizes you as an enemy. This spell doesn't return the creature's soul to its body, only its animating spirit. Thus, the corpse can't learn new information, doesn't comprehend anything that has happened since it died, and can't speculate about future events."
    ],
    "affectsCreatureType": [
      "aberration",
      "beast",
      "celestial",
      "construct",
      "dragon",
      "elemental",
      "fey",
      "fiend",
      "giant",
      "humanoid",
      "monstrosity",
      "ooze",
      "plant"
    ]
  },
  {
    "name": "Speak with Plants",
    "source": "PHB",
    "page": 277,
    "srd": true,
    "level": 3,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "radius",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        }
      }
    ],
    "entries": [
      "You imbue plants within 30 feet of you with limited sentience and animation, giving them the ability to communicate with you and follow your simple commands. You can question plants about events in the spell's area within the past day, gaining information about creatures that have passed, weather, and other circumstances.",
      "You can also turn {@quickref difficult terrain||3} caused by plant growth (such as thickets and undergrowth) into ordinary terrain that lasts for the duration. Or you can turn ordinary terrain where plants are present into {@quickref difficult terrain||3} that lasts for the duration, causing vines and branches to hinder pursuers, for example.",
      "Plants might be able to perform other tasks on your behalf, at the DM's discretion. The spell doesn't enable plants to uproot themselves and move about, but they can freely move branches, tendrils, and stalks.",
      "If a plant creature is in the area, you can communicate with it as if you shared a common language, but you gain no magical ability to influence it.",
      "This spell can cause the plants created by the {@spell entangle} spell to release a {@condition restrained} creature."
    ]
  },
  {
    "name": "Spider Climb",
    "source": "PHB",
    "page": 277,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 60
      }
    ],
    "level": 2,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a drop of bitumen and a spider"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Until the spell ends, one willing creature you touch gains the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving its hands free. The target also gains a climbing speed equal to its walking speed."
    ]
  },
  {
    "name": "Spike Growth",
    "source": "PHB",
    "page": 277,
    "srd": true,
    "level": 2,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 150
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "seven sharp thorns or seven small twigs, each sharpened to a point"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "The ground in a 20-foot radius centered on a point within range twists and sprouts hard spikes and thorns. The area becomes {@quickref difficult terrain||3} for the duration. When a creature moves into or within the area, it takes {@damage 2d4} piercing damage for every 5 feet it travels.",
      "The transformation of the ground is camouflaged to look natural. Any creature that can't see the area at the time the spell is cast must make a Wisdom ({@skill Perception}) check against your spell save DC to recognize the terrain as hazardous before entering it."
    ],
    "damageInflict": [
      "piercing"
    ],
    "abilityCheck": [
      "wisdom"
    ],
    "miscTags": [
      "DFT"
    ],
    "areaTags": [
      "R"
    ]
  },
  {
    "name": "Spirit Guardians",
    "source": "PHB",
    "page": 278,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 60
      }
    ],
    "level": 3,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "radius",
      "distance": {
        "type": "feet",
        "amount": 15
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a holy symbol"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "You call forth spirits to protect you. They flit around you to a distance of 15 feet for the duration. If you are good or neutral, their spectral form appears angelic or fey (your choice). If you are evil, they appear fiendish.",
      "When you cast this spell, you can designate any number of creatures you can see to be unaffected by it. An affected creature's speed is halved in the area, and when the creature enters the area for the first time on a turn or starts its turn there, it must make a Wisdom saving throw. On a failed save, the creature takes {@damage 3d8} radiant damage (if you are good or neutral) or {@damage 3d8} necrotic damage (if you are evil). On a successful save, the creature takes half as much damage."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, the damage increases by {@scaledamage 3d8|3-9|1d8} for each slot level above 3rd."
        ]
      }
    ],
    "damageInflict": [
      "necrotic",
      "radiant"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Spiritual Weapon",
    "source": "PHB",
    "page": 278,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 60
      }
    ],
    "level": 2,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You create a floating, spectral weapon within range that lasts for the duration or until you cast this spell again. When you cast the spell, you can make a melee spell attack against a creature within 5 feet of the weapon. On a hit, the target takes force damage equal to {@damage 1d8} + your spellcasting ability modifier.",
      "As a bonus action on your turn, you can move the weapon up to 20 feet and repeat the attack against a creature within 5 feet of it.",
      "The weapon can take whatever form you choose. Clerics of deities who are associated with a particular weapon (as St. Cuthbert is known for his mace and Thor for his hammer) make this spell's effect resemble that weapon."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by {@scaledamage 1d8|2,4,6,8|1d8} for every two slot levels above 2nd."
        ]
      }
    ],
    "damageInflict": [
      "force"
    ],
    "spellAttack": [
      "M"
    ],
    "miscTags": [
      "UBA"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Staggering Smite",
    "source": "PHB",
    "page": 278,
    "level": 4,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "The next time you hit a creature with a melee weapon attack during this spell's duration, your weapon pierces both body and mind, and the attack deals an extra {@damage 4d6} psychic damage to the target. The target must make a Wisdom saving throw. On a failed save, it has disadvantage on attack rolls and ability checks, and can't take reactions, until the end of its next turn."
    ],
    "damageInflict": [
      "psychic"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "AAD"
    ]
  },
  {
    "name": "Stinking Cloud",
    "source": "PHB",
    "page": 278,
    "srd": true,
    "level": 3,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a rotten egg or several skunk cabbage leaves"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You create a 20-foot-radius sphere of yellow, nauseating gas centered on a point within range. The cloud spreads around corners, and its area is {@quickref Vision and Light|PHB|2||heavily obscured}. The cloud lingers in the air for the duration.",
      "Each creature that is completely within the cloud at the start of its turn must make a Constitution saving throw against poison. On a failed save, the creature spends its action that turn retching and reeling. Creatures that don't need to breathe or are immune to poison automatically succeed on this saving throw.",
      "A moderate wind (at least 10 miles per hour) disperses the cloud after 4 rounds. A strong wind (at least 20 miles per hour) disperses it after 1 round."
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "OBS"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Stone Shape",
    "source": "PHB",
    "page": 278,
    "srd": true,
    "level": 4,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "soft clay, which must be worked into roughly the desired shape of the stone object"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You touch a stone object of Medium size or smaller or a section of stone no more than 5 feet in any dimension and form it into any shape that suits your purpose. So, for example, you could shape a large rock into a weapon, idol, or coffer, or make a small passage through a wall, as long as the wall is less than 5 feet thick. You could also shape a stone door or its frame to seal the door shut. The object you create can have up to two hinges and a latch, but finer mechanical detail isn't possible."
    ],
    "miscTags": [
      "OBJ"
    ]
  },
  {
    "name": "Stoneskin",
    "source": "PHB",
    "page": 278,
    "srd": true,
    "basicRules": true,
    "level": 4,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "diamond dust worth 100 gp, which the spell consumes",
        "cost": 10000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "This spell turns the flesh of a willing creature you touch as hard as stone. Until the spell ends, the target has resistance to nonmagical bludgeoning, piercing, and slashing damage."
    ],
    "damageResist": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Storm of Vengeance",
    "source": "PHB",
    "page": 279,
    "srd": true,
    "level": 9,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "sight"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "A churning storm cloud forms, centered on a point you can see and spreading to a radius of 360 feet. Lightning flashes in the area, thunder booms, and strong winds roar. Each creature under the cloud (no more than 5,000 feet beneath the cloud) when it appears must make a Constitution saving throw. On a failed save, a creature takes {@damage 2d6} thunder damage and becomes {@condition deafened} for 5 minutes.",
      "Each round you maintain {@status concentration} on this spell, the storm produces different effects on your turn.",
      {
        "type": "entries",
        "name": "Round 2",
        "entries": [
          "Acidic rain falls from the cloud. Each creature and object under the cloud takes {@damage 1d6} acid damage."
        ]
      },
      {
        "type": "entries",
        "name": "Round 3",
        "entries": [
          "You call six bolts of lightning from the cloud to strike six creatures or objects of your choice beneath the cloud. A given creature or object can't be struck by more than one bolt. A struck creature must make a Dexterity saving throw. The creature takes {@damage 10d6} lightning damage on a failed save, or half as much damage on a successful one."
        ]
      },
      {
        "type": "entries",
        "name": "Round 4",
        "entries": [
          "Hailstones rain down from the cloud. Each creature under the cloud takes {@damage 2d6} bludgeoning damage."
        ]
      },
      {
        "type": "entries",
        "name": "Round 5–10",
        "entries": [
          "Gusts and freezing rain assail the area under the cloud. The area becomes {@quickref difficult terrain||3} and is {@quickref Vision and Light|PHB|2||heavily obscured}. Each creature there takes {@damage 1d6} cold damage. Ranged weapon attacks in the area are impossible. The wind and rain count as a severe distraction for the purposes of maintaining {@status concentration} on spells. Finally, gusts of strong wind (ranging from 20 to 50 miles per hour) automatically disperse fog, mists, and similar phenomena in the area, whether mundane or magical."
        ]
      }
    ],
    "damageInflict": [
      "acid",
      "bludgeoning",
      "cold",
      "lightning",
      "thunder"
    ],
    "conditionInflict": [
      "deafened"
    ],
    "savingThrow": [
      "constitution",
      "dexterity"
    ],
    "miscTags": [
      "DFT",
      "OBJ",
      "OBS",
      "SGT"
    ],
    "areaTags": [
      "Y"
    ]
  },
  {
    "name": "Suggestion",
    "source": "PHB",
    "page": 279,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 60
      }
    ],
    "level": 2,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "m": "a snake's tongue and either a bit of honeycomb or a drop of sweet oil"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 8
        },
        "concentration": true
      }
    ],
    "entries": [
      "You suggest a course of activity (limited to a sentence or two) and magically influence a creature you can see within range that can hear and understand you. Creatures that can't be {@condition charmed} are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act ends the spell.",
      "The target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do.",
      "You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a knight give her warhorse to the first beggar she meets. If the condition isn't met before the spell expires, the activity isn't performed.",
      "If you or any of your companions damage the target, the spell ends."
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Sunbeam",
    "source": "PHB",
    "page": 279,
    "srd": true,
    "level": 6,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "line",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a magnifying glass"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "A beam of brilliant light flashes out from your hand in a 5-foot-wide, 60-foot-long line. Each creature in the line must make a Constitution saving throw. On a failed save, a creature takes {@damage 6d8} radiant damage and is {@condition blinded} until your next turn. On a successful save, it takes half as much damage and isn't {@condition blinded} by this spell. Undead and oozes have disadvantage on this saving throw.",
      "You can create a new line of radiance as your action on any turn until the spell ends.",
      "For the duration, a mote of brilliant radiance shines in your hand. It sheds bright light in a 30-foot radius and dim light for an additional 30 feet. This light is sunlight."
    ],
    "damageInflict": [
      "radiant"
    ],
    "conditionInflict": [
      "blinded"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "LGTS"
    ],
    "areaTags": [
      "L"
    ]
  },
  {
    "name": "Sunburst",
    "source": "PHB",
    "page": 279,
    "srd": true,
    "basicRules": true,
    "level": 8,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 150
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "fire and a piece of sunstone"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "Brilliant sunlight flashes in a 60-foot radius centered on a point you choose within range. Each creature in that light must make a Constitution saving throw. On a failed save, a creature takes {@damage 12d6} radiant damage and is {@condition blinded} for 1 minute. On a successful save, it takes half as much damage and isn't {@condition blinded} by this spell. Undead and oozes have disadvantage on this saving throw.",
      "A creature {@condition blinded} by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer {@condition blinded}.",
      "This spell dispels any darkness in its area that was created by a spell."
    ],
    "damageInflict": [
      "radiant"
    ],
    "conditionInflict": [
      "blinded"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "LGT",
      "LGTS"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Swift Quiver",
    "source": "PHB",
    "page": 279,
    "level": 5,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a quiver containing at least one piece of ammunition"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You transmute your quiver so it produces an endless supply of nonmagical ammunition, which seems to leap into your hand when you reach for it.",
      "On each of your turns until the spell ends, you can use a bonus action to make two attacks with a weapon that uses ammunition from the quiver. Each time you make such a ranged attack, your quiver magically replaces the piece of ammunition you used with a similar piece of nonmagical ammunition. Any pieces of ammunition created by this spell disintegrate when the spell ends. If the quiver leaves your possession, the spell ends."
    ],
    "miscTags": [
      "UBA"
    ]
  },
  {
    "name": "Symbol",
    "source": "PHB",
    "page": 280,
    "srd": true,
    "level": 7,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "mercury, phosphorus, and powdered diamond and opal with a total value of at least 1,000 gp, which the spell consumes",
        "cost": 100000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "permanent",
        "ends": [
          "dispel",
          "trigger"
        ]
      }
    ],
    "entries": [
      "When you cast this spell, you inscribe a harmful glyph either on a surface (such as a section of floor, a wall, or a table) or within an object that can be closed to conceal the glyph (such as a book, a scroll, or a treasure chest). If you choose a surface, the glyph can cover an area of the surface no larger than 10 feet in diameter. If you choose an object, that object must remain in its place; if the object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered.",
      "The glyph is nearly invisible, requiring an Intelligence ({@skill Investigation}) check against your spell save DC to find it.",
      "You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, the most typical triggers include touching or stepping on the glyph, removing another object covering it, approaching within a certain distance of it, or manipulating the object that holds it. For glyphs inscribed within an object, the most common triggers are opening the object, approaching within a certain distance of it, or seeing or reading the glyph.",
      "You can further refine the trigger so the spell is activated only under certain circumstances or according to a creature's physical characteristics (such as height or weight), or physical kind (for example, the ward could be set to affect hags or shapechangers). You can also specify creatures that don't trigger the glyph, such as those who say a certain password.",
      "When you inscribe the glyph, choose one of the options below for its effect. Once triggered, the glyph glows, filling a 60-foot-radius sphere with dim light for 10 minutes, after which time the spell ends. Each creature in the sphere when the glyph activates is targeted by its effect, as is a creature that enters the sphere for the first time on a turn or ends its turn there.",
      {
        "type": "entries",
        "name": "Death",
        "entries": [
          "Each target must make a Constitution saving throw, taking {@damage 10d10} necrotic damage on a failed save, or half as much damage on a successful save."
        ]
      },
      {
        "type": "entries",
        "name": "Discord",
        "entries": [
          "Each target must make a Constitution saving throw. On a failed save, a target bickers and argues with other creatures for 1 minute. During this time, it is incapable of meaningful communication and has disadvantage on attack rolls and ability checks."
        ]
      },
      {
        "type": "entries",
        "name": "Fear",
        "entries": [
          "Each target must make a Wisdom saving throw and becomes {@condition frightened} for 1 minute on a failed save. While {@condition frightened}, the target drops whatever it is holding and must move at least 30 feet away from the glyph on each of its turns, if able."
        ]
      },
      {
        "type": "entries",
        "name": "Hopelessness",
        "entries": [
          "Each target must make a Charisma saving throw. On a failed save, the target is overwhelmed with despair for 1 minute. During this time, it can't attack or target any creature with harmful abilities, spells, or other magical effects."
        ]
      },
      {
        "type": "entries",
        "name": "Insanity",
        "entries": [
          "Each target must make an Intelligence saving throw. On a failed save, the target is driven insane for 1 minute. An insane creature can't take actions, can't understand what other creatures say, can't read, and speaks only in gibberish. The DM controls its movement, which is erratic."
        ]
      },
      {
        "type": "entries",
        "name": "Pain",
        "entries": [
          "Each target must make a Constitution saving throw and becomes {@condition incapacitated} with excruciating pain for 1 minute on a failed save."
        ]
      },
      {
        "type": "entries",
        "name": "Sleep",
        "entries": [
          "Each target must make a Wisdom saving throw and falls {@condition unconscious} for 10 minutes on a failed save. A creature awakens if it takes damage or if someone uses an action to shake or slap it awake."
        ]
      },
      {
        "type": "entries",
        "name": "Stunning",
        "entries": [
          "Each target must make a Wisdom saving throw and becomes {@condition stunned} for 1 minute on a failed save."
        ]
      }
    ],
    "damageInflict": [
      "necrotic"
    ],
    "conditionInflict": [
      "frightened",
      "incapacitated",
      "stunned",
      "unconscious"
    ],
    "savingThrow": [
      "constitution",
      "wisdom",
      "charisma",
      "intelligence"
    ],
    "abilityCheck": [
      "intelligence"
    ],
    "miscTags": [
      "LGT",
      "OBJ"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Tasha's Hideous Laughter",
    "source": "PHB",
    "page": 280,
    "srd": "Hideous Laughter",
    "level": 1,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "tiny tarts and a feather that is waved in the air"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "A creature of your choice that you can see within range perceives everything as hilariously funny and falls into fits of laughter if this spell affects it. The target must succeed on a Wisdom saving throw or fall {@condition prone}, becoming {@condition incapacitated} and unable to stand up for the duration. A creature with an Intelligence score of 4 or less isn't affected.",
      "At the end of each of its turns, and each time it takes damage, the target can make another Wisdom saving throw. The target has advantage on the saving throw if it's triggered by damage. On a success, the spell ends."
    ],
    "conditionInflict": [
      "incapacitated",
      "prone"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Telekinesis",
    "source": "PHB",
    "page": 280,
    "srd": true,
    "level": 5,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "You gain the ability to move or manipulate creatures or objects by thought. When you cast the spell, and as your action each round for the duration, you can exert your will on one creature or object that you can see within range, causing the appropriate effect below. You can affect the same target round after round, or choose a new one at any time. If you switch targets, the prior target is no longer affected by the spell.",
      {
        "type": "entries",
        "name": "Creature",
        "entries": [
          "You can try to move a Huge or smaller creature. Make an ability check with your spellcasting ability contested by the creature's Strength check. If you win the contest, you move the creature up to 30 feet in any direction, including upward but not beyond the range of this spell. Until the end of your next turn, the creature is {@condition restrained} in your telekinetic grip. A creature lifted upward is suspended in mid-air.",
          "On subsequent rounds, you can use your action to attempt to maintain your telekinetic grip on the creature by repeating the contest."
        ]
      },
      {
        "type": "entries",
        "name": "Object",
        "entries": [
          "You can try to move an object that weighs up to 1,000 pounds. If the object isn't being worn or carried, you automatically move it up to 30 feet in any direction, but not beyond the range of this spell.",
          "If the object is worn or carried by a creature, you must make an ability check with your spellcasting ability contested by that creature's Strength check. If you succeed, you pull the object away from that creature and can move it up to 30 feet in any direction but not beyond the range of this spell.",
          "You can exert fine control on objects with your telekinetic grip, such as manipulating a simple tool, opening a door or a container, stowing or retrieving an item from an open container, or pouring the contents from a vial."
        ]
      }
    ],
    "conditionInflict": [
      "restrained"
    ],
    "abilityCheck": [
      "strength"
    ],
    "miscTags": [
      "FMV",
      "OBJ",
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Telepathy",
    "source": "PHB",
    "page": 281,
    "level": 8,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "unlimited"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a pair of linked silver rings"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 24
        }
      }
    ],
    "entries": [
      "You create a telepathic link between yourself and a willing creature with which you are familiar. The creature can be anywhere on the same plane of existence as you. The spell ends if you or the target are no longer on the same plane.",
      "Until the spell ends, you and the target can instantaneously share words, images, sounds, and other sensory messages with one another through the link, and the target recognizes you as the creature it is communicating with. The spell enables a creature with an Intelligence score of at least 1 to understand the meaning of your words and take in the scope of any sensory messages you send to it."
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Teleport",
    "source": "PHB",
    "page": 281,
    "srd": true,
    "basicRules": true,
    "level": 7,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 10
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "This spell instantly transports you and up to eight willing creatures of your choice that you can see within range, or a single object that you can see within range, to a destination you select. If you target an object, it must be able to fit entirely inside a 10-foot cube, and it can't be held or carried by an unwilling creature.",
      "The destination you choose must be known to you, and it must be on the same plane of existence as you. Your familiarity with the destination determines whether you arrive there successfully. The DM rolls {@dice d100} and consults the table.",
      {
        "type": "table",
        "caption": "Teleportation",
        "colLabels": [
          "Familiarity",
          "Mishap",
          "Similar Area",
          "Off Target",
          "On Target"
        ],
        "colStyles": [
          "col-8",
          "col-1 text-center no-wrap",
          "col-1 text-center no-wrap",
          "col-1 text-center no-wrap",
          "col-1 text-center no-wrap"
        ],
        "rows": [
          [
            "Permanent circle",
            "—",
            "—",
            "—",
            "01–100"
          ],
          [
            "Associated object",
            "—",
            "—",
            "—",
            "01–100"
          ],
          [
            "Very familiar",
            "01–05",
            "06–13",
            "14–24",
            "25–100"
          ],
          [
            "Seen casually",
            "01–33",
            "34–43",
            "44–53",
            "54–100"
          ],
          [
            "Viewed once",
            "01–43",
            "44–53",
            "54–73",
            "74–100"
          ],
          [
            "Description",
            "01–43",
            "44–53",
            "54–73",
            "74–100"
          ],
          [
            "False destination",
            "01–50",
            "51–100",
            "—",
            "—"
          ]
        ]
      },
      {
        "type": "entries",
        "name": "Familiarity",
        "entries": [
          "\\"Permanent circle\\" means a permanent teleportation circle whose sigil sequence you know. \\"Associated object\\" means that you possess an object taken from the desired destination within the last six months, such as a book from a wizard's library, bed linen from a royal suite, or a chunk of marble from a lich's secret tomb."
        ]
      },
      "\\"Very familiar\\" is a place you have been very often, a place you have carefully studied, or a place you can see when you cast the spell. \\"Seen casually\\" is someplace you have seen more than once but with which you aren't very familiar. \\"Viewed once\\" is a place you have seen once, possibly using magic. \\"Description\\" is a place whose location and appearance you know through someone else's description, perhaps from a map.",
      "\\"False destination\\" is a place that doesn't exist. Perhaps you tried to scry an enemy's sanctum but instead viewed an illusion, or you are attempting to teleport to a familiar location that no longer exists.",
      {
        "type": "entries",
        "name": "On Target",
        "entries": [
          "You and your group (or the target object) appear where you want to."
        ]
      },
      {
        "type": "entries",
        "name": "Off Target",
        "entries": [
          "You and your group (or the target object) appear a random distance away from the destination in a random direction. Distance off target is {@dice 1d10 × 1d10} percent of the distance that was to be traveled. For example, if you tried to travel 120 miles, landed off target, and rolled a 5 and 3 on the two {@dice d10}s, then you would be off target by 15 percent, or 18 miles. The DM determines the direction off target randomly by rolling a {@dice d8} and designating 1 as north, 2 as northeast, 3 as east, and so on around the points of the compass. If you were teleporting to a coastal city and wound up 18 miles out at sea, you could be in trouble."
        ]
      },
      {
        "type": "entries",
        "name": "Similar Area",
        "entries": [
          "You and your group (or the target object) wind up in a different area that's visually or thematically similar to the target area. If you are heading for your home laboratory, for example, you might wind up in another wizard's laboratory or in an alchemical supply shop that has many of the same tools and implements as your laboratory. Generally, you appear in the closest similar place, but since the spell has no range limit, you could conceivably wind up anywhere on the plane."
        ]
      },
      {
        "type": "entries",
        "name": "Mishap",
        "entries": [
          "The spell's unpredictable magic results in a difficult journey. Each teleporting creature (or the target object) takes {@damage 3d10} force damage, and the DM rerolls on the table to see where you wind up (multiple mishaps can occur, dealing damage each time)."
        ]
      }
    ],
    "miscTags": [
      "OBJ",
      "RO",
      "SGT",
      "TP"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Teleportation Circle",
    "source": "PHB",
    "page": 282,
    "srd": true,
    "level": 5,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 10
      }
    },
    "components": {
      "v": true,
      "m": {
        "text": "rare chalks and inks infused with precious gems worth 50 gp, which the spell consumes",
        "cost": 5000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "round",
          "amount": 1
        }
      }
    ],
    "entries": [
      "As you cast the spell, you draw a 10-foot-diameter circle on the ground inscribed with sigils that link your location to a permanent teleportation circle of your choice whose sigil sequence you know and that is on the same plane of existence as you. A shimmering portal opens within the circle you drew and remains open until the end of your next turn. Any creature that enters the portal instantly appears within 5 feet of the destination circle or in the nearest unoccupied space if that space is occupied.",
      "Many major temples, guilds, and other important places have permanent teleportation circles inscribed somewhere within their confines. Each such circle includes a unique sigil sequence—a string of magical runes arranged in a particular pattern. When you first gain the ability to cast this spell, you learn the sigil sequences for two destinations on the Material Plane, determined by the DM. You can learn additional sigil sequences during your adventures. You can commit a new sigil sequence to memory after studying it for 1 minute.",
      "You can create a permanent teleportation circle by casting this spell in the same location every day for one year. You need not use the circle to teleport when you cast the spell in this way."
    ],
    "miscTags": [
      "PIR",
      "PRM",
      "TP"
    ]
  },
  {
    "name": "Tenser's Floating Disk",
    "source": "PHB",
    "page": 282,
    "srd": "Floating Disk",
    "level": 1,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a drop of mercury"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "This spell creates a circular, horizontal plane of force, 3 feet in diameter and 1 inch thick, that floats 3 feet above the ground in an unoccupied space of your choice that you can see within range. The disk remains for the duration, and can hold up to 500 pounds. If more weight is placed on it, the spell ends, and everything on the disk falls to the ground.",
      "The disk is immobile while you are within 20 feet of it. If you move more than 20 feet away from it, the disk follows you so that it remains within 20 feet of you. It can move across uneven terrain, up or down stairs, slopes and the like, but it can't cross an elevation change of 10 feet or more. For example, the disk can't move across a 10-foot-deep pit, nor could it leave such a pit if it was created at the bottom.",
      "If you move more than 100 feet from the disk (typically because it can't move around an obstacle to follow you), the spell ends."
    ],
    "miscTags": [
      "SGT"
    ]
  },
  {
    "name": "Thaumaturgy",
    "source": "PHB",
    "page": 282,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 61
      }
    ],
    "level": 0,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1,
          "upTo": true
        }
      }
    ],
    "entries": [
      "You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range:",
      {
        "type": "list",
        "items": [
          "Your voice booms up to three times as loud as normal for 1 minute.",
          "You cause flames to flicker, brighten, dim, or change color for 1 minute.",
          "You cause harmless tremors in the ground for 1 minute.",
          "You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.",
          "You instantaneously cause an unlocked door or window to fly open or slam shut.",
          "You alter the appearance of your eyes for 1 minute."
        ]
      },
      "If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time, and you can dismiss such an effect as an action."
    ]
  },
  {
    "name": "Thorn Whip",
    "source": "PHB",
    "page": 282,
    "level": 0,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "the stem of a plant with thorns"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes {@damage 1d6} piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you.",
      "This spell's damage increases by {@dice 1d6} when you reach 5th level ({@damage 2d6}), 11th level ({@damage 3d6}), and 17th level ({@damage 4d6})."
    ],
    "scalingLevelDice": {
      "label": "piercing damage",
      "scaling": {
        "1": "1d6",
        "5": "2d6",
        "11": "3d6",
        "17": "4d6"
      }
    },
    "damageInflict": [
      "piercing"
    ],
    "spellAttack": [
      "M"
    ],
    "miscTags": [
      "FMV",
      "SCL"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Thunderous Smite",
    "source": "PHB",
    "page": 282,
    "level": 1,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "The first time you hit with a melee weapon attack during this spell's duration, your weapon rings with thunder that is audible within 300 feet of you, and the attack deals an extra {@damage 2d6} thunder damage to the target. Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you and knocked {@condition prone}."
    ],
    "damageInflict": [
      "thunder"
    ],
    "conditionInflict": [
      "prone"
    ],
    "savingThrow": [
      "strength"
    ],
    "miscTags": [
      "AAD",
      "FMV"
    ]
  },
  {
    "name": "Thunderwave",
    "source": "PHB",
    "page": 282,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 61
      }
    ],
    "level": 1,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "cube",
      "distance": {
        "type": "feet",
        "amount": 15
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes {@damage 2d8} thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed.",
      "In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by {@scaledamage 2d8|1-9|1d8} for each slot level above 1st."
        ]
      }
    ],
    "damageInflict": [
      "thunder"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "FMV",
      "OBJ"
    ],
    "areaTags": [
      "C"
    ]
  },
  {
    "name": "Time Stop",
    "source": "PHB",
    "page": 283,
    "srd": true,
    "basicRules": true,
    "level": 9,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You briefly stop the flow of time for everyone but yourself. No time passes for other creatures, while you take {@dice 1d4 + 1} turns in a row, during which you can use actions and move as normal.",
      "This spell ends if one of the actions you use during this period, or any effects that you create during this period, affects a creature other than you or an object being worn or carried by someone other than you. In addition, the spell ends if you move to a place more than 1,000 feet from the location where you cast it."
    ]
  },
  {
    "name": "Tongues",
    "source": "PHB",
    "page": 283,
    "srd": true,
    "level": 3,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "m": "a small clay model of a ziggurat"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "entries": [
      "This spell grants the creature you touch the ability to understand any spoken language it hears. Moreover, when the target speaks, any creature that knows at least one language and can hear the target understands what it says."
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Transport via Plants",
    "source": "PHB",
    "page": 283,
    "srd": true,
    "level": 6,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 10
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "round",
          "amount": 1
        }
      }
    ],
    "entries": [
      "This spell creates a magical link between a Large or larger inanimate plant within range and another plant, at any distance, on the same plane of existence. You must have seen or touched the destination plant at least once before. For the duration, any creature can step into the target plant and exit from the destination plant by using 5 feet of movement."
    ],
    "miscTags": [
      "TP"
    ]
  },
  {
    "name": "Tree Stride",
    "source": "PHB",
    "page": 283,
    "srd": true,
    "level": 5,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You gain the ability to enter a tree and move from inside it to inside another tree of the same kind within 500 feet. Both trees must be living and at least the same size as you. You must use 5 feet of movement to enter a tree. You instantly know the location of all other trees of the same kind within 500 feet and, as part of the move used to enter the tree, can either pass into one of those trees or step out of the tree you're in. You appear in a spot of your choice within 5 feet of the destination tree, using another 5 feet of movement. If you have no movement left, you appear within 5 feet of the tree you entered.",
      "You can use this transportation ability once per round for the duration. You must end each turn outside a tree."
    ],
    "miscTags": [
      "TP"
    ]
  },
  {
    "name": "True Polymorph",
    "source": "PHB",
    "page": 283,
    "srd": true,
    "level": 9,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a drop of mercury, a dollop of gum arabic, and a wisp of smoke"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Choose one creature or nonmagical object that you can see within range. You transform the creature into a different creature, the creature into a nonmagical object, or the object into a creature (the object must be neither worn nor carried by another creature). The transformation lasts for the duration, or until the target drops to 0 hit points or dies. If you concentrate on this spell for the full duration, the transformation lasts until it is dispelled.",
      "This spell has no effect on a shapechanger or a creature with 0 hit points. An unwilling creature can make a Wisdom saving throw, and if it succeeds, it isn't affected by this spell.",
      {
        "type": "entries",
        "name": "Creature into Creature",
        "entries": [
          "If you turn a creature into another kind of creature, the new form can be any kind you choose whose challenge rating is equal to or less than the target's (or its level, if the target doesn't have a challenge rating). The target's game statistics, including mental ability scores, are replaced by the statistics of the new form. It retains its alignment and personality."
        ]
      },
      "The target assumes the hit points of its new form, and when it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked {@condition unconscious}.",
      "The creature is limited in the actions it can perform by the nature of its new form, and it can't speak, cast spells, or take any other action that requires hands or speech unless its new form is capable of such actions.",
      "The target's gear melds into the new form. The creature can't activate, use, wield, or otherwise benefit from any of its equipment.",
      {
        "type": "entries",
        "name": "Object into Creature",
        "entries": [
          "You can turn an object into any kind of creature, as long as the creature's size is no larger than the object's size and the creature's challenge rating is {@filter 9 or lower|bestiary|challenge rating=[&0;&9]|miscellaneous=!swarm}. The creature is friendly to you and your companions. It acts on each of your turns. You decide what action it takes and how it moves. The DM has the creature's statistics and resolves all of its actions and movement."
        ]
      },
      "If the spell becomes permanent, you no longer control the creature. It might remain friendly to you, depending on how you have treated it.",
      {
        "type": "entries",
        "name": "Creature into Object",
        "entries": [
          "If you turn a creature into an object, it transforms along with whatever it is wearing and carrying into that form, as long as the object's size is no larger than the creature's size. The creature's statistics become those of the object, and the creature has no memory of time spent in this form, after the spell ends and it returns to its normal form."
        ]
      }
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "OBJ",
      "PRM",
      "SGT",
      "SMN"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "True Resurrection",
    "source": "PHB",
    "page": 284,
    "srd": true,
    "basicRules": true,
    "level": 9,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "hour"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a sprinkle of holy water and diamonds worth at least 25,000 gp, which the spell consumes",
        "cost": 2500000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You touch a creature that has been dead for no longer than 200 years and that died for any reason except old age. If the creature's soul is free and willing, the creature is restored to life with all its hit points.",
      "This spell closes all wounds, neutralizes any poison, cures all diseases, and lifts any curses affecting the creature when it died. The spell replaces damaged or missing organs and limbs. If the creature was undead, it is restored to its non-undead form.",
      "The spell can even provide a new body if the original no longer exists, in which case you must speak the creature's name. The creature then appears in an unoccupied space you choose within 10 feet of you."
    ],
    "miscTags": [
      "HL"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "True Seeing",
    "source": "PHB",
    "page": 284,
    "srd": true,
    "basicRules": true,
    "level": 6,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "an ointment for the eyes that costs 25 gp; is made from mushroom powder, saffron, and fat; and is consumed by the spell",
        "cost": 2500,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "entries": [
      "This spell gives the willing creature you touch the ability to see things as they actually are. For the duration, the creature has {@sense truesight}, notices secret doors hidden by magic, and can see into the Ethereal Plane, all out to a range of 120 feet."
    ]
  },
  {
    "name": "True Strike",
    "source": "PHB",
    "page": 284,
    "srd": true,
    "level": 0,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "round",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the target's defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn't ended."
    ],
    "miscTags": [
      "ADV"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Tsunami",
    "source": "PHB",
    "page": 284,
    "level": 8,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "sight"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "round",
          "amount": 6
        },
        "concentration": true
      }
    ],
    "entries": [
      "A wall of water springs into existence at a point you choose within range. You can make the wall up to 300 feet long, 300 feet high, and 50 feet thick. The wall lasts for the duration.",
      "When the wall appears, each creature within its area must make a Strength saving throw. On a failed save, a creature takes {@damage 6d10} bludgeoning damage, or half as much damage on a successful save.",
      "At the start of each of your turns after the wall appears, the wall, along with any creatures in it, moves 50 feet away from you. Any Huge or smaller creature inside the wall or whose space the wall enters when it moves must succeed on a Strength saving throw or take {@damage 5d10} bludgeoning damage. A creature can take this damage only once per round. At the end of the turn, the wall's height is reduced by 50 feet, and the damage creatures take from the spell on subsequent rounds is reduced by {@dice 1d10}. When the wall reaches 0 feet in height, the spell ends.",
      "A creature caught in the wall can move by swimming. Because of the force of the wave, though, the creature must make a successful Strength ({@skill Athletics}) check against your spell save DC in order to move at all. If it fails the check, it can't move. A creature that moves out of the area falls to the ground."
    ],
    "damageInflict": [
      "bludgeoning"
    ],
    "savingThrow": [
      "strength"
    ],
    "abilityCheck": [
      "strength"
    ],
    "areaTags": [
      "W"
    ]
  },
  {
    "name": "Unseen Servant",
    "source": "PHB",
    "page": 284,
    "srd": true,
    "level": 1,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a piece of string and a bit of wood"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "This spell creates an {@condition invisible}, mindless, shapeless, Medium force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 hit point, and a Strength of 2, and it can't attack. If it drops to 0 hit points, the spell ends.",
      "Once on each of your turns as a bonus action, you can mentally command the servant to move up to 15 feet and interact with an object. The servant can perform simple tasks that a human servant could do, such as fetching things, cleaning, mending, folding clothes, lighting fires, serving food, and pouring wine. Once you give the command, the servant performs the task to the best of its ability until it completes the task, then waits for your next command.",
      "If you command the servant to perform a task that would move it more than 60 feet away from you, the spell ends."
    ],
    "miscTags": [
      "UBA"
    ]
  },
  {
    "name": "Vampiric Touch",
    "source": "PHB",
    "page": 285,
    "srd": true,
    "level": 3,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "The touch of your shadow-wreathed hand can siphon life force from others to heal your wounds. Make a melee spell attack against a creature within your reach. On a hit, the target takes {@damage 3d6} necrotic damage, and you regain hit points equal to half the amount of necrotic damage dealt. Until the spell ends, you can make the attack again on each of your turns as an action."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, the damage increases by {@scaledamage 3d6|3-9|1d6} for each slot level above 3rd."
        ]
      }
    ],
    "damageInflict": [
      "necrotic"
    ],
    "spellAttack": [
      "M"
    ],
    "miscTags": [
      "HL"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Vicious Mockery",
    "source": "PHB",
    "page": 285,
    "srd": true,
    "level": 0,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a Wisdom saving throw or take {@damage 1d4} psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.",
      "This spell's damage increases by {@dice 1d4} when you reach 5th level ({@damage 2d4}), 11th level ({@damage 3d4}), and 17th level ({@damage 4d4})."
    ],
    "scalingLevelDice": {
      "label": "psychic damage",
      "scaling": {
        "1": "1d4",
        "5": "2d4",
        "11": "3d4",
        "17": "4d4"
      }
    },
    "damageInflict": [
      "psychic"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "SCL",
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Wall of Fire",
    "source": "PHB",
    "page": 285,
    "srd": true,
    "basicRules": true,
    "level": 4,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a small piece of phosphorus"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall is opaque and lasts for the duration.",
      "When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes {@damage 5d8} fire damage, or half as much damage on a successful save.",
      "One side of the wall, selected by you when you cast this spell, deals {@damage 5d8} fire damage to each creature that ends its turn within 10 feet of that side or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side of the wall deals no damage."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 5th level or higher, the damage increases by {@scaledamage 5d8|4-9|1d8} for each slot level above 4th."
        ]
      }
    ],
    "damageInflict": [
      "fire"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "areaTags": [
      "W"
    ]
  },
  {
    "name": "Wall of Force",
    "source": "PHB",
    "page": 285,
    "srd": true,
    "level": 5,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a pinch of powder made by crushing a clear gemstone"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "An invisible wall of force springs into existence at a point you choose within range. The wall appears in any orientation you choose, as a horizontal or vertical barrier or at an angle. It can be free floating or resting on a solid surface. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-by-10-foot panels. Each panel must be contiguous with another panel. In any form, the wall is 1/4 inch thick. It lasts for the duration. If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice which side).",
      "Nothing can physically pass through the wall. It is immune to all damage and can't be dispelled by {@spell dispel magic}. A {@spell disintegrate} spell destroys the wall instantly, however. The wall also extends into the Ethereal Plane, blocking ethereal travel through the wall."
    ],
    "damageImmune": [
      "force"
    ],
    "areaTags": [
      "W"
    ]
  },
  {
    "name": "Wall of Ice",
    "source": "PHB",
    "page": 285,
    "srd": true,
    "level": 6,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a small piece of quartz"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "You create a wall of ice on a solid surface within range. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-square panels. Each panel must be contiguous with another panel. In any form, the wall is 1 foot thick and lasts for the duration.",
      "If the wall cuts through a creature's space when it appears, the creature within its area is pushed to one side of the wall and must make a Dexterity saving throw. On a failed save, the creature takes {@damage 10d6} cold damage, or half as much damage on a successful save.",
      "The wall is an object that can be damaged and thus breached. It has AC 12 and 30 hit points per 10-foot section, and it is vulnerable to fire damage. Reducing a 10-foot section of wall to 0 hit points destroys it and leaves behind a sheet of frigid air in the space the wall occupied. A creature moving through the sheet of frigid air for the first time on a turn must make a Constitution saving throw. That creature takes {@damage 5d6} cold damage on a failed save, or half as much damage on a successful one."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 7th level or higher, the damage the wall deals when it appears increases by {@scaledamage 10d6|6-9|2d6}, and the damage from passing through the sheet of frigid air increases by {@scaledamage 5d6|6-9|1d6}, for each slot level above 6th."
        ]
      }
    ],
    "damageInflict": [
      "cold"
    ],
    "savingThrow": [
      "dexterity",
      "constitution"
    ],
    "areaTags": [
      "W"
    ]
  },
  {
    "name": "Wall of Stone",
    "source": "PHB",
    "page": 287,
    "srd": true,
    "basicRules": true,
    "level": 5,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a small block of granite"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "A nonmagical wall of solid stone springs into existence at a point you choose within range. The wall is 6 inches thick and is composed of ten 10-foot-by-10-foot panels. Each panel must be contiguous with at least one other panel. Alternatively, you can create 10-foot-by-20-foot panels that are only 3 inches thick.",
      "If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice). If a creature would be surrounded on all sides by the wall (or the wall and another solid surface), that creature can make a Dexterity saving throw. On a success, it can use its reaction to move up to its speed so that it is no longer enclosed by the wall.",
      "The wall can have any shape you desire, though it can't occupy the same space as a creature or object. The wall doesn't need to be vertical or rest on any firm foundation. It must, however, merge with and be solidly supported by existing stone. Thus, you can use this spell to bridge a chasm or create a ramp.",
      "If you create a span greater than 20 feet in length, you must halve the size of each panel to create supports. You can crudely shape the wall to create crenellations, battlements, and so on.",
      "The wall is an object made of stone that can be damaged and thus breached. Each panel has AC 15 and 30 hit points per inch of thickness. Reducing a panel to 0 hit points destroys it and might cause connected panels to collapse at the DM's discretion.",
      "If you maintain your {@status concentration} on this spell for its whole duration, the wall becomes permanent and can't be dispelled. Otherwise, the wall disappears when the spell ends."
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "OBJ",
      "PRM"
    ],
    "areaTags": [
      "W"
    ]
  },
  {
    "name": "Wall of Thorns",
    "source": "PHB",
    "page": 287,
    "srd": true,
    "level": 6,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a handful of thorns"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "You create a wall of tough, pliable, tangled brush bristling with needle-sharp thorns. The wall appears within range on a solid surface and lasts for the duration. You choose to make the wall up to 60 feet long, 10 feet high, and 5 feet thick or a circle that has a 20-foot diameter and is up to 20 feet high and 5 feet thick. The wall blocks line of sight.",
      "When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes {@damage 7d8} piercing damage, or half as much damage on a successful save.",
      "A creature can move through the wall, albeit slowly and painfully. For every 1 foot a creature moves through the wall, it must spend 4 feet of movement. Furthermore, the first time a creature enters the wall on a turn or ends its turn there, the creature must make a Dexterity saving throw. It takes {@damage 7d8} slashing damage on a failed save, or half as much damage on a successful one."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 7th level or higher, both types of damage increase by {@scaledamage 7d8|6-9|1d8} for each slot level above 6th."
        ]
      }
    ],
    "damageInflict": [
      "piercing",
      "slashing"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "areaTags": [
      "W"
    ]
  },
  {
    "name": "Warding Bond",
    "source": "PHB",
    "page": 287,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 61
      }
    ],
    "level": 2,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a pair of platinum rings worth at least 50 gp each, which you and the target must wear for the duration",
        "cost": 10000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "entries": [
      "This spell wards a willing creature you touch and creates a mystic connection between you and the target until the spell ends. While the target is within 60 feet of you, it gains a +1 bonus to AC and saving throws, and it has resistance to all damage. Also, each time it takes damage, you take the same amount of damage.",
      "The spell ends if you drop to 0 hit points or if you and the target become separated by more than 60 feet. It also ends if the spell is cast again on either of the connected creatures. You can also dismiss the spell as an action."
    ],
    "miscTags": [
      "MAC"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Water Breathing",
    "source": "PHB",
    "page": 287,
    "srd": true,
    "level": 3,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a short reed or piece of straw"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 24
        }
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "This spell grants up to ten willing creatures you can see within range the ability to breathe underwater until the spell ends. Affected creatures also retain their normal mode of respiration."
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Water Walk",
    "source": "PHB",
    "page": 287,
    "srd": true,
    "level": 3,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a piece of cork"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "This spell grants the ability to move across any liquid surface—such as water, acid, mud, snow, quicksand, or lava—as if it were harmless solid ground (creatures crossing molten lava can still take damage from the heat). Up to ten willing creatures you can see within range gain this ability for the duration.",
      "If you target a creature submerged in a liquid, the spell carries the target to the surface of the liquid at a rate of 60 feet per round."
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Web",
    "source": "PHB",
    "page": 287,
    "srd": true,
    "basicRules": true,
    "otherSources": [
      {
        "source": "RMR",
        "page": 61
      }
    ],
    "level": 2,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a bit of spiderweb"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You conjure a mass of thick, sticky webbing at a point of your choice within range. The webs fill a 20-foot cube from that point for the duration. The webs are {@quickref difficult terrain||3} and lightly obscure their area.",
      "If the webs aren't anchored between two solid masses (such as walls or trees) or layered across a floor, wall, or ceiling, the conjured web collapses on itself, and the spell ends at the start of your next turn. Webs layered over a flat surface have a depth of 5 feet.",
      "Each creature that starts its turn in the webs or that enters them during its turn must make a Dexterity saving throw. On a failed save, the creature is {@condition restrained} as long as it remains in the webs or until it breaks free.",
      "A creature {@condition restrained} by the webs can use its action to make a Strength check against your spell save DC. If it succeeds, it is no longer {@condition restrained}.",
      "The webs are flammable. Any 5-foot cube of webs exposed to fire burns away in 1 round, dealing {@damage 2d4} fire damage to any creature that starts its turn in the fire."
    ],
    "damageInflict": [
      "fire"
    ],
    "conditionInflict": [
      "restrained"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "abilityCheck": [
      "strength"
    ],
    "areaTags": [
      "C"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Weird",
    "source": "PHB",
    "page": 288,
    "srd": true,
    "level": 9,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Drawing on the deepest fears of a group of creatures, you create illusory creatures in their minds, visible only to them. Each creature in a 30-foot-radius sphere centered on a point of your choice within range must make a Wisdom saving throw. On a failed save, a creature becomes {@condition frightened} for the duration. The illusion calls on the creature's deepest fears, manifesting its worst nightmares as an implacable threat. At the end of each of the {@condition frightened} creature's turns, it must succeed on a Wisdom saving throw or take {@damage 4d10} psychic damage. On a successful save, the spell ends for that creature."
    ],
    "damageInflict": [
      "psychic"
    ],
    "conditionInflict": [
      "frightened"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Wind Walk",
    "source": "PHB",
    "page": 288,
    "srd": true,
    "level": 6,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "fire and holy water"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 8
        }
      }
    ],
    "entries": [
      "You and up to ten willing creatures you can see within range assume a gaseous form for the duration, appearing as wisps of cloud. While in this cloud form, a creature has a flying speed of 300 feet and has resistance to damage from nonmagical weapons. The only actions a creature can take in this form are the {@action Dash} action or to revert to its normal form. Reverting takes 1 minute, during which time a creature is {@condition incapacitated} and can't move. Until the spell ends, a creature can revert to cloud form, which also requires the 1-minute transformation.",
      "If a creature is in cloud form and flying when the effect ends, the creature descends 60 feet per round for 1 minute until it lands, which it does safely. If it can't land after 1 minute, the creature falls the remaining distance."
    ],
    "conditionInflict": [
      "incapacitated"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Wind Wall",
    "source": "PHB",
    "page": 288,
    "srd": true,
    "level": 3,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a tiny fan and a feather of exotic origin"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "A wall of strong wind rises from the ground at a point you choose within range. You can make the wall up to 50 feet long, 15 feet high, and 1 foot thick. You can shape the wall in any way you choose so long as it makes one continuous path along the ground. The wall lasts for the duration.",
      "When the wall appears, each creature within its area must make a Strength saving throw. A creature takes {@damage 3d8} bludgeoning damage on a failed save, or half as much damage on a successful one.",
      "The strong wind keeps fog, smoke, and other gases at bay. Small or smaller flying creatures or objects can't pass through the wall. Loose, lightweight materials brought into the wall fly upward. Arrows, bolts, and other ordinary projectiles launched at targets behind the wall are deflected upward and automatically miss. (Boulders hurled by giants or siege engines, and similar projectiles, are unaffected.) Creatures in gaseous form can't pass through it."
    ],
    "damageInflict": [
      "bludgeoning"
    ],
    "savingThrow": [
      "strength"
    ],
    "areaTags": [
      "W"
    ]
  },
  {
    "name": "Wish",
    "source": "PHB",
    "page": 288,
    "srd": true,
    "level": 9,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "Wish is the mightiest spell a mortal creature can cast. By simply speaking aloud, you can alter the very foundations of reality in accord with your desires.",
      "The basic use of this spell is to duplicate any other spell of 8th level or lower. You don't need to meet any requirements in that spell, including costly components. The spell simply takes effect. Alternatively, you can create one of the following effects of your choice:",
      {
        "type": "list",
        "items": [
          "You create one object of up to 25,000 gp in value that isn't a magic item. The object can be no more than 300 feet in any dimension, and it appears in an unoccupied space you can see on the ground.",
          "You allow up to twenty creatures that you can see to regain all hit points, and you end all effects on them described in the {@spell greater restoration} spell.",
          "You grant up to ten creatures that you can see resistance to a damage type you choose.",
          "You grant up to ten creatures you can see immunity to a single spell or other magical effect for 8 hours. For instance, you could make yourself and all your companions immune to a {@creature lich}'s life drain attack.",
          "You undo a single recent event by forcing a reroll of any roll made within the last round (including your last turn). Reality reshapes itself to accommodate the new result. For example, a {@spell wish} spell could undo an opponent's successful save, a foe's critical hit, or a friend's failed save. You can force the reroll to be made with advantage or disadvantage, and you can choose whether to use the reroll or the original roll."
        ]
      },
      "You might be able to achieve something beyond the scope of the above examples. State your wish to the DM as precisely as possible. The DM has great latitude in ruling what occurs in such an instance; the greater the wish, the greater the likelihood that something goes wrong. This spell might simply fail, the effect you desire might only be partly achieved, or you might suffer some unforeseen consequence as a result of how you worded the wish. For example, wishing that a villain were dead might propel you forward in time to a period when that villain is no longer alive, effectively removing you from the game. Similarly, wishing for a legendary magic item or artifact might instantly transport you to the presence of the item's current owner.",
      "The stress of casting this spell to produce any effect other than duplicating another spell weakens you. After enduring that stress, each time you cast a spell until you finish a long rest, you take {@damage 1d10} necrotic damage per level of that spell. This damage can't be reduced or prevented in any way. In addition, your Strength drops to 3, if it isn't 3 or lower already, for {@dice 2d4} days. For each of those days that you spend resting and doing nothing more than light activity, your remaining recovery time decreases by 2 days. Finally, there is a {@chance 33|||Unable to cast again!|Able to cast again} chance that you are unable to cast wish ever again if you suffer this stress."
    ],
    "damageResist": [
      "acid",
      "bludgeoning",
      "cold",
      "fire",
      "force",
      "lightning",
      "necrotic",
      "piercing",
      "poison",
      "psychic",
      "radiant",
      "slashing",
      "thunder"
    ],
    "damageInflict": [
      "necrotic"
    ],
    "miscTags": [
      "ADV",
      "HL",
      "SGT"
    ]
  },
  {
    "name": "Witch Bolt",
    "source": "PHB",
    "page": 289,
    "level": 1,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a twig from a tree that has been struck by lightning"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "A beam of crackling, blue energy lances out toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against that creature. On a hit, the target takes {@damage 1d12} lightning damage, and on each of your turns for the duration, you can use your action to deal {@damage 1d12} lightning damage to the target automatically. The spell ends if you use your action to do anything else. The spell also ends if the target is ever outside the spell's range or if it has total cover from you."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, the initial damage increases by {@scaledamage 1d12|1-9|1d12} for each slot level above 1st."
        ]
      }
    ],
    "damageInflict": [
      "lightning"
    ],
    "spellAttack": [
      "R"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Word of Recall",
    "source": "PHB",
    "page": 289,
    "srd": true,
    "level": 6,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 5
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You and up to five willing creatures within 5 feet of you instantly teleport to a previously designated sanctuary. You and any creatures that teleport with you appear in the nearest unoccupied space to the spot you designated when you prepared your sanctuary (see below). If you cast this spell without first preparing a sanctuary, the spell has no effect.",
      "You must designate a sanctuary by casting this spell within a location, such as a temple, dedicated to or strongly linked to your deity. If you attempt to cast the spell in this manner in an area that isn't dedicated to your deity, the spell has no effect."
    ],
    "miscTags": [
      "PS",
      "TP"
    ]
  },
  {
    "name": "Wrathful Smite",
    "source": "PHB",
    "page": 289,
    "level": 1,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "The next time you hit with a melee weapon attack during this spell's duration, your attack deals an extra {@damage 1d6} psychic damage. Additionally, if the target is a creature, it must make a Wisdom saving throw or be {@condition frightened} of you until the spell ends. As an action, the creature can make a Wisdom check against your spell save DC to steel its resolve and end this spell."
    ],
    "damageInflict": [
      "psychic"
    ],
    "conditionInflict": [
      "frightened"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "abilityCheck": [
      "wisdom"
    ],
    "miscTags": [
      "AAD"
    ]
  },
  {
    "name": "Zone of Truth",
    "source": "PHB",
    "page": 289,
    "srd": true,
    "level": 2,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        }
      }
    ],
    "entries": [
      "You create a magical zone that guards against deception in a 15-foot-radius sphere centered on a point of your choice within range. Until the spell ends, a creature that enters the spell's area for the first time on a turn or starts its turn there must make a Charisma saving throw. On a failed save, a creature can't speak a deliberate lie while in the radius. You know whether each creature succeeds or fails on its saving throw.",
      "An affected creature is aware of the spell and can thus avoid answering questions to which it would normally respond with a lie. Such creatures can be evasive in its answers as long as it remains within the boundaries of the truth."
    ],
    "savingThrow": [
      "charisma"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Gate Seal",
    "source": "SatO",
    "page": 12,
    "level": 4,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a broken portal key, which the spell consumes",
        "consume": true
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 24
        }
      }
    ],
    "entries": [
      "You fortify the fabric of the planes in a 30-foot cube you can see within range. Within that area, portals close and can't be opened for the duration. Spells and other effects that allow planar travel or open portals, such as {@spell gate} or {@spell plane shift}, fail if used to enter or leave the area. The cube is stationary."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 6th level or higher, the spell lasts until dispelled."
        ]
      }
    ],
    "miscTags": [
      "SGT"
    ]
  },
  {
    "name": "Warp Sense",
    "source": "SatO",
    "page": 12,
    "level": 2,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a razorvine leaf"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "For the duration, you sense the presence of portals, even inactive ones, within 30 feet of yourself.",
      "If you detect a portal in this way, you can use your action to study it. Make a DC 15 ability check using your spellcasting ability. On a successful check, you learn the destination plane of the portal and what portal key it requires, then the spell ends. On a failed check, you learn nothing and can't study that portal again using this spell until you cast it again.",
      "The spell can penetrate most barriers but is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."
    ]
  },
  {
    "name": "Borrowed Knowledge",
    "source": "SCC",
    "page": 37,
    "level": 2,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a book worth at least 25 gp",
        "cost": 2500
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You draw on knowledge from spirits of the past. Choose one skill in which you lack proficiency. For the spell's duration, you have proficiency in the chosen skill. The spell ends early if you cast it again."
    ]
  },
  {
    "name": "Kinetic Jaunt",
    "source": "SCC",
    "page": 37,
    "level": 2,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You magically empower your movement with dance-like steps, giving yourself the following benefits for the duration.",
      {
        "type": "list",
        "items": [
          "Your walking speed increases by 10 feet.",
          "You don't provoke opportunity attacks.",
          "You can move through the space of another creature, and it doesn't count as {@quickref difficult terrain||3}. If you end your turn in another creature's space, you are shunted to the last unoccupied space you occupied, and you take {@damage 1d8} force damage."
        ]
      }
    ],
    "damageInflict": [
      "force"
    ]
  },
  {
    "name": "Silvery Barbs",
    "source": "SCC",
    "page": 38,
    "level": 1,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "reaction",
        "condition": "which you take when a creature you can see within 60 feet of yourself succeeds on an attack roll, an ability check, or a saving throw"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You magically distract the triggering creature and turn its momentary uncertainty into encouragement for another creature. The triggering creature must reroll the {@dice d20} and use the lower roll.",
      "You can then choose a different creature you can see within range (you can choose yourself). The chosen creature has advantage on the next attack roll, ability check, or saving throw it makes within 1 minute. A creature can be empowered by only one use of this spell at a time."
    ],
    "miscTags": [
      "ADV",
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Vortex Warp",
    "source": "SCC",
    "page": 38,
    "level": 2,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You magically twist space around another creature you can see within range. The target must succeed on a Constitution saving throw (the target can choose to fail), or the target is teleported to an unoccupied space of your choice that you can see within range. The chosen space must be on a surface or in a liquid that can support the target without the target having to squeeze."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, the range of the spell increases by 30 feet for each slot level above 2nd."
        ]
      }
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "SGT",
      "TP"
    ]
  },
  {
    "name": "Wither and Bloom",
    "source": "SCC",
    "page": 38,
    "level": 2,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a withered vine twisted into a loop"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You invoke both death and life upon a 10-foot-radius sphere centered on a point within range. Each creature of your choice in that area must make a Constitution saving throw, taking {@damage 2d6} necrotic damage on a failed save, or half as much damage on a successful one. Nonmagical vegetation in that area withers.",
      "In addition, one creature of your choice in that area can spend and roll one of its unspent Hit Dice and regain a number of hit points equal to the roll plus your spellcasting ability modifier."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by {@scaledamage 2d6|2-9|1d6} for each slot above the 2nd, and the number of Hit Dice that can be spent and added to the healing roll increases by one for each slot above 2nd."
        ]
      }
    ],
    "damageInflict": [
      "necrotic"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "HL"
    ]
  },
  {
    "name": "Blade of Disaster",
    "source": "TCE",
    "page": 106,
    "otherSources": [
      {
        "source": "IDRotF",
        "page": 318
      }
    ],
    "level": 9,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You create a blade-shaped planar rift about 3 feet long in an unoccupied space you can see within range. The blade lasts for the duration. When you cast this spell, you can make up to two melee spell attacks with the blade, each one against a creature, loose object, or structure within 5 feet of the blade. On a hit, the target takes {@damage 4d12} force damage. This attack scores a critical hit if the number on the {@dice d20} is 18 or higher. On a critical hit, the blade deals an extra {@damage 8d12} force damage (for a total of {@damage 12d12} force damage).",
      "As a bonus action on your turn, you can move the blade up to 30 feet to an unoccupied space you can see and then make up to two melee spell attacks with it again.",
      "The blade can harmlessly pass through any barrier, including a {@spell wall of force}."
    ],
    "damageInflict": [
      "force"
    ],
    "spellAttack": [
      "M"
    ],
    "miscTags": [
      "SGT",
      "UBA"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Booming Blade",
    "source": "TCE",
    "page": 106,
    "otherSources": [
      {
        "source": "SCAG",
        "page": 142
      }
    ],
    "level": 0,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "radius",
      "distance": {
        "type": "feet",
        "amount": 5
      }
    },
    "components": {
      "s": true,
      "m": {
        "text": "a melee weapon worth at least 1 sp",
        "cost": 10
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "round",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects and then becomes sheathed in booming energy until the start of your next turn. If the target willingly moves 5 feet or more before then, the target takes {@damage 1d8} thunder damage, and the spell ends.",
      "This spell's damage increases when you reach certain levels. At 5th level, the melee attack deals an extra {@damage 1d8} thunder damage to the target on a hit, and the damage the target takes for moving increases to {@damage 2d8}. Both damage rolls increase by 1d8 at 11th level ({@damage 2d8} and {@damage 3d8}) and again at 17th level ({@damage 3d8} and {@damage 4d8})."
    ],
    "scalingLevelDice": [
      {
        "label": "thunder damage on moving",
        "scaling": {
          "1": "1d8",
          "5": "2d8",
          "11": "3d8",
          "17": "4d8"
        }
      },
      {
        "label": "thunder damage on hit",
        "scaling": {
          "5": "1d8",
          "11": "2d8",
          "17": "3d8"
        }
      }
    ],
    "damageInflict": [
      "thunder"
    ],
    "spellAttack": [
      "M"
    ],
    "miscTags": [
      "AAD",
      "SCL"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Dream of the Blue Veil",
    "source": "TCE",
    "page": 106,
    "level": 7,
    "school": "C",
    "time": [
      {
        "number": 10,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 20
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a magic item or a willing creature from the destination world"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 6
        }
      }
    ],
    "entries": [
      "You and up to eight willing creatures within range fall {@condition unconscious} for the spell's duration and experience visions of another world on the Material Plane, such as Oerth, Toril, Krynn, or Eberron. If the spell reaches its full duration, the visions conclude with each of you encountering and pulling back a mysterious blue curtain. The spell then ends with you mentally and physically transported to the world that was in the visions.",
      "To cast this spell, you must have a magic item that originated on the world you wish to reach, and you must be aware of the world's existence, even if you don't know the world's name. Your destination in the other world is a safe location within 1 mile of where the magic item was created. Alternatively, you can cast the spell if one of the affected creatures was born on the other world, which causes your destination to be a safe location within 1 mile of where that creature was born.",
      "The spell ends early on a creature if that creature takes any damage, and the creature isn't transported. If you take any damage, the spell ends for you and all the other creatures, with none of you being transported."
    ],
    "conditionInflict": [
      "unconscious"
    ],
    "miscTags": [
      "PS",
      "TP"
    ],
    "hasFluff": true
  },
  {
    "name": "Green-Flame Blade",
    "source": "TCE",
    "page": 107,
    "otherSources": [
      {
        "source": "SCAG",
        "page": 143
      }
    ],
    "level": 0,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "radius",
      "distance": {
        "type": "feet",
        "amount": 5
      }
    },
    "components": {
      "s": true,
      "m": {
        "text": "a melee weapon worth at least 1 sp",
        "cost": 10
      }
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects, and you can cause green fire to leap from the target to a different creature of your choice that you can see within 5 feet of it. The second creature takes fire damage equal to your spellcasting ability modifier.",
      "This spell's damage increases when you reach certain levels. At 5th level, the melee attack deals an extra {@damage 1d8} fire damage to the target on a hit, and the fire damage to the second creature increases to {@damage 1d8} + your spellcasting ability modifier. Both damage rolls increase by {@damage 1d8} at 11th level ({@damage 2d8} and {@damage 2d8}) and 17th level ({@damage 3d8} and {@damage 3d8})."
    ],
    "scalingLevelDice": [
      {
        "label": "fire damage to secondary creature",
        "scaling": {
          "1": "{{spellcasting_mod}}",
          "5": "1d8 + {{spellcasting_mod}}",
          "11": "2d8 + {{spellcasting_mod}}",
          "17": "3d8 + {{spellcasting_mod}}"
        }
      },
      {
        "label": "fire damage on hit",
        "scaling": {
          "5": "1d8",
          "11": "2d8",
          "17": "3d8"
        }
      }
    ],
    "damageInflict": [
      "fire"
    ],
    "spellAttack": [
      "M"
    ],
    "miscTags": [
      "AAD",
      "SCL",
      "SGT"
    ],
    "areaTags": [
      "MT",
      "ST"
    ]
  },
  {
    "name": "Intellect Fortress",
    "source": "TCE",
    "page": 107,
    "level": 3,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "For the duration, you or one willing creature you can see within range has resistance to psychic damage, as well as advantage on Intelligence, Wisdom, and Charisma saving throws."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd. The creatures must be within 30 feet of each other when you target them."
        ]
      }
    ],
    "damageResist": [
      "psychic"
    ],
    "miscTags": [
      "ADV",
      "SGT"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Lightning Lure",
    "source": "TCE",
    "page": 107,
    "otherSources": [
      {
        "source": "SCAG",
        "page": 143
      }
    ],
    "level": 0,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "radius",
      "distance": {
        "type": "feet",
        "amount": 15
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You create a lash of lightning energy that strikes at one creature of your choice that you can see within 15 feet of you. The target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and then take {@damage 1d8} lightning damage if it is within 5 feet of you.",
      "This spell's damage increases by {@dice 1d8} when you reach 5th level ({@damage 2d8}), 11th level ({@damage 3d8}), and 17th level ({@damage 4d8})."
    ],
    "scalingLevelDice": {
      "label": "lightning damage",
      "scaling": {
        "1": "1d8",
        "5": "2d8",
        "11": "3d8",
        "17": "4d8"
      }
    },
    "damageInflict": [
      "lightning"
    ],
    "savingThrow": [
      "strength"
    ],
    "miscTags": [
      "FMV",
      "SCL",
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Mind Sliver",
    "source": "TCE",
    "page": 108,
    "level": 0,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "round",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You drive a disorienting spike of psychic energy into the mind of one creature you can see within range. The target must succeed on an Intelligence saving throw or take {@damage 1d6} psychic damage and subtract {@dice 1d4} from the next saving throw it makes before the end of your next turn.",
      "This spell's damage increases by {@dice 1d6} when you reach certain levels: 5th level ({@dice 2d6}), 11th level ({@dice 3d6}), and 17th level ({@dice 4d6})."
    ],
    "scalingLevelDice": {
      "label": "psychic damage",
      "scaling": {
        "1": "1d6",
        "5": "2d6",
        "11": "3d6",
        "17": "4d6"
      }
    },
    "damageInflict": [
      "psychic"
    ],
    "savingThrow": [
      "intelligence"
    ],
    "miscTags": [
      "SCL",
      "SGT"
    ],
    "areaTags": [
      "ST"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Spirit Shroud",
    "source": "TCE",
    "page": 108,
    "level": 3,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You call forth spirits of the dead, which flit around you for the spell's duration. The spirits are intangible and invulnerable.",
      "Until the spell ends, any attack you make deals {@damage 1d8} extra damage when you hit a creature within 10 feet of you. This damage is radiant, necrotic, or cold (your choice when you cast the spell). Any creature that takes this damage can't regain hit points until the start of your next turn.",
      "In addition, any creature of your choice that you can see that starts its turn within 10 feet of you has its speed reduced by 10 feet until the start of your next turn."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, the damage increases by {@scaledamage 1d8|3,5,7,9|1d8} for every two slot levels above 3rd."
        ]
      }
    ],
    "damageInflict": [
      "radiant",
      "necrotic",
      "cold"
    ],
    "miscTags": [
      "SGT"
    ]
  },
  {
    "name": "Summon Aberration",
    "source": "TCE",
    "page": 109,
    "level": 4,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a pickled tentacle and an eyeball in a platinum-inlaid vial worth at least 400 gp",
        "cost": 40000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You call forth an aberrant spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the {@creature Aberrant Spirit|TCE} stat block. When you cast the spell, choose Beholderkin, Slaad, or Star Spawn. The creature resembles an aberration of that kind, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.",
      "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the {@action Dodge} action and uses its move to avoid danger."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
        ]
      }
    ],
    "miscTags": [
      "SGT",
      "SMN"
    ]
  },
  {
    "name": "Summon Beast",
    "source": "TCE",
    "page": 109,
    "level": 2,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a feather, tuft of fur, and fish tail inside a gilded acorn worth at least 200 gp",
        "cost": 20000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You call forth a bestial spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the {@creature Bestial Spirit|TCE} stat block. When you cast the spell, choose an environment: Air, Land, or Water. The creature resembles an animal of your choice that is native to the chosen environment, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.",
      "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the {@action Dodge} action and uses its move to avoid danger."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, use the higher level wherever the spell's level appears in the stat block."
        ]
      }
    ],
    "miscTags": [
      "SGT",
      "SMN"
    ]
  },
  {
    "name": "Summon Celestial",
    "source": "TCE",
    "page": 110,
    "level": 5,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a golden reliquary worth at least 500 gp",
        "cost": 50000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You call forth a celestial spirit. It manifests in an angelic form in an unoccupied space that you can see within range. This corporeal form uses the {@creature Celestial Spirit|TCE} stat block. When you cast the spell, choose Avenger or Defender. Your choice determines the creature's attack in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.",
      "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the {@action Dodge} action and uses its move to avoid danger."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 6th level or higher, use the higher level wherever the spell's level appears in the stat block."
        ]
      }
    ],
    "miscTags": [
      "SGT",
      "SMN"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Summon Construct",
    "source": "TCE",
    "page": 111,
    "level": 4,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "an ornate stone and metal lockbox worth at least 400 gp",
        "cost": 40000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You call forth the spirit of a construct. It manifests in an unoccupied space that you can see within range. This corporeal form uses the {@creature Construct Spirit|TCE} stat block. When you cast the spell, choose a material: Clay, Metal, or Stone. The creature resembles a golem or a modron (your choice) made of the chosen material, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.",
      "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the {@action Dodge} action and uses its move to avoid danger."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, use the higher level wherever the spell's level appears in the stat block."
        ]
      }
    ],
    "miscTags": [
      "SGT",
      "SMN"
    ]
  },
  {
    "name": "Summon Elemental",
    "source": "TCE",
    "page": 111,
    "level": 4,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "air, a pebble, ash, and water inside a gold-inlaid vial worth at least 400 gp",
        "cost": 40000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You call forth an elemental spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the {@creature Elemental Spirit|TCE} stat block. When you cast the spell, choose an element: Air, Earth, Fire, or Water. The creature resembles a bipedal form wreathed in the chosen element, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.",
      "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the {@action Dodge} action and uses its move to avoid danger."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
        ]
      }
    ],
    "miscTags": [
      "SGT",
      "SMN"
    ]
  },
  {
    "name": "Summon Fey",
    "source": "TCE",
    "page": 112,
    "level": 3,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a gilded flower worth at least 300 gp",
        "cost": 30000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You call forth a fey spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the {@creature Fey Spirit|TCE} stat block. When you cast the spell, choose a mood: Fuming, Mirthful, or Tricksy. The creature resembles a fey creature of your choice marked by the chosen mood, which determines one of the traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.",
      "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the {@action Dodge} action and uses its move to avoid danger."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, use the higher level wherever the spell's level appears in the stat block."
        ]
      }
    ],
    "miscTags": [
      "SGT",
      "SMN"
    ]
  },
  {
    "name": "Summon Fiend",
    "source": "TCE",
    "page": 112,
    "level": 6,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "humanoid blood inside a ruby vial worth at least 600 gp",
        "cost": 60000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You call forth a fiendish spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the {@creature Fiendish Spirit|TCE} stat block. When you cast the spell, choose Demon, Devil, or Yugoloth. The creature resembles a fiend of the chosen type, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.",
      "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the {@action Dodge} action and uses its move to avoid danger."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 7th level or higher, use the higher level wherever the spell's level appears in the stat block."
        ]
      }
    ],
    "miscTags": [
      "SGT",
      "SMN"
    ]
  },
  {
    "name": "Summon Shadowspawn",
    "source": "TCE",
    "page": 113,
    "level": 3,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "tears inside a gem worth at least 300 gp",
        "cost": 30000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You call forth a shadowy spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the {@creature Shadow Spirit|TCE} stat block. When you cast the spell, choose an emotion: Fury, Despair, or Fear. The creature resembles a misshapen biped marked by the chosen emotion, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.",
      "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the {@action Dodge} action and uses its move to avoid danger."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, use the higher level wherever the spell's level appears in the stat block."
        ]
      }
    ],
    "miscTags": [
      "SGT",
      "SMN"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Summon Undead",
    "source": "TCE",
    "page": 114,
    "level": 3,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a gilded skull worth at least 300 gp",
        "cost": 30000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You call forth an undead spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the {@creature Undead Spirit|TCE} stat block. When you cast the spell, choose the creature's form: Ghostly, Putrid, or Skeletal. The spirit resembles an undead creature with the chosen form, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.",
      "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the {@action Dodge} action and uses its move to avoid danger."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, use the higher level wherever the spell's level appears in the stat block."
        ]
      }
    ],
    "miscTags": [
      "SGT",
      "SMN"
    ]
  },
  {
    "name": "Sword Burst",
    "source": "TCE",
    "page": 115,
    "otherSources": [
      {
        "source": "SCAG",
        "page": 143
      }
    ],
    "level": 0,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "radius",
      "distance": {
        "type": "feet",
        "amount": 5
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You create a momentary circle of spectral blades that sweep around you. All other creatures within 5 feet of you must succeed on a Dexterity saving throw or take {@damage 1d6} force damage.",
      "This spell's damage increases by {@dice 1d6} when you reach 5th level ({@damage 2d6}), 11th level ({@damage 3d6}), and 17th level ({@damage 4d6})."
    ],
    "scalingLevelDice": {
      "label": "force damage",
      "scaling": {
        "1": "1d6",
        "5": "2d6",
        "11": "3d6",
        "17": "4d6"
      }
    },
    "damageInflict": [
      "force"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "SCL"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Tasha's Caustic Brew",
    "source": "TCE",
    "page": 115,
    "level": 1,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "line",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a bit of rotten food"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "A stream of acid emanates from you in a line 30 feet long and 5 feet wide in a direction you choose. Each creature in the line must succeed on a Dexterity saving throw or be covered in acid for the spell's duration or until a creature uses its action to scrape or wash the acid off itself or another creature. A creature covered in the acid takes {@damage 2d4} acid damage at start of each of its turns."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by {@scaledamage 2d4|1-9|2d4} for each slot level above 1st."
        ]
      }
    ],
    "damageInflict": [
      "acid"
    ],
    "savingThrow": [
      "dexterity"
    ]
  },
  {
    "name": "Tasha's Mind Whip",
    "source": "TCE",
    "page": 115,
    "level": 2,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "round",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You psychically lash out at one creature you can see within range. The target must make an Intelligence saving throw. On a failed save, the target takes {@damage 3d6} psychic damage, and it can't take a reaction until the end of its next turn. Moreover, on its next turn, it must choose whether it gets a move, an action, or a bonus action; it gets only one of the three. On a successful save, the target takes half as much damage and suffers none of the spell's other effects."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd. The creatures must be within 30 feet of each other when you target them."
        ]
      }
    ],
    "damageInflict": [
      "psychic"
    ],
    "savingThrow": [
      "intelligence"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Tasha's Otherworldly Guise",
    "source": "TCE",
    "page": 116,
    "level": 6,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "an object engraved with a symbol of the Outer Planes, worth at least 500 gp",
        "cost": 50000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Uttering an incantation, you draw on the magic of the Lower Planes or Upper Planes (your choice) to transform yourself. You gain the following benefits until the spell ends:",
      {
        "type": "list",
        "items": [
          "You are immune to fire and poison damage (Lower Planes) or radiant and necrotic damage (Upper Planes).",
          "You are immune to the {@condition poisoned} condition (Lower Planes) or the {@condition charmed} condition (Upper Planes).",
          "Spectral wings appear on your back, giving you a flying speed of 40 feet.",
          "You have a +2 bonus to AC.",
          "All your weapon attacks are magical, and when you make a weapon attack, you can use your spellcasting ability modifier, instead of Strength or Dexterity, for the attack and damage rolls.",
          "You can attack twice, instead of once, when you take the {@action Attack} action on your turn. You ignore this benefit if you already have a feature, like Extra Attack, that lets you attack more than once when you take the Attack action on your turn."
        ]
      }
    ],
    "damageImmune": [
      "fire",
      "poison",
      "radiant",
      "necrotic"
    ],
    "conditionImmune": [
      "charmed",
      "poisoned"
    ],
    "miscTags": [
      "MAC"
    ]
  },
  {
    "name": "Abi-Dalzim's Horrid Wilting",
    "source": "XGE",
    "page": 150,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 15
      }
    ],
    "level": 8,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 150
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a bit of sponge"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. Constructs and undead aren't affected, and plants and water elementals make this saving throw with disadvantage. A creature takes {@damage 12d8} necrotic damage on a failed save, or half as much damage on a successful one.",
      "Nonmagical plants in the area that aren't creatures, such as trees and shrubs, wither and die instantly."
    ],
    "damageInflict": [
      "necrotic"
    ],
    "savingThrow": [
      "constitution"
    ],
    "areaTags": [
      "C"
    ]
  },
  {
    "name": "Absorb Elements",
    "source": "XGE",
    "page": 150,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 15
      }
    ],
    "level": 1,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "reaction",
        "condition": "which you take when you take acid, cold, fire, lightning, or thunder damage"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "round",
          "amount": 1
        }
      }
    ],
    "entries": [
      "The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra {@damage 1d6} damage of the triggering type, and the spell ends."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by {@scaledamage 1d6|1-9|1d6} for each slot level above 1st."
        ]
      }
    ],
    "damageResist": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder"
    ]
  },
  {
    "name": "Aganazzar's Scorcher",
    "source": "XGE",
    "page": 150,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 15
      }
    ],
    "level": 2,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a red dragon's scale"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "A line of roaring flame 30 feet long and 5 feet wide emanates from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes {@damage 3d8} fire damage on a failed save, or half as much damage on a successful one."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by {@scaledamage 3d8|2-9|1d8} for each slot level above 2nd."
        ]
      }
    ],
    "damageInflict": [
      "fire"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "areaTags": [
      "L"
    ]
  },
  {
    "name": "Beast Bond",
    "source": "XGE",
    "page": 150,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 15
      }
    ],
    "level": 1,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a bit of fur wrapped in a cloth"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "You establish a telepathic link with one beast you touch that is friendly to you or {@condition charmed} by you. The spell fails if the beast's Intelligence score is 4 or higher. Until the spell ends, the link is active while you and the beast are within line of sight of each other. Through the link, the beast can understand your telepathic messages to it, and it can telepathically communicate simple emotions and concepts back to you. While the link is active, the beast gains advantage on attack rolls against any creature within 5 feet of you that you can see."
    ],
    "conditionInflict": [
      "charmed"
    ],
    "affectsCreatureType": [
      "beast"
    ],
    "miscTags": [
      "ADV",
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Bones of the Earth",
    "source": "XGE",
    "page": 150,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 15
      }
    ],
    "level": 6,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You cause up to six pillars of stone to burst from places on the ground that you can see within range. Each pillar is a cylinder that has a diameter of 5 feet and a height of up to 30 feet. The ground where a pillar appears must be wide enough for its diameter, and you can target the ground under a creature if that creature is Medium or smaller. Each pillar has AC 5 and 30 hit points. When reduced to 0 hit points, a pillar crumbles into rubble, which creates an area of {@quickref difficult terrain||3} with a 10-foot radius that lasts until the rubble is cleared. Each 5-foot-diameter portion of the area requires at least 1 minute to clear by hand.",
      "If a pillar is created under a creature, that creature must succeed on a Dexterity saving throw or be lifted by the pillar. A creature can choose to fail the save.",
      "If a pillar is prevented from reaching its full height because of a ceiling or other obstacle, a creature on the pillar takes {@damage 6d6} bludgeoning damage and is {@condition restrained}, pinched between the pillar and the obstacle. The {@condition restrained} creature can use an action to make a Strength or Dexterity check (the creature's choice) against the spell's save DC. On a success, the creature is no longer {@condition restrained} and must either move off the pillar or fall off it."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 7th level or higher, you can create two additional pillars for each slot level above 6th."
        ]
      }
    ],
    "damageInflict": [
      "bludgeoning"
    ],
    "conditionInflict": [
      "restrained"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "abilityCheck": [
      "strength",
      "dexterity"
    ],
    "miscTags": [
      "DFT",
      "SGT"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Catapult",
    "source": "XGE",
    "page": 150,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 15
      }
    ],
    "level": 1,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "Choose one object weighing 1 to 5 pounds within range that isn't being worn or carried. The object flies in a straight line up to 90 feet in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface. If the object would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the target and stops moving. When the object strikes something, the object and what it strikes each take {@damage 3d8} bludgeoning damage."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, the maximum weight of objects that you can target with this spell increases by 5 pounds, and the damage increases by {@scaledamage 3d8|1-9|1d8}, for each slot level above 1st."
        ]
      }
    ],
    "damageInflict": [
      "bludgeoning"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "OBJ"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Catnap",
    "source": "XGE",
    "page": 151,
    "level": 3,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "s": true,
      "m": "a pinch of sand"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        }
      }
    ],
    "entries": [
      "You make a calming gesture, and up to three willing creatures of your choice that you can see within range fall {@condition unconscious} for the spell's duration. The spell ends on a target early if it takes damage or someone uses an action to shake or slap it awake. If a target remains {@condition unconscious} for the full duration, that target gains the benefit of a short rest, and it can't be affected by this spell again until it finishes a long rest."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, you can target one additional willing creature for each slot level above 3rd."
        ]
      }
    ],
    "conditionInflict": [
      "unconscious"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Cause Fear",
    "source": "XGE",
    "page": 151,
    "level": 1,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You awaken the sense of mortality in one creature you can see within range. A construct or an undead is immune to this effect. The target must succeed on a Wisdom saving throw or become {@condition frightened} of you until the spell ends. The {@condition frightened} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."
        ]
      }
    ],
    "conditionInflict": [
      "frightened"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "affectsCreatureType": [
      "aberration",
      "beast",
      "celestial",
      "dragon",
      "elemental",
      "fey",
      "fiend",
      "giant",
      "humanoid",
      "monstrosity",
      "ooze",
      "plant"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Ceremony",
    "source": "XGE",
    "page": 151,
    "level": 1,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "hour"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "25 gp worth of powdered silver, which the spell consumes",
        "cost": 2500,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "You perform a special religious ceremony that is infused with magic. When you cast the spell, choose one of the following rites, the target of which must be within 10 feet of you throughout the casting.",
      {
        "type": "entries",
        "name": "Atonement",
        "entries": [
          "You touch one willing creature whose alignment has changed, and you make a DC 20 Wisdom ({@skill Insight}) check. On a successful check, you restore the target to its original alignment."
        ]
      },
      {
        "type": "entries",
        "name": "Bless Water",
        "entries": [
          "You touch one {@item vial|phb} of water and cause it to become {@item Holy Water (flask)|phb|holy water}."
        ]
      },
      {
        "type": "entries",
        "name": "Coming of Age",
        "entries": [
          "You touch one humanoid who is a young adult. For the next 24 hours, whenever the target makes an ability check, it can roll a {@dice d4} and add the number rolled to the ability check. A creature can benefit from this rite only once."
        ]
      },
      {
        "type": "entries",
        "name": "Dedication",
        "entries": [
          "You touch one humanoid who wishes to be dedicated to your god's service. For the next 24 hours, whenever the target makes a saving throw, it can roll a {@dice d4} and add the number rolled to the save. A creature can benefit from this rite only once."
        ]
      },
      {
        "type": "entries",
        "name": "Funeral Rite",
        "entries": [
          "You touch one corpse, and for the next 7 days, the target can't become undead by any means short of a {@spell wish} spell."
        ]
      },
      {
        "type": "entries",
        "name": "Wedding",
        "entries": [
          "You touch adult humanoids willing to be bonded together in marriage. For the next 7 days, each target gains a +2 bonus to AC while they are within 30 feet of each other. A creature can benefit from this rite again only if widowed."
        ]
      }
    ],
    "affectsCreatureType": [
      "humanoid"
    ],
    "miscTags": [
      "MAC"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Chaos Bolt",
    "source": "XGE",
    "page": 151,
    "otherSources": [
      {
        "source": "GGR"
      }
    ],
    "level": 1,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You hurl an undulating, warbling mass of chaotic energy at one creature in range. Make a ranged spell attack against the target. On a hit, the target takes {@damage 2d8 + 1d6} damage. Choose one of the {@dice d8}s. The number rolled on that die determines the attack's damage type, as shown below.",
      {
        "type": "table",
        "caption": "Chaos Bolt",
        "colLabels": [
          "{@dice d8}",
          "Damage Type"
        ],
        "colStyles": [
          "col-2 text-center",
          "col-10"
        ],
        "rows": [
          [
            {
              "type": "cell",
              "roll": {
                "exact": 1
              }
            },
            "Acid"
          ],
          [
            {
              "type": "cell",
              "roll": {
                "exact": 2
              }
            },
            "Cold"
          ],
          [
            {
              "type": "cell",
              "roll": {
                "exact": 3
              }
            },
            "Fire"
          ],
          [
            {
              "type": "cell",
              "roll": {
                "exact": 4
              }
            },
            "Force"
          ],
          [
            {
              "type": "cell",
              "roll": {
                "exact": 5
              }
            },
            "Lightning"
          ],
          [
            {
              "type": "cell",
              "roll": {
                "exact": 6
              }
            },
            "Poison"
          ],
          [
            {
              "type": "cell",
              "roll": {
                "exact": 7
              }
            },
            "Psychic"
          ],
          [
            {
              "type": "cell",
              "roll": {
                "exact": 8
              }
            },
            "Thunder"
          ]
        ]
      },
      "If you roll the same number on both {@dice d8}s, the chaotic energy leaps from the target to a different creature of your choice within 30 feet of it. Make a new attack roll against the new target, and make a new damage roll, which could cause the chaotic energy to leap again.",
      "A creature can be targeted only once by each casting of this spell."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, each target takes {@scaledamage 2d8 + 1d6|1-9|1d6} extra damage of the type rolled for each slot level above 1st."
        ]
      }
    ],
    "damageInflict": [
      "acid",
      "cold",
      "fire",
      "force",
      "lightning",
      "poison",
      "psychic",
      "thunder"
    ],
    "spellAttack": [
      "R"
    ],
    "miscTags": [
      "RO"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Charm Monster",
    "source": "XGE",
    "page": 151,
    "level": 4,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You attempt to charm a creature you can see within range. It must make a Wisdom saving throw, and it does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is {@condition charmed} by you until the spell ends or until you or your companions do anything harmful to it. The {@condition charmed} creature is friendly to you. When the spell ends, the creature knows it was {@condition charmed} by you."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when you target them."
        ]
      }
    ],
    "conditionInflict": [
      "charmed"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Control Flames",
    "source": "XGE",
    "page": 152,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 16
      }
    ],
    "level": 0,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      },
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You choose nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of the following ways:",
      {
        "type": "list",
        "items": [
          "You instantaneously expand the flame 5 feet in one direction, provided that wood or other fuel is present in the new location.",
          "You instantaneously extinguish the flames within the cube.",
          "You double or halve the area of bright light and dim light cast by the flame, change its color, or both. The change lasts for 1 hour.",
          "You cause simple shapes—such as the vague form of a creature, an inanimate object, or a location—to appear within the flames and animate as you like. The shapes last for 1 hour."
        ]
      },
      "If you cast this spell multiple times, you can have up to three non-instantaneous effects created by it active at a time, and you can dismiss such an effect as an action."
    ],
    "miscTags": [
      "LGT",
      "SGT"
    ],
    "areaTags": [
      "C"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Control Winds",
    "source": "XGE",
    "page": 152,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 16
      }
    ],
    "level": 5,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 300
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You take control of the air in a 100-foot cube that you can see within range. Choose one of the following effects when you cast the spell. The effect lasts for the spell's duration, unless you use your action on a later turn to switch to a different effect. You can also use your action to temporarily halt the effect or to restart one you've halted.",
      {
        "type": "entries",
        "name": "Gusts",
        "entries": [
          "A wind picks up within the cube, continually blowing in a horizontal direction you designate. You choose the intensity of the wind: calm, moderate, or strong. If the wind is moderate or strong, ranged weapon attacks that pass through it or that are made against targets within the cube have disadvantage on their attack rolls. If the wind is strong, any creature moving against the wind must spend 1 extra foot of movement for each foot moved."
        ]
      },
      {
        "type": "entries",
        "name": "Downdraft",
        "entries": [
          "You cause a sustained blast of strong wind to blow downward from the top of the cube. Ranged weapon attacks that pass through the cube or that are made against targets within it have disadvantage on their attack rolls. A creature must make a Strength saving throw if it flies into the cube for the first time on a turn or starts its turn there flying. On a failed save, the creature is knocked {@condition prone}."
        ]
      },
      {
        "type": "entries",
        "name": "Updraft",
        "entries": [
          "You cause a sustained updraft within the cube, rising upward from the cube's bottom side. Creatures that end a fall within the cube take only half damage from the fall. When a creature in the cube makes a vertical jump, the creature can jump up to 10 feet higher than normal."
        ]
      }
    ],
    "conditionInflict": [
      "prone"
    ],
    "savingThrow": [
      "strength"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "C"
    ]
  },
  {
    "name": "Create Bonfire",
    "source": "XGE",
    "page": 152,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 16
      }
    ],
    "level": 0,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You create a bonfire on ground that you can see within range. Until the spell ends, the magic bonfire fills a 5-foot cube. Any creature in the bonfire's space when you cast the spell must succeed on a Dexterity saving throw or take {@damage 1d8} fire damage. A creature must also make the saving throw when it moves into the bonfire's space for the first time on a turn or ends its turn there.",
      "The bonfire ignites flammable objects in its area that aren't being worn or carried.",
      "The spell's damage increases by {@dice 1d8} when you reach 5th level ({@damage 2d8}), 11th level ({@damage 3d8}), and 17th level ({@damage 4d8})."
    ],
    "scalingLevelDice": {
      "label": "fire damage",
      "scaling": {
        "1": "1d8",
        "5": "2d8",
        "11": "3d8",
        "17": "4d8"
      }
    },
    "damageInflict": [
      "fire"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "OBJ",
      "SCL",
      "SGT"
    ],
    "areaTags": [
      "C"
    ]
  },
  {
    "name": "Create Homunculus",
    "source": "XGE",
    "page": 152,
    "level": 6,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "hour"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "clay, ash, and mandrake root, all of which the spell consumes, and a jewel-encrusted dagger worth at least 1,000 gp",
        "cost": 100000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "While speaking an intricate incantation, you cut yourself with a jewel-encrusted dagger, taking {@damage 2d4} piercing damage that can't be reduced in any way. You then drip your blood on the spell's other components and touch them, transforming them into a special construct called a {@creature homunculus}.",
      "The statistics of the {@creature homunculus} are in the Monster Manual. It is your faithful companion, and it dies if you die. Whenever you finish a long rest, you can spend up to half your Hit Dice if the homunculus is on the same plane of existence as you. When you do so, roll each die and add your Constitution modifier to it. Your hit point maximum is reduced by the total, and the homunculus's hit point maximum and current hit points are both increased by it. This process can reduce you to no lower than 1 hit point, and the change to your and the homunculus's hit points ends when you finish your next long rest. The reduction to your hit point maximum can't be removed by any means before then, except by the homunculus's death.",
      "You can have only one homunculus at a time. If you cast this spell while your homunculus lives, the spell fails."
    ],
    "miscTags": [
      "PRM"
    ]
  },
  {
    "name": "Crown of Stars",
    "source": "XGE",
    "page": 152,
    "level": 7,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "entries": [
      "Seven star-like motes of light appear and orbit your head until the spell ends. You can use a bonus action to send one of the motes streaking toward one creature or object within 120 feet of you. When you do so, make a ranged spell attack. On a hit, the target takes {@damage 4d12} radiant damage. Whether you hit or miss, the mote is expended. The spell ends early if you expend the last mote.",
      "If you have four or more motes remaining, they shed bright light in a 30-foot radius and dim light for an additional 30 feet. If you have one to three motes remaining, they shed dim light in a 30-foot radius."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 8th level or higher, the number of motes created increases by two for each slot level above 7th."
        ]
      }
    ],
    "damageInflict": [
      "radiant"
    ],
    "spellAttack": [
      "R"
    ],
    "miscTags": [
      "LGT",
      "OBJ",
      "UBA"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Danse Macabre",
    "source": "XGE",
    "page": 153,
    "level": 5,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Threads of dark power leap from your fingers to pierce up to five Small or Medium corpses you can see within range. Each corpse immediately stands up and becomes undead. You decide whether it is a {@creature zombie} or a {@creature skeleton} (the statistics for {@creature zombie||zombies} and {@creature skeleton||skeletons} are in the Monster Manual), and it gains a bonus to its attack and damage rolls equal to your spellcasting ability modifier.",
      "You can use a bonus action to mentally command the creatures you make with this spell, issuing the same command to all of them. To receive the command, a creature must be within 60 feet of you. You decide what action the creatures will take and where they will move during their next turn, or you can issue a general command, such as to guard a chamber or passageway against your foes. If you issue no commands, the creatures do nothing except defend themselves against hostile creatures. Once given an order, the creatures continue to follow it until their task is complete.",
      "The creatures are under your control until the spell ends, after which they become inanimate once more."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 6th level or higher, you animate up to two additional corpses for each slot level above 5th."
        ]
      }
    ],
    "miscTags": [
      "SGT",
      "SMN",
      "UBA"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Dawn",
    "source": "XGE",
    "page": 153,
    "level": 5,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a sunburst pendant worth at least 100 gp",
        "cost": 10000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "The light of dawn shines down on a location you specify within range. Until the spell ends, a 30-foot-radius, 40-foot-high cylinder of bright light glimmers there. This light is sunlight.",
      "When the cylinder appears, each creature in it must make a Constitution saving throw, taking {@damage 4d10} radiant damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw whenever it ends its turn in the cylinder.",
      "If you're within 60 feet of the cylinder, you can move it up to 60 feet as a bonus action on your turn."
    ],
    "damageInflict": [
      "radiant"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "LGTS",
      "UBA"
    ],
    "areaTags": [
      "Y"
    ]
  },
  {
    "name": "Dragon's Breath",
    "source": "XGE",
    "page": 154,
    "level": 2,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a hot pepper"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You touch one willing creature and imbue it with the power to spew magical energy from its mouth, provided it has one. Choose acid, cold, fire, lightning, or poison. Until the spell ends, the creature can use an action to exhale energy of the chosen type in a 15-foot cone. Each creature in that area must make a Dexterity saving throw, taking {@damage 3d6} damage of the chosen type on a failed save, or half as much damage on a successful one."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by {@scaledamage 3d6|2-9|1d6} for each slot level above 2nd."
        ]
      }
    ],
    "damageInflict": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "poison"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "areaTags": [
      "N",
      "ST"
    ]
  },
  {
    "name": "Druid Grove",
    "source": "XGE",
    "page": 154,
    "level": 6,
    "school": "A",
    "time": [
      {
        "number": 10,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "mistletoe, which the spell consumes, that was harvested with a golden sickle under the light of a full moon",
        "consume": true
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 24
        }
      }
    ],
    "entries": [
      "You invoke the spirits of nature to protect an area outdoors or underground. The area can be as small as a 30-foot cube or as large as a 90-foot cube. Buildings and other structures are excluded from the affected area. If you cast this spell in the same area every day for a year, the spell lasts until dispelled.",
      "The spell creates the following effects within the area. When you cast this spell, you can specify creatures as friends who are immune to the effects. You can also specify a password that, when spoken aloud, makes the speaker immune to these effects.",
      "The entire warded area radiates magic. A {@spell dispel magic} cast on the area, if successful, removes only one of the following effects, not the entire area. That spell's caster chooses which effect to end. Only when all its effects are gone is this spell dispelled.",
      {
        "type": "entries",
        "name": "Solid Fog",
        "entries": [
          "You can fill any number of 5-foot squares on the ground with thick fog, making them heavily obscured. The fog reaches 10 feet high. In addition, every foot of movement through the fog costs 2 extra feet. To a creature immune to this effect, the fog obscures nothing and looks like soft mist, with motes of green light floating in the air."
        ]
      },
      {
        "type": "entries",
        "name": "Grasping Undergrowth",
        "entries": [
          "You can fill any number of 5-foot squares on the ground that aren't filled with fog with grasping weeds and vines, as if they were affected by an {@spell entangle} spell. To a creature immune to this effect, the weeds and vines feel soft and reshape themselves to serve as temporary seats or beds."
        ]
      },
      {
        "type": "entries",
        "name": "Grove Guardians",
        "entries": [
          "You can animate up to four trees in the area, causing them to uproot themselves from the ground. These trees have the same statistics as an {@creature awakened tree}, which appears in the Monster Manual, except they can't speak, and their bark is covered with druidic symbols. If any creature not immune to this effect enters the warded area, the grove guardians fight until they have driven off or slain the intruders. The grove guardians also obey your spoken commands (no action required by you) that you issue while in the area. If you don't give them commands and no intruders are present, the grove guardians do nothing. The grove guardians can't leave the warded area. When the spell ends, the magic animating them disappears, and the trees take root again if possible."
        ]
      },
      {
        "type": "entries",
        "name": "Additional Spell Effect",
        "entries": [
          "You can place your choice of one of the following magical effects within the warded area:"
        ]
      },
      {
        "type": "list",
        "items": [
          "A constant {@spell gust of wind} in two locations of your choice",
          "{@spell Spike growth} in one location of your choice",
          "{@spell Wind wall} in two locations of your choice"
        ]
      },
      "To a creature immune to this effect, the winds are a fragrant, gentle breeze, and the area of {@spell spike growth} is harmless."
    ],
    "miscTags": [
      "OBS",
      "PIR",
      "PRM",
      "SMN"
    ],
    "areaTags": [
      "C",
      "Q"
    ]
  },
  {
    "name": "Dust Devil",
    "source": "XGE",
    "page": 154,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 17
      }
    ],
    "level": 2,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a pinch of dust"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Choose an unoccupied 5-foot cube of air that you can see within range. An elemental force that resembles a dust devil appears in the cube and lasts for the spell's duration.",
      "Any creature that ends its turn within 5 feet of the dust devil must make a Strength saving throw. On a failed save, the creature takes {@damage 1d8} bludgeoning damage and is pushed 10 feet away from the dust devil. On a successful save, the creature takes half as much damage and isn't pushed.",
      "As a bonus action, you can move the dust devil up to 30 feet in any direction. If the dust devil moves over sand, dust, loose dirt, or light gravel, it sucks up the material and forms a 10-foot-radius cloud of debris around itself that lasts until the start of your next turn. The cloud heavily obscures its area."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by {@scaledamage 1d8|2-9|1d8} for each slot level above 2nd."
        ]
      }
    ],
    "damageInflict": [
      "bludgeoning"
    ],
    "savingThrow": [
      "strength"
    ],
    "miscTags": [
      "FMV",
      "SGT",
      "UBA"
    ]
  },
  {
    "name": "Earth Tremor",
    "source": "XGE",
    "page": 155,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 17
      }
    ],
    "level": 1,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 10
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You cause a tremor in the ground within range. Each creature other than you in that area must make a Dexterity saving throw. On a failed save, a creature takes {@damage 1d6} bludgeoning damage and is knocked {@condition prone}. If the ground in that area is loose earth or stone, it becomes {@quickref difficult terrain||3} until cleared, with each 5-foot-diameter portion requiring at least 1 minute to clear by hand."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by {@scaledamage 1d6|1-9|1d6} for each slot level above 1st."
        ]
      }
    ],
    "damageInflict": [
      "bludgeoning"
    ],
    "conditionInflict": [
      "prone"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "DFT"
    ],
    "areaTags": [
      "R"
    ]
  },
  {
    "name": "Earthbind",
    "source": "XGE",
    "page": 154,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 17
      }
    ],
    "level": 2,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 300
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Choose one creature you can see within range. Yellow strips of magical energy loop around the creature. The target must succeed on a Strength saving throw, or its flying speed (if any) is reduced to 0 feet for the spell's duration. An airborne creature affected by this spell safely descends at 60 feet per round until it reaches the ground or the spell ends."
    ],
    "savingThrow": [
      "strength"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Elemental Bane",
    "source": "XGE",
    "page": 155,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 17
      }
    ],
    "level": 4,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Choose one creature you can see within range, and choose one of the following damage types: acid, cold, fire, lightning, or thunder. The target must succeed on a Constitution saving throw or be affected by the spell for its duration. The first time each turn the affected target takes damage of the chosen type, the target takes an extra {@damage 2d6} damage of that type. Moreover, the target loses any resistance to that damage type until the spell ends."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when you target them."
        ]
      }
    ],
    "damageInflict": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Enemies Abound",
    "source": "XGE",
    "page": 155,
    "level": 3,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You reach into the mind of one creature you can see and force it to make an Intelligence saving throw. A creature automatically succeeds if it is immune to being {@condition frightened}. On a failed save, the target loses the ability to distinguish friend from foe, regarding all creatures it can see as enemies until the spell ends. Each time the target takes damage, it can repeat the saving throw, ending the effect on itself on a success.",
      "Whenever the affected creature chooses another creature as a target, it must choose the target at random from among the creatures it can see within range of the attack, spell, or other ability it's using. If an enemy provokes an opportunity attack from the affected creature, the creature must make that attack if it is able to."
    ],
    "savingThrow": [
      "intelligence"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Enervation",
    "source": "XGE",
    "page": 155,
    "level": 5,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "A tendril of inky darkness reaches out from you, touching a creature you can see within range to drain life from it. The target must make a Dexterity saving throw. On a successful save, the target takes {@damage 2d8} necrotic damage, and the spell ends. On a failed save, the target takes {@damage 4d8} necrotic damage, and until the spell ends, you can use your action on each of your turns to automatically deal {@damage 4d8} necrotic damage to the target. The spell ends if you use your action to do anything else, if the target is ever outside the spell's range, or if the target has total cover from you.",
      "Whenever the spell deals damage to a target, you regain hit points equal to half the amount of necrotic damage the target takes."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 6th level or higher, the damage increases by {@scaledamage 4d8;2d8|5-9|1d8} for each slot level above 5th."
        ]
      }
    ],
    "damageInflict": [
      "necrotic"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "HL",
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Erupting Earth",
    "source": "XGE",
    "page": 155,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 17
      }
    ],
    "level": 3,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a piece of obsidian"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "Choose a point you can see on the ground within range. A fountain of churned earth and stone erupts in a 20-foot cube centered on that point. Each creature in that area must make a Dexterity saving throw. A creature takes {@damage 3d12} bludgeoning damage on a failed save, or half as much damage on a successful one. Additionally, the ground in that area becomes {@quickref difficult terrain||3} until cleared. Each 5-foot-square portion of the area requires at least 1 minute to clear by hand."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, the damage increases by {@scaledamage 3d12|3-9|1d12} for each slot level above 3rd."
        ]
      }
    ],
    "damageInflict": [
      "bludgeoning"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "DFT",
      "SGT"
    ],
    "areaTags": [
      "C"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Far Step",
    "source": "XGE",
    "page": 155,
    "level": 5,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You teleport up to 60 feet to an unoccupied space you can see. On each of your turns before the spell ends, you can use a bonus action to teleport in this way again."
    ],
    "miscTags": [
      "SGT",
      "TP",
      "UBA"
    ]
  },
  {
    "name": "Find Greater Steed",
    "source": "XGE",
    "page": 156,
    "additionalSources": [
      {
        "source": "FTD",
        "page": 190
      }
    ],
    "level": 4,
    "school": "C",
    "time": [
      {
        "number": 10,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You summon a spirit that assumes the form of a loyal, majestic mount. Appearing in an unoccupied space within range, the spirit takes on a form you choose: a {@creature griffon}, a {@creature pegasus}, a {@creature peryton}, a {@creature dire wolf}, a {@creature rhinoceros}, or a {@creature saber-toothed tiger}. The creature has the statistics provided in the Monster Manual for the chosen form, though it is a celestial, a fey, or a fiend (your choice) instead of its normal creature type. Additionally, if it has an Intelligence score of 5 or lower, its Intelligence becomes 6, and it gains the ability to understand one language of your choice that you speak.",
      "You control the mount in combat. While the mount is within 1 mile of you, you can communicate with it telepathically. While mounted on it, you can make any spell you cast that targets only you also target the mount.",
      "The mount disappears temporarily when it drops to 0 hit points or when you dismiss it as an action. Casting this spell again re-summons the bonded mount, with all its hit points restored and any conditions removed.",
      "You can't have more than one mount bonded by this spell or {@spell find steed} at the same time. As an action, you can release a mount from its bond, causing it to disappear permanently.",
      "Whenever the mount disappears, it leaves behind any objects it was wearing or carrying.",
      {
        "type": "inset",
        "source": "FTD",
        "page": 190,
        "name": "Dragonnel Steeds",
        "entries": [
          "With the DM's permission, a paladin can summon a spirit in the form of a {@creature dragonnel|ftd} using the find greater steed spell, which appears in {@i Xanathar's Guide to Everything}."
        ]
      }
    ],
    "miscTags": [
      "PRM",
      "SMN"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Flame Arrows",
    "source": "XGE",
    "page": 156,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 18
      }
    ],
    "level": 3,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You touch a quiver containing arrows or bolts. When a target is hit by a ranged weapon attack using a piece of ammunition drawn from the quiver, the target takes an extra {@damage 1d6} fire damage. The spell's magic ends on a piece of ammunition when it hits or misses, and the spell ends when twelve pieces of ammunition have been drawn from the quiver."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, the number of pieces of ammunition you can affect with this spell increases by two for each slot level above 3rd."
        ]
      }
    ],
    "damageInflict": [
      "fire"
    ],
    "miscTags": [
      "AAD"
    ]
  },
  {
    "name": "Frostbite",
    "source": "XGE",
    "page": 156,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 18
      }
    ],
    "level": 0,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes {@damage 1d6} cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn.",
      "The spell's damage increases by {@dice 1d6} when you reach 5th level ({@damage 2d6}), 11th level ({@damage 3d6}), and 17th level ({@damage 4d6})."
    ],
    "scalingLevelDice": {
      "label": "cold damage",
      "scaling": {
        "1": "1d6",
        "5": "2d6",
        "11": "3d6",
        "17": "4d6"
      }
    },
    "damageInflict": [
      "cold"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "SCL",
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Guardian of Nature",
    "source": "XGE",
    "page": 157,
    "level": 4,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "A nature spirit answers your call and transforms you into a powerful guardian. The transformation lasts until the spell ends. You choose one of the following forms to assume: Primal Beast or Great Tree.",
      {
        "type": "entries",
        "name": "Primal Beast",
        "entries": [
          "Bestial fur covers your body, your facial features become feral, and you gain the following benefits:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Your walking speed increases by 10 feet.",
          "You gain {@sense darkvision} with a range of 120 feet.",
          "You make Strength-based attack rolls with advantage.",
          "Your melee weapon attacks deal an extra {@damage 1d6} force damage on a hit."
        ]
      },
      {
        "type": "entries",
        "name": "Great Tree",
        "entries": [
          "Your skin appears barky, leaves sprout from your hair, and you gain the following benefits:"
        ]
      },
      {
        "type": "list",
        "items": [
          "You gain 10 temporary hit points.",
          "You make Constitution saving throws with advantage.",
          "You make Dexterity- and Wisdom-based attack rolls with advantage.",
          "While you are on the ground, the ground within 15 feet of you is {@quickref difficult terrain||3} for your enemies."
        ]
      }
    ],
    "damageInflict": [
      "force"
    ],
    "miscTags": [
      "AAD",
      "ADV",
      "DFT",
      "THP"
    ]
  },
  {
    "name": "Gust",
    "source": "XGE",
    "page": 157,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 19
      },
      {
        "source": "ERLW",
        "page": 50
      },
      {
        "source": "TCE",
        "page": 50
      }
    ],
    "level": 0,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You seize the air and compel it to create one of the following effects at a point you can see within range:",
      {
        "type": "list",
        "items": [
          "One Medium or smaller creature that you choose must succeed on a Strength saving throw or be pushed up to 5 feet away from you.",
          "You create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 10 feet away from you. It isn't pushed with enough force to cause damage.",
          "You create a harmless sensory effect using air, such as causing leaves to rustle, wind to slam shutters closed, or your clothing to ripple in a breeze."
        ]
      }
    ],
    "savingThrow": [
      "strength"
    ],
    "miscTags": [
      "FMV",
      "OBJ",
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Healing Spirit",
    "source": "XGE",
    "page": 157,
    "level": 2,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You call forth a nature spirit to soothe the wounded. The intangible spirit appears in a space that is a 5-foot cube you can see within range. The spirit looks like a transparent beast or fey (your choice).",
      "Until the spell ends, whenever you or a creature you can see moves into the spirit's space for the first time on a turn or starts its turn there, you can cause the spirit to restore {@dice 1d6} hit points to that creature (no action required). The spirit can't heal constructs or undead. The spirit can heal a number of times equal to 1 + your spellcasting ability modifier (minimum of twice). After healing that number of times, the spirit disappears.",
      "As a bonus action on your turn, you can move the spirit up to 30 feet to a space you can see."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, the healing increases by {@scaledice 1d6|2-9|1d6} for each slot level above 2nd."
        ]
      }
    ],
    "affectsCreatureType": [
      "aberration",
      "beast",
      "celestial",
      "dragon",
      "elemental",
      "fey",
      "fiend",
      "giant",
      "humanoid",
      "monstrosity",
      "ooze",
      "plant"
    ],
    "miscTags": [
      "HL",
      "SGT",
      "UBA"
    ],
    "areaTags": [
      "C"
    ]
  },
  {
    "name": "Holy Weapon",
    "source": "XGE",
    "page": 157,
    "level": 5,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You imbue a weapon you touch with holy power. Until the spell ends, the weapon emits bright light in a 30-foot radius and dim light for an additional 30 feet. In addition, weapon attacks made with it deal an extra {@damage 2d8} radiant damage on a hit. If the weapon isn't already a magic weapon, it becomes one for the duration.",
      "As a bonus action on your turn, you can dismiss this spell and cause the weapon to emit a burst of radiance. Each creature of your choice that you can see within 30 feet of the weapon must make a Constitution saving throw. On a failed save, a creature takes {@damage 4d8} radiant damage, and it is {@condition blinded} for 1 minute. On a successful save, a creature takes half as much damage and isn't {@condition blinded}. At the end of each of its turns, a {@condition blinded} creature can make a Constitution saving throw, ending the effect on itself on a success."
    ],
    "damageInflict": [
      "radiant"
    ],
    "conditionInflict": [
      "blinded"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "AAD",
      "LGT",
      "SGT",
      "UBA"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Ice Knife",
    "source": "XGE",
    "page": 157,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 19
      }
    ],
    "level": 1,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "s": true,
      "m": "a drop of water or piece of ice"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You create a shard of ice and fling it at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes {@damage 1d10} piercing damage. Hit or miss, the shard then explodes. The target and each creature within 5 feet of it must succeed on a Dexterity saving throw or take {@damage 2d6} cold damage."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 2nd level or higher, the cold damage increases by {@scaledamage 2d6|1-9|1d6} for each slot level above 1st."
        ]
      }
    ],
    "damageInflict": [
      "cold",
      "piercing"
    ],
    "spellAttack": [
      "R"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Illusory Dragon",
    "source": "XGE",
    "page": 157,
    "level": 8,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "By gathering threads of shadow material from the Shadowfell, you create a Huge shadowy dragon in an unoccupied space that you can see within range. The illusion lasts for the spell's duration and occupies its space, as if it were a creature.",
      "When the illusion appears, any of your enemies that can see it must succeed on a Wisdom saving throw or become {@condition frightened} of it for 1 minute. If a {@condition frightened} creature ends its turn in a location where it doesn't have line of sight to the illusion, it can repeat the saving throw, ending the effect on itself on a success.",
      "As a bonus action on your turn, you can move the illusion up to 60 feet. At any point during its movement, you can cause it to exhale a blast of energy in a 60-foot cone originating from its space. When you create the dragon, choose a damage type: acid, cold, fire, lightning, necrotic, or poison. Each creature in the cone must make an Intelligence saving throw, taking {@damage 7d6} damage of the chosen damage type on a failed save, or half as much damage on a successful one.",
      "The illusion is tangible because of the shadow stuff used to create it, but attacks miss it automatically, it succeeds on all saving throws, and it is immune to all damage and conditions. A creature that uses an action to examine the dragon can determine that it is an illusion by succeeding on an Intelligence ({@skill Investigation}) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through it and has advantage on saving throws against its breath."
    ],
    "damageInflict": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "necrotic",
      "poison"
    ],
    "conditionInflict": [
      "frightened"
    ],
    "savingThrow": [
      "wisdom",
      "intelligence"
    ],
    "abilityCheck": [
      "intelligence"
    ],
    "miscTags": [
      "SGT",
      "UBA"
    ],
    "areaTags": [
      "N"
    ]
  },
  {
    "name": "Immolation",
    "source": "XGE",
    "page": 158,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 19
      }
    ],
    "level": 5,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Flames wreathe one creature you can see within range. The target must make a Dexterity saving throw. It takes {@damage 8d6} fire damage on a failed save, or half as much damage on a successful one. On a failed save, the target also burns for the spell's duration. The burning target sheds bright light in a 30-foot radius and dim light for an additional 30 feet. At the end of each of its turns, the target repeats the saving throw. It takes {@damage 4d6} fire damage on a failed save, and the spell ends on a successful one. These magical flames can't be extinguished by nonmagical means.",
      "If damage from this spell kills a target, the target is turned to ash."
    ],
    "damageInflict": [
      "fire"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "LGT",
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Infernal Calling",
    "source": "XGE",
    "page": 158,
    "level": 5,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a ruby worth at least 999 gp",
        "cost": 99900
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Uttering a dark incantation, you summon a devil from the Nine Hells. You choose the devil's type, which must be one of {@filter challenge rating 6 or lower|bestiary|challenge rating=[&0;&6]|tag=devil|miscellaneous=!swarm}, such as a {@creature barbed devil} or a {@creature bearded devil}. The devil appears in an unoccupied space that you can see within range. The devil disappears when it drops to 0 hit points or when the spell ends.",
      "The devil is unfriendly toward you and your companions. Roll initiative for the devil, which has its own turns. It is under the Dungeon Master's control and acts according to its nature on each of its turns, which might result in its attacking you if it thinks it can prevail, or trying to tempt you to undertake an evil act in exchange for limited service. The DM has the creature's statistics.",
      "On each of your turns, you can try to issue a verbal command to the devil (no action required by you). It obeys the command if the likely outcome is in accordance with its desires, especially if the result would draw you toward evil. Otherwise, you must make a Charisma ({@skill Deception}, {@skill Intimidation}, or {@skill Persuasion}) check contested by its Wisdom ({@skill Insight}) check. You make the check with advantage if you say the devil's true name. If your check fails, the devil becomes immune to your verbal commands for the duration of the spell, though it can still carry out your commands if it chooses. If your check succeeds, the devil carries out your command—such as \\"attack my enemies,\\" \\"explore the room ahead,\\" or \\"bear this message to the queen\\"—until it completes the activity, at which point it returns to you to report having done so.",
      "If your {@status concentration} ends before the spell reaches its full duration, the devil doesn't disappear if it has become immune to your verbal commands. Instead, it acts in whatever manner it chooses for {@dice 3d6} minutes, and then it disappears.",
      "If you possess an individual devil's talisman, you can summon that devil if it is of the appropriate challenge rating plus 1, and it obeys all your commands, with no Charisma checks required."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 6th level or higher, the challenge rating increases by 1 for each slot level above 5th."
        ]
      }
    ],
    "miscTags": [
      "SGT",
      "SMN"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Infestation",
    "source": "XGE",
    "page": 158,
    "level": 0,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a living flea"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You cause a cloud of mites, fleas, and other parasites to appear momentarily on one creature you can see within range. The target must succeed on a Constitution saving throw, or it takes {@damage 1d6} poison damage and moves 5 feet in a random direction if it can move and its speed is at least 5 feet. Roll a {@dice d4} for the direction: 1, north; 2, south; 3, east; or 4, west. This movement doesn't provoke opportunity attacks, and if the direction rolled is blocked, the target doesn't move.",
      "The spell's damage increases by {@dice 1d6} when you reach 5th level ({@damage 2d6}), 11th level ({@damage 3d6}), and 17th level ({@damage 4d6})."
    ],
    "scalingLevelDice": {
      "label": "poison damage",
      "scaling": {
        "1": "1d6",
        "5": "2d6",
        "11": "3d6",
        "17": "4d6"
      }
    },
    "damageInflict": [
      "poison"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "SCL",
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Investiture of Flame",
    "source": "XGE",
    "page": 159,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 19
      }
    ],
    "level": 6,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "Flames race across your body, shedding bright light in a 30-foot radius and dim light for an additional 30 feet for the spell's duration. The flames don't harm you. Until the spell ends, you gain the following benefits:",
      {
        "type": "list",
        "items": [
          "You are immune to fire damage and have resistance to cold damage.",
          "Any creature that moves within 5 feet of you for the first time on a turn or ends its turn there takes {@damage 1d10} fire damage.",
          "You can use your action to create a line of fire 15 feet long and 5 feet wide extending from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes {@damage 4d8} fire damage on a failed save, or half as much damage on a successful one."
        ]
      }
    ],
    "damageResist": [
      "cold"
    ],
    "damageImmune": [
      "fire"
    ],
    "damageInflict": [
      "fire"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "LGT"
    ],
    "areaTags": [
      "L"
    ]
  },
  {
    "name": "Investiture of Ice",
    "source": "XGE",
    "page": 159,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 19
      }
    ],
    "level": 6,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "Until the spell ends, ice rimes your body, and you gain the following benefits:",
      {
        "type": "list",
        "items": [
          "You are immune to cold damage and have resistance to fire damage.",
          "You can move across {@quickref difficult terrain||3} created by ice or snow without spending extra movement.",
          "The ground in a 10-foot radius around you is icy and is {@quickref difficult terrain||3} for creatures other than you. The radius moves with you.",
          "You can use your action to create a 15-foot cone of freezing wind extending from your outstretched hand in a direction you choose. Each creature in the cone must make a Constitution saving throw. A creature takes {@damage 4d6} cold damage on a failed save, or half as much damage on a successful one. A creature that fails its save against this effect has its speed halved until the start of your next turn."
        ]
      }
    ],
    "damageResist": [
      "fire"
    ],
    "damageImmune": [
      "cold"
    ],
    "damageInflict": [
      "cold"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "DFT"
    ],
    "areaTags": [
      "N",
      "S"
    ]
  },
  {
    "name": "Investiture of Stone",
    "source": "XGE",
    "page": 159,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 19
      }
    ],
    "level": 6,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "Until the spell ends, bits of rock spread across your body, and you gain the following benefits:",
      {
        "type": "list",
        "items": [
          "You have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.",
          "You can use your action to create a small earthquake on the ground in a 15-foot radius centered on you. Other creatures on that ground must succeed on a Dexterity saving throw or be knocked {@condition prone}.",
          "You can move across {@quickref difficult terrain||3} made of earth or stone without spending extra movement. You can move through solid earth or stone as if it was air and without destabilizing it, but you can't end your movement there. If you do so, you are ejected to the nearest unoccupied space, this spell ends, and you are {@condition stunned} until the end of your next turn."
        ]
      }
    ],
    "damageResist": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "conditionInflict": [
      "prone",
      "stunned"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Investiture of Wind",
    "source": "XGE",
    "page": 160,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 20
      }
    ],
    "level": 6,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "Until the spell ends, wind whirls around you, and you gain the following benefits:",
      {
        "type": "list",
        "items": [
          "Ranged weapon attacks made against you have disadvantage on the attack roll.",
          "You gain a flying speed of 60 feet. If you are still flying when the spell ends, you fall, unless you can somehow prevent it.",
          "You can use your action to create a 15-foot cube of swirling wind centered on a point you can see within 60 feet of you. Each creature in that area must make a Constitution saving throw. A creature takes {@damage 2d10} bludgeoning damage on a failed save, or half as much damage on a successful one. If a Large or smaller creature fails the save, that creature is also pushed up to 10 feet away from the center of the cube."
        ]
      }
    ],
    "damageInflict": [
      "bludgeoning"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "FMV",
      "SGT"
    ],
    "areaTags": [
      "C"
    ]
  },
  {
    "name": "Invulnerability",
    "source": "XGE",
    "page": 160,
    "level": 9,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a small piece of adamantine worth at least 500 gp, which the spell consumes",
        "cost": 50000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "You are immune to all damage until the spell ends."
    ]
  },
  {
    "name": "Life Transference",
    "source": "XGE",
    "page": 160,
    "level": 3,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You sacrifice some of your health to mend another creature's injuries. You take {@damage 4d8} necrotic damage, which can't be reduced in any way, and one creature of your choice that you can see within range regains a number of hit points equal to twice the necrotic damage you take."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, the damage increases by {@scaledamage 4d8|3-9|1d8} for each slot level above 3rd."
        ]
      }
    ],
    "damageInflict": [
      "necrotic"
    ],
    "miscTags": [
      "HL",
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Maddening Darkness",
    "source": "XGE",
    "page": 160,
    "level": 8,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 150
      }
    },
    "components": {
      "v": true,
      "m": "a drop of pitch mixed with a drop of mercury"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "Magical darkness spreads from a point you choose within range to fill a 60-foot-radius sphere until the spell ends. The darkness spreads around corners. A creature with {@sense darkvision} can't see through this darkness. Non-magical light, as well as light created by spells of 8th level or lower, can't illuminate the area.",
      "Shrieks, gibbering, and mad laughter can be heard within the sphere. Whenever a creature starts its turn in the sphere, it must make a Wisdom saving throw, taking {@damage 8d8} psychic damage on a failed save, or half as much damage on a successful one."
    ],
    "damageInflict": [
      "psychic"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Maelstrom",
    "source": "XGE",
    "page": 160,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 20
      }
    ],
    "level": 5,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "paper or leaf in the shape of a funnel"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "A swirling mass of 5-foot-deep water appears in a 30-foot radius centered on a point you can see within range. The point must be on the ground or in a body of water. Until the spell ends, that area is {@quickref difficult terrain||3}, and any creature that starts its turn there must succeed on a Strength saving throw or take {@damage 6d6} bludgeoning damage and be pulled 10 feet toward the center."
    ],
    "damageInflict": [
      "bludgeoning"
    ],
    "savingThrow": [
      "strength"
    ],
    "miscTags": [
      "DFT",
      "FMV",
      "SGT"
    ],
    "areaTags": [
      "R"
    ]
  },
  {
    "name": "Magic Stone",
    "source": "XGE",
    "page": 160,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 20
      }
    ],
    "level": 0,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a {@item sling|phb}. If thrown, a pebble has a range of 60 feet. If someone else attacks with a pebble, that attacker adds your spellcasting ability modifier, not the attacker's, to the attack roll. On a hit, the target takes bludgeoning damage equal to {@damage 1d6} + your spellcasting ability modifier. Whether the attack hits or misses, the spell then ends on the stone.",
      "If you cast this spell again, the spell ends on any pebbles still affected by your previous casting."
    ],
    "damageInflict": [
      "bludgeoning"
    ],
    "spellAttack": [
      "R"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Mass Polymorph",
    "source": "XGE",
    "page": 160,
    "level": 9,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a caterpillar cocoon"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You transform up to ten creatures of your choice that you can see within range. An unwilling target must succeed on a Wisdom saving throw to resist the transformation. An unwilling shapechanger automatically succeeds on the save.",
      "Each target assumes a beast form of your choice, and you can choose the same form or different ones for each target. The new form can be {@filter any beast|bestiary|type=beast|miscellaneous=!swarm} you have seen whose challenge rating is equal to or less than the target's (or half the target's level, if the target doesn't have a challenge rating). The target's game statistics, including mental ability scores, are replaced by the statistics of the chosen beast, but the target retains its hit points, alignment, and personality.",
      "Each target gains a number of temporary hit points equal to the hit points of its new form. These temporary hit points can't be replaced by temporary hit points from another source. A target reverts to its normal form when it has no more temporary hit points or it dies. If the spell ends before then, the creature loses all its temporary hit points and reverts to its normal form.",
      "The creature is limited in the actions it can perform by the nature of its new form. It can't speak, cast spells, or do anything else that requires hands or speech.",
      "The target's gear melds into the new form. The target can't activate, use, wield, or otherwise benefit from any of its equipment."
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "SGT",
      "THP"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Maximilian's Earthen Grasp",
    "source": "XGE",
    "page": 161,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 20
      }
    ],
    "level": 2,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a miniature hand sculpted from clay"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You choose a 5-foot-square unoccupied space on the ground that you can see within range. A Medium hand made from compacted soil rises there and reaches for one creature you can see within 5 feet of it. The target must make a Strength saving throw. On a failed save, the target takes {@damage 2d6} bludgeoning damage and is {@condition restrained} for the spell's duration.",
      "As an action, you can cause the hand to crush the {@condition restrained} target, which must make a Strength saving throw. The target takes {@damage 2d6} bludgeoning damage on a failed save, or half as much damage on a successful one.",
      "To break out, the {@condition restrained} target can use its action to make a Strength check against your spell save DC. On a success, the target escapes and is no longer {@condition restrained} by the hand.",
      "As an action, you can cause the hand to reach for a different creature or to move to a different unoccupied space within range. The hand releases a {@condition restrained} target if you do either."
    ],
    "damageInflict": [
      "bludgeoning"
    ],
    "conditionInflict": [
      "restrained"
    ],
    "savingThrow": [
      "strength"
    ],
    "abilityCheck": [
      "strength"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Melf's Minute Meteors",
    "source": "XGE",
    "page": 161,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 20
      }
    ],
    "level": 3,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "niter, sulfur, and pine tar formed into a bead"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "You create six tiny meteors in your space. They float in the air and orbit you for the spell's duration. When you cast the spell—and as a bonus action on each of your turns thereafter—you can expend one or two of the meteors, sending them streaking toward a point or points you choose within 120 feet of you. Once a meteor reaches its destination or impacts against a solid surface, the meteor explodes. Each creature within 5 feet of the point where the meteor explodes must make a Dexterity saving throw. A creature takes {@damage 2d6} fire damage on a failed save, or half as much damage on a successful one."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, the number of meteors created increases by two for each slot level above 3rd."
        ]
      }
    ],
    "damageInflict": [
      "fire"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "miscTags": [
      "UBA"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Mental Prison",
    "source": "XGE",
    "page": 161,
    "level": 6,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You attempt to bind a creature within an illusory cell that only it perceives. One creature you can see within range must make an Intelligence saving throw. The target succeeds automatically if it is immune to being {@condition charmed}. On a successful save, the target takes {@damage 5d10} psychic damage, and the spell ends. On a failed save, the target takes {@damage 5d10} psychic damage, and you make the area immediately around the target's space appear dangerous to it in some way. You might cause the target to perceive itself as being surrounded by fire, floating razors, or hideous maws filled with dripping teeth. Whatever form the illusion takes, the target can't see or hear anything beyond it and is {@condition restrained} for the spell's duration. If the target is moved out of the illusion, makes a melee attack through it, or reaches any part of its body through it, the target takes {@damage 10d10} psychic damage, and the spell ends."
    ],
    "damageInflict": [
      "psychic"
    ],
    "savingThrow": [
      "intelligence"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Mighty Fortress",
    "source": "XGE",
    "page": 161,
    "otherSources": [
      {
        "source": "AitFR-AVT",
        "page": 10
      },
      {
        "source": "AitFR-FCD",
        "page": 12
      }
    ],
    "level": 8,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "miles",
        "amount": 1
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a diamond worth at least 500 gp, which the spell consumes",
        "cost": 50000,
        "consume": true
      }
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "A fortress of stone erupts from a square area of ground of your choice that you can see within range. The area is 120 feet on each side, and it must not have any buildings or other structures on it. Any creatures in the area are harmlessly lifted up as the fortress rises.",
      "The fortress has four turrets with square bases, each one 20 feet on a side and 30 feet tall, with one turret on each corner. The turrets are connected to each other by stone walls that are each 80 feet long, creating an enclosed area. Each wall is 1 foot thick and is composed of panels that are 10 feet wide and 20 feet tall. Each panel is contiguous with two other panels or one other panel and a turret. You can place up to four stone doors in the fortress's outer wall.",
      "A small keep stands inside the enclosed area. The keep has a square base that is 50 feet on each side, and it has three floors with 10-foot-high ceilings. Each of the floors can be divided into as many rooms as you like, provided each room is at least 5 feet on each side. The floors of the keep are connected by stone staircases, its walls are 6 inches thick, and interior rooms can have stone doors or open archways as you choose. The keep is furnished and decorated however you like, and it contains sufficient food to serve a nine-course banquet for up to 100 people each day. Furnishings, food, and other objects created by this spell crumble to dust if removed from the fortress.",
      "A staff of one hundred invisible servants obeys any command given to them by creatures you designate when you cast the spell. Each servant functions as if created by the unseen servant spell.",
      "The walls, turrets, and keep are all made of stone that can be damaged. Each 10-foot-by-10-foot section of stone has AC 15 and 30 hit points per inch of thickness. It is immune to poison and psychic damage. Reducing a section of stone to 0 hit points destroys it and might cause connected sections to buckle and collapse at the DM's discretion.",
      "After 7 days or when you cast this spell somewhere else, the fortress harmlessly crumbles and sinks back into the ground, leaving any creatures that were inside it safely on the ground.",
      "Casting this spell on the same spot once every 7 days for a year makes the fortress permanent."
    ],
    "damageImmune": [
      "poison",
      "psychic"
    ],
    "miscTags": [
      "PIR",
      "PRM",
      "SGT"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Mind Spike",
    "source": "XGE",
    "page": 162,
    "level": 2,
    "school": "D",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You reach into the mind of one creature you can see within range. The target must make a Wisdom saving throw, taking {@damage 3d8} psychic damage on a failed save, or half as much damage on a successful one. On a failed save, you also always know the target's location until the spell ends, but only while the two of you are on the same plane of existence. While you have this knowledge, the target can't become hidden from you, and if it's {@condition invisible}, it gains no benefit from that condition against you."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by {@scaledamage 3d8|2-9|1d8} for each slot level above 2nd."
        ]
      }
    ],
    "damageInflict": [
      "psychic"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Mold Earth",
    "source": "XGE",
    "page": 162,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 21
      }
    ],
    "level": 0,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      },
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:",
      {
        "type": "list",
        "items": [
          "If you target an area of loose earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesn't involve enough force to cause damage.",
          "You cause shapes, colors, or both to appear on the dirt or stone, spelling out words, creating images, or shaping patterns. The changes last for 1 hour.",
          "If the dirt or stone you target is on the ground, you cause it to become {@quickref difficult terrain||3}. Alternatively, you can cause the ground to become normal terrain if it is already {@quickref difficult terrain||3}. This change lasts for 1 hour."
        ]
      },
      "If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
    ],
    "miscTags": [
      "DFT",
      "SGT"
    ],
    "areaTags": [
      "C"
    ]
  },
  {
    "name": "Negative Energy Flood",
    "source": "XGE",
    "page": 163,
    "level": 5,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "m": "a broken bone and a square of black silk"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You send ribbons of negative energy at one creature you can see within range. Unless the target is undead, it must make a Constitution saving throw, taking {@damage 5d12} necrotic damage on a failed save, or half as much damage on a successful one. A target killed by this damage rises up as a {@creature zombie} at the start of your next turn. The zombie pursues whatever creature it can see that is closest to it. Statistics for the {@creature zombie} are in the Monster Manual.",
      "If you target an undead with this spell, the target doesn't make a saving throw. Instead, roll {@dice 5d12}. The target gains half the total as temporary hit points."
    ],
    "damageInflict": [
      "necrotic"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "SGT",
      "SMN",
      "THP"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Power Word Pain",
    "source": "XGE",
    "page": 163,
    "level": 7,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You speak a word of power that causes waves of intense pain to assail one creature you can see within range. If the target has 100 hit points or fewer, it is subject to crippling pain. Otherwise, the spell has no effect on it. A target is also unaffected if it is immune to being {@condition charmed}.",
      "While the target is affected by crippling pain, any speed it has can be no higher than 10 feet. The target also has disadvantage on attack rolls, ability checks, and saving throws, other than Constitution saving throws. Finally, if the target tries to cast a spell, it must first succeed on a Constitution saving throw, or the casting fails and the spell is wasted.",
      "A target suffering this pain can make a Constitution saving throw at the end of each of its turns. On a successful save, the pain ends."
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Primal Savagery",
    "source": "XGE",
    "page": 163,
    "level": 0,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You channel primal magic to cause your teeth or fingernails to sharpen, ready to deliver a corrosive attack. Make a melee spell attack against one creature within 5 feet of you. On a hit, the target takes {@damage 1d10} acid damage. After you make the attack, your teeth or fingernails return to normal.",
      "The spell's damage increases by {@dice 1d10} when you reach 5th level ({@damage 2d10}), 11th level ({@damage 3d10}), and 17th level ({@damage 4d10})."
    ],
    "scalingLevelDice": {
      "label": "acid damage",
      "scaling": {
        "1": "1d10",
        "5": "2d10",
        "11": "3d10",
        "17": "4d10"
      }
    },
    "damageInflict": [
      "acid"
    ],
    "spellAttack": [
      "M"
    ],
    "miscTags": [
      "SCL"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Primordial Ward",
    "source": "XGE",
    "page": 163,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 21
      }
    ],
    "level": 6,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You have resistance to acid, cold, fire, lightning, and thunder damage for the spell's duration.",
      "When you take damage of one of those types, you can use your reaction to gain immunity to that type of damage, including against the triggering damage. If you do so, the resistances end, and you have the immunity until the end of your next turn, at which time the spell ends."
    ],
    "damageResist": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder"
    ],
    "damageImmune": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder"
    ]
  },
  {
    "name": "Psychic Scream",
    "source": "XGE",
    "page": 163,
    "level": 9,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You unleash the power of your mind to blast the intellect of up to ten creatures of your choice that you can see within range. Creatures that have an Intelligence score of 2 or lower are unaffected.",
      "Each target must make an Intelligence saving throw. On a failed save, a target takes {@damage 14d6} psychic damage and is {@condition stunned}. On a successful save, a target takes half as much damage and isn't {@condition stunned}. If a target is killed by this damage, its head explodes, assuming it has one.",
      "A {@condition stunned} target can make an Intelligence saving throw at the end of each of its turns. On a successful save, the stunning effect ends."
    ],
    "damageInflict": [
      "psychic"
    ],
    "conditionInflict": [
      "stunned"
    ],
    "savingThrow": [
      "intelligence"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Pyrotechnics",
    "source": "XGE",
    "page": 163,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 21
      }
    ],
    "level": 2,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "Choose an area of nonmagical flame that you can see and that fits within a 5-foot cube within range. You can extinguish the fire in that area, and you create either fireworks or smoke when you do so.",
      {
        "type": "entries",
        "name": "Fireworks",
        "entries": [
          "The target explodes with a dazzling display of colors. Each creature within 10 feet of the target must succeed on a Constitution saving throw or become {@condition blinded} until the end of your next turn."
        ]
      },
      {
        "type": "entries",
        "name": "Smoke",
        "entries": [
          "Thick black smoke spreads out from the target in a 20-foot radius, moving around corners. The area of the smoke is heavily obscured. The smoke persists for 1 minute or until a strong wind disperses it."
        ]
      }
    ],
    "conditionInflict": [
      "blinded"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "OBS",
      "SGT"
    ],
    "areaTags": [
      "C",
      "S"
    ]
  },
  {
    "name": "Scatter",
    "source": "XGE",
    "page": 164,
    "level": 6,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "The air quivers around up to five creatures of your choice that you can see within range. An unwilling creature must succeed on a Wisdom saving throw to resist this spell. You teleport each affected target to an unoccupied space that you can see within 120 feet of you. That space must be on the ground or on a floor."
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "SGT",
      "TP"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Shadow Blade",
    "source": "XGE",
    "page": 164,
    "level": 2,
    "school": "I",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You weave together threads of shadow to create a sword of solidified gloom in your hand. This magic sword lasts until the spell ends. It counts as a simple melee weapon with which you are proficient. It deals {@damage 2d8} psychic damage on a hit and has the finesse, light, and thrown properties (range 20/60). In addition, when you use the sword to attack a target that is in dim light or darkness, you make the attack roll with advantage.",
      "If you drop the weapon or throw it, it dissipates at the end of the turn. Thereafter, while the spell persists, you can use a bonus action to cause the sword to reappear in your hand."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a 3rd- or 4th-level spell slot, the damage increases to {@dice 3d8}. When you cast it using a 5th- or 6th-level spell slot, the damage increases to {@dice 4d8}. When you cast it using a spell slot of 7th level or higher, the damage increases to {@dice 5d8}."
        ]
      }
    ],
    "damageInflict": [
      "psychic"
    ],
    "miscTags": [
      "UBA"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Shadow of Moil",
    "source": "XGE",
    "page": 164,
    "level": 4,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "an undead eyeball encased in a gem worth at least 150 gp",
        "cost": 15000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Flame-like shadows wreathe your body until the spell ends, causing you to become heavily obscured to others. The shadows turn dim light within 10 feet of you into darkness, and bright light in the same area to dim light.",
      "Until the spell ends, you have resistance to radiant damage. In addition, whenever a creature within 10 feet of you hits you with an attack, the shadows lash out at that creature, dealing it {@damage 2d8} necrotic damage."
    ],
    "damageResist": [
      "radiant"
    ],
    "damageInflict": [
      "necrotic"
    ],
    "miscTags": [
      "OBS"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Shape Water",
    "source": "XGE",
    "page": 164,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 21
      },
      {
        "source": "EGW"
      }
    ],
    "level": 0,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      },
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        }
      }
    ],
    "entries": [
      "You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:",
      {
        "type": "list",
        "items": [
          "You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn't have enough force to cause damage.",
          "You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour.",
          "You change the water's color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour.",
          "You freeze the water, provided that there are no creatures in it. The water unfreezes in 1 hour."
        ]
      },
      "If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "C"
    ]
  },
  {
    "name": "Sickening Radiance",
    "source": "XGE",
    "page": 164,
    "level": 4,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "Dim, greenish light spreads within a 30-foot-radius sphere centered on a point you choose within range. The light spreads around corners, and it lasts until the spell ends.",
      "When a creature moves into the spell's area for the first time on a turn or starts its turn there, that creature must succeed on a Constitution saving throw or take {@damage 4d10} radiant damage, and it suffers one level of {@condition exhaustion} and emits a dim, greenish light in a 5-foot radius. This light makes it impossible for the creature to benefit from being {@condition invisible}. The light and any levels of {@condition exhaustion} caused by this spell go away when the spell ends."
    ],
    "damageInflict": [
      "radiant"
    ],
    "conditionInflict": [
      "exhaustion"
    ],
    "savingThrow": [
      "constitution"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Skill Empowerment",
    "source": "XGE",
    "page": 165,
    "level": 5,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "Your magic deepens a creature's understanding of its own talent. You touch one willing creature and give it expertise in one skill of your choice; until the spell ends, the creature doubles its proficiency bonus for ability checks it makes that use the chosen skill.",
      "You must choose a skill in which the target is proficient and that isn't already benefiting from an effect, such as Expertise, that doubles its proficiency bonus."
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Skywrite",
    "source": "XGE",
    "page": 165,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 22
      }
    ],
    "level": 2,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "sight"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "meta": {
      "ritual": true
    },
    "entries": [
      "You cause up to ten words to form in a part of the sky you can see. The words appear to be made of cloud and remain in place for the spell's duration. The words dissipate when the spell ends. A strong wind can disperse the clouds and end the spell early."
    ],
    "miscTags": [
      "SGT"
    ]
  },
  {
    "name": "Snare",
    "source": "XGE",
    "page": 165,
    "level": 1,
    "school": "A",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "s": true,
      "m": {
        "text": "25 feet of rope, which the spell consumes",
        "consume": true
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 8
        }
      }
    ],
    "entries": [
      "As you cast this spell, you use the rope to create a circle with a 5-foot radius on the ground or the floor. When you finish casting, the rope disappears and the circle becomes a magic trap.",
      "This trap is nearly invisible, requiring a successful Intelligence ({@skill Investigation}) check against your spell save DC to be discerned.",
      "The trap triggers when a Small, Medium, or Large creature moves onto the ground or the floor in the spell's radius. That creature must succeed on a Dexterity saving throw or be magically hoisted into the air, leaving it hanging upside down 3 feet above the ground or the floor. The creature is {@condition restrained} there until the spell ends.",
      "A {@condition restrained} creature can make a Dexterity saving throw at the end of each of its turns, ending the effect on itself on a success. Alternatively, the creature or someone else who can reach it can use an action to make an Intelligence ({@skill Arcana}) check against your spell save DC. On a success, the {@condition restrained} effect ends.",
      "After the trap is triggered, the spell ends when no creature is {@condition restrained} by it."
    ],
    "conditionInflict": [
      "restrained"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "abilityCheck": [
      "intelligence"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Snilloc's Snowball Swarm",
    "source": "XGE",
    "page": 165,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 22
      }
    ],
    "level": 2,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a piece of ice or a small white rock chip"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "A flurry of magic snowballs erupts from a point you choose within range. Each creature in a 5-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes {@damage 3d6} cold damage on a failed save, or half as much damage on a successful one."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by {@scaledamage 3d6|2-9|1d6} for each slot level above 2nd."
        ]
      }
    ],
    "damageInflict": [
      "cold"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Soul Cage",
    "source": "XGE",
    "page": 165,
    "level": 6,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "reaction",
        "condition": "which you take when a humanoid you can see within 60 feet of you dies"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a tiny silver cage worth 100 gp",
        "cost": 10000
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 8
        }
      }
    ],
    "entries": [
      "This spell snatches the soul of a humanoid as it dies and traps it inside the tiny cage you use for the material component. A stolen soul remains inside the cage until the spell ends or until you destroy the cage, which ends the spell. While you have a soul inside the cage, you can exploit it in any of the ways described below. You can use a trapped soul up to six times. Once you exploit a soul for the sixth time, it is released, and the spell ends. While a soul is trapped, the dead humanoid it came from can't be revived.",
      {
        "type": "entries",
        "name": "Steal Life",
        "entries": [
          "You can use a bonus action to drain vigor from the soul and regain {@dice 2d8} hit points."
        ]
      },
      {
        "type": "entries",
        "name": "Query Soul",
        "entries": [
          "You ask the soul a question (no action required) and receive a brief telepathic answer, which you can understand regardless of the language used. The soul knows only what it knew in life, but it must answer you truthfully and to the best of its ability. The answer is no more than a sentence or two and might be cryptic."
        ]
      },
      {
        "type": "entries",
        "name": "Borrow Experience",
        "entries": [
          "You can use a bonus action to bolster yourself with the soul's life experience, making your next attack roll, ability check, or saving throw with advantage. If you don't use this benefit before the start of your next turn, it is lost."
        ]
      },
      {
        "type": "entries",
        "name": "Eyes of the Dead",
        "entries": [
          "You can use an action to name a place the humanoid saw in life, which creates an invisible sensor somewhere in that place if it is on the plane of existence you're currently on. The sensor remains for as long as you concentrate, up to 10 minutes (as if you were {@status concentration||concentrating} on a spell). You receive visual and auditory information from the sensor as if you were in its space using your senses."
        ]
      },
      "A creature that can see the sensor (such as one using {@spell see invisibility} or {@sense truesight}) sees a translucent image of the tormented humanoid whose soul you caged."
    ],
    "affectsCreatureType": [
      "humanoid"
    ],
    "miscTags": [
      "ADV",
      "HL",
      "UBA"
    ]
  },
  {
    "name": "Steel Wind Strike",
    "source": "XGE",
    "page": 166,
    "level": 5,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 30
      }
    },
    "components": {
      "s": true,
      "m": {
        "text": "a melee weapon worth at least 1 sp",
        "cost": 10
      }
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You flourish the weapon used in the casting and then vanish to strike like the wind. Choose up to five creatures you can see within range. Make a melee spell attack against each target. On a hit, a target takes {@damage 6d10} force damage.",
      "You can then teleport to an unoccupied space you can see within 5 feet of one of the targets you hit or missed."
    ],
    "damageInflict": [
      "force"
    ],
    "spellAttack": [
      "M"
    ],
    "miscTags": [
      "SGT",
      "TP"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Storm Sphere",
    "source": "XGE",
    "page": 166,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 22
      }
    ],
    "level": 4,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 150
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "A 20-foot-radius sphere of whirling air springs into existence, centered on a point you choose within range. The sphere remains for the spell's duration. Each creature in the sphere when it appears or that ends its turn there must succeed on a Strength saving throw or take {@damage 2d6} bludgeoning damage. The sphere's space is {@quickref difficult terrain||3}.",
      "Until the spell ends, you can use a bonus action on each of your turns to cause a bolt of lightning to leap from the center of the sphere toward one creature you choose within 60 feet of the center. Make a ranged spell attack. You have advantage on the attack roll if the target is in the sphere. On a hit, the target takes {@damage 4d6} lightning damage.",
      "Creatures within 30 feet of the sphere have disadvantage on Wisdom ({@skill Perception}) checks made to listen."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 5th level or higher, the damage for each of its effects increases by {@scaledamage 2d6;4d6|4-9|1d6} for each slot level above 4th."
        ]
      }
    ],
    "damageInflict": [
      "bludgeoning",
      "lightning"
    ],
    "spellAttack": [
      "R"
    ],
    "savingThrow": [
      "strength"
    ],
    "miscTags": [
      "DFT",
      "UBA"
    ],
    "areaTags": [
      "S",
      "ST"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Summon Greater Demon",
    "source": "XGE",
    "page": 166,
    "level": 4,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a vial of blood from a humanoid killed within the past 24 hours",
        "consume": "optional"
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You utter foul words, summoning one demon from the chaos of the Abyss. You choose the demon's type, which must be {@filter one of challenge rating 5 or lower|bestiary|challenge rating=[&0;&5]|tag=demon|miscellaneous=!swarm}, such as a {@creature shadow demon} or a {@creature barlgura}. The demon appears in an unoccupied space you can see within range, and the demon disappears when it drops to 0 hit points or when the spell ends.",
      "Roll initiative for the demon, which has its own turns. When you summon it and on each of your turns thereafter, you can issue a verbal command to it (requiring no action on your part), telling it what it must do on its next turn. If you issue no command, it spends its turn attacking any creature within reach that has attacked it.",
      "At the end of each of the demon's turns, it makes a Charisma saving throw. The demon has disadvantage on this saving throw if you say its true name. On a failed save, the demon continues to obey you. On a successful save, your control of the demon ends for the rest of the duration, and the demon spends its turns pursuing and attacking the nearest non-demons to the best of its ability. If you stop {@status concentration||concentrating} on the spell before it reaches its full duration, an uncontrolled demon doesn't disappear for {@dice 1d6} rounds if it still has hit points.",
      "As part of casting the spell, you can form a circle on the ground with the blood used as a material component. The circle is large enough to encompass your space. While the spell lasts, the summoned demon can't cross the circle or harm it, and it can't target anyone within it. Using the material component in this manner consumes it when the spell ends."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 5th level or higher, the challenge rating increases by 1 for each slot level above 4th."
        ]
      }
    ],
    "savingThrow": [
      "charisma"
    ],
    "miscTags": [
      "SGT",
      "SMN"
    ]
  },
  {
    "name": "Summon Lesser Demons",
    "source": "XGE",
    "page": 167,
    "level": 3,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a vial of blood from a humanoid killed within the past 24 hours",
        "consume": "optional"
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You utter foul words, summoning demons from the chaos of the Abyss. Roll on the following table to determine what appears.",
      {
        "type": "table",
        "colLabels": [
          "{@dice d6}",
          "Demons Summoned"
        ],
        "colStyles": [
          "col-1 text-center",
          "col-11"
        ],
        "rows": [
          [
            {
              "type": "cell",
              "roll": {
                "min": 1,
                "max": 2
              }
            },
            "Two {@filter demons of challenge rating 1 or lower|bestiary|challenge rating=[&0;&1]|tag=demon|miscellaneous=!swarm}"
          ],
          [
            {
              "type": "cell",
              "roll": {
                "min": 3,
                "max": 4
              }
            },
            "Four {@filter demons of challenge rating 1/2 or lower|bestiary|challenge rating=[&0;&1/2]|tag=demon|miscellaneous=!swarm}"
          ],
          [
            {
              "type": "cell",
              "roll": {
                "min": 5,
                "max": 6
              }
            },
            "Eight {@filter demons of challenge rating 1/4 or lower|bestiary|challenge rating=[&0;&1/4]|tag=demon|miscellaneous=!swarm}"
          ]
        ]
      },
      "The DM chooses the demons, such as {@creature manes} or {@creature dretch||dretches}, and you choose the unoccupied spaces you can see within range where they appear. A summoned demon disappears when it drops to 0 hit points or when the spell ends.",
      "The demons are hostile to all creatures, including you. Roll initiative for the summoned demons as a group, which has its own turns. The demons pursue and attack the nearest non-demons to the best of their ability.",
      "As part of casting the spell, you can form a circle on the ground with the blood used as a material component. The circle is large enough to encompass your space. While the spell lasts, the summoned demons can't cross the circle or harm it, and they can't target anyone within it. Using the material component in this manner consumes it when the spell ends."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 6th or 7th level, you summon twice as many demons. If you cast it using a spell slot of 8th or 9th level, you summon three times as many demons."
        ]
      }
    ],
    "miscTags": [
      "RO",
      "SGT",
      "SMN"
    ]
  },
  {
    "name": "Synaptic Static",
    "source": "XGE",
    "page": 167,
    "level": 5,
    "school": "E",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You choose a point within range and cause psychic energy to explode there. Each creature in a 20-foot-radius sphere centered on that point must make an Intelligence saving throw. A creature with an Intelligence score of 2 or lower can't be affected by this spell. A target takes {@damage 8d6} psychic damage on a failed save, or half as much damage on a successful one.",
      "After a failed save, a target has muddled thoughts for 1 minute. During that time, it rolls a {@dice d6} and subtracts the number rolled from all its attack rolls and ability checks, as well as its Constitution saving throws to maintain {@status concentration}. The target can make an Intelligence saving throw at the end of each of its turns, ending the effect on itself on a success."
    ],
    "damageInflict": [
      "psychic"
    ],
    "savingThrow": [
      "intelligence",
      "constitution"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Temple of the Gods",
    "source": "XGE",
    "page": 167,
    "level": 7,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "hour"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": {
        "text": "a holy symbol worth at least 5 gp",
        "cost": 500
      }
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 24
        }
      }
    ],
    "entries": [
      "You cause a temple to shimmer into existence on ground you can see within range. The temple must fit within an unoccupied cube of space, up to 120 feet on each side. The temple remains until the spell ends. It is dedicated to whatever god, pantheon, or philosophy is represented by the holy symbol used in the casting.",
      "You make all decisions about the temple's appearance. The interior is enclosed by a floor, walls, and a roof, with one door granting access to the interior and as many windows as you wish. Only you and any creatures you designate when you cast the spell can open or close the door.",
      "The temple's interior is an open space with an idol or altar at one end. You decide whether the temple is illuminated and whether that illumination is bright light or dim light. The smell of burning incense fills the air within, and the temperature is mild.",
      "The temple opposes types of creatures you choose when you cast this spell. Choose one or more of the following: celestials, elementals, fey, fiends, or undead. If a creature of the chosen type attempts to enter the temple, that creature must make a Charisma saving throw. On a failed save, it can't enter the temple for 24 hours. Even if the creature can enter the temple, the magic there hinders it; whenever it makes an attack roll, an ability check, or a saving throw inside the temple, it must roll a {@dice d4} and subtract the number rolled from the {@dice d20} roll.",
      "In addition, the sensors created by divination spells can't appear inside the temple, and creatures within can't be targeted by divination spells.",
      "Finally, whenever any creature in the temple regains hit points from a spell of 1st level or higher, the creature regains additional hit points equal to your Wisdom modifier (minimum 1 hit point).",
      "The temple is made from opaque magical force that extends into the Ethereal Plane, thus blocking ethereal travel into the temple's interior. Nothing can physically pass through the temple's exterior. It can't be dispelled by {@spell dispel magic}, and {@spell antimagic field} has no effect on it. A {@spell disintegrate} spell destroys the temple instantly.",
      "Casting this spell on the same spot every day for a year makes this effect permanent."
    ],
    "savingThrow": [
      "charisma"
    ],
    "affectsCreatureType": [
      "celestial",
      "elemental",
      "fey",
      "fiend",
      "undead"
    ],
    "miscTags": [
      "HL",
      "LGT",
      "PIR",
      "PRM",
      "SGT"
    ]
  },
  {
    "name": "Tenser's Transformation",
    "source": "XGE",
    "page": 168,
    "level": 6,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a few hairs from a bull"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "You endow yourself with endurance and martial prowess fueled by magic. Until the spell ends, you can't cast spells, and you gain the following benefits:",
      {
        "type": "list",
        "items": [
          "You gain 50 temporary hit points. If any of these remain when the spell ends, they are lost.",
          "You have advantage on attack rolls that you make with simple and martial weapons.",
          "When you hit a target with a weapon attack, that target takes an extra {@damage 2d12} force damage.",
          "You have proficiency with all armor, shields, simple weapons, and martial weapons.",
          "You have proficiency in Strength and Constitution saving throws.",
          "You can attack twice, instead of once, when you take the {@action Attack} action on your turn. You ignore this benefit if you already have a feature, like Extra Attack, that gives you extra attacks."
        ]
      },
      "Immediately after the spell ends, you must succeed on a DC 15 Constitution saving throw or suffer one level of {@condition exhaustion}."
    ],
    "damageInflict": [
      "force"
    ],
    "conditionInflict": [
      "exhaustion"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "AAD",
      "ADV",
      "THP"
    ]
  },
  {
    "name": "Thunder Step",
    "source": "XGE",
    "page": 168,
    "level": 3,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You teleport yourself to an unoccupied space you can see within range. Immediately after you disappear, a thunderous boom sounds, and each creature within 10 feet of the space you left must make a Constitution saving throw, taking {@damage 3d10} thunder damage on a failed save, or half as much damage on a successful one. The thunder can be heard from up to 300 feet away.",
      "You can bring along objects as long as their weight doesn't exceed what you can carry. You can also teleport one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell, and there must be an unoccupied space within 5 feet of your destination space for the creature to appear in; otherwise, the creature is left behind."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, the damage increases by {@scaledamage 3d10|3-9|1d10} for each slot level above 3rd."
        ]
      }
    ],
    "damageInflict": [
      "thunder"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "SGT",
      "TP"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Thunderclap",
    "source": "XGE",
    "page": 168,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 22
      }
    ],
    "level": 0,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 5
      }
    },
    "components": {
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You create a burst of thunderous sound that can be heard up to 100 feet away. Each creature within range, other than you, must make a Constitution saving throw or take {@damage 1d6} thunder damage.",
      "The spell's damage increases by {@dice 1d6} when you reach 5th level ({@damage 2d6}), 11th level ({@damage 3d6}), and 17th level ({@damage 4d6})."
    ],
    "scalingLevelDice": {
      "label": "thunder damage",
      "scaling": {
        "1": "1d6",
        "5": "2d6",
        "11": "3d6",
        "17": "4d6"
      }
    },
    "damageInflict": [
      "thunder"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "SCL"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Tidal Wave",
    "source": "XGE",
    "page": 168,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 22
      }
    ],
    "level": 3,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a drop of water"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You conjure up a wave of water that crashes down on an area within range. The area can be up to 30 feet long, up to 10 feet wide, and up to 10 feet tall. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes {@damage 4d8} bludgeoning damage and is knocked {@condition prone}. On a successful save, a creature takes half as much damage and isn't knocked {@condition prone}. The water then spreads out across the ground in all directions, extinguishing unprotected flames in its area and within 30 feet of it, and then it vanishes."
    ],
    "damageInflict": [
      "bludgeoning"
    ],
    "conditionInflict": [
      "prone"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "areaTags": [
      "W"
    ]
  },
  {
    "name": "Tiny Servant",
    "source": "XGE",
    "page": 168,
    "level": 3,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "minute"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "touch"
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "hour",
          "amount": 8
        }
      }
    ],
    "entries": [
      "You touch one Tiny, nonmagical object that isn't attached to another object or a surface and isn't being carried by another creature. The target animates and sprouts little arms and legs, becoming a creature under your control until the spell ends or the creature drops to 0 hit points. See the {@creature tiny servant|xge|stat block} for its statistics.",
      "As a bonus action, you can mentally command the creature if it is within 120 feet of you. (If you control multiple creatures with this spell, you can command any or all of them at the same time, issuing the same command to each one.) You decide what action the creature will take and where it will move during its next turn, or you can issue a simple, general command, such as to fetch a key, stand watch, or stack some books. If you issue no commands, the servant does nothing other than defend itself against hostile creatures. Once given an order, the servant continues to follow that order until its task is complete.",
      "When the creature drops to 0 hit points, it reverts to its original form, and any remaining damage carries over to that form."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 4th level or higher, you can animate two additional objects for each slot level above 3rd."
        ]
      }
    ],
    "miscTags": [
      "OBJ",
      "SMN",
      "UBA"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Toll the Dead",
    "source": "XGE",
    "page": 169,
    "level": 0,
    "school": "N",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You point at one creature you can see within range, and the sound of a dolorous bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take {@damage 1d8} necrotic damage. If the target is missing any of its hit points, it instead takes {@damage 1d12} necrotic damage.",
      "The spell's damage increases by one die when you reach 5th level ({@damage 2d8} or {@damage 2d12}), 11th level ({@damage 3d8} or {@damage 3d12}), and 17th level ({@damage 4d8} or {@damage 4d12})."
    ],
    "scalingLevelDice": [
      {
        "label": "necrotic damage",
        "scaling": {
          "1": "1d8",
          "5": "2d8",
          "11": "3d8",
          "17": "4d8"
        }
      },
      {
        "label": "necrotic damage to wounded creature",
        "scaling": {
          "1": "1d12",
          "5": "2d12",
          "11": "3d12",
          "17": "4d12"
        }
      }
    ],
    "damageInflict": [
      "necrotic"
    ],
    "savingThrow": [
      "wisdom"
    ],
    "miscTags": [
      "SCL",
      "SGT"
    ],
    "areaTags": [
      "ST"
    ]
  },
  {
    "name": "Transmute Rock",
    "source": "XGE",
    "page": 169,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 22
      }
    ],
    "level": 5,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "clay and water"
    },
    "duration": [
      {
        "type": "permanent",
        "ends": [
          "dispel"
        ]
      }
    ],
    "entries": [
      "You choose an area of stone or mud that you can see that fits within a 40-foot cube and is within range, and choose one of the following effects.",
      {
        "type": "entries",
        "name": "Transmute Rock to Mud",
        "entries": [
          "Nonmagical rock of any sort in the area becomes an equal volume of thick, flowing mud that remains for the spell's duration."
        ]
      },
      "The ground in the spell's area becomes muddy enough that creatures can sink into it. Each foot that a creature moves through the mud costs 4 feet of movement, and any creature on the ground when you cast the spell must make a Strength saving throw. A creature must also make the saving throw when it moves into the area for the first time on a turn or ends its turn there. On a failed save, a creature sinks into the mud and is {@condition restrained}, though it can use an action to end the {@condition restrained} condition on itself by pulling itself free of the mud.",
      "If you cast the spell on a ceiling, the mud falls. Any creature under the mud when it falls must make a Dexterity saving throw. A creature takes {@damage 4d8} bludgeoning damage on a failed save, or half as much damage on a successful one.",
      {
        "type": "entries",
        "name": "Transmute Mud to Rock",
        "entries": [
          "Nonmagical mud or quicksand in the area no more than 10 feet deep transforms into soft stone for the spell's duration. Any creature in the mud when it transforms must make a Dexterity saving throw. On a successful save, a creature is shunted safely to the surface in an unoccupied space. On a failed save, a creature becomes {@condition restrained} by the rock. A {@condition restrained} creature, or another creature within reach, can use an action to try to break the rock by succeeding on a DC 20 Strength check or by dealing damage to it. The rock has AC 15 and 25 hit points, and it is immune to poison and psychic damage."
        ]
      }
    ],
    "damageImmune": [
      "poison",
      "psychic"
    ],
    "damageInflict": [
      "bludgeoning"
    ],
    "conditionInflict": [
      "restrained"
    ],
    "savingThrow": [
      "strength",
      "dexterity"
    ],
    "abilityCheck": [
      "strength"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "C"
    ]
  },
  {
    "name": "Vitriolic Sphere",
    "source": "XGE",
    "page": 170,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 23
      }
    ],
    "level": 4,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 150
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a drop of giant slug bile"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You point at a location within range, and a glowing 1-foot-diameter ball of emerald acid streaks there and explodes in a 20-foot-radius sphere. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes {@damage 10d4} acid damage and another {@damage 5d4} acid damage at the end of its next turn. On a successful save, a creature takes half the initial damage and no damage at the end of its next turn."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 5th level or higher, the initial damage increases by {@scaledamage 10d4|4-9|2d4} for each slot level above 4th."
        ]
      }
    ],
    "damageInflict": [
      "acid"
    ],
    "savingThrow": [
      "dexterity"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Wall of Light",
    "source": "XGE",
    "page": 170,
    "level": 5,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a hand mirror"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "A shimmering wall of bright light appears at a point you choose within range. The wall appears in any orientation you choose: horizontally, vertically, or diagonally. It can be free floating, or it can rest on a solid surface. The wall can be up to 60 feet long, 10 feet high, and 5 feet thick. The wall blocks line of sight, but creatures and objects can pass through it. It emits bright light out to 120 feet and dim light for an additional 120 feet.",
      "When the wall appears, each creature in its area must make a Constitution saving throw. On a failed save, a creature takes {@damage 4d8} radiant damage, and it is {@condition blinded} for 1 minute. On a successful save, it takes half as much damage and isn't {@condition blinded}. A {@condition blinded} creature can make a Constitution saving throw at the end of each of its turns, ending the effect on itself on a success.",
      "A creature that ends its turn in the wall's area takes {@damage 4d8} radiant damage.",
      "Until the spell ends, you can use an action to launch a beam of radiance from the wall at one creature you can see within 60 feet of it. Make a ranged spell attack. On a hit, the target takes {@damage 4d8} radiant damage. Whether you hit or miss, reduce the length of the wall by 10 feet. If the wall's length drops to 0 feet, the spell ends."
    ],
    "entriesHigherLevel": [
      {
        "type": "entries",
        "name": "At Higher Levels",
        "entries": [
          "When you cast this spell using a spell slot of 6th level or higher, the damage increases by {@scaledamage 4d8|5-9|1d8} for each slot level above 5th."
        ]
      }
    ],
    "damageInflict": [
      "radiant"
    ],
    "conditionInflict": [
      "blinded"
    ],
    "spellAttack": [
      "R"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "LGT",
      "SGT"
    ],
    "areaTags": [
      "ST",
      "W"
    ]
  },
  {
    "name": "Wall of Sand",
    "source": "XGE",
    "page": 170,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 23
      }
    ],
    "level": 3,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a handful of sand"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "You create a wall of swirling sand on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 10 feet thick, and it vanishes when the spell ends. It blocks line of sight but not movement. A creature is {@condition blinded} while in the wall's space and must spend 3 feet of movement for every 1 foot it moves there."
    ],
    "conditionInflict": [
      "blinded"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "W"
    ]
  },
  {
    "name": "Wall of Water",
    "source": "XGE",
    "page": 170,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 23
      },
      {
        "source": "VGM",
        "page": 116
      },
      {
        "source": "MOT"
      }
    ],
    "level": 3,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 60
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a drop of water"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "You create a wall of water on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 1 foot thick, or you can make a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall vanishes when the spell ends. The wall's space is {@quickref difficult terrain||3}.",
      "Any ranged weapon attack that enters the wall's space has disadvantage on the attack roll, and fire damage is halved if the fire effect passes through the wall to reach its target. Spells that deal cold damage that pass through the wall cause the area of the wall they pass through to freeze solid (at least a 5-foot-square section is frozen). Each 5-foot-square frozen section has AC 5 and 15 hit points. Reducing a frozen section to 0 hit points destroys it. When a section is destroyed, the wall's water doesn't fill it."
    ],
    "miscTags": [
      "DFT",
      "SGT"
    ],
    "areaTags": [
      "W"
    ]
  },
  {
    "name": "Warding Wind",
    "source": "XGE",
    "page": 170,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 23
      }
    ],
    "level": 2,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 10
        },
        "concentration": true
      }
    ],
    "entries": [
      "A strong wind (20 miles per hour) blows around you in a 10-foot radius and moves with you, remaining centered on you. The wind lasts for the spell's duration.",
      "The wind has the following effects:",
      {
        "type": "list",
        "items": [
          "It {@condition deafened||deafens} you and other creatures in its area.",
          "It extinguishes unprotected flames in its area that are torch-sized or smaller.",
          "It hedges out vapor, gas, and fog that can be dispersed by strong wind.",
          "The area is {@quickref difficult terrain||3} for creatures other than you.",
          "The attack rolls of ranged weapon attacks have disadvantage if the attacks pass in or out of the wind."
        ]
      }
    ],
    "conditionInflict": [
      "deafened"
    ],
    "miscTags": [
      "DFT"
    ]
  },
  {
    "name": "Watery Sphere",
    "source": "XGE",
    "page": 170,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 23
      }
    ],
    "level": 4,
    "school": "C",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 90
      }
    },
    "components": {
      "v": true,
      "s": true,
      "m": "a droplet of water"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You conjure up a sphere of water with a 5-foot radius at a point you can see within range. The sphere can hover but no more than 10 feet off the ground. The sphere remains for the spell's duration.",
      "Any creature in the sphere's space must make a Strength saving throw. On a successful save, a creature is ejected from that space to the nearest unoccupied space of the creature's choice outside the sphere. A Huge or larger creature succeeds on the saving throw automatically, and a Large or smaller creature can choose to fail it. On a failed save, a creature is {@condition restrained} by the sphere and is engulfed by the water. At the end of each of its turns, a {@condition restrained} target can repeat the saving throw, ending the effect on itself on a success.",
      "The sphere can restrain as many as four Medium or smaller creatures or one Large creature. If the sphere restrains a creature that causes it to exceed this capacity, a random creature that was already {@condition restrained} by the sphere falls out of it and lands {@condition prone} in a space within 5 feet of it.",
      "As an action, you can move the sphere up to 30 feet in a straight line. If it moves over a pit, a cliff, or other drop-off, it safely descends until it is hovering 10 feet above the ground. Any creature {@condition restrained} by the sphere moves with it. You can ram the sphere into creatures, forcing them to make the saving throw.",
      "When the spell ends, the sphere falls to the ground and extinguishes all normal flames within 30 feet of it. Any creature {@condition restrained} by the sphere is knocked {@condition prone} in the space where it falls. The water then vanishes."
    ],
    "conditionInflict": [
      "prone",
      "restrained"
    ],
    "savingThrow": [
      "strength"
    ],
    "miscTags": [
      "SGT"
    ],
    "areaTags": [
      "S"
    ]
  },
  {
    "name": "Whirlwind",
    "source": "XGE",
    "page": 171,
    "otherSources": [
      {
        "source": "EEPC",
        "page": 24
      }
    ],
    "level": 7,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 300
      }
    },
    "components": {
      "v": true,
      "m": "a piece of straw"
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "A whirlwind howls down to a point that you can see on the ground within range. The whirlwind is a 10-foot-radius, 30-foot-high cylinder centered on that point. Until the spell ends, you can use your action to move the whirlwind up to 30 feet in any direction along the ground. The whirlwind sucks up any Medium or smaller objects that aren't secured to anything and that aren't worn or carried by anyone.",
      "A creature must make a Dexterity saving throw the first time on a turn that it enters the whirlwind or that the whirlwind enters its space, including when the whirlwind first appears. A creature takes {@damage 10d6} bludgeoning damage on a failed save, or half as much damage on a successful one. In addition, a Large or smaller creature that fails the save must succeed on a Strength saving throw or become {@condition restrained} in the whirlwind until the spell ends. When a creature starts its turn {@condition restrained} by the whirlwind, the creature is pulled 5 feet higher inside it, unless the creature is at the top. A {@condition restrained} creature moves with the whirlwind and falls when the spell ends, unless the creature has some means to stay aloft.",
      "A {@condition restrained} creature can use an action to make a Strength or Dexterity check against your spell save DC. If successful, the creature is no longer {@condition restrained} by the whirlwind and is hurled {@dice 3d6 × 10} feet away from it in a random direction."
    ],
    "damageInflict": [
      "bludgeoning"
    ],
    "conditionInflict": [
      "restrained"
    ],
    "savingThrow": [
      "dexterity",
      "strength"
    ],
    "abilityCheck": [
      "strength",
      "dexterity"
    ],
    "miscTags": [
      "FMV",
      "SGT"
    ],
    "areaTags": [
      "Y"
    ],
    "hasFluffImages": true
  },
  {
    "name": "Word of Radiance",
    "source": "XGE",
    "page": 171,
    "level": 0,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 5
      }
    },
    "components": {
      "v": true,
      "m": "a holy symbol"
    },
    "duration": [
      {
        "type": "instant"
      }
    ],
    "entries": [
      "You utter a divine word, and burning radiance erupts from you. Each creature of your choice that you can see within range must succeed on a Constitution saving throw or take {@damage 1d6} radiant damage.",
      "The spell's damage increases by {@dice 1d6} when you reach 5th level ({@damage 2d6}), 11th level ({@damage 3d6}), and 17th level ({@damage 4d6})."
    ],
    "scalingLevelDice": {
      "label": "radiant damage",
      "scaling": {
        "1": "1d6",
        "5": "2d6",
        "11": "3d6",
        "17": "4d6"
      }
    },
    "damageInflict": [
      "radiant"
    ],
    "savingThrow": [
      "constitution"
    ],
    "miscTags": [
      "SCL",
      "SGT"
    ],
    "areaTags": [
      "MT"
    ]
  },
  {
    "name": "Wrath of Nature",
    "source": "XGE",
    "page": 171,
    "level": 5,
    "school": "V",
    "time": [
      {
        "number": 1,
        "unit": "action"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "feet",
        "amount": 120
      }
    },
    "components": {
      "v": true,
      "s": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You call out to the spirits of nature to rouse them against your enemies. Choose a point you can see within range. The spirits cause trees, rocks, and grasses in a 60-foot cube centered on that point to become animated until the spell ends.",
      {
        "type": "entries",
        "name": "Grasses and Undergrowth",
        "entries": [
          "Any area of ground in the cube that is covered by grass or undergrowth is {@quickref difficult terrain||3} for your enemies."
        ]
      },
      {
        "type": "entries",
        "name": "Trees",
        "entries": [
          "At the start of each of your turns, each of your enemies within 10 feet of any tree in the cube must succeed on a Dexterity saving throw or take {@damage 4d6} slashing damage from whipping branches."
        ]
      },
      {
        "type": "entries",
        "name": "Roots and Vines",
        "entries": [
          "At the end of each of your turns, one creature of your choice that is on the ground in the cube must succeed on a Strength saving throw or become {@condition restrained} until the spell ends. A {@condition restrained} creature can use an action to make a Strength ({@skill Athletics}) check against your spell save DC, ending the effect on itself on a success."
        ]
      },
      {
        "type": "entries",
        "name": "Rocks",
        "entries": [
          "As a bonus action on your turn, you can cause a loose rock in the cube to launch at a creature you can see in the cube. Make a ranged spell attack against the target. On a hit, the target takes {@damage 3d8} nonmagical bludgeoning damage, and it must succeed on a Strength saving throw or fall {@condition prone}."
        ]
      }
    ],
    "damageInflict": [
      "bludgeoning",
      "slashing"
    ],
    "conditionInflict": [
      "prone",
      "restrained"
    ],
    "spellAttack": [
      "R"
    ],
    "savingThrow": [
      "dexterity",
      "strength"
    ],
    "abilityCheck": [
      "strength"
    ],
    "miscTags": [
      "DFT",
      "SGT",
      "UBA"
    ],
    "areaTags": [
      "C",
      "ST"
    ]
  },
  {
    "name": "Zephyr Strike",
    "source": "XGE",
    "page": 171,
    "level": 1,
    "school": "T",
    "time": [
      {
        "number": 1,
        "unit": "bonus"
      }
    ],
    "range": {
      "type": "point",
      "distance": {
        "type": "self"
      }
    },
    "components": {
      "v": true
    },
    "duration": [
      {
        "type": "timed",
        "duration": {
          "type": "minute",
          "amount": 1
        },
        "concentration": true
      }
    ],
    "entries": [
      "You move like the wind. Until the spell ends, your movement doesn't provoke opportunity attacks.",
      "Once before the spell ends, you can give yourself advantage on one weapon attack roll on your turn. That attack deals an extra {@damage 1d8} force damage on a hit. Whether you hit or miss, your walking speed increases by 30 feet until the end of that turn."
    ],
    "damageInflict": [
      "force"
    ],
    "miscTags": [
      "AAD",
      "ADV"
    ]
  }
]`);