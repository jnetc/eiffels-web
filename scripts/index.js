document.addEventListener("DOMContentLoaded", () => {
	const heroAuthForm = document.querySelector(".unlogged__form");
	const phoneNumberInput = document.getElementById("unlogged__phone-number");
	const errorMessage = document.querySelector(".error-message");
	let phoneNumber = "";

	// Choose Standard plan by selecting worker amounts
	const standardPlan = document.querySelector(".plan-standard");
	const workerAmounts = document.getElementById("plan__select-workers");

	// Select all elements with the class 'faq__question'
	const faqItems = document.querySelectorAll(".faq__question");

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
		console.log(item);

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
