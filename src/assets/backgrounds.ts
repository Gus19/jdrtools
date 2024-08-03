export const initBackgrounds = JSON.parse(`[
  {
    "name": "Acolyte",
    "source": "PHB",
    "page": 127,
    "srd": true,
    "basicRules": true,
    "skillProficiencies": [
      {
        "insight": true,
        "religion": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 2
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "item": "holy symbol|phb",
            "displayName": "holy symbol (a gift to you when you entered the priesthood)"
          },
          {
            "special": "sticks of incense",
            "quantity": 5
          },
          {
            "special": "vestments"
          },
          "common clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1500
          }
        ]
      },
      {
        "a": [
          {
            "item": "book|phb",
            "displayName": "prayer book"
          }
        ],
        "b": [
          {
            "special": "prayer wheel"
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Insight}, {@skill Religion}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Two of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@item holy symbol|phb} (a gift to you when you entered the priesthood), a prayer {@item book|phb} or prayer wheel, 5 sticks of incense, vestments, a set of {@item common clothes|phb}, and a belt {@item pouch|phb} containing 15 gp"
          }
        ]
      },
      {
        "name": "Feature: Shelter of the Faithful",
        "type": "entries",
        "entries": [
          "As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle.",
          "You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "Acolytes are shaped by their experience in temples or other religious communities. Their study of the history and tenets of their faith and their relationships to temples, shrines, or hierarchies affect their mannerisms and ideals. Their flaws might be some hidden hypocrisy or heretical idea, or an ideal or bond taken to an extreme.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I idolize a particular hero of my faith, and constantly refer to that person's deeds and example."
              ],
              [
                "2",
                "I can find common ground between the fiercest enemies, empathizing with them and always working toward peace."
              ],
              [
                "3",
                "I see omens in every event and action. The gods try to speak to us, we just need to listen."
              ],
              [
                "4",
                "Nothing can shake my optimistic attitude."
              ],
              [
                "5",
                "I quote (or misquote) sacred texts and proverbs in almost every situation."
              ],
              [
                "6",
                "I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods."
              ],
              [
                "7",
                "I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me."
              ],
              [
                "8",
                "I've spent so long in the temple that I have little practical experience dealing with people in the outside world."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)"
              ],
              [
                "2",
                "Charity. I always try to help those in need, no matter what the personal cost. (Good)"
              ],
              [
                "3",
                "Change. We must help bring about the changes the gods are constantly working in the world. (Chaotic)"
              ],
              [
                "4",
                "Power. I hope to one day rise to the top of my faith's religious hierarchy. (Lawful)"
              ],
              [
                "5",
                "Faith. I trust that my deity will guide my actions. I have faith that if I work hard, things will go well. (Lawful)"
              ],
              [
                "6",
                "Aspiration. I seek to prove myself worthy of my god's favor by matching my actions against his or her teachings. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I would die to recover an ancient relic of my faith that was lost long ago."
              ],
              [
                "2",
                "I will someday get revenge on the corrupt temple hierarchy who branded me a heretic."
              ],
              [
                "3",
                "I owe my life to the priest who took me in when my parents died."
              ],
              [
                "4",
                "Everything I do is for the common people."
              ],
              [
                "5",
                "I will do anything to protect the temple where I served."
              ],
              [
                "6",
                "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I judge others harshly, and myself even more severely."
              ],
              [
                "2",
                "I put too much trust in those who wield power within my temple's hierarchy."
              ],
              [
                "3",
                "My piety sometimes leads me to blindly trust those that profess faith in my god."
              ],
              [
                "4",
                "I am inflexible in my thinking."
              ],
              [
                "5",
                "I am suspicious of strangers and expect the worst of them."
              ],
              [
                "6",
                "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Anthropologist",
    "source": "ToA",
    "page": 191,
    "skillProficiencies": [
      {
        "insight": true,
        "religion": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 2
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "special": "leather-bound diary"
          },
          "ink (1-ounce bottle)|phb",
          "ink pen|phb",
          "traveler's clothes|phb",
          {
            "item": "trinket|phb",
            "displayName": "trinket of special significance"
          },
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Insight}, {@skill Religion}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Two of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A leather-bound diary, a {@item Ink (1-ounce bottle)|phb|bottle of ink}, an {@item ink pen|phb}, a set of {@item traveler's clothes|phb}, one {@item trinket|phb} of special significance, and a {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "name": "Cultural Chameleon",
        "type": "entries",
        "entries": [
          "Before becoming an adventurer, you spent much of your adult life away from your homeland, living among people different from your kin. You came to understand these foreign cultures and the ways of their people, who eventually treated you as one of their own. One culture had more of an influence on you than any other, shaping your beliefs and customs Choose a race whose culture you've adopted, or roll on the Adopted Culture table.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Culture"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Aarakocra"
              ],
              [
                "2",
                "Dwarf"
              ],
              [
                "3",
                "Elf"
              ],
              [
                "4",
                "Goblin"
              ],
              [
                "5",
                "Halfling"
              ],
              [
                "6",
                "Human"
              ],
              [
                "7",
                "Lizardfolk"
              ],
              [
                "8",
                "Orc"
              ]
            ]
          }
        ]
      },
      {
        "name": "Feature: Adept Linguist",
        "type": "entries",
        "entries": [
          "You can communicate with humanoids who don't speak any language you know. You must observe the humanoids interacting with one another for at least 1 day, after which you learn a handful of important words, expressions, and gestures - enough to communicate on a rudimentary level."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "Anthropologists leave behind the societies into which they were born to discover what life is like in other parts of the world. They seek to see how other races and civilizations survive - or why they did not. Some anthropologists are driven by intellectual curiosity, while others want the fame and recognition that comes with being the first to discover a new people, a lost tribe, or the truth about an ancient empire's downfall.",
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I prefer the company of those who aren't like me, including people of other races"
              ],
              [
                "2",
                "I'm a stickler when it comes to observing proper etiquette and local customs"
              ],
              [
                "3",
                "I would rather observe than meddle"
              ],
              [
                "4",
                "By living among violent people, I have become desensitized to violence."
              ],
              [
                "5",
                "I would risk life and limb to discover a new culture or unravel the secrets of a dead one."
              ],
              [
                "6",
                "When I arrive at a new settlement for the first time, I must learn all its customs."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Discovery. I want to be the first person to discover a lost culture. (Any)"
              ],
              [
                "2",
                "Distance. One must not interfere with the affairs of another culture - even one in need of aid. (Lawful)"
              ],
              [
                "3",
                "Knowledge. By understanding other races and cultures, we learn to understand ourselves. (Any)"
              ],
              [
                "4",
                "Power. Common people crave strong leadership, and I do my utmost to provide it. (Lawful)"
              ],
              [
                "5",
                "Protection. I must do everything possible to save a society facing extinction. (Good)"
              ],
              [
                "6",
                "Indifferent. Life is cruel. What's the point in saving people if they're going to die anyway? (Chaotic)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "My mentor gave me a journal filled with lore and wisdom. Losing it would devastate me."
              ],
              [
                "2",
                "Having lived among the people of a primeval tribe or clan, I long to return and see how they are faring."
              ],
              [
                "3",
                "Years ago, tragedy struck the members of an isolated society I befriended, and I will honor them."
              ],
              [
                "4",
                "I want to learn more about a particular humanoid culture that fascinates me."
              ],
              [
                "5",
                "I seek to avenge a clan, tribe, kingdom, or empire that was wiped out."
              ],
              [
                "6",
                "I have a trinket that I believe is the key to finding a long-lost society."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Boats make me seasick."
              ],
              [
                "2",
                "I talk to myself, and I don't make friends easily."
              ],
              [
                "3",
                "I believe that I'm intellectually superior to people from other cultures and have much to teach them."
              ],
              [
                "4",
                "I've picked up some unpleasant habits living among goblins, lizardfolk, or orcs."
              ],
              [
                "5",
                "I complain about everything."
              ],
              [
                "6",
                "I wear a tribal mask and never take it off."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Archaeologist",
    "source": "ToA",
    "page": 192,
    "skillProficiencies": [
      {
        "history": true,
        "survival": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "choose": {
          "from": [
            "navigator's tools",
            "cartographer's tools"
          ]
        }
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "item": "map or scroll case|phb",
            "displayName": "wooden case containing a map to a ruin or dungeon"
          },
          "bullseye lantern|phb",
          "miner's pick|phb",
          "traveler's clothes|phb",
          "shovel|phb",
          "two-person tent|phb",
          {
            "item": "trinket|phb",
            "displayName": "trinket recovered from a dig site"
          },
          {
            "item": "pouch|phb",
            "containsValue": 2500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill History}, {@skill Survival}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@item Cartographer's tools|phb} or {@item navigator's tools|phb}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "One of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@item Map or Scroll Case|phb|wooden case} containing a map to a ruin or dungeon, a {@item bullseye lantern|phb}, a {@item miner's pick|phb}, a set of {@item traveler's clothes|phb}, a {@item shovel|phb}, a {@item two-person tent|phb}, a {@item trinket|phb} recovered from a dig site, and a {@item pouch|phb} containing 25 gp"
          }
        ]
      },
      {
        "name": "Dust Digger",
        "type": "entries",
        "entries": [
          "Prior to becoming an adventurer, you spent most of your young life crawling around in the dust, pilfering relics of questionable value from crypts and ruins. Though you managed to sell a few of your discoveries and earn enough coin to buy proper adventuring gear, you have held onto an item that has great emotional value to you. Roll on the Signature Item table to see what you have, or choose an item from the table.",
          {
            "type": "table",
            "caption": "Signature Item",
            "colLabels": [
              "d8",
              "Item"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "{@item pole (10-foot)|phb|10-foot pole}"
              ],
              [
                "2",
                "{@item Crowbar|phb}"
              ],
              [
                "3",
                "Hat"
              ],
              [
                "4",
                "{@item Hooded lantern|phb}"
              ],
              [
                "5",
                "Medallion"
              ],
              [
                "6",
                "{@item Shovel|phb}"
              ],
              [
                "7",
                "{@item Sledgehammer|phb}"
              ],
              [
                "8",
                "{@item Whip|phb}"
              ]
            ]
          }
        ]
      },
      {
        "name": "Feature: Historical Knowledge",
        "type": "entries",
        "entries": [
          "When you enter a ruin or dungeon, you can correctly ascertain its original purpose and determine its builders, whether those were dwarves, elves, humans, yuan-ti, or some other known race. In addition, you can determine the monetary value of art objects more than a century old."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "Few archaeologists can resist the lure of an unexplored ruin or dungeon, particularly if such a site is the source of legends or is rumored to contain the treasures and relics of wizards, warlords, or royalty. Some archaeologists plunder for wealth or fame, while others consider it their calling to illuminate the past or keep the world's greatest treasures from falling into the wrong hands. Whatever their motivations, archaeologists combine the qualities of a scrappy historian with the self-made heroism of a treasure-hunting scoundrel.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I love a good puzzle or mystery"
              ],
              [
                "2",
                "I'm a pack rat who never throws anything away."
              ],
              [
                "3",
                "Fame is more important to me than money."
              ],
              [
                "4",
                "I have no qualms about stealing from the dead."
              ],
              [
                "5",
                "I'm happier in a dusty old tomb than I am in the centers of civilization."
              ],
              [
                "6",
                "Traps don't make me nervous. Idiots who trigger traps make me nervous."
              ],
              [
                "7",
                "I might fail, but I will never give up."
              ],
              [
                "8",
                "You might think I'm a scholar, but I love a good brawl. These fists were made for punching."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Preservation. That artifact belongs in a museum. (Good)"
              ],
              [
                "2",
                "Greed. I won't risk my life for nothing. I expect some kind of payment. (Any)"
              ],
              [
                "3",
                "Death Wish. Nothing is more exhilarating than a narrow escape from the jaws of death. (Chaotic)"
              ],
              [
                "4",
                "Dignity. The dead and their belongings deserve to be treated with respect. (Lawful)"
              ],
              [
                "5",
                "Immortality. All of my exploring is part of a plan to find the secret of everlasting life. (Any)"
              ],
              [
                "6",
                "Danger. With every great discovery comes grave danger. The two walk hand in hand. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Ever since I was a child, I've heard stories about a lost city. I aim to find it, learn its secrets, and earn my place in the history books."
              ],
              [
                "2",
                "I want to find my mentor, who disappeared on an expedition some time ago."
              ],
              [
                "3",
                "I have a friendly rival. Only one of us can be the best, and I aim to prove it's me."
              ],
              [
                "4",
                "I won't sell an art object or other treasure that has historical significance or is one of a kind."
              ],
              [
                "5",
                "I'm secretly in love with the wealthy patron who sponsors my archaeological exploits."
              ],
              [
                "6",
                "I hope to bring prestige to a library, a museum, or a university."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I have a secret fear of some common wild animal - and in my work, I see them everywhere."
              ],
              [
                "2",
                "I can't leave a room without searching it for secret doors."
              ],
              [
                "3",
                "When I'm not exploring dungeons or ruins. I get jittery and impatient."
              ],
              [
                "4",
                "I have no time for friends or family. I spend every waking moment thinking about and preparing for my next expedition."
              ],
              [
                "5",
                "When given the choice of going left or right, I always go left."
              ],
              [
                "6",
                "I can't sleep except in total darkness."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Ashari",
    "source": "TDCSR",
    "page": 180,
    "skillProficiencies": [
      {
        "nature": true,
        "choose": {
          "from": [
            "arcana",
            "survival"
          ],
          "count": 1
        }
      }
    ],
    "languageProficiencies": [
      {
        "primordial": true,
        "choose": {
          "from": [
            "aquan",
            "auran",
            "ignan",
            "terran"
          ],
          "count": 1
        }
      }
    ],
    "toolProficiencies": [
      {
        "herbalism kit": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "item": "Traveler's Clothes|phb",
            "displayName": "A set of traveler's clothes"
          },
          {
            "special": "a staff carved with symbols of your tribe"
          },
          "herbalism kit|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Nature}, plus your choice of {@skill Arcana} or {@skill Survival}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@item Herbalism Kit|PHB}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "{@language Primordial} ({@language Primordial|PHB|Aquan}, {@language Primordial|PHB|Auran}, {@language Primordial|PHB|Ignan}, or {@language Primordial|PHB|Terran}, depending on the elemental affinity of your tribe)"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A set of {@item traveler's clothes|phb}, a staff carved with symbols of your tribe, an {@item herbalism kit|PHB}, and a belt {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "name": "Feature: Elemental Harmony",
        "type": "entries",
        "page": 180,
        "entries": [
          "Growing up surrounded by wild elemental magics has attuned your senses to those chaotic forces, enabling you to subtly bend them to your will. As an action, you channel minor magic involving the element of your chosen Ashari order, giving you one of the following abilities:",
          {
            "type": "entries",
            "name": "Pyrah",
            "page": 180,
            "entries": [
              "You instantaneously create and control a burst of flame small enough to light a candle, a torch, or a small campfire. Alternatively, you snuff out a flame of the same size."
            ]
          },
          {
            "type": "entries",
            "name": "Terrah",
            "page": 180,
            "entries": [
              "You instantaneously create a small rock no larger than a {@item gold (gp)|PHB|gold coin}. The rock appears in your hand, then turns to dust after 1 minute."
            ]
          },
          {
            "type": "entries",
            "name": "Vesrah",
            "page": 180,
            "entries": [
              "You instantaneously create enough hot or cold water to fill a small drinking vessel."
            ]
          },
          {
            "type": "entries",
            "name": "Zephrah",
            "page": 180,
            "entries": [
              "You create an instantaneous puff of wind strong enough to blow papers off a desk or mess up someone's hair."
            ]
          }
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "page": 180,
        "entries": [
          "{@book The Ashari|TDCSR|2|The Ashari} hold themselves removed from the rest of Tal'Dorei by their own choice. This makes many Ashari naive to the ways of the world beyond their homes—but it can also make them determined, steadfast, and tightly focused on their goals. Ever since {@creature Keyleth, Voice of the Tempest|TDCSR} and leader of the {@book Zephrah|TDCSR|3|Zephrah}, became a world-renowned hero, the Air Ashari at least have become more familiar to Tal'Dorei's other peoples. They are known to welcome outsiders to their mountaintop enclave, and to take on quests that force them to leave their isolated home.",
          "To learn more about your character's Ashari order, see \\"{@book The Ashari|TDCSR|2|The Ashari}\\".",
          {
            "type": "table",
            "caption": "Ashari Personality Traits",
            "colLabels": [
              "{@dice d8}",
              "Personality Trait"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I like to keep my hands busy, no matter where I am."
              ],
              [
                "2",
                "I love to explore new places and meet new people."
              ],
              [
                "3",
                "I meditate at dawn each day—and I can't stand it when my routine is interrupted."
              ],
              [
                "4",
                "I like noticing patterns in the world around me, whether or not they mean anything."
              ],
              [
                "5",
                "I don't let anything—or anyone—stand in the way of my mission."
              ],
              [
                "6",
                "I'm a plain talker, even with people who outrank me."
              ],
              [
                "7",
                "I've always got some of my native element with me in some form. (This might be modeling clay, pure water, special burning incense, or a bottled cloud.)"
              ],
              [
                "8",
                "I talk with everyone like I've known them all my life. Because most people I know, I have known all my life!"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Ashari Ideals",
            "colLabels": [
              "{@dice d6}",
              "Ideal"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "{@b Destiny}. I believe that everyone has a role to play. Now I just have to find mine. (Neutral)"
              ],
              [
                "2",
                "{@b Community}. It's important to surround yourself with people you can count on, and who will support you. (Good)"
              ],
              [
                "3",
                "{@b Knowledge}. I want to learn everything I can about the Elemental Planes—and maybe even visit them myself. (Neutral)"
              ],
              [
                "4",
                "{@b Freedom}. I don't care what anyone says. Even if it causes problems, the elements must be free. And so should I. (Chaotic)"
              ],
              [
                "5",
                "{@b Structure}. The elements are in harmony when they are free to act as they will, within the safe boundaries set by {@book the Ashari|TDCSR|2|The Ashari}. People are much the same. (Lawful)"
              ],
              [
                "6",
                "{@b Virtuous Cycle}. If I see someone who needs help, I feel compelled to assist them. Surely they'll return the favor someday! (Good)"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Ashari Bonds",
            "colLabels": [
              "{@dice d6}",
              "Bond"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I have a cousin in another Ashari tribe whom I've never met, but someday I want to visit my extended family."
              ],
              [
                "2",
                "The leader of my tribe thinks I could be their successor, but I worry that I don't have enough experience to lead my people."
              ],
              [
                "3",
                "A mysterious person killed a member of my family. I've left home to discover who the killer was—and to seek vengeance."
              ],
              [
                "4",
                "My older sibling set out on their Aramante a year ago, and I haven't seen them since."
              ],
              [
                "5",
                "When I was a baby, a {@creature giant eagle} brought me to {@book Zephrah|TDCSR|3|Zephrah}. I love my family, but I often wonder who my birth parents are."
              ],
              [
                "6",
                "I trust my animal friends more than any humanoid ally."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Ashari Flaws",
            "colLabels": [
              "{@dice d6}",
              "Flaw"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Big cities are overwhelming. I get nervous when surrounded by people I don't know."
              ],
              [
                "2",
                "I know all too well that elemental power is dangerous—but I like playing around with it anyway."
              ],
              [
                "3",
                "I get surly if I go too long without being in contact with my native element."
              ],
              [
                "4",
                "I think the mission of my people is a fool's errand. They should abandon isolation, let the elements be, and enjoy the pleasures of the world!"
              ],
              [
                "5",
                "I can't stand it when people say one thing and mean another! Just say what you mean!"
              ],
              [
                "6",
                "Ugh, I know it's not right, but I can't help but look down on people who can't manipulate the elements. It's not like it's hard!"
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Astral Drifter",
    "source": "AAG",
    "page": 7,
    "feats": [
      {
        "magic initiate|phb": true
      }
    ],
    "skillProficiencies": [
      {
        "insight": true,
        "religion": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 2
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "traveler's clothes|phb",
          {
            "special": "diary"
          },
          "ink pen|phb",
          "ink (1-ounce bottle)|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "fromFeature": {
      "feats": true
    },
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Insight}, {@skill Religion}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Two of your choice ({@language Celestial} or {@language Gith|MM} recommended)"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A set of {@item traveler's clothes|PHB}, a diary, an {@item ink pen|PHB}, a {@item Ink (1-ounce bottle)|PHB|bottle of ink}, and a {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Longevity",
        "entries": [
          "You are {@dice 20d6} years older than you look, because you have spent that much time in the Astral Sea without aging."
        ]
      },
      {
        "name": "Feature: Divine Contact",
        "type": "entries",
        "entries": [
          "You gain the {@feat Magic Initiate||Magic Initiate feat} from the {@book Player's Handbook|PHB} and must choose cleric for the feat.",
          "In the Astral Sea, you crossed paths with a wandering deity. The encounter was brief and nonviolent, yet it made a lasting impression on you. This deity saw fit to share one secret or obscure bit of cosmic lore with you. Work with your DM to determine the details of this knowledge and its impact on the campaign.",
          "Roll on the Divine Contact table to determine which deity you encountered, or work with your DM to identify a more suitable choice.",
          {
            "type": "table",
            "caption": "Divine Contact",
            "colLabels": [
              "d10",
              "Wandering Deity"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Corellon, god of art and magic (chaotic good)"
              ],
              [
                "2",
                "Tymora, god of good fortune (chaotic good)"
              ],
              [
                "3",
                "Fharlanghn, god of horizons and travel (neutral good)"
              ],
              [
                "4",
                "Istus, god of fate and destiny (neutral)"
              ],
              [
                "5",
                "Nuada, god of war and warriors (neutral)"
              ],
              [
                "6",
                "Zivilyn, god of wisdom (neutral)"
              ],
              [
                "7",
                "Arawn, god of life and death (neutral evil)"
              ],
              [
                "8",
                "Hecate, god of magic and moons (chaotic evil)"
              ],
              [
                "9",
                "Celestian, god of stars and wanderers (neutral)"
              ],
              [
                "10",
                "Ptah, god of knowledge and secrets (lawful neutral)"
              ]
            ]
          }
        ],
        "data": {
          "isFeature": true
        }
      }
    ],
    "hasFluff": true,
    "hasFluffImages": true
  },
  {
    "name": "Athlete",
    "source": "MOT",
    "page": 31,
    "skillProficiencies": [
      {
        "acrobatics": true,
        "athletics": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "vehicles (land)": true
      }
    ],
    "startingEquipment": [
      {
        "a": [
          {
            "special": "bronze discus"
          }
        ],
        "b": [
          {
            "special": "leather ball"
          }
        ]
      },
      {
        "a": [
          {
            "special": "lucky charm"
          }
        ],
        "b": [
          {
            "special": "past trophy"
          }
        ]
      },
      {
        "_": [
          "traveler's clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Acrobatics}, {@skill Athletics}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "One of your choice"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@filter Vehicles (land)|items|source=phb;dmg|miscellaneous=mundane|type=vehicle (land)}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A bronze discus or leather ball, a lucky charm or past trophy, a set of {@item traveler's clothes|phb}, and a {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "name": "Feature: Echoes of Victory",
        "type": "entries",
        "entries": [
          "You have attracted admiration among spectators, fellow athletes, and trainers in the region that hosted your past athletic victories. When visiting any settlement within 100 miles of where you grew up, there is a {@chance 50|50 percent} chance you can find someone there who admires you and is willing to provide information or temporary shelter.",
          "Between adventures, you might compete in athletic events sufficient enough to maintain a comfortable lifestyle, as per the \\"{@book Practicing a Profession|PHB|8|Practicing a Profession}\\" downtime activity in chapter 8 of the {@book Player's Handbook|PHB}."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Favored Event",
        "entries": [
          "While many athletes practice various games and events, most excel at a single form of competition. Roll or choose from the options in the Favored Event table to determine the athletic event in which you excel.",
          {
            "type": "table",
            "caption": "Favored Event",
            "colLabels": [
              "d8",
              "Favored Event"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Marathon"
              ],
              [
                "2",
                "Long-distance running"
              ],
              [
                "3",
                "Wrestling"
              ],
              [
                "4",
                "Boxing"
              ],
              [
                "5",
                "Chariot or horse race"
              ],
              [
                "6",
                "Pankration (mixed unarmed combat)"
              ],
              [
                "7",
                "Hoplite race (racing in full armor with a unit)"
              ],
              [
                "8",
                "Pentathlon (running, long jump, discus, javelin, wrestling)"
              ]
            ]
          }
        ]
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "Competition can forge strong bonds between teammates and rivals or ignite bitter feuds that burn outside the arena. Athletes often apply lessons from their training to their lives in general.",
          {
            "type": "table",
            "caption": "Athlete Personality Traits",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I feel most at peace during physical exertion, be it exercise or battle."
              ],
              [
                "2",
                "I don't like to sit idle."
              ],
              [
                "3",
                "I have a daily exercise routine that I refuse to break."
              ],
              [
                "4",
                "Obstacles exist to be overcome."
              ],
              [
                "5",
                "When I see others struggling, I offer to help."
              ],
              [
                "6",
                "I love to trade banter and gibes."
              ],
              [
                "7",
                "Anything worth doing is worth doing best."
              ],
              [
                "8",
                "I get irritated if people praise someone else and not me."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Athlete Ideals",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Competition. I strive to test myself in all things. (Chaotic)"
              ],
              [
                "2",
                "Triumph. The best part of winning is seeing my rivals brought low. (Evil)"
              ],
              [
                "3",
                "Camaraderie. The strongest bonds are forged through struggle. (Good)"
              ],
              [
                "4",
                "People. I strive to inspire my spectators. (Neutral)"
              ],
              [
                "5",
                "Tradition. Every game has rules, and the playing field must be level. (Lawful)"
              ],
              [
                "6",
                "Growth. Lessons hide in victory and defeat. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Athlete Bonds",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "My teammates are my family."
              ],
              [
                "2",
                "I will overcome a rival and prove myself their better."
              ],
              [
                "3",
                "My mistake got someone hurt. I'll never make that mistake again."
              ],
              [
                "4",
                "I will be the best for the honor and glory of my home."
              ],
              [
                "5",
                "The person who trained me is the most important person in my world."
              ],
              [
                "6",
                "I strive to live up to a specific hero's example."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Athlete Flaws",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I indulge in a habit that threatens my reputation or my health."
              ],
              [
                "2",
                "I'll do absolutely anything to win."
              ],
              [
                "3",
                "I ignore anyone who doesn't compete and anyone who loses to me."
              ],
              [
                "4",
                "I have lingering pain from old injuries."
              ],
              [
                "5",
                "Any defeat or failure on my part is because my opponent cheated."
              ],
              [
                "6",
                "I must be the captain of any group I join."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true,
    "hasFluffImages": true
  },
  {
    "name": "Augen Trust (Spy)",
    "source": "EGW",
    "page": 203,
    "_copy": {
      "name": "Variant Criminal (Spy)",
      "source": "PHB"
    },
    "hasFluff": true
  },
  {
    "name": "Azorius Functionary",
    "source": "GGR",
    "page": 33,
    "skillProficiencies": [
      {
        "insight": true,
        "intimidation": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 2
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "special": "Azorius insignia"
          },
          {
            "special": "scroll containing the text of a law important to you"
          },
          "ink (1-ounce bottle)|phb",
          "ink pen|phb",
          "fine clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "additionalSpells": [
      {
        "expanded": {
          "s0": [
            "friends#c",
            "message#c"
          ],
          "s1": [
            "command",
            "ensnaring strike"
          ],
          "s2": [
            "arcane lock",
            "calm emotions",
            "hold person"
          ],
          "s3": [
            "clairvoyance",
            "counterspell"
          ],
          "s4": [
            "compulsion",
            "divination"
          ],
          "s5": [
            "dominate person"
          ]
        }
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Insight}, {@skill Intimidation}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Two of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "An Azorius insignia, a scroll containing the text of a law important to you, a {@item Ink (1-ounce bottle)|phb|bottle of blue ink}, a {@item ink pen|phb|pen}, a set of {@item fine clothes|phb}, and a belt {@item pouch|phb} containing 10 gp (Azorius-minted 1-zino coins)"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Legal Authority",
        "entries": [
          "You have the authority to enforce the laws of Ravnica, and that status inspires a certain amount of respect and even fear in the populace. People mind their manners in your presence and avoid drawing your attention; they assume you have the right to be wherever you are. Showing your Azorius insignia gets you an audience with anyone you want to talk to (though it might cause more problems than it solves when you're dealing with incorrigible lawbreakers). If you abuse this privilege, though, you can get in serious trouble with your superiors and even be stripped of your position."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Azorius Guild Spells",
        "entries": [
          "{@i Prerequisite: Spellcasting or Pact Magic class feature}",
          "For you, the spells on the Azorius Guild Spells table are added to the spell list of your spellcasting class. (If you are a multiclass character with multiple spell lists, these spells are added to all of them.)",
          {
            "type": "table",
            "caption": "Azorius Guild Spells",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "Spell Level",
              "Spells"
            ],
            "rows": [
              [
                "Cantrip",
                "{@spell friends}, {@spell message}"
              ],
              [
                "1st",
                "{@spell command}, {@spell ensnaring strike}"
              ],
              [
                "2nd",
                "{@spell arcane lock}, {@spell calm emotions}, {@spell hold person}"
              ],
              [
                "3rd",
                "{@spell clairvoyance}, {@spell counterspell}"
              ],
              [
                "4th",
                "{@spell compulsion}, {@spell divination}"
              ],
              [
                "5th",
                "{@spell dominate person}"
              ]
            ]
          },
          "Your magic often takes the form of blue or golden runes floating and glowing in the air in circular patterns or of shimmering azure barriers of magical energy. If you cast {@spell ensnaring strike}, for example, the vines created by the spell might appear as rune-inscribed glowing bands that wrap around the target and hold it in place."
        ]
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "Members of the Azorius Senate tend toward a demeanor of cold dignity and a pragmatic, orderly nature. Steeped in the law as they are, their ideals and priorities revolve around legal issues.",
          {
            "type": "table",
            "caption": "Personality Traits",
            "colLabels": [
              "d8",
              "Trait"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I try never to let my judgment become clouded by emotion."
              ],
              [
                "2",
                "I have infinite patience with the dolts and boors I'm forced to deal with every day."
              ],
              [
                "3",
                "When I give an order, I expect it to be obeyed."
              ],
              [
                "4",
                "I just want things the way I like them: neat, orderly, and clean."
              ],
              [
                "5",
                "No wrongdoing can escape my watchful gaze."
              ],
              [
                "6",
                "I always say exactly what I mean, no matter how many words it takes to communicate the particular nuance I am attempting to convey."
              ],
              [
                "7",
                "I'm very literal and don't appreciate metaphor or sarcasm."
              ],
              [
                "8",
                "I never change my mind once it's made up."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Ideals",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "{@b Guild}. My guild is all that really matters. (Any)"
              ],
              [
                "2",
                "{@b Order}. The law is meant to ensure that the gears of society turn smoothly and quietly. (Lawful)"
              ],
              [
                "3",
                "{@b Peace}. The ultimate object of the law is to remove violence from society. (Good)"
              ],
              [
                "4",
                "{@b Compliance}. Coercion is a fine way of ensuring that the laws are obeyed. (Lawful)"
              ],
              [
                "5",
                "{@b Legislation}. The law embodies excellence in its precision and detail. (Lawful)"
              ],
              [
                "6",
                "{@b Punishment}. A public display of consequences is an excellent deterrent for other criminals. (Evil)"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Bonds",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I am beholden to an Azorius arrester who captured the criminal who killed my parents, saving me from the same fate."
              ],
              [
                "2",
                "I hope one day to write the laws, not just enforce them."
              ],
              [
                "3",
                "I tried and failed to prevent a murder, and I have sworn to find and arrest the perpetrator."
              ],
              [
                "4",
                "I successfully prevented a murder, and the would-be perpetrator wants me dead."
              ],
              [
                "5",
                "One of my parents was prominent in the guild, and I resent constantly being compared to that standard."
              ],
              [
                "6",
                "I've modeled my career after a highly respected lawmage or arrester, but I fear that my role model might be involved in something illegal."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Flaws",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I'm unable to distinguish between the letter and the spirit of the law."
              ],
              [
                "2",
                "I seem like a harsh judge to others, but I judge myself most harshly of all."
              ],
              [
                "3",
                "I have a secret, illegal vice."
              ],
              [
                "4",
                "I was traumatized by witnessing a crime as a child."
              ],
              [
                "5",
                "I'm incapable of deception."
              ],
              [
                "6",
                "I wish I had joined the Boros, but I fear they'd never accept me."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Contacts",
        "entries": [
          "The Azorius Senate is a sprawling bureaucracy, and people in a variety of positions throughout the guild can pull strings to make things happen. Because of the guild's role in making and enforcing laws for the entire city, your place in the Azorius can easily bring you into contact with members of other guilds, for good or ill.",
          "Roll twice on the Azorius Contacts table (for an ally and a rival) and once on the Non-Azorius Contacts table.",
          {
            "type": "table",
            "caption": "Azorius Contacts",
            "colLabels": [
              "d8",
              "Contact"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "As a teenager, I was a page for a prominent judge."
              ],
              [
                "2",
                "One of my childhood friends is now a precognitive mage in service of the guild."
              ],
              [
                "3",
                "I joined the Azorius hoping to impress an arrester whom I admire."
              ],
              [
                "4",
                "My former mentor is now a warden at Udzec, the new Azorius prison."
              ],
              [
                "5",
                "I was second best at everything in my legal training, and now I work with the person who was always just a little bit better."
              ],
              [
                "6",
                "A good friend was promoted into work they can't tell me about."
              ],
              [
                "7",
                "I know a homunculus in the halls of New Prahv who can get things done behind the scenes."
              ],
              [
                "8",
                "I was once summoned to the presence of Supreme Judge Isperia, the guildmaster of the Azorius, who complimented me on my work."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Non-Azorius Contacts",
            "colLabels": [
              "d10",
              "Contact"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Roll an additional Azorius contact; you can decide if the contact is an ally or a rival."
              ],
              [
                "2",
                "The person who recruited me into the Azorius left and joined the Boros."
              ],
              [
                "3",
                "I have a friendship with a Dimir agent who sometimes funnels me secrets about Azorius activities."
              ],
              [
                "4",
                "A Golgari spore druid would love to see me slip up and break the law."
              ],
              [
                "5",
                "A lesser Gruul chieftain seems to think I could be useful."
              ],
              [
                "6",
                "The black sheep of my family is putting their maniacal genius to use in the Izzet."
              ],
              [
                "7",
                "I'm friends with an Orzhov advokist; we compare notes on different forms of law magic."
              ],
              [
                "8",
                "I was ridiculed once in a Rakdos performance; the performer was impressed with my good humor about it and now does me occasional favors."
              ],
              [
                "9",
                "I have a fanatical Selesnya cousin who keeps trying to recruit me and everyone else in the family."
              ],
              [
                "10",
                "While growing up, I was bullied by a brat who's now a hybrid in the Simic Combine."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "How Do I Fit In?",
        "entries": [
          "As a member of the Azorius Senate, you are probably engaged in the work of law enforcement (even if your background involved the legislative or judicial aspects of the senate's activities). Legislative aides and judges' clerks find little reason to venture beyond the Azorius guildhalls, but soldiers and lawmages patrol the streets daily.",
          "An Azorius soldier or lawmage is a force for order, charged with fighting crime on the streets—and in the halls of power. You might spend your time foiling thefts, putting a stop to Orzhov extortion, rooting out Dimir spies, or hunting down Golgari assassins. Perhaps you take your orders from a precognitive mage (or you are one yourself) who receives unpredictable and cryptic visions of future crimes that you and your allies must try to prevent."
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Baldur's Gate Acolyte",
    "source": "BGDIA",
    "page": 202,
    "additionalSources": [
      {
        "source": "PHB",
        "page": 127
      }
    ],
    "_copy": {
      "name": "Acolyte",
      "source": "PHB",
      "_mod": {
        "entries": {
          "mode": "insertArr",
          "index": 2,
          "items": {
            "name": "Baldur's Gate Feature: Religious Community",
            "type": "entries",
            "entries": [
              "{@note The effects of a Baldur's Gate feature can be used only while the character is in Baldur's Gate—though, at the DM's discretion, they might have applicable effects in situations similar to those in Baldur's Gate.}",
              "You're tightly connected with the religious community of Baldur's Gate. You know if a deity has a following in the city and any places that faith openly congregates and the neighborhoods those faithful typically inhabit. While this isn't remarkable for most of the city's larger faiths, keeping track of the hundreds of religions newcomers bring with them is no mean feat."
            ],
            "data": {
              "isFeature": true
            }
          }
        }
      }
    },
    "hasFluff": true
  },
  {
    "name": "Baldur's Gate Charlatan",
    "source": "BGDIA",
    "page": 202,
    "additionalSources": [
      {
        "source": "PHB",
        "page": 128
      }
    ],
    "_copy": {
      "name": "Charlatan",
      "source": "PHB",
      "_mod": {
        "entries": {
          "mode": "insertArr",
          "index": 2,
          "items": {
            "name": "Baldur's Gate Feature: Long-Lost Heir",
            "type": "entries",
            "entries": [
              "{@note The effects of a Baldur's Gate feature can be used only while the character is in Baldur's Gate—though, at the DM's discretion, they might have applicable effects in situations similar to those in Baldur's Gate.}",
              "You're well-versed in the mannerisms and idiosyncrasies of Baldurian patriars and other nobles, imitating them smoothly enough to convince even the snootiest family heads of your authenticity. You're skilled at posing as the long-lost heir to some imaginary or extinguished patriar lineage.",
              "Because of your skill in passing yourself off as a patriar, you have a Watch token that allows you alone into the Upper City of Baldur's Gate. You might be able to bluff others through with you, or even convince members of the Watch that you're a patriar. However, any true test of your authenticity is likely to reveal your deception."
            ],
            "data": {
              "isFeature": true
            }
          }
        }
      }
    },
    "hasFluff": true
  },
  {
    "name": "Baldur's Gate Criminal",
    "source": "BGDIA",
    "page": 202,
    "additionalSources": [
      {
        "source": "PHB",
        "page": 129
      }
    ],
    "_copy": {
      "name": "Criminal",
      "source": "PHB",
      "_mod": {
        "entries": {
          "mode": "insertArr",
          "index": 2,
          "items": [
            {
              "name": "Baldur's Gate Feature: Criminal Connections",
              "type": "entries",
              "entries": [
                "{@note The effects of a Baldur's Gate feature can be used only while the character is in Baldur's Gate—though, at the DM's discretion, they might have applicable effects in situations similar to those in Baldur's Gate.}",
                "In Baldur's Gate, crime is just another business. As a result, you can arrange a meeting with a low-ranking operative of nearly any business, patriar family, crew, government institution, or—certainly—the Guild. This operative will hear you out and, at their discretion, take your information or request up their chain of command. These meetings almost always occur in shady venues."
              ],
              "data": {
                "isFeature": true
              }
            },
            {
              "type": "entries",
              "name": "Criminal Origins",
              "entries": [
                "Criminals are pervasive in Baldur's Gate. If you wish, you may roll on the Criminal Origins table for an event that began your life of crime.",
                {
                  "type": "table",
                  "caption": "Criminal Origins",
                  "colLabels": [
                    "d8",
                    "Origin"
                  ],
                  "colStyles": [
                    "col-2 text-center",
                    "col-10"
                  ],
                  "rows": [
                    [
                      "1",
                      "You crippled a Guild kingpin's cousin without realizing the connection. You got the Guild to back off demands for your death by offering to make amends by working for the criminals, but even so the kingpin still plots a personal revenge."
                    ],
                    [
                      "2",
                      "The Guild took over your family business, ran it into the ground, and burned the building for insurance money. You were driven into crime yourself, but you'll never work for the Guild. You take special joy in hitting its targets first, tipping off its con victims and otherwise frustrating its schemes."
                    ],
                    [
                      "3",
                      "It's always been about money. You're not paid what you're worth, working for someone who has more than they deserve. But the Guild offered you a way to fix that. You keep doing what you've always done—guard work, dock labor, business accounting—but what you learn you pass on to the Guild."
                    ],
                    [
                      "4",
                      "The inequality of Baldur's Gate has driven you to take matters into your own hands. You steal from patriars and rich Lower City residents, funneling the money through charitable fronts to help the needy."
                    ],
                    [
                      "5",
                      "You got into crime as a bored patriar looking for excitement. Your family has no idea of your activities, and neither does the Guild. If either of them ever finds out, your life as you know it will be over."
                    ],
                    [
                      "6",
                      "A close friend or relative joined the Guild and vanished mysteriously. You've worked your way into the lower ranks hoping to find out what happened to them."
                    ],
                    [
                      "7",
                      "You've always wanted to be a member of the Guild. As a child, you looked up to the Guild members' swagger, their flashy dress, and their competence, which all marked them as different from the other adults you knew. As soon as you could, you joined the organization."
                    ],
                    [
                      "8",
                      "To you, this is just a way to earn a living. You go to work, do what needs to be done, and get paid. Anyone who pursues crime for thrill-seeking, to strike back at unjust authorities, or anything else are amateurs, and they're liable to get you arrested or killed with their idiocy."
                    ]
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "hasFluff": true,
    "hasFluffImages": true
  },
  {
    "name": "Baldur's Gate Entertainer",
    "source": "BGDIA",
    "page": 202,
    "additionalSources": [
      {
        "source": "PHB",
        "page": 130
      }
    ],
    "_copy": {
      "name": "Entertainer",
      "source": "PHB",
      "_mod": {
        "entries": {
          "mode": "insertArr",
          "index": 2,
          "items": {
            "name": "Baldur's Gate Feature: Backstage Pass",
            "type": "entries",
            "entries": [
              "{@note The effects of a Baldur's Gate feature can be used only while the character is in Baldur's Gate—though, at the DM's discretion, they might have applicable effects in situations similar to those in Baldur's Gate.}",
              "You've learned that most of the real business of entertainment (or any other venture) happens behind the scenes. It's easy for you to case what sorts of audiences attend what venue—like how toughs gather at the Blushing Mermaid or how brash patriars congregate at the Helm and Cloak. After a successful performance, you may meet an enthusiastic member of the crowd—someone of an occupation or social class that frequents the establishment. This contact is delighted to talk with you, and to listen."
            ],
            "data": {
              "isFeature": true
            }
          }
        }
      }
    },
    "hasFluff": true
  },
  {
    "name": "Baldur's Gate Folk Hero",
    "source": "BGDIA",
    "page": 204,
    "additionalSources": [
      {
        "source": "PHB",
        "page": 131
      }
    ],
    "_copy": {
      "name": "Folk Hero",
      "source": "PHB",
      "_mod": {
        "entries": {
          "mode": "insertArr",
          "index": 2,
          "items": [
            {
              "name": "Baldur's Gate Feature: Social Vengeance",
              "type": "entries",
              "entries": [
                "{@note The effects of a Baldur's Gate feature can be used only while the character is in Baldur's Gate—though, at the DM's discretion, they might have applicable effects in situations similar to those in Baldur's Gate.}",
                "You've lived your entire life in the Lower or Outer City of Baldur's Gate. You grew up seeing arrogant patriars flaunt their wealth while your hardworking neighbors struggled. As a result, you know how eager commoners in Baldur's Gate are to see any patriar get what they deserve. While in a busy part of the Lower City or Outer City of Baldur's Gate, you can spend {@dice 2d10} minutes to convince {@dice 1d6} {@creature commoner||commoners} to perform a non-illegal act that inconveniences a member of the Watch or Flaming Fist, a patriar, or some other wealthy looking individual."
              ],
              "data": {
                "isFeature": true
              }
            },
            {
              "type": "entries",
              "name": "Folk Hero Origins",
              "entries": [
                "Folk heroes might rise from a variety of circumstances, or their origins might be a secret as they do their work anonymously. If you wish, you may roll on the Folk Hero Origins table for an event that started you down your heroic path.",
                {
                  "type": "table",
                  "caption": "Folk Hero Origins",
                  "colLabels": [
                    "d6",
                    "Origin"
                  ],
                  "colStyles": [
                    "col-2 text-center",
                    "col-10"
                  ],
                  "rows": [
                    [
                      "1",
                      "You helped get healing for a sick child. Now the sick come to you, knowing you'll help them find a way to salvation."
                    ],
                    [
                      "2",
                      "You helped break a Guild protection racket afflicting a community of immigrants in the Outer City. Now, you can't travel through that part of the city without your dozen adopted grandparents inviting you in for a meal."
                    ],
                    [
                      "3",
                      "Seeing a lost patriar after dark in the Outer City, you guided the wayward noble through back streets to safety. The patriar repaid your help by paying for improved roofs and lamps in your neighborhood, causing the entire community to celebrate your deed."
                    ],
                    [
                      "4",
                      "Fueled by alcohol, you faced down a carrion crawler that slunk out of the sewer, knocking it out with a single punch. Since then, however, the ale you once credited with your heroism has drowned it, and even your most patient admirers are losing hope. You're hoping for one last chance to win back the goodwill you've drunk away."
                    ],
                    [
                      "5",
                      "You once defeated a raging bugbear with a hand mirror, a mounted deer's head, and two kicks to the groin. Later, you and the bugbear became friends."
                    ],
                    [
                      "6",
                      "Last winter, you dove into the frigid river to haul out a foundering fishing boat with your bare hands, saving all aboard. Now, everyone on the docks knows your name."
                    ]
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "hasFluff": true
  },
  {
    "name": "Baldur's Gate Guild Artisan",
    "source": "BGDIA",
    "page": 204,
    "additionalSources": [
      {
        "source": "PHB",
        "page": 132
      }
    ],
    "_copy": {
      "name": "Guild Artisan",
      "source": "PHB",
      "_mod": {
        "entries": {
          "mode": "insertArr",
          "index": 2,
          "items": {
            "name": "Baldur's Gate Feature: Professional Courtesy",
            "type": "entries",
            "entries": [
              "{@note The effects of a Baldur's Gate feature can be used only while the character is in Baldur's Gate—though, at the DM's discretion, they might have applicable effects in situations similar to those in Baldur's Gate.}",
              "You're familiar with the city's crews, their territories, and inter-crew politics. Choose one of the three districts of Baldur's Gate: the Upper City, the Lower City, or the Outer City. This is the district where you conduct most of your business. Whenever you need information about something in one of that district's neighborhoods, you can seek out crew members in that area and learn the local gossip. You can also gain unimpeded entry to nearly any bank, guild hall, place of business, workhouse, or crew meeting place in your district."
            ],
            "data": {
              "isFeature": true
            }
          }
        }
      }
    },
    "hasFluff": true
  },
  {
    "name": "Baldur's Gate Hermit",
    "source": "BGDIA",
    "page": 204,
    "additionalSources": [
      {
        "source": "PHB",
        "page": 134
      }
    ],
    "_copy": {
      "name": "Hermit",
      "source": "PHB",
      "_mod": {
        "entries": {
          "mode": "insertArr",
          "index": 2,
          "items": [
            {
              "name": "Baldur's Gate Feature: The Real City",
              "type": "entries",
              "entries": [
                "{@note The effects of a Baldur's Gate feature can be used only while the character is in Baldur's Gate—though, at the DM's discretion, they might have applicable effects in situations similar to those in Baldur's Gate.}",
                "You know the Baldur's Gate most Baldurians ignore, the dog-eat-dog world of the homeless and unfortunate. You know where to go in the Lower City and Outer City for anonymity. In these slums and alley camps, you can get a damp bed and a bad meal, but also a degree of privacy and no questions asked. Living here isn't comfortable, but it's unlikely anyone will find you—and you can stay as long as you want."
              ],
              "data": {
                "isFeature": true
              }
            },
            {
              "type": "entries",
              "name": "Hermit Origins",
              "entries": [
                "Any number of personal choices or ill-fated circumstances might have led you to turn away from society. You may, if you wish, choose or roll an origin event from the Hermit Origins table.",
                {
                  "type": "table",
                  "caption": "Hermit Origins",
                  "colLabels": [
                    "d6",
                    "Origin"
                  ],
                  "colStyles": [
                    "col-2 text-center",
                    "col-10"
                  ],
                  "rows": [
                    [
                      "1",
                      "You led an ill-fated expedition into the Riverveins. Your friends were swept away by flooding, and you've never been able to shake the guilt of causing their deaths over a frivolous lark. You've maintained a solitary vigil outside the cavern entrance ever since."
                    ],
                    [
                      "2",
                      "You crossed the Guild in a bad way. Fortunately, its members think you're dead. Less fortunately, maintaining that deception might require you to stay in hiding until you actually are."
                    ],
                    [
                      "3",
                      "You study the puzzles of mortal natures. You've seen followers of evil deities perform miracles for the helpless at Twin Songs, and you've seen patriars who worship good deities turn their backs on the poor daily. Bearing witness to such things, and meditating on their contradictions, fills your hours."
                    ],
                    [
                      "4",
                      "You tend to some part of the city's forgotten history: the unmarked graves in Cliffside Cemetery, the crumbling remains of dead patriar families' manors, or a collection of religious texts stuffed into an attic and forgotten when a believer's patron deity died. In this solitary work, you've learned secrets no one else knows."
                    ],
                    [
                      "5",
                      "You killed a patriar's scion in an illegal duel. The family swore revenge, and you fled to the slums rather than risk bringing their wrath down on your kin."
                    ],
                    [
                      "6",
                      "You aren't originally from Baldur's Gate. You came here seeking something else, only to learn that the quest that drove you had become impossible to fulfill—its object was destroyed or its purpose was negated by some superseding event. Suddenly directionless and unable to return to your homeland, you have lingered, adrift, in this wretched city."
                    ]
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "hasFluff": true
  },
  {
    "name": "Baldur's Gate Noble",
    "source": "BGDIA",
    "page": 204,
    "additionalSources": [
      {
        "source": "PHB",
        "page": 135
      }
    ],
    "_copy": {
      "name": "Noble",
      "source": "PHB",
      "_mod": {
        "entries": {
          "mode": "replaceArr",
          "replace": "Feature: Position of Privilege",
          "items": {
            "name": "Baldur's Gate Feature: Patriar",
            "type": "entries",
            "entries": [
              "{@note The effects of a Baldur's Gate feature can be used only while the character is in Baldur's Gate—though, at the DM's discretion, they might have applicable effects in situations similar to those in Baldur's Gate.}",
              "As a member of one of the elite families of Baldur's Gate, you may pass through city gates without paying tolls, mingle among the Gate's nobility unquestioned, and impress those on the lookout for wealthy patrons. You are welcome in the Upper City and may stay there after dark without being harassed or evicted. Your word is accepted over others' without question, and any corruption among guards or government officials tends to work in your favor, not against you—at least until you make some effort to expose it."
            ],
            "data": {
              "isFeature": true
            }
          }
        }
      }
    },
    "hasFluff": true
  },
  {
    "name": "Baldur's Gate Outlander",
    "source": "BGDIA",
    "page": 204,
    "additionalSources": [
      {
        "source": "PHB",
        "page": 136
      }
    ],
    "_copy": {
      "name": "Outlander",
      "source": "PHB",
      "_mod": {
        "entries": {
          "mode": "insertArr",
          "index": 2,
          "items": [
            {
              "name": "Baldur's Gate Feature: Immigrant Experience",
              "type": "entries",
              "entries": [
                "{@note The effects of a Baldur's Gate feature can be used only while the character is in Baldur's Gate—though, at the DM's discretion, they might have applicable effects in situations similar to those in Baldur's Gate.}",
                "Even after your short time in Baldur's Gate, you've learned the city holds more walls and gates than those the Watch and Flaming Fist patrols. You are known within the city's immigrant communities. Should you ever need to learn about a foreign land, people, tradition, or history, you know where to find someone with firsthand experience—likely somewhere in the Outer City."
              ],
              "data": {
                "isFeature": true
              }
            },
            {
              "type": "entries",
              "name": "Outlander Origins",
              "entries": [
                "Foreigners of all kinds come to Baldur's Gate daily, drawn by countless reasons from countless lands. The Outlander Origins table provides ideas for how your character might have come to Baldur's Gate.",
                {
                  "type": "table",
                  "caption": "Outlander Origins",
                  "colLabels": [
                    "d6",
                    "Origin"
                  ],
                  "colStyles": [
                    "col-2 text-center",
                    "col-10"
                  ],
                  "rows": [
                    [
                      "1",
                      "Someone stole something precious from your people. You tracked the thief to the city gates, but finding clues in an urban environment is very different from tracking someone across the wilderness. You don't know where to go from here, but your people need you to succeed."
                    ],
                    [
                      "2",
                      "You've always been fascinated by the glitter and glamor of city life, so different from the slow pace of life in your homeland. Now you're here, ready to make your mark in the world, but unsure how to begin."
                    ],
                    [
                      "3",
                      "War, plague, famine, or a marauding monster ravaged your home, forcing you to flee for your life. You don't even know how many of your people survived or where to find them. Alone or accompanied by a handful of equally bereft survivors, you must navigate a new life that you never asked for."
                    ],
                    [
                      "4",
                      "You were captured by kidnappers and taken far from your home. The Knights of the Unicorn freed you and brought you here, but now you're on your own."
                    ],
                    [
                      "5",
                      "You were exiled for breaking a trivial-seeming taboo. For this seemingly minor transgression, you lost your friends, family, and homeland in one fell swoop, and were given little choice but to strike out on your own."
                    ],
                    [
                      "6",
                      "A peddler once brought something astonishing to your homeland—a Gondan clockwork, shimmering cloth of gold, a trained speaking bird, or some other small wonder—and told you that it came from Baldur's Gate. You've come to see the source of such wonders, and perhaps learn to create them."
                    ]
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    "hasFluff": true
  },
  {
    "name": "Baldur's Gate Sage",
    "source": "BGDIA",
    "page": 204,
    "additionalSources": [
      {
        "source": "PHB",
        "page": 137
      }
    ],
    "_copy": {
      "name": "Sage",
      "source": "PHB",
      "_mod": {
        "entries": {
          "mode": "insertArr",
          "index": 2,
          "items": {
            "name": "Baldur's Gate Feature: Rumor Monger",
            "type": "entries",
            "entries": [
              "{@note The effects of a Baldur's Gate feature can be used only while the character is in Baldur's Gate—though, at the DM's discretion, they might have applicable effects in situations similar to those in Baldur's Gate.}",
              "Via your personal rumor mill and articles published in Baldur's Mouth, you can surmise a great deal about Baldurians' secrets—who's practicing necromancy, who's involved in spying or smuggling, who would purchase or craft dangerous magical wares without batting an eyelash. Whenever a noteworthy crime or mysterious happening occurs in the city, you immediately have a list of {@dice 1d4} suspects who, if they aren't involved, have a strong chance of knowing who is."
            ],
            "data": {
              "isFeature": true
            }
          }
        }
      }
    },
    "hasFluff": true
  },
  {
    "name": "Baldur's Gate Sailor",
    "source": "BGDIA",
    "page": 204,
    "additionalSources": [
      {
        "source": "PHB",
        "page": 139
      }
    ],
    "_copy": {
      "name": "Sailor",
      "source": "PHB",
      "_mod": {
        "entries": {
          "mode": "insertArr",
          "index": 2,
          "items": {
            "name": "Baldur's Gate Feature: Smuggler's Sense",
            "type": "entries",
            "entries": [
              "{@note The effects of a Baldur's Gate feature can be used only while the character is in Baldur's Gate—though, at the DM's discretion, they might have applicable effects in situations similar to those in Baldur's Gate.}",
              "You're familiar with the docks of Baldur's Gate, the movement of inspectors and tax collectors, the way cargo and coin flows. As a result, it's easy for you to hustle a load of cargo ashore or see such a cargo onto a cooperative ship without attracting suspicion or taxation. You also know the movements of the Gray Wavers—the Flaming Fist harbor guards—and have a sense of how to operate the city's mechanized cranes."
            ],
            "data": {
              "isFeature": true
            }
          }
        }
      }
    },
    "hasFluff": true
  },
  {
    "name": "Baldur's Gate Soldier",
    "source": "BGDIA",
    "page": 204,
    "additionalSources": [
      {
        "source": "PHB",
        "page": 140
      }
    ],
    "_copy": {
      "name": "Soldier",
      "source": "PHB",
      "_mod": {
        "entries": {
          "mode": "insertArr",
          "index": 2,
          "items": [
            {
              "name": "Baldur's Gate Feature: City Guard",
              "type": "entries",
              "entries": [
                "{@note The effects of a Baldur's Gate feature can be used only while the character is in Baldur's Gate—though, at the DM's discretion, they might have applicable effects in situations similar to those in Baldur's Gate.}",
                "You may choose to currently serve in either the Flaming Fist or the Watch. If you do, you have responsibilities related to your post. For as long as you perform these responsibilities, you gain benefits. If you stop performing your responsibilities, though, you lose access to the benefits and might suffer further fallout. Should you lose these benefits, you may regain them by having an unpleasant conversation with your commanding officer and fulfilling your responsibilities for a month.",
                {
                  "type": "entries",
                  "name": "Flaming Fist",
                  "entries": [
                    "If you serve in the Flaming Fist, once every ten days, you must report to the Seatower of Balduran for training, and you're required to take a regular shift patrolling either the Lower City or the Outer City. In return, you have access to the Flaming Fist's fortresses and a direct line of communication with Flaming Fist officers and other soldiers. You can also pass through the city's gates without question—although you can't bring guests into the Upper City as a member of the Watch might. Additionally, you're always welcome at the Three Old Kegs, where the Three Old Toads are glad to greet you with a smile and a mug of ale."
                  ]
                },
                {
                  "type": "entries",
                  "name": "The Watch",
                  "entries": [
                    "If you serve in the Watch, you're required to conduct a regular patrol in the Upper City or take a regular shift at its gates, and must report for training in the Watch Citadel once every ten days. In return, you have access to the Citadel and a direct line of communication with Watch officers and officials. Your word carries considerable weight in the High Hall, and most establishments in the Citadel Streets neighborhood are happy to give you and your friends free meals. Additionally, you can escort people into the Upper City without question, regardless of whether they are patriars or have Watch tokens. Outside the Upper City, however, most people regard you with suspicion, and you generally get a chilly reception while in uniform."
                  ]
                }
              ],
              "data": {
                "isFeature": true
              }
            },
            {
              "type": "entries",
              "name": "Baldur's Gate Feature: Loyalty Test",
              "entries": [
                "{@note The effects of a Baldur's Gate feature can be used only while the character is in Baldur's Gate—though, at the DM's discretion, they might have applicable effects in situations similar to those in Baldur's Gate.}",
                "You've had enough dealings with crooked soldiers that you can spot the behaviors common to corrupt guards and military officers a mile away. While awareness of such corruption doesn't equate to evidence of it, and your sense certainly isn't foolproof, your instinct proves a useful starting point when determining who might take a bribe, who might turn a blind eye to a crime, or who might have criminal connections. You can also use this sense to get a feeling about who might fulfill their duties strictly by the book."
              ],
              "data": {
                "isFeature": true
              }
            }
          ]
        }
      }
    },
    "hasFluff": true
  },
  {
    "name": "Baldur's Gate Urchin",
    "source": "BGDIA",
    "page": 204,
    "additionalSources": [
      {
        "source": "PHB",
        "page": 141
      }
    ],
    "_copy": {
      "name": "Urchin",
      "source": "PHB",
      "_mod": {
        "entries": {
          "mode": "insertArr",
          "index": 2,
          "items": {
            "name": "Baldur's Gate Feature: Gateguide Connection",
            "type": "entries",
            "entries": [
              "{@note The effects of a Baldur's Gate feature can be used only while the character is in Baldur's Gate—though, at the DM's discretion, they might have applicable effects in situations similar to those in Baldur's Gate.}",
              "Even though you might not be a member of the Gateguides crew, you've associated with enough of them that you know their torch-based code. From the lighting, placement, and type of torch arranged on or near a structure, you can gather a great deal of information about those who live or do business there, particularly if they deal fairly with strangers, have Guild or government connections, or have either helped or denied the Gateguides in the past."
            ],
            "data": {
              "isFeature": true
            }
          }
        }
      }
    },
    "hasFluff": true
  },
  {
    "name": "Bandit Defector",
    "source": "HWCS",
    "page": 43,
    "skillProficiencies": [
      {
        "deception": true,
        "survival": true
      }
    ],
    "toolProficiencies": [
      {
        "disguise kit": true,
        "gaming set": true,
        "musical instrument": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "special": "knife"
          },
          {
            "special": "cooking pot"
          },
          {
            "item": "blanket|phb",
            "displayName": "winter blanket"
          },
          {
            "special": "object you received as your cut from a successful robbery"
          },
          "common clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies",
            "entry": "{@skill Deception}, {@skill Survival}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies",
            "entry": "{@item Disguise kit|PHB}, one type of {@filter Gaming Set|items|source=phb|miscellaneous=mundane|type=gaming set} or {@filter Musical Instrument|items|source=phb|miscellaneous=mundane|type=instrument}"
          },
          {
            "type": "item",
            "name": "Equipment",
            "entry": "a knife, a cooking pot, a winter {@item blanket|phb}, an object you received as your cut from a successful robbery, a set of {@item common clothes|phb}, and a {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "name": "Bandit Specialty",
        "type": "entries",
        "entries": [
          "The Bandit Coalition is a rather loose organization of rogues and brigands, but there is still a degree of specialization within the ranks. This ensures that everyone knows what their job is and lessens confusion in the heat of a robbery. You can select your bandit specialty from the Bandit Specialty table, or roll randomly.",
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bandit Specialty"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Lookout"
              ],
              [
                "2",
                "Lifter"
              ],
              [
                "3",
                "Thug"
              ],
              [
                "4",
                "Runner"
              ],
              [
                "5",
                "Hustler"
              ],
              [
                "6",
                "Captain"
              ]
            ]
          },
          "{@b {@i Lookouts}} typically watch the roads for any signs of Perch Guard patrols, signalling the team to bail if a heist looks too risky. They also keep an eye out for potential marks.",
          "{@b {@i Lifters}} are the specialist thieves of an operation. They are usually as adept at pick-pocketing as they are at sneaking up behind a cart to liberate its valuables.",
          "{@b {@i Thugs}} are the muscle of a bandit group, and use their size and strength to intimidate merchants into giving up without a fight. They also keep other bandits in line, at the captain's discretion.",
          "{@b {@i Runners}} are the messengers and scouts of the Coalition, serving to smuggle pilfered goods to fences. Additionally, they pass information throughout the different camps of the organization. Their job often finds them working alone which makes them particularly vulnerable.",
          "{@b {@i Hustlers}} are inveterate con-artists. Through careful planning and execution, their diversions can keep cart drivers occupied just long enough for the lifters to do their work, or create a seamless opening for an ambush.",
          "{@b {@i Captains}} are the glue that holds each bandit team together, providing leadership, and stamping out dissention where necessary, often with force. They are figures that inspire with their skill and bravado."
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Bandit Routes",
        "entries": [
          "As someone who once assisted in countless highway robberies, you are familiar with the roads of the Wood and escape paths used by bandits. When you are not in combat, you (and companions you lead) can travel between locations that cut through forested areas twice as fast as your speed would normally allow."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "Those who have chosen to leave the Coalition behind have not made the choice lightly. Some wrestle with their doubts, still caring deeply about the friends they left behind, while others have forsaken their former lives entirely.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I am plucky and confident in my abilities, at least, that's what I want others to think."
              ],
              [
                "2",
                "I often crack jokes to lighten the mood."
              ],
              [
                "3",
                "I like to keep my secrets, and those who try to pry into my life irritate me."
              ],
              [
                "4",
                "I have trouble sleeping unless I'm on the ground (or floor) in my bedroll."
              ],
              [
                "5",
                "I picked up many stories during my time on the road, and I have one for every occasion."
              ],
              [
                "6",
                "You mess with my friends, you mess with me."
              ],
              [
                "7",
                "I never really had a plan in life, I tend to just go with the flow."
              ],
              [
                "8",
                "I'm as cautious as they come."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Repentance. I've done terrible things in the past, and I want to try and make up for them. (Good)"
              ],
              [
                "2",
                "Nature. I've seen what's happening to the forest, and it's bigger than all of us. We're all doomed unless we do something about it. (Neutral) "
              ],
              [
                "3",
                "Friendship. My friends are like family to me, and I'll keep trying to do right by them until the end. (Good)"
              ],
              [
                "4",
                "Self-Preservation. Any good rat knows when it's time to flee a sinking ship. I want to be clear of the Bandit Coalition when it goes down. (Evil)"
              ],
              [
                "5",
                "Compassion. The struggle between humblefolk and birdfolk will only lead to more bloodshed. It needs to stop somewhere. (Good)"
              ],
              [
                "6",
                "Freedom. I just want to be free to live my own life, and make my own way in the world. (Chaotic)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I did some hard time in Alderheart's prison, and the perch guard who arrested me still has it out for me."
              ],
              [
                "2",
                "I stole something valuable from the Captain of my unit. I'm in big trouble if they ever find me."
              ],
              [
                "3",
                "I harbor a terrible secret that might change how people think of me if it got out."
              ],
              [
                "4",
                "I still sympathize with the Coalition's aims, I just believe there's a better way."
              ],
              [
                "5",
                "My friends in the Coalition didn't understand why I had to leave. They've branded me a traitor."
              ],
              [
                "6",
                "I had people in the Coalition who looked up to me as a leader. They might still follow me, if I could only reach them."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I'm always ready to bail when something goes wrong."
              ],
              [
                "2",
                "Whenever I see something valuable, I can't help but think of a way to steal it."
              ],
              [
                "3",
                "It's hard for me to trust people. I've been burned before. "
              ],
              [
                "4",
                "I have a problem with authority. Nobody tells me what to do."
              ],
              [
                "5",
                "There's a warrant out for my arrest."
              ],
              [
                "6",
                "I have a bad habit that I picked up on the road."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Black Fist Double Agent",
    "source": "ALCurseOfStrahd",
    "page": 2,
    "skillProficiencies": [
      {
        "deception": true,
        "insight": true
      }
    ],
    "toolProficiencies": [
      {
        "disguise kit": true,
        "choose": {
          "from": [
            "anyArtisansTool",
            "gaming set"
          ]
        }
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "disguise kit|phb",
          "common clothes|phb",
          {
            "item": "emblem|phb",
            "displayName": "Tears of Virulence emblem"
          },
          {
            "special": "writ of free agency signed by the Lord Regent"
          },
          {
            "item": "pouch|phb",
            "containsValue": 1500
          }
        ]
      },
      {
        "a": [
          {
            "equipmentType": "toolArtisan"
          }
        ],
        "b": [
          {
            "equipmentType": "setGaming"
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Deception}, {@skill Insight}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@item Disguise kit|phb}, and one type of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools} or {@filter gaming set|items|source=phb|miscellaneous=mundane|type=gaming set}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "{@item Disguise kit|phb}, {@item common clothes|phb}, a Tears of Virulence {@item emblem|phb}, a writ of free agency signed by the Lord Regent, a set of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools} or {@filter gaming set|items|source=phb|miscellaneous=mundane|type=gaming set} you are proficient with, and a {@item pouch|phb} with 15 gp (payment for services rendered)."
          }
        ]
      },
      {
        "name": "Lifestyle",
        "type": "entries",
        "entries": [
          "Moderate"
        ]
      },
      {
        "name": "Overview",
        "type": "entries",
        "entries": [
          "You are an informant for the Tears of Virulence who now lord over Phlan, but are also a double agent for original town guard of Phlan, the Black Fists. For the Tears you've been tasked with ferreting out the secrets of Phlan's criminal underworld, insurgency, and the common peoples of Phlan. In exchange for reporting on the activities of dissenters, criminals, and other rebel elements, the Tears of Virulence leave you alone to conduct your affairs in peace.",
          "In reality you work for the deposed Black Fists, sharing misinformation with the Tears of Virulence that often helps the Black Fists and other Phlan insurgents.",
          "Since the evacuation of Phlan, you are even busier today than you ever were previously, as the number of dissenters among the refugees grows daily, while you are afforded many opportunities to spy on the peoples of Mulmaster and Elventree, to the pleasure of your contact(s) within the Tears of Virulence."
        ]
      },
      {
        "name": "Feature: Double Agent",
        "type": "entries",
        "entries": [
          "You have a reliable and trusty contact within the Tears of Virulence garrison in Phlan to whom you pass information and secrets. In exchange, you can get away with minor criminal offenses within the town of Phlan. In addition, your Black Fists contacts can help you secure an audience with the Lord Regent, the Lord Sage, members of the Black Fists, or deposed nobles and authority figures who are sympathetic to the Phlan refugees and insurgents. Note: This feature is a variant of the Noble feature."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "People are only as trustworthy as you are valuable to them. Always strive to be the most valuable person around."
              ],
              [
                "2",
                "My eloquence and sophistication are tools I use to avoid arousing suspicion myself."
              ],
              [
                "3",
                "I am a thrill-seeker, excited by covert and dangerous missions."
              ],
              [
                "4",
                "I live by my wits and always check every lock twice, just to be certain."
              ],
              [
                "5",
                "I never admit to my mistakes lest they be used against me."
              ],
              [
                "6",
                "I take every effort to be unnoticeable and blend into the crowd. Passersby rarely give me a second look."
              ],
              [
                "7",
                "I am prepared for any eventuality; including the day my usefulness as a spy comes to an end."
              ],
              [
                "8",
                "I always make certain to know my enemy before acting, lest I bite off more than I can chew."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Suspicious. In my experience, everybody has something to hide, and what they hide can usually hurt me. (Any)"
              ],
              [
                "2",
                "Secretive. I trade in secrets, and am not about to let any of mine slip. (Any)"
              ],
              [
                "3",
                "Hedonist. Life is short. I live my life to the fullest, as I know any day could be my last. (Chaotic)"
              ],
              [
                "4",
                "Selfless. I use my position to help the downtrodden avoid persecution from the authorities. (Good)"
              ],
              [
                "5",
                "Patriotic. I am a loyal supporter of Phlan and its leaders, and see my role as a solemn duty and necessary evil to prevent anarchy. (Lawful)"
              ],
              [
                "6",
                "Manipulative. I use my knowledge to blackmail and manipulate others to my own benefit. (Evil)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I was framed for a crime I did not commit, and seek to bring the true culprit to justice."
              ],
              [
                "2",
                "I am a part of an underground network that smuggles innocent civilians out of the city prior to being raided by the authorities."
              ],
              [
                "3",
                "I miss the glory days of Phlan, before the coming of the dragon."
              ],
              [
                "4",
                "I seek to prove myself worthy of joining the Black Fist as a member of their order."
              ],
              [
                "5",
                "My sister was killed by a Tear of Virulence, and now I feed them false information whenever possible."
              ],
              [
                "6",
                "My family was wrongly imprisoned, and I act as an informant in order to secure their release."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I think too highly of myself, and have an exaggerated sense of self-importance."
              ],
              [
                "2",
                "I have difficulty trusting strangers. I see spies and informants everywhere."
              ],
              [
                "3",
                "Years of getting away with minor crimes has left me believing that I am above the law, and have diplomatic immunity above my station."
              ],
              [
                "4",
                "Years of seeing innocent people suffer have left me despondent and pessimistic for the future."
              ],
              [
                "5",
                "My desire for vengeance often gets me into trouble."
              ],
              [
                "6",
                "I am spendthrift, and share my wealth with the patrons of my favorite tavern."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Boros Legionnaire",
    "source": "GGR",
    "page": 40,
    "skillProficiencies": [
      {
        "athletics": true,
        "intimidation": true
      }
    ],
    "languageProficiencies": [
      {
        "choose": {
          "from": [
            "celestial",
            "draconic",
            "goblin",
            "other"
          ]
        }
      }
    ],
    "toolProficiencies": [
      {
        "gaming set": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "special": "Boros insignia"
          },
          {
            "special": "feather from an angel's wing"
          },
          {
            "special": "tattered piece of a Boros banner (a souvenir from a famous battle)"
          },
          "common clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 200
          }
        ]
      }
    ],
    "additionalSpells": [
      {
        "expanded": {
          "s0": [
            "fire bolt#c",
            "sacred flame#c"
          ],
          "s1": [
            "guiding bolt",
            "heroism"
          ],
          "s2": [
            "aid",
            "scorching ray"
          ],
          "s3": [
            "beacon of hope",
            "blinding smite"
          ],
          "s4": [
            "death ward",
            "wall of fire"
          ],
          "s5": [
            "flame strike"
          ]
        }
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Athletics}, {@skill Intimidation}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter gaming set|items|source=phb|miscellaneous=mundane|type=gaming set}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Choose one of Celestial, Draconic, Goblin, or Minotaur"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A Boros insignia, a feather from an angel's wing, a tattered piece of a Boros banner (a souvenir from a famous battle), a set of {@item common clothes|phb}, and a belt {@item pouch|phb} containing 2 gp (Boros-minted 1-zino coins)"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Legion Station",
        "entries": [
          "You have an established place in the hierarchy of the Boros Legion. You can requisition simple equipment for temporary use, and you can gain access to any Boros garrison in Ravnica, where you can rest in safety and receive the attention of medics. You are also paid a salary of 1 gp (a Boros-minted 1-zino coin) per week, which (combined with free lodging in your garrison) enables you to maintain a poor lifestyle between adventures."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Boros Guild Spells",
        "entries": [
          "{@i Prerequisite: Spellcasting or Pact Magic class feature}",
          "For you, the spells on the Boros Guild Spells table are added to the spell list of your spellcasting class. (If you are a multiclass character with multiple spell lists, these spells are added to all of them.)",
          {
            "type": "table",
            "caption": "Boros Guild Spells",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "Spell Level",
              "Spells"
            ],
            "rows": [
              [
                "Cantrip",
                "{@spell fire bolt}, {@spell sacred flame}"
              ],
              [
                "1st",
                "{@spell guiding bolt}, {@spell heroism}"
              ],
              [
                "2nd",
                "{@spell aid}, {@spell scorching ray}"
              ],
              [
                "3rd",
                "{@spell beacon of hope}, {@spell blinding smite}"
              ],
              [
                "4th",
                "{@spell death ward}, {@spell wall of fire}"
              ],
              [
                "5th",
                "{@spell flame strike}"
              ]
            ]
          },
          "Your magic often features dramatic bursts of flame or radiance. When you cast beneficial spells on your allies, they appear momentarily surrounded with halos of bright fire."
        ]
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "The Boros Legion is a zealous army, full of righteous energy tempered with military discipline. Its members share its leadership's devotion to the ideals of justice, or they find satisfaction in the more warfare-oriented aspects of the legion's work.",
          {
            "type": "table",
            "caption": "Personality Traits",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I approach every task with the same high degree of military precision."
              ],
              [
                "2",
                "I am always the first into the fray."
              ],
              [
                "3",
                "I bear any injury or indignity with stoic discipline."
              ],
              [
                "4",
                "My righteous wrath is easily inflamed by the slightest iniquity."
              ],
              [
                "5",
                "My honor is more important to me than my life."
              ],
              [
                "6",
                "Dangerous work is best accomplished by an orderly group working with common purpose."
              ],
              [
                "7",
                "I treat my weapons, uniform, and insignia with reverence, for they are gifts of the angels."
              ],
              [
                "8",
                "I pace when standing and fidget incessantly when forced to sit."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Ideals",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "{@b Guild}. My guild is all that really matters. (Any)"
              ],
              [
                "2",
                "{@b Justice}. Achieving justice requires establishing fair, equitable, and compassionate relationships within a community. (Good)"
              ],
              [
                "3",
                "{@b Protection}. It isn't right for innocents to suffer because of the arrogance of the powerful. (Good)"
              ],
              [
                "4",
                "{@b Solidarity}. It is most crucial to act with a single will, marching side by side in perfect accord. (Lawful)"
              ],
              [
                "5",
                "{@b Order}. Society functions only if people do their duty and respect the chain of command. (Lawful)"
              ],
              [
                "6",
                "{@b Conviction}. Anything worth doing is worth doing with your whole heart. (Lawful)"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Bonds",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I would lay down my life for Aurelia and the angels."
              ],
              [
                "2",
                "I owe my life to the Boros captain who took me in when I was living on the streets."
              ],
              [
                "3",
                "My fellow legionnaires are my family."
              ],
              [
                "4",
                "I wield the same Boros weapon my grandparent did, for the honor of our family."
              ],
              [
                "5",
                "I ran with the Rakdos in my youth, and I'm striving to atone for my past misdeeds."
              ],
              [
                "6",
                "I do what I can to help out the spouse of a comrade who died in battle."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Flaws",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I act bravely when I'm in a group, but I'm a coward when I'm alone."
              ],
              [
                "2",
                "I see everything in clear-cut black and white."
              ],
              [
                "3",
                "I'm just a little fascinated by the ways of the Gruul."
              ],
              [
                "4",
                "I trust the chain of command more than anything—more even than my closest friends."
              ],
              [
                "5",
                "I'm slow to trust members of other guilds."
              ],
              [
                "6",
                "I've been known to turn a blind eye to injustice, with the help of a modest bribe."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Contacts",
        "entries": [
          "The ordered structure of the Boros Legion offers abundant opportunities to make friends—and rivals—in higher places. You might have close friends in other guilds that share the Boros emphasis on order and community, or bitter enemies among the guilds that represent chaos and destruction.",
          "Roll twice on the Boros Contacts table (for an ally and a rival) and once on the Non-Boros Contacts table.",
          {
            "type": "table",
            "caption": "Boros Contacts",
            "colLabels": [
              "d8",
              "Contact"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "A former comrade in arms was promoted into the prestigious Sunhome Guard."
              ],
              [
                "2",
                "One of my parents is a ranking Boros officer."
              ],
              [
                "3",
                "A close friend serves aboard the {@i Parhelion II}, a flying fortress."
              ],
              [
                "4",
                "I had a tangled affair with a Boros garrison captain."
              ],
              [
                "5",
                "I have maintained a relationship with one of my instructors at Horizon Military Academy."
              ],
              [
                "6",
                "I competed with a fellow student for the attention of a mentor at Horizon Military Academy."
              ],
              [
                "7",
                "The person who recruited me into the legion changed the course of my life."
              ],
              [
                "8",
                "A Boros angel knows my name."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Non-Boros Contacts",
            "colLabels": [
              "d10",
              "Contact"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "One of my siblings is an Azorius arrester."
              ],
              [
                "2",
                "Roll an additional Boros contact; you can decide if the contact is an ally or a rival."
              ],
              [
                "3",
                "I showed mercy to an injured, now-grateful Dimir spy."
              ],
              [
                "4",
                "I suspect someone I know is a Golgari assassin, but I can't prove it."
              ],
              [
                "5",
                "An adolescent relative ran off to join the Gruul in an act of rebellion and has not yet returned."
              ],
              [
                "6",
                "I once befriended an Izzet scientist, and we're still cordial though the relationship ended messily."
              ],
              [
                "7",
                "I owe a monetary debt to an Orzhov syndic."
              ],
              [
                "8",
                "A Rakdos blood witch seems to enjoy harassing me."
              ],
              [
                "9",
                "I tried to recruit a friend who ended up joining the Selesnya."
              ],
              [
                "10",
                "I keep running into a particular Simic biomancer, and I enjoy the arguments that inevitably result."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "How Do I Fit In?",
        "entries": [
          "As a member of the Boros Legion, you are subject to the orders of your superior officers. You go where the angels tell you to go, and you do what they command you to do, to the best of your ability. If you enjoy some measure of independence, it's either because you have proven yourself capable of working without close supervision or because you're a rebellious sort who is willing to disobey orders now and face the consequences later.",
          "As a soldier on the street, you are tasked with bringing dangerous threats like the Rakdos and the Gruul in line. You might contend with Rakdos performances gone horribly out of control, Gruul raids on outlying neighborhoods, shipments of rot-infested vegetation from the Golgari undercity, and violent uprisings among the guildless. At the same time, you might have to worry about Dimir spies infiltrating your leadership, overzealous or corrupt Azorius senators abusing the law at the expense of justice, Izzet experiments leveling city blocks, and Simic creations that break out of laboratories and wreak havoc through the Tenth District.",
          {
            "type": "inset",
            "name": "Tajic, Blade of the Legion",
            "entries": [
              "Tajic is a firefist who carries the exalted title of Blade of the Legion, putting him just below the angels in rank. He maintains close communication with Aurelia, though recent events in the city have set them at odds. Tajic believes that the Boros can trust only the Boros. He is convinced that any effort at peace among the guilds is doomed to failure without the Guildpact. The Boros, he argues, would be better off spending their energy to make themselves stronger so they can uphold the fragile balance that exists now—and protect the innocent when the balance tilts. Aurelia feels that his negative attitude runs the risk of poisoning the hearts of the other Boros and undermining any peace efforts. For the most part, in deference to the angel, Tajic keeps his views to himself."
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Caravan Specialist",
    "source": "ALElementalEvil",
    "page": 2,
    "skillProficiencies": [
      {
        "animal handling": true,
        "survival": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "vehicles (land)": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "whip|phb",
          "two-person tent|phb",
          {
            "special": "regional map"
          },
          "traveler's clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Animal Handling}, {@skill Survival}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@filter Vehicles (land)|items|source=phb;dmg|miscellaneous=mundane|type=vehicle (land)}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "One of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@item whip|phb}, a {@item two-person tent|phb}, a regional map, a set of {@item traveler's clothes|phb}, and a belt {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "name": "Lifestyle",
        "type": "entries",
        "entries": [
          "Poor"
        ]
      },
      {
        "name": "Overview",
        "type": "entries",
        "entries": [
          "You are used to life on the road. You pride yourself at having traveled every major trade way in the Moonsea region, including the best backroads and shortcuts. When traveling these roads, you know where the best inns, campsites, and water sources are located, as well as potential locations of danger such as ambush. Having worked the roads as long as you have, you have made many acquaintances and find it easy to pick up information and rumors floating from town to town. You are skilled with beasts of burden and handling and repairing wagons of all kinds."
        ]
      },
      {
        "name": "Feature: Wagonmaster",
        "type": "entries",
        "entries": [
          "You are used to being in charge of the operation and your reputation for reliability has you on a short list when the job is critical. Experience has taught you to rely on your gut. Others recognize this and look to you for direction when a situation gets serious. You are able to identify the most defensible locations for camping. If you are part of a caravan outfit, you are able to attract two additional workers that are loyal to you based on your reputation. You have an excellent memory for maps and geography and can always determine your cardinal directions while traveling. Note: This feature is a variant of the Outlander feature."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Any group is only as strong as its weakest link. Everyone has to pull their own weight. "
              ],
              [
                "2",
                "There's always someone out there trying to take what I've got. Always be vigilant."
              ],
              [
                "3",
                "Anything can be learned if you have the right teacher. Most folks just need a chance."
              ],
              [
                "4",
                "Early to bed and early to rise; this much at least is under my control."
              ],
              [
                "5",
                "You can listen to me or don't and wish you had. Everyone ends up on one side of that fence."
              ],
              [
                "6",
                "Eventually my hard work will be rewarded. Maybe that time has finally come."
              ],
              [
                "7",
                "A strong ox or horse is more reliable than most people I've met."
              ],
              [
                "8",
                "I never had time for books, but wish I had. I admire folks who have taken the time to learn."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Service. Using my talents to help others is the best way of helping myself. (Good)"
              ],
              [
                "2",
                "Selfish. What people don't know WILL hurt them, but why is that my problem? (Evil)"
              ],
              [
                "3",
                "Wanderer. I go where the road takes me. Sometimes that's a good thing... (Chaotic)"
              ],
              [
                "4",
                "Fittest. On the open road, the law of nature wins. Victims are the unprepared. (Lawful)"
              ],
              [
                "5",
                "Focused. I simply have a job to do, and I'm going to do it. (Neutral)"
              ],
              [
                "6",
                "Motivated. There's a reason I'm good at what I do, I pay attention to the details. (Any) "
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "My brother has a farm In Elmwood and I've helped him and his neighbors move their goods to Mulmaster and other surrounding towns. Those are good people."
              ],
              [
                "2",
                "A caravan I lead was attacked by bandits and many innocents died. I swear that I will avenge them by killing any bandits I encounter."
              ],
              [
                "3",
                "The Soldiery are mostly good guys who understand the importance of protecting the roads. The City Watch is who you have to look out for. If they are inspecting your goods, get ready to pay a fine."
              ],
              [
                "4",
                "The new commander of Southroad Tower, Capt. Holke, understands the importance of safe roads. He's hired me for several jobs and I'm grateful."
              ],
              [
                "5",
                "There's always a road I haven't traveled before. I'm always looking for new places to explore."
              ],
              [
                "6",
                "Wealth and power mean little without the freedom to go where and when you want."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I have trouble trusting people I've just met."
              ],
              [
                "2",
                "I enjoy the open road. Underground and tight spaces make me very nervous."
              ],
              [
                "3",
                "I expect others to heed my orders and have little respect or sympathy if they don't."
              ],
              [
                "4",
                "I am very prideful and have trouble admitting when I'm wrong."
              ],
              [
                "5",
                "Once I decide on a course of action, I do not waiver."
              ],
              [
                "6",
                "I like to explore, and my curiosity will sometimes get me into trouble."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Celebrity Adventurer's Scion",
    "source": "AI",
    "page": 48,
    "skillProficiencies": [
      {
        "perception": true,
        "performance": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 2
      }
    ],
    "toolProficiencies": [
      {
        "disguise kit": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "disguise kit|phb",
          "fine clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 3000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Perception}, {@skill Performance}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@item Disguise kit|phb}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Two of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "{@item Disguise kit|phb}, a set of {@item fine clothes|phb}, and a belt {@item pouch|phb} containing 30 gp."
          }
        ]
      },
      {
        "name": "Feature: Name Dropping",
        "type": "entries",
        "entries": [
          "You know and have met any number of powerful people across the land—and some of them might even remember you. You might be able to wrangle minor assistance from a major figure in the campaign, at the DM's discretion. Additionally, the common folk treat you with deference, and your heritage and the stories you tell might be good for a free meal or a place to sleep."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "Scions of celebrity adventurers must deal with fame that's not theirs, wealth they didn't earn, and expectations they can never hope to meet. These hardships can have adverse effects, but those who cope with them can arrive at a decent attitude and a grounded worldview. Those who fail become bitter—or worse.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I will never get out of my famous parent's shadow, and no one else will ever understand this burden."
              ],
              [
                "2",
                "I've seen enough of the adventuring life to have realistic expectations and empathy for my peers."
              ],
              [
                "3",
                "Living up to my legacy will be difficult, but I'm going to do it."
              ],
              [
                "4",
                "I'm used to the very best in life, and that's a hard habit to break."
              ],
              [
                "5",
                "My parent taught me a sense of duty. I strive to uphold it, even when the odds are against me."
              ],
              [
                "6",
                "No one can fake a smile, a handshake, or an interested nod like I can."
              ],
              [
                "7",
                "I've been part of the adventuring life since I was old enough to walk. Let me explain a few things to you."
              ],
              [
                "8",
                "No risk is too great for the rewards of defeating my enemies... and taking their stuff."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Power. The only way to get ahead in this world is to attain power and hold onto it with all your might. (Evil)"
              ],
              [
                "2",
                "Peace. Those who can find or make peace in the chaotic world around them have everything. (Lawful)"
              ],
              [
                "3",
                "Fame. I've seen what fame can bring. And I'll do anything to get all that for myself. (Neutral)"
              ],
              [
                "4",
                "Training. Hard work, sacrifice, and training lead to success—and eventually to perfection. (Any)"
              ],
              [
                "5",
                "Anonymity. I want to be successful. And alone. With lots of guards and wards between me and everyone else in the world. (Any)"
              ],
              [
                "6",
                "Wisdom. Material wealth is an illusion. Wisdom is the real treasure. (Good)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "While my parent was out adventuring, a servant raised me, and I care about that person more than anyone."
              ],
              [
                "2",
                "I consider every member of my parent's former adventuring party to be family."
              ],
              [
                "3",
                "Despite their absences, my famous parent was kind and generous. I love them and want to make them proud."
              ],
              [
                "4",
                "My parent once brought a cursed magic item home. It is my obsession."
              ],
              [
                "5",
                "My childhood home holds all my best memories, and its upkeep is my primary concern."
              ],
              [
                "6",
                "Growing up, I had an imaginary friend I could always count on. That friend is still with me."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "You don't know what I'm going through. You never can."
              ],
              [
                "2",
                "You. Fetch my cloak. And maybe rub my feet for a while."
              ],
              [
                "3",
                "My comrades are brave, but I must defeat this threat alone to prove my worth."
              ],
              [
                "4",
                "Oh, yeah, that spell? Named after my parent's best friend. Let me tell you about them."
              ],
              [
                "5",
                "My best days are behind me. Ahead lies only toil, pain, and death."
              ],
              [
                "6",
                "You have to look out for yourself. No one else will."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true,
    "hasFluffImages": true
  },
  {
    "name": "Charlatan",
    "source": "PHB",
    "page": 128,
    "skillProficiencies": [
      {
        "deception": true,
        "sleight of hand": true
      }
    ],
    "toolProficiencies": [
      {
        "disguise kit": true,
        "forgery kit": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "fine clothes|phb",
          "disguise kit|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1500
          }
        ]
      },
      {
        "a": [
          {
            "special": "stoppered bottles filled with colored liquid",
            "quantity": 10
          }
        ],
        "b": [
          {
            "special": "set of weighted dice"
          }
        ],
        "c": [
          {
            "special": "deck of marked cards"
          }
        ],
        "d": [
          {
            "special": "signet ring of an imaginary duke"
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Deception}, {@skill Sleight of Hand}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@item Disguise kit|phb}, {@item Forgery kit|phb}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A set of {@item fine clothes|phb}, a {@item disguise kit|phb}, tools of the con of your choice (ten stoppered bottles filled with colored liquid, a set of weighted dice, a deck of marked cards, or a signet ring of an imaginary duke), and a belt {@item pouch|phb} containing 15 gp"
          }
        ]
      },
      {
        "name": "Feature: False Identity",
        "type": "entries",
        "entries": [
          "You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Favorite Schemes",
        "type": "entries",
        "entries": [
          "Every charlatan has an angle he or she uses in preference to other schemes. Choose a favorite scam or roll on the table below.",
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Scam"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I cheat at games of chance."
              ],
              [
                "2",
                "I shave coins or forge documents."
              ],
              [
                "3",
                "I insinuate myself into people's lives to prey on their weakness and secure their fortunes."
              ],
              [
                "4",
                "I put on new identities like clothes."
              ],
              [
                "5",
                "I run sleight-of-hand cons on street corners."
              ],
              [
                "6",
                "I convince people that worthless junk is worth their hard-earned money."
              ]
            ]
          }
        ]
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "Charlatans are colorful characters who conceal their true selves behind the masks they construct. They reflect what people want to see, what they want to believe, and how they see the world. But their true selves are sometimes plagued by an uneasy conscience, an old enemy, or deep-seated trust issues.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I fall in and out of love easily, and am always pursuing someone."
              ],
              [
                "2",
                "I have a joke for every occasion, especially occasions where humor is inappropriate."
              ],
              [
                "3",
                "Flattery is my preferred trick for getting what I want."
              ],
              [
                "4",
                "I'm a born gambler who can't resist taking a risk for a potential payoff."
              ],
              [
                "5",
                "I lie about almost everything, even when there's no reason to."
              ],
              [
                "6",
                "Sarcasm and insults are my weapons of choice."
              ],
              [
                "7",
                "I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment."
              ],
              [
                "8",
                "I pocket anything I see that might have some value."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Independence. I am a free spirit—no one tells me what to do. (Chaotic)"
              ],
              [
                "2",
                "Fairness. I never target people who can't afford to lose a few coins. (Lawful)"
              ],
              [
                "3",
                "Charity. I distribute the money I acquire to the people who really need it. (Good)"
              ],
              [
                "4",
                "Creativity. I never run the same con twice. (Chaotic)"
              ],
              [
                "5",
                "Friendship. Material goods come and go. Bonds of friendship last forever. (Good)"
              ],
              [
                "6",
                "Aspiration. I'm determined to make something of myself. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about."
              ],
              [
                "2",
                "I owe everything to my mentor—a horrible person who's probably rotting in jail somewhere."
              ],
              [
                "3",
                "Somewhere out there, I have a child who doesn't know me. I'm making the world better for him or her."
              ],
              [
                "4",
                "I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me."
              ],
              [
                "5",
                "A powerful person killed someone I love. Some day soon, I'll have my revenge."
              ],
              [
                "6",
                "I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I can't resist a pretty face."
              ],
              [
                "2",
                "I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in."
              ],
              [
                "3",
                "I'm convinced that no one could ever fool me the way I fool others."
              ],
              [
                "4",
                "I'm too greedy for my own good. I can't resist taking a risk if there's money involved."
              ],
              [
                "5",
                "I can't resist swindling people who are more powerful than me."
              ],
              [
                "6",
                "I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "City Watch",
    "source": "SCAG",
    "page": 145,
    "skillProficiencies": [
      {
        "athletics": true,
        "insight": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 2
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "special": "uniform in the style of your unit and indicative of your rank"
          },
          {
            "item": "horn|phb",
            "displayName": "horn with which to summon help"
          },
          {
            "item": "manacles|phb",
            "displayName": "set of manacles"
          },
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Athletics}, {@skill Insight}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Any two of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A uniform in the style of your unit and indicative of your rank, a {@item horn|phb} with which to summon help, a set of {@item manacles|phb}, and a {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "name": "Feature: Watcher's Eye",
        "type": "entries",
        "entries": [
          "Your experience in enforcing the law, and dealing with lawbreakers, gives you a feel for local laws and criminals. You can easily find the local outpost of the watch or a similar organization, and just as easily pick out the dens of criminal activity in a community, although you're more likely to be welcome in the former locations rather than the latter."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "Use the tables for the {@background soldier} background in the Player's Handbook as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity as a member of the city watch.",
          "Your bond is likely associated with your fellow watch members or the watch organization itself and almost certainly concerns your community. Your ideal probably involves the fostering of peace and safety. An investigator is likely to have an ideal connected to achieving justice by successfully solving crimes."
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Clan Crafter",
    "source": "SCAG",
    "page": 145,
    "skillProficiencies": [
      {
        "history": true,
        "insight": true
      }
    ],
    "languageProficiencies": [
      {
        "dwarvish": true
      },
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "anyArtisansTool": 1
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "equipmentType": "toolArtisan"
          },
          {
            "special": "maker's mark chisel used to mark your handiwork with the symbol of the clan of crafters you learned your skill from"
          },
          "traveler's clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill History}, {@skill Insight}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Dwarvish or one of your choice if you already speak Dwarvish"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A set of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools} with which you are proficient, a maker's mark chisel used to mark your handiwork with the symbol of the clan of crafters you learned your skill from, a set of {@item traveler's clothes|phb}, and a {@item pouch|phb} containing 5 gp and a gem worth 10 gp"
          }
        ]
      },
      {
        "name": "Feature: Respect of the Stout Folk",
        "type": "entries",
        "entries": [
          "As well respected as clan crafters are among outsiders, no one esteems them quite so highly as dwarves do. You always have free room and board in any place where shield dwarves or gold dwarves dwell, and the individuals in such a settlement might vie among themselves to determine who can offer you (and possibly your companions) the finest accommodations and assistance."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "Use the tables for the {@background guild artisan} background in the Player's Handbook as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity as a clan crafter. (For instance, consider the words \\"guild\\" and \\"clan\\" to be interchangeable.)",
          "Your bond is almost certainly related to the master or the clan that taught you, or else to the work that you produce. Your ideal might have to do with maintaining the high quality of your work or preserving the dwarven traditions of craftsmanship."
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Clasp Member",
    "source": "TDCSR",
    "page": 181,
    "skillProficiencies": [
      {
        "deception": true,
        "choose": {
          "from": [
            "sleight of hand",
            "stealth"
          ],
          "count": 1
        }
      }
    ],
    "languageProficiencies": [
      {
        "thieves' cant": true
      }
    ],
    "toolProficiencies": [
      {
        "choose": {
          "from": [
            "disguise kit",
            "forgery kit",
            "thieves' tools"
          ],
          "count": 1
        }
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "item": "common clothes|phb",
            "displayName": "A set of inconspicuous common clothes"
          },
          {
            "equipmentType": "toolArtisan"
          },
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Deception}, plus your choice of {@skill Sleight of Hand} or {@skill Stealth}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@item Disguise Kit|PHB}, {@item forgery kit|PHB}, or {@item thieves' tools|PHB} (one of your choice)"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "{@language Thieves' Cant}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A set of inconspicuous {@item common clothes|phb}, a set of {@filter tools|items|source=phb|miscellaneous=mundane|type=artisan's tools} with which you're proficient, and a belt {@item pouch|PHB} containing 10 gp"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: A Favor in Turn",
        "page": 182,
        "entries": [
          "You have gained enough clout in the {@book Clasp|TDCSR|2|The Clasp} that you can call in a favor from your contacts whenever you're close enough to a center of syndicate activity. A request for a favor can be no longer than 20 words, and is passed up the chain to an undisclosed Spireling for approval. This favor can take on any form subject to the approval of the GM, who decides how it is fulfilled. If muscle is requested, an NPC member of the {@book Clasp|TDCSR|2|The Clasp} can temporarily aid your party. If money is needed, a small loan can be provided. If you've been imprisoned, {@book Clasp|TDCSR|2|The Clasp} operatives can look into breaking you out or paying off the jailer.",
          "At some point, the favor will be called in for repayment, often without warning. Refusing the call will result in your termination—literally. You might be called on to commit a specific burglary, or to pressure an {@book Emonian|TDCSR|3|Emon, the City of Fellowship} dignitary to reveal a secret at an upcoming ball. The {@book Clasp|TDCSR|2|The Clasp} might even demand that you assassinate a specific person, with no questions asked or answered. It's the GM's prerogative to ensure that the syndicate's request is proportionate to the favor they bestowed—or that they compensate you in other ways for a service that goes beyond the scope of repaying the initial favor."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "page": 182,
        "entries": [
          "The {@book Clasp|TDCSR|2|The Clasp} enjoys a strange status in Tal'Dorei. The syndicate is a feared group of thieves and killers, whose name is often invoked only in whispers. But at the same time, the organization has a reputation for guerilla heroism, in response to its members having saved countless lives when the {@book Chroma Conclave|TDCSR|1|The Chroma Conclave} attacked {@book Emon|TDCSR|3|Emon, the City of Fellowship}. And so like every {@book Clasp|TDCSR|2|The Clasp} member, your own reputation often swings between these two poles.",
          "Your bond is likely associated with your fellow {@book Clasp|TDCSR|2|The Clasp} members or the individual who introduced you to the syndicate. Your ideal probably involves establishing your importance and indispensability to the {@book Clasp|TDCSR|2|The Clasp}.",
          {
            "type": "table",
            "caption": "Clasp Member Personality Traits",
            "colLabels": [
              "{@dice d8}",
              "Personality Trait"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "What's life without risk? I'm always willing to take a risk if the reward seems worth it."
              ],
              [
                "2",
                "I only show my emotions around people I really trust."
              ],
              [
                "3",
                "I don't need friends; I need allies. When I do make \\"friends,\\" I only consider what they can do for me."
              ],
              [
                "4",
                "I look for simple solutions. The world's full of tough problems, but a well-placed knife is a one-size-fits-all answer."
              ],
              [
                "5",
                "Money talks. I don't. We've got an efficient relationship."
              ],
              [
                "6",
                "I used to have one rule—don't get involved in other people's problems. Why are things so complicated now?"
              ],
              [
                "7",
                "Crime is a game, and I play to win. I have no sympathy for players who don't get that."
              ],
              [
                "8",
                "This organization has a lot of folks who cling to ugly, brutal practices. I'm not like that. I'm a professional, and professionals have standards."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Clasp Member Ideals",
            "colLabels": [
              "{@dice d6}",
              "Ideal"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "{@b By Any Means}. I complete jobs. Collateral damage isn't my problem. (Chaotic)"
              ],
              [
                "2",
                "{@b Ambition}. I will climb to the top of the ladder. Everything I do is a stepping-stone to a Spireling's position. (Neutral)"
              ],
              [
                "3",
                "{@b Decisiveness}. It's important to make up your mind so you can act swiftly and without delay. (Neutral)"
              ],
              [
                "4",
                "{@b Honor}. There's room in the {@book Clasp|TDCSR|2|The Clasp} for both good and evil. Every day, I awake and choose to do what's right. (Good)"
              ],
              [
                "5",
                "{@b Family}. The {@book Clasp|TDCSR|2|The Clasp} is family. Anything that's good for the family is good for me. (Lawful)"
              ],
              [
                "6",
                "{@b Self-Interest}. There are too many bleeding hearts in the {@book Clasp|TDCSR|2|The Clasp} these days. Doing the right thing means doing the thing that makes my life better. (Evil)"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Clasp Member Bonds",
            "colLabels": [
              "{@dice d6}",
              "Bond"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I'd do anything—anything—to protect my comrades."
              ],
              [
                "2",
                "I'll always be grateful to the Spireling who took me in when I was an orphaned kid."
              ],
              [
                "3",
                "I was inspired to join the {@book Clasp|TDCSR|2|The Clasp} by the stories my parents told of being saved from the {@book Chroma Conclave's|TDCSR|1|The Chroma Conclave} attack on {@book Emon|TDCSR|3|Emon, the City of Fellowship}. I can look past the organization's flaws."
              ],
              [
                "4",
                "I was nearly killed by the {@book Myriad|TDCSR|2|The Myriad}. If the {@book Clasp|TDCSR|2|The Clasp} is the enemy of those villains, then the {@book Clasp|TDCSR|2|The Clasp} is my friend."
              ],
              [
                "5",
                "I've got family back in the old town who are counting on me for money. They don't know how I get it, but they don't need to know."
              ],
              [
                "6",
                "I joined the {@book Clasp|TDCSR|2|The Clasp} to become rich, powerful, and beloved. That's all there is to it."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Clasp Member Flaws",
            "colLabels": [
              "{@dice d6}",
              "Flaw"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I'm hopeless at organizing my belongings, and I'm always losing things."
              ],
              [
                "2",
                "I get bored whenever a plan is going too smoothly. A win is always more fun when it's by the skin of my teeth!"
              ],
              [
                "3",
                "I've seen Spirelings walk out among cheering crowds of thousands. Gods, I wish that were me. I need that to be me."
              ],
              [
                "4",
                "I'm rubbish with money, and never seem to leave town with a full purse. Keeps me coming back to the life, I suppose."
              ],
              [
                "5",
                "I can't work with shoddy, makeshift {@item thieves' tools|PHB}. I need everything involving my work to be perfect."
              ],
              [
                "6",
                "Any slight against me, no matter how small, is cause for revenge."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true,
    "hasFluffImages": true
  },
  {
    "name": "Cloistered Scholar",
    "source": "SCAG",
    "page": 146,
    "skillProficiencies": [
      {
        "history": true,
        "choose": {
          "from": [
            "arcana",
            "nature",
            "religion"
          ]
        }
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 2
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "item": "robes|phb",
            "displayName": "The scholar's robes of your cloister"
          },
          "pouch|phb",
          {
            "special": "quill"
          },
          {
            "special": "ink"
          },
          {
            "special": "folded parchment"
          },
          {
            "special": "small penknife"
          },
          {
            "item": "book|phb",
            "displayName": "borrowed book on the subject of your current study"
          },
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill History}, plus your choice of one from among {@skill Arcana}, {@skill Nature}, and {@skill Religion}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "any two of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "The scholar's {@item robes|phb} of your cloister, a writing kit (small {@item pouch|phb} with a quill, ink, folded parchment, and a small penknife), a borrowed {@item book|phb} on the subject of your current study, and a {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "name": "Feature: Library Access",
        "type": "entries",
        "entries": [
          "Though others must often endure extensive interviews and significant fees to gain access to even the most common archives in your library, you have free and easy access to the majority of the library, though it might also have repositories of lore that are too valuable, magical, or secret to permit anyone immediate access.",
          "You have a working knowledge of your cloister's personnel and bureaucracy, and you know how to navigate those connections with some ease.",
          "Additionally, you are likely to gain preferential treatment at other libraries across the Realms, as professional courtesy to a fellow scholar."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "Use the tables for the {@background sage} background in the Player's Handbook as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity as a cloistered scholar.",
          "Your bond is almost certainly associated either with the place where you grew up or with the knowledge you hope to acquire through adventuring. Your ideal is no doubt related to how you view the quest for knowledge and truth - perhaps as a worthy goal in itself, or maybe as a means to a desirable end."
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Cobalt Scholar (Sage)",
    "source": "EGW",
    "page": 203,
    "_copy": {
      "name": "Sage",
      "source": "PHB"
    },
    "hasFluff": true
  },
  {
    "name": "Continental Nobility",
    "source": "DoDk",
    "page": 244,
    "prerequisite": [
      {
        "level": {
          "level": 1,
          "class": {
            "name": "Artificer",
            "visible": true
          }
        }
      },
      {
        "level": {
          "level": 1,
          "class": {
            "name": "Barbarian",
            "visible": true
          }
        }
      },
      {
        "level": {
          "level": 1,
          "class": {
            "name": "Bard",
            "visible": true
          }
        }
      },
      {
        "level": {
          "level": 1,
          "class": {
            "name": "Cleric",
            "visible": true
          }
        }
      },
      {
        "level": {
          "level": 1,
          "class": {
            "name": "Druid",
            "visible": true
          }
        }
      },
      {
        "level": {
          "level": 1,
          "class": {
            "name": "Fighter",
            "visible": true
          }
        }
      },
      {
        "level": {
          "level": 1,
          "class": {
            "name": "Monk",
            "visible": true
          }
        }
      },
      {
        "level": {
          "level": 1,
          "class": {
            "name": "Paladin",
            "visible": true
          }
        }
      },
      {
        "level": {
          "level": 1,
          "class": {
            "name": "Ranger",
            "visible": true
          }
        }
      },
      {
        "level": {
          "level": 1,
          "class": {
            "name": "Rogue",
            "visible": true
          }
        }
      }
    ],
    "skillProficiencies": [
      {
        "choose": {
          "from": [
            "persuasion",
            "athletics",
            "history",
            "intimidation"
          ],
          "count": 2
        }
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 2
      }
    ],
    "startingEquipment": [
      {
        "a": [
          "signet ring|phb"
        ],
        "b": [
          {
            "special": "brooch bearing your family crest"
          }
        ]
      },
      {
        "_": [
          {
            "special": "cape in the colours of your house"
          },
          "fine clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 2500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "Two of the following: {@skill Persuasion}, {@skill Athletics}, {@skill History}, or {@skill Intimidation}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Two of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@item signet ring|PHB} or brooch bearing your family crest, a cape in the colours of your house, a set of {@item fine clothes|PHB}, and a {@item pouch|PHB} containing 25 gp"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Defining Event",
        "entries": [
          {
            "type": "table",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d8",
              "Defining Event"
            ],
            "rows": [
              [
                "1",
                "I was well celebrated in my city as a slayer of a great troll."
              ],
              [
                "2",
                "I witnessed the death of my family during the civil war. They were targets for their ties to the von Kessel name."
              ],
              [
                "3",
                "I led my knights to victory in defending our castle during a raid in the war."
              ],
              [
                "4",
                "I lost a lot of good soldiers in an earlier expedition into Drakkenheim. We never made it past the gate."
              ],
              [
                "5",
                "My house was an enemy of the von Kessel family and had many battles with them."
              ],
              [
                "6",
                "I broke ties with my family when they folded to the Silver Order."
              ],
              [
                "7",
                "I am related, not to a king or queen, but to a noble figure who sat in the small council and made important decisions for their represented house."
              ],
              [
                "8",
                "My family lost everything in the destruction of Drakkenheim. We are noble only in name, no longer in standing."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Noble Confidence",
        "entries": [
          "During a short rest you can give an inspiring pep talk to a number of allies equal to your proficiency bonus. Once in the next 8 hours, each of those allies can roll {@dice 1d4} and add it to the result of a single attack roll, ability check, or saving throw.",
          {
            "type": "table",
            "caption": "Suggested Characteristics",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "rows": [
              [
                "1",
                "I consider myself a renowned monster slayer, and like to remind everyone of the many accomplishments I hold to my name."
              ],
              [
                "2",
                "I keep family traditions close. Honour and family are amongst the most important things in the world, and I cherish them."
              ],
              [
                "3",
                "I miss the comforts of my home. This city is dirty and smells terrible."
              ],
              [
                "4",
                "I believe in the good in people, and I hope to find a peaceful resolution to our problems. A diplomatic approach is something Westemär greatly needs."
              ],
              [
                "5",
                "As a noble, I have a responsibility to protect those who cannot protect themselves."
              ],
              [
                "6",
                "It is highly important that I look my best and maintain my regal demeanor in all situations. My reputation must go untarnished."
              ],
              [
                "7",
                "I may be of noble birth, but have lived life on the road for some time. I am more than willing to share what I have with others, as I am no better or worse than anyone else."
              ],
              [
                "8",
                "There is no challenge I can't face. I heard about the horrors and monsters of this world, and I am what they fear the most."
              ]
            ]
          },
          {
            "type": "table",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "rows": [
              [
                "1",
                "Respect. I am a respected member of my family, and I expect what remains of Drakkenheim's nobility and royal line to acknowledge my standing. (Lawful)"
              ],
              [
                "2",
                "Responsibility. It is my responsibility as a representative of my noble line to remain cordial, and diplomatic in dealings with the various high ranking members of Drakkenheim's society. (Good)"
              ],
              [
                "3",
                "Privacy. I do not wish for my nobility to come up. It may be best if the people of Drakkenheim do not know who I am. At least for now. (Any)"
              ],
              [
                "4",
                "Duty. It is my duty to aid the people of Drakkenheim. As a noble I was connected to this city, and it is what is expected of me. (Good)"
              ],
              [
                "5",
                "Glory. I must claim my victories and prove myself in battle. (Any)"
              ],
              [
                "6",
                "Family. Blood is thicker than water and I will fight to defend my family's honour. (Good)"
              ]
            ]
          },
          {
            "type": "table",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d6",
              "Bond"
            ],
            "rows": [
              [
                "1",
                "I must prove myself as a great warrior for my house and my people."
              ],
              [
                "2",
                "My family was once bound to the royal family of Westemär, I must ensure we remain bound to whoever takes the throne."
              ],
              [
                "3",
                "My family's fortune was lost. Drakkenheim may be our last chance to get it back."
              ],
              [
                "4",
                "My family was betrayed by one of the royal houses, and I plan to make sure any that remain of that name are brought to justice and my family takes its place where it belongs."
              ],
              [
                "5",
                "I am destined to rule, as my ancestors before me have."
              ],
              [
                "6",
                "I have been sent unwillingly on a diplomatic mission to Drakkenheim. I am to gain political standing in these crumbling ruins."
              ]
            ]
          },
          {
            "type": "table",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "rows": [
              [
                "1",
                "I boast about my own triumphs, and belittle the accomplishments of others."
              ],
              [
                "2",
                "Bound by honor, I can never back down from a challenge, nor can I let those who undervalue my name go unchallenged."
              ],
              [
                "3",
                "I do not like getting my hands dirty. Other people must do the heavy lifting, not me."
              ],
              [
                "4",
                "I like to flaunt my wealth, and I spare no expense."
              ],
              [
                "5",
                "I'm never wrong. Even if I was, I would never admit it."
              ],
              [
                "6",
                "I was forced to lead, but I am very far out of my depth and desperately hoping people do not catch on that I don't know what I am doing here."
              ]
            ]
          }
        ],
        "data": {
          "isFeature": true
        }
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Cormanthor Refugee",
    "source": "ALRageOfDemons",
    "page": 5,
    "skillProficiencies": [
      {
        "nature": true,
        "survival": true
      }
    ],
    "toolProficiencies": [
      {
        "anyArtisansTool": 1
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "two-person tent|phb",
          {
            "equipmentType": "toolArtisan"
          },
          "holy symbol|phb",
          "traveler's clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Nature}, {@skill Survival}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Elven"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@item two-person tent|phb}, {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools}, a {@item holy symbol|phb}, a set of {@item traveler's clothes|phb}, a belt {@item pouch|phb} containing 5 gp"
          }
        ]
      },
      {
        "name": "Lifestyle",
        "type": "entries",
        "entries": [
          "Poor"
        ]
      },
      {
        "name": "Overview",
        "type": "entries",
        "entries": [
          "You are one of hundreds of refugees that were driven from Hillsfar or that fled the destruction of Myth Drannor and who now shelter in hidden camps under the northern eaves of the Cormanthor Forest. If you up grew in the camps, you have never been to a settlement other than the village of Elventree. As a guest of the elves, you have learned their ways and the ways of the forest. You are also a traumatized, as residual wild magic, energies released by the fall of Thultanar upon Myth Drannor, and the constant fear of raids hunting for non-humans to fight in Hillsfar's Arena have taken their toll on you, as they have on everyone in the camps."
        ]
      },
      {
        "name": "Feature: Shelter of the Elven Clergy",
        "type": "entries",
        "entries": [
          "The clerics of Elventree have vowed to care for the Cormanthor refugees. They will help you when they can, including providing you and your companions with free healing and care at temples, shrines, and other established presences in Elventree. They will also provide you (but only you) with a poor lifestyle. Note: This feature is a variant of the Acolyte feature."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "entries": [
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I long for a home that never really existed, whether in the camps, Hillsfar, or Myth Drannor."
              ],
              [
                "2",
                "Though I am not an elf, I am a fervent, radical worshipper of the elven gods."
              ],
              [
                "3",
                "I live in the moment, knowing my life could be turned upside down any day."
              ],
              [
                "4",
                "I appreciate beauty in all of its forms."
              ],
              [
                "5",
                "I hate the dark elves and the Netherese for each driving the elves out of Cormanthyr in the past."
              ],
              [
                "6",
                "I am a forest bumpkin who grew up in a tent in the woods and is wholly ignorant of city life."
              ],
              [
                "7",
                "I was raised alongside children of many other races. I harbor no racial prejudices at all."
              ],
              [
                "8",
                "The elves have just the right word for so many things that cannot be expressed as well in other languages. I pepper my speech with elven words, phrases, and sayings."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Patient. The elves have taught me to think and plan for the long-term. (Lawful)"
              ],
              [
                "2",
                "Rebellious. Governments and politicians drove my family to the camps. I subtly defy authority whenever I think I can get away with it. (Chaotic)"
              ],
              [
                "3",
                "Self - Absorbed. I've had to look out for number one so long that it has become second nature. (Any)"
              ],
              [
                "4",
                "Wanderlust. I want to see as much of the world beyond the camps as I can. (Any)"
              ],
              [
                "5",
                "Generous. I give everything I can to help those in need, regardless of who they are. (Good)"
              ],
              [
                "6",
                "To the Abyss with Them. The people of Hillsfar cast me out. I won't risk my hide to help them. (Evil)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "The elves took me in when I had nowhere else to go. In return, I do what I can to help elves in need."
              ],
              [
                "2",
                "I seek revenge against the people of Hillsfar for driving my family into the forest."
              ],
              [
                "3",
                "My family lost everything when they were driven from Hillsfar. I strive to rebuild that fortune."
              ],
              [
                "4",
                "The forest has provided me with food and shelter. In return, I protect forests and those who dwell within."
              ],
              [
                "5",
                "I am deeply, tragically in love with someone whose racial lifespan is far longer or shorter than mine."
              ],
              [
                "6",
                "Members of my extended family did not make it to the camps or have been kidnapped to fight in the Arena. I search for them tirelessly."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I am very uncomfortable indoors and underground."
              ],
              [
                "2",
                "I am haughty. I grew up among the elves and emulate them. Other races are crude in comparison."
              ],
              [
                "3",
                "Elf this, elf that. I am sick and tired of the elves."
              ],
              [
                "4",
                "I am a miser. Having lost everything once before, I clutch my possessions and wealth very tightly."
              ],
              [
                "5",
                "I am a moocher. I am so used to others providing for me that I have come to expect everyone to do it."
              ],
              [
                "6",
                "I believe the gods have cursed me, my family, and all of the Cormanthor refugees. We are all doomed, doomed I tell you!"
              ]
            ]
          }
        ],
        "name": "Suggested Characteristics"
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Courtier",
    "source": "SCAG",
    "page": 146,
    "skillProficiencies": [
      {
        "insight": true,
        "persuasion": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 2
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "fine clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Insight}, {@skill Persuasion}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Any two of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A set of {@item fine clothes|phb} and a {@item pouch|phb} containing 5 gp"
          }
        ]
      },
      {
        "name": "Feature: Court Functionary",
        "type": "entries",
        "entries": [
          "Your knowledge of how bureaucracies function lets you gain access to the records and inner workings of any noble court or government you encounter. You know who the movers and shakers are, whom to go to for the favors you seek, and what the current intrigues of interest in the group are."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "Use the tables for the {@background guild artisan} background in the Player's Handbook as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity as a courtier.",
          "The noble court or bureaucratic organization where you got your start is directly or indirectly associated with your bond (which could pertain to certain individuals in the group, such as your sponsor or mentor). Your ideal might be concerned with the prevailing philosophy of your court or organization."
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Criminal",
    "source": "PHB",
    "page": 129,
    "basicRules": true,
    "skillProficiencies": [
      {
        "deception": true,
        "stealth": true
      }
    ],
    "toolProficiencies": [
      {
        "gaming set": true,
        "thieves' tools": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "crowbar|phb",
          {
            "item": "common clothes|phb",
            "displayName": "dark common clothes including a hood"
          },
          {
            "item": "pouch|phb",
            "containsValue": 1500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Deception}, {@skill Stealth}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter gaming set|items|source=phb|miscellaneous=mundane|type=gaming set}, {@item thieves' tools|phb}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@item crowbar|phb}, a set of dark {@item common clothes|phb} including a hood, and a belt {@item pouch|phb} containing 15 gp"
          }
        ]
      },
      {
        "name": "Feature: Criminal Contact",
        "type": "entries",
        "entries": [
          "You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Specialty",
        "type": "entries",
        "entries": [
          "There are many kinds of criminals, and within a thieves' guild or similar criminal organization, individual members have particular specialties. Even criminals who operate outside of such organizations have strong preferences for certain kinds of crimes over others. Choose the role you played in your criminal life, or roll on the table below.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Specialty"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Blackmailer"
              ],
              [
                "2",
                "Burglar"
              ],
              [
                "3",
                "Enforcer"
              ],
              [
                "4",
                "Fence"
              ],
              [
                "5",
                "Highway robber"
              ],
              [
                "6",
                "Hired killer"
              ],
              [
                "7",
                "Pickpocket"
              ],
              [
                "8",
                "Smuggler"
              ]
            ]
          }
        ]
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "Criminals might seem like villains on the surface, and many of them are villainous to the core. But some have an abundance of endearing, if not redeeming, characteristics. There might be honor among thieves, but criminals rarely show any respect for law or authority.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I always have a plan for when things go wrong."
              ],
              [
                "2",
                "I am always calm, no matter what the situation. I never raise my voice or let my emotions control me."
              ],
              [
                "3",
                "The first thing I do in a new place is note the locations of everything valuable—or where such things could be hidden."
              ],
              [
                "4",
                "I would rather make a new friend than a new enemy."
              ],
              [
                "5",
                "I am incredibly slow to trust. Those who seem the fairest often have the most to hide."
              ],
              [
                "6",
                "I don't pay attention to the risks in a situation. Never tell me the odds."
              ],
              [
                "7",
                "The best way to get me to do something is to tell me I can't do it."
              ],
              [
                "8",
                "I blow up at the slightest insult."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Honor. I don't steal from others in the trade. (Lawful)"
              ],
              [
                "2",
                "Freedom. Chains are meant to be broken, as are those who would forge them. (Chaotic)"
              ],
              [
                "3",
                "Charity. I steal from the wealthy so that I can help people in need. (Good)"
              ],
              [
                "4",
                "Greed. I will do whatever it takes to become wealthy. (Evil)"
              ],
              [
                "5",
                "People. I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)"
              ],
              [
                "6",
                "Redemption. There's a spark of good in everyone. (Good)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I'm trying to pay off an old debt I owe to a generous benefactor."
              ],
              [
                "2",
                "My ill-gotten gains go to support my family."
              ],
              [
                "3",
                "Something important was taken from me, and I aim to steal it back."
              ],
              [
                "4",
                "I will become the greatest thief that ever lived."
              ],
              [
                "5",
                "I'm guilty of a terrible crime. I hope I can redeem myself for it."
              ],
              [
                "6",
                "Someone I loved died because of a mistake I made. That will never happen again."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "When I see something valuable, I can't think about anything but how to steal it."
              ],
              [
                "2",
                "When faced with a choice between money and my friends, I usually choose the money."
              ],
              [
                "3",
                "If there's a plan, I'll forget it. If I don't forget it, I'll ignore it."
              ],
              [
                "4",
                "I have a 'tell' that reveals when I'm lying."
              ],
              [
                "5",
                "I turn tail and run when things look bad."
              ],
              [
                "6",
                "An innocent person is in prison for a crime that I committed. I'm okay with that."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Custom Background",
    "source": "PHB",
    "page": 126,
    "skillProficiencies": [
      {
        "any": 2
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 2
      }
    ],
    "skillToolLanguageProficiencies": [
      {
        "anyLanguage": 2
      },
      {
        "anyLanguage": 1,
        "anyTool": 1
      },
      {
        "anyTool": 1
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "Two of your choice"
          },
          {
            "type": "item",
            "name": "Languages and Tool Proficiencies:",
            "entry": "Two of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "The equipment package from any background"
          }
        ]
      },
      {
        "name": "Feature: Choose a Feature",
        "type": "entries",
        "entries": [
          "Choose a feature from any background."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "Use the suggested characteristics from any background."
        ]
      },
      "{@note See the section on {@book Customizing a Background|PHB|4|Customizing a Background} in the {@book Player's Handbook|PHB} for more information.}"
    ]
  },
  {
    "name": "Devoted Missionary",
    "source": "DoDk",
    "page": 246,
    "skillProficiencies": [
      {
        "choose": {
          "from": [
            "history",
            "religion",
            "arcana",
            "nature"
          ],
          "count": 2
        }
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 2
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "item": "robes|phb",
            "displayName": "set of pale robes"
          },
          {
            "special": "small chip of delerium encased in glass"
          },
          {
            "special": "walking stick"
          },
          {
            "item": "amulet|phb",
            "displayName": "amulet with a symbol of your chosen god"
          },
          {
            "item": "book|phb",
            "displayName": "small book of religious text"
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "Two of the following: {@skill History}, {@skill Religion}, {@skill Arcana}, {@skill Nature}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Two of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A set of pale {@item robes|PHB}, a small chip of delerium encased in glass, a walking stick, an {@item amulet|PHB} with a symbol of your chosen god, a small {@item book|PHB} of religious text"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Missionary Life",
        "entries": [
          {
            "type": "table",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d8",
              "Missionary Life"
            ],
            "rows": [
              [
                "1",
                "I was on a quest of self-enlightenment."
              ],
              [
                "2",
                "I ritualistically surround myself with lit candles and ancient texts when I rest."
              ],
              [
                "3",
                "I had taken a vow of silence until the time that my voice was needed to fulfil my destiny."
              ],
              [
                "4",
                "I was the caretaker of ancient relics of our faith and am quested with finding others."
              ],
              [
                "5",
                "I am but a pilgrim hoping to find divine light in dark places in the world."
              ],
              [
                "6",
                "I was guided to my faith by angels who rescued me from my dark past."
              ],
              [
                "7",
                "I broke my vows to my faith and was exiled. I seek redemption."
              ],
              [
                "8",
                "I must prove myself worthy to my faith and its purpose, no matter the amount of blood spilled or lives lost."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Guided by Faith",
        "entries": [
          "A number of times per day equal to your proficiency bonus, you may ask the Game Master to reveal the DC of any ability check you make before rolling the dice. You may then decide whether or not you wish to attempt the roll.",
          {
            "type": "table",
            "caption": "Suggested Characteristics",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "rows": [
              [
                "1",
                "I empathize with those who do not follow the path of light. Creatures of all types can be brought back to the path of righteousness and are often suffering and in great pain."
              ],
              [
                "2",
                "I believe in the words of my religion and quote its texts and scriptures as often as I can."
              ],
              [
                "3",
                "I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods."
              ],
              [
                "4",
                "I have spent my life in a temple or church. Rough living wears on me quickly."
              ],
              [
                "5",
                "I believe very strongly that everything will turn out okay, and nothing can shake my positive attitude."
              ],
              [
                "6",
                "My faith kept me distant from others. I have very little experience with the world outside the church/temple/shrine."
              ],
              [
                "7",
                "I have extremely strict etiquette and manners for interactions and tasks, and I refuse to stray from them."
              ],
              [
                "8",
                "I am working on my thesis of religious ongoings in the world and excitedly discuss the nuances of these ideas with anyone and everyone."
              ]
            ]
          },
          {
            "type": "table",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "rows": [
              [
                "1",
                "Logic. Emotions must not cloud our judgement on what is right or true. (Lawful)"
              ],
              [
                "2",
                "Self. My religious journey is that of discovering myself. If I can obtain that, there is nothing left to know. (Any)"
              ],
              [
                "3",
                "Charity. I will always help those in need, no matter the cost. (Good)"
              ],
              [
                "4",
                "Faith. The path laid out before me is determined by the divine entity I worship. I will follow its signs and patterns to fulfil my purpose. (Lawful)"
              ],
              [
                "5",
                "Power. The gods have granted me divine powers and I must use them to make those who do not worship as strongly as I see the divine light and understand that I am the one true speaker of my faith. (Chaotic)"
              ],
              [
                "6",
                "Peace. I do not like to be part of conflicts, rather a neutral voice of reason to all sides. (Neutral)"
              ]
            ]
          },
          {
            "type": "table",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d6",
              "Bond"
            ],
            "rows": [
              [
                "1",
                "Nothing is more important than my church and what it represents."
              ],
              [
                "2",
                "I joined my religion to hide from a past I would rather forget."
              ],
              [
                "3",
                "The path to enlightenment is unending. I must stay the course."
              ],
              [
                "4",
                "I will die if it means doing right by my religious beliefs."
              ],
              [
                "5",
                "Everything I do is for the good of the common people."
              ],
              [
                "6",
                "I seek to preserve the ancient texts and artefact of my religion."
              ]
            ]
          },
          {
            "type": "table",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "rows": [
              [
                "1",
                "I judge others harshly and believe my path to be the one true path."
              ],
              [
                "2",
                "I believe in the words of my religion so strongly that I follow them without question."
              ],
              [
                "3",
                "The goal I have set for myself is my destiny, and I can not act against it or abandon it for any reason."
              ],
              [
                "4",
                "My religion was meant to keep the dark thoughts at bay, but I find myself losing that battle and a blood thirst grows within me."
              ],
              [
                "5",
                "This is my first taste of life outside my religion, and I enjoy its pleasures a little too much."
              ],
              [
                "6",
                "The gods and my faith have determined that I am always correct as I speak on their behalf. There is no question in my mind that I speak the ultimate truths and any who do not agree are misguided fools."
              ]
            ]
          }
        ],
        "data": {
          "isFeature": true
        }
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Dimir Operative",
    "source": "GGR",
    "page": 46,
    "skillProficiencies": [
      {
        "deception": true,
        "stealth": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "disguise kit": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "special": "Dimir insignia"
          },
          {
            "special": "small knives",
            "quantity": 3
          },
          {
            "item": "common clothes|phb",
            "displayName": "dark-colored common clothes"
          },
          {
            "special": "the starting equipment of the background described in this chapter for your secondary guild"
          }
        ]
      }
    ],
    "additionalSpells": [
      {
        "expanded": {
          "s0": [
            "encode thoughts|ggr#c",
            "mage hand#c"
          ],
          "s1": [
            "disguise self",
            "sleep"
          ],
          "s2": [
            "detect thoughts",
            "pass without trace"
          ],
          "s3": [
            "gaseous form",
            "meld into stone",
            "nondetection"
          ],
          "s4": [
            "arcane eye",
            "freedom of movement"
          ],
          "s5": [
            "modify memory"
          ]
        }
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Deception}, {@skill Stealth}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@item Disguise kit|phb}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "One of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A Dimir insignia, three small knives, a set of dark-colored {@item common clothes|phb}, and the starting equipment of the background described in this chapter for your secondary guild"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: False Identity",
        "entries": [
          "You have more than one identity. The one you wear most of the time makes you appear to be a member of a guild other than House Dimir. You have documentation, established acquaintances, and disguises that allow you to assume that persona and fit into the secondary guild.",
          "Whenever you choose, you can drop this identity and blend into the guildless masses of the city.",
          "Consider why you're embedded in the secondary guild. Create a story with your DM, inspired by rolling on the following table or choosing a reason that suits you.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Reason for Infiltration"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "My parents belong to this guild, and I let them think I'm following in their footsteps."
              ],
              [
                "2",
                "I've been assigned to track this guild's activities."
              ],
              [
                "3",
                "I've been assigned to get close to an individual in this guild and learn their secrets."
              ],
              [
                "4",
                "I've been assigned to recruit a new Dimir spy from the ranks of this guild."
              ],
              [
                "5",
                "I was a member of this guild before the Dimir recruited me."
              ],
              [
                "6",
                "I don't like what this guild stands for and want to destroy it from within."
              ],
              [
                "7",
                "I secretly wish I could leave the Dimir and join this guild, but there is no escaping the Dimir."
              ],
              [
                "8",
                "I chose this guild at random or on a lark."
              ]
            ]
          }
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Dimir Guild Spells",
        "entries": [
          "{@i Prerequisite: Spellcasting or Pact Magic class feature}",
          "For you, the spells on the Dimir Guild Spells table are added to the spell list of your spellcasting class. (If you are a multiclass character with multiple spell lists, these spells are added to all of them.)",
          {
            "type": "table",
            "caption": "Dimir Guild Spells",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "Spell Level",
              "Spells"
            ],
            "rows": [
              [
                "Cantrip",
                "{@spell encode thoughts|GGR}, {@spell mage hand}"
              ],
              [
                "1st",
                "{@spell disguise self}, {@spell sleep}"
              ],
              [
                "2nd",
                "{@spell detect thoughts}, {@spell pass without trace}"
              ],
              [
                "3rd",
                "{@spell gaseous form}, {@spell meld into stone}, {@spell nondetection}"
              ],
              [
                "4th",
                "{@spell arcane eye}, {@spell freedom of movement}"
              ],
              [
                "5th",
                "{@spell modify memory}"
              ]
            ]
          },
          "Your magic is meant to be subtle and undetectable, but it might pull shadows or clouds of mist around you as you cast your spells. Using the {@spell encode thoughts|GGR} cantrip described below, you can turn a creature's thoughts (including your own) into a thought strand that others can potentially read, share, or steal. These thought strands are treated as valuable currency among the Dimir."
        ]
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "Skilled at infiltration, disguise, and deception, members of House Dimir appear inscrutable. Your true personality and ideals might never manifest, or they might mark you as a quirky member of your secondary guild.",
          {
            "type": "table",
            "caption": "Personality Traits",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I'm good at hiding my true thoughts and feelings."
              ],
              [
                "2",
                "When I'm in doubt about revealing something, I assume it's a secret, and I don't share it."
              ],
              [
                "3",
                "I like to sound mysterious, because wisdom hidden grows deeper with time."
              ],
              [
                "4",
                "I have no patience with people who get in my way."
              ],
              [
                "5",
                "I love hearing about other people's nightmares."
              ],
              [
                "6",
                "Combat is meant to be quick, clean, and one-sided."
              ],
              [
                "7",
                "I like to stick to the shadows."
              ],
              [
                "8",
                "I never show my anger. I just plot my revenge."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Ideals",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "{@b Guild}. My true guild is all that really matters. (Any)"
              ],
              [
                "2",
                "{@b Control}. I like pulling the strings. (Lawful)"
              ],
              [
                "3",
                "{@b Secrets}. I collect secrets and never reveal them. (Any)"
              ],
              [
                "4",
                "{@b Knowledge}. I want to know as much as I can about this city and how it works. (Any)"
              ],
              [
                "5",
                "{@b Independence}. I value the freedom to pursue my own goals without interference. (Chaotic)"
              ],
              [
                "6",
                "{@b Nihilism}. I don't believe in anything, and anyone who does is a fool. (Neutral)"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Bonds",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I discovered a secret I can't let anyone else uncover—including my guild superiors."
              ],
              [
                "2",
                "I formed a close friendship or romance with someone in the guild I'm infiltrating."
              ],
              [
                "3",
                "The Dimir agent who recruited me was unmasked and killed. My revenge on the killers will be thorough and painful."
              ],
              [
                "4",
                "I spend as much time as I can in the Ismeri Library because I'm certain an information hub operates behind its facade. I want its secrets!"
              ],
              [
                "5",
                "I'm utterly loyal to my superior in the guild, more than to the guild or its guildmaster."
              ],
              [
                "6",
                "Someone has discovered my true identity."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Flaws",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I like secrets so much that I'm reluctant to share details of a plan even with those who need to know."
              ],
              [
                "2",
                "I would let my friends die rather than reveal my true identity."
              ],
              [
                "3",
                "I have trouble trusting anyone but myself."
              ],
              [
                "4",
                "I have a particular vice that puts all my secrets at risk if I'm not careful."
              ],
              [
                "5",
                "I'm pretty sure I've done something horrible that I can't remember because of the guild's mind magic."
              ],
              [
                "6",
                "I put too much trust in the people who give me orders."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Contacts",
        "entries": [
          "As an agent of House Dimir working undercover, you have limited contacts within your guild. Your relationships within your secondary guild, in the guise of your false identity, are usually more extensive.",
          "Roll once on the Dimir Contacts table, giving you an ally who serves as your contact in Dimir. Then roll twice on the table for your secondary guild. The first roll gives you an ally there, and the second roll gives you a rival.",
          {
            "type": "table",
            "caption": "Dimir Contacts",
            "colLabels": [
              "d8",
              "Contact"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I know a Dimir courier who relays messages to me from someone higher up the chain of command."
              ],
              [
                "2",
                "I get orders from a shapeshifter I recognize only through a series of code phrases we exchange."
              ],
              [
                "3",
                "An ostentatiously wealthy vampire is my secret guild superior, summoning me to a luxurious estate by means of coded messages."
              ],
              [
                "4",
                "I have never met my guild contact, but I receive telepathic messages, usually in my dreams."
              ],
              [
                "5",
                "I've never met my guild contact, but I get coded messages from a pattern of street lights and graffiti."
              ],
              [
                "6",
                "I didn't discover the identity of my guild contact until after we had begun a romantic relationship."
              ],
              [
                "7",
                "My superior maintains an elaborate identity as a young street urchin... unless it's all a lie, and I'm being sent on ridiculous missions by a twisted child."
              ],
              [
                "8",
                "My sibling and I both get telepathic orders from a mysterious contact, and I'm starting to question the authenticity of my sibling's orders."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "How Do I Fit In?",
        "entries": [
          "As a Dimir adventurer, you are a member of the guild's network of spies, thieves, assassins, and mind mages that lurks behind the facade of the public guild. On the surface, House Dimir presents the appearance of a network of couriers, investigators, media reporters, and archivists, dealing in information and spreading news. But you and your peers trade in secrets. You use secret symbols, runes, and signals to surreptitiously communicate with other Dimir agents, often in plain sight.",
          "Like any good spy, you have multiple identities: your true face as an agent of House Dimir; a guildless identity; and a role as a member of another guild. Within that secondary guild, you might already be on a mission for House Dimir, assigned to spy on the guild, collect information about a person, or recruit another spy from the ranks of the guild. Or that guild could be a launching point for your real mission. Perhaps, for example, you were ordered to infiltrate the Azorius in hopes of gaining access to a notorious inmate in an Azorius prison."
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Dragon Casualty",
    "source": "ALCurseOfStrahd",
    "page": 3,
    "skillProficiencies": [
      {
        "intimidation": true,
        "survival": true
      }
    ],
    "languageProficiencies": [
      {
        "draconic": true
      }
    ],
    "toolProficiencies": [
      {
        "vehicles (water)": true
      },
      {
        "anyArtisansTool": 1
      },
      {
        "choose": {
          "from": [
            "gaming set",
            "vehicles (land)"
          ]
        }
      },
      {
        "vehicles (land)": true
      },
      {
        "musical instrument": true
      },
      {
        "choose": {
          "from": [
            "alchemist's supplies",
            "herbalism kit"
          ]
        }
      },
      {
        "choose": {
          "from": [
            "thieves' tools",
            "forgery kit",
            "disguise kit"
          ]
        }
      },
      {
        "gaming set": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "dagger|phb",
          {
            "special": "tattered rags"
          },
          {
            "special": "loaf of moldy bread"
          },
          {
            "special": "small cast-off scale belonging to Vorgansharax—the Maimed Virulence"
          },
          {
            "item": "pouch|phb",
            "displayName": "pouch of various coins (salvaged during your escape from Phlan)",
            "containsValue": 500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Intimidation}, {@skill Survival}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "Special (see origin below)"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Draconic"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@item dagger|phb}, tattered rags, a loaf of moldy bread, a small cast-off scale belonging to Vorgansharax—the Maimed Virulence, and a {@item pouch|phb} with 5 gp of various coins (salvaged during your escape from Phlan)."
          }
        ]
      },
      {
        "name": "Lifestyle",
        "type": "entries",
        "entries": [
          "Wretched"
        ]
      },
      {
        "name": "Overview",
        "type": "entries",
        "entries": [
          "When the Maimed Virulence descended upon Phlan, you were one of the unfortunate casualties of war. Captured during the initial assault, you have spent the last year of your life as a plaything of a capricious and malevolent overlord.",
          "While many of your fellow prisoners fell to the dragon's insatiable fury over the coming months, you and your fellow \\"survivors\\" were spared only for a worse fate as one of the dragon's magical experiments, leaving you and those who survived the torture scarred and disfigured.",
          "What reasons the dragon had for releasing you few survivors, nobody knows. You only fear that those who died under his terrible claw were the lucky ones, and you and your fellow Dragonscarred are doomed for a fate worse than death."
        ]
      },
      {
        "name": "Origin",
        "type": "entries",
        "entries": [
          "Prior to the coordinated attack by the Maimed Virulence and her rebel Black Fist supporters, you were once a citizen or visitor to Phlan. While the trauma of your recent ordeal has greatly altered your motivations and perception of the world, your former life still clings to you and colors your mannerisms, behaviors, and outlook on life. Choose one entry on the following table (or roll randomly) to determine your former occupation prior to your incarceration and torture. Your choice determines your tool proficiency from this background.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Origin (Occupation)",
              "Tool Proficiency"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-5",
              "col-6"
            ],
            "rows": [
              [
                "1",
                "Dockworker/Fisherman",
                "{@filter Vehicles (water)|items|source=phb;dmg|miscellaneous=mundane|type=vehicle (water)}"
              ],
              [
                "2",
                "Tradesperson/Merchant",
                "{@filter Artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools}"
              ],
              [
                "3",
                "Black Fist Soldier",
                "{@filter Gaming set|items|source=phb|miscellaneous=mundane|type=gaming set} or {@filter Vehicles (land)|items|source=phb;dmg|miscellaneous=mundane|type=vehicle (land)}"
              ],
              [
                "4",
                "Adventurer/Visitor",
                "{@filter Vehicles (land)|items|source=phb;dmg|miscellaneous=mundane|type=vehicle (land)}"
              ],
              [
                "5",
                "Entertainer",
                "{@filter Musical Instrument|items|source=phb|miscellaneous=mundane|type=instrument}"
              ],
              [
                "6",
                "Scholar/Healer",
                "{@item Alchemist's Supplies|phb} or {@item Herbalism kit|phb}"
              ],
              [
                "7",
                "Criminal",
                "{@item thieves' tools|phb}, {@item forgery kit|phb}, or {@item Disguise kit|phb}"
              ],
              [
                "8",
                "Unskilled Laborer",
                "{@filter Gaming set|items|source=phb|miscellaneous=mundane|type=gaming set}"
              ]
            ]
          }
        ]
      },
      {
        "name": "Feature: Dragonscarred",
        "type": "entries",
        "entries": [
          "Over a period of several months you were subject to magical and mundane torture at the claws of Vorgansharaxse and his minions. These experiments have left you horribly disfigured but mark you as a survivor of the Maimed Virulence. This affords you a measure of fame and notoriety, for those who know of your harrowing ordeal are keen to hear the tale personally but makes it difficult to disguise your appearance and hide from prying eyes.",
          "You can parlay this attention into access to people and places you might not otherwise have, for you and your companions. Nobles, scholars, mages, and those who seek to ferret out the secrets of the Maimed Virulence would all be keen to hear your tale of survival, and learn what secrets (if any) you might possess, and/or study your affliction with great interest. However, you fear that your afflictions are not completely mundane and that the Maimed Virulence may as yet have some nefarious reason for allowing your escape, as your scars burn with acidic fury and seem to writhe beneath your skin at times. Note: This feature is a variant of the Far Traveler feature."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Disfigurement (Optional)",
        "type": "entries",
        "entries": [
          "In addition to extensive scarring, you may choose one of the following options to represent your disfigurement. This disfigurement is purely cosmetic, misshapen, and horrific to look upon.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Disfigurement"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Small non-functional wing(s)."
              ],
              [
                "2",
                "Misshapen, wing-like membranes along one or both arms."
              ],
              [
                "3",
                "Elongated, claw-like hand(s)."
              ],
              [
                "4",
                "Elongated, claw-like feet."
              ],
              [
                "5",
                "Painful green scales randomly embedded in skin."
              ],
              [
                "6",
                "Bulbous, reptilian eye(s)."
              ],
              [
                "7",
                "Enlarged dorsal spines."
              ],
              [
                "8",
                "Hair replaced with small irregular spines."
              ]
            ]
          }
        ]
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I am driven to escape my past, and rarely stay in one place long."
              ],
              [
                "2",
                "I know secrets of the Maimed Virulence, but fear the harm that may befall me should others learn them."
              ],
              [
                "3",
                "Speaking of my ordeal helps sooth the still open wounds in my soul."
              ],
              [
                "4",
                "My former life is meaningless, and was ripped to shreds by the claws of Vorgansharax. All that matters now is what I do with the future."
              ],
              [
                "5",
                "I have faced the worst a dragon can deliver and survived. I am fearless, and my resolve unshakable."
              ],
              [
                "6",
                "I am haunted my tortured past, and wake at night screaming at half-remembered horrors."
              ],
              [
                "7",
                "I sleep with my back to a wall or tree, and a weapon within arm's reach."
              ],
              [
                "8",
                "I am slow to trust, but incredibly loyal to those who have earned it."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Survivor. No matter the cost, I will take any action necessary to survive. (Any)"
              ],
              [
                "2",
                "Independence. When in trouble, the only person I can rely on is myself. (Chaotic)"
              ],
              [
                "3",
                "Compassionate. I have suffered long at the hands of a Dragon, and take pity and compassion on the suffering of others. (Good)"
              ],
              [
                "4",
                "Secretive. I am withdrawn, and hide my monstrous appearance for fear of drawing unwanted attention. (Chaotic)"
              ],
              [
                "5",
                "Justice. I have been wronged, and will not allow the same fate to befall others. (Lawful)"
              ],
              [
                "6",
                "Sycophant. During my ordeal, I became a willing servant of the Maimed Virulence, and spy on his behalf. (Evil)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I have sworn vengeance on the Maimed Virulence and those that follow him."
              ],
              [
                "2",
                "I long to reunite with friends and family who may dwell among the Phlan Refugees, and protect them."
              ],
              [
                "3",
                "While a prisoner of the Maimed Virulence, I overheard rumors of an item or treasure the Dragon seeks. I will have that treasure for myself!"
              ],
              [
                "4",
                "I seek to reclaim and rebuild my former life to the best of my ability."
              ],
              [
                "5",
                "I have been reborn as a child of Vorgansharax. I will claim my birthright as his chosen heir and successor."
              ],
              [
                "6",
                "I attribute my survival to the work of the divine, and seek to prove myself worthy of the honor."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I have been touched with dragon-greed, and have a lust for wealth which can never be satisfied."
              ],
              [
                "2",
                "I secretly believe others are plotting to harm me."
              ],
              [
                "3",
                "I no longer enjoy the simple pleasures in life. Food is but ashes and bile in my throat."
              ],
              [
                "4",
                "Anyone who refuses to celebrate my celebrity does not deserve my company."
              ],
              [
                "5",
                "I am paranoid and overly suspicious of others. Anyone may be an agent of the Maimed Virulence."
              ],
              [
                "6",
                "Once I make up my mind, I follow my chosen course of action regardless of the consequences."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Earthspur Miner",
    "source": "ALElementalEvil",
    "page": 3,
    "skillProficiencies": [
      {
        "athletics": true,
        "survival": true
      }
    ],
    "languageProficiencies": [
      {
        "dwarvish": true,
        "undercommon": true
      }
    ],
    "startingEquipment": [
      {
        "a": [
          "shovel|phb"
        ],
        "b": [
          "miner's pick|phb"
        ]
      },
      {
        "_": [
          "block and tackle|phb",
          "climber's kit|phb",
          "common clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Athletics}, {@skill Survival}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Dwarvish and Undercommon "
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@item shovel|phb} or a {@item miner's pick|phb}, a {@item block and tackle|phb}, a {@item climber's kit|phb}, a set of {@item common clothes|phb}, and a belt {@item pouch|phb} containing 5 gp"
          }
        ]
      },
      {
        "name": "Lifestyle",
        "type": "entries",
        "entries": [
          "Poor"
        ]
      },
      {
        "name": "Overview",
        "type": "entries",
        "entries": [
          "You are a down-on your luck miner from the Earthspur Mountains who is no stranger to hardship. You have spent a great deal of time living among the dwarves, goliaths, and denizens of the Underdark that also work mines in the area. At this point, you're just as comfortable working underground as above. You know how to read a seam, dicker for supplies with the deep gnomes, party with dwarves, and find your way back to the surface afterwards. Unfortunately, you haven't struck it rich...yet. Although you've come to Mulmaster looking for work, the tall peaks and deep mines of the Earthspurs still call to you."
        ]
      },
      {
        "name": "Feature: Deep Miner",
        "type": "entries",
        "entries": [
          "You are used to navigating the deep places of the earth. You never get lost in caves or mines if you have either seen an accurate map of them or have been through them before. Furthermore, you are able to scrounge fresh water and food for yourself and as many as five other people each day if you are in a mine or natural caves. Note: This feature is a variant of the Outlander feature."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "entries": [
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Nothing bothers me for long."
              ],
              [
                "2",
                "I hate the horrors of the Underdark with a passion. They took my friends and family and almost got me."
              ],
              [
                "3",
                "Anything worth doing takes time and patience. I have learned to plan and wait for the things I want and to be patient to achieve my goals."
              ],
              [
                "4",
                "I can party with everyone. Whether with dwarves, or goliaths, or deep gnomes, I can find a way to have a good time."
              ],
              [
                "5",
                "I'd rather be mining. This is okay; mining is better."
              ],
              [
                "6",
                "I think that I will stumble upon great riches if I just keep looking."
              ],
              [
                "7",
                "People who don't work with their hands and who live in houses are soft and weak."
              ],
              [
                "8",
                "I wish I were more educated. I look up to people who are."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Generosity. The riches of the earth are to be shared by all. (Good)"
              ],
              [
                "2",
                "Greed. Gems and precious metals, I want them all for myself. (Evil)"
              ],
              [
                "3",
                "Mooch. Property, schmoperty. If I need it, I take and use it. If I don't, I leave it for someone else. (Chaotic)"
              ],
              [
                "4",
                "Boundaries. Everything and everyone has its prescribed place; I respect that and expect others to do the same. (Lawful)"
              ],
              [
                "5",
                "Let it Be. I don't meddle in the affairs of others if I can avoid it. They're none of my business. (Neutral)"
              ],
              [
                "6",
                "Materialist. I want riches to improve my life. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "The people of the Earthspur mines are my family. I will do anything to protect them."
              ],
              [
                "2",
                "A deep gnome saved my life when I was injured and alone. I owe his people a great debt."
              ],
              [
                "3",
                "I must behold and preserve the natural beauty of places below the earth."
              ],
              [
                "4",
                "Gems hold a special fascination for me, more than gold, land, magic, or power."
              ],
              [
                "5",
                "I want to explore new depths and scale new heights."
              ],
              [
                "6",
                "Someday I'm going to find the mother lode, then I'll spend the rest of my life in luxury."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I'm uncomfortable spending time under the open sky. I'd rather be indoors or underground."
              ],
              [
                "2",
                "I'm not used to being around other people much and sometimes get grouchy about it."
              ],
              [
                "3",
                "Good tools are more reliable than people. In a cave in, I would save a sturdy pick before a stranger."
              ],
              [
                "4",
                "I jealously guard my secrets, because I think others will take advantage of me if they learn what I know."
              ],
              [
                "5",
                "I am obsessed with getting rich. I always have a scheme brewing for making it big."
              ],
              [
                "6",
                "I'm afraid of the dark."
              ]
            ]
          }
        ],
        "name": "Suggested Characteristics"
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Entertainer",
    "source": "PHB",
    "page": 130,
    "skillProficiencies": [
      {
        "acrobatics": true,
        "performance": true
      }
    ],
    "toolProficiencies": [
      {
        "disguise kit": true,
        "musical instrument": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "equipmentType": "instrumentMusical"
          },
          {
            "special": "the favor of an admirer (love letter, lock of hair, or trinket)"
          },
          "costume clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Acrobatics}, {@skill Performance}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@item Disguise kit|phb}, one type of {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument} (one of your choice), the favor of an admirer (love letter, lock of hair, or trinket), {@item costume clothes|phb}, and a belt {@item pouch|phb} containing 15 gp"
          }
        ]
      },
      {
        "name": "Feature: By Popular Demand",
        "type": "entries",
        "entries": [
          "You can always find a place to perform, usually in an inn or tavern but possibly with a circus, at a theater, or even in a noble's court. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Specialty",
        "type": "entries",
        "entries": [
          "A good entertainer is versatile, spicing up every performance with a variety of different routines. Choose one to three routines or roll on the table below to define your expertise as an entertainer.",
          {
            "type": "table",
            "colLabels": [
              "d10",
              "Routines"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Actor"
              ],
              [
                "2",
                "Dancer"
              ],
              [
                "3",
                "Fire-eater"
              ],
              [
                "4",
                "Jester"
              ],
              [
                "5",
                "Juggler"
              ],
              [
                "6",
                "Instrumentalist"
              ],
              [
                "7",
                "Poet"
              ],
              [
                "8",
                "Singer"
              ],
              [
                "9",
                "Storyteller"
              ],
              [
                "10",
                "Tumbler"
              ]
            ]
          }
        ]
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "Successful entertainers have to be able to capture and hold an audience's attention, so they tend to have flamboyant or forceful personalities. They're inclined toward the romantic and often cling to high-minded ideals about the practice of art and the appreciation of beauty.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I know a story relevant to almost every situation."
              ],
              [
                "2",
                "Whenever I come to a new place, I collect local rumors and spread gossip."
              ],
              [
                "3",
                "I'm a hopeless romantic, always searching for that \\"special someone\\"."
              ],
              [
                "4",
                "Nobody stays angry at me or around me for long, since I can defuse any amount of tension."
              ],
              [
                "5",
                "I love a good insult, even one directed at me."
              ],
              [
                "6",
                "I get bitter if I'm not the center of attention."
              ],
              [
                "7",
                "I'll settle for nothing less than perfection."
              ],
              [
                "8",
                "I change my mood or my mind as quickly as I change key in a song."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Beauty. When I perform, I make the world better than it was. (Good)"
              ],
              [
                "2",
                "Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)"
              ],
              [
                "3",
                "Creativity. The world is in need of new ideas and bold action. (Chaotic)"
              ],
              [
                "4",
                "Greed. I'm only in it for the money and fame. (Evil)"
              ],
              [
                "5",
                "People. I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)"
              ],
              [
                "6",
                "Honesty. Art should reflect the soul; it should come from within and reveal who we really are. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "My instrument is my most treasured possession, and it reminds me of someone I love."
              ],
              [
                "2",
                "Someone stole my precious instrument, and someday I'll get it back."
              ],
              [
                "3",
                "I want to be famous, whatever it takes."
              ],
              [
                "4",
                "I idolize a hero of the old tales and measure my deeds against that person's."
              ],
              [
                "5",
                "I will do anything to prove myself superior to my hated rival."
              ],
              [
                "6",
                "I would do anything for the other members of my old troupe."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I'll do anything to win fame and renown."
              ],
              [
                "2",
                "I'm a sucker for a pretty face."
              ],
              [
                "3",
                "A scandal prevents me from ever going home again. That kind of trouble seems to follow me around."
              ],
              [
                "4",
                "I once satirized a noble who still wants my head. It was a mistake that I will likely repeat."
              ],
              [
                "5",
                "I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble."
              ],
              [
                "6",
                "Despite my best efforts, I am unreliable to my friends."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Faceless",
    "source": "BGDIA",
    "page": 203,
    "skillProficiencies": [
      {
        "deception": true,
        "intimidation": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "disguise kit": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "disguise kit|phb",
          "costume clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Deception}, {@skill Intimidation}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@item Disguise kit|phb}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "One of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "{@item Disguise kit|phb}, a {@item costume clothes|phb|costume}, a {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Faceless Persona",
        "entries": [
          "A faceless character adventures behind the mask of a public persona. This persona is as natural to them as their hidden, true face, but it disguises their identity. Roll on the Faceless Persona table to determine your persona, or work with the DM to create a persona that's unique to your character and suits the tone of your game.",
          {
            "type": "table",
            "caption": "",
            "colLabels": [
              "d10",
              "Faceless Persona"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                1,
                "A flamboyant spy or brigand"
              ],
              [
                2,
                "The incarnation of a nation or people"
              ],
              [
                3,
                "A scoundrel with a masked guise"
              ],
              [
                4,
                "A vengeful spirit"
              ],
              [
                5,
                "The manifestation of a deity or your faith"
              ],
              [
                6,
                "One whose beauty is greatly accented using makeup"
              ],
              [
                7,
                "An impersonation of another hero"
              ],
              [
                8,
                "The embodiment of a school of magic"
              ],
              [
                9,
                "A warrior with distinctive armor"
              ],
              [
                10,
                "A disguise with animalistic or monstrous characteristics, meant to inspire fear"
              ]
            ]
          }
        ]
      },
      {
        "name": "Feature: Dual Personalities",
        "type": "entries",
        "entries": [
          "Most of your fellow adventurers and the world know you as your persona. Those who seek to learn more about you—your weaknesses, your origins, your purpose—find themselves stymied by your disguise. Upon donning a disguise and behaving as your persona, you are unidentifiable as your true self. By removing your disguise and revealing your true face, you are no longer identifiable as your persona. This allows you to change appearances between your two personalities as often as you wish, using one to hide the other or serve as convenient camouflage. However, should someone realize the connection between your persona and your true self, your deception might lose its effectiveness."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "A faceless character usually plays their persona—the hero or extraordinary person they are every day. That's all a facade, though, or a part of them expressed to an extreme. To define a persona, feel free to choose characteristics from other backgrounds, particularly folk hero, hermit, or noble. For the person behind the persona, the one who truly strives to be faceless, consider a distinct set of faceless characteristics. As a result, those with this background have two sets of characteristics, one for their persona, and one for their faceless selves.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                1,
                "I'm earnest and uncommonly direct."
              ],
              [
                2,
                "I strive to have no personality—it's easier to forget what's hardly there."
              ],
              [
                3,
                "I treasure a memento of the person or instance that set me upon my path."
              ],
              [
                4,
                "I sleep just as much as I need to and on an unusual schedule."
              ],
              [
                5,
                "I think far ahead, a detachedness often mistaken for daydreaming."
              ],
              [
                6,
                "I cultivate a single obscure hobby or study and eagerly discuss it at length."
              ],
              [
                7,
                "I am ever learning how to be among others—when to stay quiet, when to laugh."
              ],
              [
                8,
                "I behave like an extreme opposite of my persona."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                1,
                "Justice. Place in society shouldn't determine one's access to what is right. (Good)"
              ],
              [
                2,
                "Security. Doing what must be done can't bring the innocent to harm. (Lawful)"
              ],
              [
                3,
                "Confusion. Deception is a weapon. Strike from where your foes won't expect. (Chaotic)"
              ],
              [
                4,
                "Infamy. My name will be a malediction, a curse that fulfills my will. (Evil)"
              ],
              [
                5,
                "Incorruptibility. Be a symbol, and leave your flawed being behind. (Any)"
              ],
              [
                6,
                "Anonymity. It's my deeds that should be remembered, not their instrument. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                1,
                "I do everything for my family. My first thought is keeping them safe."
              ],
              [
                2,
                "What I do, I do for the world. The people don't realize how much they need me."
              ],
              [
                3,
                "I've seen too many in need. I must not fail them as everyone else has."
              ],
              [
                4,
                "I stand in opposition, lest the wicked go unopposed."
              ],
              [
                5,
                "I am exceptional. I do this because no one else can, and no one can stop me."
              ],
              [
                6,
                "I do everything for those who were taken from me."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                1,
                "I am callous about death. It comes to us all eventually."
              ],
              [
                2,
                "I never make eye contact or hold it unflinchingly."
              ],
              [
                3,
                "I have no sense of humor. Laughing is uncomfortable and embarrassing."
              ],
              [
                4,
                "I overexert myself, sometimes needing to recuperate for a day or more."
              ],
              [
                5,
                "I think far ahead, a detachedness often mistaken for daydreaming."
              ],
              [
                6,
                "I see morality entirely in black and white."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Faction Agent",
    "source": "SCAG",
    "page": 147,
    "skillProficiencies": [
      {
        "insight": true,
        "choose": {
          "from": [
            "arcana",
            "animal handling",
            "deception",
            "history",
            "intimidation",
            "investigation",
            "medicine",
            "nature",
            "perception",
            "performance",
            "persuasion",
            "religion",
            "survival"
          ]
        }
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 2
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "special": "Badge or emblem of your faction"
          },
          {
            "special": "copy of a seminal faction text (or code-book for a covert faction)"
          },
          "common clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Insight} and one Intelligence, Wisdom, or Charisma skill of your choice, as appropriate to your faction"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Any two of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "Badge or emblem of your faction, a copy of a seminal faction text (or code-book for a covert faction), a set of {@item common clothes|phb}, and a {@item pouch|phb} containing 15 gp"
          }
        ]
      },
      {
        "name": "Feature: Safe Haven",
        "type": "entries",
        "entries": [
          "As a faction agent, you have access to a secret network of supporters and operatives who can provide assistance on your adventures. You know a set of secret signs and passwords you can use to identify such operatives, who can provide you with access to a hidden safe house, free room and board, or assistance in finding information. These agents never risk their lives for you or risk revealing their true identities."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "Use the tables for the {@background acolyte} background in the Player's Handbook as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity as a faction agent. (For instance, consider the words \\"faith\\" and \\"faction\\" to be interchangeable.)",
          "Your bond might be associated with other members of your faction, or a location or an object that is important to your faction. The ideal you strive for is probably in keeping with the tenets and principles of your faction, but might be more personal in nature."
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Failed Merchant",
    "source": "AI",
    "page": 49,
    "skillProficiencies": [
      {
        "investigation": true,
        "persuasion": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "anyArtisansTool": 1
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "equipmentType": "toolArtisan"
          },
          "merchant's scale|phb",
          "fine clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Investigation}, {@skill Persuasion}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Any one of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "One set of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools}, {@item merchant's scale|phb}, a set of {@item fine clothes|phb}, and a belt {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "name": "Feature: Supply Chain",
        "type": "entries",
        "entries": [
          "From your time as a merchant, you retain connections with wholesalers, suppliers, and other merchants and entrepreneurs. You can call upon these connections when looking for items or information."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "Being a merchant involved having a head for numbers, a strong personality, the ability to make deals with hostile adversaries, a strong sword arm to fight off bandits, and the intuition for knowing what people want and need. The art of business is the art of finding the best path to profit, and that path might be different with each transaction. It takes a strong mind and a stronger stomach to succeed. So why did you fail?",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I didn't have the cutthroat attitude necessary to succeed. I won't make that mistake again."
              ],
              [
                "2",
                "Even my competitors said I was affable and talented. Those traits should serve me well."
              ],
              [
                "3",
                "To prosper, you have to be in control."
              ],
              [
                "4",
                "The customer is always right."
              ],
              [
                "5",
                "I was cutting corners and breaking deals to maximize profit. That's why I failed."
              ],
              [
                "6",
                "When I get an idea, I am single-minded in its execution—even if it's a terrible idea."
              ],
              [
                "7",
                "If I can be everyone's friend, I'll always have support."
              ],
              [
                "8",
                "My heart wasn't in being a merchant, so I failed. I'm not all that keen on adventuring either, but I need the money."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Survival. Where there's life, there's hope. If I remain alive and flexible, I can succeed. (Any)"
              ],
              [
                "2",
                "Generosity. People helped me when I was down. Now that I'm back on my feet, I'll pay it forward. (Good)"
              ],
              [
                "3",
                "Excitement. Caution got me nowhere in my previous business. I'm not going to let it hold me back now. (Chaotic)"
              ],
              [
                "4",
                "Wealth. With enough coin, I can buy comfort, power, knowledge, and even eternal life. Nothing will stand between me and money. (Evil)"
              ],
              [
                "5",
                "Stability. The mercantile trade was too chaotic for me. I need a nice stable profession, like adventuring. (Lawful)"
              ],
              [
                "6",
                "Redemption. Too many people consider me a failure. So I need to prove them wrong. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "My family means everything to me. I failed them before, and I must not do so again."
              ],
              [
                "2",
                "My church provides a connection to my god, so I must ensure that it is protected and funded."
              ],
              [
                "3",
                "My former business partner fell ill, and then our business failed. Part of my new venture involves earning enough to take care of their family."
              ],
              [
                "4",
                "If I take care of my possessions, they'll take care of me. People come and go, but a weapon or a wand is something you can always rely on."
              ],
              [
                "5",
                "Although my business failed, the people of my community were kind to me. I'll do everything in my power to protect them."
              ],
              [
                "6",
                "I owe a dangerous person a lot of money. As long as they're happy, they let my debt rest unpaid."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Why spend gold here when you can buy the same thing for copper in the next town?"
              ],
              [
                "2",
                "I must have the best of everything. Like, right now."
              ],
              [
                "3",
                "You haven't heard of me? I'm sure that's because of your ignorance and low breeding."
              ],
              [
                "4",
                "I failed, but I'm awesome. So when anyone else is successful, it must be because of nepotism, dishonesty, or dumb luck."
              ],
              [
                "5",
                "I find that most people are trustworthy. Hey, where's my belt pouch?"
              ],
              [
                "6",
                "Nothing gets between me and danger except my fellow adventurers. So I'll be sure to put them there."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Far Traveler",
    "source": "SCAG",
    "page": 148,
    "skillProficiencies": [
      {
        "insight": true,
        "perception": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "choose": {
          "from": [
            "musical instrument",
            "gaming set"
          ]
        }
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "traveler's clothes|phb",
          {
            "special": "poorly wrought maps from your homeland that depict where you are in Faerûn"
          },
          {
            "special": "small piece of jewelry in the style of your homeland's craftsmanship",
            "worthValue": 1000
          },
          {
            "item": "pouch|phb",
            "containsValue": 500
          }
        ]
      },
      {
        "a": [
          {
            "equipmentType": "instrumentMusical"
          }
        ],
        "b": [
          {
            "equipmentType": "setGaming"
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Insight}, {@skill Perception}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "Any one {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument} or {@filter gaming set|items|source=phb|miscellaneous=mundane|type=gaming set} of your choice, likely something native to your homeland"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Any one of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "One set of {@item traveler's clothes|phb}, any one {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument} or {@filter gaming set|items|source=phb|miscellaneous=mundane|type=gaming set} you are proficient with, poorly wrought maps from your homeland that depict where you are in Faerûn, a small piece of jewelry worth 10 gp in the style of your homeland's craftsmanship, and a {@item pouch|phb} containing 5 gp"
          }
        ]
      },
      {
        "name": "Feature: All Eyes on You",
        "type": "entries",
        "entries": [
          "Your accent, mannerisms, figures of speech, and perhaps even your appearance all mark you as foreign. Curious glances are directed your way wherever you go, which can be a nuisance, but you also gain the friendly interest of scholars and others intrigued by far-off lands, to say nothing of everyday folk who are eager to hear stories of your homeland.",
          "You can parley this attention into access to people and places you might not otherwise have, for you and your traveling companions. Noble lords, scholars, and merchant princes, to name a few, might be interested in hearing about your distant homeland and people."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Why Are You Here?",
        "type": "entries",
        "entries": [
          "A far traveler might have set out on a journey for one of a number of reasons, and the departure from his or her homeland could have been voluntary or involuntary. To determine why you are so far from home, roll on the table below or choose from the options provided. The following section, discussing possible homelands, includes some suggested reasons that are appropriate for each location.",
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Reason"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Emissary"
              ],
              [
                "2",
                "Exile"
              ],
              [
                "3",
                "Fugitive"
              ],
              [
                "4",
                "Pilgrim"
              ],
              [
                "5",
                "Sightseer"
              ],
              [
                "6",
                "Wanderer"
              ]
            ]
          }
        ]
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I have different assumptions from those around me concerning personal space, blithely invading others' space in innocence, or reacting to ignorant invasion of my own."
              ],
              [
                "2",
                "I have my own ideas about what is and is not food, and I find the eating habits of those around me fascinating, confusing, or revolting."
              ],
              [
                "3",
                "I have a strong code of honor or sense of propriety that others don't comprehend."
              ],
              [
                "4",
                "I express affection or contempt in ways that are unfamiliar to others."
              ],
              [
                "5",
                "I honor my deities through practices that are foreign to this land."
              ],
              [
                "6",
                "I begin or end my day with small traditional rituals that are unfamiliar to those around me."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Open. I have much to learn from the kindly folk I meet along my way. (Good)"
              ],
              [
                "2",
                "Reserved. As someone new to these strange lands, I am cautious and respectful in my dealings. (Lawful)"
              ],
              [
                "3",
                "Adventure. I'm far from home, and everything is strange and wonderful! (Chaotic)"
              ],
              [
                "4",
                "Cunning. Though I may not know their ways, neither do they know mine, which can be to my advantage. (Evil)"
              ],
              [
                "5",
                "Inquisitive. Everything is new, but I have a thirst to learn. (Neutral)"
              ],
              [
                "6",
                "Suspicious. I must be careful, for I have no way of telling friend from foe here. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "So long as I have this token from my homeland, I can face any adversity in this strange land."
              ],
              [
                "2",
                "The gods of my people are a comfort to me so far away from home."
              ],
              [
                "3",
                "I hold no greater cause than my service to my people."
              ],
              [
                "4",
                "My freedom is my most precious possession. I'll never let anyone take it from me again."
              ],
              [
                "5",
                "I'm fascinated by the beauty and wonder of this new land."
              ],
              [
                "6",
                "Though I had no choice, I lament having to leave my loved one(s) behind. I hope to see them again one day."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I am secretly (or not so secretly) convinced of the superiority of my own culture over that of this foreign land."
              ],
              [
                "2",
                "I pretend not to understand the local language in order to avoid interactions I would rather not have."
              ],
              [
                "3",
                "I have a weakness for the new intoxicants and other pleasures of this land."
              ],
              [
                "4",
                "I don't take kindly to some of the actions and motivations of the people of this land, because these folks are different from me."
              ],
              [
                "5",
                "I consider the adherents of other gods to be deluded innocents at best, or ignorant fools at worst."
              ],
              [
                "6",
                "I have a weakness for the exotic beauty of the people of these lands."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Feylost",
    "source": "WBtW",
    "page": 9,
    "skillProficiencies": [
      {
        "deception": true,
        "survival": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1,
        "choose": {
          "from": [
            "elvish",
            "gnomish",
            "goblin",
            "sylvan"
          ]
        }
      }
    ],
    "toolProficiencies": [
      {
        "musical instrument": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "equipmentType": "instrumentMusical"
          },
          "traveler's clothes|phb",
          {
            "item": "feywild trinket|wbtw",
            "quantity": 3
          },
          {
            "item": "pouch|phb",
            "containsValue": 800
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Deception}, {@skill Survival}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "One of your choice of {@language Elvish}, {@language Gnomish}, {@language Goblin}, or {@language Sylvan}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument} (one of your choice), a {@item Traveler's Clothes|PHB|set of traveler's clothes}, three trinkets (each determined by rolling on the {@item Feywild Trinket|WBtW|Feywild Trinkets} table), and a {@item pouch|phb} containing 8 gp"
          }
        ]
      },
      {
        "name": "Feature: Feywild Connection",
        "type": "entries",
        "entries": [
          "Your mannerisms and knowledge of fey customs are recognized by natives of the Feywild, who see you as one of their own. Because of this, friendly Fey creatures are inclined to come to your aid if you are lost or need help in the Feywild."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Fey Mark",
        "entries": [
          "You were transformed in some small way by your stay in the Feywild and gained a fey mark, determined by rolling on the Fey Mark table.",
          {
            "type": "table",
            "caption": "Fey Mark",
            "colLabels": [
              "d8",
              "Fey Mark"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Your eyes swirl with iridescent colors."
              ],
              [
                "2",
                "You have a sweet scent, like that of nectar or honey."
              ],
              [
                "3",
                "You have long whiskers like those of a cat."
              ],
              [
                "4",
                "Your ears are covered with soft tufts of fur."
              ],
              [
                "5",
                "Your skin sparkles in moonlight."
              ],
              [
                "6",
                "Flowers either bloom or wilt (your choice) in your presence."
              ],
              [
                "7",
                "Your hair is made of vines or brambles and grows back to normal length within 1 hour of being cut."
              ],
              [
                "8",
                "You have a tail like that of a dog or another animal."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feywild Visitor",
        "entries": [
          "Whenever you're sound asleep or in a deep trance during a long rest, a spirit of the Feywild might pay you a visit, if the DM wishes it. Determine the spirit's form by rolling on the Feywild Visitor table. No harm ever comes to you as a result of such visits, which can last for minutes or hours, and you remember each visit when you wake up. Conversations that occur with a visitor can contain any number of things, from messages and insights to nonsense and red herrings, at the DM's discretion. Such conversations are always conducted in a language you can understand, even if the Feywild visitor can't speak that language normally.",
          {
            "type": "table",
            "caption": "Feywild Visitor",
            "colLabels": [
              "d8",
              "Visitor"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Awakened creature (a Beast or an ordinary plant that has had the {@spell awaken} spell cast on it)"
              ],
              [
                "2",
                "{@creature Centaur}"
              ],
              [
                "3",
                "{@creature Dryad}"
              ],
              [
                "4",
                "{@creature Faerie Dragon (Violet)||Faerie dragon}"
              ],
              [
                "5",
                "{@creature Pixie}"
              ],
              [
                "6",
                "{@creature Satyr}"
              ],
              [
                "7",
                "{@creature Sprite}"
              ],
              [
                "8",
                "{@creature Unicorn}"
              ]
            ]
          }
        ]
      },
      {
        "type": "section",
        "name": "Character Traits",
        "entries": [
          "As the players choose backgrounds for their characters, they can use the following tables to help determine their characters' personality traits, ideals, bonds, and flaws. Players can use these tables instead of the ones that appear in the {@book Player's Handbook|PHB}, or they can mix and match them. If a rolled result doesn't make sense for a character, the player can roll again or choose a more appropriate entry on the table.",
          "These tables, while optional, are well suited to Feywild-themed adventures and are ideal for any character who has the feylost or Witchlight hand background.",
          {
            "type": "table",
            "caption": "Personality Traits",
            "colLabels": [
              "d8",
              "Trait"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I'm haunted by fey laughter that only I can hear, though I know it's just my mind playing tricks on me."
              ],
              [
                "2",
                "Like a nomad, I can't settle down in one place for very long."
              ],
              [
                "3",
                "Good music makes me weep like a baby."
              ],
              [
                "4",
                "Wherever I go, I try to bring a little of the warmth and tranquility of home with me."
              ],
              [
                "5",
                "I have never lost my childlike sense of wonder."
              ],
              [
                "6",
                "When I have a new idea, I get wildly excited about it until I come up with another, better idea."
              ],
              [
                "7",
                "I live by my own set of weird and wonderful rules."
              ],
              [
                "8",
                "I can't bring myself to trust most adults."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Ideals",
            "colLabels": [
              "d8",
              "Ideal"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Friendship. I never leave a friend behind. (Good)"
              ],
              [
                "2",
                "Empathy. No creature should be made to suffer. (Good)"
              ],
              [
                "3",
                "Wanderlust. I prefer to take the less traveled path. (Chaotic)"
              ],
              [
                "4",
                "Changeability. Change is good, which is why I live by an ever-changing set of rules. (Chaotic)"
              ],
              [
                "5",
                "Honor. A deal is a deal, and I would never break one. (Lawful)"
              ],
              [
                "6",
                "Rule of Three. Everything in the multiverse happens in threes. I see the \\"rule of three\\" everywhere. (Lawful)"
              ],
              [
                "7",
                "Obsession. I won't let go of a grudge. (Evil)"
              ],
              [
                "8",
                "Greed. I will do whatever it takes to get what I want, regardless of the harm it might cause. (Evil)"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Bonds",
            "colLabels": [
              "d8",
              "Bond"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I would never break my word."
              ],
              [
                "2",
                "I find magic in all its forms to be compelling. The more magical a place, the more I am drawn to it."
              ],
              [
                "3",
                "I do what I can to protect the natural world."
              ],
              [
                "4",
                "A trusted friend is the most important thing in the multiverse to me."
              ],
              [
                "5",
                "I can't bring myself to harm a Fey creature, either because I consider myself one or because I fear the repercussions."
              ],
              [
                "6",
                "The Witchlight Carnival feels like home to me."
              ],
              [
                "7",
                "I'm drawn to the Feywild and long to return there, if only for a short while."
              ],
              [
                "8",
                "I feel indebted to {@creature Mister Witch|WBtW} and {@creature Mister Light|WBtW} for giving me a home and a purpose."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Flaws",
            "colLabels": [
              "d8",
              "Flaw"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I easily lose track of time. My poor sense of time means I'm always late."
              ],
              [
                "2",
                "I think the whole multiverse is out to get me."
              ],
              [
                "3",
                "I'm always operating under a tight timeline, and I'm obsessed with keeping everything on schedule."
              ],
              [
                "4",
                "I'm a kleptomaniac who covets shiny, sparkling treasure."
              ],
              [
                "5",
                "I'm forgetful. Sometimes I can't remember even the simplest things."
              ],
              [
                "6",
                "I never give away anything for free and always expect something in return."
              ],
              [
                "7",
                "I have many vices and tend to indulge them."
              ],
              [
                "8",
                "I'm always changing my mind—well, almost always."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true,
    "hasFluffImages": true
  },
  {
    "name": "Fisher",
    "source": "GoS",
    "page": 29,
    "skillProficiencies": [
      {
        "history": true,
        "survival": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "fishing tackle|phb",
          "net|phb",
          "traveler's clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      },
      {
        "a": [
          {
            "special": "favorite fishing lure"
          }
        ],
        "b": [
          {
            "special": "oiled leather wading boots"
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill History}, {@skill Survival}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "One of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "{@item Fishing tackle|phb}, a {@item net|phb}, a favorite fishing lure or oiled leather wading boots, a set of {@item traveler's clothes|phb}, and a belt {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Harvest the Water",
        "entries": [
          "You gain advantage on ability checks made using fishing tackle. If you have access to a body of water that sustains marine life, you can maintain a moderate lifestyle while working as a fisher, and you can catch enough food to feed yourself and up to ten other people each day."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Fishing Tale",
        "entries": [
          "You can tell a compelling tale, whether tall or true, to impress and entertain others. Once a day, you can tell your story to willing listeners. At the DM's discretion, a number of those listeners become friendly toward you; this is not a magical effect, and continued amicability on their part depends on your actions. You can roll on the following table to help determine the theme of your tale or choose one that best fits your character. Alternatively, work with your DM to create your own fishing tale.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Tale"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Lobster Wrestling. You fought in hand-to-hand combat with an immense lobster."
              ],
              [
                "2",
                "It Dragged the Boat. You nearly caught a fish of monstrous size that pulled your boat for miles."
              ],
              [
                "3",
                "Fins of Pure Gold. You caught a sea animal whose fins were made of pure gold, but another fisher stole it."
              ],
              [
                "4",
                "Ghost Fish. You are haunted by a ghostly fish that only you can see."
              ],
              [
                "5",
                "Nemesis Clam. A large clam containing a pearl the size of your head claimed one of your fingers before jetting away; one day, you'll find that clam."
              ],
              [
                "6",
                "It Swallowed the Sun. You once saw a fish leap from the water and turn day into night."
              ],
              [
                "7",
                "Dive into the Abyss. You found yourself in an underwater cave leading to the Abyss, and your luck has been sour ever since."
              ],
              [
                "8",
                "Love Story. You fell in love with a creature of pure water, but your brief romance ended tragically."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "Fishers succeed only if they spend time at their jobs. As such, most fishers have a strong work ethic, and they admire others who earn their living honestly. Fishers tend to be superstitious, forming attachments to particular fishing lures or special fishing spots. They have a connection to the bodies of water in which they fish, and they think poorly of those whose actions adversely affect their livelihood.",
          {
            "type": "table",
            "caption": "Fisher Personality Traits",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I am unmoved by the wrath of nature."
              ],
              [
                "2",
                "My friends are my crew; we sink or float together."
              ],
              [
                "3",
                "I need long stretches of quiet to clear my head."
              ],
              [
                "4",
                "Rich folk don't know the satisfaction of hard work."
              ],
              [
                "5",
                "I laugh heartily, feel deeply, and fear nothing."
              ],
              [
                "6",
                "I work hard; nature offers no handouts."
              ],
              [
                "7",
                "I dislike bargaining; state your price and mean it."
              ],
              [
                "8",
                "Luck favors me, and I take risks others might not."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Fisher Ideals",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "{@b Camaraderie.} Good people make even the longest voyage bearable. (Good)"
              ],
              [
                "2",
                "{@b Luck.} Our luck depends on respecting its rules—now throw this salt over your shoulder. (Lawful)"
              ],
              [
                "3",
                "{@b Daring.} The richest bounty goes to those who risk everything. (Chaotic)"
              ],
              [
                "4",
                "{@b Plunder.} Take all that you can and leave nothing for the scavengers. (Evil)"
              ],
              [
                "5",
                "{@b Balance.} Do not fish the same spot twice in a row; suppress your greed, and nature will reward you. (Neutral)"
              ],
              [
                "6",
                "{@b Hard Work.} No wave can move a soul hard at work. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Fisher Bonds",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I lost something important in the deep sea, and I intend to find it."
              ],
              [
                "2",
                "Someone else's greed destroyed my livelihood, and I will be compensated."
              ],
              [
                "3",
                "I will fish the many famous waters of this land."
              ],
              [
                "4",
                "The gods saved me during a terrible storm, and I will honor their gift."
              ],
              [
                "5",
                "My destiny awaits me at the bottom of a particular pond in the Feywild."
              ],
              [
                "6",
                "I must repay my village's debt."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Fisher Flaws",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I am judgmental, especially of those I deem homebodies or otherwise lazy."
              ],
              [
                "2",
                "I become depressed and anxious if I'm away from the sea too long."
              ],
              [
                "3",
                "I have lived a hard life and find it difficult to empathize with others."
              ],
              [
                "4",
                "I am inclined to tell long-winded stories at inopportune times."
              ],
              [
                "5",
                "I work hard, but I play harder."
              ],
              [
                "6",
                "I am obsessed with catching an elusive aquatic beast, often to the detriment of other pursuits."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Folk Hero",
    "source": "PHB",
    "page": 131,
    "basicRules": true,
    "skillProficiencies": [
      {
        "animal handling": true,
        "survival": true
      }
    ],
    "toolProficiencies": [
      {
        "anyArtisansTool": 1,
        "vehicles (land)": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "equipmentType": "toolArtisan"
          },
          "shovel|phb",
          "iron pot|phb",
          "common clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Animal Handling}, {@skill Survival}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools}, {@filter vehicles (land)|items|source=phb;dmg|miscellaneous=mundane|type=vehicle (land)}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A set of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools} (one of your choice), a {@item shovel|phb}, an {@item iron pot|phb}, a set of {@item common clothes|phb}, and a belt {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "name": "Feature: Rustic Hospitality",
        "type": "entries",
        "entries": [
          "Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Specialty",
        "type": "entries",
        "entries": [
          "You previously pursued a simple profession among the peasantry, perhaps as a farmer, miner, servant, shepherd, woodcutter, or gravedigger. But something happened that set you on a different path and marked you for greater things. Choose or randomly determine a defining event that marked you as a hero of the people.",
          {
            "type": "table",
            "colLabels": [
              "d10",
              "Defining Event"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I stood up to a tyrant's agents."
              ],
              [
                "2",
                "I saved people during a natural disaster."
              ],
              [
                "3",
                "I stood alone against a terrible monster."
              ],
              [
                "4",
                "I stole from a corrupt merchant to help the poor."
              ],
              [
                "5",
                "I led a militia to fight off an invading army."
              ],
              [
                "6",
                "I broke into a tyrant's castle and stole weapons to arm the people."
              ],
              [
                "7",
                "I trained the peasantry to use farming implements as weapons against a tyrant's soldiers."
              ],
              [
                "8",
                "A lord rescinded an unpopular decree after I led a symbolic act of protest against it."
              ],
              [
                "9",
                "A celestial, fey, or similar creature gave me a blessing or revealed my secret origin."
              ],
              [
                "10",
                "Recruited into a lord's army, I rose to leadership and was commended for my heroism."
              ]
            ]
          }
        ]
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "A folk hero is one of the common people, for better or for worse. Most folk heroes look on their humble origins as a virtue, not a shortcoming, and their home communities remain very important to them.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I judge people by their actions, not their words."
              ],
              [
                "2",
                "If someone is in trouble, I'm always ready to lend help."
              ],
              [
                "3",
                "When I set my mind to something, I follow through no matter what gets in my way."
              ],
              [
                "4",
                "I have a strong sense of fair play and always try to find the most equitable solution to arguments."
              ],
              [
                "5",
                "I'm confident in my own abilities and do what I can to instill confidence in others."
              ],
              [
                "6",
                "Thinking is for other people. I prefer action."
              ],
              [
                "7",
                "I misuse long words in an attempt to sound smarter."
              ],
              [
                "8",
                "I get bored easily. When am I going to get on with my destiny?"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Respect. People deserve to be treated with dignity and respect. (Good)"
              ],
              [
                "2",
                "Fairness. No one should get preferential treatment before the law, and no one is above the law. (Lawful)"
              ],
              [
                "3",
                "Freedom. Tyrants must not be allowed to oppress the people. (Chaotic)"
              ],
              [
                "4",
                "Might. If I become strong, I can take what I want—what I deserve. (Evil)"
              ],
              [
                "5",
                "Sincerity. There's no good in pretending to be something I'm not. (Neutral)"
              ],
              [
                "6",
                "Destiny. Nothing and no one can steer me away from my higher calling. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I have a family, but I have no idea where they are. One day, I hope to see them again."
              ],
              [
                "2",
                "I worked the land, I love the land, and I will protect the land."
              ],
              [
                "3",
                "A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter."
              ],
              [
                "4",
                "My tools are symbols of my past life, and I carry them so that I will never forget my roots."
              ],
              [
                "5",
                "I protect those who cannot protect themselves."
              ],
              [
                "6",
                "I wish my childhood sweetheart had come with me to pursue my destiny."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "The tyrant who rules my land will stop at nothing to see me killed."
              ],
              [
                "2",
                "I'm convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure."
              ],
              [
                "3",
                "The people who knew me when I was young know my shameful secret, so I can never go home again."
              ],
              [
                "4",
                "I have a weakness for the vices of the city, especially hard drink."
              ],
              [
                "5",
                "Secretly, I believe that things would be better if I were a tyrant lording over the land."
              ],
              [
                "6",
                "I have trouble trusting in my allies."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Gambler",
    "source": "AI",
    "page": 49,
    "skillProficiencies": [
      {
        "deception": true,
        "insight": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "gaming set": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "equipmentType": "setGaming"
          },
          {
            "special": "lucky charm"
          },
          "fine clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Deception}, {@skill Insight}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One {@filter gaming set|items|source=phb|miscellaneous=mundane|type=gaming set}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Any one of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "One {@filter gaming set|items|source=phb|miscellaneous=mundane|type=gaming set}, a lucky charm, a set of {@item fine clothes|phb}, and a belt {@item pouch|phb} containing 15 gp"
          }
        ]
      },
      {
        "name": "Feature: Never Tell Me the Odds",
        "type": "entries",
        "entries": [
          "Odds and probability are your bread and butter. During downtime activities that involve games of chance or figuring odds on the best plan, you can get a solid sense of which choice is likely the best one and which opportunities seem too good to be true, at the DM's determination."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "Some gamble out of necessity. Others do so out of boredom. Still others become addicted to the thrill of winning or losing everything on a turn of fortune. For some, gambling is less a matter of chance and more a matter of seeking every advantage to ensure the outcome. The best gamblers can lose everything, and the worst gamblers sometimes win. Regardless, you can always tell gamblers by the look in their eyes. Lady Luck haunts them.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I plan for every contingency. Leave nothing to chance!"
              ],
              [
                "2",
                "Every copper wants to be a silver. Each bet is an opportunity."
              ],
              [
                "3",
                "I'm one of Lady Luck's favored. Anything I try is destined to succeed."
              ],
              [
                "4",
                "I've lost so much to gambling that I refuse to spend money on anything anymore."
              ],
              [
                "5",
                "Nothing is certain. Planning is a coward's act."
              ],
              [
                "6",
                "I can't be sure who I've swindled, cheated, or defeated, so I keep a low profile in public."
              ],
              [
                "7",
                "The perfect bet is out there somewhere. I just have to keep my eyes open."
              ],
              [
                "8",
                "I have beaten my addiction, but all it takes is one weak moment and I'll be back at the card table."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Knowledge. Knowledge is power, and knowing which horse to back is the key to success. (Any)"
              ],
              [
                "2",
                "Fate. Whatever happens is fated, regardless of any planning or striving. (Lawful)"
              ],
              [
                "3",
                "Bravery. If you want to succeed, you have to take risks. (Chaotic)"
              ],
              [
                "4",
                "Survival. You can't win if you're dead. Live to fight another day—when the odds might be more in your favor. (Any)"
              ],
              [
                "5",
                "Reliability. When I was in need, I was able to rely on others. Now I want to be the one others rely on. (Good)"
              ],
              [
                "6",
                "Victory. Winning is the real measure of a person. In the end, the only thing that matters is the scoreboard. (Evil)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "One person in particular owes me a lot of money, and I need to keep them alive if I want to be repaid."
              ],
              [
                "2",
                "I'm loyal to the friend or family member who taught me how to gamble."
              ],
              [
                "3",
                "The person who saved me from my gambling addiction is the only reason I'm alive today."
              ],
              [
                "4",
                "A patron once fronted me money in exchange for a percentage of my winnings. I owe them a debt of gratitude. And a lot of cash."
              ],
              [
                "5",
                "A criminal syndicate I once played for isn't happy I left the game, and its enforcers are looking for me."
              ],
              [
                "6",
                "Urchins once helped me find marks for my games. Now I'm driven to help them escape the streets."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I don't know when to quit. Especially when everyone else is telling me to."
              ],
              [
                "2",
                "I save my sympathy for my friends, and I have no friends."
              ],
              [
                "3",
                "You think we're in trouble now? Let me tell you how bad things are likely to get!"
              ],
              [
                "4",
                "You can loan me a little, right? I've got a sure thing. I'll double your money, guaranteed."
              ],
              [
                "5",
                "I was once a terribly flawed person, like you. Let me tell you how you can save yourself."
              ],
              [
                "6",
                "I'm a great gambler. I'm just bad at math and logic."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Gate Urchin",
    "source": "ALRageOfDemons",
    "page": 6,
    "skillProficiencies": [
      {
        "deception": true,
        "sleight of hand": true
      }
    ],
    "toolProficiencies": [
      {
        "thieves' tools": true,
        "musical instrument": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "special": "battered alms box"
          },
          {
            "equipmentType": "instrumentMusical"
          },
          "common clothes|phb",
          {
            "item": "pouch|phb",
            "displayName": "belt pouch"
          },
          {
            "value": 1000
          }
        ]
      },
      {
        "a": [
          {
            "special": "cast-off military jacket"
          }
        ],
        "b": [
          {
            "special": "cap"
          }
        ],
        "c": [
          {
            "special": "scarf"
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Deception}, {@skill Sleight of Hand}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@item Thieves' tools|phb}, one type of {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A battered alms box, a {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument}, a cast-off military jacket, cap, or scarf, a set of {@item common clothes|phb}, a belt {@item pouch|phb}, and 10 gp"
          }
        ]
      },
      {
        "name": "Lifestyle",
        "type": "entries",
        "entries": [
          "Poor"
        ]
      },
      {
        "name": "Overview",
        "type": "entries",
        "entries": [
          "All traffic into and out of the City of Trade passes through the Hillsfar Gate, making it the ideal place for the destitute to gather to panhandle, busk, gossip, and pick pockets. You grew up on the streets in the shadow of that great steel edifice, which houses both Red Plumes and Guild Mages. Though you may have moved on, you still have friends among them, and that life has had a lasting impact on you."
        ]
      },
      {
        "name": "Feature: Red Plume and Mage Guild Contacts",
        "type": "entries",
        "entries": [
          "You made a number of friends among the Red Plumes and the Mage's Guild when you lived at the Hillsfar Gate. They remember you fondly and help you in little ways when they can. You can invoke their assistance in and around Hillsfar to obtain food, as well as simple equipment for temporary use. You can also invoke it to gain access to the low-security areas of their garrisons, halls, and encampments. Note: This feature is a variant of the Soldier feature."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "entries": [
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I appreciate the simple things in life. a song, a warm meal, a sunny day. I don't need any more."
              ],
              [
                "2",
                "My problems are always caused by others. I'm never to blame."
              ],
              [
                "3",
                "I am afraid I could wind up back on the streets any day."
              ],
              [
                "4",
                "I get along with everyone."
              ],
              [
                "5",
                "I see people as marks for a con and have difficulty feeling true empathy for them."
              ],
              [
                "6",
                "I have a real flair for matchmaking. I can find anyone a spouse!"
              ],
              [
                "7",
                "I think money is the true measure of appreciation and affection. Everything else is talk or an act."
              ],
              [
                "8",
                "I don't like having a lot of stuff, just a few simple things I need. I don't like being tied down and tend to leave things behind when I don't need them anymore."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Loyal. I never rat out any of my friends, even when the Red Plumes or the Rogues Guild ask. (Lawful)"
              ],
              [
                "2",
                "Adventurous. I don't like doing the same thing every day. I crave variety. (Chaotic)"
              ],
              [
                "3",
                "Strong. Only the strong survive. I respect those who are strong and powerful. (Any)"
              ],
              [
                "4",
                "Witty. Brains are better than brawn. I rely on my wits and respect others who do the same. (Any)"
              ],
              [
                "5",
                "Honest. Others can do what they want, but I won't lie or steal, even to feed my family. (Good)"
              ],
              [
                "6",
                "Ungrateful. Those who give, only do it to make themselves feel better. I steal from them. (Evil)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "The Joydancers of Lliira gave me my instrument when I really needed food. I hate them for that."
              ],
              [
                "2",
                "Busking has taught me to love music above all else."
              ],
              [
                "3",
                "The Rogues Guild spared me when I did a job without cutting them in. I owe them a great debt."
              ],
              [
                "4",
                "I know people hate the Red Plumes, but some of them were really good to me. I help Red Plumes whenever I can, and I respect them. They're just doing what they have to do to get by in this world."
              ],
              [
                "5",
                "I will be wealthy some day. My descendants will live in comfort and style."
              ],
              [
                "6",
                "I know how hard life on the streets is. I do everything I can for those who have less than me."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Though I no longer live at the Gate, I am still always concerned about where I will get my next meal."
              ],
              [
                "2",
                "Years of thieving have become habit. I sometimes steal from strangers without thinking about it."
              ],
              [
                "3",
                "I am ashamed of my origins. I pretend I am higher-born and fear others will find out the truth."
              ],
              [
                "4",
                "I think people who grew up in houses are soft, spoiled, and ungrateful. I frequently tell them so."
              ],
              [
                "5",
                "I am still very uncomfortable wearing nice clothes, sleeping in a warm bed, and eating fine food."
              ],
              [
                "6",
                "I do not trust anyone who has not had a hard life. "
              ]
            ]
          }
        ],
        "name": "Suggested Characteristics"
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Gate Warden",
    "source": "SatO",
    "page": 7,
    "prerequisite": [
      {
        "campaign": [
          "Planescape"
        ]
      }
    ],
    "feats": [
      {
        "scion of the outer planes|sato": true
      }
    ],
    "skillProficiencies": [
      {
        "persuasion": true,
        "survival": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 2
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "special": "ring of keys to unknown locks"
          },
          {
            "item": "book|phb",
            "displayName": "blank book"
          },
          {
            "special": "bottle of black ink"
          },
          "traveler's clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      },
      {
        "a": [
          "ink pen|phb"
        ],
        "b": [
          {
            "special": "quill"
          }
        ]
      }
    ],
    "fromFeature": {
      "feats": true
    },
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Persuasion}, {@skill Survival}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Two of your choice (Abyssal, Celestial, or Infernal recommended)"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A ring of keys to unknown locks, a blank {@item book|PHB}, an {@item ink pen|PHB} or quill, a bottle of black ink, a set of {@item traveler's clothes|PHB}, and a {@item pouch|PHB} containing 10 gp"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Planar Infusion",
        "entries": [
          "Living in a gate-town or a similar location steeped you in planar energy. You gain the {@feat Scion of the Outer Planes|SatO} feat. In addition, you know where to find free, modest lodging and food in the community you grew up in."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "The influence of an Outer Plane shapes your perspective. The Gate Warden Personality Traits table suggests traits you might adopt for your character.",
          {
            "type": "table",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d6",
              "Personality Trait"
            ],
            "rows": [
              [
                "1",
                "Strange events and otherworldly creatures don't faze me."
              ],
              [
                "2",
                "I think in terms of exchange: something for something, nothing for nothing."
              ],
              [
                "3",
                "I speak with an unusual cadence."
              ],
              [
                "4",
                "I pepper my speech with words or curses borrowed from planar languages."
              ],
              [
                "5",
                "I've seen enough to know that you can't take anyone at face value, so I scrutinize everyone."
              ],
              [
                "6",
                "I have a superstitious habit I picked up from my gate-town, such as touching iron when I'm nervous or arranging objects in a specific order."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Building a Gate Warden Character",
        "entries": [
          "Those who dwell for an extended time near a permanent portal to another plane absorb the essence radiating from the realm beyond. Those influenced by the same plane share similarities in behavior and even physical appearance.",
          {
            "type": "entries",
            "name": "Gate Warden Trinkets",
            "entries": [
              "When you make your character, you can roll once on the {@item Gate Warden Trinket|SatO|Gate Warden Trinkets} table, instead of on the {@item Trinket|PHB|Trinkets} table in the Player's Handbook, for your starting trinket."
            ]
          }
        ]
      }
    ],
    "hasFluff": true,
    "hasFluffImages": true
  },
  {
    "name": "Giant Foundling",
    "source": "BGG",
    "page": 6,
    "feats": [
      {
        "strike of the giants|bgg": true
      }
    ],
    "skillProficiencies": [
      {
        "intimidation": true,
        "survival": true
      }
    ],
    "languageProficiencies": [
      {
        "giant": true,
        "anyStandard": 1
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "backpack|phb",
          "traveler's clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      },
      {
        "a": [
          {
            "special": "small stone that reminds you of home"
          }
        ],
        "b": [
          {
            "special": "sprig that reminds you of home"
          }
        ]
      }
    ],
    "fromFeature": {
      "feats": true
    },
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Intimidation}, {@skill Survival}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Giant and one other language of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@item backpack|phb}, a set of {@item traveler's clothes|phb}, a small stone or sprig that reminds you of home, and a {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Origin Stories",
        "entries": [
          "How you came to live among colossal creatures is up to you to determine, but the Foundling Origin table suggests a variety of possibilities.",
          {
            "type": "table",
            "caption": "Foundling Origin",
            "colLabels": [
              "d6",
              "Origin"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "You were found as a baby by a family of nomadic giants who raised you as one of their own."
              ],
              [
                "2",
                "A family of stone giants rescued you when you fell into a mountain chasm, and you have lived with them underground ever since."
              ],
              [
                "3",
                "You were lost or abandoned as a child in a jungle that teemed with ravenous dinosaurs. There, you found an equally lost frost giant; together, you survived."
              ],
              [
                "4",
                "Your farm was crushed and your family killed in a battle between warring groups of giants. Racked with guilt over the destruction, a sympathetic giant soldier promised to care for you."
              ],
              [
                "5",
                "After you had a series of strange dreams as a child, your superstitious parents sent you to study with a powerful but aloof storm giant oracle."
              ],
              [
                "6",
                "While playing hide-and-seek with your friends, you stumbled into the castle of a cloud giant, who immediately adopted you."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Building a Giant Foundling Character",
        "entries": [
          "Your life among giants has given you a unique perspective. Though you are unusually large for your kind, you're no larger than a giant child, so you might be very mindful of your size."
        ]
      },
      {
        "name": "Feature: Strike of the Giants",
        "type": "entries",
        "entries": [
          "You gain the {@feat Strike of the Giants|BGG} feat."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "The Giant Foundling Personality Traits table suggests a variety of traits you might adopt for your character.",
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Personality Trait"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "What I lack in stature compared to giants, I make up for with sheer spite."
              ],
              [
                "2",
                "I insist on being taken seriously as a full-grown adult. Nobody talks down to me!"
              ],
              [
                "3",
                "Crowded spaces make me uncomfortable. I'd much rather be in an open field than a bustling tavern."
              ],
              [
                "4",
                "I embrace my shorter stature. It helps me stay unnoticed—and underestimated."
              ],
              [
                "5",
                "Every avalanche begins as a single pebble."
              ],
              [
                "6",
                "The world always feels too big, and I'm afraid I'll never find my place in it."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true,
    "hasFluffImages": true
  },
  {
    "name": "Golgari Agent",
    "source": "GGR",
    "page": 53,
    "skillProficiencies": [
      {
        "nature": true,
        "survival": true
      }
    ],
    "languageProficiencies": [
      {
        "choose": {
          "from": [
            "elvish",
            "giant",
            "other"
          ]
        }
      }
    ],
    "toolProficiencies": [
      {
        "poisoner's kit": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "special": "Golgari insignia"
          },
          "poisoner's kit|phb",
          "common clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      },
      {
        "a": [
          {
            "special": "pet beetle"
          }
        ],
        "b": [
          {
            "special": "pet spider"
          }
        ]
      }
    ],
    "additionalSpells": [
      {
        "expanded": {
          "s0": [
            "dancing lights#c",
            "spare the dying#c"
          ],
          "s1": [
            "entangle",
            "ray of sickness"
          ],
          "s2": [
            "protection from poison",
            "ray of enfeeblement",
            "spider climb"
          ],
          "s3": [
            "animate dead",
            "plant growth"
          ],
          "s4": [
            "giant insect",
            "grasping vine"
          ],
          "s5": [
            "cloudkill",
            "insect plague"
          ]
        }
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Nature}, {@skill Survival}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@item Poisoner's kit|phb}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Choose one of Elvish, Giant, or Kraul"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A Golgari insignia, a {@item poisoner's kit|phb}, a pet beetle or spider, a set of {@item common clothes|phb}, and a belt {@item pouch|phb} containing 10 gp worth of mixed coins"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Undercity Paths",
        "entries": [
          "You know hidden, underground pathways that you can use to bypass crowds, obstacles, and observation as you move through the city. When you aren't in combat, you and companions you lead can travel between any two locations in the city twice as fast as your speed would normally allow. The paths of the undercity are haunted by dangers that rarely brave the light of the surface world, so your journey isn't guaranteed to be safe."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Golgari Guild Spells",
        "entries": [
          "{@i Prerequisite: Spellcasting or Pact Magic class feature}",
          "For you, the spells on the Golgari Guild Spells table are added to the spell list of your spellcasting class. (If you are a multiclass character with multiple spell lists, these spells are added to all of them.)",
          {
            "type": "table",
            "caption": "Golgari Guild Spells",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "Spell Level",
              "Spells"
            ],
            "rows": [
              [
                "Cantrip",
                "{@spell dancing lights}, {@spell spare the dying}"
              ],
              [
                "1st",
                "{@spell entangle}, {@spell ray of sickness}"
              ],
              [
                "2nd",
                "{@spell protection from poison}, {@spell ray of enfeeblement}, {@spell spider climb}"
              ],
              [
                "3rd",
                "{@spell animate dead}, {@spell plant growth}"
              ],
              [
                "4th",
                "{@spell giant insect}, {@spell grasping vine}"
              ],
              [
                "5th",
                "{@spell cloudkill}, {@spell insect plague}"
              ]
            ]
          },
          "Golgari magic is often accompanied by a sickly green glow and a rotting stench."
        ]
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "Members of the Golgari Swarm are unmistakably products of the undercity, ill at ease amid the comforts of civilization. They bring about the same discomfort in others by reminding them of death's inevitable approach.",
          {
            "type": "table",
            "caption": "Personality Traits",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Remember, I could kill you in your sleep. Or put centipedes in your bedroll."
              ],
              [
                "2",
                "I like to remind people of their inevitable demise."
              ],
              [
                "3",
                "Sometimes I give voice to the whispers of the rot, which I hear but no one else does."
              ],
              [
                "4",
                "I do my best to discourage anyone from approaching or talking to me."
              ],
              [
                "5",
                "I have accepted my death. Hence, I don't fear it."
              ],
              [
                "6",
                "Like roots growing through stone, I am relentless and determined in my action."
              ],
              [
                "7",
                "I put my knowledge of anatomy to use by narrating the injuries my enemies suffer in grisly detail."
              ],
              [
                "8",
                "Like a wild animal, I lash out viciously when I'm provoked—and I'm easily provoked."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Ideals",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "{@b Guild}. My guild is all that really matters. (Any)"
              ],
              [
                "2",
                "{@b Stoicism}. All of us are part of the cyclical march of nature, which will continue with or without us. (Neutral)"
              ],
              [
                "3",
                "{@b Nature}. The natural world is more important than the edifices of the city and civilization. (Neutral)"
              ],
              [
                "4",
                "{@b Interdependence}. We are all part of nature's web. (Lawful)"
              ],
              [
                "5",
                "{@b Ambition}. The time of Golgari ascendance is at hand, and I intend to have a prominent place in the new world order. (Evil)"
              ],
              [
                "6",
                "{@b Live and Let Live}. Meddling in the affairs of other guilds is a great way to get squashed like a bug. (Neutral)"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Bonds",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I cherish the finger of a family member who was {@condition petrified} by a medusa."
              ],
              [
                "2",
                "I have an identical twin who is as different from me as any person could be."
              ],
              [
                "3",
                "I want to lead one faction of the guild to a new position of dominance."
              ],
              [
                "4",
                "I love spending time in the moss-covered building where I took part in my first reclamation mission."
              ],
              [
                "5",
                "I found something in the sewer that must never come to light."
              ],
              [
                "6",
                "I am forever grateful to the reclaimer who found me floating facedown in the sewer, moments from death."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Flaws",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Death comes for us all, so you can't expect me to take care of someone who can't fight it off."
              ],
              [
                "2",
                "I assume that anyone outside the Golgari looks down on me."
              ],
              [
                "3",
                "I feel a need for revenge against those who enjoy the privilege of living above ground."
              ],
              [
                "4",
                "I don't bother to couch my opinions in flattering words."
              ],
              [
                "5",
                "I can't help but pocket any trinket or coin I come across, no matter how worthless."
              ],
              [
                "6",
                "I'm convinced that I'm better and stronger than members of other guilds, isolated as they are from the realities of life and death."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Contacts",
        "entries": [
          "To the extent that the Golgari Swarm acts like a single organism, you are connected to every other member in some way or another. Convinced that the rest of the world is out to get you, you find it easy to form close bonds with your guild mates, and harder to make meaningful connections with others.",
          "Roll twice on the Golgari Contacts table (for an ally and a rival) and once on the Non-Golgari Contacts table.",
          {
            "type": "table",
            "caption": "Golgari Contacts",
            "colLabels": [
              "d8",
              "Contact"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "One of my parents is an elite assassin, a member of the Ochran."
              ],
              [
                "2",
                "I learned combat from a kraul."
              ],
              [
                "3",
                "I know a medusa who is stationed in the guildhall."
              ],
              [
                "4",
                "I had a torrid romance with a spore druid responsible for a large rot farm."
              ],
              [
                "5",
                "There's a troll in a remote area of the undercity who seems to find me interesting—and who knows more than you'd think."
              ],
              [
                "6",
                "An elf lich is determined to see me become a lich someday, too."
              ],
              [
                "7",
                "A medusa decided it would be more fun to recruit me into the guild than to kill me."
              ],
              [
                "8",
                "I know a findbroker who can locate just about anything, for the right price."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Non-Golgari Contacts",
            "colLabels": [
              "d10",
              "Contact"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "An Azorius arrester I literally pulled out of the gutter will do anything for me."
              ],
              [
                "2",
                "Someone joined the Gruul in a battle against the Boros once, and the sergeant of that Boros squad would love to prove that it was me."
              ],
              [
                "3",
                "I had a romance with a Dimir agent whom I still feed secrets to."
              ],
              [
                "4",
                "Roll an additional Golgari contact; you can decide if the contact is an ally or a rival."
              ],
              [
                "5",
                "I joined the Gruul in a battle against the Boros once, and the chief of that small clan thanks me for turning the tide."
              ],
              [
                "6",
                "An Izzet scientist resents that I sold a scrapped invention I found in the sewer."
              ],
              [
                "7",
                "My undercity explorations led me into an Orzhov vault, and a spirit thinks I stole something valuable."
              ],
              [
                "8",
                "I found a baby beast and sold it to a Rakdos wrangler who remains grateful to me."
              ],
              [
                "9",
                "A Selesnya druid and I share an interest in the same garden, and we have enjoyable arguments there."
              ],
              [
                "10",
                "I regularly pick up refuse from beneath a Simic laboratory, and sometimes I talk to the researcher who dumps it there."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "How Do I Fit In?",
        "entries": [
          "As part of the Golgari Swarm, you are a specialized instrument of the greater body. Your orders, when you have such, come from the guildmaster by way of his chancellors, who carry his messages throughout the guild. The swarm relies on you to advance the greater good by protecting some part, however small, of its teeming existence. That responsibility doesn't mean you're indispensable; your eventual death is part of your purpose and function, too, and you'll be replaced even as your body provides nutrients to further the swarm's growth.",
          "A classic adventuring role for a member of the Golgari involves crawling through dungeon-like environments—the sewers and ancient vaults of the undercity—in search of treasures left behind by the dead. Sometimes you might be sent to find a specific item believed lost in a dangerous part of the undercity. At other times, you could be asked to collect samples of a specific fungus, retrieve a body floating in the muck of the sewers, or bring back whatever booty you can to help fill the swarm's coffers.",
          "You might gain enough renown to become a member of the Ochran, assigned to a variety of tasks concerning thievery, assassination, or the protection of important figures in your guild. You might steal something because the guild needs it, or because its loss will bring harm to another guild, hastening that group's decline. You could be assigned to kill an outspoken and active enemy of the Golgari, such as an overzealous Boros captain whose raids into the undercity have approached dangerously close to the swarm's inner sanctum. Or you could serve as a bodyguard to one of Guildmaster Jarad's high chancellors, escorting this figure through the undercity while being ready to intervene at a moment's notice if things go wrong.",
          "The shamans of the Golgari use their magic to accelerate the cycle of decay and regrowth. You might be sent to spread spores throughout an area that the Golgari want to claim as their territory or to convince the inhabitants of such a territory to abandon it. You might also contend with the ever-present threat of hostile monsters encroaching into Golgari-controlled regions."
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Grinner",
    "source": "EGW",
    "page": 200,
    "skillProficiencies": [
      {
        "deception": true,
        "performance": true
      }
    ],
    "toolProficiencies": [
      {
        "thieves' tools": true,
        "musical instrument": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "fine clothes|phb",
          "disguise kit|phb",
          {
            "equipmentType": "instrumentMusical"
          },
          {
            "special": "gold-plated ring depicting a smiling face"
          },
          {
            "item": "pouch|phb",
            "containsValue": 1500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Deception}, {@skill Performance}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument}, {@item thieves' tools|phb}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A set of {@item fine clothes|phb}, a {@item disguise kit|phb}, a {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument} of your choice, a gold-plated ring depicting a smiling face, and a {@item pouch|phb} containing 15 gp"
          }
        ]
      },
      {
        "name": "Feature: Ballad of the Grinning Fool",
        "type": "entries",
        "entries": [
          "Like every Grinner, you know how to find a hideout. In any city of 10,000 people or more on the Menagerie Coast or in the lands of the Dwendalian Empire, you can play the \\"Ballad of the Grinning Fool\\" in a major tavern or inn. A member of the Golden Grin will find you and give shelter to you and any companions you vouch for. This shelter might be discontinued if it becomes too dangerous to hide you, at the DM's discretion.",
          "This feature must be used with caution, for not all who know the ballad are your friends. Some are traitors, counterspies, or agents of tyranny."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "Grinners are trained in the art of secrecy and innuendo, and are skilled at hiding in plain sight by being the loudest and brightest person in the room. Their skills in subterfuge and combat lend themselves well to an adventuring lifestyle, and traveling with mercenaries and treasure hunters creates a convenient excuse to journey through lands bent under tyranny.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I love the spotlight. Everyone, look at me!"
              ],
              [
                "2",
                "Give me a drink and I'm your friend."
              ],
              [
                "3",
                "Talk to me about yourself. I'm a hell of a listener."
              ],
              [
                "4",
                "I hate to start fights, but I love to finish them."
              ],
              [
                "5",
                "I can't sit still."
              ],
              [
                "6",
                "I'm always humming an old tune from my past."
              ],
              [
                "7",
                "When I don't have a reason to smile, I'm miserable."
              ],
              [
                "8",
                "I'm lucky like you wouldn't believe."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Revolution. Tyrants must fall, no matter the cost. (Chaotic)"
              ],
              [
                "2",
                "Compassion. The only way to make a better world is to perform small kindnesses. (Good)"
              ],
              [
                "3",
                "Justice. A nation built upon just foundations will uphold freedom for all. (Law)"
              ],
              [
                "4",
                "Expression. Music, joy, and laughter are the keys to freedom. (Good)"
              ],
              [
                "5",
                "Self-Determination. People should be free to do as they please. (Chaotic)"
              ],
              [
                "6",
                "Vigilance. A free people must be carefully taught, lest they be misled. (Neutral)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I lost someone important to an agent of the Dwendalian Empire. That regime will fall."
              ],
              [
                "2",
                "The first people to be hurt by this war will be the common folk. I need to protect them."
              ],
              [
                "3",
                "Music helped me through a dark time in my life. Now, I'll use music to change the world."
              ],
              [
                "4",
                "I will be known as the greatest spy who ever lived."
              ],
              [
                "5",
                "All life is precious to me. I know I can change the world without taking a humanoid life."
              ],
              [
                "6",
                "The elite in their ivory towers don't understand how we suffer. I intend to show them."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I've never lied once in my life. What? No, I'm not crossing my fingers!"
              ],
              [
                "2",
                "I do everything big! Subtlety? I don't know the meaning of subtlety! Oh, that's a problem?"
              ],
              [
                "3",
                "Being a spy in wartime is painful. I've seen so much suffering, I think I'm losing my mind."
              ],
              [
                "4",
                "I can't focus on my mission. I just want to carouse and sing and play!"
              ],
              [
                "5",
                "Yeah, that's my name. Yeah, I'm a Grinner spy. Who cares about staying undercover?"
              ],
              [
                "6",
                "I can't afford to trust anyone. Not. Anyone."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true,
    "hasFluffImages": true
  },
  {
    "name": "Grounded",
    "source": "HWCS",
    "page": 44,
    "skillProficiencies": [
      {
        "athletics": true,
        "insight": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "artisan's tools": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "equipmentType": "toolArtisan"
          },
          {
            "special": "walking stick"
          },
          {
            "special": "trinket from another culture"
          },
          "traveler's clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies",
            "entry": "{@skill Athletics}, {@skill Insight}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies",
            "entry": "one type of {@filter Artisan's Tools|items|source=phb|miscellaneous=mundane|type=artisan's tools}"
          },
          {
            "type": "item",
            "name": "Languages",
            "entry": "one of your choice"
          },
          {
            "type": "item",
            "name": "Equipment",
            "entry": "a set of {@filter Artisan's Tools|items|source=phb|miscellaneous=mundane|type=artisan's tools} (your choice), a walking stick, a trinket from another culture, {@item traveler's clothes|phb|traveling clothes}, and a belt {@item pouch|phb} with 5 gp "
          }
        ]
      },
      {
        "name": "An Odd Bird",
        "type": "entries",
        "entries": [
          "Among birdfolk you are somewhere between an oddity and an outcast. Some consider your aversion to heights a rejection of birdfolk culture, leading many to find you off-putting. Choose how your community regards you or roll on the table below to determine how you fit in.",
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Community Place"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I am considered weak or unskilled and many treat me like a fledgling."
              ],
              [
                "2",
                "I am looked upon as a traitor to my people."
              ],
              [
                "3",
                "My family wants me to return to the perch, but I just can't."
              ],
              [
                "4",
                "I am not welcome back in my home perch."
              ],
              [
                "5",
                "I am viewed as an oddity, someone for others to laugh at and tease."
              ],
              [
                "6",
                "I have found a new community on the forest floor."
              ]
            ]
          }
        ]
      },
      {
        "name": "Feature: Find Another Path",
        "type": "entries",
        "entries": [
          "Since you have lived your life close to the ground, you are familiar with the undergrowth in the same way other birdfolk are familiar with the canopy. You can always recall the general layout of the terrain around you while traveling along the forest floor. If your path is ever blocked by an obstacle that requires you to climb or otherwise gain height to circumvent it, you can always find a way around, so long as such a path exists. Additionally, you are adept at finding shelter in the Wood while traveling, and can usually locate a suitable safe shelter (a cave, a tree hollow, or bramble thicket) somewhere on the forest floor for you and up to five other creatures."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "Birdfolk who are grounded often find ways to cope with their aversion to canopy life. Some have completely forsaken their old lives in favor of new ones in undergrowth communities, while others keep ties with family and friends in the perches where they were born.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I always second guess my choices."
              ],
              [
                "2",
                "I have learned to not let the comments of others affect me."
              ],
              [
                "3",
                "I'm eager to show the benefits of my unique perspective."
              ],
              [
                "4",
                "I'm slow to trust someone new, but open up over shared hardships."
              ],
              [
                "5",
                "I manufacture difficult situations to prove my abilities."
              ],
              [
                "6",
                "I get embarrassed easily, even when someone tries to compliment me."
              ],
              [
                "7",
                "I will deny my fears to everyone."
              ],
              [
                "8",
                "I want to see how others handle situations I'm afraid of."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Adversity. Others think of me as weak, but I will prove my worth with hard work and determination. (Lawful)"
              ],
              [
                "2",
                "Encouragement. I try to seek out and support others like me who are seen as outcasts. (Good)"
              ],
              [
                "3",
                "Exploration. I yearn to experience unique cultures and discover new places. (Chaotic)"
              ],
              [
                "4",
                "Safety. In this dangerous world, it's best to keep your head down and stay cautious. (Neutral)"
              ],
              [
                "5",
                "Rebellion. Who cares what others think of me, so long as my actions reflect how I feel in my heart? (Chaotic)"
              ],
              [
                "6",
                "Compromise. The best way to respect each other's differences is to find a solution that doesn't exclude anyone. (Good)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "My family has been the subject of ridicule ever since I left my home perch."
              ],
              [
                "2",
                "A bully from my childhood now holds a position of power in my home perch."
              ],
              [
                "3",
                "I follow the teachings of a wise outcast I met in my travels."
              ],
              [
                "4",
                "I feel kinship to a culture outside my own."
              ],
              [
                "5",
                "I won't tolerate anyone who insults me or my friends."
              ],
              [
                "6",
                "I have found a new family on the forest floor, and they mean more to me than anything."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I am incapable of action when I'm at great heights."
              ],
              [
                "2",
                "I lash out at the slightest insult."
              ],
              [
                "3",
                "I keep a distance from others so they won't learn of my fears."
              ],
              [
                "4",
                "I project my insecurities onto others."
              ],
              [
                "5",
                "I am uncouth and mannerless."
              ],
              [
                "6",
                "I find hard to trust other birdfolk."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Gruul Anarch",
    "source": "GGR",
    "page": 60,
    "skillProficiencies": [
      {
        "animal handling": true,
        "athletics": true
      }
    ],
    "languageProficiencies": [
      {
        "choose": {
          "from": [
            "draconic",
            "giant",
            "goblin",
            "sylvan"
          ]
        }
      }
    ],
    "toolProficiencies": [
      {
        "herbalism kit": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "special": "Gruul insignia"
          },
          "hunting trap|phb",
          "herbalism kit|phb",
          {
            "special": "the skull of a boar"
          },
          {
            "special": "beast-hide cloak"
          },
          "traveler's clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "additionalSpells": [
      {
        "expanded": {
          "s0": [
            "fire bolt#c",
            "produce flame#c"
          ],
          "s1": [
            "compelled duel",
            "speak with animals",
            "thunderwave"
          ],
          "s2": [
            "beast sense",
            "shatter"
          ],
          "s3": [
            "conjure animals",
            "conjure barrage"
          ],
          "s4": [
            "dominate beast",
            "stoneskin"
          ],
          "s5": [
            "destructive wave"
          ]
        }
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Animal Handling}, {@skill Athletics}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@item Herbalism kit|phb}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Choose one of Draconic, Giant, Goblin, or Sylvan"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A Gruul insignia, a {@item hunting trap|phb}, an {@item herbalism kit|phb}, the skull of a boar, a beast-hide cloak, a set of {@item traveler's clothes|phb}, and a belt {@item pouch|phb} containing 10 gp (Azorius 1-zino coins)"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Rubblebelt Refuge",
        "entries": [
          "You are intimately familiar with areas of the city that most people shun: ruined neighborhoods where wurms rampaged, overgrown parks that no hand has tended in decades, and the vast, sprawling rubblebelts of broken terrain that civilized folk have long abandoned. You can find a suitable place for you and your allies to hide or rest in these areas. In addition, you can find food and fresh water in these areas for yourself and up to five other people each day."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Gruul Guild Spells",
        "entries": [
          "{@i Prerequisite: Spellcasting or Pact Magic class feature}",
          "For you, the spells on the Gruul Guild Spells table are added to the spell list of your spellcasting class. (If you are a multiclass character with multiple spell lists, these spells are added to all of them.)",
          {
            "type": "table",
            "caption": "Gruul Guild Spells",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "Spell Level",
              "Spells"
            ],
            "rows": [
              [
                "Cantrip",
                "{@spell fire bolt}, {@spell produce flame}"
              ],
              [
                "1st",
                "{@spell compelled duel}, {@spell speak with animals}, {@spell thunderwave}"
              ],
              [
                "2nd",
                "{@spell beast sense}, {@spell shatter}"
              ],
              [
                "3rd",
                "{@spell conjure animals}, {@spell conjure barrage}"
              ],
              [
                "4th",
                "{@spell dominate beast}, {@spell stoneskin}"
              ],
              [
                "5th",
                "{@spell destructive wave}"
              ]
            ]
          },
          "Fueled by the fire of rage burning in your heart, your magic is almost always accompanied by fiery effects, such as flames smoldering behind your eyes or dancing over your hands."
        ]
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "Gruul ways aren't the ways of civilized folk, and the Gruul have little patience for social niceties. But they do have cherished traditions and values, just as important to them as the different values held by the urban, cosmopolitan culture of Ravnica.",
          {
            "type": "table",
            "caption": "Personality Traits",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Unlike people, the beasts of the wild are friends who won't stab me in the back."
              ],
              [
                "2",
                "Go ahead and insult me—I dare you."
              ],
              [
                "3",
                "I scorn those who can't survive away from the comforts of the city."
              ],
              [
                "4",
                "Don't tell me I'm not allowed to do something."
              ],
              [
                "5",
                "Laws are for people who are afraid to face their inner beasts."
              ],
              [
                "6",
                "I smear the blood of my enemies over my skin."
              ],
              [
                "7",
                "I was, in fact, raised by maaka."
              ],
              [
                "8",
                "HarrRRAAGGHH! [I rarely form a coherent sentence and prefer to express myself by breaking things.]"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Ideals",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "{@b Clan}. My clan is all that really matters. (Any)"
              ],
              [
                "2",
                "{@b Anarchy}. No person or law or custom can tell another what to do. (Chaotic)"
              ],
              [
                "3",
                "{@b Nature}. We weren't born tame or domesticated, so we shouldn't have to live that way. (Neutral)"
              ],
              [
                "4",
                "{@b Might}. The strongest are meant to dominate the weak. (Evil)"
              ],
              [
                "5",
                "{@b Rage}. AAAAAARRRRggggh! [To live is to feel and express the rage burning in your belly.] (Chaotic)"
              ],
              [
                "6",
                "{@b Tradition}. The Old Ways must be preserved and upheld. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Bonds",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I am determined that one day I will lead my clan—or a new one."
              ],
              [
                "2",
                "I would give my life for my clan chieftain."
              ],
              [
                "3",
                "The chieftain of another clan has a grudge against me."
              ],
              [
                "4",
                "I am devoted to a sacred site in the midst of the rubblebelt."
              ],
              [
                "5",
                "My weapon is made from the first raktusk I ever hunted."
              ],
              [
                "6",
                "GrrrRRAAAAGGHH! [I will do anything to prove myself greater than my siblings or ancestors.]"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Flaws",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "If you question my courage, I will never back down."
              ],
              [
                "2",
                "HrrrGGGAAAARRuuuh! [My anger in battle led to the death of a loved one.]"
              ],
              [
                "3",
                "I'm as stubborn as a batterboar."
              ],
              [
                "4",
                "I'm so convinced of my superiority over soft, civilized people that I'll take great risks to prove it."
              ],
              [
                "5",
                "I'm easily manipulated by people I find attractive."
              ],
              [
                "6",
                "I'm not actually all that angry."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Contacts",
        "entries": [
          "The members of the Gruul Clans rely on each other even as they vie for territory and glory. Their encounters with members of other guilds are more often violent than friendly, but occasional bonds do form.",
          "Roll twice on the Gruul Contacts table (for an ally and a rival) and once on the Non-Gruul Contacts table.",
          {
            "type": "table",
            "caption": "Gruul Contacts",
            "colLabels": [
              "d8",
              "Contact"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "One of my parents is a renowned warrior in my clan."
              ],
              [
                "2",
                "My sibling has the ear of the clan chief."
              ],
              [
                "3",
                "I have cousins in a different clan."
              ],
              [
                "4",
                "When we were younger, I was romantically involved with a prominent warrior in my clan."
              ],
              [
                "5",
                "A druid in my clan believes I have a destiny to fulfill."
              ],
              [
                "6",
                "The warrior who trained me remembers me for my exceptional potential."
              ],
              [
                "7",
                "My clan chief killed one of my parents, who had challenged the chief for leadership of the clan. Some combination of resentment and remorse stirs the clan chief to help me sometimes."
              ],
              [
                "8",
                "I made a strong impression on Borborygmos."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Non-Gruul Contacts",
            "colLabels": [
              "d10",
              "Contact"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "An Azorius arrester thinks I can be reformed."
              ],
              [
                "2",
                "A Boros soldier gives me gifts in exchange for information about other clans' movements."
              ],
              [
                "3",
                "I once caught and released a Dimir spy."
              ],
              [
                "4",
                "I consult with a Golgari shaman for spiritual guidance at times."
              ],
              [
                "5",
                "Roll an additional Gruul contact; you can decide if the contact is an ally or a rival."
              ],
              [
                "6",
                "An Izzet scientist blames the Gruul for the destruction of his life's work in a raid, but seems to think that I'm not like other Gruul."
              ],
              [
                "7",
                "I foolishly borrowed money from an Orzhov syndic to indulge a shameful vice."
              ],
              [
                "8",
                "A close friend left our clan and joined the Cult of Rakdos."
              ],
              [
                "9",
                "A distant relative is trying to recruit me into the Selesnya Conclave."
              ],
              [
                "10",
                "I stopped a Simic biomancer from trapping wild beasts to perform vile experiments on them."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "How Do I Fit In?",
        "entries": [
          "In service of a simple goal, you have a simple part to play: Fight. Unleash your rage. Flatten buildings and defeat those who stand in your way. Be Gruul, in your own way.",
          "You will frequently be summoned to participate in a raid your clan is launching against the city or against a group of its defenders. Your clan leader might also send you on a special mission, though it would almost certainly still qualify as a raid. You might join a small group of Gruul warriors on a dangerous charge deep into the settled streets to plunder a certain location, retrieve an item stolen from your clan, or assault a Boros garrison.",
          "Sometimes your objective might be more esoteric. With prophecies of the return of Ilharg the Raze-Boar spreading like wildfire among the Gruul druids, you might be asked to carry out some task that the druids believe will speed his coming. Such a task might involve collecting a sacred relic held in an Orzhov vault or collecting sacrifices for a grand ceremony in the Raze-Boar's honor."
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Guild Artisan",
    "source": "PHB",
    "page": 132,
    "skillProficiencies": [
      {
        "insight": true,
        "persuasion": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "anyArtisansTool": 1
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "equipmentType": "toolArtisan"
          },
          {
            "special": "letter of introduction from your guild"
          },
          "traveler's clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Insight}, {@skill Persuasion}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "One of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A set of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools} (one of your choice), a letter of introduction from your guild, a set of {@item traveler's clothes|phb}, and a belt {@item pouch|phb} containing 15 gp"
          }
        ]
      },
      {
        "name": "Feature: Guild Membership",
        "type": "entries",
        "entries": [
          "As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings.",
          "Guilds often wield tremendous political power. If you are accused of a crime, your guild will support you if a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful political figures through the guild, if you are a member in good standing. Such connections might require the donation of money or magic items to the guild's coffers.",
          "You must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain in the guild's good graces."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Specialty",
        "type": "entries",
        "entries": [
          "Guilds are generally found in cities large enough to support several artisans practicing the same trade. However, your guild might instead be a loose network of artisans who each work in a different village within a larger realm. Work with your DM to determine the nature of your guild. You can select your guild business from the Guild Business table or roll randomly.",
          {
            "type": "table",
            "colLabels": [
              "d20",
              "Guild Business"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Alchemists and apothecaries"
              ],
              [
                "2",
                "Armorers, locksmiths, and finesmiths"
              ],
              [
                "3",
                "Brewers, distillers, and vintners"
              ],
              [
                "4",
                "Calligraphers, scribes, and scriveners"
              ],
              [
                "5",
                "Carpenters, roofers, and plasterers"
              ],
              [
                "6",
                "Cartographers, surveyors, and chart-makers"
              ],
              [
                "7",
                "Cobblers and shoemakers"
              ],
              [
                "8",
                "Cooks and bakers"
              ],
              [
                "9",
                "Glassblowers and glaziers"
              ],
              [
                "10",
                "Jewelers and gemcutters"
              ],
              [
                "11",
                "Leatherworkers, skinners, and tanners"
              ],
              [
                "12",
                "Masons and stonecutters"
              ],
              [
                "13",
                "Painters, limners, and sign-makers"
              ],
              [
                "14",
                "Potters and tile-makers"
              ],
              [
                "15",
                "Shipwrights and sail-makers"
              ],
              [
                "16",
                "Smiths and metal-forgers"
              ],
              [
                "17",
                "Tinkers, pewterers, and casters"
              ],
              [
                "18",
                "Wagon-makers and wheelwrights"
              ],
              [
                "19",
                "Weavers and dyers"
              ],
              [
                "20",
                "Woodcarvers, coopers, and bowyers"
              ]
            ]
          }
        ]
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "Guild artisans are among the most ordinary people in the world—until they set down their tools and take up an adventuring career. They understand the value of hard work and the importance of community, but they're vulnerable to sins of greed and covetousness.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I believe that anything worth doing is worth doing right. I can't help it—I'm a perfectionist."
              ],
              [
                "2",
                "I'm a snob who looks down on those who can't appreciate fine art."
              ],
              [
                "3",
                "I always want to know how things work and what makes people tick."
              ],
              [
                "4",
                "I'm full of witty aphorisms and have a proverb for every occasion."
              ],
              [
                "5",
                "I'm rude to people who lack my commitment to hard work and fair play."
              ],
              [
                "6",
                "I like to talk at length about my profession."
              ],
              [
                "7",
                "I don't part with my money easily and will haggle tirelessly to get the best deal possible."
              ],
              [
                "8",
                "I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)"
              ],
              [
                "2",
                "Generosity. My talents were given to me so that I could use them to benefit the world. (Good)"
              ],
              [
                "3",
                "Freedom. Everyone should be free to pursue his or her own livelihood. (Chaotic)"
              ],
              [
                "4",
                "Greed. I'm only in it for the money. (Evil)"
              ],
              [
                "5",
                "People. I'm committed to the people I care about, not to ideals. (Neutral)"
              ],
              [
                "6",
                "Aspiration. I work hard to be the best there is at my craft. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "The workshop where I learned my trade is the most important place in the world to me."
              ],
              [
                "2",
                "I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy."
              ],
              [
                "3",
                "I owe my guild a great debt for forging me into the person I am today."
              ],
              [
                "4",
                "I pursue wealth to secure someone's love."
              ],
              [
                "5",
                "One day I will return to my guild and prove that I am the greatest artisan of them all."
              ],
              [
                "6",
                "I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I'll do anything to get my hands on something rare or priceless."
              ],
              [
                "2",
                "I'm quick to assume that someone is trying to cheat me."
              ],
              [
                "3",
                "No one must ever learn that I once stole money from guild coffers."
              ],
              [
                "4",
                "I'm never satisfied with what I have—I always want more."
              ],
              [
                "5",
                "I would kill to acquire a noble title."
              ],
              [
                "6",
                "I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Harborfolk",
    "source": "ALElementalEvil",
    "page": 4,
    "skillProficiencies": [
      {
        "athletics": true,
        "sleight of hand": true
      }
    ],
    "toolProficiencies": [
      {
        "gaming set": true,
        "vehicles (water)": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "fishing tackle|phb",
          "dice set|phb",
          "playing card set|phb",
          {
            "item": "three-dragon ante set|phb",
            "displayName": "or Three-Dragon Ante set"
          },
          "common clothes|phb",
          "rowboat|",
          {
            "item": "pouch|phb",
            "containsValue": 500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Athletics}, {@skill Sleight of Hand}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter gaming set|items|source=phb|miscellaneous=mundane|type=gaming set}, {@filter vehicles (water)|items|source=phb;dmg|miscellaneous=mundane|type=vehicle (water)}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "{@item Fishing tackle|phb}, {@item dice set|phb}, {@item playing card set|phb}, or {@item Three-Dragon Ante set|phb}, a set of {@item common clothes|phb}, {@item rowboat}, and a belt {@item pouch|phb} containing 5 gp"
          }
        ]
      },
      {
        "name": "Lifestyle",
        "type": "entries",
        "entries": [
          "Poor"
        ]
      },
      {
        "name": "Overview",
        "type": "entries",
        "entries": [
          "You are one of the hundreds of small-time fishermen and women who haul the bounty of Mulmaster's freshwater harbor to the city's markets each morning. You have spent countless days rowing in the waters in and around Mulmaster and know them and the other fisherfolk, dockworkers, and port inhabitants better than anyone. Though you have left that life behind, you still visit once in a while."
        ]
      },
      {
        "name": "Feature: Harborfolk",
        "type": "entries",
        "entries": [
          "You grew up on the docks and waters of Mulmaster Harbor. The harborfolk remember you and still treat you as one of them. They welcome you and your companions. While they might charge you for it, they'll always offer what food and shelter they have; they'll even hide you if the City Watch is after you (but not if the Hawks are). Note: This feature is a variant of the Folk Hero feature."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "entries": [
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I am curious. I want to know why things are the way they are and why people do the things that they do."
              ],
              [
                "2",
                "I can't sing, but that never stops me from doing it, loudly. Everyone loves a good sea chanty!"
              ],
              [
                "3",
                "I think the High Blade is doing a terrific job, don't you?"
              ],
              [
                "4",
                "I'm very excited that the House Built on Gold is being restored. I am a zealous worshipper of Waukeen."
              ],
              [
                "5",
                "I am quite superstitious. I see portents in everyday occurrences."
              ],
              [
                "6",
                "I resent the rich and enjoy thwarting their plans and spoiling their fun in small ways."
              ],
              [
                "7",
                "I have a sea story to fit every occasion."
              ],
              [
                "8",
                "I'm a fisher, but I secretly detest eating fish. I will do anything to avoid it."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Calm. For all things, there is a tide. I set sail when it is right, and mend my nets when it is not. (Lawful)"
              ],
              [
                "2",
                "Windblown. I go where the winds blow. No man or woman tells me where or when to sail. (Chaotic)"
              ],
              [
                "3",
                "Aspiring. I will gain the favor of a Zor or Zora patron, maybe even one of the Blades! (Any)"
              ],
              [
                "4",
                "Salty. I want people to look to me as an expert on plying Mulmaster Harbor. (Any)"
              ],
              [
                "5",
                "Selfless. We are all children of the sea. I help everyone in peril afloat and ashore. (Good)"
              ],
              [
                "6",
                "Let them Drown. I refuse to risk my hide to help others. They wouldn't help me if roles were reversed. (Evil)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I once lost everything but my rowboat. I'll do anything to protect it."
              ],
              [
                "2",
                "My brother was in the Soldiery, but he was killed. I really look up to the men and women who serve."
              ],
              [
                "3",
                "The Cloaks killed my friend for spellcasting. I'll get them back somehow, someday."
              ],
              [
                "4",
                "The High House of Hurting helped me when I was hurt and asked nothing in return. I owe them my life."
              ],
              [
                "5",
                "I was robbed in the Zhent ghetto once. It will not happen again."
              ],
              [
                "6",
                "I would do anything to protect the other harborfolk. They are my family."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I drink too much, which causes me to miss the tide."
              ],
              [
                "2",
                "I killed a drunk member of the City Watch in a brawl. I am terrified that they might find out."
              ],
              [
                "3",
                "I oversell myself and make promises I can't keep when I want to impress someone."
              ],
              [
                "4",
                "Book learning is a waste of time. I have no patience for people who don't speak from experience."
              ],
              [
                "5",
                "I almost always cheat. I can't help myself."
              ],
              [
                "6",
                "I am a secret informant for the Hawks. I send them reports about everything I see and hear, even what my friends and allies are up to."
              ]
            ]
          }
        ],
        "name": "Suggested Characteristics"
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Haunted One",
    "source": "VRGR",
    "page": 34,
    "otherSources": [
      {
        "source": "CoS",
        "page": 209
      }
    ],
    "skillProficiencies": [
      {
        "choose": {
          "from": [
            "arcana",
            "investigation",
            "religion",
            "survival"
          ],
          "count": 2
        }
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1,
        "choose": {
          "from": [
            "abyssal",
            "celestial",
            "deep speech",
            "draconic",
            "infernal",
            "primordial",
            "sylvan",
            "undercommon"
          ]
        }
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "monster hunter's pack|vrgr",
          "common clothes|phb",
          {
            "item": "Horror Trinket|VRGR",
            "displayName": "trinket of special significance (choose one or roll on the Horror Trinkets table)"
          },
          {
            "value": 10
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "Choose two from among {@skill Arcana}, {@skill Investigation}, {@skill Religion}, or {@skill Survival}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Choose two, one of which must be {@language Abyssal}, {@language Celestial}, {@language Deep Speech}, {@language Draconic}, {@language Infernal}, {@language Primordial}, {@language Sylvan}, or {@language Undercommon}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "{@item Monster hunter's pack|vrgr} (containing a {@item chest|PHB}, a {@item crowbar|PHB}, a {@item hammer|PHB}, three wooden stakes, a {@item holy symbol|PHB}, a {@item Holy Water (flask)|PHB|flask of holy water}, a {@item Manacles|PHB|set of manacles}, a {@item steel mirror|PHB}, a {@item Oil (flask)|PHB|flask of oil}, a {@item tinderbox|PHB}, and 3 {@item Torch|PHB|torches}), a set of {@item common clothes|phb}, one {@item trinket|CoS} of special significance (choose one or roll on the {@item Horror Trinket|VRGR|Horror Trinkets} table), and 1 sp"
          }
        ]
      },
      {
        "name": "Feature: Heart of Darkness",
        "type": "entries",
        "entries": [
          "Those who look into your eyes can see that you have faced unimaginable horror and that you are no stranger to darkness. Though they might fear you, commoners will extend you every courtesy and do their utmost to help you. Unless you have shown yourself to be a danger to them, they will even take up arms to fight alongside you, should you find yourself facing an enemy alone."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Harrowing Event",
        "type": "entries",
        "entries": [
          "Prior to becoming an adventurer, your path in life was defined by one dark moment, one fateful decision, or one tragedy. Now you feel a darkness threatening to consume you, and you fear there may be no hope of escape. Choose a harrowing event that haunts you, or roll one on the Harrowing Events table.",
          {
            "type": "table",
            "caption": "Harrowing Event",
            "colLabels": [
              "d10",
              "Event"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "A monster that slaughtered dozens of innocent people spared your life, and you don't know why."
              ],
              [
                "2",
                "You were born under a dark star. You can feel it watching you, coldly and distantly. Sometimes it beckons you in the dead of night."
              ],
              [
                "3",
                "An apparition that has haunted your family for generations now haunts you. You don't know what it wants, and it won't leave you alone."
              ],
              [
                "4",
                "Your family has a history of practicing the dark arts. You dabbled once and felt something horrible clutch at your soul, whereupon you fled in terror."
              ],
              [
                "5",
                "An oni took your sibling one cold, dark night, and you were unable to stop it."
              ],
              [
                "6",
                "You were cursed with lycanthropy and later cured. You are now haunted by the innocents you slaughtered."
              ],
              [
                "7",
                "A hag kidnapped and raised you. You escaped, but the hag still has a magical hold over you and fills your mind with evil thoughts."
              ],
              [
                "8",
                "You opened an eldritch tome and saw things unfit for a sane mind. You burned the book, but its words and images are burned into your psyche."
              ],
              [
                "9",
                "A fiend possessed you as a child. You were locked away but escaped. The fiend is still inside you, but now you try to keep it bottled up."
              ],
              [
                "10",
                "You did terrible things to avenge the murder of someone you loved. You became a monster, and it haunts your waking dreams."
              ]
            ]
          }
        ]
      },
      {
        "type": "section",
        "name": "Horror Characteristics",
        "id": "0a4",
        "entries": [
          "Characters in a horror-focused campaign might have distinct motivations and characteristics. Use the following tables to supplement your background's suggested characteristics or to inspire those of your own design.",
          {
            "type": "table",
            "caption": "Horror Character Personality Traits",
            "colLabels": [
              "d12",
              "Personality Trait"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I had an encounter that I believe gives me a special affinity with a supernatural creature or event."
              ],
              [
                "2",
                "A signature piece of clothing or distinct weapon serves as an emblem of who I am."
              ],
              [
                "3",
                "I never accept that I'm out of my depth."
              ],
              [
                "4",
                "I must know the answer to every secret. No door remains unopened in my presence."
              ],
              [
                "5",
                "I let people underestimate me, revealing my full competency only to those close to me."
              ],
              [
                "6",
                "I compulsively seek to collect trophies of my travels and victories."
              ],
              [
                "7",
                "It doesn't matter if the whole world's against me. I'll always do what I think is right."
              ],
              [
                "8",
                "I have morbid interests and a macabre aesthetic."
              ],
              [
                "9",
                "I have a personal ritual, mantra, or relaxation method I use to deal with stress."
              ],
              [
                "10",
                "Nothing is more important than life, and I never leave anyone in danger."
              ],
              [
                "11",
                "I'm quick to jump to extreme solutions. Why risk a lesser option not working?"
              ],
              [
                "12",
                "I'm easily startled, but I'm not a coward."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Horror Character Ideals",
            "colLabels": [
              "d12",
              "Ideal"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Adrenaline. I've experienced such strangeness that now I feel alive only in extreme situations."
              ],
              [
                "2",
                "Balance. I strive to counter the deeds of someone for whom I feel responsible."
              ],
              [
                "3",
                "Bound. I've wronged someone and must work their will to avoid their curse."
              ],
              [
                "4",
                "Escape. I believe there is something beyond the world I know, and I need to find it."
              ],
              [
                "5",
                "Legacy. I must do something great so that I'm remembered, and my time is running out."
              ],
              [
                "6",
                "Misdirection. I work vigorously to keep others from realizing my flaws or misdeeds."
              ],
              [
                "7",
                "Obsession. I've lived this way for so long that I can't imagine another way."
              ],
              [
                "8",
                "Obligation. I owe it to my people, faith, family, or teacher to continue a vaunted legacy."
              ],
              [
                "9",
                "Promise. My life is no longer my own. I must fulfill the dream of someone who's gone."
              ],
              [
                "10",
                "Revelation. I need to know what lies beyond the mysteries of death, the world, or the Mists."
              ],
              [
                "11",
                "Sanctuary. I know the forces at work in the world and strive to create islands apart from them."
              ],
              [
                "12",
                "Truth. I care about the truth above all else, even if it doesn't benefit anyone."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Horror Character Bonds",
            "colLabels": [
              "d12",
              "Bond"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I desperately need to get back to someone or someplace, but I lost them in the Mists."
              ],
              [
                "2",
                "Everything I do is in the service of a powerful master, one I must keep a secret from everyone."
              ],
              [
                "3",
                "I owe much to my vanished mentor. I seek to continue their work even as I search to find them."
              ],
              [
                "4",
                "I've seen great darkness, and I'm committed to being a light against it—the light of all lights."
              ],
              [
                "5",
                "Someone I love has become a monster, murderer, or other threat. It's up to me to redeem them."
              ],
              [
                "6",
                "The world has been convinced of a terrible lie. It's up to me to reveal the truth."
              ],
              [
                "7",
                "I deeply miss someone and am quick to adopt people who remind me of them."
              ],
              [
                "8",
                "A great evil dwells within me. I will fight against it and the world's other evils for as long as I can."
              ],
              [
                "9",
                "I'm desperately seeking a cure to an affliction or a curse, either for someone close to me for myself."
              ],
              [
                "10",
                "Spirits are drawn to me. I do all I can to help them find peace."
              ],
              [
                "11",
                "I use my cunning mind to solve mysteries and find justice for those who've been wronged."
              ],
              [
                "12",
                "I lost someone I care about, but I still see them in guilty visions, recurring dreams, or as a spirit."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Horror Character Flaws",
            "colLabels": [
              "d12",
              "Flaw"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I believe doom follows me and that anyone who gets close to me will face a tragic end."
              ],
              [
                "2",
                "I'm convinced something is after me, appearing in mirrors, dreams, and places where no one could."
              ],
              [
                "3",
                "I'm especially superstitious and live life seeking to avoid bad luck, wicked spirits, or the Mists."
              ],
              [
                "4",
                "I've done unspeakable evil and will do anything to prevent others from finding out."
              ],
              [
                "5",
                "I am exceptionally credulous and believe any story or legend immediately."
              ],
              [
                "6",
                "I'm a skeptic and don't believe in the power of rituals, religion, superstition, or spirits."
              ],
              [
                "7",
                "I know my future is written and that anything I do will lead to a prophesied end."
              ],
              [
                "8",
                "I need to find the best in everyone and everything, even when that means denying obvious malice."
              ],
              [
                "9",
                "I've seen the evil of a type of place—like forests, cities, or graveyards—and resist going there."
              ],
              [
                "10",
                "I'm exceptionally cautious, planning laboriously and devising countless contingencies."
              ],
              [
                "11",
                "I have a reputation for defeating a great evil, but that's a lie and the wicked force knows."
              ],
              [
                "12",
                "I know the ends always justify the means and am quick to make sacrifices to attain my goals."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true,
    "hasFluffImages": true
  },
  {
    "name": "Hermit",
    "source": "PHB",
    "page": 134,
    "skillProficiencies": [
      {
        "medicine": true,
        "religion": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "herbalism kit": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "item": "map or scroll case|phb",
            "displayName": "scroll case stuffed full of notes from your studies or prayers"
          },
          {
            "item": "blanket|phb",
            "displayName": "winter blanket"
          },
          "common clothes|phb",
          "herbalism kit|phb",
          {
            "value": 500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Medicine}, {@skill Religion}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@item Herbalism kit|phb}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "One of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@item Map or Scroll Case|phb|scroll case} stuffed full of notes from your studies or prayers, a winter {@item blanket|phb}, a set of {@item common clothes|phb}, an {@item herbalism kit|phb}, and 5 gp"
          }
        ]
      },
      {
        "name": "Feature: Discovery",
        "type": "entries",
        "entries": [
          "The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of your seclusion. It might be a great truth about the cosmos, the deities, the powerful beings of the outer planes, or the forces of nature. It could be a site that no one else has ever seen. You might have uncovered a fact that has long been forgotten, or unearthed some relic of the past that could rewrite history. It might be information that would be damaging to the people who or consigned you to exile, and hence the reason for your return to society.",
          "Work with your DM to determine the details of your discovery and its impact on the campaign."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Specialty",
        "type": "entries",
        "entries": [
          "What was the reason for your isolation, and what changed to allow you to end your solitude? You can work with your DM to determine the exact nature of your seclusion, or you can choose or roll on the table below to determine the reason behind your seclusion.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Life of Seclusion"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I was searching for spiritual enlightenment."
              ],
              [
                "2",
                "I was partaking of communal living in accordance with the dictates of a religious order."
              ],
              [
                "3",
                "I was exiled for a crime I didn't commit."
              ],
              [
                "4",
                "I retreated from society after a life-altering event."
              ],
              [
                "5",
                "I needed a quiet place to work on my art, literature, music, or manifesto."
              ],
              [
                "6",
                "I needed to commune with nature, far from civilization."
              ],
              [
                "7",
                "I was the caretaker of an ancient ruin or relic."
              ],
              [
                "8",
                "I was a pilgrim in search of a person, place, or relic of spiritual significance."
              ]
            ]
          }
        ]
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "Some hermits are well suited to a life of seclusion, whereas others chafe against it and long for company. Whether they embrace solitude or long to escape it, the solitary life shapes their attitudes and ideals. A few are driven slightly mad by their years apart from society.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I've been isolated for so long that I rarely speak, preferring gestures and the occasional grunt."
              ],
              [
                "2",
                "I am utterly serene, even in the face of disaster."
              ],
              [
                "3",
                "The leader of my community had something wise to say on every topic, and I am eager to share that wisdom."
              ],
              [
                "4",
                "I feel tremendous empathy for all who suffer."
              ],
              [
                "5",
                "I'm oblivious to etiquette and social expectations."
              ],
              [
                "6",
                "I connect everything that happens to me to a grand, cosmic plan."
              ],
              [
                "7",
                "I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings."
              ],
              [
                "8",
                "I am working on a grand philosophical theory and love sharing my ideas."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Greater Good. My gifts are meant to be shared with all, not used for my own benefit. (Good)"
              ],
              [
                "2",
                "Logic. Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful)"
              ],
              [
                "3",
                "Free Thinking. Inquiry and curiosity are the pillars of progress. (Chaotic)"
              ],
              [
                "4",
                "Power. Solitude and contemplation are paths toward mystical or magical power. (Evil)"
              ],
              [
                "5",
                "Live and Let Live. Meddling in the affairs of others only causes trouble. (Neutral)"
              ],
              [
                "6",
                "Self-Knowledge. If you know yourself, there's nothing left to know. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Nothing is more important than the other members of my hermitage, order, or association."
              ],
              [
                "2",
                "I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them."
              ],
              [
                "3",
                "I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me."
              ],
              [
                "4",
                "I entered seclusion because I loved someone I could not have."
              ],
              [
                "5",
                "Should my discovery come to light, it could bring ruin to the world."
              ],
              [
                "6",
                "My isolation gave me great insight into a great evil that only I can destroy."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Now that I've returned to the world, I enjoy its delights a little too much."
              ],
              [
                "2",
                "I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell."
              ],
              [
                "3",
                "I am dogmatic in my thoughts and philosophy."
              ],
              [
                "4",
                "I let my need to win arguments overshadow friendships and harmony."
              ],
              [
                "5",
                "I'd risk too much to uncover a lost bit of knowledge."
              ],
              [
                "6",
                "I like keeping secrets and won't share them with anyone."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Hillsfar Merchant",
    "source": "ALRageOfDemons",
    "page": 7,
    "skillProficiencies": [
      {
        "insight": true,
        "persuasion": true
      }
    ],
    "toolProficiencies": [
      {
        "vehicles (land)": true,
        "vehicles (water)": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "fine clothes|phb",
          "signet ring|phb",
          {
            "special": "letter of introduction from your family's trading house"
          },
          {
            "special": "purse",
            "containsValue": 2500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Insight}, {@skill Persuasion}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@filter Vehicles (land)|items|source=phb;dmg|miscellaneous=mundane|type=vehicle (land)} and {@filter vehicles (water)|items|source=phb;dmg|miscellaneous=mundane|type=vehicle (water)}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A set of {@item fine clothes|phb}, a {@item signet ring|phb}, a letter of introduction from your family's trading house, and a purse containing 25 gp"
          }
        ]
      },
      {
        "name": "Lifestyle",
        "type": "entries",
        "entries": [
          "Wealthy"
        ]
      },
      {
        "name": "Overview",
        "type": "entries",
        "entries": [
          "Before becoming an adventurer, you were a successful merchant operating out Hillsfar, the City of Trade. Your family operated warehouses, organized caravans, managed stores, or owned a ship and has trade contacts throughout the Moonsea region, as well as up and down the length of the Sword Coast. Perhaps they import ore, uncut gems, untreated furs, or grain into the City of Trade, or they export fine cloth, faceted gems, fine furs, or Dragon's Breath, a brandy-like liquor. Regardless, you've largely given that life up for some reason and have chosen to seek adventure instead. Nevertheless, the training you received then, and perhaps the contacts you made, serve you well as an adventurer.",
          "Choose one of the following features:"
        ]
      },
      {
        "name": "Feature: Factor",
        "type": "entries",
        "entries": [
          "Although you've left the day-to-day life of a merchant behind, your family has assigned you the services of a loyal retainer from the business, a factor, husbanding agent, seafarer, caravan guard, or clerk. This individual is a commoner who can perform mundane tasks for you such as making purchases, delivering messages, and running errands. He or she will not fight for you and will not follow you into obviously dangerous areas (such as dungeons), and will leave if frequently endangered or abused. If he or she is killed, the family assigns you another within a few days. Note: This feature is a variant of the Noble Knight's Retainers feature."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Alternate Feature: Trade Contact",
        "type": "entries",
        "entries": [
          "You and your family have trade contacts such as caravan masters, shopkeepers, sailors, artisans, and farmers throughout the Moonsea region and all along the Sword Coast. Once per game session, when adventuring in either of those areas, you can use those contacts to get information about the local area or to pass a message to someone in those areas, even across the great distance between the two areas. Note: This feature is a variant of the Criminal Contact and Researcher features."
        ],
        "data": {
          "isFeature": true,
          "isAlternateFeature": true
        }
      },
      {
        "type": "entries",
        "entries": [
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I fill my evenings with wine or mead and song."
              ],
              [
                "2",
                "I greatly admire gladiators and enjoy the Arena."
              ],
              [
                "3",
                "I take my wealth for granted. It seldom occurs to me that others aren't rich themselves."
              ],
              [
                "4",
                "I leave broken hearts all around the Moonsea and up and down the Sword Coast."
              ],
              [
                "5",
                "I work hard and seldom make time for fun."
              ],
              [
                "6",
                "I am a particularly devout and pray often."
              ],
              [
                "7",
                "The Red Plumes caught me once. I hate them."
              ],
              [
                "8",
                "I ask a lot of questions to get information about those with whom I am working and dealing."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Frugal. I spend my money very carefully. (Lawful)"
              ],
              [
                "2",
                "Profligate. I tend to spend extravagantly. (Chaotic)"
              ],
              [
                "3",
                "Honest. I deal with others above board. (Any)"
              ],
              [
                "4",
                "Sharp. I seek to make the best deal possible. (Any)"
              ],
              [
                "5",
                "Charitable. I give generously to others. (Good)"
              ],
              [
                "6",
                "Greedy. I do not share my wealth with others. (Evil)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I am fiercely loyal to those with whom I work."
              ],
              [
                "2",
                "I must uphold the good name of my family."
              ],
              [
                "3",
                "I will prove myself to my family as an adventurer."
              ],
              [
                "4",
                "Deals are sacrosanct. I never go back on my word."
              ],
              [
                "5",
                "I love making deals and negotiating agreements."
              ],
              [
                "6",
                "I guard my wealth jealously."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I am a braggart. I promote myself shamelessly."
              ],
              [
                "2",
                "I am vain. I always wear the latest fashions."
              ],
              [
                "3",
                "I am a glutton. I eat and drink to excess."
              ],
              [
                "4",
                "I am a snob. I want only the finest things in life."
              ],
              [
                "5",
                "I am lazy. I want others to take care of everything."
              ],
              [
                "6",
                "I am overconfident. I overestimate my abilities."
              ]
            ]
          }
        ],
        "name": "Suggested Characteristics"
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Hillsfar Smuggler",
    "source": "ALRageOfDemons",
    "page": 8,
    "skillProficiencies": [
      {
        "perception": true,
        "stealth": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "forgery kit": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "forgery kit|phb",
          "common clothes|phb",
          {
            "item": "pouch|phb",
            "displayName": "belt pouch"
          },
          {
            "value": 500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Perception}, {@skill Stealth}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "One racial language"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@item Forgery kit|phb}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@item forgery kit|phb}, a set of {@item common clothes|phb}, a belt {@item pouch|phb}, and 5 gp"
          }
        ]
      },
      {
        "name": "Lifestyle",
        "type": "entries",
        "entries": [
          "Modest"
        ]
      },
      {
        "name": "Overview",
        "type": "entries",
        "entries": [
          "Hillsfar is the City of Trade. However, the Great Law of Trade only protects \\"legitimate\\" trade, trade that passes through the city's sole gate, which the Red Plumes monitor and tax. And the Great Law of Humanity banishes non-humans from the city altogether. The two Great Laws create great demand and great risk for smugglers, who shepherd illicit goods and non-humans into and out of the city by secret routes. The Rogues Guild tightly controls all of this activity, taking its cut from sanctioned jobs and exacting punishment for independent jobs.",
          "Perhaps you trafficked Dragon's Breath (a brandy-like liquor) to avoid tariffs or contraband to avoid seizure, or maybe you are a human who sympathizes with the non-humans and worked as part of the network of secret routes and safe houses that helps them pass through Hillsfar. Either way, you have contacts in the smuggling community who can help you slip into and out of the city unnoticed, for a price."
        ]
      },
      {
        "name": "Feature: Secret Passage",
        "type": "entries",
        "entries": [
          "You can call on your contacts within the smuggling community to secure secret passage into or out of Hillsfar for yourself and your adventuring companions, no questions asked, and no Red Plume entanglements. Because you're calling in a favor, you can't be certain they will be able to help on your timetable or at all. Your Dungeon Master will determine whether you can be smuggled into or out of the city. In return for your passage, you and your companions may owe the Rouges Guild a favor and/or may have to pay bribes. Note: This feature is a variant of the Sailor feature."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "entries": [
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "When I'm not smuggling, I gamble."
              ],
              [
                "2",
                "I just love Halfling cooking and baking!"
              ],
              [
                "3",
                "I party with dwarves whenever I can."
              ],
              [
                "4",
                "I'm a terrible singer, but I love to do it."
              ],
              [
                "5",
                "I was raised to honor Chauntea and still do."
              ],
              [
                "6",
                "The blood sports of the Arena sicken me."
              ],
              [
                "7",
                "I think non-humans are really interesting."
              ],
              [
                "8",
                "I exaggerate the tales of my exploits."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Fair. I think everyone deserves to be treated fairly. I don't play favorites. (Lawful)"
              ],
              [
                "2",
                "Impulsive. Planning is often a waste of time. No plan survives contact with reality. It's easier to dive in and deal with the consequences. (Chaotic)"
              ],
              [
                "3",
                "Curious. I want to learn as much as I can about the people and places I encounter. (Any)"
              ],
              [
                "4",
                "Prepared. I think success depends on preparing as much as possible in advance. (Any)"
              ],
              [
                "5",
                "Respectful. I think everyone deserves to be treated with respect and dignity, regardless of their race, creed, color, or origin. (Good)"
              ],
              [
                "6",
                "Corrupt. I will break the law or act dishonestly if the money is right. (Evil)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I am loyal to the Rogues Guild and would do anything for them."
              ],
              [
                "2",
                "I love the city of Hillsfar and my fellow Hillsfarians, despite the recent problems."
              ],
              [
                "3",
                "I admire the elves. I help them whenever I can."
              ],
              [
                "4",
                "A gnome helped me once. I pay the favor forward."
              ],
              [
                "5",
                "I enjoy tricking the Red Plumes at every opportunity."
              ],
              [
                "6",
                "I smuggled agricultural goods for non-human farmers. I try to help them when I can."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "My hatred for the Red Plumes burns so brightly that I have difficulty suppressing It around them."
              ],
              [
                "2",
                "The Red Plumes caught me once before, and I was branded for my crime. If they catch me again, for any offense, the punishment will be dire."
              ],
              [
                "3",
                "I treat all Hillsfarans poorly. I am disgusted with their failure to revolt against the Great Law of Humanity."
              ],
              [
                "4",
                "I have difficulty trusting strangers. Anyone could be a spy for the authorities."
              ],
              [
                "5",
                "I am greedy. There Isn't much I won't do for money."
              ],
              [
                "6",
                "I'm an informant for the Red Plumes. They let me continue my activities, so long as I pass them information about illegal activity in Hillsfar."
              ]
            ]
          }
        ],
        "name": "Suggested Characteristics"
      }
    ],
    "hasFluff": true
  },
  {
    "name": "House Agent",
    "source": "ERLW",
    "page": 53,
    "skillProficiencies": [
      {
        "investigation": true,
        "persuasion": true
      }
    ],
    "toolProficiencies": [
      {
        "alchemist's supplies": true,
        "tinker's tools": true
      },
      {
        "gaming set": true,
        "vehicles (land)": true
      },
      {
        "brewer's supplies": true,
        "cook's utensils": true
      },
      {
        "alchemist's supplies": true,
        "herbalism kit": true
      },
      {
        "tinker's tools": true,
        "thieves' tools": true
      },
      {
        "vehicles (water)": true,
        "vehicles (air)": true,
        "navigator's tools": true
      },
      {
        "thieves' tools": true,
        "disguise kit": true
      },
      {
        "disguise kit": true,
        "musical instrument": true
      },
      {
        "calligrapher's supplies": true,
        "forgery kit": true
      },
      {
        "thieves' tools": true,
        "gaming set": true
      },
      {
        "poisoner's kit": true,
        "musical instrument": true
      },
      {
        "vehicles (land)": true,
        "herbalism kit": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "fine clothes|phb",
          {
            "item": "signet ring|phb",
            "displayName": "house signet ring"
          },
          {
            "special": "identification papers"
          },
          {
            "special": "purse",
            "containsValue": 2000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Investigation}, {@skill Persuasion}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entries": [
              "Two proficiencies from the House Tool Proficiencies table"
            ]
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A set of {@item fine clothes|phb}, house {@item signet ring|phb}, identification papers, and a purse containing 20 gp."
          }
        ]
      },
      {
        "type": "table",
        "caption": "House Tool Proficiencies",
        "colLabels": [
          "Your House",
          "Proficiencies"
        ],
        "colStyles": [
          "col-2",
          "col-10"
        ],
        "rows": [
          [
            "Cannith",
            "{@item Alchemist's supplies|phb} and {@item tinker's tools|phb}"
          ],
          [
            "Deneith",
            "One {@filter gaming set|items|source=phb|miscellaneous=mundane|type=gaming set} and {@filter vehicles (land)|items|source=phb;dmg|miscellaneous=mundane|type=vehicle (land)}"
          ],
          [
            "Ghallanda",
            "{@item Brewer's supplies|phb} and {@item cook's utensils|phb}"
          ],
          [
            "Jorasco",
            "{@item Alchemist's supplies|phb} and {@item herbalism kit|phb}"
          ],
          [
            "Kundarak",
            "{@item Thieves' tools|phb} and {@item tinker's tools|phb}"
          ],
          [
            "Lyrandar",
            "{@item Navigator's tools|phb} and {@filter vehicles (sea and air)|items|source=phb;dmg|miscellaneous=mundane|type=vehicle (water);vehicle (air)}"
          ],
          [
            "Medani",
            "{@item Disguise kit|phb} and {@item thieves' tools|phb}"
          ],
          [
            "Orien",
            "One {@filter gaming set|items|source=phb|miscellaneous=mundane|type=gaming set} and {@filter vehicles (land)|items|source=phb;dmg|miscellaneous=mundane|type=vehicle (land)}"
          ],
          [
            "Phiarlan",
            "{@item Disguise kit|phb} and one {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument}"
          ],
          [
            "Sivis",
            "{@item Calligrapher's supplies|phb} and {@item forgery kit|phb}"
          ],
          [
            "Tharashk",
            "One {@filter gaming set|items|source=phb|miscellaneous=mundane|type=gaming set} and {@item thieves' tools|phb}"
          ],
          [
            "Thuranni",
            "One {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument} and {@item poisoner's kit|phb}"
          ],
          [
            "Vadalis",
            "{@item herbalism kit|phb} and {@filter vehicles (land)|items|source=phb;dmg|miscellaneous=mundane|type=vehicle (land)}"
          ]
        ]
      },
      {
        "type": "entries",
        "name": "Role",
        "entries": [
          "You always gather information for your house, but when a baron give you a specific mission, what sort of work do you do? The House Agent Role table gives possibilities.",
          {
            "type": "table",
            "caption": "House Agent Role",
            "colLabels": [
              "d8",
              "Role"
            ],
            "colStyles": [
              "col-6 text-center",
              "col-6 text-center"
            ],
            "rows": [
              [
                "1",
                "Acquisition"
              ],
              [
                "2",
                "Investigation"
              ],
              [
                "3",
                "Research & Development"
              ],
              [
                "4",
                "Security"
              ],
              [
                "5",
                "Intimidation"
              ],
              [
                "6",
                "Exploration"
              ],
              [
                "7",
                "Negotiation"
              ],
              [
                "8",
                "Covert Operations"
              ]
            ]
          }
        ]
      },
      {
        "name": "Feature: House Connections",
        "type": "entries",
        "entries": [
          "As an agent of your house, you can always get food and lodging for yourself and your friends at a house enclave. When the house assigns you a mission, it will usually provide you with the necessary supplies and transportation. Beyond this, you have many old friends, mentors, and rivals in your house, and you may encounter one of them when you interact with a house business. The degree to which such acquaintances are willing to help you depends on your current standing in your house."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "House agents are diverse. Consider the house you serve and the work you do when choosing characteristics.",
          {
            "type": "table",
            "caption": "Personality Traits",
            "colLabels": [
              "d6",
              "Personality Trait"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I'm always looking to improve efficiency."
              ],
              [
                "2",
                "I love to share trivia about my house's business."
              ],
              [
                "3",
                "I never forget an insult against me or my house."
              ],
              [
                "4",
                "I'm enthusiastic about everything my house does."
              ],
              [
                "5",
                "I represent my house and take pride in my looks."
              ],
              [
                "6",
                "I'm critical of monarchies and limits on the houses."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Ideals",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "{@b Common Good}. My house serves a vital function, and its prosperity will help everyone. (Good)"
              ],
              [
                "2",
                "{@b Tradition}. I uphold traditions of my house and bring honor to my family. (Lawful)"
              ],
              [
                "3",
                "{@b Innovation}. Abandon old traditions and find better ways to do things. (Chaotic)"
              ],
              [
                "4",
                "{@b Power}. I want to ensure the prosperity of my house and wield its power myself. (Evil)"
              ],
              [
                "5",
                "{@b Discovery}. I want to learn all I can, both for my house and for my own curiosity. (Any)"
              ],
              [
                "6",
                "{@b Comfort}. I want to ensure that me and mine enjoy the best things in life. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Bonds",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "My house is my family. I would do anything for it."
              ],
              [
                "2",
                "I love someone from another house, but the relationship is forbidden."
              ],
              [
                "3",
                "Someone I love was killed by a rival faction within my house, and I will have revenge."
              ],
              [
                "4",
                "I don't care about the house as a whole, but I would do anything for my old mentor."
              ],
              [
                "5",
                "My house must evolve, and I'll lead the evolution."
              ],
              [
                "6",
                "I'm determined to impress the leaders of my house, and to become a leader myself."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Flaws",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I'm fixated on following official protocols."
              ],
              [
                "2",
                "I'm obsessed with conspiracy theories and worried about secret societies and hidden demons."
              ],
              [
                "3",
                "My house and bloodline make me the best!"
              ],
              [
                "4",
                "My secret could get me expelled from my house."
              ],
              [
                "5",
                "My religious beliefs aren't widespread in my house."
              ],
              [
                "6",
                "I'm working for a hidden faction in my house that gives me secret assignments."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Inheritor",
    "source": "SCAG",
    "page": 150,
    "skillProficiencies": [
      {
        "survival": true,
        "choose": {
          "from": [
            "arcana",
            "history",
            "religion"
          ]
        }
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "choose": {
          "from": [
            "musical instrument",
            "gaming set"
          ]
        }
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "special": "Your inheritance"
          },
          "traveler's clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1500
          }
        ]
      },
      {
        "a": [
          {
            "equipmentType": "setGaming"
          }
        ],
        "b": [
          {
            "equipmentType": "instrumentMusical"
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Survival}, plus one from among {@skill Arcana}, {@skill History}, and {@skill Religion}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Any one of your choice"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "Your choice of a {@filter gaming set|items|source=phb|miscellaneous=mundane|type=gaming set} or a {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "Your inheritance, a set of {@item traveler's clothes|phb}, the tool you choose for this background's tool proficiency ({@filter gaming set|items|source=phb|miscellaneous=mundane|type=gaming set} or {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument}), and a {@item pouch|phb} containing 15 gp"
          }
        ]
      },
      {
        "name": "Feature: Inheritance",
        "type": "entries",
        "entries": [
          "Choose or randomly determine your inheritance from the possibilities in the table below. Work with your Dungeon Master to come up with details: Why is your inheritance so important, and what is its full story? You might prefer for the DM to invent these details as part of the game, allowing you to learn more about your inheritance as your character does.",
          "The Dungeon Master is free to use your inheritance as a story hook, sending you on quests to learn more about its history or true nature, or confronting you with foes who want to claim it for themselves or prevent you from learning what you seek. The DM also determines the properties of your inheritance and how they figure into the item's history and importance. For instance, the object might be a minor magic item, or one that begins with a modest ability and increases in potency with the passage of time. Or, the true nature of your inheritance might not be apparent at first and is revealed only when certain conditions are met.",
          "When you begin your adventuring career, you can decide whether to tell your companions about your inheritance right away. Rather than attracting attention to yourself, you might want to keep your inheritance a secret until you learn more about what it means to you and what it can do for you.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Object or item:"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "A document such as a map, a letter, or a journal"
              ],
              [
                "2-3",
                "a trinket (see \\"Trinkets\\" in chapter 5 of the Player's Handbook)"
              ],
              [
                "4",
                "an article of clothing"
              ],
              [
                "5",
                "a piece of jewelry"
              ],
              [
                "6",
                "an arcane book or formulary"
              ],
              [
                "7",
                "a written story, song, poem, or secret"
              ],
              [
                "8",
                "a tattoo or other body marking"
              ]
            ]
          }
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "Use the tables for the {@background folk hero} background in the Player's Handbook as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity as an inheritor.",
          "Your bond might be directly related to your inheritance, or to the person from whom you received it. Your ideal might be influenced by what you know about your inheritance, or by what you intend to do with your gift once you realize what it is capable of."
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Initiate",
    "source": "PSA",
    "page": 8,
    "skillProficiencies": [
      {
        "athletics": true,
        "intimidation": true
      }
    ],
    "toolProficiencies": [
      {
        "gaming set": true,
        "vehicles (land)": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "special": "simple puzzle box"
          },
          {
            "special": "scroll containing the basic teachings of the five gods"
          },
          {
            "equipmentType": "setGaming"
          },
          "common clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1500
          },
          {
            "special": "any cartouches you have earned"
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Athletics}, {@skill Intimidation}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter gaming set|items|source=phb|miscellaneous=mundane|type=gaming set}, {@filter vehicles (land)|items|source=phb;dmg|miscellaneous=mundane|type=vehicle (land)}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A simple puzzle box, a scroll containing the basic teachings of the five gods, a {@filter gaming set|items|source=phb|miscellaneous=mundane|type=gaming set}, a set of {@item common clothes|phb}, and a belt {@item pouch|phb} containing 15 gp. If you have completed any trials before the start of the campaign, you also have any cartouches you have earned"
          }
        ]
      },
      {
        "name": "Feature: Trials of the Five Gods",
        "type": "entries",
        "entries": [
          "Your life is oriented around your participation in the five trials that will determine your worthiness in the afterlife. While you prepare for and undergo those trials, you have constant access to training. A comfortable place to live and regular meals are provided to you by servitor mummies (the anointed) under the supervision of viziers. You can enjoy these benefits only as long as you obey the societal norms of Naktamun—training for the trials (with or without your crop), obeying the orders of the gods, and following the instructions of their viziers. If you violate these norms, you risk being treated as a dissenter. See \\"{@book Trials of the Five Gods|PS-A|3}\\" for more information about undertaking the trials and their rewards."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "An initiate's life is focused on the trials, but it doesn't need to be all about the trials. Though some initiates are highly focused on their training, most undergo that training while also experiencing joy, sorrow, love, loss, anger, jealousy, hope, faith, delight—the whole range of mortal emotions and experience. The afterlife might be a constant presence in every initiate's mind, but it is the culmination of a life well-lived—not a replacement for it.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I always have a joke on hand when the mood gets too serious."
              ],
              [
                "2",
                "I use sarcasm and insults to keep a distance between myself and my crop-mates, because I don't want to get attached to them."
              ],
              [
                "3",
                "I'll settle for nothing less than perfection—in myself, in my cropmates, in everything."
              ],
              [
                "4",
                "I'm so focused on the glorious afterlife that nothing in this life can shake my calm resolve."
              ],
              [
                "5",
                "I enjoy using my skills to help those who lack those same skills."
              ],
              [
                "6",
                "I train hard so that I can play hard at the end of the day. I fully expect to play even harder in the glorious afterlife, but I'm not in a hurry to get there."
              ],
              [
                "7",
                "I'm perfectly happy letting others pick up the slack for me while I take it easy."
              ],
              [
                "8",
                "I'm constantly sizing up everyone around me, thinking about what kind of opponent they'll be in the final trial."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "{@b Solidarity.} The thing that matters most of all is that we're there for each other. (Lawful)"
              ],
              [
                "2",
                "{@b Knowledge.} The world is a puzzle—a mystery waiting to be solved. (Neutral)"
              ],
              [
                "3",
                "{@b Strength.} All that matters to me is my own perfection. Let everyone else seek that perfection in their own way. (Any)"
              ],
              [
                "4",
                "{@b Ambition.} I'm going to prove that I deserve only the best—of everything. (Evil)"
              ],
              [
                "5",
                "{@b Zeal.} Anything worth doing is worth throwing my whole self into. (Any)"
              ],
              [
                "6",
                "{@b Redemption.} I will train all the harder to make up for the doubt I entertained when I was younger. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "One of my crop-mates is my dearest friend, and I hope we will face each other in the final trial."
              ],
              [
                "2",
                "I am in love with a vizier."
              ],
              [
                "3",
                "I am particularly drawn to one of the five gods, and I want nothing more than to win that god's particular favor."
              ],
              [
                "4",
                "I am more devoted to Naktamun and its people than I am to any of the ideals of the gods."
              ],
              [
                "5",
                "My weapon was a gift from a beloved trainer who died in an accident."
              ],
              [
                "6",
                "I carry a memento of my time as an acolyte, and I treasure it above all other things."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I'm easily distracted by an attractive person, which could be the death of me in the trials."
              ],
              [
                "2",
                "I really wanted to be a vizier, and I'm angry at the god who didn't choose me."
              ],
              [
                "3",
                "Training for a lifetime to die in the end seems like a big waste of energy."
              ],
              [
                "4",
                "I'm not at all sure I'll be able to grant a glorified death to any of my crop-mates."
              ],
              [
                "5",
                "I have a lasting grudge against one of my crop-mates, and each of us wants to see the other fail."
              ],
              [
                "6",
                "I think I've figured out that this world is not what it seems. Something dark is going on here."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true,
    "hasFluffImages": true
  },
  {
    "name": "Initiate (Dissenter)",
    "source": "PSA",
    "page": 11,
    "_copy": {
      "name": "Initiate",
      "source": "PSA",
      "_mod": {
        "entries": {
          "mode": "replaceArr",
          "replace": "Feature: Trials of the Five Gods",
          "items": {
            "name": "Feature: Shelter of Dissenters",
            "type": "entries",
            "entries": [
              "If they wish to have any hope of survival, whether hiding within the city or cast out into the desert, dissenters must help each other. You can find a place to hide, rest, or recuperate among other dissenters. They will help shield you from those who hunt you, possibly even risking their lives for you."
            ],
            "data": {
              "isFeature": true
            }
          }
        }
      }
    },
    "hasFluff": true,
    "hasFluffImages": true
  },
  {
    "name": "Inquisitor",
    "source": "PSI",
    "page": 12,
    "skillProficiencies": [
      {
        "investigation": true,
        "religion": true
      }
    ],
    "toolProficiencies": [
      {
        "thieves' tools": true,
        "anyArtisansTool": 1
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "holy symbol|phb",
          "traveler's clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Investigation}, {@skill Religion}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@item Thieves' tools|phb}, one type of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@item holy symbol|phb}, a set of {@item traveler's clothes|phb}, and a belt {@item pouch|phb} containing 15 gp"
          }
        ]
      },
      {
        "name": "Feature: Legal Authority",
        "type": "entries",
        "entries": [
          "As an inquisitor of the church, you have the authority to arrest criminals. In the absence of other authorities, you are authorized to pass judgement and even carry out sentencing. If you abuse this power, however, your superiors in the church might strip it from you."
        ],
        "data": {
          "isFeature": true
        }
      }
    ],
    "hasFluff": true,
    "hasFluffImages": true
  },
  {
    "name": "Investigator",
    "source": "VRGR",
    "page": 35,
    "skillProficiencies": [
      {
        "choose": {
          "from": [
            "insight",
            "investigation",
            "perception"
          ],
          "count": 2
        }
      }
    ],
    "toolProficiencies": [
      {
        "disguise kit": true,
        "thieves' tools": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "magnifying glass|PHB",
          "common clothes|phb",
          {
            "item": "Horror Trinket|VRGR",
            "displayName": "evidence from a past case (choose one or roll for a trinket from the {@item Horror Trinket|VRGR|Horror Trinkets})"
          },
          {
            "value": 10
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "Choose two from among {@skill Insight}, {@skill Investigation}, or {@skill Perception}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@item Disguise kit|phb}, {@item Thieves' tools|phb}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@item magnifying glass|PHB}, evidence from a past case (choose one or roll for a trinket from the {@item Horror Trinket|VRGR|Horror Trinkets} later in this chapter), a {@item Common Clothes|PHB|set of common clothes}, and 10 gp"
          }
        ]
      },
      {
        "name": "Feature: Official Inquiry",
        "type": "entries",
        "entries": [
          "You're experienced at gaining access to people and places to get the information you need. Through a combination of fast-talking, determination, and official-looking documentation, you can gain access to a place or an individual related to a crime you're investigating. Those who aren't involved in your investigation avoid impeding you or pass along your requests. Additionally, local law enforcement has firm opinions about you, viewing you as either a nuisance or one of their own."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Path to Mystery",
        "type": "entries",
        "entries": [
          "Your first case influenced the types of mysteries you're interested in. Why was this case so impactful, personal, or traumatic? Whom did it affect besides you? Why and how did you get involved? Was it solved? How did it set you on the path to investigating other mysteries? Roll on or choose details from the First Case table to develop the mystery that started your career as an investigator.",
          {
            "type": "table",
            "caption": "First Case",
            "colLabels": [
              "d8",
              "Case"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "A friend was wrongfully accused of murder. You tracked down the actual killer, proving your friend's innocence and starting your career as a detective."
              ],
              [
                "2",
                "You're told you went missing for weeks. When you were found, you had no memory of being gone. Now you search to discover what happened to you."
              ],
              [
                "3",
                "You helped a spirit find peace by finding its missing corpse. Ever since, other spectral clients have sought you out to help them find rest."
              ],
              [
                "4",
                "You revealed that the monsters terrorizing your home were illusions created by a cruel mage. The magic-user escaped, but you've continued to uncover magical hoaxes."
              ],
              [
                "5",
                "You were wrongfully accused and convicted of a crime. You managed to escape and seek to help others avoid the experience you suffered, even while still being pursued by the law."
              ],
              [
                "6",
                "You survived the destructive use of a magic device that wiped out your home. Members of a secret organization found you. You now work with them, tracking down dangerous supernatural phenomena and preventing them from doing harm."
              ],
              [
                "7",
                "You found evidence of a conspiracy underpinning society. You tried to expose this mysterious cabal, but no one believed you. You're still trying to prove what you know is true."
              ],
              [
                "8",
                "You got a job with an agency that investigates crimes that local law enforcement can't solve. You often wonder which you value more, the truth or your pay."
              ]
            ]
          }
        ]
      },
      {
        "type": "section",
        "name": "Horror Characteristics",
        "id": "0a4",
        "entries": [
          "Characters in a horror-focused campaign might have distinct motivations and characteristics. Use the following tables to supplement your background's suggested characteristics or to inspire those of your own design.",
          {
            "type": "table",
            "caption": "Horror Character Personality Traits",
            "colLabels": [
              "d12",
              "Personality Trait"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I had an encounter that I believe gives me a special affinity with a supernatural creature or event."
              ],
              [
                "2",
                "A signature piece of clothing or distinct weapon serves as an emblem of who I am."
              ],
              [
                "3",
                "I never accept that I'm out of my depth."
              ],
              [
                "4",
                "I must know the answer to every secret. No door remains unopened in my presence."
              ],
              [
                "5",
                "I let people underestimate me, revealing my full competency only to those close to me."
              ],
              [
                "6",
                "I compulsively seek to collect trophies of my travels and victories."
              ],
              [
                "7",
                "It doesn't matter if the whole world's against me. I'll always do what I think is right."
              ],
              [
                "8",
                "I have morbid interests and a macabre aesthetic."
              ],
              [
                "9",
                "I have a personal ritual, mantra, or relaxation method I use to deal with stress."
              ],
              [
                "10",
                "Nothing is more important than life, and I never leave anyone in danger."
              ],
              [
                "11",
                "I'm quick to jump to extreme solutions. Why risk a lesser option not working?"
              ],
              [
                "12",
                "I'm easily startled, but I'm not a coward."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Horror Character Ideals",
            "colLabels": [
              "d12",
              "Ideal"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Adrenaline. I've experienced such strangeness that now I feel alive only in extreme situations."
              ],
              [
                "2",
                "Balance. I strive to counter the deeds of someone for whom I feel responsible."
              ],
              [
                "3",
                "Bound. I've wronged someone and must work their will to avoid their curse."
              ],
              [
                "4",
                "Escape. I believe there is something beyond the world I know, and I need to find it."
              ],
              [
                "5",
                "Legacy. I must do something great so that I'm remembered, and my time is running out."
              ],
              [
                "6",
                "Misdirection. I work vigorously to keep others from realizing my flaws or misdeeds."
              ],
              [
                "7",
                "Obsession. I've lived this way for so long that I can't imagine another way."
              ],
              [
                "8",
                "Obligation. I owe it to my people, faith, family, or teacher to continue a vaunted legacy."
              ],
              [
                "9",
                "Promise. My life is no longer my own. I must fulfill the dream of someone who's gone."
              ],
              [
                "10",
                "Revelation. I need to know what lies beyond the mysteries of death, the world, or the Mists."
              ],
              [
                "11",
                "Sanctuary. I know the forces at work in the world and strive to create islands apart from them."
              ],
              [
                "12",
                "Truth. I care about the truth above all else, even if it doesn't benefit anyone."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Horror Character Bonds",
            "colLabels": [
              "d12",
              "Bond"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I desperately need to get back to someone or someplace, but I lost them in the Mists."
              ],
              [
                "2",
                "Everything I do is in the service of a powerful master, one I must keep a secret from everyone."
              ],
              [
                "3",
                "I owe much to my vanished mentor. I seek to continue their work even as I search to find them."
              ],
              [
                "4",
                "I've seen great darkness, and I'm committed to being a light against it—the light of all lights."
              ],
              [
                "5",
                "Someone I love has become a monster, murderer, or other threat. It's up to me to redeem them."
              ],
              [
                "6",
                "The world has been convinced of a terrible lie. It's up to me to reveal the truth."
              ],
              [
                "7",
                "I deeply miss someone and am quick to adopt people who remind me of them."
              ],
              [
                "8",
                "A great evil dwells within me. I will fight against it and the world's other evils for as long as I can."
              ],
              [
                "9",
                "I'm desperately seeking a cure to an affliction or a curse, either for someone close to me for myself."
              ],
              [
                "10",
                "Spirits are drawn to me. I do all I can to help them find peace."
              ],
              [
                "11",
                "I use my cunning mind to solve mysteries and find justice for those who've been wronged."
              ],
              [
                "12",
                "I lost someone I care about, but I still see them in guilty visions, recurring dreams, or as a spirit."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Horror Character Flaws",
            "colLabels": [
              "d12",
              "Flaw"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I believe doom follows me and that anyone who gets close to me will face a tragic end."
              ],
              [
                "2",
                "I'm convinced something is after me, appearing in mirrors, dreams, and places where no one could."
              ],
              [
                "3",
                "I'm especially superstitious and live life seeking to avoid bad luck, wicked spirits, or the Mists."
              ],
              [
                "4",
                "I've done unspeakable evil and will do anything to prevent others from finding out."
              ],
              [
                "5",
                "I am exceptionally credulous and believe any story or legend immediately."
              ],
              [
                "6",
                "I'm a skeptic and don't believe in the power of rituals, religion, superstition, or spirits."
              ],
              [
                "7",
                "I know my future is written and that anything I do will lead to a prophesied end."
              ],
              [
                "8",
                "I need to find the best in everyone and everything, even when that means denying obvious malice."
              ],
              [
                "9",
                "I've seen the evil of a type of place—like forests, cities, or graveyards—and resist going there."
              ],
              [
                "10",
                "I'm exceptionally cautious, planning laboriously and devising countless contingencies."
              ],
              [
                "11",
                "I have a reputation for defeating a great evil, but that's a lie and the wicked force knows."
              ],
              [
                "12",
                "I know the ends always justify the means and am quick to make sacrifices to attain my goals."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true,
    "hasFluffImages": true
  },
  {
    "name": "Iron Route Bandit",
    "source": "ALCurseOfStrahd",
    "page": 5,
    "skillProficiencies": [
      {
        "animal handling": true,
        "stealth": true
      }
    ],
    "toolProficiencies": [
      {
        "gaming set": true,
        "vehicles (land)": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "item": "common clothes|phb",
            "displayName": "dark common clothes"
          },
          "pack saddle|phb",
          "burglar's pack|phb",
          {
            "item": "pouch|phb",
            "containsValue": 500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Animal Handling}, {@skill Stealth}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter gaming set|items|source=phb|miscellaneous=mundane|type=gaming set}, {@filter vehicles (land)|items|source=phb;dmg|miscellaneous=mundane|type=vehicle (land)}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A set of dark {@item common clothes|phb}, {@item pack saddle|phb}, {@item burglar's pack|phb}, and a belt {@item pouch|phb} containing 5 gp"
          }
        ]
      },
      {
        "name": "Lifestyle",
        "type": "entries",
        "entries": [
          "Poor"
        ]
      },
      {
        "name": "Overview",
        "type": "entries",
        "entries": [
          "The Iron Route, once the primary trade route between Phlan and Zhentil Keep, used to be a site of extensive banditry until the Phlan's recent occupation. Your time as an erstwhile bandit has given you plenty of experience in the saddle and a knack for acquiring and appraising other people's mounts, pets, and vehicles among other things. This particular set of skills has become very lucrative for you by working for the underground as a horse thief for a local guild of thieves and other shadowy organizations."
        ]
      },
      {
        "name": "Feature: Black-Market Breeder",
        "type": "entries",
        "entries": [
          "You know how to find people who are always looking for stolen animals & vehicles, whether to provide for animal pit fights, or to supply some desperate rogues the means to get away faster on mounts during an illegal job. This contact not only provides you with information of what such animals & vehicles are in high demand in the area, but also offer to give you favors and information (DM choice) if you bring such animals & vehicles to them. Note: This is a variant of the Criminal Contact feature."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "If people leave their gear unsecured, they must not want it very much."
              ],
              [
                "2",
                "I feel more comfortable sleeping under the open sky."
              ],
              [
                "3",
                "I always pre-plan my escape should things go bad; I always like to have an exit strategy."
              ],
              [
                "4",
                "I tend to give animal owners breeding and care advice whether or not they want it."
              ],
              [
                "5",
                "I lost a pet as a child and sadly reflect on it to this day."
              ],
              [
                "6",
                "I always form a powerful, emotional bond with my mount."
              ],
              [
                "7",
                "I recoil at the thought of killing someone else's pet or mount."
              ],
              [
                "8",
                "I prefer to hang to the back of a scuffle or discussion. Better to have my enemies in front of me."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Loyalty. Never bite the hand that feeds. (Good)"
              ],
              [
                "2",
                "Unpredictability. Keep your enemy guessing and off-balance like a confused deer. (Chaotic)"
              ],
              [
                "3",
                "Power. I strive to become leader of the pack at all costs. (Lawful)"
              ],
              [
                "4",
                "Freedom. I bow to no one I don't respect. (Chaotic)"
              ],
              [
                "5",
                "Resourcefulness. Our wits are our most valuable resource in troubled times. (Any)"
              ],
              [
                "6",
                "Unity. Lone wolves fail where the pack succeeds. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I cannot leave a harmed animal behind; I must save it or put it out of its misery."
              ],
              [
                "2",
                "I leave behind my own personal calling cards when I do a job."
              ],
              [
                "3",
                "I do not trust people who do not have a pet, mount, or furry companion."
              ],
              [
                "4",
                "The pelt I wear on my back was from an animal that died saving my life, I will always cherish it."
              ],
              [
                "5",
                "If my pet does not like you, I do not like you!"
              ],
              [
                "6",
                "Once you've ridden with me and fought by my side, I'll be there for you odds be damned."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I talk to animals; I believe they understand me, even if they do not."
              ],
              [
                "2",
                "I growl at and bite anyone who gets too close to my food while I am eating."
              ],
              [
                "3",
                "I strongly dislike enclosed spaces and require intoxication or firm encouragement to enter them."
              ],
              [
                "4",
                "I robbed the wrong caravan once. The owner is a powerful merchant who holds a grudge."
              ],
              [
                "5",
                "I'm an inveterate gambler."
              ],
              [
                "6",
                "I judge people based on how well they stand their ground in a fight. I got not time for cowards..."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Izzet Engineer",
    "source": "GGR",
    "page": 66,
    "skillProficiencies": [
      {
        "arcana": true,
        "investigation": true
      }
    ],
    "languageProficiencies": [
      {
        "choose": {
          "from": [
            "draconic",
            "goblin",
            "other"
          ]
        }
      }
    ],
    "toolProficiencies": [
      {
        "anyArtisansTool": 1
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "special": "Izzet insignia"
          },
          {
            "equipmentType": "toolArtisan"
          },
          {
            "special": "the charred and twisted remains of a failed experiment"
          },
          "hammer|phb",
          "block and tackle|phb",
          "common clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 500
          }
        ]
      }
    ],
    "additionalSpells": [
      {
        "expanded": {
          "s0": [
            "produce flame#c",
            "shocking grasp#c"
          ],
          "s1": [
            "chaos bolt|xge",
            "create or destroy water",
            "unseen servant"
          ],
          "s2": [
            "heat metal",
            "rope trick"
          ],
          "s3": [
            "call lightning",
            "elemental weapon",
            "glyph of warding"
          ],
          "s4": [
            "conjure minor elementals",
            "divination",
            "otiluke's resilient sphere"
          ],
          "s5": [
            "animate objects",
            "conjure elemental"
          ]
        }
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Arcana}, {@skill Investigation}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Choose one of Draconic, Goblin, or Vedalken"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "An Izzet insignia, one set of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools}, the charred and twisted remains of a failed experiment, a {@item hammer|phb}, a {@item block and tackle|phb}, a set of {@item common clothes|phb}, and a belt {@item pouch|phb} containing 5 gp (Azorius 1-zino coins)"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Urban Infrastructure",
        "entries": [
          "The popular conception of the Izzet League is based on mad inventions, dangerous experiments, and explosive blasts. Much of that perception is accurate, but the league is also involved with mundane tasks of construction and architecture—primarily in crafting the infrastructure that allows Ravnicans to enjoy running water, levitating platforms, and other magical and technological wonders.",
          "You have a basic knowledge of the structure of buildings, including the stuff behind the walls. You can also find blueprints of a specific building in order to learn the details of its construction. Such blueprints might provide knowledge of entry points, structural weaknesses, or secret spaces. Your access to such information isn't unlimited. If obtaining or using the information gets you in trouble with the law, the guild can't shield you from the repercussions."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Izzet Guild Spells",
        "entries": [
          "{@i Prerequisite: Spellcasting or Pact Magic class feature}",
          "For you, the spells on the Izzet Guild Spells table are added to the spell list of your spellcasting class. (If you are a multiclass character with multiple spell lists, these spells are added to all of them.)",
          {
            "type": "table",
            "caption": "Izzet Guild Spells",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "Spell Level",
              "Spells"
            ],
            "rows": [
              [
                "Cantrip",
                "{@spell produce flame}, {@spell shocking grasp}"
              ],
              [
                "1st",
                "{@spell chaos bolt|XGE}, {@spell create or destroy water}, {@spell unseen servant}"
              ],
              [
                "2nd",
                "{@spell heat metal}, {@spell rope trick}"
              ],
              [
                "3rd",
                "{@spell call lightning}, {@spell elemental weapon}, {@spell glyph of warding}"
              ],
              [
                "4th",
                "{@spell conjure minor elementals}, {@spell divination}, {@spell Otiluke's resilient sphere}"
              ],
              [
                "5th",
                "{@spell animate objects}, {@spell conjure elemental}"
              ]
            ]
          },
          "Your spells tend to be loud, flashy, or explosive, even when the effect is unremarkable. For example, when you open the portal of a {@spell rope trick} spell, the portal might be outlined by harmless, showy sparkles.",
          "If you use an arcane focus, it probably takes the form of an intricate device that could include metal gauntlets, glass canisters, copper tubing, and leather straps attaching it to your body. The {@item mizzium apparatus|GGR} described in {@book chapter 5|GGR|4|Mizzium Apparatus} is a magical version of this gear.",
          "The {@spell chaos bolt|XGE} spell is a favorite of Izzet spellcasters because of its unpredictable nature."
        ]
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "Members of the Izzet League embody some combination of chaotic, frenetic energy with intellectual curiosity, in varying proportions. Some are committed to academic pursuits, and others just like explosions.",
          {
            "type": "table",
            "caption": "Personality Traits",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I have a hard time staying focused on... oh, and my brain tends to jump from one... did I mention focus?"
              ],
              [
                "2",
                "I get really excited about my ideas and I can't wait to talk about them and start putting them into practice and tinkering with them and I want to tell you about how exciting it all is!"
              ],
              [
                "3",
                "It's not magic—or anything, really—if you do it only halfway. Whatever I do, I give it all I've got."
              ],
              [
                "4",
                "I do what my gut tells me."
              ],
              [
                "5",
                "Life's an experiment, and I can't wait to see what happens."
              ],
              [
                "6",
                "I pepper my speech with the incomprehensible jargon of my trade, like mizzium droplets inserted into a weird-field suspension."
              ],
              [
                "7",
                "Great ideas are fine, but great results are what counts."
              ],
              [
                "8",
                "If you can guess what I'm about to do, that means I've run out of imagination."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Ideals",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "{@b Guild}. My guild is all that really matters. (Any)"
              ],
              [
                "2",
                "{@b Creativity}. Half the world's troubles come from stodgy thinking, stuck in the past. We need innovative solutions. (Chaotic)"
              ],
              [
                "3",
                "{@b Discovery}. Every experiment has the potential to reveal more secrets of the multiverse. (Any)"
              ],
              [
                "4",
                "{@b Science}. A rigorous application of logical principles and protocols will lead us toward progress more surely than any belief system. (Lawful)"
              ],
              [
                "5",
                "{@b Fun}. I love my job! Despite the dangerous working conditions, there's nothing I'd rather do. (Chaotic)"
              ],
              [
                "6",
                "{@b Power}. Someday I'll find or create the magic that will make me the most powerful being in Ravnica. (Evil)"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Bonds",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I have dedicated my life to finding a solution to a scientific problem."
              ],
              [
                "2",
                "I'll never forget the laboratory where I learned my skills, or the other attendants who learned alongside me."
              ],
              [
                "3",
                "I'm convinced it was sabotage that destroyed my first laboratory and killed many of my friends, and I seek revenge against whoever did it."
              ],
              [
                "4",
                "I have the schematics for an invention that I hope to build one day, once I have the necessary resources."
              ],
              [
                "5",
                "A fellow student and I are racing to solve the same scientific puzzle."
              ],
              [
                "6",
                "I would do anything the guildmaster told me to do."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Flaws",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "If there's a plan, I'll probably forget it. If I don't forget it, I'll probably ignore it."
              ],
              [
                "2",
                "I get bored easily, and if nothing is happening I'll make something happen."
              ],
              [
                "3",
                "Nothing is ever simple, and if it seems simple, I'll find a way to make it complicated."
              ],
              [
                "4",
                "I tend to ignore sleep for days when I'm conducting research, often at the expense of my own health and safety."
              ],
              [
                "5",
                "I'm convinced there's not a soul in Ravnica, except maybe the great Niv-Mizzet, who can match my boundless intellect."
              ],
              [
                "6",
                "I'm incapable of admitting a flaw in my logic."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Contacts",
        "entries": [
          "The laboratories of the Izzet League are constantly starting up new projects and dissolving old ones, so it's easy for even the lowliest attendant to make friends (and enemies) in laboratories across Ravnica.",
          "Roll twice on the Izzet Contacts table (for an ally and a rival) and once on the Non-Izzet Contacts table.",
          {
            "type": "table",
            "caption": "Izzet Contacts",
            "colLabels": [
              "d8",
              "Contact"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "An older relative is a member of the guild's board of directors."
              ],
              [
                "2",
                "I know a sprite who carries important messages among the guild's laboratories."
              ],
              [
                "3",
                "A sibling is the head of a laboratory doing exotic research."
              ],
              [
                "4",
                "A former colleague is now an attendant in a laboratory in the central guildhall."
              ],
              [
                "5",
                "I'm in regular communication with an instructor who set me on the course of my life and research."
              ],
              [
                "6",
                "I had a romance with a chemister working in the Blistercoils."
              ],
              [
                "7",
                "As an attendant, I had a fierce rivalry with another attendant for our supervisor's attention."
              ],
              [
                "8",
                "The guildmaster, Niv-Mizzet, took note of one of my experiments!"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Non-Izzet Contacts",
            "colLabels": [
              "d10",
              "Contact"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "An Azorius inspector seems interested in my work."
              ],
              [
                "2",
                "I was ready to join the Boros before I decided on Izzet, and I sometimes still hear from the sergeant who tried to recruit me."
              ],
              [
                "3",
                "One of my former assistants turned out to be a Dimir spy. We're not on friendly terms anymore, but we have a habit of running into each other."
              ],
              [
                "4",
                "A Golgari assassin killed a bitter rival of mine, leaving me with conflicted feelings."
              ],
              [
                "5",
                "I helped a minor Gruul chieftain acquire an Izzet weapon."
              ],
              [
                "6",
                "Roll an additional Izzet contact; you can decide if the contact is an ally or a rival."
              ],
              [
                "7",
                "An Orzhov banker financed my laboratory's current work and expects great returns."
              ],
              [
                "8",
                "I have a cousin in the Cult of Rakdos, and we get along quite well."
              ],
              [
                "9",
                "A former attendant from the same laboratory ran off to join the Selesnya, and we get into a big argument every time we run into each other."
              ],
              [
                "10",
                "I compare notes and techniques with a Simic scientist over lunch sometimes."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "How Do I Fit In?",
        "entries": [
          "Whatever your role in the Izzet League, you are expected to contribute to its research in some way. That contribution might involve participating in tests, whether as an assistant, a researcher, or a subject. You might be one of the soldiers who protects a laboratory, or a laborer responsible for lifting heavy pieces of equipment into place. Everyone's contribution matters, even if the Izzet know that some matter more than others."
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Knight of Solamnia",
    "source": "DSotDQ",
    "page": 30,
    "prerequisite": [
      {
        "campaign": [
          "Dragonlance"
        ]
      }
    ],
    "feats": [
      {
        "squire of solamnia|dsotdq": true
      }
    ],
    "skillProficiencies": [
      {
        "athletics": true,
        "survival": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 2
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "special": "insignia of rank"
          },
          "playing card set|phb",
          "common clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "fromFeature": {
      "feats": true
    },
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Athletics}, {@skill Survival}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Two of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "An insignia of rank, a {@item playing card set|phb|deck of cards}, a set of {@item common clothes|PHB}, and a {@item pouch|PHB} containing 10 gp"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Squire of Solamnia",
        "entries": [
          "You gain the {@feat Squire of Solamnia|DSotDQ} feat.",
          "In addition, the Knights of Solamnia provide you free, modest lodging and food at any of their fortresses or encampments."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Building a Knight of Solamnia Character",
        "entries": [
          "Any class that has martial prowess can be a good fit in the Knights of Solamnia. {@class Fighter||Fighters} and {@class paladin||paladins} make up the bulk of the knighthood's forces. {@class Cleric||Clerics} (often with the {@class Cleric|PHB|War|War} domain) can also be found among the knights' ranks.",
          "For a more unusual take on a Knight of Solamnia character, consider playing a bard of the {@class Bard|PHB|College of Valor|Valor} (or the {@class Bard|PHB|College of Swords|Swords|XGE} from {@book Xanathar's Guide to Everything|XGE}) or a {@class barbarian} devoted to the ideals of the nature god {@deity Habbakuk|dragonlance} (perhaps adopting the {@class barbarian||Path of the Zealot|Zealot|xge} from {@book Xanathar's Guide to Everything|XGE}).",
          {
            "type": "entries",
            "name": "Knight of Solamnia Trinkets",
            "entries": [
              "When you make your character, roll once on the Knight of Solamnia Trinkets table instead of on the {@item Trinket|PHB|Trinkets table} in the Player's Handbook for your starting trinket.",
              {
                "type": "table",
                "caption": "Knight of Solamnia Trinkets",
                "colLabels": [
                  "d6",
                  "Trinket"
                ],
                "colStyles": [
                  "col-1 text-center",
                  "col-11"
                ],
                "rows": [
                  [
                    "1",
                    "A flat silver disk you record your heroics upon"
                  ],
                  [
                    "2",
                    "A piece of a fallen knight's armor"
                  ],
                  [
                    "3",
                    "A pendant featuring a crown, a rose, or a sword"
                  ],
                  [
                    "4",
                    "The pommel of your mentor's sword"
                  ],
                  [
                    "5",
                    "A meaningful favor from someone you defended—perhaps a handkerchief or glove"
                  ],
                  [
                    "6",
                    "A locket with a sketch of a silver dragon inside"
                  ]
                ]
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
    "name": "Knight of the Order",
    "source": "SCAG",
    "page": 151,
    "skillProficiencies": [
      {
        "persuasion": true,
        "choose": {
          "from": [
            "arcana",
            "history",
            "nature",
            "religion"
          ]
        }
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "choose": {
          "from": [
            "musical instrument",
            "gaming set"
          ]
        }
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "traveler's clothes|phb",
          {
            "special": "signet, banner, or seal representing your place or rank in the order"
          },
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Persuasion}, plus one from among {@skill Arcana}, {@skill History}, {@skill Nature}, and {@skill Religion}, as appropriate for your order"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "Your choice of a {@filter gaming set|items|source=phb|miscellaneous=mundane|type=gaming set} or a {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Any one of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "One set of {@item traveler's clothes|phb}, a signet, banner, or seal representing your place or rank in the order, and a {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "name": "Feature: Knightly Regard",
        "type": "entries",
        "entries": [
          "You receive shelter and succor from members of your knightly order and those who are sympathetic to its aims. If your order is a religious one, you can gain aid from temples and other religious communities of your deity. Knights of civic orders can get help from the community—whether a lone settlement or a great nation—that they serve, and knights of philosophical orders can find help from those they have aided in pursuit of their ideals, and those who share their ideals.",
          "This help comes in the form of shelter and meals, and healing when appropriate, as well as occasionally risky assistance, such as a band of local citizens rallying to aid a sorely pressed knight, or those who support the order helping to smuggle a knight out of town when he or she is being hunted unjustly."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "Use the tables for the {@background soldier} background in the Player's Handbook as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity as a knight of your order.",
          "Your bond almost always involves the order to which you belong (or at least key members of it), and it is highly unusual for a knight's ideal not to reflect the agenda, sentiment, or philosophy of one's order."
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Lorehold Student",
    "source": "SCC",
    "page": 31,
    "feats": [
      {
        "strixhaven initiate|scc": true
      }
    ],
    "skillProficiencies": [
      {
        "history": true,
        "religion": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 2
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "ink (1-ounce bottle)|phb",
          "ink pen|phb",
          "hammer|phb",
          "hooded lantern|phb",
          "tinderbox|phb",
          {
            "special": "tome of history"
          },
          {
            "special": "school uniform"
          },
          {
            "item": "pouch|phb",
            "containsValue": 1500
          }
        ]
      }
    ],
    "additionalSpells": [
      {
        "expanded": {
          "s1": [
            "comprehend languages",
            "identify"
          ],
          "s2": [
            "borrowed knowledge|scc",
            "locate object"
          ],
          "s3": [
            "speak with dead",
            "spirit guardians"
          ],
          "s4": [
            "arcane eye",
            "stone shape"
          ],
          "s5": [
            "flame strike",
            "legend lore"
          ]
        }
      }
    ],
    "fromFeature": {
      "additionalSpells": true,
      "feats": true
    },
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill History}, {@skill Religion}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Two of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@item Ink (1-ounce bottle)|PHB|bottle of black ink}, an {@item ink pen|PHB}, a {@item hammer|PHB}, a {@item hooded lantern|PHB}, a {@item tinderbox|PHB}, a tome of history, a school uniform, and a {@item pouch|phb} containing 15 gp"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Lorehold Initiate",
        "entries": [
          "You gain the {@feat Strixhaven Initiate|SCC} feat and must choose Lorehold within it.",
          "In addition, if you have the Spellcasting or Pact Magic feature, the spells on the Lorehold Spells table are added to the spell list of your spellcasting class. (If you are a multiclass character with multiple spell lists, these spells are added to all of them.)",
          {
            "type": "table",
            "caption": "Lorehold Spells",
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
                "{@spell Comprehend Languages}, {@spell Identify}"
              ],
              [
                "2nd",
                "{@spell Borrowed Knowledge|SCC}, {@spell Locate Object}"
              ],
              [
                "3rd",
                "{@spell Speak with Dead}, {@spell Spirit Guardians}"
              ],
              [
                "4th",
                "{@spell Arcane Eye}, {@spell Stone Shape}"
              ],
              [
                "5th",
                "{@spell Flame Strike}, {@spell Legend Lore}"
              ]
            ]
          },
          "Consider customizing how your spells look when you cast them. Your Lorehold spells might create displays of golden light. You might use a tome or a scroll as a spellcasting focus, and your spell effects might reflect the appearance of the reference books you study."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Building a Lorehold Character",
        "entries": [
          "Any class or subclass that deals with knowledge of the past can be a good fit in Lorehold. Bards thrive in Lorehold, and wizards (particularly those of the {@class Wizard|PHB|School of Divination|Divination|PHB}) are numerous among its students. Clerics (often with the {@class Cleric|PHB|Knowledge|Knowledge|PHB} or {@class Cleric|PHB|Light|Light|PHB} domains) are also quite common.",
          "For a more unusual take on a Lorehold student, you could consider playing a barbarian with a primal connection to the past (perhaps adopting the {@class Barbarian|PHB|Path of the Ancestral Guardian|Ancestral Guardian|XGE} from {@book Xanathar's Guide to Everything|XGE}) or a paladin whose {@class Paladin|PHB|Oath of the Ancients|Ancients|PHB} gives a concrete link to history.",
          {
            "type": "entries",
            "name": "Suggested Characteristics",
            "entries": [
              "Methodical historians and daring adventurers alike can be found among the ranks of Lorehold college. The Lorehold Personality Traits table suggests a variety of traits you might adopt for your character.",
              {
                "type": "table",
                "caption": "Lorehold Personality Traits",
                "colLabels": [
                  "d6",
                  "Personality Trait"
                ],
                "colStyles": [
                  "col-2 text-center",
                  "col-10"
                ],
                "rows": [
                  [
                    "1",
                    "I thrive on esoteric lore. The more obscure the historical references I can include in everyday conversation, the better."
                  ],
                  [
                    "2",
                    "By searching for these lost artifacts, I hope to find who I really am along the way."
                  ],
                  [
                    "3",
                    "I can barely go a minute without talking about my research. I have so much knowledge in my head, and it needs to be let out somewhere!"
                  ],
                  [
                    "4",
                    "The spirits of the dead are so much more interesting to talk with than living classmates."
                  ],
                  [
                    "5",
                    "I can speak eloquently about the historical ramifications of an ancient war. But ask me to add two-digit numbers together, and I'm a mess."
                  ],
                  [
                    "6",
                    "In the end, it's all just entropy. Everything falls apart someday."
                  ]
                ]
              }
            ]
          },
          {
            "type": "entries",
            "name": "Lorehold Trinkets",
            "entries": [
              "When you make your character, you may roll once on the Lorehold Trinkets table, instead of on the {@item trinket|phb|Trinkets table} in the {@book Player's Handbook|PHB}, for your starting trinket.",
              {
                "type": "table",
                "caption": "Lorehold Trinkets",
                "colLabels": [
                  "d6",
                  "Trinket"
                ],
                "colStyles": [
                  "col-2 text-center",
                  "col-10"
                ],
                "rows": [
                  [
                    "1",
                    "A map made of concentric circles that can be rotated around the page"
                  ],
                  [
                    "2",
                    "A puzzle box bedecked with amber"
                  ],
                  [
                    "3",
                    "A dented brass compass with a red needle"
                  ],
                  [
                    "4",
                    "The head of a broken statue that houses the consciousness of a snarky sage"
                  ],
                  [
                    "5",
                    "A sheet of parchment embossed with tactile lettering, glowing red"
                  ],
                  [
                    "6",
                    "A broken dagger with a wavy blade and a serpentine hilt"
                  ]
                ],
                "data": {
                  "tableInclude": true
                }
              }
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Luxonborn (Acolyte)",
    "source": "EGW",
    "page": 203,
    "_copy": {
      "name": "Acolyte",
      "source": "PHB"
    },
    "hasFluff": true
  },
  {
    "name": "Lyceum Scholar",
    "source": "TDCSR",
    "page": 183,
    "skillProficiencies": [
      {
        "choose": {
          "from": [
            "arcana",
            "history",
            "persuasion"
          ],
          "count": 2
        }
      }
    ],
    "languageProficiencies": [
      {
        "any": 2
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "item": "fine clothes|phb",
            "displayName": "A set of fine clothes"
          },
          {
            "special": "student uniform"
          },
          {
            "item": "writing kit|TDCSR"
          },
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "Your choice of two of the following: {@skill Arcana}, {@skill History}, or {@skill Persuasion}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Two of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A set of {@item fine clothes|phb}, a student uniform, a {@item writing kit|TDCSR} ({@item pouch|PHB|small pouch} with a quill, {@item Ink (1-ounce bottle)|PHB|ink}, {@item Parchment (one sheet)|PHB|folded parchment} and a penknife), and a belt {@item pouch|PHB} containing 10 gp"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Academic Requisition",
        "page": 184,
        "entries": [
          "You've cleared enough lessons—and have gained an ally or two among the staff—to enable access to certain private areas within the {@book Lyceum|TDCSR|3|5. Alabaster Lyceum} and other allied universities. Whenever you're on {@book Lyceum|TDCSR|3|5. Alabaster Lyceum} grounds or at another major academic institution, you can requisition any set of {@filter tools|items|source=phb|miscellaneous=mundane|type=artisan's tools} found in the fifth edition rules. Each set of {@filter tools|items|source=phb|miscellaneous=mundane|type=artisan's tools} is magically marked to sound an alarm if they are removed from the university's grounds.",
          "When you seek services such as spellcasting from an NPC at the {@book Alabaster Lyceum|TDCSR|3|5. Alabaster Lyceum} or a related institution, you can use those services at a 25 percent discount, at the GM's discretion."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "page": 184,
        "entries": [
          "The {@book Alabaster Lyceum|TDCSR|3|5. Alabaster Lyceum} accepts students of all major trades, the fine arts, and the magical arts. Pupils talented and privileged enough to be accepted travel to {@book Emon|TDCSR|3|Emon, the City of Fellowship} from all over Tal'Dorei, seeking to study among some of the greatest minds and most talented arcanists in the land. If you came from a smaller city, a rural area, or Tal'Dorei's relatively uncharted wilderness, studying at the {@book Lyceum|TDCSR|3|5. Alabaster Lyceum} might have left you with a sense of culture shock, for good or for ill.",
          "Your bond is likely associated with your goals as a student or graduate. Your ideal probably involves your hopes in using the knowledge you've gained at the {@book Lyceum|TDCSR|3|5. Alabaster Lyceum}, and your travels as an adventurer, to tailor the world to your liking.",
          {
            "type": "table",
            "caption": "Lyceum Scholar Personality Traits",
            "colLabels": [
              "{@dice d8}",
              "Personality Trait"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I can't believe I'm here! At the {@book Alabaster Lyceum|TDCSR|3|5. Alabaster Lyceum}. Oh, gods, I've dreamed of this my whole life, and now I'm here!"
              ],
              [
                "2",
                "I can't believe I squandered all the opportunities I had at school. I was supposed to be learning good stuff, but I wasted it all daydreaming about fighting monsters."
              ],
              [
                "3",
                "Every night at school, I'd knock back a couple of meads and read with my pals! Just a bunch of nerds having fun, and I loved it."
              ],
              [
                "4",
                "Everyone at school was such a stick in the mud. Dressing the same, listening to the same bards...ugh, it's sad. Just be yourself."
              ],
              [
                "5",
                "I'm happiest when I've got my little party with me. At school, it was like we were a squad of heroes, slaying projects like monsters."
              ],
              [
                "6",
                "I'd really rather you didn't bother me. Can't you see I'm studying here?"
              ],
              [
                "7",
                "I don't care. I just don't care about it all. The dates I had to memorize, the formulae I learned...I just want to run away and live!"
              ],
              [
                "8",
                "I'm just...tired. All the time. Oh, adventuring, sure, that's fine, as long as I can find time to...nap...goodnight."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Lyceum Scholar Ideals",
            "colLabels": [
              "{@dice d6}",
              "Ideal"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "{@b Preparedness}. I can't go out into the world unless I know what I'm up against. Study first, act later. (Neutral)"
              ],
              [
                "2",
                "{@b Stardom}. Having a team is good and all, but you can't win a game of ball without the star charger, and you know that's me. (Evil)"
              ],
              [
                "3",
                "{@b Individuality}. The world keeps us down by trying to put us all into little boxes. I'm tired of living in my box, and I don't care what you think about it. (Chaotic)"
              ],
              [
                "4",
                "{@b Purpose}. I study because there are things I need to know. I'll find my place in the world, and I'll make the world better. (Good)"
              ],
              [
                "5",
                "{@b Code of Conduct}. The student code is there to benefit all students, you know. It's the same for laws! (Lawful)"
              ],
              [
                "6",
                "{@b Recreation}. All this studying crap wasn't worth anything if you weren't partying when you were done. Meet me down at the tavern, okay? (Chaotic)"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Lyceum Scholar Bonds",
            "colLabels": [
              "{@dice d6}",
              "Bond"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I came to the {@book Lyceum|TDCSR|3|5. Alabaster Lyceum} with no one, but I fell in love with the city of {@book Emon|TDCSR|3|Emon, the City of Fellowship}. I've finally found a place that feels like home!"
              ],
              [
                "2",
                "Most of my professors drove me to frustration, but there's one who was kind and wise. I know they'll always have my back."
              ],
              [
                "3",
                "My family saved every copper piece to give me the opportunities I have now. I can't let them down."
              ],
              [
                "4",
                "I came to the {@book Lyceum|TDCSR|3|5. Alabaster Lyceum} with a childhood friend, but we've long been drifting apart."
              ],
              [
                "5",
                "Discovery is the only thing that matters to me. The topic doesn't matter. Books keep me company on my loneliest days."
              ],
              [
                "6",
                "The {@book Lyceum|TDCSR|3|5. Alabaster Lyceum} is my life. I'd give up anything—everything—to protect it from harm."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Lyceum Scholar Flaws",
            "colLabels": [
              "{@dice d6}",
              "Flaw"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "The {@book Lyceum|TDCSR|3|5. Alabaster Lyceum} taught me to never want to leave my room. The campus was so huge, and the crowds were so horrible."
              ],
              [
                "2",
                "You think you're so great just because you've got muscles, and endurance, and...shut up! Read a book sometime!"
              ],
              [
                "3",
                "Huh? What? Sorry, I was thinking about a test I need to retake when I get back to school...."
              ],
              [
                "4",
                "I spent too much time studying. Now I don't have any friends."
              ],
              [
                "5",
                "If you don't match my aesthetic, I'm not interested in you. We can work together, but we won't be friends. Got it?"
              ],
              [
                "6",
                "I'm always striving for perfection. I got top of my class, sure, but only with a 98 average. And that's. Not. Perfect."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true,
    "hasFluffImages": true
  },
  {
    "name": "Mage of High Sorcery",
    "source": "DSotDQ",
    "page": 30,
    "prerequisite": [
      {
        "campaign": [
          "Dragonlance"
        ]
      }
    ],
    "feats": [
      {
        "initiate of high sorcery|dsotdq": true
      }
    ],
    "skillProficiencies": [
      {
        "arcana": true,
        "history": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 2
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "ink (1-ounce bottle)|phb",
          "ink pen|phb",
          "common clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "fromFeature": {
      "feats": true
    },
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Arcana}, {@skill History}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Two of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@item Ink (1-ounce bottle)|PHB|bottle of colored ink}, an {@item ink pen|phb}, a set of {@item common clothes|phb}, and a {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Initiate of High Sorcery",
        "entries": [
          "You gain the {@feat Initiate of High Sorcery|DSotDQ} feat.",
          "In addition, the Mages of High Sorcery provide you with free, modest lodging and food indefinitely at any occupied Tower of High Sorcery and for one night at the home of an organization member."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Building a Mage of High Sorcery Character",
        "entries": [
          "Mages of High Sorcery are typically sorcerers, warlocks, or wizards and might have any subclass. Spellcasters who gain their magic through devotion are less likely to be welcomed among the traditionalist mages. Nevertheless, the Mages of High Sorcery are shrewd, and they rarely let unique opportunities or individuals pass them by. Even members of martial classes who train in magic might find a rare place among the group's three orders.",
          {
            "type": "entries",
            "name": "Mage of High Sorcery Trinkets",
            "entries": [
              "When you make your character, roll once on the Mage of High Sorcery Trinkets table instead of on the {@item trinket|phb|Trinkets table} in the Player's Handbook for your starting trinket.",
              {
                "type": "table",
                "caption": "Mage of High Sorcery Trinkets",
                "colLabels": [
                  "d6",
                  "Trinket"
                ],
                "colStyles": [
                  "col-1 text-center",
                  "col-11"
                ],
                "rows": [
                  [
                    "1",
                    "An unopened letter from your first teacher"
                  ],
                  [
                    "2",
                    "A broken wand made of black, red, or white wood"
                  ],
                  [
                    "3",
                    "A scroll bearing an incomprehensible formula"
                  ],
                  [
                    "4",
                    "A purposeless device covered in colored stones that can fold into various enigmatic shapes"
                  ],
                  [
                    "5",
                    "A pouch or spellbook emblazoned with the triple moon symbol of the Mages of High Sorcery"
                  ],
                  [
                    "6",
                    "A lens through which you can see Krynn's invisible black moon, Nuitari"
                  ]
                ]
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
    "name": "Mageborn",
    "source": "DoDk",
    "page": 245,
    "prerequisite": [
      {
        "level": {
          "level": 1,
          "class": {
            "name": "Bard",
            "visible": true
          }
        }
      },
      {
        "level": {
          "level": 1,
          "class": {
            "name": "Sorcerer",
            "visible": true
          }
        }
      },
      {
        "level": {
          "level": 1,
          "class": {
            "name": "Warlock",
            "visible": true
          }
        }
      },
      {
        "level": {
          "level": 1,
          "class": {
            "name": "Wizard",
            "visible": true
          }
        }
      }
    ],
    "skillProficiencies": [
      {
        "choose": {
          "from": [
            "arcana",
            "deception",
            "investigation",
            "perception"
          ],
          "count": 2
        }
      }
    ],
    "languageProficiencies": [
      {
        "draconic": true
      },
      {
        "elvish": true
      }
    ],
    "toolProficiencies": [
      {
        "choose": {
          "from": [
            "calligrapher's supplies",
            "alchemist's supplies"
          ]
        }
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "item": "wand|phb",
            "displayName": "gnarled wand made of wood"
          },
          {
            "special": "duster jacket"
          },
          {
            "special": "satchel for material components and potions"
          }
        ]
      },
      {
        "a": [
          "amulet|phb"
        ],
        "b": [
          {
            "item": "trinket|phb",
            "displayName": "other trinket of importance to you"
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "Two of the following: {@skill Arcana}, {@skill Deception}, {@skill Investigation}, {@skill Perception}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "Either calligraphers' supplies or alchemists' supplies"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Draconic or Elvish"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A gnarled {@item wand|PHB} made of wood, a duster jacket, a satchel for material components and potions, an {@item amulet|PHB} or other {@item trinket|PHB} of importance to you"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Mageborn Quirk",
        "entries": [
          {
            "type": "table",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d8",
              "Mageborn Quirk"
            ],
            "rows": [
              [
                "1",
                "My eyes are two different colours."
              ],
              [
                "2",
                "Whenever I cast a spell, my voice echoes and an unknown wind seems to blow around me."
              ],
              [
                "3",
                "My eyes glow with octarine light when I am casting spells."
              ],
              [
                "4",
                "I hear voices and sounds when close to magical entities, as if the magic itself speaks to me."
              ],
              [
                "5",
                "I have full conversations with myself out loud that occasionally can get heated."
              ],
              [
                "6",
                "Magic floods my mind and makes it difficult to sleep without constant nightmares and visions."
              ],
              [
                "7",
                "I speak to beings from other planes of existence who manifest as simple creatures before me."
              ],
              [
                "8",
                "I have a birthmark in a unique shape that appears every day for 2 and a half hours, then vanishes."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Bookworm",
        "entries": [
          "Once per day after you finish a long rest, you can spend one hour to create a spell scroll. You need only paper and ink to do so, and the level of the spell you can create equals one half your proficiency bonus (rounded down) or lower. The scroll you create must be a spell you know or have prepared. It crumbles to dust in 24 hours.",
          {
            "type": "table",
            "caption": "Suggested Characteristics",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "rows": [
              [
                "1",
                "I idolize one of the archmages of the Academy and hope to prove myself to them in time."
              ],
              [
                "2",
                "Nothing will get between me and my goals. When people say something I care about is impossible, I prove them wrong."
              ],
              [
                "3",
                "I am confident in my powers, and do not fear the horrors of Drakkenheim, for I can bend reality."
              ],
              [
                "4",
                "I am constantly reading books. The more knowledge I can obtain, the more I can outwit friends and foes alike."
              ],
              [
                "5",
                "I am a mage for hire and am not afraid to use my magic to get my hands dirty. A lot of people will pay top coin for a skillset like mine."
              ],
              [
                "6",
                "I am a sucker for a good mystery and pride myself in my ability to solve them."
              ],
              [
                "7",
                "Everyone is always so serious - we all die in the end, might as well enjoy the ride."
              ],
              [
                "8",
                "I always push myself to be the best at whatever it is I set out to do."
              ]
            ]
          },
          {
            "type": "table",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "rows": [
              [
                "1",
                "Respect. My powers are a blessing and a curse, and I work diligently to show people not to fear magic. (Good)"
              ],
              [
                "2",
                "Knowledge. I left the Academy on good terms to work at one of the many historical institutes of the world, hoping that my love for books and history would be of use. (Any)"
              ],
              [
                "3",
                "Love. I left the Academy due to love, and I plan to keep my promise to that love. (Good)"
              ],
              [
                "4",
                "Forgiveness. I must undo the mistakes of my past by proving myself to those I care about most. (Good)"
              ],
              [
                "5",
                "Power. Delerium is power, and I must learn all I can about its origins and properties if I am to harness that power. (Chaotic)"
              ],
              [
                "6",
                "Independence. I stand alone from the Academy for a reason. I do not wish to be on their bad side, but I do not wish to be on their good side either. (Neutral)"
              ]
            ]
          },
          {
            "type": "table",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d6",
              "Bond"
            ],
            "rows": [
              [
                "1",
                "It is my duty to protect the Amethyst Academy."
              ],
              [
                "2",
                "My life's work in the study of delerium caused my expulsion. I must continue that research to prove its value."
              ],
              [
                "3",
                "The mysteries of my past and my power are tied to the meteor. I need answers."
              ],
              [
                "4",
                "My terrible mistake was covered up by my mentor in the Academy. I owe them my life."
              ],
              [
                "5",
                "My nightmares have guided me to Drakkenheim. I must investigate these visions."
              ],
              [
                "6",
                "I come from a long line of wizards, my exit from the Academy was highly upsetting to them and I need to earn my way back into their favour, even if it means risking my life in Drakkenheim."
              ]
            ]
          },
          {
            "type": "table",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "rows": [
              [
                "1",
                "I walk straight into danger. What's the worst that could happen?"
              ],
              [
                "2",
                "I believe my plan is always far superior to everyone else's."
              ],
              [
                "3",
                "I am distracted by possibilities of gaining knowledge or power, regardless of the cost or danger."
              ],
              [
                "4",
                "I overcomplicate most situations with small details and over analyzing simple things."
              ],
              [
                "5",
                "I get angry quickly, and cause more harm than good with my magic when I get mad."
              ],
              [
                "6",
                "I can't get enough delerium. I want the power for myself."
              ]
            ]
          }
        ],
        "data": {
          "isFeature": true
        }
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Marine",
    "source": "GoS",
    "page": 31,
    "skillProficiencies": [
      {
        "athletics": true,
        "survival": true
      }
    ],
    "toolProficiencies": [
      {
        "vehicles (water)": true,
        "vehicles (land)": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "item": "dagger|phb",
            "displayName": "dagger that belonged to a fallen comrade"
          },
          {
            "special": "folded flag emblazoned with the symbol of your ship or company"
          },
          "traveler's clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Athletics}, {@skill Survival}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@filter Vehicles (water, land)|items|source=phb;dmg|miscellaneous=mundane|type=vehicle (land);vehicle (water)}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@item dagger|phb} that belonged to a fallen comrade, a folded flag emblazoned with the symbol of your ship or company, a set of {@item traveler's clothes|phb}, and a belt {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Steady",
        "entries": [
          "You can move twice the normal amount of time (up to 16 hours) each day before being subject to the effect of a forced march (see \\"Travel Pace\\" in chapter 8 of the Player's Handbook). Additionally, you can automatically find a safe route to land a boat on shore, provided such a route exists."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Hardship Endured",
        "entries": [
          "Hardship in your past has forged you into an unstoppable living weapon. This hardship is essential to you and is at the heart of a personal philosophy or ethos that often guides your actions. You can roll on the following table to determine this hardship or choose one that best fits your character.",
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Hardship"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Nearly Drowned. You hid underwater to avoid detection by enemies and held your breath for an extremely long time. Just before you would have died, you had a revelation about your existence."
              ],
              [
                "2",
                "Captured. You spent months enduring thirst, starvation, and torture at the hands of your enemy, but you never broke."
              ],
              [
                "3",
                "Sacrifice. You enabled the escape of your fellow soldiers, but at great cost to yourself. Some of your past comrades may think you're dead."
              ],
              [
                "4",
                "Juggernaut. No reasonable explanation can explain how you survived a particular battle. Every arrow and bolt missed you. You slew scores of enemies single-handedly and led your comrades to victory."
              ],
              [
                "5",
                "Stowaway. For days, you hid in the bilge of an enemy ship, surviving on brackish water and foolhardy rats. At the right moment, you crept up to the deck and took over the ship on your own."
              ],
              [
                "6",
                "Leave None Behind. You carried an injured marine for miles to avoid capture and death."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "Marines are looked up to by other soldiers and respected by their superiors. They are veteran warriors who rarely lose composure on the battlefield. Marines who leave the service tend to work as mercenaries, but their combat experience also makes them excellent adventurers. Though they are self-reliant, marines tend to operate best in groups, valuing camaraderie and the companionship of like-minded individuals.",
          {
            "type": "table",
            "caption": "Marine Personality Traits",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I speak rarely but mean every word I say."
              ],
              [
                "2",
                "I laugh loudly and see the humor in stressful situations."
              ],
              [
                "3",
                "I prefer to solve problems without violence, but I finish fights decisively."
              ],
              [
                "4",
                "I enjoy being out in nature; poor weather never sours my mood."
              ],
              [
                "5",
                "I am dependable."
              ],
              [
                "6",
                "I am always working on some project or other."
              ],
              [
                "7",
                "I become cantankerous and quiet in the rain."
              ],
              [
                "8",
                "When the sea is within my sight, my mood is jovial and optimistic."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Marine Ideals",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "{@b Teamwork.} Success depends on cooperation and communication. (Good)"
              ],
              [
                "2",
                "{@b Code.} The marines' code provides a solution for every problem, and following it is imperative. (Lawful)"
              ],
              [
                "3",
                "{@b Embracing.} Life is messy. Throwing yourself into the worst of it is necessary to get the job done. (Chaotic)"
              ],
              [
                "4",
                "{@b Might.} The strong train so that they might rule those who are weak. (Evil)"
              ],
              [
                "5",
                "{@b Bravery.} To act when others quake in fear—this is the essence of the warrior. (Any)"
              ],
              [
                "6",
                "{@b Perseverance.} No injury or obstacle can turn me from my goal. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Marine Bonds",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I face danger and evil to offset an unredeemable act in my past."
              ],
              [
                "2",
                "I. Will. Finish. The. Job."
              ],
              [
                "3",
                "I must set an example of hope for those who have given up."
              ],
              [
                "4",
                "I'm searching for a fellow marine captured by an elusive enemy."
              ],
              [
                "5",
                "Fear leads to tyranny, and both must be eradicated."
              ],
              [
                "6",
                "My commander betrayed my unit, and I will have revenge."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Marine Flaws",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I grow combative and unpredictable when I drink."
              ],
              [
                "2",
                "I find civilian life difficult and struggle to say the right thing in social situations."
              ],
              [
                "3",
                "My intensity can drive others away."
              ],
              [
                "4",
                "I hold grudges and have difficulty forgiving others."
              ],
              [
                "5",
                "I become irrational when innocent people are hurt."
              ],
              [
                "6",
                "I sometimes stay up all night listening to the ghosts of my fallen enemies."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Mercenary Veteran",
    "source": "SCAG",
    "page": 152,
    "skillProficiencies": [
      {
        "athletics": true,
        "persuasion": true
      }
    ],
    "toolProficiencies": [
      {
        "gaming set": true,
        "vehicles (land)": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "item": "traveler's clothes|phb",
            "displayName": "uniform of your company"
          },
          {
            "special": "insignia of your rank"
          },
          {
            "equipmentType": "setGaming"
          },
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Athletics}, {@skill Persuasion}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter gaming set|items|source=phb|miscellaneous=mundane|type=gaming set}, {@filter vehicles (land)|items|source=phb;dmg|miscellaneous=mundane|type=vehicle (land)}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A uniform of your company ({@item traveler's clothes|phb} in quality), an insignia of your rank, a {@filter gaming set|items|source=phb|miscellaneous=mundane|type=gaming set} of your choice, and a {@item pouch|phb} containing the remainder of your last wages (10 gp)."
          }
        ]
      },
      {
        "name": "Feature: Mercenary Life",
        "type": "entries",
        "entries": [
          "You know the mercenary life as only someone who has experienced it can. You are able to identify mercenary companies by their emblems, and you know a little about any such company, including who has hired them recently. You can find the taverns and festhalls where mercenaries abide in any area, as long as you speak the language. You can find mercenary work between adventures sufficient to maintain a comfortable lifestyle (see \\"{@book Practicing a Profession|PHB|8|Practicing a Profession}\\" under \\"Downtime Activities\\" in chapter 8 of the Player's Handbook)."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "Use the tables for the {@background soldier} background in the Player's Handbook as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity as a mercenary.",
          "Your bond could be associated with the company you traveled with previously, or with some of the comrades you served with. The ideal you embrace largely depends on your worldview and your motivation for fighting."
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Mulmaster Aristocrat",
    "source": "ALElementalEvil",
    "page": 5,
    "skillProficiencies": [
      {
        "deception": true,
        "performance": true
      }
    ],
    "toolProficiencies": [
      {
        "anyArtisansTool": 1,
        "musical instrument": true
      }
    ],
    "startingEquipment": [
      {
        "a": [
          {
            "equipmentType": "toolArtisan"
          }
        ],
        "b": [
          {
            "equipmentType": "instrumentMusical"
          }
        ]
      },
      {
        "_": [
          "fine clothes|phb",
          {
            "special": "purse",
            "containsValue": 1000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Deception}, {@skill Performance}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of artistic {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools} and one {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "One set of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools} or {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument}, a set of {@item fine clothes|phb}, and a purse containing 10 gp"
          }
        ]
      },
      {
        "name": "Lifestyle",
        "type": "entries",
        "entries": [
          "Wealthy"
        ]
      },
      {
        "name": "Overview",
        "type": "entries",
        "entries": [
          "From your hilltop home, you have looked down (literally and perhaps figuratively) on the unwashed masses of Mulmaster for your entire life. Your fur-trimmed robes and training in the visual and performing arts mark you as wealthy and perhaps well-born; you are a member of the City of Danger's aristocracy. None of your immediate family members sits on the Council of Blades or is even a Zor or Zora...yet. Nevertheless, you are one of Mulmaster's elite, and whether you personally covet a higher standing or not, you are at home in the dance halls where the aristocracy gathers to plot, to scheme, to do business, to discuss the arts, and, above all, to see, and to be seen."
        ]
      },
      {
        "name": "Feature: Highborn",
        "type": "entries",
        "entries": [
          "Mulmaster is run by and for its aristocracy. Every other class of citizen in the city defers to you, and even the priesthood, Soldiery, Hawks, and Cloaks treat you with deference. Other aristocrats and nobles accept you in their circles and likely know you or of you. Your connections can get you the ear of a Zor or Zora under the right circumstances. Note: This feature is a variant of the Noble feature."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "entries": [
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "My ambitions are boundless. I will be a Zor or Zora one day!"
              ],
              [
                "2",
                "I must always look my best."
              ],
              [
                "3",
                "Beauty is everywhere. I can find it in even the homeliest person and the most horrible tragedy."
              ],
              [
                "4",
                "Decorum must be preserved at all costs."
              ],
              [
                "5",
                "I will not admit I am wrong if I can avoid it."
              ],
              [
                "6",
                "I am extremely well-educated and frequently remind others of that fact."
              ],
              [
                "7",
                "I take what I can today, because I do not know what tomorrow holds."
              ],
              [
                "8",
                "My life is full of dance, song, drink, and love."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Generous. I have a responsibility to help and protect the less fortunate. (Good)"
              ],
              [
                "2",
                "Loyal. My word, once given, is my bond. (Lawful)"
              ],
              [
                "3",
                "Callous. I am unconcerned with any negative effects my actions may have on the lives and fortunes of others. (Evil)"
              ],
              [
                "4",
                "Impulsive. I follow my heart. (Chaotic)"
              ],
              [
                "5",
                "Ignorant. Explanations bore me. (Neutral)"
              ],
              [
                "6",
                "Isolationist. I am concerned with the fortunes of my friends and family. Others must see to themselves. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I have dedicated my wealth and my talents to the service of one of the city's many temples."
              ],
              [
                "2",
                "My family and I are loyal supporters of High Blade Jaseen Drakehorn. Our fortunes are inexorably tied to hers. I would do anything to support her."
              ],
              [
                "3",
                "Like many families who were close to High Blade Selfaril Uoumdolphin, mine has suffered greatly since his fall. We honor his memory in secret."
              ],
              [
                "4",
                "My family plotted with Rassendyll Uoumdolphin brother usurped brother as High Blade. Betrayal is the quickest route to power."
              ],
              [
                "5",
                "Wealth and power are nothing. Fulfillment can only be found in artistic expression."
              ],
              [
                "6",
                "It's not how you feel, who you know, or what you can do - it's how you look, and I look fabulous."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I have difficulty caring about anyone or anything other than myself."
              ],
              [
                "2",
                "Having grown up with wealth, I am careless with my finances. I overspend and am overly generous."
              ],
              [
                "3",
                "The ends (my advancement) justify any means."
              ],
              [
                "4",
                "I must have what I want and will brook no delay."
              ],
              [
                "5",
                "My family has lost everything. I must keep up appearances, lest we become a laughingstock."
              ],
              [
                "6",
                "I have no artistic sense. I hide that fact behind extreme opinions and have become a trendsetter. "
              ]
            ]
          }
        ],
        "name": "Suggested Characteristics"
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Myriad Operative (Criminal)",
    "source": "EGW",
    "page": 203,
    "_copy": {
      "name": "Criminal",
      "source": "PHB"
    },
    "hasFluff": true
  },
  {
    "name": "Noble",
    "source": "PHB",
    "page": 135,
    "basicRules": true,
    "skillProficiencies": [
      {
        "history": true,
        "persuasion": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "gaming set": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "fine clothes|phb",
          "signet ring|phb",
          {
            "special": "scroll of pedigree"
          },
          {
            "special": "purse",
            "containsValue": 2500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill History}, {@skill Persuasion}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter gaming set|items|source=phb|miscellaneous=mundane|type=gaming set}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "One of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A set of {@item fine clothes|phb}, a {@item signet ring|phb}, a scroll of pedigree, and a purse containing 25 gp"
          }
        ]
      },
      {
        "name": "Feature: Position of Privilege",
        "type": "entries",
        "entries": [
          "Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "Nobles are born and raised to a very different lifestyle than most people ever experience, and their personalities reflect that upbringing. A noble title comes with a plethora of bonds—responsibilities to family, to other nobles (including the sovereign), to the people entrusted to the family's care, or even to the title itself. But this responsibility is often a good way to undermine a noble.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world."
              ],
              [
                "2",
                "The common folk love me for my kindness and generosity."
              ],
              [
                "3",
                "No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses."
              ],
              [
                "4",
                "I take great pains to always look my best and follow the latest fashions."
              ],
              [
                "5",
                "I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations."
              ],
              [
                "6",
                "Despite my noble birth, I do not place myself above other folk. We all have the same blood."
              ],
              [
                "7",
                "My favor, once lost, is lost forever."
              ],
              [
                "8",
                "If you do me an injury, I will crush you, ruin your name, and salt your fields."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)"
              ],
              [
                "2",
                "Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)"
              ],
              [
                "3",
                "Independence. I must prove that I can handle myself without coddling from my family. (Chaotic)"
              ],
              [
                "4",
                "Power. If I can attain more power, no one will tell me what to do. (Evil)"
              ],
              [
                "5",
                "Family. Blood runs thicker than water. (Any)"
              ],
              [
                "6",
                "Noble Obligation. It is my duty to protect and care for the people beneath me. (Good)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I will face any challenge to win the approval of my family."
              ],
              [
                "2",
                "My house's alliance with another noble family must be sustained at all costs."
              ],
              [
                "3",
                "Nothing is more important than the other members of my family."
              ],
              [
                "4",
                "I am in love with the heir of a family that my family despises."
              ],
              [
                "5",
                "My loyalty to my sovereign is unwavering."
              ],
              [
                "6",
                "The common folk must see me as a hero of the people."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I secretly believe that everyone is beneath me."
              ],
              [
                "2",
                "I hide a truly scandalous secret that could ruin my family forever."
              ],
              [
                "3",
                "I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger."
              ],
              [
                "4",
                "I have an insatiable desire for carnal pleasures."
              ],
              [
                "5",
                "In fact, the world does revolve around me."
              ],
              [
                "6",
                "By my words and actions, I often bring shame to my family."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Orzhov Representative",
    "source": "GGR",
    "page": 72,
    "skillProficiencies": [
      {
        "intimidation": true,
        "religion": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 2
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "special": "Orzhov insignia"
          },
          {
            "special": "foot-long chain made of ten gold coins"
          },
          {
            "special": "vestments"
          },
          "fine clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "additionalSpells": [
      {
        "expanded": {
          "s0": [
            "friends#c",
            "guidance#c"
          ],
          "s1": [
            "command",
            "illusory script"
          ],
          "s2": [
            "enthrall",
            "ray of enfeeblement",
            "zone of truth"
          ],
          "s3": [
            "bestow curse",
            "speak with dead",
            "spirit guardians"
          ],
          "s4": [
            "blight",
            "death ward",
            "leomund's secret chest"
          ],
          "s5": [
            "geas"
          ]
        }
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Intimidation}, {@skill Religion}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Two of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "An Orzhov insignia, a foot-long chain made of ten gold coins, vestments, a set of {@item fine clothes|phb}, and a belt {@item pouch|phb} containing 1 pp (an Orzhov-minted 10-zino coin)"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Leverage",
        "entries": [
          "You can exert leverage over one or more individuals below you in the guild's hierarchy and demand their help as needs warrant. For example, you can have a message carried across a neighborhood, procure a short carriage ride without paying, or have others clean up a bloody mess you left in an alley. The DM decides if your demands are reasonable and if there are subordinates available to fulfill them. As your status in the guild improves, you gain influence over more people, including ones in greater positions of power."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Orzhov Guild Spells",
        "entries": [
          "{@i Prerequisite: Spellcasting or Pact Magic class feature}",
          "For you, the spells on the Orzhov Guild Spells table are added to the spell list of your spellcasting class. (If you are a multiclass character with multiple spell lists, these spells are added to all of them.)",
          {
            "type": "table",
            "caption": "Orzhov Guild Spells",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "Spell Level",
              "Spells"
            ],
            "rows": [
              [
                "Cantrip",
                "{@spell friends}, {@spell guidance}"
              ],
              [
                "1st",
                "{@spell command}, {@spell illusory script}"
              ],
              [
                "2nd",
                "{@spell enthrall}, {@spell ray of enfeeblement}, {@spell zone of truth}"
              ],
              [
                "3rd",
                "{@spell bestow curse}, {@spell speak with dead}, {@spell spirit guardians}"
              ],
              [
                "4th",
                "{@spell blight}, {@spell death ward}, {@spell Leomund's secret chest}"
              ],
              [
                "5th",
                "{@spell geas}"
              ]
            ]
          },
          "Your magic tends to manifest as swirling shadows, brilliant light, or sometimes the momentary appearance of shadowy spirit forms. Your spells might draw the blood of your enemies, or even directly touch their souls."
        ]
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "Members of the Orzhov Syndicate range from the decadent nobility at the top of the oligarchy to the debt-ridden wretches at the bottom. You fall somewhere between those extremes, so you might behave with the arrogance of the very rich or the humility of the impoverished.",
          {
            "type": "table",
            "caption": "Personality Traits",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I am always willing to act in accordance with the financial incentive offered."
              ],
              [
                "2",
                "Debts are never meant to be forgiven."
              ],
              [
                "3",
                "I am accustomed to enjoying the finest pleasures money can buy."
              ],
              [
                "4",
                "No one could doubt that I am a cut above the masses of pitiful peasants that infest the city."
              ],
              [
                "5",
                "I can't stand to spend a zib more than necessary to purchase what I need."
              ],
              [
                "6",
                "I hate it when people try to make light of a serious situation."
              ],
              [
                "7",
                "I want to make sure everyone is aware of how wealthy, powerful, and important I am."
              ],
              [
                "8",
                "I can't think of anything to look forward to."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Ideals",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "{@b Guild}. My guild is all that really matters. (Any)"
              ],
              [
                "2",
                "{@b Wealth}. I will do whatever it takes to become as rich as the oligarchs. (Evil)"
              ],
              [
                "3",
                "{@b Power}. One day, I will be the one giving orders. (Evil)"
              ],
              [
                "4",
                "{@b Prestige}. I want to be admired, respected, feared, or even hated for my position and wealth. (Evil)"
              ],
              [
                "5",
                "{@b Stability}. The economy functions best when chaos is kept under control and everyone knows their place. (Lawful)"
              ],
              [
                "6",
                "{@b Eternity}. I want to live forever—in the flesh as long as possible, and as a spirit afterward. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Bonds",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "The unbearable weight of my debt has driven me to desperation."
              ],
              [
                "2",
                "I'm duty-bound to obey the dictates of an ancestor on the Ghost Council."
              ],
              [
                "3",
                "I value my worldly goods more highly than my mortal life."
              ],
              [
                "4",
                "An oligarch publicly humiliated me, and I will exact revenge on that whole family."
              ],
              [
                "5",
                "My faith in the Obzedat never wavers."
              ],
              [
                "6",
                "I want to prove myself more worthy than an older sibling and thereby ensure that I inherit a greater share of my parents' wealth."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Flaws",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I hold a scandalous secret that could ruin my family forever—but could also earn me the favor of the Ghost Council."
              ],
              [
                "2",
                "I'm convinced that everyone I know is plotting against me."
              ],
              [
                "3",
                "I'll brave any risk if the monetary reward is great enough."
              ],
              [
                "4",
                "I am convinced that I am far more important than anyone else is willing to acknowledge."
              ],
              [
                "5",
                "I have little respect for anyone who isn't wealthy."
              ],
              [
                "6",
                "I'll take any opportunity to steal from wealthier people, even for worthless trinkets."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Contacts",
        "entries": [
          "The Orzhov Syndicate operates according to a strict hierarchy built on a network of connections among old, wealthy families. Your family might provide important contacts, while your family's activities in crime, banking, or debt collection could tie you to members of other guilds.",
          "Roll twice on the Orzhov Contacts table (for an ally and a rival) and once on the Non-Orzhov Contacts table.",
          {
            "type": "table",
            "caption": "Orzhov Contacts",
            "colLabels": [
              "d8",
              "Contact"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "The spirit of an ancestor has taken an interest in me."
              ],
              [
                "2",
                "An older cousin has the ear of a powerful oligarch."
              ],
              [
                "3",
                "I know a knight who is responsible for collecting debts from powerful people."
              ],
              [
                "4",
                "A vampire pontiff tried to use me as a pawn in past schemes."
              ],
              [
                "5",
                "A silent spirit follows me around."
              ],
              [
                "6",
                "A sibling has keys to parts of Vizkopa Bank."
              ],
              [
                "7",
                "A giant thinks I'm adorable."
              ],
              [
                "8",
                "I regularly offer tribute to an angel, and the angel has been kind to me in turn."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Non-Orzhov Contacts",
            "colLabels": [
              "d10",
              "Contact"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "An Azorius arrester is always snooping into my family's business transactions."
              ],
              [
                "2",
                "A Boros paladin saved my life, to my everlasting shame."
              ],
              [
                "3",
                "I know a shopkeeper who is secretly a Dimir agent and tries to make sure that I keep that secret hidden."
              ],
              [
                "4",
                "I'm fascinated by the culture of the Golgari kraul, and I have formed a friendship with one of their death priests."
              ],
              [
                "5",
                "A Gruul druid hates me but would never dare to touch me."
              ],
              [
                "6",
                "I know an Izzet engineer who is desperate to pay off a debt accrued by a deceased relative."
              ],
              [
                "7",
                "Roll an additional Orzhov contact; you can decide if the contact is an ally or a rival."
              ],
              [
                "8",
                "My childhood friend is now a Rakdos torturer. We still meet for drinks occasionally."
              ],
              [
                "9",
                "I have the key to a vault where a Selesnya druid is hiding an item of secret shame."
              ],
              [
                "10",
                "I was married to a Simic bioengineer."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "How Do I Fit In?",
        "entries": [
          "The structure of the Orzhov Syndicate means that you are always doing the bidding of someone higher up the ladder than you are. Ultimately, your role in the guild is defined by whatever the people (and spirits) above you decide for you.",
          "For most of your career, you can expect to engage in some aspect of the day-to-day criminal operations of the guild. That can mean throwing your weight around to enforce the will of the guild or using religious authority to extort offerings from the people. But it can also mean doing various errands for your superiors, from bearing messages to carrying out assassinations."
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Outlander",
    "source": "PHB",
    "page": 136,
    "skillProficiencies": [
      {
        "athletics": true,
        "survival": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "musical instrument": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "staff|phb",
          "hunting trap|phb",
          {
            "special": "trophy from an animal you killed"
          },
          "traveler's clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Athletics}, {@skill Survival}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "One of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@item staff|phb}, a {@item hunting trap|phb}, a trophy from an animal you killed, a set of {@item traveler's clothes|phb}, and a belt {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "name": "Feature: Wanderer",
        "type": "entries",
        "entries": [
          "You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Specialty",
        "type": "entries",
        "entries": [
          "You've been to strange places and seen things that others cannot begin to fathom. Consider some of the distant lands you have visited, and how they impacted you. You can roll on the following table to determine your occupation during your time in the wild, or choose one that best fits your character.",
          {
            "type": "table",
            "colLabels": [
              "d10",
              "Origin"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Forester"
              ],
              [
                "2",
                "Trapper"
              ],
              [
                "3",
                "Homesteader"
              ],
              [
                "4",
                "Guide"
              ],
              [
                "5",
                "Exile or outcast"
              ],
              [
                "6",
                "Bounty hunter"
              ],
              [
                "7",
                "Pilgrim"
              ],
              [
                "8",
                "Tribal nomad"
              ],
              [
                "9",
                "Hunter-gatherer"
              ],
              [
                "10",
                "Tribal marauder"
              ]
            ]
          }
        ]
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "Often considered rude and uncouth among civilized folk, outlanders have little respect for the niceties of life in the cities. The ties of tribe, clan, family, and the natural world of which they are a part are the most important bonds to most outlanders.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                " I'm driven by a wanderlust that led me away from home."
              ],
              [
                "2",
                "I watch over my friends as if they were a litter of newborn pups."
              ],
              [
                "3",
                "I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I'd do it again if I had to."
              ],
              [
                "4",
                "I have a lesson for every situation, drawn from observing nature."
              ],
              [
                "5",
                "I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear."
              ],
              [
                "6",
                "I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them."
              ],
              [
                "7",
                "I feel far more comfortable around animals than people."
              ],
              [
                "8",
                "I was, in fact, raised by wolves."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Change. Life is like the seasons, in constant change, and we must change with it. (Chaotic)"
              ],
              [
                "2",
                "Greater Good. It is each person's responsibility to make the most happiness for the whole tribe. (Good)"
              ],
              [
                "3",
                "Honor. If I dishonor myself, I dishonor my whole clan. (Lawful)"
              ],
              [
                "4",
                "Might. The strongest are meant to rule. (Evil)"
              ],
              [
                "5",
                "Nature. The natural world is more important than all the constructs of civilization. (Neutral)"
              ],
              [
                "6",
                "Glory. I must earn glory in battle, for myself and my clan. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "My family, clan, or tribe is the most important thing in my life, even when they are far from me."
              ],
              [
                "2",
                "An injury to the unspoiled wilderness of my home is an injury to me."
              ],
              [
                "3",
                "I will bring terrible wrath down on the evildoers who destroyed my homeland."
              ],
              [
                "4",
                "I am the last of my tribe, and it is up to me to ensure their names enter legend."
              ],
              [
                "5",
                "I suffer awful visions of a coming disaster and will do anything to prevent it."
              ],
              [
                "6",
                "It is my duty to provide children to sustain my tribe."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I am too enamored of ale, wine, and other intoxicants."
              ],
              [
                "2",
                "There's no room for caution in a life lived to the fullest."
              ],
              [
                "3",
                "I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me."
              ],
              [
                "4",
                "I am slow to trust members of other races, tribes, and societies."
              ],
              [
                "5",
                " Violence is my answer to almost any challenge."
              ],
              [
                "6",
                " Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Phlan Insurgent",
    "source": "ALCurseOfStrahd",
    "page": 6,
    "skillProficiencies": [
      {
        "stealth": true,
        "survival": true
      }
    ],
    "toolProficiencies": [
      {
        "anyArtisansTool": 1,
        "vehicles (land)": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "item": "caltrops (bag of 20)|phb",
            "displayName": "bag of caltrops (bag of 20)"
          },
          {
            "item": "trinket|phb",
            "displayName": "small trinket that connects you to the life you once had before the occupation of Phlan"
          },
          "healer's kit|phb",
          {
            "item": "common clothes|phb",
            "displayName": "dark common clothes that includes a cloak and hood"
          },
          {
            "item": "pouch|phb",
            "containsValue": 500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Stealth}, {@skill Survival}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools}, {@filter vehicles (land)|items|source=phb;dmg|miscellaneous=mundane|type=vehicle (land)}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A bag of {@item caltrops (bag of 20)|phb}, a small {@item trinket|phb} that connects you to the life you once had before the occupation of Phlan, a {@item healer's kit|phb}, a set of dark {@item common clothes|phb} that includes a cloak and hood, and a belt {@item pouch|phb} containing 5 gp"
          }
        ]
      },
      {
        "name": "Lifestyle",
        "type": "entries",
        "entries": [
          "Poor"
        ]
      },
      {
        "name": "Overview",
        "type": "entries",
        "entries": [
          "The taking of Phlan by Vorgansharax is a clear memory in your mind. You were going about your everyday business when the green dragon's forces spilled out of the sewers and assailed your home. Many of Phlan's citizens, young and old alike, were captured, killed, or offered as tribute to the Maimed Virulence. You, yourself were one of those captured. But, either with the help of adventurers or through your own wits and sheer determination, you escaped.",
          "Rather than flee the region, you've chosen to stay and fight. Finding refuge outside the town and the deadly thicket surrounding it, you strike out against the Tears of the Virulence and their monstrous allies. You've learned to survive in dire and desperate circumstances, with supplies running low and the arrival of reinforcements uncertain. You've grown accustomed to acting under the cover of night, dealing what blows you can to avenge the friends and family you lost within the currently occupied Phlan. You will drive Vorgansharax out, or you die trying."
        ]
      },
      {
        "name": "Origin",
        "type": "entries",
        "entries": [
          "Removed from your life as a townsperson, you've adapted to rough life in the wilds surrounding Phlan. The trade you practiced still influences your outlook, the manner in which you approach situations, and the way you contribute to the resistance movement against the Maimed Virulence. You can roll on the following table to determine what your occupation was before the fall, or choose one that best fits your character (select from either the general column or the specific column, but not both).",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Origin (General)",
              "Origin (Specific)"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-4",
              "col-7"
            ],
            "rows": [
              [
                "1",
                "Fisher",
                "Stojanow River Worker"
              ],
              [
                "2",
                "Hunter",
                "Twilight Marsh Worker"
              ],
              [
                "3",
                "Craftsperson",
                "Mantor's Library Scribe"
              ],
              [
                "4",
                "Priest/Priestess",
                "Clergy of Ilmater"
              ],
              [
                "5",
                "Cook",
                "Laughing Goblin Server"
              ],
              [
                "6",
                "City Watch",
                "Black Fist Guard"
              ],
              [
                "7",
                "Servant",
                "House Sokol Retainer"
              ],
              [
                "8",
                "Unskilled Laborer",
                "Bay of Phlan Dockworker"
              ]
            ]
          }
        ]
      },
      {
        "name": "Feature: Guerrilla",
        "type": "entries",
        "entries": [
          "You've come to know the surrounding forests, streams, caves, and other natural features in which you can take refuge—or set up ambushes. You can quickly survey your environment for advantageous features. Additionally, you can scavenge around your natural surroundings to cobble together simple supplies (such as improvised torches, rope, patches of fabric, etc.) that are consumed after use. Note: This feature is a variant of the Outlander feature."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "You have given up the life you knew as a citizen of Phlan. However, the Maimed Virulence's invasion resonates deep inside you. Perhaps you have a few friends or family members who were able to escape with you. Or, perhaps, everyone you held dear either perished or went missing during the fall. You may know of someone who is, against all odds, surviving within the thicket and you long to liberate them from a life of peril within the town.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "My patience knows no bounds, so long as my goal is in sight."
              ],
              [
                "2",
                "In life and in struggle, the ends justify my actions."
              ],
              [
                "3",
                "If you aren't helping me, you'd best at least stay out of my way."
              ],
              [
                "4",
                "I long for the life that was taken away from me."
              ],
              [
                "5",
                "Friends and family perished, tragically, before my eyes. I hope never to undergo that again."
              ],
              [
                "6",
                "Making the right choices in life are important to me. The choices I make might save not just my life, but the lives of others as well."
              ],
              [
                "7",
                "I can never allow my foes to get the drop on me."
              ],
              [
                "8",
                "Time is a precious resource that I must spend wisely."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Leadership. The oppressed need someone to inspire them to courageous acts. (Good)"
              ],
              [
                "2",
                "Unpredictability. Keeping the enemy guessing and off-balance is my tactical strength. (Chaos)"
              ],
              [
                "3",
                "Determination. Threats to my home must be eliminated at all costs. (Any)"
              ],
              [
                "4",
                "Freedom. Those who are enslaved and unjustly imprisoned deserve my aid. (Good)"
              ],
              [
                "5",
                "Resourcefulness. Our wits are our most valuable resource in troubled times. (Any)"
              ],
              [
                "6",
                "Unity. Working together, we can overcome all obstacles, even the most seemingly insurmountable ones. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I'll never let my fellow insurgents down. They are my only remaining friends."
              ],
              [
                "2",
                "I was separated from a loved one during my escape from town. I will find them."
              ],
              [
                "3",
                "One of the Tears of the Virulence was a trusted friend, until the day they betrayed the city. They will pay harshly for their transgressions."
              ],
              [
                "4",
                "An item I hold close is my last remaining connection to the family I lost during the fall."
              ],
              [
                "5",
                "The dragon who took my past life away from me will feel the full extent of my vengeance."
              ],
              [
                "6",
                "The knowledge in Mantor's Library is an irreplaceable treasure that must be protected."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I have no respect for those who flee. I harbor a deep grudge against the citizens who abandoned Phlan."
              ],
              [
                "2",
                "Ale is the only way I can escape the desperation of my circumstances."
              ],
              [
                "3",
                "It doesn't take much to get me into a fight."
              ],
              [
                "4",
                "Being an insurgent means doing things that aren't always ethical. I'm still learning to live with that."
              ],
              [
                "5",
                "My desire to liberate Phlan oftentimes clouds my judgment, despite my best efforts."
              ],
              [
                "6",
                "I relentlessly despise the Maimed Virulence and his allies. I'd abandon other goals in order to strike out at them."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Phlan Refugee",
    "source": "ALElementalEvil",
    "page": 6,
    "skillProficiencies": [
      {
        "insight": true,
        "athletics": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "anyArtisansTool": 1
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "equipmentType": "toolArtisan"
          },
          {
            "special": "token of the life you once knew"
          },
          "traveler's clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Insight}, {@skill Athletics}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "One of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A set of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools} (one of your choice), a token of the life you once knew, a set of {@item traveler's clothes|phb}, and a belt {@item pouch|phb} containing 15 gp"
          }
        ]
      },
      {
        "name": "Lifestyle",
        "type": "entries",
        "entries": [
          "Modest"
        ]
      },
      {
        "name": "Overview",
        "type": "entries",
        "entries": [
          "Gone are the happier days of walking into the Laughing Goblin Inn after a hard day's labor. Everything has changed, and you are lucky to be alive. Back in Phlan you could count yourself among those street-wise folks who knew when to pay a bribe and who to work with to make a living. Your ability to listen to the winds of change have saved you before, and this time they allowed you to be one of the lucky few who escaped Phlan with something more than just the shirt on your back."
        ]
      },
      {
        "name": "Feature: Phlan Survivor",
        "type": "entries",
        "entries": [
          "Whatever your prior standing was, you are now one of the many refugees that have come to Mulmaster. You are able to find refuge with others from Phlan and those who sympathize with your plight. Within Mulmaster this means that you can find a place to bed down, recover, and hide from the watch with either other refugees from Phlan, or the Zhents within the ghettos. Note: This feature is a variant of the Folk Hero feature."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "entries": [
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I may have lost everything I worked for most of my life, but there's work to be done, no time to linger on the past."
              ],
              [
                "2",
                "I worked hard to get where I am and I refuse to let a little hardship stop me from succeeding."
              ],
              [
                "3",
                "I protect those around me, you never know when one of them will be useful."
              ],
              [
                "4",
                "I have always gotten ahead by giving, why change now?"
              ],
              [
                "5",
                "I prepare for everything, it paid off in Phlan and it will pay off again."
              ],
              [
                "6",
                "I will reclaim my home, though the path may be long, I will never give up hope."
              ],
              [
                "7",
                "I never cared for personal hygiene, and am amazed that It bothers others."
              ],
              [
                "8",
                "I am always willing to volunteer my services, just as long as don't have to do anything."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Justice. Corruption brought Phlan down, I will not tolerate that any longer. (Lawful)"
              ],
              [
                "2",
                "Acceptance. Stability is a myth, to think you can control your future is futile. (Chaotic)"
              ],
              [
                "3",
                "Hope. I am guided by a higher power and I trust that everything will be right in the end. (Good)"
              ],
              [
                "4",
                "Restraint. I hate those who caused my loss. It is all I can do not to lash out at them. (Any)"
              ],
              [
                "5",
                "Strength. As shown in Phlan, the strong survive. If you are weak you deserve what you get (Evil)"
              ],
              [
                "6",
                "Openness. I am always willing to share my life story with anyone who will listen. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I have the chance at a new life and this time I am going to do things right."
              ],
              [
                "2",
                "The Lord Regent brought this suffering upon his people. I will see him brought to justice."
              ],
              [
                "3",
                "I await the day I will be able to return to my home in Phlan."
              ],
              [
                "4",
                "I will never forget the debt owed to Glevith of the Welcomers. I will be ready to repay that debt when called upon."
              ],
              [
                "5",
                "There was someone I cared about in Phlan, I will find out what happened to them."
              ],
              [
                "6",
                "Some say my life wasn't worth saving, I will prove them wrong."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I used the lives of children to facilitate my escape from Phlan."
              ],
              [
                "2",
                "I am a sucker for the underdog, and always bet on the loosing team."
              ],
              [
                "3",
                "I am incapable of standing up for myself."
              ],
              [
                "4",
                "I will borrow money from friends with no intention to repay it."
              ],
              [
                "5",
                "I am unable to keep secrets. A secret is just an untold story."
              ],
              [
                "6",
                "When something goes wrong, it's never my fault."
              ]
            ]
          }
        ],
        "name": "Suggested Characteristics"
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Plaintiff",
    "source": "AI",
    "page": 50,
    "skillProficiencies": [
      {
        "medicine": true,
        "persuasion": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "anyArtisansTool": 1
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "equipmentType": "toolArtisan"
          },
          "fine clothes|phb",
          {
            "value": 2000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Medicine}, {@skill Persuasion}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Any one of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "One set of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools}, {@item fine clothes|phb}, 20 gp"
          }
        ]
      },
      {
        "name": "Feature: Legalese",
        "type": "entries",
        "entries": [
          "Your experience with your local legal system has given you a firm knowledge of the ins and outs of that system. Even when the law is not on your side, you can use complex terms like ex injuria jus non oritur and cogitationis poenam nemo patitur to frighten people into thinking you know what you're talking about. With common folks who don't know any better, you might be able to intimidate or deceive to get favors or special treatment."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "Plaintiffs come in many varieties. Some are innocent bystanders who want only fair compensation for their injuries. Others are professional courtroom operatives, going to extreme lengths to appear wronged in pursuit of a large payout.",
          {
            "type": "table",
            "caption": "",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I can't believe I have a chance to join Acquisitions Incorporated! The fun I'm going to have!"
              ],
              [
                "2",
                "I've been wronged my entire life, and the world owes me."
              ],
              [
                "3",
                "I have always tried to make the best of a bad situation."
              ],
              [
                "4",
                "The law doesn't protect the honest and the hard working. I'm going to do whatever needs to be done to make things right."
              ],
              [
                "5",
                "I'm always in the wrong place at the wrong time."
              ],
              [
                "6",
                "My superiors are smarter and wiser than I am. I do what I'm told."
              ],
              [
                "7",
                "Never pass up the opportunity to make an easy bit of coin. That's my motto."
              ],
              [
                "8",
                "I'm beginning to feel like the gods are not on my side."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Justice. Those who break the law need to answer for their crimes. (Lawful)"
              ],
              [
                "2",
                "Freedom. People must have the freedom to do what they want and pursue their dreams. (Chaotic)"
              ],
              [
                "3",
                "Greed. Everyone I see is getting theirs, so I'm surely going to get mine. (Evil)"
              ],
              [
                "4",
                "Chaos. You're out of order! And you're out of order! This whole realm is out of order! (Chaotic)"
              ],
              [
                "5",
                "Humility. I'm just a small part of a larger whole. So is everyone else. (Neutral)"
              ],
              [
                "6",
                "Responsibility. We all have our roles to play. I'll hold up my end of the bargain. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Others hurt in the same accident that hurt me are my new family. I'll make sure they're taken care of."
              ],
              [
                "2",
                "The rulers of this place were kind to me, and they have my lifelong devotion."
              ],
              [
                "3",
                "My parents worry about me, but I'll make them proud."
              ],
              [
                "4",
                "The only bond that matters is the one holding my money pouch to my belt."
              ],
              [
                "5",
                "The other new hires at Acquisitions Incorporated are my allies. We have each other's backs."
              ],
              [
                "6",
                "My legal counsel is my best friend. I owe all my forthcoming opportunities to their hard work."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "The person who gains the most reward for the least effort wins."
              ],
              [
                "2",
                "Three magic beans for just one cow? What a deal!"
              ],
              [
                "3",
                "I have only one vice, but it controls my life."
              ],
              [
                "4",
                "Sleep is for the weak. We need to keep training more if we're going to be ready for the challenges ahead."
              ],
              [
                "5",
                "Until my songs are sung in every tavern in this realm, I won't be satisfied."
              ],
              [
                "6",
                "If people find me unpleasant, that's their problem."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true,
    "hasFluffImages": true
  },
  {
    "name": "Planar Philosopher",
    "source": "SatO",
    "page": 8,
    "prerequisite": [
      {
        "campaign": [
          "Planescape"
        ]
      }
    ],
    "feats": [
      {
        "scion of the outer planes|sato": true
      }
    ],
    "skillProficiencies": [
      {
        "arcana": true,
        "choose": {
          "from": [
            "religion",
            "insight",
            "nature",
            "intimidation",
            "history",
            "stealth",
            "perception",
            "medicine",
            "survival",
            "persuasion",
            "performance",
            "athletics"
          ]
        }
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 2
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "special": "portal key (such as a bag of golden tea leaves or the tooth of a planar beast)"
          },
          {
            "special": "manifesto of your guiding philosophy"
          },
          {
            "item": "common clothes|phb",
            "displayName": "common clothes in your faction's style"
          },
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "fromFeature": {
      "feats": true
    },
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Arcana}, the skill associated with your faction (see the Sigil Faction Affinities table) or one skill of your choice"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Two of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A portal key (such as a bag of golden tea leaves or the tooth of a planar beast), a manifesto of your guiding philosophy, a set of {@item common clothes|PHB} in your faction's style, and a {@item pouch|PHB} containing 10 gp worth of coins from different worlds and planes"
          }
        ]
      },
      {
        "type": "table",
        "caption": "Sigil Faction Affinities",
        "colStyles": [
          "col-6",
          "col-6"
        ],
        "colLabels": [
          "Faction",
          "Skill"
        ],
        "rows": [
          [
            "Athar",
            "{@skill Religion}"
          ],
          [
            "Bleak Cabal",
            "{@skill Insight}"
          ],
          [
            "Doomguard",
            "{@skill Nature}"
          ],
          [
            "Fated",
            "{@skill Intimidation}"
          ],
          [
            "Fraternity of Order",
            "{@skill History}"
          ],
          [
            "Hands of Havoc",
            "{@skill Stealth}"
          ],
          [
            "Harmonium",
            "{@skill Perception}"
          ],
          [
            "Heralds of Dust",
            "{@skill Medicine}"
          ],
          [
            "Mercykillers",
            "{@skill Survival}"
          ],
          [
            "Mind's Eye",
            "{@skill Persuasion}"
          ],
          [
            "Society of Sensation",
            "{@skill Performance}"
          ],
          [
            "Transcendent Order",
            "{@skill Athletics}"
          ]
        ]
      },
      {
        "type": "entries",
        "name": "Factions of Sigil",
        "entries": [
          "Twelve factions have risen to prominence in the City of Doors, though many more exist. Your character might belong to one of these groups or another ideological faction, perhaps one of your own creation.",
          "The primary factions of Sigil, which are further detailed in chapter 2, adhere to the following philosophies:",
          {
            "type": "list",
            "style": "list-hang-notitle",
            "items": [
              {
                "type": "item",
                "name": "Athar",
                "entries": [
                  "Deities are frauds and merely channel the might of a true, higher power."
                ]
              },
              {
                "type": "item",
                "name": "Bleak Cabal",
                "entries": [
                  "There is no greater truth to the multiverse. Each being must discover their own meaning."
                ]
              },
              {
                "type": "item",
                "name": "Doomguard",
                "entries": [
                  "Nothing lasts forever. The purpose of everything is to crumble and decay."
                ]
              },
              {
                "type": "item",
                "name": "Fated",
                "entries": [
                  "Everyone makes their own fate and is entitled to whatever they can take and hold."
                ]
              },
              {
                "type": "item",
                "name": "Fraternity of Order",
                "entries": [
                  "All of existence is governed by laws, and power comes from understanding and exploiting them."
                ]
              },
              {
                "type": "item",
                "name": "Hands of Havoc",
                "entries": [
                  "Those who try to impose a single order on the multiverse are doomed to fail."
                ]
              },
              {
                "type": "item",
                "name": "Harmonium",
                "entries": [
                  "The multiverse will be perfect only when everything is acting in harmony, whether it wants to or not."
                ]
              },
              {
                "type": "item",
                "name": "Heralds of Dust",
                "entries": [
                  "Everyone is already dead; the entirety of the multiverse is an afterlife. Undeath holds the key to the next stage of existence."
                ]
              },
              {
                "type": "item",
                "name": "Mercykillers",
                "entries": [
                  "Cold, relentless justice is absolute, and no one is above it."
                ]
              },
              {
                "type": "item",
                "name": "Mind's Eye",
                "entries": [
                  "The multiverse exists to be explored. It shapes us, and we shape it in turn."
                ]
              },
              {
                "type": "item",
                "name": "Society of Sensation",
                "entries": [
                  "Sensation is the proof of existence. By experiencing everything, we can understand the multiverse in all its complexity."
                ]
              },
              {
                "type": "item",
                "name": "Transcendent Order",
                "entries": [
                  "Thought clouds action. To fall in step with the multiverse, one must act on instinct alone."
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Conviction",
        "entries": [
          "You gain the {@feat Scion of the Outer Planes|SatO} feat. In addition, members of your organization provide you free, modest lodging and food at any of their holdings or the homes of other faction members."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "Adventurers who dedicate themselves to a particular philosophy regarding the multiverse are welcomed among factions that embrace those beliefs. The Planar Philosopher Personality Traits table suggests various traits you might adopt for your character.",
          {
            "type": "table",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d6",
              "Personality Trait"
            ],
            "rows": [
              [
                "1",
                "I don't venerate any gods. With time, we can be as powerful as them or greater."
              ],
              [
                "2",
                "Experience is everything; live in the moment."
              ],
              [
                "3",
                "When things crumble, I find meaning in the dust."
              ],
              [
                "4",
                "Life thrives through order, and I seek to maintain that order."
              ],
              [
                "5",
                "When others make plans, the multiverse laughs and so do I."
              ],
              [
                "6",
                "I know what's right, and none will stand in my way."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Building a Planar Philosopher Character",
        "entries": [
          "Some groups of planar philosophers might prefer certain types of characters, but by and large any character who upholds and furthers the beliefs of such a group is welcome within its ranks.",
          {
            "type": "entries",
            "name": "Planar Philosopher Trinkets",
            "entries": [
              "When you make your character, you can roll once on the {@item Planar Philosopher Trinket|SatO|Planar Philosopher Trinkets} table, instead of on the {@item Trinket|PHB|Trinkets} table in the Player's Handbook, for your starting trinket."
            ]
          }
        ]
      }
    ],
    "hasFluff": true,
    "hasFluffImages": true
  },
  {
    "name": "Prismari Student",
    "source": "SCC",
    "page": 32,
    "feats": [
      {
        "strixhaven initiate|scc": true
      }
    ],
    "skillProficiencies": [
      {
        "acrobatics": true,
        "performance": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "choose": {
          "from": [
            "anyArtisansTool",
            "musical instrument"
          ]
        }
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "ink (1-ounce bottle)|phb",
          "ink pen|phb"
        ]
      },
      {
        "a": [
          {
            "equipmentType": "toolArtisan"
          }
        ],
        "b": [
          {
            "equipmentType": "instrumentMusical"
          }
        ]
      },
      {
        "_": [
          {
            "special": "school uniform"
          },
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "additionalSpells": [
      {
        "expanded": {
          "s1": [
            "chromatic orb",
            "thunderwave"
          ],
          "s2": [
            "flaming sphere",
            "kinetic jaunt|scc"
          ],
          "s3": [
            "haste",
            "water walk"
          ],
          "s4": [
            "freedom of movement",
            "wall of fire"
          ],
          "s5": [
            "cone of cold",
            "conjure elemental"
          ]
        }
      }
    ],
    "fromFeature": {
      "additionalSpells": true,
      "feats": true
    },
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Acrobatics}, {@skill Performance}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument} or {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "One of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@item Ink (1-ounce bottle)|PHB|bottle of black ink}, an {@item ink pen|PHB}, a set of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools} or a {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument} (one of your choice), a school uniform, and a {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Prismari Initiate",
        "entries": [
          "You gain the {@feat Strixhaven Initiate|SCC} feat and must choose Prismari within it.",
          "In addition, if you have the Spellcasting or Pact Magic feature, the spells on the Prismari Spells table are added to the spell list of your spellcasting class. (If you are a multiclass character with multiple spell lists, these spells are added to all of them.)",
          {
            "type": "table",
            "caption": "Prismari Spells",
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
                "{@spell Chromatic Orb}, {@spell Thunderwave}"
              ],
              [
                "2nd",
                "{@spell Flaming Sphere}, {@spell Kinetic Jaunt|SCC}"
              ],
              [
                "3rd",
                "{@spell Haste}, {@spell Water Walk}"
              ],
              [
                "4th",
                "{@spell Freedom of Movement}, {@spell Wall of Fire}"
              ],
              [
                "5th",
                "{@spell Cone of Cold}, {@spell Conjure Elemental}"
              ]
            ]
          },
          "Consider customizing how your spells look when you cast them. You might wield your Prismari spells with dynamic, gestural movement—as much dance as somatic component. Even a blast of fire in your hands is a sculpted work of art; elemental forces make grand designs as you hurl spells. These forces might linger on your body or in your clothes as decorative elements after your spells are dissipated, as sparks dance in your hair and your touch leaves tracings of frost on whatever you touch."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Building a Prismari Character",
        "entries": [
          "Any class or subclass that wields elemental forces of cold, fire, lightning, and wind can be a good fit in Prismari. Druids and sorcerers are common in Prismari, and wizards who study the Schools of {@class Wizard|PHB|Evocation|Evocation|PHB} or {@class Wizard|PHB|Transmutation|Transmutation|PHB} are also well represented. Clerics aren't very common in this school, but some with the {@class Cleric|PHB|Tempest domain|Tempest|PHB} end up here.",
          "Beyond the ranks of traditional spellcasters, Prismari students also include monks who follow the {@class Monk|PHB|Way of the Four Elements|Four Elements|PHB}. Some acrobatic rogues and fighters (including those who emulate the archetype of the {@class Fighter|PHB|Eldritch Knight|Eldritch Knight|PHB}) also delight in the athleticism of Prismari performance.",
          {
            "type": "entries",
            "name": "Suggested Characteristics",
            "entries": [
              "Though the curriculum of Prismari College attracts many outgoing and driven artists, the school has no shortage of shy scholars and lackadaisical blowhards among its ranks. The Prismari Personality Traits table suggests a variety of traits you might adopt for your character.",
              {
                "type": "table",
                "caption": "Prismari Personality Traits",
                "colLabels": [
                  "d6",
                  "Personality Trait"
                ],
                "colStyles": [
                  "col-2 text-center",
                  "col-10"
                ],
                "rows": [
                  [
                    "1",
                    "I'm the life of the party, and I expect everyone's attention when I walk into a room."
                  ],
                  [
                    "2",
                    "Two weeks ago, I was enthralled with my latest project. Now, I think it's garbage and deserves to be destroyed."
                  ],
                  [
                    "3",
                    "I believe everyone has the ability to express their truest selves through art, and I'm happy to quietly push them in the right direction."
                  ],
                  [
                    "4",
                    "Everyone is a critic, and I work to win them all over."
                  ],
                  [
                    "5",
                    "I'm beset with such an overwhelming sense of ennui regarding my art. Nothing quite captures my attention anymore."
                  ],
                  [
                    "6",
                    "Instead of confronting my negative emotions, I channel them into explosive artistic displays."
                  ]
                ]
              }
            ]
          },
          {
            "type": "entries",
            "name": "Prismari Trinkets",
            "entries": [
              "When you make your character, you may roll once on the Prismari Trinkets table, instead of on the {@item trinket|phb|Trinkets table} in the {@book Player's Handbook|PHB}, for your starting trinket.",
              {
                "type": "table",
                "caption": "Prismari Trinkets",
                "colLabels": [
                  "d6",
                  "Trinket"
                ],
                "colStyles": [
                  "col-2 text-center",
                  "col-10"
                ],
                "rows": [
                  [
                    "1",
                    "A pair of rose-tinted glasses with glittery frames"
                  ],
                  [
                    "2",
                    "A stoppered glass bottle that, when opened, plays a brassy orchestral piece"
                  ],
                  [
                    "3",
                    "A quartet of hovering water motes in a vial"
                  ],
                  [
                    "4",
                    "A bandolier of watercolor paints"
                  ],
                  [
                    "5",
                    "A tiara capped with a crystal that crackles with harmless lightning"
                  ],
                  [
                    "6",
                    "An iridescent quill"
                  ]
                ],
                "data": {
                  "tableInclude": true
                }
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
    "name": "Quandrix Student",
    "source": "SCC",
    "page": 33,
    "feats": [
      {
        "strixhaven initiate|scc": true
      }
    ],
    "skillProficiencies": [
      {
        "arcana": true,
        "nature": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "anyArtisansTool": 1
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "ink (1-ounce bottle)|phb",
          "ink pen|phb",
          "abacus|phb",
          {
            "special": "book of arcane theory"
          },
          {
            "special": "school uniform"
          },
          {
            "item": "pouch|phb",
            "containsValue": 1500
          }
        ]
      }
    ],
    "additionalSpells": [
      {
        "expanded": {
          "s1": [
            "entangle",
            "guiding bolt"
          ],
          "s2": [
            "enlarge/reduce",
            "vortex warp|scc"
          ],
          "s3": [
            "aura of vitality",
            "haste"
          ],
          "s4": [
            "control water",
            "freedom of movement"
          ],
          "s5": [
            "circle of power",
            "passwall"
          ]
        }
      }
    ],
    "fromFeature": {
      "additionalSpells": true,
      "feats": true
    },
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Arcana}, {@skill Nature}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "One of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@item Ink (1-ounce bottle)|PHB|bottle of black ink}, an {@item ink pen|PHB}, an {@item abacus|PHB}, a book of arcane theory, a school uniform, and a {@item pouch|phb} containing 15 gp"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Quandrix Initiate",
        "entries": [
          "You gain the {@feat Strixhaven Initiate|SCC} feat and must choose Quandrix within it.",
          "In addition, if you have the Spellcasting or Pact Magic feature, the spells on the Quandrix Spells table are added to the spell list of your spellcasting class. (If you are a multiclass character with multiple spell lists, these spells are added to all of them.)",
          {
            "type": "table",
            "caption": "Quandrix Spells",
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
                "{@spell Entangle}, {@spell Guiding Bolt}"
              ],
              [
                "2nd",
                "{@spell Enlarge/Reduce}, {@spell Vortex Warp|SCC}"
              ],
              [
                "3rd",
                "{@spell Aura of Vitality}, {@spell Haste}"
              ],
              [
                "4th",
                "{@spell Control Water}, {@spell Freedom of Movement}"
              ],
              [
                "5th",
                "{@spell Circle of Power}, {@spell Passwall}"
              ]
            ]
          },
          "Consider customizing how your spells look when you cast them. Your Quandrix spells might manifest amid kaleidoscopic swirls of fractal patterns, amplifying the tiniest movements of your somatic components. When your magic creates or alters creatures, it might briefly surround the targets with shimmering fractal designs or tessellated patterns."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Building a Quandrix Character",
        "entries": [
          "Any spellcasting class or subclass can work well for a Quandrix character. Both the scholarly focus of wizards (especially those who study the Schools of {@class Wizard|PHB|Abjuration|Abjuration|PHB}, {@class Wizard|PHB|Illusion|Illusion|PHB}, or {@class Wizard|PHB|Transmutation|Transmutation|PHB}) and the metamagic manipulations of sorcerers are welcome in Quandrix, and many druids explore the patterns of nature in Quandrix as well. A few clerics, particularly those with the {@class Cleric|PHB|Knowledge|Knowledge|PHB} or {@class Cleric|PHB|Nature|Nature|PHB} domains, study in Quandrix as well.",
          "Aside from traditional spellcasters, a few characters of other classes find homes in Quandrix. Some fighters, monks, rangers, and rogues study here, using Quandrix principles to train their minds.",
          {
            "type": "entries",
            "name": "Suggested Characteristics",
            "entries": [
              "With subjects ranging from the physical and tangible to the paradoxical and strange, the student body of Quandrix College includes an eclectic mix of individuals. The Quandrix Personality Traits table suggests a variety of traits you might adopt for your character.",
              {
                "type": "table",
                "caption": "Quandrix Personality Traits",
                "colLabels": [
                  "d6",
                  "Personality Trait"
                ],
                "colStyles": [
                  "col-2 text-center",
                  "col-10"
                ],
                "rows": [
                  [
                    "1",
                    "When I find a subject I'm interested in, I won't stop studying until I know everything about it. It keeps me up at night."
                  ],
                  [
                    "2",
                    "I hope this all makes sense to me one day. Until then, I'm going to keep faking it."
                  ],
                  [
                    "3",
                    "Equations and patterns come naturally to my mind. I wish friendship came just as easily."
                  ],
                  [
                    "4",
                    "I believe I'm always the smartest person in the room. And I'll prove it, even if no one asks me to."
                  ],
                  [
                    "5",
                    "If these classes have taught me anything, it's that reality is a lie, and nothing matters. So why bother?"
                  ],
                  [
                    "6",
                    "Before I graduate, I want to achieve something mathematically impossible. I must leave a legacy!"
                  ]
                ]
              }
            ]
          },
          {
            "type": "entries",
            "name": "Quandrix Trinkets",
            "entries": [
              "When you make your character, you may roll once on the Quandrix Trinkets table, instead of on the {@item trinket|phb|Trinkets table} in the {@book Player's Handbook|PHB}, for your starting trinket.",
              {
                "type": "table",
                "caption": "Quandrix Trinkets",
                "colLabels": [
                  "d6",
                  "Trinket"
                ],
                "colStyles": [
                  "col-2 text-center",
                  "col-10"
                ],
                "rows": [
                  [
                    "1",
                    "A small succulent in a dodecahedral clay pot"
                  ],
                  [
                    "2",
                    "A blue knit hat that looks a bit like a bottle folding in on itself"
                  ],
                  [
                    "3",
                    "A model hypercube carved from green crystal, showcasing the fourth dimension"
                  ],
                  [
                    "4",
                    "A crumpled test on the theory of gravity manipulation, with a failing grade on the front and the name of a famous Quandrix professor"
                  ],
                  [
                    "5",
                    "A blue tetrahedron that, when tapped twice, projects a recording of an old mathematics lecture"
                  ],
                  [
                    "6",
                    "A round bread roll cut so that someone could spread butter on both halves without ever lifting the knife"
                  ]
                ],
                "data": {
                  "tableInclude": true
                }
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
    "name": "Rakdos Cultist",
    "source": "GGR",
    "page": 79,
    "skillProficiencies": [
      {
        "acrobatics": true,
        "performance": true
      }
    ],
    "languageProficiencies": [
      {
        "choose": {
          "from": [
            "abyssal",
            "giant"
          ]
        }
      }
    ],
    "toolProficiencies": [
      {
        "musical instrument": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "special": "Rakdos insignia"
          },
          {
            "equipmentType": "instrumentMusical"
          },
          "costume clothes|phb",
          {
            "item": "hooded lantern|phb",
            "displayName": "hooded lantern made of wrought iron"
          },
          {
            "special": "10-foot length of chain with sharply spiked links"
          },
          "tinderbox|phb",
          {
            "item": "torch|phb",
            "quantity": 10
          },
          "common clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          },
          {
            "special": "bottle of sweet, red juice"
          }
        ]
      }
    ],
    "additionalSpells": [
      {
        "expanded": {
          "s0": [
            "fire bolt#c",
            "vicious mockery#c"
          ],
          "s1": [
            "burning hands",
            "dissonant whispers",
            "hellish rebuke"
          ],
          "s2": [
            "crown of madness",
            "enthrall",
            "flaming sphere"
          ],
          "s3": [
            "fear",
            "haste"
          ],
          "s4": [
            "confusion",
            "wall of fire"
          ],
          "s5": [
            "dominate person"
          ]
        }
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Acrobatics}, {@skill Performance}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Choose either Abyssal or Giant"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A Rakdos insignia, a {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument} (one of your choice), a {@item costume clothes|phb|costume}, a {@item hooded lantern|phb} made of wrought iron, a 10-foot length of chain with sharply spiked links, a {@item tinderbox|phb}, 10 {@item torch|phb|torches}, a set of {@item common clothes|phb}, a belt {@item pouch|phb} containing 10 gp (a mix of Azorius and Boros 1-zino coins), and a bottle of sweet, red juice"
          }
        ]
      },
      {
        "type": "entries",
        "name": "A Flair for the Dramatic",
        "entries": [
          "Rakdos performance styles typically fuse standard circus-style acrobatics with fire, wrought-iron spikes and hooks, and monsters. You can roll a {@dice d8} or choose from the options in the Performance Options table to determine your preferred style of performance.",
          {
            "type": "table",
            "caption": "Performance Options",
            "colLabels": [
              "d8",
              "Type of Performer"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Spikewheel acrobat"
              ],
              [
                "2",
                "Lampooning satirist"
              ],
              [
                "3",
                "Fire juggler"
              ],
              [
                "4",
                "Marionette puppeteer"
              ],
              [
                "5",
                "Pain artist"
              ],
              [
                "6",
                "Noise musician"
              ],
              [
                "7",
                "Nightmare clown"
              ],
              [
                "8",
                "Master of ceremonies"
              ]
            ]
          }
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Feature: Fearsome Reputation",
        "entries": [
          "People recognize you as a member of the Cult of Rakdos, and they're careful not to draw your anger or ridicule. You can get away with minor criminal offenses, such as refusing to pay for food at a restaurant or breaking down a door at a local shop, if no legal authorities witness the crime. Most people are too daunted by you to report your wrongdoing to the Azorius."
        ]
      },
      {
        "type": "entries",
        "name": "Rakdos Guild Spells",
        "entries": [
          "{@i Prerequisite: Spellcasting or Pact Magic class feature}",
          "For you, the spells on the Rakdos Guild Spells table are added to the spell list of your spellcasting class. (If you are a multiclass character with multiple spell lists, these spells are added to all of them.)",
          {
            "type": "table",
            "caption": "Rakdos Guild Spells",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "Spell Level",
              "Spells"
            ],
            "rows": [
              [
                "Cantrip",
                "{@spell fire bolt}, {@spell vicious mockery}"
              ],
              [
                "1st",
                "{@spell burning hands}, {@spell dissonant whispers}, {@spell hellish rebuke}"
              ],
              [
                "2nd",
                "{@spell crown of madness}, {@spell enthrall}, {@spell flaming sphere}"
              ],
              [
                "3rd",
                "{@spell fear}, {@spell haste}"
              ],
              [
                "4th",
                "{@spell confusion}, {@spell wall of fire}"
              ],
              [
                "5th",
                "{@spell dominate person}"
              ]
            ]
          },
          "Your magic often produces a flashy spectacle, wreathing you or your targets in a mixture of harmless flame and shadowy shapes. When you manipulate an opponent's mind, a flaming symbol of Rakdos might momentarily appear like a mask over the target's face."
        ]
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "Members of demonic cults aren't generally known as the kindest or most mentally stable individuals, so you're likely to have something in your nature that distinguishes you from the law-abiding citizens of Ravnica.",
          {
            "type": "table",
            "caption": "Personality Traits",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I revel in mayhem, the more destructive the better."
              ],
              [
                "2",
                "When violence breaks out, I lose myself in rage, and it's sometimes hard to stop."
              ],
              [
                "3",
                "Everything is funny to me, and the most hilarious and bloodiest things leave me cackling with sadistic glee."
              ],
              [
                "4",
                "I derive genuine pleasure from the pain of others."
              ],
              [
                "5",
                "I enjoy testing other people's patience."
              ],
              [
                "6",
                "I can't stand it when things are predictable, so I like to add a little chaos to every situation."
              ],
              [
                "7",
                "I throw my weight around to make sure I get my way."
              ],
              [
                "8",
                "I enjoy breaking delicate works of art. And fingers, which are sort of the same."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Ideals",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "{@b Guild}. My guild is all that really matters. (Any)"
              ],
              [
                "2",
                "{@b Hedonism}. Death comes for everyone, so take as much pleasure as you can from every moment of life. (Neutral)"
              ],
              [
                "3",
                "{@b Creativity}. I strive to find more ways to express my art through pain—my own as well as others'. (Chaotic)"
              ],
              [
                "4",
                "{@b Freedom}. No one tells me what to do. (Chaotic)"
              ],
              [
                "5",
                "{@b Equality}. I want to see Ravnica remade, with no guilds and no hierarchies. (Chaotic)"
              ],
              [
                "6",
                "{@b Spectacle}. People are inspired by the greatness they see in art. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Bonds",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I have belonged to the same performance troupe for years, and these people mean everything to me."
              ],
              [
                "2",
                "A blood witch told me I have a special destiny to fulfill, and I'm trying to figure out what it is."
              ],
              [
                "3",
                "I'm secretly hoping that I can change the cult from the inside, using my influence to help rein in the wanton violence."
              ],
              [
                "4",
                "I own something that Rakdos once touched (it's seared black at the spot), and I cherish it."
              ],
              [
                "5",
                "I want to be better at my chosen form of performance than any other member of my troupe."
              ],
              [
                "6",
                "I am devoted to Rakdos and live to impress him."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Flaws",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "My family is prominent in another guild. I enjoy my wild life, but I don't want to embarrass them."
              ],
              [
                "2",
                "I couldn't hide my emotions and opinions even if I wanted to."
              ],
              [
                "3",
                "I throw caution to the wind."
              ],
              [
                "4",
                "I resent the rich and powerful."
              ],
              [
                "5",
                "When I'm angry, I lash out in violence."
              ],
              [
                "6",
                "There's no such thing as too much pleasure."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Contacts",
        "entries": [
          "The Cult of Rakdos is anything but organized. Individuals frequently move from one performance troupe to another. Almost all members of the cult know former castmates now in different troupes, which allows for the possibility of a widespread network of contacts.",
          "Roll twice on the Rakdos Contacts table (for an ally and a rival) and once on the Non-Rakdos Contacts table.",
          {
            "type": "table",
            "caption": "Rakdos Contacts",
            "colLabels": [
              "d8",
              "Contact"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I was part of a two-person act until my former partner moved to a different troupe."
              ],
              [
                "2",
                "My sibling and I ran away from home and joined the Cult of Rakdos together. We're very close."
              ],
              [
                "3",
                "A childhood friend of mine is an attendant in Rix Maadi, the Rakdos guildhall."
              ],
              [
                "4",
                "My parents brought me into the guild and taught me my trade."
              ],
              [
                "5",
                "There's a lesser demon in the cult who thinks he owes me a favor, and who am I to argue?"
              ],
              [
                "6",
                "The master of ceremonies in my troupe is well connected with other troupes."
              ],
              [
                "7",
                "I had a romance with a pain artist in another troupe."
              ],
              [
                "8",
                "Rakdos himself has witnessed me perform."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Non-Rakdos Contacts",
            "colLabels": [
              "d10",
              "Contact"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I know an Azorius elocutor who has a very amusing dark side."
              ],
              [
                "2",
                "A Boros captain really wants to \\"redeem\\" me."
              ],
              [
                "3",
                "I think a member of my troupe is a Dimir agent."
              ],
              [
                "4",
                "I once convinced a Golgari medusa to participate in a show. We've been on good terms ever since."
              ],
              [
                "5",
                "I came from the Gruul and still have relatives there."
              ],
              [
                "6",
                "An Izzet technician provides pyrotechnics for my performances."
              ],
              [
                "7",
                "An Orzhov oligarch has taken an interest in my career, like a patron of the arts."
              ],
              [
                "8",
                "Roll an additional Rakdos contact; you can decide if the contact is an ally or a rival."
              ],
              [
                "9",
                "A Selesnya healer attends my performances regularly."
              ],
              [
                "10",
                "A Simic biomancer provides mutant monsters to add a taste of the bizarre to our shows."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "How Do I Fit In?",
        "entries": [
          "The Cult of Rakdos encourages independent action on the part of its members. Its goal is fomenting chaos, and it firmly believes in putting its own house in disorder before carrying that mission into the larger city. So your role is to execute your vision of grand satire and disruptive performance art, as you aspire to outdo your guild mates and attract the attention of Rakdos himself.",
          "You work as part of a troupe, with your artistic talents used in service to a ringmaster's vision. But your performance is your own, and no one expects you to follow a script. In fact, if you go through a performance without doing something you haven't done before, you're clearly not trying hard enough."
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Reformed Cultist",
    "source": "TDCSR",
    "page": 185,
    "skillProficiencies": [
      {
        "deception": true,
        "religion": true
      }
    ],
    "languageProficiencies": [
      {
        "any": 1
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "special": "vestments"
          },
          {
            "item": "holy symbol|phb",
            "displayName": "a holy symbol of your previous cult"
          },
          "common clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Deception} and {@skill Religion}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "One of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "Vestments and a {@item holy symbol|phb} of your previous cult, a set of {@item common clothes|phb}, a belt {@item pouch|PHB} containing 15 gp"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Fell Teachings",
        "page": 186,
        "entries": [
          "You were inundated with knowledge about one of the {@book Betrayer Gods|TDCSR|2|Betrayer Gods}, and know by heart everything from their basic commandments to some of their most esoteric secrets. Choose one of the {@book Betrayer Gods|TDCSR|2|Betrayer Gods}. You have {@quickref Advantage and Disadvantage|PHB|2|0|advantage} on Intelligence ({@skill Religion}) checks to know information about their faith, including obscure secrets unknown to most worshipers.",
          "Additionally, you can work with your GM to create a secret that you learned during your time in the cult. This secret might be the seed of a conspiracy, a myth of a legendary hero whose true meaning has mutated over the years, or even the location of a fabled artifact of the gods."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "page": 186,
        "entries": [
          "The life of every former cultist is defined to some degree by the process of fleeing the past, and of trying to make a future away from the beliefs that once claimed them. Your bond is likely associated with those who gave you the insight and strength to flee your old ways. Your ideal might involve your desire to take down and destroy those who promote the evil you escaped, and perhaps finding new faith in a forgiving god.",
          {
            "type": "table",
            "caption": "Reformed Cultist Personality Traits",
            "colLabels": [
              "{@dice d8}",
              "Personality Trait"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I need a {@item dagger|phb} close at hand at all times. Just in case they find me."
              ],
              [
                "2",
                "I can't believe I'm out here fighting monsters. After everything I've been through, why can't I find a normal life?"
              ],
              [
                "3",
                "I need a stiff drink before I do anything stressful these days. I know it's a problem. Just...let me have this."
              ],
              [
                "4",
                "Murder is okay when it's for a good cause! I didn't tear my past out by the roots so I could let evil people cause more harm."
              ],
              [
                "5",
                "My past is filled with stories like you wouldn't believe. Ones that'll really make your skin crawl. Do you want to hear...?"
              ],
              [
                "6",
                "Yeah, I'm crying. I do that. Get over yourself."
              ],
              [
                "7",
                "I know you've told me your name twice already, but that's not good enough. How can I be sure you are who you say you are?"
              ],
              [
                "8",
                "My mind is always racing. I can't...I just need to...you have to give me a second—or else I can't...organize my thoughts."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Reformed Cultist Ideals",
            "colLabels": [
              "{@dice d6}",
              "Ideal"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "{@b Life}. I've spent too long shackled to an evil master. No matter what happened before, I deserve my freedom now. (Chaotic)"
              ],
              [
                "2",
                "{@b Redemption}. People can change, but redemption must be something they choose for themselves. If they do, it is my duty to help them along that path. (Good)"
              ],
              [
                "3",
                "{@b Power}. When I abandoned the cult, it wasn't out of some misguided sense of righteousness. That pathetic organization was merely a shackle on my potential. (Evil)"
              ],
              [
                "4",
                "{@b Vengeance}. The cult has poisoned my life. I will see all its followers suffer. (Any)"
              ],
              [
                "5",
                "{@b Hierarchy}. The cult was vile, but its strength was in stability and organization. As long as good folk lack unity, evil will always triumph. (Lawful)"
              ],
              [
                "6",
                "{@b Reparations}. As a cultist, I harmed people whose names I'll never know. I feel obligated to repay my debt by aiding others. (Good)"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Reformed Cultist Bonds",
            "colLabels": [
              "{@dice d6}",
              "Bond"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "My cousin escaped the cult with me. I lost track of them when we fled, but I know they're alive. I can feel it."
              ],
              [
                "2",
                "I was saved from the cult by a priest of one of the {@book Prime Deities|TDCSR|2|Prime Deities}. If not for that sign of faith, I would surely be lost."
              ],
              [
                "3",
                "I was told by the person who saved me that a sage once said: \\"Life needs things to live.\\" I don't know what that means, but I've dedicated my existence to finding out."
              ],
              [
                "4",
                "One of my cultist parents had a change of heart when I was a teenager, and we fled together in the dark of night. I didn't want to leave, but I understand now that their courage saved my life."
              ],
              [
                "5",
                "I was bested by a warrior when I fumbled a cult-ordered assassination. I don't know why that person took pity on me, but they gave me purpose when I was lost."
              ],
              [
                "6",
                "Now that I've saved myself, the only person important to me is my former cult leader—because I've sworn that they'll die by my hand."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Reformed Cultist Flaws",
            "colLabels": [
              "{@dice d6}",
              "Flaw"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I'm haunted by what I saw in those ritual chambers. Every time I see blood, I...oh, gods, I can't bear to even think about it."
              ],
              [
                "2",
                "I ran from the cult long ago. But deep down, there's a part of me that still thinks they were right about certain things."
              ],
              [
                "3",
                "I can't help but feel a rush whenever I see a life snuffed out before me. Just one more kill... just one more."
              ],
              [
                "4",
                "Organized religion terrifies me. {@book Betrayer Gods|TDCSR|2|Betrayer Gods} or {@book Prime Deities|TDCSR|2|Prime Deities}...it doesn't matter. The sight of the faithful freezes my blood cold."
              ],
              [
                "5",
                "Oh, I always tell the truth. Always. I've never had to keep a secret from anyone, so of course I'll be open with you."
              ],
              [
                "6",
                "I don't trust easily. If you grew up being lied to about every little thing? The fundamental nature of the world? You wouldn't, either."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Revelry Pirate (Sailor)",
    "source": "EGW",
    "page": 203,
    "_copy": {
      "name": "Sailor",
      "source": "PHB"
    },
    "hasFluff": true
  },
  {
    "name": "Rewarded",
    "source": "BMT",
    "page": 57,
    "feats": [
      {
        "lucky|phb": true
      },
      {
        "magic initiate|phb": true
      },
      {
        "skilled|phb": true
      }
    ],
    "skillProficiencies": [
      {
        "insight": true,
        "persuasion": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "gaming set": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "special": "bottle of black ink"
          },
          "ink pen|phb",
          {
            "special": "sheets of paper",
            "quantity": 5
          },
          {
            "item": "gaming set|phb",
            "displayName": "gaming set (matching your chosen proficiency)"
          },
          "signet ring|phb",
          "fine clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1800
          }
        ]
      }
    ],
    "fromFeature": {
      "feats": true
    },
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Insight}, {@skill Persuasion}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "One of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A bottle of black ink, an {@item ink pen|PHB}, five sheets of paper, a {@item gaming set|PHB} (matching your chosen proficiency), a {@item signet ring|PHB}, a set of {@item fine clothes|PHB}, and a {@item pouch|PHB} containing 18 gp"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entries": [
              "One {@filter gaming set|items|source=phb|miscellaneous=mundane|type=gaming set} of your choice (such as {@item playing card set|phb|playing cards} or {@item three-dragon ante set|phb|three-dragon ante cards})"
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Fortune's Favor",
        "entries": [
          "Your unexpected good fortune is reflected by a minor boon. You gain the {@feat Lucky}, {@feat Magic Initiate}, or {@feat Skilled} feat (your choice). Your choice of feat reflects the transformation that changed your life. An encounter with a genie who gave you three wishes might have resulted in magical powers represented by Magic Initiate. If you paid off all your family debts with a fortuitous round of three-dragon ante, you might be Lucky instead. Alternatively, you could use the Skilled feat to reflect whatever trial you endured to secure your new destiny and to model the knowledge and abilities imparted to you by whatever force transformed your life."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "Your character's perspective on life has changed thanks to their new destiny. The Rewarded Personality Traits table suggests traits you might adopt for your character and cards from the {@item Deck of Many Things} that might have prompted this trait.",
          {
            "type": "table",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d6",
              "Personality Trait"
            ],
            "rows": [
              [
                "1",
                "A safe home is a foundation on which anything else can be built. (Key, Throne)"
              ],
              [
                "2",
                "I was elevated to heights I could never otherwise attain, and I won't waste my fortune. (Star, Sun)"
              ],
              [
                "3",
                "I try to be a source of inspiration and joy to others. Life is never as bad as you think! (Euryale, Jester)"
              ],
              [
                "4",
                "Courage and boldness can carry the day when all else fails. (Comet, Knight)"
              ],
              [
                "5",
                "My good fortune means I can lift others up as well. (Gem, Moon)"
              ],
              [
                "6",
                "Having the right answers is the first step to solving any problem, no matter how dire. (Fates, Sage)"
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Building a Rewarded Character",
        "entries": [
          "Rewarded characters have varied histories, but they have one thing in common: they were down on their luck before their lives abruptly turned around. They might have given up all hope of a happier life, only to suddenly get a second chance. A rewarded character has often spent many years struggling to escape painful circumstances. Now, extricated from the (sometimes literal) prison that was their former life, they throw their cares to the wind and become adventurers.",
          "If your character's life was changed by a {@item Deck of Many Things}, consider which card was responsible. Perhaps the Fates card undid a tragic mistake your character made in their youth. The Gem card could have wiped out debts incurred over a lifetime. Maybe the Sage card provided the advice needed to escape a hopeless situation, the Star card increased an ability score to its current value, or a {@spell Wish} spell cast after drawing the Moon card transformed your character from a peddler to a fledgling sorcerer infused with magic and new knowledge and skills. If you're making a character at higher than 1st level, magic items they have could have been granted by the Key or Sun card."
        ]
      },
      {
        "type": "entries",
        "name": "Rewarded Trinkets",
        "entries": [
          "When you make your character, you can roll once on the Rewarded Trinkets table instead of on the Trinkets table in the {@book Player's Handbook|PHB} for your starting trinket.",
          {
            "type": "table",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d6",
              "Trinket"
            ],
            "rows": [
              [
                "1",
                "A perfumed silk scarf from an admirer"
              ],
              [
                "2",
                "A crystal bead that glows like a candle in the dark"
              ],
              [
                "3",
                "A letter of introduction and invitation from an influential person in a far-off city"
              ],
              [
                "4",
                "A motto or symbol whose meaning eludes you, etched on a piece of your equipment"
              ],
              [
                "5",
                "A crisp playing card that never seems to tear or soil, depicting the card that affected you"
              ],
              [
                "6",
                "Half a medallion designed to be rejoined to its other half"
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true,
    "hasFluffImages": true
  },
  {
    "name": "Rival Intern",
    "source": "AI",
    "page": 51,
    "skillProficiencies": [
      {
        "history": true,
        "investigation": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "anyArtisansTool": 1
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "equipmentType": "toolArtisan"
          },
          {
            "special": "ledger from your previous employer containing a small piece of useful information"
          },
          "fine clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill History}, {@skill Investigation}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Any one of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "One set of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools}, a ledger from your previous employer containing a small piece of useful information, a set of {@item fine clothes|phb}, and a belt {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "name": "Feature: Inside Informant",
        "type": "entries",
        "entries": [
          "You have connections to your previous employer or other groups you dealt with during your previous employment. You can communicate with your contacts, gaining information at the DM's discretion."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "If you were happy with your previous internship, the parting of ways might have been amicable. If not, it might have involved armed guards removing you from the premises. If you were passed over at your previous position, it might have left you a blend of seething rage, practiced nonchalance, and keen knowledge of where the bodies are buried (perhaps literally).",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "My previous employer didn't respect me, and now I'll do whatever I can to gain respect."
              ],
              [
                "2",
                "The job is important, but the relationships I forge with my coworkers are even more so."
              ],
              [
                "3",
                "The job is everything to me. Who needs relaxation, hobbies, and a social life?"
              ],
              [
                "4",
                "I know I'm not the best and brightest, but if I put my best self forward, I can overcome anything."
              ],
              [
                "5",
                "My former boss was an idiot. So was my boss before that. And before that. I'm sure those were all coincidences."
              ],
              [
                "6",
                "This company is so much better than my previous one. It will always be the best until they stop paying me."
              ],
              [
                "7",
                "I know this dagger belongs to the company, but I'm sure they won't miss it. Or this flask. Or this armor."
              ],
              [
                "8",
                "It's only a matter of time before I'll be upper management. I just have to kiss up to my superiors and kick down those beneath me."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Advancement. Money and power can be gained more easily within an organization. I plan to gain as much as possible. (Evil)"
              ],
              [
                "2",
                "Structure. Life goes much more smoothly when you follow the rules and work within a system. (Lawful)"
              ],
              [
                "3",
                "Uncertainty. The more chaos that swirls around me, the more opportunities I can find to profit. (Chaotic)"
              ],
              [
                "4",
                "Justice. I can't stand people being treated unjustly. I do whatever it takes to stop injustice and those who flout the law. (Lawful)"
              ],
              [
                "5",
                "Pleasure. What's the use of working hard and making money if you can't enjoy the finer things in life? (Any)"
              ],
              [
                "6",
                "Power. Money is fine, but real power means never having to say you're sorry. (Evil)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I have a family member in need. I consider them in everything I do."
              ],
              [
                "2",
                "My peers keep me grounded."
              ],
              [
                "3",
                "My past mistakes cost someone else dearly. I have to rectify that."
              ],
              [
                "4",
                "A childhood mentor put me on my current path. If I succeed, I want to repay that mentor in some way."
              ],
              [
                "5",
                "I value an oath of loyalty I took to a group of friends over everything else in my life."
              ],
              [
                "6",
                "Although I don't get along well with people, my pet means the world to me."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I know what's best. Trust me."
              ],
              [
                "2",
                "Flaw? I have no flaws. I'm perfect."
              ],
              [
                "3",
                "My loyalties are... fluid."
              ],
              [
                "4",
                "If anything goes wrong, it must be someone else's fault. Let me explain that in detail."
              ],
              [
                "5",
                "There's right and there's wrong, and there's no gray area in between."
              ],
              [
                "6",
                "Our superiors might not like what you're doing. I'm going to have to put that in my report."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Ruined",
    "source": "BMT",
    "page": 58,
    "feats": [
      {
        "alert|phb": true
      },
      {
        "skilled|phb": true
      },
      {
        "tough|phb": true
      }
    ],
    "skillProficiencies": [
      {
        "stealth": true,
        "survival": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "gaming set": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "item": "hourglass|phb",
            "displayName": "cracked hourglass"
          },
          {
            "item": "manacles|phb",
            "displayName": "set of rusty manacles"
          },
          {
            "special": "half-empty bottle"
          },
          "hunting trap|phb",
          {
            "item": "gaming set|phb",
            "displayName": "gaming set (matching your chosen proficiency)"
          },
          "traveler's clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1300
          }
        ]
      }
    ],
    "fromFeature": {
      "feats": true
    },
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Stealth}, {@skill Survival}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "One of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A cracked {@item hourglass|PHB}, a set of rusty {@item manacles|PHB}, a half-empty bottle, a {@item hunting trap|PHB}, a {@item gaming set|PHB} (matching your chosen proficiency), a set of {@item traveler's clothes|PHB}, and a {@item pouch|PHB} containing 13 gp"
          },
          {
            "type": "entries",
            "name": "Tool Proficiencies:",
            "entries": [
              "One {@filter gaming set|items|source=phb|miscellaneous=mundane|type=gaming set} of your choice (such as playing cards or three-dragon ante cards)"
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Still Standing",
        "entries": [
          "You have weathered ruinous misfortune, and you possess hidden reserves others don't expect. You gain the {@feat Alert}, {@feat Skilled}, or {@feat Tough} feat (your choice). Your choice of feat reflects how you've dealt with the terrible loss that changed your life forever. If you've kept your senses sharp for every opportunity and climbed your way out of misery by seizing the tiniest scrap of hope, choose Alert. If you've redoubled your efforts to reclaim what was once yours, choose Skilled. If you've stoically persevered through your misfortune, select Tough."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "Rising above misfortune shapes one's perspective. The Ruined Personality Traits table suggests traits you might adopt for your character (and ruinous cards that might have prompted this trait).",
          {
            "type": "table",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d6",
              "Personality Trait"
            ],
            "rows": [
              [
                "1",
                "I've changed from my past, and I work to live up to my new path. (Balance, Throne)"
              ],
              [
                "2",
                "Every moment is a gift I refuse to squander. (Euryale, Skull)"
              ],
              [
                "3",
                "Now that I've overcome having nothing, I can survive anything. (Fool, Ruin, Talons)"
              ],
              [
                "4",
                "I know enemies are set against me, and I always prepare for the worst. (Flames, Rogue)"
              ],
              [
                "5",
                "I interpret every event as part of a larger pattern I just haven't worked out yet. (Puzzle, Star)"
              ],
              [
                "6",
                "I must make up for so much time I've already lost. (Donjon, Void)"
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Building a Ruined Character",
        "entries": [
          "Ruined characters were on top of the world before misfortune struck. Many were wealthy. Others come from modest backgrounds, but they were surrounded by friends, family, and loved ones. They might have been famous, or simply never encountered serious hardship before. Some were born to privilege or rose to prominence through trickery or a false reputation. Now a {@item Deck of Many Things}—or another calamity—has knocked them down like a house of cards.",
          "If your character's life was ruined by a {@item Deck of Many Things}, consider which card was responsible. Perhaps your character was imprisoned for years by the Donjon or Void card, and now everyone they knew has died. Maybe your character drew the Rogue card, and the person closest to them—a spouse, child, or parent—turned against them. A devil unleashed by the Flames card might have destroyed their life. The Ruin or Talons card might have stolen the character's material goods or saddled them with vast debt."
        ]
      },
      {
        "type": "entries",
        "name": "Ruined Trinkets",
        "entries": [
          "When you make your character, you can roll once on the Ruined Trinkets table instead of on the Trinkets table in the {@book Player's Handbook|PHB}.",
          {
            "type": "table",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d6",
              "Trinket"
            ],
            "rows": [
              [
                "1",
                "A rusted scrap of a once-beloved family heirloom"
              ],
              [
                "2",
                "A land deed, but all the names and markings that once tied it to you have faded into obscurity"
              ],
              [
                "3",
                "A bauble once imbued with powerful magic"
              ],
              [
                "4",
                "A battered playing card with a hole pierced in it, its face depicting the card that affected you"
              ],
              [
                "5",
                "A yellowed Humanoid tooth that whispers eerily when placed under a pillow"
              ],
              [
                "6",
                "A keepsake from someone you were once close to but who is now your enemy"
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true,
    "hasFluffImages": true
  },
  {
    "name": "Rune Carver",
    "source": "BGG",
    "page": 12,
    "feats": [
      {
        "rune shaper|bgg": true
      }
    ],
    "skillProficiencies": [
      {
        "history": true,
        "perception": true
      }
    ],
    "languageProficiencies": [
      {
        "giant": true
      }
    ],
    "toolProficiencies": [
      {
        "anyArtisansTool": 1
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "equipmentType": "toolArtisan"
          },
          {
            "special": "small knife"
          },
          "whetstone|phb",
          "common clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "fromFeature": {
      "feats": true
    },
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill History}, {@skill Perception}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One set of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Giant"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A set of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools} (one of your choice), a small knife, a {@item whetstone|phb}, a set of {@item common clothes|phb}, and a {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Rune Styles",
        "entries": [
          "Each rune carver has a unique style and preferred medium. To determine how you make your runes, you can roll on the Rune Style table.",
          {
            "type": "table",
            "caption": "Rune Style",
            "colLabels": [
              "d6",
              "Style"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "You inscribe runes in wax or clay with a fine metal needle."
              ],
              [
                "2",
                "You whittle pieces of wood into small figurines you mark with runes."
              ],
              [
                "3",
                "You engrave runes onto glass beads and thread them onto necklaces and bracelets."
              ],
              [
                "4",
                "You stitch runes into the hems of clothing."
              ],
              [
                "5",
                "You carve runes on a set of animal bones you can throw in different formations."
              ],
              [
                "6",
                "You draw runes into candles, melting the wax to smooth over the engravings."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Building a Rune Carver Character",
        "entries": [
          "Scholarly pursuits, ancient mysteries, or a fateful encounter might inspire a character to pursue the secrets of a rune carver."
        ]
      },
      {
        "name": "Feature: Rune Shaper",
        "type": "entries",
        "entries": [
          "You gain the {@feat Rune Shaper|BGG} feat."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "The Rune Carver Personality Traits table suggests a variety of traits you might adopt for your character.",
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Personality Trait"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Is it practical to learn an ancient language that is rarely spoken? No. But is it fun? Very."
              ],
              [
                "2",
                "I learned one of my ancestors was a lauded rune carver whose story was lost to time. I seek to rekindle that legacy."
              ],
              [
                "3",
                "The old, traditional markings of runecraft look so boring. Why not give my runes some flair?"
              ],
              [
                "4",
                "In my studies of runes, I strive to understand how great civilizations of the past fell, so I can prevent it from happening to societies of the present."
              ],
              [
                "5",
                "Life may be a whirlwind of chaos, but whenever I create my runes, I feel at peace."
              ],
              [
                "6",
                "My brain struggles to process words written in ink, but the feeling of carved runes makes my mind sing."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true,
    "hasFluffImages": true
  },
  {
    "name": "Sage",
    "source": "PHB",
    "page": 137,
    "basicRules": true,
    "skillProficiencies": [
      {
        "arcana": true,
        "history": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 2
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "ink (1-ounce bottle)|phb",
          {
            "special": "quill"
          },
          {
            "special": "small knife"
          },
          {
            "special": "letter from a dead colleague posing a question you have not yet been able to answer"
          },
          "common clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Arcana}, {@skill History}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Two of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@item Ink (1-ounce bottle)|phb|bottle of black ink}, a quill, a small knife, a letter from a dead colleague posing a question you have not yet been able to answer, a set of {@item common clothes|phb}, and a belt {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "name": "Feature: Researcher",
        "type": "entries",
        "entries": [
          "When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Specialty",
        "type": "entries",
        "entries": [
          "To determine the nature of your scholarly training, roll a d8 or choose from the options in the table below.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Field of Study"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Alchemist"
              ],
              [
                "2",
                "Astronomer"
              ],
              [
                "3",
                "Discredited academic"
              ],
              [
                "4",
                "Librarian"
              ],
              [
                "5",
                "Professor"
              ],
              [
                "6",
                "Researcher"
              ],
              [
                "7",
                "Wizard's apprentice"
              ],
              [
                "8",
                "Scribe"
              ]
            ]
          }
        ]
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "Sages are defined by their extensive studies, and their characteristics reflect this life of study. Devoted to scholarly pursuits, a sage values knowledge highly—sometimes in its own right, sometimes as a means toward other ideals.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I use polysyllabic words that convey the impression of great erudition."
              ],
              [
                "2",
                "I've read every book in the world's greatest libraries—or I like to boast that I have."
              ],
              [
                "3",
                "I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others."
              ],
              [
                "4",
                "There's nothing I like more than a good mystery."
              ],
              [
                "5",
                "I'm willing to listen to every side of an argument before I make my own judgment."
              ],
              [
                "6",
                "I... speak... slowly... when talking... to idiots,... which... almost... everyone... is... compared... to me."
              ],
              [
                "7",
                "I am horribly, horribly awkward in social situations."
              ],
              [
                "8",
                "I'm convinced that people are always trying to steal my secrets."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Knowledge. The path to power and self-improvement is through knowledge. (Neutral)"
              ],
              [
                "2",
                "Beauty. What is beautiful points us beyond itself toward what is true. (Good)"
              ],
              [
                "3",
                "Logic. Emotions must not cloud our logical thinking. (Lawful)"
              ],
              [
                "4",
                "No Limits. Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)"
              ],
              [
                "5",
                "Power. Knowledge is the path to power and domination. (Evil)"
              ],
              [
                "6",
                "Self-Improvement. The goal of a life of study is the betterment of oneself. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "It is my duty to protect my students."
              ],
              [
                "2",
                "I have an ancient text that holds terrible secrets that must not fall into the wrong hands."
              ],
              [
                "3",
                "I work to preserve a library, university, scriptorium, or monastery."
              ],
              [
                "4",
                "My life's work is a series of tomes related to a specific field of lore."
              ],
              [
                "5",
                "I've been searching my whole life for the answer to a certain question."
              ],
              [
                "6",
                "I sold my soul for knowledge. I hope to do great deeds and win it back."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I am easily distracted by the promise of information."
              ],
              [
                "2",
                "Most people scream and run when they see a demon. I stop and take notes on its anatomy."
              ],
              [
                "3",
                "Unlocking an ancient mystery is worth the price of a civilization."
              ],
              [
                "4",
                "I overlook obvious solutions in favor of complicated ones."
              ],
              [
                "5",
                "I speak without really thinking through my words, invariably insulting others."
              ],
              [
                "6",
                "I can't keep a secret to save my life, or anyone else's."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Sailor",
    "source": "PHB",
    "page": 139,
    "skillProficiencies": [
      {
        "athletics": true,
        "perception": true
      }
    ],
    "toolProficiencies": [
      {
        "navigator's tools": true,
        "vehicles (water)": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "item": "club|phb",
            "displayName": "belaying pin"
          },
          "silk rope (50 feet)|phb",
          {
            "item": "trinket|phb",
            "displayName": "lucky charm"
          },
          "common clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Athletics}, {@skill Perception}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@item Navigator's tools|phb}, {@filter vehicles (water)|items|source=phb;dmg|miscellaneous=mundane|type=vehicle (water)}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A belaying pin ({@item club|phb}), {@item silk rope (50 feet)|phb}, a lucky charm such as a rabbit foot or a small stone with a hole in the center (or you may roll for a random {@item trinket|phb} on the Trinkets table in chapter 5), a set of {@item common clothes|phb}, and a belt {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "name": "Feature: Ship's Passage",
        "type": "entries",
        "entries": [
          "When you need to, you can secure free passage on a sailing ship for yourself and your adventuring companions. You might sail on the ship you served on, or another ship you have good relations with (perhaps one captained by a former crewmate). Because you're calling in a favor, you can't be certain of a schedule or route that will meet your every need. Your Dungeon Master will determine how long it takes to get where you need to go. In return for your free passage, you and your companions are expected to assist the crew during the voyage."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "Sailors can be a rough lot, but the responsibilities of life on a ship make them generally reliable as well. Life aboard a ship shapes their outlook and forms their most important attachments.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "My friends know they can rely on me, no matter what."
              ],
              [
                "2",
                "I work hard so that I can play hard when the work is done."
              ],
              [
                "3",
                "I enjoy sailing into new ports and making new friends over a flagon of ale."
              ],
              [
                "4",
                "I stretch the truth for the sake of a good story."
              ],
              [
                "5",
                "To me, a tavern brawl is a nice way to get to know a new city."
              ],
              [
                "6",
                "I never pass up a friendly wager."
              ],
              [
                "7",
                "My language is as foul as an otyugh nest."
              ],
              [
                "8",
                "I like a job well done, especially if I can convince someone else to do it."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Respect. The thing that keeps a ship together is mutual respect between captain and crew. (Good)"
              ],
              [
                "2",
                "Fairness. We all do the work, so we all share in the rewards. (Lawful)"
              ],
              [
                "3",
                "Freedom. The sea is freedom—the freedom to go anywhere and do anything. (Chaotic)"
              ],
              [
                "4",
                "Mastery. I'm a predator, and the other ships on the sea are my prey. (Evil)"
              ],
              [
                "5",
                "People. I'm committed to my crewmates, not to ideals. (Neutral)"
              ],
              [
                "6",
                "Aspiration. Someday, I'll own my own ship and chart my own destiny. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I'm loyal to my captain first, everything else second."
              ],
              [
                "2",
                "The ship is most important—crewmates and captains come and go."
              ],
              [
                "3",
                "I'll always remember my first ship."
              ],
              [
                "4",
                "In a harbor town, I have a paramour whose eyes nearly stole me from the sea."
              ],
              [
                "5",
                "I was cheated out of my fair share of the profits, and I want to get my due."
              ],
              [
                "6",
                "Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I follow orders, even if I think they're wrong."
              ],
              [
                "2",
                "I'll say anything to avoid having to do extra work."
              ],
              [
                "3",
                "Once someone questions my courage, I never back down no matter how dangerous the situation."
              ],
              [
                "4",
                "Once I start drinking, it's hard for me to stop."
              ],
              [
                "5",
                "I can't help but pocket loose coins and other trinkets I come across."
              ],
              [
                "6",
                "My pride will probably lead to my destruction."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Secret Identity",
    "source": "ALRageOfDemons",
    "page": 9,
    "skillProficiencies": [
      {
        "deception": true,
        "stealth": true
      }
    ],
    "toolProficiencies": [
      {
        "disguise kit": true,
        "forgery kit": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "disguise kit|phb",
          "forgery kit|phb",
          "common clothes|phb",
          {
            "item": "pouch|phb",
            "displayName": "belt pouch"
          },
          {
            "value": 500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Deception}, {@skill Stealth}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@item Disguise kit|phb}, {@item Forgery kit|phb}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@item disguise kit|phb}, a {@item forgery kit|phb}, a set of {@item common clothes|phb}, a belt {@item pouch|phb}, 5 gp"
          }
        ]
      },
      {
        "name": "Lifestyle",
        "type": "entries",
        "entries": [
          "Modest"
        ]
      },
      {
        "name": "Overview",
        "type": "entries",
        "entries": [
          "Even though you are a non-human, despite Hillsfar's Great Law of Humanity, you continue to live in the City of Trade. You do so by maintaining a secret identity, forging documents, and wearing a disguise. Few, if any, know you aren't human. If you're a halfling or gnome, you pass as a little person or a child. If you're a half-elf, half-orc, or genasi, you disguise your non-human features. Other races use a combination of disguise and concealing clothing to hide. Your reasons for doing so are your own. Perhaps you're a dissident or the agent of a foreign power. Maybe you have a relationship with someone you cannot bear to leave. Regardless, this way of life has taken a heavy toll on you."
        ]
      },
      {
        "name": "Feature: Secret Identity",
        "type": "entries",
        "entries": [
          "You have created a secret identity that you use to conceal your true race and that offers a covering explanation for your presence in Hillsfar. In addition, you can forge documents, including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy Note: This feature is a variant of the Charlatan feature."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "entries": [
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Despite its problems, I love Hillsfar, it's the greatest city in the world. The only one for me."
              ],
              [
                "2",
                "I move from place to place, never staying anywhere long and leaving nothing behind."
              ],
              [
                "3",
                "I think flattery is the best way to direct attention away from me."
              ],
              [
                "4",
                "I don't make friends easily. They're a liability I cannot afford."
              ],
              [
                "5",
                "Risk and danger are exhilarate me. Pulling off schemes and deceptions is a rush."
              ],
              [
                "6",
                "The First Lord is right, humans are superior. I really admire them, despite the atrocities."
              ],
              [
                "7",
                "I avoid people of my own race, as well as things associated with my race, lest they give me away."
              ],
              [
                "8",
                "I live for the Arena. I admire gladiators and enjoy the thrill of blood on the sands!"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Quisling. Supporting the rulers of the land and following the laws is the road to salvation. (Lawful)"
              ],
              [
                "2",
                "Scoflaw. The laws and lawmakers are corrupt. I follow laws only when it suits me. (Chaotic)"
              ],
              [
                "3",
                "Optimist. Everyone Is basically good. Though the government is misguided it will all be okay. (Any)"
              ],
              [
                "4",
                "Secretive. I am in the habit of not talking about myself. My business is none of yours. (Any)"
              ],
              [
                "5",
                "Heroic. I do everything I can to help non-humans, regardless of the personal cost to me. (Good)"
              ],
              [
                "6",
                "Depraved. I have lost my moral compass. The ends justify most any means. (Evil)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "The humans of Hillsfar have inflicted terrible harm on me, my family, and my race. I will have revenge."
              ],
              [
                "2",
                "I am part of an underground network that smuggles non-humans into and out of the city."
              ],
              [
                "3",
                "I am a partisan. I commit minor acts of defiance against the First Lord and Red Plumes when I can."
              ],
              [
                "4",
                "I am a spy. I report on events in and around Hillsfar."
              ],
              [
                "5",
                "My secret identity is the only thing protecting me from the Arena. I will stop at nothing to maintain it."
              ],
              [
                "6",
                "I am madly in love with a human who does not know my true identity, and I fear rejection if I reveal it."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "After years of denying who I am, I now despise myself and other members of my pathetic race."
              ],
              [
                "2",
                "Years of hiding have made me somewhat paranoid. I trust no one."
              ],
              [
                "3",
                "I've been lying so often and for so long that I can't help it anymore. I frequently lie for no reason at all."
              ],
              [
                "4",
                "I am ashamed. I failed to protect a member of my family who was seized and thrown into the Area."
              ],
              [
                "5",
                "I am struggling with maintaining my secret identity. I subconsciously want to get caught and therefore sometimes let my secret identity slip."
              ],
              [
                "6",
                "Years of successfully deceiving others have made me cocky. I think no one can see through my lies."
              ]
            ]
          }
        ],
        "name": "Suggested Characteristics"
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Selesnya Initiate",
    "source": "GGR",
    "page": 86,
    "skillProficiencies": [
      {
        "nature": true,
        "persuasion": true
      }
    ],
    "languageProficiencies": [
      {
        "choose": {
          "from": [
            "elvish",
            "other",
            "sylvan"
          ]
        }
      }
    ],
    "toolProficiencies": [
      {
        "choose": {
          "from": [
            "anyArtisansTool",
            "musical instrument"
          ]
        }
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "special": "Selesnya insignia"
          },
          "healer's kit|phb",
          "robes|phb",
          "common clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 500
          }
        ]
      }
    ],
    "additionalSpells": [
      {
        "expanded": {
          "s0": [
            "druidcraft#c",
            "friends#c"
          ],
          "s1": [
            "animal friendship",
            "charm person"
          ],
          "s2": [
            "aid",
            "animal messenger",
            "calm emotions",
            "warding bond"
          ],
          "s3": [
            "plant growth",
            "speak with plants"
          ],
          "s4": [
            "aura of life",
            "conjure minor elementals"
          ],
          "s5": [
            "awaken",
            "commune with nature"
          ]
        }
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Nature}, {@skill Persuasion}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools} or one {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Choose one of Elvish, Loxodon, or Sylvan"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A Selesnya insignia, a {@item healer's kit|phb}, {@item robes|phb}, a set of {@item common clothes|phb}, and a belt {@item pouch|phb} containing 5 gp (Azorius 1-zino coins)"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Conclave's Shelter",
        "entries": [
          "As a member of the Selesnya Conclave, you can count on your guild mates to provide shelter and aid. You and your companions can find a place to hide or rest in any Selesnya enclave in the city, unless you have proven to be a danger to them. The members of the enclave will shield you from the law or anyone else searching for you, though they will not risk their lives in this effort.",
          "In addition, as a guild member you can receive free healing and care at a Selesnya enclave, though you must provide any material components needed for spells."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Selesnya Guild Spells",
        "entries": [
          "{@i Prerequisite: Spellcasting or Pact Magic class feature}",
          "For you, the spells on the Selesnya Guild Spells table are added to the spell list of your spellcasting class. (If you are a multiclass character with multiple spell lists, these spells are added to all of them.)",
          {
            "type": "table",
            "caption": "Selesnya Guild Spells",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "Spell Level",
              "Spells"
            ],
            "rows": [
              [
                "Cantrip",
                "{@spell druidcraft}, {@spell friends}"
              ],
              [
                "1st",
                "{@spell animal friendship}, {@spell charm person}"
              ],
              [
                "2nd",
                "{@spell aid}, {@spell animal messenger}, {@spell calm emotions}, {@spell warding bond}"
              ],
              [
                "3rd",
                "{@spell plant growth}, {@spell speak with plants}"
              ],
              [
                "4th",
                "{@spell aura of life}, {@spell conjure minor elementals}"
              ],
              [
                "5th",
                "{@spell awaken}, {@spell commune with nature}"
              ]
            ]
          },
          "Members of the Selesnya Conclave refer to their magic as \\"doruvati,\\" a Sylvan word meaning \\"gift.\\" When you use these gifts of Mat'Selesnya, graceful swirls of green and silver light dance in the air around you, and phantasmal green leaves might waft through the air. A sensation of gentle warmth and the smell of spring flowers or autumn leaves might accompany your spells."
        ]
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "Most members of the Selesnya Conclave are true believers—the tight-knit community allows little room for the cynical or disillusioned. They are spiritual, empathetic, and generally peaceful—unless roused to action. Their flaws and bonds alike grow naturally from their close ties to the community.",
          {
            "type": "table",
            "caption": "Personality Traits",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I never raise my voice or lose my temper."
              ],
              [
                "2",
                "I feel the pains and joys of everyone around me, friend or foe."
              ],
              [
                "3",
                "I would rather make a friend than thwart an enemy."
              ],
              [
                "4",
                "I'm always straining to peer into another reality that seems to be just beyond my senses."
              ],
              [
                "5",
                "I'm uneasy if I can't see plants growing or feel soil beneath my feet."
              ],
              [
                "6",
                "Seeing illness or injury in any creature saddens me."
              ],
              [
                "7",
                "I have much to be proud of, but I am still just one strand in the grand, interwoven tapestry of life."
              ],
              [
                "8",
                "Nature offers rich and abundant metaphors for understanding the complexities of life."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Ideals",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "{@b Guild}. My guild is all that really matters. (Any)"
              ],
              [
                "2",
                "{@b Harmony}. Nothing is more beautiful than voices and actions aligned in common purpose. (Good)"
              ],
              [
                "3",
                "{@b Order}. Like a well-pruned tree, society thrives when everything is kept in good order. (Lawful)"
              ],
              [
                "4",
                "{@b Life}. Preserving life and nature is always a worthwhile endeavor. (Good)"
              ],
              [
                "5",
                "{@b Humility}. Ambition and pride are the roots of strife. (Good)"
              ],
              [
                "6",
                "{@b Evangelism}. When all have joined the Selesnya Conclave, Ravnica will finally know peace. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Bonds",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I would give my life in the defense of the small enclave where I first encountered Mat'Selesnya."
              ],
              [
                "2",
                "I love beasts and plants of all kinds, and am loath to harm them."
              ],
              [
                "3",
                "A healer nursed me to recovery from a mortal illness."
              ],
              [
                "4",
                "I'll sing the invitation of Mat'Selesnya with my dying breath."
              ],
              [
                "5",
                "I cherish a leaf from Vitu-Ghazi that changes color with the seasons, even though it is no longer attached to the tree."
              ],
              [
                "6",
                "Every member of the conclave is my kin, and I would fight for any one of them."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Flaws",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I'm terrified of getting into a fight where my side is outnumbered."
              ],
              [
                "2",
                "I assume that people mean well until they prove otherwise."
              ],
              [
                "3",
                "I enjoy comfort and quiet, and prefer to avoid extra effort."
              ],
              [
                "4",
                "I have a fierce temper that doesn't reflect the inner calm I seek."
              ],
              [
                "5",
                "I'm convinced that everyone else in the conclave has a deeper connection to the Worldsoul than I do."
              ],
              [
                "6",
                "I'm trying to atone for the life of crime I led before I joined the Selesnya, but I find it hard to give up my bad habits."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Contacts",
        "entries": [
          "The Selesnya Conclave is all about connections, so its members cultivate contacts throughout the guild. The guild also engages in energetic recruitment to draw converts from other guilds, and often these new guild members maintain friendships with former guild mates.",
          "Roll twice on the Selesnya Contacts table (for an ally and a rival) and once on the Non-Selesnya Contacts table.",
          {
            "type": "table",
            "caption": "Selesnya Contacts",
            "colLabels": [
              "d8",
              "Contact"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "A wise centaur trainer believed in me even though I was a terrible student."
              ],
              [
                "2",
                "A good friend has risen to become a Ledev guardian."
              ],
              [
                "3",
                "I left my former guild and joined the Selesnya along with a close friend."
              ],
              [
                "4",
                "The dryad at the head of my enclave has taken an interest in my activities."
              ],
              [
                "5",
                "A sibling is an instructor at the guild's training grounds."
              ],
              [
                "6",
                "One of my parents is a votary, tasked with protecting the temple gardens at the Vitu-Ghazi guildhall."
              ],
              [
                "7",
                "I had a romance with a well-known Selesnya healer."
              ],
              [
                "8",
                "Trostani, the head of the guild and the voice of Mat'Selesnya, once welcomed me into her presence."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Non-Selesnya Contacts",
            "colLabels": [
              "d10",
              "Contact"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I left the Azorius, and a former colleague still resents me for that act."
              ],
              [
                "2",
                "A good friend, eager for action, left the Selesnya and joined the Boros."
              ],
              [
                "3",
                "I had a relationship with a guild mate who turned out to be a Dimir agent."
              ],
              [
                "4",
                "I know a disgruntled Golgari assassin who is ripe for recruitment."
              ],
              [
                "5",
                "I'm friendly with a Gruul centaur who almost joined us a few years back."
              ],
              [
                "6",
                "I once had a heated public argument with an Izzet chemister, and neither of us is allowed back into that restaurant."
              ],
              [
                "7",
                "I paid off my debt to the Orzhov Syndicate, but my good friend was not so lucky and remains indebted to that guild."
              ],
              [
                "8",
                "At a time of terrible grief in my life, a Rakdos performer made a mockery of my pain, leaving me with mixed feelings of sadness and humor."
              ],
              [
                "9",
                "Roll an additional Selesnya contact; you can decide if the contact is an ally or a rival."
              ],
              [
                "10",
                "I have a sibling in the Simic Combine, and we argue every time we see each other."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "How Do I Fit In?",
        "entries": [
          "Although the guild teaches the importance of subjugating the individual will to the good of the conclave, it also celebrates the diversity of individuals, in the same sense that a field that produces different crops is healthier than one that yields a single crop. That principle applies to your skills as an adventurer. As long as your efforts are directed toward advancing the goals of the guild rather than your private agenda, you're allowed to put your talents to work in your unique way.",
          "That said, you must never lose sight of the fact that you are part of a larger community. That includes the whole guild, of course, but your ties to community start with your vernadi (enclave) and its voda (dryad leader). The dryads want to know what you're doing and what purpose it serves, and they act to curtail your actions—or even expel you from the guild—if they determine that you aren't serving Selesnya's best interests."
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Shade Fanatic",
    "source": "ALRageOfDemons",
    "page": 10,
    "skillProficiencies": [
      {
        "deception": true,
        "intimidation": true
      }
    ],
    "languageProficiencies": [
      {
        "other": true
      }
    ],
    "toolProficiencies": [
      {
        "forgery kit": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "forgery kit|phb",
          {
            "special": "transparent cylinder of shadow that has no opening"
          },
          "signet ring|phb",
          "fine clothes|phb",
          {
            "value": 1500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Deception}, {@skill Intimidation}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@item Forgery kit|phb}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Netherese"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@item forgery kit|phb}, a transparent cylinder of shadow that has no opening, a {@item signet ring|phb}, a set of {@item fine clothes|phb}, and 15 gp"
          }
        ]
      },
      {
        "name": "Lifestyle",
        "type": "entries",
        "entries": [
          "Modest"
        ]
      },
      {
        "name": "Overview",
        "type": "entries",
        "entries": [
          "You grew up at a time when the wizards of Netheril were at war with the elves of Cormanthor. You recall sitting cross-legged hearing the stories of the glorious Thultanthar, also called the Shade Enclave and the City of Shade, and aspired to study there and maybe even did, for a time. Your dreams came crashing down a few years ago when Thultanthar fell from the sky upon Myth Drannor.",
          "You know that there was a Netherese Garrison stationed near Hillsfar and have heard rumors that its downfall came from traitors within the ranks. You remain loyal to Netheril and seek other Shade loyalists and fanatics in the Cormanthor forest and the areas surrounding Hillsfar."
        ]
      },
      {
        "name": "Feature: Secret Society",
        "type": "entries",
        "entries": [
          "You have a special way of communicating with others who feel the same way you do about the Shade. When you enter a village or larger city you can identify contact who will give you information on those that would hinder your goals and those would help you simply because of your desire to see the Shade Enclave return in all its glory. Note: This feature is a variant of the Criminal feature."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "entries": [
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I am a bully; I try to hide it though."
              ],
              [
                "2",
                "I let my actions speak for themselves"
              ],
              [
                "3",
                "I am important; I will not let anyone forget that."
              ],
              [
                "4",
                "You are either with me or against me."
              ],
              [
                "5",
                "I know it is only a time before I am betrayed by those I care for."
              ],
              [
                "6",
                "I never understand why people get so emotional."
              ],
              [
                "7",
                "They are out to get me. It is only my cunning that keeps me ahead of them"
              ],
              [
                "8",
                "Everyone has a choice, the one I make is always right though."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Hope. I know even if I need do evil acts, history will be my redemption. (Chaos)"
              ],
              [
                "2",
                "Dedicated. I can do anything I put my mind to (Lawful)"
              ],
              [
                "3",
                "Exciting. I have found the truth of the Shadovar and want to share it with everyone. (Any)"
              ],
              [
                "4",
                "Frugal. I horde my possessions knowing that someday I will be called upon to give everything I have to the cause (Any)"
              ],
              [
                "5",
                "Eloquent. I use my words to sway others to my beliefs. (Any)"
              ],
              [
                "6",
                "Compassionate. It is through love that others will join in our cause. (Good)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "They say the Shade broke the bonds of mortality; I want to find out how."
              ],
              [
                "2",
                "The whispers in my head remind me that there is power to be found in the shadows."
              ],
              [
                "3",
                "For the glory of Netheril, I will grow in power."
              ],
              [
                "4",
                "I once lived in Hillsfar, I was chased out before I was able to say farewell."
              ],
              [
                "5",
                "My true love was a killed by the Red Plumes; I plot to make them suffer."
              ],
              [
                "6",
                "I had a loved one die in the arena at Hillsfar; I am out to prove I am stronger than them!"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I always over exaggerate my abilities."
              ],
              [
                "2",
                "I cannot bear to let those I care for out of my sight."
              ],
              [
                "3",
                "I am incapable of standing up for myself."
              ],
              [
                "4",
                "The group I am with has committed atrocities; I am always worried their actions will become public."
              ],
              [
                "5",
                "I always enjoy a good mug of ale... or five."
              ],
              [
                "6",
                "I know what I do is wrong, but am afraid to speak up about it."
              ]
            ]
          }
        ],
        "name": "Suggested Characteristics"
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Shipwright",
    "source": "GoS",
    "page": 33,
    "skillProficiencies": [
      {
        "history": true,
        "perception": true
      }
    ],
    "toolProficiencies": [
      {
        "carpenter's tools": true,
        "vehicles (water)": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "item": "carpenter's tools|phb",
            "displayName": "set of well-loved carpenter's tools"
          },
          {
            "item": "book|phb",
            "displayName": "blank book"
          },
          "ink (1-ounce bottle)|phb",
          "ink pen|phb",
          "traveler's clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill History}, {@skill Perception}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@item Carpenter's tools|phb}, {@filter Vehicles (water)|items|source=phb;dmg|miscellaneous=mundane|type=vehicle (water)}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A set of well-loved {@item carpenter's tools|phb}, a blank {@item book|phb}, {@item Ink (1-ounce bottle)|phb|1 ounce of ink}, an {@item ink pen|phb}, a set of {@item traveler's clothes|phb}, and a leather {@item pouch|phb} with 10 gp"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: I'll Patch It!",
        "entries": [
          "Provided you have carpenter's tools and wood, you can perform repairs on a water vehicle. When you use this ability, you restore a number of hit points to the hull of a water vehicle equal to 5 × your proficiency modifier. A vehicle cannot be patched by you in this way again until after it has been pulled ashore and fully repaired."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Life at Sea",
        "entries": [
          "Your life at sea and in port has shaped you; you can roll on the following table to determine its impact or choose an element that best fits your character.",
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Sea's Influence"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "{@b Grand Designs.} You are working on plans and schematics for a new, very fast ship. You must examine as many different kinds of vessels as possible to help ensure the success of your design."
              ],
              [
                "2",
                "{@b Solid and Sound.} You patched up a war galley and prevented it from sinking. The local navy regards you as a friend."
              ],
              [
                "3",
                "{@b Favored.} You insisted on thicker planking for a merchant vessel's hull, which saved it from sinking when it smashed against a reef. You have a standing invitation to visit the merchant's distant mansion."
              ],
              [
                "4",
                "{@b Master of Armaments.} You specialized in designing and mounting defenses for the navy. You easily recognize and determine the quality of such items."
              ],
              [
                "5",
                "{@b Low Places.} You have contacts in the smuggling outfits along the coast; you occasionally repair the criminals' ships in exchange for coin and favors."
              ],
              [
                "6",
                "{@b Mysteries of the Deep.} You experienced an encounter with a possibly divine being while sailing alone. Work with your DM to determine the secret about the deep waters of the sea that this entity revealed to you."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "Shipwrights are resourceful carpenters and designers. They often have a dedicated spot at the local tavern, since shipwrights are invaluable to coastal communities. Some travel with naval fleets and might serve as officers if their temperament suits it. Shipwrights have an affinity for working with their hands and often perform feats of carpentry that others might deem miraculous.",
          {
            "type": "table",
            "caption": "Shipwright Personality Traits",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I love talking and being heard more than I like to listen."
              ],
              [
                "2",
                "I'm extremely fond of puzzles."
              ],
              [
                "3",
                "I thrive under pressure."
              ],
              [
                "4",
                "I love sketching and designing objects, especially boats."
              ],
              [
                "5",
                "I'm not afraid of hard work—in fact, I prefer it."
              ],
              [
                "6",
                "A pipe, an ale, and the smell of the sea: paradise."
              ],
              [
                "7",
                "I have an endless supply of cautionary tales related to the sea."
              ],
              [
                "8",
                "I don't mind getting my hands dirty."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Shipwright Ideals",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Crew. If everyone on deck pitches in, we'll never sink. (Good)"
              ],
              [
                "2",
                "Careful Lines. A ship must be balanced according to the laws of the universe. (Lawful)"
              ],
              [
                "3",
                "Invention. Make what you need out of whatever is at hand. (Chaotic)"
              ],
              [
                "4",
                "Perfection. To measure a being and find it lacking is the greatest disappointment. (Evil)"
              ],
              [
                "5",
                "Reflection. Muddied water always clears in time. (Any)"
              ],
              [
                "6",
                "Hope. The horizon at sea holds the greatest promise. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Shipwright Bonds",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I must visit all the oceans of the world and behold the ships that sail there."
              ],
              [
                "2",
                "Much of the treasure I claim will be used to enrich my community."
              ],
              [
                "3",
                "I must find a kind of wood rumored to possess magical qualities."
              ],
              [
                "4",
                "I repair broken things to redeem what's broken in myself."
              ],
              [
                "5",
                "I will craft a boat capable of sailing through the most dangerous of storms."
              ],
              [
                "6",
                "A kraken destroyed my masterpiece; its teeth shall adorn my hearth."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Shipwright Flaws",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I don't know when to throw something away. You never know when it might be useful again."
              ],
              [
                "2",
                "I get frustrated to the point of distraction by shoddy craftsmanship."
              ],
              [
                "3",
                "Though I am an excellent crafter, my work tends to look as though it belongs on a ship."
              ],
              [
                "4",
                "I am so obsessed with sketching my ideas for elaborate inventions that I sometimes forget little thing like eating and sleeping."
              ],
              [
                "5",
                "I'm judgmental of those who are not skilled with tools of some kind."
              ],
              [
                "6",
                "I sometimes take things that don't belong to me, especially if they are very well made."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Silverquill Student",
    "source": "SCC",
    "page": 35,
    "feats": [
      {
        "strixhaven initiate|scc": true
      }
    ],
    "skillProficiencies": [
      {
        "intimidation": true,
        "persuasion": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 2
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "ink (1-ounce bottle)|phb",
          "ink pen|phb",
          {
            "special": "book of poetry"
          },
          {
            "special": "school uniform"
          },
          {
            "item": "pouch|phb",
            "containsValue": 1500
          }
        ]
      }
    ],
    "additionalSpells": [
      {
        "expanded": {
          "s1": [
            "dissonant whispers",
            "silvery barbs|scc"
          ],
          "s2": [
            "calm emotions",
            "darkness"
          ],
          "s3": [
            "beacon of hope",
            "daylight"
          ],
          "s4": [
            "compulsion",
            "confusion"
          ],
          "s5": [
            "dominate person",
            "rary's telepathic bond"
          ]
        }
      }
    ],
    "fromFeature": {
      "additionalSpells": true,
      "feats": true
    },
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Intimidation}, {@skill Persuasion}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Two of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@item Ink (1-ounce bottle)|PHB|bottle of black ink}, an {@item ink pen|PHB}, a book of poetry, a school uniform, and a {@item pouch|phb} containing 15 gp"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Silverquill Initiate",
        "entries": [
          "You gain the {@feat Strixhaven Initiate|SCC} feat and must choose Silverquill within it.",
          "In addition, if you have the Spellcasting or Pact Magic feature, the spells on the Silverquill Spells table are added to the spell list of your spellcasting class. (If you are a multiclass character with multiple spell lists, these spells are added to all of them.)",
          {
            "type": "table",
            "caption": "Silverquill Spells",
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
                "{@spell Dissonant Whispers}, {@spell Silvery Barbs|SCC}"
              ],
              [
                "2nd",
                "{@spell Calm Emotions}, {@spell Darkness}"
              ],
              [
                "3rd",
                "{@spell Beacon of Hope}, {@spell Daylight}"
              ],
              [
                "4th",
                "{@spell Compulsion}, {@spell Confusion}"
              ],
              [
                "5th",
                "{@spell Dominate Person}, {@spell Rary's Telepathic Bond}"
              ]
            ]
          },
          "Consider customizing how your spells look when you cast them. Your Silverquill spells might be accompanied by visual effects resembling splotches of ink or radiating ripples of golden light. Any auditory effects of your spells often sound like amplified echoes of your own voice speaking the spells' verbal components—even amid the crash of lightning or a fiery eruption."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Building a Silverquill Character",
        "entries": [
          "Many bards find a home in Silverquill, putting the power of their voices to use with Silverquill magic. Wizards (especially those who study the Schools of {@class Wizard|PHB|Illusion|Illusion|PHB} and {@class Wizard|PHB|Enchantment|Enchantment|PHB}) are common in Silverquill, as are warlocks. Clerics with the Divine Domains of {@class Cleric|PHB|Light|Light|PHB} and {@class Cleric|PHB|Trickery|Trickery|PHB} also fit in well among the mages of Silverquill.",
          "A number of both paladins and rogues attend Silverquill College as well, highlighting the diversity of the student body.",
          {
            "type": "entries",
            "name": "Suggested Characteristics",
            "entries": [
              "With the college's intense standards looming over them, Silverquill students range from cocky and cutthroat to overwhelmed perfectionists. The Silverquill Personality Traits table suggests a variety of traits you might adopt for your character.",
              {
                "type": "table",
                "caption": "Silverquill Personality Traits",
                "colLabels": [
                  "d6",
                  "Personality Trait"
                ],
                "colStyles": [
                  "col-2 text-center",
                  "col-10"
                ],
                "rows": [
                  [
                    "1",
                    "I'll say whatever I need to in order to maintain my high social status."
                  ],
                  [
                    "2",
                    "I prefer saying the blunt truth over a pretty lie, and I don't particularly care whose feelings I hurt."
                  ],
                  [
                    "3",
                    "I believe that uplifting my peers is the best way to succeed."
                  ],
                  [
                    "4",
                    "I've mastered the art of using humor as a defense, and I always have a charming joke ready."
                  ],
                  [
                    "5",
                    "I always wait before speaking, analyzing the situation for whichever angle is most advantageous to my goals."
                  ],
                  [
                    "6",
                    "No one knows about the all-nighters I've pulled to keep my magic looking effortless, and I'm going to keep it that way."
                  ]
                ]
              }
            ]
          },
          {
            "type": "entries",
            "name": "Silverquill Trinkets",
            "entries": [
              "When you make your character, you may roll once on the Silverquill Trinkets table, instead of on the {@item trinket|phb|Trinkets table} in the {@book Player's Handbook|PHB}, for your starting trinket.",
              {
                "type": "table",
                "caption": "Silverquill Trinkets",
                "colLabels": [
                  "d6",
                  "Trinket"
                ],
                "colStyles": [
                  "col-2 text-center",
                  "col-10"
                ],
                "rows": [
                  [
                    "1",
                    "A black leather notebook filled with half-finished poems"
                  ],
                  [
                    "2",
                    "A set of flashcards detailing different colloquialisms and their meanings"
                  ],
                  [
                    "3",
                    "A canteen that makes any liquid drunk from it taste sweet"
                  ],
                  [
                    "4",
                    "A forged permission slip granting access to the special archives of Strixhaven's libraries"
                  ],
                  [
                    "5",
                    "A stylish silver pin that references a famous series of novels about warlocks"
                  ],
                  [
                    "6",
                    "A stack of small pieces of parchment, each enchanted to stick to whatever surface it's pressed against and peel off easily"
                  ]
                ],
                "data": {
                  "tableInclude": true
                }
              }
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Simic Scientist",
    "source": "GGR",
    "page": 93,
    "skillProficiencies": [
      {
        "arcana": true,
        "medicine": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 2
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "special": "Simic insignia"
          },
          "common clothes|phb",
          {
            "item": "book|phb",
            "displayName": "book of research notes"
          },
          "ink pen|phb",
          "ink (1-ounce bottle)|phb",
          {
            "item": "oil (flask)|phb",
            "displayName": "flask of oil (made from blubber)"
          },
          {
            "item": "acid (vial)|phb",
            "displayName": "vial of acid (derived from digestive juices)"
          },
          {
            "special": "vial of fish scales"
          },
          {
            "special": "vial of seaweed"
          },
          {
            "special": "vial of jellyfish stingers"
          },
          {
            "special": "glass bottle of unidentified slime"
          },
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "additionalSpells": [
      {
        "expanded": {
          "s0": [
            "acid splash#c",
            "druidcraft#c"
          ],
          "s1": [
            "detect poison and disease",
            "expeditious retreat",
            "jump"
          ],
          "s2": [
            "alter self",
            "enhance ability",
            "enlarge/reduce"
          ],
          "s3": [
            "gaseous form",
            "water breathing",
            "wind wall"
          ],
          "s4": [
            "freedom of movement",
            "polymorph"
          ],
          "s5": [
            "creation"
          ]
        }
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Arcana}, {@skill Medicine}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Two of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A Simic insignia, a set of {@item common clothes|phb|commoner's clothes}, a {@item book|phb} of research notes, an {@item ink pen|phb}, a {@item Ink (1-ounce bottle)|phb|bottle of squid ink}, a {@item oil (flask)|phb|flask of oil} (made from blubber), a {@item acid (vial)|phb|vial of acid} (derived from digestive juices), a vial of fish scales, a vial of seaweed, a vial of jellyfish stingers, a glass bottle of unidentified slime, and a belt {@item pouch|phb} containing 10 gp (Azorius 1-zino coins)"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Clades and Projects",
        "entries": [
          "As a Simic researcher, you are part of a clade—a diverse group of individuals combining disparate talents in pursuit of a common goal—or a researcher on a specialized, short-term project focused on addressing an immediate need. You can roll a {@dice d6} or choose from the options in the Research Options table to determine your area of research.",
          {
            "type": "table",
            "caption": "Research Options",
            "colLabels": [
              "d6",
              "Clade/Project"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Hull Clade, focused on protection and durability"
              ],
              [
                "2",
                "Fin Clade, focused on movement"
              ],
              [
                "3",
                "Gyre Clade, focused on cyclical patterns and metamagic"
              ],
              [
                "4",
                "Guardian Project, focused on creating guard monsters and super soldiers"
              ],
              [
                "5",
                "Crypsis Project, focused on intelligence and counterintelligence"
              ],
              [
                "6",
                "Independent research in a new area"
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Researcher",
        "entries": [
          "When you attempt to learn or recall a magical or scientific fact, if you don't know that information, you know where and from whom you can obtain it. Usually, this information comes from a Simic laboratory, or sometimes from an Izzet facility, a library, a university, or an independent scholar or other learned person or creature. Knowing where the information can be found doesn't automatically enable you to learn it; you might need to offer bribes, favors, or other incentives to induce people to reveal their secrets.",
          "Your DM might rule that the knowledge you seek is secreted away in an inaccessible place, or that it simply can't be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Simic Guild Spells",
        "entries": [
          "{@i Prerequisite: Spellcasting or Pact Magic class feature}",
          "For you, the spells on the Simic Guild Spells table are added to the spell list of your spellcasting class. (If you are a multiclass character with multiple spell lists, these spells are added to all of them.)",
          {
            "type": "table",
            "caption": "Simic Guild Spells",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "Spell Level",
              "Spells"
            ],
            "rows": [
              [
                "Cantrip",
                "{@spell acid splash}, {@spell druidcraft}"
              ],
              [
                "1st",
                "{@spell detect poison and disease}, {@spell expeditious retreat}, {@spell jump}"
              ],
              [
                "2nd",
                "{@spell alter self}, {@spell enhance ability}, {@spell enlarge/reduce}"
              ],
              [
                "3rd",
                "{@spell gaseous form}, {@spell water breathing}, {@spell wind wall}"
              ],
              [
                "4th",
                "{@spell freedom of movement}, {@spell polymorph}"
              ],
              [
                "5th",
                "{@spell creation}"
              ]
            ]
          },
          "When your magic causes physical alterations in yourself or others, the result often displays the characteristics of fish, amphibians, or other water-dwelling creatures. Blue-green eddies of magical energy sometimes accompany your spellcasting, forming spirals that reflect the mathematical perfection of nature."
        ]
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "The bizarre science of the Simic Combine attracts a certain type of personality and encompasses a set of beliefs about the nature of life. Simic members' bonds and flaws derive from their scientific research—including their creation of new life forms, which they can become very attached to.",
          {
            "type": "table",
            "caption": "Personality Traits",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I can't wait to see what I become next!"
              ],
              [
                "2",
                "I am convinced that everything inclines toward constant improvement."
              ],
              [
                "3",
                "I'm eager to explain every detail of my most intricate experiments and theories to anyone who shows the least bit of interest."
              ],
              [
                "4",
                "I assume that everyone needs even the most basic concepts explained to them."
              ],
              [
                "5",
                "I describe everything that happens as if it were going into my research notes (and it often is)."
              ],
              [
                "6",
                "I am insatiably curious about the seemingly infinite forms and adaptations of life."
              ],
              [
                "7",
                "I can't resist prying into anything forbidden, since it must be terribly interesting."
              ],
              [
                "8",
                "I employ a highly technical vocabulary to avoid imprecision and ambiguity in my communication."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Ideals",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "{@b Guild}. My guild is all that really matters. (Any)"
              ],
              [
                "2",
                "{@b Change}. All life is meant to progress toward perfection, and our work is to hurry it along—no matter what must be upended along the way. (Chaotic)"
              ],
              [
                "3",
                "{@b Knowledge}. Understanding the world is more important than what you do with your knowledge. (Neutral)"
              ],
              [
                "4",
                "{@b Greater Good}. I want to reshape the world into higher forms of life so that all can enjoy evolution. (Good)"
              ],
              [
                "5",
                "{@b Logic}. It's foolish to let emotions and principles interfere with the conclusions of logic. (Lawful)"
              ],
              [
                "6",
                "{@b Superiority}. My vast intellect and strength are directed toward increasing my sway over others. (Evil)"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Bonds",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I helped create a krasis that I love like a pet and would carry with me everywhere... except it's the size of a building, and it might eat me."
              ],
              [
                "2",
                "In my laboratory, I discovered something that I think could eliminate half the life on Ravnica."
              ],
              [
                "3",
                "The other researchers in my clade are my family—a big, eccentric family including members and parts of many species."
              ],
              [
                "4",
                "The laboratory where I did my research contains everything that is precious to me."
              ],
              [
                "5",
                "I will get revenge on the shortsighted fool who killed my precious krasis creation."
              ],
              [
                "6",
                "Everything I do is an attempt to impress someone I love."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Flaws",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I have a rather embarrassing mutation that I do everything I can to keep hidden."
              ],
              [
                "2",
                "I'm more interested in taking notes on monstrous anatomy than in fighting monsters."
              ],
              [
                "3",
                "Every social situation I'm in seems to lead to my asking rude personal questions."
              ],
              [
                "4",
                "I'm supremely confident in my ability to adapt to any situation and handle any danger."
              ],
              [
                "5",
                "I'll take any risk to earn recognition for my scientific brilliance."
              ],
              [
                "6",
                "I have a tendency to take shortcuts in my research and any other tasks I have to complete."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Contacts",
        "entries": [
          "The fluid nature of clades, whose rosters span different laboratories and change as researchers discover new interests, creates abundant connections among the Simic. The guild members live in watery sinkholes called zonots, and their isolation shelters them from much contact with outsiders. Nonetheless, a fair number of Simic members are former members of other guilds.",
          "Roll twice on the Simic Contacts table (for an ally and a rival) and once on the Non-Simic Contacts table.",
          {
            "type": "table",
            "caption": "Simic Contacts",
            "colLabels": [
              "d8",
              "Contact"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "My research builds on my parents' work and takes it in interesting new directions."
              ],
              [
                "2",
                "If a serious problem confounds me, I can count on my mentor to provide clarity of thought."
              ],
              [
                "3",
                "A former laboratory colleague went on to work on the Guardian Project."
              ],
              [
                "4",
                "A former colleague has ventured into fields of research that are possibly immoral and almost certainly illegal."
              ],
              [
                "5",
                "A former lover is now the supervisor of a prominent clade."
              ],
              [
                "6",
                "My sibling has become an almost unrecognizable mutant."
              ],
              [
                "7",
                "An old friend has retreated into a secluded life as an ascetic deepsage, devoted to contemplating philosophical principles."
              ],
              [
                "8",
                "My former clade supervisor is now engaged in field research studying some of the largest beasts and monsters on Ravnica."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Non-Simic Contacts",
            "colLabels": [
              "d10",
              "Contact"
            ],
            "colStyles": [
              "text-center col-2",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "My older sibling is upset that I didn't follow them into the Azorius."
              ],
              [
                "2",
                "A Boros sergeant is always asking questions about my work, but I suspect they're genuinely curious."
              ],
              [
                "3",
                "A friend in my clade thinks I don't know they're a Dimir agent."
              ],
              [
                "4",
                "I helped a Golgari spore druid with the fertilization and growth of their fungus field."
              ],
              [
                "5",
                "I can't fathom what could have made my childhood friend run off and join the Gruul."
              ],
              [
                "6",
                "I love comparing notes with my friend in the Izzet, though our fields of research are very different."
              ],
              [
                "7",
                "I borrowed a lot of money from an Orzhov syndic to help finance my research."
              ],
              [
                "8",
                "A Rakdos ringmaster has taken an interest in my research which, come to think of it, might make a nice sideshow act."
              ],
              [
                "9",
                "I left the Selesnya—and a lover—behind when I joined the Simic."
              ],
              [
                "10",
                "Roll an additional Simic contact; you can decide if the contact is an ally or a rival."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "How Do I Fit In?",
        "entries": [
          "As a Simic adventurer, your mission likely aligns with the Adaptationist philosophy; the disagreements and tensions among the guilds will soon erupt into open conflict, and your guild needs your help to ensure that the Simic survive. That help might come in the form of defending against Golgari incursions into Simic zonots or shielding Simic research from Azorius intrusion. It could also involve more subtle, diplomatic work to maintain balance among the guilds, or subterfuge aimed at undermining another guild's grab for power.",
          "Self-improvement is also an important part of your mission. Anything you can do to make yourself more capable—whether learning a new spell or adopting a new hybridizing mutation—gives the Simic a stronger weapon in its arsenal. The combine must change to survive, and that means individual members of the guild must grow and adapt as well."
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Smuggler",
    "source": "GoS",
    "page": 34,
    "skillProficiencies": [
      {
        "athletics": true,
        "deception": true
      }
    ],
    "toolProficiencies": [
      {
        "vehicles (water)": true
      }
    ],
    "startingEquipment": [
      {
        "a": [
          {
            "special": "fancy leather vest"
          }
        ],
        "b": [
          {
            "special": "pair of leather boots"
          }
        ]
      },
      {
        "_": [
          "common clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Athletics}, {@skill Deception}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@filter Vehicles (water)|items|source=phb;dmg|miscellaneous=mundane|type=vehicle (water)}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A fancy leather vest or a pair of leather boots, a set of {@item common clothes|phb}, and a leather {@item pouch|phb} with 15 gp"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Down Low",
        "entries": [
          "You are acquainted with a network of smugglers who are willing to help you out of tight situations. While in a particular town, city, or other similarly sized community (DM's discretion), you and your companions can stay for free in safe houses. Safe houses provide a poor lifestyle. While staying at a safe house, you can choose to keep your presence (and that of your companions) a secret."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Claim to Fame",
        "entries": [
          "Every smuggler has that one tale that sets them apart from common criminals. By wits, sailing skill, or a silver tongue, you lived to tell the story—and you tell it often. You can roll on the following table to determine your claim or choose one that best fits your character.",
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Accomplishment"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Spirit of the Whale. You smuggled stolen dwarven spirits in the body of a dead whale being pulled behind a fishing boat. When you delivered the goods, the corpse suddenly exploded, sending whale meat and whiskey bottles for half a mile."
              ],
              [
                "2",
                "Cart and Sword. You drove a cart filled with stolen art through the middle of a battlefield while singing sea shanties to confuse the combatants."
              ],
              [
                "3",
                "The Recruit. You enlisted in another nation's navy for the purpose of smuggling stolen jewels to a distant port. You attained a minor rank before disappearing from the navy and making your way here."
              ],
              [
                "4",
                "River of Shadows. Your riverboat accidentally slipped through the veil into the Shadowfell for several hours. While you were there, you sold some stolen dragonborn artifacts before returning to this plane and paddling home."
              ],
              [
                "5",
                "Gold-Hearted. You agreed to transport a family escaping a war. The baby began to cry at a checkpoint, and you gave the guards all your gold to let you pass. The family never found out about this gesture."
              ],
              [
                "6",
                "Playing Both Sides. You once smuggled crates of crossbow bolts and bundles of arrows, each destined for an opposing side in a regional war, at the same time. The buyers arrived within moments of each other but did not discover your trickery."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "In general, smugglers value survival, and then profit, above other things. One could be a part of a larger organization, or might run a small smuggling vessel of their own. Smugglers live the lies they have told, and they have a natural ability to recall all the falsehoods and half-truths they have ever spouted.",
          {
            "type": "table",
            "caption": "Smuggler Personality Traits",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I love being on the water but hate fishing."
              ],
              [
                "2",
                "I think of everything in terms of monetary value."
              ],
              [
                "3",
                "I never stop smiling."
              ],
              [
                "4",
                "Nothing rattles me; I have a lie for every occasion."
              ],
              [
                "5",
                "I love gold but won't cheat a friend."
              ],
              [
                "6",
                "I enjoy doing things others believe to be impossible."
              ],
              [
                "7",
                "I become wistful when I see the sun rise over the ocean."
              ],
              [
                "8",
                "I am no common criminal; I am a mastermind."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Smuggler Ideals",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "{@b Wealth} Heaps of coins in a secure vault is all I dream of. (Any)"
              ],
              [
                "2",
                "{@b Smuggler's Code} I uphold the unwritten rules of the smugglers, who do not cheat one another or directly harm innocents. (Lawful)"
              ],
              [
                "3",
                "{@b All for a Coin} I'll do nearly anything if it means I turn a profit. (Evil)"
              ],
              [
                "4",
                "{@b Peace and Prosperity} I smuggle only to achieve a greater goal that benefits my community. (Good)"
              ],
              [
                "5",
                "{@b People} For all my many lies, I place a high value on friendship. (Any)"
              ],
              [
                "6",
                "{@b Daring} I am most happy when risking everything. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Smuggler Bonds",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "My vessel was stolen from me, and I burn with the desire to recover it."
              ],
              [
                "2",
                "I intend to become the leader of the network of smugglers that I belong to."
              ],
              [
                "3",
                "I owe a debt that cannot be repaid in gold."
              ],
              [
                "4",
                "After one last job, I will retire from the business."
              ],
              [
                "5",
                "I was tricked by a fellow smuggler who stole something precious from me. I will find that thief."
              ],
              [
                "6",
                "I give most of my profits to a charitable cause, and I don't like to brag about it."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Smuggler Flaws",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Lying is reflexive, and I sometimes engage in it without realizing."
              ],
              [
                "2",
                "I tend to assess my relationships in terms of profit and loss."
              ],
              [
                "3",
                "I believe everyone has a price and am cynical toward those who present themselves as virtuous."
              ],
              [
                "4",
                "I struggle to trust the words of others."
              ],
              [
                "5",
                "Few people know the real me."
              ],
              [
                "6",
                "Though I act charming, I feel nothing for others and don't know what friendship is."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Soldier",
    "source": "PHB",
    "page": 140,
    "basicRules": true,
    "skillProficiencies": [
      {
        "athletics": true,
        "intimidation": true
      }
    ],
    "toolProficiencies": [
      {
        "gaming set": true,
        "vehicles (land)": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "special": "insignia of rank"
          },
          {
            "special": "trophy taken from a fallen enemy (a dagger, broken blade, or piece of a banner)"
          },
          "common clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      },
      {
        "a": [
          {
            "item": "dice set|phb",
            "displayName": "bone dice set"
          }
        ],
        "b": [
          "playing card set|phb"
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Athletics}, {@skill Intimidation}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter gaming set|items|source=phb|miscellaneous=mundane|type=gaming set}, {@filter vehicles (land)|items|source=phb;dmg|miscellaneous=mundane|type=vehicle (land)}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "An insignia of rank, a trophy taken from a fallen enemy (a {@item dagger|phb}, broken blade, or piece of a banner), a bone {@item dice set|phb} or {@item playing card set|phb}, a set of {@item common clothes|phb}, and a belt {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "name": "Feature: Military Rank",
        "type": "entries",
        "entries": [
          "You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Specialty",
        "type": "entries",
        "entries": [
          "During your time as a soldier, you had a specific role to play in your unit or army. Roll a d8 or choose from the options in the table below to determine your role:",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Role"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Officer"
              ],
              [
                "2",
                "Scout"
              ],
              [
                "3",
                "Infantry"
              ],
              [
                "4",
                "Cavalry"
              ],
              [
                "5",
                "Healer"
              ],
              [
                "6",
                "Quartermaster"
              ],
              [
                "7",
                "Standard-bearer"
              ],
              [
                "8",
                "Support staff (cook, blacksmith, or the like)"
              ]
            ]
          }
        ]
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "The horrors of war combined with the rigid discipline of military service leave their mark on all soldiers, shaping their ideals, creating strong bonds, and often leaving them scarred and vulnerable to fear, shame, and hatred.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I'm always polite and respectful."
              ],
              [
                "2",
                "I'm haunted by memories of war. I can't get the images of violence out of my mind."
              ],
              [
                "3",
                "I've lost too many friends, and I'm slow to make new ones."
              ],
              [
                "4",
                "I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation."
              ],
              [
                "5",
                "I can stare down a hell hound without flinching."
              ],
              [
                "6",
                "I enjoy being strong and like breaking things."
              ],
              [
                "7",
                "I have a crude sense of humor."
              ],
              [
                "8",
                "I face problems head-on. A simple, direct solution is the best path to success."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Greater Good. Our lot is to lay down our lives in defense of others. (Good)"
              ],
              [
                "2",
                "Responsibility. I do what I must and obey just authority. (Lawful)"
              ],
              [
                "3",
                "Independence. When people follow orders blindly, they embrace a kind of tyranny. (Chaotic)"
              ],
              [
                "4",
                "Might. In life as in war, the stronger force wins. (Evil)"
              ],
              [
                "5",
                "Live and Let Live. Ideals aren't worth killing over or going to war for. (Neutral)"
              ],
              [
                "6",
                "Nation. My city, nation, or people are all that matter. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I would still lay down my life for the people I served with."
              ],
              [
                "2",
                "Someone saved my life on the battlefield. To this day, I will never leave a friend behind."
              ],
              [
                "3",
                "My honor is my life."
              ],
              [
                "4",
                "I'll never forget the crushing defeat my company suffered or the enemies who dealt it."
              ],
              [
                "5",
                "Those who fight beside me are those worth dying for."
              ],
              [
                "6",
                "I fight for those who cannot fight for themselves."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "The monstrous enemy we faced in battle still leaves me quivering with fear."
              ],
              [
                "2",
                "I have little respect for anyone who is not a proven warrior."
              ],
              [
                "3",
                "I made a terrible mistake in battle that cost many lives—and I would do anything to keep that mistake secret."
              ],
              [
                "4",
                "My hatred of my enemies is blinding and unreasoning."
              ],
              [
                "5",
                "I obey the law, even if the law causes misery."
              ],
              [
                "6",
                "I'd rather eat my armor than admit when I'm wrong."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Stojanow Prisoner",
    "source": "ALCurseOfStrahd",
    "page": 8,
    "skillProficiencies": [
      {
        "deception": true,
        "perception": true
      }
    ],
    "toolProficiencies": [
      {
        "gaming set": true,
        "thieves' tools": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "special": "small knife"
          },
          "common clothes|phb",
          {
            "item": "trinket|phb",
            "displayName": "trinket from the life you stayed behind to defend"
          },
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Deception}, {@skill Perception}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter gaming set|items|source=phb|miscellaneous=mundane|type=gaming set}, thieves' tools"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A small knife, a set of {@item common clothes|phb}, a {@item trinket|phb} from the life you stayed behind to defend, a belt {@item pouch|phb} with 10 gp"
          }
        ]
      },
      {
        "name": "Lifestyle",
        "type": "entries",
        "entries": [
          "Poor"
        ]
      },
      {
        "name": "Overview",
        "type": "entries",
        "entries": [
          "\\"We need to leave, now!\\" Those words still haunt your dreams at night. When everyone was fleeing Phlan, you choose to stay. Whether out of an emotional attachment, or pursuit of riches, you made the decision that would affect the rest of your life.",
          "Food became scarcer for those without connections. You became a beggar and to stay alive you bartered information to any interested party with food or gold to spare. You were good at what you did, and thought you were invincible. That changed when you were captured by the Tears of Virulence, the soldiers of Vorgansharax, the Maimed Virulence, for selling secrets to those bent on overthrowing the dragon. They locked you in the cells of Stojanow Gate. The first weeks you hoped to stay alive. As the weeks turned into months, and the interrogations continued you began to pray for death."
        ]
      },
      {
        "name": "Feature: Ex-Convict",
        "type": "entries",
        "entries": [
          "The knowledge gained during your incarceration lets you gain insight into local guards and jailors. You know which will accept bribes, or look the other way for you. You can also seek shelter for yourself from authorities with other criminals in the area. Note: This feature is a variant of the Courtier feature."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I am a bully; others will suffer as I have."
              ],
              [
                "2",
                "I always say yes even when I mean no; it's just easier."
              ],
              [
                "3",
                "I aim to misbehave."
              ],
              [
                "4",
                "I go out of my way to frustrate or anger those in power."
              ],
              [
                "5",
                "I strive to obey the law. I will never again make the mistake of going against authority."
              ],
              [
                "6",
                "I always plan everything out. The one time I let others plan things it did not end well for me."
              ],
              [
                "7",
                "I take blame to protect others from pain."
              ],
              [
                "8",
                "I hoard information, you never know what may come in handy."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Loss. I freely give those who offend me what was so brutally denied me, death. (Chaos)"
              ],
              [
                "2",
                "Dedication. I never betray those who trust me. (Law)"
              ],
              [
                "3",
                "Vengeance. I use any means to get information I need; I have been well taught. (Evil)"
              ],
              [
                "4",
                "Redemption. Everyone deserves a second chance. (Good)"
              ],
              [
                "5",
                "Resilience. I can survive any challenge (Any)"
              ],
              [
                "6",
                "Leadership. The best teams are made up of those that society has discarded."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I take up arms to help establish a free Phlan."
              ],
              [
                "2",
                "The horrors of my time in Stojanow haunt my dreams, only after a day of hard work can I find sleep."
              ],
              [
                "3",
                "I am indebted to those who freed me from prison, I will repay this debt."
              ],
              [
                "4",
                "My torturer survived the attack that set me free, I will find him/her."
              ],
              [
                "5",
                "I will not rest while others suffer fates similar to mine."
              ],
              [
                "6",
                "I am searching for a way to heal the scars of Stojanow, both physical and emotional."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "During stressful times, I find myself crying for no reason."
              ],
              [
                "2",
                "My nerve endings are shot from the interrogations; I am numb to all but the harshest touch."
              ],
              [
                "3",
                "I am incapable of standing up for myself."
              ],
              [
                "4",
                "I folded under the torture, and gave information that I promised would be kept secret. My life would be in jeopardy if others found out."
              ],
              [
                "5",
                "Survival is worth more than friendship."
              ],
              [
                "6",
                "The ghosts from my past hinder my actions."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Survivor",
    "source": "DoDk",
    "page": 247,
    "skillProficiencies": [
      {
        "choose": {
          "from": [
            "perception",
            "survival",
            "stealth",
            "athletics"
          ],
          "count": 2
        }
      }
    ],
    "toolProficiencies": [
      {
        "cook's utensils": true,
        "artisan's tools": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "cook's utensils|phb",
          "climber's kit|phb",
          "shovel|phb",
          {
            "special": "pair of thick gloves"
          },
          {
            "special": "cloak with a hood"
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "Two of the following: {@skill Perception}, {@skill Survival}, {@skill Stealth}, {@skill Athletics}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "Cook's utensils, one other set of artisan's tools"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "{@item Cook's utensils|PHB}, {@item climber's kit|PHB}, a {@item shovel|PHB}, a pair of thick gloves, a cloak with a hood."
          }
        ]
      },
      {
        "type": "entries",
        "name": "Marks of Survival",
        "entries": [
          {
            "type": "table",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d8",
              "Marks of Survival"
            ],
            "rows": [
              [
                "1",
                "Being alone for so long means I am very used to conversing with myself out loud."
              ],
              [
                "2",
                "I eat things that others find disgusting. I have learned to love the delicacies of scavenged food in the ruins."
              ],
              [
                "3",
                "I have many scars across my body from barely scraping by."
              ],
              [
                "4",
                "I am missing a finger on one hand due to a horrible encounter I had in the ruins."
              ],
              [
                "5",
                "I keep a locket of someone I lost in the ruins. I stare at it every night before I fall asleep to remember what I am looking for."
              ],
              [
                "6",
                "I keep souvenirs of the monsters I have bested in these ruins, to remind myself how strong I truly am."
              ],
              [
                "7",
                "I can sleep just about anywhere, nothing really phases me anymore."
              ],
              [
                "8",
                "I often recite the names of people I used to know and lost so I can hold on to their memory."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Makeshift Meals",
        "entries": [
          "You know how to purify food and rations found in the ruins. When you take a short rest, you prepare a meal for a number of creatures equal to your proficiency bonus. Creatures who consume the food regain hit points equal to your level. Once they do, they can't regain hit points from another one of your meals until they finish a long rest.",
          {
            "type": "table",
            "caption": "Suggested Characteristics",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "rows": [
              [
                "1",
                "I always have an exit strategy in mind if things go poorly."
              ],
              [
                "2",
                "You can't survive in this grim city without a good sense of humor, but I have a taste for gallows humor."
              ],
              [
                "3",
                "I try to work in the thin grey area between the squabbling factions, squeezing under their radar when possible. The less I am seen, the better."
              ],
              [
                "4",
                "If you spot danger, it is best to avoid it, that's how you survive."
              ],
              [
                "5",
                "Drakkenheim is a dangerous place. But I can navigate it with my eyes closed. No one else I've ever met is as good as I am."
              ],
              [
                "6",
                "In order to survive the monsters of Drakkenheim, one must be a monster of Drakkenheim."
              ],
              [
                "7",
                "Take everything you can from the dead, take it from the living if you can. If you are to survive, you must take any opportunity to scavenge."
              ],
              [
                "8",
                "I will never give up until I reclaim what I lost in these ruins."
              ]
            ]
          },
          {
            "type": "table",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "rows": [
              [
                "1",
                "Self-Reliance. I won't risk my life for others. Everyone must fend for themselves—better you than me. (Evil)"
              ],
              [
                "2",
                "Bravery. I find the thrill of surviving the monsters and magics of Drakkenheim exhilarating and thrive on the chaos. (Chaotic)"
              ],
              [
                "3",
                "Safety. Whatever I can do to keep myself fed and keep a safe place to rest is good in my books. (Any)"
              ],
              [
                "4",
                "Helpful. People need all the help they can get in the city, and I know I can provide it. (Good)"
              ],
              [
                "5",
                "Hope. I believe there is something worth saving here, we must hold on to the idea of a better future. (Good)"
              ],
              [
                "6",
                "Responsibility. I lived here before the meteor, I'll live here long after. I must protect my home and do what I can to make it livable again. (Lawful)"
              ]
            ]
          },
          {
            "type": "table",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d6",
              "Bond"
            ],
            "rows": [
              [
                "1",
                "I had family in these ruins. I know not what became of them, but I must find out."
              ],
              [
                "2",
                "This city is my home, and I will fight for what's left of it until the very end."
              ],
              [
                "3",
                "I'll do any dirty work in the city if it means a hot meal, a warm bed, or some good company."
              ],
              [
                "4",
                "I've spent so long in these ruins, its the outside world that terrifies me now."
              ],
              [
                "5",
                "Why haven't I left Drakkenheim? Have you seen how much gold there is to be made here?"
              ],
              [
                "6",
                "I am bound to the throne of Drakkenheim, and fight to see it one day reclaimed."
              ]
            ]
          },
          {
            "type": "table",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "rows": [
              [
                "1",
                "Any meal could be my last. I'll eat just about anything. I do what I must to survive."
              ],
              [
                "2",
                "I don't like being outside the Haze of the city for too long, I've gotten used to it."
              ],
              [
                "3",
                "I am convinced my family is alive in the city somewhere. I hear their voices call to me at night."
              ],
              [
                "4",
                "I don't trust anyone easily. I'll sleep with one eye open even around my companions, for Drakkenheim makes monsters of us all."
              ],
              [
                "5",
                "The years spent here have turned me to a vice, I very much rely on that vice to get me through my days."
              ],
              [
                "6",
                "I hear voices constantly. Sometimes I get distracted with conversations with people who are not there."
              ]
            ]
          }
        ],
        "data": {
          "isFeature": true
        }
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Ticklebelly Nomad",
    "source": "ALCurseOfStrahd",
    "page": 9,
    "skillProficiencies": [
      {
        "animal handling": true,
        "nature": true
      }
    ],
    "languageProficiencies": [
      {
        "giant": true
      }
    ],
    "toolProficiencies": [
      {
        "herbalism kit": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "herbalism kit|phb",
          {
            "special": "small article of jewelry that is distinct to your tribe"
          },
          "hunting trap|phb",
          "common clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Animal Handling}, {@skill Nature}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@item Herbalism kit|phb}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Giant"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "{@item Herbalism kit|phb}, a small article of jewelry that is distinct to your tribe, a {@item hunting trap|phb}, a set of {@item common clothes|phb}, and a belt {@item pouch|phb} containing 5 gp"
          }
        ]
      },
      {
        "name": "Lifestyle",
        "type": "entries",
        "entries": [
          "Poor"
        ]
      },
      {
        "name": "Overview",
        "type": "entries",
        "entries": [
          "You were born into a nomadic tribe that called the Ticklebelly Hills home. You migrated from location to location, living off the land with your tribe. The tribe would seasonally travel south into the Grass Sea and the Giant's Cairn, north into the Dragonspine Mountains, and even occasionally east across the Stojanow River to the borders of the Quivering forest.",
          "In your migrations, your people have come to know the stone giant tribes that populate the Giant's Cairn. The dragon cultists came to the hills one day—magic-users wearing purple and riding horrid beasts, black-clad warriors wearing wicked masks, and even soldiers from the nearby town of Phlan. Then the dragon called Vorgansharax arrived and laired in the hills, causing horrid thickets to grow and animals to act unusually. The cultists began raiding nomad camps for victims to offer to the wyrm. Eventually, the dragon moved on to attack Phlan, but life was never again the same for the nomads of the Ticklebelly Hills."
        ]
      },
      {
        "name": "Feature: At Home in the Wild",
        "type": "entries",
        "entries": [
          "The wilderness is your home and you are comfortable dwelling in it. You can find a place to hide, rest, or recuperate when out in the wild. This place of rest is secure enough to conceal you from most natural threats. Threats that are supernatural, magical, or are actively seeking you out might do so with difficulty depending on the nature of the threat (as determined by the DM). However, this feature doesn't shield or conceal you from scrying, mental probing, nor from threats that don't necessarily require the five senses to find you. Note: This feature is a variant of the Folk Hero feature."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "Ticklebelly nomads only venture into civilization when necessary. You are social within your tribe, with tribes of other nomads, and even with the stone giant tribes that populate the Giant's Cairn. However, other communities tend to either put you on your guard or put you in a state of wonder. Was it this wonder that enticed you into a life of adventuring? On the other hand, you are fiercely protective of and dedicated to your tribe. Perhaps it was this dedication that led you to venture out; either of your own will or at the behest of your tribe's leaders.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I eagerly inject myself into the unknown."
              ],
              [
                "2",
                "Villages, towns, and cities do not suit me. I'd rather be out in the wilderness any day."
              ],
              [
                "3",
                "I accomplish my tasks efficiently, using as few resources as possible."
              ],
              [
                "4",
                "It's difficult for me to remain in one place for long."
              ],
              [
                "5",
                "I loudly brag about my tribe every chance I get."
              ],
              [
                "6",
                "Having walked among giants, I am fearless in the face of bigger creatures."
              ],
              [
                "7",
                "I am quiet and reserved, but observant. Nothing escapes my attention."
              ],
              [
                "8",
                "My word is my bond. I see a promise to completion, even if it conflicts with my beliefs."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Kinship. Family is most important in life. Though I may be far from my own, the bonds of family must be protected in others' lives as well. (Good)"
              ],
              [
                "2",
                "Preservation. Nature must not be despoiled by encroaching civilization. (Any)"
              ],
              [
                "3",
                "Wanderlust. One must expand their horizons by seeing the world and exploring. (Chaos)"
              ],
              [
                "4",
                "Isolation. My tribe and its ways must be protected and shielded from outside influence. (Neutral)"
              ],
              [
                "5",
                "Protection. Threats to the land and to the people must be dealt with at any and all costs. (Law)"
              ],
              [
                "6",
                "Belonging: All creatures have a place in the world, so I strive to help others find theirs. (Good)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I ache to return to my tribe and the family I left, but cannot until my obligations are fulfilled."
              ],
              [
                "2",
                "The dragon cultists that invaded my homeland stole away one of my tribe's people. I will not know rest until I've found them."
              ],
              [
                "3",
                "The dragon's presence in the hills destroyed valuable territory and resulted in deaths within my tribe. The creature must pay for what it has done."
              ],
              [
                "4",
                "I carry a trinket that spiritually and emotionally ties me to my people and my home."
              ],
              [
                "5",
                "I discovered a strange relic in the hills during my tribe's wanderings. I must discover what it is."
              ],
              [
                "6",
                "One of the stone giant clans from the Giant's Cairn has graced me with a mark of kinship."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I throw myself and my friends into situations rarely ever thinking about consequences."
              ],
              [
                "2",
                "Unfamiliar people and surroundings put me on edge."
              ],
              [
                "3",
                "I have absolutely no patience for slowpokes and those who prove indecisive."
              ],
              [
                "4",
                "My desire to experience new things causes me to make unsafe choices."
              ],
              [
                "5",
                "I am overly protective of nature, sometimes to the detriment of my companions and myself."
              ],
              [
                "6",
                "My lack of worldliness often proves my undoing in social, commercial, and hostile situations."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Trade Sheriff",
    "source": "ALRageOfDemons",
    "page": 11,
    "skillProficiencies": [
      {
        "investigation": true,
        "persuasion": true
      }
    ],
    "languageProficiencies": [
      {
        "elvish": true
      }
    ],
    "toolProficiencies": [
      {
        "thieves' tools": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "thieves' tools|phb",
          {
            "special": "gray cloak"
          },
          {
            "item": "fine clothes|phb",
            "displayName": "Sheriff's insignia (badge) a set of fine clothes"
          },
          {
            "value": 1700
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Investigation}, {@skill Persuasion}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@item Thieves' tools|phb}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Elvish"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "{@item Thieves' tools|phb}, a gray cloak, Sheriff's insignia (badge) a set of {@item fine clothes|phb}, and 17 gp"
          }
        ]
      },
      {
        "name": "Lifestyle",
        "type": "entries",
        "entries": [
          "Modest"
        ]
      },
      {
        "name": "Overview",
        "type": "entries",
        "entries": [
          "You are one of the many people that make sure the trade routes are clear at ALL times. You assure that the Great Law of Trade is followed at all costs. You work by yourself or in groups to quell bandits and brigands who might stop trade routes from going through. You investigate potential ambushes and possible rumors as to someone wanting to rob or stop caravans. You are as much an investigator as you are law enforcement.",
          "You are able to go into a town/village around the Hillsfar area and find a contact that is willing to give you information from rumor to fact. This sometimes comes at a cost of a minor bribe of 1-9 silver pieces."
        ]
      },
      {
        "name": "Feature: Investigative Services",
        "type": "entries",
        "entries": [
          "You are part of a small force outside of Hillsfar. You have a special way of communicating with others and they seem to be at ease around you. You can invoke your rank to allow you access to a crime scene or to requisition equipment or horses on a temporary basis. When you enter a town or village around Hillsfar you can identify a contact who will give you information on the local rumors and would help you simply because of your desire to get answers and information for anyone wanting to disrupt trade. Note: This feature is a variant of the soldier feature."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "entries": [
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I am always polite and respectful"
              ],
              [
                "2",
                "I let my actions speak for themselves"
              ],
              [
                "3",
                "I am haunted by my past having seen the murder of a close friend or family member and it is the one case I always needed to solve but have not been able to."
              ],
              [
                "4",
                "I am quick to judge and slow to vindicate"
              ],
              [
                "5",
                "I can be very persuasive and am able to ask quest ions where others might not be able to."
              ],
              [
                "6",
                "I have a quirky personality that seems to take others off their guard."
              ],
              [
                "7",
                "My sense of humor is considered by most to be awkward."
              ],
              [
                "8",
                "Everyone has a choice, and they can always make the right choice, mine!"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Hope. my job is to speak for the victim (Good)"
              ],
              [
                "2",
                "Dedicated. Once I start an investigation, until told to do so, I do not quit, not matter where it leads. (Lawful)"
              ],
              [
                "3",
                "Nation. My city, nation, or people are all that matter. (Any)"
              ],
              [
                "4",
                "Mercenary. When I do investigations, I expect answers immediately. (Any)"
              ],
              [
                "5",
                "Eloquent. I use my words to sway others to give me answers. (Good)"
              ],
              [
                "6",
                "Might. It is through threats and force that I get my answers. (Lawful)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "To this day an unsolved case will always leave me haunted and bother me."
              ],
              [
                "2",
                "Through the might of my personality I will solve an investigation or puzzle."
              ],
              [
                "3",
                "It is my right to believe what I will, just try and stop me."
              ],
              [
                "4",
                "I need to prove my worth to my fellow Sheriffs"
              ],
              [
                "5",
                "Someone I cared for died under suspicious circumstances. I will find out what happened to them and bring their killer to justice."
              ],
              [
                "6",
                "I speak for those that cannot speak for themselves."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I always over exaggerate my abilities."
              ],
              [
                "2",
                "I cannot bear to let those I care for out of my sight."
              ],
              [
                "3",
                "I took a bribe to tank an investigation and I would do anything to keep it secret."
              ],
              [
                "4",
                "I have little respect for those that are of \\"low\\" intelligence/race."
              ],
              [
                "5",
                "I always enjoy a good mug of ale... or five to cover up my past."
              ],
              [
                "6",
                "I speak for the First Lord of Hillsfar and make sure everyone knows it."
              ]
            ]
          }
        ],
        "name": "Suggested Characteristics"
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Treasure Seeker",
    "source": "DoDk",
    "page": 248,
    "skillProficiencies": [
      {
        "investigation": true,
        "choose": {
          "from": [
            "stealth",
            "insight",
            "perception"
          ]
        }
      }
    ],
    "toolProficiencies": [
      {
        "thieves' tools": true,
        "cartographer's tools": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "thieves' tools|phb",
          {
            "special": "dark clothes with a hood and a face covering"
          },
          {
            "item": "signet ring|phb",
            "displayName": "signet ring of a fake lord"
          },
          {
            "special": "fake identification"
          },
          {
            "special": "set of weighted dice"
          },
          {
            "special": "deck of cards"
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Investigation} and one choice from the following: {@skill Stealth}, {@skill Insight}, or {@skill Perception}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "Thieves' tools, cartographer's tools"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "{@item Thieves' tools|PHB}, a set of dark clothes with a hood and a face covering. A {@item signet ring|PHB} of a fake lord, a fake identification, a set of weighted dice, and a deck of cards"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Treasure Hunters' Secrets",
        "entries": [
          {
            "type": "table",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d8",
              "Treasure Hunters' Secrets"
            ],
            "rows": [
              [
                "1",
                "You keep a cryptic map to a lost treasure that you have always wanted to uncover."
              ],
              [
                "2",
                "You have a coin that is heads on both sides, helpful for winning a chance game."
              ],
              [
                "3",
                "You have a magnifying spyglass you use to examine items."
              ],
              [
                "4",
                "You have a ring that opens to reveal a small compartment inside."
              ],
              [
                "5",
                "Your left boot has a compartment for a hidden dagger."
              ],
              [
                "6",
                "You carry an old compass that doesn't point north, you hope it points towards a great treasure."
              ],
              [
                "7",
                "You have a collection of exotic coins and medals that are of personal value to you."
              ],
              [
                "8",
                "You have a rival treasure hunter who used to be a partner. You parted ways years ago."
              ]
            ]
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Detail-Oriented",
        "entries": [
          "You double your proficiency bonus when making any ability check to search the ruins of Drakkenheim.",
          {
            "type": "table",
            "caption": "Suggested Characteristics",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "rows": [
              [
                "1",
                "I believe that I am destined for greatness, and nothing can convince me otherwise."
              ],
              [
                "2",
                "I always have a plan or plot to outwit my foes. It may not always be good, but it's almost always overly complex."
              ],
              [
                "3",
                "I love to flaunt my wealth and showcase the things I have bought with it."
              ],
              [
                "4",
                "I pay no mind to the risks of a situation. I always bet on myself and my abilities and it's gotten me this far. Never tell me the odds."
              ],
              [
                "5",
                "I have a quip, allegory, or joke for almost any situation."
              ],
              [
                "6",
                "I lie about anything and everything. I lie for almost no reason at all, sometimes just to see if I can fool the people around me."
              ],
              [
                "7",
                "I use flattery and honeyed words to get what I want."
              ],
              [
                "8",
                "I can't help it if valuable objects lying around end up in my pockets. It's for safe keeping."
              ]
            ]
          },
          {
            "type": "table",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "rows": [
              [
                "1",
                "Independent. No one tells me what to do. I make my own rules, and my own luck. (Chaotic)"
              ],
              [
                "2",
                "Fair. I do not take anything from anyone who couldn't afford to lose it. I am a treasure hunter, not a thief. (Lawful)"
              ],
              [
                "3",
                "Family. I care about material possessions and wealth, but not as much as I care about my friends and family. (Good)"
              ],
              [
                "4",
                "Aspiration. Wealth is power. Wealth means you will be remembered. In this world making a name for yourself is as simple as acquiring enough gold to buy your way to victory. I intend to be remembered. (Any)"
              ],
              [
                "5",
                "Danger. Every great discovery requires risk. The greater the risk, the greater the reward. It's the thrill of the hunt that I live for. (Any)"
              ],
              [
                "6",
                "Dignity. The dead and their prized belongings deserve more than to waste away in the ruins. They deserve to be found, remembered, and taken care of. (Lawful)"
              ]
            ]
          },
          {
            "type": "table",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d6",
              "Bond"
            ],
            "rows": [
              [
                "1",
                "My desire for wealth is out of a need to protect my family."
              ],
              [
                "2",
                "Something important to me was stolen. I've longed to get it back ever since."
              ],
              [
                "3",
                "I'm wanted for my many crimes and hope that where I am going, the law will not follow."
              ],
              [
                "4",
                "I made mistakes in my past that cost me the life of someone I loved. I will not let that happen again."
              ],
              [
                "5",
                "I plan to be the greatest thief or most cunning explorer of all time."
              ],
              [
                "6",
                "This is my last job, the big one. After this I hope to settle down with my wealth, maybe start a family."
              ]
            ]
          },
          {
            "type": "table",
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "rows": [
              [
                "1",
                "My entire identity is layers of falsities presented to hide my true self, for I am not a good person. I've never told the truth for as long as I can remember and it's too late now to stop."
              ],
              [
                "2",
                "Every situation, every person, is only as valuable to me as what I can gain from them. I'm not afraid to pull strings to bend luck in my favour."
              ],
              [
                "3",
                "I jump to defensive measures as soon as someone catches me in a lie, or tries to call me out for anything."
              ],
              [
                "4",
                "I take what I want, and I want it all."
              ],
              [
                "5",
                "I like to show my skills, talk big, and take big risks in the hopes of impressing everyone watching."
              ],
              [
                "6",
                "I know for a fact I am the smartest person in the room, and if people are suggesting anything otherwise they are terribly mistaken."
              ]
            ]
          }
        ],
        "data": {
          "isFeature": true
        }
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Urban Bounty Hunter",
    "source": "SCAG",
    "page": 153,
    "skillProficiencies": [
      {
        "choose": {
          "from": [
            "deception",
            "insight",
            "persuasion",
            "stealth"
          ],
          "count": 2
        }
      }
    ],
    "toolProficiencies": [
      {
        "choose": {
          "from": [
            "gaming set",
            "musical instrument",
            "thieves' tools"
          ],
          "count": 2
        }
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "item": "pouch|phb",
            "containsValue": 2000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "Choose two from among {@skill Deception}, {@skill Insight}, {@skill Persuasion}, and {@skill Stealth}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "Choose two from among one type of {@filter gaming set|items|source=phb|miscellaneous=mundane|type=gaming set}, one {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument}, and {@item thieves' tools|phb}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A set of clothes appropriate to your duties and a {@item pouch|phb} containing 20 gp"
          }
        ]
      },
      {
        "name": "Feature: Ear to the Ground",
        "type": "entries",
        "entries": [
          "You are in frequent contact with people in the segment of society that your chosen quarries move through. These people might be associated with the criminal underworld, the rough-and-tumble folk of the streets, or members of high society. This connection comes in the form of a contact in any city you visit, a person who provides information about the people and places of the local area."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "Use the tables for the {@background criminal} background in the Player's Handbook as the basis for your bounty hunter's traits and motivations, modifying the entries when appropriate to suit your identity as a bounty hunter.",
          "For instance, your bond might involve other bounty hunters or the organizations or individuals that employ you. Your ideal could be associated with your determination always to catch your quarry or your desire to maintain your reputation for being dependable."
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Urchin",
    "source": "PHB",
    "page": 141,
    "skillProficiencies": [
      {
        "sleight of hand": true,
        "stealth": true
      }
    ],
    "toolProficiencies": [
      {
        "disguise kit": true,
        "thieves' tools": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "special": "small knife"
          },
          {
            "special": "map of the city you grew up in"
          },
          {
            "special": "pet mouse"
          },
          {
            "special": "token to remember your parents by"
          },
          "common clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Sleight of Hand}, {@skill Stealth}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@item Disguise kit|phb}, {@item Thieves' tools|phb}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A small knife, a map of the city you grew up in, a pet mouse, a token to remember your parents by, a set of {@item common clothes|phb}, and a belt {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "name": "Feature: City Secrets",
        "type": "entries",
        "entries": [
          "You know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "Urchins are shaped by lives of desperate poverty, for good and for ill. They tend to be driven either by a commitment to the people with whom they shared life on the street or by a burning desire to find a better life—and maybe get some payback on all the rich people who treated them badly.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I hide scraps of food and trinkets away in my pockets."
              ],
              [
                "2",
                "I ask a lot of questions."
              ],
              [
                "3",
                "I like to squeeze into small places where no one else can get to me."
              ],
              [
                "4",
                "I sleep with my back to a wall or tree, with everything I own wrapped in a bundle in my arms."
              ],
              [
                "5",
                "I eat like a pig and have bad manners."
              ],
              [
                "6",
                "I think anyone who's nice to me is hiding evil intent."
              ],
              [
                "7",
                "I don't like to bathe."
              ],
              [
                "8",
                "I bluntly say what others are hinting at or hiding."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Respect. All people, rich or poor, deserve respect. (Good)"
              ],
              [
                "2",
                "Community. We have to take care of each other, because no one else is going to do it. (Lawful)"
              ],
              [
                "3",
                "Change. The low are lifted up, and the high and mighty are brought down. Change is the nature of things. (Chaotic)"
              ],
              [
                "4",
                "Retribution. The rich need to be shown what life and death are like in the gutters. (Evil)"
              ],
              [
                "5",
                "People. I help the people who help me—that's what keeps us alive. (Neutral)"
              ],
              [
                "6",
                "Aspiration. I'm going to prove that I'm worthy of a better life. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "My town or city is my home, and I'll fight to defend it."
              ],
              [
                "2",
                "I sponsor an orphanage to keep others from enduring what I was forced to endure."
              ],
              [
                "3",
                "I owe my survival to another urchin who taught me to live on the streets."
              ],
              [
                "4",
                "I owe a debt I can never repay to the person who took pity on me."
              ],
              [
                "5",
                "I escaped my life of poverty by robbing an important person, and I'm wanted for it."
              ],
              [
                "6",
                "No one else should have to endure the hardships I've been through."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "If I'm outnumbered, I will run away from a fight."
              ],
              [
                "2",
                "Gold seems like a lot of money to me, and I'll do just about anything for more of it."
              ],
              [
                "3",
                "I will never fully trust anyone other than myself."
              ],
              [
                "4",
                "I'd rather kill someone in their sleep than fight fair."
              ],
              [
                "5",
                "It's not stealing if I need it more than someone else."
              ],
              [
                "6",
                "People who can't take care of themselves get what they deserve."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Uthgardt Tribe Member",
    "source": "SCAG",
    "page": 153,
    "skillProficiencies": [
      {
        "athletics": true,
        "survival": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "choose": {
          "from": [
            "musical instrument",
            "anyArtisansTool"
          ]
        }
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "hunting trap|phb",
          "traveler's clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      },
      {
        "a": [
          {
            "special": "totemic token"
          }
        ],
        "b": [
          {
            "special": "set of tattoos marking your loyalty to Uthgar and your tribal totem"
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Athletics}, {@skill Survival}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Any one of your choice"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument} or {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@item hunting trap|phb}, a totemic token or set of tattoos marking your loyalty to Uthgar and your tribal totem, a set of {@item traveler's clothes|phb}, and a {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "name": "Feature: Uthgardt Heritage",
        "type": "entries",
        "entries": [
          "You have an excellent knowledge of not only your tribe's territory, but also the terrain and natural resources of the rest of the North. You are familiar enough with any wilderness area that you can find twice as much food and water as you normally would when you forage there.",
          "Additionally, you can call upon the hospitality of your people, and those allied with your tribe, often including members of the druid circles, tribes of nomadic elves, the Harpers, and the priesthoods devoted to the gods of the First Circle."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "section",
        "name": "Suggested Characteristics",
        "entries": [
          "Use the tables for the {@background outlander} background in the Player's Handbook as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity as a member of an Uthgardt tribe.",
          "Even if you have left your tribe behind (at least for now), you hold to the traditions of your people. You will never cut down a still-living tree, and you may not countenance such an act being done in your presence. The Uthgardt ancestral mounds - great hills where the totem spirits were defeated by Uthgar and where the heroes of the tribes are interred - are sacred to you.",
          "Your bond is undoubtedly associated with your tribe or some aspect of Uthgardt philosophy or culture (perhaps even Uthgar himself). Your ideal is a personal choice that probably hews closely to the ethos of your people and certainly doesn't contradict or compromise what being an Uthgardt stands for."
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Variant City Watch (Investigator)",
    "source": "SCAG",
    "page": 145,
    "skillProficiencies": [
      {
        "insight": true,
        "investigation": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 2
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "special": "uniform in the style of your unit and indicative of your rank"
          },
          {
            "item": "horn|phb",
            "displayName": "horn with which to summon help"
          },
          {
            "item": "manacles|phb",
            "displayName": "set of manacles"
          },
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Insight}, {@skill Investigation}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Any two of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A uniform in the style of your unit and indicative of your rank, a {@item horn|phb} with which to summon help, a set of {@item manacles|phb}, and a {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "name": "Feature: Watcher's Eye",
        "type": "entries",
        "entries": [
          "Your experience in enforcing the law, and dealing with lawbreakers, gives you a feel for local laws and criminals. You can easily find the local outpost of the watch or a similar organization, and just as easily pick out the dens of criminal activity in a community, although you're more likely to be welcome in the former locations rather than the latter."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "entries": [
          "Use the tables for the {@background soldier} background in the Player's Handbook as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity as a member of the city watch.",
          "Your bond is likely associated with your fellow watch members or the watch organization itself and almost certainly concerns your community. Your ideal probably involves the fostering of peace and safety. An investigator is likely to have an ideal connected to achieving justice by successfully solving crimes."
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Variant Clasp Member (Myriad Operative)",
    "source": "TDCSR",
    "page": 182,
    "_copy": {
      "name": "Clasp Member",
      "source": "TDCSR",
      "_mod": {
        "entries": [
          {
            "mode": "insertArr",
            "index": 1,
            "items": {
              "type": "entries",
              "name": "Variant: Myriad Operative",
              "page": 182,
              "entries": [
                "Your skill set might be similar to that of many members of the {@book Clasp|TDCSR|2|The Clasp}, but you work for a criminal organization that is far more sophisticated—and even less scrupulous. As a {@book Myriad|TDCSR|2|The Myriad} operative in Tal'Dorei, you might have been given a specific task that furthers that syndicate's hunger to expand beyond Wildemount, or which gives them an edge in their rivalry with the {@book Clasp|TDCSR|2|The Clasp}. Moreover, you understand the wisdom of keeping your activities secret from fellow criminals as well as law enforcement, since the agents of the {@book Clasp|TDCSR|2|The Clasp} will show you no mercy if your true identity is ever revealed."
              ]
            }
          }
        ]
      }
    }
  },
  {
    "name": "Variant Continental Nobility (Last of the Line)",
    "source": "DoDk",
    "page": 245,
    "_copy": {
      "name": "Continental Nobility",
      "source": "DoDk"
    },
    "hasFluff": true
  },
  {
    "name": "Variant Criminal (Spy)",
    "source": "PHB",
    "page": 130,
    "basicRules": true,
    "_copy": {
      "name": "Criminal",
      "source": "PHB",
      "_mod": {
        "entries": {
          "mode": "replaceArr",
          "replace": "Feature: Criminal Contact",
          "items": {
            "name": "Feature: Spy Contact",
            "type": "entries",
            "entries": [
              "You have a reliable and trustworthy contact who acts as your liaison to a network of other spies. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you."
            ],
            "data": {
              "isFeature": true
            }
          }
        }
      }
    },
    "hasFluff": true
  },
  {
    "name": "Variant Devoted Missionary (Stargazer)",
    "source": "DoDk",
    "page": 247,
    "_copy": {
      "name": "Devoted Missionary",
      "source": "DoDk"
    },
    "hasFluff": true
  },
  {
    "name": "Variant Entertainer (Gladiator)",
    "source": "PHB",
    "page": 131,
    "_copy": {
      "name": "Entertainer",
      "source": "PHB",
      "_mod": {
        "entries": [
          {
            "mode": "replaceArr",
            "replace": {
              "index": 0
            },
            "items": {
              "type": "list",
              "style": "list-hang-notitle",
              "items": [
                {
                  "type": "item",
                  "name": "Skill Proficiencies:",
                  "entry": "{@skill Acrobatics}, {@skill Performance}"
                },
                {
                  "type": "item",
                  "name": "Tool Proficiencies:",
                  "entry": "{@item Disguise kit|phb}, one type of {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument}"
                },
                {
                  "type": "item",
                  "name": "Equipment:",
                  "entry": "An inexpensive but unusual weapon, such as a {@item trident|phb} or {@item net|phb} (one of your choice), the favor of an admirer (love letter, lock of hair, or trinket), {@item costume clothes|phb}, and a belt {@item pouch|phb} containing 15 gp"
                }
              ]
            }
          },
          {
            "mode": "replaceArr",
            "replace": {
              "index": 1
            },
            "items": {
              "name": "Feature: By Popular Demand",
              "type": "entries",
              "entries": [
                "You can always find a place to perform in any place that features combat for entertainment—perhaps a gladiatorial arena or secret pit fighting club. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you."
              ],
              "data": {
                "isFeature": true
              }
            }
          }
        ]
      }
    },
    "hasFluff": true
  },
  {
    "name": "Variant Guild Artisan (Guild Merchant)",
    "source": "PHB",
    "page": 133,
    "_copy": {
      "name": "Guild Artisan",
      "source": "PHB",
      "_mod": {
        "entries": {
          "mode": "replaceArr",
          "replace": {
            "index": 0
          },
          "items": {
            "type": "list",
            "style": "list-hang-notitle",
            "items": [
              {
                "type": "item",
                "name": "Skill Proficiencies:",
                "entry": "{@skill Insight}, {@skill Persuasion}"
              },
              {
                "type": "item",
                "name": "Tool Proficiencies:",
                "entry": "One type of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools}, or {@item navigator's tools|phb}, or an additional language"
              },
              {
                "type": "item",
                "name": "Languages:",
                "entry": "One of your choice"
              },
              {
                "type": "item",
                "name": "Equipment:",
                "entry": "A set of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools} (one of your choice) or a {@item mule|phb} and {@item cart|phb}, a letter of introduction from your guild, a set of {@item traveler's clothes|phb}, and a belt {@item pouch|phb} containing 15 gp"
              }
            ]
          }
        }
      }
    },
    "skillProficiencies": [
      {
        "insight": true,
        "persuasion": true
      }
    ],
    "toolProficiencies": [
      {
        "choose": {
          "from": [
            "anyArtisansTool",
            "navigator's tools"
          ]
        }
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Variant Mageborn (Malfeasant Mage)",
    "source": "DoDk",
    "page": 246,
    "_copy": {
      "name": "Mageborn",
      "source": "DoDk"
    },
    "hasFluff": true
  },
  {
    "name": "Variant Noble (Knight)",
    "source": "PHB",
    "page": 136,
    "_copy": {
      "name": "Noble",
      "source": "PHB",
      "_mod": {
        "entries": [
          {
            "mode": "replaceArr",
            "replace": "Feature: Position of Privilege",
            "items": {
              "name": "Feature: Retainers",
              "type": "entries",
              "entries": [
                "You have the service of three retainers loyal to your family. These retainers can be attendants or messengers, and one might be a majordomo. {@b One of your retainers is a noble who serves as your squire, aiding you in exchange for training on his or her own path to knighthood} (This person could be your bond.). Your two remaining retainers might include a groom to care for your horse and a servant who polishes your armor (and even helps you put it on).",
                "Your retainers can perform mundane tasks for you, but they do not fight for you, will not follow you into obviously dangerous areas (such as dungeons), and will leave if they are frequently endangered or abused."
              ],
              "data": {
                "isFeature": true
              }
            }
          },
          {
            "mode": "insertArr",
            "index": 1,
            "items": {
              "name": "Variant Noble (Knight)",
              "type": "entries",
              "entries": [
                "A knighthood is among the lowest noble titles in most societies, but it can be a path to higher status. If you wish to be a knight, choose the Retainers feature instead of the Position of Privilege feature.",
                "As an emblem of chivalry and the ideals of courtly love, you might include among your equipment a banner or other token from a noble lord or lady to whom you have given your heart-in a chaste sort of devotion."
              ]
            }
          }
        ]
      }
    },
    "hasFluff": true
  },
  {
    "name": "Variant Noble (Retainers)",
    "source": "PHB",
    "page": 136,
    "_copy": {
      "name": "Noble",
      "source": "PHB",
      "_mod": {
        "entries": [
          {
            "mode": "replaceArr",
            "replace": "Feature: Position of Privilege",
            "items": {
              "name": "Feature: Retainers",
              "type": "entries",
              "entries": [
                "You have the service of three retainers loyal to your family. These retainers can be attendants or messengers, and one might be a majordomo. Your retainers are commoners who can perform mundane tasks for you, but they do not fight for you, will not follow you into obviously dangerous areas (such as dungeons), and will leave if they are frequently endangered or abused."
              ],
              "data": {
                "isFeature": true
              }
            }
          }
        ]
      }
    },
    "hasFluff": true
  },
  {
    "name": "Variant Sailor (Pirate)",
    "source": "PHB",
    "page": 139,
    "_copy": {
      "name": "Sailor",
      "source": "PHB",
      "_mod": {
        "entries": {
          "mode": "replaceArr",
          "replace": "Feature: Ship's Passage",
          "items": {
            "name": "Feature: Bad Reputation",
            "type": "entries",
            "entries": [
              "No matter where you go, people are afraid of you due to your reputation. When you are in a civilized settlement, you can get away with minor criminal offenses, such as refusing to pay for food at a tavern or breaking down doors at a local shop, since most people will not report your activity to the authorities."
            ],
            "data": {
              "isFeature": true
            }
          }
        }
      }
    },
    "hasFluff": true
  },
  {
    "name": "Variant Survivor (Veteran of the Civil War)",
    "source": "DoDk",
    "page": 248,
    "_copy": {
      "name": "Survivor",
      "source": "DoDk"
    },
    "hasFluff": true
  },
  {
    "name": "Variant Treasure Seeker (Soldier of Fortune)",
    "source": "DoDk",
    "page": 249,
    "_copy": {
      "name": "Treasure Seeker",
      "source": "DoDk"
    },
    "hasFluff": true
  },
  {
    "name": "Variant Whitestone Rifle Corps (Grey Hunter)",
    "source": "TDCSR",
    "page": 182,
    "_copy": {
      "name": "Whitestone Rifle Corps",
      "source": "TDCSR",
      "_mod": {
        "entries": [
          {
            "mode": "insertArr",
            "index": 1,
            "items": {
              "type": "entries",
              "name": "Variant: Grey Hunter",
              "page": 189,
              "entries": [
                "As elite as they are, the members of the {@book Whitestone Rifle Corps|TDCSR|3|Whitestone Rifle Corps} do not represent the apex of firearms skill in {@book Whitestone|TDCSR|3|Whitestone}. A clandestine group of elite soldiers and survivalists is drawn secretly from the Rifle Corps ranks. Called the {@book Grey Hunters|TDCSR|3|Grey Hunters}, these soldiers are special operatives of the de Rolo family, and loyally serve as spies, bodyguards, and even assassins when the job requires it. Though few officially know of them, rumors of the {@book Grey Hunters'|TDCSR|3|Grey Hunters} existence swirl constantly throughout the city-state, often in response to their activities after having been loaned out to protect {@book Whitestone's|TDCSR|3|Whitestone} allies.",
                "You are one of these {@book Grey Hunters|TDCSR|3|Grey Hunters}, even if just a trainee (if you're starting your campaign at low levels). You have the ear of the lord and lady of {@book Whitestone|TDCSR|3|Whitestone}, though you must exercise this privilege graciously lest you lose it."
              ],
              "data": {
                "isFeature": true
              }
            }
          }
        ]
      }
    }
  },
  {
    "name": "Vizier",
    "source": "PSA",
    "page": 10,
    "skillProficiencies": [
      {
        "history": true,
        "religion": true
      }
    ],
    "toolProficiencies": [
      {
        "anyArtisansTool": 1,
        "musical instrument": true
      }
    ],
    "startingEquipment": [
      {
        "a": [
          {
            "equipmentType": "toolArtisan"
          }
        ],
        "b": [
          {
            "equipmentType": "instrumentMusical"
          }
        ]
      },
      {
        "_": [
          {
            "special": "scroll of your god's teachings"
          },
          {
            "special": "vizier's cartouche"
          },
          "fine clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 2500
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill History}, {@skill Religion}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools}, one type of {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A set of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools} or a {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument} (one of your choice), a scroll of your god's teachings, a vizier's cartouche, a set of {@item fine clothes|phb}, and a {@item pouch|phb} containing 25 gp"
          }
        ]
      },
      {
        "name": "Feature: Voice of Authority",
        "type": "entries",
        "entries": [
          "Your voice is the voice of your god, at least in theory. Your job might include training and instructing initiates, and they are required to obey you. In any circumstance, an initiate is expected to defer to your voice and obey your commands. If you abuse this authority, though, your god might personally punish you."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "A vizier's characteristics strongly reflect the ideals and personality of the god they serve.",
          {
            "type": "table",
            "colLabels": [
              "d10",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Everything I do, I do gracefully and deliberately, and with complete confidence. (Oketra)"
              ],
              [
                "2",
                "Nothing can shake my rock-hard focus. (Oketra)"
              ],
              [
                "3",
                "When I am at peace, I am an oasis of perfect calm in the world. When I am roused to anger, I am an embodiment of terror. (Kefnet)"
              ],
              [
                "4",
                "I enjoy teasing acolytes and initiates with juicy tidbits of knowledge wrapped up in fiendishly difficult puzzles. (Kefnet)"
              ],
              [
                "5",
                "I have the utmost faith in myself and my abilities. (Rhonas)"
              ],
              [
                "6",
                "I get restless when life in the city feels too tame, too safe. (Rhonas)"
              ],
              [
                "7",
                "I enjoy solitude as an opportunity to plan my victory. (Bontu)"
              ],
              [
                "8",
                "I use satire as a way to undermine the teachings of the other gods. (Bontu)"
              ],
              [
                "9",
                "I love, fight, and feast with equal zeal. (Hazoret)"
              ],
              [
                "10",
                "I think of those in my care as my family, in a way that most people have trouble understanding. (Hazoret)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "{@b Solidarity.} The worthy must respect the worthy. In the afterlife, all will be united in goal and action. (Oketra)"
              ],
              [
                "2",
                "{@b Knowledge.} The worthy shall cultivate a nimble mind, so as to perceive the wonders beyond imagination that wait in the afterlife. (Kefnet)"
              ],
              [
                "3",
                "{@b Strength.} The worthy shall hone a strong body that can withstand the boundless energies of the afterlife. (Rhonas)"
              ],
              [
                "4",
                "{@b Ambition.} The worthy shall strive for greatness, for supremacy in life leads to supremacy in the afterlife. (Bontu)"
              ],
              [
                "5",
                "{@b Zeal.} The worthy shall rush to the God-Pharaoh's side with relentless passion, rising to overcome every obstacle in their way. (Hazoret)"
              ],
              [
                "6",
                "{@b Naktamun.} The life of the city is ordered according to the plan of the God-Pharaoh, and that order must be preserved at all costs."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "My loyalty to my companions embodies the ideal of loyalty to my god. (Oketra)"
              ],
              [
                "2",
                "The teachings of my god are more precious to me than any possession. (Kefnet)"
              ],
              [
                "3",
                "I would do anything to defend the temple of my god from any harm or desecration. (Rhonas)"
              ],
              [
                "4",
                "I am committed to the service of my god—because it's my sure ticket into the afterlife. (Bontu)"
              ],
              [
                "5",
                "I love my god and never want my service to end. (Hazoret)"
              ],
              [
                "6",
                "I have a close friend or lover who is also a vizier."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I am in love with an initiate, and I want to shield this person from death in the trials."
              ],
              [
                "2",
                "I secretly wish I had not been chosen as a vizier, so I could participate in the trials as an initiate."
              ],
              [
                "3",
                "I secretly question whether the gods care at all about us or what we do."
              ],
              [
                "4",
                "A vizier of another god seeks my death in retribution for a past insult."
              ],
              [
                "5",
                "I am terrified of what lies beyond the Gate to the Afterlife."
              ],
              [
                "6",
                "I secretly believe the God-Pharaoh's return will not bring blessing to this world."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true,
    "hasFluffImages": true
  },
  {
    "name": "Vizier (Dissenter)",
    "source": "PSA",
    "page": 11,
    "_copy": {
      "name": "Vizier",
      "source": "PSA",
      "_mod": {
        "entries": {
          "mode": "replaceArr",
          "replace": "Feature: Voice of Authority",
          "items": {
            "name": "Feature: Shelter of Dissenters",
            "type": "entries",
            "entries": [
              "If they wish to have any hope of survival, whether hiding within the city or cast out into the desert, dissenters must help each other. You can find a place to hide, rest, or recuperate among other dissenters. They will help shield you from those who hunt you, possibly even risking their lives for you."
            ],
            "data": {
              "isFeature": true
            }
          }
        }
      }
    },
    "hasFluff": true,
    "hasFluffImages": true
  },
  {
    "name": "Volstrucker Agent",
    "source": "EGW",
    "page": 202,
    "skillProficiencies": [
      {
        "deception": true,
        "stealth": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "poisoner's kit": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "common clothes|phb",
          {
            "special": "black cloak with a hood"
          },
          "poisoner's kit|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Deception}, {@skill Stealth}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@item Poisoner's kit|phb}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "One of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A set of {@item common clothes|phb}, a black cloak with a hood, a {@item poisoner's kit|phb}, and a {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "name": "Feature: Shadow Network",
        "type": "entries",
        "entries": [
          "You have access to the Volstrucker shadow network, which allows you to communicate with other members of the order over long distances. If you write a letter in a special arcane ink, address it to a member of the Volstrucker, and cast it into a fire, the letter will burn to cinders and materialize whole again on the person of the agent you addressed it to.",
          "The ink used to send a letter across the shadow network is the same as that used by a wizard to scribe spells in a spellbook. Writing a letter in this ink costs 10 gp per page."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "Agents of the Volstrucker are groomed to follow orders without question and to kill without mercy. The trauma that brings one into the order can fester even more strongly against the darkness of a Volstrucker agent's assignments. Officially, no one ever leaves the order—but those desperate enough do whatever it takes to gain some measure of freedom.",
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Personality Trait"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I prefer to keep my thoughts to myself."
              ],
              [
                "2",
                "I indulge vice in excess to quiet my conscience."
              ],
              [
                "3",
                "I've left emotion behind me. I'm now perfectly placid."
              ],
              [
                "4",
                "Some event from the past keeps worming its way into my mind, making me restless."
              ],
              [
                "5",
                "I always keep my word—except when I'm commanded to break it."
              ],
              [
                "6",
                "I laugh off insults and never take them personally."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Order. The will of the crown is absolute. (Law)"
              ],
              [
                "2",
                "True Loyalty. The Cerberus Assembly is greater than any power, even the crown. (Law)"
              ],
              [
                "3",
                "Death. The penalty for disloyalty is death. (Evil)"
              ],
              [
                "4",
                "Determination. I cannot fail. Not ever. (Neutral)"
              ],
              [
                "5",
                "Fear. People should not respect power. They should fear it. (Evil)"
              ],
              [
                "6",
                "Escape. The Volstrucker are pure evil! I can't atone for what I've done for them, but I can escape with my life. (Any)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d4",
              "Bond"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "The job is all that matters. I will see it through."
              ],
              [
                "2",
                "My orders are important, but my comrades are worth more than anything. I would die for them."
              ],
              [
                "3",
                "Everything I've done, I've done to protect someone close to me."
              ],
              [
                "4",
                "If the empire falls, all of civilization falls with it. I will hold back chaos and barbarism at any cost."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d4",
              "Flaw"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I drink to dull the pain in the back of my head."
              ],
              [
                "2",
                "I go a bit mad when I see blood."
              ],
              [
                "3",
                "I can hear the voices of everyone I've killed. I see their faces. I can't be free of these ghosts."
              ],
              [
                "4",
                "Fear is a powerful motivator. I will do whatever it takes to prevent those who know what I am from seeing me fail, and from those I care about from knowing what I am."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true,
    "hasFluffImages": true
  },
  {
    "name": "Waterdhavian Noble",
    "source": "SCAG",
    "page": 154,
    "skillProficiencies": [
      {
        "history": true,
        "persuasion": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "choose": {
          "from": [
            "gaming set",
            "musical instrument"
          ]
        }
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "fine clothes|phb",
          {
            "special": "scroll of pedigree"
          },
          {
            "special": "skin of fine zzar or wine"
          },
          {
            "special": "purse",
            "containsValue": 2000
          }
        ]
      },
      {
        "a": [
          "signet ring|phb"
        ],
        "b": [
          {
            "special": "brooch"
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill History}, {@skill Persuasion}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "Any one of your choice"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "One type of {@filter gaming set|items|source=phb|miscellaneous=mundane|type=gaming set} or {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A set of {@item fine clothes|phb}, a {@item signet ring|phb} or brooch, a scroll of pedigree, a skin of fine zzar or wine, and a purse containing 20 gp"
          }
        ]
      },
      {
        "name": "Feature: Kept in Style",
        "type": "entries",
        "entries": [
          "While you are in Waterdeep or elsewhere in the North, your house sees to your everyday needs. Your name and signet are sufficient to cover most of your expenses; the inns, taverns, and festhalls you frequent are glad to record your debt and send an accounting to your family's estate in Waterdeep to settle what you owe.",
          "This advantage enables you to live a comfortable lifestyle without having to pay 2 gp a day for it, or reduces the cost of a wealthy or aristocratic lifestyle by that amount. You may not maintain a less affluent lifestyle and use the difference as income—the benefit is a line of credit, not an actual monetary reward."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "section",
        "name": "Suggested Characteristics",
        "entries": [
          "Use the tables for the {@background noble} background in the Player's Handbook as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity as a member of a Waterdhavian family.",
          "Like other nobles, you were born and raised in a different world from the one that most folk know - one that grants you privilege but also calls you to fulfill a duty befitting your station. Your bond might be associated with your family alone, or it could be concerned with another noble house that sides with or opposes your own. Your ideal depends to some extent on how you view your role in the family, and how you intend to conduct yourself in the world at large as a representative of your house."
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Whitestone Rifle Corps",
    "source": "TDCSR",
    "page": 187,
    "skillProficiencies": [
      {
        "choose": {
          "from": [
            "athletics",
            "perception",
            "survival"
          ],
          "count": 2
        }
      }
    ],
    "languageProficiencies": [
      {
        "any": 1
      }
    ],
    "weaponProficiencies": [
      {
        "firearms": true
      }
    ],
    "startingEquipment": [
      {
        "a": [
          "musket|dmg"
        ],
        "b": [
          "pistol|dmg"
        ]
      },
      {
        "_": [
          "common clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "Your choice of two of the following: {@skill Athletics}, {@skill Perception}, or {@skill Survival}"
          },
          {
            "type": "item",
            "name": "Weapon Proficiencies:",
            "entry": "{@filter Firearms|items|source=null|type=firearm}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "One of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "Your choice of a {@item musket} or a {@item pistol}, a set of {@item common clothes|phb}, and a {@item pouch|PHB} containing 10 gp"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Legacy of Secrecy",
        "page": 187,
        "entries": [
          "You have been entrusted with the use and care of a weapon both powerful and terrifying. The rifle you wield might transform the face of warfare and life in Tal'Dorei. It is a weapon that haunts the mind of its creator, {@creature Percival de Rolo|TDCSR}, manifesting as a pain that lives always behind his kind eyes.",
          "You were granted a {@item musket} or a {@item pistol} by your commander in the {@book Whitestone Rifle Corps|TDCSR|3|Whitestone Rifle Corps}. This weapon is a symbol of your status, and when you display it, other folk around you—particularly adventurers, mercenaries, guards, engineers, and weapons enthusiasts—treat you differently. You might be seen as a noble defender of the people, a selfish hoarder of power, or anything in between, at the GM's discretion."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Feature: Rifle Corps Relationship",
        "page": 187,
        "entries": [
          "You are—or were—a member of an elite and trusted band of {@book Whitestone's|TDCSR|3|Whitestone} staunchest defenders. Work with your GM to determine your current relationship with the Rifle Corps. If your campaign starts in {@book Whitestone|TDCSR|3|Whitestone}, you might be an active member of that unit. Otherwise, you can use the Rifle Corps Relationships table for suggestions.",
          {
            "type": "table",
            "caption": "Rifle Corps Relationships",
            "colLabels": [
              "{@dice d6}",
              "Current Relationship"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I retired honorably from the Rifle Corps—and now it's time for me to pursue my own adventures."
              ],
              [
                "2",
                "I'm on an important mission to protect {@book Whitestone|TDCSR|3|Whitestone} or guard one of our allies."
              ],
              [
                "3",
                "{@book Whitestone|TDCSR|3|Whitestone} is in trouble, and I was sent away to seek help."
              ],
              [
                "4",
                "I don't think firearms technology should be kept secret, so I escaped from the Rifle Corps with my weapon and am on the run."
              ],
              [
                "5",
                "I was on a mission with my company when I got separated from them. Now I need to find my way back home."
              ],
              [
                "6",
                "My weapon was stolen. I built a new one, but I can't return home until I've tracked down the thief and recovered the original. ({@book Whitestone Hunter|TDCSR|3|Grey Hunters} variant only)"
              ]
            ]
          }
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Suggested Characteristics",
        "page": 188,
        "entries": [
          "Those who join the {@book Whitestone Rifle Corps|TDCSR|3|Whitestone Rifle Corps} become members of an elite and trusted band known as the city-state's staunchest defenders. But this means working with your GM to determine why you're not at home protecting {@book Whitestone|TDCSR|3|Whitestone}. Perhaps you took on a mission to guard someone on behalf of the de Rolo family, or you might have been separated from your company while on an assignment. Either way, you find yourself embroiled now in a series of new adventures as you try to make your way back home.",
          "Your bond is likely associated with your comrades-in-arms or with {@book Whitestone|TDCSR|3|Whitestone} itself. Your ideal could be tied to justice or protection, but could also be a secretive, selfish perversion of those virtues.",
          {
            "type": "table",
            "caption": "Rifle Corps Personality Traits",
            "colLabels": [
              "{@dice d8}",
              "Personality Trait"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I want to make a good impression at all times. That means keeping my clothes and gear clean and in top condition."
              ],
              [
                "2",
                "I don't like being the center of attention. I'd rather let someone else do the talking while I watch their back."
              ],
              [
                "3",
                "I feel safe only if I'm carrying my trusty rifle. And my dagger. And my concealed pistol. Oh, and of course my...."
              ],
              [
                "4",
                "I don't trust people with my secrets easily, so it feels like a big deal when someone else shares a secret with me."
              ],
              [
                "5",
                "I like coming up with solutions to problems using my esoteric knowledge of natural philosophy."
              ],
              [
                "6",
                "Everyone around me takes things so seriously. Sometimes I just want to let loose and have fun!"
              ],
              [
                "7",
                "Knowing things that other people don't know makes me feel special and important."
              ],
              [
                "8",
                "I'm most at home in woods and mountains, where everything feels at once familiar, always growing and changing."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Rifle Corps Ideals",
            "colLabels": [
              "{@dice d6}",
              "Ideal"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "{@b Responsibility}. I have a duty to protect the people of {@book Whitestone|TDCSR|3|Whitestone} and to uphold the trust placed in me by the de Rolos. (Lawful)"
              ],
              [
                "2",
                "{@b Militarization}. Everyone should have access to the most powerful weapons available, so they can defend themselves effectively. (Evil)"
              ],
              [
                "3",
                "{@b Cooperation}. Any problem can be solved as long as people are willing to work together. (Good)"
              ],
              [
                "4",
                "{@b Camaraderie}. It's important to have people you can trust to help out in a fight—and to uncork a bottle together afterward. (Any)"
              ],
              [
                "5",
                "{@b Context}. There are no universal rights or wrongs. Every choice depends on the details of the situation. (Chaotic)"
              ],
              [
                "6",
                "{@b Secrecy}. Information is valuable, but it can also be dangerous. I'll keep my mouth shut and gather as much intel as I can. (Neutral)"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Rifle Corps Bons",
            "colLabels": [
              "{@dice d6}",
              "Bond"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I never knew what to do with myself until I joined the Rifle Corps. Now I have a purpose and comrades to give me direction."
              ],
              [
                "2",
                "One of my fellow Rifle Corps soldiers saved my life—and then I saved theirs. That kind of bond lasts forever."
              ],
              [
                "3",
                "{@book Whitestone|TDCSR|3|Whitestone} is the best city in all of Tal'Dorei. Nowhere else has been blessed by the {@deity The Dawnfather|Exandria|TDCSR|Dawnfather} and has a clock that tracks the movement of the stars!"
              ],
              [
                "4",
                "My quick thinking saved a noble from assassination, and she showed me great kindness in return. I daren't say it, but I'm more loyal to her than I am to the de Rolos."
              ],
              [
                "5",
                "My weapon is my life. I clean it, repair it, and care for it—and it serves me loyally in return."
              ],
              [
                "6",
                "The people of {@book Whitestone|TDCSR|3|Whitestone} cared for my family when we had nothing. I promise to repay their compassion with my service."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Rifle Corps Flaws",
            "colLabels": [
              "{@dice d6}",
              "Flaw"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Who cares about keeping this gun safe? \\"Don't let it fall into the wrong hands!\\" Ha! It's only a matter of time before someone slips up and these weapons are everywhere."
              ],
              [
                "2",
                "I think being part of the Rifle Corps is so cool. I love telling people about my position so I can impress them."
              ],
              [
                "3",
                "My weapon was stolen. I built a new one, but I can't return home until I've tracked down the thief and recovered the original."
              ],
              [
                "4",
                "I'm tired of protecting spoiled people who don't know how to protect themselves."
              ],
              [
                "5",
                "I shoot first and ask questions later."
              ],
              [
                "6",
                "The first and only time I killed someone, it changed my life. I still dream about it, and I'll never be the carefree person I was before."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true,
    "hasFluffImages": true
  },
  {
    "name": "Wildspacer",
    "source": "AAG",
    "page": 8,
    "feats": [
      {
        "tough|phb": true
      }
    ],
    "skillProficiencies": [
      {
        "athletics": true,
        "survival": true
      }
    ],
    "toolProficiencies": [
      {
        "navigator's tools": true,
        "vehicles (space)": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "item": "club|phb",
            "displayName": "belaying pin"
          },
          "traveler's clothes|phb",
          "grappling hook|phb",
          "hempen rope (50 feet)|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "fromFeature": {
      "feats": true
    },
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Athletics}, {@skill Survival}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@item Navigator's tools|phb}, {@filter vehicles (space)|items|source=phb;dmg|miscellaneous=mundane|type=vehicle (space)}"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A belaying pin ({@item club|phb}), a set of {@item traveler's clothes|PHB}, a {@item grappling hook|PHB}, {@item Hempen Rope (50 feet)|PHB|50 feet of hempen rope}, and a {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Close Encounter",
        "entries": [
          "You had a harrowing encounter with one of Wildspace's many terrors. You escaped with your life, but the encounter left you with a scar or two, or perhaps a recurring nightmare. Roll on the Close Encounter table to determine which creature nearly got the best of you. Creatures marked with an asterisk appear in {@book Boo's Astral Menagerie|BAM}; the others are described in the {@book Monster Manual|MM}.",
          {
            "type": "table",
            "caption": "Close Encounter",
            "colLabels": [
              "d10",
              "Creature"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "{@creature Beholder}"
              ],
              [
                "2",
                "{@creature Cosmic horror|BAM}*"
              ],
              [
                "3",
                "{@creature Feyr|BAM}*"
              ],
              [
                "4",
                "{@filter Lunar dragon|bestiary|source=BAM|search=lunar dragon}*"
              ],
              [
                "5",
                "{@creature Mind flayer}"
              ],
              [
                "6",
                "{@creature Neh-thalggu|BAM}*"
              ],
              [
                "7",
                "{@creature Neogi|MPMM}*"
              ],
              [
                "8",
                "{@creature Space clown|BAM}*"
              ],
              [
                "9",
                "{@creature Vampirate|BAM}*"
              ],
              [
                "10",
                "{@creature Void scavver|BAM}*"
              ]
            ]
          }
        ]
      },
      {
        "name": "Feature: Wildspace Adaptation",
        "type": "entries",
        "entries": [
          "You gain the {@feat Tough||Tough feat} from the {@book Player's Handbook|PHB}. In addition, you learned how to adapt to zero gravity. Being weightless doesn't give you disadvantage on any of your melee attack rolls (see \\"{@book Weightlessness|AAG|2|Weightlessness}\\" in {@book chapter 2|AAG|2})."
        ],
        "data": {
          "isFeature": true
        }
      }
    ],
    "hasFluff": true,
    "hasFluffImages": true
  },
  {
    "name": "Wind-Touched",
    "source": "HWCS",
    "page": 45,
    "skillProficiencies": [
      {
        "acrobatics": true,
        "performance": true
      }
    ],
    "languageProficiencies": [
      {
        "auran": true
      }
    ],
    "toolProficiencies": [
      {
        "musical instrument": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          {
            "equipmentType": "instrumentMusical"
          },
          {
            "special": "ornate cloak"
          },
          {
            "special": "symbol of the wind"
          },
          "common clothes|phb",
          {
            "item": "pouch|phb",
            "containsValue": 1000
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies",
            "entry": "{@skill Acrobatics}, {@skill Performance}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies",
            "entry": "one type of wind {@filter Musical Instrument|items|source=phb|miscellaneous=mundane|type=instrument}"
          },
          {
            "type": "item",
            "name": "Languages",
            "entry": "you can speak as well as understand Auran"
          },
          {
            "type": "item",
            "name": "Equipment",
            "entry": "a wind {@filter Musical Instrument|items|source=phb|miscellaneous=mundane|type=instrument} (one of your choice), an ornate cloak, a symbol of the wind, {@item common clothes|phb}, and a belt {@item pouch|phb} containing 10 gp"
          }
        ]
      },
      {
        "name": "Title and Blessing",
        "type": "entries",
        "entries": [
          "For some birdfolk, the moniker of Wind-Touched is merely a title, a symbol of their devotion to the wind and the natural world. Others have been told since birth that they were blessed by the wind, much in the way the Amaranthine Reya was in the old tales. Decide what your character believes, or roll on the table below to understand how they feel.",
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Acceptance"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I am truly blessed and have power over the wind itself."
              ],
              [
                "2",
                "I am devoted to the wind spirits, in action and title."
              ],
              [
                "3",
                "I believe in nature and goodness."
              ],
              [
                "4",
                "I will work tirelessly to earn the respect of those who give me this title."
              ],
              [
                "5",
                "I accept this honor but have my doubts."
              ],
              [
                "6",
                "I feel nothing for this title, and carry it against my will."
              ]
            ]
          }
        ]
      },
      {
        "name": "Feature: Supernatural Presence",
        "type": "entries",
        "entries": [
          "Whether or not you are truly Wind-Touched, there are folk all across Everden that believe that you have been divinely blessed. If you make a show of power or skill that can be attributed to the wind or air, such as feats of acrobatics or commanding unseen forces, those believers will be bolstered by your supernatural presence. They will support you and, depending on how well you have convinced them of your powers, treat you with reverence and possibly even worship."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "name": "Suggested Characteristics",
        "type": "entries",
        "entries": [
          "The wind-touched are revered by believers and scrutinized by skeptics. For better or worse, they find themselves in a world of expectations they struggle to live up to.",
          {
            "type": "table",
            "colLabels": [
              "d8",
              "Personality Trait"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I never back down from a challenge."
              ],
              [
                "2",
                "I always end up being the center of attention."
              ],
              [
                "3",
                "I am gifted by the wind and destined for greatness."
              ],
              [
                "4",
                "I have no time for those who doubt me."
              ],
              [
                "5",
                "I seek out challenges to test myself."
              ],
              [
                "6",
                "I am better than everyone else."
              ],
              [
                "7",
                "I avoid showing my power at all costs."
              ],
              [
                "8",
                "I remain humble despite my blessing."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Ideal"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "Responsibility. The powers I have been gifted with are meant to serve the common good. (Good)"
              ],
              [
                "2",
                "Heroism. The wind chose me to be a brave warrior and leader, so shall it be. (Lawful)"
              ],
              [
                "3",
                "Egotism. My powers situate me above others. The masses should know their place. (Evil)"
              ],
              [
                "4",
                "Mysticism. Connected to nature, I speak for the wind and divine its will for others. (Neutral)"
              ],
              [
                "5",
                "Cynicism. What matters isn't whether or not my powers are genuine, but what advantages I can reap because of that belief. (Evil)"
              ],
              [
                "6",
                "Naturalism. The wind speaks to my soul, and I am bound to go wherever it directs me. (Chaotic)"
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Bond"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I am guided by a wise elder who prepares me for my destiny."
              ],
              [
                "2",
                "I am estranged from my parents who don't believe in my blessing."
              ],
              [
                "3",
                "I seek to discredit the person who burdened me with this moniker."
              ],
              [
                "4",
                "I live in the shadow of my mentor, seeking their approval."
              ],
              [
                "5",
                "I have a sibling who is not blessed, which causes tension"
              ],
              [
                "6",
                "I am one with the wind. Personal relationships are fleeting."
              ]
            ]
          },
          {
            "type": "table",
            "colLabels": [
              "d6",
              "Flaw"
            ],
            "colStyles": [
              "col-1 text-center",
              "col-11"
            ],
            "rows": [
              [
                "1",
                "I can't accept another's suggestion once I've set my path."
              ],
              [
                "2",
                "I expect nothing less than reverence from common people."
              ],
              [
                "3",
                "I blindly trust in the power of my blessing."
              ],
              [
                "4",
                "I am overly concerned about how others see me."
              ],
              [
                "5",
                "I will prove my worth, even if it means putting myself and my friends in danger."
              ],
              [
                "6",
                "I am burdened with responsibility, and find it hard to make even the simplest decisions."
              ]
            ]
          }
        ]
      },
      {
        "name": "Coupled with Power",
        "type": "entries",
        "entries": [
          "While this background primarily focuses on the beliefs and perceptions of yourself and your community, pairing this background with a character who actually can manipulate the wind through magic could potentially set them up to become a holy figure, a prophet, or a fabled hero."
        ]
      }
    ],
    "hasFluff": true
  },
  {
    "name": "Witchlight Hand",
    "source": "WBtW",
    "page": 11,
    "skillProficiencies": [
      {
        "performance": true,
        "sleight of hand": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "choose": {
          "from": [
            "disguise kit",
            "musical instrument"
          ]
        }
      }
    ],
    "startingEquipment": [
      {
        "a": [
          "disguise kit|phb"
        ],
        "b": [
          {
            "equipmentType": "instrumentMusical"
          }
        ]
      },
      {
        "_": [
          {
            "special": "deck of cards"
          },
          "costume clothes|phb",
          "feywild trinket|wbtw",
          {
            "item": "pouch|phb",
            "containsValue": 800
          }
        ]
      }
    ],
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Performance}, {@skill Sleight of Hand}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@item Disguise kit|phb} or one type of {@filter musical Instrument|items|source=phb|miscellaneous=mundane|type=instrument}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "One of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@item disguise kit|PHB} or a {@filter musical instrument|items|source=phb|miscellaneous=mundane|type=instrument} of your choice, a deck of cards, a carnival uniform or {@item costume clothes|phb|costume}, one trinket (determined by rolling on the {@item Feywild Trinket|WBtW|Feywild Trinkets}), and a {@item pouch|phb} containing 8 gp"
          }
        ]
      },
      {
        "name": "Feature: Carnival Fixture",
        "type": "entries",
        "entries": [
          "The Witchlight Carnival provides you with free, modest lodging and food. In addition, you may wander about the carnival and partake of its many wonders at no cost to you, provided you don't disrupt its shows or cause any other trouble."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Carnival Companion",
        "entries": [
          "Over the years, you have earned the friendship of another carnival fixture. Roll a {@dice d8} and consult the Carnival Companion table to determine whom or what you've befriended, or you can choose an option that you like. Work with your DM to flesh out this friendship. This companion hangs around you while you're in the carnival, but it won't voluntarily leave the carnival.",
          "The DM can use the {@creature Witchlight Hand (Medium)|WBtW|Witchlight hand} stat block in {@adventure chapter 1|WBtW|1} to represent hands, performers, and animal trainers who serve as carnival companions. Statistics for the other companions appear in the {@book Monster Manual|MM}.",
          {
            "type": "table",
            "caption": "Carnival Companion",
            "colLabels": [
              "d8",
              "Companion"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Old, cantankerous Witchlight hand"
              ],
              [
                "2",
                "Young, impressionable Witchlight hand"
              ],
              [
                "3",
                "Performer (such as an acrobat, a clown, or a musician)"
              ],
              [
                "4",
                "Retired performer"
              ],
              [
                "5",
                "Seasoned animal trainer"
              ],
              [
                "6",
                "Old {@creature blink dog}"
              ],
              [
                "7",
                "Cheery {@creature sprite}"
              ],
              [
                "8",
                "Harmless, magical wisp of light (no stat block required) that has a flying speed of 30 feet, can hover, and sheds bright light in a 5-foot radius and dim light for an additional 5 feet"
              ]
            ]
          }
        ]
      },
      {
        "type": "section",
        "name": "Character Traits",
        "entries": [
          "As the players choose backgrounds for their characters, they can use the following tables to help determine their characters' personality traits, ideals, bonds, and flaws. Players can use these tables instead of the ones that appear in the {@book Player's Handbook|PHB}, or they can mix and match them. If a rolled result doesn't make sense for a character, the player can roll again or choose a more appropriate entry on the table.",
          "These tables, while optional, are well suited to Feywild-themed adventures and are ideal for any character who has the feylost or Witchlight hand background.",
          {
            "type": "table",
            "caption": "Personality Traits",
            "colLabels": [
              "d8",
              "Trait"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I'm haunted by fey laughter that only I can hear, though I know it's just my mind playing tricks on me."
              ],
              [
                "2",
                "Like a nomad, I can't settle down in one place for very long."
              ],
              [
                "3",
                "Good music makes me weep like a baby."
              ],
              [
                "4",
                "Wherever I go, I try to bring a little of the warmth and tranquility of home with me."
              ],
              [
                "5",
                "I have never lost my childlike sense of wonder."
              ],
              [
                "6",
                "When I have a new idea, I get wildly excited about it until I come up with another, better idea."
              ],
              [
                "7",
                "I live by my own set of weird and wonderful rules."
              ],
              [
                "8",
                "I can't bring myself to trust most adults."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Ideals",
            "colLabels": [
              "d8",
              "Ideal"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "Friendship. I never leave a friend behind. (Good)"
              ],
              [
                "2",
                "Empathy. No creature should be made to suffer. (Good)"
              ],
              [
                "3",
                "Wanderlust. I prefer to take the less traveled path. (Chaotic)"
              ],
              [
                "4",
                "Changeability. Change is good, which is why I live by an ever-changing set of rules. (Chaotic)"
              ],
              [
                "5",
                "Honor. A deal is a deal, and I would never break one. (Lawful)"
              ],
              [
                "6",
                "Rule of Three. Everything in the multiverse happens in threes. I see the \\"rule of three\\" everywhere. (Lawful)"
              ],
              [
                "7",
                "Obsession. I won't let go of a grudge. (Evil)"
              ],
              [
                "8",
                "Greed. I will do whatever it takes to get what I want, regardless of the harm it might cause. (Evil)"
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Bonds",
            "colLabels": [
              "d8",
              "Bond"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I would never break my word."
              ],
              [
                "2",
                "I find magic in all its forms to be compelling. The more magical a place, the more I am drawn to it."
              ],
              [
                "3",
                "I do what I can to protect the natural world."
              ],
              [
                "4",
                "A trusted friend is the most important thing in the multiverse to me."
              ],
              [
                "5",
                "I can't bring myself to harm a Fey creature, either because I consider myself one or because I fear the repercussions."
              ],
              [
                "6",
                "The Witchlight Carnival feels like home to me."
              ],
              [
                "7",
                "I'm drawn to the Feywild and long to return there, if only for a short while."
              ],
              [
                "8",
                "I feel indebted to {@creature Mister Witch|WBtW} and {@creature Mister Light|WBtW} for giving me a home and a purpose."
              ]
            ]
          },
          {
            "type": "table",
            "caption": "Flaws",
            "colLabels": [
              "d8",
              "Flaw"
            ],
            "colStyles": [
              "col-2 text-center",
              "col-10"
            ],
            "rows": [
              [
                "1",
                "I easily lose track of time. My poor sense of time means I'm always late."
              ],
              [
                "2",
                "I think the whole multiverse is out to get me."
              ],
              [
                "3",
                "I'm always operating under a tight timeline, and I'm obsessed with keeping everything on schedule."
              ],
              [
                "4",
                "I'm a kleptomaniac who covets shiny, sparkling treasure."
              ],
              [
                "5",
                "I'm forgetful. Sometimes I can't remember even the simplest things."
              ],
              [
                "6",
                "I never give away anything for free and always expect something in return."
              ],
              [
                "7",
                "I have many vices and tend to indulge them."
              ],
              [
                "8",
                "I'm always changing my mind—well, almost always."
              ]
            ]
          }
        ]
      }
    ],
    "hasFluff": true,
    "hasFluffImages": true
  },
  {
    "name": "Witherbloom Student",
    "source": "SCC",
    "page": 36,
    "feats": [
      {
        "strixhaven initiate|scc": true
      }
    ],
    "skillProficiencies": [
      {
        "nature": true,
        "survival": true
      }
    ],
    "languageProficiencies": [
      {
        "anyStandard": 1
      }
    ],
    "toolProficiencies": [
      {
        "herbalism kit": true
      }
    ],
    "startingEquipment": [
      {
        "_": [
          "ink (1-ounce bottle)|phb",
          "ink pen|phb",
          {
            "special": "book about plant identification"
          },
          "iron pot|phb",
          "herbalism kit|phb",
          {
            "special": "school uniform"
          },
          {
            "item": "pouch|phb",
            "containsValue": 1500
          }
        ]
      }
    ],
    "additionalSpells": [
      {
        "expanded": {
          "s1": [
            "cure wounds",
            "inflict wounds"
          ],
          "s2": [
            "lesser restoration",
            "wither and bloom|scc"
          ],
          "s3": [
            "revivify",
            "vampiric touch"
          ],
          "s4": [
            "blight",
            "death ward"
          ],
          "s5": [
            "antilife shell",
            "greater restoration"
          ]
        }
      }
    ],
    "fromFeature": {
      "additionalSpells": true,
      "feats": true
    },
    "entries": [
      {
        "type": "list",
        "style": "list-hang-notitle",
        "items": [
          {
            "type": "item",
            "name": "Skill Proficiencies:",
            "entry": "{@skill Nature}, {@skill Survival}"
          },
          {
            "type": "item",
            "name": "Tool Proficiencies:",
            "entry": "{@item Herbalism kit|phb}"
          },
          {
            "type": "item",
            "name": "Languages:",
            "entry": "One of your choice"
          },
          {
            "type": "item",
            "name": "Equipment:",
            "entry": "A {@item Ink (1-ounce bottle)|PHB|bottle of black ink}, an {@item ink pen|PHB}, a book about plant identification, an {@item iron pot|PHB}, an {@item herbalism kit|PHB}, a school uniform, and a {@item pouch|phb} containing 15 gp"
          }
        ]
      },
      {
        "type": "entries",
        "name": "Feature: Witherbloom Initiate",
        "entries": [
          "You gain the {@feat Strixhaven Initiate|SCC} feat and must choose Witherbloom within it.",
          "In addition, if you have the Spellcasting or Pact Magic feature, the spells on the Witherbloom Spells table are added to the spell list of your spellcasting class. (If you are a multiclass character with multiple spell lists, these spells are added to all of them.)",
          {
            "type": "table",
            "caption": "Witherbloom Spells",
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
                "{@spell Cure Wounds}, {@spell Inflict Wounds}"
              ],
              [
                "2nd",
                "{@spell Lesser Restoration}, {@spell Wither and Bloom|SCC}"
              ],
              [
                "3rd",
                "{@spell Revivify}, {@spell Vampiric Touch}"
              ],
              [
                "4th",
                "{@spell Blight}, {@spell Death Ward}"
              ],
              [
                "5th",
                "{@spell Antilife Shell}, {@spell Greater Restoration}"
              ]
            ]
          },
          "Consider customizing how your spells look when you cast them. Your Witherbloom spells might rely on material components or a spellcasting focus drawn from the swamp environment of Witherbloom, and your spells might take on an appearance suggesting those natural elements. Spectral shapes of swamp animals or plants might form amid your spell effects."
        ],
        "data": {
          "isFeature": true
        }
      },
      {
        "type": "entries",
        "name": "Building a Witherbloom Character",
        "entries": [
          "Druids and warlocks make up most of Witherbloom's student body. A few wizards (mostly those who study the {@class Wizard|PHB|School of Necromancy|Necromancy|PHB}) and clerics (including those with the Divine Domains of {@class Cleric|PHB|Life|Life|PHB} or {@class Cleric|PHB|Nature|Nature|PHB}) also find their home in Witherbloom.",
          "A number of rangers and barbarians study at Witherbloom as well, and some rogues learn how to create and use poisons during their studies at this college.",
          {
            "type": "entries",
            "name": "Suggested Characteristics",
            "entries": [
              "Students of Witherbloom College are equally likely to be found picking herbs for a healing tincture or riding zombified swamp beasts through the bayou. The Witherbloom Personality Traits table suggests a variety of traits you might adopt for your character.",
              {
                "type": "table",
                "caption": "Witherbloom Personality Traits",
                "colLabels": [
                  "d6",
                  "Personality Trait"
                ],
                "colStyles": [
                  "col-2 text-center",
                  "col-10"
                ],
                "rows": [
                  [
                    "1",
                    "I love brewing up a new recipe, even if some might be repulsed by my choice of ingredients. Or the final product. Or both."
                  ],
                  [
                    "2",
                    "My fashion sense is like my garden: withered, black, and weird."
                  ],
                  [
                    "3",
                    "I'm going to befriend every single monster in this swamp if it's the last thing I do."
                  ],
                  [
                    "4",
                    "Everything in this world dies eventually. The question is, what will you do with the time you have left?"
                  ],
                  [
                    "5",
                    "I know we just met, but when you die, may I have your bones? For research."
                  ],
                  [
                    "6",
                    "Don't interrupt me; I'm brooding."
                  ]
                ]
              }
            ]
          },
          {
            "type": "entries",
            "name": "Witherbloom Trinkets",
            "entries": [
              "When you make your character, you may roll once on the Witherbloom Trinkets table, instead of on the {@item trinket|phb|Trinkets table} in the {@book Player's Handbook|PHB}, for your starting trinket.",
              {
                "type": "table",
                "caption": "Witherbloom Trinkets",
                "colLabels": [
                  "d6",
                  "Trinket"
                ],
                "colStyles": [
                  "col-2 text-center",
                  "col-10"
                ],
                "rows": [
                  [
                    "1",
                    "A black bird-shaped mask, trimmed with glowing green thread"
                  ],
                  [
                    "2",
                    "A set of rabbit bones"
                  ],
                  [
                    "3",
                    "A pair of thick knee-high waders, stained with muck and moss"
                  ],
                  [
                    "4",
                    "A slimy green tentacle, which occasionally wriggles"
                  ],
                  [
                    "5",
                    "A notebook containing waterproof paper"
                  ],
                  [
                    "6",
                    "A necklace of five small vials, each filled with luminescent white liquid"
                  ]
                ],
                "data": {
                  "tableInclude": true
                }
              }
            ]
          }
        ]
      }
    ],
    "hasFluff": true
  }
]`);