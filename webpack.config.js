const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  plugins: [
    new HtmlPlugin({
      template: './src/index.html'
    })
  ],
  optimization: {
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        common: {
          name: 'common',
          minChunks: 2
        }
      }
    }
  }
}
