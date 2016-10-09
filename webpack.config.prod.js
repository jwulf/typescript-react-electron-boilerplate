var webpack = require('webpack');
var path = require('path');

// webpack plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');
var failPlugin = require('webpack-fail-plugin');

// postcss plugins
var cssnext = require('postcss-cssnext');
var simpleVars = require('postcss-simple-vars')

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
    path: path.resolve('build/webpack')
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
    modulesDirectories: ['src', 'node_modules'],
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['ts-loader'],
        include: [path.resolve(__dirname, 'src')]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loaders: [
          'style?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      }
    ]
  },
  postcss: function () {
        return {
          plugins: [
            cssnext({browsers: ['last 1 Chrome versions']}),
            simpleVars({
              variables: function () {
                return require('./src/css-global-vars.js');
              }
            })
          ]
        };
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
