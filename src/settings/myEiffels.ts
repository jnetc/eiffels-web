document.addEventListener('DOMContentLoaded', async () => {
  type TypeStatus = 'connected' | 'disconnected';
  // Найдите элемент с классом 'error-message'
  // const errorMessage = document.querySelector('.error-message') as HTMLDivElement;

  // Выберите все элементы с классом 'settings__connection'
  const connections = document.querySelectorAll('.settings__connection') as NodeListOf<HTMLDivElement>;

  // Найти элемент для отображения сообщения об ошибке
  const { default: errorMessage } = await import('../components/errorMessage.js');

  // Функция, вызываемая при клике на элемент подключения
  function connectCloud(event: Event) {
    // Получаем элемент подключения, на который кликнули
    const connectionElem = event.currentTarget as HTMLDivElement;

    // Получаем первый дочерний элемент (предполагается, что это чекбокс)
    const checkbox = connectionElem.firstElementChild as HTMLInputElement;

    // Находим элемент с классом 'connection__status' внутри подключения
    const statusElem = connectionElem.querySelector('.connection__status') as HTMLSpanElement;

    // Переключаем состояние подключения на основе состояния чекбокса
    if (checkbox.checked) {
      // Если чекбокс выбран, вызываем функцию для подключения
      emulateServerConnection(statusElem, connectionElem, 'connected');
    } else {
      // Если чекбокс не выбран, вызываем функцию для отключения
      emulateServerConnection(statusElem, connectionElem, 'disconnected');
    }
  }

  // Асинхронная функция для имитации подключения к серверу
  async function emulateServerConnection(
    statusElem: HTMLSpanElement,
    connectionElem: HTMLDivElement,
    status: TypeStatus
  ) {
    // Если отображается сообщение об ошибке, скрываем его
    errorMessage(null);

    try {
      // Изменяем текст состояния на "Connecting" и добавляем класс 'disabled'
      statusElem.querySelector('span')!.textContent = status.replace('ed', 'ing');
      connectionElem.classList.add('disabled');
      console.log('Connecting...');

      // Имитация задержки при подключении к серверу
      const timeout = setTimeout(() => {
        // Убираем класс 'disabled' и меняем текст состояния на "Connected"
        connectionElem.classList.remove('disabled');
        statusElem.firstElementChild!.textContent = status;

        console.log(status);
        clearTimeout(timeout); // Очищаем таймер
      }, 3000);
    } catch (error) {
      // В случае ошибки показываем сообщение об ошибке
      console.log(error);
      errorMessage(null);
    }
  }

  // Добавляем обработчик события 'click' ко всем элементам подключения
  for (const connection of connections) {
    connection.addEventListener('click', connectCloud);
  }
});
