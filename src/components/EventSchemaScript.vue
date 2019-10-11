<template>
  <script type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "{{ eventType }}Event",
    "name": "{{ event.title }}",
    "startDate": "{{ startDateTimeLocal }}",
    "endDate": "{{ endDateTimeLocal }}",
    "url": "https://jeffersoncenterforthearts.com{{ eventUrlPath }}",
    "location": {
      "@type": "Place",
      "name": "Jefferson Center for the Arts",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "United States",
        "addressRegion": "CA",
        "addressLocality": "Mount Shasta",
        "streetAddress": "1124 Pine Grove Dr",
        "postalCode": "96067"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 41.31,
        "longitude": -122.3094444
      }
    },
    "performer": {
      "@context": "http://schema.org",
      "@type": "PerformingGroup",
      "name": "{{ event.performer }}"
    },
    "description": "{{ eventDescription }}",
    "image": "https://jeffersoncenterforthearts.com/img/event/{{ event.image }}"
  }
  </script>
</template>

<script>
export default {
  name: "EventSchemaScript",
  props: {
    event: {
      type: Object,
    }
  },
  data() {
    return { 
    };
  },
  computed: {
    eventType() {
      switch (this.event.type) {
        case "music":
          return "Music";
        case "theater":
          return "Theater";
        default:
          return "";
      }
    },
    startDateTimeLocal() {
      return this.dateTimeLocal(
        this.event.date ? this.event.date.start : "",
        this.event.time ? this.event.time.start : ""
      );
    },
    endDateTimeLocal() {
      return this.dateTimeLocal(
        this.event.date ? this.event.date.end : "",
        this.event.time ? this.event.time.end : ""
      );      
    },
    eventUrlPath() {
      return this.$route.path;
    },
    eventDescription() {
      return this.event.description
        .replace(/\n/g, " ")
        .replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '' )
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1 ($2)' );
    },
  },
  methods: {
    dateTimeLocal(date, time) {
      let dt = date;
      if (time) {
        dt = date + "T" + time + ":00";
      }
      return dt;
    }
  }
}
</script>