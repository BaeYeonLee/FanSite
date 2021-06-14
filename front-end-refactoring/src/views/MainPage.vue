<template>
  <div class="main-page">
    <div class="container main-menu">
      <router-link to="history">
        <div class="menu-card menu-history">
          <div class="menu-hover">History</div>
        </div>
      </router-link>
      <router-link to="album">
        <div class="menu-card menu-album">
          <div class="menu-hover">Album</div>
        </div>
      </router-link>
      <router-link to="ad">
        <div class="menu-card menu-ad">
          <img src="@assets/img/advertising.jpg" />
          <div class="menu-hover">AD</div>
        </div>
      </router-link>
      <router-link to="filmography">
        <div class="menu-card menu-filmography">
          <div class="menu-hover">Filmography</div>
        </div>
      </router-link>
      <router-link to="board">
        <div class="menu-card menu-board">
          <div class="menu-hover">Board</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
  created() {},
}
</script>

<style lang="scss" scope>
$IU-Hover-Black: rgba(0, 0, 0, 0.3);

.main-page {
  height: 820px;
  display: flex;
  align-items: center;

  .main-menu {
    height: 670px;
    margin: 40px auto 30px;

    .menu-card {
      display: inline-block;
      position: relative;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      cursor: pointer;
      overflow: hidden;

      &:hover {
        &:before {
          transform: scaleX(1);
          transition: transform 0.25s ease-in-out;
          transform-origin: left;
          // transition-delay: 0s;
        }

        .menu-hover {
          transform: translateX(0);
          transition-delay: 0.25s;
        }
      }

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $IU-Hover-Black;
        transform: scaleX(0);
        transition: transform 0.25s ease-in-out;
        transform-origin: right;
        transition-delay: 0.25s;
      }

      img {
        width: auto;
        height: 100%;
      }

      .menu-hover {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: $IU-Neon-A90;
        font-size: 40px;
        font-style: italic;
        font-weight: bold;
        transform: translateX(-100%);
        transition: transform 0.25s ease-in-out;
        transition-delay: 0s;
      }

      &.menu-history {
        width: 290px;
        height: 420px;
        background-image: url('../assets/img/history.jpg');
      }

      &.menu-album {
        left: 40px;
        width: 420px;
        height: 420px;
        background-image: url('../assets/img/album.png');
      }

      &.menu-ad {
        left: 80px;
        top: -130px;
        width: 290px;
        height: 290px;
      }

      &.menu-filmography {
        top: -110px;
        width: 750px;
        height: 210px;
        background-image: url('../assets/img/filmography.png');
      }

      &.menu-board {
        top: -110px;
        left: 40px;
        width: 290px;
        height: 355px;
        background-image: url('http://1.bp.blogspot.com/-GGv4y5Cyw80/Ur6psSKg8KI/AAAAAAAAFS4/mMd1aMWA_NM/s1600/OUdogbaby2.gif');
      }
    }
  }
}
</style>
