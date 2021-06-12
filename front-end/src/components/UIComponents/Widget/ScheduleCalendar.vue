<template>
  <div class="container">
    <h2 class="subtitle has-text-centered">
      <button class="button is-small mr-5 left-btn" @click="calendarData(-1)">&lt;</button>
      {{ year }}년 {{ month }}월
      <button class="button is-small ml-5 right-btn" @click="calendarData(1)">&gt;</button>
    </h2>
    <table class="sch-calendar">
      <colgroup>
        <col style="width: 15%" />
        <col style="width: 14%" />
        <col style="width: 14%" />
        <col style="width: 14%" />
        <col style="width: 14%" />
        <col style="width: 14%" />
        <col style="width: 15%" />
      </colgroup>
      <thead>
        <tr>
          <th>MON</th>
          <th>TUE</th>
          <th>WED</th>
          <th>THU</th>
          <th>FRI</th>
          <th>SAT</th>
          <th>SUN</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(date, idx) in dates" :key="idx">
          <td
            v-for="(day, secondIdx) in date"
            :key="secondIdx"
            :class="{
              'no-use-day': (idx === 0 && day >= lastMonthStart) || (dates.length - 1 === idx && nextMonthStart > day),
              'has-text-danger': day === today && month === currentMonth && year === currentYear,
            }"
            class="calendar-cell"
            @click="selectDetail(day)"
          >
            {{ day }}
            <div v-for="(item, s_idx) in setScheduleList(day)" :key="s_idx" class="schedule-cell">
              {{ item.title }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { scheduleList } from '../../../common/dummy.js'
export default {
  computed: {
    monthIndex() {
      return this.month
    },
  },
  data() {
    return {
      months: [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      month: -1,
      year: -1,
      today: -1,
      currentYear: -1,
      currentMonth: -1,
      lastMonthStart: 0,
      nextMonthStart: 0,
      scheduleList: [],
      scheduleDetailList: [],
    }
  },
  methods: {
    getScheduleList() {
      this.scheduleList = scheduleList.filter((row) => {
        return row.date.indexOf(this.year + '-' + this.month) != -1
      })
    },

    setScheduleList(day) {
      return this.scheduleList.filter((row) => {
        return row.date == this.year + '-' + this.month + '-' + day
      })
    },

    calendarData(num) {
      if (num == -1) {
        this.month--
        if (this.month <= 0) {
          this.month = 12
          this.year--
        }
      } else if (num == 1) {
        this.month++
        if (this.month > 12) {
          this.month = 1
          this.year++
        }
      }
      const [monthFirstDay, monthLastDate, lastMonthLastDate] = this.getFirstDayLastDate(this.year, this.month)
      this.dates = this.getMonthOfDays(monthFirstDay, monthLastDate, lastMonthLastDate)
      this.getScheduleList()
    },
    getFirstDayLastDate(year, month) {
      let firstDay = new Date(year, month - 1, 1).getDay() // 이번 달 시작 요일
      let lastDate = new Date(year, month, 0).getDate() // 이번 달 마지막 날짜
      let lastYear = year
      let lastMonth = month - 1
      if (month === 1) {
        lastMonth = 12
        lastYear -= 1
      }
      let prevLastDate = new Date(lastYear, lastMonth, 0).getDate() // 지난 달 마지막 날짜
      return [firstDay, lastDate, prevLastDate]
    },
    getMonthOfDays(monthFirstDay, monthLastDate, prevMonthLastDate) {
      let day = 1
      let prevDay = prevMonthLastDate - monthFirstDay + 1
      let dates = []
      let weekOfDays = []
      while (day <= monthLastDate) {
        if (day === 1) {
          for (let j = 0; j < monthFirstDay; j += 1) {
            if (j === 0) this.lastMonthStart = prevDay
            weekOfDays.push(prevDay)
            prevDay += 1
          }
        }
        weekOfDays.push(day)
        if (weekOfDays.length === 7) {
          dates.push(weekOfDays)
          weekOfDays = []
        }
        day += 1
      }
      const len = weekOfDays.length
      if (len > 0 && len < 7) {
        for (let k = 1; k <= 7 - len; k += 1) {
          weekOfDays.push(k)
        }
      }
      if (weekOfDays.length > 0) dates.push(weekOfDays) // 남은 날짜 추가
      this.nextMonthStart = weekOfDays[0]
      return dates
    },
  },
  created() {
    let date = new Date()
    this.currentYear = date.getFullYear() // 이하 현재 년, 월 가지고 있기
    this.currentMonth = date.getMonth() + 1
    this.year = this.currentYear
    this.month = this.currentMonth
    this.today = date.getDate() // 오늘 날짜
    this.calendarData(0)
  },
}
</script>
<style scope>
.sch-calendar {
  border-collapse: collapse;
  width: 100%;
  text-align: center;
}
.sch-calendar > thead > tr > th {
  background: #ef4f69;
  height: 40px;
  color: white;
}
.no-use-day {
  color: #eeeeee;
}
.has-text-danger {
  color: red;
}

.calendar-cell {
  cursor: pointer;
  vertical-align: baseline;
  height: 100px;
  border: 1px solid #d8d8d8;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.input-title {
  width: 80%;
  margin-right: 4%;
  margin-top: 1px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  height: 30px;
  border: 1px solid #e4e4e4;
  display: inline-block;
}
.schedule-cell {
  border-radius: 30px;
  color: white;
  margin-top: 4px;
  background: #9c9cff;
}
.right-btn {
  border: 0;
  height: 32px;
  vertical-align: bottom;
  background: transparent;
  cursor: pointer;
  font-weight: bold;
  float: right;
}
.left-btn {
  border: 0;
  height: 32px;
  vertical-align: bottom;
  background: transparent;
  cursor: pointer;
  font-weight: bold;
  float: left;
}
.subtitle {
  text-align: center;
}
</style>
