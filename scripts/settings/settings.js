document.addEventListener('DOMContentLoaded', () => {
	const signOut = document.getElementById('settings__sign-out');

	// Select all elements with the class 'settings__name'
	const listItems = document.querySelectorAll('.settings__name');

	function collapseList(event) {
		// Get the clicked item
		const item = event.target;

		// Collapse item if it is open
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

		// Open the clicked item
		item.classList.add('open-settings');
	}

	// Add 'pointerup' event listener to each connection element
	listItems.forEach(item => {
		item.addEventListener('pointerup', collapseList);
	});

	// Sign Out user on submit and redirect to index
	signOut.addEventListener('submit', event => {
		event.preventDefault();
		window.location.href = 'index.html';
	});
});
