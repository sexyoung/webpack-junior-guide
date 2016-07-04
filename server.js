var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.hot.config.js')

var app = new (require('express'))();
var port = 3000;
var host = '0.0.0.0';

var compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, host, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  react 伺服器已啟動在 port %s。 請打開 http://%s:%s/ 觀看。", port, host, port)
  }
})
