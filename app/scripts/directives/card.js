'use strict';

angular.module('staffApp')
  .directive('card', function () {
    return {
        templateUrl: '../views/card.html',
        scope: {
            profile: '='
        },
        controller: function($scope){

        }
    };
  });