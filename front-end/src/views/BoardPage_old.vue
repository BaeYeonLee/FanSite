<template>
  <div class="board-container">
    <h2 class="board-title">
      Borad<span>
        <!-- <input type="button" class="base-btn" value="새로고침" @click="refresh" /> -->
      </span>
    </h2>
    <table>
      <tr>
        <th>글번호</th>
        <th>제목</th>
        <th>글쓴이</th>
        <th>작성일</th>
      </tr>
      <tr v-for="item in listDataTmp" :key="item.b_id" @click="moveDetail(item.b_id)">
        <td>{{ item.b_id }}</td>
        <td v-if="item.type == 'notify'" class="title-cell">
          <b>- 공지 - {{ item.title }}</b>
        </td>
        <td v-else class="title-cell">{{ item.title }}</td>
        <td>{{ item.writer }}</td>
        <td>{{ item.date }}</td>
      </tr>
    </table>
    <div style="text-align: right; width: 100%; margin-top: 10px">
      <button type="button" class="page-link">Previous</button>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button">Next</button>
    </div>
    <div class="content-action-bar">
      <select name="term">
        <option value="">전체기간</option>
        <option value="week">최근 1주</option>
        <option value="month">최근 한달</option>
      </select>
      <select name="category">
        <option value="">제목+내용</option>
        <option value="title">글제목</option>
        <option value="writer">글쓴이</option>
        <option value="b_id">글번호</option>
      </select>
      <input type="text" v-model="searchKeyword" @keyup="search" />

      <router-link to="/add-board"><input type="button" class="base-btn" value="글쓰기" /></router-link>
    </div>
  </div>
</template>

<script>
import dummy from '../common/dummy.js'
export default {
  data() {
    return {
      searchKeyword: '',
      listData: [],
      listDataTmp: [],
    }
  },
  methods: {
    moveDetail(id) {
      this.$router.push({ path: '/detail', query: { b_id: id } })
    },
    search() {
      this.listDataTmp = this.listData.filter((data) => {
        return data.title.includes(this.searchKeyword)
      })
      return this.listDataTmp
    },

    refresh() {
      this.listDataTmp = this.listData
    },
  },
  created() {
    this.listData = dummy.boardList
    this.listDataTmp = this.listData
  },
}
</script>

<style scope>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td {
  text-align: center;
  border-bottom: 1px solid #f1f1f1;
  padding: 8px;
  cursor: pointer;
}
th {
  height: 45px;
  background: #eeeeff;
  text-align: center;
}
.content-action-bar {
  margin-top: 10px;
  text-align: right;
  width: 100%;
}

.title-cell {
  width: 55%;
  text-align: left !important;
}
</style>
