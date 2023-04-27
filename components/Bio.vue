<template>
  <DynamicContent :pageId="pageId" class="bio-content" />
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
.bio-content {
  font-weight: 500;
}
@media screen and (max-width: 700px) {
  .bio-content {
    width: 100%;
  }
}
::v-deep.content.bio-content > section > div > div > p {
  margin: 3px 0;
}
</style>
