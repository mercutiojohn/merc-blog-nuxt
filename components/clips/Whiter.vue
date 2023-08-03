<template>
  <div class="container">
    Hidden Words
    <h1 class="whiter">
      Speak out.
      <br />
      Giving ideas.
      <br />
      Finding inspirations.
    </h1>
    <video
      width="640"
      height="200"
      poster="videos/white.png"
      preload="auto"
      autoplay
      loop
      muted
      class="video"
      title="HDR Video"
    >
      <!-- 
    ffmpeg -i white1.mp4 -pix_fmt yuv420p10le -color_primaries 9 -color_trc 16 -colorspace 9 -color_range 1 -profile:v 2 -vcodec libvpx-vp9 white.webm
  -->
      <source src="videos/white1.webm" type="video/webm" />
      <!--
    x265 --input white.yuv --fps 23.976 --frames 24 --input-depth 10 --input-res 3840x2160 --input-csp 1 --profile main10 --hdr --output white.hevc --master-display="L(10000000,5)" --max-cll=10000,10000 --colorprim=9 --transfer=16 && mp4box -add white.hevc white1.mp4
  -->
      <source src="videos/white1.mp4" type="video/mp4" />
      <!-- https://www.avsforum.com/threads/hdr10-test-patterns-set.2943380/ -->
      <source src="videos/white2.mp4" type="video/mp4" />
      Turn on JavaScript to see the video.
    </video>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.whiter {
  font-family: var(--font-header);
  text-align: center;
  color: #fff;
  filter: brightness(2);
  backdrop-filter: brightness(1);
}
.video {
  width: 100%;
  height: 1px;
  pointer-events: none;
}
</style>