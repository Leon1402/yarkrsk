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

const linkMenu = document.querySelector('.header__item_link');
const linkList = document.querySelector('.link__list')

// linkMenu.addEventListener('click', e => {
//     e.cancelBubble = true
//     linkList.classList.toggle('link__list_active');
// });

// linkList.addEventListener('click', e => {
//     e._islistClicked = true;
// });

// window.addEventListener('click', e => {
//     if (!e._islistClicked) {
//         linkList.classList.remove('link__list_active');
//     }
// })