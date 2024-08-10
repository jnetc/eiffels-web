document.addEventListener("DOMContentLoaded", () => {
	const heroAuthForm = document.querySelector(".unlogged__form");
	const phoneNumberInput = document.getElementById("unlogged__phone-number");
	const errorMessage = document.querySelector(".error-message");
	let phoneNumber = "";

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
});
