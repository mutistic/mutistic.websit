angular.module('homeModel', [])
    .controller('homeController',
        function ($scope, $rootScope) {
            $scope.ngClick_Hello = function () {
                window.location.href = "index.html";
            }
        }
    );

