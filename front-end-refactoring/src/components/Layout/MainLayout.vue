<template>
  <Header :scrollPostion="scrollPostion"></Header>
  <Contents />
</template>

<script>
import Header from '@layout/Header'
import Contents from '@layout/Contents'

export default {
  components: {
    Header,
    Contents,
  },
  data() {
    return {
      scrollPostion: 0,
    }
  },
  methods: {
    handleScroll() {
      this.scrollPostion = window.scrollY
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
}
</script>
