/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ppv',
  // namespaced directory where resolver will look for your resource files
    podModulePrefix: 'ppv/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    torii: {
      // a 'session' property will be injected on routes and controllers
      // sessionServiceName: 'session',
      providers: {
        'venmo-oauth2': {
          apiKey:      '3015',
          scope:       ['access_phone','access_email', 'access_friends', 'make_payments', 'access_feed'],
          redirectUri: '/auth/venmo/callback' // default is the current URL
        }
      }
    }  

};

  ENV.ContentSecurityPolicyReportOnly = {
  'default-src': "*",
  'script-src': ["'self' 'unsafe-eval' https://cdn.mxpnl.com *"], // Allow scripts from https://cdn.mxpnl.com
  'font-src': ["'self' http://fonts.gstatic.com null *"], // Allow fonts to be loaded from http://fonts.gstatic.com
  'connect-src': ["'self' * https://api.mixpanel.com http://custom-api.local"], // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
  'img-src': "'self' *",
  'style-src': "'self' * 'unsafe-inline' http://fonts.googleapis.com null", // Allow inline styles and loaded CSS from http://fonts.googleapis.com
  'media-src': null // `media-src` will be omitted from policy, browser will fallback to default-src for media resources.
};
 
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
  }

  if (environment === 'production') {

  }

  return ENV;
};
