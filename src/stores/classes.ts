import {defineStore} from 'pinia'
import {initClasses} from "@/assets/classes";

const urls = [
  "class-artificer.json",
  "class-barbarian.json",
  "class-bard.json",
  "class-cleric.json",
  "class-druid.json",
  "class-fighter.json",
  "class-monk.json",
  "class-paladin.json",
  "class-ranger.json",
  "class-rogue.json",
  "class-sorcerer.json",
  "class-warlock.json",
  "class-wizard.json"
]

export const useClassesStore = defineStore({
  id: "ClassesStore",
  state: () => ({
      classes: [],
      subclasses: [],
      classFeatures: [],
      subclassFeatures: []
    } as RootState
  ),
  actions: {
    initState(data: any) {
      this.classes = data.class;
      this.subclasses = data.subclass;
      this.classFeatures = data.classFeature;
      this.subclassFeatures = data.subclassFeature;
    },
    async initClasses() {
      if(this.classes.length > 0) {
        // console.log("Classes already loaded !")
        return;
      }
      if(import.meta.env.DEV) {
        console.log("Classes loaded (on dev) !!")
        this.initState(initClasses);
        return;
      }
      const local1 = [];
      const local2 = [];
      const local3 = [];
      const local4 = [];
      try {
        for (const u of urls) {
          const response = await fetch('https://5e.tools/data/class/' + u);
          const data = await response.json();
          if (data.class) {
            local1.push(...data.class);
          }
          if (data.subclass) {
            local2.push(...data.subclass);
          }
          if (data.classFeature) {
            local3.push(...data.classFeature);
          }
          if (data.subclassFeature) {
            local4.push(...data.subclassFeature);
          }
        }
        this.classes = local1;
        this.subclasses = local2;
        this.classFeatures = local3;
        this.subclassFeatures = local4;
      }
      catch (e) {
        console.error(e);
        this.initState(initClasses);
      }
      finally {
        // console.log("Classes loaded !!");
      }
    }
  },
  getters: {
    isLoad: (state) => state.classes.length > 0
  }
});

export type RootState = {
  classes: [];
  subclasses: [];
  classFeatures: [];
  subclassFeatures: [];
};