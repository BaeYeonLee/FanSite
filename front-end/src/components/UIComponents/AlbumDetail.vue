<template>
  <div class="album-detail">
    <!-- <div class="album-cover">
      <img :src="albumCover" />
    </div> -->
    <!-- <div class="album-title">
      {{ albumTitle }}
    </div> -->
    <div class="track-list">
      <img :src="trackList" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      albumTitle: '',
      albumCover:
        'https://musicmeta-phinf.pstatic.net/album/005/211/5211473.jpg?type=r360Fll&v=20210326102709',
      trackList:
        'https://pbs.twimg.com/media/EwC5CKVWYAEuzXF?format=jpg&name=4096x4096',
    }
  },
  created() {
    this.albumTitle = this.$route.params.album_title
  },
}
</script>
<style lang="scss" scoped>
.album-detail {
  display: grid;
  height: fit-content;
  justify-content: center;
  padding-bottom: 150px;
}
.album-cover {
  margin: 0 auto;
}
.album-title {
  text-align: center;
}
.album-cover img {
  width: 250px;
}
.track-list img {
  width: 700px;
}
</style>
