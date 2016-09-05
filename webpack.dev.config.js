const loaders = require('./webpack.loaders');
const autoprefixer = require('autoprefixer');

require('./server/index')();

module.exports = {
  entry: './client/mtg-app.js',
  output: {
    path: './',
    filename: 'index.js',
    hot: true,
  },
  devServer: {
    inline: true,
    port: 3333,
  },
  module: {
    loaders,
  },
  postcss: function () {
    return [autoprefixer];
  },
  devtool: 'source-map',
};