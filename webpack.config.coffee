path=require 'path'
webpack=require 'webpack'
module.exports =
  cache:false
  entry:
    index: ['./src/index.jsx']
  devtool: 'inline-source-map'
  output:
    path: path.resolve "./target"
    publicPath: "/target/"
    filename: '[name].js'
  resolve:
    root: [
      path.resolve('./src')
      path.resolve('./bower_components')
    ]
    moduleDirectories: ['node_modules','bower_components']
    extensions: [
      '', '.webpack.js', '.web.js', '.js', '.jsx'
    ]

  module:
    loaders: [
      { test: /\.jsx$/, loader: 'babel-loader' }
    ]
  plugins: [
  ]

