<template>
  <DynamicContent :pageId="pageId" class="test" />
</template>
<script>
import DynamicContent from "@/components/utils/DynamicContent";
export default {
  name: "Bio",
  components: { DynamicContent },
  props: {
    pageId: String
  }
};
</script>
<style scoped>
@media screen and (max-width: 700px) {
  .test {
    width: 100%;
  }
}
::v-deep.content.test > section > div > div > p {
  margin: 3px 0;
}
</style>
