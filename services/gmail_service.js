Vmail.factory('Gmail', ['$window', function($window){

  var obj = {};

  var gapi = $window.gapi;

  var apiKey = 'AIzaSyDVWTQxCJ83f2zCXgdvb_Z1Pj1HA1CnyCk';

  var clientId = '964487304071-isgtc4bqnc1otdfj5cegfdqb5gfkmsr1.apps.googleusercontent.com';

  var scopes = 'https://www.googleapis.com/auth/plus.me';

  window.handleClientLoad = function () {
     // Step 2: Reference the API key
     gapi.client.setApiKey(apiKey);
     window.setTimeout(checkAuth,1);
   };

   var checkAuth = function() {
    gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
  };

  var handleAuthResult = function (authResult) {
  var authorizeButton = document.getElementById('authorize-button');
  if (authResult && !authResult.error) {
    authorizeButton.style.visibility = 'hidden';
    makeApiCall();
  } else {
    authorizeButton.style.visibility = '';
    authorizeButton.onclick = handleAuthClick;
    }
  };

  var handleAuthClick = function(event) {
  // Step 3: get authorization to use private data
  gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
  return false;
  };

    // Load the API and make an API call.  Display the results on the screen.
  var makeApiCall = function() {
    // Step 4: Load the Google+ API
    gapi.client.load('gmail', 'v1').then(function() {
      // Step 5: Assemble the API request
      var request = gapi.client.gmail.users.messages.list.get({
        'userId': 'me'
      });
      // Step 6: Execute the API request
      request.then(function(resp) {
        var heading = document.createElement('h4');
        var image = document.createElement('img');
        image.src = resp.result.image.url;
        heading.appendChild(image);
        heading.appendChild(document.createTextNode(resp.result.displayName));

        document.getElementById('content').appendChild(heading);
      }, function(reason) {
        console.log('Error: ' + reason.result.error.message);
      });
    });
  };

  // obj.setup = function(){
  //   handleClientLoad();
  //   handleAuthClick();
  // };

return obj;

}]);
