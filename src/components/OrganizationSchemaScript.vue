<template>
  <script v-html="jsonld" type="application/ld+json">
  </script>
</template>

<script>
export default {
  name: "OrganizationSchemaScript",
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
    jsonld() {
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "https://jeffersoncenterforthearts.com/#organization",
            "name": "Jefferson Center for the Arts",
            "url": "https://jeffersoncenterforthearts.com/",
            "sameAs": [
              "https://www.facebook.com/JeffersonCenterfortheArts/"
            ],
            "logo": {
              "@type": "ImageObject",
              "@id": "https://jeffersoncenterforthearts.com/#logo",
              "url": "https://jeffersoncenterforthearts.com/img/jca-logo-lg.png",
              "width": 300,
              "height": 300,
              "caption": "Jefferson Center for the Arts"
            },
            "image": {
              "@id": "https://jeffersoncenterforthearts.com/#logo"
            }
          },
          {
            "@type": "WebSite",
            "@id": "https://jeffersoncenterforthearts.com/#website",
            "url": "https://jeffersoncenterforthearts.com/",
            "name": "Jefferson Center for the Arts",
            "publisher": {
              "@id": "https://jeffersoncenterforthearts.com/#organization"
            }
          },
          {
            "@type": "ImageObject",
            "@id": "https://jeffersoncenterforthearts.com/#primaryimage",
            "url": "https://jeffersoncenterforthearts.com/img/jca-banner.png",
            "width": 1800,
            "height": 810
          },
          {
            "@type": "WebPage",
            "@id": "https://jeffersoncenterforthearts.com/#webpage",
            "url": "https://jeffersoncenterforthearts.com/",
            "inLanguage": "en-US",
            "name": "Jefferson Center for the Arts",
            "isPartOf": {
              "@id": "https://jeffersoncenterforthearts.com/#website"
            },
            "about": {
              "@id": "https://jeffersoncenterforthearts.com/#organization"
            },
            "primaryImageOfPage": {
              "@id": "https://jeffersoncenterforthearts.com/#primaryimage"
            },
            "datePublished": "2019-10-19T08:00:00+00:00",
            "dateModified": (new Date()).toISOString()
          }
        ]
      }
    }
  },
  methods: {
  }
}
</script>