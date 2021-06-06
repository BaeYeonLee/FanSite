<template>
  <div>
    <div class="step start" v-for="(history, idx) in historyList" :key="history">
      <div class="stepper-field">
        <div class="content" :style="[idx % 2 == 0 ? { left: '0%' } : { left: '52%' }]">{{ history }}</div>
        <div class="v-stepper">
          <div class="circle"></div>
          <div class="line"></div>
        </div>
        <!-- <div class="right-content" v-if="idx % 2 == 1">test.</div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { history } from '@common/dummy.js'
export default {
  data() {
    return {}
  },
  methods: {
    getHistoryList() {
      this.historyList = history.concat()
    },
  },
  created() {
    this.getHistoryList()
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
.step .circle {
  background-color: white;
  border: 3px solid gray;
  border-radius: 100%;
  width: 20px; /* +6 for border */
  height: 20px;
  display: inline-block;
}

.step .line {
  top: 23px;
  left: 12px;
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

.content {
  display: inline-block;
  position: absolute;
}
.right-content {
  display: inline-block;
  position: absolute;
}
.stepper-field {
  position: relative;
  width: 100%;
}
</style>
