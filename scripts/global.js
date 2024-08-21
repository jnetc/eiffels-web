"use strict";
// Определяем начальные значения для путей
const INDEX = '/index';
const LOGGED = '/logged';
const MARKETPLACE = '/marketplace';
// Инициализируем переменные путей с начальными значениями
// http://127.0.0.1:5500/
let INDEX_PATH = INDEX;
let LOGGED_PATH = LOGGED;
let MARKETPLACE_PATH = MARKETPLACE;
// Создаем объект URL из текущего URL-адреса окна
const url = new URL(window.location.href);
// Проверяем, использует ли текущий URL протокол HTTPS
// https://jnetc.github.io/eiffels-web
if (url.protocol === 'https:') {
    // Если протокол HTTPS, обновляем пути к ресурсам
    INDEX_PATH = '/eiffels-web/index';
    LOGGED_PATH = '/eiffels-web/logged';
    MARKETPLACE_PATH = '/eiffels-web/marketplace';
}
// Добавляем обработчик события, который сработает после полной загрузки документа
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Асинхронно импортируем модуль emulate_user_access.js
        const { default: emulate } = await import('./emulate_user_access.js');
        // Вызываем функцию emulate из импортированного модуля
        emulate();
    }
    catch (error) {
        // Ловим и выводим ошибки, если импорт модуля или вызов функции завершился неудачно
        console.log(error);
    }
});
//# sourceMappingURL=global.js.map