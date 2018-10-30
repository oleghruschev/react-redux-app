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

const rootFolder = path.resolve(__dirname);

module.exports = {

  entry: './src/client/index.js',

  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.resolve(rootFolder, 'build'),
  },

  resolve: {
    alias: {
      vars: path.resolve(rootFolder, 'src/scss/_vars'),
      actions: path.resolve(rootFolder, 'src/actions'),
      helpers: path.resolve(rootFolder, 'src/helpers'),
      images: path.resolve(rootFolder, 'static/images'),
      reducers: path.resolve(rootFolder, 'src/reducers'),
      mixins: path.resolve(rootFolder, 'src/scss/_mixins'),
      components: path.resolve(rootFolder, 'src/components'),
    },
    extensions: [
      '.js',
      '.scss',
    ],
  },
  //Настройки локального сервера
  devServer: {
    hot: true,
    contentBase: './build',
    historyApiFallback: true,
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
        test : /\. css $ / ,
        loader :  ' classnames! style! css '
      },
      {
      	test: /\.scss$/,
      	use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
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
