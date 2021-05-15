<template>
  <div class="side-bar">
    <img src="@assets/img/Lilac.jpg" />
    <div class="title"><b>IU FanSite</b></div>
    <div class="category">
      <div
        class="categories"
        :class="{ selected: isCurrent(category) }"
        v-for="category in categories"
        @click="movePage(category)"
      >
        {{ category }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  watch: {
    $route(to) {
      this.current_cat = to.path.slice(1, to.path.length).toUpperCase()
    },
  },
  data() {
    return {
      categories: ['ALBUM', 'DRAMA', 'TV', 'SCREEN', 'AD', 'HISTORY', 'BOARD'],
      current_cat: '',
    }
  },
  methods: {
    isCurrent(category) {
      return this.current_cat == category
    },
    movePage(category) {
      let path = '/' + category.toLowerCase()
      this.$router.push(path)
    },
  },
  created() {
    let path = this.$route.path
    this.current_cat = path.slice(1, path.length).toUpperCase()
  },
}
</script>
<style lang="scss" scoped>
.side-bar {
  margin: 0 auto;
  grid-area: side;
}
.title {
  text-align: center;
  margin-top: 20px;
  b {
    font-size: 20px;
  }
}
img {
  width: 200px;
}

.category {
  margin-top: 30px;
  .categories {
    margin-top: 20px;
    text-align: center;
    color: $IUViolet;
    &:hover {
      cursor: pointer;
      font-weight: bold;
      color: $IUDeepViolet;
    }

    &.selected {
      color: $IUDeepViolet;
      font-weight: bold;
    }
  }
}
</style>
