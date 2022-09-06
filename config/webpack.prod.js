const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const ruleForStyles = {
  test: /\.css$/,
  use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
}

const ruleForJavascript = {
  test: /\.[jt]sx?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
}

const rules = [ruleForJavascript, ruleForStyles]

/** @type {import('webpack').Configuration} */
const prodConfig = {
  mode: 'production',
  module: { rules },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [new MiniCssExtractPlugin()],
}

module.exports = merge(common, prodConfig)
