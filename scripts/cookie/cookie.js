document.addEventListener("DOMContentLoaded", async () => {
	const { setCookie } = await import("./setCookie.js");
	const cookieElement = document.querySelector(".cookie");
	const declineCookieBtn = document.getElementById("cookie-decline");
	const acceptCookieBtn = document.getElementById("cookie-accept");

	if (document.cookie) {
		// If the cookie exists, remove element from DOM
		cookieElement.remove();
	}

	acceptCookieBtn?.addEventListener("click", () =>
		setCookie("accepted", "1", 1),
	);
	declineCookieBtn?.addEventListener("click", () =>
		setCookie("declined", "1", 0.001),
	);
});
