var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'dist');

var config = {
  entry: './main.js',
  output: {
    path: BUILD_DIR,
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
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};

module.exports = config;