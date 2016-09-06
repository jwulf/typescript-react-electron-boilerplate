var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var failPlugin = require('webpack-fail-plugin');

console.log(path.resolve(__dirname, 'src'))

module.exports = {
  entry: [
    'index.tsx'
  ],
  target: 'electron-renderer',
  externals: {
        '7zip': '7zip'
  },
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
      { test: /\.tsx?$/, loaders: ['ts-loader'], include: [path.resolve(__dirname, 'src')] },
      { test: /\.json$/, loader: "json-loader", include: [path.resolve(__dirname, 'src')] },
    ]
  },
  plugins: [
    failPlugin,
    new HtmlWebpackPlugin({
      title: 'Typescript Boilerplate',
      template: path.resolve(__dirname, 'src', 'index.ejs')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
      __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false')),
    })
  ]
};