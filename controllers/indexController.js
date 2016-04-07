Vmail.controller('IndexCtrl',
  ['$scope', '$state',
  function($scope, $state){
    if (false) {
      $scope.messages = [];
    } else {
      $state.go('signin');
    }
}]);
