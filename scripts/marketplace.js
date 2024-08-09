document.addEventListener("DOMContentLoaded", () => {
	// All card with overflow description
	const textBox = document.querySelectorAll(".card__description");

	// Add new materials, workers and jobs
	const openDialogMP = document.getElementById("open__mp-dialog");
	const dialogMP = document.getElementById("mp-dialog");
	const btnListVacancies = document.getElementById("list_vacancies");
	const btnSupplyServices = document.getElementById("supply_services");
	const btnSellMaterials = document.getElementById("sell_materials");

	// Read more
	const dialogMPI = document.getElementById("mpi-dialog");

	// ------------------------------
	// CUT TEXT IN CARD AND SHOW MORE BUTTON
	function getLineCount(element) {
		const cardText = element.querySelector(".card__text");
		const cardTextHeight = Math.round(cardText.getBoundingClientRect().height);
		const cardTextscrollHeight = cardText.scrollHeight;

		// Creating button
		const button = document.createElement("button");
		button.className = "btn-green-border btn-overflow open__mpi-dialog";
		button.setAttribute("aria-label", "Read all text");
		button.setAttribute("title", "Read all text");
		button.textContent = "Read More";
		// Adding event listener for open "dialogMPI"
		button.addEventListener("click", openDialogAndCloneCard);

		if (cardTextscrollHeight > cardTextHeight) {
			element.appendChild(button);
		}
	}

	for (const element of textBox) {
		getLineCount(element);
	}

	// ------------------------------
	// OPEN DIALOG "ADD NEW MATERIALS, WORKERS, JOBS"
	openDialogMP.addEventListener("click", () => {
		document.body.style.overflow = "hidden";
		dialogMP.showModal();
	});

	dialogMP
		.querySelector("#mp-dialog__close-btn")
		.addEventListener("click", () => {
			document.body.removeAttribute("style");
			dialogMP.close();
		});

	btnListVacancies.addEventListener("click", () => {
		console.log("handle vacancies");
	});

	btnSupplyServices.addEventListener("click", () => {
		console.log("handle services");
	});

	btnSellMaterials.addEventListener("click", () => {
		console.log("handle materials");
	});

	// ------------------------------
	// MOBILE NAVIGATION SELECT MENU
	document
		.getElementById("navigation-select")
		.addEventListener("change", function () {
			if (this.value) {
				window.location.href = this.value;
			}
		});

	// ------------------------------
	// OPEN DIALOG "READ MORE"
	function openDialogAndCloneCard(event) {
		// Clones the closest .card element to the clicked element.
		const copyTarget = event.target.closest(".card").cloneNode(true);
		// Replaces the class "card__text" with "card__full-text" on the element with class "card__text inside" copyTarget.
		copyTarget
			.querySelector(".card__text")
			.classList.replace("card__text", "card__full-text");
		// Removes the element with class open__mpi-dialog from copyTarget.
		copyTarget.querySelector(".open__mpi-dialog").remove();
		// Inserts the cloned element at the beginning of the .main__scroll-area element in dialogMPI.
		dialogMPI
			.querySelector(".main__scroll-area")
			.insertAdjacentElement("afterbegin", copyTarget);

		document.body.style.overflow = "hidden";
		dialogMPI.showModal();
	}

	function cancelOrCloseDialogMPI(event) {
		// Removing the cloned .card element from the dialog box.
		event.target.closest("#mpi-dialog").querySelector(".card").remove();

		document.body.removeAttribute("style");
		dialogMPI.close();
	}

	dialogMPI
		.querySelector("#mpi-dialog__close-btn")
		.addEventListener("click", cancelOrCloseDialogMPI);
});
