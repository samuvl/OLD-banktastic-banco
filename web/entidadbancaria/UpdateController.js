UpdateController.$inject = ['$scope', '$routeParams', 'entidadBancariaService', '$location'];
function UpdateController($scope, $routeParams, entidadBancariaService, $location) {

    $scope.entidadBancaria = {};
    $scope.entidadBancaria.idEntidadBancaria = $routeParams.idEntidadBancaria;
    $scope.tipo = "UPDATE";
    $scope.okBoton = "Actualizar";

    var response = entidadBancariaService.get($routeParams.idEntidadBancaria);

    response.success(function (data, status, headers, config) {
        $scope.entidadBancaria = data;
    });

    response.error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
    });


    $scope.ok = function () {
        var response = entidadBancariaService.update($scope.entidadBancaria);
        
        response.success(function (data, status, headers, config) {
            alert("Actualizado con Éxito la Entidad Bancaria: " + $scope.entidadBancaria.idEntidadBancaria);
                //Volver a cargar la entidad
                var response = entidadBancariaService.get($routeParams.idEntidadBancaria);
                response.success(function (data, status, headers, config) {
                    $scope.entidadBancaria = data;
                });
                response.error(function (data, status, headers, config) {
                    alert("Ha fallado la petición. Estado HTTP:" + status);
                });
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
        $location.url('/find/');
    };
}
app.controller("UpdateController", UpdateController);
