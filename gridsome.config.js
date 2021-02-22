module.exports = {
  siteName: 'CJAggarwal.me',
  siteDescription: 'A website for DALI Lab.',
  siteUrl: 'cjaggarwal.me',
  plugins: [{
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-72659574-11'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  }
}
