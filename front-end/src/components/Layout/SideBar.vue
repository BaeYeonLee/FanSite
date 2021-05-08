<template>
  <div class="side-bar">
    <img src="@assets/img/Lilac.jpg" />
    <div class="title"><b>IU FanSite</b></div>
    <div class="category">
      <div
        class="categories"
        v-for="(category, idx) in categories"
        :key="idx"
        :style="setSelectedCategory(idx)"
        @click="movePage(category)"
      >
        {{ category }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    selected: {
      type: String,
      default: '',
    },
  },
  //   watch: {
  //     selected(val) {
  //       console.log(val)
  //       if (val) {
  //         console.log(val)
  //         this.setSelectedCategory()
  //       }
  //     },
  //   },
  data() {
    return {
      categories: ['ALBUM', 'DRAMA', 'TV', 'SCREEN', 'AD', 'HISTORY', 'BOARD'],
      selectedCategory: 0,
    }
  },
  methods: {
    setSelectedCategory(idx) {
      this.selectedCategory = this.categories.findIndex((category) => {
        return this.selected.split('/')[0].toUpperCase() == category
      })
      //scss 속성으로 접근하는 방법..?
      return this.selectedCategory == idx ? 'color: #784e8d; font-weight: bold;' : ''
    },
    movePage(category) {
      let path = '/' + category.toLowerCase()
      this.$router.push(path)
    },
  },
  created() {
    this.setSelectedCategory(this.selectedCategory)
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
  }
}
</style>
