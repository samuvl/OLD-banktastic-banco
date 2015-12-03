GetController.$inject = ['$scope', '$routeParams', 'entidadBancariaService'];

function GetController($scope, $routeParams, entidadBancariaService) {
    $scope.tipo = "GET";
    var response = entidadBancariaService.get($routeParams.idEntidadBancaria);

    response.success(function (data, status, headers, config) {
        $scope.entidadBancaria = data;
    });
}
app.controller("GetController", GetController);