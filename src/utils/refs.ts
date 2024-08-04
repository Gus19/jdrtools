export interface Skill {
  name: string,
  attribute: string
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
    {name: "acrobatics", attribute: "dexterity"},
    {name: "animal-handling", attribute: "wisdom"},
    {name: "arcana", attribute: "intelligence"},
    {name: "athletics", attribute: "strength"},
    {name: "deception", attribute: "charisma"},
    {name: "history", attribute: "intelligence"},
    {name: "insight", attribute: "wisdom"},
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

export const S = (e: string, d: boolean = true) => {
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
        t = t.replace(n, `(Recharge ${i ? i+'-6' : '6'}${d?` : {1d6}`:``})`);
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
        t = t.replace(n, `${i}${d?` {1d20 + ${i.toLowerCase()}}`:``}`);
        break;
      case"hitYourSpellAttack":
        t = t.replace(n, "{summoner-spell-attack}");
        break;
      case"spell":
        t = t.replace(n, e[1].split(" ").slice(1).join(" "));
        break;
      case "book":
      case "item":
      case "quickref":
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