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

window.onscroll = () => {
    searchBtn.classList.remove('fa-xmark');
    searchForm.classList.remove('active');
    menubar.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

