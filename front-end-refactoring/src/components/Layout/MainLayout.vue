<template>
  <Header></Header>
  <Contents />
  <!-- <Contents :scrollPosition="scrollPosition" /> -->
</template>

<script>
import Header from '@layout/Header'
import Contents from '@layout/Contents'

export default {
  components: {
    Header,
    Contents,
  },
  // data() {
  //   return {
  //     scrollPosition: 0,
  //   }
  // },
  // methods: {
  //   handleScroll() {
  //     this.scrollPosition = window.scrollY
  //   },
  // },
  // mounted() {
  //   window.addEventListener('scroll', this.handleScroll)
  // },
}
</script>
