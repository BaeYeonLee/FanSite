<template>
  <div class="hist-content">
    <div class="hist-title">
      <h3>History</h3>
    </div>
    <div style="width: 100%; height: 300px; display: flex" v-for="(year, index) in yearList">
      <div class="left-hist-content" style="flex: 7">
        <p v-if="year.year % 2 != 0" class="year-font">{{ year.year }}</p>
        <p v-if="year.year % 2 != 0" v-for="(hist, idx) in yearToHistory(year.year)">{{ hist.content }}</p>
        <div class="testdiv" v-if="year.year % 2 == 0"><img class="ad-image" :src="year.imgUrl" /></div>
      </div>
      <div class="center-hist-content" style="height: 300px; flex: 1">
        <div class="circle"></div>
        <div class="lines"></div>
      </div>
      <div class="right-hist-content" style="flex: 7">
        <p v-if="year.year % 2 == 0" class="year-font">{{ year.year }}</p>
        <p v-if="year.year % 2 == 0" v-for="(hist, idx) in yearToHistory(year.year)">{{ hist.content }}</p>
        <div class="testdiv" v-if="year.year % 2 != 0"><img class="ad-image" :src="year.imgUrl" /></div>
      </div>
    </div>
  </div>
</template>
<script>
import { history, historyImage } from '@common/dummy.js'
export default {
  data() {
    return {
      historyList: [],
      historyImgList: [],
      yearList: [],
    }
  },
  methods: {
    getHistoryList() {
      this.historyList = history.concat()
      const tmp = []
      this.historyList.map(item => {
        tmp.push(item.year)
      })
      let yearTmp = [...new Set(tmp)]
      yearTmp.map(item => {
        this.yearList.push({
          year: item,
        })
      })
      console.log(this.yearList)
      this.getHistoryImgList()
    },
    getHistoryImgList() {
      this.historyImgList = historyImage.concat()
      this.yearList.map(item => {
        item['imgUrl'] = this.historyImgList.find(hist => {
          return item.year == hist.year
        }).imgUrl
      })
    },
    yearToHistory(year) {
      const tmp = this.historyList.filter(item => {
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

.lines {
  top: 20px;
  left: 49%;

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
.hist-title {
  padding: 40px;
  text-align: center;
  h3 {
    font-size: 30px;
  }
}
.ad-image {
  width: 100%;
  object-position: top;
  object-fit: cover;
  height: 280px;
}
</style>
