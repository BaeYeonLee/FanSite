<template>
  <div>
    <div class="crop" v-for="idx in 4" :key="idx">
      <div class="gra" :key="idx" @click="moveDetail(list[idx-1])">
        <template v-if="list[idx-1]">
          <span>
            {{ list[idx-1].title }}<br />
            {{ list[idx-1].date }}
          </span>
          <img :src="list[idx-1].img" :class="{ albums: tab == 0 }" />
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: '',
    },
    tab: {
      type: Number,
      default: -1,
    },
  },
  data() {
    return {}
  },
  methods: {
    moveDetail(item) {
      if (item.album_type) {
        this.$router.push({ path: `/album/${item.id}` }) //string이랑 같이 사용할 시 `` 사용하면 편함
      } else {
        //해당 방송사 및 영화 상세 정보 사이트 link
        window.open(item.home)
      }
    },
  },
  created() {},
}
</script>
<style lang="scss">
.crop {
  .gra {
    span {
      font-size: 14px;
      color: $OverGray;
      position: absolute;
      font-style: italic;
      bottom: 20px;
      //absolute 요소 중앙정렬
      transform: translateX(-50%);
      left: 50%;
      z-index: 1;
    }
    &:hover {
      cursor: pointer;
      span {
        color: white;
        bottom: 45%;
      }
      &:before {
        height: 100%;
        background: linear-gradient(to top, black, #00000096);
        transition: 0.5s;
      }
    }
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
    img {
      width: 100%;
      position: absolute;
      transform: translateX(-50%);
      left: 50%;
      &.albums {
        //album cover div에 가득 차게
        width: 150%;
      }
    }
    text-align: center;
  }
  height: 350px;
  width: 250px;
  overflow: hidden;
  display: inline-block;
  position: relative;
  margin: 0 40px;
}
</style>
