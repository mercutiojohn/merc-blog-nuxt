<template>
  <div :class="{'avatar-box': true, 'rounded': rounded}" ref="avatarBox" @click="changeColor">
    <img class="avatar" ref="avatarImgEffect" :src="imgUrl" alt="" srcset="" />
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "AvatarStatic",
  props: {
    status: String,
    rounded: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    imgUrl() {
      return `images/avatar_${this.status}.png`;
    }
  },
  methods: {
    changeColor() {
      const randomIndex = Math.floor(Math.random() * this.colorPalette.length); // 随机选择一种颜色
      const randomColor = this.colorPalette[randomIndex];
      this.$refs.avatarBox.style.background = `linear-gradient(${randomColor.from},${randomColor.to})`; // 将颜色应用到组件的背景中
    }
  },
  mounted(){
    const randomIndex = Math.floor(Math.random() * this.colorPalette.length); // 随机选择一种颜色
    const randomColor = this.colorPalette[randomIndex];
    this.$refs.avatarBox.style.background = `linear-gradient(${randomColor.from},${randomColor.to})`; // 将颜色应用到组件的背景中

    gsap.registerPlugin(ScrollTrigger); // 注册 ScrollTrigger 插件
    const avatarBox = this.$refs.avatarBox;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: avatarBox,
        scrub: .8,
        // markers: true,
        start: "top 2%", // 动画开始位置
        end: "top 0%", // 动画结束位置
        toggleActions: "play none none reverse" // 动画结束时反转
      }
    });
    tl.to(avatarBox, { 
      opacity: 0, 
      duration: 0.5,
      transform: "scale(.8) translateY(40px)"
    });

    const avatarImgEffect = this.$refs.avatarImgEffect;
    const el = gsap.timeline({
      scrollTrigger: {
        trigger: avatarImgEffect,
        scrub: 1.3,
        // markers: true,
        start: "top 2%", // 动画开始位置
        end: "top 0%", // 动画结束位置
        toggleActions: "play none none reverse" // 动画结束时反转
      }
    });
    el.to(avatarImgEffect, { 
      duration: 0.5,
      transform: "translateY(80px)"
    });
  },
  data(){
    return {
      colorPalette:[
        {
          from:'#efc897',
          to:'#ecc189'
        },
        {
          from:'#b8dbec',
          to:'#add9ee'
        },{
          from:'#cbc2f0',
          to:'#c1b7e9'
        },{
          from:'#b5e1ba',
          to:'#a8dead'
        },{
        //   from:'#f0b8c6',
        //   to:'#edafbd'
        // },{
          from:'#ebaba8',
          to:'#e99d98'
        },{
          from:'#c7c7c9',
          to:'#bfbec0'
        }
      ]
    }
  }
};
</script>

<style scoped>
.avatar-box {
  width: 160px;
  height: 160px;
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  background: linear-gradient('#efc897','#ecc189');
}
.avatar-box:hover,
.avatar-box:focus {
  transform: scale(1.03) !important;
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.avatar-box:active {
  transform: scale(0.98) !important;
}
.avatar-box.rounded {
  border-radius: 50%;
}
.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
