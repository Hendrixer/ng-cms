angular.module('app.admin')

.factory('AdminPage', function($http){
  return {
    post: function(data){
      return $http({
        url: '/page',
        method: 'POST',
        data: data
      });
    }
  };
});