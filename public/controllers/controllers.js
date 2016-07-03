app.controller('ChatController', function($scope) {
  $scope.message = 'Hello from ChatController';
});

app.controller('BoardController', function($scope, $window) {
  $scope.message = 'Hello from BoardController';
  $scope.angularAlert = function() {
    $window.alert('If only I had made a form...');
  };
});

app.controller('DrawController', function($scope) {
  $scope.message = 'Hello from DrawController';
});
