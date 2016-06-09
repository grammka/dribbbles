import config from '../../config'

const filename = {
  context: config.paths.build,
  name: 'assets/static/[ext]/[name].[hash:6].[ext]'
}

export default [
  {
    test: /\.woff(\?.*)?$/,
    loader: 'url',
    query: {
      ...filename,
      limit: 10000,
      mimetype: 'application/font-woff'
    }
  },
  {
    test: /\.woff2(\?.*)?$/,
    loader: 'url',
    query: {
      ...filename,
      limit: 10000,
      mimetype: 'application/font-woff2'
    }
  },
  {
    test: /\.ttf(\?.*)?$/,
    loader: 'url',
    query: {
      ...filename,
      limit: 10000,
      mimetype: 'application/octet-stream'
    }
  },
  {
    test: /\.eot(\?.*)?$/,
    loader: 'file',
    query: {
      ...filename
    }
  }
]
