const path = require('path')
const rootFolder = path.join(__dirname, '..')

const alias = {
  types: path.join(rootFolder, 'src/types'),
  vars: path.join(rootFolder, 'src/scss/_vars'),
  actions: path.join(rootFolder, 'src/actions'),
  helpers: path.join(rootFolder, 'src/helpers'),
  reducers: path.join(rootFolder, 'src/reducers'),
  images: path.join(rootFolder, 'src/assets/images'),
  mixins: path.join(rootFolder, 'src/styles/_mixins'),
  components: path.join(rootFolder, 'src/components'),
  build: path.join(rootFolder, 'build'),
}

module.exports = alias
