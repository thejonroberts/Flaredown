/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    dotEnv: {
      path: {
        development: '../backend/.env',
      }
    }
  });

  // pace
  app.import(app.bowerDirectory + '/pace/pace.js');

  // spinkit
  app.import(app.bowerDirectory + '/spinkit/css/spinners/7-three-bounce.css');

  // pusher
  app.import(app.bowerDirectory + '/pusher/dist/pusher.js');

  return app.toTree();
};
