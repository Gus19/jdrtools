import {defineStore} from "pinia";
import {S} from "@/utils/refs";
import {ref} from "vue";

export const useTableplop = defineStore('tableplop', () => {
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
    if(!parents.value.includes(name)) {
      parents.value.push(name);
    }
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

  const iconMsg: string = "/images/message.png";

  const resetData = () => {
    character.value.appearances = [];
    character.value.properties = [];
    parents.value = [];
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

  const addCheckboxes = (parentId: number, name: string, text: string, max: number, local: boolean = true) => {
    const id = addParent(`${name}`);
    addProperty({
      id: id,
      type: "checkboxes",
      name: text,
      parentId: parentId,
      local: local
    });
    addProperty({
      type: "number",
      name: text + '-max',
      parentId: id,
      local: local,
      value: max
    });
  }

  const formatNameMessage = (n: string) => {
    return n.replace(/{@.*?}/g, "").trim().toLocaleLowerCase().split(" ").join("-")
  }

  const addMessageSpell = (parentId: number, ex: any) => {
    let message = "";
    if(!ex.spell) {
      message = "Woups it's undefined ...";
    }
    else {
      const s = ex.spell;
      message = s.info;
    }
    addMessage({
      // id: id,
      name: formatNameMessage(ex.spell?.name || ex.name),
      message: S(message),
      parentId: parentId
    });
  }

  return { character, resetData, addHorizontalSection, addParent, getParent, addProperty, addMessage, addCheckboxes, formatNameMessage, addMessageSpell }
})

interface Character {
  appearances: string[];
  private: boolean;
  name: string;
  type: string;
  properties: Property[],
  category: string|null
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