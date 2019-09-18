const path = require('path');

const commonConfig = require('./webpack.config.common');

const rootFolder = path.join(__dirname, '..');

const clientConfig = {
  entry: ['babel-polyfill', './src/index.tsx'],

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

  ...commonConfig,
};

module.exports = clientConfig;
