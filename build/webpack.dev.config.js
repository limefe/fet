var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.config')
var config = require('../config')
const path = require('path')
const rootPath = path.resolve(__dirname, '../')

module.exports = merge(baseConfig, {
  // devtool: 'eval-source-map',
  output: {
    filename: config.filename + '.js'
  },
  plugins: [],
  mode: 'development',
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  devServer: {
    contentBase: path.resolve(rootPath, config.outputPath) // contentBase是告诉dev-server托管哪个目录
  }
})







// module.exports = {
//   devtool: 'eval-source-map', //配置生成Source Maps，选择合适的选项
//   entry: '../src/index.js',
//   output: {
//     path: '../dist',
//     filename: 'bundle.js'
//   },
//   devServer: {
//     contentBase: "./dist",//本地服务器所加载的页面所在的目录
//     colors: true,//终端中输出结果为彩色
//     historyApiFallback: true,//不跳转
//     inline: true//实时刷新
//   }
// }



