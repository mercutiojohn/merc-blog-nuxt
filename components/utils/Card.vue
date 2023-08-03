<template>
  <div
    :class="{
      card: true,
      'card-no-bg': cardNoBg,
      solid: solid,
      plain: plain,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "GridLayoutCard",
  components: {},
  props: {
    cardMain: {
      type: Boolean,
      default: false,
    },
    cardNoBg: {
      type: Boolean,
      default: false,
    },
    solid: {
      type: Boolean,
      default: false,
    },
    plain: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
.card {
  /* padding: 20px; */
  box-sizing: border-box;
  background: #fff;
  border-radius: 20px;
  overflow-x: hidden;
  transition: box-shadow 0.4s ease, transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  /* overflow-y: scroll; */
  cursor: pointer;
  border: 1px solid #eee;
  /* border-top: 3px solid #efefef; */
  box-shadow: var(--shadow-elevation-medium);
  &.plain {
    box-shadow: unset;
    transition: background .2s ease;
  }
  &.solid {
    border: 1px solid transparent;
    background: #f1f1f1;
    transition: background .2s ease;
  }

  &:not(.solid):not(.plain):hover {
    z-index: 10;
    transform: translateY(-3px);
    /* border: 5px solid linear-gradient(#000,#fff); */
    box-shadow: var(--shadow-elevation-high);
  }
  &:not(.solid):not(.plain):active {
    transform: translateY(-1px);
    box-shadow: var(--shadow-elevation-low);
  }

  &.solid:hover,
  &.plain:hover {
    background: #e8e8e8;
  }
  &.solid:active,
  &.plain:active {
    background: #dfdfdf;
  }
}
.card::-webkit-scrollbar {
  width: 5px;
  /* background: #000; */
}
.card::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: var(--bg-color);
}
.card-no-bg {
  background: transparent;
}
</style>