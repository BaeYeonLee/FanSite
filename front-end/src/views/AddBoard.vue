<template>
  <div class="container">
    <form>
      <h4>자유게시판</h4>
      <div style="width: 100%">
        <input
          v-model="title"
          type="text"
          class="input-title"
          placeholder="제목을 입력해주세요"
        />
      </div>
      <ckeditor
        :editor="editor"
        v-model="editorData"
        :config="editorConfig"
        style="height: 150px"
      ></ckeditor>
    </form>
    {{ title }}
    {{ editorData }}
    <div style="margin-top: 10px">
      <router-link to="/board">
        <input type="button" value="최신목록" style="margin-right: 10px" />
      </router-link>
      <router-link to="/board">
        <input type="button" value="취소" style="margin-right: 10px" />
      </router-link>
      <router-link to="/board">
        <input type="button" value="등록" />
      </router-link>
    </div>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  components: {},
  data() {
    return {
      editor: ClassicEditor,
      editorData: "",
      editorConfig: {
        // The configuration of the editor.
      },
    };
  },
};
</script>

<style>
.input-title {
  width: 100%;
  position: relative;
  margin-top: 1px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  border: 0;
  border-bottom: 1px solid #e4e4e4;
}

.ck.ck-editor__main > .ck-editor__editable {
  height: 150px;
  border-color: var(--ck-color-base-border);
}
</style>
