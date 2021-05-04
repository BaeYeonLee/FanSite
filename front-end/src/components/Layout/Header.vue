<template>
  <header>
    <div class="header-contents">
      <span class="title"> WITH U, <span class="accent"> IU </span> </span>
      <div class="sns-box">
        <LinkIcon class="icon-sns-link"></LinkIcon>
        <a v-for="icon in icons" :href="icon.link" :key="icon.name">
          <img :src="icon.url" />
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import LinkIcon from '@/Widget/LinkIcon'

export default {
  components: {
    LinkIcon,
  },
  data() {
    return {
      icons: [
        {
          url: require('@assets/img/img_cafe.png'),
          name: 'Official Cafe',
          link: 'https://cafe.daum.net/IU/_rec',
        },
        {
          url: require('@assets/img/img_youtube.png'),
          name: 'Official Youtube',
          link: 'https://www.youtube.com/dlwlrma',
        },
        {
          url: require('@assets/img/img_instagram.jpg'),
          name: 'Official Instagram',
          link: 'https://www.instagram.com/dlwlrma/',
        },
        {
          url: require('@assets/img/img_twitter.png'),
          name: 'Officail Twitter',
          link: 'https://twitter.com/_IUofficial',
        },
        {
          url: require('@assets/img/img_facebook.png'),
          name: 'Official Facebook',
          link: 'https://www.facebook.com/iu.loen',
        },
        {
          url: require('@assets/img/img_vlive.png'),
          name: 'Official Vlive',
          link: 'https://www.vlive.tv/channel/FA895',
        },
      ],
    }
  },
  methods: {
    goToMain() {
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: #eeeeff;
  z-index: 3000;
}

.header-contents {
  width: 1400px;
  margin: 0 auto;
  font-size: 50px;
  line-height: 80px;

  .title {
    color: #bf8dd9;

    .accent {
      color: #784e8d;
    }
  }

  .sns-box {
    position: relative;
    width: 40px;
    height: 40px;
    display: inline-block;
    float: right;

    img {
      width: 40px;
      height: 40px;
      border-radius: 20px;
    }

    .icon-sns-link {
      position: relative;
      float: right;
      top: 19px;
      fill: #784e8d;
      z-index: 201;
    }

    a {
      position: relative;
      float: right;
      visibility: hidden;
    }

    &:hover {
      width: 470px;
      height: 70px;

      .icon-sns-link {
        transform: rotate(540deg);
        transition-duration: 0.25s;
      }

      @for $i from 1 through 6 {
        & a:nth-of-type(#{$i}) {
          transform: translatex(#{-30 * $i}px);
          // transition-duration: 0.5s;
          transition-duration: 0.25s;
          transition-delay: #{0.25 * $i}s;
          visibility: visible;
        }
      }
    }
  }
}
</style>
