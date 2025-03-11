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

export const LanguagesStandard = [
  'Common',
  'Dwarvish',
  'Elvish',
  'Giant',
  'Gnomish',
  'Goblin',
  'Halfling',
  'Orc',
];
export const LanguagesExotic = [
  'Abyssal',
  'Aquan',
  'Auran',
  'Celestial',
  'Draconic',
  'Deep Speech',
  'Ignan',
  'Infernal',
  'Primordial',
  'Sylvan',
  'Terran',
  'Undercommon',
];
// export const LANGUAGES_SECRET = [
//   'Druidic',
//   'Thieves\' cant',
// ];
export const LanguagesKey = [
  ...LanguagesStandard,
  ...LanguagesExotic
].map(l => l.toLowerCase());

export const LanguagesAll = [
  ...LanguagesStandard,
  ...LanguagesExotic
].sort();

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