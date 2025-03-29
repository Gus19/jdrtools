<script setup lang="ts">
  import {computed, ref} from "vue";
  import FeatInfo from "@/components/FeatInfo.vue";
  import {useFeatsStore} from "@/stores/feats";
  import {CHOOSE} from "@/utils/refs";

  const props = defineProps({
    character: {type: Object, required: true},
    origin: {type: String, required: true},
    from: {type: Object, required: false}
  });
  const emits = defineEmits([
    'improve',
    'change'
  ]);
  const featsStore = useFeatsStore();

  const search = ref<any>({});
  const changeSearch = (e: any, name: string) => {
    search.value[name] = e.target.value;
  }
  const showAllFeats = ref(false);

  const feats = computed(() => {
    if(props.from) {
      return featsStore.findByBG(props.from)
    }
    else {
      return featsStore.getDefaults(props.character)
    }
  });

  const filterOptions = (name: string, from: any[]) => {
    if(!from) return [];
    const s = !search.value[name] ? "" : search.value[name].toLowerCase();
    const hasAbilities = search.value[name+'-Abilities'] ?? false;
    const hasSpells = search.value[name+'-Spells'] ?? false;

    return from.filter((f:any) =>
      (
        (f.name && f.name.toLowerCase().includes(s)) ||
        (f.shortName && f.shortName.toLowerCase().includes(s)) ||
        (f.info && "string" == typeof f.info && f.info.toLowerCase().includes(s)) ||
        (f.entries && (JSON.stringify(f.entries)).toLowerCase().includes(s)) ||
        (f.prerequisite && f.prerequisite.join(' ').toLowerCase().includes(s))
      )
      &&
      (!hasAbilities || f.hasAbility)
      &&
      (!hasSpells || f.hasSpells)
    );
  }

  const isFeatsCheck = (origin: string, name: string) => {
    const level = props.character.level;
    return props.character.feats.find((f:any) => f.origin == origin && f.level == level && f.name == name) !== undefined;
  }
  const isFeatsDisabled = (key:string, name: string) => {
    if(isFeatsCheck(key, name)) return false;
    return props.character.feats.find((f: any) => f.name == name) !== undefined;
  }
</script>

<template>
  <div class="m-0 d-flex align-items-center mb-2">
    <span class="fw-bold">{{ CHOOSE }}</span>
    <input type="text" class="form-control form-control-sm ms-2 flex-1" :value="search['feat']" @input="changeSearch($event, 'feat')" />
    <div class="ms-2">
      <input type="checkbox" class="form-check-input" value="1" v-model="search['feat-Abilities']">
      <label class="form-check-label ms-1">Abilities</label>
    </div>
    <div class="ms-2">
      <input type="checkbox" class="form-check-input" v-model="search['feat-Spells']">
      <label class="form-check-label ms-1">Spells</label>
    </div>
    <div class="ms-2">
      <i class="fa-regular" :class="showAllFeats ? 'fa-eye-slash' : 'fa-eye'" @click="showAllFeats = !showAllFeats" />
    </div>
  </div>
  <template v-for="o in filterOptions('feat', feats)" :key="o.name">
    <div v-if="!isFeatsDisabled(origin, o.name)" class="form-check pb-1">
      <input class="form-check-input" type="radio" :value="o.name"
             :checked="isFeatsCheck(origin, o.name)"
             @click="emits('change', $event, origin)" />
      <FeatInfo :feat="o" :selected="isFeatsCheck(origin, o.name)" :open="showAllFeats"
                :ability-selected="character.abilities.improvments.find((ip:any) => ip.origin=='feat' && ip.level==1)?.ability"
                @improve="(ability) => emits('improve', ability, 'feat', o.name)"
      />
    </div>
  </template>
</template>

<style scoped>

</style>