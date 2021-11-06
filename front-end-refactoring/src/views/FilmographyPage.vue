<template>
  <div class="filmograpy-page">
    <div class="container">
      <SelectedTab :tabs="filmoTabs" @changed="onChangeFilter" />
      <div style="margin-top: 10px; padding: 30px 15px">
        <div class="grid-view">
          <Thumnail
            v-for="filmo in showingList"
            :id="filmo.id"
            :title="filmo.title"
            :startDate="filmo.start_date"
            :endDate="filmo.end_date"
            :cast="filmo.cast"
            :image="filmo.image_url"
            :link="filmo.homepage_url"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SelectedTab from '@/Widget/SelectedTab'
import Thumnail from '@/Widget/Thumnail'
import filmoList from '@common/dummy/filmography.js'
import { mapActions } from 'vuex'
export default {
  components: {
    SelectedTab,
    Thumnail,
  },
  data() {
    return {
      // Static Data
      filmoTabs: [
        { label: 'All', code: 0, count: 0 },
        { label: 'Movie', code: 1, count: 0 },
        { label: 'Drama', code: 2, count: 0 },
      ],

      // Filter Data
      filterCode: 0,
      // Album Data
      filmoList: [],
    }
  },
  computed: {
    showingList() {
      if (this.filterCode == 0) {
        return this.filmoList
      }

      return this.filmoList.filter(filmo => {
        return filmo.filmo_type == this.filterCode
      })
    },
  },
  created() {
    console.log('------------> filmo mouted')
    this.setSubTitle()
    this.getFilmographyList()
  },
  methods: {
    /* ------------------------------ VUEX METHOD ------------------------------ */
    ...mapActions(['set_title']),
    setSubTitle() {
      this.set_title({ title: 'Filmograpy' })
    },
    /* ------------------------------ GETTER METHOD ------------------------------ */
    getFilmoList() {
      //TODO SET API
      this.filmoList = filmoList.concat()

      this.filmoList.forEach(filmo => {
        this.filmoTabs.forEach(tab => {
          if (tab.key == 'All') {
            tab.count += 1
            return
          }

          const type = tab.key.toLowerCase()
          if (filmo.type == type) {
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
    getFilmoType(filmo_type) {
      switch (filmo_type) {
        case 1:
          return 'Movie'
        case 2:
          return 'Drama'
      }
    },
    /* ------------------------------ GET DATA METHOD ------------------------------ */
    async getFilmographyList() {
      const tempList = await this.$api.filmography.getList()

      // Filmography 나온 날짜 순으로 정렬
      tempList.sort((a, b) => {
        if (a.start_date < b.start_date) {
          return 1
        }

        if (a.start_date > b.start_date) {
          return -1
        }

        return 0
      })

      // Filmography Type 및 종류 별 갯수 설정
      this.filmoList = tempList.map(filmo => {
        let tabItem = this.filmoTabs.find(tab => {
          return tab.code == filmo.filmo_type
        })

        if (tabItem) {
          this.filmoTabs[0].count++
          tabItem.count++
        }

        return {
          ...filmo,
          type: this.getFilmoType(filmo.filmo_type),
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
