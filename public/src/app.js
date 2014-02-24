angular.module('app',
  [
    'ngAnimate',
    'ui.router',
    'app.home',
    'app.admin'
  ])
.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.hashPrefix('!');
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '../src/home/views/home.html',
      controller: 'HomeController'
    })
    .state('admin', {
      url: '/admin',
      templateUrl: '../src/admin/views/admin.html',
      controller: 'AdminController'
    });
    $urlRouterProvider.otherwise('/home');
});

