angular.module('indexModel', [])
    .controller('indexController',
        function ($scope, $rootScope, $interval) {

            // 背景图片
            var $backGround_div = angular.element("#divBackGround");
            // 背景音乐
            var $backMusic = angular.element("#audioBackMusic");
            $backMusic.attr("volume", 0.2); //音量
            $backMusic.attr("loop", true); //是否循环
            $backMusic.attr("autoplay", true);//马上播放
            $backMusic.attr("controls", false);//显示控制台

            $interval(function () {
                if ($scope.backGroundTwo) {
                    $backGround_div.removeClass("bg2");
                    $backGround_div.addClass("bg1");
                    $backMusic.attr("src", "static/music/NgauHung.mp3");
                } else {
                    $backGround_div.removeClass("bg1");
                    $backGround_div.addClass("bg2");
                    $backMusic.attr("src", "static/music/Time.mp3");
                }
                $scope.backGroundTwo = !$scope.backGroundTwo;
            }, 4*60000);


            // 主内容
            var $frame_content = angular.element("#frameContent");
            /**主页*/
            $scope.ngClick_btnHome = function () {
                $frame_content.attr("src", "home.html");
            };
            /**项目*/
            $scope.ngClick_btnProduct = function () {
                window.location.href = '/mutistic-server/login.html';
            };
            /**免责声明*/
            $scope.ngClick_disc = function () {
                $frame_content.attr("src", "disclaimer.html");
            };


        }
    );

