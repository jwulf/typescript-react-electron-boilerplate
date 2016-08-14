var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {

  entry: [
      path.resolve(__dirname, "src", "index.tsx")
  ],

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },

  resolve: {
    extensions: ["", ".ts", ".tsx", ".js"]
  },

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },

  devtool: "cheap-module-eval-source-map",

  plugins: [
    new HtmlWebpackPlugin({
      title: "Typescript Boilerplate",
      template: path.resolve(__dirname, "src", "index.ejs")
    })
  ]

};

module.exports = config;