export default function navigation() {
    // Кнопка мобильного меню и контейнер меню
    const mobMenuButton = document.getElementById('header__mob-menu-btn');
    const mobNavigation = document.querySelector('.header__nav');
    // ------------------------------
    // МОБИЛЬНОЕ МЕНЮ
    // Обработка клика по кнопке мобильного меню
    mobMenuButton.addEventListener('click', () => {
        mobNavigation.classList.toggle('open');
        mobNavigation.classList.contains('open')
            ? addEventsToLinks(true) // Если меню открыто, добавляем события клика
            : addEventsToLinks(false); // Если меню закрыто, убираем события клика
    });
    // Функция для добавления или удаления событий клика на ссылки
    function addEventsToLinks(boolean) {
        for (const element of mobNavigation.querySelectorAll('a')) {
            if (boolean) {
                // Добавляем обработчик клика для закрытия меню
                element.addEventListener('click', () => {
                    mobNavigation.classList.remove('open');
                });
            }
            else {
                // Удаляем обработчик клика
                element.removeEventListener('click', () => { });
            }
        }
    }
}
//# sourceMappingURL=navigation.js.map