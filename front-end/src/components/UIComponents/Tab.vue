<template>
  <div class="tab-box">
    <div class="tabs">
      <!--  tab name -->
      <div class="tab" v-for="(category, idx) in categories" :key="idx">
        <div class="cateogry-name" @click="isSelectedCategory(idx)" :class="{ selected: selectedTab(idx) }">
          {{ category }}
        </div>
        <div>
          <hr v-if="currentTab == idx" class="selected" />
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
import { boardList, albumList, filmographyList, categories } from '@common/dummy.js'
import Thumnail from '@/Widget/Thumnail.vue'
export default {
  components: {
    Thumnail,
  },
  data() {
    return {
      categories: [],
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
    selectedTab(index) {
      return this.currentTab == index
    },
    isSelectedCategory(index) {
      this.currentTab = index
      switch (index) {
        case 1:
          this.getFilmographyList()
          break
        case 2:
          //getTvList()
          break
        case 3:
          //getADList()
          break
        case 4:
          //getHistoryList()
          break
        case 5:
          this.getBoardList()
          break
      }
    },
    getBoardList() {
      this.boardList = boardList.concat()
    },
    getFilmographyList() {
      this.filmographyList = filmographyList.concat()
    },
    getAlbumList() {
      this.albumList = albumList.concat()
    },
    getCategories() {
      this.categories = categories.concat()
    },
  },
  created() {
    this.isSelectedCategory(0)
    this.getAlbumList()
    this.getCategories()
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
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
    color: $IUViolet;
    font-weight: bold;
  }
  &.selected {
    color: $IUDeepViolet;
    font-weight: bold;
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
hr.selected {
  border: #ccb6e1 solid 3px;
}
</style>
