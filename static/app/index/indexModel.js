angular.module('indexModel', [])
    .controller('indexController',
        function ($scope, $rootScope, $interval, $timeout) {

            // 背景图片
            var $backGround_div = angular.element("#divBackGround");
            // 背景音乐
            var $backMusic = angular.element("#audioBackMusic");
            // 主内容
            var $divCenter = document.getElementById("divCenter");
            // 主内容-iframe
            // var $frameContent = angular.element("#frameContent");
            var frameContent = document.getElementById("frameContent");
            // $scope.frameContent = "home.html";
            // $frameContent.src = "home.html";


            $backMusic.attr("volume", 0.2); //音量
            $backMusic.attr("loop", true); //是否循环
            $backMusic.attr("autoplay", true);//马上播放
            $backMusic.attr("controls", false);//显示控制台


            /**主页*/
            $scope.ngClick_btnHome = function () {
                frameContent.src = "home.html";
                $scope.frameChane = "home.html";
            };
            /**项目时间轴*/
            $scope.ngClick_btnTimer = function () {
                frameContent.src = "timer.html";
                $scope.frameChane = "timer.html";
            };
            /**后台管理*/
            $scope.ngClick_btnProduct = function () {
                //window.location.href = '/mutistic-server/login.html';
            };
            /**免责声明*/
            $scope.ngClick_disc = function () {
                frameContent.src = "disclaimer.html";
                $scope.frameChane = "disclaimer.html";
            };

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
            }, 4 * 60000);


            /**
             * 设置iframe滚动条在主界面  - 写在子页面的load事件中
             * 无法实现
             * 1、$(frameContent).on();  只会触发一次
             * 2、$(frameContent).on(); $(frameBody).on(); 触发多次，但load 效果 和readyState == "complete" 模式一致
             * 3、document.getElementById("frameContent").contentDocument.body.onload(); 只会触发一次
             * 4、$interval(); 只能拿到readyState == "complete"属性，无法获取到整个界面加载完毕后的高度
             *
             * 解决方式：
             *  $(frameContent).bind(); $timeout();
             *
             */
            $(frameContent).bind('load', function () {
                $timeout(function () {
                    setHeight();
                },100);
                // $(document.getElementById("frameContent").contentDocument).show(1000);
            });
            //



            // if (frameContent.contentDocument.body != null) {
            //     document.getElementById("frameContent").contentDocument.body.onload = function () {
            //         setHeight();
            //     };
            // } else if (frameContent.contentDocument.documentElement != null) {
            //     document.getElementById("frameContent").contentDocument.documentElement.onload = function () {
            //         setHeight();
            //     };
            // }


            // $scope.frameChane = true;
            // $interval(function () {
            //     if (!$frameContent || !$frameContent.contentDocument) {
            //         return;
            //     }
            //
            //     if ($scope.frameChane && $frameContent.contentDocument.readyState == "complete") {
            //          setHeight();
            //          $scope.frameChane = false;
            //     }
            // }, 200);

            function setHeight() {
                // if (!$frameContent || !$frameContent.contentDocument) {
                //     return;
                // }


                var height = 35;
                var frameHeight = 0;
                if (frameContent.contentDocument.body && frameContent.contentDocument.body.offsetHeight) {
                    frameHeight = frameContent.contentDocument.body.offsetHeight;
                } else if (frameContent.contentDocument.documentElement && frameContent.contentDocument.documentElement.scrollHeight) {
                    frameHeight = frameContent.contentDocument.documentElement.scrollHeight;
                }
                if (!frameHeight) {
                    frameHeight = 0;
                }
                if (!$divCenter.offsetHeight || $divCenter.offsetHeight > frameHeight) {
                    document.body.height = "843px";
                    $divCenter.style.height = "843px";
                } else {
                    document.body.height = frameHeight + height + "px";
                    $divCenter.style.height = frameHeight + height + "px";
                }
                console.info("baseURI" + frameContent.contentDocument.baseURI + " height：" + document.body.height + " frameHeight：" + frameHeight);
            }
        }
    );

// $(function(){
//     $("#frameContent").load(function(){
//         alert("11");
//     });
// });