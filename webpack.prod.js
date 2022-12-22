const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

const production = merge(common, {
  mode: 'production',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    clean: true,
  },

  optimization: {
    minimize: true,
    minimizer: ['...', new MiniCssExtractPlugin()], // "..." used to include default minimizers
  },
});

module.exports = production;
