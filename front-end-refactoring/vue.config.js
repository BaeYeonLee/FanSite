const path = require('path')

module.exports = {
  publicPath: '/iu',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@assets/scss/variables.scss";
          @import "@assets/scss/fansite.scss";
        `,
      },
    },
  },
  chainWebpack: config => {
    config.module.rules.delete('eslint')
    /*---------------- HTML WEBPACK PLUGIN STTING ----------------*/
    config.plugin('html').tap(args => {
      args[0].title = 'With U, IU'
      return args
    })
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/components/UIComponents'),
        '@pages': path.resolve(__dirname, 'src/views'),
        '@layout': path.resolve(__dirname, 'src/components/Layout'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@common': path.resolve(__dirname, 'src/common'),
      },
    },
  },
}
