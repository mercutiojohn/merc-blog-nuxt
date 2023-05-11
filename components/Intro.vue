<template>
  <div class="intro">
    <h1 class="intro-text" ref="introText">
      Hi, I'm <span class="name">{{ nickname }}</span>.
    </h1>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "Intro",
  props: {
    name: String,
    nickname: String
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger); // 注册 ScrollTrigger 插件
    const introText = this.$refs.introText;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: introText,
        scrub: .8,
        // markers: true,
        start: "top 10%", // 动画开始位置
        end: "top 4%", // 动画结束位置
        toggleActions: "play none none reverse" // 动画结束时反转
      }
    });
    tl.to(introText, { 
      opacity: 0, 
      duration: 0.5,
      transform: "scale(.8) translateY(20px)"
     });
  }
};
</script>

<style scoped>
.intro-text {
  /* font-size: 40px; */
  font-size: 2.5rem;
  /* font-weight: 400; */
  font-weight: 800;
  font-family: var(--font-header);
}
</style>