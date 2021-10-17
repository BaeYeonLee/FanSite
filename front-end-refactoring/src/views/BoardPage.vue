<template>
  <div class="tab-box">
    <!--  tab name -->
    <SelectedTab :tabs="categories" @changed="selectedTab" />
    <!-- Tab Content -->
    <div class="board-tab-contents">
      <div class="board-columns">
        <figure v-for="board in boardList">
          <div class="board-thumnail-poster">
            <figcaption class="board-title-text">{{ board.title }}</figcaption>
            <img :src="board.img" />
          </div>
        </figure>
      </div>
    </div>
    <!-- Modal Content -->
    <Dialog title="Dialog title" v-model="showModal" @closeDialog="closeDialog">
      <template #title>
        <input v-model="selectedBoard.title" type="text" class="input-title" placeholder="제목을 입력해주세요." />
      </template>
      <div class="add-image-box flex-box center-contents" @click="addImage">+</div>
    </Dialog>
  </div>
</template>

<script>
import SelectedTab from '@/Widget/SelectedTab'
import { boardList } from '@common/dummy.js'
import Dialog from '@/Dialog'
import { mapActions } from 'vuex'

export default {
  components: {
    SelectedTab,
    Dialog,
  },
  data() {
    return {
      /* ------------------------------ STATIC DATA ------------------------------ */
      categories: [
        { label: 'Board', code: 0, count: 0 },
        { label: 'Like', code: 1, count: 0 },
        { label: 'ADD', code: 2, count: 0 },
      ], // Static Data는 그냥 data에 선언해주세요 ~
      defaultBoard: {
        id: '',
        title: '',
        image: '',
        user: '',
      },
      /* ------------------------------ BOARD DATA ------------------------------ */
      boardList: [],
      selectedBoard: {
        id: '',
        title: '',
        image: '',
        user: '',
      },
      currentTab: '',
      showModal: false,
      title: '',
    }
  },
  created() {
    this.getBoardList()
    this.setSubTitle()
  },
  methods: {
    ...mapActions(['set_title']),
    setSubTitle() {
      this.set_title({ title: 'Board' })
    },
    isSelectedCategory(index) {
      return this.currentTab == index
    },
    getBoardList() {
      this.boardList = boardList.concat()
    },
    closeDialog() {
      this.showModal = false
      this.initBoardData()
    },
    initBoardData() {
      this.selectedBoard = {
        ...this.defaultBoard,
      }
    },
    selectedTab(index) {
      this.currentTab = index
      switch (index) {
        case 1:
          break
        case 2:
          console.log('!!!!modelValue')
          this.showModal = true
          break
        case 3:
          break
        case 4:
          break
        case 5:
          break
      }
    },
    addImage() {
      // TODO :: IMAGE FILE UPLOAD
    },
  },
}
</script>

<style lang="scss" scope>
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
.board-tab-contents {
  margin: 20px 0;
  white-space: nowrap;
  overflow: auto;
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
.board-images {
  width: 32%;
  display: inline-block;
}
.garally {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-row-gap: 40px;
  grid-area: content;
}
.tab-box {
  width: 60%;
  text-align: center;
  margin: 0 auto;
  padding-top: 10px;
}
.thumnail-wrapper {
  margin: 0 auto;
  .board-thumnail-poster {
    border-radius: 12px;
    height: 280px;
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
      z-index: 1;
    }
    .board-title-bar {
      width: 100%;
      height: 35px;
      background: #d1d1d1;
      color: white;
      font-weight: bold;
      display: table;
    }
    p {
      display: table-cell;
      vertical-align: middle;
    }
    &:hover {
      cursor: pointer;
      span {
        color: white;
        bottom: 45%;
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
      height: inherit;
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

.input-title {
  width: 80%;
  margin: auto;
  padding: 8px;
  border: 0;
  border-bottom: 1px solid #e4e4e4;
  font-size: 16px;

  &:focus {
    outline: 0;
  }
}
.add-image-box {
  min-height: 500px;
  text-align: center;
  font-size: 60px;
  &:hover {
    cursor: pointer;
    color: $IUViolet;
    font-weight: bold;
  }
}

.board-columns {
  white-space: normal;
  column-width: 300px;
  column-gap: 15px;
}
.board-columns figure {
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 0;
  margin-bottom: 15px;
  padding: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
.board-columns figure img {
  width: 100%;
}
.board-columns figure figcaption {
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-top: 11px;
}
.board-title-text {
  color: $IU-DeepViolet;
  font-size: 20px;
  font-weight: bold;
}
@media (max-width: 1860px) {
  .board-columns {
    column-width: 275px;
  }
}
@media (max-width: 1080px) {
  .board-columns {
    column-width: 200px;
  }
}
</style>
