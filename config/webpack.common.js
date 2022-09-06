const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const ruleForAssets = {
  type: 'asset',
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
}

const rules = [ruleForAssets]

module.exports = {
  // entry: '.src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: 'public/index.html' }),
  ],
  module: { rules },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '../.cache'),
    memoryCacheUnaffected: true,
    compression: 'brotli',
    profile: true,
    store: 'pack',
  },
}
