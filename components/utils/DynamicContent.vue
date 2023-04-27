<template>
  <div class="content" v-if="!loading">
    <vue-notion-render :unofficial="true" :data="pageData" />
  </div>
  <loading-tip v-else />
</template>
<script>
import VueNotionRender from "vue-notion-render";
import LoadingTip from "@/components/utils/LoadingTip";
export default {
  name: "DynamicContent",
  components: { LoadingTip, VueNotionRender },
  data() {
    return {
      pageData: {},
      loading: true
    };
  },
  props: {
    pageId: String
  },
  methods: {
    getPageData(page_id, callback) {
      this.$axios
        .get("https://blogapi.mercutio.club/v1/page/" + page_id)
        .then(callback);
    }
  },
  created() {
    try {
      this.getPageData(this.pageId, response => {
        console.log(response.data);
        this.pageData = response.data;
        this.loading = false;
      });
    } catch (err) {
      console.log(err);
    }
  }
};
</script>
<style scoped>
.content {
  max-width: 900px;
}
</style>
