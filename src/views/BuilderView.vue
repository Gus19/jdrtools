<script setup lang="ts">
  import {onMounted, computed, ref, watch} from "vue";
  import { uuid } from 'vue-uuid';
  import JsonEditor from 'vue3-ts-jsoneditor';
  import {useSpellsStore} from "@/stores/spells";
  import {useRacesStore} from "@/stores/races";
  import {useBackgroundsStore,classBackground} from "@/stores/backgrounds";
  import type {RaceBuilder} from "@/stores/races";
  import AccordionItem from "@/components/AccordionItem.vue";
  import {useClassesStore} from "@/stores/classes";
  const spellsStore = useSpellsStore();
  const racesStore = useRacesStore();
  const bgStore = useBackgroundsStore();
  const classesStore = useClassesStore();
  const storagekey: string = 'character-builder';
  const dev: boolean = import.meta.env.DEV;
  const CHOOSE = "Choose";

  onMounted(() => {
    spellsStore.initSpells();
    racesStore.initStore();
    bgStore.initBackgrounds();
    classesStore.initClasses();

    character.value = {
      ...defaultCharacter,
      ...getStorage()
    };
  });

  const step = ref<string>('');
  const defaultSteps = ['race'];
  const steps = ref<string[]>(defaultSteps);

  const changeStep = (name: string) => {
    if(step.value != name) {
      step.value = name;
    }
    else {
      calculStep();
    }
  }

  const calculStep = () => {
    const ss = [...defaultSteps];
    if(character.value.race.name !== null && versions.value.length > 1) {
      ss.push('version');
    }
    if(character.value.race.name !== null && character.value.race.source !== null && character.value.subrace !== null) {
      ss.push('subrace');
    }
    const a = character.value.race.name !== null;
    const b = character.value.race.source !== null;
    const c = character.value.subrace === null || character.value.subrace.name !== null;
    // todo check here if cantrip/spell/feat for race/subrace
    if(a && b && c) {
      ss.push('class');
    }
    const d = character.value.class[0].name !== null;
    if(d) {
      ss.push('background');
    }
    const e = character.value.background !== null
    if(e) {
      ss.push('todo');
    }
    // todo check here if cantrip/spell/feat for background

    step.value = ss[ss.length - 1];
    steps.value = ss;
  }

  const allLoad = computed(() => spellsStore.isLoad && racesStore.isLoad && bgStore.isLoad && character.value !== null);

  const faState = (b: boolean) => {
    return b ? 'fa-check' : 'fa-times';
  }

  const defaultCharacter = {
    uuid: uuid.v4(),
    name: null,
    level: 1,
    race: {
      name: null,
      source: null,
      version: null
    },
    subrace: null,
    class: [
      {name: null, level: 1}
    ],
    background: null,
    subclass: null
  }

  const character = ref<any>(null);
  const reset = () => {
    if(confirm("Discard all changes ?")) {
      character.value = {
        ...defaultCharacter
      };
    }
  }

  const logJson = () => {
    json.value = JSON.parse(JSON.stringify(character.value));
  }

  const saveStorage = function() {
    // if(import.meta.env.DEV) console.log('saveStorage');
    localStorage.setItem(storagekey, JSON.stringify(character.value));
    calculStep();
    logJson();
  };

  const getStorage = function() {
    return JSON.parse(localStorage.getItem(storagekey)||'{}');
  };

  watch(character, saveStorage, {deep: true});
  watch(() => character.value?.level, () => {
    if(character.value.class.length === 1) {
      character.value.class[0].level = character.value.level;
    }
  });


  const json = ref<any>(racesStore.builder);
  const show = ref<any>({
    json: true,
    character: false
  });
  const changeRace = (r: RaceBuilder) => {
    character.value.race.name = r.name;
    character.value.race.source = r.source;
    character.value.race.version = null;
    character.value.subrace = r.subrace == 0 ? null : {
      name: null,
      source: null
    }
    json.value = r
  };
  const versions = computed(() => racesStore.getRaceByName(character.value.race.name));
  const subraces = computed(() => racesStore.getSubraceByName(character.value.race.name, character.value.race.source));
  const displayVersion = (v: any) => {
    let s = ''
    if(v.lineage) s = 'Lineage'
    if("ability" in v) s = inlineAbility(v.ability);
    if(s.length) return `${s} (${v.source})`;
    return v.source;
  }
  const inlineAbility = (ability: any[]) => {
    const s: string[] = [];
    const a: any = ability[0];
    Object.keys(a).forEach((k:string) => {
      if(k == "choose") {
        let am = a[k].amount ? a[k].amount : 1;
        s.push(`other +${am}`);
      }
      else {
        s.push(`${k} ${a[k] > 0 ? `+${a[k]}` : a[k]}`);
      }
    })
    return s.join(', ');
  }
  const changeRaceSource = (v: any) => {
    character.value.race.source = v.source;
    character.value.race.version = displayVersion(v);
    character.value.subrace = subraces.value.length == 0 ? null : {
      name: null,
      source: null
    }
    json.value = v
  }
  const changeSubrace = (s: any) => {
    character.value.subrace = {
      name: s.name||'None',
      source: s.source
    };
    json.value = s
  }

  const classes = computed(() => classesStore.classes);
  const backgrounds = computed(() => bgStore.getDefaults);
</script>

<template>
  <div v-if="!allLoad">
    <p class="m-0 fst-italic">Loading all datas ...</p>
    <p class="m-0"><i class="fa" :class="faState(racesStore.isLoad)" /> Races</p>
    <p class="m-0"><i class="fa" :class="faState(spellsStore.isLoad)" /> Spells</p>
    <p class="m-0"><i class="fa" :class="faState(bgStore.isLoad)" /> Backgrounds</p>
  </div>
  <div v-else>
    <template v-if="dev">
      <div class="btn-group">
        <button class="btn btn-secondary" @click="logJson">logJson</button>
        <button class="btn btn-secondary" @click="json = versions">logVersions</button>
        <button class="btn btn-secondary" @click="json = subraces">logSubraces</button>
        <button class="btn btn-secondary" @click="changeStep('test')">changeStep {{step}}</button>
      </div>
      <hr />
    </template>

    <div class="row">
      <div class="col-12">
        <div class="d-flex align-items-center mb-2">
          <label for="name" class="col-form-label me-2 fst-italic">Name</label>
          <input type="text" v-model="character.name" class="form-control h36" />
          <label for="name" class="col-form-label ms-2 me-2 fst-italic">Level</label>
          <input type="number" min="1" max="20" v-model="character.level" class="form-control h36 w-25" />
          <button @click="reset" class="btn h36 ms-2 btn-danger">Reset</button>
        </div>
      </div>
      <div class="col-6">
        <div class="accordion">
          <AccordionItem name="race" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Race</template>
            <template v-slot:header-value>{{ character.race.name || CHOOSE }}</template>
            <template v-slot:body>
              <template v-for="b in racesStore.builder" :key="b.name">
                <span>{{b.name}}</span>
                <div class="mb-1">
                  <template v-for="(r,i) in b.races" :key="i">
                    <button type="button" class="btn me-1 mb-1" @click="changeRace(r)" :class="[
                      r.name === character.race.name ? 'active' : 'btn-outline-secondary',
                      r.version === 0 && r.subrace === 0 ? 'btn-outline-danger' : ''
                    ]" :disabled="r.version === 0 && r.subrace === 0">
                      {{r.name}}<template v-if="r.version > 1 || r.subrace > 0">*</template>
                    </button>
                  </template>
                </div>
              </template>
              <small class="fst-italic">* Version or Subrace available</small>
            </template>
          </AccordionItem>
          <AccordionItem name="version" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Version</template>
            <template v-slot:header-value>{{ character.race.version || CHOOSE }}</template>
            <template v-slot:body>
              <template v-for="(v,i) in versions" :key="i">
                <button type="button" class="btn me-1 mb-1" @click="changeRaceSource(v)" :class="[
                  v.source === character.race.source ? 'active' : 'btn-outline-secondary',
                ]">
                  {{displayVersion(v)}}
                </button>
              </template>
            </template>
          </AccordionItem>
          <AccordionItem name="subrace" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Subrace</template>
            <template v-slot:header-value>{{ character.subrace.name || CHOOSE }}</template>
            <template v-slot:body>
              <template v-for="(s,i) in subraces" :key="i">
                <button type="button" class="btn me-1 mb-1" @click="changeSubrace(s)" :class="[
                    s.name === character.subrace.name ? 'active' : 'btn-outline-secondary',
                  ]">
                  {{ s.name||'None' }}
                </button>
              </template>
            </template>
          </AccordionItem>
          <AccordionItem name="class" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>First class</template>
            <template v-slot:header-value>{{ character.class[0].name || CHOOSE }}</template>
            <template v-slot:body>
              <div>
                <template v-for="(c,i) in classes" :key="i">
                  <button type="button" class="btn me-1 mb-1" @click="character.class[0].name = c.name" :class="[
                      c.name === character.class[0].name ? 'active' : 'btn-outline-secondary',
                    ]">
                    {{ c.name }}
                  </button>
                </template>
              </div>
              <small class="fst-italic">Multiclassing is not available yet ...</small>
            </template>
          </AccordionItem>
          <AccordionItem name="background" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Background</template>
            <template v-slot:header-value>{{ character.background || CHOOSE }}</template>
            <template v-slot:body>
              <div>
                <template v-for="(b,i) in backgrounds" :key="i">
                  <button type="button" class="btn me-1 mb-1" @click="character.background = b.name" :class="[
                      b.name === character.background ? 'active' : classBackground[character.class[0].name] === b.name ? 'btn-outline-primary' : 'btn-outline-secondary',
                    ]">
                    {{ b.name }}<template v-if="classBackground[character.class[0].name] === b.name">*</template>
                  </button>
                </template>
              </div>
              <small class="fst-italic"><span class="text-primary">*</span> Quick background for {{ character.class[0].name }}</small>
            </template>
          </AccordionItem>
          <AccordionItem name="todo" :steps="steps" :step="step" @click="changeStep">
            <template v-slot:header-label>Abilities</template>
            <template v-slot:body>

            </template>
          </AccordionItem>
        </div>
      </div>
      <div class="col-6">
        <template v-if="show.character">
          <p>Race : {{ character.race.name }}</p>
          <p v-if="character.subrace">Subrace : {{ character.subrace.name }}</p>
          <p>Ability Score Increase: Strength +1, Dexterity +1, Constitution +1, Intelligence +1, Wisdom +1, Charisma +1</p>
          <p>Size: Medium</p>
          <p>Speed: 30 ft./round</p>
          <p>Vision:</p>
          <p>Languages: Common, one language of your choice</p>
          <p>Traits:</p>
        </template>
        <json-editor v-if="show.json"
            mode="text"
            v-model:json="json"
            :dark-theme="true"
            :status-bar="false"
            :main-menu-bar="false"
            class="my-editor"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .h36 {
    height: 36px;
  }
</style>