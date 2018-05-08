angular.module('indexModel', [])
    .controller('indexController',
        function ($scope, $rootScope, $interval, $timeout) {

            /**
             * 获取 DOM对象方式:
             * document.getElementById("DOMId");
             * document.getElementsByClass("className");
             * angular.element("#DOMID");
             */
            var backGroundDiv = document.getElementById("backGroundDiv");   // 背景图片
            var backMusicAudio = document.getElementById("backMusicAudio"); // 背景音乐
            var backMusicSpan = document.getElementById("backMusicSpan"); // 背景音乐-播放
            var centerDiv = document.getElementById("centerDiv"); // 主内容
            var contentFrame = document.getElementById("contentFrame"); // 主内容-iframe

            /**actions*/
            $scope.actions = {
                /**背景音乐*/
                "clickPlayAudio": function () {
                    playMusic(backMusicAudio.paused); // backMusicAudio.paused: false-播放,true-停止
                },
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
            /**设置frame src*/
            function setFrameSrc(src) {
                contentFrame.src = src;
            }

            /**设置背景音乐*/
            backMusicAudio.volume = 0.4; //音量：[0,1]
            backMusicAudio.loop = "loop"; //循环方式：loop-结束后循环
            backMusicAudio.autoplay = "autoplay";//播放方式: autoplay-立即播放
            // audioBackMusic.controls = "controls";//控制台: controls-显示
            /**设置音乐播放及心跳效果*/
            $scope.musicPlay = true; //音乐默认播放
            function playMusic(isPlayed) {
                // 播放音乐、添加心跳效果
                if (isPlayed) {
                    backMusicAudio.play();
                    $(backMusicSpan).addClass("one-winkle");
                }
                // 停止音乐、清除心跳效果
                else {
                    backMusicAudio.pause();
                    $(backMusicSpan).removeClass("one-winkle");
                }
            }

            /**设置背景图片及音乐定时切换效果*/
            $interval(function () {
                // $scope.backGroundTwo：false-背景图1,true-背景图2
                if ($scope.backGroundTwo) {
                    $(backGroundDiv).removeClass("bg2");
                    $(backGroundDiv).addClass("bg1");
                    backMusicAudio.src = "static/music/NgauHung.mp3";
                } else {
                    $(backGroundDiv).removeClass("bg1");
                    $(backGroundDiv).addClass("bg2");
                    backMusicAudio.src = "static/music/Time.mp3";
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
            $(contentFrame).bind('load', function () {
                // 设置默认高度
                document.body.height = "843px";
                centerDiv.style.height = "843px";

                var frameDoc = contentFrame.contentDocument;
                if (!frameDoc) {
                    return;
                }
                var divSecondFrame = frameDoc.getElementsByClassName("content-frame-second");
                if (divSecondFrame == null || divSecondFrame.length <= 0) {
                    return;
                }

                // iFrame - document 的 ready()事件
                $(frameDoc).ready(function () {
                    // iframe - div  的 slideDown()事件
                    $(divSecondFrame[0]).slideDown(500, function () {
                        setHeight();

                        // 控制置顶置地div-显示隐藏动画(滚动条高度 > 窗口高度 = 显示)
                        // console.info("scrollHeight" + document.body.scrollHeight + " | innerHeight：" +window.innerHeight);
                        if (document.body.scrollHeight > window.innerHeight) {
                            $("#top-bottom").show(700);
                        } else {
                            $("#top-bottom").hide(800);
                        }
                    });
                });
            });
            /**设置主界面高度*/
            function setHeight() {
                var heightDefault = 25;
                var frameHeight = 0;
                if (contentFrame.contentDocument.body && contentFrame.contentDocument.body.offsetHeight) {
                    frameHeight = contentFrame.contentDocument.body.offsetHeight;
                } else if (contentFrame.contentDocument.documentElement && contentFrame.contentDocument.documentElement.scrollHeight) {
                    frameHeight = contentFrame.contentDocument.documentElement.scrollHeight;
                }
                if (!frameHeight) {
                    frameHeight = 0;
                }

                // console.info("baseURI" + frameContent.contentDocument.baseURI + " | frameHeight+30：" + (frameHeight + heightDefault));
                if (centerDiv.offsetHeight && centerDiv.offsetHeight < frameHeight + heightDefault) {
                    document.body.height = frameHeight + heightDefault + "px";
                    centerDiv.style.height = frameHeight + heightDefault + "px";
                }
            }


            /**
             * 置顶置底效果
             * 1、$(window).scroll(); 跟随效果
             * 2、$("#top").click(); 置顶点击效果
             * 3、$("#bottom").click(); 置底点击效果
             */
            $(window).scroll(function () {
                $("#top-bottom").animate({top: $(window).scrollTop() + 300 + "px"}, 30);
            });
            $("#top").click(function () {
                $("html,body").animate({scrollTop: "0px"}, 800);
            });
            $("#bottom").click(function () {
                $("html,body").animate({scrollTop: document.body.height}, 800);
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


        }
    );