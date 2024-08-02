document.addEventListener('DOMContentLoaded', () => {
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
		if (!checkbox.checked) {
			status.textContent = 'Connected';
		} else {
			status.textContent = 'Disconnected';
		}
	}

	// Add 'pointerup' event listener to each connection element
	connections.forEach(connection => {
		connection.addEventListener('pointerup', connectCloud);
	});
});
