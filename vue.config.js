const webpack = require('webpack')
module.exports = {
  lintOnSave: false,
  configureWebpack:{
    externals: {
       vue: 'Vue'
    },
    plugins: [
      new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "windows.jQuery": "jquery"
      })
    ]
  }
}