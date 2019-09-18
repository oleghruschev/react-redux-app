const path = require('path');

const commonConfig = require('./webpack.config.common');

const rootFolder = path.join(__dirname, '..');


const serverConfig = {
  entry: ['babel-polyfill', './src/server/index.ts'],
  target: 'node',

  output: {
    publicPath: '/',
    filename: 'server.js',
    path: path.resolve(rootFolder, 'build'),
  },

  ...commonConfig,
}


module.exports = serverConfig;
