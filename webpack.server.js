const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  target: 'node',
  entry: './src/index.js',
  output:{
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  //tell wp not to import modules to bundle on the start of the server
  externals:[webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
