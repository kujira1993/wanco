/* jshint indent: 4 */
'use strict';

angular.module('angularSampleApp')
    .controller('MainCtrl', function ($scope) {

        $scope.world = 'Angular';

        $scope.addFramework = function (text) {
            $scope.frameworks.push(text);
            $scope.world = '';
        };

    })
    // 新しく追加したコントローラー
    .controller('DescCtrl', function ($scope, $routeParams) {

        $scope.framework = {
            name: $routeParams.name
        };

    });