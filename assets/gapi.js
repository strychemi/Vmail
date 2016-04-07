var apiKey = 'AIzaSyDVWTQxCJ83f2zCXgdvb_Z1Pj1HA1CnyCk';



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
  gapi.client.setApiKey(apiKey);
  gapi.client.load('gmail', 'v1').then(makeRequest);
}

/////////////////////////////////////////////////////////////////////////////////////////
// Your Client ID can be retrieved from your project in the Google
// Developer Console, https://console.developers.google.com
var clientId = '964487304071-isgtc4bqnc1otdfj5cegfdqb5gfkmsr1.apps.googleusercontent.com';

var scopes = 'https://mail.google.com';
/**
 * Check if current user has authorized this application.
 */
function checkAuth() {
  gapi.auth.authorize(
    {
      'client_id': clientId,
      'scope': scopes,
      'immediate': true
    }, handleAuthResult);
}

/**
 * Handle response from authorization server.
 *
 * @param {Object} authResult Authorization result.
 */
function handleAuthResult(authResult) {
  var authorizeDiv = document.getElementById('authorize-div');
  if (authResult && !authResult.error) {
    // Hide auth UI, then load client library.
    authorizeDiv.style.display = 'none';
    loadGmailApi();
  } else {
    // Show auth UI, allowing the user to initiate authorization by
    // clicking authorize button.
    authorizeDiv.style.display = 'inline';
  }
}

/**
 * Initiate auth flow in response to user clicking authorize button.
 *
 * @param {Event} event Button click event.
 */
function handleAuthClick(event) {
  gapi.auth.authorize(
    {client_id: clientId, scope: scopes, immediate: false},
    handleAuthResult);
  return false;
}

/**
 * Load Gmail API client library. List labels once client library
 * is loaded.
 */
function loadGmailApi() {
  gapi.client.load('gmail', 'v1', listLabels);
}

/**
 * Print all Labels in the authorized user's inbox. If no labels
 * are found an appropriate message is printed.
 */
function listLabels() {
  var request = gapi.client.gmail.users.messages.list({
    'userId': 'jgisin@gmail.com'
  });

  request.execute(function(resp) {
    var labels = resp;
    console.log(labels);
    // appendPre('Labels:');

    // if (labels && labels.length > 0) {
    //   for (i = 0; i < labels.length; i++) {
    //     var label = labels[i];
    //     appendPre(label.name)
    //   }
    // } else {
    //   appendPre('No Labels found.');
    // }
  });
}

function appendPre(message) {
  var pre = document.getElementById('output');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}
