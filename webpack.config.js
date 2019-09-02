const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require ('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const rootFolder = path.resolve(__dirname);

const alias = {
  vars: path.resolve(rootFolder, 'src/scss/_vars'),
  actions: path.resolve(rootFolder, 'src/actions'),
  helpers: path.resolve(rootFolder, 'src/helpers'),
  reducers: path.resolve(rootFolder, 'src/reducers'),
  constants: path.resolve(rootFolder, 'src/constants'),
  images: path.resolve(rootFolder, 'src/assets/images'),
  mixins: path.resolve(rootFolder, 'src/styles/_mixins'),
  components: path.resolve(rootFolder, 'src/components'),
  build: path.resolve(rootFolder, 'build'),
}

const browserConfig = {

  entry: ['babel-polyfill', './src/index.js'],

  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.resolve(rootFolder, 'build'),
  },

  resolve: {
    alias,
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
  },
  //Настройки локального сервера
  devServer: {
    hot: true,
    contentBase: './build',
    historyApiFallback: true,
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
          // { loader: "css-modules-typescript-loader"},
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

  // При импортировании модуля, чей путь совпадает с одним из указанных ниже,
  // предположить, что соответствующая глобальная переменная существует, и использовать
  // ее взамен. Это важно, так как позволяет избежать добавления в сборку всех зависимостей,
  // что дает браузерам возможность кэшировать файлы библиотек между различными сборками.
//   externals: {
//     "react": "React",
//     "react-dom": "ReactDOM"
//   },

  plugins: [
    new HtmlWebPackPlugin ({
      title: 'react-redux-app',
      template: path.resolve(rootFolder, './public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: './style.css',
    }),
    new webpack.WatchIgnorePlugin([/scss\.d\.ts$/]),
    new webpack.HotModuleReplacementPlugin(),
  ],
}

const serverConfig = {

  entry: ['babel-polyfill', './src/server/index.js'],
  target: "node",

  output: {
    publicPath: '/',
    filename: 'server.js',
    path: path.resolve(rootFolder, 'build'),
  },

  resolve: {
    alias,
    extensions: [
      '.js',
      '.scss',
    ],
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
    new MiniCssExtractPlugin({
      filename: './style.css',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
}


module.exports = [browserConfig, serverConfig]
