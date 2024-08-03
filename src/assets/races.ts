export const initRaces = JSON.parse(`{
  "_meta": {
    "internalCopies": [
      "race"
    ]
  },
  "race": [
    {
      "name": "Aarakocra",
      "source": "DMG",
      "page": 282,
      "size": [
        "M"
      ],
      "speed": {
        "walk": 20,
        "fly": 50
      },
      "ability": [
        {
          "dex": 2,
          "wis": 2
        }
      ],
      "traitTags": [
        "Natural Weapon",
        "NPC Race"
      ],
      "languageProficiencies": [
        {
          "auran": true
        }
      ],
      "entries": [
        {
          "name": "Dive Attack",
          "entries": [
            "If you are flying and dive at least 30 ft. straight toward a target and then hit it with a melee weapon attack, the attack deals an extra {@dice 1d6} damage to the target."
          ],
          "type": "entries"
        },
        {
          "name": "Talons",
          "entries": [
            "You are proficient with your unarmed strikes, which deal {@damage 1d4} slashing damage on a hit."
          ],
          "type": "entries"
        },
        {
          "name": "Language",
          "entries": [
            "You can speak, read, and write Auran."
          ],
          "type": "entries"
        }
      ]
    },
    {
      "name": "Aarakocra",
      "source": "EEPC",
      "page": 5,
      "otherSources": [
        {
          "source": "EGW",
          "page": 165
        }
      ],
      "reprintedAs": [
        "Aarakocra|MPMM"
      ],
      "size": [
        "M"
      ],
      "speed": {
        "walk": 25,
        "fly": 50
      },
      "ability": [
        {
          "dex": 2,
          "wis": 1
        }
      ],
      "age": {
        "mature": 3,
        "max": 30
      },
      "traitTags": [
        "Natural Weapon"
      ],
      "languageProficiencies": [
        {
          "common": true,
          "other": true,
          "auran": true
        }
      ],
      "soundClip": {
        "type": "internal",
        "path": "races/aarakocra.mp3"
      },
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Aarakocra reach maturity by age 3. Compared to humans, aarakocra don't usually live longer than 30 years."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium."
          ]
        },
        {
          "name": "Flight",
          "entries": [
            "You have a flying speed of 50 feet. To use this speed, you can't be wearing medium or heavy armor."
          ],
          "type": "entries"
        },
        {
          "name": "Talons",
          "entries": [
            "Your talons are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to {@damage 1d4} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike."
          ],
          "type": "entries"
        },
        {
          "name": "Language",
          "entries": [
            "You can speak, read, and write Common, Aarakocra, and Auran."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Aarakocra",
      "source": "MPMM",
      "page": 5,
      "lineage": "VRGR",
      "size": [
        "M"
      ],
      "speed": {
        "walk": 30,
        "fly": true
      },
      "traitTags": [
        "Natural Weapon"
      ],
      "additionalSpells": [
        {
          "innate": {
            "3": [
              "gust of wind"
            ]
          },
          "ability": {
            "choose": [
              "int",
              "wis",
              "cha"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Flight",
          "entries": [
            "Because of your wings, you have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor."
          ]
        },
        {
          "type": "entries",
          "name": "Talons",
          "entries": [
            "You have talons that you can use to make unarmed strikes. When you hit with them, the strike deals {@damage 1d6} + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike."
          ]
        },
        {
          "type": "entries",
          "name": "Wind Caller",
          "entries": [
            "Starting at 3rd level, you can cast the {@spell gust of wind} spell with this trait, without requiring a material component. Once you cast the spell with this trait, you can't do so again until you finish a long rest. You can also cast the spell using any spell slots you have of 2nd level or higher.",
            "Intelligence, Wisdom, or Charisma is your spellcasting ability for when you cast {@spell gust of wind} with this trait (choose when you select this race)."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Aasimar",
      "source": "DMG",
      "page": 286,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "wis": 1,
          "cha": 2
        }
      ],
      "age": {
        "mature": 20,
        "max": 100
      },
      "darkvision": 60,
      "languageProficiencies": [
        {
          "common": true,
          "celestial": true
        }
      ],
      "resist": [
        "necrotic",
        "radiant"
      ],
      "soundClip": {
        "type": "internal",
        "path": "races/aasimar.mp3"
      },
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "lesser restoration"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "daylight"
                ]
              }
            }
          },
          "ability": "cha",
          "known": {
            "1": [
              "light#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Aasimar mature at the same rate as humans but live a few years longer."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Aasimar are built like well-proportioned humans. Your size is Medium."
          ]
        },
        {
          "name": "Darkvision",
          "entries": [
            "Thanks to your celestial heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of grey."
          ],
          "type": "entries"
        },
        {
          "name": "Celestial Resistance",
          "entries": [
            "You have resistance to necrotic and radiant damage."
          ],
          "type": "entries"
        },
        {
          "name": "Celestial Legacy",
          "entries": [
            "You know the {@spell light} cantrip. Once you reach 3rd level, you can cast the {@spell lesser restoration} spell once with this trait, and you regain the ability to do so when you finish a long rest. Once you reach 5th level, you can cast the {@spell daylight} spell once with this trait, and you regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells."
          ],
          "type": "entries"
        },
        {
          "name": "Language",
          "entries": [
            "You can speak, read, and write Common and Celestial."
          ],
          "type": "entries"
        }
      ]
    },
    {
      "name": "Aasimar",
      "source": "MPMM",
      "page": 7,
      "lineage": "VRGR",
      "size": [
        "S",
        "M"
      ],
      "speed": 30,
      "age": {
        "max": 180
      },
      "darkvision": 60,
      "resist": [
        "necrotic",
        "radiant"
      ],
      "additionalSpells": [
        {
          "ability": {
            "choose": [
              "int",
              "wis",
              "cha"
            ]
          },
          "known": {
            "1": [
              "light#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "You are Medium or Small. You choose the size when you select this race."
          ]
        },
        {
          "type": "entries",
          "name": "Celestial Resistance",
          "entries": [
            "You have resistance to necrotic damage and radiant damage."
          ]
        },
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
          ]
        },
        {
          "type": "entries",
          "name": "Healing Hands",
          "entries": [
            "As an action, you can touch a creature and roll a number of d4s equal to your proficiency bonus. The creature regains a number of hit points equal to the total rolled. Once you use this trait, you can't use it again until you finish a long rest."
          ]
        },
        {
          "type": "entries",
          "name": "Light Bearer",
          "entries": [
            "You know the {@spell light} cantrip. Charisma is your spellcasting ability for it."
          ]
        },
        {
          "type": "entries",
          "name": "Celestial Revelation",
          "entries": [
            "When you reach 3rd level, choose one of the revelation options below. Thereafter, you can use a bonus action to unleash the celestial energy within yourself, gaining the benefits of that revelation. Your transformation lasts for 1 minute or until you end it as a bonus action. Once you transform using your revelation below, you can't use it again until you finish a long rest.",
            {
              "type": "list",
              "items": [
                {
                  "type": "item",
                  "name": "Necrotic Shroud",
                  "entry": "Your eyes briefly become pools of darkness, and ghostly, flightless wings sprout from your back temporarily. Creatures other than your allies within 10 feet of you that can see you must succeed on a Charisma saving throw (DC 8 + your proficiency bonus + your Charisma modifier) or become {@condition frightened} of you until the end of your next turn. Until the transformation ends, once on each of your turns, you can deal extra necrotic damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your proficiency bonus."
                },
                {
                  "type": "item",
                  "name": "Radiant Consumption",
                  "entry": "Searing light temporarily radiates from your eyes and mouth. For the duration, you shed bright light in a 10-foot radius and dim light for an additional 10 feet, and at the end of each of your turns, each creature within 10 feet of you takes radiant damage equal to your proficiency bonus. Until the transformation ends, once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your proficiency bonus."
                },
                {
                  "type": "item",
                  "name": "Radiant Soul",
                  "entry": "Two luminous, spectral wings sprout from your back temporarily. Until the transformation ends, you have a flying speed equal to your walking speed, and once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your proficiency bonus."
                }
              ],
              "style": "list-hang-notitle"
            }
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true,
      "_versions": [
        {
          "name": "Aasimar; Necrotic Shroud",
          "source": "MPMM",
          "_mod": {
            "entries": {
              "mode": "replaceArr",
              "replace": "Celestial Revelation",
              "items": {
                "name": "Celestial Revelation (Necrotic Shroud)",
                "type": "entries",
                "entries": [
                  "When you reach 3rd level, you can use a bonus action to transform yourself. Your transformation lasts for 1 minute or until you end it as a bonus action. Once you transform using your revelation, you can't use it again until you finish a long rest.",
                  "Your eyes briefly become pools of darkness, and ghostly, flightless wings sprout from your back temporarily. Creatures other than your allies within 10 feet of you that can see you must succeed on a Charisma saving throw (DC 8 + your proficiency bonus + your Charisma modifier) or become {@condition frightened} of you until the end of your next turn. Until the transformation ends, once on each of your turns, you can deal extra necrotic damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your proficiency bonus."
                ]
              }
            }
          }
        },
        {
          "name": "Aasimar; Radiant Consumption",
          "source": "MPMM",
          "_mod": {
            "entries": {
              "mode": "replaceArr",
              "replace": "Celestial Revelation",
              "items": {
                "name": "Celestial Revelation (Radiant Consumption)",
                "type": "entries",
                "entries": [
                  "When you reach 3rd level, you can use a bonus action to transform yourself. Your transformation lasts for 1 minute or until you end it as a bonus action. Once you transform using your revelation, you can't use it again until you finish a long rest.",
                  "Searing light temporarily radiates from your eyes and mouth. For the duration, you shed bright light in a 10-foot radius and dim light for an additional 10 feet, and at the end of each of your turns, each creature within 10 feet of you takes radiant damage equal to your proficiency bonus. Until the transformation ends, once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your proficiency bonus."
                ]
              }
            }
          }
        },
        {
          "name": "Aasimar; Radiant Soul",
          "source": "MPMM",
          "_mod": {
            "entries": {
              "mode": "replaceArr",
              "replace": "Celestial Revelation",
              "items": {
                "name": "Celestial Revelation (Radiant Soul)",
                "type": "entries",
                "entries": [
                  "When you reach 3rd level, you can use a bonus action to transform yourself. Your transformation lasts for 1 minute or until you end it as a bonus action. Once you transform using your revelation, you can't use it again until you finish a long rest.",
                  "Two luminous, spectral wings sprout from your back temporarily. Until the transformation ends, you have a flying speed equal to your walking speed, and once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your proficiency bonus."
                ]
              }
            }
          }
        }
      ]
    },
    {
      "name": "Aasimar",
      "source": "VGM",
      "page": 104,
      "otherSources": [
        {
          "source": "EGW",
          "page": 166
        }
      ],
      "reprintedAs": [
        "Aasimar|MPMM"
      ],
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "cha": 2
        }
      ],
      "heightAndWeight": {
        "baseHeight": 56,
        "heightMod": "2d10",
        "baseWeight": 110,
        "weightMod": "2d4"
      },
      "age": {
        "mature": 20,
        "max": 160
      },
      "darkvision": 60,
      "languageProficiencies": [
        {
          "common": true,
          "celestial": true
        }
      ],
      "resist": [
        "necrotic",
        "radiant"
      ],
      "soundClip": {
        "type": "internal",
        "path": "races/aasimar.mp3"
      },
      "additionalSpells": [
        {
          "ability": "cha",
          "known": {
            "1": [
              "light#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Aasimar mature at the same rate as humans, but they can live up to 160 years."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Aasimar have the same range of height and weight as humans."
          ]
        },
        {
          "name": "Darkvision",
          "entries": [
            "Blessed with a radiant soul, your vision can easily cut through darkness. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Celestial Resistance",
          "entries": [
            "You have resistance to necrotic damage and radiant damage."
          ],
          "type": "entries"
        },
        {
          "name": "Healing Hands",
          "entries": [
            "As an action, you can touch a creature and cause it to regain a number of hit points equal to your level. Once you use this trait, you can't use it again until you finish a long rest."
          ],
          "type": "entries"
        },
        {
          "name": "Light Bearer",
          "entries": [
            "You know the {@spell light} cantrip. Charisma is your spellcasting ability for it."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Celestial."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Aetherborn",
      "source": "PSK",
      "page": 17,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "cha": 2,
          "choose": {
            "from": [
              "str",
              "dex",
              "con",
              "int",
              "wis"
            ],
            "count": 2
          }
        }
      ],
      "age": {
        "mature": 0,
        "max": 3
      },
      "darkvision": 60,
      "skillProficiencies": [
        {
          "intimidation": true
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "anyStandard": 2
        }
      ],
      "resist": [
        "necrotic"
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Aetherborn come into being as adults and live no more than a few years."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "As a rule, aetherborn are driven by hedonism and self-interest, making them neutral at best and thoroughly evil at worst. Neutral aetherborn might devote much of their time (and wealth) to parties and social activity, while evil aetherborn are usually involved in the criminal underworld."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Aetherborn are about the same size as humans, ranging from 5 to 6 feet tall. They are quite light\u2014only about 100 pounds\u2014and their weight diminishes as they age and more and more of their substance returns to the aethersphere. Your size is Medium."
          ]
        },
        {
          "name": "Darkvision",
          "entries": [
            "Thanks to your heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Born of Aether",
          "entries": [
            "You have resistance to necrotic damage."
          ],
          "type": "entries"
        },
        {
          "name": "Menacing",
          "entries": [
            "You have proficiency in the {@skill Intimidation} skill."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and two other languages of your choice."
          ],
          "type": "entries"
        },
        {
          "type": "inset",
          "name": "Gift of the Aetherborn",
          "entries": [
            "An unknown aetherborn, desperately seeking a means to extend their short life, discovered a process of transformation that prolonged their existence\u2014by giving them the ability to feed on the life essence of other beings. Since then, other aetherborn have learned and carried out this monstrous transformation, and aetherborn with this \\"gift\\" have become a small minority among an already small population.",
            "A gifted aetherborn has the ability to drain the life essence of other beings. Similar to the way heat is transferred from a warm object to a cold one, a gifted aetherborn need only touch another living being with a clawed hand to draw life essence out, fueling their own continued existence while draining strength and vitality from their victim.",
            "For many aetherborn, living as they do for indulgence and instant gratification, the concepts of \\"want\\" and \\"need\\" are virtually synonymous. But Aetherborn with this gift understand what it is to truly need, for they develop a hunger for life essence that far exceeds any desires they might have felt before their transformation. A gifted aetherborn who abstains from this feeding deteriorates even more rapidly than other aetherborn, while enduring unspeakable agony caused by the deprivation of life energy.",
            "At the DM's option, an aetherborn character can research methods of achieving this dark \\"gift.\\" The process is similar to inventing and manufacturing a rare magic item (see \\"{@book Inventing and Manufacturing Devices|PS-K|1|Inventing and Manufacturing Devices}\\" earlier in this document). But rather than aether, the process requires a variety of rare unguents and unusual ingredients that make up the cost of researching and undergoing the transformation.",
            "An aetherborn with this gift gains the Drain Life ability: a natural attack that deals {@dice 1d6} necrotic damage and restores the same number of hit points to the aetherborn. However, if the aetherborn goes for 7 days without dealing this damage, their hit point maximum is reduced by {@dice 1d6} per week. This reduction can't be removed until the aetherborn has used their Drain Life ability and completed a long rest."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true,
      "_versions": [
        {
          "name": "Variant; Gifted Aetherborn",
          "source": "PSK",
          "_mod": {
            "entries": {
              "mode": "appendArr",
              "items": {
                "name": "Drain Life",
                "type": "entries",
                "entries": [
                  "You gain a natural attack that deals {@dice 1d6} necrotic damage and restores the same number of hit points to you. However, if you goes for 7 days without dealing this damage, your hit point maximum is reduced by {@dice 1d6} per week. This reduction can't be removed until you have used your Drain Life ability and completed a long rest."
                ]
              }
            }
          },
          "traitTags": [
            "Natural Weapon"
          ]
        }
      ]
    },
    {
      "name": "Astral Elf",
      "source": "AAG",
      "page": 10,
      "lineage": "VRGR",
      "creatureTypes": [
        "humanoid"
      ],
      "creatureTypeTags": [
        "elf"
      ],
      "size": [
        "M"
      ],
      "speed": 30,
      "age": {
        "max": 750
      },
      "darkvision": 60,
      "traitTags": [
        "Improved Resting"
      ],
      "skillProficiencies": [
        {
          "perception": true
        }
      ],
      "additionalSpells": [
        {
          "known": {
            "1": [
              "dancing lights#c"
            ]
          },
          "ability": {
            "choose": [
              "int",
              "wis",
              "cha"
            ]
          }
        },
        {
          "known": {
            "1": [
              "light#c"
            ]
          },
          "ability": {
            "choose": [
              "int",
              "wis",
              "cha"
            ]
          }
        },
        {
          "known": {
            "1": [
              "sacred flame#c"
            ]
          },
          "ability": {
            "choose": [
              "int",
              "wis",
              "cha"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Creature Type",
          "entries": [
            "You are a Humanoid. You are also considered an elf for any prerequisite or effect that requires you to be an elf."
          ]
        },
        {
          "type": "entries",
          "name": "Astral Fire",
          "entries": [
            "You know one of the following cantrips of your choice: {@spell dancing lights}, {@spell light}, or {@spell sacred flame}. Intelligence, Wisdom, or Charisma is your spellcasting ability for it (choose when you select this race)."
          ]
        },
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of yourself as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
          ]
        },
        {
          "type": "entries",
          "name": "Fey Ancestry",
          "entries": [
            "You have advantage on saving throws you make to avoid or end the {@condition charmed} condition on yourself."
          ]
        },
        {
          "type": "entries",
          "name": "Keen Senses",
          "entries": [
            "You have proficiency in the {@skill Perception} skill."
          ]
        },
        {
          "type": "entries",
          "name": "Starlight Step",
          "entries": [
            "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
          ]
        },
        {
          "type": "entries",
          "name": "Astral Trance",
          "entries": [
            "You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you remain conscious.",
            "Whenever you finish this trance, you gain proficiency in one skill of your choice and with one weapon or tool of your choice, selected from the {@book Player's Handbook|PHB}. You mystically acquire these proficiencies by drawing them from shared elven memory and the experiences of entities on the Astral Plane, and you retain them until you finish your next long rest."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Autognome",
      "source": "AAG",
      "page": 11,
      "lineage": "VRGR",
      "creatureTypes": [
        "construct"
      ],
      "size": [
        "S"
      ],
      "speed": 30,
      "traitTags": [
        "Improved Resting",
        "Natural Armor"
      ],
      "toolProficiencies": [
        {
          "any": 2
        }
      ],
      "resist": [
        "poison"
      ],
      "conditionImmune": [
        "disease"
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Creature Type",
          "entries": [
            "You are a Construct."
          ]
        },
        {
          "type": "entries",
          "name": "Armored Casing",
          "entries": [
            "You are encased in thin metal or some other durable material. While you aren't wearing armor, your base Armor Class is 13 + your Dexterity modifier."
          ]
        },
        {
          "type": "entries",
          "name": "Built for Success",
          "entries": [
            "You can add a {@dice d4} to one attack roll, ability check, or saving throw you make, and you can do so after seeing the {@dice d20} roll but before the effects of the roll are resolved. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
          ]
        },
        {
          "type": "entries",
          "name": "Healing Machine",
          "entries": [
            "If the {@spell mending} spell is cast on you, you can spend a Hit Die, roll it, and regain a number of hit points equal to the roll plus your Constitution modifier (minimum of 1 hit point).",
            "In addition, your creator designed you to benefit from several spells that preserve life but that normally don't affect Constructs: {@spell cure wounds}, {@spell healing word}, {@spell mass cure wounds}, {@spell mass healing word}, and {@spell spare the dying}."
          ]
        },
        {
          "type": "entries",
          "name": "Mechanical Nature",
          "entries": [
            "You have resistance to poison damage and immunity to disease, and you have advantage on saving throws against being {@condition paralyzed} or {@condition poisoned}. You don't need to eat, drink, or breathe."
          ]
        },
        {
          "type": "entries",
          "name": "Sentry's Rest",
          "entries": [
            "When you take a long rest, you spend at least 6 hours in an inactive, motionless state, instead of sleeping. In this state, you appear inert, but you remain conscious."
          ]
        },
        {
          "type": "entries",
          "name": "Specialized Design",
          "entries": [
            "You gain two tool proficiencies of your choice, selected from the {@book Player's Handbook|PHB}."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Aven",
      "source": "PSA",
      "page": 15,
      "size": [
        "M"
      ],
      "speed": {
        "walk": 25,
        "fly": 30
      },
      "ability": [
        {
          "dex": 2
        }
      ],
      "age": {
        "mature": 20,
        "max": 100
      },
      "languageProficiencies": [
        {
          "common": true,
          "other": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Like humans, aven reach adulthood in their late teens and can theoretically live into their 80s. Of course, most find a glorious (or inglorious) death long before that point."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Most aven lean toward some form of neutrality. Ibis-headed aven, focused more on knowledge than any other virtue, are usually neutral. Hawk-headed aven are inclined toward lawful neutral."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Aven stand from 5 to 6 feet tall, but their bodies are slender and their bones are partially hollow to facilitate their flight. Your size is Medium."
          ]
        },
        {
          "name": "Flight",
          "entries": [
            "You have a flying speed of 30 feet. You can't use your flying speed while you wear medium or heavy armor. (If your campaign uses the variant rule for encumbrance, you can't use your flying speed if you are encumbered.) "
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Aven."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Aven",
      "source": "PSD",
      "page": 6,
      "size": [
        "M"
      ],
      "speed": {
        "walk": 25,
        "fly": 30
      },
      "ability": [
        {
          "dex": 2,
          "wis": 2
        }
      ],
      "age": {
        "mature": 20,
        "max": 100
      },
      "skillProficiencies": [
        {
          "perception": true
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "other": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Like humans, aven reach adulthood in their late teens and can live into their 80s."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Aven are inclined toward the lawful good alignment of the Church of Serra"
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Aven stand from 5 to 6 feet tall, but their bodies are slender and their bones are partially hollow to facilitate their flight. Your size is Medium."
          ]
        },
        {
          "name": "Flight",
          "entries": [
            "You have a flying speed of 30 feet. You can't use your flying speed while you wear medium or heavy armor. (If your campaign uses the variant rule for {@variantrule encumbrance|PHB}, you can't use your flying speed if you are encumbered.) "
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and {@language Aven|PSD}."
          ],
          "type": "entries"
        },
        {
          "name": "Hawkeyed",
          "entries": [
            "You have proficiency in the {@skill Perception} skill. In addition, attacking at long range doesn't impose disadvantage on your ranged weapon attack rolls."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Bugbear",
      "source": "ERLW",
      "page": 25,
      "reprintedAs": [
        "Bugbear|MPMM"
      ],
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "str": 2,
          "dex": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 72,
        "heightMod": "2d12",
        "baseWeight": 200,
        "weightMod": "2d6"
      },
      "age": {
        "mature": 16,
        "max": 80
      },
      "darkvision": 60,
      "traitTags": [
        "Monstrous Race",
        "Powerful Build"
      ],
      "skillProficiencies": [
        {
          "stealth": true
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "goblin": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Bugbears reach adulthood at age 16 and live up to 80 years."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Bugbears live on the fringes of society even in Darguun, where they value self-sufficiency and violence. They are generally chaotic, organizing in loose tribes under charismatic and powerful leaders."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Your size is Medium."
          ]
        },
        {
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Long-Limbed",
          "entries": [
            "When you make a melee attack on your turn, your reach for it is 5 feet greater than normal."
          ],
          "type": "entries"
        },
        {
          "name": "Powerful Build",
          "entries": [
            "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
          ],
          "type": "entries"
        },
        {
          "name": "Sneaky",
          "entries": [
            "You are proficient in the {@skill Stealth} skill."
          ],
          "type": "entries"
        },
        {
          "name": "Surprise Attack",
          "entries": [
            "If you surprise a creature and hit it with an attack on your first turn in combat, the attack deals an extra {@dice 2d6} damage to it. You can use this trait only once per combat."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Goblin."
          ],
          "type": "entries"
        }
      ],
      "hasFluffImages": true
    },
    {
      "name": "Bugbear",
      "source": "MPMM",
      "page": 8,
      "lineage": "VRGR",
      "creatureTypes": [
        "humanoid"
      ],
      "creatureTypeTags": [
        "goblinoid"
      ],
      "size": [
        "M"
      ],
      "speed": 30,
      "darkvision": 60,
      "traitTags": [
        "Powerful Build"
      ],
      "skillProficiencies": [
        {
          "stealth": true
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Creature Type",
          "entries": [
            "You are a Humanoid. You are also considered a goblinoid for any prerequisite or effect that requires you to be a goblinoid."
          ]
        },
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
          ]
        },
        {
          "type": "entries",
          "name": "Fey Ancestry",
          "entries": [
            "You have advantage on saving throws you make to avoid or end the {@condition charmed} condition on yourself."
          ]
        },
        {
          "type": "entries",
          "name": "Long-Limbed",
          "entries": [
            "When you make a melee attack on your turn, your reach for it is 5 feet greater than normal."
          ]
        },
        {
          "type": "entries",
          "name": "Powerful Build",
          "entries": [
            "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
          ]
        },
        {
          "type": "entries",
          "name": "Sneaky",
          "entries": [
            "You are proficient in the {@skill Stealth} skill. In addition, without squeezing, you can move through and stop in a space large enough for a Small creature."
          ]
        },
        {
          "type": "entries",
          "name": "Surprise Attack",
          "entries": [
            "If you hit a creature with an attack roll, the creature takes an extra {@damage 2d6} damage if it hasn't taken a turn yet in the current combat."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Bugbear",
      "source": "VGM",
      "page": 119,
      "otherSources": [
        {
          "source": "EGW",
          "page": 174
        }
      ],
      "reprintedAs": [
        "Bugbear|MPMM"
      ],
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "str": 2,
          "dex": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 72,
        "heightMod": "2d12",
        "baseWeight": 200,
        "weightMod": "2d6"
      },
      "age": {
        "mature": 16,
        "max": 80
      },
      "darkvision": 60,
      "traitTags": [
        "Monstrous Race",
        "Powerful Build"
      ],
      "skillProficiencies": [
        {
          "stealth": true
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "goblin": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Bugbears reach adulthood at age 16 and live up to 80 years."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Bugbears are between 6 and 8 feet tall and weigh between 250 and 350 pounds. Your size is Medium."
          ]
        },
        {
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Long-Limbed",
          "entries": [
            "When you make a melee attack on your turn, your reach for it is 5 feet greater than normal."
          ],
          "type": "entries"
        },
        {
          "name": "Powerful Build",
          "entries": [
            "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
          ],
          "type": "entries"
        },
        {
          "name": "Sneaky",
          "entries": [
            "You are proficient in the {@skill Stealth} skill."
          ],
          "type": "entries"
        },
        {
          "name": "Surprise Attack",
          "entries": [
            "If you surprise a creature and hit it with an attack on your first turn in combat, the attack deals an extra {@dice 2d6} damage to it. You can use this trait only once per combat."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Goblin."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Bullywug",
      "source": "DMG",
      "page": 282,
      "size": [
        "M"
      ],
      "speed": {
        "walk": 20,
        "swim": 40
      },
      "ability": [
        {
          "int": -2,
          "cha": -2
        }
      ],
      "traitTags": [
        "Amphibious",
        "NPC Race"
      ],
      "languageProficiencies": [
        {
          "other": true
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Amphibious",
          "entries": [
            "You can breathe air and water."
          ]
        },
        {
          "name": "Speak with Frogs and Toads",
          "type": "entries",
          "entries": [
            "You can communicate simple concepts to frogs and toads when you speak in Bullywug."
          ]
        },
        {
          "name": "Swamp Camouflage",
          "type": "entries",
          "entries": [
            "You have advantage on Dexterity ({@skill Stealth}) checks made to hide in swampy terrain."
          ]
        },
        {
          "name": "Standing Leap",
          "type": "entries",
          "entries": [
            "Your long jump is up to 20 feet and your high jump is up to 10 feet, with or without a running start."
          ]
        },
        {
          "type": "entries",
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Bullywug."
          ]
        }
      ]
    },
    {
      "name": "Centaur",
      "source": "GGR",
      "page": 15,
      "reprintedAs": [
        "Centaur|MPMM"
      ],
      "creatureTypes": [
        "fey"
      ],
      "size": [
        "M"
      ],
      "speed": 40,
      "ability": [
        {
          "str": 2,
          "wis": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 72,
        "heightMod": "1d10",
        "baseWeight": 600,
        "weightMod": "2d12"
      },
      "age": {
        "mature": 20,
        "max": 100
      },
      "traitTags": [
        "Natural Weapon",
        "Powerful Build"
      ],
      "skillProficiencies": [
        {
          "choose": {
            "from": [
              "animal handling",
              "medicine",
              "nature",
              "survival"
            ]
          }
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "sylvan": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Centaurs mature and age at about the same rate as humans."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Centaurs are inclined toward neutrality. Those who join the Selesnya are more often neutral good, while those who join the Gruul are typically chaotic neutral."
          ]
        },
        {
          "name": "Size",
          "entries": [
            "Centaurs stand between 6 and 7 feet tall, with their equine bodies reaching about 4 feet at the withers. Your size is Medium."
          ],
          "type": "entries"
        },
        {
          "name": "Fey",
          "entries": [
            "Your creature type is fey, rather than humanoid."
          ],
          "type": "entries"
        },
        {
          "name": "Charge",
          "entries": [
            "If you move at least 30 feet straight toward a target and then hit it with a melee weapon attack on the same turn, you can immediately follow that attack with a bonus action, making one attack against the target with your hooves."
          ],
          "type": "entries"
        },
        {
          "type": "entries",
          "name": "Hooves",
          "entries": [
            "Your hooves are natural melee weapons, which you can use to make unarmed strikes. If you hit with them, you deal bludgeoning damage equal to {@damage 1d4} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike."
          ]
        },
        {
          "type": "entries",
          "name": "Equine Build",
          "entries": [
            "You count as one size larger when determining your carrying capacity and the weight you can push or drag.",
            "In addition, any climb that requires hands and feet is especially difficult for you because of your equine legs. When you make such a climb, each foot of movement costs you 4 extra feet, instead of the normal 1 extra foot."
          ]
        },
        {
          "type": "entries",
          "name": "Survivor",
          "entries": [
            "You have proficiency in one of the following skills of your choice: {@skill Animal Handling}, {@skill Medicine}, {@skill Nature}, or {@skill Survival}."
          ]
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Sylvan. Sylvan is widely spoken in the Selesnya Conclave, for it is rich in vocabulary to describe natural phenomena and spiritual forces."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Centaur",
      "source": "MOT",
      "page": 18,
      "reprintedAs": [
        "Centaur|MPMM"
      ],
      "_copy": {
        "name": "Centaur",
        "source": "GGR",
        "_mod": {
          "entries": [
            {
              "mode": "replaceArr",
              "replace": "Alignment",
              "items": {
                "name": "Alignment",
                "type": "entries",
                "entries": [
                  "Centaurs are inclined toward neutrality. Lagonna centaurs tend to be more lawful, while Pheres centaurs are more often chaotic."
                ]
              }
            },
            {
              "mode": "replaceArr",
              "replace": "Size",
              "items": {
                "name": "Size",
                "type": "entries",
                "entries": [
                  "Centaurs stand between 6 and 7 feet tall, with their equine bodies reaching about 4 feet at the withers. Pheres centaurs tend to be slightly larger than Lagonna centaurs. Your size is Medium."
                ]
              }
            },
            {
              "mode": "replaceArr",
              "replace": "Languages",
              "items": {
                "name": "Languages",
                "type": "entries",
                "entries": [
                  "You can speak, read, and write Common and Sylvan."
                ]
              }
            }
          ]
        }
      },
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Centaur",
      "source": "MPMM",
      "page": 9,
      "lineage": "VRGR",
      "creatureTypes": [
        "fey"
      ],
      "size": [
        "M"
      ],
      "speed": 40,
      "traitTags": [
        "Natural Weapon",
        "Powerful Build"
      ],
      "skillProficiencies": [
        {
          "choose": {
            "from": [
              "animal handling",
              "medicine",
              "nature",
              "survival"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Creature Type",
          "entries": [
            "You are a Fey."
          ]
        },
        {
          "type": "entries",
          "name": "Charge",
          "entries": [
            "If you move at least 30 feet straight toward a target and then hit it with a melee weapon attack on the same turn, you can immediately follow that attack with a bonus action, making one attack against the target with your hooves."
          ]
        },
        {
          "type": "entries",
          "name": "Equine Build",
          "entries": [
            "You count as one size larger when determining your carrying capacity and the weight you can push or drag.",
            "In addition, any climb that requires hands and feet is especially difficult for you because of your equine legs. When you make such a climb, each foot of movement costs you 4 extra feet instead of the normal 1 extra foot."
          ]
        },
        {
          "type": "entries",
          "name": "Hooves",
          "entries": [
            "You have hooves that you can use to make unarmed strikes. When you hit with them, the strike deals {@damage 1d6} + your Strength modifier bludgeoning damage, instead of the bludgeoning damage normal for an unarmed strike."
          ]
        },
        {
          "type": "entries",
          "name": "Natural Affinity",
          "entries": [
            "Your fey connection to nature gives you an intuitive connection to the natural world and the animals within it. You therefore have proficiency in one of the following skills of your choice: {@skill Animal Handling}, {@skill Medicine}, {@skill Nature}, or {@skill Survival}."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Cervan",
      "source": "HWCS",
      "page": 22,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "con": 2
        }
      ],
      "languageProficiencies": [
        {
          "other": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Cervans reach maturity around 12 years. They live long lives compared to the rest of the Humblefolk, between 100 and 150 years, something they attribute as much to their way of life as the blessing of Cairith. Pronghorns generally live longer than grove cervans, which is considered a sign of Cairith's favor."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Cervans are pragmatic in their thinking, and generally prefer to keep their philosophies flexible in order to prioritize what they believe is important for both themselves and their communities. They lean towards neutral alignments."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Grove cervans stand between 5 and 6 feet tall, and have light builds, weighing between 130 and 180 pounds. Pronghorn cervans are taller and tend toward heavier, more muscular builds, standing around 7 feet tall, and sometimes weighing over 200 pounds. Your size is Medium."
          ]
        },
        {
          "name": "Speed",
          "type": "entries",
          "entries": [
            "Your base walking speed is 30 feet."
          ]
        },
        {
          "name": "Practical",
          "type": "entries",
          "entries": [
            "Cervans are eminently practical and like to spend their time learning useful skills for life in their woodland villages. You gain proficiency in one of the following skills: {@skill Athletics}, {@skill Medicine}, {@skill Nature}, or {@skill Survival}."
          ]
        },
        {
          "name": "Surge of Vigor",
          "type": "entries",
          "entries": [
            "All cervans possess a great tenacity and will to survive, which allows them to bounce back from even the most devastating blows. If an attack deals over half of your current remaining hit points in damage, (even if your hit points are reduced to 0 by the attack) you immediately regain hit points equal to {@dice 1d12} + your Constitution Modifier. You can't use this feature again until you have completed a long rest."
          ]
        },
        {
          "name": "Languages",
          "type": "entries",
          "entries": [
            "You can speak, read, and write Birdfolk, and speak Cervan (Cervan has no written component)."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Changeling",
      "source": "ERLW",
      "page": 17,
      "reprintedAs": [
        "Changeling|MPMM"
      ],
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "cha": 2,
          "choose": {
            "from": [
              "str",
              "dex",
              "con",
              "int",
              "wis"
            ],
            "count": 1
          }
        }
      ],
      "heightAndWeight": {
        "baseHeight": 61,
        "heightMod": "2d4",
        "baseWeight": 115,
        "weightMod": "2d4"
      },
      "age": {
        "mature": 20,
        "max": 100
      },
      "skillProficiencies": [
        {
          "choose": {
            "from": [
              "deception",
              "insight",
              "intimidation",
              "persuasion"
            ],
            "count": 2
          }
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "anyStandard": 2
        }
      ],
      "entries": [
        {
          "name": "Age",
          "entries": [
            "Changelings mature slightly faster than humans but share a similar lifespan\u2014typically a century or less. While a changeling can transform to conceal their age, the effects of aging affect them similarly to humans."
          ],
          "type": "entries"
        },
        {
          "type": "entries",
          "name": "Alignment",
          "entries": [
            "Changelings tend toward pragmatic neutrality, and few changelings embrace evil."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Your size is Medium."
          ]
        },
        {
          "type": "entries",
          "name": "Shapechanger",
          "entries": [
            "As an action, you can change your appearance and your voice. You determine the specifics of the changes, including your coloration, hair length, and sex. You can also adjust your height and weight, but not so much that your size changes. You can make yourself appear as a member of another race, though none of your game statistics change. You can't duplicate the appearance of a creature you've never seen, and you must adopt a form that has the same basic arrangement of limbs that you have. Your clothing and equipment aren't changed by this trait.",
            "You stay in the new form until you use an action to revert to your true form or until you die."
          ]
        },
        {
          "type": "entries",
          "name": "Changeling Instincts",
          "entries": [
            "You gain proficiency with two of the following skills of your choice: {@skill Deception}, {@skill Insight}, {@skill Intimidation}, and {@skill Persuasion}."
          ]
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and two other languages of your choice."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Changeling",
      "source": "MPMM",
      "page": 10,
      "lineage": "VRGR",
      "creatureTypes": [
        "fey"
      ],
      "size": [
        "S",
        "M"
      ],
      "speed": 30,
      "skillProficiencies": [
        {
          "choose": {
            "from": [
              "deception",
              "insight",
              "intimidation",
              "performance",
              "persuasion"
            ],
            "count": 2
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Creature Type",
          "entries": [
            "You are a Fey."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "You are Medium or Small. You choose the size when you select this race."
          ]
        },
        {
          "type": "entries",
          "name": "Changeling Instincts",
          "entries": [
            "Thanks to your connection to the fey realm, you gain proficiency with two of the following skills of your choice: {@skill Deception}, {@skill Insight}, {@skill Intimidation}, {@skill Performance}, or {@skill Persuasion}."
          ]
        },
        {
          "type": "entries",
          "name": "Shapechanger",
          "entries": [
            "As an action, you change your appearance and your voice. You determine the specifics of the changes, including your coloration, hair length, and sex. You can also adjust your height between Medium and Small. You can make yourself appear as a member of another race, though none of your game statistics change. You can't duplicate the appearance of an individual you've never seen, and you must adopt a form that has the same basic arrangement of limbs that you have. Your clothing and equipment aren't changed by this trait.",
            "You stay in the new form until you use an action to revert to your true form or until you die."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Corvum",
      "source": "HWCS",
      "page": 12,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "int": 2
        }
      ],
      "languageProficiencies": [
        {
          "other": true,
          "auran": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Corvums reach adulthood at around 18 years. They live slightly shorter lives than other birdfolk, approximately 70 years."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Shrewd and capable, corvums prefer moral flexibility and are more likely to be neutral than either good or evil. Nonetheless, corvums see the benefit of rules, even if many attempt to turn them to their own advantage. Because of this they favor lawful alignments."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Corvums cut imposing figures, standing between 4 and a half and 5 and a half feet tall, encompassing a variety of different builds. They weigh around 100 pounds. Your size is Medium."
          ]
        },
        {
          "name": "Speed",
          "type": "entries",
          "entries": [
            "Your base walking speed is 30 feet."
          ]
        },
        {
          "name": "Glide",
          "type": "entries",
          "entries": [
            "Using your feathered arms, you can slow your fall, and glide short distances. When falling you can use your reaction to spread your arms, stiffen your wing feathers, and slow your descent. While doing so, you continue to fall gently at a speed of 60 feet per round, taking no fall damage when you land. If you would fall at least 10 feet in this way, you may fly up to your movement speed in one direction you choose, although you cannot choose to move upwards, landing in the space you finish your movement. You cannot glide while carrying heavy weapons or wielding a shield (though you may drop any held items as part of your reaction to spread your arms). You cannot glide while wearing heavy armor, or if you are encumbered."
          ]
        },
        {
          "name": "Talons",
          "type": "entries",
          "entries": [
            "Your sharp claws aid you in unarmed combat and while climbing. Your damage for an unarmed strike is {@damage 1d4} piercing damage. Additionally, you have advantage on Strength ({@skill Athletics}) checks made to climb any surface your talons could reasonably grip."
          ]
        },
        {
          "name": "Learned",
          "type": "entries",
          "entries": [
            "You gain proficiency in one of the following skills: {@skill Arcana}, {@skill History}, {@skill Nature}, or {@skill Religion}."
          ]
        },
        {
          "name": "Appraising Eye",
          "type": "entries",
          "entries": [
            "You have an almost supernatural ability to appraise objects. By spending an action examining any object, you can determine any magical properties the item has, how they might be used or activated, as well as a fair estimation of market price. Using this skill strains the eyes, and you must complete a long or short rest before you can use it again."
          ]
        },
        {
          "name": "Languages",
          "type": "entries",
          "entries": [
            "You can speak, read, and write Birdfolk. You can also understand Auran, though you cannot speak it naturally."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Custom Lineage",
      "source": "TCE",
      "page": 8,
      "lineage": true,
      "size": [
        "S",
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "choose": {
            "from": [
              "str",
              "dex",
              "con",
              "int",
              "wis",
              "cha"
            ],
            "amount": 2
          }
        }
      ],
      "darkvision": 60,
      "feats": [
        {
          "any": 1
        }
      ],
      "skillProficiencies": [
        {
          "any": 1
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "anyStandard": 1
        }
      ],
      "entries": [
        "Instead of choosing one of the game's races for your character at 1st level, you can use the following traits to represent your character's lineage, giving you full control over how your character's origin shaped them:",
        {
          "type": "entries",
          "name": "Creature Type",
          "entries": [
            "You are a humanoid. You determine your appearance and whether you resemble any of your kin."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "You are Small or Medium (your choice)."
          ]
        },
        {
          "type": "entries",
          "name": "Feat",
          "entries": [
            "You gain one {@5etools feat|feats.html} of your choice for which you qualify."
          ]
        },
        {
          "type": "entries",
          "name": "Variable Trait",
          "entries": [
            "You gain one of the following options of your choice: (a) {@sense darkvision} with a range of 60 feet or (b) proficiency in one skill of your choice."
          ]
        },
        {
          "type": "entries",
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character."
          ]
        },
        "Your race is considered to be a Custom Lineage for any game feature that requires a certain race, such as elf or dwarf."
      ],
      "_versions": [
        {
          "name": "Custom Lineage; Darkvision",
          "source": "TCE",
          "_mod": {
            "entries": {
              "mode": "replaceArr",
              "replace": "Variable Trait",
              "items": {
                "name": "Variable Trait; Darkvision",
                "type": "entries",
                "entries": [
                  "You gain {@sense darkvision} with a range of 60 feet."
                ]
              }
            }
          },
          "skillProficiencies": null
        },
        {
          "name": "Custom Lineage; Skill Proficiency",
          "source": "TCE",
          "_mod": {
            "entries": {
              "mode": "replaceArr",
              "replace": "Variable Trait",
              "items": {
                "name": "Variable Trait; Skill Proficiency",
                "type": "entries",
                "entries": [
                  "You gain proficiency in one skill of your choice."
                ]
              }
            }
          },
          "darkvision": null
        }
      ]
    },
    {
      "name": "Deep Gnome",
      "source": "MPMM",
      "page": 11,
      "lineage": "VRGR",
      "creatureTypes": [
        "humanoid"
      ],
      "creatureTypeTags": [
        "gnome"
      ],
      "size": [
        "S"
      ],
      "speed": 30,
      "age": {
        "max": 500
      },
      "darkvision": 120,
      "traitTags": [
        "Magic Resistance"
      ],
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "disguise self"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "nondetection"
                ]
              }
            }
          },
          "ability": {
            "choose": [
              "int",
              "wis",
              "cha"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Creature Type",
          "entries": [
            "You are a Humanoid. You are also considered a gnome for any prerequisite or effect that requires you to be a gnome."
          ]
        },
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 120 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
          ]
        },
        {
          "type": "entries",
          "name": "Gift of the Svirfneblin",
          "entries": [
            "Starting at 3rd level, you can cast the {@spell disguise self} spell with this trait. Starting at 5th level, you can also cast the {@spell nondetection} spell with it, without requiring a material component. Once you cast either of these spells with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast these using spell slots you have of the appropriate level.",
            "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race)."
          ]
        },
        {
          "type": "entries",
          "name": "Gnomish Magic Resistance",
          "entries": [
            "You have advantage on Intelligence, Wisdom, and Charisma saving throws against spells."
          ]
        },
        {
          "type": "entries",
          "name": "Svirfneblin Camouflage",
          "entries": [
            "When you make a Dexterity ({@skill Stealth}) check, you can make the check with advantage. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Dhampir",
      "source": "VRGR",
      "page": 16,
      "lineage": "VRGR",
      "size": [
        "S",
        "M"
      ],
      "speed": {
        "walk": 35,
        "climb": true
      },
      "darkvision": 60,
      "traitTags": [
        "Natural Weapon"
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "You are Medium or Small. You choose the size when you gain this lineage."
          ]
        },
        {
          "type": "entries",
          "name": "Ancestral Legacy",
          "entries": [
            "If you replace a race with this lineage, you can keep the following elements of that race: any skill proficiencies you gained from it and any climbing, flying, or swimming speed you gained from it.",
            "If you don't keep any of those elements or you choose this lineage at character creation, you gain proficiency in two skills of your choice."
          ]
        },
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness as shades of gray."
          ]
        },
        {
          "type": "entries",
          "name": "Deathless Nature",
          "entries": [
            "You don't need to breathe."
          ]
        },
        {
          "type": "entries",
          "name": "Spider Climb",
          "entries": [
            "You have a climbing speed equal to your walking speed. In addition, at 3rd level, you can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free."
          ]
        },
        {
          "type": "entries",
          "name": "Vampiric Bite",
          "entries": [
            "Your fanged bite is a natural weapon, which counts as a simple melee weapon with which you are proficient. You add your Constitution modifier, instead of your Strength modifier, to the attack and damage rolls when you attack with this bite. It deals {@damage 1d4} piercing damage on a hit. While you are missing half or more of your hit points, you have advantage on attack rolls you make with this bite.",
            "When you attack with this bite and hit a creature that isn't a Construct or an Undead, you can empower yourself in one of the following ways of your choice:",
            {
              "type": "list",
              "items": [
                "You regain hit points equal to the piercing damage dealt by the bite.",
                "You gain a bonus to the next ability check or attack roll you make; the bonus equals the piercing damage dealt by the bite"
              ]
            },
            "You can empower yourself with this bite a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Dragonborn",
      "source": "PHB",
      "page": 32,
      "srd": true,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "str": 2,
          "cha": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 66,
        "heightMod": "2d8",
        "baseWeight": 175,
        "weightMod": "2d6"
      },
      "age": {
        "mature": 15,
        "max": 80
      },
      "traitTags": [
        "Uncommon Race"
      ],
      "languageProficiencies": [
        {
          "common": true,
          "draconic": true
        }
      ],
      "resist": [
        {
          "choose": {
            "from": [
              "acid",
              "cold",
              "fire",
              "lightning",
              "poison"
            ]
          }
        }
      ],
      "soundClip": {
        "type": "internal",
        "path": "races/dragonborn.mp3"
      },
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium."
          ]
        },
        {
          "name": "Draconic Ancestry",
          "entries": [
            "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
            {
              "type": "table",
              "caption": "Draconic Ancestry",
              "colLabels": [
                "Dragon",
                "Damage Type",
                "Breath Weapon"
              ],
              "colStyles": [
                "col-3 text-center",
                "col-3 text-center",
                "col-6"
              ],
              "rows": [
                [
                  "Black",
                  "Acid",
                  "5 by 30 ft. line (Dex. save)"
                ],
                [
                  "Blue",
                  "Lightning",
                  "5 by 30 ft. line (Dex. save)"
                ],
                [
                  "Brass",
                  "Fire",
                  "5 by 30 ft. line (Dex. save)"
                ],
                [
                  "Bronze",
                  "Lightning",
                  "5 by 30 ft. line (Dex. save)"
                ],
                [
                  "Copper",
                  "Acid",
                  "5 by 30 ft. line (Dex. save)"
                ],
                [
                  "Gold",
                  "Fire",
                  "15 ft. cone (Dex. save)"
                ],
                [
                  "Green",
                  "Poison",
                  "15 ft. cone (Con. save)"
                ],
                [
                  "Red",
                  "Fire",
                  "15 ft. cone (Dex. save)"
                ],
                [
                  "Silver",
                  "Cold",
                  "15 ft. cone (Con. save)"
                ],
                [
                  "White",
                  "Cold",
                  "15 ft. cone (Con. save)"
                ]
              ]
            }
          ],
          "type": "entries"
        },
        {
          "name": "Breath Weapon",
          "entries": [
            "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation.",
            "When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes {@dice 2d6} damage on a failed save, and half as much damage on a successful one. The damage increases to {@dice 3d6} at 6th level, {@dice 4d6} at 11th level, and {@dice 5d6} at 16th level.",
            "After you use your breath weapon, you can't use it again until you complete a short or long rest."
          ],
          "type": "entries"
        },
        {
          "name": "Damage Resistance",
          "entries": [
            "You have resistance to the damage type associated with your draconic ancestry."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Dragonborn (Chromatic)",
      "source": "FTD",
      "page": 10,
      "lineage": "VRGR",
      "size": [
        "M"
      ],
      "speed": 30,
      "resist": [
        {
          "choose": {
            "from": [
              "acid",
              "lightning",
              "poison",
              "fire",
              "cold"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Chromatic Ancestry",
          "entries": [
            "You have a chromatic dragon ancestor, granting you a special magical affinity. Choose one kind of dragon from the Chromatic Ancestry table. This determines the damage type for your other traits, as shown in the table.",
            {
              "type": "table",
              "caption": "Chromatic Ancestry",
              "colLabels": [
                "Dragon",
                "Damage Type"
              ],
              "colStyles": [
                "col-6 text-center",
                "col-6 text-center"
              ],
              "rows": [
                [
                  "Black",
                  "Acid"
                ],
                [
                  "Blue",
                  "Lightning"
                ],
                [
                  "Green",
                  "Poison"
                ],
                [
                  "Red",
                  "Fire"
                ],
                [
                  "White",
                  "Cold"
                ]
              ]
            }
          ]
        },
        {
          "type": "entries",
          "name": "Breath Weapon",
          "entries": [
            "When you take the {@action Attack} action on your turn, you can replace one of your attacks with an exhalation of magical energy in a 30-foot line that is 5 feet wide. Each creature in that area must make a Dexterity saving throw (DC = 8 + your Constitution modifier + your proficiency bonus). On a failed save, the creature takes {@damage 1d10} damage of the type associated with your Chromatic Ancestry. On a successful save, it takes half as much damage. This damage increases by {@dice 1d10} when you reach 5th level ({@dice 2d10}), 11th level ({@dice 3d10}), and 17th level ({@dice 4d10}).",
            "You can use your Breath Weapon a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
          ]
        },
        {
          "type": "entries",
          "name": "Draconic Resistance",
          "entries": [
            "You have resistance to the damage type associated with your Chromatic Ancestry."
          ]
        },
        {
          "type": "entries",
          "name": "Chromatic Warding",
          "entries": [
            "Starting at 5th level, as an action, you can channel your draconic energy to protect yourself. For 1 minute, you become immune to the damage type associated with your Chromatic Ancestry. Once you use this trait, you can't do so again until you finish a long rest."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true,
      "_versions": [
        {
          "_abstract": {
            "name": "Dragonborn (Chromatic; {{color}})",
            "source": "FTD",
            "_mod": {
              "entries": [
                {
                  "mode": "removeArr",
                  "names": "Chromatic Ancestry"
                },
                {
                  "mode": "replaceArr",
                  "replace": "Breath Weapon",
                  "items": {
                    "type": "entries",
                    "name": "Breath Weapon",
                    "entries": [
                      "When you take the {@action Attack} action on your turn, you can replace one of your attacks with an exhalation of magical energy in a 30-foot line that is 5 feet wide. Each creature in that area must make a Dexterity saving throw (DC = 8 + your Constitution modifier + your proficiency bonus). On a failed save, the creature takes {@damage 1d10} {{damageType}} damage. On a successful save, it takes half as much damage. This damage increases by {@dice 1d10} when you reach 5th level ({@dice 2d10}), 11th level ({@dice 3d10}), and 17th level ({@dice 4d10}).",
                      "You can use your Breath Weapon a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
                    ]
                  }
                },
                {
                  "mode": "replaceArr",
                  "replace": "Draconic Resistance",
                  "items": {
                    "type": "entries",
                    "name": "Draconic Resistance",
                    "entries": [
                      "You have resistance to {{damageType}} damage."
                    ]
                  }
                }
              ]
            }
          },
          "_implementations": [
            {
              "_variables": {
                "color": "Black",
                "damageType": "acid"
              }
            },
            {
              "_variables": {
                "color": "Blue",
                "damageType": "lightning"
              }
            },
            {
              "_variables": {
                "color": "Green",
                "damageType": "poison"
              }
            },
            {
              "_variables": {
                "color": "Red",
                "damageType": "fire"
              }
            },
            {
              "_variables": {
                "color": "White",
                "damageType": "cold"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Dragonborn (Gem)",
      "source": "FTD",
      "page": 11,
      "lineage": "VRGR",
      "size": [
        "M"
      ],
      "speed": 30,
      "resist": [
        {
          "choose": {
            "from": [
              "force",
              "radiant",
              "psychic",
              "thunder",
              "necrotic"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Gem Ancestry",
          "entries": [
            "You have a gem dragon ancestor, granting you a special magical affinity. Choose one kind of dragon from the Gem Ancestry table. This determines the damage type for your other traits, as shown in the table.",
            {
              "type": "table",
              "caption": "Gem Ancestry",
              "colLabels": [
                "Dragon",
                "Damage Type"
              ],
              "colStyles": [
                "col-6 text-center",
                "col-6 text-center"
              ],
              "rows": [
                [
                  "Amethyst",
                  "Force"
                ],
                [
                  "Crystal",
                  "Radiant"
                ],
                [
                  "Emerald",
                  "Psychic"
                ],
                [
                  "Sapphire",
                  "Thunder"
                ],
                [
                  "Topaz",
                  "Necrotic"
                ]
              ]
            }
          ]
        },
        {
          "type": "entries",
          "name": "Breath Weapon",
          "entries": [
            "When you take the {@action Attack} action on your turn, you can replace one of your attacks with an exhalation of magical energy in a 15-foot cone. Each creature in that area must make a Dexterity saving throw (DC = 8 + your Constitution modifier + your proficiency bonus). On a failed save, the creature takes {@damage 1d10} damage of the type associated with your Gem Ancestry. On a successful save, it takes half as much damage. This damage increases by {@dice 1d10} when you reach 5th level ({@dice 2d10}), 11th level ({@dice 3d10}), and 17th level ({@dice 4d10}).",
            "You can use your Breath Weapon a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
          ]
        },
        {
          "type": "entries",
          "name": "Draconic Resistance",
          "entries": [
            "You have resistance to the damage type associated with your Gem Ancestry."
          ]
        },
        {
          "type": "entries",
          "name": "Psionic Mind",
          "entries": [
            "You can send telepathic messages to any creature you can see within 30 feet of you. You don't need to share a language with the creature for it to understand these messages, but it must be able to understand at least one language to comprehend them."
          ]
        },
        {
          "type": "entries",
          "name": "Gem Flight",
          "entries": [
            "Starting at 5th level, you can use a bonus action to manifest spectral wings on your body. These wings last for 1 minute. For the duration, you gain a flying speed equal to your walking speed and can hover. Once you use this trait, you can't do so again until you finish a long rest."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true,
      "_versions": [
        {
          "_abstract": {
            "name": "Dragonborn (Gem; {{color}})",
            "source": "FTD",
            "_mod": {
              "entries": [
                {
                  "mode": "removeArr",
                  "names": "Gem Ancestry"
                },
                {
                  "mode": "replaceArr",
                  "replace": "Breath Weapon",
                  "items": {
                    "type": "entries",
                    "name": "Breath Weapon",
                    "entries": [
                      "When you take the {@action Attack} action on your turn, you can replace one of your attacks with an exhalation of magical energy in a 15-foot cone. Each creature in that area must make a Dexterity saving throw (DC = 8 + your Constitution modifier + your proficiency bonus). On a failed save, the creature takes {@damage 1d10} {{damageType}} damage. On a successful save, it takes half as much damage. This damage increases by {@dice 1d10} when you reach 5th level ({@dice 2d10}), 11th level ({@dice 3d10}), and 17th level ({@dice 4d10}).",
                      "You can use your Breath Weapon a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
                    ]
                  }
                },
                {
                  "mode": "replaceArr",
                  "replace": "Draconic Resistance",
                  "items": {
                    "type": "entries",
                    "name": "Draconic Resistance",
                    "entries": [
                      "You have resistance to {{damageType}} damage."
                    ]
                  }
                }
              ]
            }
          },
          "_implementations": [
            {
              "_variables": {
                "color": "Amethyst",
                "damageType": "force"
              },
              "resist": [
                "force"
              ]
            },
            {
              "_variables": {
                "color": "Crystal",
                "damageType": "radiant"
              },
              "resist": [
                "radiant"
              ]
            },
            {
              "_variables": {
                "color": "Emerald",
                "damageType": "psychic"
              },
              "resist": [
                "psychic"
              ]
            },
            {
              "_variables": {
                "color": "Sapphire",
                "damageType": "thunder"
              },
              "resist": [
                "thunder"
              ]
            },
            {
              "_variables": {
                "color": "Topaz",
                "damageType": "necrotic"
              },
              "resist": [
                "necrotic"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Dragonborn (Metallic)",
      "source": "FTD",
      "page": 12,
      "lineage": "VRGR",
      "size": [
        "M"
      ],
      "speed": 30,
      "resist": [
        {
          "choose": {
            "from": [
              "fire",
              "lightning",
              "acid",
              "cold"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Metallic Ancestry",
          "entries": [
            "You have a metallic dragon ancestor, granting you a special magical affinity. Choose one kind of dragon from the Metallic Ancestry table. This determines the damage type for your other traits, as shown in the table.",
            {
              "type": "table",
              "caption": "Metallic Ancestry",
              "colLabels": [
                "Dragon",
                "Damage Type"
              ],
              "colStyles": [
                "col-6 text-center",
                "col-6 text-center"
              ],
              "rows": [
                [
                  "Brass",
                  "Fire"
                ],
                [
                  "Bronze",
                  "Lightning"
                ],
                [
                  "Copper",
                  "Acid"
                ],
                [
                  "Gold",
                  "Fire"
                ],
                [
                  "Silver",
                  "Cold"
                ]
              ]
            }
          ]
        },
        {
          "type": "entries",
          "name": "Breath Weapon",
          "entries": [
            "When you take the {@action Attack} action on your turn, you can replace one of your attacks with an exhalation of magical energy in a 15-foot cone. Each creature in that area must make a Dexterity saving throw (DC = 8 + your Constitution modifier + your proficiency bonus). On a failed save, the creature takes {@damage 1d10} damage of the type associated with your Metallic Ancestry. On a successful save, it takes half as much damage. This damage increases by {@dice 1d10} when you reach 5th level ({@dice 2d10}), 11th level ({@dice 3d10}), and 17th level ({@dice 4d10}).",
            "You can use your Breath Weapon a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
          ]
        },
        {
          "type": "entries",
          "name": "Draconic Resistance",
          "entries": [
            "You have resistance to the damage type associated with your Metallic Ancestry."
          ]
        },
        {
          "type": "entries",
          "name": "Metallic Breath Weapon",
          "entries": [
            "At 5th level, you gain a second breath weapon. When you take the {@action Attack} action on your turn, you can replace one of your attacks with an exhalation in a 15-foot cone. The save DC for this breath is 8 + your Constitution modifier + your proficiency bonus. Whenever you use this trait, choose one:",
            {
              "type": "list",
              "style": "list-hang-notitle",
              "items": [
                {
                  "type": "item",
                  "name": "Enervating Breath",
                  "entries": [
                    "Each creature in the cone must succeed on a Constitution saving throw or become {@condition incapacitated} until the start of your next turn."
                  ]
                },
                {
                  "type": "item",
                  "name": "Repulsion Breath",
                  "entries": [
                    "Each creature in the cone must succeed on a Strength saving throw or be pushed 20 feet away from you and be knocked {@condition prone}."
                  ]
                }
              ]
            },
            "Once you use your Metallic Breath Weapon, you can't do so again until you finish a long rest."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true,
      "_versions": [
        {
          "_abstract": {
            "name": "Dragonborn (Metallic; {{color}})",
            "source": "FTD",
            "_mod": {
              "entries": [
                {
                  "mode": "removeArr",
                  "names": "Metallic Ancestry"
                },
                {
                  "mode": "replaceArr",
                  "replace": "Breath Weapon",
                  "items": {
                    "type": "entries",
                    "name": "Breath Weapon",
                    "entries": [
                      "When you take the {@action Attack} action on your turn, you can replace one of your attacks with an exhalation of magical energy in a 15-foot cone. Each creature in that area must make a Dexterity saving throw (DC = 8 + your Constitution modifier + your proficiency bonus). On a failed save, the creature takes {@damage 1d10} {{damageType}} damage. On a successful save, it takes half as much damage. This damage increases by {@dice 1d10} when you reach 5th level ({@dice 2d10}), 11th level ({@dice 3d10}), and 17th level ({@dice 4d10}).",
                      "You can use your Breath Weapon a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
                    ]
                  }
                },
                {
                  "mode": "replaceArr",
                  "replace": "Draconic Resistance",
                  "items": {
                    "type": "entries",
                    "name": "Draconic Resistance",
                    "entries": [
                      "You have resistance to {{damageType}} damage."
                    ]
                  }
                }
              ]
            }
          },
          "_implementations": [
            {
              "_variables": {
                "color": "Brass",
                "damageType": "fire"
              },
              "resist": [
                "fire"
              ]
            },
            {
              "_variables": {
                "color": "Bronze",
                "damageType": "lightning"
              },
              "resist": [
                "lightning"
              ]
            },
            {
              "_variables": {
                "color": "Copper",
                "damageType": "acid"
              },
              "resist": [
                "acid"
              ]
            },
            {
              "_variables": {
                "color": "Gold",
                "damageType": "fire"
              },
              "resist": [
                "fire"
              ]
            },
            {
              "_variables": {
                "color": "Silver",
                "damageType": "cold"
              },
              "resist": [
                "cold"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Duergar",
      "source": "MPMM",
      "page": 12,
      "lineage": "VRGR",
      "creatureTypes": [
        "humanoid"
      ],
      "creatureTypeTags": [
        "dwarf"
      ],
      "size": [
        "M"
      ],
      "speed": 30,
      "age": {
        "max": 350
      },
      "darkvision": 120,
      "resist": [
        "poison"
      ],
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "enlarge/reduce"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "invisibility"
                ]
              }
            }
          },
          "ability": {
            "choose": [
              "int",
              "wis",
              "cha"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Creature Type",
          "entries": [
            "You are a Humanoid. You are also considered a dwarf for any prerequisite or effect that requires you to be a dwarf."
          ]
        },
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 120 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
          ]
        },
        {
          "type": "entries",
          "name": "Duergar Magic",
          "entries": [
            "Starting at 3rd level, you can cast the {@spell enlarge/reduce} spell on yourself with this trait, without requiring a material component. Starting at 5th level, you can also cast the {@spell invisibility} spell on yourself with this trait, without requiring a material component. Once you cast either of these spells with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level.",
            "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race)."
          ]
        },
        {
          "type": "entries",
          "name": "Dwarven Resilience",
          "entries": [
            "You have advantage on saving throws you make to avoid or end the {@condition poisoned} condition on yourself. You also have resistance to poison damage."
          ]
        },
        {
          "type": "entries",
          "name": "Psionic Fortitude",
          "entries": [
            "You have advantage on saving throws you make to avoid or end the {@condition charmed} or {@condition stunned} condition on yourself."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Dwarf",
      "source": "PHB",
      "page": 18,
      "srd": true,
      "basicRules": true,
      "size": [
        "M"
      ],
      "speed": 25,
      "ability": [
        {
          "con": 2
        }
      ],
      "age": {
        "mature": 20,
        "max": 350
      },
      "darkvision": 60,
      "languageProficiencies": [
        {
          "common": true,
          "dwarvish": true
        }
      ],
      "toolProficiencies": [
        {
          "choose": {
            "from": [
              "smith's tools",
              "brewer's supplies",
              "mason's tools"
            ]
          }
        }
      ],
      "weaponProficiencies": [
        {
          "battleaxe|phb": true,
          "handaxe|phb": true,
          "light hammer|phb": true,
          "warhammer|phb": true
        }
      ],
      "resist": [
        "poison"
      ],
      "soundClip": {
        "type": "internal",
        "path": "races/dwarf.mp3"
      },
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium."
          ]
        },
        {
          "name": "Speed",
          "entries": [
            "Your speed is not reduced by wearing heavy armor."
          ],
          "type": "entries"
        },
        {
          "name": "Darkvision",
          "entries": [
            "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Dwarven Resilience",
          "entries": [
            "You have advantage on saving throws against poison, and you have resistance against poison damage."
          ],
          "type": "entries"
        },
        {
          "name": "Dwarven Combat Training",
          "entries": [
            "You have proficiency with the {@item battleaxe|phb}, {@item handaxe|phb}, {@item light hammer|phb}, and {@item warhammer|phb}."
          ],
          "type": "entries"
        },
        {
          "name": "Tool Proficiency",
          "entries": [
            "You gain proficiency with the artisan's tools of your choice: {@item Smith's tools|phb}, {@item brewer's supplies|phb}, or {@item mason's tools|phb}."
          ],
          "type": "entries"
        },
        {
          "name": "Stonecunning",
          "entries": [
            "Whenever you make an Intelligence ({@skill History}) check related to the origin of stonework, you are considered proficient in the {@skill History} skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Dwarf (Kaladesh)",
      "source": "PSK",
      "page": 19,
      "size": [
        "M"
      ],
      "speed": 25,
      "ability": [
        {
          "con": 2,
          "wis": 1
        }
      ],
      "age": {
        "mature": 50,
        "max": 350
      },
      "darkvision": 60,
      "languageProficiencies": [
        {
          "common": true,
          "dwarvish": true
        }
      ],
      "toolProficiencies": [
        {
          "anyArtisansTool": 2
        }
      ],
      "resist": [
        "poison"
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Dwarves stand around 5 feet tall and average about 150 pounds. Your size is Medium."
          ]
        },
        {
          "name": "Speed",
          "entries": [
            "Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor."
          ],
          "type": "entries"
        },
        {
          "name": "Darkvision",
          "entries": [
            "Accustomed to life underground in your race's ancient past, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Dwarven Resilience",
          "entries": [
            "You have advantage on saving throws against poison, and you have resistance against poison damage."
          ],
          "type": "entries"
        },
        {
          "name": "Dwarven Toughness",
          "entries": [
            "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level."
          ],
          "type": "entries"
        },
        {
          "name": "Artisan's Expertise",
          "entries": [
            "You gain proficiency with two kinds of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools} of your choice. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. In addition, whenever you make an Intelligence ({@skill History}) check related to the origin of any architectural construction (including buildings, public works such as canals and aqueducts, and the massive cogwork that underlies much of the construction of Ghirapur), you are considered proficient in the {@skill History} skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and {@language Dwarvish}. {@language Dwarvish} is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Eladrin",
      "source": "MPMM",
      "page": 13,
      "lineage": "VRGR",
      "creatureTypes": [
        "humanoid"
      ],
      "creatureTypeTags": [
        "elf"
      ],
      "size": [
        "M"
      ],
      "speed": 30,
      "age": {
        "max": 750
      },
      "darkvision": 60,
      "traitTags": [
        "Improved Resting",
        "Tool Proficiency",
        "Weapon Proficiency"
      ],
      "skillProficiencies": [
        {
          "perception": true
        }
      ],
      "entries": [
        "{@i Choose your eladrin's season: autumn, winter, spring, or summer. When finishing a long rest, you can change your season. See the \\"Info\\" tab for more information.}",
        {
          "type": "entries",
          "name": "Creature Type",
          "entries": [
            "You are a Humanoid. You are also considered an elf for any prerequisite or effect that requires you to be an elf."
          ]
        },
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
          ]
        },
        {
          "type": "entries",
          "name": "Fey Ancestry",
          "entries": [
            "You have advantage on saving throws you make to avoid or end the {@condition charmed} condition on yourself."
          ]
        },
        {
          "type": "entries",
          "name": "Fey Step",
          "entries": [
            "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
            "When you reach 3rd level, your Fey Step gain an additional effect based on your season; if the effect requires a saving throw, the DC equals 8 + your proficiency bonus + your Intelligence, Wisdom, or Charisma modifier (choose when you select this race):",
            {
              "type": "list",
              "items": [
                {
                  "type": "item",
                  "name": "Autumn",
                  "entry": "Immediately after you use your Fey Step, up to two creatures of your choice that you can see within 10 feet of you must succeed on a Wisdom saving throw or be {@condition charmed} by you for 1 minute, or until you or your companions deal any damage to the creatures."
                },
                {
                  "type": "item",
                  "name": "Winter",
                  "entry": "When you use your Fey Step, one creature of your choice that you can see within 5 feet of you before you teleport must succeed on a Wisdom saving throw or be {@condition frightened} of you until the end of your next turn."
                },
                {
                  "type": "item",
                  "name": "Spring",
                  "entry": "When you use your Fey Step, you can touch one willing creature within 5 feet of you. That creature then teleports instead of you, appearing in an unoccupied space of your choice that you can see within 30 feet of you."
                },
                {
                  "type": "item",
                  "name": "Summer",
                  "entry": "Immediately after you use your Fey Step, each creature of your choice that you can see within 5 feet of you takes fire damage equal to your proficiency bonus."
                }
              ],
              "style": "list-hang-notitle"
            }
          ]
        },
        {
          "type": "entries",
          "name": "Keen Senses",
          "entries": [
            "You have proficiency in the {@skill Perception} skill."
          ]
        },
        {
          "type": "entries",
          "name": "Trance",
          "entries": [
            "You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness.",
            "Whenever you finish this trance, you can change your season, and you can gain two proficiencies that you don't have, each one with a {@book weapon|phb|5|weapons} or a {@book tool|phb|5|tools} of your choice selected from the Player's Handbook. You mystically acquire these proficiencies by drawing them from shared elven memory, and you retain them until you finish your next long rest."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Elf",
      "source": "PHB",
      "page": 21,
      "srd": true,
      "basicRules": true,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "dex": 2
        }
      ],
      "age": {
        "mature": 100,
        "max": 750
      },
      "darkvision": 60,
      "traitTags": [
        "Improved Resting"
      ],
      "skillProficiencies": [
        {
          "perception": true
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "elvish": true
        }
      ],
      "soundClip": {
        "type": "internal",
        "path": "races/elf.mp3"
      },
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium."
          ]
        },
        {
          "name": "Darkvision",
          "entries": [
            "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Keen Senses",
          "entries": [
            "You have proficiency in the {@skill Perception} skill."
          ],
          "type": "entries"
        },
        {
          "name": "Fey Ancestry",
          "entries": [
            "You have advantage on saving throws against being {@condition charmed}, and magic can't put you to sleep."
          ],
          "type": "entries"
        },
        {
          "name": "Trance",
          "entries": [
            "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is \\"trance.\\") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.",
            "{@note If you meditate during a long rest, you finish the rest after only 4 hours. You otherwise obey all the rules for a long rest; only the duration is changed.}"
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Elf (Kaladesh)",
      "source": "PSK",
      "page": 20,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "dex": 2,
          "wis": 1
        }
      ],
      "age": {
        "mature": 100,
        "max": 750
      },
      "darkvision": 60,
      "traitTags": [
        "Improved Resting"
      ],
      "skillProficiencies": [
        {
          "perception": true
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "elvish": true
        }
      ],
      "weaponProficiencies": [
        {
          "longsword|phb": true,
          "shortsword|phb": true,
          "shortbow|phb": true,
          "longbow|phb": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium."
          ]
        },
        {
          "name": "Darkvision",
          "entries": [
            "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Keen Senses",
          "entries": [
            "You have proficiency in the {@skill Perception} skill."
          ],
          "type": "entries"
        },
        {
          "name": "Elf Weapon Training",
          "entries": [
            "You have proficiency with the {@item longsword|phb}, {@item shortsword|phb}, {@item shortbow|phb}, and {@item longbow|phb}."
          ],
          "type": "entries"
        },
        {
          "name": "Fey Ancestry",
          "entries": [
            "You have advantage on saving throws against being {@condition charmed}, and magic can't put you to sleep."
          ],
          "type": "entries"
        },
        {
          "name": "Trance",
          "entries": [
            "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is \\"trance.\\") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.",
            "{@note If you meditate during a long rest, you finish the rest after only 4 hours. You otherwise obey all the rules for a long rest; only the duration is changed.}"
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires."
          ],
          "type": "entries"
        },
        {
          "name": "Elf Culture",
          "entries": [
            "The elves of Kaladesh don't organize themselves into nations or tribes. Still, they recognize three distinct cultural groups among their kind\u2014though in truth these groupings are more like attitudes or alignments with regard to the rest of society and the use of technology. Choose one of these cultures."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Elf (Zendikar)",
      "source": "PSZ",
      "page": 18,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "wis": 2
        }
      ],
      "age": {
        "mature": 100,
        "max": 750
      },
      "darkvision": 60,
      "skillProficiencies": [
        {
          "perception": true
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "elvish": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium."
          ]
        },
        {
          "name": "Darkvision",
          "entries": [
            "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Keen Senses",
          "entries": [
            "You have proficiency in the {@skill Perception} skill."
          ],
          "type": "entries"
        },
        {
          "name": "Fey Ancestry",
          "entries": [
            "You have advantage on saving throws against being {@condition charmed}, and magic can't put you to sleep."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Fairy",
      "source": "MPMM",
      "page": 14,
      "lineage": "VRGR",
      "creatureTypes": [
        "fey"
      ],
      "size": [
        "S"
      ],
      "speed": {
        "walk": 30,
        "fly": true
      },
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "faerie fire"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "enlarge/reduce"
                ]
              }
            }
          },
          "ability": {
            "choose": [
              "int",
              "wis",
              "cha"
            ]
          },
          "known": {
            "1": [
              "druidcraft#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Creature Type",
          "entries": [
            "You are a Fey."
          ]
        },
        {
          "type": "entries",
          "name": "Fairy Magic",
          "entries": [
            "You know the {@spell druidcraft} cantrip. Starting at 3rd level, you can cast the {@spell faerie fire} spell with this trait. Starting at 5th level, you can also cast the {@spell enlarge/reduce} spell with this trait. Once you cast {@spell faerie fire} or {@spell enlarge/reduce} with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.",
            "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race)."
          ]
        },
        {
          "type": "entries",
          "name": "Flight",
          "entries": [
            "Because of your wings, you have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Fairy",
      "source": "WBtW",
      "page": 12,
      "reprintedAs": [
        "Fairy|MPMM"
      ],
      "lineage": "VRGR",
      "creatureTypes": [
        "fey"
      ],
      "size": [
        "S"
      ],
      "speed": {
        "walk": 30,
        "fly": true
      },
      "additionalSpells": [
        {
          "ability": {
            "choose": [
              "int",
              "wis",
              "cha"
            ]
          },
          "known": {
            "1": [
              "druidcraft#c"
            ]
          },
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "faerie fire"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "enlarge/reduce"
                ]
              }
            }
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Creature Type",
          "entries": [
            "You are a Fey."
          ]
        },
        {
          "type": "entries",
          "name": "Flight",
          "entries": [
            "Because of your wings, you have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor."
          ]
        },
        {
          "type": "entries",
          "name": "Fairy Magic",
          "entries": [
            "You know the {@spell druidcraft} cantrip.",
            "Starting at 3rd level, you can cast the {@spell faerie fire} spell with this trait. Starting at 5th level, you can also cast the {@spell enlarge/reduce} spell with this trait. Once you cast {@spell faerie fire} or {@spell enlarge/reduce} with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.",
            "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race)."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Firbolg",
      "source": "MPMM",
      "page": 15,
      "lineage": "VRGR",
      "size": [
        "M"
      ],
      "speed": 30,
      "age": {
        "max": 500
      },
      "traitTags": [
        "Powerful Build"
      ],
      "additionalSpells": [
        {
          "ability": {
            "choose": [
              "int",
              "wis",
              "cha"
            ]
          },
          "innate": {
            "1": [
              "detect magic",
              "disguise self"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Firbolg Magic",
          "entries": [
            "You can cast {@spell detect magic} and {@spell disguise self} spells with this trait. When you use this version of {@spell disguise self}, you can seem up to 3 feet shorter or taller. Once you cast either of these spells with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast these spells using any spell slots you have.",
            "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race)."
          ]
        },
        {
          "type": "entries",
          "name": "Hidden Step",
          "entries": [
            "As a bonus action, you can magically turn {@condition invisible} until the start of your next turn or until you attack, make a damage roll, or force someone to make a saving throw. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
          ]
        },
        {
          "type": "entries",
          "name": "Powerful Build",
          "entries": [
            "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
          ]
        },
        {
          "type": "entries",
          "name": "Speech of Beast and Leaf",
          "entries": [
            "You have the ability to communicate in a limited manner with Beasts, Plants, and vegetation. They can understand the meaning of your words, though you have no special ability to understand them in return. You have advantage on all Charisma checks you make to influence them."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Firbolg",
      "source": "VGM",
      "page": 107,
      "otherSources": [
        {
          "source": "EGW",
          "page": 169
        }
      ],
      "reprintedAs": [
        "Firbolg|MPMM"
      ],
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "wis": 2,
          "str": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 74,
        "heightMod": "2d12",
        "baseWeight": 175,
        "weightMod": "2d6"
      },
      "age": {
        "mature": 30,
        "max": 500
      },
      "traitTags": [
        "Powerful Build"
      ],
      "languageProficiencies": [
        {
          "common": true,
          "elvish": true,
          "giant": true
        }
      ],
      "soundClip": {
        "type": "internal",
        "path": "races/firbolg.mp3"
      },
      "additionalSpells": [
        {
          "ability": "wis",
          "known": {
            "1": {
              "rest": {
                "1": [
                  "detect magic",
                  "disguise self"
                ]
              }
            }
          }
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "As humanoids related to the fey, firbolg have long lifespans. A firbolg reaches adulthood around 30, and the oldest of them can live for 500 years."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Firbolg are between 7 and 8 feet tall and weigh between 240 and 300 pounds. Your size is Medium."
          ]
        },
        {
          "name": "Firbolg Magic",
          "entries": [
            "You can cast {@spell detect magic} and {@spell disguise self} with this trait, using Wisdom as your spellcasting ability for them. Once you cast either spell, you can't cast it again with this trait until you finish a short or long rest. When you use this version of {@spell disguise self}, you can seem up to 3 feet shorter than normal, allowing you to more easily blend in with humans and elves."
          ],
          "type": "entries"
        },
        {
          "name": "Hidden Step",
          "entries": [
            "As a bonus action, you can magically turn {@condition invisible} until the start of your next turn or until you attack, make a damage roll, or force someone to make a saving throw. Once you use this trait, you can't use it again until you finish a short or long rest."
          ],
          "type": "entries"
        },
        {
          "name": "Powerful Build",
          "entries": [
            "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
          ],
          "type": "entries"
        },
        {
          "name": "Speech of Beast and Leaf",
          "entries": [
            "You have the ability to communicate in a limited manner with beasts and plants. They can understand the meaning of your words, though you have no special ability to understand them in return. You have advantage on all Charisma checks you make to influence them."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common, Elvish, and Giant."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Gallus",
      "source": "HWCS",
      "page": 14,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "wis": 2
        }
      ],
      "languageProficiencies": [
        {
          "other": true,
          "auran": true
        }
      ],
      "toolProficiencies": [
        {
          "choose": {
            "from": [
              "brewer's supplies",
              "carpenter's tools",
              "smith's tools"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "While ages fluctuate, gallus reach maturity around 18 and can live anywhere between 70 and 100 years."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Most gallus are lawful good. They are a salt-of-the-earth sort of folk who believe in justice, the value of hard work, and the importance of respecting others."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Gallus are the most varied of the birdfolk races, ranging from just under 4 feet to just over 5 feet tall, and showing many unique builds. The variety of shapes and sizes means they also encompass a variety of weights, but most average around 90 pounds. Your size is Medium."
          ]
        },
        {
          "name": "Speed",
          "type": "entries",
          "entries": [
            "Your base walking speed is 30 feet."
          ]
        },
        {
          "name": "Glide",
          "type": "entries",
          "entries": [
            "Using your feathered arms, you can slow your fall, and glide short distances. When falling you can use your reaction to spread your arms, stiffen your wing feathers, and slow your descent. While doing so, you continue to fall gently at a speed of 60 feet per round, taking no fall damage when you land. If you would fall at least 10 feet in this way, you may fly up to your movement speed in one direction you choose, although you cannot choose to move upwards, landing in the space you finish your movement. You cannot glide while carrying heavy weapons or wielding a shield (though you may drop any held items as part of your reaction to spread your arms). You cannot glide while wearing heavy armor, or if you are encumbered."
          ]
        },
        {
          "name": "Wing Flap",
          "type": "entries",
          "entries": [
            "As a bonus action, you can use your powerful feathered arms to propel yourself upward a distance equal to half your movement speed. You can use it in conjunction with a regular jump, but not while gliding."
          ]
        },
        {
          "name": "Communal",
          "type": "entries",
          "entries": [
            "Whenever you make an Intelligence ({@skill History}) check related to the history of your race, culture, or community, you are considered proficient in the {@skill History} skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."
          ]
        },
        {
          "name": "Militia Training",
          "type": "entries",
          "entries": [
            "You have proficiency in {@filter simple weapons|items|source=phb|category=basic|type=simple weapon;melee weapon=u~u~sand}."
          ]
        },
        {
          "name": "Of the People",
          "type": "entries",
          "entries": [
            "You gain proficiency with the {@filter artisan tools|items|source=phb|category=basic|type=artisan's tools} of your choice: {@item brewer's supplies|PHB}, {@item carpenter's tools|PHB}, or {@item smith's tools|PHB}."
          ]
        },
        {
          "name": "Languages",
          "type": "entries",
          "entries": [
            "You can speak, read, and write Birdfolk. You can also understand Auran, though you cannot speak it naturally."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Genasi",
      "source": "EEPC",
      "page": 9,
      "additionalSources": [
        {
          "source": "EGW",
          "page": 170
        }
      ],
      "otherSources": [
        {
          "source": "EGW",
          "page": 170
        }
      ],
      "reprintedAs": [
        "Genasi|MPMM"
      ],
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "con": 2
        }
      ],
      "heightAndWeight": {
        "baseHeight": 56,
        "heightMod": "2d10",
        "baseWeight": 110,
        "weightMod": "2d4"
      },
      "age": {
        "mature": 20,
        "max": 120
      },
      "languageProficiencies": [
        {
          "common": true,
          "primordial": true
        }
      ],
      "soundClip": {
        "type": "internal",
        "path": "races/genasi.mp3"
      },
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Genasi mature at about the same rate as humans and reach adulthood in their late teens. They live somewhat longer than humans do, up to 120 years."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Independent and self-reliant, genasi tend toward a neutral alignment."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Genasi are as varied as their mortal parents but are generally built like humans, standing anywhere from 5 feet to over 6 feet tall. Your size is Medium."
          ]
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Primordial. Primordial is a guttural language, filled with harsh syllables and hard consonants."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Genasi",
      "source": "MPMM",
      "page": 16,
      "lineage": "VRGR",
      "size": [
        "S",
        "M"
      ],
      "speed": 30,
      "age": {
        "max": 120
      },
      "darkvision": 60,
      "entries": [
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "You are Medium or Small. You choose the size when you select this race."
          ]
        },
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Giff",
      "source": "AAG",
      "page": 12,
      "lineage": "VRGR",
      "size": [
        "M"
      ],
      "speed": {
        "walk": 30,
        "swim": true
      },
      "traitTags": [
        "Powerful Build"
      ],
      "weaponProficiencies": [
        {
          "firearms": true
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Astral Spark",
          "entries": [
            "Your psychic connection to the Astral Plane enables you to mystically access a spark of divine power, which you can channel through your weapons. When you hit a target with a {@filter simple or martial weapon|items|source=phb|category=basic|type=martial weapon;simple weapon}, you can cause the target to take extra force damage equal to your proficiency bonus.",
            "You can use this trait a number of times equal to your proficiency bonus, but you can use it no more than once per turn. You regain all expended uses when you finish a long rest."
          ]
        },
        {
          "type": "entries",
          "name": "Firearms Mastery",
          "entries": [
            "You have a mystical connection to firearms that traces back to the gods of the giff, who delighted in such weapons. You have proficiency with all firearms and ignore the loading property of any firearm. In addition, attacking at long range with a firearm doesn't impose disadvantage on your attack roll."
          ]
        },
        {
          "type": "entries",
          "name": "Hippo Build",
          "entries": [
            "You have advantage on Strength-based ability checks and Strength saving throws. In addition, you count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Gith",
      "source": "MTF",
      "page": 96,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "int": 1
        }
      ],
      "age": {
        "mature": 20,
        "max": 100
      },
      "languageProficiencies": [
        {
          "common": true,
          "other": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Gith reach adulthood in their late teens and live for about a century."
          ]
        },
        {
          "name": "Size",
          "type": "entries",
          "entries": [
            "Gith are taller and leaner than humans, with most a slender 6 feet in height."
          ]
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Gith."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true
    },
    {
      "name": "Githyanki",
      "source": "MPMM",
      "page": 18,
      "lineage": "VRGR",
      "size": [
        "M"
      ],
      "speed": 30,
      "traitTags": [
        "Weapon Proficiency"
      ],
      "skillProficiencies": [
        {
          "any": 1
        }
      ],
      "toolProficiencies": [
        {
          "any": 1
        }
      ],
      "resist": [
        "psychic"
      ],
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "jump"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "misty step"
                ]
              }
            }
          },
          "ability": {
            "choose": [
              "int",
              "wis",
              "cha"
            ]
          },
          "known": {
            "1": [
              "mage hand#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Astral Knowledge",
          "entries": [
            "You can mystically access a reservoir of experiences of entities connected to the Astral Plane. Whenever you finish a long rest, you gain proficiency in one skill of your choice and with one weapon or tool of your choice, selected from the Player's Handbook, as you momentarily project your consciousness into the Astral Plane. These proficiencies last until the end of your next long rest."
          ]
        },
        {
          "type": "entries",
          "name": "Githyanki Psionics",
          "entries": [
            "You know the {@spell mage hand} cantrip, and the hand is {@condition invisible} when you cast the cantrip with this trait.",
            "Starting at 3rd level, you can cast the {@spell jump} spell with this trait. Starting at 5th level, you can also cast {@spell misty step} with it. Once you cast {@spell jump} or {@spell misty step} with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.",
            "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race). None of these spells require spell components when you cast them with this trait."
          ]
        },
        {
          "type": "entries",
          "name": "Psychic Resilience",
          "entries": [
            "You have resistance to psychic damage."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Githzerai",
      "source": "MPMM",
      "page": 19,
      "lineage": "VRGR",
      "size": [
        "M"
      ],
      "speed": 30,
      "resist": [
        "psychic"
      ],
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "shield"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "detect thoughts"
                ]
              }
            }
          },
          "ability": {
            "choose": [
              "int",
              "wis",
              "cha"
            ]
          },
          "known": {
            "1": [
              "mage hand#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Githzerai Psionics",
          "entries": [
            "You know the {@spell mage hand} cantrip, and the hand is {@condition invisible} when you cast the cantrip with this trait.",
            "Starting at 3rd level, you can cast the {@spell shield} spell with this trait. Starting at 5th level, you can also cast the {@spell detect thoughts} spell with it. Once you cast {@spell shield} or {@spell detect thoughts} spell with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.",
            "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race). None of these spells require spell components when you cast them with this trait."
          ]
        },
        {
          "type": "entries",
          "name": "Mental Discipline",
          "entries": [
            "Your innate psychic defenses grant you advantage on saving throws you make to avoid or end the {@condition charmed} and {@condition frightened} conditions on yourself."
          ]
        },
        {
          "type": "entries",
          "name": "Psychic Resilience",
          "entries": [
            "You have resistance to psychic damage."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Gnoll",
      "source": "DMG",
      "page": 282,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "str": 2,
          "int": -2
        }
      ],
      "darkvision": 60,
      "traitTags": [
        "Natural Weapon",
        "NPC Race"
      ],
      "entries": [
        {
          "name": "Bite",
          "entries": [
            "Your fanged maw is a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal piercing damage equal to {@damage 1d4} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike."
          ],
          "type": "entries"
        },
        {
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "type": "entries",
          "name": "Rampage",
          "entries": [
            "When you reduce a creature to 0 hit points with a melee attack on your turn, you can take a bonus action to move up to half your speed and make a bite attack."
          ]
        }
      ]
    },
    {
      "name": "Gnome",
      "source": "PHB",
      "page": 35,
      "srd": true,
      "size": [
        "S"
      ],
      "speed": 25,
      "ability": [
        {
          "int": 2
        }
      ],
      "heightAndWeight": {
        "baseHeight": 35,
        "heightMod": "2d4",
        "baseWeight": 35
      },
      "age": {
        "mature": 40,
        "max": 500
      },
      "darkvision": 60,
      "traitTags": [
        "Uncommon Race"
      ],
      "languageProficiencies": [
        {
          "common": true,
          "gnomish": true
        }
      ],
      "soundClip": {
        "type": "internal",
        "path": "races/gnome.mp3"
      },
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small."
          ]
        },
        {
          "name": "Darkvision",
          "entries": [
            "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Gnome Cunning",
          "entries": [
            "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Gnome (Deep)",
      "source": "DMG",
      "page": 282,
      "size": [
        "S"
      ],
      "speed": 20,
      "ability": [
        {
          "str": 1,
          "dex": 2
        }
      ],
      "darkvision": 120,
      "traitTags": [
        "NPC Race"
      ],
      "languageProficiencies": [
        {
          "gnomish": true,
          "terran": true,
          "undercommon": true
        }
      ],
      "additionalSpells": [
        {
          "ability": "int",
          "known": {
            "1": [
              "nondetection",
              "blindness/deafness",
              "blur",
              "disguise self"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Innate Spellcasting",
          "entries": [
            "You have an innate ability to cast the following spells, requiring no material components:",
            {
              "type": "list",
              "style": "list-hang-notitle",
              "items": [
                {
                  "type": "itemSpell",
                  "name": "At will:",
                  "entry": "{@spell nondetection} (self only)"
                },
                {
                  "type": "itemSpell",
                  "name": "1/day each:",
                  "entry": "{@spell blindness/deafness}, {@spell blur}, {@spell disguise self}"
                }
              ]
            },
            "Intelligence is your spellcasting ability for these spells."
          ],
          "type": "entries"
        },
        {
          "name": "Stone Camouflage",
          "entries": [
            "You have advantage on Dexterity ({@skill Stealth}) checks to hide in rocky terrain."
          ],
          "type": "entries"
        },
        {
          "name": "Gnome Cunning",
          "entries": [
            "You have advantage on Intelligence, Wisdom, and Charisma saving throws against magic."
          ],
          "type": "entries"
        },
        {
          "name": "Superior Darkvision",
          "entries": [
            "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "data": {
            "overwrite": "Darkvision"
          },
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Gnomish, Terran, and Undercommon."
          ],
          "type": "entries"
        }
      ]
    },
    {
      "name": "Goblin",
      "source": "DMG",
      "page": 282,
      "size": [
        "S"
      ],
      "speed": 30,
      "ability": [
        {
          "str": -2,
          "dex": 2
        }
      ],
      "darkvision": 60,
      "traitTags": [
        "NPC Race"
      ],
      "languageProficiencies": [
        {
          "common": true,
          "goblin": true
        }
      ],
      "entries": [
        {
          "name": "Nimble Escape",
          "entries": [
            "You can take the {@action Disengage} or {@action Hide} action as a bonus action on each of your turns."
          ],
          "type": "entries"
        },
        {
          "name": "Darkvision",
          "entries": [
            "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Goblin."
          ],
          "type": "entries"
        }
      ]
    },
    {
      "name": "Goblin",
      "source": "ERLW",
      "page": 26,
      "_copy": {
        "name": "Goblin",
        "source": "VGM",
        "_mod": {
          "entries": [
            {
              "mode": "appendArr",
              "items": {
                "name": "Alignment",
                "type": "entries",
                "entries": [
                  "In Eberron, goblins are usually neutral. They tend to look out for themselves, preferably without drawing unwanted attention from any larger, more powerful people."
                ]
              }
            },
            {
              "mode": "replaceArr",
              "replace": "Size",
              "items": {
                "name": "Size",
                "type": "entries",
                "entries": [
                  "Your size is Small."
                ]
              }
            }
          ]
        },
        "_preserve": {
          "reprintedAs": true
        }
      },
      "size": [
        "S"
      ],
      "traitTags": null,
      "hasFluffImages": true
    },
    {
      "name": "Goblin",
      "source": "GGR",
      "page": 16,
      "_copy": {
        "name": "Goblin",
        "source": "VGM",
        "_mod": {
          "entries": [
            {
              "mode": "appendArr",
              "items": {
                "name": "Alignment",
                "type": "entries",
                "entries": [
                  "Goblins are typically neutral evil, as they care only for their own needs. A few goblins might tend toward good or neutrality, but only rarely."
                ]
              }
            },
            {
              "mode": "replaceArr",
              "replace": "Age",
              "items": {
                "name": "Age",
                "type": "entries",
                "entries": [
                  "Goblins reach adulthood around age 8. They age noticeably faster than humans, and though few goblins live to old age, the most cautious rarely live longer than 60 years."
                ]
              }
            },
            {
              "mode": "replaceArr",
              "replace": "Languages",
              "items": {
                "name": "Languages",
                "type": "entries",
                "entries": [
                  "You can speak, read, and write Common and Goblin. In Ravnica, Goblin is a simplistic language with a limited vocabulary and fluid rules of grammar, unsuited for any sophisticated conversation."
                ]
              }
            }
          ]
        },
        "_preserve": {
          "reprintedAs": true
        }
      },
      "traitTags": null,
      "hasFluff": true
    },
    {
      "name": "Goblin",
      "source": "MPMM",
      "page": 20,
      "lineage": "VRGR",
      "creatureTypes": [
        "humanoid"
      ],
      "creatureTypeTags": [
        "goblinoid"
      ],
      "size": [
        "S"
      ],
      "speed": 30,
      "darkvision": 60,
      "entries": [
        {
          "type": "entries",
          "name": "Creature Type",
          "entries": [
            "You are a Humanoid. You are also considered a goblinoid for any prerequisite or effect that requires you to be a goblinoid."
          ]
        },
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were in dim light. You discern colors in that darkness only as shades of gray."
          ]
        },
        {
          "type": "entries",
          "name": "Fey Ancestry",
          "entries": [
            "You have advantage on saving throws you make to avoid or end the {@condition charmed} condition on yourself."
          ]
        },
        {
          "type": "entries",
          "name": "Fury of the Small",
          "entries": [
            "When you damage a creature with an attack or a spell and the creature's size is larger than yours, you can cause the attack or spell to deal extra damage to the creature. The extra damage equals your proficiency bonus.",
            "You can use this trait a number of times equal to your proficiency bonus, regaining all expended uses when you finish a long rest, and you can use it no more than once per turn."
          ]
        },
        {
          "type": "entries",
          "name": "Nimble Escape",
          "entries": [
            "You can take the {@action Disengage} or {@action Hide} action as a bonus action on each of your turns."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Goblin",
      "source": "PSZ",
      "page": 16,
      "otherSources": [
        {
          "source": "PSX",
          "page": 16
        }
      ],
      "size": [
        "S"
      ],
      "speed": 25,
      "age": {
        "mature": 12,
        "max": 50
      },
      "darkvision": 60,
      "traitTags": [
        "Natural Armor"
      ],
      "languageProficiencies": [
        {
          "common": true,
          "goblin": true
        }
      ],
      "resist": [
        "fire",
        "psychic"
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Goblins mature faster than humans, reaching adulthood at around age 12. They also age noticeably faster than humans, and even the most cautious goblins rarely live longer than 50 years."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Most goblins are wildly chaotic, though they have no particular inclination toward good or evil."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Goblins average about 3 feet tall and weigh about 40 pounds. Your size is Small."
          ]
        },
        {
          "name": "Darkvision",
          "entries": [
            "Thanks to your heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Goblin."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Goblin",
      "source": "VGM",
      "page": 119,
      "otherSources": [
        {
          "source": "EGW",
          "page": 174
        }
      ],
      "reprintedAs": [
        "Goblin|MPMM"
      ],
      "size": [
        "S"
      ],
      "speed": 30,
      "ability": [
        {
          "dex": 2,
          "con": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 41,
        "heightMod": "2d4",
        "baseWeight": 35
      },
      "age": {
        "mature": 8,
        "max": 60
      },
      "darkvision": 60,
      "traitTags": [
        "Monstrous Race"
      ],
      "languageProficiencies": [
        {
          "common": true,
          "goblin": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Goblins reach adulthood at age 8 and live up to 60 years."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Goblins are between 3 and 4 feet tall and weigh between 40 and 80 pounds. Your size is Small."
          ]
        },
        {
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Fury of the Small",
          "entries": [
            "When you damage a creature with an attack or a spell and the creature's size is larger than yours, you can cause the attack or spell to deal extra damage to the creature. The extra damage equals your level. Once you use this trait, you can't use it again until you finish a short or long rest."
          ],
          "type": "entries"
        },
        {
          "name": "Nimble Escape",
          "entries": [
            "You can take the {@action Disengage} or {@action Hide} action as a bonus action on each of your turns."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Goblin."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Goblin (Dankwood)",
      "source": "AWM",
      "page": 35,
      "_copy": {
        "name": "Goblin",
        "source": "VGM",
        "_mod": {
          "entries": [
            {
              "mode": "appendArr",
              "items": {
                "name": "Alignment",
                "type": "entries",
                "entries": [
                  "Dankwood goblins are typically neutral or neutral good, though some mischievous dankwood goblins are chaotic neutral."
                ]
              }
            },
            {
              "mode": "replaceArr",
              "replace": "Fury of the Small",
              "items": {
                "name": "Speak with Small Beasts",
                "type": "entries",
                "entries": [
                  "Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Dankwood goblins love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets."
                ]
              }
            }
          ]
        },
        "_preserve": {
          "reprintedAs": true
        }
      },
      "ability": [
        {
          "dex": 2,
          "wis": 1
        }
      ],
      "heightAndWeight": null,
      "hasFluff": true
    },
    {
      "name": "Goliath",
      "source": "MPMM",
      "page": 21,
      "lineage": "VRGR",
      "size": [
        "M"
      ],
      "speed": 30,
      "traitTags": [
        "Powerful Build"
      ],
      "skillProficiencies": [
        {
          "athletics": true
        }
      ],
      "resist": [
        "cold"
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Little Giant",
          "entries": [
            "You have proficiency in the {@skill Athletics} skill, and you count as one size larger when determining your carrying weight and the weight you can push, drag, or lift."
          ]
        },
        {
          "type": "entries",
          "name": "Mountain Born",
          "entries": [
            "You have resistance to cold damage. You also naturally acclimate to high altitudes, even if you've never been to one. This includes elevations above 20,000 feet."
          ]
        },
        {
          "type": "entries",
          "name": "Stone's Endurance",
          "entries": [
            "You can supernaturally draw on unyielding stone to shrug off harm. When you take damage, you can use your reaction to roll a {@dice d12}. Add your Constitution modifier to the number rolled and reduce the damage by that total.",
            "You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Goliath",
      "source": "VGM",
      "page": 108,
      "otherSources": [
        {
          "source": "EEPC",
          "page": 10
        },
        {
          "source": "EGW",
          "page": 175
        },
        {
          "source": "IDRotF"
        }
      ],
      "reprintedAs": [
        "Goliath|MPMM"
      ],
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "str": 2,
          "con": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 74,
        "heightMod": "2d10",
        "baseWeight": 200,
        "weightMod": "2d6"
      },
      "age": {
        "mature": 20,
        "max": 100
      },
      "traitTags": [
        "Powerful Build"
      ],
      "skillProficiencies": [
        {
          "athletics": true
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "giant": true
        }
      ],
      "resist": [
        "cold"
      ],
      "soundClip": {
        "type": "internal",
        "path": "races/goliath.mp3"
      },
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Goliaths have lifespans comparable to humans. They enter adulthood in their late teens and usually live less than a century."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Goliaths are between 7 and 8 feet tall and weigh between 280 and 340 pounds. Your size is Medium."
          ]
        },
        {
          "name": "Natural Athlete",
          "entries": [
            "You have proficiency in the {@skill Athletics} skill."
          ],
          "type": "entries"
        },
        {
          "name": "Stone's Endurance",
          "entries": [
            "You can focus yourself to occasionally shrug off injury. When you take damage, you can use your reaction to roll a {@dice d12}. Add your Constitution modifier to the number rolled, and reduce the damage by that total. After you use this trait, you can't use it again until you finish a short or long rest."
          ],
          "type": "entries"
        },
        {
          "name": "Powerful Build",
          "entries": [
            "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
          ],
          "type": "entries"
        },
        {
          "name": "Mountain Born",
          "entries": [
            "You have resistance to cold damage. You're also acclimated to high altitude, including elevations above 20,000 feet."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Giant."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Grimlock",
      "source": "DMG",
      "page": 282,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "str": 2,
          "cha": -2
        }
      ],
      "blindsight": 30,
      "traitTags": [
        "NPC Race"
      ],
      "languageProficiencies": [
        {
          "undercommon": true
        }
      ],
      "entries": [
        {
          "name": "Blindsight",
          "entries": [
            "You have no eyes, and cannot be {@condition blinded}. You can perceive your surroundings within 30 ft., or 10 ft. while {@condition deafened}. You are considered blind beyond this radius."
          ],
          "type": "entries"
        },
        {
          "type": "entries",
          "name": "Keen Hearing and Smell",
          "entries": [
            "You have advantage on Wisdom ({@skill Perception}) checks that rely on hearing or smell."
          ]
        },
        {
          "type": "entries",
          "name": "Stone Camouflage",
          "entries": [
            "You have advantage on Dexterity ({@skill Stealth}) checks made to hide in rocky terrain."
          ]
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Undercommon."
          ],
          "type": "entries"
        }
      ]
    },
    {
      "name": "Grung",
      "source": "OGA",
      "page": 4,
      "size": [
        "S"
      ],
      "speed": {
        "walk": 25,
        "climb": 25
      },
      "ability": [
        {
          "dex": 2,
          "con": 1
        }
      ],
      "age": {
        "mature": 1,
        "max": 50
      },
      "traitTags": [
        "Amphibious"
      ],
      "skillProficiencies": [
        {
          "perception": true
        }
      ],
      "languageProficiencies": [
        {
          "other": true
        }
      ],
      "immune": [
        "poison"
      ],
      "conditionImmune": [
        "poisoned"
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Grungs mature to adulthood in a single year, but have been known to live up to 50 years."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Most grungs are lawful, having been raised in a strict caste system. They tend toward evil as well, coming from a culture where social advancement occurs rarely, and most often because another member of your army has died and there is no one else of that caste to fill the vacancy."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Grungs stand between 2½ and 3½ feet tall and average about 30 pounds. Your size is Small."
          ]
        },
        {
          "type": "entries",
          "name": "Arboreal Alertness",
          "entries": [
            "You have proficiency in the {@skill Perception} skill."
          ]
        },
        {
          "type": "entries",
          "name": "Amphibious",
          "entries": [
            "You can breathe air and water."
          ]
        },
        {
          "type": "entries",
          "name": "Poison Immunity",
          "entries": [
            "You're immune to poison damage and the {@condition poisoned} condition."
          ]
        },
        {
          "type": "entries",
          "name": "Poisonous Skin",
          "entries": [
            "Any creature that grapples you or otherwise comes into direct contact with your skin must succeed on a DC 12 Constitution saving throw or become {@condition poisoned} for 1 minute. A {@condition poisoned} creature no longer in direct contact with you can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
            "You can also apply this poison to any piercing weapon as part of an attack with that weapon, though when you hit the poison reacts differently. The target must succeed on a DC 12 Constitution saving throw or take {@dice 2d4} poison damage."
          ]
        },
        {
          "type": "entries",
          "name": "Standing Leap",
          "entries": [
            "Your long jump is up to 25 feet and your high jump is up to 15 feet, with or without a running start."
          ]
        },
        {
          "type": "entries",
          "name": "Water Dependency",
          "entries": [
            "If you fail to immerse yourself in water for at least 1 hour during a day, you suffer one level of {@condition exhaustion} at the end of that day. You can only recover from this {@condition exhaustion} through magic or by immersing yourself in water for at least 1 hour."
          ]
        },
        {
          "type": "entries",
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Grung."
          ]
        }
      ]
    },
    {
      "name": "Hadozee",
      "source": "AAG",
      "page": 13,
      "lineage": "VRGR",
      "size": [
        "S",
        "M"
      ],
      "speed": {
        "walk": 30,
        "climb": true
      },
      "entries": [
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "You are Medium or Small. You choose the size when you select this race."
          ]
        },
        {
          "type": "entries",
          "name": "Dexterous Feet",
          "entries": [
            "As a bonus action, you can use your feet to manipulate an object, open or close a door or container, or pick up or set down a Tiny object."
          ]
        },
        {
          "type": "entries",
          "name": "Glide",
          "entries": [
            "When you fall at least 10 feet above the ground, you can use your reaction to extend your skin membranes to glide horizontally a number of feet equal to your walking speed, and you take 0 damage from the fall. You determine the direction of the glide."
          ]
        },
        {
          "type": "entries",
          "name": "Hadozee Dodge",
          "entries": [
            "The magic that runs in your veins heightens your natural defenses. When you take damage, you can use your reaction to roll a {@dice d6}. Add your proficiency bonus to the number rolled, and reduce the damage you take by an amount equal to that total (minimum of 0 damage).",
            "You can use this trait a number of times equal to your proficiency bonus. You regain all expended uses when you finish a long rest."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Half-Elf",
      "source": "PHB",
      "page": 38,
      "srd": true,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "cha": 2,
          "choose": {
            "from": [
              "str",
              "dex",
              "con",
              "int",
              "wis"
            ],
            "count": 2
          }
        }
      ],
      "heightAndWeight": {
        "baseHeight": 57,
        "heightMod": "2d8",
        "baseWeight": 110,
        "weightMod": "2d4"
      },
      "age": {
        "mature": 20,
        "max": 180
      },
      "darkvision": 60,
      "traitTags": [
        "Uncommon Race"
      ],
      "skillProficiencies": [
        {
          "any": 2
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "elvish": true,
          "anyStandard": 1
        }
      ],
      "soundClip": {
        "type": "internal",
        "path": "races/half-elf.mp3"
      },
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium."
          ]
        },
        {
          "name": "Darkvision",
          "entries": [
            "Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Fey Ancestry",
          "entries": [
            "You have advantage on saving throws against being {@condition charmed}, and magic can't put you to sleep."
          ],
          "type": "entries"
        },
        {
          "name": "Skill Versatility",
          "entries": [
            "You gain proficiency in two skills of your choice."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common, Elvish, and one extra language of your choice."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Half-Orc",
      "source": "PHB",
      "page": 40,
      "srd": true,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "str": 2,
          "con": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 58,
        "heightMod": "2d10",
        "baseWeight": 140,
        "weightMod": "2d6"
      },
      "age": {
        "mature": 14,
        "max": 75
      },
      "darkvision": 60,
      "traitTags": [
        "Uncommon Race"
      ],
      "skillProficiencies": [
        {
          "intimidation": true
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "orc": true
        }
      ],
      "soundClip": {
        "type": "internal",
        "path": "races/half-orc.mp3"
      },
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium."
          ]
        },
        {
          "name": "Darkvision",
          "entries": [
            "Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Menacing",
          "entries": [
            "You gain proficiency in the {@skill Intimidation} skill."
          ],
          "type": "entries"
        },
        {
          "name": "Relentless Endurance",
          "entries": [
            "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest."
          ],
          "type": "entries"
        },
        {
          "name": "Savage Attacks",
          "entries": [
            "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Halfling",
      "source": "PHB",
      "page": 26,
      "srd": true,
      "basicRules": true,
      "size": [
        "S"
      ],
      "speed": 25,
      "ability": [
        {
          "dex": 2
        }
      ],
      "heightAndWeight": {
        "baseHeight": 31,
        "heightMod": "2d4",
        "baseWeight": 35
      },
      "age": {
        "mature": 20,
        "max": 250
      },
      "languageProficiencies": [
        {
          "common": true,
          "halfling": true
        }
      ],
      "soundClip": {
        "type": "internal",
        "path": "races/halfling.mp3"
      },
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small."
          ]
        },
        {
          "name": "Lucky",
          "entries": [
            "When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."
          ],
          "type": "entries"
        },
        {
          "name": "Brave",
          "entries": [
            "You have advantage on saving throws against being {@condition frightened}."
          ],
          "type": "entries"
        },
        {
          "name": "Halfling Nimbleness",
          "entries": [
            "You can move through the space of any creature that is of a size larger than yours."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Halfling. The Halfling language isn't secret, but halflings are loath to share it with others. They write very little, so they don't have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Harengon",
      "source": "MPMM",
      "page": 22,
      "lineage": "VRGR",
      "size": [
        "S",
        "M"
      ],
      "speed": 30,
      "skillProficiencies": [
        {
          "perception": true
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "You are Medium or Small. You choose the size when you select this race."
          ]
        },
        {
          "type": "entries",
          "name": "Hare-Trigger",
          "entries": [
            "You can add your proficiency bonus to your initiative rolls."
          ]
        },
        {
          "type": "entries",
          "name": "Leporine Senses",
          "entries": [
            "You have proficiency in the {@skill Perception} skill."
          ]
        },
        {
          "type": "entries",
          "name": "Lucky Footwork",
          "entries": [
            "When you fail a Dexterity saving throw, you can use your reaction to roll a {@dice d4} and add it to the save, potentially turning the failure into a success. You can't use this reaction if you're {@condition prone} or your speed is 0."
          ]
        },
        {
          "type": "entries",
          "name": "Rabbit Hop",
          "entries": [
            "As a bonus action, you can jump a number of feet equal to five times your proficiency bonus, without provoking opportunity attacks. You can use this trait only if your speed is greater than 0. You can use it a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Harengon",
      "source": "WBtW",
      "page": 13,
      "reprintedAs": [
        "Harengon|MPMM"
      ],
      "lineage": "VRGR",
      "size": [
        "S",
        "M"
      ],
      "speed": 30,
      "skillProficiencies": [
        {
          "perception": true
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "You are Medium or Small. You choose the size when you select this race."
          ]
        },
        {
          "type": "entries",
          "name": "Hare-Trigger",
          "entries": [
            "You can add your proficiency bonus to your initiative rolls."
          ]
        },
        {
          "type": "entries",
          "name": "Leporine Senses",
          "entries": [
            "You have proficiency in the {@skill Perception} skill."
          ]
        },
        {
          "type": "entries",
          "name": "Lucky Footwork",
          "entries": [
            "When you fail a Dexterity saving throw, you can use your reaction to roll a {@dice d4} and add it to the save, potentially turning the failure into a success. You can't use this reaction if you're {@condition prone} or your speed is 0."
          ]
        },
        {
          "type": "entries",
          "name": "Rabbit Hop",
          "entries": [
            "As a bonus action, you can jump a number of feet equal to five times your proficiency bonus, without provoking opportunity attacks. You can use this trait only if your speed is greater than 0. You can use it a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Hedge",
      "source": "HWCS",
      "page": 24,
      "size": [
        "S"
      ],
      "speed": {
        "walk": 25,
        "burrow": 15
      },
      "ability": [
        {
          "cha": 2,
          "wis": 1
        }
      ],
      "traitTags": [
        "Natural Armor"
      ],
      "languageProficiencies": [
        {
          "other": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Hedges take longer to mature than most other races, reaching adulthood around 20 years. They also live for a long time, with many reaching 120 years or more."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Hedges are compassionate, empathetic, and diplomatic, tending towards good alignments. They also favor neutral alignments, as hedges have a great respect for the balance of nature."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Hedges have short, rounded body shapes, standing between 3 and 4 feet in height, and weighing between 40 and 70 pounds. Your size is Small."
          ]
        },
        {
          "name": "Speed",
          "type": "entries",
          "entries": [
            "Your base walking speed is 25 feet."
          ]
        },
        {
          "name": "Natural Burrowers",
          "type": "entries",
          "entries": [
            "You have a burrowing speed of 15 feet. You are capable of burrowing through soil, but are unable to dig through anything more substantial with just your clawed hands."
          ]
        },
        {
          "name": "Spiny Quills",
          "type": "entries",
          "entries": [
            "The backs of hedges are covered with spiny quills, which makes it impossible for hedges to wear armor. These quills provide exceptional protection, therefore you have a base armor class of 14 + your Dexterity modifier. Even though you can't wear armor, you can still benefit from the armor class bonus provided by shields so long as you are proficient with them."
          ]
        },
        {
          "name": "Curl Up",
          "type": "entries",
          "entries": [
            "You can use your action to curl up, exposing attackers to a wall of your toughened quills. While curled up you cannot move, attack, or cast spells with somatic components, and your base armor class becomes 19. You cannot benefit from any Dexterity bonus to armor class while curled up, but you can still use shields.",
            "Any creature that misses you with a melee attack while you are curled up takes {@dice 2d4} points of piercing damage from your sharp quills. If a creature hits you while you are curled up, you are knocked {@condition prone} in your space at the end of the turn. You may uncurl yourself at any point during your turn."
          ]
        },
        {
          "name": "Forest Magic",
          "type": "entries",
          "entries": [
            "You have a deep connection to the magic of the Wood. You know the {@spell druidcraft} cantrip. Additionally, you can cast {@spell animal messenger} as a 2nd level spell once with this trait, and regain the ability to do so after a short or long rest. Charisma is your spellcasting ability for these spells."
          ]
        },
        {
          "name": "Speak With Bugs",
          "type": "entries",
          "entries": [
            "Through sounds and gestures, you can communicate simple ideas with creatures of the beast subtype that represent insects, spiders, worms, and other creepy crawlies, regardless of their size."
          ]
        },
        {
          "name": "Languages",
          "type": "entries",
          "entries": [
            "You can speak, read, and write Birdfolk and Hedge."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Hexblood",
      "source": "VRGR",
      "page": 18,
      "lineage": "VRGR",
      "creatureTypes": [
        "fey"
      ],
      "size": [
        "S",
        "M"
      ],
      "speed": 30,
      "darkvision": 60,
      "skillProficiencies": [
        {
          "any": 2
        }
      ],
      "additionalSpells": [
        {
          "ability": {
            "choose": [
              "int",
              "wis",
              "cha"
            ]
          },
          "known": {
            "1": [
              "disguise self",
              "hex"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Creature Type",
          "entries": [
            "You are a Fey."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "You are Medium or Small. You choose the size when you gain this lineage."
          ]
        },
        {
          "type": "entries",
          "name": "Ancestral Legacy",
          "entries": [
            "If you replace a race with this lineage, you can keep the following elements of that race: any skill proficiencies you gained from it and any climbing, flying, or swimming speed you gained from it.",
            "If you don't keep any of those elements or you choose this lineage at character creation, you gain proficiency in two skills of your choice."
          ]
        },
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness as shades of gray."
          ]
        },
        {
          "type": "entries",
          "name": "Eerie Token",
          "entries": [
            "As a bonus action, you can harmlessly remove a lock of your hair, one of your nails, or one of your teeth. This token is imbued with magic until you finish a long rest. While the token is imbued in this way, you can take these actions:",
            {
              "type": "list",
              "style": "list-hang-notitle",
              "items": [
                {
                  "type": "item",
                  "name": "Telepathic Message",
                  "entry": "As an action, you can send a telepathic message to the creature holding or carrying the token, as long as you are within 10 miles of it. The message can contain up to twenty-five words."
                },
                {
                  "type": "item",
                  "name": "Remote Viewing",
                  "entry": "If you are within 10 miles of the token, you can enter a trance as an action. The trance lasts for 1 minute, but it ends early if you dismiss it (no action required) or are {@condition incapacitated}. During this trance, you can see and hear from the token as if you were located where it is. While you are using your senses at the token's location, you are {@condition blinded} and {@condition deafened} in regard to your own surroundings. When the trance ends, the token is harmlessly destroyed."
                }
              ]
            },
            "Once you create a token using this feature, you can't do so again until you finish a long rest, at which point your missing part regrows."
          ]
        },
        {
          "type": "entries",
          "name": "Hex Magic",
          "entries": [
            "You can cast the {@spell disguise self} and {@spell hex} spells with this trait. Once you cast either of these spells with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast these spells using any spell slots you have.",
            "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells (choose the ability when you gain this lineage).",
            {
              "type": "inset",
              "name": "Becoming a Hag",
              "entries": [
                "Hags can undertake a ritual to irreversibly transform a hexblood they created into a new hag, either one of their own kind or that embodies the hexblood's nature. This requires that both the hag and hexblood be in the same place and consent to the lengthy ritual\u2014circumstances most hexbloods shun but might come to accept over the course of centuries. Once a hexblood undergoes this irreversible ritual, they emerge as a hag NPC no longer under the control of the hexblood's player, unless the DM rules otherwise."
              ]
            }
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Hobgoblin",
      "source": "DMG",
      "page": 282,
      "size": [
        "M"
      ],
      "speed": 30,
      "darkvision": 60,
      "traitTags": [
        "NPC Race"
      ],
      "languageProficiencies": [
        {
          "common": true,
          "goblin": true
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Martial Advantage",
          "entries": [
            "Once per turn, you can deal an extra {@dice 2d6} damage to a creature you hit with a weapon attack if that creature is within 5 ft. of an ally of yours that isn't {@condition incapacitated}."
          ]
        },
        {
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Goblin."
          ],
          "type": "entries"
        }
      ]
    },
    {
      "name": "Hobgoblin",
      "source": "ERLW",
      "page": 26,
      "_copy": {
        "name": "Hobgoblin",
        "source": "VGM",
        "_mod": {
          "entries": [
            {
              "mode": "appendArr",
              "items": {
                "name": "Alignment",
                "entries": [
                  "Hobgoblin society in Eberron is shaped by the ideal of a strict code of honor and rigid martial discipline. Most hobgoblins are lawful, tending toward harsh enforcement of their laws."
                ],
                "type": "entries"
              }
            },
            {
              "mode": "replaceArr",
              "replace": "Size",
              "items": {
                "name": "Size",
                "entries": [
                  "Your size is Medium."
                ],
                "type": "entries"
              }
            }
          ]
        },
        "_preserve": {
          "reprintedAs": true
        }
      },
      "hasFluffImages": true
    },
    {
      "name": "Hobgoblin",
      "source": "MPMM",
      "page": 23,
      "lineage": "VRGR",
      "creatureTypes": [
        "humanoid"
      ],
      "creatureTypeTags": [
        "goblinoid"
      ],
      "size": [
        "M"
      ],
      "speed": 30,
      "darkvision": 60,
      "entries": [
        {
          "type": "entries",
          "name": "Creature Type",
          "entries": [
            "You are a Humanoid.You are also considered a goblinoid for any prerequisite or effect that requires you to be a goblinoid."
          ]
        },
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
          ]
        },
        {
          "type": "entries",
          "name": "Fey Ancestry",
          "entries": [
            "You have advantage on saving throws you make to avoid or end the {@condition charmed} condition on yourself."
          ]
        },
        {
          "type": "entries",
          "name": "Fey Gift",
          "entries": [
            "You can use this trait to take the {@action Help} action as a bonus action, and you can do so a number of times equal to your proficiency bonus. You regain all expended uses when you finish a long rest.",
            "Starting at 3rd level, choose one of the options below each time you take the {@action Help} action with this trait:",
            {
              "type": "list",
              "items": [
                {
                  "type": "item",
                  "name": "Hospitality",
                  "entry": "You and the creature you help each gain a number of temporary hit points equal to {@dice 1d6} plus your proficiency bonus."
                },
                {
                  "type": "item",
                  "name": "Passage",
                  "entry": "You and the creature you help each increase your walking speeds by 10 feet until the start of your next turn."
                },
                {
                  "type": "item",
                  "name": "Spite",
                  "entry": "Until the start of your next turn, the first time the creature you help hits a target with an attack roll, that target has disadvantage on the next attack roll it makes within the next minute."
                }
              ],
              "style": "list-hang-notitle"
            }
          ]
        },
        {
          "type": "entries",
          "name": "Fortune from the Many",
          "entries": [
            "If you miss with an attack roll or fail an ability check or a saving throw, you can draw on your bonds of reciprocity to gain a bonus to the roll equal to the number of allies you can see within 30 feet of you (maximum bonus of +3). You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Hobgoblin",
      "source": "VGM",
      "page": 119,
      "otherSources": [
        {
          "source": "EGW",
          "page": 175
        }
      ],
      "reprintedAs": [
        "Hobgoblin|MPMM"
      ],
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "con": 2,
          "int": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 56,
        "heightMod": "2d10",
        "baseWeight": 110,
        "weightMod": "2d4"
      },
      "age": {
        "mature": 20,
        "max": 100
      },
      "darkvision": 60,
      "traitTags": [
        "Monstrous Race"
      ],
      "languageProficiencies": [
        {
          "common": true,
          "goblin": true
        }
      ],
      "weaponProficiencies": [
        {
          "choose": {
            "fromFilter": "type=martial weapon|miscellaneous=mundane",
            "count": 2
          }
        }
      ],
      "armorProficiencies": [
        {
          "light": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Hobgoblins mature at the same rate as humans and have lifespans similar in length to theirs."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Hobgoblins are between 5 and 6 feet tall and weigh between 150 and 200 pounds. Your size is Medium."
          ]
        },
        {
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Martial Training",
          "entries": [
            "You are proficient with two {@filter martial weapons|items|source=phb|category=basic|type=martial weapon} of your choice and with light armor."
          ],
          "type": "entries"
        },
        {
          "name": "Saving Face",
          "entries": [
            "Hobgoblins are careful not to show weakness in front of their allies, for fear of losing status. If you miss with an attack roll or fail an ability check or a saving throw, you can gain a bonus to the roll equal to the number of allies you can see within 30 feet of you (maximum bonus of +5). Once you use this trait, you can't use it again until you finish a short or long rest."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Goblin."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Human",
      "source": "PHB",
      "page": 29,
      "srd": true,
      "basicRules": true,
      "size": [
        "M"
      ],
      "speed": 30,
      "heightAndWeight": {
        "baseHeight": 56,
        "heightMod": "2d10",
        "baseWeight": 110,
        "weightMod": "2d4"
      },
      "age": {
        "mature": 20,
        "max": 100
      },
      "languageProficiencies": [
        {
          "common": true,
          "anyStandard": 1
        }
      ],
      "soundClip": {
        "type": "internal",
        "path": "races/human.mp3"
      },
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Humans reach adulthood in their late teens and live less than a century."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium."
          ]
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Human (Amonkhet)",
      "source": "PSA",
      "page": 14,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "choose": {
            "from": [
              "str",
              "dex",
              "con",
              "int",
              "wis",
              "cha"
            ],
            "count": 2
          }
        }
      ],
      "age": {
        "mature": 20,
        "max": 100
      },
      "feats": [
        {
          "any": 1
        }
      ],
      "skillProficiencies": [
        {
          "any": 1
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "anyStandard": 1
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Humans reach adulthood in their late teens. Most human initiates have completed the trials and found a glorious or inglorious death before they turn 30. Viziers can enjoy longer service to their gods, in theory living up to a century."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Humans tend toward no particular alignment. The best and the worst are found among them."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium"
          ]
        },
        {
          "name": "Skills",
          "entries": [
            "You gain proficiency in one skill of your choice."
          ],
          "type": "entries"
        },
        {
          "name": "Feat",
          "entries": [
            "You gain one {@5etools feat|feats.html} of your choice."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and one extra language of your choice."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Human (Innistrad)",
      "source": "PSI",
      "page": 8,
      "size": [
        "M"
      ],
      "speed": 30,
      "age": {
        "mature": 20,
        "max": 100
      },
      "languageProficiencies": [
        {
          "common": true,
          "anyStandard": 1
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Humans reach adulthood in their late teens and live less than a century."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Humans tend toward no particular alignment."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium."
          ]
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and one extra language of your choice."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Human (Ixalan)",
      "source": "PSX",
      "page": 11,
      "_copy": {
        "name": "Human",
        "source": "PHB",
        "_mod": {
          "entries": [
            {
              "mode": "appendArr",
              "items": {
                "name": "Alignment",
                "type": "entries",
                "entries": [
                  "Humans tend toward no particular alignment. The best and the worst are found among them."
                ]
              }
            },
            {
              "mode": "appendArr",
              "items": {
                "name": "Speed",
                "type": "entries",
                "entries": [
                  "Your base walking speed is 30 feet."
                ]
              }
            },
            {
              "mode": "replaceArr",
              "replace": "Languages",
              "items": {
                "name": "Languages",
                "type": "entries",
                "entries": [
                  "You can speak, read, and write {@language Common} and one extra language of your choice. Or, if your campaign uses the optional rules for languages found in the previous section, your national origin determines your native language: {@language Itzocan|PSX} for the Sun Empire, {@language Coalition pidgin|PSX} for the Brazen Coalition, or {@language Vampire|PSX} for the Legion of Dusk. You still speak one additional language of your choice, and {@language Common Trade Pidgin|PSX|Common} if it exists in your campaign."
                ]
              }
            }
          ]
        }
      },
      "ability": [
        {
          "str": 1,
          "dex": 1,
          "con": 1,
          "int": 1,
          "wis": 1,
          "cha": 1
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "anyStandard": 1
        },
        {
          "common": true,
          "other": true,
          "anyStandard": 1
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Human (Kaladesh)",
      "source": "PSK",
      "page": 22,
      "_copy": {
        "name": "Human",
        "source": "PHB",
        "_mod": {
          "entries": [
            {
              "mode": "appendArr",
              "items": {
                "name": "Alignment",
                "type": "entries",
                "entries": [
                  "Humans tend toward no particular alignment."
                ]
              }
            },
            {
              "mode": "appendArr",
              "items": {
                "name": "Speed",
                "type": "entries",
                "entries": [
                  "Your base walking speed is 30 feet."
                ]
              }
            },
            {
              "mode": "replaceArr",
              "replace": "Languages",
              "items": {
                "name": "Languages",
                "type": "entries",
                "entries": [
                  "You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Dwarvish curses, Elvish musical expressions, {@race Vedalken|PSK} scholarly jargon, and so on."
                ]
              }
            }
          ]
        }
      },
      "ability": [
        {
          "str": 1,
          "dex": 1,
          "con": 1,
          "int": 1,
          "wis": 1,
          "cha": 1
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Human (Zendikar)",
      "source": "PSZ",
      "page": 9,
      "_copy": {
        "name": "Human",
        "source": "PHB",
        "_mod": {
          "entries": {
            "mode": "replaceArr",
            "replace": "Languages",
            "items": {
              "name": "Languages",
              "entries": [
                "You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: vampire curses, Elvish musical expressions, merfolk scholarly jargon, and so on."
              ],
              "type": "entries"
            }
          }
        }
      },
      "ability": [
        {
          "str": 1,
          "dex": 1,
          "con": 1,
          "int": 1,
          "wis": 1,
          "cha": 1
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Jerbeen",
      "source": "HWCS",
      "page": 27,
      "size": [
        "S"
      ],
      "speed": 30,
      "ability": [
        {
          "dex": 2,
          "cha": 1
        }
      ],
      "languageProficiencies": [
        {
          "other": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Jerbeens grow quickly, reaching maturity around 5 years. They are the shortest lived of all the humblefolk races, living just about 40 years."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Being small and facing many threats in the world, jerbeens are sensitive to the feelings of others, and tend towards good alignments. They also lean more towards lawful alignments due to their co-operative nature."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Jerbeens have incredibly small and light bodies, standing between 2 and 3 feet tall, and weighing between 20 and 40 pounds. Your size is Small."
          ]
        },
        {
          "name": "Speed",
          "type": "entries",
          "entries": [
            "Your base walking speed is 30 feet."
          ]
        },
        {
          "name": "Standing Leap",
          "type": "entries",
          "entries": [
            "Your base long jump is 30 feet, and your base high jump is 15 feet, with or without a running start."
          ]
        },
        {
          "name": "Nimbleness",
          "type": "entries",
          "entries": [
            "You can move through the space of any creature that is of a size larger than yours."
          ]
        },
        {
          "name": "Take Heart",
          "type": "entries",
          "entries": [
            "You have advantage on Strength saving throws and saving throws against being frightened as long as you are within 5 feet of an ally who isn't {@condition frightened} or {@condition incapacitated} that you can both see and hear."
          ]
        },
        {
          "name": "Team Tactics",
          "type": "entries",
          "entries": [
            "You can use the {@action Help} action as a bonus action."
          ]
        },
        {
          "name": "Languages",
          "type": "entries",
          "entries": [
            "You can speak, read, and write Birdfolk and Jerbeen."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Kalashtar",
      "source": "ERLW",
      "page": 29,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "wis": 2,
          "cha": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 64,
        "heightMod": "2d6",
        "baseWeight": 110,
        "weightMod": "1d6"
      },
      "age": {
        "mature": 20,
        "max": 100
      },
      "languageProficiencies": [
        {
          "common": true,
          "other": true,
          "anyStandard": 1
        }
      ],
      "resist": [
        "psychic"
      ],
      "entries": [
        {
          "name": "Age",
          "entries": [
            "Kalashtar mature and age at the same rate as humans."
          ],
          "type": "entries"
        },
        {
          "type": "entries",
          "name": "Alignment",
          "entries": [
            "The noble spirit tied to a kalashtar drives it toward lawful and good behavior. Most kalashtar combine strong self-discipline with compassion for all beings, but some kalashtar resist the virtuous influence of their spirit."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Your size is Medium."
          ]
        },
        {
          "type": "entries",
          "name": "Dual Mind",
          "entries": [
            "You have advantage on all Wisdom saving throws."
          ]
        },
        {
          "type": "entries",
          "name": "Mental Discipline",
          "entries": [
            "You have resistance to psychic damage."
          ]
        },
        {
          "type": "entries",
          "name": "Mind Link",
          "entries": [
            "You can speak telepathically to any creature you can see, provided the creature is within a number of feet of you equal to 10 times your level. You don't need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language.",
            "When you're using this trait to speak telepathically to a creature, you can use your action to give that creature the ability to speak telepathically with you for 1 hour or until you end this effect as an action. To use this ability, the creature must be able to see you and must be within this trait's range. You can give this ability to only one creature at a time; giving it to a creature takes it away from another creature who has it."
          ]
        },
        {
          "type": "entries",
          "name": "Severed from Dreams",
          "entries": [
            "Kalashtar sleep, but they don't connect to the plane of dreams as other creatures do. Instead, their minds draw from the memories of their otherworldly spirit while they sleep. As such, you are immune to spells and other magical effects that require you to dream, like {@spell dream}, but not to spells and other magical effects that put you to sleep, like {@spell sleep}."
          ]
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common, Quori, and one other language of your choice."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Kender",
      "source": "DSotDQ",
      "page": 27,
      "lineage": "VRGR",
      "size": [
        "S"
      ],
      "speed": 30,
      "skillProficiencies": [
        {
          "choose": {
            "from": [
              "insight",
              "investigation",
              "sleight of hand",
              "stealth",
              "survival"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Fearless",
          "entries": [
            "You have advantage on saving throws you make to avoid or end the {@condition frightened} condition on yourself. When you fail a saving throw to avoid or end the {@condition frightened} condition on yourself, you can choose to succeed instead. Once you succeed on a saving throw in this way, you can't do so again until you finish a long rest."
          ]
        },
        {
          "type": "entries",
          "name": "Kender Curiosity",
          "entries": [
            "Thanks to the mystical origin of your people, you gain proficiency with one of the following skills of your choice: {@skill Insight}, {@skill Investigation}, {@skill Sleight of Hand}, {@skill Stealth}, or {@skill Survival}."
          ]
        },
        {
          "type": "entries",
          "name": "Taunt",
          "entries": [
            "You have an extraordinary ability to fluster creatures. As a bonus action, you can unleash a string of provoking words at a creature within 60 feet of yourself that can hear and understand you. The target must succeed on a Wisdom saving throw, or it has disadvantage on attack rolls against targets other than you until the start of your next turn. The DC equals 8 + your proficiency bonus + your Intelligence, Wisdom, or Charisma modifier (choose when you select this race).",
            "You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Kenku",
      "source": "DMG",
      "page": 282,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "dex": 2
        }
      ],
      "darkvision": 60,
      "traitTags": [
        "NPC Race"
      ],
      "languageProficiencies": [
        {
          "common": true,
          "auran": true
        }
      ],
      "soundClip": {
        "type": "internal",
        "path": "races/kenku.mp3"
      },
      "entries": [
        {
          "name": "Ambusher",
          "entries": [
            "In the first round of a combat, you have advantage on attack rolls against any creature who is {@status surprised}."
          ],
          "type": "entries"
        },
        {
          "name": "Mimicry",
          "entries": [
            "You can mimic any sounds you have heard, including voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom ({@skill Insight}) check."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can read and write Common and Auran, but you can only speak using your Mimicry trait."
          ],
          "type": "entries"
        }
      ]
    },
    {
      "name": "Kenku",
      "source": "MPMM",
      "page": 24,
      "lineage": "VRGR",
      "size": [
        "S",
        "M"
      ],
      "speed": 30,
      "skillProficiencies": [
        {
          "any": 2
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Your size is Medium or Small. You choose the size when you select this race."
          ]
        },
        {
          "type": "entries",
          "name": "Expert Duplication",
          "entries": [
            "When you copy writing or craftwork produced by yourself or someone else, you have advantage on any ability checks you make to produce an exact duplicate."
          ]
        },
        {
          "type": "entries",
          "name": "Kenku Recall",
          "entries": [
            "Thanks to your supernaturally good memory, you have proficiency in two skills of your choice.",
            "Moreover, when you make an ability check using any skill in which you have proficiency, you can give yourself advantage on the check before rolling the {@dice d20}. You can give yourself advantage in this way a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
          ]
        },
        {
          "type": "entries",
          "name": "Mimicry",
          "entries": [
            "You can accurately mimic sounds you have heard, including voices. A creature that hears the sounds you make can tell they are imitations only with a successful Wisdom ({@skill Insight}) check against a DC of 8 + your proficiency bonus + your Charisma modifier."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Kenku",
      "source": "VGM",
      "page": 109,
      "otherSources": [
        {
          "source": "EGW",
          "page": 177
        }
      ],
      "reprintedAs": [
        "Kenku|MPMM"
      ],
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "dex": 2,
          "wis": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 52,
        "heightMod": "2d8",
        "baseWeight": 50,
        "weightMod": "1d6"
      },
      "age": {
        "mature": 12,
        "max": 60
      },
      "skillProficiencies": [
        {
          "choose": {
            "from": [
              "acrobatics",
              "deception",
              "sleight of hand",
              "stealth"
            ],
            "count": 2
          }
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "auran": true
        }
      ],
      "soundClip": {
        "type": "internal",
        "path": "races/kenku.mp3"
      },
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Kenku have shorter lifespans than humans. They reach maturity at about 12 years old and can live to 60."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Kenku are around 5 feet tall and weigh between 90 and 120 pounds. Your size is Medium."
          ]
        },
        {
          "name": "Expert Forgery",
          "entries": [
            "You can duplicate other creatures' handwriting and craftwork. You have advantage on all checks made to produce forgeries or duplicates of existing objects."
          ],
          "type": "entries"
        },
        {
          "name": "Kenku Training",
          "entries": [
            "You are proficient in your choice of two of the following skills: {@skill Acrobatics}, {@skill Deception}, {@skill Stealth}, and {@skill Sleight of Hand}."
          ],
          "type": "entries"
        },
        {
          "name": "Mimicry",
          "entries": [
            "You can mimic sounds you have heard, including voices. A creature that hears the sounds can tell they are imitations with a successful Wisdom ({@skill Insight}) check opposed by your Charisma ({@skill Deception}) check."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can read and write Common and Auran, but you can only speak using your Mimicry trait."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Khenra",
      "source": "PSA",
      "page": 17,
      "size": [
        "M"
      ],
      "speed": 35,
      "ability": [
        {
          "dex": 2,
          "str": 1
        }
      ],
      "age": {
        "mature": 13,
        "max": 60
      },
      "languageProficiencies": [
        {
          "common": true,
          "other": true
        }
      ],
      "weaponProficiencies": [
        {
          "longsword|phb": true,
          "spear|phb": true,
          "javelin|phb": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Khenra mature quickly, reaching adulthood in their early teens. Khenra initiates are usually the youngest in a crop, completing the trials by their late teens. Even without a violent death, they rarely live past 60."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Most khenra lean toward chaotic alignments. They have no particular inclination toward good or evil."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Khenra have similar builds to humans. Your size is Medium."
          ]
        },
        {
          "name": "Khenra Weapon Training",
          "entries": [
            "You have proficiency with the khopesh ({@item longsword|phb}), {@item spear|phb}, and {@item javelin|phb}."
          ],
          "type": "entries"
        },
        {
          "name": "Khenra Twins",
          "entries": [
            "If your twin is alive and you can see your twin, whenever you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll. If your twin is dead (or if you were born without a twin), you can't be {@condition frightened}."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Khenra."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Kobold",
      "source": "DMG",
      "page": 282,
      "size": [
        "S"
      ],
      "speed": 30,
      "ability": [
        {
          "dex": 2,
          "str": -4
        }
      ],
      "darkvision": 60,
      "traitTags": [
        "NPC Race",
        "Sunlight Sensitivity"
      ],
      "languageProficiencies": [
        {
          "common": true,
          "draconic": true
        }
      ],
      "entries": [
        {
          "name": "Pack Tactics",
          "entries": [
            "You have advantage on an attack roll against a creature if at least one of your allies is within 5 feet of the creature and the ally isn't {@condition incapacitated}."
          ],
          "type": "entries"
        },
        {
          "name": "Sunlight Sensitivity",
          "entries": [
            "You have disadvantage on attack rolls and on Wisdom ({@skill Perception}) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight."
          ],
          "type": "entries"
        },
        {
          "name": "Darkvision",
          "entries": [
            "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Draconic."
          ],
          "type": "entries"
        }
      ]
    },
    {
      "name": "Kobold",
      "source": "MPMM",
      "page": 25,
      "lineage": "VRGR",
      "size": [
        "S"
      ],
      "speed": 30,
      "darkvision": 60,
      "skillProficiencies": [
        {
          "choose": {
            "from": [
              "arcana",
              "investigation",
              "medicine",
              "sleight of hand",
              "survival"
            ]
          }
        }
      ],
      "additionalSpells": [
        {
          "ability": {
            "choose": [
              "int",
              "wis",
              "cha"
            ]
          },
          "known": {
            "_": [
              {
                "choose": "level=0|class=Sorcerer",
                "count": 1
              }
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were in dim light. You discern colors in that darkness only as shades of gray."
          ]
        },
        {
          "type": "entries",
          "name": "Draconic Cry",
          "entries": [
            "As a bonus action, you let out a cry at your enemies within 10 feet of you. Until the start of your next turn, you and your allies have advantage on attack rolls against any of those enemies who could hear you. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
          ]
        },
        {
          "type": "entries",
          "name": "Kobold Legacy",
          "entries": [
            "Kobold's connections to dragons can manifest in unpredictable ways in an individual kobold. Choose one of the following legacy options for your kobold.",
            {
              "type": "list",
              "items": [
                {
                  "type": "item",
                  "name": "Craftiness",
                  "entry": "You have proficiency in one of the following skills of your choice: {@skill Arcana}, {@skill Investigation}, {@skill Medicine}, {@skill Sleight of Hand}, or {@skill Survival}."
                },
                {
                  "type": "item",
                  "name": "Defiance",
                  "entry": "You have advantage on saving throws to avoid or end the {@condition frightened} condition on yourself."
                },
                {
                  "type": "item",
                  "name": "Draconic Sorcery",
                  "entry": "You know one {@filter cantrip of your choice from the sorcerer spell list|spells|level=0|class=Sorcerer}. Intelligence, Wisdom, or Charisma is your spellcasting ability for that cantrip (choose when you select this race)."
                }
              ],
              "style": "list-hang-notitle"
            }
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true,
      "_versions": [
        {
          "name": "Kobold; Craftiness",
          "source": "MPMM",
          "_mod": {
            "entries": {
              "mode": "replaceArr",
              "replace": "Kobold Legacy",
              "items": {
                "name": "Kobold Legacy (Craftiness)",
                "type": "entries",
                "entries": [
                  "You have proficiency in one of the following skills of your choice: {@skill Arcana}, {@skill Investigation}, {@skill Medicine}, {@skill Sleight of Hand}, or {@skill Survival}."
                ]
              }
            }
          },
          "additionalSpells": null
        },
        {
          "name": "Kobold; Defiance",
          "source": "MPMM",
          "_mod": {
            "entries": {
              "mode": "replaceArr",
              "replace": "Kobold Legacy",
              "items": {
                "name": "Kobold Legacy (Defiance)",
                "type": "entries",
                "entries": [
                  "You have advantage on saving throws to avoid or end the {@condition frightened} condition on yourself."
                ]
              }
            }
          },
          "skillProficiencies": null,
          "additionalSpells": null
        },
        {
          "name": "Kobold; Draconic Sorcery",
          "source": "MPMM",
          "_mod": {
            "entries": {
              "mode": "replaceArr",
              "replace": "Kobold Legacy",
              "items": {
                "name": "Kobold Legacy (Draconic Sorcery)",
                "type": "entries",
                "entries": [
                  "You know one {@filter cantrip of your choice from the sorcerer spell list|spells|level=0|class=Sorcerer}. Intelligence, Wisdom, or Charisma is your spellcasting ability for that cantrip (choose when you select this race)."
                ]
              }
            }
          },
          "skillProficiencies": null
        }
      ]
    },
    {
      "name": "Kobold",
      "source": "VGM",
      "page": 119,
      "reprintedAs": [
        "Kobold|MPMM"
      ],
      "size": [
        "S"
      ],
      "speed": 30,
      "ability": [
        {
          "dex": 2
        }
      ],
      "heightAndWeight": {
        "baseHeight": 25,
        "heightMod": "2d4",
        "baseWeight": 25
      },
      "age": {
        "mature": 6,
        "max": 120
      },
      "darkvision": 60,
      "traitTags": [
        "Monstrous Race",
        "Sunlight Sensitivity"
      ],
      "languageProficiencies": [
        {
          "common": true,
          "draconic": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Kobolds reach adulthood at age 6 and can live up to 120 years but rarely do so."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Kobolds are between 2 and 3 feet tall and weigh between 25 and 35 pounds. Your size is Small."
          ]
        },
        {
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Grovel, Cower, and Beg",
          "entries": [
            "As an action on your turn, you can cower pathetically to distract nearby foes. Until the end of your next turn, your allies gain advantage on attack rolls against enemies within 10 feet of you that you can see. Once you use this trait, you can't use it again until you finish a short or long rest."
          ],
          "type": "entries"
        },
        {
          "name": "Pack Tactics",
          "entries": [
            "You have advantage on an attack roll against a creature if at least one of your allies is within 5 feet of the creature and the ally isn't {@condition incapacitated}."
          ],
          "type": "entries"
        },
        {
          "name": "Sunlight Sensitivity",
          "entries": [
            "You have disadvantage on attack rolls and on Wisdom ({@skill Perception}) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Draconic."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Kor",
      "source": "PSZ",
      "page": 10,
      "size": [
        "M"
      ],
      "speed": {
        "walk": 30,
        "climb": 30
      },
      "ability": [
        {
          "dex": 2,
          "wis": 1
        }
      ],
      "age": {
        "mature": 20,
        "max": 100
      },
      "skillProficiencies": [
        {
          "athletics": true,
          "acrobatics": true
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "other": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Kor mature at the same rate as humans and live about as long."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Most kor are lawful good, with a strong dedication to community and the traditions of their ancestors."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Kor average nearly 6 feet tall, but are much lighter and more slender than humans. Your size is Medium."
          ]
        },
        {
          "name": "Brave",
          "entries": [
            "You have advantage on saving throws against being {@condition frightened}."
          ],
          "type": "entries"
        },
        {
          "name": "Climbing",
          "entries": [
            "You also have a climbing speed of 30 feet as long as you are not encumbered or wearing heavy armor."
          ],
          "type": "entries"
        },
        {
          "name": "Kor Climbing",
          "entries": [
            "You have proficiency in the {@skill Athletics} and {@skill Acrobatics} skills."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common, and communicate in the silent speech of the Kor."
          ],
          "type": "entries"
        },
        {
          "name": "Lucky",
          "entries": [
            "When you roll a 1 on the {@dice d20} for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Kuo-Toa",
      "source": "DMG",
      "page": 282,
      "size": [
        "M"
      ],
      "speed": {
        "walk": 30,
        "swim": 30
      },
      "darkvision": 120,
      "traitTags": [
        "Amphibious",
        "NPC Race",
        "Sunlight Sensitivity"
      ],
      "languageProficiencies": [
        {
          "undercommon": true
        }
      ],
      "entries": [
        {
          "name": "Amphibious",
          "type": "entries",
          "entries": [
            "You can breathe air and water."
          ]
        },
        {
          "name": "Otherworldly Perception",
          "type": "entries",
          "entries": [
            "You can sense the presence of any creature within 30 feet of you that is {@condition invisible} or on the Ethereal Plane. You can pinpoint such a creature that is moving."
          ]
        },
        {
          "name": "Slippery",
          "type": "entries",
          "entries": [
            "You have advantage on ability checks and saving throws made to escape a grapple."
          ]
        },
        {
          "name": "Sunlight Sensitivity",
          "type": "entries",
          "entries": [
            "While in sunlight, you have disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
          ]
        },
        {
          "name": "Superior Darkvision",
          "entries": [
            "You have superior vision in dark and dim conditions. You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Undercommon."
          ],
          "type": "entries"
        }
      ]
    },
    {
      "name": "Leonin",
      "source": "MOT",
      "page": 20,
      "size": [
        "M"
      ],
      "speed": 35,
      "ability": [
        {
          "str": 1,
          "con": 2
        }
      ],
      "heightAndWeight": {
        "baseHeight": 66,
        "heightMod": "2d10",
        "baseWeight": 180,
        "weightMod": "2d6"
      },
      "age": {
        "mature": 20,
        "max": 100
      },
      "darkvision": 60,
      "traitTags": [
        "Natural Weapon"
      ],
      "skillProficiencies": [
        {
          "choose": {
            "from": [
              "athletics",
              "intimidation",
              "perception",
              "survival"
            ]
          }
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "other": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Leonin mature and age at about the same rate as humans."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Leonin tend toward good alignments. Leonin who are focused on the pride lean toward lawful good."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Leonin are typically over 6 feet tall, with some standing over 7 feet. Your size is Medium."
          ]
        },
        {
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Claws",
          "entries": [
            "Your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you can deal slashing damage equal to {@damage 1d4} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike."
          ],
          "type": "entries"
        },
        {
          "name": "Hunter's Instincts",
          "entries": [
            "You have proficiency in one of the following skills of your choice: {@skill Athletics}, {@skill Intimidation}, {@skill Perception}, or {@skill Survival}."
          ],
          "type": "entries"
        },
        {
          "name": "Daunting Roar",
          "entries": [
            "As a bonus action, you can let out an especially menacing roar. Creatures of your choice within 10 feet of you that can hear you must succeed on a Wisdom saving throw or become {@condition frightened} of you until the end of your next turn. The DC of the save equals 8 + your proficiency bonus + your Constitution modifier. Once you use this trait, you can't use it again until you finish a short or long rest."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Leonin."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Lizardfolk",
      "source": "DMG",
      "page": 282,
      "size": [
        "M"
      ],
      "speed": {
        "walk": 30,
        "swim": 30
      },
      "ability": [
        {
          "str": 2,
          "int": -2
        }
      ],
      "traitTags": [
        "Natural Armor",
        "NPC Race"
      ],
      "languageProficiencies": [
        {
          "draconic": true
        }
      ],
      "entries": [
        {
          "name": "Hold Breath",
          "entries": [
            "You can hold your breath for up to 15 minutes at a time."
          ],
          "type": "entries"
        },
        {
          "name": "Natural Armor",
          "entries": [
            "Your scales function as natural armor, granting you a +3 bonus to Armor Class."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Draconic."
          ],
          "type": "entries"
        }
      ]
    },
    {
      "name": "Lizardfolk",
      "source": "MPMM",
      "page": 26,
      "lineage": "VRGR",
      "size": [
        "M"
      ],
      "speed": {
        "walk": 30,
        "swim": true
      },
      "traitTags": [
        "Natural Armor",
        "Natural Weapon"
      ],
      "skillProficiencies": [
        {
          "choose": {
            "from": [
              "animal handling",
              "medicine",
              "nature",
              "perception",
              "stealth",
              "survival"
            ],
            "count": 2
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Speed",
          "entries": [
            "Your walking speed is 30 feet, and you have a swimming speed equal to your walking speed."
          ]
        },
        {
          "type": "entries",
          "name": "Bite",
          "entries": [
            "You have a fanged maw that you can use to make unarmed strikes. When you hit with it, the strike deals {@damage 1d6} + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike."
          ]
        },
        {
          "type": "entries",
          "name": "Hold Breath",
          "entries": [
            "You can hold your breath for up to 15 minutes at a time."
          ]
        },
        {
          "type": "entries",
          "name": "Hungry Jaws",
          "entries": [
            "You can throw yourself into a feeding frenzy. As a bonus action, you can make a special attack with your Bite. If the attack hits, it deals its normal damage, and you gain temporary hit points equal to your proficiency bonus. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
          ]
        },
        {
          "type": "entries",
          "name": "Natural Armor",
          "entries": [
            "You have tough, scaly skin. When you aren't wearing armor, your base AC is 13 + Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor."
          ]
        },
        {
          "type": "entries",
          "name": "Nature's Intuition",
          "entries": [
            "Thanks to your mystical connection to nature, you gain proficiency with two of the following skills of your choice: {@skill Animal Handling}, {@skill Medicine}, {@skill Nature}, {@skill Perception}, {@skill Stealth}, or {@skill Survival}."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Lizardfolk",
      "source": "VGM",
      "page": 111,
      "reprintedAs": [
        "Lizardfolk|MPMM"
      ],
      "size": [
        "M"
      ],
      "speed": {
        "walk": 30,
        "swim": 30
      },
      "ability": [
        {
          "con": 2,
          "wis": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 57,
        "heightMod": "2d10",
        "baseWeight": 120,
        "weightMod": "2d6"
      },
      "age": {
        "mature": 14,
        "max": 60
      },
      "traitTags": [
        "Natural Armor",
        "Natural Weapon"
      ],
      "skillProficiencies": [
        {
          "choose": {
            "from": [
              "animal handling",
              "nature",
              "perception",
              "stealth",
              "survival"
            ],
            "count": 2
          }
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "draconic": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Lizardfolk reach maturity around age 14 and rarely live longer than 60 years."
          ]
        },
        {
          "name": "Size",
          "type": "entries",
          "entries": [
            "Lizardfolk are a little bulkier and taller than humans, and their colorful frills make them appear even larger. Your size is Medium."
          ]
        },
        {
          "name": "Swim Speed",
          "entries": [
            "You have a swimming speed of 30 feet."
          ],
          "type": "entries"
        },
        {
          "name": "Bite",
          "entries": [
            "Your fanged maw is a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal piercing damage equal to {@dice 1d6} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike."
          ],
          "type": "entries"
        },
        {
          "name": "Cunning Artisan",
          "entries": [
            "As part of a short rest, you can harvest bone and hide from a slain beast, construct, dragon, monstrosity, or plant creature of size small or larger to create one of the following items: a {@item shield|phb}, a {@item club|phb}, a {@item javelin|phb}, or {@dice 1d4} {@item dart|phb|darts} or {@item blowgun needle|phb|blowgun needles}. To use this trait, you need a blade, such as a {@item dagger|phb}, or appropriate {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools}, such as {@item leatherworker's tools|phb}."
          ],
          "type": "entries"
        },
        {
          "name": "Hold Breath",
          "entries": [
            "You can hold your breath for up to 15 minutes at a time."
          ],
          "type": "entries"
        },
        {
          "name": "Hunter's Lore",
          "entries": [
            "You gain proficiency with two of the following skills of your choice: {@skill Animal Handling}, {@skill Nature}, {@skill Perception}, {@skill Stealth}, and {@skill Survival}."
          ],
          "type": "entries"
        },
        {
          "name": "Natural Armor",
          "entries": [
            "You have tough, scaly skin. When you aren't wearing armor, your AC is 13 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor."
          ],
          "type": "entries"
        },
        {
          "name": "Hungry Jaws",
          "entries": [
            "In battle, you can throw yourself into a vicious feeding frenzy. As a bonus action, you can make a special attack with your bite. If the attack hits, it deals its normal damage, and you gain temporary hit points equal to your Constitution modifier (minimum of 1), and you can't use this trait again until you finish a short or long rest."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Draconic."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Locathah",
      "source": "LR",
      "page": 24,
      "size": [
        "M"
      ],
      "speed": {
        "walk": 30,
        "swim": 30
      },
      "ability": [
        {
          "str": 2,
          "dex": 1
        }
      ],
      "age": {
        "mature": 10,
        "max": 80
      },
      "traitTags": [
        "Amphibious",
        "Natural Armor"
      ],
      "skillProficiencies": [
        {
          "athletics": true,
          "perception": true
        }
      ],
      "languageProficiencies": [
        {
          "aquan": true,
          "common": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Locathah mature to adulthood by the age of 10 but have been known to live up to 80 years."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Most locathah are true neutral or have some aspect of neutrality in their alignment. They tend toward good, coming from a culture where compassion for the downtrodden is a commonality."
          ]
        },
        {
          "name": "Natural Armor",
          "entries": [
            "You have tough, scaly skin. When you aren't wearing armor, your AC is 12 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor."
          ],
          "type": "entries"
        },
        {
          "name": "Observant & Athletic",
          "entries": [
            "You have proficiency in the {@skill Athletics} and {@skill Perception} skills."
          ],
          "type": "entries"
        },
        {
          "name": "Leviathan Will",
          "entries": [
            "You have advantage on saving throws against being {@condition charmed}, {@condition frightened}, {@condition paralyzed}, {@condition poisoned}, {@condition stunned}, or put to sleep."
          ],
          "type": "entries"
        },
        {
          "name": "Limited Amphibiousness",
          "entries": [
            "You can breathe air and water, but you need to be submerged at least once every 4 hours to avoid suffocating."
          ],
          "type": "entries"
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Locathah stand between 5 and 6 feet tall and average about 150 pounds. Your size is Medium."
          ]
        },
        {
          "name": "Language",
          "entries": [
            "You can speak, read, and write Aquan and Common."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Loxodon",
      "source": "GGR",
      "page": 17,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "con": 2,
          "wis": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 79,
        "heightMod": "2d10",
        "baseWeight": 295,
        "weightMod": "2d4"
      },
      "age": {
        "mature": 20,
        "max": 450
      },
      "traitTags": [
        "Natural Armor",
        "Powerful Build"
      ],
      "languageProficiencies": [
        {
          "common": true,
          "other": true
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Age",
          "entries": [
            "Loxodons physically mature at the same rate as humans, but they live about 450 years. They highly value the weight of wisdom and experience and are considered young until they reach the age of 60."
          ]
        },
        {
          "type": "entries",
          "name": "Alignment",
          "entries": [
            "Most loxodons are lawful, believing in the value of a peaceful, ordered life. They also tend toward good."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Loxodons stand between 7 and 8 feet tall. Their massive bodies weigh between 300 and 400 pounds. Your size is Medium."
          ]
        },
        {
          "type": "entries",
          "name": "Powerful Build",
          "entries": [
            "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
          ]
        },
        {
          "type": "entries",
          "name": "Loxodon Serenity",
          "entries": [
            "You have advantage on saving throws against being {@condition charmed} or {@condition frightened}."
          ]
        },
        {
          "type": "entries",
          "name": "Natural Armor",
          "entries": [
            "You have thick, leathery skin. When you aren't wearing armor, your AC is 12 + your Constitution modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor.",
            {
              "type": "inset",
              "name": "Tip: AC Calculations Don't Stack",
              "entries": [
                "When the game gives you more than one way to calculate your Armor Class, you can use only one of them. You choose the one to use. For example, if you have the loxodon's Natural Armor trait and the monk's Unarmored Defense feature, you don't mix them together. Instead, you choose which one determines your AC."
              ]
            }
          ]
        },
        {
          "type": "entries",
          "name": "Trunk",
          "entries": [
            "You can grasp things with your trunk, and you can use it as a snorkel. It has a reach of 5 feet, and it can lift a number of pounds equal to five times your Strength score. You can use it to do the following simple tasks: lift, drop, hold, push, or pull an object or a creature; open or close a door or a container; grapple someone; or make an unarmed strike. Your DM might allow other simple tasks to be added to that list of options.",
            "Your trunk can't wield weapons or shields or do anything that requires manual precision, such as using tools or magic items or performing the somatic components of a spell."
          ]
        },
        {
          "type": "entries",
          "name": "Keen Smell",
          "entries": [
            "Thanks to your sensitive trunk, you have advantage on Wisdom ({@skill Perception}), Wisdom ({@skill Survival}), and Intelligence ({@skill Investigation}) checks that involve smell."
          ]
        },
        {
          "type": "entries",
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Loxodon."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Luma",
      "source": "HWCS",
      "page": 16,
      "size": [
        "S"
      ],
      "speed": 25,
      "ability": [
        {
          "cha": 2
        }
      ],
      "languageProficiencies": [
        {
          "other": true,
          "auran": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Lumas are short-lived reaching adulthood around 20 years. Few lumas live beyond 70 years."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Spurred by personal interests and flights of fancy, lumas lean towards chaotic alignments. While generally good natured, those that have been spurned by society find it hard to see the benefits of altruism, but even under such circumstances lumas are rarely evil."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Lumas are the shortest and lightest of the birdfolk, standing roughly 3 feet tall and weighing only around 30 pounds. Your size is Small."
          ]
        },
        {
          "name": "Speed",
          "type": "entries",
          "entries": [
            "Your base walking speed is 25 feet."
          ]
        },
        {
          "name": "Glide",
          "type": "entries",
          "entries": [
            "Using your feathered arms, you can slow your fall, and glide short distances. When falling you can use your reaction to spread your arms, stiffen your wing feathers, and slow your descent. While doing so, you continue to fall gently at a speed of 60 feet per round, taking no fall damage when you land. If you would fall at least 10 feet in this way, you may fly up to your movement speed in one direction you choose, although you cannot choose to move upwards, landing in the space you finish your movement. You cannot glide while carrying heavy weapons or wielding a shield (though you may drop any held items as part of your reaction to spread your arms). You cannot glide while wearing heavy armor, or if you are encumbered."
          ]
        },
        {
          "name": "Wing Flap",
          "type": "entries",
          "entries": [
            "As a bonus action, you can use your powerful feathered arms to propel yourself upward a distance equal to half your movement speed. You can use it in conjunction with a regular jump, but not while gliding."
          ]
        },
        {
          "name": "Touched",
          "type": "entries",
          "entries": [
            "You know one {@filter cantrip from the sorcerer spell list|spells|level=0|class=sorcerer}. Charisma is your spellcasting ability for this cantrip."
          ]
        },
        {
          "name": "Fated",
          "type": "entries",
          "entries": [
            "Whether by luck or a guiding presence, you always seem to find your way. You can choose to reroll any attack, skill check, or saving throw. You can decide to do this after your roll, but only before the outcome of the roll has been determined. You can't use this feature again until you have completed a long rest."
          ]
        },
        {
          "name": "Languages",
          "type": "entries",
          "entries": [
            "You can speak, read, and write Birdfolk. You can also understand Auran, though you cannot speak it naturally."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Mapach",
      "source": "HWCS",
      "page": 28,
      "size": [
        "M"
      ],
      "speed": {
        "walk": 30,
        "climb": 20
      },
      "ability": [
        {
          "wis": 2,
          "con": 1
        }
      ],
      "darkvision": 60,
      "languageProficiencies": [
        {
          "other": true
        }
      ],
      "toolProficiencies": [
        {
          "tinker's tools": true
        }
      ],
      "resist": [
        "poison"
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Mapachs mature quickly, reaching adulthood around 8 years. Despite this they have fairly average lifespans, the oldest among them living just past 60 years."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Mapachs don't favour good over evil, with most choosing to remain neutral. They also lean towards the freedom of chaotic alignments."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Mapachs stand between 4 and 5 feet tall, and encompass a variety of builds from svelt to wide, weighing between 90 and 160 pounds. Your size is Medium."
          ]
        },
        {
          "name": "Speed",
          "type": "entries",
          "entries": [
            "Your base walking speed is 30 feet."
          ]
        },
        {
          "name": "Darkvision",
          "type": "entries",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray. Mapachs are most comfortable under the cloak of night."
          ]
        },
        {
          "name": "Expert Climbers",
          "type": "entries",
          "entries": [
            "You have a climb speed of 20 feet."
          ]
        },
        {
          "name": "Resilience",
          "type": "entries",
          "entries": [
            "You have advantage on saving throws against poison and resistance against poison damage."
          ]
        },
        {
          "name": "Scroungecraft",
          "type": "entries",
          "entries": [
            "You are proficient with {@item tinker's tools|PHB}. Additionally, you have the ability to construct crude but functional versions of common items using materials present in your surroundings. You may spend 10 minutes to craft these materials into any tool or piece of adventuring gear worth 30 gold pieces or less. The item will be completely functional, even capable of passing for a disguise (if you crafted an article of clothing). Tools, along with any other item that would logically break on its first use (caltrops, arrows), will become useless afterward. Scroungecrafted items will otherwise last 1 hour before falling apart.",
            "Depending on the materials available, a Game Master (GM) may rule that you cannot craft an item in this way. For example, a vial of acid might be easy to make if you happen to be near a nest of acidic beetle larvae, or bark can be bound into a makeshift flask, but it would be difficult to create a passable facsimile of silken robes from a pile of leaves.",
            "Should you have access to the proper materials, you can spend 8 hours converting an item you have scroungecrafted in this way into a permanent version, so long as you start this process before the item falls apart. Items crafted in such a way will function exactly as a normal version of the item, and if you have proficiency in the tools used to craft them, they can even look professionally-crafted. Otherwise, they retain a rather rough, cobbled-together appearance. You can also use scroungecraft to repair broken equipment, provided you have the materials on hand. Though, how long your repairs hold together is up to the GM."
          ]
        },
        {
          "name": "Skulker",
          "type": "entries",
          "entries": [
            "You have advantage on {@skill Stealth} checks made in dim light and darkness."
          ]
        },
        {
          "name": "Languages",
          "type": "entries",
          "entries": [
            "You can speak, read, and write Birdfolk and Mapach."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Merfolk",
      "source": "DMG",
      "page": 282,
      "size": [
        "M"
      ],
      "speed": {
        "walk": 10,
        "swim": 40
      },
      "traitTags": [
        "Amphibious",
        "NPC Race"
      ],
      "languageProficiencies": [
        {
          "common": true,
          "aquan": true
        }
      ],
      "entries": [
        {
          "name": "Amphibious",
          "entries": [
            "You can breathe air and water."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Aquan."
          ],
          "type": "entries"
        }
      ]
    },
    {
      "name": "Merfolk",
      "source": "PSZ",
      "page": 13,
      "otherSources": [
        {
          "source": "PSX",
          "page": 12
        }
      ],
      "size": [
        "M"
      ],
      "speed": {
        "walk": 30,
        "swim": 30
      },
      "ability": [
        {
          "cha": 1
        }
      ],
      "age": {
        "mature": 20,
        "max": 100
      },
      "traitTags": [
        "Amphibious"
      ],
      "languageProficiencies": [
        {
          "common": true,
          "other": true,
          "anyStandard": 1
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Age",
          "entries": [
            "Merfolk mature at the same rate humans do and reach adulthood around the age of 20. They live considerably longer than humans, though, often reaching well over 100 years."
          ]
        },
        {
          "type": "entries",
          "name": "Alignment",
          "entries": [
            "Most merfolk are neutral, though merfolk of the Emeria and Cosi creeds have chaotic leanings."
          ]
        },
        {
          "name": "Amphibious",
          "entries": [
            "You can breathe air and water."
          ],
          "type": "entries"
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Merfolk are about the same size and build as humans. Your size is Medium."
          ]
        },
        {
          "name": "Swimming",
          "entries": [
            "You have a swimming speed of 30 feet."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common, Merfolk, and one extra language of your choice."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Minotaur",
      "source": "GGR",
      "page": 18,
      "reprintedAs": [
        "Minotaur|MPMM"
      ],
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "str": 2,
          "con": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 64,
        "heightMod": "2d8",
        "baseWeight": 175,
        "weightMod": "2d6"
      },
      "age": {
        "mature": 17,
        "max": 150
      },
      "traitTags": [
        "Natural Weapon"
      ],
      "skillProficiencies": [
        {
          "choose": {
            "from": [
              "intimidation",
              "persuasion"
            ]
          }
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "other": true
        }
      ],
      "entries": [
        {
          "type": "entries",
          "entries": [
            "{@note These traits are also suitable for minotaurs in other D&D worlds where these people have avoided the demonic influence of Baphomet.}"
          ]
        },
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Minotaurs enter adulthood at around the age of 17 and can live up to 150 years."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Most minotaurs who join the Boros Legion lean toward lawful alignments, while those associated with the Cult of Rakdos or the Gruul Clans tend toward chaotic alignments."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Minotaurs average over 6 feet in height, and they have stocky builds. Your size is Medium."
          ]
        },
        {
          "name": "Horns",
          "entries": [
            "Your horns are natural melee weapons, which you can use to make unarmed strikes. If you hit with them, you deal piercing damage equal to {@dice 1d6} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike."
          ],
          "type": "entries"
        },
        {
          "name": "Goring Rush",
          "entries": [
            "Immediately after you use the {@action Dash} action on your turn and move at least 20 feet, you can make one melee attack with your horns as a bonus action."
          ],
          "type": "entries"
        },
        {
          "name": "Hammering Horns",
          "entries": [
            "Immediately after you hit a creature with a melee attack as part of the {@action Attack} action on your turn, you can use a bonus action to attempt to shove that target with your horns. The target must be no more than one size larger than you and within 5 feet of you. Unless it succeeds on a Strength saving throw against a DC equal to 8 + your proficiency bonus + your Strength modifier, you push it up to 10 feet away from you."
          ],
          "type": "entries"
        },
        {
          "name": "Imposing Presence",
          "entries": [
            "You have proficiency in one of the following skills of your choice: {@skill Intimidation} or {@skill Persuasion}."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Minotaur."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Minotaur",
      "source": "MOT",
      "page": 22,
      "reprintedAs": [
        "Minotaur|MPMM"
      ],
      "_copy": {
        "name": "Minotaur",
        "source": "GGR",
        "_mod": {
          "entries": [
            {
              "mode": "replaceArr",
              "replace": "Age",
              "items": {
                "name": "Age",
                "type": "entries",
                "entries": [
                  "Minotaurs mature and age at about the same rate as humans."
                ]
              }
            },
            {
              "mode": "replaceArr",
              "replace": "Alignment",
              "items": {
                "name": "Alignment",
                "type": "entries",
                "entries": [
                  "Minotaurs who leave the walls of Skophos have the opportunity to be free of its culture and pursue chaotic alignments, while those who remain within the polis and its tyrannical regime tend toward lawful alignments."
                ]
              }
            }
          ]
        }
      },
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Minotaur",
      "source": "MPMM",
      "page": 27,
      "lineage": "VRGR",
      "size": [
        "M"
      ],
      "speed": 30,
      "traitTags": [
        "Natural Weapon"
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Horns",
          "entries": [
            "You have horns that you can use to make unarmed strikes. When you hit with them, the strike deals {@damage 1d6} + your Strength modifier piercing damage, instead of the bludgeoning damage normal for an unarmed strike."
          ]
        },
        {
          "type": "entries",
          "name": "Goring Rush",
          "entries": [
            "Immediately after you take the {@action Dash} action on your turn and move at least 20 feet, you can make one melee attack with your Horns as a bonus action."
          ]
        },
        {
          "type": "entries",
          "name": "Hammering Horns",
          "entries": [
            "Immediately after you hit a creature with a melee attack as part of the {@action Attack} action on your turn, you can use a bonus action to attempt to push that target with your horns. The target must be within 5 feet of you and no more than one size larger than you. Unless it succeeds on a Strength saving throw against a DC equal to 8 + your proficiency bonus + your Strength modifier, you can push it up to 10 feet away from you."
          ]
        },
        {
          "type": "entries",
          "name": "Labyrinthine Recall",
          "entries": [
            "You always know which direction is north, and you have advantage on any Wisdom ({@skill Survival}) check you make to navigate or track."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Minotaur (Amonkhet)",
      "source": "PSA",
      "page": 19,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "str": 2,
          "con": 1
        }
      ],
      "age": {
        "mature": 20,
        "max": 40
      },
      "traitTags": [
        "Natural Weapon"
      ],
      "skillProficiencies": [
        {
          "intimidation": true
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "other": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Minotaurs develop more slowly than humans, reaching full maturity around the age of 20. They typically become acolytes at around 8 or 9 years old, making them among the older members of their crops. Once they reach maturity, though, minotaurs age quickly, rushing headlong through the trials (as they do all aspects of life) to complete them before they pass their peak. A minotaur allowed to die of old age would rarely live beyond 40."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Most minotaurs lean toward chaotic alignments, and they have a slight inclination toward evil."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Minotaurs average over 6 feet in height, and they have strong, stocky builds. Your size is Medium."
          ]
        },
        {
          "name": "Natural Weapon",
          "entries": [
            "You can use your horns as a natural weapon to make unarmed strikes. If you hit with your horns, you deal bludgeoning damage equal to {@dice 1d6} + your Strength modifier."
          ],
          "type": "entries"
        },
        {
          "name": "Menacing",
          "entries": [
            "You gain proficiency in the {@skill Intimidation} skill."
          ],
          "type": "entries"
        },
        {
          "name": "Relentless Endurance",
          "entries": [
            "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest."
          ],
          "type": "entries"
        },
        {
          "name": "Savage Attacks",
          "entries": [
            "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Minotaur."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Naga",
      "source": "PSA",
      "page": 21,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "con": 2,
          "int": 1
        }
      ],
      "age": {
        "mature": 20,
        "max": 100
      },
      "traitTags": [
        "Language Proficiency",
        "Natural Weapon"
      ],
      "languageProficiencies": [
        {
          "common": true,
          "other": true
        }
      ],
      "toolProficiencies": [
        {
          "poisoner's kit": true
        }
      ],
      "immune": [
        "poison"
      ],
      "conditionImmune": [
        "poisoned"
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Like humans, naga reach adulthood in their late teens. They show no signs of aging beyond that point except for growing larger, so in theory, a naga could live well over a century."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Most naga are either neutral or neutral evil in alignment."
          ]
        },
        {
          "name": "Size",
          "entries": [
            "Naga stand about 5 feet tall when upright, but the total length of their bodies, head to tail, ranges from 10 to as much as 20 feet. Your size is Medium."
          ],
          "type": "entries"
        },
        {
          "name": "Speed Burst",
          "entries": [
            "By lowering your body to the ground and propelling yourself with your arms, you can move more quickly for a time. As a bonus action on your turn, if you have both hands free, you can increase your walking speed by 5 feet until the end of your turn."
          ],
          "type": "entries"
        },
        {
          "name": "Natural Weapons",
          "entries": [
            "Your fanged maw and constricting serpentine body are natural weapons, which you can use to make unarmed strikes.",
            "If you hit with your bite, you deal piercing damage equal to {@damage 1d4} + your Strength modifier, and your target must make a Constitution saving throw (DC 8 + your proficiency bonus + your Constitution modifier). On a failed save, the target takes {@damage 1d4} poison damage.",
            "If you hit with your constrict attack, you deal bludgeoning damage equal to {@dice 1d6} + your Strength modifier, and the target is {@condition grappled} (escape DC 8 + your proficiency bonus + your Strength modifier). Until this grapple ends, the target is {@condition restrained}, and you can't constrict another target."
          ],
          "type": "entries"
        },
        {
          "name": "Poison Immunity",
          "entries": [
            "You are immune to poison damage and can't be {@condition poisoned}."
          ],
          "type": "entries"
        },
        {
          "name": "Poison Affinity",
          "entries": [
            "You gain proficiency with the {@item poisoner's kit|phb}."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Naga."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Orc",
      "source": "DMG",
      "page": 282,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "str": 2,
          "int": -2
        }
      ],
      "darkvision": 60,
      "traitTags": [
        "NPC Race"
      ],
      "languageProficiencies": [
        {
          "common": true,
          "orc": true
        }
      ],
      "entries": [
        {
          "name": "Aggressive",
          "entries": [
            "As a bonus action, you can move up to your speed toward a hostile creature that you can see."
          ],
          "type": "entries"
        },
        {
          "name": "Darkvision",
          "entries": [
            "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Orc."
          ],
          "type": "entries"
        }
      ]
    },
    {
      "name": "Orc",
      "source": "EGW",
      "page": 178,
      "_copy": {
        "name": "Orc",
        "source": "ERLW",
        "_mod": {
          "entries": [
            {
              "mode": "replaceArr",
              "replace": "Age",
              "items": {
                "name": "Age",
                "type": "entries",
                "entries": [
                  "Orcs reach adulthood at age 16, and live up to 80 years."
                ]
              }
            },
            {
              "mode": "replaceArr",
              "replace": "Alignment",
              "items": {
                "name": "Alignment",
                "type": "entries",
                "entries": [
                  "Orcs fear the curse of ruin that is said to plague their race, and tend strongly toward either chaos (accepting their fate), or toward law (rejecting it)."
                ]
              }
            },
            {
              "mode": "replaceArr",
              "replace": "Size",
              "items": {
                "name": "Size",
                "type": "entries",
                "entries": [
                  "Orcs stand easily 8 feet tall and corded with powerful muscles, weighing up to 280 pounds. Your size is Medium."
                ]
              }
            },
            {
              "mode": "replaceArr",
              "replace": "Primal Intuition",
              "items": {
                "type": "entries",
                "name": "Primal Intuition",
                "entries": [
                  "You have proficiency in two of the following skills of your choice: {@skill Animal Handling}, {@skill Insight}, {@skill Intimidation}, {@skill Medicine}, {@skill Perception}, and {@skill Survival}."
                ]
              }
            }
          ]
        },
        "_preserve": {
          "reprintedAs": true
        }
      },
      "heightAndWeight": null,
      "skillProficiencies": [
        {
          "choose": {
            "from": [
              "animal handling",
              "insight",
              "intimidation",
              "medicine",
              "perception",
              "survival"
            ],
            "count": 2
          }
        }
      ]
    },
    {
      "name": "Orc",
      "source": "ERLW",
      "page": 31,
      "reprintedAs": [
        "Orc|MPMM"
      ],
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "str": 2,
          "con": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 64,
        "heightMod": "2d8",
        "baseWeight": 175,
        "weightMod": "2d6"
      },
      "age": {
        "mature": 12,
        "max": 50
      },
      "darkvision": 60,
      "traitTags": [
        "Powerful Build"
      ],
      "skillProficiencies": [
        {
          "choose": {
            "from": [
              "animal handling",
              "insight",
              "intimidation",
              "medicine",
              "nature",
              "perception",
              "survival"
            ],
            "count": 2
          }
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "orc": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Orcs reach adulthood at age 12 and live up to 50 years."
          ]
        },
        {
          "type": "entries",
          "name": "Alignment",
          "entries": [
            "The orcs of Eberron are a passionate people, given to powerful emotion and deep faith. They are generally chaotic, but can be any alignment."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Your size is Medium."
          ]
        },
        {
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Aggressive",
          "entries": [
            "As a bonus action, you can move up to your movement speed toward a hostile creature you can see or hear. You must end this move closer to the enemy than you started."
          ],
          "type": "entries"
        },
        {
          "type": "entries",
          "name": "Primal Intuition",
          "entries": [
            "You have proficiency in two of the following skills of your choice: {@skill Animal Handling}, {@skill Insight}, {@skill Intimidation}, {@skill Medicine}, {@skill Nature}, {@skill Perception}, and {@skill Survival}."
          ]
        },
        {
          "name": "Powerful Build",
          "entries": [
            "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Orc."
          ],
          "type": "entries"
        }
      ]
    },
    {
      "name": "Orc",
      "source": "MPMM",
      "page": 28,
      "lineage": "VRGR",
      "size": [
        "M"
      ],
      "speed": 30,
      "darkvision": 60,
      "traitTags": [
        "Powerful Build"
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Adrenaline Rush",
          "entries": [
            "You can take the {@action Dash} action as a bonus action. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
            "Whenever you use this trait, you gain a number of temporary hit points equal to your proficiency bonus."
          ]
        },
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
          ]
        },
        {
          "type": "entries",
          "name": "Powerful Build",
          "entries": [
            "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
          ]
        },
        {
          "type": "entries",
          "name": "Relentless Endurance",
          "entries": [
            "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. Once you use this trait, you can't do so again until you finish a long rest."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Orc",
      "source": "VGM",
      "page": 120,
      "reprintedAs": [
        "Orc|MPMM"
      ],
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "str": 2,
          "con": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 64,
        "heightMod": "2d8",
        "baseWeight": 175,
        "weightMod": "2d6"
      },
      "age": {
        "mature": 12,
        "max": 50
      },
      "darkvision": 60,
      "traitTags": [
        "Monstrous Race",
        "Powerful Build"
      ],
      "skillProficiencies": [
        {
          "choose": {
            "from": [
              "animal handling",
              "insight",
              "intimidation",
              "medicine",
              "nature",
              "perception",
              "survival"
            ],
            "count": 2
          }
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "orc": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Orcs reach adulthood at age 12 and live up to 50 years."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Orcs are usually over 6 feet tall and weigh between 230 and 280 pounds. Your size is Medium."
          ]
        },
        {
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Aggressive",
          "entries": [
            "As a bonus action, you can move up to your movement speed toward a hostile creature you can see or hear. You must end this move closer to the enemy than you started."
          ],
          "type": "entries"
        },
        {
          "name": "Primal Intuition",
          "entries": [
            "You have proficiency in two of the following skills of your choice: {@skill Animal Handling}, {@skill Insight}, {@skill Intimidation}, {@skill Medicine}, {@skill Nature}, {@skill Perception}, and {@skill Survival}."
          ],
          "type": "entries"
        },
        {
          "name": "Powerful Build",
          "entries": [
            "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Orc."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Orc (Ixalan)",
      "source": "PSX",
      "page": 15,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "str": 2,
          "con": 1
        }
      ],
      "age": {
        "mature": 14,
        "max": 75
      },
      "darkvision": 60,
      "skillProficiencies": [
        {
          "intimidation": true
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "orc": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Most orcs lean toward chaotic alignments, and many serve on pirate ships that encourage an inclination toward evil."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Orcs average over 6 feet in height, and they have strong, stocky builds. Your size is Medium."
          ]
        },
        {
          "type": "entries",
          "name": "Menacing",
          "entries": [
            "You gain proficiency in the {@skill Intimidation} skill."
          ]
        },
        {
          "type": "entries",
          "name": "Relentless Endurance",
          "entries": [
            "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest."
          ]
        },
        {
          "type": "entries",
          "name": "Savage Attacks",
          "entries": [
            "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."
          ]
        },
        {
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write {@language Common Trade Pidgin|PSX|Common} (if it exists in your campaign) and {@language Orc|PHB}."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Owlin",
      "source": "SCC",
      "page": 29,
      "lineage": "VRGR",
      "size": [
        "S",
        "M"
      ],
      "speed": {
        "walk": 30,
        "fly": true
      },
      "darkvision": 120,
      "skillProficiencies": [
        {
          "stealth": true
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "You are Medium or Small. You choose the size when you select this race."
          ]
        },
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 120 feet of yourself as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
          ]
        },
        {
          "type": "entries",
          "name": "Flight",
          "entries": [
            "Thanks to your wings, you have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor."
          ]
        },
        {
          "type": "entries",
          "name": "Silent Feathers",
          "entries": [
            "You have proficiency in the {@skill Stealth} skill."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Plasmoid",
      "source": "AAG",
      "page": 14,
      "lineage": "VRGR",
      "creatureTypes": [
        "ooze"
      ],
      "size": [
        "S",
        "M"
      ],
      "speed": 30,
      "darkvision": 60,
      "resist": [
        "acid",
        "poison"
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Creature Type",
          "entries": [
            "You are an Ooze."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "You are Medium or Small. You choose the size when you select this race."
          ]
        },
        {
          "type": "entries",
          "name": "Amorphous",
          "entries": [
            "You can squeeze through a space as narrow as 1 inch wide, provided you are wearing and carrying nothing. You have advantage on ability checks you make to initiate or escape a grapple."
          ]
        },
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of yourself as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
          ]
        },
        {
          "type": "entries",
          "name": "Hold Breath",
          "entries": [
            "You can hold your breath for 1 hour."
          ]
        },
        {
          "type": "entries",
          "name": "Natural Resilience",
          "entries": [
            "You have resistance to acid and poison damage, and you have advantage on saving throws against being {@condition poisoned}."
          ]
        },
        {
          "type": "entries",
          "name": "Shape Self",
          "entries": [
            "As an action, you can reshape your body to give yourself a head, one or two arms, one or two legs, and makeshift hands and feet, or you can revert to a limbless blob. While you have a humanlike shape, you can wear clothing and armor made for a Humanoid of your size.",
            "As a bonus action, you can extrude a pseudopod that is up to 6 inches wide and 10 feet long or reabsorb it into your body. As part of the same bonus action, you can use this pseudopod to manipulate an object, open or close a door or container, or pick up or set down a Tiny object. The pseudopod contains no sensory organs and can't attack, activate magic items, or lift more than 10 pounds."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Raptor",
      "source": "HWCS",
      "page": 18,
      "size": [
        "S"
      ],
      "speed": 25,
      "ability": [
        {
          "dex": 2
        }
      ],
      "languageProficiencies": [
        {
          "other": true,
          "auran": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Raptors reach maturity around 20 years. They can live longer than any other birdfolk race, over 100 years."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Raptors tend towards neutral alignments. Preferring the path of naturalists and hunters, raptors rarely see value in order for the sake of order, and are often more pragmatic than idealistic."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Raptors are lean, muscular hunters, but they stand less than 4 feet tall. Their light builds usually lend themselves to bodies that weigh far less than one would expect for their height, averaging around only 35 pounds. Your size is Small."
          ]
        },
        {
          "name": "Speed",
          "type": "entries",
          "entries": [
            "Your base walking speed is 25 feet."
          ]
        },
        {
          "name": "Glide",
          "type": "entries",
          "entries": [
            "Using your feathered arms, you can slow your fall, and glide short distances. When falling you can use your reaction to spread your arms, stiffen your wing feathers, and slow your descent. While doing so, you continue to fall gently at a speed of 60 feet per round, taking no fall damage when you land. If you would fall at least 10 feet in this way, you may fly up to your movement speed in one direction you choose, although you cannot choose to move upwards, landing in the space you finish your movement. You cannot glide while carrying heavy weapons or wielding a shield (though you may drop any held items as part of your reaction to spread your arms). You cannot glide while wearing heavy armor, or if you are encumbered."
          ]
        },
        {
          "name": "Talons",
          "type": "entries",
          "entries": [
            "Your sharp claws aid you in unarmed combat and while climbing. Your damage for an unarmed strike is {@damage 1d4} piercing damage. Additionally, you have advantage on Strength ({@skill Athletics}) checks made to climb any surface your talons could reasonably grip."
          ]
        },
        {
          "name": "Keen Senses",
          "type": "entries",
          "entries": [
            "You have proficiency in the {@skill Perception} skill."
          ]
        },
        {
          "name": "Woodland Hunter",
          "type": "entries",
          "entries": [
            "Your accuracy allows you to treat three-quarters cover as half cover and half cover as no cover."
          ]
        },
        {
          "name": "Hunter's Training",
          "type": "entries",
          "entries": [
            "You have proficiency with the {@item longbow|PHB}, {@item shortbow|PHB}, and {@item spear|PHB}. Additionally, your familiarity with the longbow means that it is not considered a heavy weapon for you."
          ]
        },
        {
          "name": "Languages",
          "type": "entries",
          "entries": [
            "You can speak, read, and write Birdfolk. You can also understand Auran, though you cannot speak it naturally."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Reborn",
      "source": "VRGR",
      "page": 20,
      "lineage": "VRGR",
      "size": [
        "S",
        "M"
      ],
      "speed": 30,
      "traitTags": [
        "Improved Resting"
      ],
      "resist": [
        "poison"
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "You are Medium or Small. You choose the size when you gain this lineage."
          ]
        },
        {
          "type": "entries",
          "name": "Ancestral Legacy",
          "entries": [
            "If you replace a race with this lineage, you can keep the following elements of that race: any skill proficiencies you gained from it and any climbing, flying, or swimming speed you gained from it.",
            "If you don't keep any of those elements or you choose this lineage at character creation, you gain proficiency in two skills of your choice."
          ]
        },
        {
          "type": "entries",
          "name": "Deathless Nature",
          "entries": [
            "You have escaped death, a fact represented by the following benefits:",
            {
              "type": "list",
              "items": [
                "You have advantage on saving throws against disease and being {@condition poisoned}, and you have resistance to poison damage.",
                "You have advantage on death saving throws.",
                "You don't need to eat, drink, or breathe.",
                "You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in an inactive, motionless state, during which you retain consciousness."
              ]
            }
          ]
        },
        {
          "type": "entries",
          "name": "Knowledge from a Past Life",
          "entries": [
            "You temporarily remember glimpses of the past, perhaps faded memories from ages ago or a previous life. When you make an ability check that uses a skill, you can roll a {@dice d6} immediately after seeing the number on the {@dice d20} and add the number on the {@dice d6} to the check. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Satyr",
      "source": "MOT",
      "page": 24,
      "reprintedAs": [
        "Satyr|MPMM"
      ],
      "creatureTypes": [
        "fey"
      ],
      "size": [
        "M"
      ],
      "speed": 35,
      "ability": [
        {
          "cha": 2,
          "dex": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 56,
        "heightMod": "2d8",
        "baseWeight": 100,
        "weightMod": "2d4"
      },
      "age": {
        "mature": 20,
        "max": 100
      },
      "traitTags": [
        "Magic Resistance",
        "Natural Weapon"
      ],
      "skillProficiencies": [
        {
          "performance": true,
          "persuasion": true
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "sylvan": true
        }
      ],
      "toolProficiencies": [
        {
          "musical instrument": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Satyrs mature and age at about the same rate as humans."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Satyrs delight in living a life free of the mantle of law. They gravitate toward being good, but some have devious streaks and enjoy causing dismay."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Satyrs range from just under 5 feet to about 6 feet in height, with generally slender builds. Your size is Medium."
          ]
        },
        {
          "name": "Fey",
          "entries": [
            "Your creature type is fey, rather than humanoid."
          ],
          "type": "entries"
        },
        {
          "name": "Ram",
          "entries": [
            "You can use your head and horns to make unarmed strikes. If you hit with them, you deal bludgeoning damage equal to {@damage 1d4} + your Strength modifier."
          ],
          "type": "entries"
        },
        {
          "name": "Magic Resistance",
          "entries": [
            "You have advantage on saving throws against spells and other magical effects."
          ],
          "type": "entries"
        },
        {
          "name": "Mirthful Leaps",
          "entries": [
            "Whenever you make a long or high jump, you can roll a {@dice d8} and add the number rolled to the number of feet you cover, even when making a standing jump. This extra distance costs movement as normal."
          ],
          "type": "entries"
        },
        {
          "name": "Reveler",
          "entries": [
            "You have proficiency in the {@skill Performance} and {@skill Persuasion} skills, and you have proficiency with one {@item musical instrument|PHB} of your choice."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Sylvan."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Satyr",
      "source": "MPMM",
      "page": 29,
      "lineage": "VRGR",
      "creatureTypes": [
        "fey"
      ],
      "size": [
        "M"
      ],
      "speed": 35,
      "traitTags": [
        "Magic Resistance",
        "Natural Weapon"
      ],
      "skillProficiencies": [
        {
          "performance": true,
          "persuasion": true
        }
      ],
      "toolProficiencies": [
        {
          "musical instrument": true
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Creature Type",
          "entries": [
            "You are a Fey."
          ]
        },
        {
          "type": "entries",
          "name": "Ram",
          "entries": [
            "You can use your head and horns to make unarmed strikes. When you hit with them, the strike deals {@damage 1d6} + your Strength modifier bludgeoning damage, instead of the bludgeoning damage normal for an unarmed strike."
          ]
        },
        {
          "type": "entries",
          "name": "Magic Resistance",
          "entries": [
            "You have advantage on saving throws against spells."
          ]
        },
        {
          "type": "entries",
          "name": "Mirthful Leaps",
          "entries": [
            "Whenever you make a long jump or a high jump, you can roll a {@dice d8} and add the number rolled to the number of feet you cover, even when making a standing jump. This extra distance costs movement as usual."
          ]
        },
        {
          "type": "entries",
          "name": "Reveler",
          "entries": [
            "As an embodiment of revelry, you have proficiency in the {@skill Performance} and {@skill Persuasion} skills, and you have proficiency with one {@item musical instrument|PHB} of your choice."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Sea Elf",
      "source": "MPMM",
      "page": 30,
      "lineage": "VRGR",
      "creatureTypes": [
        "humanoid"
      ],
      "creatureTypeTags": [
        "elf"
      ],
      "size": [
        "M"
      ],
      "speed": {
        "walk": 30,
        "swim": true
      },
      "age": {
        "max": 750
      },
      "darkvision": 60,
      "traitTags": [
        "Amphibious",
        "Improved Resting",
        "Tool Proficiency",
        "Weapon Proficiency"
      ],
      "skillProficiencies": [
        {
          "perception": true
        }
      ],
      "resist": [
        "cold"
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Creature Type",
          "entries": [
            "You are a Humanoid. You are also considered an elf for any prerequisite or effect that requires you to be an elf."
          ]
        },
        {
          "type": "entries",
          "name": "Speed",
          "entries": [
            "Your walking speed is 30 feet, and you have a swimming speed equal to your walking speed."
          ]
        },
        {
          "type": "entries",
          "name": "Child of the Sea",
          "entries": [
            "You can breathe air and water, and you have a resistance to cold damage."
          ]
        },
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
          ]
        },
        {
          "type": "entries",
          "name": "Fey Ancestry",
          "entries": [
            "You have advantage on saving throws you make to avoid or end the {@condition charmed} condition on yourself."
          ]
        },
        {
          "type": "entries",
          "name": "Friend of the Sea",
          "entries": [
            "Aquatic animals have an extraordinary affinity with your people. You can communicate simple ideas to any Beast that has a swimming speed. It can understand your words, though you have no special ability to understand it in return."
          ]
        },
        {
          "type": "entries",
          "name": "Keen Senses",
          "entries": [
            "You have proficiency in the {@skill Perception} skill."
          ]
        },
        {
          "type": "entries",
          "name": "Trance",
          "entries": [
            "You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness.",
            "Whenever you finish this trance, you can gain two proficiencies that you don't have, each one with a {@book weapon|phb|5|weapons} or a {@book tool|phb|5|tools} of your choice selected from the Player's Handbook. You mystically acquire these proficiencies by drawing them from shared elven memory, and you retain them until you finish your next long rest."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Shadar-Kai",
      "source": "MPMM",
      "page": 31,
      "lineage": "VRGR",
      "creatureTypes": [
        "humanoid"
      ],
      "creatureTypeTags": [
        "elf"
      ],
      "size": [
        "M"
      ],
      "speed": 30,
      "age": {
        "max": 750
      },
      "darkvision": 60,
      "traitTags": [
        "Improved Resting",
        "Tool Proficiency",
        "Weapon Proficiency"
      ],
      "skillProficiencies": [
        {
          "perception": true
        }
      ],
      "resist": [
        "necrotic"
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Creature Type",
          "entries": [
            "You are a Humanoid. You are also considered an elf for any prerequisite or effect that requires you to be an elf."
          ]
        },
        {
          "type": "entries",
          "name": "Blessing of the Raven Queen",
          "entries": [
            "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
            "Starting at 3rd level, you also gain resistance to all damage when you teleport using this trait. The resistance lasts until the start of your next turn. During that time, you appear ghostly and translucent."
          ]
        },
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
          ]
        },
        {
          "type": "entries",
          "name": "Fey Ancestry",
          "entries": [
            "You have advantage on saving throws you make to avoid or end the {@condition charmed} condition on yourself."
          ]
        },
        {
          "type": "entries",
          "name": "Keen Senses",
          "entries": [
            "You have proficiency in the {@skill Perception} skill."
          ]
        },
        {
          "type": "entries",
          "name": "Necrotic Resistance",
          "entries": [
            "You have resistance to necrotic damage."
          ]
        },
        {
          "type": "entries",
          "name": "Trance",
          "entries": [
            "You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness.",
            "Whenever you finish this trance, you can gain two proficiencies that you don't have, each one with a {@book weapon|phb|5|weapons} or a {@book tool|phb|5|tools} of your choice selected from the Player's Handbook. You mystically acquire these proficiencies by drawing them from shared elven memory, and you retain them until you finish your next long rest."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Shifter",
      "source": "ERLW",
      "page": 33,
      "reprintedAs": [
        "Shifter|MPMM"
      ],
      "size": [
        "M"
      ],
      "speed": 30,
      "heightAndWeight": {
        "baseHeight": 54,
        "heightMod": "2d8",
        "baseWeight": 90,
        "weightMod": "2d4"
      },
      "age": {
        "mature": 10,
        "max": 70
      },
      "darkvision": 60,
      "languageProficiencies": [
        {
          "common": true
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Age",
          "entries": [
            "Shifters are quick to mature both physically and emotionally, reaching young adulthood at age 10. They rarely live to be more than 70 years old."
          ]
        },
        {
          "type": "entries",
          "name": "Alignment",
          "entries": [
            "Shifters tend toward neutrality, being more focused on survival than concepts of good and evil. A love of personal freedom can drive shifters toward chaotic alignments."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Your size is Medium."
          ]
        },
        {
          "type": "entries",
          "name": "Speed",
          "entries": [
            "Your base walking speed is 30 feet."
          ]
        },
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ]
        },
        {
          "type": "entries",
          "name": "Shifting",
          "entries": [
            "As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to your level + your Constitution modifier (minimum of 1 temporary hit point). You also gain additional benefits that depend on your shifter subrace, described below.",
            "Once you shift, you can't do so again until you finish a short or long rest."
          ]
        },
        {
          "type": "entries",
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Shifter",
      "source": "MPMM",
      "page": 32,
      "lineage": "VRGR",
      "size": [
        "M"
      ],
      "speed": 30,
      "darkvision": 60,
      "skillProficiencies": [
        {
          "choose": {
            "from": [
              "acrobatics",
              "athletics",
              "intimidation",
              "survival"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Bestial Instincts",
          "entries": [
            "Channeling the beast within, you have proficiency in one of the following skills of your choice: {@skill Acrobatics}, {@skill Athletics}, {@skill Intimidation}, or {@skill Survival}."
          ]
        },
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were in dim light. You discern colors in that darkness only as shades of gray."
          ]
        },
        {
          "type": "entries",
          "name": "Shifting",
          "entries": [
            "As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to 2 × your proficiency bonus. You can shift a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
            "Whenever you shift, you gain an additional benefit based on one of the following options (choose when you select this race):",
            {
              "type": "list",
              "items": [
                {
                  "type": "item",
                  "name": "Beasthide",
                  "entry": "You gain {@dice 1d6} additional temporary hit points. While shifted, you have a +1 bonus to your Armor Class."
                },
                {
                  "type": "item",
                  "name": "Longtooth",
                  "entry": "When you shift and as a bonus action on your other turns while shifted, you can use your elongated fangs to make an unarmed strike. If you hit with your fangs, you can deal piercing damage equal to {@dice 1d6} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike."
                },
                {
                  "type": "item",
                  "name": "Swiftstride",
                  "entry": "While shifted, your walking speed increases by 10 feet. Additionally, you can move up to 10 feet as a reaction when a creature ends its turn within 5 feet of you. This reactive movement doesn't provoke opportunity attacks."
                },
                {
                  "type": "item",
                  "name": "Wildhunt",
                  "entry": "While shifted, you have advantage on Wisdom checks, and no creature within 30 feet of you can make an attack roll with advantage against you unless you're {@condition incapacitated}."
                }
              ],
              "style": "list-hang-notitle"
            }
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true,
      "_versions": [
        {
          "name": "Shifter; Beasthide",
          "source": "MPMM",
          "_mod": {
            "entries": {
              "mode": "replaceArr",
              "replace": "Shifting",
              "items": {
                "name": "Shifting (Beasthide)",
                "type": "entries",
                "entries": [
                  "As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to 2 × your proficiency bonus + {@dice 1d6}, and you regain all expended uses when you finish a long rest.",
                  "While shifted, you have a +1 bonus to your Armor Class."
                ]
              }
            }
          }
        },
        {
          "name": "Shifter; Longtooth",
          "source": "MPMM",
          "_mod": {
            "entries": {
              "mode": "replaceArr",
              "replace": "Shifting",
              "items": {
                "name": "Shifting (Longtooth)",
                "type": "entries",
                "entries": [
                  "As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to 2 × your proficiency bonus, and you regain all expended uses when you finish a long rest.",
                  "When you shift and as a bonus action on your other turns while shifted, you can use your elongated fangs to make an unarmed strike. If you hit with your fangs, you can deal piercing damage equal to {@dice 1d6} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike."
                ]
              }
            }
          }
        },
        {
          "name": "Shifter; Swiftstride",
          "source": "MPMM",
          "_mod": {
            "entries": {
              "mode": "replaceArr",
              "replace": "Shifting",
              "items": {
                "name": "Shifting (Swiftstride)",
                "type": "entries",
                "entries": [
                  "As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to 2 × your proficiency bonus, and you regain all expended uses when you finish a long rest.",
                  "While shifted, your walking speed increases by 10 feet. Additionally, you can move up to 10 feet as a reaction when a creature ends its turn within 5 feet of you. This reactive movement doesn't provoke opportunity attacks."
                ]
              }
            }
          }
        },
        {
          "name": "Shifter; Wildhunt",
          "source": "MPMM",
          "_mod": {
            "entries": {
              "mode": "replaceArr",
              "replace": "Shifting",
              "items": {
                "name": "Shifting (Wildhunt)",
                "type": "entries",
                "entries": [
                  "As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to 2 × your proficiency bonus, and you regain all expended uses when you finish a long rest.",
                  "While shifted, you have advantage on Wisdom checks, and no creature within 30 feet of you can make an attack roll with advantage against you unless you're {@condition incapacitated}."
                ]
              }
            }
          }
        }
      ]
    },
    {
      "name": "Simic Hybrid",
      "source": "GGR",
      "page": 20,
      "size": [
        "M"
      ],
      "speed": {
        "walk": 30
      },
      "ability": [
        {
          "con": 2,
          "choose": {
            "from": [
              "str",
              "dex",
              "int",
              "wis",
              "cha"
            ],
            "count": 1
          }
        }
      ],
      "darkvision": 60,
      "traitTags": [
        "Amphibious",
        "Natural Armor",
        "Natural Weapon"
      ],
      "languageProficiencies": [
        {
          "common": true,
          "choose": {
            "from": [
              "elvish",
              "other"
            ],
            "count": 1
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Age",
          "entries": [
            "Hybrids begin their lives as adult humans, elves, or vedalken. They age at a slightly accelerated rate, so their maximum life spans are probably reduced somewhat. The Guardian Project has not been operating long enough to observe the full effect of this phenomenon."
          ]
        },
        {
          "type": "entries",
          "name": "Alignment",
          "entries": [
            "Most hybrids share the generally neutral outlook of the Simic Combine. They are more interested in scientific research and the standing of their guild than in moral or ethical questions. Those who leave the Combine, however, often do so because their philosophical outlook and alignment are more in line with a different guild's."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Your size is Medium, within the normal range of your humanoid base race."
          ]
        },
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ]
        },
        {
          "type": "entries",
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and your choice of Elvish or Vedalken."
          ]
        },
        {
          "type": "entries",
          "name": "Animal Enhancement",
          "entries": [
            "Your body has been altered to incorporate certain animal characteristics. You choose one animal enhancement now and a second enhancement at 5th level.",
            "At 1st level, choose one of the following options:",
            {
              "type": "list",
              "style": "list-hang-notitle",
              "items": [
                {
                  "type": "item",
                  "name": "Manta Glide",
                  "entry": "You have ray-like fins that you can use as wings to slow your fall or allow you to glide. When you fall and aren't {@condition incapacitated}, you can subtract up to 100 feet from the fall when calculating falling damage, and you can move up to 2 feet horizontally for every 1 foot you descend."
                },
                {
                  "type": "item",
                  "name": "Nimble Climber",
                  "entry": "You have a climbing speed equal to your walking speed."
                },
                {
                  "type": "item",
                  "name": "Underwater Adaptation",
                  "entry": "You can breathe air and water, and you have a swimming speed equal to your walking speed."
                }
              ]
            },
            "At 5th level, your body evolves further, developing new characteristics. Choose one of the options you didn't take at 1st level, or one of the following options:",
            {
              "type": "list",
              "style": "list-hang-notitle",
              "items": [
                {
                  "type": "item",
                  "name": "Grappling Appendage",
                  "entry": "You have two special appendages growing alongside your arms. Choose whether they're both claws or tentacles. As an action, you can use one of them to try to grapple a creature. Each one is also a natural weapon, which you can use to make an unarmed strike. If you hit with it, the target takes bludgeoning damage equal to {@dice 1d6} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike. Immediately after hitting, you can try to grapple the target as a bonus action. These appendages can't precisely manipulate anything and can't wield weapons, magic items, or other specialized equipment."
                },
                {
                  "type": "item",
                  "name": "Carapace",
                  "entry": "Your skin in places is covered by a thick shell. You gain a +1 bonus to AC when you're not wearing heavy armor."
                },
                {
                  "type": "item",
                  "name": "Acid Spit",
                  "entry": "As an action, you can spray acid from glands in your mouth, targeting one creature or object you can see within 30 feet of you. The target takes {@dice 2d10} acid damage unless it succeeds on a Dexterity saving throw against a DC equal to 8 + your Constitution modifier + your proficiency bonus. This damage increases by {@dice 1d10} when you reach 11th level ({@dice 3d10}) and 17th level ({@dice 4d10}). You can use this trait a number of times equal to your Constitution modifier (minimum of once), and you regain all expended uses of it when you finish a long rest."
                }
              ]
            }
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Siren",
      "source": "PSX",
      "page": 17,
      "size": [
        "M"
      ],
      "speed": {
        "walk": 25,
        "fly": 30
      },
      "ability": [
        {
          "cha": 2
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "other": true
        }
      ],
      "additionalSpells": [
        {
          "known": {
            "1": [
              "friends#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Most sirens lean toward chaotic alignment, cherishing the freedom and independence that comes from joining a pirate crew."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Sirens stand about 5 to 6 feet tall, but their bodies are slender and their bones partially hollow to facilitate their flight. Your size is Medium."
          ]
        },
        {
          "type": "entries",
          "name": "Siren's Song",
          "entries": [
            "You know the {@spell friends} cantrip and can cast it without material components."
          ]
        },
        {
          "type": "entries",
          "name": "Flight",
          "entries": [
            "You have a flying speed of 30 feet. You can't use your flying speed while you wear medium or heavy armor. (If your campaign uses the variant rule for {@variantrule encumbrance|PHB}, you can't use your flying speed if you are encumbered.)"
          ]
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write {@language Common Trade Pidgin|PSX|Common} (if it exists in your campaign) and {@language Siren|PSX}."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Skeleton",
      "source": "DMG",
      "page": 282,
      "creatureTypes": [
        "undead"
      ],
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "dex": 2,
          "int": -4,
          "cha": -4
        }
      ],
      "darkvision": 60,
      "traitTags": [
        "Improved Resting",
        "NPC Race"
      ],
      "immune": [
        "poison"
      ],
      "vulnerable": [
        "bludgeoning"
      ],
      "conditionImmune": [
        "exhaustion",
        "poisoned"
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Creature Type",
          "entries": [
            "You are Undead."
          ]
        },
        {
          "type": "entries",
          "name": "Brittle Bones",
          "entries": [
            "You are vulnerable to bludgeoning damage."
          ]
        },
        {
          "type": "entries",
          "name": "Undead Nature",
          "entries": [
            "You are immune to poison damage and {@condition exhaustion}, and you can't be {@condition poisoned}. You don't require air, food, drink, or sleep."
          ]
        },
        {
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can't speak, but you can understand the languages you knew in life."
          ],
          "type": "entries"
        }
      ]
    },
    {
      "name": "Strig",
      "source": "HWCS",
      "page": 20,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "str": 2
        }
      ],
      "darkvision": 60,
      "languageProficiencies": [
        {
          "other": true,
          "auran": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Strigs reach maturity faster than most birdfolk races, around 15 years. They can reach a respectable old age by birdfolk standards, living around 80 years."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Strigs are normally good aligned, having a strong sense of fair play as well as a tendency to see the best in others. They also favor chaotic alignments, as strigs are a freedom-loving people who will usually put their personal morals above any imposed system of governance."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Strigs are muscular, imposing folk ranging from 4 to over 5 feet tall and weighing around 110 pounds. Your size is Medium."
          ]
        },
        {
          "name": "Speed",
          "type": "entries",
          "entries": [
            "Your base walking speed is 30 feet."
          ]
        },
        {
          "name": "Glide",
          "type": "entries",
          "entries": [
            "Using your feathered arms, you can slow your fall, and glide short distances. When falling you can use your reaction to spread your arms, stiffen your wing feathers, and slow your descent. While doing so, you continue to fall gently at a speed of 60 feet per round, taking no fall damage when you land. If you would fall at least 10 feet in this way, you may fly up to your movement speed in one direction you choose, although you cannot choose to move upwards, landing in the space you finish your movement. You cannot glide while carrying heavy weapons or wielding a shield (though you may drop any held items as part of your reaction to spread your arms). You cannot glide while wearing heavy armor, or if you are encumbered."
          ]
        },
        {
          "name": "Talons",
          "type": "entries",
          "entries": [
            "Your sharp claws aid you in unarmed combat and while climbing. Your damage for an unarmed strike is {@damage 1d4} piercing damage. Additionally, you have advantage on Strength ({@skill Athletics}) checks made to climb any surface your talons could reasonably grip."
          ]
        },
        {
          "name": "Darkvision",
          "type": "entries",
          "entries": [
            "You are adept at hunting under the cover of night. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ]
        },
        {
          "name": "Patterned Feathers",
          "type": "entries",
          "entries": [
            "You have advantage on Dexterity ({@skill Stealth}) checks when you attempt to hide in a forest."
          ]
        },
        {
          "name": "Languages",
          "type": "entries",
          "entries": [
            "You can speak, read, and write Birdfolk. You can also understand Auran, though you cannot speak it naturally."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Tabaxi",
      "source": "MPMM",
      "page": 33,
      "lineage": "VRGR",
      "size": [
        "S",
        "M"
      ],
      "speed": {
        "walk": 30,
        "climb": true
      },
      "darkvision": 60,
      "traitTags": [
        "Natural Weapon"
      ],
      "skillProficiencies": [
        {
          "perception": true,
          "stealth": true
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "You are Medium or Small. You choose the size when you select this race."
          ]
        },
        {
          "type": "entries",
          "name": "Speed",
          "entries": [
            "Your walking speed is 30 feet, and you have a climbing speed equal to your walking speed."
          ]
        },
        {
          "type": "entries",
          "name": "Cat's Claws",
          "entries": [
            "You can use your claws to make unarmed strikes. When you hit with them, the strike deals {@damage 1d6} + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike."
          ]
        },
        {
          "type": "entries",
          "name": "Cat's Talent",
          "entries": [
            "You have proficiency in the {@skill Perception} and {@skill Stealth} skills."
          ]
        },
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
          ]
        },
        {
          "type": "entries",
          "name": "Feline Agility",
          "entries": [
            "Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet on one of your turns."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Tabaxi",
      "source": "VGM",
      "page": 113,
      "otherSources": [
        {
          "source": "EGW",
          "page": 179
        }
      ],
      "reprintedAs": [
        "Tabaxi|MPMM"
      ],
      "size": [
        "M"
      ],
      "speed": {
        "walk": 30,
        "climb": 20
      },
      "ability": [
        {
          "dex": 2,
          "cha": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 58,
        "heightMod": "2d10",
        "baseWeight": 90,
        "weightMod": "2d4"
      },
      "age": {
        "mature": 20,
        "max": 100
      },
      "darkvision": 60,
      "traitTags": [
        "Natural Weapon"
      ],
      "skillProficiencies": [
        {
          "perception": true,
          "stealth": true
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "anyStandard": 1
        }
      ],
      "soundClip": {
        "type": "internal",
        "path": "races/tabaxi.mp3"
      },
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Tabaxi have lifespans equivalent to humans."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Tabaxi are taller on average than humans and relatively slender. Your size is Medium."
          ]
        },
        {
          "name": "Darkvision",
          "entries": [
            "You have a cat's keen senses, especially in the dark. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Feline Agility",
          "entries": [
            "Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet on one of your turns."
          ],
          "type": "entries"
        },
        {
          "name": "Cat's Claws",
          "entries": [
            "Because of your claws, you have a climbing speed of 20 feet. In addition, your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to {@damage 1d4} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike."
          ],
          "type": "entries"
        },
        {
          "name": "Cat's Talents",
          "entries": [
            "You have proficiency in the {@skill Perception} and {@skill Stealth} skills."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and one other language of your choice."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Thri-kreen",
      "source": "AAG",
      "page": 15,
      "lineage": "VRGR",
      "creatureTypes": [
        "monstrosity"
      ],
      "size": [
        "S",
        "M"
      ],
      "speed": 30,
      "darkvision": 60,
      "traitTags": [
        "Improved Resting",
        "Natural Armor"
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Creature Type",
          "entries": [
            "You are a Monstrosity."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "You are Medium or Small. You choose the size when you select this race."
          ]
        },
        {
          "type": "entries",
          "name": "Chameleon Carapace",
          "entries": [
            "While you aren't wearing armor, your carapace gives you a base Armor Class of 13 + your Dexterity modifier.",
            "As an action, you can change the color of your carapace to match the color and texture of your surroundings, giving you advantage on Dexterity ({@skill Stealth}) checks made to {@action hide} in those surroundings."
          ]
        },
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of yourself as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
          ]
        },
        {
          "type": "entries",
          "name": "Secondary Arms",
          "entries": [
            "You have two slightly smaller secondary arms below your primary pair of arms. The secondary arms can manipulate an object, open or close a door or container, pick up or set down a Tiny object, or wield a weapon that has the light property."
          ]
        },
        {
          "type": "entries",
          "name": "Sleepless",
          "entries": [
            "You do not require sleep and can remain conscious during a long rest, though you must still refrain from strenuous activity to gain the benefit of the rest."
          ]
        },
        {
          "type": "entries",
          "name": "Thri-kreen Telepathy",
          "entries": [
            "Without the assistance of magic, you can't speak the non-thri-kreen languages you know. Instead you use telepathy to convey your thoughts. You have the magical ability to transmit your thoughts mentally to willing creatures within 120 feet of yourself. A contacted creature doesn't need to share a language with you to understand your thoughts, but it must be able to understand at least one language. Your telepathic link to a creature is broken if you and the creature move more than 120 feet apart, if either of you is {@condition incapacitated}, or if either of you mentally breaks the contact (no action required)."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Tiefling",
      "source": "PHB",
      "page": 42,
      "srd": true,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "cha": 2,
          "int": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 57,
        "heightMod": "2d8",
        "baseWeight": 110,
        "weightMod": "2d4"
      },
      "age": {
        "mature": 20,
        "max": 100
      },
      "darkvision": 60,
      "traitTags": [
        "Uncommon Race"
      ],
      "languageProficiencies": [
        {
          "common": true,
          "infernal": true
        }
      ],
      "resist": [
        "fire"
      ],
      "soundClip": {
        "type": "internal",
        "path": "races/tiefling.mp3"
      },
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "hellish rebuke#2"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "darkness"
                ]
              }
            }
          },
          "ability": "cha",
          "known": {
            "1": [
              "thaumaturgy#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Tieflings mature at the same rate as humans but live a few years longer."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Tieflings are about the same size and build as humans. Your size is Medium."
          ]
        },
        {
          "name": "Darkvision",
          "entries": [
            "Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Hellish Resistance",
          "entries": [
            "You have resistance to fire damage."
          ],
          "type": "entries"
        },
        {
          "name": "Infernal Legacy",
          "entries": [
            "You know the {@spell thaumaturgy} cantrip. Once you reach 3rd level, you can cast the {@spell hellish rebuke} spell as a 2nd-level spell with this trait; you regain the ability to cast it when you finish a long rest. Once you reach 5th level, you can also cast the {@spell darkness} spell once per day with this trait; you regain the ability to cast it when you finish a long rest. Charisma is your spellcasting ability for these spells."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Infernal."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Tortle",
      "source": "MPMM",
      "page": 34,
      "lineage": "VRGR",
      "size": [
        "S",
        "M"
      ],
      "speed": 30,
      "traitTags": [
        "Natural Armor",
        "Natural Weapon"
      ],
      "skillProficiencies": [
        {
          "choose": {
            "from": [
              "animal handling",
              "medicine",
              "nature",
              "perception",
              "stealth",
              "survival"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "You are Medium or Small. You choose the size when you select this race."
          ]
        },
        {
          "type": "entries",
          "name": "Claws",
          "entries": [
            "You have claws that you can use to make unarmed strikes. When you hit with them, the strike deals {@damage 1d6} + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike."
          ]
        },
        {
          "type": "entries",
          "name": "Hold Breath",
          "entries": [
            "You can hold your breath for up to 1 hour."
          ]
        },
        {
          "type": "entries",
          "name": "Natural Armor",
          "entries": [
            "Your shell provides you a base AC of 17 (your Dexterity modifier doesn't affect this number). You can't wear light, medium, or heavy armor, but if you are using a shield, you can apply the shield's bonus as normal."
          ]
        },
        {
          "type": "entries",
          "name": "Nature's Intuition",
          "entries": [
            "Thanks to your mystical connection to nature, you gain proficiency with one of the following skills of your choice: {@skill Animal Handling}, {@skill Medicine}, {@skill Nature}, {@skill Perception}, {@skill Stealth}, or {@skill Survival}."
          ]
        },
        {
          "type": "entries",
          "name": "Shell Defense",
          "entries": [
            "You can withdraw into your shell as an action. Until you emerge, you gain a +4 bonus to your AC, and you have advantage on Strength and Constitution saving throws. While in your shell, you are {@condition prone}, your speed is 0 and can't increase, you have disadvantage on Dexterity saving throws, you can't take reactions, and the only action you can take is a bonus action to emerge from your shell."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Tortle",
      "source": "TTP",
      "page": 3,
      "otherSources": [
        {
          "source": "EGW",
          "page": 181
        }
      ],
      "reprintedAs": [
        "Tortle|MPMM"
      ],
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "str": 2,
          "wis": 1
        }
      ],
      "age": {
        "mature": 15,
        "max": 50
      },
      "traitTags": [
        "Natural Armor",
        "Natural Weapon"
      ],
      "skillProficiencies": [
        {
          "survival": true
        }
      ],
      "languageProficiencies": [
        {
          "aquan": true,
          "common": true
        }
      ],
      "entries": [
        {
          "type": "entries",
          "entries": [
            "{@note The Tortle Package is considered part of Xanathar's Guide to Everything for Adventurers League character creation.}"
          ]
        },
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Young tortles crawl for a few weeks after birth before learning to walk on two legs. They reach adulthood by the age of 15 and live an average of 50 years."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Tortles tend to lead orderly, ritualistic lives. They develop customs and routines, becoming more set in their ways as they age. Most are lawful good. A few can be selfish and greedy, tending more toward evil, but it's unusual for a tortle to shuck off order in favor of chaos."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Tortle adults stand 5 to 6 feet tall and average 450 pounds. Their shells account for roughly one-third of their weight. Your size is Medium."
          ]
        },
        {
          "name": "Claws",
          "entries": [
            "Your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to {@damage 1d4} + your Strength modifier, instead of bludgeoning damage normal for an unarmed strike."
          ],
          "type": "entries"
        },
        {
          "name": "Hold Breath",
          "entries": [
            "You can hold your breath for up to 1 hour at a time. Tortles aren't natural swimmers, but they can remain underwater for some time before needing to come up for air."
          ],
          "type": "entries"
        },
        {
          "name": "Natural Armor",
          "entries": [
            "Due to your shell and the shape of your body, you are ill-suited to wearing armor. Your shell provides ample protection, however; it gives you a base AC of 17 (your Dexterity modifier doesn't affect this number). You gain no benefit from wearing armor, but if you are using a shield, you can apply the shield's bonus as normal."
          ],
          "type": "entries"
        },
        {
          "name": "Shell Defense",
          "entries": [
            "You can withdraw into your shell as an action. Until you emerge, you gain a +4 bonus to AC, and you have advantage on Strength and Constitution saving throws. While in your shell, you are {@condition prone}, your speed is 0 and can't increase, you have disadvantage on Dexterity saving throws, you can't take reactions, and the only action you can take is a bonus action to emerge from your shell."
          ],
          "type": "entries"
        },
        {
          "name": "Survival Instinct",
          "entries": [
            "You gain proficiency in the {@skill Survival} skill. Tortles have finely honed survival instincts."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Aquan and Common."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Triton",
      "source": "MOT",
      "page": 26,
      "_copy": {
        "name": "Triton",
        "source": "VGM",
        "_mod": {
          "entries": [
            {
              "mode": "appendArr",
              "items": {
                "name": "Alignment",
                "type": "entries",
                "entries": [
                  "Tritons tend toward neutrality. Their culture encourages them to be mindful of life's currents, knowing when to harness fate's tides and when to flow along with them."
                ]
              }
            }
          ]
        },
        "_preserve": {
          "reprintedAs": true
        }
      },
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Triton",
      "source": "MPMM",
      "page": 35,
      "lineage": "VRGR",
      "size": [
        "M"
      ],
      "speed": {
        "walk": 30,
        "swim": true
      },
      "darkvision": 60,
      "traitTags": [
        "Amphibious"
      ],
      "resist": [
        "cold"
      ],
      "additionalSpells": [
        {
          "innate": {
            "1": {
              "daily": {
                "1": [
                  "fog cloud"
                ]
              }
            },
            "3": {
              "daily": {
                "1": [
                  "gust of wind"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "water walk"
                ]
              }
            }
          },
          "ability": {
            "choose": [
              "int",
              "wis",
              "cha"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Speed",
          "entries": [
            "Your walking speed is 30 feet, and you have a swimming speed equal to your walking speed."
          ]
        },
        {
          "type": "entries",
          "name": "Amphibious",
          "entries": [
            "You can breathe air and water."
          ]
        },
        {
          "type": "entries",
          "name": "Control Air and Water",
          "entries": [
            "You can cast {@spell fog cloud} with this trait. Starting at 3rd level, you can cast the {@spell gust of wind} spell with this trait. Starting at 5th level, you can also cast the {@spell water walk} spell with it. Once you cast any of these spells with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast these spells using any spell slots you have of the appropriate level.",
            "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race)."
          ]
        },
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
          ]
        },
        {
          "type": "entries",
          "name": "Emissary of the Sea",
          "entries": [
            "You can communicate simple ideas to any Beast, Elemental, or Monstrosity that has a swimming speed. It can understand your words, though you have no special ability to understand it in return."
          ]
        },
        {
          "type": "entries",
          "name": "Guardian of the Depths",
          "entries": [
            "Adapted to the frigid ocean depths, you have resistance to cold damage."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Triton",
      "source": "VGM",
      "page": 115,
      "reprintedAs": [
        "Triton|MPMM"
      ],
      "size": [
        "M"
      ],
      "speed": {
        "walk": 30,
        "swim": 30
      },
      "ability": [
        {
          "str": 1,
          "cha": 1,
          "con": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 54,
        "heightMod": "2d10",
        "baseWeight": 90,
        "weightMod": "2d4"
      },
      "age": {
        "mature": 15,
        "max": 200
      },
      "darkvision": 60,
      "traitTags": [
        "Amphibious"
      ],
      "languageProficiencies": [
        {
          "common": true,
          "primordial": true
        }
      ],
      "resist": [
        "cold"
      ],
      "soundClip": {
        "type": "internal",
        "path": "races/triton.mp3"
      },
      "additionalSpells": [
        {
          "innate": {
            "1": {
              "daily": {
                "1": [
                  "fog cloud"
                ]
              }
            },
            "3": {
              "daily": {
                "1": [
                  "gust of wind"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "wall of water|xge"
                ]
              }
            }
          },
          "ability": "cha"
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Tritons reach maturity around age 15 and can live up to 200 years."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Tritons are slightly shorter than humans, averaging about 5 feet tall. Your size is Medium."
          ]
        },
        {
          "name": "Swim Speed",
          "entries": [
            "You have a swimming speed of 30 feet."
          ],
          "type": "entries"
        },
        {
          "name": "Amphibious",
          "entries": [
            "You can breathe air and water."
          ],
          "type": "entries"
        },
        {
          "name": "Control Air and Water",
          "entries": [
            "A child of the sea, you can call on the magic of elemental air and water. You can cast {@spell fog cloud} with this trait. Starting at 3rd level, you can cast {@spell gust of wind} with it, and starting at 5th level, you can also cast {@spell wall of water|xge} with it. Once you cast a spell with this trait, you can't cast that spell with it again until you finish a long rest. Charisma is your spellcasting ability for these spells."
          ],
          "type": "entries"
        },
        {
          "name": "Darkvision",
          "type": "entries",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ]
        },
        {
          "name": "Emissary of the Sea",
          "entries": [
            "Aquatic beasts have an extraordinary affinity with your people. You can communicate simple ideas with beasts that can breathe water. They can understand the meaning of your words, though you have no special ability to understand them in return."
          ],
          "type": "entries"
        },
        {
          "name": "Guardians of the Depths",
          "entries": [
            "Adapted to even the most extreme ocean depths, you have resistance to cold damage."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Primordial."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Troglodyte",
      "source": "DMG",
      "page": 282,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "str": 2,
          "con": 2,
          "int": -4,
          "cha": -4
        }
      ],
      "darkvision": 60,
      "traitTags": [
        "Natural Armor",
        "NPC Race",
        "Sunlight Sensitivity"
      ],
      "languageProficiencies": [
        {
          "other": true
        }
      ],
      "entries": [
        {
          "name": "Chameleon Skin",
          "type": "entries",
          "entries": [
            "You have advantage on Dexterity ({@skill Stealth}) checks made to hide."
          ]
        },
        {
          "name": "Stench",
          "type": "entries",
          "entries": [
            "Any creature other than a troglodyte that starts its turn within 5 ft. of you must succeed on a DC 12 Constitution saving throw or be {@condition poisoned} until the start of the creature's next turn. On a successful saving throw, the creature is immune to the stench of all troglodytes for 1 hour."
          ]
        },
        {
          "name": "Sunlight Sensitivity",
          "type": "entries",
          "entries": [
            "While in sunlight, you have disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight."
          ]
        },
        {
          "name": "Natural Armor",
          "entries": [
            "Your thick hide grants you a +1 bonus to Armor Class."
          ],
          "type": "entries"
        },
        {
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Troglodyte."
          ],
          "type": "entries"
        }
      ]
    },
    {
      "name": "Vampire",
      "source": "PSZ",
      "page": 14,
      "otherSources": [
        {
          "source": "PSX",
          "page": 14
        }
      ],
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "cha": 2
        }
      ],
      "darkvision": 60,
      "languageProficiencies": [
        {
          "common": true,
          "other": true
        }
      ],
      "resist": [
        "necrotic"
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Vampires don't mature and age in the same way that other races do. Every living vampire is either a bloodchief, infected by Ulamog's influence in the distant reaches of history, or was spawned by a bloodchief from a living human. Most vampires are thus very old, but few have any memory of their earliest years."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Vampires have no innate tendency toward evil, but consuming the life energy of other creatures often pushes them to that end. Regardless of their moral bent, the strict hierarchies of their bloodchiefs inclines them toward a lawful alignment."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Vampires are about the same size and build as humans. Your size is Medium."
          ]
        },
        {
          "name": "Blood Thirst",
          "entries": [
            "You can drain blood and life energy from a willing creature, or one that is {@condition grappled} by you, {@condition incapacitated}, or {@condition restrained}. Make a melee attack against the target. If you hit, you deal 1 piercing damage and {@dice 1d6} necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and you regain hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
          ],
          "type": "entries"
        },
        {
          "name": "Darkvision",
          "entries": [
            "Thanks to your heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Vampire."
          ],
          "type": "entries"
        },
        {
          "name": "Vampiric Resistance",
          "entries": [
            "You have resistance to necrotic damage."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Vedalken",
      "source": "GGR",
      "page": 21,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "int": 2,
          "wis": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 64,
        "heightMod": "2d10",
        "baseWeight": 110,
        "weightMod": "2d4"
      },
      "age": {
        "mature": 40,
        "max": 500
      },
      "traitTags": [
        "Skill Bonus Dice",
        "Tool Bonus Dice"
      ],
      "skillProficiencies": [
        {
          "choose": {
            "from": [
              "arcana",
              "history",
              "investigation",
              "medicine",
              "performance",
              "sleight of hand"
            ]
          }
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "other": true,
          "anyStandard": 1
        }
      ],
      "toolProficiencies": [
        {
          "any": 1
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Vedalken mature slower than humans do, reaching maturity around age 40. Their life span is typically 350 years, with some living to the age of 500."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Vedalken are usually lawful and non-evil."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Tall and slender, Vedalken stand 6 to 6½ feet tall on average and usually weigh less than 200 pounds. Your size is Medium."
          ]
        },
        {
          "type": "entries",
          "name": "Vedalken Dispassion",
          "entries": [
            "You have advantage on all Intelligence, Wisdom, and Charisma saving throws."
          ]
        },
        {
          "name": "Tireless Precision",
          "entries": [
            "You are proficient in one of the following skills of your choice: {@skill Arcana}, {@skill History}, {@skill Investigation}, {@skill Medicine}, {@skill Performance}, or {@skill Sleight of Hand}. You are also proficient with one {@book tool|phb|5|tools} of your choice.",
            "Whenever you make an ability check with the chosen skill or tool, roll a {@dice d4} and add the number rolled to the check's total."
          ],
          "type": "entries"
        },
        {
          "type": "entries",
          "name": "Partially Amphibious",
          "entries": [
            "By absorbing oxygen through your skin, you can breathe underwater for up to 1 hour. Once you've reached that limit, you can't use this trait again until you finish a long rest."
          ]
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common, Vedalken, and one other language of your choice."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Vedalken",
      "source": "PSK",
      "page": 23,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "int": 2,
          "wis": 1
        }
      ],
      "age": {
        "mature": 40,
        "max": 500
      },
      "languageProficiencies": [
        {
          "common": true,
          "other": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Vedalken mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Vedalken are most often lawful and rarely evil."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Vedalken are taller than humans but more slender. They average 6 to 6½ feet tall, but usually weigh less than 200 pounds. Your size is Medium."
          ]
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Vedalken. The Vedalken language is renowned for its technical treatises and its catalogs of knowledge about the natural world and the aether that pervades it."
          ],
          "type": "entries"
        },
        {
          "name": "Vedalken Cunning",
          "entries": [
            "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
          ],
          "type": "entries"
        },
        {
          "name": "Aether Lore",
          "entries": [
            "Whenever you make an Intelligence ({@skill History}) check related to magic items or aether-powered technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Verdan",
      "source": "AI",
      "page": 72,
      "size": [
        "V"
      ],
      "speed": 30,
      "ability": [
        {
          "con": 1,
          "cha": 2
        }
      ],
      "age": {
        "mature": 24,
        "max": 200
      },
      "skillProficiencies": [
        {
          "persuasion": true
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "goblin": true,
          "anyStandard": 1
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Verdan reach adulthood at around the age of 24, and it is thought that they might live to nearly 200 years old. However, because no verdan has died of old age since the race's initial creation, their upper age limits remain subject to speculation."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Verdan are generally good, although their absence of racial identity and shared history can sometimes see individual verdan become untethered from any moral or ethical framework."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Verdan start out similar in size to the goblins they were created from, ranging from 3 to 4 feet in height. But at some point after reaching maturity, each verdan undergoes a sudden growth spurt of 2 feet or more. At 1st level, you are a Small creature. When you reach 5th level, you become a Medium creature."
          ]
        },
        {
          "name": "Black Blood Healing",
          "entries": [
            "The black blood that is a sign of your people's connection to That-Which-Endures boosts your natural healing. When you roll a 1 or 2 on any Hit Die you spend at the end of a short rest, you can reroll the die and must use the new roll."
          ],
          "type": "entries"
        },
        {
          "name": "Limited Telepathy",
          "entries": [
            "You can telepathically speak to any creature you can see within 30 feet of you. You don't need to share a language with the creature for it to understand your telepathy, but it must be able to understand at least one language. This process of communication is slow and limited, allowing you to transmit and receive only simple ideas and straightforward concepts."
          ],
          "type": "entries"
        },
        {
          "name": "Persuasive",
          "entries": [
            "Your people's lack of history makes you trustworthy and humble. You have proficiency in the {@skill Persuasion} skill."
          ],
          "type": "entries"
        },
        {
          "name": "Telepathic Insight",
          "entries": [
            "Your mind's connection to the world around you strengthens your will. You have advantage on all Wisdom and Charisma saving throws."
          ],
          "type": "entries"
        },
        {
          "name": "Language",
          "entries": [
            "You speak, read, and write Common, Goblin, and one additional language of your choice. This language typically has some connection to one of the areas or cultures that has been part of your life."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Vulpin",
      "source": "HWCS",
      "page": 30,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "int": 2,
          "cha": 1
        }
      ],
      "darkvision": 60,
      "traitTags": [
        "Natural Weapon"
      ],
      "languageProficiencies": [
        {
          "other": true
        }
      ],
      "additionalSpells": [
        {
          "ability": "int",
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "ambush prey|HWCS"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "fear"
                ]
              }
            }
          }
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Vulpins mature at an average pace, and can be comparatively long-lived. They reach adulthood at 15 years, and live well past 90 years."
          ]
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Vulpins aren't innately evil, but their difficulty empathizing with others means they are only rarely good aligned. Most vulpins find strict authority distasteful, preferring chaotic alignments over lawful ones."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Vulpins cut dashing figures and are usually lean and muscular. They stand between 4 and a half and 5 and a half feet tall, but are relatively lightweight, weighing between 90 and 140 pounds. Your size is Medium."
          ]
        },
        {
          "name": "Speed",
          "type": "entries",
          "entries": [
            "Your base walking speed is 30 feet."
          ]
        },
        {
          "name": "Darkvision",
          "type": "entries",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray. Mapachs are most comfortable under the cloak of night."
          ]
        },
        {
          "name": "Bite",
          "type": "entries",
          "entries": [
            "You have sharp fangs that enable you to make natural bite attacks. You can choose to bite as an unarmed strike that deals {@damage 1d6} points of piercing damage, which can be calculated using either your Strength or Dexterity modifier for both the attack roll and damage bonus."
          ]
        },
        {
          "name": "Evasive",
          "type": "entries",
          "entries": [
            "You add your Intelligence modifier as a bonus on all Dexterity saving throws."
          ]
        },
        {
          "name": "Bewitching Guile",
          "type": "entries",
          "entries": [
            "You can cast {@spell charm person} as a 1st level spell with this trait, and regain the ability to do so when you finish a long rest. When you reach 3rd level, you can cast {@spell ambush prey|HWCS} as a 2nd level spell with this trait, and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast {@spell fear} with this trait, and regain the ability to do so when you finish a long rest. Intelligence is your spellcasting ability for these spells."
          ]
        },
        {
          "name": "Languages",
          "type": "entries",
          "entries": [
            "You can speak, read, and write Birdfolk and Vulpin."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Warforged",
      "source": "ERLW",
      "page": 35,
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "con": 2,
          "choose": {
            "from": [
              "str",
              "dex",
              "int",
              "wis",
              "cha"
            ],
            "count": 1
          }
        }
      ],
      "heightAndWeight": {
        "baseHeight": 70,
        "heightMod": "2d6",
        "baseWeight": 270,
        "weightMod": "4"
      },
      "age": {
        "mature": 2,
        "max": 30
      },
      "traitTags": [
        "Improved Resting",
        "Natural Armor"
      ],
      "skillProficiencies": [
        {
          "any": 1
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "anyStandard": 1
        }
      ],
      "toolProficiencies": [
        {
          "any": 1
        }
      ],
      "resist": [
        "poison"
      ],
      "conditionImmune": [
        "disease"
      ],
      "entries": [
        {
          "name": "Age",
          "entries": [
            "A typical warforged is between two and thirty years old. The maximum warforged lifespan remains a mystery; so far, warforged have shown no signs of deterioration due to age. You are immune to magical aging effects."
          ],
          "type": "entries"
        },
        {
          "type": "entries",
          "name": "Alignment",
          "entries": [
            "Most warforged take comfort in order and discipline, tending toward law and neutrality. But some have absorbed the morality, or lack thereof, of the beings with which they served."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Your size is Medium."
          ]
        },
        {
          "type": "entries",
          "name": "Constructed Resilience",
          "entries": [
            "You were created to have remarkable fortitude, represented by the following benefits:",
            {
              "type": "list",
              "items": [
                "You have advantage on saving throws against being {@condition poisoned}, and you have resistance to poison damage.",
                "You don't need to eat, drink, or breathe.",
                "You are immune to disease.",
                "You don't need to sleep, and magic can't put you to sleep."
              ]
            }
          ]
        },
        {
          "type": "entries",
          "name": "Sentry's Rest",
          "entries": [
            "When you take a long rest, you must spend at least six hours in an inactive, motionless state, rather than sleeping. In this state, you appear inert, but it doesn't render you {@condition unconscious}, and you can see and hear as normal."
          ]
        },
        {
          "type": "entries",
          "name": "Integrated Protection",
          "entries": [
            "Your body has built-in defensive layers, which can be enhanced with armor:",
            {
              "type": "list",
              "items": [
                "You gain a +1 bonus to Armor Class.",
                "You can don only armor with which you have proficiency. To don armor other than a shield, you must incorporate it into your body over the course of 1 hour, during which you remain in contact with the armor. To doff armor, you must spend 1 hour removing it. You can rest while donning or doffing armor in this way.",
                "While you live, the armor incorporated into your body can't be removed against your will."
              ]
            }
          ]
        },
        {
          "type": "entries",
          "name": "Specialized Design",
          "entries": [
            "You gain one skill proficiency and one tool proficiency of your choice."
          ]
        },
        {
          "type": "entries",
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and one other language of your choice."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Yuan-Ti",
      "source": "MPMM",
      "page": 36,
      "lineage": "VRGR",
      "size": [
        "S",
        "M"
      ],
      "speed": 30,
      "darkvision": 60,
      "traitTags": [
        "Magic Resistance"
      ],
      "resist": [
        "poison"
      ],
      "additionalSpells": [
        {
          "innate": {
            "1": [
              "animal friendship"
            ],
            "3": {
              "daily": {
                "1": [
                  "suggestion"
                ]
              }
            }
          },
          "ability": {
            "choose": [
              "int",
              "wis",
              "cha"
            ]
          },
          "known": {
            "1": [
              "poison spray#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "You are Medium or Small. You choose the size when you select this race."
          ]
        },
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
          ]
        },
        {
          "type": "entries",
          "name": "Magic Resistance",
          "entries": [
            "You have advantage on saving throws against spells."
          ]
        },
        {
          "type": "entries",
          "name": "Poison Resilience",
          "entries": [
            "You have advantage on saving throws you make to avoid or end the {@condition poisoned} condition on yourself. You also have resistance to poison damage."
          ]
        },
        {
          "type": "entries",
          "name": "Serpentine Spellcasting",
          "entries": [
            "You know the {@spell poison spray} cantrip. You can cast {@spell animal friendship} an unlimited number of times with this trait, but you can target only snakes with it. Starting at 3rd level, you can also cast {@spell suggestion} with this trait. Once you cast it, you can't do so again until you finish a long rest. You can also cast it using any spell slots you have of 2nd level or higher.",
            "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race)."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Yuan-ti Pureblood",
      "source": "VGM",
      "page": 120,
      "reprintedAs": [
        "Yuan-Ti|MPMM"
      ],
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "cha": 2,
          "int": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 56,
        "heightMod": "2d10",
        "baseWeight": 110,
        "weightMod": "2d4"
      },
      "age": {
        "mature": 20,
        "max": 100
      },
      "darkvision": 60,
      "traitTags": [
        "Magic Resistance",
        "Monstrous Race"
      ],
      "languageProficiencies": [
        {
          "common": true,
          "abyssal": true,
          "draconic": true
        }
      ],
      "immune": [
        "poison"
      ],
      "conditionImmune": [
        "poisoned"
      ],
      "additionalSpells": [
        {
          "innate": {
            "1": [
              "animal friendship"
            ],
            "3": {
              "daily": {
                "1": [
                  "suggestion"
                ]
              }
            }
          },
          "ability": "cha",
          "known": {
            "1": [
              "poison spray#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Purebloods mature at the same rate as humans and have lifespans similar in length to theirs."
          ]
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Purebloods match humans in average size and weight. Your size is Medium."
          ]
        },
        {
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Innate Spellcasting",
          "entries": [
            "You know the {@spell poison spray} cantrip. You can cast {@spell animal friendship} an unlimited number of times with this trait, but you can target only snakes with it. Starting at 3rd level, you can also cast {@spell suggestion} with this trait. Once you cast it, you can't do so again until you finish a long rest. Charisma is your spellcasting ability for these spells."
          ],
          "type": "entries"
        },
        {
          "name": "Magic Resistance",
          "entries": [
            "You have advantage on saving throws against spells and other magical effects."
          ],
          "type": "entries"
        },
        {
          "name": "Poison Immunity",
          "entries": [
            "You are immune to poison damage and the {@condition poisoned} condition."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common, Abyssal, and Draconic."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Zombie",
      "source": "DMG",
      "page": 282,
      "creatureTypes": [
        "undead"
      ],
      "size": [
        "M"
      ],
      "speed": 30,
      "ability": [
        {
          "str": 1,
          "con": 2,
          "int": -6,
          "wis": -4,
          "cha": -4
        }
      ],
      "darkvision": 60,
      "traitTags": [
        "Improved Resting",
        "NPC Race"
      ],
      "immune": [
        "poison"
      ],
      "conditionImmune": [
        "poisoned"
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Creature Type",
          "entries": [
            "You are Undead."
          ]
        },
        {
          "type": "entries",
          "name": "Undead Fortitude",
          "entries": [
            "If damage reduces you to 0 hit points, you must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is radiant or from a critical hit. On a success, you drop to 1 hit point instead."
          ]
        },
        {
          "type": "entries",
          "name": "Undead Nature",
          "entries": [
            "You are immune to poison damage, and you can't be {@condition poisoned}. You don't require air, food, drink, or sleep."
          ]
        },
        {
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can't speak, but you can understand the languages you knew in life."
          ],
          "type": "entries"
        }
      ]
    }
  ],
  "subrace": [
    {
      "name": "Fallen",
      "source": "VGM",
      "raceName": "Aasimar",
      "raceSource": "VGM",
      "page": 105,
      "ability": [
        {
          "str": 1
        }
      ],
      "entries": [
        {
          "name": "Necrotic Shroud",
          "entries": [
            "Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing your eyes to turn into pools of darkness and two skeletal, ghostly, flightless wings to sprout from your back. The instant you transform, other creatures within 10 feet of you that can see you must succeed on a Charisma saving throw (DC 8 + your proficiency bonus + your Charisma modifier) or become {@condition frightened} of you until the end of your next turn.",
            "Your transformation lasts for 1 minute or until you end it as a bonus action. During it, once on each of your turns, you can deal extra necrotic damage to one target when you deal damage to it with an attack or a spell. The extra necrotic damage equals your level.",
            "Once you use this trait, you can't use it again until you finish a long rest."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Protector",
      "source": "VGM",
      "raceName": "Aasimar",
      "raceSource": "VGM",
      "page": 105,
      "ability": [
        {
          "wis": 1
        }
      ],
      "entries": [
        {
          "name": "Radiant Soul",
          "entries": [
            "Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing your eyes to glimmer and two luminous, incorporeal wings to sprout from your back.",
            "Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you have a flying speed of 30 feet, and once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level.",
            "Once you use this trait, you can't use it again until you finish a long rest."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Scourge",
      "source": "VGM",
      "raceName": "Aasimar",
      "raceSource": "VGM",
      "page": 105,
      "ability": [
        {
          "con": 1
        }
      ],
      "entries": [
        {
          "name": "Radiant Consumption",
          "entries": [
            "Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing a searing light to radiate from you, pour out of your eyes and mouth, and threaten to char you.",
            "Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you shed bright light in a 10-foot radius and dim light for an additional 10 feet, and at the end of each of your turns, you and each creature within 10 feet of you take radiant damage equal to half your level (rounded up). In addition, once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level.",
            "Once you use this trait, you can't use it again until you finish a long rest."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Hawk-Headed",
      "source": "PSA",
      "raceName": "Aven",
      "raceSource": "PSA",
      "page": 16,
      "ability": [
        {
          "wis": 2
        }
      ],
      "skillProficiencies": [
        {
          "perception": true
        }
      ],
      "entries": [
        {
          "name": "Hawkeyed",
          "entries": [
            "You have proficiency in the {@skill Perception} skill. In addition, attacking at long range doesn't impose disadvantage on your ranged weapon attack rolls."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Ibis-Headed",
      "source": "PSA",
      "raceName": "Aven",
      "raceSource": "PSA",
      "page": 16,
      "ability": [
        {
          "int": 1
        }
      ],
      "entries": [
        {
          "name": "Kefnet's Blessing",
          "entries": [
            "You can add half your proficiency bonus, rounded down, to any Intelligence check you make that doesn't already include your proficiency bonus."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Grove",
      "source": "HWCS",
      "raceName": "Cervan",
      "raceSource": "HWCS",
      "page": 22,
      "speed": 35,
      "ability": [
        {
          "dex": 1
        }
      ],
      "entries": [
        {
          "name": "Swift",
          "type": "entries",
          "entries": [
            "Your base walking speed increases to 35 feet."
          ]
        },
        {
          "name": "Standing Leap",
          "type": "entries",
          "entries": [
            "Your base long jump is 30 feet, and your base high jump is 15 feet, with or without a running start."
          ]
        },
        {
          "name": "Nimble Step",
          "type": "entries",
          "entries": [
            "Opportunity attacks made against you are rolled with disadvantage."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Pronghorn",
      "source": "HWCS",
      "raceName": "Cervan",
      "raceSource": "HWCS",
      "page": 22,
      "ability": [
        {
          "str": 1
        }
      ],
      "traitTags": [
        "Natural Weapon",
        "Powerful Build"
      ],
      "entries": [
        {
          "name": "Robust Build",
          "type": "entries",
          "entries": [
            "Your carrying capacity is doubled, as is the weight you can push, drag, or lift."
          ]
        },
        {
          "name": "Antlers",
          "type": "entries",
          "entries": [
            "You have a set of large, strong antlers that can be used to make devastating charge attacks. You can use your unarmed strike to gore opponents, dealing {@damage 1d6} + your Strength Modifier piercing damage on a hit.",
            "Additionally, if you move at least 20 feet in a straight line towards an opponent, you can spend a bonus action to charge them, dealing an extra 1d6 points of piercing damage. If the target of your charge is Large or smaller, they must make a Strength saving throw against a DC of your Proficiency Bonus + 8 + your Strength Modifier. On failure, the target is pushed 10 feet away from you into a space of your choice."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Dusk",
      "source": "HWCS",
      "raceName": "Corvum",
      "raceSource": "HWCS",
      "page": 12,
      "ability": [
        {
          "dex": 1
        }
      ],
      "traitTags": [
        "Natural Weapon"
      ],
      "entries": [
        {
          "name": "Skulker",
          "type": "entries",
          "entries": [
            "You have advantage on Dexterity ({@skill Stealth}) checks made in dim light or darkness."
          ]
        },
        {
          "name": "Street Smarts",
          "type": "entries",
          "entries": [
            "You gain proficiency in the {@skill Insight} skill."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Kindled",
      "source": "HWCS",
      "raceName": "Corvum",
      "raceSource": "HWCS",
      "page": 12,
      "ability": [
        {
          "cha": 1
        }
      ],
      "traitTags": [
        "Natural Weapon"
      ],
      "toolProficiencies": [
        {
          "any": 1
        }
      ],
      "entries": [
        {
          "name": "Convincing",
          "type": "entries",
          "entries": [
            "Kindled corvums have a way with words, and are accomplished at saying what someone wants or needs to hear. You have proficiency in either the {@skill Deception} or {@skill Persuasion} skill. Additionally, you have advantage on all Charisma checks made to convince someone of your exceptional knowledge on any topic related to the skill you selected with your learned trait ({@skill Arcana}, {@skill History}, {@skill Nature}, or {@skill Religion})."
          ]
        },
        {
          "name": "Sharp Mind",
          "type": "entries",
          "entries": [
            "You learn one additional language of your choice, gain proficiency in a {@book tool|PHB|5|Tools} of your choice, and are able to accurately recall with perfect clarity anything you have seen or heard within the past month."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "source": "PHB",
      "raceName": "Dragonborn",
      "raceSource": "PHB",
      "page": 32,
      "srd": true,
      "hasFluff": true,
      "hasFluffImages": true,
      "_versions": [
        {
          "_abstract": {
            "name": "Dragonborn ({{color}})",
            "source": "PHB",
            "_mod": {
              "entries": [
                {
                  "mode": "removeArr",
                  "names": "Draconic Ancestry"
                },
                {
                  "mode": "replaceArr",
                  "replace": "Breath Weapon",
                  "items": {
                    "type": "entries",
                    "name": "Breath Weapon",
                    "entries": [
                      "You can use your action to exhale destructive energy in a {{area}}.",
                      "When you use your breath weapon, each creature in the area of the exhalation must make a {{savingThrow}} saving throw. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes {@damage 2d6} {{damageType}} damage on a failed save, and half as much damage on a successful one. The damage increases to {@damage 3d6} at 6th level, {@damage 4d6} at 11th level, and {@damage 5d6} at 16th level.",
                      "After you use your breath weapon, you can't use it again until you complete a short or long rest."
                    ]
                  }
                },
                {
                  "mode": "replaceArr",
                  "replace": "Damage Resistance",
                  "items": {
                    "type": "entries",
                    "name": "Damage Resistance",
                    "entries": [
                      "You have resistance to {{damageType}} damage."
                    ]
                  }
                }
              ]
            }
          },
          "_implementations": [
            {
              "_variables": {
                "color": "Black",
                "damageType": "acid",
                "area": "5-foot-wide, 30-foot-long line",
                "savingThrow": "Dexterity"
              },
              "resist": [
                "acid"
              ]
            },
            {
              "_variables": {
                "color": "Blue",
                "damageType": "lightning",
                "area": "5-foot-wide, 30-foot-long line",
                "savingThrow": "Dexterity"
              },
              "resist": [
                "lightning"
              ]
            },
            {
              "_variables": {
                "color": "Brass",
                "damageType": "fire",
                "area": "5-foot-wide, 30-foot-long line",
                "savingThrow": "Dexterity"
              },
              "resist": [
                "fire"
              ]
            },
            {
              "_variables": {
                "color": "Bronze",
                "damageType": "lightning",
                "area": "5-foot-wide, 30-foot-long line",
                "savingThrow": "Dexterity"
              },
              "resist": [
                "lightning"
              ]
            },
            {
              "_variables": {
                "color": "Copper",
                "damageType": "acid",
                "area": "5-foot-wide, 30-foot-long line",
                "savingThrow": "Dexterity"
              },
              "resist": [
                "acid"
              ]
            },
            {
              "_variables": {
                "color": "Gold",
                "damageType": "fire",
                "area": "15-foot cone",
                "savingThrow": "Dexterity"
              },
              "resist": [
                "fire"
              ]
            },
            {
              "_variables": {
                "color": "Green",
                "damageType": "poison",
                "area": "15-foot cone",
                "savingThrow": "Constitution"
              },
              "resist": [
                "poison"
              ]
            },
            {
              "_variables": {
                "color": "Red",
                "damageType": "fire",
                "area": "15-foot cone",
                "savingThrow": "Dexterity"
              },
              "resist": [
                "fire"
              ]
            },
            {
              "_variables": {
                "color": "Silver",
                "damageType": "cold",
                "area": "15-foot cone",
                "savingThrow": "Constitution"
              },
              "resist": [
                "cold"
              ]
            },
            {
              "_variables": {
                "color": "White",
                "damageType": "cold",
                "area": "15-foot cone",
                "savingThrow": "Constitution"
              },
              "resist": [
                "cold"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Draconblood",
      "source": "EGW",
      "raceName": "Dragonborn",
      "raceSource": "PHB",
      "page": 168,
      "ability": [
        {
          "int": 2,
          "cha": 1
        }
      ],
      "darkvision": 60,
      "resist": null,
      "entries": [
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ]
        },
        {
          "type": "entries",
          "name": "Forceful Presence",
          "entries": [
            "You can use your understanding of creative diplomacy or intimidation to guide a conversation in your favor. When you make a Charisma ({@skill Intimidation} or {@skill Persuasion}) check, you can do so with advantage. Once you use this trait, you can't do so again until you finish a short or long rest."
          ],
          "data": {
            "overwrite": "Damage Resistance"
          }
        },
        {
          "name": "Draconic Ancestry",
          "entries": [
            "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon is determined by the dragon type, as shown in the table.",
            {
              "type": "table",
              "caption": "Draconic Ancestry",
              "colLabels": [
                "Dragon",
                "Damage Type",
                "Breath Weapon"
              ],
              "colStyles": [
                "col-3 text-center",
                "col-3 text-center",
                "col-6"
              ],
              "rows": [
                [
                  "Black",
                  "Acid",
                  "5 by 30 ft. line (Dex. save)"
                ],
                [
                  "Blue",
                  "Lightning",
                  "5 by 30 ft. line (Dex. save)"
                ],
                [
                  "Brass",
                  "Fire",
                  "5 by 30 ft. line (Dex. save)"
                ],
                [
                  "Bronze",
                  "Lightning",
                  "5 by 30 ft. line (Dex. save)"
                ],
                [
                  "Copper",
                  "Acid",
                  "5 by 30 ft. line (Dex. save)"
                ],
                [
                  "Gold",
                  "Fire",
                  "15 ft. cone (Dex. save)"
                ],
                [
                  "Green",
                  "Poison",
                  "15 ft. cone (Con. save)"
                ],
                [
                  "Red",
                  "Fire",
                  "15 ft. cone (Dex. save)"
                ],
                [
                  "Silver",
                  "Cold",
                  "15 ft. cone (Con. save)"
                ],
                [
                  "White",
                  "Cold",
                  "15 ft. cone (Con. save)"
                ]
              ]
            }
          ],
          "type": "entries",
          "data": {
            "overwrite": "Draconic Ancestry"
          }
        }
      ],
      "overwrite": {
        "ability": true,
        "traitTags": true
      },
      "hasFluff": true,
      "hasFluffImages": true,
      "_versions": [
        {
          "_abstract": {
            "name": "Dragonborn (Draconblood; {{color}})",
            "source": "EGW",
            "_mod": {
              "entries": [
                {
                  "mode": "removeArr",
                  "names": "Draconic Ancestry"
                },
                {
                  "mode": "replaceArr",
                  "replace": "Breath Weapon",
                  "items": {
                    "type": "entries",
                    "name": "Breath Weapon",
                    "entries": [
                      "You can use your action to exhale destructive energy in a {{area}}.",
                      "When you use your breath weapon, each creature in the area of the exhalation must make a {{savingThrow}} saving throw. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes {@damage 2d6} {{damageType}} damage on a failed save, and half as much damage on a successful one. The damage increases to {@damage 3d6} at 6th level, {@damage 4d6} at 11th level, and {@damage 5d6} at 16th level.",
                      "After you use your breath weapon, you can't use it again until you complete a short or long rest."
                    ]
                  }
                }
              ]
            }
          },
          "_implementations": [
            {
              "_variables": {
                "color": "Black",
                "damageType": "acid",
                "area": "5-foot-wide, 30-foot-long line",
                "savingThrow": "Dexterity"
              }
            },
            {
              "_variables": {
                "color": "Blue",
                "damageType": "lightning",
                "area": "5-foot-wide, 30-foot-long line",
                "savingThrow": "Dexterity"
              }
            },
            {
              "_variables": {
                "color": "Brass",
                "damageType": "fire",
                "area": "5-foot-wide, 30-foot-long line",
                "savingThrow": "Dexterity"
              }
            },
            {
              "_variables": {
                "color": "Bronze",
                "damageType": "lightning",
                "area": "5-foot-wide, 30-foot-long line",
                "savingThrow": "Dexterity"
              }
            },
            {
              "_variables": {
                "color": "Copper",
                "damageType": "acid",
                "area": "5-foot-wide, 30-foot-long line",
                "savingThrow": "Dexterity"
              }
            },
            {
              "_variables": {
                "color": "Gold",
                "damageType": "fire",
                "area": "15-foot cone",
                "savingThrow": "Dexterity"
              }
            },
            {
              "_variables": {
                "color": "Green",
                "damageType": "poison",
                "area": "15-foot cone",
                "savingThrow": "Constitution"
              }
            },
            {
              "_variables": {
                "color": "Red",
                "damageType": "fire",
                "area": "15-foot cone",
                "savingThrow": "Dexterity"
              }
            },
            {
              "_variables": {
                "color": "Silver",
                "damageType": "cold",
                "area": "15-foot cone",
                "savingThrow": "Constitution"
              }
            },
            {
              "_variables": {
                "color": "White",
                "damageType": "cold",
                "area": "15-foot cone",
                "savingThrow": "Constitution"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Ravenite",
      "source": "EGW",
      "raceName": "Dragonborn",
      "raceSource": "PHB",
      "page": 168,
      "ability": [
        {
          "str": 2,
          "con": 1
        }
      ],
      "darkvision": 60,
      "resist": null,
      "entries": [
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ]
        },
        {
          "type": "entries",
          "name": "Vengeful Assault",
          "entries": [
            "When you take damage from a creature in range of a weapon you are wielding, you can use your reaction to make an attack with the weapon against that creature. Once you use this trait, you can't do so again until you finish a short or long rest."
          ],
          "data": {
            "overwrite": "Damage Resistance"
          }
        },
        {
          "name": "Draconic Ancestry",
          "entries": [
            "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon is determined by the dragon type, as shown in the table.",
            {
              "type": "table",
              "caption": "Draconic Ancestry",
              "colLabels": [
                "Dragon",
                "Damage Type",
                "Breath Weapon"
              ],
              "colStyles": [
                "col-3 text-center",
                "col-3 text-center",
                "col-6"
              ],
              "rows": [
                [
                  "Black",
                  "Acid",
                  "5 by 30 ft. line (Dex. save)"
                ],
                [
                  "Blue",
                  "Lightning",
                  "5 by 30 ft. line (Dex. save)"
                ],
                [
                  "Brass",
                  "Fire",
                  "5 by 30 ft. line (Dex. save)"
                ],
                [
                  "Bronze",
                  "Lightning",
                  "5 by 30 ft. line (Dex. save)"
                ],
                [
                  "Copper",
                  "Acid",
                  "5 by 30 ft. line (Dex. save)"
                ],
                [
                  "Gold",
                  "Fire",
                  "15 ft. cone (Dex. save)"
                ],
                [
                  "Green",
                  "Poison",
                  "15 ft. cone (Con. save)"
                ],
                [
                  "Red",
                  "Fire",
                  "15 ft. cone (Dex. save)"
                ],
                [
                  "Silver",
                  "Cold",
                  "15 ft. cone (Con. save)"
                ],
                [
                  "White",
                  "Cold",
                  "15 ft. cone (Con. save)"
                ]
              ]
            }
          ],
          "type": "entries",
          "data": {
            "overwrite": "Draconic Ancestry"
          }
        }
      ],
      "overwrite": {
        "ability": true,
        "traitTags": true
      },
      "hasFluff": true,
      "hasFluffImages": true,
      "_versions": [
        {
          "_abstract": {
            "name": "Dragonborn (Ravenite; {{color}})",
            "source": "EGW",
            "_mod": {
              "entries": [
                {
                  "mode": "removeArr",
                  "names": "Draconic Ancestry"
                },
                {
                  "mode": "replaceArr",
                  "replace": "Breath Weapon",
                  "items": {
                    "type": "entries",
                    "name": "Breath Weapon",
                    "entries": [
                      "You can use your action to exhale destructive energy in a {{area}}.",
                      "When you use your breath weapon, each creature in the area of the exhalation must make a {{savingThrow}} saving throw. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes {@damage 2d6} {{damageType}} damage on a failed save, and half as much damage on a successful one. The damage increases to {@damage 3d6} at 6th level, {@damage 4d6} at 11th level, and {@damage 5d6} at 16th level.",
                      "After you use your breath weapon, you can't use it again until you complete a short or long rest."
                    ]
                  }
                }
              ]
            }
          },
          "_implementations": [
            {
              "_variables": {
                "color": "Black",
                "damageType": "acid",
                "area": "5-foot-wide, 30-foot-long line",
                "savingThrow": "Dexterity"
              }
            },
            {
              "_variables": {
                "color": "Blue",
                "damageType": "lightning",
                "area": "5-foot-wide, 30-foot-long line",
                "savingThrow": "Dexterity"
              }
            },
            {
              "_variables": {
                "color": "Brass",
                "damageType": "fire",
                "area": "5-foot-wide, 30-foot-long line",
                "savingThrow": "Dexterity"
              }
            },
            {
              "_variables": {
                "color": "Bronze",
                "damageType": "lightning",
                "area": "5-foot-wide, 30-foot-long line",
                "savingThrow": "Dexterity"
              }
            },
            {
              "_variables": {
                "color": "Copper",
                "damageType": "acid",
                "area": "5-foot-wide, 30-foot-long line",
                "savingThrow": "Dexterity"
              }
            },
            {
              "_variables": {
                "color": "Gold",
                "damageType": "fire",
                "area": "15-foot cone",
                "savingThrow": "Dexterity"
              }
            },
            {
              "_variables": {
                "color": "Green",
                "damageType": "poison",
                "area": "15-foot cone",
                "savingThrow": "Constitution"
              }
            },
            {
              "_variables": {
                "color": "Red",
                "damageType": "fire",
                "area": "15-foot cone",
                "savingThrow": "Dexterity"
              }
            },
            {
              "_variables": {
                "color": "Silver",
                "damageType": "cold",
                "area": "15-foot cone",
                "savingThrow": "Constitution"
              }
            },
            {
              "_variables": {
                "color": "White",
                "damageType": "cold",
                "area": "15-foot cone",
                "savingThrow": "Constitution"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Duergar",
      "source": "MTF",
      "raceName": "Dwarf",
      "raceSource": "PHB",
      "page": 81,
      "otherSources": [
        {
          "source": "SCAG",
          "page": 104
        }
      ],
      "reprintedAs": [
        "Duergar|MPMM"
      ],
      "ability": [
        {
          "str": 1
        }
      ],
      "darkvision": 120,
      "traitTags": [
        "Sunlight Sensitivity"
      ],
      "languageProficiencies": [
        {
          "common": true,
          "dwarvish": true,
          "undercommon": true
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "enlarge/reduce"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "invisibility"
                ]
              }
            }
          },
          "ability": "int"
        }
      ],
      "entries": [
        {
          "name": "Superior Darkvision",
          "entries": [
            "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "data": {
            "overwrite": "Darkvision"
          },
          "type": "entries"
        },
        {
          "name": "Duergar Resilience",
          "entries": [
            "You have advantage on saving throws against poison, and you have resistance against poison damage. You also have advantage on saving throws against illusions and against being {@condition charmed} or {@condition paralyzed}."
          ],
          "data": {
            "overwrite": "Dwarven Resilience"
          },
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common, Dwarvish, and Undercommon."
          ],
          "data": {
            "overwrite": "Languages"
          },
          "type": "entries"
        },
        {
          "name": "Duergar Magic",
          "entries": [
            "When you reach 3rd level, you can cast the {@spell Enlarge/Reduce} spell on yourself once with this trait, using only the spell's enlarge option. When you reach 5th level, you can cast the {@spell Invisibility} spell on yourself once with this trait. You don't need material components for either spell, and you can't cast them while you're in direct sunlight, although sunlight has no effect on them once cast. You regain the ability to cast these spells with this trait when you finish a long rest. Intelligence is your spellcasting ability for these spells."
          ],
          "type": "entries"
        },
        {
          "name": "Sunlight Sensitivity",
          "entries": [
            "You have disadvantage on attack rolls and Wisdom ({@skill Perception}) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight."
          ],
          "type": "entries"
        }
      ],
      "overwrite": {
        "languageProficiencies": true
      },
      "hasFluff": true,
      "hasFluffImages": false
    },
    {
      "name": "Hill",
      "source": "PHB",
      "raceName": "Dwarf",
      "raceSource": "PHB",
      "page": 20,
      "srd": true,
      "basicRules": true,
      "ability": [
        {
          "wis": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 44,
        "heightMod": "2d4",
        "baseWeight": 115,
        "weightMod": "2d6"
      },
      "entries": [
        {
          "name": "Dwarven Toughness",
          "entries": [
            "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Mark of Warding",
      "source": "ERLW",
      "raceName": "Dwarf",
      "raceSource": "PHB",
      "page": 51,
      "ability": [
        {
          "int": 1
        }
      ],
      "traitTags": [
        "Dragonmark",
        "Skill Bonus Dice",
        "Tool Bonus Dice"
      ],
      "additionalSpells": [
        {
          "expanded": {
            "s1": [
              "alarm",
              "armor of agathys"
            ],
            "s2": [
              "arcane lock",
              "knock"
            ],
            "s3": [
              "glyph of warding",
              "magic circle"
            ],
            "s4": [
              "leomund's secret chest",
              "mordenkainen's faithful hound"
            ],
            "s5": [
              "antilife shell"
            ]
          },
          "ability": "int",
          "known": {
            "1": [
              "alarm",
              "mage armor"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Warder's Intuition",
          "entries": [
            "When you make an Intelligence ({@skill Investigation}) check or an ability check using {@item thieves' tools|PHB}, you can roll a {@dice d4} and add the number rolled to the ability check."
          ]
        },
        {
          "type": "entries",
          "name": "Wards and Seals",
          "entries": [
            "You can cast the {@spell alarm} and {@spell mage armor} spells with this trait. Starting at 3rd level, you can also cast the {@spell arcane lock} spell with it. Once you cast any of these spells with this trait, you can't cast that spell with it again until you finish a long rest. Intelligence is your spellcasting ability for these spells, and you don't need material components for them when you cast them with this trait."
          ]
        },
        {
          "type": "entries",
          "name": "Spells of the Mark",
          "entries": [
            "If you have the Spellcasting or the Pact Magic class feature, the spells on the Mark of Warding Spells table are added to the spell list of your spellcasting class.",
            {
              "type": "table",
              "caption": "Mark of Warding Spells",
              "colLabels": [
                "Spell Level",
                "Spells"
              ],
              "colStyles": [
                "col-2 text-center",
                "col-10"
              ],
              "rows": [
                [
                  "1st",
                  "{@spell alarm}, {@spell armor of Agathys}"
                ],
                [
                  "2nd",
                  "{@spell arcane lock}, {@spell knock}"
                ],
                [
                  "3rd",
                  "{@spell glyph of warding}, {@spell magic circle}"
                ],
                [
                  "4th",
                  "{@spell Leomund's secret chest}, {@spell Mordenkainen's faithful hound}"
                ],
                [
                  "5th",
                  "{@spell antilife shell}"
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Mountain",
      "source": "PHB",
      "raceName": "Dwarf",
      "raceSource": "PHB",
      "page": 20,
      "basicRules": true,
      "ability": [
        {
          "str": 2
        }
      ],
      "heightAndWeight": {
        "baseHeight": 48,
        "heightMod": "2d4",
        "baseWeight": 130,
        "weightMod": "2d6"
      },
      "armorProficiencies": [
        {
          "light": true,
          "medium": true
        }
      ],
      "entries": [
        {
          "name": "Dwarven Armor Training",
          "entries": [
            "You have proficiency with light and medium armor."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Drow",
      "alias": [
        "Elf (Dark)"
      ],
      "source": "PHB",
      "raceName": "Elf",
      "raceSource": "PHB",
      "page": 24,
      "ability": [
        {
          "cha": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 53,
        "heightMod": "2d6",
        "baseWeight": 75,
        "weightMod": "1d6"
      },
      "darkvision": 120,
      "traitTags": [
        "Sunlight Sensitivity"
      ],
      "weaponProficiencies": [
        {
          "rapier|phb": true,
          "shortsword|phb": true,
          "hand crossbow|phb": true
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "faerie fire"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "darkness"
                ]
              }
            }
          },
          "ability": "cha",
          "known": {
            "1": [
              "dancing lights#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Superior Darkvision",
          "entries": [
            "Accustomed to the depths of the Underdark, you have superior vision in dark and dim conditions. You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "data": {
            "overwrite": "Darkvision"
          },
          "type": "entries"
        },
        {
          "name": "Sunlight Sensitivity",
          "entries": [
            "You have disadvantage on attack rolls and on Wisdom ({@skill Perception}) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight."
          ],
          "type": "entries"
        },
        {
          "name": "Drow Magic",
          "entries": [
            "You know the {@spell dancing lights} cantrip. When you reach 3rd level, you can cast the {@spell faerie fire} spell once with this trait; you regain the ability to cast it when you finish a long rest. When you reach 5th level, you can also cast the {@spell darkness} spell once per day with this trait; you regain the ability to cast it when you finish a long rest. Charisma is your spellcasting ability for these spells."
          ],
          "type": "entries"
        },
        {
          "name": "Drow Weapon Training",
          "entries": [
            "You have proficiency with {@item rapier|phb|rapiers}, {@item shortsword|phb|shortswords}, and {@item hand crossbow|phb|hand crossbows}."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true
    },
    {
      "name": "Eladrin",
      "source": "DMG",
      "raceName": "Elf",
      "raceSource": "PHB",
      "page": 286,
      "ability": [
        {
          "int": 1
        }
      ],
      "weaponProficiencies": [
        {
          "longsword|phb": true,
          "shortsword|phb": true,
          "shortbow|phb": true,
          "longbow|phb": true
        }
      ],
      "additionalSpells": [
        {
          "ability": "cha",
          "known": {
            "1": {
              "rest": {
                "1": [
                  "misty step"
                ]
              }
            }
          }
        }
      ],
      "entries": [
        {
          "name": "Elf Weapon Training",
          "entries": [
            "You have proficiency with the {@item longsword|phb}, {@item shortsword|phb}, {@item shortbow|phb}, and {@item longbow|phb}."
          ],
          "type": "entries"
        },
        {
          "name": "Fey Step",
          "entries": [
            "You can cast the {@spell misty step} spell once using this trait. You regain the ability to do so when you finish a short or long rest."
          ],
          "type": "entries"
        }
      ]
    },
    {
      "name": "Eladrin",
      "source": "MTF",
      "raceName": "Elf",
      "raceSource": "PHB",
      "page": 61,
      "reprintedAs": [
        "Eladrin|MPMM"
      ],
      "ability": [
        {
          "cha": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 54,
        "heightMod": "2d12",
        "baseWeight": 90,
        "weightMod": "1d4"
      },
      "entries": [
        "{@i Choose your eladrin's season: autumn, winter, spring, or summer. When finishing a long rest, you can change your season. See the \\"Info\\" tab for more information.}",
        {
          "name": "Fey Step",
          "entries": [
            "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a short or long rest.",
            "When you reach 3rd level, your Fey Step gains an additional effect based on your season; if the effect requires a saving throw, the DC equals 8 + your proficiency bonus + your Charisma modifier:",
            {
              "type": "list",
              "style": "list-hang-notitle",
              "items": [
                {
                  "type": "item",
                  "name": "Autumn",
                  "entry": "Immediately after you use your Fey Step, up to two creatures of your choice that you can see within 10 feet of you must succeed on a Wisdom saving throw or be {@condition charmed} by you for 1 minute, or until you or your companions deal any damage to it."
                },
                {
                  "type": "item",
                  "name": "Winter",
                  "entry": "When you use your Fey Step, one creature of your choice that you can see within 5 feet of you before you teleport must succeed on a Wisdom saving throw or be {@condition frightened} of you until the end of your next turn."
                },
                {
                  "type": "item",
                  "name": "Spring",
                  "entry": "When you use your Fey Step, you can touch one willing creature within 5 feet of you. That creature then teleports instead of you, appearing in an unoccupied space of your choice that you can see within 30 feet of you."
                },
                {
                  "type": "item",
                  "name": "Summer",
                  "entry": "Immediately after you use your Fey Step, each creature of your choice that you can see within 5 feet of you takes fire damage equal to your Charisma modifier (minimum of 1 damage)."
                }
              ]
            }
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "High",
      "source": "PHB",
      "raceName": "Elf",
      "raceSource": "PHB",
      "page": 23,
      "srd": true,
      "basicRules": true,
      "speed": 30,
      "ability": [
        {
          "int": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 54,
        "heightMod": "2d10",
        "baseWeight": 90,
        "weightMod": "1d4"
      },
      "languageProficiencies": [
        {
          "common": true,
          "elvish": true,
          "anyStandard": 1
        }
      ],
      "weaponProficiencies": [
        {
          "longsword|phb": true,
          "shortsword|phb": true,
          "shortbow|phb": true,
          "longbow|phb": true
        }
      ],
      "additionalSpells": [
        {
          "ability": "int",
          "known": {
            "1": {
              "_": [
                {
                  "choose": "level=0|class=Wizard"
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "name": "Elf Weapon Training",
          "entries": [
            "You have proficiency with the {@item longsword|phb}, {@item shortsword|phb}, {@item shortbow|phb}, and {@item longbow|phb}."
          ],
          "type": "entries"
        },
        {
          "name": "Cantrip",
          "entries": [
            "You know one {@filter cantrip of your choice from the wizard spell list|spells|level=0|class=Wizard}. Intelligence is your spellcasting ability for it."
          ],
          "type": "entries"
        },
        {
          "name": "Extra Language",
          "entries": [
            "You can speak, read, and write one extra language of your choosing."
          ],
          "type": "entries"
        }
      ],
      "overwrite": {
        "languageProficiencies": true
      },
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Mark of Shadow",
      "source": "ERLW",
      "raceName": "Elf",
      "raceSource": "PHB",
      "page": 49,
      "ability": [
        {
          "cha": 1
        }
      ],
      "traitTags": [
        "Dragonmark",
        "Skill Bonus Dice"
      ],
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "invisibility"
                ]
              }
            }
          },
          "expanded": {
            "s1": [
              "disguise self",
              "silent image"
            ],
            "s2": [
              "darkness",
              "pass without trace"
            ],
            "s3": [
              "clairvoyance",
              "major image"
            ],
            "s4": [
              "greater invisibility",
              "hallucinatory terrain"
            ],
            "s5": [
              "mislead"
            ]
          },
          "ability": "cha",
          "known": {
            "1": [
              "minor illusion#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Cunning Intuition",
          "entries": [
            "When you make a Charisma ({@skill Performance}) or Dexterity ({@skill Stealth}) check, you can roll a {@dice d4} and add the number rolled to the ability check."
          ]
        },
        {
          "type": "entries",
          "name": "Shape Shadows",
          "entries": [
            "You know the {@spell minor illusion} cantrip. Starting at 3rd level, you can cast the {@spell invisibility} spell once with this trait, and you regain the ability to cast it when you finish a long rest. Charisma is your spellcasting ability for these spells."
          ]
        },
        {
          "type": "entries",
          "name": "Spells of the Mark",
          "entries": [
            "If you have the Spellcasting or the Pact Magic class feature, the spells on the Mark of Shadow Spells table are added to the spell list of your spellcasting class.",
            {
              "type": "table",
              "caption": "Mark of Shadow Spells",
              "colLabels": [
                "Spell Level",
                "Spells"
              ],
              "colStyles": [
                "col-2 text-center",
                "col-10"
              ],
              "rows": [
                [
                  "1st",
                  "{@spell disguise self}, {@spell silent image}"
                ],
                [
                  "2nd",
                  "{@spell darkness}, {@spell pass without trace}"
                ],
                [
                  "3rd",
                  "{@spell clairvoyance}, {@spell major image}"
                ],
                [
                  "4th",
                  "{@spell greater invisibility}, {@spell hallucinatory terrain}"
                ],
                [
                  "5th",
                  "{@spell mislead}"
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Pallid",
      "source": "EGW",
      "raceName": "Elf",
      "raceSource": "PHB",
      "page": 21,
      "ability": [
        {
          "wis": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 54,
        "heightMod": "2d10",
        "baseWeight": 90,
        "weightMod": "1d4"
      },
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "sleep"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "invisibility"
                ]
              }
            }
          },
          "ability": "wis",
          "known": {
            "1": [
              "light#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Incisive Sense",
          "entries": [
            "You have advantage on Intelligence ({@skill Investigation}) and Wisdom ({@skill Insight}) checks."
          ],
          "type": "entries"
        },
        {
          "type": "entries",
          "name": "Blessing of the Moon Weaver",
          "entries": [
            "You know the {@spell light} cantrip. When you reach 3rd level, you can cast the {@spell sleep} spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the {@spell invisibility} spell (targeting yourself only) once with this trait and regain the ability to do so when you finish a long rest. Casting these spells with this trait doesn't require material components. Wisdom is your spellcasting ability for these spells."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Sea",
      "source": "MTF",
      "raceName": "Elf",
      "raceSource": "PHB",
      "page": 62,
      "otherSources": [
        {
          "source": "EGW",
          "page": 163
        }
      ],
      "reprintedAs": [
        "Sea Elf|MPMM"
      ],
      "speed": {
        "walk": 30,
        "swim": 30
      },
      "ability": [
        {
          "con": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 54,
        "heightMod": "2d8",
        "baseWeight": 90,
        "weightMod": "1d4"
      },
      "traitTags": [
        "Amphibious"
      ],
      "languageProficiencies": [
        {
          "common": true,
          "elvish": true,
          "aquan": true
        }
      ],
      "weaponProficiencies": [
        {
          "spear|phb": true,
          "trident|phb": true,
          "light crossbow|phb": true,
          "net|phb": true
        }
      ],
      "entries": [
        {
          "name": "Sea Elf Training",
          "entries": [
            "You have proficiency with the {@item spear|phb}, {@item trident|phb}, {@item light crossbow|phb}, and {@item net|phb}."
          ],
          "type": "entries"
        },
        {
          "name": "Child of the Sea",
          "entries": [
            "You have a swimming speed of 30 feet, and you can breathe air and water."
          ],
          "type": "entries"
        },
        {
          "name": "Friend of the Sea",
          "entries": [
            "Using gestures and sounds, you can communicate simple ideas with any beast that has an innate swimming speed."
          ],
          "type": "entries"
        },
        {
          "name": "Extra Language",
          "entries": [
            "You can speak, read, and write Aquan."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true
    },
    {
      "name": "Shadar-kai",
      "source": "MTF",
      "raceName": "Elf",
      "raceSource": "PHB",
      "page": 62,
      "reprintedAs": [
        "Shadar-Kai|MPMM"
      ],
      "ability": [
        {
          "con": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 56,
        "heightMod": "2d8",
        "baseWeight": 90,
        "weightMod": "1d4"
      },
      "resist": [
        "necrotic"
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Necrotic Resistance",
          "entries": [
            "You have resistance to necrotic damage."
          ]
        },
        {
          "name": "Blessing of the Raven Queen",
          "entries": [
            "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a long rest.",
            "Starting at 3rd level, you also gain resistance to all damage when you teleport using this trait. The resistance lasts until the start of your next turn. During that time, you appear ghostly and translucent."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true
    },
    {
      "name": "Wood",
      "source": "PHB",
      "raceName": "Elf",
      "raceSource": "PHB",
      "page": 24,
      "basicRules": true,
      "speed": 35,
      "ability": [
        {
          "wis": 1
        }
      ],
      "heightAndWeight": {
        "baseHeight": 54,
        "heightMod": "2d10",
        "baseWeight": 100,
        "weightMod": "1d4"
      },
      "weaponProficiencies": [
        {
          "longsword|phb": true,
          "shortsword|phb": true,
          "shortbow|phb": true,
          "longbow|phb": true
        }
      ],
      "entries": [
        {
          "name": "Elf Weapon Training",
          "entries": [
            "You have proficiency with the {@item longsword|phb}, {@item shortsword|phb}, {@item shortbow|phb}, and {@item longbow|phb}."
          ],
          "type": "entries"
        },
        {
          "name": "Fleet of Foot",
          "entries": [
            "Your base walking speed increases to 35 feet."
          ],
          "type": "entries"
        },
        {
          "name": "Mask of the Wild",
          "entries": [
            "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Bishatar and Tirahar",
      "source": "PSK",
      "raceName": "Elf (Kaladesh)",
      "raceSource": "PSK",
      "page": 21,
      "speed": 35,
      "entries": [
        {
          "name": "Fleet of Foot",
          "entries": [
            "Your ground speed increases to 35 feet."
          ],
          "type": "entries",
          "data": {
            "overwrite": "Elf Culture"
          }
        },
        {
          "name": "Mask of the Wild",
          "entries": [
            "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Vahadar",
      "source": "PSK",
      "raceName": "Elf (Kaladesh)",
      "raceSource": "PSK",
      "page": 21,
      "additionalSpells": [
        {
          "ability": "wis",
          "known": {
            "1": {
              "_": [
                {
                  "choose": "level=0|class=Druid"
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "name": "Cantrip",
          "entries": [
            "You know one cantrip of your choice from the {@filter druid spell list|spells|class=druid|level=0}. Wisdom is your spellcasting ability for it."
          ],
          "type": "entries",
          "data": {
            "overwrite": "Elf Culture"
          }
        },
        {
          "name": "Extra Language",
          "entries": [
            "You can speak, read, and write one extra language of your choosing."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Joraga Nation",
      "source": "PSZ",
      "raceName": "Elf (Zendikar)",
      "raceSource": "PSZ",
      "page": 19,
      "speed": 35,
      "ability": [
        {
          "dex": 1
        }
      ],
      "weaponProficiencies": [
        {
          "longsword|phb": true,
          "shortsword|phb": true,
          "shortbow|phb": true,
          "longbow|phb": true
        }
      ],
      "entries": [
        {
          "name": "Mask of the Wild",
          "entries": [
            "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
          ],
          "type": "entries"
        },
        {
          "name": "Elf Weapon Training",
          "entries": [
            "You have proficiency with the {@item longsword|phb}, {@item shortsword|phb}, {@item shortbow|phb}, and {@item longbow|phb}."
          ],
          "type": "entries"
        },
        {
          "name": "Fleet of Foot",
          "entries": [
            "Your ground speed increases to 35 feet."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Mul Daya Nation",
      "source": "PSZ",
      "raceName": "Elf (Zendikar)",
      "raceSource": "PSZ",
      "page": 19,
      "ability": [
        {
          "str": 1
        }
      ],
      "darkvision": 120,
      "traitTags": [
        "Sunlight Sensitivity"
      ],
      "weaponProficiencies": [
        {
          "longsword|phb": true,
          "shortsword|phb": true,
          "shortbow|phb": true,
          "longbow|phb": true
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "hex"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "darkness"
                ]
              }
            }
          },
          "ability": "wis",
          "known": {
            "1": [
              "chill touch#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Mul Daya Magic",
          "entries": [
            "You know the {@spell chill touch} cantrip. When you reach 3rd level, you can cast the {@spell hex} spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the {@spell darkness} spell once with this trait and regain the ability to do so when you finish a long rest. Wisdom is your spellcasting ability for these spells."
          ],
          "type": "entries"
        },
        {
          "name": "Superior Darkvision",
          "entries": [
            "Your Darkvision has a radius of 120 feet."
          ],
          "data": {
            "overwrite": "Darkvision"
          },
          "type": "entries"
        },
        {
          "name": "Sunlight Sensitivity",
          "entries": [
            "You have disadvantage on attack rolls and on Wisdom ({@skill Perception}) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight."
          ],
          "type": "entries"
        },
        {
          "name": "Elf Weapon Training",
          "entries": [
            "You have proficiency with the {@item longsword|phb}, {@item shortsword|phb}, {@item shortbow|phb}, and {@item longbow|phb}."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Tajuru Nation",
      "source": "PSZ",
      "raceName": "Elf (Zendikar)",
      "raceSource": "PSZ",
      "page": 18,
      "ability": [
        {
          "cha": 1
        }
      ],
      "traitTags": [
        "Skill Proficiency",
        "Tool Proficiency"
      ],
      "skillToolLanguageProficiencies": [
        {
          "choose": [
            {
              "from": [
                "anySkill",
                "anyTool"
              ],
              "count": 2
            }
          ]
        }
      ],
      "entries": [
        {
          "name": "Skill Versatility",
          "entries": [
            "You have proficiency with any combination of two other skills or {@book tools|phb|5|tools} of your choice."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Bright",
      "source": "HWCS",
      "raceName": "Gallus",
      "raceSource": "HWCS",
      "page": 14,
      "ability": [
        {
          "cha": 1
        }
      ],
      "entries": [
        {
          "name": "Inspiring",
          "type": "entries",
          "entries": [
            "By spending an action and giving words of advice or encouragement, you can inspire an ally who is able to see and hear you. The ally can roll a {@dice d4} and add the number rolled to their next ability check, attack roll, or saving throw."
          ]
        },
        {
          "name": "Understanding",
          "type": "entries",
          "entries": [
            "You gain proficiency in the {@skill Insight} skill."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Huden",
      "source": "HWCS",
      "raceName": "Gallus",
      "raceSource": "HWCS",
      "page": 14,
      "ability": [
        {
          "dex": 1
        }
      ],
      "entries": [
        {
          "name": "One With the Wood",
          "type": "entries",
          "entries": [
            "You have proficiency in the {@skill Nature} skill."
          ]
        },
        {
          "name": "Seedspeech",
          "type": "entries",
          "entries": [
            "Your connection to the Great Rhythm is such that you can speak with the greenery of the forest itself. Through speech and touch you can communicate simple ideas to living plants. You are able to interpret their responses in simple language. Plants in the Wood do not experience the world in terms of sight, but most can feel differences in temperature, describe things that have touched them, as well as hear vibrations that happened around them (including speech)."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Air",
      "source": "EEPC",
      "raceName": "Genasi",
      "raceSource": "EEPC",
      "page": 9,
      "reprintedAs": [
        "Genasi (Air)|MPMM"
      ],
      "ability": [
        {
          "dex": 1
        }
      ],
      "additionalSpells": [
        {
          "ability": "con",
          "known": {
            "1": [
              "levitate"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Unending Breath",
          "entries": [
            "You can hold your breath indefinitely while you're not {@condition incapacitated}."
          ],
          "type": "entries"
        },
        {
          "name": "Mingle with the Wind",
          "entries": [
            "You can cast the {@spell levitate} spell once with this trait, requiring no material components, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for this spell."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Earth",
      "source": "EEPC",
      "raceName": "Genasi",
      "raceSource": "EEPC",
      "page": 9,
      "reprintedAs": [
        "Genasi (Earth)|MPMM"
      ],
      "ability": [
        {
          "str": 1
        }
      ],
      "additionalSpells": [
        {
          "ability": "con",
          "known": {
            "1": [
              "pass without trace"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Earth Walk",
          "entries": [
            "You can move across {@quickref difficult terrain||3} made of earth or stone without expending extra movement."
          ],
          "type": "entries"
        },
        {
          "name": "Merge with Stone",
          "entries": [
            "You can cast the {@spell pass without trace} spell once with this trait, requiring no material components, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for this spell."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Fire",
      "source": "EEPC",
      "raceName": "Genasi",
      "raceSource": "EEPC",
      "page": 9,
      "reprintedAs": [
        "Genasi (Fire)|MPMM"
      ],
      "ability": [
        {
          "int": 1
        }
      ],
      "darkvision": 60,
      "resist": [
        "fire"
      ],
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "burning hands"
                ]
              }
            }
          },
          "ability": "con",
          "known": {
            "1": [
              "produce flame#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. Your ties to the Elemental Plane of Fire make your darkvision unusual: everything you see in darkness is in a shade of red."
          ],
          "type": "entries"
        },
        {
          "name": "Fire Resistance",
          "entries": [
            "You have resistance to fire damage."
          ],
          "type": "entries"
        },
        {
          "name": "Reach to the Blaze",
          "entries": [
            "You know the {@spell produce flame} cantrip. Once you reach 3rd level, you can cast the {@spell burning hands} spell once with this trait as a 1st-level spell, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for these spells."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Water",
      "source": "EEPC",
      "raceName": "Genasi",
      "raceSource": "EEPC",
      "page": 10,
      "reprintedAs": [
        "Genasi (Water)|MPMM"
      ],
      "speed": {
        "walk": 30,
        "swim": 30
      },
      "ability": [
        {
          "wis": 1
        }
      ],
      "traitTags": [
        "Amphibious"
      ],
      "resist": [
        "acid"
      ],
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "create or destroy water#2"
                ]
              }
            }
          },
          "ability": "con",
          "known": {
            "1": [
              "shape water|xge#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Acid Resistance",
          "entries": [
            "You have resistance to acid damage."
          ],
          "type": "entries"
        },
        {
          "name": "Amphibious",
          "entries": [
            "You can breathe air and water."
          ],
          "type": "entries"
        },
        {
          "name": "Swim",
          "entries": [
            "You have a swimming speed of 30 feet."
          ],
          "type": "entries"
        },
        {
          "name": "Call to the Wave",
          "entries": [
            "You know the {@spell shape water|xge} cantrip. When you reach 3rd level, you can cast the {@spell create or destroy water} spell as a 2nd-level spell once with this trait, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for these spells."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Air",
      "source": "MPMM",
      "raceName": "Genasi",
      "raceSource": "MPMM",
      "page": 16,
      "speed": 35,
      "resist": [
        "lightning"
      ],
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "feather fall"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "levitate"
                ]
              }
            }
          },
          "ability": {
            "choose": [
              "int",
              "wis",
              "cha"
            ]
          },
          "known": {
            "1": [
              "shocking grasp#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Unending Breath",
          "entries": [
            "You can hold your breath indefinitely while you're not {@condition incapacitated}."
          ]
        },
        {
          "type": "entries",
          "name": "Lightning Resistance",
          "entries": [
            "You have resistance to lightning damage."
          ]
        },
        {
          "type": "entries",
          "name": "Mingle with the Wind",
          "entries": [
            "You know the {@spell shocking grasp} cantrip. Starting at 3rd level, you can cast the {@spell feather fall} spell with this trait, without requiring a material component. Starting 5th level, you can also cast the {@spell levitate} spell with this trait, without requiring a material component. Once you cast {@spell feather fall} or {@spell levitate} with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.",
            "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race)."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Earth",
      "source": "MPMM",
      "raceName": "Genasi",
      "raceSource": "MPMM",
      "page": 17,
      "additionalSpells": [
        {
          "innate": {
            "5": [
              "pass without trace"
            ]
          },
          "ability": {
            "choose": [
              "int",
              "wis",
              "cha"
            ]
          },
          "known": {
            "1": [
              "blade ward#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Earth Walk",
          "entries": [
            "You can move across {@quickref difficult terrain||3} without expending extra movement if you are using your walking speed on the ground or a floor."
          ]
        },
        {
          "type": "entries",
          "name": "Merge with Stone",
          "entries": [
            "You know the {@spell blade ward} cantrip. You can cast it as normal, and you can also cast it as a bonus action a number of times equal to your proficiency bonus, regaining all expended uses when you finish a long rest.",
            "Starting at 5th level, you can cast the {@spell pass without trace} spell with this trait, without requiring a material component. Once you cast that spell with this trait, you can't do so again until you finish a long rest. You can also cast it using any spell slots you have of 2nd level or higher.",
            "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race)."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Fire",
      "source": "MPMM",
      "raceName": "Genasi",
      "raceSource": "MPMM",
      "page": 17,
      "resist": [
        "fire"
      ],
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "burning hands"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "flame blade"
                ]
              }
            }
          },
          "ability": {
            "choose": [
              "int",
              "wis",
              "cha"
            ]
          },
          "known": {
            "1": [
              "produce flame#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Fire Resistance",
          "entries": [
            "You have resistance to fire damage."
          ]
        },
        {
          "type": "entries",
          "name": "Reach to the Blaze",
          "entries": [
            "You know the {@spell produce flame} cantrip. Starting at 3rd level, you can cast the {@spell burning hands} spell with this trait. Starting at 5th level, you can also cast the {@spell flame blade} spell with this trait, without a material component. Once you cast {@spell burning hands} or {@spell flame blade} with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.",
            "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race)."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Water",
      "source": "MPMM",
      "raceName": "Genasi",
      "raceSource": "MPMM",
      "page": 17,
      "speed": {
        "walk": 30,
        "swim": true
      },
      "traitTags": [
        "Amphibious"
      ],
      "resist": [
        "acid"
      ],
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "create or destroy water"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "water walk"
                ]
              }
            }
          },
          "ability": {
            "choose": [
              "int",
              "wis",
              "cha"
            ]
          },
          "known": {
            "1": [
              "acid splash#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Speed",
          "entries": [
            "Your walking speed is 30 feet, and you have a swimming speed equal to your walking speed."
          ]
        },
        {
          "type": "entries",
          "name": "Acid Resistance",
          "entries": [
            "You have resistance to acid damage."
          ]
        },
        {
          "type": "entries",
          "name": "Amphibious",
          "entries": [
            "You breathe air and water."
          ]
        },
        {
          "type": "entries",
          "name": "Call to the Wave",
          "entries": [
            "You know the {@spell acid splash} cantrip. Starting at 3rd level, you can cast the {@spell create or destroy water} spell with this trait. Starting at 5th level, you can also cast the {@spell water walk} spell with this trait, without requiring a material component. Once you cast {@spell create or destroy water} or {@spell water walk} with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.",
            "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race)."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Githyanki",
      "source": "MTF",
      "raceName": "Gith",
      "raceSource": "MTF",
      "page": 96,
      "reprintedAs": [
        "Githyanki|MPMM"
      ],
      "ability": [
        {
          "str": 2
        }
      ],
      "heightAndWeight": {
        "baseHeight": 60,
        "heightMod": "2d12",
        "baseWeight": 100,
        "weightMod": "2d4"
      },
      "traitTags": [
        "Skill Proficiency",
        "Tool Proficiency"
      ],
      "weaponProficiencies": [
        {
          "shortsword|phb": true,
          "longsword|phb": true,
          "greatsword|phb": true
        }
      ],
      "armorProficiencies": [
        {
          "light": true,
          "medium": true
        }
      ],
      "skillToolLanguageProficiencies": [
        {
          "choose": [
            {
              "from": [
                "anySkill",
                "anyTool"
              ]
            }
          ]
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "jump"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "misty step"
                ]
              }
            }
          },
          "ability": "int",
          "known": {
            "1": [
              "mage hand#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Githyanki tend toward lawful evil. They are aggressive and arrogant, and they remain the faithful servants of their lich-queen, Vlaakith. Renegade githyanki tend toward chaos."
          ]
        },
        {
          "name": "Decadent Mastery",
          "entries": [
            "You learn one language of your choice, and you are proficient with one skill or {@book tool|phb|5|tools} of your choice. In the timeless city of Tu'narath, githyanki have bountiful time to master odd bits of knowledge."
          ],
          "type": "entries"
        },
        {
          "name": "Martial Prodigy",
          "entries": [
            "You are proficient with light and medium armor and with {@item shortsword|phb|shortswords}, {@item longsword|phb|longswords}, and {@item greatsword|phb|greatswords}."
          ],
          "type": "entries"
        },
        {
          "name": "Githyanki Psionics",
          "entries": [
            "You know the {@spell mage hand} cantrip, and the hand is {@condition invisible} when you cast the cantrip with this trait.",
            "When you reach 3rd level, you can cast {@spell jump} once with this trait, and you regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the {@spell misty step} spell once with this trait, and you regain the ability to do so when you finish a long rest.",
            "Intelligence is your spellcasting ability for these spells. When you cast them with this trait, they don't require components."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Githzerai",
      "source": "MTF",
      "raceName": "Gith",
      "raceSource": "MTF",
      "page": 96,
      "reprintedAs": [
        "Githzerai|MPMM"
      ],
      "ability": [
        {
          "wis": 2
        }
      ],
      "heightAndWeight": {
        "baseHeight": 59,
        "heightMod": "2d12",
        "baseWeight": 90,
        "weightMod": "1d4"
      },
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "shield"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "detect thoughts"
                ]
              }
            }
          },
          "ability": "wis",
          "known": {
            "1": [
              "mage hand#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Githzerai tend toward lawful neutral. Their rigorous training in psychic abilities requires an implacable mental discipline."
          ]
        },
        {
          "name": "Mental Discipline",
          "entries": [
            "You have advantage on saving throws against the {@condition charmed} and {@condition frightened} conditions. Under the tutelage of monastic masters, githzerai learn to govern their own minds."
          ],
          "type": "entries"
        },
        {
          "name": "Githzerai Psionics",
          "entries": [
            "You know the {@spell mage hand} cantrip, and the hand is {@condition invisible} when you cast the cantrip with this trait.",
            "When you reach 3rd level, you can cast {@spell shield} once with this trait, and you regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the {@spell detect thoughts} spell once with this trait, and you regain the ability to do so when you finish a long rest.",
            "Wisdom is your spellcasting ability for these spells. When you cast them with this trait, they don't require components."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true
    },
    {
      "name": "Deep",
      "source": "MTF",
      "raceName": "Gnome",
      "raceSource": "PHB",
      "page": 113,
      "reprintedAs": [
        "Deep Gnome|MPMM"
      ],
      "ability": [
        {
          "dex": 1
        }
      ],
      "age": {
        "mature": 25,
        "max": 250
      },
      "darkvision": 120,
      "languageProficiencies": [
        {
          "common": true,
          "gnomish": true,
          "undercommon": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Deep gnomes are short-lived for gnomes. They mature at the same rate humans do and are considered full-grown adults by 25. They live 200 to 250 years, although hard toil and the dangers of the Underdark often claim them before their time."
          ],
          "data": {
            "overwrite": "Age"
          }
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Unlike other gnomes, svirfneblin tend to weigh 80 to 120 pounds. Your size is Small."
          ],
          "data": {
            "overwrite": "Size"
          }
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Svirfneblin believe that survival depends on avoiding entanglements with other creatures and not making enemies, so they favor neutral alignments. They rarely wish others ill, and they are unlikely to take risks on behalf of others, except those dearest to them."
          ],
          "data": {
            "overwrite": "Alignment"
          }
        },
        {
          "name": "Superior Darkvision",
          "entries": [
            "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "data": {
            "overwrite": "Darkvision"
          },
          "type": "entries"
        },
        {
          "name": "Stone Camouflage",
          "entries": [
            "You have advantage on Dexterity ({@skill Stealth}) checks to hide in rocky terrain."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common, Gnomish, and Undercommon."
          ],
          "data": {
            "overwrite": "Languages"
          },
          "type": "entries"
        }
      ],
      "overwrite": {
        "languageProficiencies": true
      }
    },
    {
      "name": "Deep/Svirfneblin",
      "source": "SCAG",
      "raceName": "Gnome",
      "raceSource": "PHB",
      "page": 115,
      "otherSources": [
        {
          "source": "EEPC",
          "page": 5
        }
      ],
      "reprintedAs": [
        "Deep Gnome|MPMM"
      ],
      "ability": [
        {
          "dex": 1
        }
      ],
      "age": {
        "mature": 25,
        "max": 250
      },
      "darkvision": 120,
      "languageProficiencies": [
        {
          "common": true,
          "gnomish": true,
          "undercommon": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Deep gnomes are short-lived for gnomes. They mature at the same rate humans do and are considered full-grown adults by 25. They live 200 to 250 years, although hard toil and the dangers of the Underdark often claim them before their time."
          ],
          "data": {
            "overwrite": "Age"
          }
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Svirfneblin believe that survival depends on avoiding entanglements with other creatures and not making enemies, so they favor neutral alignments. They rarely wish others ill, and they are unlikely to take risks on behalf of others."
          ],
          "data": {
            "overwrite": "Alignment"
          }
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "A typical svirfneblin stands about 3 to 3½ feet tall and weighs 80 to 120 pounds. Your size is Small."
          ],
          "data": {
            "overwrite": "Size"
          }
        },
        {
          "name": "Superior Darkvision",
          "entries": [
            "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "data": {
            "overwrite": "Darkvision"
          },
          "type": "entries"
        },
        {
          "name": "Stone Camouflage",
          "entries": [
            "You have advantage on Dexterity ({@skill Stealth}) checks to hide in rocky terrain."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common, Gnomish, and Undercommon. The svirfneblin dialect is more guttural than surface Gnomish, and most svirfneblin know only a little bit of Common, but those who deal with outsiders (and that includes you as an adventurer) pick up enough Common to get by in other lands."
          ],
          "data": {
            "overwrite": "Languages"
          },
          "type": "entries"
        }
      ],
      "overwrite": {
        "languageProficiencies": true
      },
      "hasFluff": true
    },
    {
      "name": "Forest",
      "source": "PHB",
      "raceName": "Gnome",
      "raceSource": "PHB",
      "page": 37,
      "ability": [
        {
          "dex": 1
        }
      ],
      "additionalSpells": [
        {
          "ability": "int",
          "known": {
            "1": [
              "minor illusion#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Natural Illusionist",
          "entries": [
            "You know the {@spell minor illusion} cantrip. Intelligence is your spellcasting ability for it."
          ],
          "type": "entries"
        },
        {
          "name": "Speak with Small Beasts",
          "entries": [
            "Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Mark of Scribing",
      "source": "ERLW",
      "raceName": "Gnome",
      "raceSource": "PHB",
      "page": 47,
      "ability": [
        {
          "cha": 1
        }
      ],
      "traitTags": [
        "Dragonmark",
        "Skill Bonus Dice",
        "Tool Bonus Dice"
      ],
      "additionalSpells": [
        {
          "innate": {
            "1": {
              "rest": {
                "1": [
                  "comprehend languages"
                ]
              }
            },
            "3": {
              "daily": {
                "1": [
                  "magic mouth"
                ]
              }
            }
          },
          "expanded": {
            "s1": [
              "comprehend languages",
              "illusory script"
            ],
            "s2": [
              "animal messenger",
              "silence"
            ],
            "s3": [
              "sending",
              "tongues"
            ],
            "s4": [
              "arcane eye",
              "confusion"
            ],
            "s5": [
              "dream"
            ]
          },
          "ability": "int",
          "known": {
            "1": [
              "message#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Gifted Scribe",
          "entries": [
            "When you make an Intelligence ({@skill History}) check or an ability check using {@item calligrapher's supplies|PHB}, you can roll a {@dice d4} and add the number rolled to the ability check."
          ]
        },
        {
          "type": "entries",
          "name": "Scribe's Insight",
          "entries": [
            "You know the {@spell message} cantrip. You can also cast {@spell comprehend languages} once with this trait, and you regain the ability to cast it when you finish a short or long rest. Starting at 3rd level, you can cast the {@spell magic mouth} spell with this trait, and you regain the ability to cast it when you finish a long rest. Intelligence is your spellcasting ability for these spells."
          ]
        },
        {
          "type": "entries",
          "name": "Spells of the Mark",
          "entries": [
            "If you have the Spellcasting or the Pact Magic class feature, the spells on the Mark of Scribing Spells table are added to the spell list of your spellcasting class.",
            {
              "type": "table",
              "caption": "Mark of Scribing Spells",
              "colLabels": [
                "Spell Level",
                "Spells"
              ],
              "colStyles": [
                "col-2 text-center",
                "col-10"
              ],
              "rows": [
                [
                  "1st",
                  "{@spell comprehend languages}, {@spell illusory script}"
                ],
                [
                  "2nd",
                  "{@spell animal messenger}, {@spell silence}"
                ],
                [
                  "3rd",
                  "{@spell sending}, {@spell tongues}"
                ],
                [
                  "4th",
                  "{@spell arcane eye}, {@spell confusion}"
                ],
                [
                  "5th",
                  "{@spell dream}"
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Rock",
      "source": "PHB",
      "raceName": "Gnome",
      "raceSource": "PHB",
      "page": 37,
      "srd": true,
      "ability": [
        {
          "con": 1
        }
      ],
      "toolProficiencies": [
        {
          "tinker's tools": true
        }
      ],
      "entries": [
        {
          "name": "Artificer's Lore",
          "entries": [
            "Whenever you make an Intelligence ({@skill History}) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply."
          ],
          "type": "entries"
        },
        {
          "name": "Tinker",
          "entries": [
            "You have proficiency with artisan's tools ({@item tinker's tools|phb}). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time.",
            "When you create a device, choose one of the following options:",
            {
              "type": "entries",
              "name": "Clockwork Toy",
              "entries": [
                "This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents."
              ]
            },
            {
              "type": "entries",
              "name": "Fire Starter",
              "entries": [
                "The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action."
              ]
            },
            {
              "type": "entries",
              "name": "Music Box",
              "entries": [
                "When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed."
              ]
            }
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Ixalan",
      "source": "PSX",
      "raceName": "Goblin",
      "raceSource": "PSZ",
      "page": 16,
      "otherSources": null,
      "ability": [
        {
          "dex": 2
        }
      ],
      "entries": [
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Most goblins are wildly chaotic, with no particular inclination toward good or evil but a strong tendency toward mischief."
          ],
          "data": {
            "overwrite": "Alignment"
          }
        },
        {
          "type": "entries",
          "name": "Agile Climber",
          "entries": [
            "You have a climbing speed of 25 feet. You can't use your climbing speed while you wear medium or heavy armor. (If your campaign uses the variant rule for {@variantrule encumbrance|PHB}, you can't use your climbing speed if you are encumbered.)"
          ]
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write {@language Common Trade Pidgin|PSX|Common} (if it exists in your campaign) and {@language Goblin|PHB}."
          ],
          "type": "entries",
          "data": {
            "overwrite": "Languages"
          }
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Zendikar; Grotag Tribe",
      "source": "PSZ",
      "raceName": "Goblin",
      "raceSource": "PSZ",
      "page": 17,
      "otherSources": null,
      "ability": [
        {
          "con": 2
        }
      ],
      "skillProficiencies": [
        {
          "animal handling": true
        }
      ],
      "entries": [
        {
          "name": "Grit",
          "entries": [
            "You have resistance to fire damage and psychic damage. In addition, when you are wearing no armor, your AC is equal to 11 + your Dexterity modifier."
          ],
          "type": "entries"
        },
        {
          "name": "Grotag Tamer",
          "entries": [
            "You have proficiency in the {@skill Animal Handling} skill."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Zendikar; Lavastep Tribe",
      "source": "PSZ",
      "raceName": "Goblin",
      "raceSource": "PSZ",
      "page": 17,
      "otherSources": null,
      "ability": [
        {
          "con": 2
        }
      ],
      "entries": [
        {
          "name": "Grit",
          "entries": [
            "You have resistance to fire damage and psychic damage. In addition, when you are wearing no armor, your AC is equal to 11 + your Dexterity modifier."
          ],
          "type": "entries"
        },
        {
          "name": "Lavastep Grit",
          "entries": [
            "You have advantage on Dexterity ({@skill Stealth}) checks made to hide in rocky or subterranean environments."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Zendikar; Tuktuk Tribe",
      "source": "PSZ",
      "raceName": "Goblin",
      "raceSource": "PSZ",
      "page": 17,
      "otherSources": null,
      "ability": [
        {
          "con": 2
        }
      ],
      "toolProficiencies": [
        {
          "thieves' tools": true
        }
      ],
      "entries": [
        {
          "name": "Grit",
          "entries": [
            "You have resistance to fire damage and psychic damage. In addition, when you are wearing no armor, your AC is equal to 11 + your Dexterity modifier."
          ],
          "type": "entries"
        },
        {
          "name": "Tuktuk Cunning",
          "entries": [
            "You have proficiency with {@item thieves' tools|phb}."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "source": "PHB",
      "raceName": "Half-Elf",
      "raceSource": "PHB",
      "page": 38,
      "srd": true,
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Variant; Aquatic Elf Descent",
      "source": "SCAG",
      "raceName": "Half-Elf",
      "raceSource": "PHB",
      "page": 116,
      "speed": 30,
      "entries": [
        {
          "type": "inset",
          "name": "Variant Feature (Choose 1)",
          "entries": [
            {
              "name": "Skill Versatility",
              "entries": [
                "You gain proficiency in two skills of your choice."
              ],
              "type": "entries"
            },
            {
              "name": "Swim",
              "entries": [
                "You gain a swimming speed of 30 ft."
              ],
              "type": "entries"
            }
          ],
          "data": {
            "overwrite": "Skill Versatility"
          }
        }
      ],
      "_versions": [
        {
          "name": "Variant; Aquatic Elf Descent; Skill Versatility",
          "source": "SCAG",
          "_mod": {
            "entries": {
              "mode": "replaceArr",
              "replace": "Variant Feature (Choose 1)",
              "items": {
                "name": "Variant Feature; Skill Versatility",
                "type": "entries",
                "entries": [
                  "You gain proficiency in two skills of your choice."
                ]
              }
            }
          },
          "skillProficiencies": [
            {
              "any": 2
            }
          ]
        },
        {
          "name": "Variant; Aquatic Elf Descent; Swim Speed",
          "source": "SCAG",
          "_mod": {
            "entries": {
              "mode": "replaceArr",
              "replace": "Variant Feature (Choose 1)",
              "items": {
                "name": "Variant Feature; Swim Speed",
                "type": "entries",
                "entries": [
                  "You gain a swimming speed of 30 ft."
                ]
              }
            }
          },
          "speed": {
            "walk": 30,
            "swim": 30
          },
          "skillProficiencies": null,
          "overwrite": {
            "skillProficiencies": true
          }
        }
      ]
    },
    {
      "name": "Variant; Drow Descent",
      "source": "SCAG",
      "raceName": "Half-Elf",
      "raceSource": "PHB",
      "page": 116,
      "skillProficiencies": [
        {
          "any": 2
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "faerie fire"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "darkness"
                ]
              }
            }
          },
          "ability": "cha",
          "known": {
            "1": [
              "dancing lights#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "inset",
          "name": "Variant Feature (Choose 1)",
          "entries": [
            {
              "name": "Skill Versatility",
              "entries": [
                "You gain proficiency in two skills of your choice."
              ],
              "type": "entries"
            },
            {
              "name": "Drow Magic",
              "entries": [
                "You know the {@spell dancing lights} cantrip. When you reach 3rd level, you can cast the {@spell faerie fire} spell once per day; you must finish a long rest in order to cast the spell again using this trait. When you reach 5th level, you can also cast the {@spell darkness} spell once per day; you must finish a long rest in order to cast the spell again using this trait. Charisma is your spellcasting ability for these spells."
              ],
              "type": "entries"
            }
          ],
          "data": {
            "overwrite": "Skill Versatility"
          }
        }
      ],
      "overwrite": {
        "skillProficiencies": true
      },
      "_versions": [
        {
          "name": "Variant; Drow Descent; Drow Magic",
          "source": "SCAG",
          "_mod": {
            "entries": {
              "mode": "replaceArr",
              "replace": "Variant Feature (Choose 1)",
              "items": {
                "name": "Variant Feature; Drow Magic",
                "type": "entries",
                "entries": [
                  "You know the {@spell dancing lights} cantrip. When you reach 3rd level, you can cast the {@spell faerie fire} spell once per day; you must finish a long rest in order to cast the spell again using this trait. When you reach 5th level, you can also cast the {@spell darkness} spell once per day; you must finish a long rest in order to cast the spell again using this trait. Charisma is your spellcasting ability for these spells."
                ]
              }
            }
          },
          "skillProficiencies": null
        },
        {
          "name": "Variant; Drow Descent; Skill Versatility",
          "source": "SCAG",
          "_mod": {
            "entries": {
              "mode": "replaceArr",
              "replace": "Variant Feature (Choose 1)",
              "items": {
                "name": "Variant Feature; Skill Versatility",
                "type": "entries",
                "entries": [
                  "You gain proficiency in two skills of your choice."
                ]
              }
            }
          },
          "additionalSpells": null
        }
      ]
    },
    {
      "name": "Variant; Mark of Detection",
      "source": "ERLW",
      "raceName": "Half-Elf",
      "raceSource": "PHB",
      "page": 40,
      "ability": [
        {
          "wis": 2,
          "choose": {
            "from": [
              "str",
              "dex",
              "con",
              "int",
              "cha"
            ],
            "count": 1
          }
        }
      ],
      "traitTags": [
        "Dragonmark",
        "Skill Bonus Dice"
      ],
      "skillProficiencies": null,
      "additionalSpells": [
        {
          "innate": {
            "1": [
              "detect magic",
              "detect poison and disease"
            ],
            "3": {
              "daily": {
                "1": [
                  "see invisibility"
                ]
              }
            }
          },
          "expanded": {
            "s1": [
              "detect evil and good",
              "detect poison and disease"
            ],
            "s2": [
              "detect thoughts",
              "find traps"
            ],
            "s3": [
              "clairvoyance",
              "nondetection"
            ],
            "s4": [
              "arcane eye",
              "divination"
            ],
            "s5": [
              "legend lore"
            ]
          },
          "ability": "int"
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Deductive Intuition",
          "entries": [
            "When you make an Intelligence ({@skill Investigation}) or a Wisdom ({@skill Insight}) check, you can roll a {@dice d4} and add the number rolled to the ability check."
          ],
          "data": {
            "overwrite": "Skill Versatility"
          }
        },
        {
          "type": "entries",
          "name": "Magical Detection",
          "entries": [
            "You can cast the {@spell detect magic} and {@spell detect poison and disease} spells with this trait. Starting at 3rd level, you can also cast the {@spell see invisibility} spell with it. Once you cast any of these spells with this trait, you can't cast that spell with it again until you finish a long rest. Wisdom is your spellcasting ability for these spells, and you don't require material components for them."
          ]
        },
        {
          "type": "entries",
          "name": "Spells of the Mark",
          "entries": [
            "If you have the Spellcasting or the Pact Magic class feature, the spells on the Mark of Detection Spells table are added to the spell list of your spellcasting class.",
            {
              "type": "table",
              "caption": "Mark of Detection Spells",
              "colLabels": [
                "Spell Level",
                "Spells"
              ],
              "colStyles": [
                "col-2 text-center",
                "col-10"
              ],
              "rows": [
                [
                  "1st",
                  "{@spell detect evil and good}, {@spell detect poison and disease}"
                ],
                [
                  "2nd",
                  "{@spell detect thoughts}, {@spell find traps}"
                ],
                [
                  "3rd",
                  "{@spell clairvoyance}, {@spell nondetection}"
                ],
                [
                  "4th",
                  "{@spell arcane eye}, {@spell divination}"
                ],
                [
                  "5th",
                  "{@spell legend lore}"
                ]
              ]
            }
          ]
        }
      ],
      "overwrite": {
        "ability": true
      }
    },
    {
      "name": "Variant; Mark of Storm",
      "source": "ERLW",
      "raceName": "Half-Elf",
      "raceSource": "PHB",
      "page": 50,
      "ability": [
        {
          "cha": 2,
          "dex": 1
        }
      ],
      "traitTags": [
        "Dragonmark",
        "Skill Bonus Dice",
        "Tool Bonus Dice"
      ],
      "skillProficiencies": null,
      "resist": [
        "lightning"
      ],
      "additionalSpells": [
        {
          "expanded": {
            "s1": [
              "feather fall",
              "fog cloud"
            ],
            "s2": [
              "gust of wind",
              "levitate"
            ],
            "s3": [
              "sleet storm",
              "wind wall"
            ],
            "s4": [
              "conjure minor elementals",
              "control water"
            ],
            "s5": [
              "conjure elemental"
            ]
          },
          "ability": "cha",
          "known": {
            "1": [
              "gust|xge#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Windwright's Intuition",
          "entries": [
            "When you make a Dexterity ({@skill Acrobatics}) check or any ability check involving {@item navigator's tools|PHB}, you can roll a {@dice d4} and add the number rolled to the ability check."
          ],
          "data": {
            "overwrite": "Skill Versatility"
          }
        },
        {
          "type": "entries",
          "name": "Storm's Boon",
          "entries": [
            "You have resistance to lightning damage."
          ]
        },
        {
          "type": "entries",
          "name": "Headwinds",
          "entries": [
            "You know the {@spell gust|XGE} cantrip. Starting at 3rd level, you can cast the {@spell gust of wind} spell once with this trait, and you regain the ability to cast it when you finish a long rest. Charisma is your spellcasting ability for these spells."
          ]
        },
        {
          "type": "entries",
          "name": "Spells of the Mark",
          "entries": [
            "If you have the Spellcasting or the Pact Magic class feature, the spells on the Mark of Storm Spells table are added to the spell list of your spellcasting class.",
            {
              "type": "table",
              "caption": "Mark of Storm Spells",
              "colLabels": [
                "Spell Level",
                "Spells"
              ],
              "colStyles": [
                "col-2 text-center",
                "col-10"
              ],
              "rows": [
                [
                  "1st",
                  "{@spell feather fall}, {@spell fog cloud}"
                ],
                [
                  "2nd",
                  "{@spell gust of wind}, {@spell levitate}"
                ],
                [
                  "3rd",
                  "{@spell sleet storm}, {@spell wind wall}"
                ],
                [
                  "4th",
                  "{@spell conjure minor elementals}, {@spell control water}"
                ],
                [
                  "5th",
                  "{@spell conjure elemental}"
                ]
              ]
            }
          ]
        }
      ],
      "overwrite": {
        "ability": true
      }
    },
    {
      "name": "Variant; Moon Elf or Sun Elf Descent",
      "source": "SCAG",
      "raceName": "Half-Elf",
      "raceSource": "PHB",
      "page": 116,
      "skillProficiencies": [
        {
          "any": 2
        }
      ],
      "weaponProficiencies": [
        {
          "longsword|phb": true,
          "shortsword|phb": true,
          "shortbow|phb": true,
          "longbow|phb": true
        }
      ],
      "additionalSpells": [
        {
          "ability": "int",
          "known": {
            "1": {
              "_": [
                {
                  "choose": "level=0|class=Wizard"
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "inset",
          "name": "Variant Feature (Choose 1)",
          "entries": [
            {
              "name": "Skill Versatility",
              "entries": [
                "You gain proficiency in two skills of your choice."
              ],
              "type": "entries"
            },
            {
              "name": "Elf Weapon Training",
              "entries": [
                "You have proficiency with the {@item longsword|phb}, {@item shortsword|phb}, {@item shortbow|phb}, and {@item longbow|phb}."
              ],
              "type": "entries"
            },
            {
              "name": "Cantrip",
              "entries": [
                "You know one cantrip of your choice from the {@filter wizard spell list|spells|class=wizard|level=0}. Intelligence is your spellcasting ability for it."
              ],
              "type": "entries"
            }
          ],
          "data": {
            "overwrite": "Skill Versatility"
          }
        }
      ],
      "overwrite": {
        "skillProficiencies": true
      },
      "_versions": [
        {
          "name": "Variant; Moon Elf or Sun Elf Descent; Cantrip",
          "source": "SCAG",
          "_mod": {
            "entries": {
              "mode": "replaceArr",
              "replace": "Variant Feature (Choose 1)",
              "items": {
                "name": "Variant Feature; Cantrip",
                "type": "entries",
                "entries": [
                  "You know one cantrip of your choice from the {@filter wizard spell list|spells|class=wizard|level=0}. Intelligence is your spellcasting ability for it."
                ]
              }
            }
          },
          "skillProficiencies": null,
          "weaponProficiencies": null
        },
        {
          "name": "Variant; Moon Elf or Sun Elf Descent; Elf Weapon Training",
          "source": "SCAG",
          "_mod": {
            "entries": {
              "mode": "replaceArr",
              "replace": "Variant Feature (Choose 1)",
              "items": {
                "name": "Variant Feature; Elf Weapon Training",
                "type": "entries",
                "entries": [
                  "You have proficiency with the {@item longsword|phb}, {@item shortsword|phb}, {@item shortbow|phb}, and {@item longbow|phb}."
                ]
              }
            }
          },
          "skillProficiencies": null,
          "additionalSpells": null
        },
        {
          "name": "Variant; Moon Elf or Sun Elf Descent; Skill Versatility",
          "source": "SCAG",
          "_mod": {
            "entries": {
              "mode": "replaceArr",
              "replace": "Variant Feature (Choose 1)",
              "items": {
                "name": "Variant Feature; Skill Versatility",
                "type": "entries",
                "entries": [
                  "You gain proficiency in two skills of your choice."
                ]
              }
            }
          },
          "weaponProficiencies": null,
          "additionalSpells": null
        }
      ]
    },
    {
      "name": "Variant; Wood Elf Descent",
      "source": "SCAG",
      "raceName": "Half-Elf",
      "raceSource": "PHB",
      "page": 116,
      "skillProficiencies": [
        {
          "any": 2
        }
      ],
      "weaponProficiencies": [
        {
          "longsword|phb": true,
          "shortsword|phb": true,
          "shortbow|phb": true,
          "longbow|phb": true
        }
      ],
      "entries": [
        {
          "type": "inset",
          "name": "Variant Feature (Choose 1)",
          "entries": [
            {
              "name": "Skill Versatility",
              "entries": [
                "You gain proficiency in two skills of your choice."
              ],
              "type": "entries"
            },
            {
              "name": "Elf Weapon Training",
              "entries": [
                "You have proficiency with the {@item longsword|phb}, {@item shortsword|phb}, {@item shortbow|phb}, and {@item longbow|phb}."
              ],
              "type": "entries"
            },
            {
              "name": "Fleet of Foot",
              "entries": [
                "Your base walking speed increases to 35 feet."
              ],
              "type": "entries"
            },
            {
              "name": "Mask of the Wild",
              "entries": [
                "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
              ],
              "type": "entries"
            }
          ],
          "data": {
            "overwrite": "Skill Versatility"
          }
        }
      ],
      "overwrite": {
        "skillProficiencies": true
      },
      "_versions": [
        {
          "name": "Variant; Wood Elf Descent; Elf Weapon Training",
          "source": "SCAG",
          "_mod": {
            "entries": {
              "mode": "replaceArr",
              "replace": "Variant Feature (Choose 1)",
              "items": {
                "name": "Variant Feature; Elf Weapon Training",
                "type": "entries",
                "entries": [
                  "You have proficiency with the {@item longsword|phb}, {@item shortsword|phb}, {@item shortbow|phb}, and {@item longbow|phb}."
                ]
              }
            }
          },
          "skillProficiencies": null
        },
        {
          "name": "Variant; Wood Elf Descent; Fleet of Foot",
          "source": "SCAG",
          "_mod": {
            "entries": {
              "mode": "replaceArr",
              "replace": "Variant Feature (Choose 1)",
              "items": {
                "name": "Variant Feature; Fleet of Foot",
                "type": "entries",
                "entries": [
                  "Your base walking speed increases to 35 feet."
                ]
              }
            }
          },
          "speed": 35,
          "skillProficiencies": null,
          "weaponProficiencies": null
        },
        {
          "name": "Variant; Wood Elf Descent; Mask of the Wild",
          "source": "SCAG",
          "_mod": {
            "entries": {
              "mode": "replaceArr",
              "replace": "Variant Feature (Choose 1)",
              "items": {
                "name": "Variant Feature; Mask of the Wild",
                "type": "entries",
                "entries": [
                  "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
                ]
              }
            }
          },
          "skillProficiencies": null,
          "weaponProficiencies": null
        },
        {
          "name": "Variant; Wood Elf Descent; Skill Versatility",
          "source": "SCAG",
          "_mod": {
            "entries": {
              "mode": "replaceArr",
              "replace": "Variant Feature (Choose 1)",
              "items": {
                "name": "Variant Feature; Skill Versatility",
                "type": "entries",
                "entries": [
                  "You gain proficiency in two skills of your choice."
                ]
              }
            }
          },
          "weaponProficiencies": null
        }
      ]
    },
    {
      "source": "PHB",
      "raceName": "Half-Orc",
      "raceSource": "PHB",
      "page": 40,
      "srd": true,
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Variant; Mark of Finding",
      "source": "ERLW",
      "raceName": "Half-Orc",
      "raceSource": "PHB",
      "page": 41,
      "traitTags": [
        "Dragonmark",
        "Skill Bonus Dice"
      ],
      "languageProficiencies": [
        {
          "common": true,
          "goblin": true
        }
      ],
      "soundClip": {
        "type": "internal",
        "path": "races/half-orc.mp3"
      },
      "additionalSpells": [
        {
          "innate": {
            "1": [
              "hunter's mark"
            ],
            "3": {
              "daily": {
                "1": [
                  "locate object"
                ]
              }
            }
          },
          "expanded": {
            "s1": [
              "faerie fire",
              "longstrider"
            ],
            "s2": [
              "locate animals or plants",
              "locate object"
            ],
            "s3": [
              "clairvoyance",
              "speak with plants"
            ],
            "s4": [
              "divination",
              "locate creature"
            ],
            "s5": [
              "commune with nature"
            ]
          },
          "ability": "wis"
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ],
          "data": {
            "overwrite": "Darkvision"
          }
        },
        {
          "type": "entries",
          "name": "Hunter's Intuition",
          "entries": [
            "When you make a Wisdom ({@skill Perception}) or Wisdom ({@skill Survival}) check, you can roll a {@dice d4} and add the number rolled to the ability check."
          ],
          "data": {
            "overwrite": "Menacing"
          }
        },
        {
          "type": "entries",
          "name": "Finder's Magic",
          "entries": [
            "You can cast the {@spell hunter's mark} spell with this trait. Starting at 3rd level, you can also cast the {@spell locate object} spell with it. Once you cast either spell with this trait, you can't cast that spell with it again until you finish a long rest. Wisdom is your spellcasting ability for these spells."
          ],
          "data": {
            "overwrite": "Relentless Endurance"
          }
        },
        {
          "type": "entries",
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Goblin."
          ],
          "data": {
            "overwrite": "Languages"
          }
        },
        {
          "type": "entries",
          "name": "Spells of the Mark",
          "entries": [
            "If you have the Spellcasting or the Pact Magic class feature, the spells on the Mark of Finding Spells table are added to the spell list of your spellcasting class.",
            {
              "type": "table",
              "caption": "Mark of Finding Spells",
              "colLabels": [
                "Spell Level",
                "Spells"
              ],
              "colStyles": [
                "col-2 text-center",
                "col-10"
              ],
              "rows": [
                [
                  "1st",
                  "{@spell faerie fire}, {@spell longstrider}"
                ],
                [
                  "2nd",
                  "{@spell locate animals or plants}, {@spell locate object}"
                ],
                [
                  "3rd",
                  "{@spell clairvoyance}, {@spell speak with plants}"
                ],
                [
                  "4th",
                  "{@spell divination}, {@spell locate creature}"
                ],
                [
                  "5th",
                  "{@spell commune with nature}"
                ]
              ]
            }
          ],
          "data": {
            "overwrite": "Savage Attacks"
          }
        }
      ]
    },
    {
      "name": "Ghostwise",
      "source": "SCAG",
      "raceName": "Halfling",
      "raceSource": "PHB",
      "page": 110,
      "ability": [
        {
          "wis": 1
        }
      ],
      "entries": [
        {
          "name": "Silent Speech",
          "entries": [
            "You can speak telepathically to any creature within 30 feet of you. The creature understands you only if the two of you share a language. You can speak telepathically in this way to one creature at a time."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Lightfoot",
      "source": "PHB",
      "raceName": "Halfling",
      "raceSource": "PHB",
      "page": 28,
      "srd": true,
      "basicRules": true,
      "ability": [
        {
          "cha": 1
        }
      ],
      "entries": [
        {
          "name": "Naturally Stealthy",
          "entries": [
            "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Lotusden",
      "source": "EGW",
      "raceName": "Halfling",
      "raceSource": "PHB",
      "page": 164,
      "ability": [
        {
          "wis": 1
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "entangle"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "spike growth"
                ]
              }
            }
          },
          "ability": "wis",
          "known": {
            "1": [
              "druidcraft#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Child of the Wood",
          "entries": [
            "You know the {@spell druidcraft} cantrip. When you reach 3rd level, you can cast the {@spell entangle} spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the {@spell spike growth} spell once with this trait and regain the ability to do so when you finish a long rest. Casting these spells with this trait doesn't require material components. Wisdom is your spellcasting ability for these spells."
          ]
        },
        {
          "type": "entries",
          "name": "Timberwalk",
          "entries": [
            "Ability checks made to track you have disadvantage, and you can move across {@quickref difficult terrain||3} made of nonmagical plants and undergrowth without expending extra movement."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Mark of Healing",
      "source": "ERLW",
      "raceName": "Halfling",
      "raceSource": "PHB",
      "page": 43,
      "ability": [
        {
          "wis": 1
        }
      ],
      "traitTags": [
        "Dragonmark",
        "Skill Bonus Dice",
        "Tool Bonus Dice"
      ],
      "additionalSpells": [
        {
          "innate": {
            "1": [
              "cure wounds"
            ],
            "3": {
              "daily": {
                "1": [
                  "lesser restoration"
                ]
              }
            }
          },
          "expanded": {
            "s1": [
              "cure wounds",
              "healing word"
            ],
            "s2": [
              "lesser restoration",
              "prayer of healing"
            ],
            "s3": [
              "aura of vitality",
              "mass healing word"
            ],
            "s4": [
              "aura of purity",
              "aura of life"
            ],
            "s5": [
              "greater restoration"
            ]
          },
          "ability": "wis"
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Medical Intuition",
          "entries": [
            "When you make a Wisdom ({@skill Medicine}) check or an ability check using an {@item herbalism kit|phb}, you can roll a {@dice d4} and add the number rolled to the ability check."
          ]
        },
        {
          "type": "entries",
          "name": "Healing Touch",
          "entries": [
            "You can cast the {@spell cure wounds} spell with this trait. Starting at 3rd level, you can also cast {@spell lesser restoration} with it. Once you cast either spell with this trait, you can't cast that spell with it again until you finish a long rest. Wisdom is your spellcasting ability for these spells."
          ]
        },
        {
          "type": "entries",
          "name": "Spells of the Mark",
          "entries": [
            "If you have the Spellcasting or the Pact Magic class feature, the spells on the Mark of Healing Spells table are added to the spell list of your spellcasting class.",
            {
              "type": "table",
              "caption": "Mark of Healing Spells",
              "colLabels": [
                "Spell Level",
                "Spells"
              ],
              "colStyles": [
                "col-2 text-center",
                "col-10"
              ],
              "rows": [
                [
                  "1st",
                  "{@spell cure wounds}, {@spell healing word}"
                ],
                [
                  "2nd",
                  "{@spell lesser restoration}, {@spell prayer of healing}"
                ],
                [
                  "3rd",
                  "{@spell aura of vitality}, {@spell mass healing word}"
                ],
                [
                  "4th",
                  "{@spell aura of purity}, {@spell aura of life}"
                ],
                [
                  "5th",
                  "{@spell greater restoration}"
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Mark of Hospitality",
      "source": "ERLW",
      "raceName": "Halfling",
      "raceSource": "PHB",
      "page": 44,
      "ability": [
        {
          "cha": 1
        }
      ],
      "traitTags": [
        "Dragonmark",
        "Skill Bonus Dice",
        "Tool Bonus Dice"
      ],
      "additionalSpells": [
        {
          "expanded": {
            "s1": [
              "goodberry",
              "sleep"
            ],
            "s2": [
              "aid",
              "calm emotions"
            ],
            "s3": [
              "create food and water",
              "leomund's tiny hut"
            ],
            "s4": [
              "aura of purity",
              "mordenkainen's private sanctum"
            ],
            "s5": [
              "hallow"
            ]
          },
          "ability": "cha",
          "known": {
            "1": [
              "prestidigitation#c",
              "purify food and drink",
              "unseen servant"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Ever Hospitable",
          "entries": [
            "When you make a Charisma ({@skill Persuasion}) check or an ability check involving {@item brewer's supplies|PHB} or {@item cook's utensils|PHB}, you can roll a {@dice d4} and add the number rolled to the ability check."
          ]
        },
        {
          "type": "entries",
          "name": "Innkeeper's Magic",
          "entries": [
            "You know the {@spell prestidigitation} cantrip. You can also cast the {@spell purify food and drink} and {@spell unseen servant} spells with this trait. Once you cast either spell with this trait, you can't cast that spell with it again until you finish long rest. Charisma is your spellcasting ability for these spells."
          ]
        },
        {
          "type": "entries",
          "name": "Spells of the Mark",
          "entries": [
            "If you have the Spellcasting or the Pact Magic class feature, the spells on the Mark of Hospitality Spells table are added to the spell list of your spellcasting class.",
            {
              "type": "table",
              "caption": "Mark of Hospitality Spells",
              "colLabels": [
                "Spell Level",
                "Spells"
              ],
              "colStyles": [
                "col-2 text-center",
                "col-10"
              ],
              "rows": [
                [
                  "1st",
                  "{@spell goodberry}, {@spell sleep}"
                ],
                [
                  "2nd",
                  "{@spell aid}, {@spell calm emotions}"
                ],
                [
                  "3rd",
                  "{@spell create food and water}, {@spell Leomund's tiny hut}"
                ],
                [
                  "4th",
                  "{@spell aura of purity}, {@spell Mordenkainen's private sanctum}"
                ],
                [
                  "5th",
                  "{@spell hallow}"
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Stout",
      "source": "PHB",
      "raceName": "Halfling",
      "raceSource": "PHB",
      "page": 28,
      "basicRules": true,
      "ability": [
        {
          "con": 1
        }
      ],
      "resist": [
        "poison"
      ],
      "entries": [
        {
          "name": "Stout Resilience",
          "entries": [
            "You have advantage on saving throws against poison, and you have resistance against poison damage."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "source": "PHB",
      "raceName": "Human",
      "raceSource": "PHB",
      "page": 29,
      "srd": true,
      "basicRules": true,
      "ability": [
        {
          "str": 1,
          "dex": 1,
          "con": 1,
          "int": 1,
          "wis": 1,
          "cha": 1
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Keldon",
      "source": "PSD",
      "raceName": "Human",
      "raceSource": "PHB",
      "page": 19,
      "ability": [
        {
          "str": 2,
          "con": 1
        }
      ],
      "age": {
        "mature": 20,
        "max": 100
      },
      "skillProficiencies": [
        {
          "athletics": true
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "other": true
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Keldons reach adulthood in their late teens and live less than a century."
          ],
          "data": {
            "overwrite": "Age"
          }
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Keldons tend toward chaotic alignments, and many walk a fine line between good and evil."
          ],
          "data": {
            "overwrite": "Alignment"
          }
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Keldons are taller and heavier than the human norms of other cultures, standing almost universally above 6 feet tall and reaching heights above 7 feet. Your size is Medium."
          ],
          "data": {
            "overwrite": "Size"
          }
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and {@language Keldon|PSD}."
          ],
          "type": "entries",
          "data": {
            "overwrite": "Languages"
          }
        },
        {
          "type": "entries",
          "name": "Natural Athlete",
          "entries": [
            "You have proficiency in the {@skill Athletics} skill."
          ]
        },
        {
          "type": "entries",
          "name": "Keldon Resilience",
          "entries": [
            "You have proficiency in Strength saving throws."
          ]
        },
        {
          "type": "entries",
          "name": "Icehaven Born",
          "entries": [
            "You are naturally adapted to {@hazard Extreme Cold|DMG|cold climates}, as described in chapter 5 of the {@i Dungeon Master's Guide}."
          ]
        }
      ],
      "overwrite": {
        "languageProficiencies": true
      },
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Mark of Handling",
      "source": "ERLW",
      "raceName": "Human",
      "raceSource": "PHB",
      "page": 42,
      "ability": [
        {
          "wis": 2,
          "choose": {
            "from": [
              "str",
              "dex",
              "con",
              "int",
              "cha"
            ],
            "count": 1
          }
        }
      ],
      "traitTags": [
        "Dragonmark",
        "Skill Bonus Dice"
      ],
      "additionalSpells": [
        {
          "expanded": {
            "s1": [
              "animal friendship",
              "speak with animals"
            ],
            "s2": [
              "beast sense",
              "calm emotions"
            ],
            "s3": [
              "beacon of hope",
              "conjure animals"
            ],
            "s4": [
              "aura of life",
              "dominate beast"
            ],
            "s5": [
              "awaken"
            ]
          },
          "ability": "wis",
          "known": {
            "1": {
              "rest": {
                "1": [
                  "animal friendship",
                  "speak with animals"
                ]
              }
            }
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Wild Intuition",
          "entries": [
            "When you make a Wisdom ({@skill Animal Handling}) or Intelligence ({@skill Nature}) check, you can roll a {@dice d4} and add the number rolled to the ability check."
          ]
        },
        {
          "type": "entries",
          "name": "Primal Connection",
          "entries": [
            "You can cast the {@spell animal friendship} and {@spell speak with animals} spells with this trait, requiring no material component. Once you cast either spell with this trait, you can't cast that spell with it again until you finish a short or long rest. Wisdom is your spellcasting ability for these spells."
          ]
        },
        {
          "type": "entries",
          "name": "The Bigger They Are",
          "entries": [
            "Starting at 3rd level, you can target a beast or monstrosity when you cast {@spell animal friendship} or {@spell speak with animals}, provided the creature's Intelligence score is 3 or lower."
          ]
        },
        {
          "type": "entries",
          "name": "Spells of the Mark",
          "entries": [
            "If you have the Spellcasting or the Pact Magic class feature, the spells on the Mark of Handling Spells table are added to the spell list of your spellcasting class.",
            {
              "type": "table",
              "caption": "Mark of Handling Spells",
              "colLabels": [
                "Spell Level",
                "Spells"
              ],
              "colStyles": [
                "col-2 text-center",
                "col-10"
              ],
              "rows": [
                [
                  "1st",
                  "{@spell animal friendship}, {@spell speak with animals}"
                ],
                [
                  "2nd",
                  "{@spell beast sense}, {@spell calm emotions}"
                ],
                [
                  "3rd",
                  "{@spell beacon of hope}, {@spell conjure animals}"
                ],
                [
                  "4th",
                  "{@spell aura of life}, {@spell dominate beast}"
                ],
                [
                  "5th",
                  "{@spell awaken}"
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Mark of Making",
      "source": "ERLW",
      "raceName": "Human",
      "raceSource": "PHB",
      "page": 45,
      "ability": [
        {
          "int": 2,
          "choose": {
            "from": [
              "str",
              "dex",
              "con",
              "wis",
              "cha"
            ],
            "count": 1
          }
        }
      ],
      "traitTags": [
        "Dragonmark",
        "Skill Bonus Dice",
        "Tool Bonus Dice"
      ],
      "toolProficiencies": [
        {
          "anyArtisansTool": 1
        }
      ],
      "additionalSpells": [
        {
          "expanded": {
            "s1": [
              "identify",
              "tenser's floating disk"
            ],
            "s2": [
              "continual flame",
              "magic weapon"
            ],
            "s3": [
              "conjure barrage",
              "elemental weapon"
            ],
            "s4": [
              "fabricate",
              "stone shape"
            ],
            "s5": [
              "creation"
            ]
          },
          "ability": "int",
          "known": {
            "1": [
              "mending#c",
              "magic weapon"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Artisan's Intuition",
          "entries": [
            "When you make an {@skill Arcana} check or an ability check involving {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools}, you can roll a {@dice d4} and add the number rolled to the ability check."
          ]
        },
        {
          "type": "entries",
          "name": "Maker's Gift",
          "entries": [
            "You gain proficiency with one type of artisan's tools of your choice."
          ]
        },
        {
          "type": "entries",
          "name": "Spellsmith",
          "entries": [
            "You know the {@spell mending} cantrip. You can also cast the {@spell magic weapon} spell with this trait. When you do so, the spell lasts for 1 hour and doesn't require {@status concentration}. Once you cast the spell with this trait, you can't do so again until you finish a long rest. Intelligence is your spellcasting ability for these spells."
          ]
        },
        {
          "type": "entries",
          "name": "Spells of the Mark",
          "entries": [
            "If you have the Spellcasting or the Pact Magic class feature, the spells on the Mark of Making Spells table are added to the spell list of your spellcasting class.",
            {
              "type": "table",
              "caption": "Mark of Making Spells",
              "colLabels": [
                "Spell Level",
                "Spells"
              ],
              "colStyles": [
                "col-2 text-center",
                "col-10"
              ],
              "rows": [
                [
                  "1st",
                  "{@spell identify}, {@spell Tenser's floating disk}"
                ],
                [
                  "2nd",
                  "{@spell continual flame}, {@spell magic weapon}"
                ],
                [
                  "3rd",
                  "{@spell conjure barrage}, {@spell elemental weapon}"
                ],
                [
                  "4th",
                  "{@spell fabricate}, {@spell stone shape}"
                ],
                [
                  "5th",
                  "{@spell creation}"
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Mark of Passage",
      "source": "ERLW",
      "raceName": "Human",
      "raceSource": "PHB",
      "page": 46,
      "speed": 35,
      "ability": [
        {
          "dex": 2,
          "choose": {
            "from": [
              "str",
              "con",
              "int",
              "wis",
              "cha"
            ],
            "count": 1
          }
        }
      ],
      "traitTags": [
        "Dragonmark"
      ],
      "additionalSpells": [
        {
          "expanded": {
            "s1": [
              "expeditious retreat",
              "jump"
            ],
            "s2": [
              "misty step",
              "pass without trace"
            ],
            "s3": [
              "blink",
              "phantom steed"
            ],
            "s4": [
              "dimension door",
              "freedom of movement"
            ],
            "s5": [
              "teleportation circle"
            ]
          },
          "ability": "dex",
          "known": {
            "1": [
              "misty step"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Courier's Speed",
          "entries": [
            "Your base walking speed increases to 35 feet."
          ]
        },
        {
          "type": "entries",
          "name": "Intuitive Motion",
          "entries": [
            "When you make a Dexterity ({@skill Acrobatics}) check or any ability check to operate or maintain a {@filter land vehicle|items|source=phb;dmg|miscellaneous=mundane|type=vehicle (land)}, you can roll a {@dice d4} and add the number rolled to the ability check."
          ]
        },
        {
          "type": "entries",
          "name": "Magical Passage",
          "entries": [
            "You can cast the {@spell misty step} spell once with this trait, and you regain the ability to cast it when you finish a long rest. Dexterity is your spellcasting ability for this spell."
          ]
        },
        {
          "type": "entries",
          "name": "Spells of the Mark",
          "entries": [
            "If you have the Spellcasting or the Pact Magic class feature, the spells on the Mark of Passage Spells table are added to the spell list of your spellcasting class.",
            {
              "type": "table",
              "caption": "Mark of Passage Spells",
              "colLabels": [
                "Spell Level",
                "Spells"
              ],
              "colStyles": [
                "col-2 text-center",
                "col-10"
              ],
              "rows": [
                [
                  "1st",
                  "{@spell expeditious retreat}, {@spell jump}"
                ],
                [
                  "2nd",
                  "{@spell misty step}, {@spell pass without trace}"
                ],
                [
                  "3rd",
                  "{@spell blink}, {@spell phantom steed}"
                ],
                [
                  "4th",
                  "{@spell dimension door}, {@spell freedom of movement}"
                ],
                [
                  "5th",
                  "{@spell teleportation circle}"
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Mark of Sentinel",
      "source": "ERLW",
      "raceName": "Human",
      "raceSource": "PHB",
      "page": 48,
      "ability": [
        {
          "con": 2,
          "wis": 1
        }
      ],
      "traitTags": [
        "Dragonmark",
        "Skill Bonus Dice"
      ],
      "additionalSpells": [
        {
          "expanded": {
            "s1": [
              "compelled duel",
              "shield of faith"
            ],
            "s2": [
              "warding bond",
              "zone of truth"
            ],
            "s3": [
              "counterspell",
              "protection from energy"
            ],
            "s4": [
              "death ward",
              "guardian of faith"
            ],
            "s5": [
              "bigby's hand"
            ]
          },
          "ability": "wis",
          "known": {
            "1": [
              "shield"
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Sentinel's Intuition",
          "entries": [
            "When you make a Wisdom ({@skill Insight}) or Wisdom ({@skill Perception}) check, you can roll a {@dice d4} and add the number rolled to the ability check."
          ]
        },
        {
          "type": "entries",
          "name": "Guardian's Shield",
          "entries": [
            "You can cast the {@spell shield} spell once with this trait, and you regain the ability to cast it after you finish a long rest. Wisdom is your spellcasting ability for this spell."
          ]
        },
        {
          "type": "entries",
          "name": "Vigilant Guardian",
          "entries": [
            "When a creature you can see within 5 feet of you is hit by an attack roll, you can use your reaction to swap places with that creature, and you are hit by the attack instead. Once you use this trait, you can't do so again until you finish a long rest."
          ]
        },
        {
          "type": "entries",
          "name": "Spells of the Mark",
          "entries": [
            "If you have the Spellcasting or the Pact Magic class feature, the spells on the Mark of Sentinel Spells table are added to the spell list of your spellcasting class.",
            {
              "type": "table",
              "caption": "Mark of Sentinel Spells",
              "colLabels": [
                "Spell Level",
                "Spells"
              ],
              "colStyles": [
                "col-2 text-center",
                "col-10"
              ],
              "rows": [
                [
                  "1st",
                  "{@spell compelled duel}, {@spell shield of faith}"
                ],
                [
                  "2nd",
                  "{@spell warding bond}, {@spell zone of truth}"
                ],
                [
                  "3rd",
                  "{@spell counterspell}, {@spell protection from energy}"
                ],
                [
                  "4th",
                  "{@spell death ward}, {@spell guardian of faith}"
                ],
                [
                  "5th",
                  "{@spell Bigby's hand}"
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Variant",
      "source": "PHB",
      "raceName": "Human",
      "raceSource": "PHB",
      "page": 31,
      "basicRules": true,
      "ability": [
        {
          "choose": {
            "from": [
              "str",
              "dex",
              "con",
              "int",
              "wis",
              "cha"
            ],
            "count": 2
          }
        }
      ],
      "feats": [
        {
          "any": 1
        }
      ],
      "skillProficiencies": [
        {
          "any": 1
        }
      ],
      "entries": [
        {
          "name": "Skills",
          "entries": [
            "You gain proficiency in one skill of your choice."
          ],
          "type": "entries"
        },
        {
          "name": "Feat",
          "entries": [
            "You gain one {@5etools feat|feats.html} of your choice."
          ],
          "type": "entries"
        }
      ]
    },
    {
      "name": "Variant; Mark of Finding",
      "source": "ERLW",
      "raceName": "Human",
      "raceSource": "PHB",
      "page": 41,
      "ability": [
        {
          "con": 1,
          "wis": 2
        }
      ],
      "darkvision": 60,
      "traitTags": [
        "Dragonmark",
        "Skill Bonus Dice"
      ],
      "languageProficiencies": [
        {
          "common": true,
          "goblin": true
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "1": [
              "hunter's mark"
            ],
            "3": {
              "daily": {
                "1": [
                  "locate object"
                ]
              }
            }
          },
          "expanded": {
            "s1": [
              "faerie fire",
              "longstrider"
            ],
            "s2": [
              "locate animals or plants",
              "locate object"
            ],
            "s3": [
              "clairvoyance",
              "speak with plants"
            ],
            "s4": [
              "divination",
              "locate creature"
            ],
            "s5": [
              "commune with nature"
            ]
          },
          "ability": "wis"
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Darkvision",
          "entries": [
            "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
          ]
        },
        {
          "type": "entries",
          "name": "Hunter's Intuition",
          "entries": [
            "When you make a Wisdom ({@skill Perception}) or Wisdom ({@skill Survival}) check, you can roll a {@dice d4} and add the number rolled to the ability check."
          ]
        },
        {
          "type": "entries",
          "name": "Finder's Magic",
          "entries": [
            "You can cast the {@spell hunter's mark} spell with this trait. Starting at 3rd level, you can also cast the {@spell locate object} spell with it. Once you cast either spell with this trait, you can't cast that spell with it again until you finish a long rest. Wisdom is your spellcasting ability for these spells."
          ]
        },
        {
          "type": "entries",
          "name": "Languages",
          "entries": [
            "You can speak, read, and write Common and Goblin."
          ],
          "data": {
            "overwrite": "Languages"
          }
        },
        {
          "type": "entries",
          "name": "Spells of the Mark",
          "entries": [
            "If you have the Spellcasting or the Pact Magic class feature, the spells on the Mark of Finding Spells table are added to the spell list of your spellcasting class.",
            {
              "type": "table",
              "caption": "Mark of Finding Spells",
              "colLabels": [
                "Spell Level",
                "Spells"
              ],
              "colStyles": [
                "col-2 text-center",
                "col-10"
              ],
              "rows": [
                [
                  "1st",
                  "{@spell faerie fire}, {@spell longstrider}"
                ],
                [
                  "2nd",
                  "{@spell locate animals or plants}, {@spell locate object}"
                ],
                [
                  "3rd",
                  "{@spell clairvoyance}, {@spell speak with plants}"
                ],
                [
                  "4th",
                  "{@spell divination}, {@spell locate creature}"
                ],
                [
                  "5th",
                  "{@spell commune with nature}"
                ]
              ]
            }
          ]
        }
      ],
      "overwrite": {
        "traitTags": true,
        "languageProficiencies": true
      }
    },
    {
      "name": "Gavony",
      "source": "PSI",
      "raceName": "Human (Innistrad)",
      "raceSource": "PSI",
      "page": 8,
      "ability": [
        {
          "str": 1,
          "dex": 1,
          "con": 1,
          "int": 1,
          "wis": 1,
          "cha": 1
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Kessig",
      "source": "PSI",
      "raceName": "Human (Innistrad)",
      "raceSource": "PSI",
      "page": 8,
      "speed": 40,
      "ability": [
        {
          "dex": 1,
          "wis": 1
        }
      ],
      "skillProficiencies": [
        {
          "survival": true
        }
      ],
      "entries": [
        {
          "name": "Forest Folk",
          "entries": [
            "You have proficiency in the {@skill Survival} skill."
          ],
          "type": "entries"
        },
        {
          "name": "Fleet of Foot",
          "entries": [
            "Your base walking speed is 40 feet."
          ],
          "type": "entries"
        },
        {
          "name": "Sure-footed",
          "entries": [
            "When you use the {@action Dash} action, {@quickref difficult terrain||3} doesn't cost you extra movement on that turn."
          ],
          "type": "entries"
        },
        {
          "name": "Spring Attack",
          "entries": [
            "When you make a melee attack against a creature, you don't provoke opportunity attacks from that creature for the rest of your turn, whether you hit or not."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Nephalia",
      "source": "PSI",
      "raceName": "Human (Innistrad)",
      "raceSource": "PSI",
      "page": 8,
      "ability": [
        {
          "int": 1,
          "cha": 1
        }
      ],
      "traitTags": [
        "Skill Proficiency",
        "Tool Proficiency"
      ],
      "skillToolLanguageProficiencies": [
        {
          "choose": [
            {
              "from": [
                "anySkill",
                "anyTool"
              ],
              "count": 4
            }
          ]
        }
      ],
      "entries": [
        {
          "name": "Breadth of Knowledge",
          "entries": [
            "You gain proficiency in any combination of four skills or with four {@book tools|phb|5|tools} of your choice."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Stensia",
      "source": "PSI",
      "raceName": "Human (Innistrad)",
      "raceSource": "PSI",
      "page": 8,
      "ability": [
        {
          "str": 1,
          "con": 1
        }
      ],
      "skillProficiencies": [
        {
          "intimidation": true
        }
      ],
      "entries": [
        {
          "name": "Daunting",
          "entries": [
            "You have proficiency in the {@skill Intimidation} skill."
          ],
          "type": "entries"
        },
        {
          "name": "Tough",
          "entries": [
            "Your hit point maximum increases by 2, and it increases by 2 every time you gain a level."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Sable",
      "source": "HWCS",
      "raceName": "Luma",
      "raceSource": "HWCS",
      "page": 16,
      "ability": [
        {
          "con": 1
        }
      ],
      "resist": [
        "poison"
      ],
      "entries": [
        {
          "name": "Hard to Read",
          "type": "entries",
          "entries": [
            "Your innate eccentricities make it hard for other folk to figure you out. When someone performs a Wisdom ({@skill Insight}) check against you, they have disadvantage on their roll. Additionally, you gain advantage on Charisma ({@skill Deception}) checks made against creatures that are not lumas."
          ]
        },
        {
          "name": "Resilience",
          "type": "entries",
          "entries": [
            "You have advantage on saving throws against poison and resistance against poison damage."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Sera",
      "source": "HWCS",
      "raceName": "Luma",
      "raceSource": "HWCS",
      "page": 16,
      "ability": [
        {
          "wis": 1
        }
      ],
      "entries": [
        {
          "name": "Center of Attention",
          "type": "entries",
          "entries": [
            "You have proficiency in the {@skill Performance} skill."
          ]
        },
        {
          "name": "Songbird",
          "type": "entries",
          "entries": [
            "When you perform, you can demonstrate the innate and mystical power of your Charisma. You may cast the {@spell charm person} spell once per long rest. This spell does not require any somatic components to cast. Charisma is your spellcasting ability for this spell."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Ixalan; Blue",
      "source": "PSX",
      "raceName": "Merfolk",
      "raceSource": "PSZ",
      "page": 12,
      "otherSources": null,
      "ability": [
        {
          "int": 2
        }
      ],
      "skillProficiencies": [
        {
          "history": true,
          "nature": true
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "other": true,
          "anyStandard": 1
        }
      ],
      "additionalSpells": [
        {
          "ability": "wis",
          "known": {
            "1": {
              "_": [
                {
                  "choose": "level=0|class=Wizard"
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "name": "Cantrip",
          "entries": [
            "You know one cantrip of your choice from the {@filter wizard spell list|spells|class=wizard|level=0}. Intelligence is your spellcasting ability for it."
          ],
          "type": "entries"
        },
        {
          "name": "Lore of the Waters",
          "entries": [
            "You gain proficiency in the {@skill History} and {@skill Nature} skills."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write {@language Common Trade Pidgin|PSX|Common} (if it exists in your campaign), {@language Merfolk|PSX}, and one additional language of your choice."
          ],
          "type": "entries",
          "data": {
            "overwrite": "Languages"
          }
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Ixalan; Green",
      "source": "PSX",
      "raceName": "Merfolk",
      "raceSource": "PSZ",
      "page": 12,
      "otherSources": null,
      "ability": [
        {
          "wis": 2
        }
      ],
      "languageProficiencies": [
        {
          "common": true,
          "other": true,
          "anyStandard": 1
        }
      ],
      "additionalSpells": [
        {
          "ability": "wis",
          "known": {
            "1": {
              "_": [
                {
                  "choose": "level=0|class=Druid"
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "name": "Cantrip",
          "entries": [
            "You know one cantrip of your choice from the {@filter druid spell list|spells|class=Druid|level=0}. Wisdom is your spellcasting ability for it."
          ],
          "type": "entries"
        },
        {
          "name": "Mask of the Wild",
          "entries": [
            "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
          ],
          "type": "entries"
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write {@language Common Trade Pidgin|PSX|Common} (if it exists in your campaign), {@language Merfolk|PSX}, and one additional language of your choice."
          ],
          "type": "entries",
          "data": {
            "overwrite": "Languages"
          }
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Zendikar; Cosi Creed",
      "source": "PSZ",
      "raceName": "Merfolk",
      "raceSource": "PSZ",
      "page": 13,
      "otherSources": null,
      "ability": [
        {
          "int": 1,
          "cha": 2
        }
      ],
      "skillProficiencies": [
        {
          "sleight of hand": true,
          "stealth": true
        }
      ],
      "additionalSpells": [
        {
          "ability": "cha",
          "known": {
            "1": {
              "_": [
                {
                  "choose": "level=0|class=Bard"
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "name": "Cantrip",
          "entries": [
            "You know one cantrip of your choice from the {@filter bard spell list|spells|class=bard|level=0}. Charisma is your spellcasting ability for it."
          ],
          "type": "entries"
        },
        {
          "name": "Creed of the Trickster",
          "entries": [
            "You have proficiency in the {@skill Sleight of Hand} and {@skill Stealth} skills."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Zendikar; Emeria Creed",
      "source": "PSZ",
      "raceName": "Merfolk",
      "raceSource": "PSZ",
      "page": 13,
      "otherSources": null,
      "ability": [
        {
          "wis": 2
        }
      ],
      "skillProficiencies": [
        {
          "deception": true,
          "persuasion": true
        }
      ],
      "additionalSpells": [
        {
          "ability": "wis",
          "known": {
            "1": {
              "_": [
                {
                  "choose": "level=0|class=Druid"
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "name": "Cantrip",
          "entries": [
            "You know one cantrip of your choice from the {@filter druid spell list|spells|class=druid|level=0}. Wisdom is your spellcasting ability for it."
          ],
          "type": "entries"
        },
        {
          "name": "Wind Creed Manipulation",
          "entries": [
            "You have proficiency in the {@skill Deception} and {@skill Persuasion} skills."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Zendikar; Ula Creed",
      "source": "PSZ",
      "raceName": "Merfolk",
      "raceSource": "PSZ",
      "page": 13,
      "otherSources": null,
      "ability": [
        {
          "int": 2
        }
      ],
      "skillProficiencies": [
        {
          "survival": true
        }
      ],
      "toolProficiencies": [
        {
          "navigator's tools": true
        }
      ],
      "additionalSpells": [
        {
          "ability": "int",
          "known": {
            "1": {
              "_": [
                {
                  "choose": "level=0|class=Wizard"
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "name": "Cantrip",
          "entries": [
            "You know one cantrip of your choice from the {@filter wizard spell list|spells|class=wizard|level=0}. Intelligence is your spellcasting ability for it."
          ],
          "type": "entries"
        },
        {
          "name": "Water Creed Navigation",
          "entries": [
            "You have proficiency with {@item navigator's tools|phb} and in the {@skill Survival} skill."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Maran",
      "source": "HWCS",
      "raceName": "Raptor",
      "raceSource": "HWCS",
      "page": 18,
      "speed": {
        "walk": 25,
        "swim": 25
      },
      "ability": [
        {
          "int": 1
        }
      ],
      "traitTags": [
        "Natural Weapon"
      ],
      "entries": [
        {
          "name": "Swimmer",
          "type": "entries",
          "entries": [
            "You have a swimming speed of 25 feet."
          ]
        },
        {
          "name": "Patient",
          "type": "entries",
          "entries": [
            "When you react with a readied action, you have advantage on the first attack roll, skill check, or ability check you make as a part of that action."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Mistral",
      "source": "HWCS",
      "raceName": "Raptor",
      "raceSource": "HWCS",
      "page": 18,
      "ability": [
        {
          "wis": 1
        }
      ],
      "traitTags": [
        "Natural Weapon"
      ],
      "entries": [
        {
          "name": "Agile",
          "type": "entries",
          "entries": [
            "You have proficiency in the {@skill Acrobatics} skill."
          ]
        },
        {
          "name": "Aerial Defense",
          "type": "entries",
          "entries": [
            "Creatures that attack you while you are falling, gliding, or jumping have disadvantage on their attack roll."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Beasthide",
      "source": "ERLW",
      "raceName": "Shifter",
      "raceSource": "ERLW",
      "page": 34,
      "ability": [
        {
          "con": 2,
          "str": 1
        }
      ],
      "traitTags": [
        "Natural Armor"
      ],
      "skillProficiencies": [
        {
          "athletics": true
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Natural Athlete",
          "entries": [
            "You have proficiency in the {@skill Athletics} skill."
          ]
        },
        {
          "type": "entries",
          "name": "Shifting Feature",
          "entries": [
            "Whenever you shift, you gain {@dice 1d6} additional temporary hit points. While shifted, you have a +1 bonus to your Armor Class."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Longtooth",
      "source": "ERLW",
      "raceName": "Shifter",
      "raceSource": "ERLW",
      "page": 34,
      "ability": [
        {
          "str": 2,
          "dex": 1
        }
      ],
      "traitTags": [
        "Natural Weapon"
      ],
      "skillProficiencies": [
        {
          "intimidation": true
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Fierce",
          "entries": [
            "You have proficiency in the {@skill Intimidation} skill."
          ]
        },
        {
          "type": "entries",
          "name": "Shifting Feature",
          "entries": [
            "While shifted, you can use your elongated fangs to make an unarmed strike as a bonus action. If you hit with your fangs, you can deal piercing damage equal to {@dice 1d6} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Swiftstride",
      "source": "ERLW",
      "raceName": "Shifter",
      "raceSource": "ERLW",
      "page": 34,
      "ability": [
        {
          "dex": 2,
          "cha": 1
        }
      ],
      "skillProficiencies": [
        {
          "acrobatics": true
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Graceful",
          "entries": [
            "You have proficiency in the {@skill Acrobatics} skill."
          ]
        },
        {
          "type": "entries",
          "name": "Shifting Feature",
          "entries": [
            "While shifted, your walking speed increases by 10 feet. Additionally, you can move up to 10 feet as a reaction when a creature ends its turn within 5 feet of you. This reactive movement doesn't provoke opportunity attacks."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Wildhunt",
      "source": "ERLW",
      "raceName": "Shifter",
      "raceSource": "ERLW",
      "page": 34,
      "ability": [
        {
          "wis": 2,
          "dex": 1
        }
      ],
      "skillProficiencies": [
        {
          "survival": true
        }
      ],
      "entries": [
        {
          "type": "entries",
          "name": "Natural Tracker",
          "entries": [
            "You have proficiency in the {@skill Survival} skill."
          ]
        },
        {
          "type": "entries",
          "name": "Shifting Feature",
          "entries": [
            "While shifted, you have advantage on Wisdom checks, and no creature within 30 feet of you can make an attack roll with advantage against you, unless you're {@condition incapacitated}."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Stout",
      "source": "HWCS",
      "raceName": "Strig",
      "raceSource": "HWCS",
      "page": 20,
      "ability": [
        {
          "con": 1
        }
      ],
      "traitTags": [
        "Natural Weapon"
      ],
      "entries": [
        {
          "name": "Imposing",
          "type": "entries",
          "entries": [
            "You have proficiency in the {@skill Intimidation} skill."
          ]
        },
        {
          "name": "Brawler",
          "type": "entries",
          "entries": [
            "When you successfully attack a target with your talons, you can choose to grapple that target as a bonus action."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Swift",
      "source": "HWCS",
      "raceName": "Strig",
      "raceSource": "HWCS",
      "page": 20,
      "speed": 35,
      "ability": [
        {
          "dex": 1
        }
      ],
      "traitTags": [
        "Natural Weapon"
      ],
      "entries": [
        {
          "name": "Swift",
          "type": "entries",
          "entries": [
            "Your base walking speed increases to 35 feet."
          ]
        },
        {
          "name": "Survivor",
          "type": "entries",
          "entries": [
            "You have proficiency in the {@skill Survival} skill."
          ]
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "source": "PHB",
      "raceName": "Tiefling",
      "raceSource": "PHB",
      "page": 42,
      "srd": true,
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Asmodeus",
      "source": "MTF",
      "raceName": "Tiefling",
      "raceSource": "PHB",
      "page": 21,
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Baalzebul",
      "source": "MTF",
      "raceName": "Tiefling",
      "raceSource": "PHB",
      "page": 21,
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "ray of sickness#2"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "crown of madness"
                ]
              }
            }
          },
          "ability": "cha",
          "known": {
            "1": [
              "thaumaturgy#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Legacy of Maladomini",
          "entries": [
            "You know the {@spell thaumaturgy} cantrip. When you reach 3rd level, you can cast the {@spell ray of sickness} spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the {@spell crown of madness} spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells."
          ],
          "type": "entries",
          "data": {
            "overwrite": "Infernal Legacy"
          }
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Dispater",
      "source": "MTF",
      "raceName": "Tiefling",
      "raceSource": "PHB",
      "page": 21,
      "ability": [
        {
          "cha": 2,
          "dex": 1
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "disguise self"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "detect thoughts"
                ]
              }
            }
          },
          "ability": "cha",
          "known": {
            "1": [
              "thaumaturgy#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Legacy of Dis",
          "entries": [
            "You know the {@spell thaumaturgy} cantrip. When you reach 3rd level, you can cast the {@spell disguise self} spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the {@spell detect thoughts} spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells."
          ],
          "type": "entries",
          "data": {
            "overwrite": "Infernal Legacy"
          }
        }
      ],
      "overwrite": {
        "ability": true
      },
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Fierna",
      "source": "MTF",
      "raceName": "Tiefling",
      "raceSource": "PHB",
      "page": 21,
      "ability": [
        {
          "cha": 2,
          "wis": 1
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "charm person#2"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "suggestion"
                ]
              }
            }
          },
          "ability": "cha",
          "known": {
            "1": [
              "friends#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Legacy of Phlegethos",
          "entries": [
            "You know the {@spell friends} cantrip. When you reach 3rd level, you can cast the {@spell charm person} spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the {@spell suggestion} spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells."
          ],
          "type": "entries",
          "data": {
            "overwrite": "Infernal Legacy"
          }
        }
      ],
      "overwrite": {
        "ability": true
      },
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Glasya",
      "source": "MTF",
      "raceName": "Tiefling",
      "raceSource": "PHB",
      "page": 22,
      "ability": [
        {
          "cha": 2,
          "dex": 1
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "disguise self"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "invisibility"
                ]
              }
            }
          },
          "ability": "cha",
          "known": {
            "1": [
              "minor illusion#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Legacy of Malbolge",
          "entries": [
            "You know the {@spell minor illusion} cantrip. When you reach 3rd level, you can cast the {@spell disguise self} spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the {@spell invisibility} spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells."
          ],
          "type": "entries",
          "data": {
            "overwrite": "Infernal Legacy"
          }
        }
      ],
      "overwrite": {
        "ability": true
      },
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Levistus",
      "source": "MTF",
      "raceName": "Tiefling",
      "raceSource": "PHB",
      "page": 22,
      "ability": [
        {
          "cha": 2,
          "con": 1
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "armor of agathys#2"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "darkness"
                ]
              }
            }
          },
          "ability": "cha",
          "known": {
            "1": [
              "ray of frost#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Legacy of Stygia",
          "entries": [
            "You know the {@spell ray of frost} cantrip. When you reach 3rd level, you can cast the {@spell armor of Agathys} spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the {@spell darkness} spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells."
          ],
          "type": "entries",
          "data": {
            "overwrite": "Infernal Legacy"
          }
        }
      ],
      "overwrite": {
        "ability": true
      },
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Mammon",
      "source": "MTF",
      "raceName": "Tiefling",
      "raceSource": "PHB",
      "page": 22,
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "tenser's floating disk"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "arcane lock"
                ]
              }
            }
          },
          "ability": "cha",
          "known": {
            "1": [
              "mage hand#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Legacy of Minauros",
          "entries": [
            "You know the {@spell mage hand} cantrip. When you reach 3rd level, you can cast the {@spell Tenser's floating disk} spell once with this trait and regain the ability to do so when you finish a short or long rest. When you reach 5th level, you can cast the {@spell arcane lock} spell once with this trait, requiring no material component, and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells."
          ],
          "type": "entries",
          "data": {
            "overwrite": "Infernal Legacy"
          }
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Mephistopheles",
      "source": "MTF",
      "raceName": "Tiefling",
      "raceSource": "PHB",
      "page": 23,
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "burning hands#2"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "flame blade"
                ]
              }
            }
          },
          "ability": "cha",
          "known": {
            "1": [
              "mage hand#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Legacy of Cania",
          "entries": [
            "You know the {@spell mage hand} cantrip. When you reach 3rd level, you can cast the {@spell burning hands} spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the {@spell flame blade} spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells."
          ],
          "type": "entries",
          "data": {
            "overwrite": "Infernal Legacy"
          }
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Variant; Devil's Tongue",
      "source": "SCAG",
      "raceName": "Tiefling",
      "raceSource": "PHB",
      "page": 118,
      "ability": [
        {
          "int": 1,
          "choose": {
            "from": [
              "dex",
              "cha"
            ],
            "count": 1,
            "amount": 2
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "charm person#2"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "enthrall"
                ]
              }
            }
          },
          "ability": "cha",
          "known": {
            "1": [
              "vicious mockery#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Appearance",
          "entries": [
            "Your tiefling might not look like other tieflings. Rather than having the physical characteristics described in the Player's Handbook, choose {@dice 1d4+1} of the following features: small horns; fangs or sharp teeth; a forked tongue; catlike eyes; six fingers on each hand; goatlike legs; cloven hoofs; a forked tail; leathery or scaly skin; red or dark blue skin; cast no shadow or reflection; exude a smell of brimstone."
          ],
          "type": "entries"
        },
        {
          "type": "entries",
          "name": "Devil's Tongue",
          "entries": [
            "You know the {@spell vicious mockery} cantrip. When you reach 3rd level, you can cast the {@spell charm person} spell as a 2nd-level spell once with this trait. When you reach 5th level, you can cast the {@spell enthrall} spell once with this trait. You must finish a long rest to cast these spells once again with this trait. Charisma is your spellcasting ability for them. This trait replaces the Infernal Legacy trait."
          ],
          "data": {
            "overwrite": "Infernal Legacy"
          }
        }
      ],
      "overwrite": {
        "ability": true
      },
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Variant; Hellfire",
      "source": "SCAG",
      "raceName": "Tiefling",
      "raceSource": "PHB",
      "page": 118,
      "ability": [
        {
          "int": 1,
          "choose": {
            "from": [
              "dex",
              "cha"
            ],
            "count": 1,
            "amount": 2
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "burning hands#2"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "darkness"
                ]
              }
            }
          },
          "ability": "cha",
          "known": {
            "1": [
              "thaumaturgy#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Appearance",
          "entries": [
            "Your tiefling might not look like other tieflings. Rather than having the physical characteristics described in the Player's Handbook, choose {@dice 1d4+1} of the following features: small horns; fangs or sharp teeth; a forked tongue; catlike eyes; six fingers on each hand; goatlike legs; cloven hoofs; a forked tail; leathery or scaly skin; red or dark blue skin; cast no shadow or reflection; exude a smell of brimstone."
          ],
          "type": "entries"
        },
        {
          "type": "entries",
          "name": "Hellfire",
          "entries": [
            "You know the {@spell thaumaturgy} cantrip. Once you reach 3rd level, you can cast the {@spell burning hands} spell once per day as a 2nd-level spell; you must finish a long rest in order to cast the spell again using this trait. Once you reach 5th level, you can also cast the {@spell darkness} spell; you must finish a long rest in order to cast the spell again using this trait. Charisma is your spellcasting ability for these spells."
          ],
          "data": {
            "overwrite": "Infernal Legacy"
          }
        }
      ],
      "overwrite": {
        "ability": true
      },
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Variant; Infernal Legacy",
      "source": "SCAG",
      "raceName": "Tiefling",
      "raceSource": "PHB",
      "page": 118,
      "ability": [
        {
          "int": 1,
          "choose": {
            "from": [
              "dex",
              "cha"
            ],
            "count": 1,
            "amount": 2
          }
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "hellish rebuke"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "darkness"
                ]
              }
            }
          },
          "ability": "cha",
          "known": {
            "1": [
              "thaumaturgy#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Appearance",
          "entries": [
            "Your tiefling might not look like other tieflings. Rather than having the physical characteristics described in the Player's Handbook, choose {@dice 1d4+1} of the following features: small horns; fangs or sharp teeth; a forked tongue; catlike eyes; six fingers on each hand; goatlike legs; cloven hoofs; a forked tail; leathery or scaly skin; red or dark blue skin; cast no shadow or reflection; exude a smell of brimstone."
          ],
          "type": "entries"
        }
      ],
      "overwrite": {
        "ability": true
      },
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Variant; Winged",
      "source": "SCAG",
      "raceName": "Tiefling",
      "raceSource": "PHB",
      "page": 118,
      "speed": {
        "walk": 30,
        "fly": 30
      },
      "ability": [
        {
          "int": 1,
          "choose": {
            "from": [
              "dex",
              "cha"
            ],
            "count": 1,
            "amount": 2
          }
        }
      ],
      "traitTags": [
        "Uncommon Race"
      ],
      "additionalSpells": null,
      "entries": [
        {
          "name": "Appearance",
          "entries": [
            "Your tiefling might not look like other tieflings. Rather than having the physical characteristics described in the Player's Handbook, choose {@dice 1d4+1} of the following features: small horns; fangs or sharp teeth; a forked tongue; catlike eyes; six fingers on each hand; goatlike legs; cloven hoofs; a forked tail; leathery or scaly skin; red or dark blue skin; cast no shadow or reflection; exude a smell of brimstone."
          ],
          "type": "entries"
        },
        {
          "type": "entries",
          "name": "Winged",
          "entries": [
            "You have bat-like wings sprouting from your shoulder blades. You have a flying speed of 30 feet while you aren't wearing heavy armor."
          ],
          "data": {
            "overwrite": "Infernal Legacy"
          }
        }
      ],
      "overwrite": {
        "ability": true,
        "traitTags": true
      },
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Zariel",
      "source": "MTF",
      "raceName": "Tiefling",
      "raceSource": "PHB",
      "page": 23,
      "ability": [
        {
          "cha": 2,
          "str": 1
        }
      ],
      "additionalSpells": [
        {
          "innate": {
            "3": {
              "daily": {
                "1": [
                  "searing smite#2"
                ]
              }
            },
            "5": {
              "daily": {
                "1": [
                  "branding smite"
                ]
              }
            }
          },
          "ability": "cha",
          "known": {
            "1": [
              "thaumaturgy#c"
            ]
          }
        }
      ],
      "entries": [
        {
          "name": "Legacy of Avernus",
          "entries": [
            "You know the {@spell thaumaturgy} cantrip. When you reach 3rd level, you can cast the {@spell searing smite} spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the {@spell branding smite} spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells."
          ],
          "type": "entries",
          "data": {
            "overwrite": "Infernal Legacy"
          }
        }
      ],
      "overwrite": {
        "ability": true
      },
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Ixalan",
      "source": "PSX",
      "raceName": "Vampire",
      "raceSource": "PSZ",
      "page": 14,
      "otherSources": null,
      "ability": [
        {
          "wis": 1
        }
      ],
      "entries": [
        {
          "name": "Age",
          "type": "entries",
          "entries": [
            "Vampires don't mature and age in the same way that other races do."
          ],
          "data": {
            "overwrite": "Age"
          }
        },
        {
          "name": "Alignment",
          "type": "entries",
          "entries": [
            "Vampires might not have an innate tendency toward evil, but many of them end up there. Evil or not, their strict hierarchies incline them toward a lawful alignment."
          ],
          "data": {
            "overwrite": "Alignment"
          }
        },
        {
          "type": "entries",
          "name": "Size",
          "entries": [
            "Vampires are the same size and build as humans. Your size is Medium."
          ],
          "data": {
            "overwrite": "Size"
          }
        },
        {
          "type": "entries",
          "name": "Feast of Blood",
          "entries": [
            "When you drain blood with your Bloodthirst ability, you experience a surge of vitality. Your speed increases by 10 feet, and you gain advantage on Strength and Dexterity checks and saving throws for 1 minute."
          ]
        },
        {
          "name": "Languages",
          "entries": [
            "You can speak, read, and write {@language Common Trade Pidgin|PSX|Common} (if it exists in your campaign) and {@language Vampire|PSX}."
          ],
          "type": "entries",
          "data": {
            "overwrite": "Languages"
          }
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    },
    {
      "name": "Zendikar",
      "source": "PSZ",
      "raceName": "Vampire",
      "raceSource": "PSZ",
      "page": 14,
      "otherSources": null,
      "ability": [
        {
          "int": 1
        }
      ],
      "entries": [
        {
          "name": "Null Transformation",
          "entries": [
            "A humanoid killed with your Bloodthirst ability becomes a {@creature Vampire Null|PSZ|null}."
          ],
          "type": "entries"
        }
      ],
      "hasFluff": true,
      "hasFluffImages": true
    }
  ]
}`);