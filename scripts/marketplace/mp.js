document.addEventListener("DOMContentLoaded", () => {
	// ------------------------------
	// MOBILE NAVIGATION SELECT MENU
	document
		.getElementById("navigation-select")
		.addEventListener("change", function () {
			if (this.value) {
				window.location.href = this.value;
			}
		});
});
