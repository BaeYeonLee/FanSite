<template>
  <div class="hist-content">
    <transition name="showButton">
      <div class="go-to-top" @click="goToTop" v-show="scrolled">TOP</div>
    </transition>
    <div class="hist-wrapper" v-for="(year, idx) in yearList">
      <div class="left-hist-content">
        <div v-if="idx % 2 == 0" class="year-font">{{ year }}</div>
        <div v-if="idx % 2 == 0" v-for="(ad, index) in getYearAd(year)">{{ ad.content }}</div>
        <div class="columns left-columns" v-if="idx % 2 != 0">
          <div
            v-for="(ad, index) in getFourYearAd(year)"
            class="test"
            :class="{ isLotate: index % 2 == 0, isNotLotate: index % 2 != 0 }"
          >
            <figure v-if="index < 2" :class="{ isLotate: index % 2 == 0, isNotLotate: index % 2 != 0 }">
              <div class="thumnail-poster">
                <img :src="ad.image_url" />
              </div>
            </figure>
          </div>
        </div>
      </div>
      <div
        class="center-hist-content"
        :style="{ height: getYearAd(year).length > 10 ? getYearAd(year).length * 2 + 'rem' : 19 + 'rem' }"
      >
        <div class="circle"></div>
        <div class="line"></div>
      </div>
      <div class="right-hist-content">
        <div v-if="idx % 2 != 0" class="year-font">{{ year }}</div>
        <div v-if="idx % 2 != 0" v-for="ad in getYearAd(year)">{{ ad.content }}</div>
        <div class="columns" v-if="idx % 2 == 0">
          <div
            :class="{ isLotate: index % 2 == 0, isNotLotate: index % 2 != 0 }"
            class="test"
            v-for="(ad, index) in getFourYearAd(year)"
          >
            <figure v-if="index < 2" :class="{ isLotate: index % 2 == 0, isNotLotate: index % 2 != 0 }">
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
import { history } from '@common/dummy.js'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      historyList: [],
      yearList: [],
      scrolled: false,
    }
  },
  methods: {
    /* ------------------------------ VUEX METHOD ------------------------------ */
    ...mapActions(['set_title']),
    setSubTitle() {
      this.set_title({ title: 'History' })
    },

    /* ------------------------------ GETTER METHOD ------------------------------ */
    getYearAd(year) {
      return this.historyList.filter(item => {
        return item.year == year
      })
    },
    getFourYearAd(year) {
      let tmp = []
      tmp = this.historyList.filter(item => {
        return item.year == year
      })
      if (tmp.length > 4) {
        return tmp.slice(0, 4)
      } else {
        return tmp
      }
    },
    gethistoryList() {
      this.historyList = history.concat()
      let tmp = []
      this.historyList.map(item => {
        tmp.push(item.year)
      })
      this.yearList = new Set(tmp)
    },
    /* ------------------------------ CLICK METHOD ------------------------------ */
    goToTop() {
      const location = document.querySelector('.hist-content').offsetTop - 600
      window.scrollTo({ top: location, behavior: 'smooth' })
    },
    handleScroll() {
      this.scrolled = window.scrollY > 0
    },
  },
  created() {
    this.gethistoryList()
    //SET Sub Title on Header by Vuex
    this.setSubTitle()
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    console.log('removeEventListener')
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>
<style lang="scss">
.hist-content {
  // width: 1080px;
  width: 100%;
  padding-top: 80px !important;
  margin: 0 auto;
  position: relative;
  .go-to-top {
    position: fixed;
    right: 5rem;
    bottom: 6rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 0.5rem;
    background: $IULightViolet;
    padding: 0.5rem;
    border-radius: 0.5rem;
    float: right;
    transition: 0.5s;
    &:hover {
      box-shadow: 3px 3px 5px 0px $IU-BlueViolet;
      transition: 0.3s;
    }
    &.showButton-enter-active,
    &.showButton-leave-active {
      transition: opacity 0.5s ease;
    }

    &.showButton-enter-from,
    &.showButton-leave-to {
      opacity: 0;
    }
  }
}
.hist-wrapper {
  width: 100%;
  height: auto;
  display: flex;
  align-content: flex-start;
}
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
  width: 1.25rem; /* +6 for border */
  height: 1.25rem;
  display: inline-block;
}

.line {
  top: 1.25rem;
  transform: translateX(-50%);
  left: 50%;
  z-index: 0;
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
  padding-bottom: 40px;
  // box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  // box-shadow: 7px 12px 5px 9px beige;

  box-shadow: 4px 5px 3px 0px beige;
}
.columns figure img {
  width: 100%;
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
  border-radius: 5px;
  height: 12.5rem;
  width: 12.5rem;
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
