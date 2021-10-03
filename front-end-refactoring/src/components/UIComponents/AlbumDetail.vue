<template>
  <div class="detail">
    <div class="album-detail">
      <div class="section-left" ref="left">
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
      <div class="section-right" ref="right">
        <h4>Track List</h4>
        <div class="expand-wrapper" v-for="(tl, idx) in albumInfo.trackList" :key="tl" @click="open(idx)">
          <!-- <transition-group name="list">-->
          <div class="expand-title">
            <div class="title-content">
              {{ number(tl.track_no) }}. {{ tl.name }}
              <!-- <span>{{ number(tl.track_no) }}. {{ tl.name }}</span> -->
            </div>
            <div class="title" v-if="tl.is_title">title</div>
            <!-- <span class="title" v-if="tl.is_title">title</span> -->
            <i class="fas fa-caret-up" v-if="openCard[idx]"></i>
            <i class="fas fa-caret-down" v-else></i>
          </div>
          <transition name="rightToLeft">
            <div class="content" v-show="openCard[idx]">
              <div class="infos">
                <div class="lyrics">작사</div>
                <div>{{ tl.lyrics_by }}</div>
                <div class="compose">작곡</div>
                <div>{{ tl.composed_by }}</div>
                <div class="arrange">편곡</div>
                <div>{{ tl.arranged_by }}</div>
                <div class="lyrics" style="margin-top: 1rem">가사</div>
                <div v-if="tl.lyrics" style="white-space: pre; margin-top: 1rem; height: 12rem; overflow-y: auto">
                  {{ tl.lyrics }}
                </div>
              </div>

              <!-- TEST UI - PORALOID -->
              <!-- <div class="polar-wrapper hi-melody">
                <div class="lyric-area" v-if="tl.lyrics">
                  {{ tl.lyrics }}
                </div>

                <div class="none-lyric-area" v-else>
                  <img :src="albumInfo.image_url" />
                </div>
                <div class="polar-infos">
                  <div class="lyrics">작사</div>
                  <div>{{ tl.lyrics_by }}</div>
                  <div class="compose">작곡</div>
                  <div>{{ tl.composed_by }}</div>
                  <div class="arrange">편곡</div>
                  <div>{{ tl.arranged_by }}</div>
                </div>
              </div> -->
              <!-- END -->
            </div>
          </transition>
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
      currentIndex: -1,
      tmpArray: [],
    }
  },
  computed: {
    openCard() {
      let array = this.tmpArray
      if (this.currentIndex < 0) {
        //선택 해제 시
        array.map((el, idx) => {
          if (el == true) {
            array[idx] = false
            this.currentIndex = -1
            return
          }
        })
        return array
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
  },
  methods: {
    open(idx) {
      if (this.currentIndex == idx) {
        this.$refs.right.style.width = '30%'
        this.$refs.left.style.width = '70%'
        this.currentIndex = -1
      } else {
        this.$refs.right.style.width = '50%'
        this.$refs.left.style.width = '50%'
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
      switch (album_type) {
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
      console.log('get Album Info')

      const albumId = this.$route.params.album_id
      console.log('albumId', albumId)
      this.albumInfo = await this.$api.album.getOne(albumId)

      console.log('albumInfo', this.albumInfo)

      this.albumInfo.trackList = await this.$api.track.getList({ album_id: albumId })

      console.log('trackList', this.albumInfo.trackList)

      // let albumID = this.$route.params.album_id
      // this.albumInfo = albumList.concat().find(album => {
      //   return album.id == albumID
      // })
      this.albumInfo.trackList.forEach((element, idx) => {
        this.tmpArray[idx] = false
      })
      //SET Sub Title on Header by Vuex
      this.setSubTitle()
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
    margin: 40px 0;
    color: $IU-BlueViolet;
    display: flex;
    // margin: 40px auto 30px;
    // grid-template-areas:
    //   'section-left section-right'
    //   'section-left section-right';
    // display: grid;
    // grid-column-gap: 2rem;
    // grid-template-columns: minmax(auto, 2fr) 1fr;
    // overflow-y: overlay;
  }
}
.section-left {
  // grid-area: section-left;
  // max-width: 360px;
  text-align: center;
  width: 70%;
  display: inline-block;
  transition: 0.5s;
  .cover {
    img {
      width: 360px;
    }
  }
  .album-info {
    width: 50%;
    display: inline-block;
    .title {
      font-weight: bold;
      margin-top: 40px;
      text-align: center;
    }
    .info {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
    }
  }
}
.section-right {
  // grid-area: section-right;
  color: $IU-BlueViolet;
  width: 30%;
  display: inline-block;
  transition: 0.5s;
  overflow-y: auto;
  .expand-wrapper {
    margin-right: 2rem;
    .expand-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      padding-bottom: 15px;
      background: $IU-White;
      // font-family: 'Hi Melody', cursive;
      .title-content {
        text-overflow: ellipsis;
        max-width: 75%;
        overflow: hidden;
        white-space: nowrap;
      }
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
      overflow: hidden;
      animation-duration: 0.5s;
      &.rightToLeft-enter-active {
        animation-name: slidein;
        transition: 0.5s;
      }
      &.rightToLeft-leave-active {
        animation-name: slideout;
        transition: 0.5s;
      }
    }
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

@keyframes slidein {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slideout {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>
