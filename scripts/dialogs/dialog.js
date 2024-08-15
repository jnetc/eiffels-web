document.addEventListener("DOMContentLoaded", async () => {
	const dialogs = document.querySelectorAll("dialog");
	const { closeDialog } = await import("./dialogUtils.js");

	for (const dialog of dialogs) {
		dialog
			.querySelector("[data-button-close]")
			?.addEventListener("click", () => {
				closeDialog(dialog);
			});
	}
});
