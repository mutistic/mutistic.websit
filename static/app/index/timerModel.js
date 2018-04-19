angular.module("timerModel", [])
    .controller("timerController",
        function ($scope) {
            // var bigEvent = [
            //     {
            //         "year": 2016,
            //         "events": [
            //             {
            //                 "mouths": 2,
            //                 "times": "02-29",
            //                 "even": "某某某创业团队正式成立，确定以“个性化定制”为核心的校园综合服务团队，覆盖20多所大学，成为小"
            //             }, {
            //                 "mouths": 4,
            //                 "times": "04-03",
            //                 "even": "某某某创业团队正式成立，确定以“个性化定制”为核心的校园综合服务团队，覆盖20多所大学，成为小"
            //             }, {
            //                 "mouths": 10,
            //                 "times": "10-11",
            //                 "even": "某某某创业团队正式成立，确定以“个性化定制”为核心的校园综合服务团队，覆盖20多所大学，成为小"
            //             }
            //         ]
            //     }, {
            //         "year": 2015,
            //         "events": [
            //             {
            //                 "mouths": 2,
            //                 "times": "02-29",
            //                 "even": "某某某创业团队正式成立，确定以“个性化定制”为核心的校园综合服务团队，覆盖20多所大学，成为小"
            //             }, {
            //                 "mouths": 4,
            //                 "times": "04-03",
            //                 "even": "某某某创业团队正式成立，确定以“个性化定制”为核心的校园综合服务团队，覆盖20多所大学，成为小"
            //             }, {
            //                 "mouths": 10,
            //                 "times": "10-11",
            //                 "even": "某某某创业团队正式成立，确定以“个性化定制”为核心的校园综合服务团队，覆盖20多所大学，成为小"
            //             }
            //         ]
            //     }
            // ];
            var bigEvent = [
                {
                    "year": 2018,
                    "events": [
                        {
                            "mouths": 4,
                            "times": "04-19",
                            "even": "1、使用ittun做外网访问。2、使用Git版本管理"
                        },
                        {
                            "mouths": 4,
                            "times": "04-19",
                            "even": "时间轴初版完成"
                        }, {
                            "mouths": 4,
                            "times": "04-17",
                            "even": "mutisic客户端主体初版完成"
                        }, {
                            "mouths": 4,
                            "times": "04-16",
                            "even": "mutistic项目立项"
                        }
                    ]
                }
            ];
            $(".event-timer").eventFlow({"events": bigEvent});
        }
    );