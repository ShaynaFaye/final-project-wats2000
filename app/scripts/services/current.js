'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.current
 * @description
 * # current
 * Factory in the angularAppApp.
 */
angular.module('angularAppApp')
  .factory('current', function ($resource) {
    // Service logic
    // ...

    

    // Public API here
    return $resource('https://api.edamam.com/search?q=:search&from=:from&to=:to&app_id=7a4648b9&app_key=fc9cc19841af01b1f07091603f0e4b87&callback=JSON_CALLBACK', {}, {
      query: {
        method:'JSONP',
        params:{
         search: 'cookies',
         from: 0,
         to: 10
        },
        isArray:false
      }
    });
  });
