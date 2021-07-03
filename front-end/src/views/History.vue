<template>
  <div class="hist-content">
    <div style="width: 100%; hieght: auto" v-for="year in yearList">
      <div class="left-hist-content">
        <p v-if="year % 2 != 0" class="year-font">{{ year }}</p>
        <p v-if="year % 2 != 0" v-for="(hist, idx) in yearToHistory(year)">{{ hist.content }}</p>
      </div>
      <div class="center-hist-content" :style="{ height: 34 + yearToHistory(year).length * 22 + 'px' }">
        <div class="circle"></div>
        <div class="line"></div>
      </div>
      <div class="right-hist-content">
        <p v-if="year % 2 == 0" class="year-font">{{ year }}</p>
        <p v-if="year % 2 == 0" v-for="(hist, idx) in yearToHistory(year)">{{ hist.content }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { history } from '@common/dummy.js'
export default {
  data() {
    return {
      historyList: [],
      yearList: [],
    }
  },
  methods: {
    getHistoryList() {
      this.historyList = history.concat()
      const tmp = []
      this.historyList.map((item) => {
        tmp.push(item.year)
      })
      this.yearList = [...new Set(tmp)]
      console.log(this.yearList)
    },
    yearToHistory(year) {
      const tmp = this.historyList.filter((item) => {
        return year == item.year
      })
      return tmp
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
  left: 22px;
  z-index: -2;
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
</style>
