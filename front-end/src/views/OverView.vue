<template>
  <div class="garally">
    <div class="thumnail-wrapper" v-for="item in list" :key="item" @click="movePage(item)">
      <div class="thumnail">
        <div class="thumnail-poster" :class="{ thumnailAlbum: $route.path.indexOf('album') > -1 }">
          <img :src="item.img" />
          <span>
            {{ item.title }} <br />
            {{ item.date }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { albumList, filmographyList } from '@common/dummy.js'
export default {
  data() {
    return {
      list: [],
    }
  },
  watch: {
    $route(to) {
      to.path.indexOf('album') > -1 ? this.getAlbumList() : this.getFilmographyList()
    },
  },
  methods: {
    getAlbumList() {
      this.list = albumList.concat()
    },
    getFilmographyList() {
      this.list = filmographyList.concat()
    },
    movePage(item) {
      if (this.$route.path.indexOf('album') > -1) {
        this.$router.push({ path: `/album/${item.id}` })
      } else {
        //해당 방송사 및 영화 상세 정보 사이트 link
        window.open(item.home)
        console.log('this is not albums')
      }
    },
  },
  created() {
    this.$route.path.indexOf('album') > -1 ? this.getAlbumList() : this.getFilmographyList()
  },
}
</script>
<style lang="scss" scoped>
.garally {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-row-gap: 40px;
  grid-area: content;
}
.thumnail-wrapper {
  .thumnail-poster {
    height: 350px;
    width: 250px;
    overflow: hidden;
    position: relative;
    &:before {
      position: absolute;
      left: 0;
      bottom: 0;
      content: '';
      width: 100%;
      height: 50%;
      background: linear-gradient(to top, black, transparent);
      z-index: 1;
    }
    &:hover {
      // ? hover 시 amimate
      cursor: pointer;
      span {
        color: white;
        bottom: 45%;
      }
      &:before {
        height: 100%;
        background: linear-gradient(to top, black, #00000096);
      }
    }
    &.thumnailAlbum {
      height: 250px;
      overflow: hidden;
      &:before {
        position: absolute;
        left: 0;
        bottom: 0;
        content: '';
        width: 100%;
        height: 50%;
        background: linear-gradient(to top, black, transparent);
        z-index: 1;
      }
      &:hover {
        // ? hover 시 amimate
        cursor: pointer;
        span {
          color: white;
          bottom: 45%;
        }
        &:before {
          height: 100%;
          background: linear-gradient(to top, black, #00000096);
        }
      }
    }
    img {
      width: 250px;
    }
  }
  span {
    font-weight: bold;
    font-style: italic;
    color: $OverGray;
    font-size: 12px;
    width: 100%;
    position: absolute;
    bottom: 20px;
    //absolute 요소 중앙정렬
    transform: translateX(-50%);
    left: 50%;
    z-index: 1;
  }
  text-align: center;
}
// .btn + .btn {
//   margin-left: 10px;
// }
// .thumnail-wrapper + .img {
//   width: 250px;
// }
// .thumnail-wrapper span {
// }
a {
  text-decoration: none;
}
</style>
