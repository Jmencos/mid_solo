//const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const webpack = require('webpack');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: 'bundle.js',
//   },
//   mode: 'development',
//   devServer: {
//     port: 8080,
//     hot: true,
//     static: {
//       directory: path.join(__dirname, './build'),
//     },
//     proxy: {
//       "*": {
//         target: "http://localhost:3000/",
//         secure: false
//       }
//     }
//    },
//   module: {
//     rules: [
//       {
//         test: /.(css|scss)$/,
//         exclude: /node_modules/,
//         use: ['style-loader', 'css-loader','sass-loader'],
//     },
//     {
//       test: /\.jsx?/,
//       exclude: /node_module/,
//       use: {
//         loader: 'babel-loader',
//         options: {
//           presets: ['@babel/preset-env', '@babel/preset-react']
//         }
//       }
//     },
// {
//   test: /\.html$/i,
//   loader: "html-loader"
// }
//   ],
//  },
//  plugins: [
//   new HtmlWebpackPlugin(
//     {
//       title: 'Development',
//       template: './index.html'
//   })
//  ]
// }

module.exports = {
  entry: [
    // entry point of our app
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  target: 'web',
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 8080,
    // enable HMR on the devServer
    hot: true,
    // fallback to root for other urls
    historyApiFallback: true,

    static: {
      // match the output path
      directory: path.resolve(__dirname, 'build'),
      // match the output 'publicPath'
      publicPath: '/',
    },

    headers: { 'Access-Control-Allow-Origin': '*' },
    /**
     * proxy is required in order to make api calls to
     * express server while using hot-reload webpack server
     * routes api fetch requests from localhost:8080/api/* (webpack dev server)
     * to localhost:3000/api/* (where our Express server is running)
     */
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /.(css|scss)$/,
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
      template: './index.html',
    }),
  ],
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: ['.js', '.jsx'],
  },
};
