<script setup lang="ts">
  const props = defineProps({
    name: { type: String, required: true }
  })
  import {computed} from "vue";
  import {type Condition, Conditions} from "@/utils/refs";
  const d = computed((): Condition|undefined => Conditions.find(d => d.name === props.name));
</script>

<template>
  <span :title="d.example" v-tooltip v-if="d">{{ d.display }}</span>
  <span v-else>{{ name }}</span>
</template>

<style scoped>
</style>