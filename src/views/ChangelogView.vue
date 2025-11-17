<script setup lang="ts">
import Changelog from "@/components/Changelog.vue";
</script>

<template>
  <h2>Changelog</h2>

  <Changelog>
    <template v-slot:version>3.3.0</template>
    <template v-slot:date>17/11/2025</template>
    <li>Monster conversion 2024</li>
    <li>Copy spell message with click</li>
  </Changelog>

  <Changelog>
    <template v-slot:version>3.2.0</template>
    <template v-slot:date>02/09/2025</template>
    <li>Add High Half Elf</li>
    <li>Change download files for encoding</li>
  </Changelog>

  <Changelog>
    <template v-slot:version>3.1.0</template>
    <template v-slot:date>26/08/2025</template>
    <li>Error on spell list whith multiclass</li>
    <li>Change menu, add FAQ and Privacy</li>
  </Changelog>

  <Changelog>
    <template v-slot:version>3.0.0</template>
    <template v-slot:date>03/08/2025</template>
    <li>Add character builder for the 2024 version</li>
  </Changelog>

  <Changelog>
    <template v-slot:version>2.0.0</template>
    <template v-slot:date>11/05/2025</template>
    <li>Add character builder for the 2014 version</li>
  </Changelog>

  <Changelog>
    <template v-slot:version>1.0.7</template>
    <template v-slot:date>19/02/2025</template>
    <li>Error with the appearance on Tableplop</li>
  </Changelog>

  <Changelog>
    <template v-slot:version>1.0.6</template>
    <template v-slot:date>10/02/2025</template>
    <li>Error on loading spells</li>
  </Changelog>

  <Changelog>
    <template v-slot:version>1.0.5</template>
    <template v-slot:date>02/08/2024</template>
    <li>Error on type if not text</li>
    <li>Error on spell if not text</li>
  </Changelog>

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