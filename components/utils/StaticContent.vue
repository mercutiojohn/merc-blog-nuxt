<template>
  <div class="content">
    <vue-notion-render :unofficial="true" :data="pageData" />
  </div>
</template>
<script>
import VueNotionRender from "vue-notion-render";
export default {
  name: "StaticContent",
  components: { VueNotionRender },
  props: {
    pageData: Object
  },
};
</script>
<style scoped>
.content {
  max-width: 900px;
}
</style>
