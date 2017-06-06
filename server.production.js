const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const _ = require('lodash');
const config = require('./webpack/webpack.config.production');



const otherConfig = {
  setup: function(app) {
  },
  proxy: {
    "/api/**": "http://139.59.114.55:8080"
  }
};

new WebpackDevServer(webpack(config), _.assign({}, config.devServer, otherConfig))
.listen(3000, '139.59.114.55', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at 139.59.114.55:3000');
});
