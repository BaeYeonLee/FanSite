<template>
  <div class="main-panel" :style="{ 'grid-template-columns': setGrid(isNotMain) }">
    <SideBar :selected="path" v-if="isNotMain" />
    <PageName :page-name="path" v-if="isNotMain" />
    <router-view />
  </div>
</template>

<script>
import SideBar from '@layout/SideBar.vue'
import PageName from '@layout/PageName.vue'
export default {
  components: {
    SideBar,
    PageName,
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
      return path.includes('/iu') ? (this.isNotMain = false) : (this.isNotMain = true)
    },
    setGrid(isNotMain) {
      return isNotMain == true ? '250px 1fr' : '1fr'
    },
  },
  created() {
    this.checkURL(this.$route.path)
    console.log(this.isNotMain)
  },
}
</script>

<style lang="scss">
.main-panel {
  max-width: 1440px;
  min-height: calc(100vh - 160px);
  margin: 80px auto 0;
  display: grid;
  padding: 40px 0px;
  grid-template-areas:
    'side page-name'
    'side content';
  grid-column-gap: 30px;
}
</style>
