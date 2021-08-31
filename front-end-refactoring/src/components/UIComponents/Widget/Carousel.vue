<template>
  <div class="carousel-3d-container" :style="{ height: '300px' }">
    <div
      class="carousel-3d-slider"
      :style="{
        width: '360px',
        height: '200px',
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0,
    },
    width: {
      type: Number,
      default: 360,
    },
    height: {
      type: Number,
      default: 200,
    },
    border: {
      type: Number,
      default: 1,
    },
  },
  computed: {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.carousel-3d-container {
  min-height: 1px;
  width: 100%;
  position: relative;
  z-index: 0;
  overflow: hidden;
  margin: 20px auto;
  box-sizing: border-box;
}

.carousel-3d-slider {
  position: relative;
  margin: 0 auto;
  transform-style: preserve-3d;
  -webkit-perspective: 1000px;
  -moz-perspective: 1000px;
  perspective: 1000px;
}
</style>
