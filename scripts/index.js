document.addEventListener('DOMContentLoaded', () => {
	const heroAuthForm = document.querySelector('.hero__auth-form');
	const phoneNumberInput = document.getElementById('phone-number');
	let phoneNumber = '';

	heroAuthForm.addEventListener('submit', event => {
		event.preventDefault();
		console.log('phone number', phoneNumber);
		window.location.href = 'auth.html';
	});

	phoneNumberInput.addEventListener('input', event => {
		phoneNumber = event.target.value;
	});
});
