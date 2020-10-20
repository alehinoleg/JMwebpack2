import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Pagination]);
const slider = document.querySelector('.slider-containerRepairs');


let mySwiper;

function mobileSlider() {
    if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
        mySwiper = new Swiper('.slider-containerRepairs', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            loop: true,
            slideClass: 'card',
            pagination: {
                el: '.swiper-pagination2',
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