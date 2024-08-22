document.addEventListener('DOMContentLoaded', async () => {
  // Динамический импорт модулей, чтобы использовать функции для открытия и закрытия диалогов
  const { openDialog, closeDialog } = await import('./dialogUtils.js');

  // Получение элементов интерфейса по их ID
  const openDialogAUP = document.getElementById('open__aup-dialog') as HTMLButtonElement; // Кнопка для открытия диалога
  const dialogAUP = document.getElementById('aup-dialog') as HTMLDialogElement; // Сам диалог
  const formAUP = document.getElementById('aup__form') as HTMLFormElement; // Форма внутри диалога

  // Изображение для предварительного просмотра в диалоге
  const imageUrl = document.getElementById('aup__photo-display') as HTMLImageElement;

  // Основное изображение профиля
  const profilePicture = document.getElementById('profile__picture') as HTMLImageElement;

  // Поле ввода для выбора файла
  const file = document.querySelector('#aup__picture-file') as HTMLInputElement;

  // Сообщение об ошибке
  const { default: errorMessage } = await import('../components/errorMessage.js');

  // Обработчик для открытия диалога при нажатии на кнопку
  openDialogAUP.addEventListener('click', () => {
    // Копируем изображение профиля из основного UI и отображаем его в диалоге
    imageUrl.src = profilePicture.src;

    // Открываем диалог
    openDialog(dialogAUP);
  });

  // Функция для закрытия диалога при нажатии на кнопку "Cancel" или "Close"
  function cancelOrCloseDialogAUP() {
    // Очищаем выбранный файл и изображение
    file.value = '';
    imageUrl.src = '';

    // Скрываем сообщение об ошибке, если оно отображается
    errorMessage(null);

    // Закрываем диалог
    closeDialog(dialogAUP);
  }

  // Асинхронная функция для обработки изменений файла изображения
  async function getImageData() {
    // Добавляем обработчик события "change" на документ
    document.addEventListener('change', (event: Event) => {
      // Получаем выбранный файл из инпута
      const file = (event.target as HTMLInputElement).files?.[0];

      // Если файл выбран
      if (file) {
        const reader = new FileReader(); // Создаем объект FileReader для чтения файла

        // Когда файл прочитан, устанавливаем его как источник для превью изображения
        reader.onload = (e: ProgressEvent<FileReader>) => {
          // Проверяем, что результат чтения файла не null или undefined
          if (e.target?.result) {
            imageUrl.src = e.target.result as string; // Устанавливаем источник изображения для превью
          }
        };
        // Читаем выбранный файл как Data URL (base64)
        reader.readAsDataURL(file);
      } else {
        // Показываем сообщение об ошибке
        errorMessage(
          formAUP,
          'The file you uploaded is either invalid or exceeds the maximum allowed size. Please upload a valid file that meets the size requirements.'
        );
      }
    });
  }

  // Добавляем обработчик события для выбора файла и предварительного просмотра изображения
  file.addEventListener('click', getImageData);

  // Обработчик события для отправки формы
  formAUP.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault(); // Отменяем стандартное поведение формы
    const button = (event.target as HTMLFormElement).querySelector('button') as HTMLButtonElement;

    // Блокируем инпут и кнопку, и изменяем текст на кнопке для индикации загрузки
    file.disabled = true;
    button.disabled = true;
    button.querySelector('.btn-text')!.textContent = 'Uploading Image';

    // Эмуляция загрузки изображения на сервер с задержкой в 3 секунды
    const timeout = setTimeout(() => {
      // Если изображение успешно загружено, обновляем изображение профиля
      if (imageUrl.src) {
        profilePicture.src = imageUrl.src; // Обновляем основное изображение профиля
      }

      // Закрываем диалог и сбрасываем форму
      cancelOrCloseDialogAUP();

      // Восстанавливаем исходное состояние кнопки и инпута
      button.querySelector('.btn-text')!.textContent = 'Upload Image';
      file.disabled = false;
      button.disabled = false;

      clearTimeout(timeout);
    }, 3000); // Задержка в 3 секунды
  });
});
