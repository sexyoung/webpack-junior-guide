const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    app: ["./components/app"],
    vendor: ['react', 'react-dom']
  },
  output: {
    path: __dirname + '/static'
  },

  resolve: {
    extensions: [ '', '.js', '.jsx' ],
  },

  plugins: [],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {test: /\.(jpg|gif|png)$/, loader: "file", exclude: /node_modules/},
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file"
      }
    ]
  }
}
