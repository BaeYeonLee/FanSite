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
  top: 0;
  min-height: calc(100vh - 160px);
}
</style>
