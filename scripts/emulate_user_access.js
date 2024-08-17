// Получаем элементы управления по их идентификаторам
const userEnable = document.getElementById("user-enable");
const userDisable = document.getElementById("user-disable");

// Главная функция для эмуляции состояния пользователя
export default function emulate() {
	// Получаем элемент кнопки "Назад" по его идентификатору
	const backButton = document.getElementById("btn-back");

	// Проверяем, есть ли токен в куках
	if (document.cookie.match("tokken")) {
		// Если токен существует, то активируем кнопки для включенного состояния пользователя
		userEnable.className = "btn-40 btn-blue";
		userDisable.classList = "btn-40 btn-blue-border";

		// Если есть кнопка "Назад", меняем её ссылку на страницу для авторизованных пользователей
		if (backButton) {
			url.pathname = LOGGED_PATH;
			backButton.href = url.toString();
		}
	} else {
		// Если токена нет, то активируем кнопки для выключенного состояния пользователя
		userDisable.className = "btn-40 btn-blue";
		userEnable.classList = "btn-40 btn-blue-border";

		// Если есть кнопка "Назад", меняем её ссылку на главную страницу
		if (backButton) {
			url.pathname = INDEX_PATH;
			backButton.href = url.toString();
		}
	}

	// Добавляем обработчики событий на кнопки для установки и удаления токена
	userEnable?.addEventListener("click", () => setTokken("tokken", "1", 1));
	userDisable?.addEventListener("click", () => revokeTokken());
}

// Функция для удаления токена
export function revokeTokken() {
	// Проверяем, есть ли токен в куках
	if (document.cookie.match("tokken")) {
		// Если токен существует, удаляем его путем установки даты истечения в прошлое
		document.cookie = "tokken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

		// Меняем стили кнопок на состояние "выключен"
		userDisable.className = "btn-40 btn-blue";
		userEnable.classList = "btn-40 btn-blue-border";

		// Если пользователь не на главной странице, перенаправляем его на главную
		if (window.location.pathname !== INDEX) {
			url.pathname = INDEX_PATH;
			window.location.href = url.toString();
			return;
		}
	}
}

// Функция для установки токена
export function setTokken(name, value, days) {
	console.log("set tokken", name, value, days);

	// Устанавливаем срок действия токена, добавляя количество дней к текущей дате
	const date = new Date();
	date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
	const expires = `expires=${date.toUTCString()}`;

	// Устанавливаем cookie с именем, значением и сроком действия, а также параметрами безопасности
	document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/;samesite=strict;secure`;

	// Меняем стили кнопок на состояние "включен"
	userEnable.className = "btn-40 btn-blue";
	userDisable.classList = "btn-40 btn-blue-border";

	// Если (незарегистрированный) пользователь находится на странице "MARKETPLACE",
	// то оставляем его на ней после подтверждения входа
	if (window.location.pathname.includes(MARKETPLACE)) {
		url.pathname = MARKETPLACE_PATH;
		window.location.href = url.toString();
		return;
	}

	// Если (незарегистрированный) пользователь находится на странице "INDEX",
	// то перенаправляем его на страницу "MARKETPLACE" (надо уточнить)
	if (window.location.pathname !== LOGGED) {
		url.pathname = LOGGED_PATH;
		// url.pathname = MARKETPLACE_PATH;
		window.location.href = url.toString();
	}
}
