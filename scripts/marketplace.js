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

	function getLineCount(element) {
		const style = element.textContent.length;
		if (style > 300) {
			console.log('Слишком длинное описание');
			return true;
		}
		if (style <= 300) {
			console.log(' описание');
			return false;
		}
		// const lineHeight = parseFloat(style.lineHeight);
		// const elementHeight = element.offsetHeight;
		// return Math.round(elementHeight / lineHeight);
	}

	const textBox = document.querySelectorAll('.card__description p');
	textBox.forEach(element => {
		const lineCount = getLineCount(element);
		console.log(`Количество строк: ${lineCount}`);
	});
});
