"use strict";
document.addEventListener('DOMContentLoaded', async () => {
    var _a;
    // Динамический импорт утилит для работы с диалоговыми окнами и функций для отзыва токена
    const { closeDialog, openDialog } = await import('./dialogUtils.js');
    // Выбираем все элементы с классом ".mp-card__description"
    const workers = document.querySelectorAll('.job');
    // const textBox = document.querySelectorAll('.mp-card__description') as NodeListOf<HTMLElement>;
    // Находим элемент, который будет использоваться в качестве диалога
    const dialogMPI = document.getElementById('mp-item-dialog');
    // ------------------------------
    // Функция для обрезки текста в карточке и отображения кнопки "Читать далее", если текст превышает высоту
    function getLineCount(element) {
        // Находим элемент с классом ".mp-card__text" внутри текущего элемента
        const cardText = element.querySelector('.mp-card__text');
        // Получаем высоту элемента с текстом
        const cardTextHeight = Math.round(cardText.getBoundingClientRect().height);
        // Получаем полную высоту текста, включая скрытые части
        const cardTextscrollHeight = cardText.scrollHeight;
        // Создаем кнопку "Читать далее"
        const button = document.createElement('button');
        button.className = 'btn-blue-border card__open-btn mp-item-dialog';
        button.setAttribute('aria-label', 'Read all text');
        button.setAttribute('title', 'Read all text');
        button.textContent = 'Open';
        // Добавляем обработчик клика для открытия диалога
        button.addEventListener('click', openDialogAndCloneCard);
        // Если высота текста превышает высоту видимой части, добавляем кнопку
        if (cardTextscrollHeight > cardTextHeight) {
            cardText.classList.add('mp-card__text-clamp'); // Добавляем класс для обрезки текста
            element.appendChild(button); // Добавляем кнопку к элементу
        }
    }
    // Проходим по всем найденным элементам и применяем функцию для обработки текста
    for (const worker of workers) {
        const cardText = worker.querySelectorAll('.mp-card__description');
        for (const element of cardText) {
            getLineCount(element);
        }
    }
    // ------------------------------
    // Функция для открытия диалога и отображения полного текста
    function openDialogAndCloneCard(event) {
        var _a, _b, _c;
        // Клонируем родительский элемент article для отображения в диалоге
        const cardElement = event.target.closest('article');
        const copyTarget = cardElement.cloneNode(true);
        // Заменяем класс "article__text" на "mp-card__full-text" в клонированном элементе
        (_a = copyTarget.querySelector('.mp-card__text')) === null || _a === void 0 ? void 0 : _a.classList.replace('mp-card__text', 'mp-card__full-text');
        // Удаляем кнопку "Читать далее" из клонированного элемента
        (_b = copyTarget.querySelector('.mp-item-dialog')) === null || _b === void 0 ? void 0 : _b.remove();
        // Вставляем клонированный элемент в начало области прокрутки в диалоге
        (_c = dialogMPI.querySelector('.dialog__scroll-area')) === null || _c === void 0 ? void 0 : _c.insertAdjacentElement('afterbegin', copyTarget);
        // Вызов функции открытия диалога
        openDialog(dialogMPI);
    }
    // Функция для закрытия диалога и восстановления прокрутки страницы
    function cancelOrCloseDialogMPI(event) {
        var _a, _b, _c;
        // Удаляем клонированный элемент article из диалога
        (_c = (_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.closest('#mp-item-dialog')) === null || _b === void 0 ? void 0 : _b.querySelector('article')) === null || _c === void 0 ? void 0 : _c.remove();
        // Закрываем диалоговое окно
        closeDialog(dialogMPI);
    }
    // Добавляем обработчик клика на кнопку закрытия диалога
    (_a = dialogMPI.querySelector('[data-button="close"]')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', cancelOrCloseDialogMPI);
});
//# sourceMappingURL=mpJobItem.js.map