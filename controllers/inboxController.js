Vmail.controller('InboxCtrl',
  ['$scope', 'Gmail', 'messages',
  function($scope, Gmail, messages){

    $scope.messages = { array: Gmail.gmailMessages };
    // if ((typeof(window.gapi.client.gmail) === "undefined")) {
    //   $scope.messages = { array: Gmail.gmailMessages };
    // } else {
    //   $scope.messages = { array: Gmail.gmailMessages };
    //   //$state.go('signin');
    // }


    $scope.$watch(function() {
        return Gmail.gmailMessages;
      },
      function(newValue) {
        $scope.messages = { array: newValue };
      });
}]);
