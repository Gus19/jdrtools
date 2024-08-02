<template>
  <div class="accordion-item" v-if="steps.includes(name)">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" :class="step !== name && 'collapsed'" @click="emits('click', name)"><!--@click="step = name"-->
        <div class="d-flex w-100">
          <em><slot name="header-label"></slot></em>
          <span class="flex-grow-1 text-center fw-bold"><slot name="header-value"></slot></span>
        </div>
      </button>
    </h2>
    <div class="accordion-collapse collapse" :class="step === name && 'show'">
      <div class="accordion-body">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref,defineEmits,defineProps} from "vue";
const props = defineProps({
  name: { type: String, required: true },
  step: { type: String, required: true },
  steps: {type: Array, required: true}
})
const emits = defineEmits(['click'])
</script>

<style scoped>
  em {
    width: 75px;
  }
  .accordion-button, .accordion-body {
    padding: .5rem !important;
  }
</style>