const Webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = [
  {
    context: __dirname + '/src/js',
    entry: {
      js: './index.js'
    },
    output: {
      path: __dirname + '/dist',
      filename: './js/kafcon.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node-modules/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'react', 'stage-0']
          }
        }
      ]
    },
    plugins: [
      new Webpack.DefinePlugin({
        API_URL: JSON.stringify('http://localhost:8080')
      }),
      new Webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  },
  {
    context: __dirname + '/src/css',
    entry: {
      css: './kafcon.scss'
    },
    output: {
      path: __dirname + '/dist',
      filename: './css/kafcon.css'
    },
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract("style-loader", "css?minimize!sass")
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?name=fonts/[name].[ext]&limit=10000',
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin("./css/kafcon.css")
    ]
  }
]

module.exports = config
