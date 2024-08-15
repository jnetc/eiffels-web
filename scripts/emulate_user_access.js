// const INDEX = "/index";
// const LOGGED = "/logged";
// const MARKETPLACE = "/marketplace";
// const url = new URL(window.location.href);

const userEnable = document.getElementById("user-enable");
const userDisable = document.getElementById("user-disable");

export default function emulate() {
	const backButton = document.getElementById("btn-back");

	if (document.cookie.match("tokken")) {
		userEnable.className = "btn-40 btn-blue";
		userDisable.classList = "btn-40 btn-blue-border";
		if (backButton) {
			url.pathname = LOGGED;
			backButton.href = url.toString();
			// backButton.href = "/logged";
		}
	} else {
		userDisable.className = "btn-40 btn-blue";
		userEnable.classList = "btn-40 btn-blue-border";
		if (backButton) {
			url.pathname = INDEX;
			backButton.href = url.toString();
		}
	}

	userEnable?.addEventListener("click", () => setTokken("tokken", "1", 1));
	userDisable?.addEventListener("click", () => revokeTokken());
}

export function revokeTokken() {
	if (document.cookie.match("tokken")) {
		document.cookie = "tokken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		userDisable.className = "btn-40 btn-blue";
		userEnable.classList = "btn-40 btn-blue-border";

		if (window.location.pathname !== INDEX) {
			url.pathname = INDEX;
			window.location.href = url.toString();
			return;
		}
	}
}

export function setTokken(name, value, days) {
	console.log("set tokken", name, value, days);

	const date = new Date();
	date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
	const expires = `expires=${date.toUTCString()}`;
	document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/;samesite=strict;secure`;

	userEnable.className = "btn-40 btn-blue";
	userDisable.classList = "btn-40 btn-blue-border";

	if (window.location.pathname.includes(MARKETPLACE)) {
		url.pathname = MARKETPLACE;
		window.location.href = url.toString();
		return;
	}
	if (window.location.pathname !== LOGGED) {
		url.pathname = LOGGED;
		window.location.href = url.toString();
	}
}
