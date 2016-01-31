/*jshint node:true*/
/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-funnel');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

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


var flotjs = new Funnel('vendor/js/vendor/jquery.flot');
var vendorjs = new Funnel('vendor');
var bootstrapjs = new Funnel('vendor/js/bootstrap');
var messengerjs = new Funnel('vendor/js/vendor/messenger');
var Fonts = new Funnel('vendor/fonts');
var vendorCss = new Funnel('vendor/vendor');
var vendorMessengerCss = new Funnel('vendor/vendor/messenger');

var Fontsss = pickFiles('vendor/fonts', {
    srcDir: '/',
    destDir: '/fonts'
});
var bootstrapcss = app.import('vendor/bootstrap.css');
var bootstrapMincss = app.import('vendor/bootstrap.min.css');
// app.import('vendor/compiled/theme.css');
app.import('vendor/theme.js');
var fontAwesome = app.import('vendor/vendor/font-awesome.min.css');

app.import(bootstrapjs);
var trees = new MergeTrees([Fonts, bootstrapjs, vendorCss, vendorMessengerCss, messengerjs, vendorjs, flotjs]);

return  app.toTree(trees, fontAwesome, bootstrapjs, vendorjs, Fontsss, bootstrapcss, bootstrapMincss);
};
