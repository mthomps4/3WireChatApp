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

//Calculator Vars
  var calc = document.getElementById('calc');
  var part = document.getElementById('pieceName');
  var Thickness = document.getElementById('Thickness');
  var Width = document.getElementById('Width');
  var Length = document.getElementById('Length');
  var pieceCount = document.getElementById('Count');

//Project List Vars
  var partName = document.getElementById('partName');
  var setThickness = document.getElementById('setThickness');
  var setWidth = document.getElementById('setWidth');
  var setLength = document.getElementById('setLength');
  var setCount = document.getElementById('setCount');
  var setBoardF = document.getElementById('BoardFoot');
  var totalValue = 0;

  calc.addEventListener('submit', function(){
    console.log(part.value + ", " +Thickness.value + ", " +Width.value + ", " +Length.value + ", " + Count.value);
    var Nameli = document.createElement('li');
    Nameli.appendChild(document.createTextNode(part.value));
    partName.appendChild(Nameli);

    var Thickli = document.createElement('li');
    Thickli.appendChild(document.createTextNode(Thickness.value + '"'));
    setThickness.appendChild(Thickli);

    var Widthli = document.createElement('li');
    Widthli.appendChild(document.createTextNode(Width.value + '"'));
    setWidth.appendChild(Widthli);

    var Lengthli = document.createElement('li');
    Lengthli.appendChild(document.createTextNode(Length.value + '"'));
    setLength.appendChild(Lengthli);

    var Countli = document.createElement('li');
    Countli.appendChild(document.createTextNode(pieceCount.value));
    setCount.appendChild(Countli);

    var BoardFoot = Math.max(Math.fround(pieceCount.value*((Thickness.value * Width.value * Length.value)/144), -1)).toFixed(2);
    var Boardli = document.createElement('li');
    Boardli.appendChild(document.createTextNode(BoardFoot + "'"));
    setBoardF.appendChild(Boardli);

    var total = document.getElementById('totalFeet');
    totalValue = totalValue + Number(BoardFoot);
    console.log(totalValue);
    total.innerHTML = totalValue + "'";

    part.value = ""; 
    Thickness.value = "";
    Width.value = "";
    Length.value = "";
    pieceCount.value = "";
  });

});

app.controller('profController',function(){
});
