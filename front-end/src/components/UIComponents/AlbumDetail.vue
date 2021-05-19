<template>
  <div class="album-detail">
    <div class="album-cover">
      <img :src="albumInfo.img" />
    </div>
    <div class="album-info">
      <div class="title">
        {{ albumInfo.title }}
      </div>
      <div>
        {{ albumInfo.type }}
      </div>
      <div>
        {{ albumInfo.date }}
      </div>
    </div>

    <h2>Track List</h2>
    <div class="track-list">
      <div class="list-content" v-for="tl in albumInfo.trackList" :key="tl">
        <div class="content">
          <b class="song-title">{{ tl.no }} {{ tl.name }} </b><br /><br />
          <b>lyrics by </b> {{ tl.lyrics.join(', ') }}<br />
          <b>composed by </b> {{ tl.composed.join(', ') }}<br />
          <b>arranged by </b> {{ tl.arranged.join(', ') }}<br />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { albumList } from '@common/dummy.js'
export default {
  data() {
    return {
      albumInfo: {},
    }
  },
  methods: {
    getAlbumInfo() {
      let albumID = this.$route.params.album_id
      this.albumInfo = albumList.concat().find((album) => {
        return album.id == albumID
      })
    },
  },
  created() {
    this.getAlbumInfo()
    console.log(this.albumInfo)
  },
}
</script>
<style lang="scss" scoped>
.album-detail {
  padding: 100px 0;
  display: grid;
  grid-template-areas:
    'cover info'
    'tracks tracks'
    'track track';
}
.album-cover {
  margin: 0 auto;
  grid-area: cover;
  img {
    width: 350px;
  }
}
.album-info {
  text-align: center;
  grid-area: info;

  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
}
h2 {
  grid-area: tracks;
  text-align: center;
  margin: 30px 0 20px;
}
.track-list {
  grid-area: track;
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: right;
  .content {
    .song-title {
      font-size: 18px;
    }
    margin-top: 20px;
    padding-left: 30px;
  }
}
</style>
