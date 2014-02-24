angular.module('app.home', [])

.controller('HomeController', ['$scope','Page', function($scope, Page){
  $scope.page;
  Page.get()
  .then(function(data){
    console.log(data);
    $scope.page = data.data;
  });
}])

.directive('clickToEdit', function(){
  var editTemplate = "<div class='click-to-edit'>"+
    "<div ng-hide='view.editorEnabled'>"+
      "{{ value }}" +
      "<a ng-click='enableEditor()'>Edit</a>"+
    "</div>"+
    "<div ng-show='view.editorEnabled'>"+
      "<input ng-model='view.editableValue'>"+
      "<a href='#!' ng-click='save()'>Save</a>"+
      "or"+
      "<a ng-click='disableEditor()'>Cancel</a>"+
    "</div>"+
  "</div>";

  return {
    restrict: 'EA',
    replace: true,
    template: editTemplate,
    scope: {
      value: "=clickToEdit"
    },
    controller: function($scope){
      $scope.view = {
        editorEnabled: false,
        editableValue: $scope.value
      },
      $scope.enableEditor = function(){
        $scope.view.editorEnabled = true,
        $scope.view.editableValue = $scope.value
      },

      $scope.disableEditor = function(){
        $scope.view.editorEnabled = false;
      },

      $scope.save = function(){
        $scope.value = $scope.view.editableValue;
        $scope.disableEditor();
      }
    }
  }
});