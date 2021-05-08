<template>
  <div class="wrapper">
    <!-- <MV /> -->
    <Tab />
    <!-- <Sns /> -->
    <div class="youtube-box">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/v7bnOxV4jAc?autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Calendar />
    </div>
  </div>
</template>

<script>
import Tab from '@/Tab.vue'
import Sns from '@/Sns.vue'
import { Calendar, DatePicker } from 'v-calendar'

// import MV from '@/MV.vue'

export default {
  components: {
    Tab,
    Sns,
    Calendar,
    DatePicker,
    // MV,
  },
  data() {
    return {
      date: new Date(),
    }
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

<style lang="scss">
.youtube-box {
}
</style>
