import {defineStore} from 'pinia'
import {initBackgrounds} from "@/assets/backgrounds";

export const useBackgroundsStore = defineStore({
  id: "BackgroundsStore",
  state: () => ({
      backgrounds: [],
    } as RootState
  ),
  actions: {
    async initBackgrounds() {
      if (this.backgrounds.length > 0) {
        // console.log("Backgrounds already loaded !")
        return;
      }
      if (import.meta.env.DEV) {
        console.log("Backgrounds loaded (on dev) !!")
        this.backgrounds = initBackgrounds;
        return;
      }
      try {
        const response = await fetch('https://5e.tools/data/backgrounds.json');
        const data = await response.json();
        this.backgrounds = data.background;
      }
      catch (e) {
        console.error(e);
        this.backgrounds = initBackgrounds;
      }
      finally {
        // console.log("Backgrounds loaded !!");
      }
    }
  },
  getters: {
    isLoad: (state) => state.backgrounds.length > 0,
    getDefaults: (state) => state.backgrounds.filter((b: any) => defaultBackgrounds.includes(b.name))
  }
});

export const defaultBackgrounds = [
  "Acolyte",
  "Anthropologist",
  "Archaeologist",
  "Athlete",
  "Charlatan",
  "City Watch",
  "Clan Crafter",
  "Cloistered Scholar",
  "Courtier",
  "Criminal",
  "Entertainer",
  "Faceless",
  "Faction Agent",
  "Far Traveler",
  "Feylost",
  "Fisher",
  "Folk Hero",
  "Giant Foundling",
  "Gladiator",
  "Guild Artisan",
  "Guild Merchant",
  "Haunted One",
  "Hermit",
  "House Agent",
  "Inheritor",
  "Investigator",// (VRGR)
  "Knight",
  "Knight of the Order",
  "Marine",
  "Mercenary Veteran",
  "Noble",
  "Outlander",
  "Pirate",
  "Rewarded",
  "Ruined",
  "Rune Carver",
  "Sage",
  "Sailor",
  "Shipwright",
  "Smuggler",
  "Soldier",
  "Spy",
  "Urban Bounty Hunter",
  "Urchin",
  "Uthgardt Tribe Member",
  "Waterdhavian Noble",
  "Witchlight Hand"
];

export const classBackground = {
  "Artificer": "Guild Artisan",
  "Barbarian": "Outlander",
  "Bard": "Entertainer",
  "Cleric": "Acolyte",
  "Druid": "Hermit",
  "Fighter": "Soldier",
  "Monk": "Hermit",
  // "Mystic": "Hermit",
  "Paladin": "Noble",
  "Ranger": "Outlander",
  "Rogue": "Charlatan",
  "Sorcerer": "Hermit",
  "Warlock": "Charlatan",
  "Wizard": "Sage",
}

export type RootState = {
  backgrounds: [];
};