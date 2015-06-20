/* jshint indent: 4 */
'use strict';

angular.module('angularSampleApp', [
        'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            // この部分を追加
            .when('/frameworks/:name', {
                templateUrl: 'views/desc.html',
                controller: 'DescCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });