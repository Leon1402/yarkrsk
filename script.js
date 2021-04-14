const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 5,
    allowTouchMove: true,
    lazy: true,
    breakpoints: {
        480: {
            slidesPerView: 2,
            allowTouchMove: true,
        },
        768: {
            slidesPerView: 3,
            allowTouchMove: false,
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});