<template>
  <div class="tab-box">
    <div class="tabs">
      <!--  tab name -->
      <div class="tab" v-for="(category, idx) in categories" :key="idx">
        <div class="cateogry-name" @click="selectedTab(idx)" :class="{ selected: isSelectedCategory(idx) }">
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
          <Thumnail :list="albumList" :tab="currentTab" />
        </div>
        <div v-if="currentTab == 1" class="filmography-content">
          <Thumnail :list="filmographyList" />
        </div>
        <div v-if="currentTab == 4" class="history-content">
          <ul>
            <li v-for="history in historyList" :key="history">{{ history }}</li>
          </ul>
        </div>
        <div v-if="currentTab == 6" class="board-content">
          <table>
            <tr v-for="item in 4" :key="item" @click="moveDetail(boardList[item - 1].b_id)">
              <td class="id-cell">{{ boardList[item - 1].b_id }}</td>
              <td class="title-cell" v-if="boardList[item - 1].type == 'notify'">
                <b> - 공지 - {{ boardList[item - 1].title }}</b>
              </td>
              <td class="title-cell" v-else>{{ boardList[item - 1].title }}</td>
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
import { boardList, categories, history } from '@common/dummy.js'
import albumList from '@common/dummy/album.js'
import filmographyList from '@common/dummy/filmography.js'
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
      historyList: [],
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
    }
  },
  methods: {
    move() {
      switch (this.currentTab) {
        case 0:
          return this.$router.push('/album')
        case 1:
          return this.$router.push('/filmography')
        case 6:
          return this.$router.push('/board')
      }
    },
    moveDetail(id) {
      this.$router.push({ path: '/detail', query: { b_id: id } })
    },
    isSelectedCategory(index) {
      return this.currentTab == index
    },
    selectedTab(index) {
      this.currentTab = index
      switch (index) {
        case 1:
          this.getFilmographyList()
          break
        case 2:
          //this.getTvList()
          break
        case 3:
          //this.getADList()
          break
        case 4:
          this.getHistoryList()
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
      // id: 4,
      // title: '호텔 델루나',
      // img: 'http://img.lifestyler.co.kr/uploads/program/cheditor/2019/07/JEMFAWGGWZWCEQJRS1JL_1024x0.jpg',
      // date: '2019/07/13 - 2019/09/01',
      // home:

      // title: '호텔 델루나',
      // cast: '장만월',
      // startDate: '2019.07.13',
      // endDate: '2019.09.01',
      // image: 'https://image.tving.com/upload/cms/caip/CAIP0900/P000941062.png/dims/resize/240',
      // link: 'http://program.tving.com/tvn/hoteldelluna',

      this.filmographyList = filmographyList.concat().map(item => {
        return {
          title: item.title,
          date: item.startDate == item.endDate ? item.startDate : `${item.startDate} ~ ${item.endDate}`,
          img: item.image,
          home: item.link,
        }
      })
    },
    getAlbumList() {
      this.albumList = albumList.concat()
    },
    getCategories() {
      this.categories = categories.concat()
    },
    getHistoryList() {
      this.historyList = history.concat()
      //concat 안 쓰면 주소값을 참조하게 됨. concat 사용하면 새로운 배열로 리턴해줌
    },
  },
  created() {
    this.selectedTab(0)
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
.history-content {
  height: 355px;
  overflow: hidden;
  padding: 30px;
}
</style>
