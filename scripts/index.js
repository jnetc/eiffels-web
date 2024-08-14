document.addEventListener("DOMContentLoaded", async () => {
	const { default: handlePhoneNumber } = await import("./login/login.js");

	// Mobile menu button and menu container
	const mobMenuButton = document.getElementById("header__mob-menu-btn");
	const mobNavigation = document.querySelector(".header__nav");

	// Elements for selecting standard plan by selecting worker amounts
	const standardPlan = document.querySelector(".plan-standard");
	const workerAmounts = document.getElementById("plan__select-workers");

	// Select all elements with the class 'faq__question'
	const faqItems = document.querySelectorAll(".faq__question");

	// ------------------------------
	// MOBILE MENU

	mobMenuButton.addEventListener("click", () => {
		mobNavigation.classList.toggle("open");
		mobNavigation.classList.contains("open")
			? addEventsToLinks(true)
			: addEventsToLinks(false);
	});

	function addEventsToLinks(boolean) {
		for (const element of mobNavigation.querySelectorAll("a")) {
			if (boolean) {
				element.addEventListener("click", () => {
					mobNavigation.classList.remove("open");
				});
			} else {
				element.removeEventListener("click", () => {});
			}
		}
	}

	// ------------------------------
	// AUTH FORM FOR PHONE NUMBER IN HERO SECTION
	handlePhoneNumber();

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
