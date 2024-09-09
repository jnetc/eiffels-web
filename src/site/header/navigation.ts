export default function navigation() {
  // Кнопка мобильного меню и контейнер меню
  const openMenuButton = document.getElementById('header__open-mob-menu') as HTMLButtonElement;
  const closeMenuButton = document.getElementById('header__close-mob-menu') as HTMLButtonElement;
  const mobNavigation = document.querySelector('.header__nav') as HTMLElement;

  // ------------------------------
  // МОБИЛЬНОЕ МЕНЮ

  // Обработка клика по кнопке мобильного меню
  openMenuButton.addEventListener('click', () => {
    mobNavigation.classList.add('open');
    mobNavigation.classList.contains('open')
      ? addEventsToLinks(true) // Если меню открыто, добавляем события клика
      : addEventsToLinks(false); // Если меню закрыто, убираем события клика
  });
  // Обработка клика по кнопке мобильного меню
  closeMenuButton.addEventListener('click', () => {
    console.log('close');

    mobNavigation.classList.remove('open');
  });

  // Функция для добавления или удаления событий клика на ссылки
  function addEventsToLinks(boolean: boolean) {
    for (const element of mobNavigation.querySelectorAll('a')) {
      if (boolean) {
        // Добавляем обработчик клика для закрытия меню
        element.addEventListener('click', () => {
          mobNavigation.classList.remove('open');
        });
      } else {
        // Удаляем обработчик клика
        element.removeEventListener('click', () => {});
      }
    }
  }
}
