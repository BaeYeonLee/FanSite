<template>
  <div class="board-container">
    <transition name="fade">
      <div class="toast" v-if="isNotValidation">Fail Validation</div>
    </transition>
    <form>
      <h2 class="board-title">글쓰기</h2>
      <div class="input-title-div">
        <input v-model="userinfo.id" type="text" class="input-id" placeholder="닉네임" />
        <input v-model="userinfo.pass" type="password" class="input-pass" placeholder="비밀번호" />
        <input v-model="title" type="text" class="input-title" placeholder="제목을 입력해주세요" />
      </div>
      <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" class="ckeditor"></ckeditor>
    </form>

    <div class="btn-navbar">
      <router-link to="/board">
        <input type="button" class="base-btn" value="최신목록" style="margin-right: 10px" />
      </router-link>
      <router-link to="/board">
        <input type="button" class="base-btn" value="취소" style="margin-right: 10px" />
      </router-link>
      <input type="button" class="base-btn" value="등록" @click="insertBoardData" />
    </div>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import dummy from '../common/dummy.js'
import UploadAdapter from '../../UploadAdapter'
export default {
  components: {},
  data() {
    return {
      userinfo: {
        id: '',
        pass: '',
      },
      title: '',
      editor: ClassicEditor,
      editorData: '',
      editorConfig: {
        table: {
          toolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
        },
        extraPlugins: [this.uploader],
      },
      isNotValidation: false,
    }
  },
  methods: {
    insertBoardData() {
      if (this.validationAction()) {
        let tmp = {
          b_id: dummy.boardList.length + 1,
          writer: this.userinfo.id,
          pass: this.userinfo.pass,
          date: '2021-04-15',
          title: this.title,
          content: this.editorData,
        }

        dummy.boardList.push(tmp)
        this.$router.push('/board')
      } else {
        this.toastAction()
      }
    },
    validationAction() {
      if (this.userinfo.id && this.userinfo.pass && this.title && this.editorData) {
        return true
      } else {
        return false
      }
    },
    toastAction() {
      this.isNotValidation = true
      setTimeout(() => {
        this.isNotValidation = false
      }, 2000)
    },
    uploader(editor) {
      editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return new UploadAdapter(loader)
      }
    },
  },
}
</script>

<style>
.input-title {
  width: 100%;
  height: 40px;
  margin-top: 1px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  border: 0;
  border-bottom: 1px solid #e4e4e4;
  font-size: 20px;
}
.input-title::placeholder {
  font-size: 20px;
}
.input-id {
  width: 45%;
  margin-right: 4%;
  margin-top: 1px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  border: 0;
  border-bottom: 1px solid #e4e4e4;
  display: inline-block;
}
.input-pass {
  width: 50%;
  margin-top: 1px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  border: 0;
  border-bottom: 1px solid #e4e4e4;
}

.ck.ck-editor__main > .ck-editor__editable {
  height: 300px;
  border-color: var(--ck-color-base-border);
}
.input-title-div {
  width: 100%;
}
.btn-navbar {
  margin-top: 10px;
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
