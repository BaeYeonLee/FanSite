<template>
  <div class="detail">
    <div class="album-detail">
      <div class="section-left">
        <div class="cover">
          <img :src="albumInfo.image_url" />
        </div>
        <div class="album-info">
          <div class="title">
            {{ albumInfo.title }}
          </div>
          <div class="info">
            <div class="type">{{ getAlbumType(albumInfo.album_type) }}</div>
            <div class="date">{{ albumInfo.release_date }}</div>
          </div>
        </div>
      </div>
      <!-- Section Left End-->
      <!-- Section Right Start -->
      <div class="section-right">
        <h4>Track List</h4>
        <div class="expand-wrapper" v-for="(tl, idx) in albumInfo.trackList" :key="tl" @click="open(idx)">
          <!-- <transition-group name="list">-->
          <div class="expand-title">
            <span class="title">{{ number(tl.track_no) }}. {{ tl.name }}</span>
            <i class="fas fa-caret-up" v-if="openCard[idx]"></i>
            <i class="fas fa-caret-down" v-else></i>
          </div>
          <!-- </transition-group>-->
          <transition-group name="list">
            <div class="content" v-if="openCard[idx]">
              <div class="infos">
                <div class="lyrics"> 작사 </div>
                <div>{{ tl.lyrics_by }} </div>
                <div class="compose"> 작곡 </div>
                <div>{{ tl.composed_by }} </div>
                <div class="arrange"> 편곡 </div>
                <div>{{ tl.arranged_by }} </div>
              </div>

              <!-- TEST UI - PORALOID -->
              <!-- <div class="polar-wrapper hi-melody">
                <div class="lyric-area" v-if="tl.content">
                  {{ tl.content }}
                </div>

                <div class="none-lyric-area" v-else>
                  <img :src="albumInfo.image" />
                </div>
                <div class="polar-infos">
                  <div class="lyrics">작사</div>
                  <div>{{ tl.lyrics.join(', ') }}</div>
                  <div class="compose">작곡</div>
                  <div>{{ tl.composed.join(', ') }}</div>
                  <div class="arrange">편곡</div>
                  <div>{{ tl.arranged.join(', ') }}</div>
                </div>
              </div> -->
              <!-- END -->
            </div>
          </div>
        </transition-group>
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
      currentIndex: -1,
      tmpArray: [],
    }
  },
  computed: {
    openCard() {
      let array = this.tmpArray
      if (this.currentIndex < 0) {
        //선택 해제 시
        let result = array.map((el, idx) => {
          el = false
        })
        return result
      } else {
        //선택 했을 경우
        array.map((el, idx) => {
          if (idx == this.currentIndex) {
            array[idx] = true
          } else {
            array[idx] = false
          }
        })
        //undefined로 떨어짐... 외..?
        /*
        let result = array.map((el, idx) => {
          if (idx == this.currentIndex) {
            el = true
          } else {
            el = false
          }
        })
        */
        return array
      }
    },
  },
  created() {
    this.getAlbumInfo()
    this.setSubTitle()
  },
  methods: {
    open(idx) {
      if (this.currentIndex == idx) {
        this.currentIndex = -1
      } else {
        this.currentIndex = idx
      }
    },

    /* ------------------------------ VUEX METHOD ------------------------------ */
    ...mapActions(['set_title']),
    setSubTitle() {
      this.set_title({ title: this.albumInfo.title })
    },

    /* ------------------------------ GETTER METHOD ------------------------------ */
    getAlbumType(album_type) {
      switch(album_type) {
        case 1:
          return '정규'
        case 2:
          return '미니'
        case 3:
          return '리메이크'
        case 4:
          return '싱글'
        case 5:
          return '디지털 싱글'
        case 6:
          return 'OST'
        case 7:
          return '참여'
      }
    },
    /* ------------------------------ SETTER METHOD ------------------------------ */
    number(item) {
      /**
       * SET LIST NUMBERING
       * 01, 02, 03 ...
       */
      return item > 9 ? item : `0${item}`
    },
    /* ------------------------------ GET DATA METHOD ------------------------------ */
    async getAlbumInfo() {
      console.log("get Album Info")

      const albumId = this.$route.params.album_id
      console.log("albumId", albumId)
      this.albumInfo = await this.$api.album.getOne(albumId)

      console.log("albumInfo", this.albumInfo)

      this.albumInfo.trackList = await this.$api.track.getList({ album_id: albumId })

      console.log("trackList", this.albumInfo.trackList)


      // let albumID = this.$route.params.album_id
      // this.albumInfo = albumList.concat().find(album => {
      //   return album.id == albumID
      // })
      this.albumInfo.trackList.forEach((element, idx) => {
        this.tmpArray[idx] = false
      })
    },
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
    overflow-y: overlay;
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
  width: 100%;

  .expand-wrapper {
    width: 25rem;
    transition: all 0.5s ease-in-out;
  }

  .expand-title {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    padding-bottom: 15px;
    background: $IU-White;
    // font-family: 'Hi Melody', cursive;
    .title {
      border: 1px solid $IU-BlueViolet;
      padding: 2px 5px 0px;
      border-radius: 10px;
      font-size: 12px;
      margin-left: 5px;
    }
  }
  .content {
    margin-bottom: 20px;

    //poraloid
    .polar-wrapper {
      background: white;
      background: white;
      padding: 40px 30px 50px;
      box-shadow: 2px 2px 5px 1px;
      .lyric-area {
        white-space: pre-line;
        background: $IULightViolet;
        padding: 20px;
        overflow-y: scroll;
        height: 300px;
        font-size: 0.9rem;
        img {
          width: 100%;
          opacity: 0.5;
        }
      }
      .none-lyric-area img {
        width: 100%;
      }
      .polar-infos {
        // font-size: 14px;
        margin-top: 20px;
        // font-style: italic;
        display: grid;
        grid-template-columns: 40px 1fr;
        div {
          // font-size: 14px;
          // margin-bottom: 5px;
          &.lyrics,
          &.arrange,
          &.compose {
            font-weight: bold;
          }
        }
      }
    }
    //not polaroid
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

  h4 {
    margin-bottom: 30px;
  }
}
</style>
