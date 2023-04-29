<template>
  <div class="my-contacts">
    <div class="list-box">
      <a
        v-for="(contactItem, contactIdx) in contactsData"
        :key="contactIdx"
        :href="contactItem.url + contactItem.uid"
        :class="{'contact-item ef-fadein': true, 'in-box': inBox[contactIdx]}"
        target="_blank"
        @mouseover="changeStat(contactIdx, true)"
        @mouseout="changeStat(contactIdx, false)"
      >
        <div class="left">
          <img
            :src="contactItem.icon[0].url"
            alt=""
            srcset=""
            class="contact-icon"
            :style="'background-color:' + '#' +contactItem.color"
          />
          <span :class="{'contact-name': true}" v-text="contactItem.name"></span>
        </div>
        <!-- <img
          v-if="contactItem.badge"
          :src="getBadge(contactItem.badge, contactItem.uid)"
          alt=""
          srcset=""
          class="contact-badge"
        /> -->
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacts",
  props: {
    contactsData: Array
  },
  data() {
    return {
      inBox: []
    };
  },
  methods: {
    changeStat(index, stat){
      this.inBox[index] = stat
      this.$forceUpdate()
    },
    getBadge(badge, uid) {
      return `https://img.shields.io/badge/dynamic/json?label=%20&query=count&url=${encodeURIComponent(badge)}${uid}&style=flat-square&cacheSeconds=3600&color=eee`
    },
  },
  mounted() {
    for (let index = 0; index < this.contactsData.length; index++) {
      this.inBox[index] = false
    }
  }
};
</script>

<style scoped>
.list-box {
  display: flex;
  /* flex-direction: column; */
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 5px 6px;
  /* width: 100%; */
  /* overflow: scroll; */
}
.header {
  font-size: 20px;
  font-weight: 800;
  padding: 15px 0 5px 0;
}
.contact-item {
  /* border: 1px solid #e5e0df;
  color: #3c3838;
  background: linear-gradient(180deg, #FFFFFF 0%, #FCF9F5 100%);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06); */
  /* border: 1px solid #00000023; */
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 8px;
  padding-left: 0;
  border-radius: 7px;
  transition: all .2s ease;
}
.contact-item.in-box {
  /* padding: 6px 8px; */
  padding-left: 8px;
}
.contact-item .left{
  display: flex;
  align-items: center;
  /* filter: grayscale(1); */
  /* transition: filter .2s ease; */
}
.contact-icon {
  /* background-color: #00000056!important; */
  width: 20px;
  height: 20px;
  padding: 5px;
  /* border-radius: var(--item-radius); */
  border-radius: 7px;
}
.in-box.contact-item .left{
  /* filter: grayscale(0); */
}
.in-box .contact-icon{
  /* background-color: unset !important; */
}
.contact-name {
  color: var(--content-color);
  max-width: 0;
  height: 0;
  overflow: hidden;
  /* filter: blur(10px); */
  opacity: 0;
  transition: all .3s ease;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.in-box .contact-name {
  margin-left: 8px;
  max-width: 200px;
  height: unset;
  /* filter: blur(0px); */
  opacity: 1;
}
.contact-badge{
  border-radius: 5px;
}
</style>