angular.module('homeModel', [])
    .controller('homeController',
        function ($scope) {
            var frameContent = parent.document.getElementById("frameContent"); //主界面iframe

            /**actions*/
            $scope.actions = {
                "clickHello": function () {
                    parent.window.location.href = "index.html";
                    // frameContent.src = "timer.html";
                }
            };
        }
    );

