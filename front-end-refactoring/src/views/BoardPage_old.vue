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
    <!-- content -->
    <div class="tab-contents">
      <div class="garally">
        <div class="thumnail-wrapper" v-for="board in boardList">
          <div class="thumnail-poster">
            <div class="board-title-bar">
              <p>{{ board.title }}</p>
            </div>
            <img :src="board.img" />
          </div>
        </div>
      </div>
    </div>
    <div id="myModal" class="modal" v-if="showModal">
      <!-- Modal content -->
      <div class="modal-content">
        <input v-model="title" type="text" class="input-title" placeholder="제목을 입력해주세요." />
        <span class="close" @click="closeModal">&times;</span>
        <p class="add-board-btn">+</p>
      </div>
    </div>
  </div>
</template>

<script>
import { boardList } from '@common/dummy.js'
export default {
  data() {
    return {
      boardList: [],
      categories: [],
      currentTab: '',
      showModal: false,
      title: '',
    }
  },
  methods: {
    isSelectedCategory(index) {
      return this.currentTab == index
    },
    getCategories() {
      this.categories = ['Board', 'Like', 'ADD+']
    },
    getBoardList() {
      this.boardList = boardList.concat()
    },
    closeModal() {
      this.showModal = false
    },
    selectedTab(index) {
      this.currentTab = index
      switch (index) {
        case 1:
          break
        case 2:
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
  },
  created() {
    this.getCategories()
    this.getBoardList()
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
.tab-contents {
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
  .thumnail-poster {
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

.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 40%;
  border-radius: 10px;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.input-title {
  text-align: center;
  width: 90%;
  margin-right: 4%;
  margin-top: 1px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  border: 0;
  border-bottom: 1px solid #e4e4e4;
  display: inline-block;
}
.add-board-btn {
  text-align: center;
  font-size: 60px;
  &:hover {
    cursor: pointer;
    color: $IUViolet;
    font-weight: bold;
  }
}
</style>
