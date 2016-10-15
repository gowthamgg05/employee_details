'use strict';

/**
 * @ngdoc overview
 * @name staffApp
 * @description
 * # staffApp
 *
 * Main module of the application.
 */
angular
  .module('staffApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl',
        controllerAs: 'home'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'profileCtrl',
        controllerAs: 'profile'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
