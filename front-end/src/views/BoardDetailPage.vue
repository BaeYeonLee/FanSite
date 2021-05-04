<template>
  <div class="container">
    <div style="text-align: right; margin-bottom: 10px">
      <router-link to="/board">
        <input type="button" class="btn page-btn" value="최신목록" />
            </router-link>
      <router-link to="/add-board">
        <input type="button" class="btn page-btn" value="글쓰기" />
      </router-link>
      <router-link :to="{ path: '/edit', query: { b_id: bId } }">
        <input type="button" value="수정" class="btn" style="margin-right: 10px" />
      </router-link>
      <input type="button" value="삭제" class="btn" @click="remove" />
    </div>
    <div class="detail">
      <h2 style="font-size: 10px">자유게시판....</h2>
      <h3>{{ boardData.title }}</h3>
      <p>
        <span>{{ boardData.writer }} &nbsp;</span>
        <span>추천 : {{ boardData.recommend }} &nbsp;</span>
        <span>조회 : {{ boardData.hit }} &nbsp;</span>
        <span>작성일 : {{ boardData.date }}</span>
      </p>
      <p v-html="boardData.content"></p>
      <div style="margin-bottom: 40px">
        <input type="button" value="댓글" class="btn" @click="isShowReply = !isShowReply" style="margin-right: 10px" />
        <input type="button" value="추천해요" class="btn" style="margin-right: 10px" />
      </div>
      <div>
        <div class="reply" v-show="isShowReply">
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
              style="width: 100%; height: 100px; border: 1px solid lightgray"
              placeholder="댓글을 달아주세요."
              v-model="reply"
            ></textarea>
            <input type="button" class="btn" value="입력" style="float: right" @click="inputReply" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { boardList, replyList } from '../common/dummy.js'
export default {
  data() {
    return {
      bId: '',
      boardData: {},
      replyList: {},
      reply: '',
      isShowReply: true,
    }
  },
  methods: {
    remove() {
      let check = confirm('삭제하시겠습니까.')
      if (check) {
        this.$router.push({ path: '/board' })
      }
    },
    inputReply() {
      let tmp = {
        b_id: this.bId,

        writer: '쓴이',
        content: this.reply,
        date: '21.04.15 09:52',
      }
      this.replyList.push(tmp)
      this.reply = ''
    },
  },
  created() {
    this.bId = this.$route.query.b_id
    this.boardData = boardList.find((data) => {
      console.log(data.b_id)
      return data.b_id == this.$route.query.b_id
    })
    console.log(this.boardData)
    this.replyList = replyList
  },
}
</script>

<style>
.detail {
  border: 1px solid #f6f6f6;
  padding: 15px;
}
.reply {
  background: #f6f6f6;
  margin: -15px;
  padding: 15px;
  padding-bottom: 30px;
}
.page-btn {
  float: left;
  margin-right: 10px;
}
hr {
  border: 0.1px solid #ececec;
}
</style>
