"use strict";
document.addEventListener('DOMContentLoaded', async () => {
    // Динамически импортируем функцию revokeTokken из модуля emulate_user_access.js
    const { revokeTokken } = await import('../emulate_user_access.js');
    // Получаем элемент кнопки выхода из настроек по его ID
    const signOut = document.getElementById('settings__sign-out');
    // Получаем все элементы списка настроек по классу
    const listItems = document.querySelectorAll('.settings__name');
    // Функция для обработки клика на элемент списка настроек
    function collapseList(event) {
        // Получаем элемент, на который был произведен клик
        const item = event.currentTarget;
        // Если кликнутый элемент уже открыт, то просто закрываем его
        if (item.classList.contains('open-settings')) {
            item.classList.remove('open-settings');
            return;
        }
        // Если элемент не открыт, закрываем все открытые элементы в списке
        for (const el of listItems) {
            if (el.classList.contains('open-settings')) {
                el.classList.remove('open-settings');
            }
        }
        // Открываем кликнутый элемент
        item.classList.add('open-settings');
    }
    // Добавляем обработчик клика для каждого элемента списка настроек
    for (const item of listItems) {
        item.addEventListener('click', collapseList);
    }
    // Добавляем обработчик отправки формы для кнопки выхода из настроек
    signOut.addEventListener('submit', event => {
        // Предотвращаем стандартное поведение формы (перезагрузку страницы)
        event.preventDefault();
        // Перенаправляем пользователя на главную страницу
        url.pathname = INDEX_PATH;
        window.location.href = url.toString();
        // Вызываем функцию revokeTokken для завершения сеанса
        revokeTokken();
    });
});
//# sourceMappingURL=settings.js.map