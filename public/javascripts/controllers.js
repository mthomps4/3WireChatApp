//******* CONTROLLERS **********
app.controller('navController', function($scope){
  $scope.$on('$routeChangeStart', function(next, current) {
     socket.disconnect();
   });

});

app.controller('chatController',function(){
});

app.controller('drawController',function(){
});

app.controller('calcController',function(){
});

app.controller('profController',function(){
});
