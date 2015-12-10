LoginService.$inject = ['$http'];

function LoginService($http) {

    this.login = function () {
        var response = $http({
            method: "GET",
            url: "/banktastic-banco-api/api/login"
        });
        return response;
    };
}
app.service("loginService", LoginService);

