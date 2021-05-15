<template>
  <div class="tab-box">
    <div class="tabs">
      <!--  tab name -->
      <div class="tab" v-for="(category, idx) in categories" :key="idx">
        <div class="cateogry-name" @click="isSelectedCategory(idx)">
          {{ category }}
        </div>
        <div>
          <hr v-if="currentTab == idx" style="border: #ccb6e1 solid 3px" />
          <hr v-else />
        </div>
      </div>
    </div>
    <!-- tab contents -->
    <div class="tab-contents">
      <div class="content">
        <div v-if="currentTab == 0" class="album-content">
          <Thumnail :list="albumList" />
        </div>
        <div v-if="currentTab == 1" class="filmography-content">
          <Thumnail :list="filmographyList" />
        </div>
        <div v-if="currentTab == 6" class="board-content">
          <table>
            <tr v-for="item in 4" :key="item" @click="moveDetail(boardList[item - 1].b_id)">
              <td class="id-cell">{{ boardList[item - 1].b_id }}</td>
              <td class="title-cell">{{ boardList[item - 1].title }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <!-- end -->
    <!-- see more 버튼 -->
    <div align="right" style="margin: 20px">
      <button
        @click="move()"
        class="more-button"
        style="border: none; background: white; font-style: italic; color: gray"
      >
        see more >
      </button>
    </div>
    <!-- end -->
  </div>
</template>

<script>
import { boardList, albumList, filmographyList } from '@common/dummy.js'
import Thumnail from '@/Widget/Thumnail.vue'
export default {
  components: {
    Thumnail,
  },
  data() {
    return {
      categories: ['ALBUM', 'FILMOGRAPHY', 'TV', 'AD', 'HISTORY', 'BOARD'],
      filmographyList: [],
      currentTab: 0,
      boardList: [],
    }
  },
  methods: {
    move() {
      switch (this.currentTab) {
        case 0:
          return this.$router.push('/album')
        case 6:
          return this.$router.push('/board')
      }
    },
    moveDetail(id) {
      this.$router.push({ path: '/detail', query: { b_id: id } })
    },
    isSelectedCategory(index) {
      this.currentTab = index
    },
    getBoardList() {
      this.boardList = boardList.concat()
    },
    getfilmographyList() {
      this.filmographyList = filmographyList.concat()
    },
    getAlbumList() {
      this.albumList = albumList.concat()
    },
  },
  created() {
    this.isSelectedCategory(0)
    this.getBoardList()
    this.getfilmographyList()

    this.getAlbumList()
  },
}
</script>
<style lang="scss" scoped>
.tabs {
  display: flex;
}
.tab {
  width: 100%;
  text-align: center;
}
hr {
  color: lightgray;
  border: solid 3px;
}
.tab-contents {
  margin: 20px 0;
  white-space: nowrap;
  overflow: auto;
}
.more-button:hover {
  cursor: pointer;
}
.cateogry-name {
  &:hover {
    cursor: pointer;
  }
}
td,
th {
  border-top: 0px solid #dddddd;
  text-align: left;
  border-bottom: 0px solid #dddddd;
  padding: 8px;
}
.board-content {
  max-height: 160px;
}
.id-cell {
  width: 30px;
}
</style>
