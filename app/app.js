(function () {
    angular.module('TestModule', []).controller('TestController', function ($scope) {
        $scope.counter = 0;
        $scope.incrementer = function () {
            $scope.counter++;
        };
    });
}());