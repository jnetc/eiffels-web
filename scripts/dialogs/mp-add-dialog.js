document.addEventListener("DOMContentLoaded", async () => {
	const { default: handlePhoneNumber } = await import("../login/login.js");
	const openDialogMPAdd = document.getElementById("open__mp-add-dialog");
	const dialogMPAdd = document.getElementById("mp-add-dialog");
	const dialogMPLogin = document.getElementById("mp-login-dialog");
	const btnListVacancies = document.getElementById("list_vacancies");
	const btnSupplyServices = document.getElementById("supply_services");
	const btnSellMaterials = document.getElementById("sell_materials");

	if (document.cookie.match("tokken")) {
		openDialogMPAdd.addEventListener("click", () => {
			document.body.style.overflow = "hidden";
			dialogMPAdd.showModal();
		});
	} else {
		openDialogMPAdd.addEventListener("click", () => {
			document.body.style.overflow = "hidden";
			dialogMPLogin.showModal();
		});
		handlePhoneNumber();
	}

	// ------------------------------
	// OPEN DIALOG "ADD NEW MATERIALS, WORKERS, JOBS"

	dialogMPAdd
		.querySelector("#mp-add-dialog__close-btn")
		.addEventListener("click", () => {
			document.body.removeAttribute("style");
			dialogMPAdd.close();
		});
	dialogMPLogin
		.querySelector("#mp-login-dialog__close-btn")
		.addEventListener("click", () => {
			document.body.removeAttribute("style");
			dialogMPLogin.close();
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
});
