<script setup lang="ts">
import {computed, onMounted, ref, watch} from 'vue'
  import JsonEditor from 'vue3-ts-jsoneditor';

  import {useTableplop} from "@/stores/tableplop";
  import {useSpellsStore} from "@/stores/spells";
  import {Alignments, messageSpell, S, Sizes, type Skill, Skills, download} from "@/utils/refs";

  const tableplop = useTableplop();

  const props = defineProps({
    version: {type: String, required: true, default: ''},
  });

  /*onMounted(() => {
    spellsStore.initSpells(props.version);
  });*/
  const refresh = ref<boolean>(false);
  const initStore = async () => {
    refresh.value = true;
    await spellsStore.initSpells(props.version);
    refresh.value = false;
  }
  onMounted(initStore);
  watch(() => props.version, initStore);

  const spellsStore = useSpellsStore();
  const spells = computed(() => spellsStore.spells);
  const isInit = computed(() => spellsStore.isLoad && !refresh.value);

  const Test = ``
  const jsonsource = ref(import.meta.env.DEV ? Test : '');
  const jsonTableplop = ref('');

  const editor = ref();
  const data = ref();

  const handleFormat = () => {
    jsonsource.value = JSON.stringify(JSON.parse(jsonsource.value),null, 2);
  }

  const handleTableplop = () => {
    jsonTableplop.value = '';
    tableplop.resetData();
    data.value = JSON.parse(jsonsource.value);
    build();
    jsonTableplop.value = JSON.stringify(tableplop.character, null, 2);
  }

  const extractCR = () => {
    if("object" == typeof data.value.cr) {
      return data.value.cr.cr;
    }
    return data.value.cr
  }

  const
    Character = "Character", Actions = "Actions", Spells = "Spells", Throws = "Throws",
    Abilities: string[] = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"],
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
    }
  ;

  const addSections = () => {
    const sections = [Character, Actions];
    if("spellcasting" in data.value) sections.push(Spells);
    sections.push(Throws);

    sections.forEach(s => {
      const id = tableplop.addParent(s);
      tableplop.addProperty({
        id: id,
        type: "tab-section",
        value: s
      });
    })
  }

  const addAbilities = () => {
    const name = "Abilities"
    const parentId = tableplop.getParent(Character);
    const id = tableplop.addParent(name);
    tableplop.addProperty({
      id: id,
      type: "title-section",
      value: name,
      parentId: parentId
    });

    tableplop.addProperty({
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
      const tableid = tableplop.addParent("table-roll-hp")
      tableplop.addProperty({
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

      const col1 = tableplop.addParent("table-roll-hp-col1");
      const col2 = tableplop.addParent("table-roll-hp-col2");
      const col3 = tableplop.addParent("table-roll-hp-col3");
      tableplop.addProperty({
        id: col1,
        parentId: tableid,
        type: "number",
        name: "hp-average",
        value: e,
        message: "!m hp-average-set"
      });
      tableplop.addMessage({
        parentId: col1,
        name: "hp-average-set",
        message: "Set average HP {hit-points-maximum = hp-average} {hit-points = hit-points-maximum} !hr"
      });

      tableplop.addProperty({
        id: col2,
        parentId: tableid,
        type: "text",
        name: "hp-random",
        value: data.value.hp.formula,
        message: "!m hp-random-roll"
      });
      tableplop.addMessage({
        parentId: col2,
        name: "hp-random-roll",
        message: `Roll random HP {hit-points-maximum = ${data.value.hp.formula}} {hit-points = hit-points-maximum} !hr`
      });

      tableplop.addProperty({
        id: col3,
        parentId: tableid,
        type: "text",
        name: "hp-max",
        value: data.value.hp.formula.replace('d', '*'),
        message: "!m hp-max-roll"
      });
      tableplop.addMessage({
        parentId: col3,
        name: "hp-max-roll",
        message: `Roll max HP {hit-points-maximum = ${data.value.hp.formula.replace('d', '*')}} {hit-points = hit-points-maximum} !hr`
      });
    }

    const hpid = tableplop.addParent("hit-points");
    tableplop.addProperty({
      id: hpid,
      parentId: id,
      type: "health",
      name: "hit-points",
      local: true,
      value: e
    });
    tableplop.addProperty({
      parentId: hpid,
      type: "number",
      name: "hit-points-maximum",
      local: true,
      value: e
    });
    tableplop.addProperty({
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
    const scoreId = tableplop.addParent(e);

    tableplop.addProperty({
      id: scoreId,
      parentId: parentId,
      type: "ability",
      name: e,
      message: `${e} check: {1d20 + ${e}}`,
      formula: `floor ((${e}-score - 10) / 2)`,
    });
    tableplop.addProperty({
      parentId: scoreId,
      type: "number",
      name: e + "-score",
      value: a
    });
  }

  const addInfo = (sectionId: number) => {
    const name = "Info"
    const id = tableplop.addParent(name);
    tableplop.addProperty({
      id: id,
      type: "title-section",
      value: name,
      parentId: sectionId
    });
    tableplop.addProperty({
      parentId: id,
      type: "number",
      name: "proficiency",
      value: data.value.proficiency
    })
    makeAC(id);
    makeSpeed(id);
    if(data.value.type) {
      let t = "";
      if("string" == typeof data.value.type) {
        t = data.value.type
      }
      else {
        t = data.value.type.type; // + (data.value.type.tags ? ` (${data.value.type.tags.join(`, `)})` : '');
        if(data.value.type.tags) {
          t += ' ' + data.value.type.tags.map((tag: any) => {
            if("string" == typeof tag) {
              return tag;
            }
            else {
              return `${tag.prefix?tag.prefix + ' ':''}${tag.tag}`;
            }
          }).join(' , ');
        }
      }

      tableplop.addProperty({
        parentId: id,
        type: "text",
        name: "type",
        value: t
      });
    }
    if(data.value.size) {
      tableplop.addProperty({
        parentId: id,
        type: "text",
        name: "size",
        value: Sizes[data.value.size]
      });
    }
    if(data.value.alignment) {
      let a = data.value.alignment.map((e: string) => Alignments[e]).join(" ");
      tableplop.addProperty({
        parentId: id,
        type: "text",
        name: "alignment",
        value: a
      });
    }
  }

  const addSenses = (sectionId: number) => {
    const name = "Senses"
    const id = tableplop.addParent(name);
    tableplop.addProperty({
      id: id,
      type: "title-section",
      value: name,
      parentId: sectionId
    });
    makeSenses(id);
  }

  const addChallenge = (sectionId: number) => {
    const name = "Challenge"
    const id = tableplop.addParent(name);
    tableplop.addProperty({
      id: id,
      type: "title-section",
      value: name,
      parentId: sectionId
    });
    tableplop.addProperty({
      parentId: id,
      type: "text",
      name: "cr",
      value: extractCR()
    });
    tableplop.addProperty({
      parentId: id,
      type: "number",
      name: "experience",
      value: "object" == typeof data.value.cr && "xp" in data.value.cr ? data.value.cr.xp : cr[extractCR()]
    });
    if("object" == typeof data.value.cr) {
      Object.keys(data.value.cr).forEach(k => {
        if(k === 'lair' || k === 'coven') {
          tableplop.addProperty({
            parentId: id,
            type: "text",
            name: "cr-"+k,
            value: data.value.cr[k]
          });
          tableplop.addProperty({
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
    const id = tableplop.addParent(name);
    tableplop.addProperty({
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

    tableplop.addProperty({
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
    const id = tableplop.addParent(name);
    const appearances: any[] = [];
    if(tableplop.character.appearances.length > 0) {
      appearances.push({
        url: tableplop.character.appearances[0],
        location: tableplop.character.appearances[0],
        iconSrc: tableplop.character.appearances[0]
      })
    }

    tableplop.addProperty({
      id: id,
      type: "appearance",
      parentId: parentId,
      data: {
        appearances: appearances
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
    tableplop.addProperty({
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
        tableplop.addProperty({
          parentId: parentId,
          type: "number",
          name: a,
          value: t
        })
      }
      else if ("object" == typeof t) {
        tableplop.addProperty({
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
        tableplop.addProperty({
          parentId: parentId,
          type: "text",
          name: e,
          value: t.join(" ")
        })
      }
    }
    tableplop.addProperty({
      parentId: parentId,
      type: "number",
      name: "passive-perception",
      formula: "10 + perception"
    });
    tableplop.addProperty({
      parentId: parentId,
      type: "number",
      name: "passive-stealth",
      formula: "10 + stealth"
    });
  }

  const extractSpellName = (e: any) => {
    let t;
    if("object" == typeof e && "entry" in e) t = e.entry.slice();
    else t = e.slice();
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
      const parentId = tableplop.getParent(Actions);
      const id = tableplop.addParent(name+"-section");
      tableplop.addProperty({
        id: id,
        type: "title-section",
        value: name,
        parentId: parentId
      });

      if(key == "legendary" && "legendaryHeader" in data.value) {
        tableplop.addProperty({
          type: "paragraph",
          value: `${data.value.legendaryHeader.join(" ")}`,
          parentId: id
        });
      }
      else if(key == "mythic" && "mythicHeader" in data.value) {
        tableplop.addProperty({
          type: "paragraph",
          value: `${data.value.mythicHeader.join(" ")}`,
          parentId: id
        });
      }

      data.value[key].forEach((e: any) => {
        if("string" == typeof e) {
          tableplop.addProperty({
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
      tableplop.addProperty({
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
        tableplop.addMessage({
          name: tableplop.formatNameMessage(e.name),
          message: `${S(e.name)}: ${S(entry)}`,
          parentId: parentId
        })
      } else {
        tableplop.addProperty({
          type: "paragraph",
          value: `<strong>${e.name}</strong>: ${entry}`,
          parentId: parentId
        });
      }
    }
  }

  const extractSpell = (tag: string) => {
    // let test = "{@spell fire bolt}";
    let name = extractSpellName(tag).split('||')[0];
    let spell = null;
    if(spells.value !== null) {
      spell = spells.value.find(s => s.name.toLowerCase() === name.toLowerCase());
      if(spell) {
        spell.info = S(messageSpell(spell))
      }
    }
    return {
      name: name,
      spell: spell
    };
  }

  const addSpells = () => {
    if(!("spellcasting" in data.value)) return;

    const parentId = tableplop.getParent(Spells);

    data.value.spellcasting.forEach((s: any) => {
      let id = parentId;
      if(data.value.spellcasting.length > 1) {
        id = tableplop.addParent(`spell-${s.name}-section`);
        tableplop.addProperty({
          id: id,
          type: "title-section",
          value: s.name,
          parentId: parentId
        });
      }
      if(s.headerEntries) {
        tableplop.addProperty({
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
            const willid = tableplop.addParent(`spell-${s.name}-section-will`);
            tableplop.addProperty({
              id: willid,
              type: "title-section",
              value: `${timetxt[i]}`,
              parentId: id
            });
            s[t].forEach((tag: string) => {
              const ex = extractSpell(tag);
              tableplop.addMessageSpell(willid, ex);
            });
          }
          else {
            Object.keys(s[t]).forEach(key => {
              const split = key.split('');
              const each = split.length == 2 && split[1] == "e";
              const nb = parseInt(split[0]);
              // si "e" en [1] alors checkbox pour chaque spell, sinon une seule checkbox
              if (!each) {
                tableplop.addCheckboxes(id, `${s.name}-${t}`, `${s.name} /${timetxt[i]}`, nb);
              }
              s[t][key].forEach((tag: string) => {
                const ex = extractSpell(tag);
                if (each) {
                  tableplop.addCheckboxes(id, `${ex.name}-${t}`, `${ex.name} /${timetxt[i]}`, nb);
                }
                tableplop.addMessageSpell(id, ex);
              });
            });
          }
        }
      });

      if(s.spells) {
        Object.keys(s.spells).forEach((lvl: string) => {
          const spid = tableplop.addParent(`spell-${s.name}-section-${lvl}`);
          tableplop.addProperty({
            id: spid,
            type: "title-section",
            value: parseInt(lvl) === 0 ? `Cantrip` : `Level ${lvl}`,
            parentId: id
          });
          const o = s.spells[lvl];
          if(parseInt(lvl) > 0) {
            tableplop.addCheckboxes(spid, `spell-${s.name}-section-${lvl}-slots`, `Slots level ${lvl}`, o.slots);
          }
          o.spells.forEach((tag: string) => {
            const ex = extractSpell(tag);
            tableplop.addMessageSpell(spid, ex);
          });

        });
      }

    });
  }

  const addSavingThrows = () => {
    const name = "Saving Throws"
    const parentId = tableplop.getParent(Throws);
    const id = tableplop.addParent(name);
    tableplop.addProperty({
      id: id,
      type: "title-section",
      value: name,
      parentId: parentId
    });

    for (const e of Abilities) {
      const name = `${e}-save`;
      const stid = tableplop.addParent(name);
      tableplop.addProperty({
        id: stid,
        parentId: id,
        type: "saving-throw",
        name: name,
        message: `${x(e).toUpperCase()} save: {1d20 + ${e}-save}`,
        formula: `${e} + (${name}-proficiency ? proficiency : 0)`,
      });
      tableplop.addProperty({
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
    const parentId = tableplop.getParent(Throws);
    const id = tableplop.addParent(name);
    tableplop.addProperty({
      id: id,
      type: "title-section",
      value: name,
      parentId: parentId
    });

    for (const s of Skills) {
      const skid = tableplop.addParent(s.name);
      tableplop.addProperty({
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
      tableplop.addProperty({
        parentId: skid,
        type: "checkbox",
        name: s.name + "-proficiency",
        value: checkSkillProf(s)
      });
      tableplop.addProperty({
        parentId: skid,
        type: "checkbox",
        name: s.name + "-expertise",
        value: checkSkillExpert(s)
      });
    }

    tableplop.addProperty({
      parentId: id,
      type: "checkbox",
      name: "jack-of-all-trades",
      value: false
    })
  }

  const build = () => {
    if(!("cr" in data.value)) {
      data.value.cr = "0";
    }
    if(!("proficiency" in data.value)) {
      data.value.proficiency = parseInt(data.value.pbNote || prof[extractCR()]);
    }
    if("summonedBySpell" in data.value) {
      tableplop.character.category = "Summoned";
    }
    else {
      tableplop.character.category = "CR " + extractCR();
    }
    tableplop.character.name = data.value.name;
    if(data.value.token) {
      tableplop.character.appearances.push(`${import.meta.env.VITE_TOKENURL}/bestiary/tokens/${data.value.token.source}/${data.value.token.name}.webp`.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    }
    else if(data.value.hasToken) {
      let name = data.value.name;
      if("summonedBySpell" in data.value) {
        name = name.split(' (')[0];
      }
      tableplop.character.appearances.push(`${import.meta.env.VITE_TOKENURL}/bestiary/tokens/${data.value.source}/${name}.webp`.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    }
    addSections();
    // Character
    addAbilities();
    const parentId = tableplop.getParent(Character);
    const [sectionId, section2Id] = tableplop.addHorizontalSection(parentId, "infos");
    addInfo(sectionId);
    addSenses(section2Id);
    addChallenge(section2Id);
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

  const btnDisabled = computed(() => {
    if(!jsonTableplop) return true;
    return jsonTableplop.value.length === 0;
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonTableplop.value);
  }

  const downloadJson = () => {
    download(jsonTableplop.value, tableplop.character.name + ".json");
  }
</script>

<template>
  <div class="row">
    <div class="col-6 d-flex justify-content-between align-items-center">
      <label class="fw-bold">
        <template v-if="version == '2024'">Source 2024</template>
        <template v-else>Source before 2024</template>
      </label>
      <button class="btn btn-sm mw btn-secondary" :disabled="!jsonsource" @click="handleFormat">
        <i class="fa-solid fa-align-left" />
        Format
      </button>
    </div>
    <div class="col-6 d-flex justify-content-between align-items-center">
      <div class="btn-group mw">
        <button class="btn btn-sm btn-success" @click="handleTableplop" :disabled="!isInit || !jsonsource">
          <i class="fa-solid fa-gears" />
          Convert
        </button>
        <button class="btn btn-sm btn-secondary" @click="handleCopy" :disabled="btnDisabled">
          <i class="fa-regular fa-clipboard" />
          Copy
        </button>
        <button class="btn btn-sm btn-info" @click="downloadJson" :disabled="btnDisabled">
          <i class="fa-solid fa-download" />
          Download
        </button>
      </div>
      <label v-if="!isInit" class="fst-italic small">Loading spells in progress ...</label>
      <label class="fw-bold">Tableplop</label>
    </div>
  </div>
  <div class="row align-items-stretch flex-grow-1">
    <div class="col-6">
      <json-editor ref="editor"
        mode="text"
        v-model:text="jsonsource"
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