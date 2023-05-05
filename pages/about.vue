<template>
  <div class="about common-page">
    <h1 class="title">关于我</h1>
    <!-- <div v-for="(item,index) in text" :key="index">
      <span class="title">{{item}}</span>
    </div> -->
    <div class="content">
      <StaticContent :pageData="aboutContent" class="bio-content" />
    </div>
    <!-- <Block title="相册">
      <Gallery :tableId="workContentId" style="width:100%" />
    </Block>
    <Block title="最近在看的书">
      <Gallery :tableId="workContentId" style="width:100%" />
    </Block>
    <Block title="最近在听的音乐">
      <Gallery :tableId="workContentId" style="width:100%" />
    </Block>
    <Block title="最近在看的影视作品">
      <Gallery :tableId="workContentId" style="width:100%" />
    </Block>
    <Block title="最近关注的产品">
      <Gallery :tableId="workContentId" style="width:100%" />
    </Block>
    <Block title="碎碎念">
      <Gallery :tableId="workContentId" style="width:100%" />
    </Block> -->
    <NuxtLink to="/bangumi">番剧收藏</NuxtLink>
  </div>
</template>
<script>
// import Gallery from '@/components/widgets/Gallery'
import Block from "@/components/utils/Block";
import StaticContent from "@/components/utils/StaticContent";

export default {
  async asyncData({ $axios, $notionApi }) {
    const env = {
      aboutContentId: "435a447a338b4efd8ac88016962896f6",
    };
    try {
      const aboutContent = await $notionApi.$get(`/page/${env.aboutContentId}`);
      return {
        aboutContent
      };
    } catch (e) {
      const error = e;
      return {
        aboutContent: {},
        error
      };
    }
  },
  name: "About",
  components: {
    // Gallery,
    Block,
    StaticContent
  },
};
</script>
<style scoped>
.content{
  max-width:900px;
}
</style>
