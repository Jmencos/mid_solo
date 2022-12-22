const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProgressPlugin } = require('webpack');

module.exports = {
  entry: {
    midSolo: './src/index.js',
  },
  stats: {
    preset: 'minimal',
    builtAt: true,
    colors: true,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
      {
        test: /\.(s?c|sa)ss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.mp4$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),
    new ProgressPlugin((percentage, _message) => {
      if (percentage === 1) {
        console.log('🚀 Build finished! 🚀');
      }
    }),
  ].filter(Boolean),

  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
  },
};
