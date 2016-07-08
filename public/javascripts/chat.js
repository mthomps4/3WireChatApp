'use strict';

var socket = io();

var form = document.getElementById('chatForm');
var mes = document.getElementById('m');
var ul = document.getElementById('messages');

// $('form').submit(function(){
//   socket.emit('chat message', $('#m').val());
//   console.log($('#m').val());
//   $('#m').val('');
//   return false;
// });

// socket.on('chat message', function(msg){
//  $('#messages').append($('<li>').text(msg));
//  });
function updateScroll(){
    var ul = document.getElementById("messages");
    ul.scrollTop = ul.scrollHeight;
      console.log(ul.scrollHeight + 100);
}

if(form.addEventListener){
  form.addEventListener("submit",
  function(evt){
    evt.preventDefault();
    socket.emit('chat message', mes.value);
    mes.value = '';
    return false;
  },
    false)
};


socket.on('chat message', function(msg){
  var node = document.createElement("li");
  var textnode = document.createTextNode(msg);
  node.appendChild(textnode);
  ul.appendChild(node);
  updateScroll();
  console.log('RAWR');
});
