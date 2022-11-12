// Inicio Barra de Búsqueda
let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.header .search-form');

searchBtn.onclick = ()=> {
    searchBtn.classList.toggle('fa-times');
    searchForm.classList.toggle('active');

    menubar.classList.remove('fa-times');
    navbar.classList.remove('active');
}
// Fin Barra de Búsqueda

