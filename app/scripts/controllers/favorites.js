'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('FavoritesCtrl', function ($scope, $localStorage) {
    $scope.recipes = $localStorage.recipes || [];    
  });