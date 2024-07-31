<script setup lang="ts">
import Changelog from "@/components/Changelog.vue";
</script>

<template>
  <h2>Changelog</h2>
  <Changelog>
    <template v-slot:version>1.0.4</template>
    <template v-slot:date>31/07/2024</template>
    <li>Error with swarm monster</li>
    <li>Formula passive stealth/perception</li>
  </Changelog>

  <Changelog>
    <template v-slot:version>1.0.3</template>
    <template v-slot:date>26/07/2024</template>
    <li>Reset categories on convert</li>
    <li>Load spells with local file if error</li>
  </Changelog>

  <Changelog>
    <template v-slot:version>1.0.2</template>
    <template v-slot:date>25/07/2024</template>
    <li>Add Mythic, lair and regional actions</li>
    <li>Add monster summoned by spell</li>
    <li>Move Languages into Notes</li>
  </Changelog>

  <Changelog>
    <template v-slot:version>1.0.1</template>
    <template v-slot:date>24/07/2024</template>
    <li>Error spell with list</li>
    <li>Add more info on error and link to open an issue</li>
    <li>Force id to every property</li>
  </Changelog>

  <Changelog>
    <template v-slot:version>1.0.0</template>
    <template v-slot:date>24/07/2024</template>
    <li>First version</li>
  </Changelog>

</template>

<style scoped>
</style>