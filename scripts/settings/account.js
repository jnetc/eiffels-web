document.addEventListener('DOMContentLoaded', () => {
	// Forms
	const preferencesForm = document.getElementById('settings__preferences');
	const personalForm = document.getElementById('settings__personal');
	const phoneForm = document.getElementById('settings__phone');
	const emailForm = document.getElementById('settings__email');
	const rolesForm = document.getElementById('settings__roles');
	const deleteAccountForm = document.getElementById('settings__delete-account');

	// Inputs
	const language = document.getElementById('preferences__language');
	const postalCode = document.getElementById('preferences__postal-code');
	const firstName = document.getElementById('personal__first-name');
	const lastName = document.getElementById('personal__last-name');
	const phoneNumber = document.getElementById('phone__number');
	const emailAddress = document.getElementById('email__address');
	const role = document.getElementById('roles__role');

	const errorMessage = document.querySelector('.error-message');

	// Delete Account elements
	const openDialogDA = document.getElementById('open__da-dialog');
	const dialogDA = document.getElementById('da-dialog');
	const formDA = document.getElementById('da__form');

	// User data
	const user = {
		id: 1,
		language: 'fi',
		postalCode: '00110',
		firstName: 'Jussi',
		lastName: 'Heinola',
		phoneNumber: '+358501231234',
		emailAddress: 'jussi.heinola@example.com',
		role: 'jobs',
	};

	// Load data to inputs
	language.value = user.language;
	postalCode.value = user.postalCode;
	firstName.value = user.firstName;
	lastName.value = user.lastName;
	phoneNumber.value = user.phoneNumber;
	emailAddress.value = user.emailAddress;
	role.value = user.role;

	function updateAccount(event, section) {
		event.preventDefault();
		const button = event.target.querySelector('button');
		button.disabled = true;
		button.querySelector('.btn-text').textContent = 'Saving';

		// Update user data based on the section
		switch (section) {
			case 'preferences':
				emulateSaveOnServer(button, { ...user, language: language.value, postalCode: postalCode.value });
				return;
			case 'personal':
				emulateSaveOnServer(button, { ...user, firstName: firstName.value, lastName: lastName.value });
				return;
			case 'phone':
				emulateSaveOnServer(button, { ...user, phoneNumber: phoneNumber.value });
				return;
			case 'email':
				emulateSaveOnServer(button, { ...user, emailAddress: emailAddress.value });
				return;
			case 'role':
				emulateSaveOnServer(button, { ...user, role: role.value });
				return;
			default:
				user;
		}
	}

	async function emulateSaveOnServer(button, user) {
		if (errorMessage.classList.contains('show')) {
			errorMessage.classList.remove('show');
		}

		try {
			// Emulate saving data to server with a timeout
			const timeout = setTimeout(() => {
				button.firstElementChild.textContent = 'Save';
				button.disabled = false;

				console.log('updated');
				clearTimeout(timeout);
			}, 3000);

			console.log('get preferences', user);
		} catch (error) {
			console.log(error);
			errorMessage.classList.add('show');
		}
	}

	async function deleteAccount(event) {
		event.preventDefault();

		try {
			console.log('delete account');
		} catch (error) {
			console.log(error);
		}
	}
	// Add submit event listeners to forms
	preferencesForm.addEventListener('submit', event => updateAccount(event, 'preferences'));
	personalForm.addEventListener('submit', event => updateAccount(event, 'personal'));
	phoneForm.addEventListener('submit', event => updateAccount(event, 'phone'));
	emailForm.addEventListener('submit', event => updateAccount(event, 'email'));
	rolesForm.addEventListener('submit', event => updateAccount(event, 'role'));
	deleteAccountForm.addEventListener('submit', deleteAccount);

	// ------------------------------
	// OPEN DIALOG "DELETE ACCOUNT"
	openDialogDA.addEventListener('click', () => {
		document.body.style.overflow = 'hidden';
		dialogDA.showModal();
	});

	// Close dialog if cancel button or close button is clicked
	function cancelOrCloseDialogDA() {
		const inputs = [...dialogDA.querySelectorAll('.form__reason-delete')];
		const errorMessage = dialogDA.querySelector('.error-message');

		// Uncheck all inputs
		for (const el of inputs) {
			el.querySelector('input').checked = false;

		}

		// Hide error message
		errorMessage.classList.remove('show');

		document.body.removeAttribute('style');
		dialogDA.close();
	}

	dialogDA.querySelector('#da-dialog__close-btn').addEventListener('click', cancelOrCloseDialogDA);
	dialogDA.querySelector('#da-dialog__cancel').addEventListener('click', cancelOrCloseDialogDA);

	// Delete Account on submit
	function deleteThisAccount(event) {
		event.preventDefault();

		const inputs = [...dialogDA.querySelectorAll('.form__reason-delete')];
		const errorMessage = dialogDA.querySelector('.error-message');

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

	formDA.addEventListener('submit', deleteThisAccount);
});
