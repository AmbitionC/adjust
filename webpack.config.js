const webpack = require('webpack');
const resolve = require('path').resolve;

module.exports = {
  devtool: 'cheap-source-map',
  entry: {
    adjust: './src/index.js'
  },
  output: {
    filename: '[name].js',
    library: 'adjust',
    libraryTarget: 'umd',
    path: resolve(__dirname, 'build/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
