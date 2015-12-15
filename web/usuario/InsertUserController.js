InsertUserController.$inject = ['$scope', 'usuarioService', '$location', '$window'];

function InsertUserController($scope, usuarioService, $location, $window) {
    $scope.tipo = "INSERT";
    $scope.okBoton = "Insertar";
    $scope.usuario = {};
    $scope.myEnumData=[{id:"1",text:"usuario"},{id:"2",text:"administrador"}];
    $scope.item1 = {myvalue: "1"};
    $scope.item2 = {myvalue: "1"};
    
    $scope.ok = function () {

        var response = usuarioService.insert($scope.usuario);

        response.success(function (data, status, headers, config) {
            alert("Usuario Insertado con Éxito con el nombre: " + $scope.usuario.nombre);
            $window.location.reload();
        });

        response.error(function (data, status, headers, config) {
            if (status === 500) {
                alert("Ha fallado la petición. Estado HTTP:" + status);
            } else {
                $scope.businessMessages = data;
            }
        });
    };
    $scope.cancel = function () {
        $location.url('/');
    };

}
app.controller("InsertUserController", InsertUserController);