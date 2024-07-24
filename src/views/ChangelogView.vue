<script setup lang="ts">
import Changelog from "@/components/Changelog.vue";
</script>

<template>
  <h2>Changelog</h2>

  <Changelog>
    <template v-slot:version>1.0.1</template>
    <template v-slot:date>27/04/2024</template>
    <li>Error spell with list</li>
    <li>Add more info on error and link to open an issue</li>
    <li>Force id to every property</li>
  </Changelog>

  <Changelog>
    <template v-slot:version>1.0.0</template>
    <template v-slot:date>27/04/2024</template>
    <li>First version</li>
  </Changelog>

</template>

<style scoped>
</style>