<template>
  <div
    class="main-panel"
    :style="{ 'grid-template-columns': setGrid(isNotMain) }"
  >
    <SideBar :selected="path" v-if="isNotMain" />
    <router-view />
  </div>
</template>

<script>
import SideBar from '@layout/SideBar.vue'
export default {
  components: {
    SideBar,
  },
  watch: {
    $route(to) {
      this.checkURL(to.path)
    },
  },
  data() {
    return {
      isNotMain: false,
      path: '',
    }
  },
  methods: {
    checkURL(path) {
      this.path = path.slice(1, path.length)
      return path.includes('/main')
        ? (this.isNotMain = false)
        : (this.isNotMain = true)
    },
    setGrid(isNotMain) {
      return isNotMain == true ? '250px 1fr' : '1fr'
    },
  },
  created() {
    this.checkURL(this.$route.path)
  },
}
</script>

<style lang="scss">
.main-panel {
  position: relative;
  top: 100px;
  padding: 30px;
  width: 1440px;
  display: grid;
  grid-template-columns: 250px 1fr;
  margin: 0 auto;
}
</style>
