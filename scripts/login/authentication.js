export default async function authentication(pathname) {
    // Импортируем функцию setTokken из другого модуля
    const { setTokken } = await import('../emulate_user_access.js');
    // Найти элемент для отображения сообщения об ошибке
    const { default: errorMessage } = await import('../components/errorMessage.js');
    // Получаем элементы формы, ввода цифр, кнопки отправки и сообщения об ошибке
    const authForm = document.querySelector('.auth__form');
    const digits = document.querySelectorAll('[inputmode="numeric"]');
    const submitButton = document.querySelector('.auth__btn');
    // Устанавливаем фокус на первое поле ввода цифры
    // Ожидание 300 миллисекунд (анимация всплытия 200 миллисекунд)
    const timeout = setTimeout(() => {
        digits[0].focus();
        clearTimeout(timeout);
    }, 300);
    // Для каждого поля ввода цифры добавляем обработчики событий
    digits.forEach((input, index) => {
        // Обработка события ввода
        input.addEventListener('input', () => {
            // Убираем сообщение об ошибке
            errorMessage(null);
            // Оставляем только последний введённый символ и убираем все нецифровые символы
            input.value = input.value.replace(/[^0-9]/g, '').slice(-1);
            // Если цифра введена, переводим фокус на следующее поле ввода, если оно существует
            if (input.value.length === 1 && index < digits.length - 1) {
                digits[index + 1].focus();
            }
        });
        // Запрещаем вставку недопустимых символов
        input.addEventListener('paste', (event) => {
            var _a;
            // Получаем данные из буфера обмена
            const paste = ((_a = event.clipboardData) === null || _a === void 0 ? void 0 : _a.getData('text')) || '';
            event.preventDefault();
            // Проверяем, что вставленное значение содержит ровно 6 цифр
            if (!/^[0-9]{6}$/.test(paste)) {
                errorMessage(authForm, 'Please enter exactly 6 digits. Only numerical values are allowed in this field. Ensure your entry is neither more nor less than 6 digits.'); // Показываем сообщение об ошибке
                return;
            }
            // Убираем сообщение об ошибке
            errorMessage(null);
            // Заполняем каждое поле ввода соответствующей цифрой из вставленного значения
            digits.forEach((input, index) => {
                input.value = paste[index];
            });
            // После вставки переводим фокус на кнопку отправки
            const breakPasteActivity = setTimeout(() => {
                submitButton.focus();
                clearTimeout(breakPasteActivity);
            }, 0);
        });
        // Запрещаем ввод недопустимых символов с клавиатуры
        input.addEventListener('keypress', event => {
            if (!/^[0-9]$/.test(event.key)) {
                event.preventDefault();
            }
        });
        // Предотвращаем перемещение каретки в конец поля при клике
        input.addEventListener('focus', () => {
            setTimeout(() => input.setSelectionRange(0, 1), 0); // Устанавливаем выделение на первый символ
        });
    });
    // Обработка отправки формы
    authForm.addEventListener('submit', event => {
        event.preventDefault(); // Предотвращаем стандартное поведение формы
        const title = document.querySelector('#auth-dialog__title-fill');
        title.classList.add('status-changed');
        // Эмулируем задержку на сервере
        // И показываем сообщение об ошибке если не удалось авторизоваться
        const serverTimeoutEmulator = setTimeout(() => {
            title.classList.remove('status-changed');
            // errorMessage.classList.add("show");
            if (pathname.includes(MARKETPLACE)) {
                // Устанавливаем cookie, чтобы указать, что пользователь принял условия использования
                setTokken('tokken', '1', 1);
            }
            clearTimeout(serverTimeoutEmulator);
        }, 2000);
        // // Проверяем, авторизован ли пользователь
        // if (pathname.includes(LOGGED)) {
        // 	setTokken("tokken", "1", 1);
        // 	url.pathname = LOGGED_PATH; // Перенаправляем на страницу после авторизации
        // 	window.location.href = url.toString();
        // 	return;
        // }
    });
}
//# sourceMappingURL=authentication.js.map