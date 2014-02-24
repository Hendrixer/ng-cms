angular.module('app.home')

.factory('Page', function($http){
  return {
    get: function() {
      return $http({
        url: '/page',
        method: 'GET',
      });
    }
  };
});