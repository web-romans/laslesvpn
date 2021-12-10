
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
    mobileSlider();
    if (window.innerWidth >= 1260) {
        headerBurger.classList.remove("close");
        headerMenu.classList.remove("open");
        overlay.classList.remove("owerlay");
        btns.classList.remove("mobile");
    }
}, true);


const mSlider = document.querySelector(".card-slider");

let cardSlider;

function mobileSlider() {
    if (window.innerWidth <= 1260 && mSlider.dataset.mobile == "false") {
        cardSlider = new Swiper(mSlider, {
            centeredSlides: true,
            spaceBetween: 30,
            slidesPerView: 'auto',
            loop: true,
            loopedSlides: 20,
            slideClass: "card"
        });
    }

    mSlider.dataset.mobile = "true";

    if (window.innerWidth > 1260) {
        mSlider.dataset.mobile = "false";

        if (mSlider.classList.contains("swiper-initialized")) {
            cardSlider.destroy();
        }
    }
}

mobileSlider();
