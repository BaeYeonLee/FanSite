<template>
  <div class="page-name">
    {{ category.toUpperCase() }} <span> ( 28 )</span>
    <span class="album-title" v-if="title"> > &nbsp;&nbsp;&nbsp; {{ title }}</span>
  </div>
</template>
<script>
export default {
  props: {
    pageName: {
      type: String,
      default: '',
    },
  },
  watch: {
    $route(to) {
      this.getInfo(to.path)
    },
  },
  data() {
    return {
      category: '',
      title: '',
    }
  },
  methods: {
    getInfo(path) {
      ;[this.category, this.title] = path.slice(1, path.length).split('/')
    },
  },
  created() {
    this.getInfo(this.$route.path)
  },
}
</script>
<style lang="scss" scoped>
.page-name {
  font-size: 16px;
  font-weight: bold;
  color: $IUDeepViolet;
  padding-left: 20px;
  grid-area: page-name;
  .album-title {
    padding-left: 20px;
    font-size: 14px;
  }
}
</style>
