<template>
  <div class="detail">
    <div class="album-detail">
      <div class="section-left" ref="left">
        <div class="cover">
          <img :src="albumInfo.image_url" />
        </div>
        <div class="album-info">
          <table>
            <tr v-for="item in fields">
              <th v-if="item.includes('_')">
                {{ item.substring(item.indexOf('_') + 1, item.length).toUpperCase() }}
              </th>
              <th v-else>{{ item.toUpperCase() }}</th>
              <td v-if="item == 'album_type'">{{ getAlbumType(albumInfo[item]) }}</td>
              <td v-else>{{ albumInfo[item] }}</td>
            </tr>
          </table>
        </div>
      </div>
      <!-- Section Left End-->
      <!-- Section Right Start -->
      <div class="section-right" ref="right">
        <h4 v-if="currentIndex < 0">Track List</h4>
        <!-- <button v-else class="back-to-list" @click="open(currentIndex)" title="Back To Track List">
          <i class="far fa-arrow-alt-circle-left fa-2x" />
        </button> -->

        <!-- TRACK LIST -->
        <div v-for="(tl, idx) in albumInfo.trackList" :key="tl" class="expand-wrapper">
          <div class="expand-title" @click="open(idx)" v-show="currentIndex == idx || currentIndex < 0">
            <div class="title-content">{{ number(tl.track_no) }}. {{ tl.name }}</div>
            <div class="title" v-if="tl.is_title">title</div>
            <div class="icons">
              <i class="far fa-arrow-alt-circle-left" v-if="currentIndex == idx" />
              <i class="far fa-arrow-alt-circle-right" v-else />
            </div>
          </div>
        </div>

        <!-- TRACK CONTENT -->
        <div v-for="(t, idx) in albumInfo.trackList" :key="t" v-show="currentIndex == idx" class="content">
          <transition name="rightToLeft">
            <div class="infos">
              <div class="lyrics-by">작사</div>
              <div>{{ t.lyrics_by }}</div>
              <div class="compose-by">작곡</div>
              <div>{{ t.composed_by }}</div>
              <div class="arrange-by">편곡</div>
              <div>{{ t.arranged_by }}</div>
              <div class="lyrics">가사</div>
              <div v-if="t.lyrics" class="lyrics-area">
                {{ t.lyrics }}
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
      fields: ['title', 'album_type', 'release_date'],
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
        return array
      }
    },
  },
  created() {
    this.getAlbumInfo()
  },
  methods: {
    /* ------------------------------ Click METHOD ------------------------------ */
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
    width: 360px;
    display: inline-block;
    text-align: left;
    table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0 10px;
    }
  }
}
.section-right {
  h4 {
    margin-bottom: 30px;
  }
  // grid-area: section-right;
  color: $IU-BlueViolet;
  width: 30%;
  display: inline-block;
  transition: 0.5s;
  overflow-y: auto;
  .back-to-list {
    border: none;
    background: none;
    cursor: pointer;
    margin-bottom: 2rem;
    color: $IU-BlueViolet;
    &:hover {
      color: $IU-LightViolet;
    }
  }
  .expand-wrapper {
    margin-right: 2rem;

    .expand-title {
      position: relative;
      display: flex;
      align-items: center;
      cursor: pointer;
      margin-bottom: 15px;
      padding: 0.5rem;
      .icons {
        position: absolute;
        right: 0;
        top: 0.3rem;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      // font-family: 'Hi Melody', cursive;
      &:hover {
        border-radius: 1rem;
        box-shadow: 3px 3px 5px 0px #4a4e8c;
        transition: 0.3s;
      }
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
  }

  .content {
    margin: 0 1.25rem 1.25rem 0;
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
    background: $IULightViolet;
    border-radius: 2rem;
    padding: 1rem;
    div {
      font-size: 14px;
      &.lyrics-by,
      &.arrange-by,
      &.compose-by,
      &.lyrics {
        margin-right: 35px;
        font-weight: bold;
        text-align: right;
      }
      &.lyrics {
        margin-top: 1rem;
      }
    }
    .lyrics-area {
      white-space: pre;
      margin-top: 1rem;
      // height: 12rem;
      // overflow-y: auto;
    }
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
