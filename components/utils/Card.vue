<template>
<div ref="cardEffect" :class="{
    'card': true,
    'card-no-bg': cardNoBg
  }">
    <slot></slot>
</div>
</template>

<script>
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
name: "GridLayoutCard",
components: {},
props:{
    cardMain: {
      type: Boolean,
      default: false
    },
    cardNoBg: {
      type: Boolean,
      default: false
    }
},
data() {
return {

};
},
computed: {},
watch: {},
methods: {},
created(){},
mounted(){
  // gsap.registerPlugin(ScrollTrigger); // 注册 ScrollTrigger 插件
  // const cardEffect = this.$refs.cardEffect;
  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: cardEffect,
  //     scrub: 1,
  //     markers: true,
  //     start: "top -300px", // 动画开始位置
  //     end: "top -500px", // 动画结束位置
  //     toggleActions: "play none none reverse" // 动画结束时反转
  //   }
  // });
  // tl.to(cardEffect, { 
  //   opacity: .4, 
  //   duration: 0.5,
  //   transform: "scale(.95) translateY(100px)",
  //   });
},
beforeDestroy(){}
};
</script>

<style scoped>
.card {
  /* padding: 20px; */
  box-sizing: border-box;
  background: #fff;
  border-radius: 10px;
  overflow-x: hidden;
  /* transition: box-shadow .6s ease, transform .4s ease-in-out; */
  /* overflow-y: scroll; */
}
.consistant .card{
  border-radius: 5px;
}
.card:hover{
  /* transform: translateY(-7px); */
  /* border: 5px solid linear-gradient(#000,#fff); */
  /* box-shadow: 0px 1.2px 0.9px rgba(0, 0, 0, 0.008),
    0px 3.1px 2.2px rgba(0, 0, 0, 0.015), 0px 5.9px 3.8px rgba(0, 0, 0, 0.021),
    0px 9.9px 6px rgba(0, 0, 0, 0.027), 0px 15.4px 9.1px rgba(0, 0, 0, 0.032),
    0px 23.1px 13.4px rgba(0, 0, 0, 0.037),
    0px 34.1px 19.7px rgba(0, 0, 0, 0.041),
    0px 50.6px 29.1px rgba(0, 0, 0, 0.046),
    0px 77.3px 41.9px rgba(0, 0, 0, 0.052), 0px 133px 56px rgba(0, 0, 0, 0.07); */
}
.card::-webkit-scrollbar {
  width: 5px;
  /* background: #000; */
}
.card::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: var(--bg-color);
}
.card-no-bg {
  background: transparent;
}
</style>