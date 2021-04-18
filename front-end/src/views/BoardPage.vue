<template>
  <div class="container">
    <table>
      <tr>
        <th>글번호</th>
        <th>제목</th>
        <th>글쓴이</th>
        <th>작성일</th>
        <th>추천</th>
        <th>조회</th>
      </tr>
      <tr
        v-for="item in listData"
        :key="item.b_id"
        @click="moveDetail(item.b_id)"
      >
        <td>{{ item.b_id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.writer }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.recommend }}</td>
        <td>{{ item.hit }}</td>
      </tr>
    </table>
    <div style="text-align: right; width: 100%">
      <button type="button" class="page-link">Previous</button>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button">Next</button>
    </div>
    <div class="content-action-bar">
      <input type="button" value="내글보기" />
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
      <input type="text" />

      <router-link to="/add-board"
        ><input type="button" value="글쓰기"
      /></router-link>
    </div>
  </div>
</template>

<script>
import { boardList } from "../common/dummy.js";
export default {
  data() {
    return {
      listData: [],
    };
  },
  methods: {
    moveDetail(id) {
      this.$router.push({ path: "/detail", query: { b_id: id } });
    },
  },
  created() {
    this.listData = boardList;
  },
};
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border-top: 1px solid #dddddd;
  text-align: left;
  border-bottom: 1px solid #dddddd;
  padding: 8px;
}
.content-action-bar {
  text-align: right;
  width: 100%;
}
td {
  cursor: pointer;
}
.container {
  margin: 40px;
}
</style>
