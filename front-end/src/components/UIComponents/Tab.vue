<template>
  <div class="tab-box">
    <div class="tabs">
      <!--  tab name -->
      <div class="tab" v-for="(category, idx) in categories" :key="idx">
        <div class="cateogry-name" @click="isSelectedCategory(idx)">
          {{ category }}
        </div>
        <div>
          <hr v-if="currentTab == idx" style="border: #ccb6e1 solid" />
          <hr v-else />
        </div>
      </div>
    </div>
    <!-- tab contents -->
    <div class="tab-contents">
      <div class="content">
        <div v-if="currentTab == 0" class="album-content">
          <img v-for="(img, idx) in albumImages" :key="idx" :src="img" style="width: 250px; margin: 0 40px" />
        </div>
        <div v-if="currentTab == 1" class="drama-content">
          <img
            v-for="(img, idx) in dramaImages"
            :key="idx"
            :src="img"
            style="width: 200px; height: 280px; margin: 0 40px"
          />
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
import { boardList } from '../../common/dummy.js'
export default {
  data() {
    return {
      categories: ['ALBUM', 'DRAMA', 'TV', 'SCREEN', 'AD', 'HISTORY', 'BOARD'],
      albumImages: [
        'https://musicmeta-phinf.pstatic.net/album/005/211/5211473.jpg?type=r360Fll&v=20210326102709',
        'https://musicmeta-phinf.pstatic.net/album/004/600/4600362.jpg?type=r360Fll&amp;v=20210303145028',
        'https://musicmeta-phinf.pstatic.net/album/004/550/4550593.jpg?type=r360Fll&v=20210303143526',
        'https://musicmeta-phinf.pstatic.net/album/004/448/4448098.jpg?type=r360Fll&v=20210303130024',
      ],
      dramaImages: [
        'http://img.lifestyler.co.kr/uploads/program/cheditor/2019/07/JEMFAWGGWZWCEQJRS1JL_1024x0.jpg',
        'http://img.lifestyler.co.kr/uploads/program/cheditor/2018/03/MTMBYURSDUTYOBJFHJJV.jpg',
        'http://img2.sbs.co.kr/img/sbs/RO/2016/08/12/RO16116109_w1000_h0.jpg',
        'https://musicmeta-phinf.pstatic.net/album/000/545/545993.jpg?type=r360Fll&v=20200704133012',
      ],
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
          return this.$router.push('iu/board')
      }
    },
    moveDetail(id) {
      this.$router.push({ path: '/detail', query: { b_id: id } })
    },
    isSelectedCategory(index) {
      this.currentTab = index
      console.log(this.currentTab)
    },
    getBoardList() {
      this.boardList = boardList.concat()
    },
  },
  created() {
    this.isSelectedCategory(0)
    this.getBoardList()
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
.cateogry-name:hover {
  cursor: pointer;
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
