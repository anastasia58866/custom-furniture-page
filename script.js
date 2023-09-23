//  Смена года в копирайте

const footerYearEl = document.querySelector('.footer__year');
let today = new Date();
let year = today.getFullYear();

footerYearEl.textContent = year;

// Бургер

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('body_lock'); // Запрет скролла при открытом меню
        iconMenu.classList.toggle('menu__icon_active');
        menuBody.classList.toggle('menu__body_active');
    });
}

// Прокрутка при клике 
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight; //- document.querySelector('header').offsetHeight; для фикисированной шапки

            if (iconMenu.classList.contains('menu__icon_active')) {
                document.body.classList.remove('body_lock'); // Запрет скролла при открытом меню
                iconMenu.classList.remove('menu__icon_active');
                menuBody.classList.remove('menu__body_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
