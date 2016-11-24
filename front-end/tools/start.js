/**
 * Created by yyj on 11/24/16.
 */

let config = require('./webpack.config.babel');
let webpack = require('webpack');
let webpackDevServer = require('webpack-dev-server');

config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");

var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
  hot: true
});
server.listen(8080);