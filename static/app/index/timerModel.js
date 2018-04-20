angular.module("timerModel", [])
    .controller("timerController",
        function ($scope) {


            $(".event-dynamic").eventFlow({"events": getEventDynamic()});
            $(".event-plan").eventFlow({"events": getEventPlan()});


            /**网站动态*/
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
                    },{
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
                    },{
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
                    },{
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

            /** 研发进度 */
            function getEventPlan() {
                return [
                    {
                        "year": 2018.04,
                        "events": [
                            {
                                "mouths": 4,
                                "times": "19",
                                "even": "1、ittun实现外网访问。2、Git版本管理。3、完成静态时间轴。4、处理iframe滚动条问题。5、添加文字旋转特效。"
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