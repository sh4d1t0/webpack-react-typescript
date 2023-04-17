const { EsbuildPlugin } = require('esbuild-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { ProvidePlugin } = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const ruleForStyles = {
  test: /\.css$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    'postcss-loader',
    {
      loader: 'esbuild-loader',
      options: {
        loader: 'css',
        minify: true,
      },
    },
  ],
}

const ruleForJavascript = {
  test: /\.[jt]sx?$/,
  exclude: /node_modules/,
  loader: 'esbuild-loader',
  options: {
    loader: 'tsx',
    target: 'esnext',
  },
}

const rules = [ruleForJavascript, ruleForStyles]

/** @type {import('webpack').Configuration} */
const prodConfig = {
  mode: 'production',
  module: { rules },
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new EsbuildPlugin({
        target: 'esnext',
        css: true,
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ProvidePlugin({
      React: 'react',
    }),
  ],
}

module.exports = merge(common, prodConfig)
