Vmail.factory('Gmail', ['$window', function($window){

  var obj = {};

  var gapi = $window.gapi;

  var apiKey = 'AIzaSyDVWTQxCJ83f2zCXgdvb_Z1Pj1HA1CnyCk';

  var clientId = '964487304071-isgtc4bqnc1otdfj5cegfdqb5gfkmsr1.apps.googleusercontent.com';

  var scopes = 'https://www.googleapis.com/auth/plus.me';

  function appendResults(text) {
    var results = document.getElementById('results');
    results.appendChild(document.createElement('P'));
    results.appendChild(document.createTextNode(text));
  }

  function makeRequest() {
    var request = gapi.client.gmail.users.messages.get({
      'id': '1',
      'userId': 'vcstestemail'
    });
    request.then(function(response) {
      appendResults(response.result.longUrl);
    }, function(reason) {
      console.log('Error: ' + reason.result.error.message);
    });
  }

  function init() {
    gapi.client.setApiKey('AIzaSyDVWTQxCJ83f2zCXgdvb_Z1Pj1HA1CnyCk');
    gapi.client.load('gmail', 'v1').then(makeRequest);
  }

return obj;

}]);
