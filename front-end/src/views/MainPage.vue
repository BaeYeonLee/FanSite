<template>
  <div class="wrapper">
    <!-- <MV /> -->
    <Tab />
    <!-- <Sns /> -->
    <div class="youtube-box">
      <div class="column">
        <iframe
          class="mainpage-youtube"
          width="860"
          height="505"
          src="https://www.youtube.com/embed/v7bnOxV4jAc?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="column">
        <ScheduleCalendar></ScheduleCalendar>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from '@/Tab.vue'
import Sns from '@/Sns.vue'
import ScheduleCalendar from '@/Widget/ScheduleCalendar'

// import MV from '@/MV.vue'

export default {
  components: {
    Tab,
    Sns,
    ScheduleCalendar,
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

<style lang="scss">
.youtube-box {
  width: 100%;
  display: flex;
}
.mainpage-youtube {
  margin-top: 40px;
  width: 90%;
}

.column {
  flex: 50%;
}
</style>
