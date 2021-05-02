<template>
  <div class="wrapper">
    <!-- <MV /> -->
    <Tab />
    <Sns />
  </div>
</template>

<script>
import Tab from '@/Tab.vue'
import Sns from '@/Sns.vue'
// import MV from '@/MV.vue'
export default {
  components: {
    Tab,
    Sns,
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
