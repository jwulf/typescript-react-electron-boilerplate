var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'index.tsx'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve('build')
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
    modulesDirectories: ['src', 'node_modules'],
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loaders: ['babel', 'ts-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Typescript Boilerplate",
      template: path.resolve(__dirname, "src", "index.ejs")
    })
  ]
};