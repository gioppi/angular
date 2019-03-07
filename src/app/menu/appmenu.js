(function () {
'use strict';

angular.module('Menu', [])
.controller('ImgController', ImgController);

ImgController.$inject = ['$scope'];
function ImgController($scope) {
  $scope.tipologia = "Giochi"
  $scope.categoria = "Bambini";
  $scope.codice = "001";
  $scope.estensione = "png"
  };
}

