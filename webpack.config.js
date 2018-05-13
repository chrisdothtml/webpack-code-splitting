const ExtractCssPlugin = require('mini-css-extract-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const { ModuleConcatenationPlugin } = webpack.optimize

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          ExtractCssPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractCssPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlPlugin({
      template: './src/index.html'
    }),
    new ModuleConcatenationPlugin()
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
