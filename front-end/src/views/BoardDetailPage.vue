<template>
  <div class="container">
    <transition name="fade">
      <div class="toast" v-if="isNotValidation">Fail Validation</div>
    </transition>
    <div style="text-align: right; margin-bottom: 10px">
      <router-link to="/board">
        <input type="button" class="base-btn page-btn" value="최신목록" />
      </router-link>
      <router-link to="/add-board">
        <input type="button" class="base-btn page-btn" value="글쓰기" />
      </router-link>
      <input
        type="button"
        v-if="boardData.writer != 'Admin'"
        value="수정"
        class="base-btn"
        style="margin-right: 10px"
        @click="showModalAction"
      />
      <input type="button" value="삭제" class="base-btn" @click="showRemoveModalAction" />
    </div>
    <div class="detail">
      <h3 class="board-type-text">Board....</h3>
      <h2 class="board-title">{{ boardData.title }}</h2>
      <p class="board-info-div">
        <span>{{ boardData.writer }} &nbsp;</span>
        <span>작성일 : {{ boardData.date }}</span>
      </p>
      <hr />
      <div class="board-content-div">
        <p style="text-align: center" v-html="content"></p>
      </div>
      <div style="margin-bottom: 40px">
        <input
          type="button"
          value="댓글"
          class="base-btn"
          @click="isShowReply = !isShowReply"
          style="margin-right: 10px"
        />
        <input type="button" value="추천해요" class="base-btn" style="margin-right: 10px" />
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
              v-model="reply.content"
            ></textarea>
            <div class="reply-input-bar">
              <input v-model="reply.id" type="text" class="input-userinfo" placeholder="닉네임" />
              <input v-model="reply.pass" type="password" class="input-userinfo" placeholder="비밀번호" />
              <input type="button" class="base-btn" value="입력" style="float: right" @click="inputReply" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" v-if="isShowModal">
      <div class="modal-content">
        <b>비밀번호를 입력해주세요.</b>
        <div id="insert-bar">
          <input v-model="inputPass" type="password" class="input-userinfo input-check-pass" placeholder="비밀번호" />
          <input type="button" class="base-btn" value="입력" style="float: right" @click="checkPass" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dummy from '../common/dummy.js'
export default {
  data() {
    return {
      bId: '',
      boardData: {},
      replyList: {},
      reply: {
        id: '',
        pass: '',
        content: '',
      },
      isShowReply: true,
      content: '',
      isShowModal: false,
      inputPass: '',
      isRemove: false,
      isNotValidation: false,
    }
  },
  methods: {
    showModalAction() {
      this.isShowModal = true
    },
    showRemoveModalAction() {
      this.isRemove = true
      this.isShowModal = true
    },
    checkPass() {
      if (this.boardData.pass == this.inputPass) {
        if (this.isRemove) {
          this.isShowModal = false
          this.remove()
        } else {
          this.isShowModal = false
          this.$router.push({ path: '/edit', query: { b_id: this.boardData.b_id } })
        }
      } else {
        this.toastAction()
        this.isRemove = false
        this.isShowModal = false
      }
    },

    remove() {
      let check = confirm('삭제하시겠습니까.')
      if (check) {
        this.$router.push({ path: '/board' })
      } else {
        this.isRemove = false
      }
    },
    toastAction() {
      this.isNotValidation = true
      setTimeout(() => {
        this.isNotValidation = false
      }, 2000)
    },
    inputReply() {
      let tmp = {
        b_id: this.bId,

        writer: this.reply.id,
        pass: this.reply.pass,
        content: this.reply.content,
        date: '21.04.15 09:52',
      }
      this.replyList.push(tmp)
      this.reply = ''
    },
    getId(url) {
      var regExp = /^.*(?:youtu\.?be(?:\.com)?\/)(?:embed\/)?(?:(?:(?:(?:watch\?)?(?:time_continue=(?:[0-9]+))?.+v=)?([a-zA-Z0-9_-]+))(?:\?t\=(?:[0-9a-zA-Z]+))?)/
      var match = url.match(regExp)

      if (match) {
        return match[2]
      } else {
        return 'error'
      }
    },
  },

  created() {
    this.bId = this.$route.query.b_id
    this.boardData = dummy.boardList.find((data) => {
      return data.b_id == this.$route.query.b_id
    })

    this.replyList = dummy.replyList
    var videoId = this.getId(this.boardData.content)
    if (videoId != 'error') {
      let iframeMarkup =
        '<iframe width="560" height="315" src="//www.youtube.com/embed/' +
        videoId +
        '" frameborder="0" allowfullscreen></iframe>'

      this.content = this.boardData.content.replace(
        this.boardData.content.substring(
          this.boardData.content.indexOf('<figure class="media">'),
          this.boardData.content.indexOf('</figure>') + 9
        ),
        iframeMarkup
      )
    } else {
      this.content = this.boardData.content
    }
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
.base-btn.page-btn {
  float: left;
  margin-right: 10px;
}
hr {
  border: 0.1px solid #ececec;
}
.board-type-text {
  font-size: 15px;
}
.board-content-div {
  padding: 30px;
}
.board-info-div {
  margin-bottom: 10px;
}
.input-userinfo {
  width: 35%;
  height: 24px;
  margin-top: 1px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  font-size: 15px;
  border: 1px solid #e4e4e4;
  display: inline-block;
}
.input-userinfo::placeholder {
  font-size: 15px;
}
.input-userinfo + .input-userinfo {
  margin-left: 4%;
}
.reply-input-bar {
  text-align: left;
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
  border-radius: 6px;
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 35%; /* Could be more or less, depending on screen size */
}
.input-check-pass {
  width: 100%;
}
#insert-bar {
  height: 80px;
}
.toast {
  position: fixed;
  top: 40px;
  left: 50%;
  padding: 15px 20px;
  border-radius: 20px;
  font-weight: bold;
  overflow: hidden;
  font-size: 18px;
  background: #ef4f69;
  color: #fff;
  z-index: 10000;
  transform: translate(-50%, 10px);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
