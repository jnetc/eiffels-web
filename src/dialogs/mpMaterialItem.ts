document.addEventListener('DOMContentLoaded', async () => {
  // Динамический импорт утилит для работы с диалоговыми окнами и функций для отзыва токена
  const { openDialog } = await import('./dialogUtils.js');
  // Выбираем все элементы с классом ".card__description"
  const openDialogMPI = document.querySelectorAll('.mp-item-dialog') as NodeListOf<HTMLElement>;
  // Находим элемент, который будет использоваться в качестве диалога
  const dialogMPI = document.getElementById('mp-item-dialog') as HTMLDialogElement;

  const carouselImages = document.querySelectorAll('.card__image') as NodeListOf<HTMLImageElement>;

  // ------------------------------
  // Функция для открытия диалога и отображения полного текста
  function openDialogAndCloneCard() {
    // Клонируем родительский элемент с классом ".card" для отображения в диалоге
    // const cardElement = (event.target as HTMLElement).closest('.card') as HTMLElement;
    // const copyTarget = cardElement.cloneNode(true) as HTMLElement;
    // // Заменяем класс "card__text" на "card__full-text" в клонированном элементе
    // copyTarget.querySelector('.card__text')?.classList.replace('card__text', 'card__full-text');
    // // Удаляем кнопку "Читать далее" из клонированного элемента
    // copyTarget.querySelector('.mp-item-dialog')?.remove();
    // // Вставляем клонированный элемент в начало области прокрутки в диалоге
    // dialogMPI.querySelector('.dialog__scroll-area')?.insertAdjacentElement('afterbegin', copyTarget);

    // Вызов функции открытия диалога
    openDialog(dialogMPI);
  }

  function setAsPreviewImage(event: Event) {
    const image = event.target as HTMLImageElement;
    const previewImage = document.getElementById('preview-image') as HTMLImageElement;
    previewImage.src = image.src;
    previewImage.alt = image.alt;
  }

  for (const button of openDialogMPI) {
    button.addEventListener('click', openDialogAndCloneCard);
  }

  for (const image of carouselImages) {
    image.addEventListener('click', setAsPreviewImage);
  }
});
