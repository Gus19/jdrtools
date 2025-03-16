import type {Duration, EntriesHigherLevel, SpellInfo, Time} from "@/stores/spells";

export interface Skill {
  name: string,
  attribute: string,
  prof: string,
  display: string,
  example: string
}

export interface Property {
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

export interface Data {
  subtitle?: string
  appearances?: any[]
  headers?: string[]
}

export const
  Skills: Skill[] = [
    {name: "acrobatics", attribute: "dexterity", prof: "acrobatics", display: "Acrobatics", example: "Stay on your feet in a tricky situation, or perform an acrobatic stunt."},
    {name: "animal-handling", attribute: "wisdom", prof: "animal handling", display: "Animal Handling", example: "Calm or train an animal, or get an animal to behave in a certain way."},
    {name: "arcana", attribute: "intelligence", prof: "arcana", display: "Arcana", example: "Recall lore about spells, magic items, and the planes of existence."},
    {name: "athletics", attribute: "strength", prof: "athletics", display: "Athletics", example: "Jump farther than normal, stay afloat in rough water, or break something."},
    {name: "deception", attribute: "charisma", prof: "deception", display: "Deception", example: "Tell a convincing lie, or wear a disguise convincingly."},
    {name: "history", attribute: "intelligence", prof: "history", display: "History", example: "Recall lore about historical events, people, nations, and cultures."},
    {name: "insight", attribute: "wisdom", prof: "insight", display: "Insight", example: "Discern a person's mood and intentions."},
    {name: "intimidation", attribute: "charisma", prof: "intimidation", display: "Intimidation", example: "Awe or threaten someone into doing what you want."},
    {name: "investigation", attribute: "intelligence", prof: "investigation", display: "Investigation", example: "Find obscure information in books, or deduce how something works."},
    {name: "medicine", attribute: "wisdom", prof: "medicine", display: "Medicine", example: "Diagnose an illness, or determine what killed the recently slain."},
    {name: "nature", attribute: "intelligence", prof: "nature", display: "Nature", example: "Recall lore about terrain, plants, animals, and weather."},
    {name: "perception", attribute: "wisdom", prof: "perception", display: "Perception", example: "Using a combination of senses, notice something that's easy to miss."},
    {name: "performance", attribute: "charisma", prof: "performance", display: "Performance", example: "Act, tell a story, perform music, or dance."},
    {name: "persuasion", attribute: "charisma", prof: "persuasion", display: "Persuasion", example: "Honestly and graciously convince someone of something."},
    {name: "religion", attribute: "intelligence", prof: "religion", display: "Religion", example: "Recall lore about gods, religious rituals, and holy symbols."},
    {name: "sleight-of-hand", attribute: "dexterity", prof: "sleight of hand", display: "Sleight of Hand", example: "Pick a pocket, conceal a handheld object, or perform legerdemain."},
    {name: "stealth", attribute: "dexterity", prof: "stealth", display: "Stealth", example: "Escape notice by moving quietly and hiding behind things."},
    {name: "survival", attribute: "wisdom", prof: "survival", display: "Survival", example: "Follow tracks, forage, find a trail, or avoid natural hazards."},
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
  Schools: any = {
    "A": {
      name: "Abjuration",
      color: "#00b921",
      info: "Spells are protective in nature, though some of them have aggressive uses. They create magical barriers, negate harmful effects, harm trespassers, or banish creatures to other planes of existence."
    },
    "C": {
      name: "Conjuration",
      color: "#bd0044",
      info: "Spells involve the transportation of objects and creatures from one location to another. Some spells summon creatures or objects to the caster's side, whereas others allow the caster to teleport to another location. Some conjurations create objects or effects out of nothing."
    },
    "D": {
      name: "Divination",
      color: "#00adb3",
      info: "Spells reveal information, whether in the form of secrets long forgotten, glimpses of the future, the locations of hidden things, the truth behind illusions, or visions of distant people or places."
    },
    "E": {
      name: "Enchantment",
      color: "#b30083",
      info: "Spells affect the minds of others, influencing or controlling their behavior. Such spells can make enemies see the caster as a friend, force creatures to take a course of action, or even control another creature like a puppet."
    },
    "V": {
      name: "Evocation",
      color: "#bb0100",
      info: "Spells manipulate magical energy to produce a desired effect. Some call up blasts of fire or lightning. Others channel positive energy to heal wounds."
    },
    "I": {
      name: "Illusion",
      color: "#006dbd",
      info: "Spells deceive the senses or minds of others. They cause people to see things that are not there, to miss things that are there, to hear phantom noises, or to remember things that never happened. Some illusions create phantom images that any creature can see, but the most insidious illusions plant an image directly in the mind of a creature.\n"
    },
    "N": {
      name: "Necromancy",
      color: "#6c00cc",
      info: "Spells manipulate the energies of life and death. Such spells can grant an extra reserve of life force, drain the life energy from another creature, create the undead, or even bring the dead back to life. Creating the undead through the use of necromancy spells such as animate dead is not a good act, and only evil casters use such spells frequently."
    },
    "P": {
      name: "Psionic",
      color: "#FFF",
      info: ""
    },
    "T": {
      name: "Transmutation",
      color: "#ccbe00",
      info: "Spells change the properties of a creature, object, or environment. They might turn an enemy into a harmless creature, bolster the strength of an ally, make an object move at the caster's command, or enhance a creature's innate healing abilities to rapidly recover from injury."
    }
  }
;

export interface Damage {
  name: string,
  display: string,
  example: string
}

export const Damages: Damage[] = [
  {name: "acid", display: "Acid", example: "Corrosive liquids, digestive enzymes" },
  {name: "bludgeoning", display: "Bludgeoning", example: "Blunt objects, constriction, falling" },
  {name: "cold", display: "Cold", example: "Freezing water, icy blasts" },
  {name: "fire", display: "Fire", example: "Flames, unbearable heat" },
  {name: "force", display: "Force", example: "Pure magical energy" },
  {name: "lightning", display: "Lightning", example: "Electricity" },
  {name: "necrotic", display: "Necrotic", example: "Life-draining energy" },
  {name: "piercing", display: "Piercing", example: "Fangs, puncturing objects" },
  {name: "poison", display: "Poison", example: "Toxic gas, venom" },
  {name: "psychic", display: "Psychic", example: "Mind-rending energy" },
  {name: "tadiant", display: "Radiant", example: "Holy energy, searing radiation" },
  {name: "slashing", display: "Slashing", example: "Claws, cutting objects" },
  {name: "thunder", display: "Thunder", example: "Concussive sound" }
]

export interface Ability {
  name: string,
  key: string,
}
export const Abilities: Ability[] = [
  {
    name: "Strength",
    key: "str"
  },
  {
    name: "Dexterity",
    key: "dex"
  },
  {
    name: "Constitution",
    key: "con"
  },
  {
    name: "Intelligence",
    key: "int"
  },
  {
    name: "Wisdom",
    key: "wis"
  },
  {
    name: "Charisma",
    key: "cha"
  }
]

export interface NameKey {
  name: string,
  key: string,
}

export const LanguagesStandard: NameKey[] = [
  {name: 'Common', key: 'common'},
  {name: 'Dwarvish', key: 'dwarvish'},
  {name: 'Elvish', key: 'elvish'},
  {name: 'Giant', key: 'giant'},
  {name: 'Gnomish', key: 'gnomish'},
  {name: 'Goblin', key: 'goblin'},
  {name: 'Halfling', key: 'halfling'},
  {name: 'Orc', key: 'orc'}
];
export const LanguagesExotic: NameKey[] = [
  {name: 'Abyssal', key: 'abyssal'},
  {name: 'Aquan', key: 'aquan'},
  {name: 'Auran', key: 'auran'},
  {name: 'Celestial', key: 'celestial'},
  {name: 'Draconic', key: 'draconic'},
  {name: 'Deep Speech', key: 'deep speech'},
  {name: 'Ignan', key: 'ignan'},
  {name: 'Infernal', key: 'infernal'},
  {name: 'Primordial', key: 'primordial'},
  {name: 'Sylvan', key: 'sylvan'},
  {name: 'Terran', key: 'terran'},
  {name: 'Undercommon', key: 'undercommon'}
];
// export const LANGUAGES_SECRET = [
//   'Druidic',
//   'Thieves\' cant',
// ];

export const LanguagesAll = [
  ...LanguagesStandard,
  ...LanguagesExotic
];
export const LanguagesKey = [
  ...LanguagesAll.map(l => l.key)
];

export const LanguagesChoices = {
  "Standard": LanguagesStandard,
  "Exotic": LanguagesExotic
}

export const DS = (e: any, d: boolean = true) => {
  if("entries" in e) return S(e.entries[0], d);
  if("entry" in e) return S(e.entry, d);
  return "";
}

export const S = (e: any, d: boolean = true) => {
  let t = '';
  try {
    if(!("string" == typeof e)) return '';
    t = e.slice();
    const a = /{@(?<script>.*?)}/;
    if (!a.test(t)) return t;
    let n = 16;
    for (; a.test(t) && (n--, !(n < 1));) {
      const e = a.exec(t);
      if (!e || !e.groups) return t;
      const n = e[0], g = e.groups.script.split(" ");
      const s = g[0];
      const i = g.splice(1).join(" ");

      switch (s) {
        case"recharge":
          t = t.replace(n, `(Recharge ${i ? i + '-6' : '6'}${d ? ` : {1d6}` : ``})`);
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
          t = t.replace(n, `DC ${i}`);
          break;
        case"damage":
        case"dice":
          t = t.replace(n, `{${i}}`);
          break;
        // case"skill":
        //   t = t.replace(n, `${i}${d ? ` {1d20 + ${i.toLowerCase()}}` : ``}`);
        //   break;
        case"hitYourSpellAttack":
          t = t.replace(n, "{summoner-spell-attack}");
          break;
        case"spell":
          t = t.replace(n, e[1].split(" ").slice(1).join(" "));
          break;
        case "book":
        case "item":
        case "quickref":
        case "5etools":
        case "filter":
        case "feat":
        case "sense":
        case "language":
        case "skill":
        case "action":
        case "creature":
        case "status":
        case "table":
        case "deity":
          t = t.replace(n, e.groups.script.split(" ").slice(1).join(" ").split('|')[0]);
          break;
        case "chance":
          t = t.replace(n, i.split('|')[0] + ' percent');
          break;
        case "scaledamage":
          let sp = i.split('|');
          t = t.replace(n, `{${sp[sp.length - 1]}}`);
          break;
        case "class":
          let archetype = i.split('|');
          t = t.replace(n, archetype[2]);
          break;
        default:
          // t = t.replace(n, n.replace("{", "[UNRESOLVED|").replace("}", "|]"))
          t = t.replace("@", "");
      }
    }
    return t
  }
  catch (ex) {
    console.log(e, d, ex);
  }
  return t;
}

export const displaySubrace = (s: any) => {
  if(!s.name) return 'None';
  if(s.raceName === 'Human' && s.name === 'Variant') return 'Feat';
  if(s.name.startsWith("Variant; ")) return s.name.substring(9);
  return s.name
}
export const roll = (max:number, min:number = 1) => {
  return min + Math.floor(Math.random() * (max - min + 1));
}
export const abilityRoll = () => {
  // 4d6kh3
  let a = [
    roll(6),
    roll(6),
    roll(6),
    roll(6)
  ]
  let min = Math.min(...a);
  let li = a.indexOf(min);
  let b = a.filter((i,j) => j !== li)
  let sum = 0
  b.map(e => sum += e)
  return {
    total: sum,
    detail: a
  }
}

export const inlineLang = (languages: any[]) => {
  const s: string[] = [];
  languages.forEach((a:any) => {
    Object.keys(a).forEach((k: string) => s.push(textLang(k, a)) )
  });
  return s.join(', ');
}
export const textLang = (k: string, a:any = null) => {
  if (k == "choose") {
    let s = `Choose ${a[k].count||1}`;
    s += ' (From: ';
    s += a[k].from.map((f:string) => LanguagesAll.find(s => s.key === f)?.name).join(', ');
    s += ')';
    return s;
  }
  else if (k == "anyStandard") {
    return `Any standard ${a[k]||1}`;
  }
  else if (k == "any") {
    return `Any ${a[k]||1}`;
  }
  else {
    const sk: any = LanguagesAll.find(s => s.key === k);
    return `${sk.name}`;
  }
}

export const inlineSkill = (skills: any[], choose: boolean = false) => {
  const s: string[] = [];
  skills.forEach((a:any) => {
    Object.keys(a).forEach((k: string) => s.push(textSkill(k, a, choose)) )
  });
  return s.join(', ');
}
export const textSkill = (k: string, a:any = null, choose: boolean = false) => {
  if (k == "choose") {
    let s = `Choose ${a[k].count||1}`;
    if(!choose) return s;
    s += ' (From: ';
    s += a[k].from.map((f:string) => Skills.find(s => s.prof === f)?.display).join(', ');
    s += ')';
    return s;
  } else if (k == "any") {
    return `Any ${a[k]||1}`;
  } else {
    const sk: any = Skills.find(s => s.prof === k);
    return `${sk.display} (${sk.attribute.substring(0,3)})`;
  }
}

export const formatOptionalEntries = (entries: any[]) => {
  return entries.map((e:any) => {
    if("string" == typeof e) return e;
    else if(e.type == "list") return e.items.map((j:any) => {
      if("string" == typeof j) return j;
      else return null
    }).filter((j:any) => j != null).join('\n');
    else return null;
    // TODO list object possible
  }).filter((e:any) => e != null).join('\n')
}

export const inlineAbility = (ability: any[]) => {
  const s: string[] = [];
  // const a: any = ability[0];
  ability.forEach((a:any) => {
    Object.keys(a).forEach((k: string) => {
      if (k == "choose") {
        let am = a[k].amount ? a[k].amount : 1;
        s.push(`${a[k].count&&a[k].count>1?a[k].count+' from ':''}${a[k].from.length<6?a[k].from.join('/').toUpperCase():'Any'} +${am}`);
      } else {
        s.push(`${k.toUpperCase()} ${fn(a[k])}`);
      }
    })
  });
  return s.join(', ');
}

// formatNumber
export const fn = (n: number) => {
  return `${n > 0 ? `+${n}` : n}`;
}

export const castingTime = (s: SpellInfo/*t: Time*/, short: boolean = false) => {
  const t = s.time[0];
  if(t.unit == 'action' && short) return 'Action';
  if(t.unit == 'bonus' && short) return 'Bonus';
  if(t.unit == 'reaction' && short) return 'Reaction';
  return `${t.number} ${t.unit}${t.condition && !short ? ', '+t.condition : ''}`;
}

export const castingRange = (s: SpellInfo) => {
  let m = 'Range: ';
  let distance = (s.range.distance?.amount ? s.range.distance.amount + ' ' : '') + s.range.distance?.type;
  if(s.range.type == "point") {
    m += distance;
  }
  else {
    m += s.range.type + ' (' + distance +')';
  }
  return m;
}

export const spellDuration = (s: SpellInfo) => {
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
    return `Duration: ${ds.join(', ')}`;
  return "";
}

export const spellSlots = (level: number|null = null): any => {
  const slots = [];
  let min = 1; let max = 20;
  if(level != null) {
    min = level; max = level;
  }
  for (let i = min; i <= max; i++) {
    let s1 = 2;
    if(i == 2) s1 = 3; else if (i > 2) s1 = 4;
    let s2 = 0;
    if(i == 3) s2 = 2; else if (i > 3) s2 = 3;
    let s3 = 0;
    if(i == 5) s3 = 2; else if (i > 5) s3 = 3;
    let s4 = 0;
    if(i == 7) s4 = 1; else if (i == 8) s4 = 2; else if (i > 8) s4 = 3;
    let s5 = 0;
    if(i == 9) s5 = 1; else if (i > 9 && i < 18) s5 = 2; else if (i >= 18) s5 = 3;
    let s6 = 0;
    if(i >= 11 && i < 19) s6 = 1; else if (i >= 19) s6 = 2;
    let s7 = 0;
    if(i >= 13 && i < 20) s7 = 1; else if (i == 20) s7 = 2;
    let s8 = 0;
    if(i >= 15) s8 = 1;
    let s9 = 0;
    if(i >= 17) s9 = 1;
    
    let max = 0;
    if(s9 != 0) max = 9;
    else if(s8 != 0) max = 8;
    else if(s7 != 0) max = 7;
    else if(s6 != 0) max = 6;
    else if(s5 != 0) max = 5;
    else if(s4 != 0) max = 4;
    else if(s3 != 0) max = 3;
    else if(s2 != 0) max = 2;
    else if(s1 != 0) max = 1;

    slots.push({
      level: i,
      s1: s1,
      s2: s2,
      s3: s3,
      s4: s4,
      s5: s5,
      s6: s6,
      s7: s7,
      s8: s8,
      s9: s9,
      max: max
    });
  }

  if(level != null) return slots.find(s => s.level == level);
  else return slots;
}

export const spellDetails = (s: SpellInfo): string => {
  let lines: string[] = [];
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
  if(lines.length == 0) return "";
  return lines.join('\n');
}

export const messageSpell = (s: SpellInfo, repeatName: boolean = true): string => {
  let lines = [];

  if(repeatName) lines.push(`${s.name}, ${s.level == 0 ? 'Cantrip' : `Level ${s.level}`} ${Schools[<string>s.school].name}${s.meta && s.meta.ritual ? ' (ritual)':''}`);
  else lines.push(`School: ${Schools[<string>s.school].name}`);

  if(s.time) {
    // s.time.forEach((t: Time) => lines.push(`Casting Time: ${castingTime(t)}`))
    lines.push(`Casting Time: ${castingTime(s)}`);
  }
  if(s.range) {
    let m = castingRange(s);
    lines.push(m);
  }

  let comps: string[] = [];
  if(s.components.v) comps.push('V');
  if(s.components.s) comps.push('S');
  if(s.components.m) comps.push(`M (${s.components.m})`);
  if(comps.length > 0)
    lines.push(`Components: ${comps.join(', ')}`);

  const ds = spellDuration(s);
  if(ds.length > 0) lines.push(ds);

  lines.push(spellDetails(s));
  return lines.join('\n');
}

export const ToolsArtisan: NameKey[] = [
  {
    "name": "Alchemist's supplies",
    "key": "alchemist's supplies"
  },
  {
    "name": "Brewer's supplies",
    "key": "brewer's supplies"
  },
  {
    "name": "Calligrapher's supplies",
    "key": "calligrapher's supplies"
  },
  {
    "name": "Carpenter's tools",
    "key": "carpenter's tools"
  },
  {
    "name": "Cartographer's tools",
    "key": "cartographer's tools"
  },
  {
    "name": "Cobbler's tools",
    "key": "cobbler's tools"
  },
  {
    "name": "Cook's utensils",
    "key": "cook's utensils"
  },
  {
    "name": "Glassblower's tools",
    "key": "glassblower's tools"
  },
  {
    "name": "Jeweler's tools",
    "key": "jeweler's tools"
  },
  {
    "name": "Leatherworker's tools",
    "key": "leatherworker's tools"
  },
  {
    "name": "Mason's tools",
    "key": "mason's tools"
  },
  {
    "name": "Painter's supplies",
    "key": "painter's supplies"
  },
  {
    "name": "Potter's tools",
    "key": "potter's tools"
  },
  {
    "name": "Smith's tools",
    "key": "smith's tools"
  },
  {
    "name": "Tinker's tools",
    "key": "tinker's tools"
  },
  {
    "name": "Weaver's tools",
    "key": "weaver's tools"
  },
  {
    "name": "Woodcarver's tools",
    "key": "woodcarver's tools"
  }
]
export const ToolsGamingsets: NameKey[] = [
  {
    "name": "Dice set",
    "key": "dice set"
  },
  {
    "name": "Dragonchess set",
    "key": "dragonchess set"
  },
  {
    "name": "Playing card set",
    "key": "playing card set"
  },
  {
    "name": "Three-Dragon Ante set",
    "key": "three-dragon ante set"
  }
]
export const ToolsInstrument: NameKey[] = [
  {
    "name": "Bagpipes",
    "key": "bagpipes"
  },
  {
    "name": "Drum",
    "key": "drum"
  },
  {
    "name": "Dulcimer",
    "key": "dulcimer"
  },
  {
    "name": "Flute",
    "key": "flute"
  },
  {
    "name": "Lute",
    "key": "lute"
  },
  {
    "name": "Lyre",
    "key": "lyre"
  },
  {
    "name": "Horn",
    "key": "horn"
  },
  {
    "name": "Pan flute",
    "key": "pan flute"
  },
  {
    "name": "Shawm",
    "key": "shawm"
  },
  {
    "name": "Viol",
    "key": "viol"
  }
]
export const ToolsOther: NameKey[] = [
  {
    "name": "Disguise Kit",
    "key": "disguise kit"
  },
  {
    "name": "Forgery kit",
    "key": "forgery kit"
  },
  {
    "name": "Herbalism kit",
    "key": "herbalism kit"
  },
  {
    "name": "Navigator's tools",
    "key": "navigator's tools"
  },
  {
    "name": "Poisoner's kit",
    "key": "poisoner's kit"
  },
  {
    "name": "Thieves' tools",
    "key": "thieves' tools"
  },
  {
    "name": "Vehicles (land)",
    "key": "vehicles (land)"
  },
  {
    "name": "Vehicles (water)",
    "key": "vehicles (water)"
  }
]
export const ToolsAll = [
  ...ToolsArtisan,
  ...ToolsGamingsets,
  ...ToolsInstrument,
  ...ToolsOther
]
export const ToolsKey = [
  ...ToolsAll.map(l => l.key)
];