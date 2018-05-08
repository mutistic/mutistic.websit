angular.module('headModel', [])
    .controller('headController',
        function ($scope, $rootScope) {
            var audio =  document.getElementById("backMusic");
            audio.volume = 0.15;
            audio.loop = true;
            audio.autoplay = true;
            audio.controls= false;
        }
    );

