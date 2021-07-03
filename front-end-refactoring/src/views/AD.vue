<template>
  <div class="hist-content">
    <div class="ad-title">
      <h3>Advertising</h3>
    </div>
    <div style="width: 100%; height: 250px" v-for="(ad, idx) in adList">
      <div class="left-hist-content">
        <p v-if="idx % 2 == 0" class="year-font">{{ ad.title }}</p>
        <p v-if="idx % 2 == 0"><img class="ad-image" :src="ad.img" /></p>
      </div>
      <div class="center-hist-content" :style="{ height: 250 + 'px' }">
        <div class="circle"></div>
        <div class="line"></div>
      </div>
      <div class="right-hist-content">
        <p v-if="idx % 2 != 0" class="year-font">{{ ad.title }}</p>
        <p v-if="idx % 2 != 0"><img class="ad-image" :src="ad.img" /></p>
      </div>
    </div>
  </div>
</template>
<script>
import { adList } from '@common/dummy.js'
export default {
  data() {
    return {
      adList: [],
    }
  },
  methods: {
    getADList() {
      this.adList = adList.concat()
      const tmp = []
    },
  },
  created() {
    this.getADList()
  },
}
</script>
<style lang="scss">
.step {
  padding: 10px;
  display: flex;
  flex-direction: row;
  // justify-content: flex-start;
  justify-content: center;
  background-color: cream;
}

.v-stepper {
  position: relative;
  text-align: center;
  /*   visibility: visible; */
}

/* regular step */
.circle {
  background-color: white;
  border: 3px solid gray;
  border-radius: 100%;
  width: 20px; /* +6 for border */
  height: 20px;
  display: inline-block;
}

.line {
  top: 23px;
  left: 47%;
  z-index: 0;
  /*   height: 120px; */
  height: 100%;

  position: absolute;
  border-left: 3px solid gray;
}

.step.start .circle {
  visibility: visible;
  background-color: rgb(6, 150, 215);
  border-color: rgb(6, 150, 215);
}
.center-hist-content {
  width: 4%;
  display: inline-block;
  text-align: center;
  position: relative;
  vertical-align: top;
}
.right-hist-content {
  width: 48%;
  display: inline-block;
  text-align: left;
}
.left-hist-content {
  width: 48%;
  display: inline-block;
  text-align: right;
}
.year-font {
  font-size: 24px;
  font-weight: bold;
  color: #1f9d9d;
}
.ad-image {
  width: 100%;
  object-position: top;
  object-fit: cover;
  height: 400px;
}
.step.start .line {
  position: absolute;
  left: 50%;
  border-left: 3px solid rgb(6, 150, 215);
}

.step.active .circle {
  visibility: visible;
  border-color: rgb(6, 150, 215);
}
.step.active .line {
  border-left: 3px solid black;
}

.step:last-child .line {
  border-left: 3px solid white;
  z-index: -1; /* behind the circle to completely hide */
}

// .content {
//   display: inline-block;
//   position: absolute;
// }
.right-content {
  display: inline-block;
  position: absolute;
}
.stepper-field {
  position: relative;
  width: 100%;
}
.hist-content {
  width: 70%;
  margin: 0 auto;
}
.ad-title {
  padding: 40px;
  text-align: center;
  h3 {
    font-size: 30px;
  }
}
</style>
