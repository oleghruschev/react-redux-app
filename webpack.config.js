const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require ('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HtmlPlugin = new HtmlWebPackPlugin ({
  template: './index.html'
});
const MiniCssPlugin = new MiniCssExtractPlugin({
  filename: './style.css',
});
const HotModulePlugin = new webpack.HotModuleReplacementPlugin();

module.exports = {

  entry: './src/client/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },

  resolve: {
    alias: {
      images: path.resolve(__dirname, 'static/images'),
      vars: path.resolve(__dirname, 'src/scss/_vars'),
    },
    extensions: [
      '.js',
      '.scss',
    ],
  },
  //Настройки локального сервера
  devServer: {
    contentBase: './build',
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
      	test: /\.scss$/,
      	use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: "[name]__[local]___[hash:base64:5]"
            }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          }
      	]
      },
      {
        test: /\.(png|gif|jpe?g)$/,
	      loaders: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          }
        ]
      },
    ]
  },

  plugins: [
    HtmlPlugin,
    MiniCssPlugin,
    HotModulePlugin,
  ],
}
