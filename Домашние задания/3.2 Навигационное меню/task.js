// task.js

// Получаем все элементы с классом 'menu__link' внутри основного меню
const menuLinks = Array.from(document.querySelectorAll('.menu_main .menu__link'));

// Добавляем обработчик события 'click' для каждого элемента меню
menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', (event) => {
        // Находим ближайший родительский элемент <li> с классом 'menu__item'
        const menuItem = menuLink.closest('.menu__item');

        // Ищем вложенное меню внутри этого <li>
        const subMenu = menuItem.querySelector('.menu_sub');

        if (subMenu) {
            // Переключаем класс 'menu_active' у вложенного меню
            subMenu.classList.toggle('menu_active');

            // Предотвращаем переход по ссылке, если есть вложенное меню
            event.preventDefault();
        }
        // Если вложенного меню нет, переход по ссылке произойдет по умолчанию
    });
});