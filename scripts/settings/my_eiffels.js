document.addEventListener("DOMContentLoaded", () => {
	// Найдите элемент с классом 'error-message'
	const errorMessage = document.querySelector(".error-message");

	// Выберите все элементы с классом 'settings__connection'
	const connections = document.querySelectorAll(".settings__connection");

	// Функция, вызываемая при клике на элемент подключения
	function connectCloud(event) {
		// Получаем элемент подключения, на который кликнули
		const connection = event.currentTarget;

		// Получаем первый дочерний элемент (предполагается, что это чекбокс)
		const checkbox = connection.firstElementChild;

		// Находим элемент с классом 'connection__status' внутри подключения
		const status = connection.querySelector(".connection__status");

		// Переключаем состояние подключения на основе состояния чекбокса
		if (checkbox.checked) {
			// Если чекбокс выбран, вызываем функцию для подключения
			emulateConnectOnServer(status, connection);
		} else {
			// Если чекбокс не выбран, вызываем функцию для отключения
			emulateDisconnectOnServer(status, connection);
		}
	}

	// Асинхронная функция для имитации подключения к серверу
	async function emulateConnectOnServer(status, connection) {
		// Если отображается сообщение об ошибке, скрываем его
		if (errorMessage.classList.contains("show")) {
			errorMessage.classList.remove("show");
		}
		try {
			// Изменяем текст состояния на "Connecting" и добавляем класс 'disabled'
			status.firstElementChild.textContent = "Connecting";
			connection.classList.add("disabled");
			console.log("Connecting...");

			// Имитация задержки при подключении к серверу
			const timeout = setTimeout(() => {
				// Убираем класс 'disabled' и меняем текст состояния на "Connected"
				connection.classList.remove("disabled");
				status.firstElementChild.textContent = "Connected";

				console.log("Connected");
				clearTimeout(timeout); // Очищаем таймер
			}, 3000);
		} catch (error) {
			// В случае ошибки показываем сообщение об ошибке
			console.log(error);
			errorMessage.classList.add("show");
		}
	}

	// Асинхронная функция для имитации отключения от сервера
	async function emulateDisconnectOnServer(status, connection) {
		// Если отображается сообщение об ошибке, скрываем его
		if (errorMessage.classList.contains("show")) {
			errorMessage.classList.remove("show");
		}

		try {
			// Изменяем текст состояния на "Disconnecting" и добавляем класс 'disabled'
			status.firstElementChild.textContent = "Disconnecting";
			connection.classList.add("disabled");
			console.log("Disconnecting...");

			// Имитация задержки при отключении от сервера
			const timeout = setTimeout(() => {
				// Убираем класс 'disabled' и меняем текст состояния на "Disconnected"
				connection.classList.remove("disabled");
				status.firstElementChild.textContent = "Disconnected";

				console.log("Disconnected");
				clearTimeout(timeout); // Очищаем таймер
			}, 3000);
		} catch (error) {
			// В случае ошибки показываем сообщение об ошибке
			console.log(error);
			errorMessage.classList.add("show");
		}
	}

	// Добавляем обработчик события 'click' ко всем элементам подключения
	for (const connection of connections) {
		connection.addEventListener("click", connectCloud);
	}
});
