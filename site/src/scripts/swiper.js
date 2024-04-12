// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const setupSwiper = () => {
    const swiper = new Swiper(".swiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,

        // autoplay: {
        //     delay: 6000,
        //     disableOnInteraction: false,
        // },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

export default {
    setupSwiper
}

