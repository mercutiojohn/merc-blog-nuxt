<template>
  <div :class="{'avatar-box': true, 'rounded': rounded}" ref="avatarBox" @click="changeColor">
    <img :class="{'avatar': true, 'trans':!showAvatar}" ref="avatarImgEffect" :src="imgUrl" alt="" srcset="" />
  </div>
</template>

<script>

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
    // const randomIndex = Math.floor(Math.random() * this.colorPalette.length); // 随机选择一种颜色
    // const randomColor = this.colorPalette[randomIndex];
    // this.$refs.avatarBox.style.background = `linear-gradient(${randomColor.from},${randomColor.to})`; // 将颜色应用到组件的背景中
    this.$refs.avatarBox.style.background = `linear-gradient(${this.colorPalette[0].from},${this.colorPalette[0].to})`;
    setTimeout(()=>{
      this.showAvatar = true
    }, 600)
  },
  data(){
    return {
      showAvatar: false,
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

<style lang="scss" scoped>
.avatar-box {
  width: 160px;
  height: 160px;
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  background: linear-gradient('#efc897','#ecc189');
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover,
  &:focus {
    transform: scale(1.03) !important;
    transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  &:active {
    transform: scale(0.98) !important;
  }
  &.rounded {
    border-radius: 50%;
  }
  .avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>