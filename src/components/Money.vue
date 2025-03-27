<script setup lang="ts">
  import {computed} from "vue";
  import {calculMoney} from "@/utils/refs";

  const props = defineProps({
    value: {type: Number, required: true},
    spaces: {type: Boolean, default: false},
  });

  const money = computed(() => calculMoney(props.value));
</script>

<template>
  <template v-if="spaces">&#160;</template>
  <span class="money gp" v-if="money.gp">{{ money.gp }} gp</span>
  <span class="money sp" v-if="money.sp">{{ money.sp }} sp</span>
  <span class="money cp" v-if="money.cp">{{ money.cp }} cp</span>
  <b class="money" v-if="value == 0">0</b>
</template>

<style scoped></style>