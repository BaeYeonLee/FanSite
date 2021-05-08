<template>
  <div class="wrapper">
    <Tab />
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
    </div>
  </div>
</template>

<script>
import Tab from '@/Tab.vue'
export default {
  components: {
    Tab,
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
