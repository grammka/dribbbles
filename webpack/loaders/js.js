export default [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel',
    query: {
      cacheDirectory: true
    }
  }
]
