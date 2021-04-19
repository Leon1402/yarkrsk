const navButton = document.querySelectorAll('.nav__button_open');

for (const item of navButton) {
    item.addEventListener('click', function () {
        const list = this.nextElementSibling;

        if (list.style.maxHeight) {
            list.style.maxHeight = null;
        } else {
            list.style.maxHeight = list.scrollHeight + "px";
        }
    })
}

document.querySelector(".header__item_catalog").addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('nav_active');
})