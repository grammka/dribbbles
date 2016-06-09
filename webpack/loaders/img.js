import config from '../../config'

const filename = {
  context: config.paths.build,
  name: 'assets/static/[ext]/[name].[hash:6].[ext]'
}

export default [
  {
    test: /\.(png|ico|jpg|jpeg|gif)$/,
    loader: 'url',
    query: {
      ...filename,
      limit: 8192
    }
  },
  {
    test: /\.svg(\?.*)?$/,
    loader: 'url',
    query: {
      ...filename,
      limit: 10000,
      mimetype: 'image/svg+xml'
    }
  }
]
