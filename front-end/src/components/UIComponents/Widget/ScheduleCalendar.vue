<template>
  <div class="container">
    <h2 class="subtitle has-text-centered">
      <button class="button is-small is-primary is-outlined mr-5" @click="calendarData(-1)">&lt;</button>
      {{ year }}년 {{ month }}월
      <button class="button is-small is-primary is-outlined ml-5" @click="calendarData(1)">&gt;</button>
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
    <div v-if="isShowModal" id="myModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <p>Title</p>
        <input v-model="title" type="text" class="input-title" placeholder="제목" />
        <input type="button" class="base-btn" value="입력" @click="insertSchedule" />
      </div>
    </div>
  </div>
</template>
<script>
import dummy from '../../../common/dummy.js'
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
      isShowModal: false,
      title: '',
      scheduleList: [],
      scheduleDetailList: [],
      selectedDate: -1,
    }
  },
  methods: {
    getScheduleList() {
      this.scheduleList = dummy.scheduleList.filter((row) => {
        return row.date.indexOf(this.year + '-' + this.month) != -1
      })
    },
    insertSchedule() {
      let tmp = {
        s_id: dummy.scheduleList.length,
        date: this.year + '-' + this.month + '-' + this.selectedDate,
        title: this.title,
      }

      dummy.scheduleList.push(tmp)
      this.isShowModal = false
      this.title = ''
      this.getScheduleList()
    },
    selectDetail(day) {
      this.selectedDate = day
      this.isShowModal = true
    },
    setScheduleList(day) {
      return this.scheduleList.filter((row) => {
        return row.date == this.year + '-' + this.month + '-' + day
      })
    },

    closeModal() {
      this.isShowModal = false
      this.title = ''
    },
    calendarData(num) {
      if (num == -1) {
        this.month--
        if (this.month <= 0) {
          this.month = 12
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

.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  border-radius: 6px;
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 35%; /* Could be more or less, depending on screen size */
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
</style>
