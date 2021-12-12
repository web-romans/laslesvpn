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
    mobileCardSlider();
    mobilePartnersSlider();
    revSliderSize();
    if (window.innerWidth >= 1260) {
        headerBurger.classList.remove("close");
        headerMenu.classList.remove("open");
        overlay.classList.remove("owerlay");
        btns.classList.remove("mobile");
    }
}, true);


const mSlider = document.querySelector(".card-slider");
const mSliderPartners = document.querySelector(".partners-slider");
let cardSlider, partnerSlider;

function mobileCardSlider() {
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

function mobilePartnersSlider() {
    if (window.innerWidth <= 1260 && mSliderPartners.dataset.mobile == "false") {
        partnerSlider = new Swiper(mSliderPartners, {
            centeredSlides: true,
            spaceBetween: 30,
            slidesPerView: 'auto',
            loop: true,
            loopedSlides: 20,
            slideClass: "partners-slider__slide"
        });
    }

    mSliderPartners.dataset.mobile == "true";

    if (window.innerWidth > 1260) {
        mSliderPartners.dataset.mobile == "false"

        if (mSliderPartners.classList.contains("swiper-initialized")) {
            partnerSlider.destroy();
        }
    }
}

mobileCardSlider();
mobilePartnersSlider();

const revSlider = document.querySelector(".reviews-slider");
const revSliderContainer = document.querySelector(".reviews__slider-container");
const revSliderButtons = document.querySelector(".reviews-slider__buttons");


let reviewsSlider = new Swiper(revSlider, {
    centeredSlides: false,
    spaceBetween: 50,
    slidesPerView: "auto",
    loop: true,
    loopedSlides: 20,
    slideClass: "reviews-item",
    navigation: {
        nextEl: ".reviews-slider__button--next",
        prevEl: ".reviews-slider__button--prev",
    },
    pagination: {
        el: ".reviews-slider__pagination",
        clickable: true
    },
    breakpoint: {
        320: {
            slidesPerView: 1,
            centeredSlides: true,
            navigation: true,
            pagination: true,
        },
        560: {
            slidesPerView: 2,
            centeredSlides: true,
        },
        980: {
            slidesPerView: "auto",
            centeredSlides: true,
        }
    }

});

function revSliderSize() {
    if (window.innerWidth > 1260) {
        const offsetRevSlider = (revSlider.offsetWidth - 1140) / 2;
        revSliderContainer.style.cssText = 'width: ' + (window.innerWidth - offsetRevSlider - 20) + 'px; transform: translateX(' + offsetRevSlider + 'px';
        revSliderButtons.style.cssText = 'right: ' + offsetRevSlider + 'px';
    } else {
        revSliderContainer.style.cssText = '';
        revSliderButtons.style.cssText = '';
    }
}

revSliderSize();