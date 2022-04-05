const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].chunk.js',
  },
  externals: {
    lodash: '_',
    jquery:'$',
    dayjs: 'dayjs',
  },
  optimization: {
    splitChunks: {
      // async 异步代码分割
      // initial 同步代码分割
      // all 都分割 (常用)
      chunks: 'all',
      // 要拆分的包 的最小尺寸
      minSize: 20000,
      //
      maxSize: 20000,
      // 最少导入次数
      minChunks: 1,

      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          filename: '[id]_verdors.js',
          // 配置优先级
          priority: -10,
        },
        default: {
          minChunks: 2,
          filename: 'commen_[id].js',
          priority: -20,
        },
      },
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};
