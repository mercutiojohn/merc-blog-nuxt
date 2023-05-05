<template>
  <div :class="{'avatar-box': true, 'rounded': rounded}" ref="avatarBox">
    <img class="avatar" :src="imgUrl" alt="" srcset="" />
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
  mounted(){
    this.$refs.avatarBox.style.background = `linear-gradient(${this.colorPalette[0].from},${this.colorPalette[0].to})`;
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
          from:'#f0b8c6',
          to:'#edafbd'
        },{
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
  transition: background .2s ease;
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
