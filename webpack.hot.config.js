const path = require("path");
const webpack = require("webpack");
const config = require("./webpack.base.config.js");

config.entry.app.unshift(
  'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'
);

config.output.filename   = "[name].js";
config.output.publicPath = "http://localhost:3000/static/";
config.devtool           = "#cheap-module-eval-source-map";

config.plugins.push(
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
);

config.module.loaders.push(
  {
    test: /\.scss$/,
    loader: 'style!css?modules!autoprefixer!sass?sourceMap'
  }
);

module.exports = config;
