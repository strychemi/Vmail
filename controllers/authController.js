Vmail.controller('authCtrl', ['$scope', 'Gmail', function($scope, Gmail){

  $scope.messages = Gmail.gmailMessages;

  //window.gapi.auth.authorize({scope: window.scopes, client_id: window.clientId});

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
