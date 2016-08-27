var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'index.tsx'
  ],
  target: 'electron-renderer',
  externals: {
        "7zip": "7zip"
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
      { test: /\.tsx?$/, loaders: ['babel', 'ts-loader'] },
      { test: /\.json$/, loader: "json-loader" },
    ]
  },
  plugins: [
    new DashboardPlugin(),
    new WebpackNotifierPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Typescript Boilerplate',
      template: path.resolve(__dirname, 'src', 'index.ejs')
    })
  ]
};