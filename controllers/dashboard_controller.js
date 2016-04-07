Vmail.controller('DashboardCtrl', ['$scope', 'Gmail', function($scope, Gmail){

  $scope.messages = Gmail.gmailMessages;

  $scope.setGmailId = function() {
    // window.gmailId = $scope.gmailId;
    Gmail.loadGmailApi();
  };

  $scope.$watch(function() {
      return Gmail.gmailMessages;
    },
    function(newValue) {
      $scope.messages = newValue;
    });


}]);
