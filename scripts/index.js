"use strict";
document.addEventListener('DOMContentLoaded', async () => {
    // Кнопка мобильного меню и контейнер меню
    const mobMenuButton = document.getElementById('header__mob-menu-btn');
    const mobNavigation = document.querySelector('.header__nav');
    // Элементы для выбора стандартного плана по количеству работников
    const standardPlan = document.querySelector('.plan-standard');
    const workerAmounts = document.getElementById('plan__select-workers');
    // Выбор всех элементов с классом 'faq__question'
    const faqItems = document.querySelectorAll('.faq__question');
    // ------------------------------
    // МОБИЛЬНОЕ МЕНЮ
    // Обработка клика по кнопке мобильного меню
    mobMenuButton.addEventListener('click', () => {
        mobNavigation.classList.toggle('open');
        mobNavigation.classList.contains('open')
            ? addEventsToLinks(true) // Если меню открыто, добавляем события клика
            : addEventsToLinks(false); // Если меню закрыто, убираем события клика
    });
    // Функция для добавления или удаления событий клика на ссылки
    function addEventsToLinks(boolean) {
        for (const element of mobNavigation.querySelectorAll('a')) {
            if (boolean) {
                // Добавляем обработчик клика для закрытия меню
                element.addEventListener('click', () => {
                    mobNavigation.classList.remove('open');
                });
            }
            else {
                // Удаляем обработчик клика
                element.removeEventListener('click', () => { });
            }
        }
    }
    // ------------------------------
    // ВЫПАДАЮЩЕЕ МЕНЮ ВЫБОРА КОДА СТРАНЫ РАЗДЕЛЕ HERO
    const { default: loadPhoneCodes } = await import('./login/phoneCodes.js');
    loadPhoneCodes();
    // ------------------------------
    // ПОЛЕ ДЛЯ ВВОДА НОМЕРА ТЕЛЕФОНА В РАЗДЕЛЕ HERO
    const { default: handlePhoneNumber } = await import('./login/login.js');
    handlePhoneNumber(INDEX);
    // ------------------------------
    // ВЫБОР СТАНДАРТНОГО ПЛАНА ПО КОЛИЧЕСТВУ РАБОТНИКОВ
    workerAmounts.addEventListener('change', event => {
        const workerAmount = event.target.value;
        const price = standardPlan.querySelector('.plan__price').firstElementChild;
        // Обновляем цену в зависимости от выбранного количества работников
        switch (workerAmount) {
            case '11-20':
                price.textContent = '€350';
                break;
            case '21-30':
                price.textContent = '€750';
                break;
            case '31-40':
                price.textContent = '€1100';
                break;
            case '41-50':
                price.textContent = '€1700';
                break;
            default:
                price.textContent = '€100';
                break;
        }
    });
    // ------------------------------
    // ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ / FAQ
    function collapseList(event) {
        // Получаем кликнутый элемент
        const item = event.target;
        // Закрываем элемент, если он открыт
        if (item.classList.contains('open-answer')) {
            item.classList.remove('open-answer');
            return;
        }
        // Закрываем все элементы, кроме кликнутого
        for (const el of faqItems) {
            if (el.classList.contains('open-answer')) {
                el.classList.remove('open-answer');
            }
        }
        // Открываем кликнутый элемент
        item.classList.add('open-answer');
    }
    // Добавляем обработчик клика к каждому элементу FAQ
    for (const item of faqItems) {
        item.addEventListener('click', collapseList);
    }
});
//# sourceMappingURL=index.js.map