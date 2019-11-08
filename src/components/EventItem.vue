<template>
  <div :class="containerClasses">
    <router-link v-if="showSummary" :to="eventPageUrl" class="summary-container">
      <category-icon :category="event.category" class="summary_icon"/>
      <span class="summary-column summary_date">{{ dateShort }}</span>
      <span class="summary-column summary_time">{{ time }}</span>
      <span class="summary-column summary_title">{{ event.title }}</span>
    </router-link>

    <template v-else>

      <!-- date and time -->
      <div class="event_date_emph" v-if="!(isWeeklyRecurring || highlightTime || atPageLevel)">
          <div class="month">{{ month }}</div>
          <div class="dayNr">{{ dayNr }}</div>
      </div>
      <div class="event_date_emph" v-if="isWeeklyRecurring || highlightTime">
          <div class="weekday">{{ weekday }}</div>
          <div class="time">{{ time }}</div>
      </div>

      <!-- !atPageLevel category and type -->
      <div v-if="!atPageLevel" class="event_type_cat">
        ~ {{ event.category }}  {{ event.type || type }} ~
      </div>

      <!-- title -->
      <router-link v-if="!atPageLevel && eventPageUrl" :to="eventPageUrl">
        <h4 class="event_title">
          <category-icon :category="event.category"/> 
          {{ event.title }}
        </h4>
      </router-link>
      <h4 v-if="!atPageLevel && !eventPageUrl" class="event_title">
        <category-icon :category="event.category"/> 
        {{ event.title }}
      </h4>
      <h1 v-if="atPageLevel" class="event_title">
        {{ event.title }}
      </h1>

      <!-- atPageLevel category and type -->
      <div v-if="atPageLevel" class="event_type_cat_pagelevel">
        <category-icon :category="event.category"/> {{ event.category }}  {{ event.type || type }}
        <span v-if="isPastEvent"> ~ PAST EVENT</span>
      </div>

      <!-- performer or presenter -->
      <div v-if="event.performer" class="event_performer">
        {{ event.performer }}
      </div>
      <div v-if="event.presenter" class="event_presenter">
        {{ event.presenter }}
      </div>

      <div class="details_container">

        <!-- main event image -->
        <div class="details_column details_column1" v-if="event.image">
          <div class="event_image">
            <g-image :src="'/img/event/'+event.image" :alt="event.title" class="anima__zoom"/>
          </div>
        </div>

        <!-- event details -->
        <div :class="['details_column', {'details_column2':!!event.image}]">
          <div v-if="!isWeeklyRecurring" class="event_date">
            {{ date }}
          </div>
          <div v-if="!isWeeklyRecurring && !highlightTime" class="event_time">
            {{ time }}
          </div>
          <div class="event_note">
            {{ event.note }}
          </div>
          <div v-if="!isPastEvent" class="event_price">
            {{ event.price }}
            <event-ticket 
              v-if="event.ticket" 
              :ticketUrl="event.ticket"
              class="event_ticket" 
            />
          </div>
          <div class="event_desc">
            <span v-html="description"/>
          </div>
        </div>

      </div>

      <!-- atPageLevel event description details -->
      <div v-if="atPageLevel">
        <div 
            v-if="descriptionDetails"
            class="event_desc event_desc_details">
          <span v-html="descriptionDetails"/>
        </div>

        <!-- atPageLevel event music stream -->
        <div 
          v-if="event.stream"
          class="event_stream"
        >
          <transition name="fade" mode="out-in">
            <span 
              v-if="showStreamContent" 
              v-html="event.stream"
            />
            <span 
              v-else 
              @click="showStreamContent=true" 
              class="event_stream_button action"
            >Click to enable music player</span>
          </transition>
        </div>

        <!-- atPageLevel event youtube video -->
        <div 
          v-if="event.youtube"
          class="event_youtube"
        >
          <transition name="fade" mode="out-in">
            <iframe 
              v-if="showYoutubeContent" 
              :src="videoSrc" 
              frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            ></iframe>
            <span
              v-else 
              @click="showYoutubeContent=true" 
              class="event_youtube_button action"
            >Click to view YouTube video</span>
          </transition>
        </div>

      </div>

      <div v-if="!atPageLevel && eventPageUrl && (descriptionDetails || event.stream || event.youtube)">
        <router-link :to="eventPageUrl">
          View more...
        </router-link>
      </div>

      <!-- Add to calendar links -->
      <div v-if="event.ics && !isPastEvent" class="ics">
        <a :href="'/ics/' + event.ics">Add to calendar</a>
      </div>

      <!-- volunteer button -->
      <button-volunteer
        v-if="!isWeeklyRecurring && !isPastEvent"
        :event="event" 
        class="button_volunteer"
      ></button-volunteer>

      <!-- event series -->
      <div 
          v-if="event.series"
          class="event_series">
        {{event.series}}
      </div>

      <!-- structured data script element -->
      <event-schema-script
        v-if="atPageLevel"
        :event="event"
      />
    </template>
  </div>
</template>

<script>
import CategoryIcon from '@/components/CategoryIcon.vue';
import EventTicket from '@/components/EventTicket.vue';
import ButtonVolunteer from '@/components/ButtonVolunteer.vue';
import EventSchemaScript from '@/components/EventSchemaScript.vue';

import date from '@/mixins/date.js'

const videoEmbedPath = "https://www.youtube-nocookie.com/embed/";
// https://developers.google.com/youtube/player_parameters
const videoEmbedQS = "?autoplay=1" 
      + "&fs=0"
      + "&playsinline=1"
      + "&rel=0"
      + (typeof window !== 'undefined' ? "&origin=" + window.location.protocol + "//" + window.location.hostname : "");

export default {
  name: 'EventItem',
  mixins: [date],
  components: {
    CategoryIcon,
    EventTicket,
    ButtonVolunteer,
    EventSchemaScript,
  },
  props: {
    event: {
      type: Object
    },
    highlightTime: {
      type: Boolean
    },
    recurrence: {
      type: String
    },
    type: {
      type: String
    },
    atPageLevel: {
      type: Boolean
    },
    showSummary: {
      type: Boolean
    }
  },
  data() {
    return {
      showStreamContent: false,
      showYoutubeContent: false,
    }
  },
  mounted () {
  },
  computed: {
    eventPageUrl() {
      return this.event.slug ? "/events/" + (this.event.category || "g") + "/" + this.event.slug : "";
    },
    containerClasses() {
      return this.showSummary ? "" : (this.atPageLevel ? "event-page group" : "event event_cat event_cat-" + this.event.category);
    },
    isPastEvent() {
      return this.isPastDate(this.event.date.start);
    },
    isWeeklyRecurring() {
      return this.recurrence==="weekly" || (this.event.weekdays && this.event.weekdays.length > 0);
    },
    weekday() {
      return this.event.weekdays && this.dateNames.days[this.event.weekdays[0]];
    },
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
    description() {
      return this.parseAsHtml(this.event.description)
    },
    descriptionDetails() {
      return this.parseAsHtml(this.event.details)
    },
    videoSrc() {
      return videoEmbedPath + this.event.youtube + videoEmbedQS
    }
  },
  methods: {
    parseAsHtml(txt) {
      return (txt && txt
        .replace(/</g, "&lt;")
        .replace(/\n/g, "<br>")
        .replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img src="/img/event/$2" alt="$1" style="max-width:100%;"/>' )
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>' )) || "";
    }
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
}
.summary-column {
  margin-right: 1em;
  flex: 1;
  display: inline-block;
  font-size: 90%;
  min-width: 100px;
}
.summary_title {
  flex: 3;
}
.summary_icon {
  margin-right: 1em;
}

.details_container {
  display: flex;
}
.details_column1 {
  flex: 2;
}
.details_column2 {
  flex: 3;
}
hr {
  margin: 2em 0;
  border-color: @color_bg;
  box-shadow: none;
}
h4 {
  margin: 0 0 1em;
}
.event-page {
  position: relative;
  width: 100%;
}
.event-page .event_date_emph {
  position: relative;
  top: 2.7em;
}
.event_type_cat {
  opacity:0.5;
}
.event_performer,
.event_presenter {
  position: relative;
  top: -1em;
}
.event_series,
.event_type_cat_pagelevel {
  text-align: center;
  position: relative;
  top: -1.5em;
  opacity: 0.7;
  color: @color-secondary-1-1;
}
.event_series {
  position: inherit;
}
.event {
  position: relative;
  background: @color-primary-1;
  margin: 5px;
  padding: 5px 8px;
  text-shadow: none;
  border-radius: 8px;
  width: 100%;
  border: 5px solid #ccc;
  box-shadow: 0 0 10px -2px @color-primary-2;
  overflow: auto;
}
.event_date_emph {
  float: right;
  background-color: @color_bg;
  padding: 5px 15px;
  text-align: center;
  box-shadow: 0 0 4px 0 @color-primary-2;
  border-radius: 6px;
  .dayNr {
    font-size: 150%;
  }
}
.event_image {
  margin-right: 1em;
  margin-bottom: 1em;
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 0 4px 0 @color-primary-2;
  }
}
.event_desc {
  margin-top: .3em;
  color: @color-secondary-1-1;
}
.event_desc_details,
.event_series,
.event_stream,
.event_youtube {
  margin-top: 2em;
  font-size: 90%;
}
.event_stream,
.event_youtube,
.button_volunteer {
  text-align: center;
}
.button_volunteer {
  margin: 2em 0;
}
.event_stream_button,
.event_youtube_button {
  border: 1px solid #575757;
  background-color: #333;
  line-height: 42px;
  display: inline-block;
  padding: 0 1em;
  color: #e99708;
  min-width: 170px;
  font-family: "Helvetica Neue",Arial,sans-serif;
  font-size: 13px;
}
.event_price {
  margin: .5em 0;
}
.event_ticket {
  display: inline;
}
.event_cat {
  .gradient-jewel-5();
}
.event_cat-music {
  .gradient-jewel-1();
 }
.event_cat-theater {
  .gradient-jewel-2();
}
.event_cat-visual-arts {
  .gradient-jewel-3();
}
.event_cat-dance {
  .gradient-jewel-4();
}
.ics {
  margin-top: 2em;
}
@media all and (max-width: 650px) {
  .event {
    font-size: 90%;
  }
  .details_container {
    display: block;
  }
}
</style>
