import path from 'path'


const basePath = path.resolve(__dirname, './../')

const config = {
  env: process.env.NODE_ENV || 'development',

  paths: {
    base: basePath,
    publicPath: '/',
    client: path.join(basePath, './client'),
    assets: path.join(basePath, './assets'),
    build: path.join(basePath, './public/build')
  },

  http: {
    host: 'localhost',
    port: process.env.PORT || 7000
  }
}


export default config
