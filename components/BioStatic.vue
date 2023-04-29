<template>
  <StaticContent :pageData="content" class="bio-content" />
</template>
<script>
import StaticContent from "@/components/utils/StaticContent";
export default {
  name: "Bio",
  components: { StaticContent },
  props: {
    content: Object
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
