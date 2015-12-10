loginController.$inject = ['$scope', '$location', 'loginService'];
function loginController($scope, $location, loginService) {

    $scope.ok = function () {
        loginService.login();
        $location.url('/');
    };
}
app.controller("loginController", loginController);