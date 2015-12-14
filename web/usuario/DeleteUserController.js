DeleteUserController.$inject = ['$scope', '$routeParams', 'UsuarioService', '$location'];

function DeleteUserController($scope, $routeParams, UsuarioService, $location) {
    $scope.usuario = {};
    $scope.idUsuario = $routeParams.idUsuario;
    $scope.tipo = "DELETE";
    $scope.okBoton = "Borrar";

    var response = UsuarioService.get($routeParams.idUsuario);
        response.success(function (data, status, headers, config) {
            $scope.usuario = data;
        });

        response.error(function (data, status, headers, config) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
        });

    $scope.ok = function () {

        var response = UsuarioService.delete($routeParams.idUsuario);

        response.success(function (data, status, headers, config) {
            alert("Borrado Con Éxito");
            $location.url('/findUser');
        });
        response.error(function (data, status, headers, config) {
            alert("Error Borrando la entidad:  " + status);
        });
    };

    $scope.cancel = function () {
        $location.url('/findUser');
    };
}

app.controller("DeleteUserController", DeleteUserController);
