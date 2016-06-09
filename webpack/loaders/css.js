export default [
  {
    test: /\.css$/,
    loader: 'style!css?modules',
    include: /flexboxgrid/,
  },
  {
    test: /\.css$/,
    loader: 'style!css',
    exclude: /flexboxgrid/,
  }
];
  