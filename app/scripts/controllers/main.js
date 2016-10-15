'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('MainCtrl', function ($scope, current, $localStorage) {
    
    $scope.searchItem = '';
           
    $scope.currentPage = 0;
    $scope.resultsPerPage = 10;
    
    $scope.getResults = function() {
      $scope.recipes = current.query({
        search: $scope.searchTerm,
        from: ($scope.currentPage * $scope.resultsPerPage) + 1,
        to: ($scope.currentPage * $scope.resultsPerPage) + $scope.resultsPerPage
      });
    };
    
    $scope.search = function() {
      $scope.currentPage = 0;
      $scope.getResults();     
    };
    
    $scope.nextPage = function() {
      $scope.currentPage++;
      $scope.getResults();
    };
    
    $scope.prevPage = function() {
      $scope.currentPage--;
      $scope.getResults();
    };
    
    $scope.saveRecipe = function(hit) {
      if(!$localStorage.recipes) {
        $localStorage.recipes = [hit];
      } else {
        if (!$scope.isSaved(hit)) {
          $localStorage.recipes.push(hit);
        }
      }
    };
    
    $scope.isSaved = function(hit) {
      if (!$localStorage.recipes || !$localStorage.recipes.length) {
        return false;
      }
      var match = false;
      for(var i = 0; i < $localStorage.recipes.length; i++) {
        if ($localStorage.recipes[i].recipe.url === hit.recipe.url) {
          match = true;
          break;
        }
      }
      return match;
    };
    
  });