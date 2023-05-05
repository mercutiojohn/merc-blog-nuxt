<template>
<div 
  :class="{
    'home-blocks': true,
    'consistant': consistant
  }"
  :style="'grid-auto-rows:' + height"
  >
    <slot></slot>
</div>
</template>

<script>
export default {
name: "GridLayout",
components: {},
data() {
return {

};
},
props: {
  height: {
    type: String,
    default: 'minmax(200px, auto)'
  },
  consistant: {
    type: Boolean,
    default: false
  }
},
computed: {},
watch: {},
methods: {},
created(){},
mounted(){},
beforeDestroy(){}
};
</script>

<style scoped>
.home-blocks {
  box-sizing: border-box;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
  /* grid-auto-rows: minmax(200px, auto); */
  /* grid-auto-rows: 250px; */
  gap: 20px;
}
.home-blocks.consistant {
  gap: 10px;
  border-radius: 30px;
  overflow: hidden;
}
@media screen and (min-width: 750px) and (max-width: 1080px) {
  .home-blocks {
    --padding: 20px;
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-rows: unset, 300px; */
    grid-auto-rows: minmax(calc((((100vw - (var(--padding) * 2)) - 20px ) / 3) / 4 * 3), auto);
  }
}
@media screen and (min-width: 500px) and (max-width: 750px) {
  .home-blocks {
    --padding: 20px;
    grid-template-columns: repeat(1, 1fr);
    /* grid-template-rows: unset, 300px; */
    grid-auto-rows: minmax(250px, auto);
  }
}
@media screen and (max-width: 500px) {
  .home-blocks {
    --padding: 30px;
    grid-template-columns: repeat(1, 1fr);
    /* grid-template-rows: unset; */
    grid-auto-rows: minmax(calc((100vw - (var(--padding) * 2)) / 4 * 3), auto);
    gap: 15px;
  }
}
</style>