<template>
  <div class="intro-page">
    <div class="intro-cover">
      <div class="intro-text">
        <b class="intro-text__header">
          With U, <br />
          <span class="accent"> IU </span>
        </b>
        <br />
        <b class="intro-text__days">
          B-day | 1993. 05. 16 <br />
          Debut | 2008. 09. 23 <br />
          With | {{ countDate }} Days <br />
          <router-link to="/iu">
            <span class="intro-text__link">
              Go to <span class="accent">Fansite <IntroIcon class="icon-go-to-site" /></span>
            </span>
          </router-link>
        </b>
      </div>
    </div>
  </div>
</template>

<script>
import IntroIcon from '@/Widget/IntroIcon'

export default {
  components: {
    IntroIcon,
  },
  computed: {
    countDate() {
      const now = new Date()
      const debut = new Date(2008, 9 - 1, 23) // 월 -1 로 작성해야 함.
      const diffDate = now.getTime() - debut.getTime()
      const count = Math.ceil(diffDate / (1000 * 60 * 60 * 24))
      return count
    },
  },
}
</script>
<style lang="scss">
.intro-page {
  width: 100%;
  height: 100vh;
  background-image: url('../assets/img/img_iu_1920.jpg');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
}

.intro-cover {
  display: flex;
  // justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  width: 100%;
  max-width: 650px;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), black);
}

.intro-text {
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 260px;
  // margin: auto;
  color: rgba(255, 255, 255, 0.8);
  font-size: 28px;
  line-height: 70px;
  font-family: 'Roboto';
  font-style: italic;

  .accent {
    // color: #faec28;
    // fill: #faec28;
    color: $IUNeon;
    fill: $IUNeon;
  }

  a {
    color: rgba(255, 255, 255, 0.8);
  }

  .icon-go-to-site {
    position: relative;
    top: 5px;
    margin-left: 10px;
  }
}

.intro-text__header {
  font-size: 50px;
  line-height: 60px;
}

.intro-text__link {
  text-decoration: underline;
  cursor: pointer;
}
</style>
