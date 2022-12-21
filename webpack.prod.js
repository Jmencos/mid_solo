const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

const production = merge(common, {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    clean: true,
  },
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: ['...', new MiniCssExtractPlugin()], // "..." used to include default minimizers
  },
});

module.exports = production;
