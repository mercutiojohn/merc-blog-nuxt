<template>
  <div class="container">
    <GridLayout height="100px">
      <Card class="custom-card">
        <div class="bg-box">
          <!-- <img src="" class="banner" alt="" srcset=""> -->
        </div>
        <div class="card-content">
            <h2 class="title">GIS Related</h2>
            <!-- <ul>
                <li>
                    GeoJSON
                </li>
                <li>
                    MapLibreGL
                </li>
                <li>
                    Cesium with Three.js
                </li>
                <li>
                    Subway Map
                </li>
            </ul> -->
        </div>
      </Card>
      <Card class="custom-card">
        <div class="bg-box">
          <!-- <img src="" class="banner" alt="" srcset=""> -->
        </div>
        <div class="card-content">
            <h2 class="title">Figma → Code</h2>
            <!-- <ul>
                <li>
                    Auto Layout
                </li>
            </ul> -->
        </div>
      </Card>
      <Card class="custom-card">
        <div class="bg-box">
          <!-- <img src="" class="banner" alt="" srcset=""> -->
        </div>
        <div class="card-content">
            <h2 class="title">Better Shadow</h2>
        </div>
      </Card>
      <Card class="custom-card">
        <div class="bg-box">
          <!-- <img src="" class="banner" alt="" srcset=""> -->
        </div>
        <div class="card-content">
            <h2 class="title">"Knob"</h2>
        </div>
      </Card>
      <Card class="custom-card">
        <div class="bg-box">
          <!-- <img src="" class="banner" alt="" srcset=""> -->
        </div>
        <div class="card-content">
            <h2 class="title">GSAP &amp; ScrollMagic</h2>
        </div>
      </Card>
      <!-- <Card>
        <div class="card-content">
            <h2>Test</h2>
        </div>
      </Card> -->
      <!-- <Card>
        <Whiter />
      </Card> -->
    </GridLayout>
  </div>
</template>

<script>
import GridLayout from "@/components/utils/GridLayout";
import Card from "@/components/utils/Card";
import Whiter from '@/components/clips/Whiter.vue';

export default {
  name: "Currently",
  components: { Card, GridLayout, Whiter, },
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
}
.icon {
  width: 60px;
}
.tags {
  display: flex;
  align-items: stretch;
  gap: 10px;
}
.tags li {
  display: flex;
  align-items: center;
  padding: 6px 10px;
  /* height: 100%; */
  background: #00000013;
  border-radius: 6px;
}
.title {
  font-family: var(--font-header);
    &.with-icon {
      font-size: 22px;
    }
    &.no-icon {
      margin: 40px 0 20px;
      font-size: 40px;
    }
}

.custom-card {
  .card-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 30px;
  }
}

</style>