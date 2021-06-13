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
import { categories } from '@common/dummy.js'
export default {
  computed: {
    currentLabel() {
      //매번 uppder case 함수 쓰는 것보다 computed로 계산해서 사용하는 게 더 효율 성이 좋을 듯
      return this.current_cat.slice(1, this.current_cat.length).toUpperCase()
    },
  },
  watch: {
    $route(to) {
      this.current_cat = to.path
    },
  },
  data() {
    return {
      categories: [],
      current_cat: '',
    }
  },
  methods: {
    isCurrent(category) {
      // this.current_cat = this.currentLabel.split('/')[0]
      //? this.current_cat.slice(0, this.current_cat.indexOf('/'))
      //: this.current_cat
      return this.currentLabel.split('/')[0] == category
    },
    movePage(category) {
      let path = '/' + category.toLowerCase()
      this.$router.push(path)
    },
    getCategories() {
      this.categories = categories.concat()
    },
  },
  created() {
    this.current_cat = this.$route.path
    this.getCategories()
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
