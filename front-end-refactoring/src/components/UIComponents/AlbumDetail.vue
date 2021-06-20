<template>
  <div class="detail">
    <div class="album-detail">
      <div class="section-left">
        <div class="cover">
          <img :src="albumInfo.image" />
        </div>
        <div class="album-info">
          <div class="title">
            {{ albumInfo.title }}
          </div>
          <div class="info">
            <div class="type">{{ albumInfo.type }}</div>
            <div class="date">{{ albumInfo.date }}</div>
          </div>
        </div>
      </div>
      <!-- Section Left End-->
      <!-- Section Right Start -->
      <div class="section-right">
        <h4>Track List</h4>
        <div class="track-list">
          <div class="list-content" v-for="tl in albumInfo.trackList" :key="tl">
            <div class="song-title">{{ number(tl.no) }}. {{ tl.name }}</div>
            <div class="infos">
              <div class="lyrics">작사</div>
              <div>{{ tl.lyrics.join(', ') }}</div>
              <div class="compose">작곡</div>
              <div>{{ tl.composed.join(', ') }}</div>
              <div class="arrange">편곡</div>
              <div>{{ tl.arranged.join(', ') }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Section Rigth END -->
    </div>
  </div>
</template>
<script>
import albumList from '@common/dummy/album.js'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      albumInfo: {},
    }
  },
  methods: {
    /* ------------------------------ VUEX METHOD ------------------------------ */
    ...mapActions(['set_title']),
    setSubTitle() {
      this.set_title({ title: this.albumInfo.title })
    },

    /* ------------------------------ GETTER METHOD ------------------------------ */
    getAlbumInfo() {
      let albumID = this.$route.params.album_id
      this.albumInfo = albumList.concat().find(album => {
        return album.id == albumID
      })
    },

    /* ------------------------------ SETTER METHOD ------------------------------ */
    number(item) {
      /**
       * SET LIST NUMBERING
       * 01, 02, 03 ...
       */
      return item > 9 ? item : `0${item}`
    },
  },
  created() {
    this.getAlbumInfo()
    this.setSubTitle()
  },
}
</script>
<style lang="scss" scoped>
// .detail::-webkit-scrollbar-thumb {
//   background-color: red;
// border-radius: 10px;
// }
.detail {
  max-width: 1080px;
  margin: 0 auto;
  .album-detail {
    height: 670px;
    margin: 40px auto 30px;
    grid-template-areas:
      'section-left section-right'
      'section-left section-right';
    display: grid;
    grid-column-gap: 10%;
    margin: 40px 0;
    overflow: auto;
    color: $IU-BlueViolet;
  }
}
.section-left {
  grid-area: section-left;
  max-width: 360px;
  .album-info {
    .title {
      font-weight: bold;
      margin-top: 40px;
      text-align: center;
    }
    .info {
      position: relative;
      .type {
        position: absolute;
        top: 15px;
        left: 15%;
      }
      .date {
        position: absolute;
        top: 15px;
        right: 10%;
      }
    }
  }
}
.section-right {
  grid-area: section-right;
  color: $IU-BlueViolet;
  h4 {
    text-align: center;
  }
  .track-list {
    display: grid;
    margin: 20px 0 0 50px;
  }
}
.list-content {
  padding: 40px;
  .song-title {
    display: block;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 18px;
  }
  .infos {
    display: grid;
    grid-template-columns: 90px 1fr;
    div {
      font-size: 14px;
      &.lyrics,
      &.arrange,
      &.compose {
        margin-right: 35px;
        font-weight: bold;
        text-align: right;
      }
    }
  }
}
</style>
