<template>
  <div class="sns">
    <div class="sns-content" v-for="icon in icons" :key="icon">
      <a :href="icon.path" target="_blank">
        <img :src="icon.url" />
        {{ icon.name }}
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      icons: [
        {
          url: require('@assets/img/home.png'),
          name: 'Official Cafe',
          path: 'https://cafe.daum.net/IU/_rec',
        },
        {
          url: require('@assets/img/youtube.png'),
          name: 'Official Youtube',
          path: 'https://www.youtube.com/dlwlrma',
        },
        {
          url: require('@assets/img/instagram.png'),
          name: 'Official Instagram',
          path: 'https://www.instagram.com/dlwlrma/',
        },
        {
          url: require('@assets/img/twitter.png'),
          name: 'Officail Twitter',
          path: 'https://twitter.com/_IUofficial',
        },
        {
          url: require('@assets/img/facebook.png'),
          name: 'Official Facebook',
          path: 'https://www.facebook.com/iu.loen',
        },
        {
          url:
            'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fwww.vlive.tv%2Ffavicon.ico%3F2020091516&type=f30_30_expire24',
          name: 'Official Vlive',
          path: 'https://www.vlive.tv/channel/FA895',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.sns {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
.sns-content img {
  width: 30px;
  margin: 20px;
}
a {
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;
}
</style>
