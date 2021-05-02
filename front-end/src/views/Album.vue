<template>
  <div class="album-garally">
    <div class="thumnail" v-for="album in albums" :key="album">
      <router-link :to="`/album/${album.title}`">
        <img :src="album.img" />
        <span>{{ album.title }}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      albums: [
        {
          img:
            'https://musicmeta-phinf.pstatic.net/album/005/211/5211473.jpg?type=r360Fll&v=20210326102709',
          title: 'Lilac',
        },

        {
          img:
            'https://musicmeta-phinf.pstatic.net/album/004/600/4600362.jpg?type=r360Fll&amp;v=20210303145028',
          title: 'I-Land OST',
        },
        {
          img:
            'https://musicmeta-phinf.pstatic.net/album/004/550/4550593.jpg?type=r360Fll&v=20210303143526',
          title: 'eight',
        },
        {
          img:
            'https://musicmeta-phinf.pstatic.net/album/004/448/4448098.jpg?type=r360Fll&v=20210303130024',
          title: '사랑의 불시착 OST',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.album-garally {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 40px;
  margin-bottom: 50px;
  padding-bottom: 30px;
}
.thumnail {
  text-align: center;
  height: 300px;
}
.thumnail img {
  width: 250px;
}
.thumnail span {
  font-weight: bold;
  font-style: italic;
  color: gray;
  display: block;
  line-height: 2;
  font-size: 12px;
  margin-top: 10px;
}
a {
  text-decoration: none;
}
</style>
