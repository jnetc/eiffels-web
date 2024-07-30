document.addEventListener('DOMContentLoaded', () => {
	const heroAuthForm = document.querySelector('.hero__auth-form');
	const phoneNumberInput = document.getElementById('phone-number');
	const errorMessage = document.querySelector('.error-message');
	let phoneNumber = '';
	let isIncurrectNumber = false;

	heroAuthForm.addEventListener('submit', event => {
		event.preventDefault();
		if (isIncurrectNumber) {
			console.log('error message', phoneNumber);
			errorMessage.classList.add('show');
			return;
		}
		errorMessage.classList.remove('show');
		console.log('phone number', phoneNumber);
		window.location.href = 'auth.html';
		// Hide error message
	});

	phoneNumberInput.addEventListener('input', event => {
		// Для иммитации ошибки ввести +0000000000 (10 нулей)
		console.log('input', event.target.value);
		if (event.target.value === '+0000000000') {
			isIncurrectNumber = true;
			return;
		}
		isIncurrectNumber = false;
		phoneNumber = event.target.value;
	});
});
