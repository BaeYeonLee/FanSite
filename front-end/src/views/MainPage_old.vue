<template>
  <div class="wrapper">
    <!-- <MV /> -->
    <Tab />
  </div>
</template>

<script>
import Tab from '@/Tab.vue'

// import MV from '@/MV.vue'

export default {
  components: {
    Tab,
    // MV,
  },
  methods: {
    test() {
      this.$api.getUserList()
    },
  },
  created() {
    this.test()
  },
}
</script>
