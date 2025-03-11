<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import Header from "@/components/layout/Header.vue";
  import Footer from "@/components/layout/Footer.vue";
</script>

<template>
  <Header />

  <main class="container-fluid container-xxl d-flex flex-column my-2">
    <router-view />
  </main>

  <Footer />
</template>