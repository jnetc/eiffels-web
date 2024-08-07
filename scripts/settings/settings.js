document.addEventListener('DOMContentLoaded', () => {
	// Sign Out element
	const signOut = document.getElementById('settings__sign-out');
	// Delete Account elements
	const deleteAccountBtn = document.getElementById('delete-account__btn');
	const dialog = document.getElementById('da-dialog');
	const deleteForm = document.getElementById('da__form');

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

	// Add 'click' event listener to each connection element
	listItems.forEach(item => {
		item.addEventListener('click', collapseList);
	});

	// Sign Out user on submit and redirect to index
	signOut.addEventListener('submit', event => {
		event.preventDefault();
		window.location.href = 'index.html';
	});

	// Open dialog "Delete Account"
	deleteAccountBtn.addEventListener('click', () => {
		document.body.style.overflow = 'hidden';
		dialog.showModal();
	});

	// Close dialog if cancel button or close button is clicked
	function cancelOrCloseDialog() {
		const inputs = [...dialog.querySelectorAll('.form__reason-delete')];
		const errorMessage = dialog.querySelector('.error-message');

		// Uncheck all inputs
		inputs.forEach(el => {
			el.querySelector('input').checked = false;
		});

		// Hide error message
		errorMessage.classList.remove('show');

		document.body.removeAttribute('style');
		dialog.close();
	}

	dialog.querySelector('#dialog__close-btn').addEventListener('click', cancelOrCloseDialog);
	dialog.querySelector('#dialog__cancel').addEventListener('click', cancelOrCloseDialog);

	// Delete Account on submit
	function deleteAccount(event) {
		event.preventDefault();
		const inputs = [...dialog.querySelectorAll('.form__reason-delete')];
		const errorMessage = dialog.querySelector('.error-message');

		// Hide error message
		errorMessage.classList.remove('show');

		// Get selected reason
		const selectedElement = inputs.find(el => {
			if (el.querySelector('input').checked) {
				return el;
			}
		});

		// Check if reason is selected
		if (!selectedElement) {
			errorMessage.classList.add('show');
			return;
		}

		// Get reason text
		const reason = selectedElement.querySelector('label').textContent;

		console.log(reason);

		window.location.href = 'index.html';
	}

	deleteForm.addEventListener('submit', deleteAccount);
});
