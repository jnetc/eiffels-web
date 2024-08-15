document.addEventListener("DOMContentLoaded", async () => {
	const { openDialog } = await import("./dialogUtils.js");
	const buttonMPAddDialog = document.getElementById("button__mp-add-dialog");
	const dialogMPAdd = document.getElementById("mp-add-dialog");
	const dialogMPLogin = document.getElementById("mp-login-dialog");
	// Select categories
	const btnListVacancies = document.getElementById("list_vacancies");
	const btnSupplyServices = document.getElementById("supply_services");
	const btnSellMaterials = document.getElementById("sell_materials");

	// If the user is logged in check cookie tokken
	if (document.cookie.match("tokken")) {
		buttonMPAddDialog?.addEventListener("click", async () => {
			openDialog(dialogMPAdd);
		});
	} else {
		buttonMPAddDialog?.addEventListener("click", async () => {
			openDialog(dialogMPLogin);

			const { default: handlePhoneNumber } = await import("../login/login.js");
			handlePhoneNumber("marketplace");
		});
	}

	// ------------------------------
	// OPEN DIALOG "ADD NEW MATERIALS, WORKERS, JOBS"

	btnListVacancies.addEventListener("click", () => {
		console.log("handle vacancies");
	});

	btnSupplyServices.addEventListener("click", () => {
		console.log("handle services");
	});

	btnSellMaterials.addEventListener("click", () => {
		console.log("handle materials");
	});
});
