// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Jefferson Center for the Arts',
  siteUrl: 'https://jeffersoncenterforthearts.com/',
  titleTemplate: '%s',
  metadata: {
    version: 'V1.4.5',
  },
  icon: {
    favicon: './static/img/icons/favicon.png',
    touchicon: './static/img/icons/touch-icon.png'
  },
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        config: {
          '/': {
            changefreq: 'daily',
            priority: 1
          },
          '/events/': {
            changefreq: 'weekly',
            priority: 0.7
          },
          '/events/classes*': {
            changefreq: 'monthly',
            priority: 0.4
          },
          '/events/*': {
            changefreq: 'weekly',
            priority: 0.6
          },
          '/events/*/*': {
            changefreq: 'monthly',
            priority: 0.6
          },
          '/*': {
            changefreq: 'monthly',
            priority: 0.3
          }
        }
      }
    }
  ]
}
