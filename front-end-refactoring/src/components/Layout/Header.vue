<template>
  <header :class="{ 'is-main-page': isMainPage }">
    <div class="header-contents" :class="{ 'is-main-page': isMainPage }">
      <router-link to="/iu">
        <span class="page-title" :class="{ 'is-main-page': isMainPage }">
          WITH U, <span class="accent"> IU </span>
        </span>
      </router-link>
      <div class="page-menu">
        <!-- <a v-for="menu in menuList" class="menu-item" :href="`/#/${menu.toLowerCase()}`" :key="menu"> -->
        <router-link
          v-for="menu in menuList"
          class="menu-item"
          :class="{ selected: selectedTab(menu), 'menu-item-color': isScroll }"
          :to="`/${menu.toLowerCase()}`"
          :key="menu"
        >
          {{ menu }}
        </router-link>
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
      /* ------------------------------ DARK MODE DATA ------------------------------ */
      isChecked: false,
      isScroll: false,
    }
  },
  created() {
    this.setHeaderFlag(this.$route.path)
    window.addEventListener('scroll', this.headerHandleScroll)
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
    selectedTab(item) {
      return this.$route.path.includes(item.toLowerCase()) ? true : false
    },
    headerHandleScroll() {
      console.log(document.documentElement.clientHeight)
      const height = document.documentElement.clientHeight
      const half = height /2
      this.isScroll = window.scrollY > half
    },
  },
}
</script>

<style lang="scss">
$IU-Header-Pink: rgba(242, 226, 220, 0.9);
$IU-Header-Black: rgba(13, 13, 13, 0.75);

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 3000;
  background-color: white;

  &.is-main-page {
    background-color: $IU-Transparent;
    transition: 0.5s;
  }
}

.header-contents {
  max-width: 1080px;
  margin: 0 auto;
  line-height: 80px;
  color: $IU-LightViolet;
  font-size: 24px;

  &.is-main-page {
    .page-title {
      visibility: hidden;
    }

    .page-menu {
      .menu-item {
        color: $IU-Header-Pink;
      }
      .menu-item-color {
        color: $IUViolet !important;
      }
    }
  }

  .page-title {
    color: $IU-Header-Black;
    font-size: 36px;
    font-family: 'Roboto';
    font-weight: bold;
    font-style: italic;
    visibility: visible;

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
      &.selected {
        color: $IU-DeepViolet;
      }
    }
  }

  a {
    text-decoration-line: none;
  }

  .switch-div {
    display: inline-block;
    float: right;
    position: absolute;
    right: 300px;
    top: 35px;
  }
}
</style>
