const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require ('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const alias = require('./aliases');

const rootFolder = path.join(__dirname, '..');
const isProduction = process.env.NODE_ENV === 'production';


const commonConfig = {
  resolve: {
    alias,
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
  },

  module: {
    rules: [
      // Все файлы с разрешениями '.ts' или '.tsx' будет обрабатывать 'ts-loader'
      { test: /\.tsx?$/, use: ['ts-loader', 'babel-loader'] },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: ['babel-loader', 'eslint-loader']
      // },
      {
      	test: /\.scss$/,
      	use: [
          MiniCssExtractPlugin.loader,
          { loader: 'typings-for-css-modules-loader?modules&namedExport' },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
          
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
    new MiniCssExtractPlugin({
      filename: './style.css',
    }),
    new webpack.WatchIgnorePlugin([/scss\.d\.ts$/]),
    new webpack.HotModuleReplacementPlugin(),
  ],
}

if (!isProduction) {
  commonConfig.plugins.push(
    new HtmlWebPackPlugin ({
      title: 'react-redux-app',
      template: path.resolve(rootFolder, './public/index.html')
    })
  )
}


const clientConfig = {

  entry: ['babel-polyfill', './src/index.js'],

  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.resolve(rootFolder, 'build'),
  },
  
  //Настройки локального сервера
  devServer: {
    hot: true,
    contentBase: './build',
    historyApiFallback: true,
  },

  ...commonConfig
}


const serverConfig = {

  entry: ['babel-polyfill', './src/server/index.js'],
  target: "node",

  output: {
    publicPath: '/',
    filename: 'server.js',
    path: path.resolve(rootFolder, 'build'),
  },

  ...commonConfig
}


let configs = [clientConfig]

if (isProduction) configs.push(serverConfig);


module.exports = configs
