const path = require('path')

const clientConfig = require('./webpack.config.client')
const serverConfig = require('./webpack.config.server')

const isProduction = process.env.NODE_ENV === 'production'

let configs = [clientConfig]

if (isProduction) configs.push(serverConfig)

module.exports = configs
