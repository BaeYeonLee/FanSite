<template>
  <div class="wrapper">
    <Header></Header>
    <Contents></Contents>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@layout/Header'
import Contents from '@layout/Contents'
import Footer from '@layout/Footer'

export default {
  components: {
    Header,
    Contents,
    Footer,
  },
}
</script>

<style>
.wrapper {
  position: relative;
  min-height: 100%;
  height: 100vh;
  /* overflow: auto; */
}
</style>
