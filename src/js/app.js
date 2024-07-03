document.addEventListener('DOMContentLoaded', function () {
    const main = new Swiper('.main-slider', {
        spaceBetween: 31,
        slidesPerView: 3,
        loop: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '#next1',
            prevEl: '#prev1',
        },

    });

    const slider1 = new Swiper('.slider', {
        spaceBetween: 31,
        slidesPerView: 4,
        loop: true,
        navigation: {
            nextEl: '#next2',
            prevEl: '#prev2',
        },

    });
});
