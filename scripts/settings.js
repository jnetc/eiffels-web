document.addEventListener('DOMContentLoaded', () => {
	const list = document.querySelector('.settings__list');
	const listItems = document.querySelectorAll('.settings__name');

	console.log(listItems);

	function collapseList(event) {
		const item = event.target;

		if (item.classList.contains('open-settings')) {
			item.classList.remove('open-settings');
			return;
		}

		// Collapse all summaries without target
		listItems.forEach(el => {
			if (el.classList.contains('open-settings')) {
				el.classList.remove('open-settings');
				return;
			}
		});

		item.classList.add('open-settings');
	}

	listItems.forEach(item => {
		item.addEventListener('pointerup', collapseList);
	});
});
