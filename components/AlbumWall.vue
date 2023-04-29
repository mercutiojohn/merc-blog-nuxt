<template>
  <div class="album-cover-wall" @click="handleClickBack" ref="wall">
    <div
      v-for="(album, index) in albums"
      @click.stop="handleClickAlbum(index)"
      :key="index"
      class="album-clickbox"
      v-show="album.show"
    >
      <div class="cover">
        <AlbumCover
          :artwork="album.artwork?album.artwork[0]?album.artwork[0].rawUrl+'?param=300y300':'no':'no'"
          :title="album.title"
          :artistList="album.artist"
          :isFlipped="isFlipped(index)"
          @close="handleClickBack"
        />
      </div>
      <h4 class="title font-sans">{{album.title}}</h4>
      <ul class="artist font-sans">
        <li v-for="(artist,index) in album.artist" :key="index">{{artist}}</li>
      </ul>
      <!-- :artist="album.artist" -->
    </div>
  </div>
</template>

<script>
import AlbumCover from "@/components/utils/AlbumCover";

export default {
  name: "AlbumCoverWall",
  components: {
    AlbumCover
  },
  props: {
    albums: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      flippedIndex: -1
    };
  },
  mounted() {
    this.$nextTick(()=>{
      console.log(getComputedStyle(this.$refs.wall).gridTemplateColumns.split(' ')[0])
      this.changeRowHeight()
      addEventListener('resize',this.changeRowHeight)
    })
  },
  beforeDestroy() {
    removeEventListener('resize',this.changeRowHeight)
  },
  methods: {
    handleClickAlbum(index) {
      this.flippedIndex = index;
    },
    handleClickBack() {
      this.flippedIndex = -1;
    },
    isFlipped(index) {
      return this.flippedIndex === index;
    },
    changeRowHeight(e) {
      console.log(e)
      // if (window.innerWidth >= 500) {
        const rowHeight = getComputedStyle(this.$refs.wall).gridTemplateColumns.split(' ')[0]
        this.$refs.wall.style.setProperty('--row-height', rowHeight);
      // }
    }
  }
};
</script>

<style lang="less" scoped>
/* .album-cover-wall {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
} */
.album-cover-wall {
  // --cover-size: 300px;
  --gap-width: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  // grid-template-columns: repeat(auto-fill, var(--cover-size));
  // grid-auto-rows: calc(var(--cover-size) + 100px);
  // grid-auto-rows: calc(var(--cover-size) + 100px);
  gap: var(--gap-width);
  width: 100%;
  padding-top: 30px;
  justify-content: center;
  transition: grid-template-columns 0.2s ease, grid-auto-rows 0.2s ease;
  .album-clickbox{ 
    .cover {
      height: var(--row-height);
      width: 100%;
    }
    .title {
      margin: 10px 0 0;
    }
    .artist {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      gap: 5px;
      li:not(:last-child)::after {
        content: ' /';
      }
    }
  }
}

.grid-enter-active,
.grid-leave-active,
.grid-move {
  transition: transform 0.5s ease-out;
}

.grid-enter,
.grid-leave-active {
  transform: translateY(50%);
}
@media screen and (max-width: 1140px) {
  .album-cover-wall {
    --gap-width: 10px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  }
}
@media screen and (max-width: 500px) {
  .album-cover-wall {
    // --row-height: calc((100vw - 50px) / 2);
    // --gap-width: 10px;
  }
}
</style>
