yApp = angular.module('myApp', ['ngRoute']);
 
myApp.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/top/', {
			templateUrl: 'test-top.html',
			controller: 'testTopCtrl'
		})
		.when('/search/', {
			templateUrl: 'test-search.html',
			controller: 'testSearchCtrl'
		})
		.when('/detail/:id/', {
			templateUrl: 'test-detail.html',
			controller: 'testDetailCtrl'
		})
		.otherwise({
			redirectTo:'/top/'
		});
 
	$locationProvider.html5Mode(true);
}
 
myApp.controller('testTopCtrl', function($scope) {
	$scope.pageName = 'トップページ';
});
 
myApp.controller('testSearchCtrl', function($scope) {
	$scope.pageName = '検索ページ';
});
 
myApp.controller('testDetailCtrl', function($scope, $routeParams) {
	$scope.pageName = '詳細ページ';
	$scope.detailId = $routeParams.id;
});