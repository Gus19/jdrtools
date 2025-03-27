<script setup lang="ts">
  import {computed, ref, watch} from "vue";
  import Money from "@/components/Money.vue";
  import {findEquipmentType, useItemsStore} from "@/stores/items";
  import {cfl, damageByKey, S} from "@/utils/refs";
  const itemsStore = useItemsStore();
  const props = defineProps({
    item: {type: [String, Object], required: true},
    tooltip: {type: Boolean, default: true}
  });

  const info = ref<HTMLInputElement | null>(null);
  watch(info, (nv) => {
    if(nv) {
      title.value = nv.textContent;
    }
  });
  const title = ref<any>(null);

  const name = computed(() => {
    if(typeof props.item == "object") {
      let txt = [];
      const it = props.item;
      if(it.quantity) {
        txt.push(props.item.quantity);
      }
      if(it.equipmentType) {
        txt.push(cfl(findEquipmentType(it.equipmentType)?.label || "Error"));
      }
      else if(it.displayName) {
        txt.push(cfl(it.displayName));
      }
      else if(it.special) {
        txt.push(cfl(it.special));
      }
      else if(it.item) {
        if(itemBase.value) txt.push(itemBase.value.name);
        else txt.push(cfl(it.item.split('|')[0]));
      }
      return txt.join(" ");
    }

    if(itemBase.value) return itemBase.value.name;
    return cfl(props.item.split('|')[0]);
  })

  const itemBase = computed(() => {
    let key;
    if(typeof props.item == "object") {
      if(props.item.item) {
        key = props.item.item;
      }
      else {
        return;
      }
    }
    else {
      key = props.item;
    }

    return itemsStore.findByKey(key);
  })

  const titleTxt = computed(() => {
    if(!itemBase.value) return undefined;
    let it = itemBase.value;
    const d = [];
    if(it.weapon && it.weaponCategory) {
      d.push(`${cfl(it.weaponCategory)} ${itemsStore.findItemType(it.type)}`);
      d.push(`${it.dmg1} ${it.dmgType && damageByKey(it.dmgType)?.name}`);
    }
    else {
      d.push(itemsStore.findItemType(it.type));
    }

    if(it.armor) {
      let dex = ""
      if(it.type == "LA") dex = " + Dex";
      if(it.type == "MA") dex = " + Dex (max 2)";
      d.push(`AC ${it.ac}${dex}`);
      if(it.stealth) {
        d.push(`Disadvantage on Stealth checks`);
      }
      if(it.strength) {
        d.push(`If Strength is lower than 13 the speed is reduced by 10 feet`)
      }
    }

    if(it.property) {
      d.push(itemsStore.findItemProperties(it));
    }

    if(it.packContents) {
      let list = it.entries?.find(e => e.type == 'list');
      if(list) d.push(S(list.items.join(', ')));
    }

    // if(it.value) {
    //   const m = calculMoney(it.value);
    //   const w = it.weight;
    //   const sm = [];
    //   if(m.gp) sm.push(`${m.gp} gp`);
    //   if(m.sp) sm.push(`${m.sp} sp`);
    //   if(m.cp) sm.push(`${m.cp} cp`);
    //   if(w) sm.push(`${w} lb.`);
    //   d.push(sm.join(', '));
    // }

    return d.join('\n');
  });

  const value = computed(() => {
    if(typeof props.item == "object") {
      if(props.item.containsValue) return props.item.containsValue;
    }
    return;
  })
</script>

<template>
  <template v-if="tooltip && title">
    <span :title="title" v-tooltip data-bs-placement="right">
      {{ name }}<Money v-if="value" :value="value" spaces />
    </span>
  </template>
  <template v-else>
    <span>
      {{ name }}<Money v-if="value" :value="value" spaces />
    </span>
  </template>
  <p ref="info" v-if="itemBase" :class="tooltip ? 'd-none' : ''">
    {{ titleTxt }}
    <template v-if="titleTxt && (itemBase.value || itemBase.weight)">{{ `\n` }}</template>
    <Money v-if="itemBase.value" :value="itemBase.value" />
    <template v-if="itemBase.value && itemBase.weight">, </template>
    <b v-if="itemBase.weight">{{ itemBase.weight }} lb.</b>
  </p>
</template>

<style scoped>

</style>