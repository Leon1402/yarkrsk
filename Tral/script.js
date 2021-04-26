const navButtons = document.querySelectorAll('.nav__button');

for (const item of navButtons) {
    item.addEventListener('click', e => {
        document.querySelector('.home').style.display = 'none'
        for (let item of navButtons) {
            item.classList.remove('nav__button_active');
        }
        e.currentTarget.classList.add('nav__button_active');

        const sevicesList = document.querySelectorAll('.section')

        if (e.currentTarget.dataset.type != 'all') {
            for (const service of sevicesList) {
                service.style.display = 'none'
            }
            document.querySelector(`[data-${e.currentTarget.dataset.type}]`).style.display = 'flex'
        } else {
            for (const service of sevicesList) {
                service.style.display = 'flex'
            }
        }
    })
}

const catalog = document.querySelector('.header__button_catalog')
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
    document.querySelector('.home').style.display = 'flex'

    document.querySelectorAll('.section').forEach((item) => {
        item.style.display = 'none';
    })
})
