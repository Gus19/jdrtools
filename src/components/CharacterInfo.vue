<template>
  <div class="flex-grow-1" :class="flex ? 'd-flex' : ''" style="white-space: pre-line">
    <label class="me-1 fw-bold fst-italic" :style="flex ? 'white-space: nowrap' : ''">
      <slot name="label"></slot>
    </label>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    flex: Boolean
  })
</script>

<style scoped>
</style>