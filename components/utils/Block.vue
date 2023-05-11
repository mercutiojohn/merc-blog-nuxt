<template>
  <div
    class="block"
    :style="
      horScroll ? 'overflow-x:scroll;' : '' + title ? 'margin:0 0 10px;' : ''
    "
  >
    <h2 v-if="title" ref="titleEffect">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "Block",
  props: {
    title: {
      type: String,
      default: ""
    },
    horScroll: {
      type: Boolean,
      default: false
    }
  },
  mounted(){
    gsap.registerPlugin(ScrollTrigger); // 注册 ScrollTrigger 插件
    const titleEffect = this.$refs.titleEffect;
    const fl = gsap.timeline({
      scrollTrigger: {
        trigger: titleEffect,
        scrub: .8,
        // markers: true,
        start: "top 90%", // 动画开始位置
        end: "top 90%", // 动画结束位置
        toggleActions: "play none none reverse" // 动画结束时反转
      }
    });
    fl.from(titleEffect, { 
      opacity: 0, 
      duration: 0.5,
      transform: "scale(.8) translateY(20px)"
     });
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: titleEffect,
    //     scrub: .8,
    //     // markers: true,
    //     start: "top 10%", // 动画开始位置
    //     end: "top 4%", // 动画结束位置
    //     toggleActions: "play none none reverse" // 动画结束时反转
    //   }
    // });
    // tl.to(titleEffect, { 
    //   opacity: 0, 
    //   duration: 0.5,
    //   transform: "scale(.8) translateY(20px)"
    //  });
  }
};
</script>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  /* overflow: hidden; */
  margin: 10px 0;
}
</style>
