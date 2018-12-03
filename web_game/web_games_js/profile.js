"use strict";

var chatButton = document.getElementById("chat");

function message(){
    var html = ' ';
    html += "<p>  Hey!  </p>";
    return html;
}

function waitForMessage(timeInMilliseconds) {
    setTimeout(message, timeInMilliseconds);
}

chatButton.addEventListener('click', function (ev) {
    document.getElementById("message").innerHTML = message();
});