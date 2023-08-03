<template>
  <Page>
    <div id="main-box" class="font-sans">
      <div class="bangumis page-content">
        <span class="header"><h1 class="title">番剧收藏</h1></span>
        <div class="bangumis-list" v-if="!loading">
          <div
            class="bangumi-item"
            v-for="(item, index) in bangumiData"
            :style="'background: ' + item['主色调'] + ''"
            :key="index"
            v-if="item['Status'] == 'Published'"
          >
            <div class="left" :style="'color:' + getColor(item)">
              <!-- :style="'background:linear-gradient(90deg, var(--sub-card-color),transparent)'" -->
              <div class="logo">
                <img
                  :src="nullPicUrlFallback(item['LOGO'])"
                  alt=""
                  srcset=""
                  onerror="javascript:this.src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';"
                />
              </div>
              <span class="name">{{ item["中文名"] }}</span>
              <span class="sub-name">{{ item["官方（日文）名"] }}</span>
              <span class="time">
                {{ item["档期"][0] }} - {{ item["档期"][1] }}
              </span>
              <!-- <span class="type">
            {{ item["类型"]}}
          </span> -->
              <div class="links">
                <a
                  class="hover-link"
                  :style="
                    'color:' +
                    getColor(item) +
                    ';border-color:' +
                    getColor(item)
                  "
                  :href="item['biliSea']"
                  v-if="item['biliSea']"
                >
                  嗶哩嗶哩
                </a>
                <a
                  class="hover-link"
                  :style="
                    'color:' +
                    getColor(item) +
                    ';border-color:' +
                    getColor(item)
                  "
                  :href="item['bilibili']"
                  v-if="item['bilibili']"
                  >哔哩哔哩
                </a>
                <a
                  class="hover-link"
                  :style="
                    'color:' +
                    getColor(item) +
                    ';border-color:' +
                    getColor(item)
                  "
                  :href="item['AcFun']"
                  v-if="item['AcFun']"
                  >AcFun</a
                >
                <a
                  class="hover-link"
                  :style="
                    'color:' +
                    getColor(item) +
                    ';border-color:' +
                    getColor(item)
                  "
                  :href="item['萌娘百科']"
                  v-if="item['萌娘百科']"
                >
                  萌娘百科
                </a>
                <a
                  class="hover-link"
                  :style="
                    'color:' +
                    getColor(item) +
                    ';border-color:' +
                    getColor(item)
                  "
                  :href="item['Bangumi']"
                  v-if="item['Bangumi']"
                >
                  番组计划
                </a>
              </div>
            </div>
            <div class="right">
              <div class="main-view">
                <img
                  :src="nullPicUrlFallback(item['主视觉'])"
                  alt=""
                  srcset=""
                  onerror="javascript:this.src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';"
                />
              </div>
            </div>
          </div>
        </div>
        <loading-tip v-else />
      </div>
    </div>
  </Page>
</template>

<script>
import Page from "@/components/utils/Page";
// import ColorThief from "colorthief";
import LoadingTip from "../components/utils/LoadingTip.vue";
export default {
  name: "Bangumi",
  components: { LoadingTip, Page },
  data() {
    return {
      table_id: "ad245671d07d41d48b6e571ce2e86440",
      bangumiData: [],
      loading: true,
    };
  },
  computed: {},
  watch: {},
  methods: {
    async getTableData(table_id, callback) {
      this.$axios
        .get("https://blogapi.mercutio.club/v1/table/" + table_id)
        .then(callback);
    },
    nullColorFallback(item) {
      try {
        console.log(typeof item["主色调"]);
        if (typeof item["主色调"] == "string") {
          return item["主色调"];
        } else {
          return "#ffffff";
        }
      } catch (error) {
        return "#ffffff";
      }
    },
    nullPicUrlFallback(item) {
      try {
        if (item[0].url) {
          return item[0].url;
        } else {
          return "";
        }
      } catch (error) {
        return "";
      }
    },
    nullLinkFallback(item) {
      try {
        if (item[0].url) {
          return item[0].url;
        } else {
          return "";
        }
      } catch (error) {
        return "";
      }
    },
    isLight(rgb) {
      return 0.213 * rgb[0] + 0.715 * rgb[1] + 0.072 * rgb[2] > 255 / 2;
    },
    getColor(item) {
      return this.isLight(this.hexToRgb(this.nullColorFallback(item)))
        ? "#000"
        : "#fff";
    },
    // getSlideTitleColor(index) {
    //   return (
    //     "color:" +
    //     (this.slideTextColors[index] ? "#000000" : "#ffffff") +
    //     "!important;"
    //   );
    // },
    // getSlideDescColor(index) {
    //   return (
    //     "color:" +
    //     (this.slideTextColors[index] ? "#222222b5" : "#eeeeeeb5") +
    //     "!important;"
    //   );
    // },
    // getSlideBgColor(index) {
    //   return "background-color:rgb(" + this.slideColors[index] + ");";
    // },
    // getItemContentBgColor(index) {
    //   return (
    //     "background-image:linear-gradient(rgba(" +
    //     this.slideColors[index] +
    //     ",0) 0%,rgba(" +
    //     this.slideColors[index] +
    //     ",.7) 60px,rgba(" +
    //     this.slideColors[index] +
    //     ",1) 100px);"
    //   );
    // },
    // getDominantColor(index) {
    //   let _this = this;
    //   let img = document.querySelector("#item-cover-" + index);
    //   console.log(img);
    //   this.slideColors[index] = {
    //     // bg:[255, 255, 255],
    //     // text:'#000'
    //     bg: [0, 0, 0],
    //     text: false,
    //   };
    //   console.log(this.slideColors[index]);
    //   let colorthief = new ColorThief();
    //   img.addEventListener("load", function (e) {
    //     console.log(_this);
    //     // _this.slideColors[index] = colorthief.getColor(img);
    //     let rgb = colorthief.getColor(img);
    //     _this.slideColors[index] = rgb;
    //     _this.slideTextColors[index] =
    //       0.213 * rgb[0] + 0.715 * rgb[1] + 0.072 * rgb[2] > 255 / 2;
    //     _this.$forceUpdate();
    //   });
    // },
    hexToRgb(colorStr) {
      //十六进制颜色值的正则表达式
      var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      var sColor = colorStr.toLowerCase();
      if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
          var sColorNew = "#";
          for (var i = 1; i < 4; i += 1) {
            sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
          }
          sColor = sColorNew;
        }
        //处理六位的颜色值f
        var sColorChange = [];
        for (var i = 1; i < 7; i += 2) {
          sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        }
        // return "rgb(" + sColorChange.join(",") + ")";
        return sColorChange;
      } else {
        return sColor;
      }
    },
  },
  async created() {
    try {
      this.getTableData(this.table_id, (response) => {
        console.log(response.data);
        this.bangumiData = response.data;
        this.loading = false;
      });
    } catch (err) {
      console.log(err);
    }
  },
  mounted() {},
  beforeDestroy() {},
};
</script>

<style scoped>
.bangumis-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  gap: 10px;
}
.bangumi-item {
  border-radius: 20px;
  height: 260px;
  margin-top: 210px;
  display: flex;
  justify-content: space-between;
}
.bangumi-item .left {
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.bangumi-item .right {
  padding-right: 20px;
}
.bangumi-item .left .name {
  font-size: 1.5em;
}

.main-view {
  position: relative;
  bottom: 210px;
  min-width: 320px;
  max-width: 350px;
  height: calc(100% + 210px);
  display: flex;
  align-items: flex-end;
  /* background: #000; */
}
.main-view img {
  width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.logo {
  width: 150px;
  height: 60px;
}
.logo img {
  max-width: 100%;
  height: 100%;
  object-fit: contain;
}
.links {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.links .hover-link {
  flex-shrink: 0;
}
</style>