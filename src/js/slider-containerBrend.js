import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Pagination]);
const slider = document.querySelector('.slider-containerBrend');


let mySwiper;

function mobileSlider() {
    if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
        mySwiper = new Swiper('.slider-containerBrend', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            loop: true,
            slideClass: 'card',
            effect: "coverflow",
            pagination: {
                el: '.swiper-pagination1',
                type: 'bullets',
                clickable: true
            },
        });

        slider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 768) {
        slider.dataset.mobile = 'false';
        if (slider.classList.contains('swiper-container-initialized')) {

            mySwiper.destroy();

        }


    }
}

mobileSlider()

window.addEventListener('resize', () => {
    mobileSlider();
})