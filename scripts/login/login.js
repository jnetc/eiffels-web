const INDEX = "/index";
const LOGGED = "/logged";
const MARKETPLACE = "/marketplace";

export default function handlePhoneNumber(pathname) {
	const loginForm = document.querySelector(".login__form");
	const phoneNumberInput = document.getElementById("login__phone-number");
	const errorMessage = document.querySelector(".error-message");
	let phoneNumber = "";

	if (loginForm) {
		loginForm.addEventListener("submit", async (event) => {
			event.preventDefault();
			// Dynamic imports for lazy loading
			const { default: authentication } = await import("../login/auth.js");
			const { openDialog } = await import("../dialogs/dialogUtils.js");

			console.log("phone number", phoneNumber);

			if (pathname.includes(MARKETPLACE)) {
				console.log("marketplace", phoneNumber);

				openDialog(document.getElementById("mp-auth-dialog"));
				authentication(MARKETPLACE);
				// window.location.href = "marketplace.html";
				return;
			}

			if (pathname.includes(INDEX)) {
				console.log("index", phoneNumber);
				openDialog(document.getElementById("hs-auth-dialog"));
				authentication(LOGGED);
				// window.location.href = "auth.html";
				return;
			}
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
}
