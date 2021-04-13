<template>
  <div class="wrapper">
    <Header></Header>
    <Contents></Contents>
  </div>
</template>

<script>
import Header from '@layout/Header'
import Contents from 'Footer/Contents'
import Footer from '@layout/Footer'

export default {
  components: {
    Header,
    Contents,
    Footer
  }
}
</script>

<style>
.wrapper {
  position: relative;
  height: 100vh;
}
</style>