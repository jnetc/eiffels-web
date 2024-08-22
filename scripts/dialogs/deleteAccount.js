"use strict";
document.addEventListener('DOMContentLoaded', async () => {
    // Динамический импорт утилит для работы с диалоговыми окнами и функций для отзыва токена
    const { closeDialog, openDialog } = await import('../dialogs/dialogUtils.js');
    const { revokeTokken } = await import('../emulate_user_access.js');
    // Элементы для взаимодействия с формой удаления аккаунта
    const openDialogDA = document.getElementById('open__da-dialog');
    const dialogDA = document.getElementById('da-dialog');
    const formDA = document.getElementById('da__form');
    // Находим все элементы с классом "form__reason-delete"
    const inputs = [...dialogDA.querySelectorAll('.form__reason-delete')];
    // Сообщение об ошибке
    const { default: errorMessage } = await import('../components/errorMessage.js');
    // Обработчик события для открытия диалогового окна при клике на кнопку
    openDialogDA.addEventListener('click', () => {
        // Вызов функции открытия диалога
        openDialog(dialogDA);
    });
    // Функция для закрытия диалогового окна при отмене или закрытии
    function cancelOrCloseDialogDA() {
        // Находим элемент для отображения ошибки
        // Снимаем отметку со всех чекбоксов
        for (const el of inputs) {
            const radioBtn = el.querySelector('input');
            radioBtn.checked = false;
        }
        // Скрываем сообщение об ошибке
        errorMessage(null);
        // Закрываем диалоговое окно
        closeDialog(dialogDA);
    }
    // Добавляем обработчики событий для кнопок закрытия и отмены в диалоговом окне
    dialogDA.querySelector('#da-dialog__cancel').addEventListener('click', cancelOrCloseDialogDA);
    // Функция для обработки отправки формы удаления аккаунта
    function deleteThisAccount(event) {
        var _a;
        // Отменяем стандартное поведение формы
        event.preventDefault();
        // Поиск выбранного чекбокса с причиной удаления аккаунта
        const selectedElement = inputs.find(el => {
            const radioBtn = el.querySelector('input');
            if (radioBtn.checked)
                return el;
        });
        // Скрываем сообщение об ошибке
        if (selectedElement) {
            errorMessage(null);
        }
        // Если причина не выбрана, показываем сообщение об ошибке
        if (!selectedElement) {
            errorMessage(formDA, 'Please select at least one option. This field is required and must be completed to proceed.');
            return;
        }
        // Получаем текст выбранной причины
        const reason = ((_a = selectedElement.querySelector('label')) === null || _a === void 0 ? void 0 : _a.textContent) || '';
        // Логируем выбранную причину (можно удалить этот лог после проверки)
        console.log(reason);
        // Перенаправляем пользователя на главную страницу после удаления аккаунта
        url.pathname = INDEX_PATH;
        window.location.href = url.toString();
        // Отзываем токен пользователя (реализация функции в другом модуле)
        revokeTokken();
    }
    // Добавляем обработчик события для отправки формы удаления аккаунта
    formDA.addEventListener('submit', deleteThisAccount);
    // Добавляем обработчики событий для изменения состояния чекбоксов
    for (const input of inputs) {
        input.addEventListener('change', event => {
            const radioBtn = event.target;
            // Скрываем сообщение об ошибке при изменении состояния чекбокса
            if (radioBtn.checked) {
                errorMessage(null);
            }
        });
    }
});
//# sourceMappingURL=deleteAccount.js.map