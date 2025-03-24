<script setup lang="ts">
  import {computed} from "vue";
  import Money from "@/components/Money.vue";
  import {equipmentType, useItemsStore} from "@/stores/items";
  import {calculMoney, cfl, damageByKey, DS, S} from "@/utils/refs";
  const itemsStore = useItemsStore();
  const props = defineProps({
    item: {type: [String, Object], required: true},
  });
  const toString = computed(() => {
    if(typeof props.item == "object") {
      let txt = [];
      const it = props.item;
      if(it.quantity) {
        txt.push(props.item.quantity);
      }
      if(it.equipmentType) {
        txt.push(cfl(equipmentType.find(et => it.equipmentType == et.key)?.label || "Error"));
      }
      else if(it.displayName) {
        txt.push(cfl(it.displayName));
      }
      else if(it.special) {
        txt.push(cfl(it.special));
      }
      else if(it.item) {
        const item = itemsStore.findByKey(it.item);
        if(item) txt.push(item.name);
        else txt.push(cfl(it.item.split('|')[0]));
      }
      return txt.join(" ");
    }

    const item = itemsStore.findByKey(props.item);
    if(item) return item.name;
    return cfl(props.item.split('|')[0]);
  })

  const title = computed(() => {
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

    const item = itemsStore.findByKey(key);
    if(!item) return undefined;
    const d = [];

    if(item.weapon && item.weaponCategory) {
      d.push(`${cfl(item.weaponCategory)} ${itemsStore.findItemType(item.type)}`);
      d.push(`${item.dmg1} ${item.dmgType && damageByKey(item.dmgType)?.name}`);
    }
    else {
      d.push(itemsStore.findItemType(item.type));
    }

    if(item.armor) {
      // d.push(itemsStore.findItemType(item.type));
      let dex = ""
      if(item.type == "LA") dex = " + Dex";
      if(item.type == "MA") dex = " + Dex (max 2)";
      d.push(`AC ${item.ac}${dex}`);
      if(item.stealth) {
        d.push(`Disadvantage on Stealth checks`);
      }
      if(item.strength) {
        d.push(`If Strength is lower than 13 the speed is reduced by 10 feet`)
      }
    }

    if(item.property) {
      d.push(itemsStore.findItemProperties(item));
    }

    if(item.packContents) {
      let list = item.entries?.find(e => e.type == 'list');
      if(list) d.push(S(list.items.join(', ')));
    }

    if(item.value) {
      const m = calculMoney(item.value);
      const w = item.weight;
      const sm = [];
      if(m.gp) sm.push(`${m.gp} gp`);
      if(m.sp) sm.push(`${m.sp} sp`);
      if(m.cp) sm.push(`${m.cp} cp`);
      if(w) sm.push(`${w} lb.`);
      d.push(sm.join(', '));
    }

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
  <span :title="title" v-tooltip="title != null" data-bs-placement="right">
    {{ toString }}<Money v-if="value" :value="value" />
  </span>
</template>

<style scoped>

</style>