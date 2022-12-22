const path = require('path');
const { mergeWithRules } = require('webpack-merge');
const common = require('./webpack.common.js');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['react-refresh/babel'],
            },
          },
        ],
      },
    ],
  },

  plugins: [new ReactRefreshWebpackPlugin()],

  devServer: {
    port: 8080,
    hot: true,
    liveReload: false,
    host: 'localhost',
    compress: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'build'),
      publicPath: '/',
    },

    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
};

module.exports = mergeWithRules({
  module: {
    rules: {
      test: 'match',
      use: {
        loader: 'match',
        options: 'merge',
      },
    },
  },
})(common, devConfig);
