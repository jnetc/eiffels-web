export default function setCookie(name, value, days) {
	const cookieElement = document.querySelector(".cookie");
	console.log("accept cookie", name, value, days);

	const date = new Date();
	date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
	const expires = `expires=${date.toUTCString()}`;
	document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/;samesite=strict;secure`;
	cookieElement.remove();
}
