export default function handlePhoneNumber(pathname) {
	// Найти форму для логина на странице
	const loginForm = document.querySelector(".login__form");

	// Найти поле ввода номера телефона
	const phoneNumberInput = document.getElementById("login__phone-number");

	// Найти элемент для отображения сообщения об ошибке
	const errorMessage = document.querySelector(".error-message");

	// Переменная для хранения введенного номера телефона
	let phoneNumber = "";

	// Проверка, существует ли форма для логина
	if (loginForm) {
		// Добавляем обработчик события отправки формы
		loginForm.addEventListener("submit", async (event) => {
			// Отменить стандартное действие браузера при отправке формы
			event.preventDefault();

			// Динамический импорт модулей для ленивой загрузки
			const { default: authentication } = await import("../login/auth.js");
			const { openDialog } = await import("../dialogs/dialogUtils.js");

			console.log("phone number", phoneNumber);

			// Проверка, если pathname содержит MARKERPLACE
			if (pathname.includes(MARKETPLACE)) {
				console.log("marketplace", phoneNumber);

				// Открыть диалоговое окно для аутентификации на маркетплейсе
				openDialog(document.getElementById("mp-auth-dialog"));

				// Вызов функции аутентификации для маркетплейса
				authentication(MARKETPLACE);
				return;
			}

			// Проверка, если pathname содержит INDEX
			if (pathname.includes(INDEX)) {
				console.log("index", phoneNumber);

				// Открыть диалоговое окно для аутентификации на главной странице
				openDialog(document.getElementById("hs-auth-dialog"));

				// Вызов функции аутентификации для главной страницы
				authentication(LOGGED);
				return;
			}
		});
	}

	// Проверка, существует ли поле ввода номера телефона
	if (phoneNumberInput) {
		// Немедленно установить фокус на поле ввода номера телефона
		phoneNumberInput.focus();

		// Добавляем обработчик события ввода текста
		phoneNumberInput.addEventListener("input", (event) => {
			// Если поле ввода пустое
			if (event.target.value === "") {
				// Убрать сообщение об ошибке
				errorMessage.classList.remove("show");
				return;
			}

			// Если введенное значение не является числом
			if (!/^[+][0-9]{0,}$/.test(event.target.value)) {
				// Показать сообщение об ошибке
				errorMessage.classList.add("show");
				return;
			}

			// Убрать сообщение об ошибке, если введенное значение корректно
			errorMessage.classList.remove("show");

			// Обновить переменную с номером телефона
			phoneNumber = event.target.value;
		});
	}
}
