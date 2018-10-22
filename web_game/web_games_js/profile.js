"use strict";

var chatButton = document.getElementById("chat");

function message(){
    var html = document.getElementById("message").innerHTML;
    html += "<p>  Hey!  </p>";
}

function waitForMessage(timeInMilliseconds) {
    setTimeout(message, timeInMilliseconds);
}

chatButton.addEventListener('click', message);