/*jshint node:true*/
/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-static-compiler');
module.exports = function(defaults) {
var app = new EmberApp({
      sassOptions: {
        includePaths: [
          'bower_components/bootstrap-sass/assets/stylesheets'
        ]
      }
  });

  app.import('bower_components/bootstrap-sass/assets/javascripts/bootstrap.js');
// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

//      app.import('bower_components/modernizr/src/Modernizr.js');
//module.exports =app.import('bower_components/torii/dist/torii.amd.js');
var flotjs = pickFiles('vendor/js/vendor/jquery.flot', {
    srcDir: '/',
    destDir: '/js'
});
var vendorjs = pickFiles('vendor/js/vendor', {
    srcDir: '/',
    destDir: '/js'
});
var messengerjs = pickFiles('vendor/js/vendor/messenger', {
    srcDir: '/',
    destDir: '/js'
});
var Fonts = pickFiles('vendor/fonts', {
    srcDir: '/',
    destDir: '/fonts'
});
var vendorcss = pickFiles('vendor/vendor', {
    srcDir: '/',
    destDir: '/vendor.css'
});
var vendorMessengerCss = pickFiles('vendor/vendor/messenger', {
    srcDir: '/',
    destDir: '/vendor.css'
});
app.import('vendor/js/theme.js');
return  app.toTree([Fonts, vendorcss, vendorMessengerCss, messengerjs, vendorjs, flotjs]);
};
