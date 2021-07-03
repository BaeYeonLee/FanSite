<template>
  <div class="album-detail">
    <div class="section-left">
      <div class="album-cover">
        <img :src="albumInfo.img" />
      </div>
      <div class="album-info">
        <div class="title">
          {{ albumInfo.title }}
        </div>
        <div>
          {{ albumInfo.album_type }}
        </div>
        <div>
          {{ albumInfo.date }}
        </div>
      </div>
    </div>
    <div class="section-right">
      <h3>Track List</h3>
      <div class="track-list">
        <div class="list-content" v-for="tl in albumInfo.trackList" :key="tl">
          <div class="song-title">{{ tl.no }}. {{ tl.name }}</div>
          <div class="infos">
            <div class="lyrics">lyrics by</div>
            <div>{{ tl.lyrics.join(', ') }}</div>
            <div class="compose">composed by</div>
            <div>{{ tl.composed.join(', ') }}</div>
            <div class="arrange">arranged by</div>
            <div>{{ tl.arranged.join(', ') }}</div>
          </div>
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
  grid-template-areas:
    'section-left section-right'
    'section-left section-right';
  display: grid;
  padding: 40px;
  grid-column-gap: 10%;
  background: $IULightViolet;
}
.section-left {
  grid-area: section-left;
  margin-left: 30px;
  .album-cover {
    img {
      width: 300px;
    }
  }
  .album-info {
    text-align: center;
    display: grid;
    align-items: center;
    div {
      padding: 20px 0;
      &.title {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
.section-right {
  grid-area: section-right;
  h3 {
    text-align: center;
  }
  .track-list {
    display: grid;
    margin: 50px 0 0 50px;
  }
}
.list-content {
  padding: 20px;
  .song-title {
    display: block;
    margin-bottom: 20px;
    font-weight: bold;
  }
  .infos {
    display: grid;
    grid-template-columns: 120px 1fr;
    div {
      font-size: 14px;
      &.lyrics,
      &.arrange,
      &.compose {
        margin-right: 25px;
        font-weight: bold;
        text-align: right;
      }
    }
  }
}
</style>
