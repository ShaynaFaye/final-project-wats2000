'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    
      $scope.isActive = function(values){
          return values.includes($location.path().split('/')[1]);
      }

  });
