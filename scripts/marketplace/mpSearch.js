"use strict";
document.addEventListener('DOMContentLoaded', () => {
    // Получаем элемент формы поиска по его идентификатору
    const searchForm = document.getElementById('search__form');
    const searchInput = document.getElementById('search__input');
    const searchSubmit = document.getElementById('search__submit');
    // Переменная для хранения значения поиска
    let searchValue = '';
    // Обработчик ввода в поле поиска
    searchInput.addEventListener('input', event => {
        // Если поле ввода не пустое, показываем кнопку отправки
        if (event.target.value.length > 0) {
            searchSubmit.classList.add('show'); // Добавляем класс 'show', чтобы показать кнопку
        }
        else {
            searchSubmit.classList.remove('show'); // Убираем класс 'show', чтобы скрыть кнопку
        }
        searchValue = event.target.value; // Обновляем значение поиска
    });
    // Обработчик отправки формы
    searchForm.addEventListener('submit', event => {
        event.preventDefault(); // Предотвращаем отправку формы по умолчанию
        console.log('send request', searchValue); // Логируем значение поиска (замените на реальную логику отправки запроса)
        searchInput.value = ''; // Очищаем поле ввода после отправки формы
        searchSubmit.classList.remove('show'); // Скрываем кнопку отправки после отправки формы
    });
    // Функция дебаунсинга (раскомментируйте и используйте, если нужно уменьшить частоту вызовов функции)
    // function debounce(func, wait) {
    //   let timeout;
    //   return function(...args) {
    //     clearTimeout(timeout); // Очистка таймаута, чтобы не вызывать функцию слишком часто
    //     timeout = setTimeout(() => func.apply(this, args), wait); // Установка нового таймаута
    //   };
    // }
    // Обработчик события для поля ввода с использованием дебаунсинга
    // const handleInput = (event) => {
    //   if (event.target.value.length > 0) {
    //     searchSubmit.classList.add('show'); // Показываем кнопку, если есть текст в поле ввода
    //   } else {
    //     searchSubmit.classList.remove('show'); // Скрываем кнопку, если поле ввода пустое
    //   }
    //   searchValue = event.target.value; // Обновляем значение поиска
    //   console.log('searchValue', searchValue); // Логируем текущее значение поиска
    // };
    // Обработчик дебаунсинга с интервалом 5 секунд
    // const debouncedHandleInput = debounce(handleInput, 5000); // Используем дебаунсинг с задержкой 5000 мс
    // searchInput.addEventListener('input', debouncedHandleInput); // Добавляем обработчик ввода с дебаунсингом
});
//# sourceMappingURL=mpSearch.js.map