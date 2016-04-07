Vmail.controller('composeCtrl',
  ['$scope', 'Gmail',
  function($scope, Gmail){

    $scope.sendEmail = function(message) {
      Gmail.sendEmail(message);
    };
}]);
