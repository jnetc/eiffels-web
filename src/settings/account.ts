document.addEventListener('DOMContentLoaded', async () => {
  type TypeSelection = 'preferences' | 'personal' | 'phone' | 'email' | 'role';
  type User = typeof user;

  // Имитированные данные пользователя
  const user = {
    id: 1,
    language: 'fi',
    postalCode: '00110',
    firstName: 'Jussi',
    lastName: 'Heinola',
    phoneNumber: '+358501231234',
    emailAddress: 'jussi.heinola@example.com',
    role: 'jobs',
  };

  // Получаем ссылки на формы по их ID
  const preferencesForm = document.getElementById('settings__preferences') as HTMLFormElement;
  const personalForm = document.getElementById('settings__personal') as HTMLFormElement;
  const phoneForm = document.getElementById('settings__phone') as HTMLFormElement;
  const emailForm = document.getElementById('settings__email') as HTMLFormElement;
  const rolesForm = document.getElementById('settings__roles') as HTMLFormElement;
  const deleteAccountForm = document.getElementById('settings__delete-account') as HTMLFormElement;

  // Получаем ссылки на элементы ввода по их ID
  const language = document.getElementById('preferences__language') as HTMLSelectElement;
  const postalCode = document.getElementById('preferences__postal-code') as HTMLInputElement;
  const firstName = document.getElementById('personal__first-name') as HTMLInputElement;
  const lastName = document.getElementById('personal__last-name') as HTMLInputElement;
  const phoneNumber = document.getElementById('phone__number') as HTMLInputElement;
  const emailAddress = document.getElementById('email__address') as HTMLInputElement;
  const role = document.getElementById('roles__role') as HTMLSelectElement;

  // Получаем ссылку на элемент для отображения сообщений об ошибке
  const errorMessage = document.querySelector('.error-message') as HTMLDivElement;

  // Заполняем поля формы данными пользователя
  language.value = user.language;
  postalCode.value = user.postalCode;
  firstName.value = user.firstName;
  lastName.value = user.lastName;
  phoneNumber.value = user.phoneNumber;
  emailAddress.value = user.emailAddress;
  role.value = user.role;

  // Функция для обработки отправки формы
  function updateAccount(event: Event, section: TypeSelection) {
    event.preventDefault(); // Предотвращаем стандартное действие формы
    const button = (event.target as HTMLFormElement).querySelector('[type="submit"]') as HTMLButtonElement; // Находим кнопку в форме

    if (!button) throw new Error('No button found in form');

    button.disabled = true; // Отключаем кнопку
    button.firstElementChild!.textContent = 'Saving'; // Меняем текст на кнопке

    // Обновляем данные пользователя в зависимости от раздела формы
    switch (section) {
      case 'preferences':
        emulateSaveOnServer(button, {
          ...user,
          language: language.value,
          postalCode: postalCode.value,
        });
        return;
      case 'personal':
        emulateSaveOnServer(button, {
          ...user,
          firstName: firstName.value,
          lastName: lastName.value,
        });
        return;
      case 'phone':
        emulateSaveOnServer(button, {
          ...user,
          phoneNumber: phoneNumber.value,
        });
        return;
      case 'email':
        emulateSaveOnServer(button, {
          ...user,
          emailAddress: emailAddress.value,
        });
        return;
      case 'role':
        emulateSaveOnServer(button, { ...user, role: role.value });
        return;
      default:
        user;
    }
  }

  // Функция для имитации сохранения данных на сервере
  async function emulateSaveOnServer(button: HTMLButtonElement, user: User) {
    if (errorMessage.classList.contains('show')) {
      // Убираем сообщение об ошибке, если оно есть
      errorMessage.classList.remove('show');
    }

    try {
      // Имитация задержки при сохранении данных
      const timeout = setTimeout(() => {
        button.firstElementChild!.textContent = 'Save'; // Восстанавливаем исходный текст кнопки
        button.disabled = false; // Включаем кнопку
        console.log('updated'); // Выводим сообщение в консоль о том, что данные обновлены
        clearTimeout(timeout); // Очищаем таймер
      }, 3000);

      console.log('get preferences', user); // Логируем данные, которые нужно сохранить
    } catch (error) {
      console.log(error); // Логируем ошибку в консоль
      errorMessage?.classList.add('show'); // Показываем сообщение об ошибке
    }
  }

  // Добавляем обработчики событий для отправки форм
  preferencesForm.addEventListener('submit', event => updateAccount(event, 'preferences'));
  personalForm.addEventListener('submit', event => updateAccount(event, 'personal'));
  phoneForm.addEventListener('submit', event => updateAccount(event, 'phone'));
  emailForm.addEventListener('submit', event => updateAccount(event, 'email'));
  rolesForm.addEventListener('submit', event => updateAccount(event, 'role'));

  // Функция для удаления аккаунта
  async function deleteAccount(event: Event) {
    // Предотвращаем стандартное действие формы
    event.preventDefault();

    try {
      // Логируем сообщение о удалении аккаунта
      console.log('delete account');
    } catch (error) {
      // Логируем ошибку в консоль
      console.log(error);
    }
  }
  // Добавляем обработчик события для удаления аккаунта
  deleteAccountForm.addEventListener('submit', deleteAccount);
});
