document.addEventListener('DOMContentLoaded', () => {
	// Sign Out element
	const signOut = document.getElementById('settings__sign-out');

	// Add user picture
	const openDialogAUP = document.getElementById('open__aup-dialog');
	const dialogAUP = document.getElementById('aup-dialog');
	const formAUP = document.getElementById('aup__form');

	// Select all elements with the class 'settings__name'
	const listItems = document.querySelectorAll('.settings__name');

	// ------------------------------
	// SETTINGS LIST ITEMS
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

	// ------------------------------
	// OPEN DIALOG "ADD USER PICTURE"
	openDialogAUP.addEventListener('click', () => {
		// Get image from UI and display it in the dialog
		document.getElementById('aup__photo-display').src = document.getElementById('profile__picture').src;

		document.body.style.overflow = 'hidden';
		dialogAUP.showModal();
	});

	// Close dialog if cancel button or close button is clicked
	function cancelOrCloseDialogAUP() {
		console.log('cancelOrCloseDialog');

		const file = dialogAUP.querySelector('#aup__picture-file');
		const preview = dialogAUP.querySelector('#aup__photo-display');
		const errorMessage = dialogAUP.querySelector('.error-message');

		// Clear selected file
		file.value = '';
		preview.src = '';

		// Hide error message
		errorMessage.classList.remove('show');

		document.body.removeAttribute('style');
		dialogAUP.close();
	}

	console.log('dialogAUP', formAUP.querySelector('#aup__picture-file'));

	dialogAUP.querySelector('#aup-dialog__close-btn').addEventListener('click', cancelOrCloseDialogAUP);

	async function getImageData() {
		document.addEventListener('change', event => {
			const file = event.target.files[0];

			if (file) {
				const reader = new FileReader();

				reader.onload = function (e) {
					// Display the image in the UI by setting the source of the image element
					document.getElementById('aup__photo-display').src = e.target.result;
				};
				// Read the selected file as a Data URL
				reader.readAsDataURL(file);
			}
		});
	}

	// Select file and preview image
	formAUP.querySelector('#aup__picture-file').addEventListener('click', getImageData);

	formAUP.addEventListener('submit', event => {
		event.preventDefault();
		const button = event.target.querySelector('button');
		button.disabled = true;
		button.querySelector('.btn-text').textContent = 'Uploading Image';

		const timeout = setTimeout(() => {
			// Show selected image in UI after submitting form
			document.getElementById('profile__picture').src = document.getElementById('aup__photo-display').src;
			// Close dialog and reset form
			cancelOrCloseDialogAUP();

			button.firstElementChild.textContent = 'Upload Image';
			button.disabled = false;

			clearTimeout(timeout);
		}, 3000);
	});
});
