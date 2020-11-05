const path = require('path');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const webpackCommonConfig = require('./webpack.common');

const webpackProdConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  entry: {
    main: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'leo-ui.js',
    library: 'LeoUI',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      examples: path.resolve(__dirname, '../examples'),
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
};

module.exports = merge(webpackCommonConfig, webpackProdConfig);
