module.exports = {
  devServer: {
    proxy:{
      '/api': {
        target: 'https://backend-bikex.herokuapp.com/',
        ws: true,
        changeOrigin: true
      },
    },
    proxy:"https://api.razorpay.com/"
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  } 
}
