export default [
  {
    test: /\.styl$/,
    loader: 'style!css?modules&localIdentName=[local]___[hash:base64:5]&importLoaders=1!postcss!stylus?url resolve',
    include: /shared/
  },
  {
    test: /\.styl$/,
    loader: 'style!css!stylus?url resolve',
    include: /assets/
  }
]
