'use strict';

/**
 * @ngdoc overview
 * @name angularUiMapApp
 * @description
 * # angularUiMapApp
 *
 * Main module of the application.
 */
angular
  .module('angularUiMapApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.map'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

function onGoogleReady() {
  console.log('Google maps api initialized.');
  angular.bootstrap(document, ['angularUiMapApp']);
}
