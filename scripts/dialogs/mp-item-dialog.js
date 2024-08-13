document.addEventListener("DOMContentLoaded", () => {
	const textBox = document.querySelectorAll(".card__description");
	const dialogMPI = document.getElementById("mp-item-dialog");

	// ------------------------------
	// CUT TEXT IN CARD AND SHOW MORE BUTTON
	function getLineCount(element) {
		const cardText = element.querySelector(".card__text");
		const cardTextHeight = Math.round(cardText.getBoundingClientRect().height);
		const cardTextscrollHeight = cardText.scrollHeight;

		// Creating button
		const button = document.createElement("button");
		button.className = "btn-green-border btn-overflow mp-item-dialog";
		button.setAttribute("aria-label", "Read all text");
		button.setAttribute("title", "Read all text");
		button.textContent = "Read More";
		// Adding event listener for open "dialogMPI"
		button.addEventListener("click", openDialogAndCloneCard);

		if (cardTextscrollHeight > cardTextHeight) {
			cardText.classList.add("card__text-clamp");
			element.appendChild(button);
		}
	}

	for (const element of textBox) {
		getLineCount(element);
	}

	// ------------------------------
	// OPEN DIALOG "READ MORE"
	function openDialogAndCloneCard(event) {
		// Clones the closest .card element to the clicked element.
		const copyTarget = event.target.closest(".card").cloneNode(true);
		// Replaces the class "card__text" with "card__full-text" on the element with class "card__text inside" copyTarget.
		copyTarget
			.querySelector(".card__text")
			.classList.replace("card__text", "card__full-text");
		// Removes the element with class open__mp-item-dialog from copyTarget.
		copyTarget.querySelector(".mp-item-dialog").remove();
		// Inserts the cloned element at the beginning of the .main__scroll-area element in dialogMPI.
		dialogMPI
			.querySelector(".main__scroll-area")
			.insertAdjacentElement("afterbegin", copyTarget);

		document.body.style.overflow = "hidden";
		dialogMPI.showModal();
	}

	function cancelOrCloseDialogMPI(event) {
		// Removing the cloned .card element from the dialog box.
		event.target.closest("#mp-item-dialog").querySelector(".card").remove();

		document.body.removeAttribute("style");
		dialogMPI.close();
	}

	dialogMPI
		.querySelector("#mp-item-dialog__close-btn")
		.addEventListener("click", cancelOrCloseDialogMPI);
});
