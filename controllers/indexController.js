Vmail.controller('IndexCtrl',
  ['$scope', '$state',
  function($scope, $state){
    if (true) {
      $scope.messages = [];
    } else {
      $state.go('signin');
    }
}]);
