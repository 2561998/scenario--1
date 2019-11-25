(function () {
    var app = angular.module('userControllers', []);

    app.controller('UserController', ['$scope', function ($scope) {

        $scope.user = {};

        // This is called when the form is sumitted

        $scope.continue = function () {

            console.log($scope.user);

            // save here

        };

        // get user
        User.get().then(function (user) {
            $scope.user = user;
        });

    }]);

}());