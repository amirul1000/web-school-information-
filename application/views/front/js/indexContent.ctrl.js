


angular.module('indeApp').controller('IndexcontentController', [
    '$scope', '$location', 'indexContentService', 'sliderService', 'imgService', '$timeout', function ($scope, $location, indexContentService, sliderService, imgService, $timeout) {

        var errorFunction = function (error) {
            console.log(error);
        }
        $scope.selected = "1";
        $scope.absUrl = "";
        function init() {
            var absUrl = $location.absUrl();
            $scope.absUrl = absUrl + '/NewsEvent#/contentdetail/';
            console.log(absUrl);
        }
        $scope.getAllGeneralNotices = function () {
            $scope.gNotices = [];
            indexContentService.getAllCoantentDetailFront(1)
                .then(function (response) {
                    if (response.IsSuccess) {
                        $scope.gNotices = response.Data;
                    } else {
                        console.log(response);
                    }
                }, errorFunction);
        }
        $scope.getAllPressRelease = function () {
            $scope.prNotices = [];
            indexContentService.getAllCoantentDetailFront(16)
                .then(function (response) {
                    if (response.IsSuccess) {
                       $scope.prNotices = response.Data;
                    } else {
                        console.log(response);
                    }
                }, errorFunction);
        }
        $scope.getAllRecentNews = function () {
            $scope.rnNotices = [];
            indexContentService.getAllCoantentDetailFront(7)
                .then(function (response) {
                    if (response.IsSuccess) {
                      $scope.rnNotices = response.Data;
                    } else {
                        console.log(response);
                    }
                }, errorFunction);
        }
        $scope.getAllBannerContent = function () {
            $scope.bnContent = [];
            indexContentService.getAllBannerInfoes()
                .then(function (response) {
                    if (response.IsSuccess) {
                      $scope.bnContent = response.Data;
                    } else {
                        console.log(response);
                    }
                }, errorFunction);
        }
        $scope.loadSilders = function () {
            $scope.sliders = [];
            $scope.loadNav = false;
            sliderService.getAll()
                .then(function (response) {
                    if (response.IsSuccess) {
                        $scope.sliders = response.Data;
                        $scope.loadNav = false;
                        console.log(response.Data);
                    } else {
                        console.log(response);
                    }
                }, errorFunction);
        }
        //$scope.loadImage= function(id) {
        //    $interval($scope.getImage(id),2000);
        //}

        $timeout(function () {
            $scope.test1 = "Hello World!";
        }, 5000);

        //time
        $scope.time = 0;

        //timer callback
        var timer = function () {
            if ($scope.time < 5000) {
                $scope.time += 1000;
                $timeout(timer, 1000);
            }
        }

        //run!!
        $timeout(timer, 1000);  

        $scope.getImage = function (id) {
            if (id !== undefined) {
                return imgService.getImageUrl(id, 0, 0);
            }
        }
        init();
        //$scope.getAllslider();
        $scope.getAllGeneralNotices();
        $scope.getAllPressRelease();
        $scope.getAllRecentNews();
        $scope.getAllBannerContent();
    }]);

