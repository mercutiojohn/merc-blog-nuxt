<template>
  <div
    class="block"
    :style="
      horScroll ? 'overflow-x:scroll;' : '' + title ? 'margin:0 0 10px;' : ''
    "
  >
    <h2 v-if="title">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Block",
  props: {
    title: {
      type: String,
      default: ""
    },
    horScroll: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  /* overflow: hidden; */
  margin: 10px 0;
}
</style>
