const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "src/assets/scss/test.scss";`,
      },
    },
  },
  chainWebpack: (config) => {
    config.module.rules.delete('eslint')
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
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "@assets/scss/variables.scss"; 
      `,
      },
    },
  },
}
