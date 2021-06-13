<template>
  <div class="main-page">
    <div class="main-menu">
      <div class="menu-card menu-history">
        <div class="menu-hover">History</div>
      </div>
      <div class="menu-card menu-album">
        <div class="menu-hover">Album</div>
      </div>
      <div class="menu-card menu-ad">
        <img src="@assets/img/advertising.jpg" />
        <div class="menu-hover">AD</div>
      </div>
      <div class="menu-card menu-filmography">
        <div class="menu-hover">Filmography</div>
      </div>
      <div class="menu-card menu-board">
        <div class="menu-hover">Board</div>
      </div>
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
  height: 830px;
  display: flex;
  align-items: center;

  .main-menu {
    max-width: 1080px;
    height: 670px;
    margin: auto;

    .menu-card {
      display: inline-block;
      position: relative;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

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
        width: 100%;
        height: 0;
        background-color: $IU-Hover-Black;
        color: $IU-Neon-A90;
        font-size: 40px;
        font-style: italic;
        font-weight: bold;
        visibility: hidden;
        transition: 0.35s;
        transform-origin: 0 100%;
      }

      &:hover .menu-hover {
        height: 100%;
        visibility: visible;
        transition: 0.35s;
        transform-origin: 0 100%;
        // transform-origin: bottom;
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
        left: 40px;
        top: -110px;
        width: 290px;
        height: 355px;
        background-image: url('http://1.bp.blogspot.com/-GGv4y5Cyw80/Ur6psSKg8KI/AAAAAAAAFS4/mMd1aMWA_NM/s1600/OUdogbaby2.gif');
      }
    }
  }
}
</style>
