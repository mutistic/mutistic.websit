angular.module('indexModel', [])
    .controller('indexController',
        function ($scope, $rootScope, $interval, $timeout) {

            var divBackGround = angular.element("#divBackGround");   // 背景图片
            var audioBackMusic = angular.element("#audioBackMusic"); // 背景音乐
            var divCenter = document.getElementById("divCenter"); // 主内容
            var frameContent = document.getElementById("frameContent"); // 主内容-iframe

            /**actions*/
            $scope.actions = {
                /**主页*/
                "clickBtnHome": function () {
                    setFrameSrc("home.html");
                },
                /**时间轴*/
                "clickBtnTimer": function () {
                    setFrameSrc("timer.html");
                },
                /**后台管理*/
                "clickBtnProduct": function () {
                    //window.location.href = '/mutistic-server/login.html';
                },
                /**免责声明*/
                "clickDisc": function () {
                    setFrameSrc("disclaimer.html");
                }
            };

            /**设置背景音乐和图片及轮询*/
            setAudioBackMusic();
            $interval(function () {
                if ($scope.backGroundTwo) {
                    divBackGround.removeClass("bg2");
                    divBackGround.addClass("bg1");
                    audioBackMusic.attr("src", "static/music/NgauHung.mp3");
                } else {
                    divBackGround.removeClass("bg1");
                    divBackGround.addClass("bg2");
                    audioBackMusic.attr("src", "static/music/Time.mp3");
                }
                $scope.backGroundTwo = !$scope.backGroundTwo;
            }, 4 * 60000);

            /**
             * 设置frame滚动条在主界面
             * 无法实现
             * 1、$(frameContent).on('load'); 与 frameContent.body.onload();
             *  只会触发一次 但load 效果 和readyState == "complete" 模式一致
             * 2、$interval(); 只能拿到readyState == "complete"属性，无法获取到整个界面加载完毕后的高度
             *
             * 解决方式：
             *  1、$(frameContent).bind('load'); $timeout();
             *  2、$(frameContent).bind('load'); $(frameDoc).ready(); $(divSecondFrame).slideDown();
             *
             *  思路：
             *      $(iframe).bind('load')：可以监听 src变化后的load事件
             *      $(iframe.contentDocument).ready()：bind回调用使用 ready() 做为触发 $(div).slideDown()动画
             *      $(iframe.contentDocument.getElementsByClassName("frame-second")).slideDown()：slideDown()回调后 此时已经加载完毕，可以设置主界面的 height
             *
             */
            $(frameContent).bind('load', function () {
                // 设置默认高度
                document.body.height = "843px";
                divCenter.style.height = "843px";

                var frameDoc = frameContent.contentDocument;
                if (!frameDoc) {
                    return;
                }
                var divSecondFrame = frameDoc.getElementsByClassName("content-frame-second");
                if (!divSecondFrame) {
                    return;
                }

                $(frameDoc).ready(function () {
                    $(divSecondFrame).slideDown(500, function () {
                        setHeight();
                    });
                });
            });

            // $(frameContent).on('load', function () {
            //     $timeout(function () {
            //         setHeight();
            //     }, 100);
            // });

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


            /**设置背景音乐*/
            function setAudioBackMusic() {
                audioBackMusic.attr("volume", 0.2); //音量
                audioBackMusic.attr("loop", true); //是否循环
                audioBackMusic.attr("autoplay", true);//马上播放
                audioBackMusic.attr("controls", false);//显示控制台
            }

            /**设置frame src*/
            function setFrameSrc(src) {
                frameContent.src = src;
            }

            /**设置主界面高度*/
            function setHeight() {
                var heightDefault = 25;
                var frameHeight = 0;
                if (frameContent.contentDocument.body && frameContent.contentDocument.body.offsetHeight) {
                    frameHeight = frameContent.contentDocument.body.offsetHeight;
                } else if (frameContent.contentDocument.documentElement && frameContent.contentDocument.documentElement.scrollHeight) {
                    frameHeight = frameContent.contentDocument.documentElement.scrollHeight;
                }
                if (!frameHeight) {
                    frameHeight = 0;
                }
                console.info("baseURI" + frameContent.contentDocument.baseURI + " height：" + document.body.height + " frameHeight+30：" + (frameHeight + heightDefault));
                if (divCenter.offsetHeight && divCenter.offsetHeight < frameHeight + heightDefault) {
                    document.body.height = frameHeight + heightDefault + "px";
                    divCenter.style.height = frameHeight + heightDefault + "px";
                }
            }
        }
    );

// $(function(){
//     $("#frameContent").load(function(){
//         alert("11");
//     });
// });