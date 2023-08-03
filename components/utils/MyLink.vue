<template>
  <NuxtLink :to="to" class="hover-link no-deco">
    <slot></slot>
    <ChevronRight class="icon" />
  </NuxtLink>
</template>

<script>
import ChevronRight from "@/assets/sprite/svg/chevron-right.svg?inline";
export default {
  name: "MyLink",
  components: {
    ChevronRight,
  },
  props: {
    to: String,
  },
};
</script>

<style lang="scss" scoped>
.hover-link {
  padding: 5px 10px;
  transform: translate(-10px);
  text-decoration: none;
  color: unset;
  border-radius: 5px;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  gap: 5px;
  .icon {
    height: 1em;
    width: 1em;
    transition: padding-left 0.2s ease;
  }
  &:hover {
    background: #00000022;
    .icon {
      padding-left: 5px;
    }
  }
  &:active {
    background: #00000042;
    .icon {
      padding-left: 2px;
    }
  }
}

/* .hover-link::after {
    content: '↗️';
    display: inline-block;
    transform: translateY(2px);
    margin-left: 3px;
} */
</style>