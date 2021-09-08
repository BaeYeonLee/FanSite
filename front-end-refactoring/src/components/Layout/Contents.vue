<template>
  <div class="contents-background" ref="back" />
  <div class="main-panel">
    <div class="contents-title" ref="contentTitle" :class="{ 'is-main-page': isMainPage }">
      <b v-if="isMainPage" class="main-title"> With U, <span class="accent"> IU </span> </b>
      <!-- scroll 시 로고 보이도록 -->
      <!-- <b v-else calss="sub-title"> TITLE</b> -->
      <b class="sub-title" v-else> {{ getTitle }} </b>
    </div>
    <div class="contents-page">
      <router-view class="iu-page" />
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '@layout/Footer'
import { mapGetters } from 'vuex'

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
  computed: {
    /* ------------------------------ VUEX METHOD ------------------------------ */
    ...mapGetters(['getTitle']),
  },
  created() {
    this.setHeaderFlag(this.$route.path)
    window.addEventListener('scroll', this.handleScroll)
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
    handleScroll() {
      const opacity = 1 - window.scrollY / 700
      this.$refs.back.style.opacity = opacity
      opacity <= 0
        ? (this.$refs.contentTitle.style.background = '#fafafa')
        : (this.$refs.contentTitle.style.background = 'rgba(13, 13, 13, 0.2)')
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
  background-position: top left;
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
      transition: 0.5s;
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
