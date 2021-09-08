<template>
  <div class="carousel-3d-slide" :class="nowClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      current: 0,
    }
  },
  computed: {
    left() {
      return this.currnet - 1 < 0 ? this.total - 1 : this.current - 1
    },
    left2() {
      return this.currnet - 2 < 0 ? this.total - 2 : this.current - 2
    },
    right() {
      return this.currnet + 1 > this.total - 1 ? 0 : this.currnet + 1
    },
    right2() {
      return this.currnet + 2 > this.total - 2 ? 0 : this.currnet + 1
    },
    /**
    computedClasses () {
                return {
                    [`left-${this.leftIndex + 1}`]: this.leftIndex >= 0,
                    [`right-${this.rightIndex + 1}`]: this.rightIndex >= 0,
                    'current': this.isCurrent
                }
            } */
    nowClass() {
      switch (this.index) {
        case 0:
          return 'current'
        case 1:
          return 'next'
        case 2:
          return 'next-2'
        case 8:
          return 'pre-2'
        case 9:
          return 'pre'
      }
      // console.log('-------------0' + this.total)
      // console.log('-------------1' + this.left)
      // console.log('-------------2' + this.left2)
      // console.log('-------------3' + this.right)
      // console.log('-------------4' + this.right2)
      // switch (true) {
      //   case this.index == this.current:
      //     return 'current'
      //   case this.left > 0:
      //     return 'pre'
      //   case this.left2 > 0:
      //     return 'pre-2'
      //   case this.right > 0:
      //     return 'next'
      //   case this.right2 > 0:
      //     return 'next-2'
      // }
    },
  },
  methods: {
    /* ------------------------------ SETTER METHOD ------------------------------ */
    number(item) {
      /**
       * SET LIST NUMBERING
       * 01, 02, 03 ...
       */
      return item > 9 ? item : `0${item}`
    },
  },
}
</script>
<style lang="scss" scoped>
.carousel-3d-slide {
  color: $IU-BlueViolet;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
  top: 0;
  width: 100%;
  height: 100%;
  border: $IU-BlueViolet 1px solid;
  padding: 20px;
  border-radius: 10px;
  // border-radius: 1px;
  // border-color: #000;
  // border-color: rgba(0, 0, 0, 0.4);
  // border-style: solid;
  background-color: white;
  display: block;
  margin: 0;
  box-sizing: border-box;
  text-align: left;
  &.current {
    opacity: 1 !important;
    visibility: visible !important;
    transform: none !important;
    z-index: 999;
  }
  &.pre {
    border-width: 1px;
    transition: transform 500ms ease 0s, opacity 500ms ease 0s, visibility 500ms ease 0s;
    transform: translateX(-240px) translateZ(-400px) rotateY(35deg);
    top: 0px;
    z-index: 998;
    opacity: 1;
    visibility: visible;
  }
  &.pre-2 {
    border-width: 1px;
    transition: transform 500ms ease 0s, opacity 500ms ease 0s, visibility 500ms ease 0s;
    transform: translateX(-480px) translateZ(-500px) rotateY(35deg);
    top: 0px;
    z-index: 997;
    opacity: 1;
    visibility: visible;
  }
  &.next {
    border-width: 1px;
    transition: transform 500ms ease 0s, opacity 500ms ease 0s, visibility 500ms ease 0s;
    transform: translateX(240px) translateZ(-400px) rotateY(-35deg);
    top: 0px;
    z-index: 998;
    opacity: 1;
    visibility: visible;
  }
  &.next-2 {
    border-width: 1px;
    transition: transform 500ms ease 0s, opacity 500ms ease 0s, visibility 500ms ease 0s;
    transform: translateX(480px) translateZ(-500px) rotateY(-35deg);
    top: 0px;
    z-index: 997;
    opacity: 1;
    visibility: visible;
  }
}
</style>
