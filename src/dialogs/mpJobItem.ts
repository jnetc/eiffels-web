document.addEventListener('DOMContentLoaded', async () => {
  // Динамический импорт утилит для работы с диалоговыми окнами и функций для отзыва токена
  const { closeDialog, openDialog } = await import('./dialogUtils.js');
  // Выбираем все элементы с классом ".mp-card__description"
  const cards = document.querySelectorAll('.mini-card') as NodeListOf<HTMLElement>;
  // const textBox = document.querySelectorAll('.mp-card__description') as NodeListOf<HTMLElement>;
  // Находим элемент, который будет использоваться в качестве диалога
  const dialogMPI = document.getElementById('mp-item-dialog') as HTMLDialogElement;

  // ------------------------------
  // Функция для обрезки текста в карточке и отображения кнопки "Читать далее", если текст превышает высоту
  // function getLineCount(element: HTMLElement) {
  //   // Находим элемент с классом ".mp-card__text" внутри текущего элемента
  //   const cardText = element.querySelector('.mp-card__text') as HTMLParagraphElement;
  //   // Получаем высоту элемента с текстом
  //   const cardTextHeight = Math.round(cardText.getBoundingClientRect().height);
  //   // Получаем полную высоту текста, включая скрытые части
  //   const cardTextscrollHeight = cardText.scrollHeight;

  //   // Создаем кнопку "Читать далее"
  //   const button = document.createElement('button');
  //   button.className = 'btn-blue-border card__open-btn mp-item-dialog';
  //   button.setAttribute('aria-label', 'Read all text');
  //   button.setAttribute('title', 'Read all text');
  //   button.textContent = 'Open';
  //   // Добавляем обработчик клика для открытия диалога
  //   button.addEventListener('click', openDialogAndCloneCard);

  //   // Если высота текста превышает высоту видимой части, добавляем кнопку
  //   if (cardTextscrollHeight > cardTextHeight) {
  //     cardText.classList.add('mp-card__text-clamp'); // Добавляем класс для обрезки текста
  //     element.appendChild(button); // Добавляем кнопку к элементу
  //   }
  // }

  // Проходим по всем найденным элементам и применяем функцию для обработки текста

  for (const card of cards) {
    // Остановить всплытие события для ссылок внутри карточки
    const links = card.querySelectorAll('a');
    for (const link of links) {
      link.addEventListener('click', event => {
        event.stopImmediatePropagation(); // Останавливаем всплытие события клика
      });
    }

    card.addEventListener('click', openDialogAndCloneCard);
  }

  // ------------------------------
  // Функция для открытия диалога и отображения полного текста
  function openDialogAndCloneCard(event: Event) {
    // Клонируем родительский элемент article для отображения в диалоге
    const cardElement = (event.target as HTMLElement).closest('article') as HTMLElement;
    const copyTarget = cardElement.cloneNode(true) as HTMLElement;
    // Заменяем класс "article__text" на "mp-card__full-text" в клонированном элементе
    copyTarget.querySelector('.mp-card__text')?.classList.replace('mp-card__text', 'mp-card__full-text');
    // Удаляем кнопку "Читать далее" из клонированного элемента
    copyTarget.querySelector('.mp-item-dialog')?.remove();
    // Вставляем клонированный элемент в начало области прокрутки в диалоге
    dialogMPI.querySelector('.dialog__scroll-area')?.insertAdjacentElement('afterbegin', copyTarget);

    // Вызов функции открытия диалога
    openDialog(dialogMPI);
  }

  // Функция для закрытия диалога и восстановления прокрутки страницы
  function cancelOrCloseDialogMPI(event: Event) {
    // Удаляем клонированный элемент article из диалога
    (event.target as HTMLElement)?.closest('#mp-item-dialog')?.querySelector('article')?.remove();
    // Закрываем диалоговое окно
    closeDialog(dialogMPI);
  }

  // Добавляем обработчик клика на кнопку закрытия диалога
  dialogMPI.querySelector('[data-button="close"]')?.addEventListener('click', cancelOrCloseDialogMPI);
});
