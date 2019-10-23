// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Jefferson Center for the Arts',
  siteUrl: 'https://jeffersoncenterforthearts.com/',
  titleTemplate: '%s',
  metadata: {
    version: 'V1.1.0',
  },
  icon: {
    favicon: './static/img/icons/favicon.png',
    touchicon: './static/img/icons/touch-icon.png'
  },
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
      options: {
      }
    }
  ]
}
