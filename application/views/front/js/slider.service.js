
servAppCl.service('sliderService', ['$resource', '$q', 'baseUrl',
    function ($resource, $q, baseUrl) {

        var baseUrls = baseUrl + 'sliderFront';

        var getAll = function () {
            var defer = $q.defer();
            var resource = $resource(baseUrls + "/forAll");
            resource.get(function (response) {
                defer.resolve(response);
            }, function (error) {
                return defer.reject(error);
            });
            return defer.promise;
        }
      
        return {
           getAll: getAll
        };

    }]);