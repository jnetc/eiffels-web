document.addEventListener('DOMContentLoaded', () => {
	const errorMessage = document.querySelector('.error-message');
	// Select all elements with class 'settings__connection'
	const connections = document.querySelectorAll('.settings__connection');

	function connectCloud(event) {
		// Get the clicked connection element
		const connection = event.currentTarget;
		// Get the first child element (assumed to be the checkbox)
		const checkbox = connection.firstElementChild;
		// Get the element with class 'connection__status' inside the connection
		const status = connection.querySelector('.connection__status');

		// Toggle status text based on checkbox state
		if (checkbox.checked) {
			emulateConnectOnServer(status, connection);
		} else {
			emulateDisconnectOnServer(status, connection);
		}
	}

	async function emulateConnectOnServer(status, connection) {
		if (errorMessage.classList.contains('show')) {
			errorMessage.classList.remove('show');
		}
		try {
			status.firstElementChild.textContent = 'Connecting';
			connection.classList.add('disabled');
			console.log('Connecting...');

			// Emulate saving data to server with a timeout
			const timeout = setTimeout(() => {
				connection.classList.remove('disabled');
				status.firstElementChild.textContent = 'Connected';

				console.log('Connected');
				clearTimeout(timeout);
			}, 3000);
		} catch (error) {
			console.log(error);
			errorMessage.classList.add('show');
		}
	}
	async function emulateDisconnectOnServer(status, connection) {
		if (errorMessage.classList.contains('show')) {
			errorMessage.classList.remove('show');
		}

		try {
			status.firstElementChild.textContent = 'Disconnecting';
			connection.classList.add('disabled');
			console.log('Disconnecting...');

			// Emulate saving data to server with a timeout
			const timeout = setTimeout(() => {
				connection.classList.remove('disabled');
				status.firstElementChild.textContent = 'Disconnected';

				console.log('Disconnected');
				clearTimeout(timeout);
			}, 3000);
		} catch (error) {
			console.log(error);
			errorMessage.classList.add('show');
		}
	}

	// Add 'pointerup' event listener to each connection element
	for (const connection of connections) {
		connection.addEventListener('click', connectCloud);
	}
});
