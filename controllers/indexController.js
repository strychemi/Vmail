Vmail.controller('IndexCtrl',
  ['$scope', '$state',
  function($scope, $state){
    if ((typeof(window.gapi.client.gmail) != "undefined")) {
      $scope.messages = [];
    } else {
      $state.go('signin');
    }
}]);
