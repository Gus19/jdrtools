<script setup lang="ts">
import {computed, ref, watch} from "vue";
  import {findEquipmentType,useItemsStore} from "@/stores/items";
  import {cfl} from "@/utils/refs";
  import ItemInfo from "@/components/ItemInfo.vue";
  const props = defineProps({
    type: {type: String, required: true},
    includeSpecial: {type: Boolean, default: false},
    current: {type: Object, required: false},
    label: {type: Boolean, default: true},
    hasQuantity: {type: Boolean, default: false},
    hasDelete: {type: Boolean, default: false},
    maxValue: {type: Number, required: false},
    minValue: {type: Number, required: false},
    profs: {type: Object, required: false}
  });
  const emits = defineEmits([
    'select',
    'delete',
    'quantity'
  ]);

  const itemsStore = useItemsStore();
  const et = computed(() => {
    return findEquipmentType(props.type);
  });
  const items = computed(() => {
    if(!et.value || !show.value) return null;
    return itemsStore.search(et.value.search, props.includeSpecial, props.maxValue, props.minValue);
  })

  const search = ref("");
  const show = ref(false);
  const newItem = ref(props.current?.key);
  const quantity = ref(props.current?.quantity || 1);

  const itemRefs = ref([])
  watch(search, () => {
    itemRefs.value.forEach((it:any) => {
      if(it.textContent?.toLowerCase().includes(search.value.toLowerCase())) {
        it.classList.remove('d-none');
      }
      else {
        it.classList.add('d-none');
      }
    });
  });
  watch(show, (nv) => {
    if(!nv) {
      search.value = "";
    }
  });
  const selectNewItem = () => {
    emits('select', newItem.value, quantity.value);
    show.value = false;
  }
</script>

<template>
  <div class="item-search" v-if="et">
    <label v-if="label" class="form-label">{{ cfl(et.label) }}</label>
    <button type="button" class="btn btn-sm btn-primary" @click="show = true">
      <i class="fa fa-solid fa-search" />
    </button>
    <input v-if="hasQuantity" type="number" class="form-control form-control-sm ms-2" min="1" step="1" v-model="quantity" style="width: 60px;" @change="emits('quantity', quantity)" />
    <div class="flex-grow-1 mx-2">
      <ItemInfo v-if="current && current.key" :item="current.key" :tooltip="true" :profs="profs" />
    </div>
    <button v-if="hasDelete" type="button" class="btn btn-sm btn-outline-danger" @click="emits('delete')">
      <i class="fa fa-solid fa-trash-alt" />
    </button>

    <div class="modal fade modal-lg" :class="show ? 'show': ''" :style="show ? 'display: block' : ''">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <p class="m-0 pb-1 text-center">{{ type != 'all' ? cfl(et.label) : 'Choose an item' }}</p>
            <input type="text" class="form-control form-control-sm mb-1" placeholder="Search" v-model="search" />

            <div class="overflow">
              <div v-for="it in items" class="form-check pb-1" :key="it" ref="itemRefs">
                <input class="form-check-input" type="radio" :value="it" v-model="newItem" />
                <label class="form-check-label w-100" @click="newItem = it">
                  <ItemInfo :item="it" :tooltip="false" :profs="profs" />
                </label>
              </div>
            </div>

            <div class="btn-group-sm mw mt-2 text-center">
              <button type="button" class="btn btn-outline-secondary" @click="show= false;">
                <i class="fa-solid fa-xmark" />
                Close
              </button>
              <button type="button" class="btn btn-success ms-2" :disabled="!newItem" @click="selectNewItem">
                <i class="fa-solid fa-check"></i>
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="show" class="modal-backdrop fade show"></div>

  </div>

</template>

<style scoped>
  .item-search {
    display: flex;
    align-items: center;
    .form-label {
      width: 175px;
    }
  }
  .form-label {
    margin: 0;
  }
  .item-search+.item-search {
    margin-top: 0.5rem;
  }
  .overflow {
    overflow: auto;
    max-height: 60vh;
  }
</style>