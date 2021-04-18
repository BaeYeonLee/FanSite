<template>
  <div class="container">
    <div style="text-align: right; margin-bottom: 10px">
      <router-link :to="{ path: '/edit', query: { b_id: bId } }">
        <input type="button" value="수정" style="margin-right: 10px" />
      </router-link>
      <input type="button" value="삭제" @click="remove" />
    </div>
    <div class="detail">
      <h2>Detail Page</h2>
      <h3>{{ boardData.title }}</h3>
      <p>
        <span>{{ boardData.writer }} &nbsp;</span>
        <span>추천 : {{ boardData.recommend }} &nbsp;</span>
        <span>조회 : {{ boardData.hit }} &nbsp;</span>
        <span>작성일 : {{ boardData.date }}</span>
      </p>
      <p v-html="boardData.content"></p>
    </div>
    <div>
      <div class="reply">
        <h4>댓글 :</h4>
        <hr />
        <div v-for="item in replyList" :key="item.r_id">
          <p>
            <span
              ><b> {{ item.writer }} &nbsp;</b></span
            >
            <span style="font-size: 13px"> {{ item.date }}</span>
          </p>
          {{ item.content }}
          <hr />
        </div>
        <div style="width: 100%; text-align: center">
          <textarea
            style="width: 95%; height: 100px"
            placeholder="댓글을 달아주세요."
            v-model="reply"
          />
          <input
            type="button"
            value="입력"
            style="float: right; margin-right: 20px"
            @click="inputReply"
          />
        </div>
      </div>
    </div>
    <div style="margin-top: 10px">
      <router-link to="/board">
        <input type="button" value="최신목록" style="margin-right: 10px" />
      </router-link>
      <router-link to="/add-board">
        <input type="button" value="글쓰기" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { boardList, replyList } from "../common/dummy.js";
export default {
  data() {
    return {
      bId: "",
      boardData: {},
      replyList: {},
      reply: "",
    };
  },
  methods: {
    remove() {
      let check = confirm("삭제하시겠습니까.");
      if (check) {
        this.$router.push({ path: "/board" });
      }
    },
    inputReply() {
      let tmp = {
        b_id: this.bId,

        writer: "쓴이",
        content: this.reply,
        date: "21.04.15 09:52",
      };
      this.replyList.push(tmp);
    },
  },
  created() {
    this.bId = this.$route.query.b_id;
    this.boardData = boardList.find((data) => {
      console.log(data.b_id);
      return data.b_id == this.$route.query.b_id;
    });
    console.log(this.boardData);
    this.replyList = replyList;
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
