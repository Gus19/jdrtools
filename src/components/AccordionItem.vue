<template>
  <div class="accordion-item" v-if="steps.map((s:any) => s.name).includes(name)" ref="accordion">
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
        <slot name="buttons">

          <button v-if="manualStep" type="button" class="mt-2 btn btn-sm btn-outline-primary w-100" @click="emits('toggleManualStep')">
            <i class="fa-regular me-1" :class="!manualStep.valid ? 'fa-circle-check' : 'fa-circle-xmark'" />
            Mark as <template v-if="!manualStep.valid">valid</template><template v-else>invalid</template>
          </button>
<!--          <div class="btn-group w-100 mt-1">-->
<!--            <button type="button" class="btn btn-sm btn-prevary" v-if="hasPrev" @click="emits('prevStep')">Prev</button>&lt;!&ndash;@click="prevStep"&ndash;&gt;-->
<!--            <button type="button" class="btn btn-sm btn-success"  @click="emits('nextStep')" :disabled="!steps.find(s => s.name === step).valid">Next</button>&lt;!&ndash;click="nextStep"&ndash;&gt;-->
<!--          </div>-->
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, type PropType, ref, watch} from "vue";
const props = defineProps({
  name: { type: String, required: true },
  step: { type: String, required: true },
  steps: {type: Array, required: true},
  manualSteps: {type: Array as PropType<any>, required: false},
})
const emits = defineEmits([
  'click',
  'toggleManualStep',
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
const accordion = ref<HTMLInputElement | null>(null);
watch(() => props.step, (next, prev) => {
  if(next != prev && next == props.name && accordion.value != null) {
    accordion.value.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"});
    // console.log("Watch props.step function called with args:", next, prev);
  }
});
const manualStep = computed(() => props.manualSteps && props.manualSteps.find((s:any) => s.step == props.step));
</script>

<style scoped>
  em {
    width: 155px;
  }
  .accordion-button, .accordion-body {
    padding: .5rem !important;
  }
</style>