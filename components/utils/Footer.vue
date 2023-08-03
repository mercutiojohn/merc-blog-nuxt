<template>
  <div class="footer page-content">
    <div class="services">
      <div class="logo-box">
        <Nuxt class="logo" />
      </div>
      <div class="logo-box">
        <Vercel class="logo" />
      </div>
      <div class="logo-box">
        <Cloudflare class="logo" />
      </div>
      <div class="logo-box">
        <Notion class="logo" />
      </div>
      <i class="iconfont icon-vue"></i>
      <i class="iconfont icon-notion"></i>
      <i class="iconfont icon-cloudflare"></i>
      <i class="iconfont icon-logo-vercel"></i>
    </div>
    <div class="info">
      <!-- <span class="icp">鲁ICP备20018544号</span> -->
      <span class="about"
        >©2019-{{ new Date().getFullYear() }}
        Mercutio</span
      >
    </div>
  </div>
</template>

<script>
import Nuxt from "~/assets/sprite/svg/logo/nuxt.svg?inline";
import Notion from "~/assets/sprite/svg/logo/notion.svg?inline";
import Vercel from "~/assets/sprite/svg/logo/vercel.svg?inline";
import Cloudflare from "~/assets/sprite/svg/logo/cloudflare.svg?inline";
export default {
  name: "footer",
  components: {
    Nuxt,
    Notion,
    Vercel,
    Cloudflare,
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
.footer {
  /* width:100%; */
  font-size: 0.8em;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 20px 20px 40px;
  display: flex;
  align-items: flex-start;
  justify-content: baseline;
  flex-direction: column;
  color: var(--subtitle-color);
  gap: 10px;
  .services {
  display: flex;
  gap: 10px;
  
}
.info {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}
}
.logo-box {
  /* background: #ececec; */
  padding: 6px;
  border: 1px solid #ececec;
  border-radius: 50%;
  height: 20px;
  /* width: 20px; */
  display: flex;
  align-items: center;
  justify-content: center;
  .logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
    path {
      fill: #b7b7b7!important;
    }
  }
}
</style>