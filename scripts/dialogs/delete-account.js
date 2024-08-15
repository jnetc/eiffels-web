document.addEventListener("DOMContentLoaded", async () => {
	const { closeDialog, openDialog } = await import("../dialogs/dialogUtils.js");
	const { revokeTokken } = await import("../emulate_user_access.js");
	// Delete Account elements
	const openDialogDA = document.getElementById("open__da-dialog");
	const dialogDA = document.getElementById("da-dialog");
	const formDA = document.getElementById("da__form");

	openDialogDA.addEventListener("click", () => {
		openDialog(dialogDA);
	});

	// Close dialog if cancel button or close button is clicked
	function cancelOrCloseDialogDA() {
		const inputs = [...dialogDA.querySelectorAll(".form__reason-delete")];
		const errorMessage = dialogDA.querySelector(".error-message");

		// Uncheck all inputs
		for (const el of inputs) {
			el.querySelector("input").checked = false;
		}

		// Hide error message
		errorMessage.classList.remove("show");

		closeDialog(dialogDA);
	}

	dialogDA
		.querySelector("#da-dialog__close-btn")
		.addEventListener("click", cancelOrCloseDialogDA);
	dialogDA
		.querySelector("#da-dialog__cancel")
		.addEventListener("click", cancelOrCloseDialogDA);

	// Delete Account on submit
	function deleteThisAccount(event) {
		event.preventDefault();

		const inputs = [...dialogDA.querySelectorAll(".form__reason-delete")];
		const errorMessage = dialogDA.querySelector(".error-message");

		// Hide error message
		errorMessage.classList.remove("show");

		// Get selected reason
		const selectedElement = inputs.find((el) => {
			if (el.querySelector("input").checked) {
				return el;
			}
		});

		// Check if reason is selected
		if (!selectedElement) {
			errorMessage.classList.add("show");
			return;
		}

		// Get reason text
		const reason = selectedElement.querySelector("label").textContent;

		console.log(reason);

		url.pathname = INDEX_PATH;
		window.location.href = url.toString();
		revokeTokken();
	}

	formDA.addEventListener("submit", deleteThisAccount);
});
