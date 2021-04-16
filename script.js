const swiper = new Swiper('.swiper-container', {

    slidesPerView: 3,
    // spaceBetween: 5,
    direction: 'vertical',
    allowTouchMove: true,
    lazy: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
        direction: 'horizontal',
            slidesPerView: 3,
            allowTouchMove: false,
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const list = document.querySelector('.header__nav')

document.querySelector('.burger').addEventListener('click', e => {
    list.classList.add('header__nav_active');
    e.cancelBubble = true
})

document.querySelector('.header__close').addEventListener('click', () => {
    list.classList.remove('header__nav_active');
})

list.addEventListener('click', e => {
    e._isListClicked = true
});

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