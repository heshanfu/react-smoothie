const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './test.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'test'),
    publicPath: '/',
  },
  mode: 'development',
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['@babel/env', '@babel/react'],
        },
      },
    ],
  },
};
