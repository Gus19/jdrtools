<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import {onMounted} from "vue";
import {useSpellsStore} from "@/stores/spells";

const spellsStore = useSpellsStore();

onMounted(() => {
  // spellsStore.initSources();
  spellsStore.initSpells();
});
</script>


<template>
  <Header />

  <main class="container d-flex flex-column my-2 g-1">
    <router-view />
  </main>

  <Footer />
</template>