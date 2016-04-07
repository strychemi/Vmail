Vmail.factory('Gmail', ['$window', function($window){

  var obj = {};
  var gapi = window.gapi;
  var gmailIdList = [];
  obj.gmailMessages = [];


  var getEmailIdList = function(){
    gapi.client.gmail.users.messages.list({'userId': 'me', 'maxResults': 20})
    .then(function(response) {
      JSON.parse(response.body).messages.forEach(function(message){
        gmailIdList.push(message["id"]);
      });
      getMessageList();
    }, function(reason) {
      console.log('Error: ' + reason.result.error.message);
    });
  };

  var getMessageList = function(){
    gmailIdList.forEach(function(id){
      gapi.client.gmail.users.messages.get({'userId': 'me', id: id}).then(function(data){
        var parsed = JSON.parse(data);
        obj.gmailMessages.push(parsed);
      });
    });
  };

  obj.loadGmailApi = function() {
    window.checkAuth();
    gapi.auth.authorize({scope: scopes, client_id: clientId});
    gapi.client.load('gmail', 'v1', getEmailIdList);
  };

  return obj;

}]);
