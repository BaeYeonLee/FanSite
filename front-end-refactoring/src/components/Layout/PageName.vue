<template>
  <div class="page-name">
    {{ category.toUpperCase() }} <span> ( {{ count }} )</span>
    <span class="album-title" v-if="title"> > &nbsp;&nbsp;&nbsp; {{ title }}</span>
  </div>
</template>
<script>
import { albumList, filmographyList } from '@common/dummy.js'
export default {
  watch: {
    $route(to) {
      this.getInfo(to.path)
    },
  },
  data() {
    return {
      category: '',
      title: '',
      count: -1,
    }
  },
  methods: {
    getInfo(path) {
      let id = -1
      ;[this.category, id] = path.slice(1, path.length).split('/')

      this.title = ''
      switch (this.category) {
        case 'album':
          albumList.find((album) => {
            if (album.id == id) {
              this.title = album.title
              return album.id == id
            }
          })
          this.count = albumList.length
          break
        case 'filmography':
          this.count = filmographyList.length
      }
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
