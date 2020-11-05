const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin');
const webpack = require('webpack');

const webpackCommonConfig = require('./webpack.common');
const HOST = process.env.HOST || '0.0.0.0';
const PORT = (process.env.PORT && Number(process.env.PORT)) || 8085;

const webpackDevConfig = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  entry: {
    main: './examples/index.js',
  },
  devServer: {
    hot: true,
    host: HOST,
    port: PORT,
    open: true,
    overlay: true,
    stats: 'errors-only',
  },
  output: {
    path: path.join(__dirname, '../examples/dist'),
    // publicPath: '',
    filename: '[name]_[hash:7].js',
    chunkFilename: '[name]_[hash:7].js',
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      examples: path.resolve(__dirname, '../examples'),
      'leo-ui': path.resolve(__dirname, '../src/index'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './examples/index.html',
      filename: './index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new ProgressBarWebpackPlugin(),
  ],
};

module.exports = merge(webpackCommonConfig, webpackDevConfig);
