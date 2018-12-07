// IIFE
'use strict';
(function() {
  // Does browser support js?
  if (typeof document.querySelector === 'undefined') {
    // If no js, then return
    return;
  }
  // If yes js, then continue:
  // Check is DOM is loaded before running js
  document.addEventListener('DOMContentLoaded', function() {
    // Declare Variables
    var html = document.querySelector('html');
    var navigation = document.querySelector('.nav-site');
    var nav_list = document.querySelector('.nav-menu');
    var nav_heading = document.createElement('h2');
    var menu_link = document.createElement('a');
    var menu_button;
    console.log('browser supports java and DOM is Loaded');


    // var html
    // If js loaded change the classname
    html.classList.remove('nojs');
    html.classList.add('js');

    // var navigation, nav_list, nav_heading, menu_link
    // Create the h2 element under nav above the ul list
    menu_link.textContent = 'Menu';
    menu_link.setAttribute('id', 'menu-button');
    menu_link.setAttribute('href', '#null');
    nav_heading.append(menu_link);
    navigation.insertBefore(nav_heading, nav_list);

    // var menu_button
    // Toggles the visible class on the navigation items when menu is clicked
    // var needs to be given a value or error will throw, needs to be present in menu_link first
    menu_button = document.querySelector('#menu-button');
    menu_button.addEventListener('click', function(e) {
      nav_list.classList.toggle('visible');
      e.preventDefault();
    });
  });
}());
