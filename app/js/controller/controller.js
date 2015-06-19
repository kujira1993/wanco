/**
 * コンストラクタです.
 * @param $scope
 * @param searchService
 * @constructor
 */
function SearchController($scope, searchService) {
    $scope.users = searchService.getData();
    $scope.search = "";
}