<script setup lang="ts">
  import {computed} from "vue";
  import {type Class, useClassesStore} from "@/stores/classes";
  import CharacterInfo from "@/components/CharacterInfo.vue";
  import {inlineSkill, S} from "@/utils/refs";
  const props = defineProps({
    name: { type: String, required: true },
    subclass: { type: String, required: false, default: null },
    level: {type: Number, required: true},
    isFirst: Boolean,
    validAbilities: Boolean,
    cantrips: {type: Number, required: false},
    spellsKnown: {type: Number, required: false},
    spellsPrepared: {type: Number, required: false}
  })
  const classesStore = useClassesStore();
  const classes = computed(() => classesStore.getDefaults);
  const cl = computed(() => classes.value.find((c:Class) => c.name === props.name));
  const requirements = computed(() => !props.isFirst && classesStore.getRequirements(props.name));
  const proficienciesGained = computed(() => !props.isFirst && cl.value && cl.value.multiclassing.proficienciesGained)
</script>

<template>
  <template v-if="cl">
    <template v-if="isFirst">
      <CharacterInfo>
        <template v-slot:label>Hit Point Die:</template>
        D{{cl.hd.faces}}
      </CharacterInfo>
      <CharacterInfo v-if="!validAbilities">
        <template v-slot:label>Saving Throw Proficiencies:</template>
        <template v-for="(s,i) in cl.proficiency">
          <template v-if="i>0">, </template>
          {{s.toUpperCase()}}
        </template>
      </CharacterInfo>
      <CharacterInfo>
        <template v-slot:label>Skill Proficiencies:</template>
        <slot name="skills">{{ inlineSkill(cl.startingProficiencies.skills, true) }}</slot>
      </CharacterInfo>
      <slot name="expertises"></slot>
      <CharacterInfo v-if="cl.startingProficiencies.armor">
        <template v-slot:label>Armor Training:</template>
        {{ cl.startingProficiencies.armor.map((t:any) => t.proficiency ? t.proficiency : S(t)).join(', ') }}
      </CharacterInfo>
      <CharacterInfo v-if="cl.startingProficiencies.weapons">
        <template v-slot:label>Weapon Proficiencies:</template>
        {{ cl.startingProficiencies.weapons.map((t:any) => t.proficiency ? t.proficiency : S(t)).join(', ') }}
      </CharacterInfo>
      <CharacterInfo v-if="cl.startingProficiencies.tools">
        <template v-slot:label>Tool Proficiencies:</template>
        {{ cl.startingProficiencies.tools.map((t:any) => S(t)).join(', ') }}
      </CharacterInfo>

      <div class="d-flex">
        <CharacterInfo v-if="cantrips">
          <template v-slot:label>Cantrips known:</template>
          {{cantrips}}
        </CharacterInfo>
        <CharacterInfo v-if="spellsKnown">
          <template v-slot:label>Spells known:</template>
          {{spellsKnown}}
        </CharacterInfo>
        <CharacterInfo v-if="spellsPrepared">
          <template v-slot:label>Spells prepared:</template>
          {{spellsPrepared}}
        </CharacterInfo>
      </div>
<!--      <CharacterInfo>-->
<!--        <template v-slot:label>Spells known:</template>-->
<!--        4 (<span title="spell1" v-tooltip>spell1</span>, <span title="spell1" v-tooltip>spell2</span>, <span title="spell1" v-tooltip>spell3</span>, <span title="spell1" v-tooltip>spell4</span>)-->
<!--      </CharacterInfo>-->
    </template>
    <template v-else-if="cl.multiclassing">
      <div class="d-flex">
        <CharacterInfo v-if="requirements">
          <template v-slot:label>Requirements:</template>
          {{ Object.keys(requirements.abilities).map((a:any) => `${a.toUpperCase()} ${requirements.abilities[a]}`).join(requirements.or ? ' or ' : ' and ') }}
        </CharacterInfo>
        <CharacterInfo>
          <template v-slot:label>Hit Point Die:</template>
          D{{cl.hd.faces}}
        </CharacterInfo>
      </div>
      <template v-if="proficienciesGained">
        <CharacterInfo v-if="proficienciesGained.skills">
          <template v-slot:label>Skill Proficiencies:</template>
          {{ inlineSkill(proficienciesGained.skills, true) }}
        </CharacterInfo>
        <CharacterInfo v-if="proficienciesGained.armor">
          <template v-slot:label>Armor Training:</template>
          {{ proficienciesGained.armor.map((t:any) => t.proficiency ? t.proficiency : S(t)).join(', ') }}
        </CharacterInfo>
        <CharacterInfo v-if="proficienciesGained.weapons">
          <template v-slot:label>Weapon Proficiencies:</template>
          {{ proficienciesGained.weapons.map((t:any) => S(t)).join(', ') }}
        </CharacterInfo>
        <CharacterInfo v-if="proficienciesGained.tools">
          <template v-slot:label>Tool Proficiencies:</template>
          {{ proficienciesGained.tools.map((t:any) => S(t)).join(', ') }}
        </CharacterInfo>
      </template>
    </template>
    <template v-else>
      Error ...
    </template>
    <slot></slot>
  </template>
</template>

<style scoped>
</style>