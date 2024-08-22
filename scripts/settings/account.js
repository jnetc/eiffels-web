"use strict";
document.addEventListener('DOMContentLoaded', async () => {
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
    const preferencesForm = document.getElementById('settings__preferences');
    const personalForm = document.getElementById('settings__personal');
    const phoneForm = document.getElementById('settings__phone');
    const emailForm = document.getElementById('settings__email');
    const rolesForm = document.getElementById('settings__roles');
    const deleteAccountForm = document.getElementById('settings__delete-account');
    // Получаем ссылки на элементы ввода по их ID
    const language = document.getElementById('preferences__language');
    const postalCode = document.getElementById('preferences__postal-code');
    const firstName = document.getElementById('personal__first-name');
    const lastName = document.getElementById('personal__last-name');
    const phoneNumber = document.getElementById('phone__number');
    const emailAddress = document.getElementById('email__address');
    const role = document.getElementById('roles__role');
    // Найти элемент для отображения сообщения об ошибке
    const { default: errorMessage } = await import('../components/errorMessage.js');
    // Заполняем поля формы данными пользователя
    language.value = user.language;
    postalCode.value = user.postalCode;
    firstName.value = user.firstName;
    lastName.value = user.lastName;
    phoneNumber.value = user.phoneNumber;
    emailAddress.value = user.emailAddress;
    role.value = user.role;
    // Функция для обработки отправки формы
    function updateAccount(event, section) {
        event.preventDefault(); // Предотвращаем стандартное действие формы
        const button = event.target.querySelector('[type="submit"]'); // Находим кнопку в форме
        if (!button)
            throw new Error('No button found in form');
        button.disabled = true; // Отключаем кнопку
        button.firstElementChild.textContent = 'Saving'; // Меняем текст на кнопке
        // Обновляем данные пользователя в зависимости от раздела формы
        switch (section) {
            case 'preferences':
                emulateSaveOnServer(button, null);
                return;
            case 'personal':
                emulateSaveOnServer(button, Object.assign(Object.assign({}, user), { firstName: firstName.value, lastName: lastName.value }));
                return;
            case 'phone':
                emulateSaveOnServer(button, Object.assign(Object.assign({}, user), { phoneNumber: phoneNumber.value }));
                return;
            case 'email':
                emulateSaveOnServer(button, Object.assign(Object.assign({}, user), { emailAddress: emailAddress.value }));
                return;
            case 'role':
                emulateSaveOnServer(button, Object.assign(Object.assign({}, user), { role: role.value }));
                return;
            default:
                user;
        }
    }
    // Функция для имитации сохранения данных на сервере
    async function emulateSaveOnServer(button, user) {
        // Скрываем сообщение об ошибке, если оно отображается
        errorMessage(null);
        const parentElement = button.closest('.styled-box__footer'); // Находим родительский элемент кнопки
        try {
            // Искусственно выбрасываем ошибку для тестирования
            if (!user) {
                await new Promise((_, reject) => {
                    setTimeout(() => {
                        button.firstElementChild.textContent = 'Save';
                        button.disabled = false;
                        reject(new Error('Server error: We encountered an issue while trying to save your changes. Please check your connection and try again. If the problem persists, contact our support team for assistance.'));
                    }, 1000);
                });
            }
            // Имитация задержки при сохранении данных
            const timeout = setTimeout(() => {
                button.firstElementChild.textContent = 'Save';
                button.disabled = false;
                console.log('updated');
                clearTimeout(timeout);
            }, 1000);
            console.log('get preferences', user, parentElement);
        }
        catch (error) {
            // Приведение ошибки к типу Error для работы с message
            const errorMessageText = error instanceof Error ? error.message : 'An unknown error occurred';
            // Показываем сообщение об ошибке
            errorMessage(parentElement, errorMessageText);
        }
    }
    // Добавляем обработчики событий для отправки форм
    preferencesForm.addEventListener('submit', event => updateAccount(event, 'preferences'));
    personalForm.addEventListener('submit', event => updateAccount(event, 'personal'));
    phoneForm.addEventListener('submit', event => updateAccount(event, 'phone'));
    emailForm.addEventListener('submit', event => updateAccount(event, 'email'));
    rolesForm.addEventListener('submit', event => updateAccount(event, 'role'));
    // Функция для удаления аккаунта
    async function deleteAccount(event) {
        // Предотвращаем стандартное действие формы
        event.preventDefault();
        try {
            // Логируем сообщение о удалении аккаунта
            console.log('delete account');
        }
        catch (error) {
            // Логируем ошибку в консоль
            console.log(error);
        }
    }
    // Добавляем обработчик события для удаления аккаунта
    deleteAccountForm.addEventListener('submit', deleteAccount);
});
//# sourceMappingURL=account.js.map