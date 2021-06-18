<template>
  <div class="contents-background" />
  <div class="main-panel">
    <div class="contents-title" :class="{ 'is-main-page': isMainPage }">
      <b v-if="isMainPage" class="main-title"> With U, <span class="accent"> IU </span> </b>
      <!-- <b v-else calss="sub-title"> TITLE</b> -->
      <b class="sub-title" v-else> TITLE </b>
    </div>
    <div class="contents-page">
      <router-view class="iu-page" />
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '@layout/Footer'

export default {
  components: {
    Footer,
  },
  data() {
    return {
      /* ------------------------------ FLAG DATA ------------------------------ */
      isMainPage: false,
    }
  },
  created() {
    this.setHeaderFlag(this.$route.path)
  },
  watch: {
    $route(to) {
      this.setHeaderFlag(to.path)
    },
  },
  methods: {
    /* ------------------------------ SETTER METHOD ------------------------------ */
    setHeaderFlag(path) {
      this.isMainPage = path.includes('/iu')
    },
  },
}
</script>

<style lang="scss">
$IU-Title-Violte: rgba(173, 170, 191, 0.75);
$IU-Title-Black: rgba(13, 13, 13, 0.75);

.contents-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../../assets/img/img_iu_1920.jpg');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
}

.main-panel {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .contents-title {
    width: 100%;
    height: 600px;
    background: $IU-Black-A20;

    &.is-main-page {
      height: 830px;
    }
    .sub-title {
      position: absolute;
      top: 300px;
      left: 800px;
      font-family: Roboto;
      font-size: 70px;
      font-weight: bold;
      font-style: italic;
      color: $IU-Title-Violte;
    }
  }

  .main-title {
    position: relative;
    top: 415px;
    left: 960px;
    color: $IU-Title-Black;
    font-family: Roboto;
    font-size: 70px;
    font-weight: bold;
    font-style: italic;

    .accent {
      width: 100%;
      height: 600px;
      color: $IU-Neon-A90;
    }
  }

  .contents-page {
    background: $IU-White;
  }
}
</style>
