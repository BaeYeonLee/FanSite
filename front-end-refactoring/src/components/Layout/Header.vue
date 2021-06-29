<template>
  <header :class="{ 'is-main-page': isMainPage }">
    <div class="header-contents" :class="{ 'is-main-page': isMainPage }">
      <router-link to="/iu">
        <span class="page-title"> WITH U, <span class="accent"> IU </span> </span>
      </router-link>
      <div class="page-menu">
        <a v-for="menu in menuList" class="menu-item" :href="`/#/${menu.toLowerCase()}`" :key="menu">
          {{ menu }}
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      /* ------------------------------ FLAG DATA ------------------------------ */
      isMainPage: false,
      /* ------------------------------ LIST DATA ------------------------------ */
      menuList: ['Album', 'Filmography', 'AD', 'History', 'Board'],
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
    /* ------------------------------ EVENT METHOD ------------------------------ */
    goToMain() {
      this.$router.push('/')
    },
    /* ------------------------------ SETTER METHOD ------------------------------ */
    setHeaderFlag(path) {
      this.isMainPage = path.includes('/iu')
    },
  },
}
</script>

<style lang="scss">
$IU-Header-Pink: rgba(242, 226, 220, 0.9);

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 3000;
  background-color: $IU-White;

  &.is-main-page {
    background-color: $IU-Transparent;
  }
}

.header-contents {
  max-width: 1080px;
  margin: 0 auto;
  line-height: 80px;

  color: $IU-LightViolet;
  font-size: 24px;

  &.is-main-page {
    .title {
      visibility: visible;
    }

    .page-menu {
      .menu-item {
        color: $IU-Header-Pink;
      }
    }
  }

  .page-title {
    font-size: 24px;
    color: $IU-Black-A20;
    visibility: hidden;

    .accent {
      color: $IU-Neon-A90;
    }
  }

  .page-menu {
    display: flex;
    float: right;
    width: 700px;
    height: 50px;
    margin: 15px;

    .menu-item {
      flex: 1;
      line-height: 40px;
      margin: 5px 10px;
      text-align: center;
      color: $IU-LightViolet;
    }
  }

  a {
    text-decoration-line: none;
  }
}
</style>
