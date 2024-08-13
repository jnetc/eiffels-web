document.addEventListener("DOMContentLoaded", () => {
	const cookieElement = document.querySelector(".cookie");
	const declineCookieBtn = document.getElementById("cookie-decline");
	const acceptCookieBtn = document.getElementById("cookie-accept");

	if (document.cookie) {
		// If the cookie exists, remove element from DOM
		cookieElement.remove();
	}

	function setCookie(name, value, days) {
		console.log("accept cookie", name, value, days);

		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		const expires = `expires=${date.toUTCString()}`;
		document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/;samesite=strict;secure`;
		cookieElement.remove();
	}

	acceptCookieBtn.addEventListener("click", () =>
		setCookie("accepted", "1", 1),
	);
	declineCookieBtn.addEventListener("click", () =>
		setCookie("declined", "1", 0.001),
	);
});
