<template>
  <div class="intro">
    <h1 class="intro-text">
      <span class="name">{{ title }} </span>
    </h1>
  </div>
</template>

<script>
export default {
  name: "Intro",
  props: {
    title: String
  }
};
</script>

<style scoped>
.intro-text {
  font-size: 40px;
  font-weight: 800;
  font-family: var(--font-sans);
}
</style>
