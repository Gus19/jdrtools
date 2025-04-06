<template>
  <div class="accordion-item" v-if="curStep" ref="accordion">
    <h2 class="accordion-header">
      <button class="accordion-button d-flex w-100" type="button" :class="step !== name && 'collapsed'" @click="emits('click', name)"><!--@click="step = name"-->
        <em>
          <i class="fa-regular me-1" :class="valid ? 'fa-circle-check' : 'fa-circle-xmark'" />
          <slot name="header-label"></slot>
        </em>
        <span class="flex-grow-1 text-center fw-bold">
          <slot name="header-value"></slot>
        </span>
      </button>
    </h2>
    <div class="accordion-collapse collapse" :class="step === name && 'show'">
      <div class="accordion-body">
        <fieldset :disabled="disabled || curStep?.disabled">
          <slot name="body"></slot>
        </fieldset>
        <slot name="buttons">
          <button v-if="manualStep" type="button" class="mt-2 btn btn-sm btn-outline-primary w-100" @click="emits('toggleManualStep')">
            <i class="fa-regular me-1" :class="!manualStep.valid ? 'fa-circle-check' : 'fa-circle-xmark'" />
            Mark as <template v-if="!manualStep.valid">valid</template><template v-else>invalid</template>
          </button>
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
  disabled: Boolean
})
const emits = defineEmits([
  'click',
  'toggleManualStep',
])
const curStep: any = computed(() => props.steps.find((s:any) => s.name == props.name));
const valid = computed((): boolean => {
  const a: any = props.steps.find((s: any) => s.name === props.name);
  if(a) return a.valid
  return false;
})
const accordion = ref<HTMLInputElement | null>(null);
watch(() => props.step, (next, prev) => {
  if(next != prev && next == props.name && accordion.value != null) {
    accordion.value.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"});
  }
});
watch(() => accordion.value, (next, prev) => {
  if(next != prev && next != null && props.step == props.name) {
    next.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"});
  }
});
const manualStep = computed(() => props.manualSteps && props.manualSteps.find((s:any) => s.step == props.step));
</script>

<style scoped>
  em {
    width: 160px;
  }
  .accordion-button, .accordion-body {
    padding: .5rem !important;
  }
</style>