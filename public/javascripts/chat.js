'use strict';

var socket = io();

var form = document.getElementById('chatForm');
var mes = document.getElementById('msg');
var ul = document.getElementById('messages');

var chatName = document.getElementById("screenName");
var nameValue = chatName.value;
    chatName.onchange = function() {
       nameValue = chatName.value;
     };

function updateScroll(){
    var ul = document.getElementById("messages");
    ul.scrollTop = ul.scrollHeight;
      // console.log(ul.scrollHeight + 100);
}

if(form.addEventListener){
  form.addEventListener("submit",
  function(evt){
    evt.preventDefault();
    socket.emit('chat message', nameValue + ": " + mes.value);
    mes.value = '';
    return false;
  },
    false)
};

socket.on('load old msgs', function(messages){
  for(var i=0; i<messages.length; i++){
        var node = document.createElement("li");
        var textnode = document.createTextNode(messages[i].message);
        node.appendChild(textnode);
        // <li> textnode </li>
        ul.appendChild(node);
        updateScroll();
      }
});

socket.on('chat message', function(msg){
  var node = document.createElement("li");
  var textnode = document.createTextNode(msg);
  node.appendChild(textnode);
  // <li> textnode </li>
  ul.appendChild(node);
  updateScroll();
  // console.log('RAWR');
});
