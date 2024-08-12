document.addEventListener("DOMContentLoaded", () => {
	// Cookie buttons
	const cookieElement = document.querySelector(".landing__cookie");
	const declineCookieBtn = document.getElementById("cookie-decline");
	const acceptCookieBtn = document.getElementById("cookie-accept");

	// Elemets for handling authentication with phone number
	const heroAuthForm = document.querySelector(".unlogged__form");
	const phoneNumberInput = document.getElementById("unlogged__phone-number");
	const errorMessage = document.querySelector(".error-message");
	let phoneNumber = "";

	// Elements for selecting standard plan by selecting worker amounts
	const standardPlan = document.querySelector(".plan-standard");
	const workerAmounts = document.getElementById("plan__select-workers");

	// Select all elements with the class 'faq__question'
	const faqItems = document.querySelectorAll(".faq__question");

	// ------------------------------
	// COOKIE BUTTONS

	// If the cookie exists, remove element from DOM
	if (document.cookie) {
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

	// ------------------------------
	// AUTH FORM FOR PHONE NUMBER IN HERO SECTION
	if (heroAuthForm) {
		heroAuthForm.addEventListener("submit", (event) => {
			event.preventDefault();

			console.log("phone number", phoneNumber);
			window.location.href = "auth.html";
		});
	}

	if (phoneNumberInput) {
		// Immediately focus on phone number input
		phoneNumberInput.focus();

		phoneNumberInput.addEventListener("input", (event) => {
			// If input is empty
			if (event.target.value === "") {
				errorMessage.classList.remove("show");
				return;
			}

			// If intered value is not number
			if (!/^[+][0-9]{0,}$/.test(event.target.value)) {
				errorMessage.classList.add("show");
				return;
			}

			errorMessage.classList.remove("show");
			phoneNumber = event.target.value;
		});
	}

	// ------------------------------
	// SELECT STANDARD PLAN BY SELECTING WORKER AMOUNTS
	workerAmounts.addEventListener("change", (event) => {
		const workerAmount = event.target.value;
		const price = standardPlan.querySelector(".plan__price").firstElementChild;

		switch (workerAmount) {
			case "11-20":
				price.textContent = "€350";
				break;
			case "21-30":
				price.textContent = "€750";
				break;
			case "31-40":
				price.textContent = "€1100";
				break;
			case "41-50":
				price.textContent = "€1700";
				break;
			default:
				price.textContent = "€100";
				break;
		}
	});

	// ------------------------------
	// FAQ LIST ITEMS
	function collapseList(event) {
		// Get the clicked item
		const item = event.target;

		// Collapse item if it is open
		if (item.classList.contains("open-answer")) {
			item.classList.remove("open-answer");
			return;
		}

		// Collapse all summaries without target
		for (const el of faqItems) {
			if (el.classList.contains("open-answer")) {
				el.classList.remove("open-answer");
			}
		}

		// Open the clicked item
		item.classList.add("open-answer");
	}

	// Add 'click' event listener to each connection element
	for (const item of faqItems) {
		item.addEventListener("click", collapseList);
	}
});
