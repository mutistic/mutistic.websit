angular.module('homeModel', [])
    .controller('homeController',
        function ($scope, $rootScope) {

            /**actions*/
            $scope.actions = {
                "clickHello":function () {
                    parent.window.location.href = "index.html";
                }
            };
        }
    );

