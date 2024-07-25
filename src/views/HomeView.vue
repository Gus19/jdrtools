<script setup lang="ts">
  import {computed, ref} from 'vue'
  import download from 'downloadjs'
  import JsonEditor from 'vue3-ts-jsoneditor';

  interface Property {
    id?: number
    type?: string
    value?: any
    rank?: number
    parentId?: number
    name?: string
    message?: string
    formula?: string
    data?: Data
    icon?: string
    local?: boolean
    size?: number
  }

  interface Data {
    subtitle?: string
    appearances?: any[]
    headers?: string[]
  }

  interface Skill {
    name: string,
    attribute: string
  }

  interface Character {
    appearances: string[];
    private: boolean;
    name: string;
    type: string;
    properties: Property[],
    category: string|null
  }

  const Test = ``
  const json5etools = ref(import.meta.env.DEV ? Test : '');
  const jsonTableplop = ref('');
  const forSurvival = ref(true);

  const editor = ref();
  const data = ref();
  const defaultCharacter: Character = {
    name: "", // nom par défaut
    appearances: [], // token par défaut
    properties: [],
    private: true,
    type: "tableplop-character-v2",
    category: null
  };
  const character = ref<Character>(defaultCharacter);

  const parents = ref<string[]>([]);
  const addParent = (name: string) => {
    parents.value.push(name);
    return getParent(name);
  }
  const getParent = (name: string) => {
    return parents.value.findIndex(p => p === name) + 1;
  }

  const randid = ref<number>(-1);
  const addProperty = (data: Property) => {
    if(!("id" in data)) {
      data.id = addParent(randid.value.toString());
      randid.value = randid.value - 1;
    }
    if(!("rank" in data)) {
      data.rank = data.id;
    }
    character.value.properties.push(data);
  }
  const addMessage = (data: Property) => {
    addProperty({
      ...data,
      type: "message",
      icon: iconMsg
    })
  }

  const handleFormat = () => {
    json5etools.value = JSON.stringify(JSON.parse(json5etools.value),null, 2);
  }

  const handleTableplop = () => {
    try {
      jsonTableplop.value = '';
      character.value.appearances = [];
      character.value.properties = [];
      data.value = JSON.parse(json5etools.value);
      build();
      jsonTableplop.value = JSON.stringify(character.value, null, 2);
    }
    catch (error) {
      show.value = true;
      errorConvert.value = error;
      console.error(error);
    }
  }

  const errorConvert = ref<any>(null);

  const btnDisabled = computed(() => {
    if(!jsonTableplop) return true;
    if(jsonTableplop.value.length === 0) return true;
    return false;
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonTableplop.value);
  }

  const
    Character = "Character", Actions = "Actions", Spells = "Spells", Throws = "Throws",
    Abilities: string[] = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"],
    Skills: Skill[] = [
      {name: "acrobatics", attribute: "dexterity"},
      {name: "animal-handling", attribute: "wisdom"},
      {name: "arcana",attribute: "intelligence"},
      {name: "athletics", attribute: "strength"},
      {name: "deception", attribute: "charisma"},
      {name: "history", attribute: "intelligence"},
      {name: "insight",attribute: "wisdom"},
      {name: "intimidation", attribute: "charisma"},
      {name: "investigation", attribute: "intelligence"},
      {name: "medicine", attribute: "wisdom"},
      {name: "nature", attribute: "intelligence"},
      {name: "perception", attribute: "wisdom"},
      {name: "performance", attribute: "charisma"},
      {name: "persuasion", attribute: "charisma"},
      {name: "religion", attribute: "intelligence"},
      {name: "sleight-of-hand", attribute: "dexterity"},
      {name: "stealth", attribute: "dexterity"},
      {name: "survival", attribute: "wisdom"},
    ],
    Sizes: any = {T: "Tiny", S: "Small", M: "Medium", L: "Large", H: "Huge", G: "Gargantuan"},
    Alignments: any = {L: "lawful", N: "neutral", C: "chaotic", G: "good", E: "evil"},
    AttackRanges: any = {
      "mw": "Melee Weapon Attack",
      "rw": "Ranged Weapon Attack",
      "mw,rw": "Melee or Ranged Weapon Attack",
      "ms": "Melee Weapon Attack",
      "rs": "Ranged Spell Attack",
      "ms,rs": "Melee or Ranged Spell Attack"
    },
    iconMsg: string = "/images/message.png",
    cr: any = {
      "0": 10,
      "1/8": 25,
      "1/4": 50,
      "1/2": 100,
      "1": 200,
      "2": 450,
      "3": 700,
      "4": 1100,
      "5": 1800,
      "6": 2300,
      "7": 2900,
      "8": 3900,
      "9": 5000,
      "10": 5900,
      "11": 7200,
      "12": 8400,
      "13": 10000,
      "14": 11500,
      "15": 13000,
      "16": 15000,
      "17": 18000,
      "18": 20000,
      "19": 22000,
      "20": 25000,
      "21": 33000,
      "22": 41000,
      "23": 50000,
      "24": 62000,
      "25": 75000,
      "26": 90000,
      "27": 105000,
      "28": 120000,
      "29": 135000,
      "30": 155000
    },
    prof: any = {
      "0": 2,
      "1/8": 2,
      "1/4": 2,
      "1/2": 2,
      "1": 2,
      "2": 2,
      "3": 2,
      "4": 2,
      "5": 3,
      "6": 3,
      "7": 3,
      "8": 3,
      "9": 4,
      "10": 4,
      "11": 4,
      "12": 4,
      "13": 5,
      "14": 5,
      "15": 5,
      "16": 5,
      "17": 6,
      "18": 6,
      "19": 6,
      "20": 6,
      "21": 7,
      "22": 7,
      "23": 7,
      "24": 7,
      "25": 8,
      "26": 8,
      "27": 8,
      "28": 8,
      "29": 9,
      "30": 9
    },
    Schools: any = {
      "A": "Abjuration",
      "C": "Conjuration",
      "D": "Divination",
      "E": "Enchantment",
      "V": "Evocation",
      "I": "Illusion",
      "N": "Necromancy",
      "P": "Psionic",
      "T": "Transmutation"
    }
  ;

  const extractCR = () => {
    if("object" == typeof data.value.cr) {
      return data.value.cr.cr;
    }
    return data.value.cr
  }

  const build = () => {
    if(!("cr" in data.value)) {
      data.value.cr = "0";
    }
    if(!("proficiency" in data.value)) {
      data.value.proficiency = parseInt(data.value.pbNote || prof[extractCR()]);
    }
    character.value.category = "CR " + extractCR();

    character.value.name = data.value.name;
    if(data.value.token) {
      character.value.appearances.push(`https://5e.tools/img/bestiary/tokens/${data.value.token.source}/${data.value.token.name}.webp`.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    }
    else if(data.value.hasToken) {
      let name = data.value.name;
      if("summonedBySpell" in data.value) {
        name = name.split(' (')[0];
      }
      character.value.appearances.push(`https://5e.tools/img/bestiary/tokens/${data.value.source}/${name}.webp`.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    }
    addSections();
    // Character
    addAbilities();
    const parentId = getParent(Character);
    const [sectionId, section2Id] = addHorizontalSection(parentId, "infos");
    addInfo(sectionId);
    addSenses(section2Id);
    if(forSurvival.value) {
      addChallenge(section2Id);
    }
    addNotes(parentId);
    addAppearance(parentId);

    // Actions
    addActions("Actions", "action");
    addActions("Actions Bonus", "bonus");
    addActions("Reactions", "reaction");
    addActions("Legendary", "legendary");
    addActions("Mythic", "mythic");
    addActions("Lair", "lair");
    addActions("Regional Effects", "regional");

    // Spells
    addSpells();

    // Throws
    addSavingThrows();
    addSkills();
  }

  const addHorizontalSection = (parentId: number, name: string, sizes = [50, 50]) => {
    const horizontalId = addParent(name+"-horizontal-section");
    addProperty({
      id: horizontalId,
      type: "horizontal-section",
      parentId: parentId
    });
    const sectionId = addParent(name+"-section-1");
    const section2Id = addParent(name+"-section-2");
    addProperty({
      id: sectionId,
      type: "section",
      size: sizes[0],
      parentId: horizontalId
    });
    addProperty({
      id: section2Id,
      type: "section",
      size: sizes[1],
      parentId: horizontalId
    });

    return [sectionId, section2Id];
  }

  const addSections = () => {
    const sections = [Character, Actions];
    if("spellcasting" in data.value) sections.push(Spells);
    sections.push(Throws);

    sections.forEach(s => {
      const id = addParent(s);
      addProperty({
        id: id,
        type: "tab-section",
        value: s
      });
    })
  }

  const addAbilities = () => {
    const name = "Abilities"
    const parentId = getParent(Character);
    const id = addParent(name);
    addProperty({
      id: id,
      type: "title-section",
      value: name,
      parentId: parentId
    });

    addProperty({
      parentId: id,
      type: "number",
      name: "initiative",
      value: 0,
      message: "!r initiative = 1d20 + initiative",
      formula: "dex"
    });

    let e = data.value.hp.average;
    data.value.hp.special && (e = data.value.hp.special);

    if(data.value.hp.formula) {
      const tableid = addParent("table-roll-hp")
      addProperty({
        id: tableid,
        parentId: id,
        type: "table",
        data: {
          headers: [
            "hp-average",
            "hp-random",
            "hp-max"
          ]
        }
      });

      const col1 = addParent("table-roll-hp-col1");
      const col2 = addParent("table-roll-hp-col2");
      const col3 = addParent("table-roll-hp-col3");
      addProperty({
        id: col1,
        parentId: tableid,
        type: "number",
        name: "hp-average",
        value: e,
        message: "!m hp-average-set"
      });
      addMessage({
        parentId: col1,
        name: "hp-average-set",
        message: "Set average HP {hit-points-maximum = hp-average} {hit-points = hit-points-maximum} !hr"
      });

      addProperty({
        id: col2,
        parentId: tableid,
        type: "text",
        name: "hp-random",
        value: data.value.hp.formula,
        message: "!m hp-random-roll"
      });
      addMessage({
        parentId: col2,
        name: "hp-random-roll",
        message: `Roll random HP {hit-points-maximum = ${data.value.hp.formula}} {hit-points = hit-points-maximum} !hr`
      });

      addProperty({
        id: col3,
        parentId: tableid,
        type: "text",
        name: "hp-max",
        value: data.value.hp.formula.replace('d', '*'),
        message: "!m hp-max-roll"
      });
      addMessage({
        parentId: col3,
        name: "hp-max-roll",
        message: `Roll max HP {hit-points-maximum = ${data.value.hp.formula.replace('d', '*')}} {hit-points = hit-points-maximum} !hr`
      });
    }

    const hpid = addParent("hit-points");
    addProperty({
      id: hpid,
      parentId: id,
      type: "health",
      name: "hit-points",
      local: true,
      value: e
    });
    addProperty({
      parentId: hpid,
      type: "number",
      name: "hit-points-maximum",
      local: true,
      value: e
    });
    addProperty({
      parentId: hpid,
      type: "number",
      name: "hit-points-temporary",
      local: true,
      value: ""
    });
    for (const a of Abilities) {
      makeScore(a, id);
    }
  }

  const x = (a: string) => {
    return a.substring(0, 3);
  }

  const E = (e:any, t:any, a = "") => {
    const n = prompt("Manual interaction is required!\n\n" + e, a);
    if (n) return "number" === t ? parseInt(n) : n
  }

  const makeScore = (e:string, parentId:number) => {
    const t = x(e), a = data.value[t];
    const scoreId = addParent(e);

    addProperty({
      id: scoreId,
      parentId: parentId,
      type: "ability",
      name: e,
      message: `${e} check: {1d20 + ${e}}`,
      formula: `floor ((${e}-score - 10) / 2)`,
    });
    addProperty({
      parentId: scoreId,
      type: "number",
      name: e + "-score",
      value: a
    });
  }

  const addInfo = (sectionId: number) => {
    const name = "Info"
    const id = addParent(name);
    addProperty({
      id: id,
      type: "title-section",
      value: name,
      parentId: sectionId
    });
    addProperty({
      parentId: id,
      type: "number",
      name: "proficiency",
      value: data.value.proficiency
    })
    makeAC(id);
    makeSpeed(id);
    if(data.value.type) {
      let t = "string" == typeof data.value.type ? data.value.type : data.value.type.type + " (" + data.value.type.tags.join(", ") + ")";
      addProperty({
        parentId: id,
        type: "text",
        name: "type",
        value: t
      });
    }
    if(data.value.size) {
      addProperty({
        parentId: id,
        type: "text",
        name: "size",
        value: Sizes[data.value.size]
      });
    }
    if(data.value.alignment) {
      let a = data.value.alignment.map((e: string) => Alignments[e]).join(" ");
      addProperty({
        parentId: id,
        type: "text",
        name: "alignment",
        value: a
      });
    }
  }

  const addSenses = (sectionId: number) => {
    const name = "Senses"
    const id = addParent(name);
    addProperty({
      id: id,
      type: "title-section",
      value: name,
      parentId: sectionId
    });
    makeSenses(id);
  }
  
  const addChallenge = (sectionId: number) => {
    const name = "Challenge"
    const id = addParent(name);
    addProperty({
      id: id,
      type: "title-section",
      value: name,
      parentId: sectionId
    });
    addProperty({
      parentId: id,
      type: "text",
      name: "cr",
      value: extractCR()
    });
    addProperty({
      parentId: id,
      type: "number",
      name: "experience",
      value: "object" == typeof data.value.cr && "xp" in data.value.cr ? data.value.cr.xp : cr[extractCR()]
    });
    if("object" == typeof data.value.cr) {
      Object.keys(data.value.cr).forEach(k => {
        if(k === 'lair' || k === 'coven') {
          addProperty({
            parentId: id,
            type: "text",
            name: "cr-"+k,
            value: data.value.cr[k]
          });
          addProperty({
            parentId: id,
            type: "number",
            name: "experience-"+k,
            value: cr[data.value.cr[k]]
          });
        }
      })
    }
  }

  const addNotes = (parentId: number) => {
    const name = "Notes"
    const id = addParent(name);
    addProperty({
      id: id,
      type: "title-section",
      value: name,
      parentId: parentId
    });

    let s: any[] = [];
    makeNote(s, "languages", "Languages");
    s.length && s.push(' ');

    makeNote(s, "vulnerable", "Damage Vulnerabilities");
    makeNote(s, "resist", "Damage Resistances");
    makeNote(s, "immune", "Damage Immunities");
    makeNote(s, "conditionImmune", "Condition Immunities");

    s.length && s.push(null);

    data.value.trait && s.push(...data.value.trait.map(((e: any) => `<strong><em>${e.name}. </strong></em>${S(e.entries[0])}`)));

    addProperty({
      type: "paragraph",
      value: s.map((e => e ? `<p>${e}</p>` : "<hr>")).join(""),
      parentId: id
    });
  }

  const makeNote = (s: string[], key: string, message: string) => {
    data.value[key] && s.push(S(`<strong>${message}: </strong>` + data.value[key].map((e: any) => {
      if("string" == typeof e) {
        return e
      }
      else if("special" in e) {
        return e.special;
      }
      else if(e[key]) {
        return `${e.preNote?e.preNote+' ':''}${e[key].join(" and ")}${e.note?' '+e.note:''}`
      }
    }).join(', ')));
  }

  const addAppearance = (parentId: number) => {
    const name = "appearance"
    const id = addParent(name);
    addProperty({
      id: id,
      type: "appearance",
      parentId: parentId,
      data: {
        appearances: [
        ]
      }
    });
  }

  const makeAC = (parentId: number) => {
    let e;
    "number" == typeof data.value.ac[0] ? e = data.value.ac[0] : (data.value.ac[0].ac && (e = data.value.ac[0].ac), data.value.ac[0].special && (e = E("AC:\n" + data.value.ac[0].special, "number", null == e ? void 0 : e.toString())));
    if("number" == typeof data.value.ac[0]) {
      e = data.value.ac[0];
    }
    else {
      data.value.ac[0].ac && (e = data.value.ac[0].ac);
      data.value.ac[0].special && (e = E("AC:\n" + data.value.ac[0].special, "number", null == e ? "" : e.toString()));
    }
    addProperty({
      parentId: parentId,
      type: "number",
      name: "armor-class",
      value: e
    })
  }

  const makeSpeed = (parentId: number) => {
    Object.entries(data.value.speed).forEach((([e, t]: any[]) => {
      const a = `${e}-speed`;

      if("number" == typeof t) {
        addProperty({
          parentId: parentId,
          type: "number",
          name: a,
          value: t
        })
      }
      else if ("object" == typeof t) {
        addProperty({
          parentId: parentId,
          type: "number",
          name: `${a} ${t.condition}`,
          value: t.number
        })
      }
    }))
  }

  const makeSenses = (parentId: number) => {
    if (data.value.senses) {
      for (const a of data.value.senses) {
        const [e, ...t] = a.split(" ");
        // character.value.stats[e] = {value: t.join(" "), type: "text", section: "senses"}
        addProperty({
          parentId: parentId,
          type: "text",
          name: e,
          value: t.join(" ")
        })
      }
    }
    addProperty({
      parentId: parentId,
      type: "number",
      name: "passive-perception",
      value: data.value.passive
    });
    addProperty({
      parentId: parentId,
      type: "number",
      name: "passive-stealth",
      value: data.value.passive
    });
  }

  const extractSpellName = (e: string) => {
    // if(!("string" == typeof e)) return;
    let t = e.slice();
    const a = /{@(?<script>.*?)}/;
    if (!a.test(t)) return t;
    let n = 16;
    for (; a.test(t) && (n--, !(n < 1));) {
      const e = a.exec(t);
      if(!e || !e.groups) return t;
      const n = e[0], [s, i] = e.groups.script.split(" ");
      if(s !== "spell") return t;
      return e[1].split(" ").slice(1).join(" ");
    }
    return t
  }

  const S = (e: string) => {
    // if(!("string" == typeof e)) return;
    let t = e.slice();
    const a = /{@(?<script>.*?)}/;
    if (!a.test(t)) return t;
    let n = 16;
    for (; a.test(t) && (n--, !(n < 1));) {
      const e = a.exec(t);
      if(!e || !e.groups) return t;
      const n = e[0], g = e.groups.script.split(" ");
      const s = g[0];
      const i = g.splice(1).join(" ");

      switch (s) {
        case"recharge":
          t = t.replace(n, `(Recharge ${i ? i+'-6' : '6'} : {1d6})`);
          break;
        case"atk":
          t = t.replace(n, AttackRanges[i] + ":");
          break;
        case"h":
          t = t.replace(n, "Hit: ");
          break;
        case"hit":
          t = t.replace(n, `{1d20 + ${i}}`);
          break;
        case"condition":
          t = t.replace(n, i);
          break;
        case"dc":
          t = t.replace(n, `DC {${i}}`);
          break;
        case"damage":
        case"dice":
          t = t.replace(n, `{${i}}`);
          break;
        case"skill":
          t = t.replace(n, `(${i}) {1d20 + ${i.toLowerCase()}}`);
          break;
        case"hitYourSpellAttack":
          t = t.replace(n, "{summoner-spell-attack}");
          break;
        case"spell":
          t = t.replace(n, e[1].split(" ").slice(1).join(" "));
          break;
        case "book":
          t = t.replace(n, e.groups.script.split(" ").slice(1).join(" ").split('|')[0]);
          break;
        case "chance":
          t = t.replace(n, i.split('|')[0] + ' percent');
          break;
        case "scaledamage":
          let sp = i.split('|');
          t = t.replace(n, `{${sp[sp.length-1]}}`);
          break;
        default:
          // t = t.replace(n, n.replace("{", "[UNRESOLVED|").replace("}", "|]"))
          t = t.replace("@", "");
      }
    }
    return t
  }

  const C = (e: any) => {
    let t = ""
    if("string" == typeof e) return false;
    else if("entries" in e) t = e.entries[0]
    else if("entry" in e) t = e.entry
    return t.includes("{@");
  }

  const addActions = (name: string, key: string) => {
    if((key == "lair" || key == "regional") && "fluff" in data.value) {
      data.value.fluff.entries.forEach((en: any) => {
        if(en.type == "entries") {
          if(en.entries) {
            if(en.entries[0].name == "Lair Actions" && key == "lair") {
              data.value.lair = en.entries[0].entries;
            }
            if(en.entries[0].name == "Regional Effects" && key == "regional") {
              data.value.regional = en.entries[0].entries;
            }
          }
        }
      });
    }

    if(data.value[key]) {
      const parentId = getParent(Actions);
      const id = addParent(name+"-section");
      addProperty({
        id: id,
        type: "title-section",
        value: name,
        parentId: parentId
      });

      if(key == "legendary" && "legendaryHeader" in data.value) {
        addProperty({
          type: "paragraph",
          value: `${data.value.legendaryHeader.join(" ")}`,
          parentId: id
        });
      }
      else if(key == "mythic" && "mythicHeader" in data.value) {
        addProperty({
          type: "paragraph",
          value: `${data.value.mythicHeader.join(" ")}`,
          parentId: id
        });
      }

      data.value[key].forEach((e: any) => {
        if("string" == typeof e) {
          addProperty({
            type: "paragraph",
            value: e,
            parentId: id
          });
        }
        else if("type" in e && e.type == "list") {
          e.items.forEach((i:any) => {
            actionAddMessageOrP(id, i);
          })
        }
        else {
          actionAddMessageOrP(id, e);
        }
      });
    }
  }

  const actionAddMessageOrP = (parentId:number, e:any) => {
    if("string" == typeof e) {
      addProperty({
        type: "paragraph",
        value: e,
        parentId: parentId
      });
    }
    else {
      let entry = '';
      if ("entries" in e) {
        entry = e.entries.join(" ");
      }
      else if ("entry" in e) {
        entry = e.entry;
      }
      if (C(e)) {
        addMessage({
          name: formatNameMessage(e.name),
          message: `${S(e.name)}: ${S(entry)}`,
          parentId: parentId
        })
      } else {
        addProperty({
          type: "paragraph",
          value: `<strong>${e.name}</strong>: ${entry}`,
          parentId: parentId
        });
      }
    }
  }

  const formatNameMessage = (n: string) => {
    return n.replace(/{@.*?}/g, "").trim().toLocaleLowerCase().split(" ").join("-")
  }

  const extractSpell = (tag: string) => {
    // let test = "{@spell fire bolt}";
    let name = extractSpellName(tag).split('||')[0];
    let spell = null;
    if(spells.value !== null) {
      spell = spells.value.find(s => s.name.toLowerCase() === name.toLowerCase());
      // if(name.toLowerCase() === "shield")
      //   console.log(JSON.stringify(spell, null, 2));
    }
    return {
      name: name,
      spell: spell
    };
  }

  const addSpells = () => {
    if(!("spellcasting" in data.value)) return;

    const parentId = getParent(Spells);

    data.value.spellcasting.forEach((s: any) => {
      const id = addParent(`spell-${s.name}-section`);
      addProperty({
        id: id,
        type: "title-section",
        value: s.name,
        parentId: parentId
      });
      if(s.headerEntries) {
        addProperty({
          type: "paragraph",
          value: `${s.headerEntries.join(" ")}`,
          parentId: id
        });
      }

      const times = ["will","rest", "daily", "weekly", "monthly", "yearly"];
      const timetxt = ["At Will", "Rest", "Day", "Week", "Month", "Year"];
      times.forEach((t,i) => {
        if(t in s) {
          if(t === "will") {
            const willid = addParent(`spell-${s.name}-section-will`);
            addProperty({
              id: willid,
              type: "title-section",
              value: `${timetxt[i]}`,
              parentId: id
            });
            s[t].forEach((tag: string) => {
              const ex = extractSpell(tag);
              addMessageSpell(willid, ex);
            });
          }
          else {
            Object.keys(s[t]).forEach(key => {
              const split = key.split('');
              const each = split.length == 2 && split[1] == "e";
              const nb = parseInt(split[0]);
              // si "e" en [1] alors checkbox pour chaque spell, sinon une seule checkbox
              if (!each) {
                addCheckboxes(id, `${s.name}-${t}`, `${s.name} /${timetxt[i]}`, nb);
              }
              s[t][key].forEach((tag: string) => {
                const ex = extractSpell(tag);
                if (each) {
                  addCheckboxes(id, `${ex.name}-${t}`, `${ex.name} /${timetxt[i]}`, nb);
                }
                addMessageSpell(id, ex);
              });
            });
          }
        }
      });

      if(s.spells) {
        Object.keys(s.spells).forEach((lvl: string) => {
          const spid = addParent(`spell-${s.name}-section-${lvl}`);
          addProperty({
            id: spid,
            type: "title-section",
            value: parseInt(lvl) === 0 ? `Cantrip` : `Level ${lvl}`,
            parentId: id
          });
          const o = s.spells[lvl];
          if(parseInt(lvl) > 0) {
            addCheckboxes(spid, `spell-${s.name}-section-${lvl}-slots`, `Slots level ${lvl}`, o.slots);
          }
          o.spells.forEach((tag: string) => {
            const ex = extractSpell(tag);
            addMessageSpell(spid, ex);
          });

        });
      }

    });
  }

  const addCheckboxes = (parentId: number, name: string, text: string, max: number) => {
    const id = addParent(`${name}`);
    addProperty({
      id: id,
      type: "checkboxes",
      name: text,
      parentId: parentId,
      local: true
    });
    addProperty({
      type: "number",
      name: text + '-max',
      parentId: id,
      local: true,
      value: max
    });
  }

  const addMessageSpell = (parentId: number, ex: any) => {
    let message = "";
    if(!ex.spell) {
      message = "Woups it's undefined ...";
    }
    else {
      const s = ex.spell;
      let lines = [];
      lines.push(`${s.name}, ${s.level == 0 ? 'Cantrip' : `Level ${s.level}`} ${Schools[<string>s.school]}${s.meta && s.meta.ritual ? ' (ritual)':''}`);
      if(s.time) {
        s.time.forEach((t: Time) => lines.push(`Casting Time: ${t.number} ${t.unit}${t.condition ? ', '+t.condition : ''}`))
      }
      if(s.range) {
        let m = 'Range: ';
        let distance = (s.range.distance?.amount ? s.range.distance.amount + ' ' : '') + s.range.distance?.type;
        if(s.range.type == "point") {
          m += distance;
        }
        else {
          m += s.range.type + ' (' + distance +')';
        }
        lines.push(m);
      }

      let comps: string[] = [];
      if(s.components.v) comps.push('V');
      if(s.components.s) comps.push('S');
      if(s.components.m) comps.push(`M (${s.components.m})`);
      if(comps.length > 0)
        lines.push(`Components: ${comps.join(', ')}`);

      const ds: string[] = [];
      s.duration.forEach((d: Duration) => {
        let m = "";
        switch (d.type) {
          case "instant":
            m = "Instantaneous"
            break
          case "permanent":
            m = `Until ${d.ends?.join(" or ")}`;
            break
          case "timed":
            m = `${d.duration?.amount} ${d.duration?.type}`;
            break
        }
        ds.push(m);
        if(d.concentration) {
          ds.push('concentration');
        }
      });
      if(ds.length > 0)
        lines.push(`Duration: ${ds.join(', ')}`);

      s.entries.forEach((en: any) => {
        if("string" == typeof en) {
          lines.push(S(en))
        }
        else {
          if("type" in en && en.type === "list") {
            en.items.forEach((it: any) => lines.push('- ' + S(it)));
          }
          else if("name" in en && "entries" in en) {
            lines.push(S(`${en.name}: ${en.entries.join(" ")}`));
          }
        }
      });
      if(s.entriesHigherLevel) {
        s.entriesHigherLevel.forEach((h: EntriesHigherLevel) => {
          if (h.type === 'entries') {
            lines.push(`${h.name}. ${h.entries.join('\n')}`);
          }
        });
      }
      message = lines.join('\n');
    }
    const id = getParent(ex.name + '-spell');
    addMessage({
      // id: id,
      name: formatNameMessage(ex.spell?.name || ex.name),
      message: S(message),
      parentId: parentId
    });
  }

  const addSavingThrows = () => {
    const name = "Saving Throws"
    const parentId = getParent(Throws);
    const id = addParent(name);
    addProperty({
      id: id,
      type: "title-section",
      value: name,
      parentId: parentId
    });

    for (const e of Abilities) {
      const name = `${e}-save`;
      const stid = addParent(name);
      addProperty({
        id: stid,
        parentId: id,
        type: "saving-throw",
        name: name,
        message: `${x(e).toUpperCase()} save: {1d20 + ${e}-save}`,
        formula: `${e} + (${name}-proficiency ? proficiency : 0)`,
      });
      addProperty({
        parentId: stid,
        type: "checkbox",
        name: name + "-proficiency",
        value: "save" in data.value && x(e) in data.value.save
      })
    }
  }

  const checkSkillProf = (s: Skill) => {
    if(!data.value.skill) return false;
    return s.name in data.value.skill;
  }

  const checkSkillExpert = (s: Skill) => {
    if(!data.value.skill) return false;
    if(s.name in data.value.skill) {
      let value = parseInt(data.value.skill[s.name]) - Math.floor((data.value[x(s.attribute)] - 10) / 2);
      return value > prof[data.value.cr];
    }
    return false;
  }

  const addSkills = () => {
    const name = "Skills"
    const parentId = getParent(Throws);
    const id = addParent(name);
    addProperty({
      id: id,
      type: "title-section",
      value: name,
      parentId: parentId
    });

    for (const s of Skills) {
      const skid = addParent(s.name);
      addProperty({
        id: skid,
        parentId: id,
        type: "skill",
        name: s.name,
        data: {
          subtitle: x(s.attribute)
        },
        message: `${s.name} check: {1d20 + ${s.name}}`,
        formula: `${s.attribute} + (${s.name}-proficiency ? proficiency : jack-of-all-trades ? (floor (proficiency / 2)) : 0) + (${s.name}-expertise ? proficiency : 0)`,
      });
      addProperty({
        parentId: skid,
        type: "checkbox",
        name: s.name + "-proficiency",
        value: checkSkillProf(s)
      });
      addProperty({
        parentId: skid,
        type: "checkbox",
        name: s.name + "-expertise",
        value: checkSkillExpert(s)
      });
    }

    addProperty({
      parentId: id,
      type: "checkbox",
      name: "jack-of-all-trades",
      value: false
    })
  }

  const downloadJson = () => {
    download(jsonTableplop.value, character.value.name + ".json", "application/json");
  }

  import {useSpellsStore} from "@/stores/spells";
  import type {EntriesHigherLevel,Duration,Time} from "@/stores/spells";
  const spellsStore = useSpellsStore();
  const spells = computed(() => spellsStore.spells);
  const show = ref(false);
</script>

<template>
  <!-- Modal -->
  <div class="modal fade modal-lg" :class="show ? 'show': ''" :style="show ? 'display: block' : ''">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body text-center">
          <p>There is an error ... Please check the JSON or open a <a href="https://github.com/Gus19/jdrtools/issues" target="_blank">GitHub issue</a></p>
          <p>
            <code>{{ errorConvert }}</code>
          </p>
          <button type="button" class="btn btn-secondary" @click="show = false">OK</button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="show" class="modal-backdrop fade show"></div>

  <div class="row">
    <div class="col-6 d-flex justify-content-between align-items-center">
      <label class="fw-bold">5etools</label>
      <button class="btn btn-sm btn-secondary" @click="handleFormat">
        Format
      </button>
    </div>
    <div class="col-6 d-flex justify-content-between align-items-center">
      <div class="btn-group">
        <button class="btn btn-sm btn-success" @click="handleTableplop" :disabled="spells.length === 0 || !json5etools">
          Convert
        </button>
        <button class="btn btn-sm btn-secondary" @click="handleCopy" :disabled="btnDisabled">
          Copy
        </button>
        <button class="btn btn-sm btn-info" @click="downloadJson" :disabled="btnDisabled">
          Download
        </button>
      </div>
      <label v-if="spells.length === 0" class="fst-italic small">Loading spells in progress ...</label>
      <label class="fw-bold">Tableplop</label>
    </div>
  </div>
  <div class="row align-items-stretch flex-grow-1">
    <div class="col-6">
      <json-editor ref="editor"
        mode="text"
        v-model:text="json5etools"
        :dark-theme="true"
        :status-bar="false"
        :main-menu-bar="false"
        :read-only="false"
        class="my-editor"
        :ask-to-format="false"
      />
    </div>
    <div class="col-6">
      <json-editor
          mode="text"
          v-model:text="jsonTableplop"
          :dark-theme="true"
          :status-bar="false"
          :main-menu-bar="false"
          class="my-editor"
      />
    </div>
  </div>
</template>