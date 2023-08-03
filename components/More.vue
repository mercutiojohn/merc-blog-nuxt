<template>
  <div class="container">
    <div class="container">
      <GridLayout height="auto">
        <!-- <NuxtLink class="no-deco" to="/bangumis"> -->
          <Card plain class="custom-card">
            <div class="bg-box">
              <!-- <img src="" class="banner" alt="" srcset=""> -->
            </div>
            <div class="card-content">
              <h2 class="title">Bangumis</h2>
            </div>
          </Card>
        <!-- </NuxtLink> -->
        <!-- <NuxtLink class="no-deco" to="/albums"> -->
          <Card plain class="custom-card">
            <div class="bg-box">
              <!-- <img src="" class="banner" alt="" srcset=""> -->
            </div>
            <div class="card-content">
              <h2 class="title">Albums</h2>
            </div>
          </Card>
          <!-- </NuxtLink> -->
        <a class="no-deco" href="https://blog.mercutio.club">
          <Card plain class="custom-card">
            <div class="bg-box">
              <!-- <img src="" class="banner" alt="" srcset=""> -->
            </div>
            <div class="card-content">
              <h2 class="title">Blog</h2>
            </div>
          </Card>
        </a>
      </GridLayout>
    </div>
  </div>
</template>

<script>
import GridLayout from "@/components/utils/GridLayout";
import Card from "@/components/utils/Card";
import Whiter from "@/components/clips/Whiter.vue";

export default {
  name: "More",
  components: { Card, GridLayout, Whiter },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}
.custom-card {
  .card-content {
    font-family: var(--font-header);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 30px;
  }
}
</style>