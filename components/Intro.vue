<template>
  <div class="intro">
    <h1 class="intro-text">
      Hi, I'm <span class="name">{{ name }} </span>.
    </h1>
  </div>
</template>

<script>
export default {
  name: "Intro",
  props: {
    name: String
  }
};
</script>

<style scoped>
.intro-text {
  font-size: 40px;
  font-weight: 800;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
