"use strict";

//---Nav Stuff
var navItems = [ //The items in the navbar
    "Home", "About", "Browse", "Log In"
];
var navbar = $("#navbarItems");

function fillNav (navItems){
    var html = ' ';
    navItems.forEach(function (navItem) {
        html += '<li>' + '<a>';
        html += navItem + '</a>' + '</li>';
    });
    return html;
}

navbar.html(fillNav(navItems));
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


//---Stories


