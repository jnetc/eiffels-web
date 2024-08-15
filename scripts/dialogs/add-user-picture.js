document.addEventListener("DOMContentLoaded", async () => {
	// Динамический импорт модулей, чтобы использовать функции для открытия и закрытия диалогов
	const { openDialog, closeDialog } = await import("../dialogs/dialogUtils.js");

	// Получение элементов интерфейса по их ID
	const openDialogAUP = document.getElementById("open__aup-dialog"); // Кнопка для открытия диалога
	const dialogAUP = document.getElementById("aup-dialog"); // Сам диалог
	const formAUP = document.getElementById("aup__form"); // Форма внутри диалога

	// Обработчик для открытия диалога при нажатии на кнопку
	openDialogAUP.addEventListener("click", () => {
		// Копируем изображение профиля из основного UI и отображаем его в диалоге
		document.getElementById("aup__photo-display").src =
			document.getElementById("profile__picture").src;

		// Открываем диалог
		openDialog(dialogAUP);
	});

	// Функция для закрытия диалога при нажатии на кнопку "Cancel" или "Close"
	function cancelOrCloseDialogAUP() {
		// Получаем элементы для сброса их состояния
		const file = dialogAUP.querySelector("#aup__picture-file"); // Инпут для выбора файла
		const preview = dialogAUP.querySelector("#aup__photo-display"); // Превью изображения
		const errorMessage = dialogAUP.querySelector(".error-message"); // Сообщение об ошибке

		// Очищаем выбранный файл и изображение
		file.value = "";
		preview.src = "";

		// Скрываем сообщение об ошибке
		errorMessage.classList.remove("show");

		// Закрываем диалог
		closeDialog(dialogAUP);
	}

	// Асинхронная функция для обработки изменений файла изображения
	async function getImageData() {
		// Добавляем обработчик события "change" на документ
		document.addEventListener("change", (event) => {
			// Получаем выбранный файл из инпута
			const file = event.target.files[0];

			// Если файл выбран
			if (file) {
				const reader = new FileReader(); // Создаем объект FileReader для чтения файла

				// Когда файл прочитан, устанавливаем его как источник для превью изображения
				reader.onload = (e) => {
					document.getElementById("aup__photo-display").src = e.target.result;
				};
				// Читаем выбранный файл как Data URL (base64)
				reader.readAsDataURL(file);
			}
		});
	}

	// Добавляем обработчик события для выбора файла и предварительного просмотра изображения
	formAUP
		.querySelector("#aup__picture-file")
		.addEventListener("click", getImageData);

	// Обработчик события для отправки формы
	formAUP.addEventListener("submit", (event) => {
		event.preventDefault(); // Отменяем стандартное поведение формы
		const button = event.target.querySelector("button"); // Кнопка отправки
		const file = event.target.querySelector("#aup__picture-file"); // Инпут для файла

		// Блокируем инпут и кнопку, и изменяем текст на кнопке для индикации загрузки
		file.disabled = true;
		button.disabled = true;
		button.querySelector(".btn-text").textContent = "Uploading Image";

		// Эмуляция загрузки изображения на сервер с задержкой в 3 секунды
		const timeout = setTimeout(() => {
			// Получаем путь к изображению из предварительного просмотра
			const imageUrl = document.getElementById("aup__photo-display").src;

			// Если изображение успешно загружено, обновляем изображение профиля
			if (imageUrl) {
				document.getElementById("profile__picture").src = imageUrl;
			}

			// Закрываем диалог и сбрасываем форму
			cancelOrCloseDialogAUP();

			// Восстанавливаем исходное состояние кнопки и инпута
			button.querySelector(".btn-text").textContent = "Upload Image";
			file.disabled = false;
			button.disabled = false;

			clearTimeout(timeout); // Очищаем таймаут после завершения
		}, 3000);
	});
});
