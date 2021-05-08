<template>
  <div class="main-panel" :style="{ 'grid-template-columns': setGrid(isNotMain) }">
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
      return path.includes('/main') ? (this.isNotMain = false) : (this.isNotMain = true)
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
  max-width: 1440px;
  min-height: calc(100vh-160px);
  margin: 80px auto 0;
}
</style>
