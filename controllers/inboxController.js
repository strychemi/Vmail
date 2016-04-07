Vmail.controller('InboxCtrl',
  ['$scope', 'Gmail',
  function($scope, Gmail){
    Gmail.loadGmailApi();
    $scope.messages = { array: Gmail.gmailMessages };

    // $scope.$watch(function() {
    //     return Gmail.gmailMessages;
    //   },
    //   function(newValue) {
    //     $scope.messages = newValue;
    //   });
}]);
