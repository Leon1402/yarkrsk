const openButtons = document.querySelectorAll('.nav__button_open');

for (const item of openButtons) {
    item.addEventListener('click', function () {
        const list = this.nextElementSibling;

        if (list.style.maxHeight) {
            list.style.maxHeight = null;
        } else {
            list.style.maxHeight = list.scrollHeight + "px";
        }
    })
}

const linkMenu = document.querySelector('.header__item_link');
const linkList = document.querySelector('.link__list')

const navButtons = document.querySelectorAll('.nav__button');
const cars = document.querySelector('.cars')

for (const item of navButtons) {
    item.addEventListener('click', e => {
        for (let item of navButtons) {
            item.classList.remove('nav__button_active');
        }
        e.currentTarget.classList.add('nav__button_active');

        const carsList = document.querySelectorAll('.cars__item')

        if (e.currentTarget.dataset.type != 'all') {
            for (const car of carsList) {
                car.style.display = 'none'
            }
            document.querySelectorAll(`[data-${e.currentTarget.dataset.type}]`).forEach(item => {
                item.style.display = 'flex'
            })
        } else {
            for (const car of carsList) {
                car.style.display = 'flex'
            }
        }
        document.querySelectorAll('.section').forEach((item) => {
            item.style.display = 'none';
        });
        
        cars.style.display = 'flex';
    })
}

const catalog = document.querySelector('.header__item_catalog')
const nav = document.querySelector('.nav');

catalog.addEventListener('click', e => {
    e.cancelBubble = true
    nav.classList.toggle('nav_active')
});

nav.addEventListener('click', e => {
    e._isNavClicked = true;
})

window.addEventListener('click', e => {
    if (!e._isNavClicked) {
        nav.classList.remove('nav_active')
    }
})

const home = document.querySelector('.header__item_home')

home.addEventListener('click', () => {
    cars.style.display = 'none';

    document.querySelectorAll('.section').forEach((item) => {
        item.style.display = 'flex';
    })
})