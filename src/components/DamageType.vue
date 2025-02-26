<script setup lang="ts">
  const props = defineProps({
    name: { type: String, required: true }
  })
  import {computed} from "vue";
  import {type Damage, Damages} from "@/utils/refs";
  const d = computed((): Damage|undefined => Damages.find(d => d.name === props.name));
</script>

<template>
  <span :title="d.example" v-tooltip v-if="d">{{ d.display }}</span>
  <span v-else>{{ name }}</span>
</template>

<style scoped>
</style>