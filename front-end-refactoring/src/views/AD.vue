<template>
  <div class="hist-content">
    <div class="ad-title">
      <h3>Advertising</h3>
    </div>
    <div style="width: 100%; height: 250px" v-for="(year, idx) in yearList">
      <div class="left-hist-content">
        <p v-if="idx % 2 == 0" class="year-font">{{ year }}</p>
        <p v-if="idx % 2 == 0" v-for="(ad, index) in getYearAd(year)">{{ ad.title }}</p>
        <div class="columns left-columns" v-if="idx % 2 != 0">
          <div
            class="test"
            v-for="(ad, index) in getYearAd(year)"
            :class="{ isLotate: index % 2 == 0, isNotLotate: index % 2 != 0 }"
          >
            <figure :class="{ isLotate: index % 2 == 0, isNotLotate: index % 2 != 0 }">
              <div class="thumnail-poster">
                <img :src="ad.image_url" />
              </div>
            </figure>
          </div>
        </div>
      </div>
      <div class="center-hist-content" :style="{ height: 250 + 'px' }">
        <div class="circle"></div>
        <div class="line"></div>
      </div>
      <div class="right-hist-content">
        <p v-if="idx % 2 != 0" class="year-font">{{ year }}</p>
        <p v-if="idx % 2 != 0" v-for="ad in getYearAd(year)">{{ ad.title }}</p>
        <div class="columns" v-if="idx % 2 == 0">
          <div
            class="test"
            :class="{ isLotate: index % 2 == 0, isNotLotate: index % 2 != 0 }"
            v-for="(ad, index) in getYearAd(year)"
          >
            <figure :class="{ isLotate: index % 2 == 0, isNotLotate: index % 2 != 0 }">
              <div class="thumnail-poster">
                <img :src="ad.image_url" />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import adList from '@common/dummy/ad.js'
export default {
  data() {
    return {
      adList: [],
      yearList: [],
    }
  },
  methods: {
    getYearAd(year) {
      return this.adList.filter(item => {
        return item.year == year
      })
    },
    getADList() {
      this.adList = adList.concat()
      let tmp = []
      this.adList.map(item => {
        tmp.push(item.year)
      })
      this.yearList = new Set(tmp)
      console.log(this.yearList)
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
.hist-title {
  padding: 40px;
  text-align: center;
  h3 {
    font-size: 30px;
  }
}

.columns {
  display: flex;
  white-space: normal;
  column-width: 130px;
  column-gap: 15px;
  min-height: 200px;
}
.left-columns {
  justify-content: flex-end;
}
.columns figure {
  background: white;
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 0;
  margin-bottom: 15px;
  padding: 10px;
  // box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  box-shadow: 7px 12px 5px 9px beige;
}
.columns figure img {
  height: 100%;
}
.columns figure figcaption {
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-top: 11px;
}
.test {
}
.isLotate {
  transform: rotate(5deg);
}
.isNotLotate {
  transform: rotate(355deg);
}
.thumnail-poster {
  border-radius: 12px;
  height: 110px;
  width: 120px;
  overflow: hidden;
  position: relative;
  &:before {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    width: 100%;
    height: 50%;
    z-index: 1;
  }
}
</style>
