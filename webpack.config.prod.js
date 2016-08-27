var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
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
    new HtmlWebpackPlugin({
      title: 'Typescript Boilerplate',
      template: path.resolve(__dirname, 'src', 'index.ejs')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    })
  ]
};