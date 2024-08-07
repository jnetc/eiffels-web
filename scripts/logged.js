document.addEventListener('DOMContentLoaded', () => {
	// Add user picture
	const openDialogAUP = document.getElementById('open__aup-dialog');
	const dialogAUP = document.getElementById('aup-dialog');
	const formAUP = document.getElementById('aup__form');

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

	dialogAUP.querySelector('#aup-dialog__close-btn').addEventListener('click', cancelOrCloseDialogAUP);

	async function getImageData() {
		document.addEventListener('change', event => {
			const file = event.target.files[0];

			if (file) {
				const reader = new FileReader();

				reader.onload = (e) => {
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
		const file = event.target.querySelector('#aup__picture-file');
		// When the form is submitted, disable the button and show a loading indicator
		file.disabled = true;
		button.disabled = true;
		button.querySelector('.btn-text').textContent = 'Uploading Image';

		// Emulate save on server
		const timeout = setTimeout(() => {
			// Show selected image in UI after submitting form
			document.getElementById('profile__picture').src = document.getElementById('aup__photo-display').src;
			// Close dialog and reset form
			cancelOrCloseDialogAUP();

			button.firstElementChild.textContent = 'Upload Image';
			file.disabled = false;
			button.disabled = false;

			clearTimeout(timeout);
		}, 3000);
	});
});
