const webpack = require('webpack');
const path = require('path');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    inline: false,
    contentBase: './dist'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx$|\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
        include: path.resolve(__dirname, './src')
      },
      {
        test: /\.scss$|\.sass$|\.css$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'src/index.html',
    })
  ]
};

module.exports = config;
