document.addEventListener("DOMContentLoaded", () => {
	const openDialogMPAdd = document.getElementById("open__mp-add-dialog");
	const dialogMPAdd = document.getElementById("mp-add-dialog");
	const btnListVacancies = document.getElementById("list_vacancies");
	const btnSupplyServices = document.getElementById("supply_services");
	const btnSellMaterials = document.getElementById("sell_materials");

	// ------------------------------
	// OPEN DIALOG "ADD NEW MATERIALS, WORKERS, JOBS"
	openDialogMPAdd.addEventListener("click", () => {
		document.body.style.overflow = "hidden";
		dialogMPAdd.showModal();
	});

	dialogMPAdd
		.querySelector("#mp-add-dialog__close-btn")
		.addEventListener("click", () => {
			document.body.removeAttribute("style");
			dialogMPAdd.close();
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
