<template>
  <div class="container">
    <div class="detail">
      <h2>Edit Page</h2>
      <h3><input type="text" v-model="boardData.title" /></h3>
      <p>
        <span>{{ boardData.writer }} &nbsp;</span>
        <span>추천 : {{ boardData.recommend }} &nbsp;</span>
        <span>조회 : {{ boardData.hit }} &nbsp;</span>
        <span>작성일 : {{ boardData.date }}</span>
      </p>
      <textarea
        v-model="boardData.content"
        style="width: 100%; height: 150px"
      />
      <div style="width: 100%; text-align: right">
        <router-link :to="{ path: '/detail', query: { b_id: bId } }">
          <input
            type="button"
            class="btn"
            value="입력"
            @click="updateBoardData"
          />
        </router-link>
      </div>
    </div>

    <div style="margin-top: 10px">
      <router-link to="/board">
        <input
          type="button"
          class="btn"
          value="최신목록"
          style="margin-right: 10px"
        />
      </router-link>
      <router-link :to="{ path: '/detail', query: { b_id: bId } }">
        <input type="button" class="btn" value="취소" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { boardList } from "../common/dummy.js";
export default {
  data() {
    return {
      bId: "",
      boardData: {},
    };
  },
  methods: {
    remove() {
      let check = confirm("삭제하시겠습니까.");
      if (check) {
        this.$router.push({ path: "/board" });
      }
    },
    updateBoardData() {},
  },
  created() {
    this.bId = this.$route.query.b_id;
    this.boardData = boardList.find((data) => {
      console.log(data.b_id);
      return data.b_id == this.$route.query.b_id;
    });
  },
};
</script>

<style>
.detail {
  border: 1px solid lightgray;
  padding: 15px;
}
.reply {
  background: lightgray;
  padding: 15px;
  padding-bottom: 30px;
}
</style>
