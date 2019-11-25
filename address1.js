(function () {
    var app = angular.module('userDirectives', []);

    app.directive('addressDir', function () {
        return {
            restrict: "AE",
            require: '^form',
            scope: {
                addressLineOne: '=',
                addressLineTwo: '=',
                addressTownCity: '=',
                addressstreet: '=',
                addressPostcode: '=',
                addressCountry: '='
            },
            templateUrl: 'address.html',
            link: function (scope, element, attributes, form) {
                scope.addressForm = form;
            }
        };
    });
}());