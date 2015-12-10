app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: "main.html"
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });


        $routeProvider.when('/login/', {
            templateUrl: "login.html",
            controller: "loginController"
        });

    }]);