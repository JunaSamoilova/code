//menu for mobile
var menu = document.getElementById('menu');
var nav = document.getElementById('navigation');
menu.addEventListener('click', menuToggle);
function menuToggle() {
    menu.classList.toggle('menu-close');
    menu.classList.toggle('menu-open');
    nav.classList.toggle('hide');
}

//search field for tablet 
var search = document.getElementById('search_btn');
var field = document.getElementById('search_field');
search.onclick = function searchToggle() {
field.classList.toggle('search-hide');
}


