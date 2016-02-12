/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ppv',
    podModulePrefix: 'ppv/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
      'connect-src': "*",
      'font-src': "'self' http://fonts.gstatic.com",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com",
      'script-src': "'self' http://dev.vulk.co:3999/livereload.js http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js",
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  ENV['ember-simple-auth'] = {
    routeAfterAuthentication: 'homepage-gallery',
    routeIfAlreadyAuthenticated: 'homepage-gallery',
    authenticationRoute: 'login'

  } 
 
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV['simple-auth'] = {
      store: 'simple-auth-session-store:ephemeral'
    }  
}

  if (environment === 'production') {

  }

  return ENV;
};
