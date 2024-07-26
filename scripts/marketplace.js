document.addEventListener('DOMContentLoaded', () => {
	// Add new materials, workers and jobs
	const addNewButton = document.getElementById('btn-add');
	const dialog = document.getElementById('mp-dialog');
	const btnListVacancies = document.getElementById('list_vacancies');
	const btnSupplyServices = document.getElementById('supply_services');
	const btnSellMaterials = document.getElementById('sell_materials');

	// Add new materials, workers and jobs
	addNewButton.addEventListener('click', () => {
		document.body.style.overflow = 'hidden';
		dialog.showModal();
	});

	dialog.querySelector('#dialog__close-btn').addEventListener('click', () => {
		document.body.removeAttribute('style');
		dialog.close();
	});

	btnListVacancies.addEventListener('click', () => {
		console.log('handle vacancies');
	});

	btnSupplyServices.addEventListener('click', () => {
		console.log('handle services');
	});

	btnSellMaterials.addEventListener('click', () => {
		console.log('handle materials');
	});

	// Handle navigation select change and move to other page
	document.getElementById('navigation-select').addEventListener('change', function () {
		if (this.value) {
			window.location.href = this.value;
		}
	});
});
