const path = require('path');

const rootFolder = path.join(__dirname, '..');


const alias = {
  vars: path.join(rootFolder, 'src/scss/_vars'),
  actions: path.join(rootFolder, 'src/actions'),
  helpers: path.join(rootFolder, 'src/helpers'),
  reducers: path.join(rootFolder, 'src/reducers'),
  constants: path.join(rootFolder, 'src/constants'),
  images: path.join(rootFolder, 'src/assets/images'),
  mixins: path.join(rootFolder, 'src/styles/_mixins'),
  components: path.join(rootFolder, 'src/components'),
  build: path.join(rootFolder, 'build'),
}


module.exports = alias;