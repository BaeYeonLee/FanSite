<template>
  <div class="filmograpy-page">
    <div class="container">
      <SelectedTab :tabs="filmoTabs" @changed="onChangeFilter" />
      <div style="margin-top: 10px; padding: 30px 15px">
        <div class="grid-view">
          <Thumnail v-for="filmo in showingList" v-bind="filmo" />
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
        { key: 'All', count: 0 },
        { key: 'Movie', count: 0 },
        { key: 'Drama', count: 0 },
      ],

      // Filter Data
      filterKey: 'all',
      // Album Data
      filmoList: [],
    }
  },
  computed: {
    showingList() {
      if (this.filterKey == 'all') {
        return this.filmoList
      }

      return this.filmoList.filter(filmo => {
        return filmo.type == this.filterKey
      })
    },
  },
  created() {
    console.log('------------> filmo mouted')
    this.setSubTitle()
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
  methods: {
    /* ------------------------------ VUEX METHOD ------------------------------ */
    ...mapActions(['set_title']),
    setSubTitle() {
      this.set_title({ title: 'Filmograpy' })
    },
    /* ------------------------------ EVENT METHOD ------------------------------ */
    onChangeFilter(filterKey) {
      this.filterKey = filterKey
    },
  },
}
</script>
<style lang="scss"></style>
