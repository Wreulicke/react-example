path=require 'path'
webpack=require 'webpack'
module.exports =
  cache:false
  entry:
    index: ['./src/index.js']
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
      '', '.webpack.js', '.web.js', '.js'
    ]

  module:
    preLoaders:[
      { 
        test: /\.js$/,
        loader: 'eslint-loader'
        exclude: [
          path.resolve("./node_modules")
        ]
      }
    ]
    loaders: [
      { 
        test: /\.js$/,
        loader: 'babel-loader'
        exclude: [
          path.resolve("./node_modules")
        ]
      }
    ]
  plugins: [
    # new webpack.DefinePlugin({ 'process.env.NODE_ENV': "'production'" })
    # new webpack.optimize.DedupePlugin()
    # new webpack.optimize.UglifyJsPlugin
    #  compress: 
    #    warnings: false
    
  ]

