<template>
  <div class="album-detail">
    <div class="album-cover">
      <img :src="albumInfo.cover" />
    </div>
    <div class="album-info">
      <div class="title">
        {{ albumInfo.title }}
      </div>
      <div>
        {{ albumInfo.number }}
      </div>
      <div>
        {{ albumInfo.release }}
      </div>
    </div>

    <h2>Track List</h2>
    <div class="track-list">
      <div class="list-content" v-for="tl in albumInfo.trackList" :key="tl">
        <div class="content">
          <b class="song-title">{{ tl.no }} {{ tl.name }} </b><br /><br />
          <b>lyrics by </b> {{ tl.lyrics.join(', ') }}<br />
          <b>composed by </b> {{ tl.composed.join(', ') }}<br />
          <b>arranged by </b> {{ tl.arranged.join(', ') }}<br />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      albumInfo: {
        albumTitle: '',
        cover: 'https://musicmeta-phinf.pstatic.net/album/005/211/5211473.jpg?type=r360Fll&v=20210326102709',
        number: 'IU 정규 5집',
        release: '2021.03.25',
        trackList: [
          {
            no: 1,
            name: '라일락',
            lyrics: ['아이유'],
            composed: ['임수호', 'Dr.JO', '옹킴', 'N!ko'],
            arranged: ['임수호', '옹킴', 'N!ko'],
          },
          {
            no: 2,
            name: 'Flu',
            lyrics: ['아이유'],
            composed: [
              '라이언 전',
              'Martin Coogan',
              'Madilyn Bailey',
              'Zacchariah Palmer',
              'London Jackson',
              'Jacob Chatelain',
            ],
            arranged: ['Jacob Chatelain', 'London Jackson', '라이언 전'],
          },
          {
            no: 3,
            name: 'Coin',
            lyrics: ['아이유'],
            composed: ['Poptime', 'Kako', '아이유'],
            arranged: ['Poptime'],
          },
          {
            no: 4,
            name: '봄 안녕 봄',
            lyrics: ['아이유'],
            composed: ['나얼'],
            arranged: ['강화성'],
          },
        ],
      },
    }
  },
  created() {
    this.albumInfo.title = this.$route.params.album_title
  },
}
</script>
<style lang="scss" scoped>
.album-detail {
  padding: 100px 0;
  display: grid;
  grid-template-areas:
    'cover info'
    'tracks tracks'
    'track track';
}
.album-cover {
  margin: 0 auto;
  grid-area: cover;
  img {
    width: 350px;
  }
}
.album-info {
  text-align: center;
  grid-area: info;

  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
}
h2 {
  grid-area: tracks;
  text-align: center;
  margin: 30px 0 20px;
}
.track-list {
  grid-area: track;
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: right;
  .content {
    .song-title {
      font-size: 18px;
    }
    margin-top: 20px;
    padding-left: 30px;
  }
}
</style>
