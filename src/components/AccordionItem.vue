<template>
  <div class="accordion-item" v-if="steps.map((s:any) => s.name).includes(name)">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" :class="step !== name && 'collapsed'" @click="emits('click', name)"><!--@click="step = name"-->
        <div class="d-flex w-100">
          <em>
            <i class="fa-regular me-1" :class="valid ? 'fa-circle-check' : 'fa-circle-xmark'" />
            <slot name="header-label"></slot>
          </em>
          <span class="flex-grow-1 text-center fw-bold">
            <slot name="header-value"></slot>
          </span>
        </div>
      </button>
    </h2>
    <div class="accordion-collapse collapse" :class="step === name && 'show'">
      <div class="accordion-body">
        <slot name="body"></slot>
<!--        <slot name="buttons">-->
<!--          <div class="btn-group w-100 mt-1">-->
<!--            <button type="button" class="btn btn-sm btn-secondary" v-if="hasPrev" @click="emits('prevStep')">Prev</button>&lt;!&ndash;@click="prevStep"&ndash;&gt;-->
<!--            <button type="button" class="btn btn-sm btn-success"  @click="emits('nextStep')" :disabled="!steps.find(s => s.name === step).valid">Next</button>&lt;!&ndash;click="nextStep"&ndash;&gt;-->
<!--          </div>-->
<!--        </slot>-->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";
const props = defineProps({
  name: { type: String, required: true },
  step: { type: String, required: true },
  steps: {type: Array, required: true}
})
const emits = defineEmits([
  'click',
  // 'nextStep',
  // 'prevStep'
])

// const hasNext = computed(() => props.steps.findIndex(s => s.name === props.step) < props.steps.length - 1);
// const hasPrev = computed(() => props.steps.findIndex(s => s.name === props.step) > 0);
const valid = computed((): boolean => {
  const a: any = props.steps.find((s: any) => s.name === props.name);
  if(a) return a.valid
  return false;
})

</script>

<style scoped>
  em {
    width: 115px;
  }
  .accordion-button, .accordion-body {
    padding: .5rem !important;
  }
</style>