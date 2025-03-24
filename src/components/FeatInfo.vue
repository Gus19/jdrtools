<script setup lang="ts">
  import {type PropType, ref, watch} from "vue";
  import {S, inlineAbility, featEntries} from "@/utils/refs";
  import type {Feat} from "@/stores/feats";
  const props = defineProps({
    feat: {type: Object as PropType<Feat>, required: true},
    choice: {type: Boolean, default: true},
    open: {type: Boolean, default: false},
    selected: {type: Boolean, default: false},
    abilitySelected: {type: String, required: false}
  });
  const open = ref(props.open || props.selected);
  watch(() => props.open, n => {
    open.value = n;
  })

  const emits = defineEmits([
    'improve'
  ]);
</script>

<template>
  <div class="d-flex" :class="choice ? 'flex-column' : 'justify-content-between'">
    <div>
      <label v-if="choice" class="form-check-label">{{ feat.name }}</label>
      <label v-else :title="featEntries(feat)" v-tooltip class="form-check-label">{{ feat.name }}</label>
      <label class="small ms-1" v-if="feat.prerequisite && feat.prerequisite.length > 0">
        ({{feat.prerequisite.join(' or ')}})
      </label>
      <label v-if="choice" class="ms-1">
        <i class="fa-regular" :class="open ? 'fa-eye-slash' : 'fa-eye'" @click="open = !open" />
      </label>
    </div>
    <template v-if="feat.ability">
      <p v-if="abilitySelected && !choice">{{abilitySelected.toUpperCase()}} +1</p>
      <p v-else-if="!selected || !feat.ability[0].choose">{{inlineAbility(feat.ability)}}</p>
      <div v-else>
        <div class="btn-group btn-group-sm pb-1">
          <button v-for="c in feat.ability[0].choose.from" :key="c" class="btn" :class="c == abilitySelected ? 'btn-primary' : 'btn-outline-secondary'"
                  @click="emits('improve', c)"
          >
            {{ c.toUpperCase() }} +1
          </button>
        </div>
      </div>
    </template>
  </div>

  <slot></slot>
  <div v-if="open">
    <template v-for="(e,i) in feat.entries" :key="i">
      <template v-if="e.type == 'list'">
        <template v-for="(item,j) in e.items" :key="j">
          <p v-if="item.type == 'item'">
            - <b>{{item.name}}</b>: {{S(item.entries.join(' '))}}
          </p>
          <p v-else>
            - {{S(item)}}
          </p>
        </template>

      </template>
      <template v-if="e.type == 'entries'">
        <p><b>{{e.name}}</b>: {{S(e.entries.join(' '))}}</p>
      </template>
      <p v-else>{{S(e)}}</p>
    </template>
  </div>
</template>

<style scoped>

</style>