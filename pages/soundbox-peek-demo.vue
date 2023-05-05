<template>
  <div class="view">
    <!-- <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="loaded = !loaded">Toggle</button> -->
    <transition name="fade-charming">
        <div class="device" ref="device" v-show="loaded">
          <SoundboxPeekBack class="device-component back" />
          <SoundboxPeekFront class="device-component front" />
          <iframe
            @load="onIframeLoad"
            ref="myIframe"
            class="device-component screen"
            :src="screenUrl"
            frameborder="0"
          ></iframe>
          <transition name="fade">
            <div v-if="!screenShow" class="device-component screenLoading">Loading</div>
          </transition>
        </div>
    </transition>
  </div>
</template>

<script>
import SoundboxPeekBack from "~/assets/sprite/svg/soundbox-back.svg?inline";
import SoundboxPeekFront from "~/assets/sprite/svg/soundbox-front.svg?inline";
export default {
  components: {
    SoundboxPeekBack,
    SoundboxPeekFront,
  },
  mounted() {
    this.$nextTick(() => {
      this.updateDeviceScale();
      window.addEventListener("resize", this.updateDeviceScale);
      //   const iframe = this.$refs.myIframe;

      //   let lastTouch;

      //   iframe.contentDocument.addEventListener("touchstart", (e) => {
      //     lastTouch = e.touches[0];
      //     const touchEvent = new MouseEvent("mousedown", {
      //       view: window,
      //       bubbles: true,
      //       cancelable: true,
      //       screenX: lastTouch.screenX,
      //       screenY: lastTouch.screenY,
      //       clientX: lastTouch.clientX,
      //       clientY: lastTouch.clientY,
      //     });
      //     iframe.contentDocument.dispatchEvent(touchEvent);
      //     console.log("touchstart");
      //   });

      //   iframe.contentDocument.addEventListener("touchmove", (e) => {
      //     lastTouch = e.touches[0];
      //     const touchEvent = new MouseEvent("mousemove", {
      //       view: window,
      //       bubbles: true,
      //       cancelable: true,
      //       screenX: lastTouch.screenX,
      //       screenY: lastTouch.screenY,
      //       clientX: lastTouch.clientX,
      //       clientY: lastTouch.clientY,
      //     });
      //     iframe.contentDocument.dispatchEvent(touchEvent);
      //     console.log("touchmove");
      //   });

      //   iframe.contentDocument.addEventListener("touchend", () => {
      //     const touchEvent = new MouseEvent("mouseup", {
      //       view: window,
      //       bubbles: true,
      //       cancelable: true,
      //       screenX: lastTouch.screenX,
      //       screenY: lastTouch.screenY,
      //       clientX: lastTouch.clientX,
      //       clientY: lastTouch.clientY,
      //     });
      //     iframe.contentDocument.dispatchEvent(touchEvent);
      //     console.log("touchend");
      //   });
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateDeviceScale);
  },
  methods: {
    updateDeviceScale() {
      if (!this.loaded) {
        this.loaded = true;
      }
      const device = this.$refs.device;
      const clientW = window.innerWidth;
      const minDeviceWidth = 700;
      const realSvgWidth = 1016;
      const padding = 100;
      const minScale = (minDeviceWidth + padding) / (realSvgWidth + padding);
      const scale =
        clientW < (minDeviceWidth + padding)
          ? clientW / (realSvgWidth + padding)
          : minScale;
      device.style.zoom = scale;
      // device.style.transform = `scale(${scale})`;
    },
    onIframeLoad(){
      this.screenShow = true;
    }
  },
  data() {
    return {
        loaded: false,
        screenShow: false,
        screenUrl: 'http://miaisb.mercutio.club'
    }
  }
};
</script>
<style>
body {
  margin: 0;
}
.fade-enter-active,
.fade-leave-active{
    transition: opacity .8s ease;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.fade-charming-enter-active,
.fade-charming-leave-active{
    transition: opacity .2s ease, transform .8s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.fade-charming-enter,
.fade-charming-leave-to {
    opacity: 0;
    transform: translateY(10px) scale(.92);
}
</style>

<style lang="less" scoped>
.view {
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  .device {
    flex-shrink: 0;
    height: 703px;
    width: 1016px;
    filter: drop-shadow(0px 20px 80px rgba(0, 0, 0, 0.316));
    svg.device-component {
      position: absolute;
      &.front {
        pointer-events: none;
        z-index: 100;
      }
      &.back {
      }
    }
    .device-component {
      position: absolute;
      &.screen {
        width: 802px;
        height: 452px;
        transform: translate(108px, 96px);
      }
      &.screenLoading {
        width: 800px;
        height: 450px;
        transform: translate(109px, 97px);
        background: rgb(44, 44, 44);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 28px;
      }
    }
  }
}
</style>