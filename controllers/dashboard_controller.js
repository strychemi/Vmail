Vmail.controller('DashboardCtrl', ['$scope', function($scope){

  $scope.test = "123";

  $scope.setGmailId = function() {
    window.gmailId = $scope.gmailId;
    window.checkAuth();
    console.log($scope.gmailId);
    console.log(window.gmailId);
  };
}]);
