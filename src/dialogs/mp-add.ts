document.addEventListener('DOMContentLoaded', async () => {
  // Динамически импортируем функцию openDialog из модуля "dialogUtils.js"
  const { openDialog } = await import('./dialogUtils.js');

  // Получаем элементы кнопок и диалоговых окон по их ID
  const buttonMPAddDialog = document.getElementById('button__mp-add-dialog') as HTMLButtonElement;
  const dialogMPAdd = document.getElementById('mp-add-dialog') as HTMLDialogElement;
  const dialogMPLogin = document.getElementById('mp-login-dialog') as HTMLDialogElement;

  // Получаем элементы категорий по их ID
  const btnListVacancies = document.getElementById('list_vacancies') as HTMLButtonElement;
  const btnSupplyServices = document.getElementById('supply_services') as HTMLButtonElement;
  const btnSellMaterials = document.getElementById('sell_materials') as HTMLButtonElement;

  // Проверяем, авторизован ли пользователь, проверяя наличие cookie с именем "tokken"
  if (document.cookie.match('tokken')) {
    // Если пользователь авторизован, открываем диалоговое окно добавления материала/услуги при нажатии на кнопку
    buttonMPAddDialog.addEventListener('click', () => {
      openDialog(dialogMPAdd);
    });
  } else {
    // Если пользователь не авторизован, открываем диалоговое окно входа при нажатии на кнопку
    buttonMPAddDialog.addEventListener('click', async () => {
      openDialog(dialogMPLogin);

      // ------------------------------
      // Динамически импортируем функцию loadPhoneCodes из модуля "phone_codes.js"
      const { default: loadPhoneCodes } = await import('../login/phoneCodes.js');
      loadPhoneCodes();

      // Динамически импортируем функцию handlePhoneNumber из модуля "login.js"
      const { default: handlePhoneNumber } = await import('../login/login.js');

      // Выполняем функцию handlePhoneNumber, передавая в нее константу MARKETPLACE
      handlePhoneNumber(MARKETPLACE);
    });
  }

  // ------------------------------
  // Обработчики для открытия диалогов в зависимости от выбранной категории

  // При нажатии на кнопку списка вакансий выводим сообщение в консоль
  btnListVacancies.addEventListener('click', () => {
    console.log('handle vacancies');
  });

  // При нажатии на кнопку услуг выводим сообщение в консоль
  btnSupplyServices.addEventListener('click', () => {
    console.log('handle services');
  });

  // При нажатии на кнопку материалов выводим сообщение в консоль
  btnSellMaterials.addEventListener('click', () => {
    console.log('handle materials');
  });
});
