// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Jefferson Center for the Arts',
  siteUrl: 'https://jeffersoncenterforthearts.com/',
  titleTemplate: '%s',
  metadata: {
    version: 'V1.4.7',
  },
  icon: {
    favicon: './static/img/icons/favicon.png',
    touchicon: './static/img/icons/touch-icon.png'
  },
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/events/classes-calendar/', '/events/calendar/', '/get-involved/','/contact/'],
        config: {
          '/': {
            changefreq: 'daily',
            priority: 1
          },
          '/events/': {
            changefreq: 'weekly',
            priority: 0.3
          },
          '/events/classes*': {
            changefreq: 'monthly',
            priority: 0.1
          },
          '/events/*': {
            changefreq: 'weekly',
            priority: 0.3
          },
          '/events/*/*': {
            changefreq: 'monthly',
            priority: 0.2
          },
          '/*': {
            changefreq: 'monthly',
            priority: 0
          }
        }
      }
    }
  ]
}
