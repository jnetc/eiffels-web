document.addEventListener('DOMContentLoaded', () => {
	const authForm = document.querySelector('.auth__form');
	const digits = document.querySelectorAll('[inputmode="numeric"]');
	const submitButton = document.querySelector('.auth__btn');
	const errorMessage = document.querySelector('.error-message');

	// Focus on the first digit input
	digits[0].focus();

	digits.forEach((input, index) => {
		input.addEventListener('input', () => {
			// Only keep the last entered digit
			input.value = input.value.replace(/[^0-9]/g, '').slice(-1);

			// If a digit is entered, move the focus to the next input, if it exists
			if (input.value.length === 1 && index < digits.length - 1) {
				digits[index + 1].focus();
			}
		});

		// Prevent invalid characters from being pasted
		input.addEventListener('paste', event => {
			const paste = (event.clipboardData || window.clipboardData).getData('text');
			event.preventDefault();

			// Ensure pasted content is exactly 6 digits
			if (!/^[0-9]{6}$/.test(paste)) {
				errorMessage.classList.add('show');
				return;
			}

			// Hide error message
			errorMessage.classList.remove('show');

			// Fill each input with the corresponding digit from the pasted value
			digits.forEach((input, index) => {
				input.value = paste[index];
			});

			// Move focus to the submit button after handling the paste event
			const breakPasteActivity = setTimeout(() => {
				submitButton.focus();
				clearTimeout(breakPasteActivity);
			}, 0);
		});

		// We prevent the input of inappropriate characters through the keyboard
		input.addEventListener('keypress', event => {
			if (!/^[0-9]$/.test(event.key)) {
				event.preventDefault();
			}
		});

		// We prevent the carriage from moving to the end of the field when clicked
		input.addEventListener('focus', event => {
			setTimeout(() => {
				input.setSelectionRange(0, 1);
			}, 0);
		});
	});

	authForm.addEventListener('submit', event => {
		event.preventDefault();
		console.log(
			'phone number',
			digits[0].value + digits[1].value + digits[2].value + digits[3].value + digits[4].value + digits[5].value
		);
		window.location.href = 'logged.html';
	});
});
