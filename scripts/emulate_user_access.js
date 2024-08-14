export default function emulate() {
	const userEnable = document.getElementById("user-enable");
	const userDisable = document.getElementById("user-disable");
	const UNLOGGED = "index.html";
	const LOGGED = "logged.html";
	const MARKETPLACE = "marketplace.html";

	if (document.cookie.match("tokken")) {
		userEnable.className = "btn-40 btn-blue";
		userDisable.classList = "btn-40 btn-blue-border";
		// if (window.location.pathname === LOGGED) return;
	} else {
		userDisable.className = "btn-40 btn-blue";
		userEnable.classList = "btn-40 btn-blue-border";
		// if (window.location.pathname === UNLOGGED) return;
	}

	function setCookie(name, value, days) {
		console.log("accept cookie", name, value, days);

		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		const expires = `expires=${date.toUTCString()}`;
		document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/;samesite=strict;secure`;
		userEnable.className = "btn-40 btn-blue";
		userDisable.classList = "btn-40 btn-blue-border";

		if (window.location.pathname === MARKETPLACE) {
			window.location.href = MARKETPLACE;
			return;
		}
		if (window.location.pathname !== LOGGED) {
			window.location.href = LOGGED;
		}
	}

	userEnable.addEventListener("click", () => setCookie("tokken", "1", 1));

	userDisable.addEventListener("click", () => {
		if (document.cookie.match("tokken")) {
			document.cookie =
				"tokken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
			userDisable.className = "btn-40 btn-blue";
			userEnable.classList = "btn-40 btn-blue-border";
			if (window.location.pathname !== UNLOGGED) {
				window.location.href = UNLOGGED;
				return;
			}
		}
	});
}
