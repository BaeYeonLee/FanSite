<template>
  <div class="side-bar">
    <img src="@assets/img/Lilac.jpg" />
    <div class="title"><b>IU FanSite</b></div>
    <div class="category">
      <div
        class="categories"
        :style="{ 'font-weight': setSelectedCategory(idx) }"
        v-for="(category, idx) in categories"
        :key="idx"
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
      console.log(this.selected.toUpperCase())
      this.selectedCategory = this.categories.findIndex((category) => {
        return this.selected.toUpperCase() == category
      })
      console.log(this.selectedCategory + ':-=')
      console.log(':-=' + idx)
      return this.selectedCategory == idx ? 'bold' : ''
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
  padding: 10px;
  border: $IUNeon 1px solid;
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
    color: $IUViolet;
    text-align: center;
    &:hover {
      cursor: pointer;
      font-weight: bold;
    }
  }
}
</style>
