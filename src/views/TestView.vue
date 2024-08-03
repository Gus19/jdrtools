<script setup lang="ts">
import { useCollection,useFirestore } from 'vuefire'
import { collection, doc, setDoc } from 'firebase/firestore'
import {  } from "firebase/firestore";
import {onMounted, ref} from "vue";

import JsonEditor from 'vue3-ts-jsoneditor';
import {initSpells} from "@/assets/spells";
import {initRaces} from "@/assets/races";
import {useClassesStore} from "@/stores/classes";
import {initClasses} from "@/assets/classes";
const classesStore = useClassesStore();

const db = useFirestore();
const todos = useCollection(collection(db, 'todos'));

onMounted(() => {
  // const dbData: any = doc(db, "todos", "1");
  // setDoc(dbData, {
  //   id: '1',
  //   text: "First todo"
  // });
  // json.value = initMonsters();
  // classesStore.initClasses();
})

const json = ref({});
const loadSpells = () => json.value = initSpells;
const loadRaces = () => json.value = initRaces.subrace.filter((r: any) => r.raceName == "Human");
const loadClasses = () => {
  json.value = initClasses;
}
</script>

<template>
  <p v-if="db">Connexion OK !</p>
  <p v-else>Connexion KO ...</p>
  <ul v-if="todos && todos.length">
    <li v-for="todo in todos" :key="todo.id">
      <span>{{ todo.text }}</span>
    </li>
  </ul>
  <p v-else>Pas de todos ...</p>

  <div class="btn-group btn-outline-secondary">
    <button @click="loadSpells">loadSpells</button>
    <button @click="loadRaces">loadRaces</button>
    <button @click="loadClasses" v-if="classesStore.isLoad">loadClasses</button>
  </div>

  <json-editor
      mode="text"
      v-model:json="json"
      :dark-theme="true"
      :status-bar="false"
      :main-menu-bar="false"
      class="my-editor"
  />

</template>

<style scoped>

</style>