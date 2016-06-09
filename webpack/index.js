import path from 'path'
import webpack from 'webpack'
import requireDir from 'require-dir'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import config from '../config'


const lFolder = requireDir('./loaders')
const loaders = Object.keys(lFolder).reduce((p, k) => p.concat(lFolder[k]), [])


const webpackConfig = {
  name: 'site',
  target: 'web',
  devtool: 'cheap-module-eval-source-map',

  entry: {
    app: [
      path.join(config.paths.client, './index.js')
    ]
  },

  output: {
    filename: 'assets/js/[name].[hash:6].js',
    chunkFilename: '[id].[hash:6].js',
    path: config.paths.build,
    publicPath: config.publicPath
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Dribbbles',
      template: path.join(config.paths.client, 'assets/index.ejs'),
      //favicon: path.join(config.paths.client, 'assets/favicon-32x32.png'),
      hash: false,
      filename: 'index.html',
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    })
  ],

  resolve: {
    root: config.paths.client,
    modulesDirectories: [ 'shared', 'node_modules' ],
    extensions: [ '', '.js', '.jsx', '.styl' ]
  },

  module: {
    loaders
  },

  stylus: {
    use: [
      require('nib')()
    ],
    import: [
      '~nib/lib/nib/index.styl',
      '~assets/styl/_modules/index.styl'
    ]
  }
}

if (config.env == 'production') {
  delete webpackConfig.devtool

  webpackConfig.module.loaders = webpackConfig.module.loaders.map((loader) => {
    if (loader.test.test('*.css') || loader.test.test('*.scss')) {
      loader.loader = ExtractTextPlugin.extract('style', loader.loader.replace('style!', ''))
    }

    return loader
  })

  webpackConfig.plugins.push(
    new ExtractTextPlugin('assets/css/style.css', {
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      mangle: true,
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
        screw_ie8: true,
        drop_console: true
      }
    })
  )
}

export default webpackConfig
