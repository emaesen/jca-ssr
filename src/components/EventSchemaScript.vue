<template>
  <script v-html="jsonld" type="application/ld+json">
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
      return "/events/" + (this.event.category || "g") + "/" + this.event.slug;
    },
    eventDescription() {
      return this.event.description
        .replace(/\n/g, " ")
        .replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '' )
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1 ($2)' );
    },
    jsonld() {
      return {
        "@context": "http://schema.org",
        "@type": this.eventType + "Event",
        "@id": "https://jeffersoncenterforthearts.com" + this.eventUrlPath,
        "name": this.event.title,
        "startDate": this.startDateTimeLocal,
        "endDate": this.endDateTimeLocal,
        "url": "https://jeffersoncenterforthearts.com" + this.eventUrlPath,
        "organizer": {
          "url": "https://jeffersoncenterforthearts.com",
          "@type": "Organization",
          "name": "Jefferson Center for the Arts"
        },
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
          "name": this.event.performer || "various"
        },
        "description": this.eventDescription,
        "image": "https://jeffersoncenterforthearts.com/img/event/" + this.event.image,
        "offers": {
          "url": "https://jeffersoncenterforthearts.com" + this.eventUrlPath,
          "price": this.event.price ? this.event.price.replace("$", "") : 0,
          "@type": "Offer",
          "priceCurrency": "USD",
          "availability": "http://schema.org/InStock",
          "validFrom": "2019-11-11T11:11:11+00:00"
        }
      }
    }
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