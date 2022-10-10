const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const ruleForStyles = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader', 'postcss-loader'],
}

const ruleForJavascript = {
  test: /\.[jt]sx?$/,
  loader: 'esbuild-loader',
  options: {
    loader: 'tsx',
    target: 'esnext',
  },
}

const rules = [ruleForJavascript, ruleForStyles]

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: 'development',
  module: { rules },
  devServer: {
    open: false, // open browser
    port: 3000,
    compress: true,
    client: {
      overlay: {
        errors: true,
        warnings: true,
      }, // overlay with errors and/or warnings
    },
    historyApiFallback: true,
    hot: true,
  },
  devtool: 'eval-source-map',
}

module.exports = merge(common, devConfig)
