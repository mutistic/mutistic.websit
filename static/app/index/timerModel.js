angular.module("timerModel", [])
    .controller("timerController",
        function ($scope) {

            /**循环加载网站动态*/
            $("#divEventDynamic").eventFlow({"events": getEventDynamic()});
            /**循环加载研发进度*/
            $("#divEventPlan").eventFlow({"events": getEventPlan()});


            /**获取-网站动态*/
            function getEventDynamic() {
                return [
                    {
                        "year": 2016.03,
                        "events": [
                            {
                                "mouths": 2,
                                "times": "29",
                                "even": "测试"
                            }, {
                                "mouths": 2,
                                "times": "28",
                                "even": "测试"
                            }, {
                                "mouths": 2,
                                "times": "27",
                                "even": "测试"
                            }
                        ]
                    }, {
                        "year": 2016.02,
                        "events": [
                            {
                                "mouths": 2,
                                "times": "29",
                                "even": "测试"
                            }, {
                                "mouths": 2,
                                "times": "28",
                                "even": "测试"
                            }, {
                                "mouths": 2,
                                "times": "27",
                                "even": "测试"
                            }
                        ]
                    }, {
                        "year": 2016.01,
                        "events": [
                            {
                                "mouths": 2,
                                "times": "29",
                                "even": "测试"
                            }, {
                                "mouths": 2,
                                "times": "28",
                                "even": "测试"
                            }, {
                                "mouths": 2,
                                "times": "27",
                                "even": "测试"
                            }
                        ]
                    }, {
                        "year": 2015.12,
                        "events": [
                            {
                                "mouths": 2,
                                "times": "29",
                                "even": "测试"
                            }, {
                                "mouths": 2,
                                "times": "28",
                                "even": "测试"
                            }, {
                                "mouths": 2,
                                "times": "27",
                                "even": "测试"
                            }
                        ]
                    }
                ];
            }

            /**获取-研发进度*/
            function getEventPlan() {
                return [
                    {
                        "year": 2018.04,
                        "events": [
                            {
                                "mouths": 4,
                                "times": "21",
                                "even": "1、添加背景音乐播放及心跳效果。2、添加背景图片及音乐定时切换效果。"
                            },
                            {
                                "mouths": 4,
                                "times": "20",
                                "even": "1、iframe添加slideDown滑动效果。2、添加置顶置底效果。3、iframe重新实现随主界面滚动。4、处理背景图和中间协调性。"
                            }, {
                                "mouths": 4,
                                "times": "19",
                                "even": "1、ittun实现外网访问。2、Git版本管理。3、完成静态时间轴。4、处理iframe滚动条问题。5、添加文字旋转效果。"
                            }, {
                                "mouths": 4,
                                "times": "17",
                                "even": "mutisic主体初版完成。主要功能：主页、照片、Tips、BUG、书籍、时间轴、后台管理、关于我们。"
                            }, {
                                "mouths": 4,
                                "times": "14",
                                "even": "mutisic终于开始了，后端程序猿的设计初版界面简直不忍直视啊o(^▽^)o！！！"
                            }
                        ]
                    }
                ];
            }

        }
    );