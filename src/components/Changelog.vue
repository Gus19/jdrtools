<template>
  <div class="d-flex justify-content-between">
    <b>
      V<slot name="version"></slot>
    </b>
    <label>
      <slot name="date"></slot>
    </label>
  </div>
  <ul>
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "Changelog"
}
</script>

<style scoped>

</style>