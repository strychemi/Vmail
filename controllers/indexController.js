Vmail.controller('IndexCtrl',
  ['$scope', '$state', 'Gmail',
  function($scope, $state, Gmail){
    $scope.setGmailId = function() {
      // window.gmailId = $scope.gmailId;
      Gmail.loadGmailApi();
    };
    // if ((typeof(window.gapi.client.gmail) != "undefined")) {
    //   $scope.messages = [];
    // } else {
    //   $state.go('signin');
    // }
}]);
