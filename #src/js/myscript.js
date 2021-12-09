
var headerBurger = document.getElementById('burger');
var headerMenu = document.getElementById('menu');
var overlay = document.getElementById('nav');
var btns = document.getElementById('btns');

headerBurger.addEventListener('click', function () {
    this.classList.toggle("close");
    headerMenu.classList.toggle("open");
    overlay.classList.toggle("overlay");
    btns.classList.toggle("mobile");
});

/* Меню фикс при ресайзе */
window.addEventListener('resize', function (event) {
    if (window.innerWidth >= 980) {
        headerBurger.classList.remove("close");
        headerMenu.classList.remove("open");
        overlay.classList.remove("owerlay");
        btns.classList.remove("mobile");
    }
}, true);
