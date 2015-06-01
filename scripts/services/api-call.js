/*
  api-call service that makes the api call using the 
  andgular in-built $http service for AJAX calls
*/

app.factory('apiCall',['$http', function($http) {

  var apiAuth = '?client_id=5b1a2584bb60167eb335&client_secret=6ee410670afeb91de1f1d89548f1c528f33e9997';
  return {
    fetchUser: function(username) {
      return  $http.get('https://api.github.com/users/' + username + apiAuth);
    },
    fetchFollowers: function(username) {
      return  $http.get('https://api.github.com/users/' + username + '/followers' + apiAuth);
    },
    fetchFollowing: function(username) {
      return  $http.get('https://api.github.com/users/' + username + '/following' + apiAuth);
    },
    fetchRepo: function(username) {
      return  $http.get('https://api.github.com/users/' + username + '/repos' + apiAuth);
    }
  };
}]);
