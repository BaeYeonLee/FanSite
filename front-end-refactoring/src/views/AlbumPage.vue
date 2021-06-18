<template>
  <div class="album-page">
    <div class="container">
      <SelectedTab :tabs="albumTabs" @changed="onChangeFilter" />
      <div style="margin-top: 10px; padding: 30px 15px">
        <div class="grid-view">
          <Thumnail v-for="album in showingList" v-bind="album" />
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
        { key: 'All', count: 0 },
        { key: 'Studio', count: 0 },
        { key: 'Mini', count: 0 },
        { key: 'Remake', count: 0 },
        { key: 'OST', count: 0 },
        { key: 'Digital Single', count: 0 },
      ],
      // Filter Data
      filterKey: 'all',
      // Album Data
      albumList: [],
    }
  },
  computed: {
    showingList() {
      if (this.filterKey == 'all') {
        return this.albumList
      }

      return this.albumList.filter(album => {
        return album.type == this.filterKey
      })
    },
  },
  created() {
    console.log('------------> mouted')
    this.setSubTitle()
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
  methods: {
    /* ------------------------------ VUEX ------------------------------ */
    ...mapActions(['set_title']),
    setSubTitle() {
      this.set_title({ title: 'ALBUM' })
    },
    onChangeFilter(filterKey) {
      this.filterKey = filterKey
    },
  },
}
</script>
<style lang="scss"></style>
