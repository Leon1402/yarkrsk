const swiper = new Swiper('.swiper-container', {
    slidesPerView: 9,
    spaceBetween: 5,
    direction: 'vertical',
    allowTouchMove: false,
    loop: false,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    breakpoints: {
        769: {
        direction: 'horizontal',
            slidesPerView: 3,
            loop: true,
           
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const list = document.querySelector('.header__nav');

window.addEventListener('click', e => {
    if (!e._isListClicked) {
        list.classList.remove('header__nav_active');
    }
})

const modal = document.querySelector('.modal');

document.querySelector('.hero__button').addEventListener('click', () => {
    modal.classList.add('modal_active');
})

document.querySelector('.modal__close').addEventListener('click', () => {
    modal.classList.remove('modal_active');
})

modal.querySelector('.modal__content').addEventListener('click', (e) => {
    e._isModalClick = true
})

modal.addEventListener('click', (e) => {
    if(!e._isModalClick) {
        modal.classList.remove('modal_active');
    }
})