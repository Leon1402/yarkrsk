const CARS = [
    'Автовышка 15м', 'Автовышка 22м', 'Автовышка 32м',
    'Автовышка 40м', 'Камаз КС 45717К-1Р (25т)', 'Камаз КС-45717К-3Р. Вездеход 6х6 (25т)',
    'Автокран XCMG QY30K5S (30т)', 'Автокран МЗКТ КС-65721-2 (60т)', 'Б10М',
    'Shantui SD16', 'Shantui SD22', 'Shantui SD32',
    'Четра Т25', 'ДЗ-143', 'ДЗ-98B',
    'Caterpillar 120M', 'Ammann ASC 130D', 'SDLG RS8140',
    'LiuGong CLG 614H', 'XCMG XS143J', 'Shantui SR16',
    'Ammann ASC 150D', 'BOMAG BW 100 AD-5', 'Sakai tw500',
    'Foton Lovol fl936f', 'SDLG LG936L', 'XCLG LW300F',
    'Bobcat', 'КАМАЗ 6520', 'КАМАЗ 6522',
    'КАМАЗ 65201', 'Case 210', 'Case CX 290B',
    'Hitachi 270', 'Doosan 300', 'Hyundai 320',
    'Hyundai 330', 'Doosan 180', 'Doosan 190',
    'Hitachi 210', 'MST M544', 'CAT 426F2',
]

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
const imgButtons = document.querySelectorAll('.equipment__item')

const cars = document.querySelector('.cars');

const openCars =  (e, i) => {
    for (let item of navButtons) {
        item.classList.remove('nav__button_active');
    }
    navButtons[i].classList.add('nav__button_active');

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
}

for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener('click', (e) => {
        openCars(e, i)
    })
}

for (let i = 0; i < imgButtons.length; i++) {
    imgButtons[i].addEventListener('click', (e) => {
        openCars(e, i)
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
    
    for (let item of navButtons) {
        item.classList.remove('nav__button_active');
    }

    document.querySelectorAll('.section').forEach((item) => {
        item.style.display = 'flex';
    })
})

const buttons = document.querySelectorAll('.cars__button_order');
const modal = document.querySelector('.modal-arend');
form = modal.querySelector('.modal-arend__content')

buttons.forEach((button, index) => {
    button.addEventListener('click', e => {
        const inputCar = modal.querySelector('.modal-arend__input_car');
        inputCar.value = CARS[index]
        modal.classList.add('modal-arend_active');
    })
})

form.addEventListener('click', e => {
    e._isFormClicked = true
})

modal.addEventListener('click', e => {
    if (!e._isFormClicked) {
        form.reset();
        modal.classList.remove('modal-arend_active');
    }
})

document.querySelector('.modal-arend__close').addEventListener('click', e => {
    e.preventDefault()
    form.reset();
    modal.classList.remove('modal-arend_active');
})