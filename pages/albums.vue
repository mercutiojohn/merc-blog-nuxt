<template>
  <div id="albums">
    <!-- <h1>Album Wall</h1>
    <p>{{albumsContent}}</p> -->
    <div class="wall">
        <Title title="Albums" />
        <AlbumWall :albums="albumsContent" />
    </div>
  </div>
</template>

<script>
import Title from '@/components/utils/Title'
export default {
  name: "Albums",
  components: {
    Title
  },
  async asyncData({ $axios, $notionApi }) {
    const env = {
      albumsListId: "455b9798107946da90a59216dd369146"
    };
    try {
      const albumsContent = await $notionApi.$get(`/table/${env.albumsListId}`);
      return {
        albumsContent
      };
    } catch (e) {
      const error = e;
      return {
        albumsContent: [],
        // ip
        error
      };
    }
  }
};
</script>
<style>
@import "styles/common.css";
</style>
<style>
#albums {
  display: flex;
  flex-direction: column;
}
.wall {
    padding: 30px 100px;
}
@media screen and (max-width: 600px) {
    .wall {
        padding: 30px 10px;
    }
}
</style>
