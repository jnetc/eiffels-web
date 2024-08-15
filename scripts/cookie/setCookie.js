// Экспортируемая функция для установки cookies
export default function setCookie(name, value, days) {
	// Находим элемент на странице с классом "cookie", который, вероятно, является баннером cookies
	const cookieElement = document.querySelector(".cookie");

	// Логируем параметры вызова функции в консоль для отладки
	console.log("accept cookie", name, value, days);

	// Создаем новый объект даты
	const date = new Date();

	// Устанавливаем срок действия cookie, добавляя указанное количество дней к текущей дате
	date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

	// Формируем строку для параметра 'expires', используя метод toUTCString()
	const expires = `expires=${date.toUTCString()}`;

	// Устанавливаем cookie с указанным именем, значением, сроком действия, путем и параметрами безопасности
	document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/;samesite=strict;secure`;

	// Удаляем элемент с классом "cookie" со страницы, вероятно, после принятия cookies пользователем
	cookieElement.remove();
}

// 1) Функция setCookie: Экспортируемая функция устанавливает cookie в браузере.
// 2) cookieElement: Используется для нахождения элемента с классом .cookie, который, возможно, представляет баннер с информацией о cookies.
// 3) console.log("accept cookie", name, value, days): Логирование параметров функции, чтобы видеть, что именно передается при установке cookie.
// 4) const date = new Date();: Создание нового объекта Date, который будет использоваться для установки срока действия cookie.
// 5) date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);: Устанавливает дату истечения cookie, добавляя указанное количество дней к текущему времени.
// 6) const expires = expires=${date.toUTCString()};: Формирование строки expires, которая задает срок действия cookie в формате UTC.
// 7) document.cookie = ${name}=${encodeURIComponent(value)};${expires};path=/;samesite=strict;secure;: Устанавливает cookie с:

//     Именем (name),
//     Значением (value, кодированным для использования в URL),
//     Сроком действия (expires),
//     Доступностью на всем сайте (path=/),
//     Защищенностью (secure — только через HTTPS),
//     Политикой SameSite (samesite=strict — cookie отправляется только с запросами из того же сайта).

//8) cookieElement.remove();: Удаляет элемент .cookie из DOM, что, вероятно, скрывает баннер cookies после того, как пользователь согласился на их использование.
