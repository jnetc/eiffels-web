document.addEventListener('DOMContentLoaded', () => {
	const authForm = document.querySelector('.auth__form');
	const digits = document.querySelectorAll('[inputmode="numeric"]');
	// const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

	digits.forEach((input, index) => {
		input.addEventListener('input', () => {
			// if (!/^\d$/.test(input.value)) {
			// 	input.value = '';
			// 	input.focus();
			// 	console.log('Only digits are allowed');
			// }
			if (!input.value) {
				input.value = '';
				input.focus();
				console.log('start off');
			}

			if (input.value.length > 1) {
				input.value = input.value.split('')[1];
			}

			if (index < digits.length - 1) {
				console.log('end off');
				digits[index + 1].focus();
			}

			if (index === digits.length - 1) {
				console.log('end off');
				digits[index].blur();
			}
		});
	});
});
