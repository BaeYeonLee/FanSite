<template>
  <div class="wrapper">
    MAIN PAGE
  </div>
</template>

<script>

export default {
  methods: {
    test() {
      this.$api.getUserList()
    }
  },
  created() {
    this.test()
  },
}
</script>
