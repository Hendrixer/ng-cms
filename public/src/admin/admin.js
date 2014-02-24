angular.module('app.admin', [])

.controller('AdminController', ['$scope','AdminPage', function($scope, AdminPage){
  $scope.controller = 'AdminController';
  $scope.content = {};
  $scope.post = function(stuff){
    return AdminPage.post(stuff)
    .then(function(){
      console.log('posted');
    });
  };
}]);