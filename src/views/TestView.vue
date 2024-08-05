<script setup lang="ts">
import { useCollection,useFirestore } from 'vuefire'
import { collection, doc, setDoc } from 'firebase/firestore'
import {  } from "firebase/firestore";
import {onMounted, ref} from "vue";

import JsonEditor from 'vue3-ts-jsoneditor';
import {useClassesStore} from "@/stores/classes";

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
  </div>

  <json-editor
      mode="text"
      v-model:json="json"
      :dark-theme="true"
      class="my-editor"
  />

</template>

<style scoped>

</style>