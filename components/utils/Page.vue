<template>
  <div class="page">
    <!-- <header>head</header> -->
    <slot></slot>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/utils/Footer"
export default {
name: "StandardPage",
components: {
  Footer
},
};
</script>

<style>
</style>