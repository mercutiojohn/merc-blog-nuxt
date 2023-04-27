<template>
  <div class="loading-tip">
    <win-loading />
    <span>坐和放宽</span>
  </div>
</template>

<script>
import WinLoading from "@/components/utils/WinLoading.vue";
export default {
  name: "",
  components: { WinLoading },
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

<style>
.loading-tip {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:20px;
}
</style>