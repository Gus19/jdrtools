<script setup lang="ts">
  import {computed} from "vue";
  import {calculMoney} from "@/utils/refs";

  const props = defineProps({
    value: {type: Number, required: true},
  });

  const money = computed(() => calculMoney(props.value));
</script>

<template>
  <span class="gp" v-if="money.gp">&#160;{{ money.gp }} gp</span>
  <span class="sp" v-if="money.sp">&#160;{{ money.sp }} sp</span>
  <span class="cp" v-if="money.cp">&#160;{{ money.cp }} cp</span>
</template>

<style scoped></style>