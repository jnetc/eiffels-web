document.addEventListener('DOMContentLoaded', async () => {
  // Динамический импорт утилит для работы с диалоговыми окнами и функций для отзыва токена
  const { closeDialog, openDialog } = await import('./dialogUtils.js');
  // Выбираем все элементы с классом ".card__description"
  const workers = document.querySelectorAll('.worker') as NodeListOf<HTMLElement>;
  // const textBox = document.querySelectorAll('.card__description') as NodeListOf<HTMLElement>;
  // Находим элемент, который будет использоваться в качестве диалога
  const dialogMPI = document.getElementById('mp-item-dialog') as HTMLDialogElement;

  // ------------------------------
  // Функция для обрезки текста в карточке и отображения кнопки "Читать далее", если текст превышает высоту
  function getLineCount(element: HTMLElement) {
    // Находим элемент с классом ".card__text" внутри текущего элемента
    const cardText = element.querySelector('.card__text') as HTMLParagraphElement;
    // Получаем высоту элемента с текстом
    const cardTextHeight = Math.round(cardText.getBoundingClientRect().height);
    // Получаем полную высоту текста, включая скрытые части
    const cardTextscrollHeight = cardText.scrollHeight;

    // Создаем кнопку "Читать далее"
    const button = document.createElement('button');
    button.className = 'btn-blue-border btn-overflow mp-item-dialog';
    button.setAttribute('aria-label', 'Read all text');
    button.setAttribute('title', 'Read all text');
    button.textContent = 'Open';
    // Добавляем обработчик клика для открытия диалога
    button.addEventListener('click', openDialogAndCloneCard);

    // Если высота текста превышает высоту видимой части, добавляем кнопку
    if (cardTextscrollHeight > cardTextHeight) {
      cardText.classList.add('card__text-clamp'); // Добавляем класс для обрезки текста
      element.appendChild(button); // Добавляем кнопку к элементу
    }
  }

  // Проходим по всем найденным элементам и применяем функцию для обработки текста

  for (const worker of workers) {
    const cardText = worker.querySelectorAll('.card__description') as NodeListOf<HTMLElement>;

    for (const element of cardText) {
      getLineCount(element);
    }
  }

  // ------------------------------
  // Функция для открытия диалога и отображения полного текста
  function openDialogAndCloneCard(event: Event) {
    // Клонируем родительский элемент с классом ".card" для отображения в диалоге
    const cardElement = (event.target as HTMLElement).closest('.card') as HTMLElement;
    const copyTarget = cardElement.cloneNode(true) as HTMLElement;
    // Заменяем класс "card__text" на "card__full-text" в клонированном элементе
    copyTarget.querySelector('.card__text')?.classList.replace('card__text', 'card__full-text');
    // Удаляем кнопку "Читать далее" из клонированного элемента
    copyTarget.querySelector('.mp-item-dialog')?.remove();
    // Вставляем клонированный элемент в начало области прокрутки в диалоге
    dialogMPI.querySelector('.dialog__scroll-area')?.insertAdjacentElement('afterbegin', copyTarget);

    // Вызов функции открытия диалога
    openDialog(dialogMPI);
  }

  // Функция для закрытия диалога и восстановления прокрутки страницы
  function cancelOrCloseDialogMPI(event: Event) {
    // Удаляем клонированный элемент с классом ".card" из диалога
    (event.target as HTMLElement)?.closest('#mp-item-dialog')?.querySelector('.card')?.remove();
    // Закрываем диалоговое окно
    closeDialog(dialogMPI);
  }

  // Добавляем обработчик клика на кнопку закрытия диалога
  dialogMPI.querySelector('[data-button="close"]')?.addEventListener('click', cancelOrCloseDialogMPI);
});
