<script setup lang="ts">
  import {computed, type PropType, ref, watch} from "vue";
  import {castingRange, castingTime, messageSpell, S, Schools, spellDetails, spellDuration} from "@/utils/refs";
  import type {SpellInfo} from "@/stores/spells";
  const props = defineProps({
    spell: {type: Object as PropType<SpellInfo>, required: true},
    open: {type: Boolean, default: false},
  });
  const open = ref(props.open);
  watch(() => props.open, n => {
    open.value = n;
  })

  const components = computed(() => {
    const comps = [];
    const s = props.spell;
    if(s.components.v) comps.push('V');
    if(s.components.s) comps.push('S');
    if(s.components.m) comps.push('M');
    return comps;
  })
  const school = computed(() => Schools[props.spell.school])
  const time = computed(() => props.spell.time[0])
</script>

<template>
  <div class="d-flex justify-content-between">
    <label class="form-check-label flex-grow-1">{{ spell.name }}</label>
    <span style="width: 75px">{{ castingTime(spell, true)}}</span>
    <span class="text-center" style="width: 25px">{{spell.duration[0].concentration ? 'C.' : ''}}</span>
    <span class="text-center" style="width: 25px">{{spell.meta?.ritual ? 'R.' : ''}}</span>
    <label style="width: 25px" class="text-center form-check-label">
      <i class="fa-regular" :class="open ? 'fa-eye-slash' : 'fa-eye'" @click="open = !open" />
    </label>
  </div>
  <slot></slot>
  <div v-if="open" style="white-space: pre-line">
    <div class="d-flex">
      <p class="flex-1">School: <span :title="school.info" v-tooltip>{{school.name}}</span></p>
      <p v-if="spell.meta?.ritual" class="flex-1">Ritual</p>
    </div>
    <div class="d-flex">
      <p class="flex-1">Casting Time:
        <span v-if="time.condition" :title="time.condition" v-tooltip>{{time.number}} {{time.unit}}</span>
        <span v-else>{{time.number}} {{time.unit}}</span>
      </p>
      <p class="flex-1">{{castingRange(spell)}}</p>
    </div>
    <div class="d-flex">
      <p class="flex-1"> Components:
        <template v-for="(c,i) in components" :key="c">
          <template v-if="i>0">,&#160;</template>
          <span v-if="c == 'M'" :title="spell.components.m" v-tooltip>{{ c }}</span>
          <span v-else>{{ c }}</span>
        </template>
      </p>
      <p class="flex-1">{{spellDuration(spell)}}</p>
    </div>
    <p>
      {{ spellDetails(spell) }}
    </p>
  </div>
</template>

<style scoped>

</style>