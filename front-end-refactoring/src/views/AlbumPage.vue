<template>
  <div class="album-page">
    <div class="container">
      <SelectedTab :tabs="albumTabs" @changed="onChangeFilter" />
      <div style="margin-top: 10px; padding: 30px 15px">
        <div class="grid-view">
          <Thumnail
            v-for="album in showingList"
            :id="album.id"
            :title="album.title"
            :date="album.release_date"
            :type="album.type"
            :image="album.image_url"
          />
          <!-- v-bind :: props 여러개 넘겨 줄 때 / 받는 쪽에서는 하나하나 설정 -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SelectedTab from '@/Widget/SelectedTab'
import Thumnail from '@/Widget/Thumnail'
import albumList from '@common/dummy/album.js'
import { mapActions } from 'vuex'

export default {
  components: {
    SelectedTab,
    Thumnail,
  },

  data() {
    return {
      // Static Data
      albumTabs: [
        { label: 'All', code: 0, count: 0 },
        { label: 'Studio', code: 1, count: 0 },
        { label: 'Mini', code: 2, count: 0 },
        { label: 'Remake', code: 3, count: 0 },
        { label: 'Single', code: 4, count: 0 },
        { label: 'Digital', code: 5, count: 0 },
        { label: 'OST', code: 6, count: 0 },
        { label: 'ETC', code: 7, count: 0 },
      ],
      // Filter Data
      filterCode: 0,
      // Album Data
      albumList: [],
    }
  },
  computed: {
    showingList() {
      if (this.filterCode == 0) {
        return this.albumList
      }

      return this.albumList.filter(album => {
        return album.album_type == this.filterCode
      })
    },
  },
  created() {
    console.log('------------> mouted')
    this.getAlbumList()
    this.setSubTitle()
  },
  methods: {
    /* ------------------------------ VUEX METHOD ------------------------------ */
    ...mapActions(['set_title']),
    setSubTitle() {
      this.set_title({ title: 'ALBUM' })
    },
    /* ------------------------------ GETTER METHOD ------------------------------ */
    getAlbumList() {
      //TODO SET API
      this.albumList = albumList.concat()

      this.albumList.forEach(album => {
        this.albumTabs.forEach(tab => {
          if (tab.key == 'All') {
            tab.count += 1
            return
          }

          const type = tab.key.toLowerCase()
          if (album.type == type) {
            tab.count += 1
          }
        })
      })
    },
    /* ------------------------------ EVENT METHOD ------------------------------ */
    onChangeFilter(filterCode) {
      this.filterCode = filterCode
    },
    /* ------------------------------ GETTER METHOD ------------------------------ */
    getAlbumType(album_type) {
      switch (album_type) {
        case 1:
          return 'Studio'
        case 2:
          return 'Mini'
        case 3:
          return 'Remake'
        case 4:
          return 'Single'
        case 5:
          return 'Digital'
        case 6:
          return 'OST'
        case 7:
          return 'ETC'
      }
    },
    /* ------------------------------ GET DATA METHOD ------------------------------ */
    async getAlbumList() {
      const tempList = await this.$api.album.getList()

      // 앨범 나온 날짜 순으로 정렬
      tempList.sort((a, b) => {
        if (a.release_date < b.release_date) {
          return 1
        }

        if (a.release_date > b.release_date) {
          return -1
        }

        return 0
      })

      // 앨범 Type 및 종류 별 갯수 설정
      this.albumList = tempList.map(album => {
        let tabItem = this.albumTabs.find(tab => {
          return tab.code == album.album_type
        })

        if (tabItem) {
          this.albumTabs[0].count++
          tabItem.count++
        }

        console.log(this.getAlbumType(album.album_type))

        return {
          ...album,
          type: this.getAlbumType(album.album_type),
        }
      })
    },
  },
}
</script>
<style lang="scss">
@media (max-width: 1860px) {
  .grid-view {
    grid-template-columns: repeat(auto-fit, 330px);
  }
}
@media (max-width: 1080px) {
  .grid-view {
    grid-template-columns: repeat(auto-fit, 216px);
  }
}
</style>
