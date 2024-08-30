export default async function handlePhoneNumber(pathname: string) {
  // Найти форму для логина на странице
  const loginForm = document.querySelector('.login__form') as HTMLFormElement;

  // Найти поле ввода номера телефона
  const phoneNumberCode = document.getElementById('login__phone-code') as HTMLSpanElement;
  const phoneNumberInput = document.getElementById('login__phone-number') as HTMLInputElement;

  // Сообщение об ошибке
  const { default: errorMessage } = await import('../components/errorMessage.js');

  // Переменная для хранения введенного номера телефона
  let phoneNumber = '';

  // Проверка, существует ли форма для логина
  if (loginForm) {
    // Добавляем обработчик события отправки формы
    loginForm.addEventListener('submit', async event => {
      // Отменить стандартное действие браузера при отправке формы
      event.preventDefault();

      phoneNumberInput.disabled = true;

      // Динамический импорт модулей для ленивой загрузки
      const { default: authentication } = await import('./authentication.js');
      const { openDialog } = await import('../dialogs/dialogUtils.js');

      // Собираем номер телефона код страны и номер из поля ввода
      const fullPhoneNumber = `${phoneNumberCode.innerText}${phoneNumber}`;

      console.log('phone number', fullPhoneNumber);

      // Проверка, если pathname содержит MARKERPLACE
      if (pathname.includes(MARKETPLACE)) {
        console.log('marketplace', fullPhoneNumber);

        // Открыть диалоговое окно для аутентификации на маркетплейсе
        openDialog(document.getElementById('mp-auth-dialog') as HTMLDialogElement);

        // Вызов функции аутентификации для маркетплейса
        authentication(MARKETPLACE);
        return;
      }

      // Проверка, если pathname содержит INDEX
      if (pathname.includes(INDEX)) {
        console.log('index', fullPhoneNumber);

        // Открыть диалоговое окно для аутентификации на главной странице
        openDialog(document.getElementById('hs-auth-dialog') as HTMLDialogElement);

        // Вызов функции аутентификации для маркетплейса
        authentication(MARKETPLACE);

        // Вызов функции аутентификации для главной страницы
        // authentication(LOGGED);
        return;
      }
    });
  }

  // Проверка, существует ли поле ввода номера телефона
  if (phoneNumberInput) {
    // Немедленно установить фокус на поле ввода номера телефона
    // phoneNumberInput.focus();

    // Добавляем обработчик события ввода текста
    phoneNumberInput.addEventListener('input', event => {
      const input = (event.target as HTMLInputElement).value;

      // Если поле ввода пустое
      if (input === '') {
        // Убрать сообщение об ошибке
        errorMessage(null);
        return;
      }

      // Если введенное значение не является числом
      if (!/^[0-9]{0,}$/.test(input)) {
        console.log('input_errror', input);

        // Показать сообщение об ошибке
        errorMessage(
          loginForm,
          'Invalid input. The phone number must start with a plus sign (+) and contain only numerical values.	Please correct your entry.'
        );

        return;
      }

      // Убрать сообщение об ошибке, если введенное значение корректно
      errorMessage(null);

      // Обновить переменную с номером телефона
      phoneNumber = input;
    });
  }
}
