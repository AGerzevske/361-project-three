//<h2 class="nav-h2"><a href="#nav-site">Menu<a/></h2>

var html = document.querySelector('html');
html.classList.remove('nojs');
html.classList.add('js');

var navigation = document.querySelector('.nav-site');
var nav_list = document.querySelector('.nav-menu')

var nav_heading = document.createElement('h2');

var menu_link = document.createElement('a');
menu_link.textContent = 'Menu';
menu_link.setAttribute('id','menu-button');
menu_link.setAttribute('href','#null');

nav_heading.append(menu_link);

navigation.insertBefore(nav_heading,nav_list);

var menu_button = document.querySelector('#menu-button');
menu_button.addEventListener('click', function(e) {
  nav_list.classList.toggle('visible');
  e.preventDefault();
})
