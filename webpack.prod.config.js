const path = require("path");
const webpack = require("webpack");
const ExtractText = require ('extract-text-webpack-plugin');
const config = require("./webpack.base.config.js");

config.output.filename   = "[name]-[chunkhash].js";
config.output.publicPath = "/static/";
config.devtool           = false;

config.plugins.push(
  new ExtractText('[name]-[chunkhash].css', { allChunks: true }),
  new webpack.optimize.CommonsChunkPlugin({              // <--- almost shared
    name     : 'vendor',
    chunks   : ['app'],
    filename : 'vendor-[chunkhash].js',
    minChunks: Infinity,
  }),
  new webpack.optimize.UglifyJsPlugin()
);

config.module.loaders.push(
  {test: /\.scss$/, loader: ExtractText.extract('style', 'css?modules!sass') }
);

module.exports = config;
