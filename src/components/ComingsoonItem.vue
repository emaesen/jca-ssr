<template>
  <div class="event-summary-item">
    <div class="summary-container">
      <div class="summary_text">
        <div class="summary-main">
          <div class="summary-column summary_date_time">
            <span class="summary_date">{{ dateShort }}</span>
            <span class="summary_time">{{ time }}</span>
          </div>
          <span class="summary-column summary_title">{{ event.title }}</span>
        </div>
        <div class="summary-subcontainer">
          <span class="summary-column summary_description">{{ event.description }}</span>
        </div>
        <div class="summary-subcontainer">
          <span class="summary-column summary_note">{{ event.note }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import date from '@/mixins/date.js'

export default {
  name: 'ComingSoonItem',
  mixins: [date],
  components: {
  },
  props: {
    event: {
      type: Object
    },
  },
  data() {
    return {
    }
  },
  mounted () {
  },
  computed: {
    date() {
      let opts = {shortForm:false, showYear:true};
      let text = this.formattedDate(this.event.date.start, opts);
      if (this.event.date.end && this.event.date.end !== this.event.date.start) {
        text += " - " + this.formattedDate(this.event.date.end, opts);
      }
      return text;
    },
    dateShort() {
      let opts = {shortForm:true, showYear:false};
      let text = this.formattedDate(this.event.date.start, opts);
      if (this.event.date.end && this.event.date.end !== this.event.date.start) {
        text += " - " + this.formattedDate(this.event.date.end, opts);
      }
      return text;
    },
    time() {
      if (!this.event.time || !this.event.time.start) {
        return "";
      }
      let opts = {ampm:true,short:true};
      let text = this.formattedTime(this.event.time.start, opts);
      if (this.event.time.end) {
        text = this.formattedTimeRange(this.event.time.start, this.event.time.end, opts);
      }
      return text;
    },
    month() {
      let opts = {shortForm:true, obj:true};
      let text = this.formattedDate(this.event.date.start, opts).monthStr;
      if (this.event.date.end && this.event.date.end > this.event.date.start) {
        let text2 = this.formattedDate(this.event.date.end, opts).monthStr;
        if (text2!==text) {
          text += "," + text2;
        }
      }
      return text;
    },
    dayNr() {
      let opts = {shortForm:true, obj:true};
      let text = this.formattedDate(this.event.date.start, opts).dayNrStr;
      if (this.event.date.end && this.event.date.end > this.event.date.start) {
        text += "-" + this.formattedDate(this.event.date.end, opts).dayNrStr;
      }
      return text;
    },
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
@import '../assets/variab.less';

.summary-container {
  margin: .5em auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  border: 1px solid #575757;
  background-color: #333333aa;
  padding: 0.2em 0.5em;
  color: #e9b761ee;
  position: relative;
}
.summary-subcontainer {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}
.summary-column {
  display: inline-block;
  font-size: 90%;
  min-width: 100px;
  flex: 1;
}
.summary-main {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
}
.summary_text {
}
.summary_date_time {
  min-width: 200px;
}
.summary_date {
  display: inline-block;
  font-size: 100%;
  color: #f8d394;
  min-width: 100px;
}
.summary_title {
  font-family: @font_family_header, serif;
  color: #fffee8;
  font-size: 110%;
  flex: 5;
}
.summary_description {
  margin-top: .5em;
  flex: 6;
}
.summary_note {
  font-size: 70%;
  color: #e9b761b7;
  flex: 6;
  margin-top: 1em;
}
.summary_date,
.summary_time {
  margin-right: 1em;
}
@media all and (max-width: 560px) {
  .summary_date,
  .summary_time {
    margin-right: .15em;
    min-width: 80px;
  }
  .summary-column.summary_date_time {
    min-width: 150px;
  }
}
@media all and (max-width: 470px) {
  .summary-main,
  .summary_title {
    display: block;
  }
}
</style>
