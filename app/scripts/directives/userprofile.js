'use strict';

/**
 * @ngdoc directive
 * @name staffApp.directive:userProfile
 * @description
 * # userProfile
 */
angular.module('staffApp')
  .directive('userProfile', function () {
	console.log('user profile');
    return {
      templateUrl: 'views/profile_template.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
//        element.text('this is the userProfile directive');
      }
    };
  });
