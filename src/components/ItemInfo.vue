<script setup lang="ts">
  import {computed, ref, watch} from "vue";
  import Money from "@/components/Money.vue";
  import {findEquipmentType, useItemsStore} from "@/stores/items";
  import {cfl, damageByKey, S} from "@/utils/refs";
  const itemsStore = useItemsStore();
  const props = defineProps({
    item: {type: [String, Object], required: true},
    tooltip: {type: Boolean, default: true},
    profs: {type: Object, required: false}
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
        let fet = findEquipmentType(it.equipmentType);
        txt.push(cfl(fet?.label || "Error"));
        if(!fet) {
          console.error("Missing equipmentType", it.equipmentType);
        }
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
    const it = itemBase.value;
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
    // else if(d.length == 1 && it.entries) {
    //   d.push(S(it.entries.find((e:any) => "string" == typeof e)));
    // }

    return d.join('\n');
  });

  const value = computed(() => {
    if(typeof props.item == "object") {
      if(props.item.containsValue) return props.item.containsValue;
    }
    return;
  })

  const hasProf = computed(() => {
    if(!itemBase.value) return true;
    if(!props.profs) return true;

    const pr = props.profs
    const it = itemBase.value;

    if(it.armor) {
      let prof = pr.armor.find((p:any) => itemsStore.findItemType(it.type)?.toLowerCase().includes(p.name.toLowerCase()));
      return prof !== undefined;
    }
    if(it.weapon) {
      let prof = pr.weapon.find((p:any) => p.name == it.weaponCategory || p.name.toLowerCase() == name.value.toLowerCase());
      return prof !== undefined;
    }
    if(it.tool) {
      let prof = pr.tools.find((p:any) => p.name.toLowerCase() == name.value.toLowerCase());
      return prof !== undefined;
    }
    // if(['SHP','VEH'].includes(it.type)) {
    //   let prof = pr.tools.find((p:any) => itemsStore.findItemType(it.type)?.toLowerCase().includes(p.name.toLowerCase()));
    //   return prof !== undefined;
    // }
    return true;
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
  <i class="fa-solid fa-triangle-exclamation text-warning ps-2" v-if="!hasProf" v-tooltip title="Without proficiency" data-bs-placement="right" />
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