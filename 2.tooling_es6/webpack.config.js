var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: './main.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      { // We need this loader for franc - it uses .json data files
        test: /\.json$/,
        loader: 'json'
      },
    ],
    loaders: [
      { // We need this loader for es6
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        exclude: /(node_modules)/,
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ]
};

module.exports = config;