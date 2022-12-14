// Inicio Barra de Búsqueda
let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.header .search-form');

searchBtn.onclick = ()=> {
    searchBtn.classList.toggle('fa-xmark');
    searchForm.classList.toggle('active');

    menubar.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}
// Fin Barra de Búsqueda

// Inicio de Menú 
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');

    searchBtn.classList.remove('fa-xmark');
    searchForm.classList.remove('active');
}

// Fin de Menú

window.onscroll = () => {
    searchBtn.classList.remove('fa-xmark');
    searchForm.classList.remove('active');
    menubar.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

//Inicio del Home//
let slides = document.querySelectorAll('.home .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
//Fin del Home//
