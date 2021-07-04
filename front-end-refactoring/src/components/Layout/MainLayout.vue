<template>
  <Header :scrollPosition="scrollPosition" />
  <Contents :scrollPosition="scrollPosition" />
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
      scrollPosition: 0,
    }
  },
  methods: {},
  created() {},
}
</script>
