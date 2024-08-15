document.addEventListener("DOMContentLoaded", async () => {
	// Динамический импорт утилит для работы с диалоговыми окнами и функций для отзыва токена
	const { closeDialog, openDialog } = await import("../dialogs/dialogUtils.js");
	const { revokeTokken } = await import("../emulate_user_access.js");

	// Элементы для взаимодействия с формой удаления аккаунта
	const openDialogDA = document.getElementById("open__da-dialog"); // Кнопка открытия диалогового окна удаления аккаунта
	const dialogDA = document.getElementById("da-dialog"); // Само диалоговое окно удаления аккаунта
	const formDA = document.getElementById("da__form"); // Форма внутри диалогового окна

	// Обработчик события для открытия диалогового окна при клике на кнопку
	openDialogDA.addEventListener("click", () => {
		// Вызов функции открытия диалога
		openDialog(dialogDA);
	});

	// Функция для закрытия диалогового окна при отмене или закрытии
	function cancelOrCloseDialogDA() {
		// Находим все элементы с классом "form__reason-delete"
		const inputs = [...dialogDA.querySelectorAll(".form__reason-delete")];

		// Находим элемент для отображения ошибки
		const errorMessage = dialogDA.querySelector(".error-message");

		// Снимаем отметку со всех чекбоксов
		for (const el of inputs) {
			el.querySelector("input").checked = false;
		}

		// Скрываем сообщение об ошибке
		errorMessage.classList.remove("show");

		// Закрываем диалоговое окно
		closeDialog(dialogDA);
	}

	// Добавляем обработчики событий для кнопок закрытия и отмены в диалоговом окне
	dialogDA
		.querySelector("#da-dialog__close-btn")
		.addEventListener("click", cancelOrCloseDialogDA);
	dialogDA
		.querySelector("#da-dialog__cancel")
		.addEventListener("click", cancelOrCloseDialogDA);

	// Функция для обработки отправки формы удаления аккаунта
	function deleteThisAccount(event) {
		// Отменяем стандартное поведение формы
		event.preventDefault();

		// Находим все элементы с классом "form__reason-delete"
		const inputs = [...dialogDA.querySelectorAll(".form__reason-delete")];

		// Находим элемент для отображения ошибки
		const errorMessage = dialogDA.querySelector(".error-message");

		// Скрываем сообщение об ошибке
		errorMessage.classList.remove("show");

		// Поиск выбранного чекбокса с причиной удаления аккаунта
		const selectedElement = inputs.find((el) => {
			if (el.querySelector("input").checked) {
				return el;
			}
		});

		// Если причина не выбрана, показываем сообщение об ошибке
		if (!selectedElement) {
			errorMessage.classList.add("show");
			return;
		}

		// Получаем текст выбранной причины
		const reason = selectedElement.querySelector("label").textContent;

		// Логируем выбранную причину (можно удалить этот лог после проверки)
		console.log(reason);

		// Перенаправляем пользователя на главную страницу после удаления аккаунта
		url.pathname = INDEX_PATH;
		window.location.href = url.toString();

		// Отзываем токен пользователя (реализация функции в другом модуле)
		revokeTokken();
	}

	// Добавляем обработчик события для отправки формы удаления аккаунта
	formDA.addEventListener("submit", deleteThisAccount);
});
