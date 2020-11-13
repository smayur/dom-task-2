var menu = document.querySelector('.primary-navbar');
var burger = document.querySelector('.burger');

burger.addEventListener('click', function(){ 
  //Toggle nav
  burger.classList.toggle('navtoggle');
  menu.classList.toggle('hide-menu');
});