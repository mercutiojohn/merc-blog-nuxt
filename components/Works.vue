<template>
  <div class="container">
    <GridLayout>
       <!-- height="500px" -->
      <Card
        consistant
        :class="{
          'custom-card': true,
          center: !item.icon,
        }"
        v-for="(item, index) in listData"
        :key="index"
      >
        <div class="banner-box">
          <img class="banner" v-if="item.banner" :src="item.banner[0].url" />
        </div>
        <div class="card-content">
          <img class="icon" v-if="item.icon" :src="item.icon[0].url" />
          <h2
            :class="{
              title: true,
              'no-icon': !item.icon,
              'with-icon': item.icon,
            }"
          >
            {{ item.name }}
          </h2>
          <p class="summary">{{item.summary}}</p>
          <!-- <ul class="tags">
            <li v-for="(tag, tagIndex) in item.tags" :key="tagIndex">
              <span>{{ tag }}</span>
            </li>
          </ul> -->
        </div>
      </Card>
    </GridLayout>
  </div>
</template>

<script>
import GridLayout from "@/components/utils/GridLayout";
import Card from "@/components/utils/Card";

export default {
  name: "Contacts",
  components: { Card, GridLayout },
  props: {
    tableId: String,
  },
  data() {
    return {
      listData: [],
      loading: true,
    };
  },
  computed: {},
  watch: {},
  methods: {
    async getTableData(tableId, callback) {
      this.$axios
        .get("https://blogapi.mercutio.club/v1/table/" + tableId)
        .then(callback);
    },
  },
  async created() {
    try {
      this.getTableData(this.tableId, (response) => {
        console.log(response.data);
        this.listData = response.data;
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
  font-family: var(--font-sans);
    &.with-icon {
      font-size: 22px;
    }
    &.no-icon {
      margin: 40px 0 20px;
      font-size: 40px;
    }
}

.custom-card {
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /* align-items: center; */
}
// .custom-card.center {
//   justify-content: center;
// }
.card-content {
  padding: 30px;
}
.banner-box {
  width: 100%;
  height: 280px;
  overflow: hidden;
  border-bottom: 1px solid #ededed;
  background: #bdbdbd;
  flex-shrink: 0;
  .banner {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(.98);
  }
}
</style>