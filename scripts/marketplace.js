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

	//
	const cardMaterialsHeight = 206;
	const cardWorkersHeight = 259;

	function getLineCount(element) {
		const descriptionClass = element.nextSibling.nextSibling.classList.value;
		const descriptionHeight = element.children[0].scrollHeight;
		console.log(descriptionHeight, descriptionClass, element.children[0]);

		if (descriptionHeight > cardMaterialsHeight && descriptionClass === 'card__materials') {
			console.log('Слишком длинное описание');
			return true;
		}

		if (descriptionHeight > cardWorkersHeight && descriptionClass === 'card__workers') {
			console.log(' описание');
			return true;
		}

		return false;
	}

	const textBox = document.querySelectorAll('.card__description');
	textBox.forEach(element => {
		const lineCount = getLineCount(element);
		console.log(`Количество строк: ${lineCount}`);
	});
});
