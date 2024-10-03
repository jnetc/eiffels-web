// Add an event listener that triggers when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', async () => {
  // Define types for connection status
  type TypeStatus = 'connected' | 'disconnected';

  // Select all elements with the class 'settings__connection'
  const connections = document.querySelectorAll('.settings__connection') as NodeListOf<HTMLDivElement>;

  // Dynamically import the error message component
  const { default: errorMessage } = await import('../components/errorMessage.js');

  // Function called when a connection element is clicked
  function connectCloud(event: Event) {
    // Get the connection element that was clicked
    const connectionElem = event.currentTarget as HTMLDivElement;

    // Get the first child element (assumed to be the checkbox)
    const checkbox = connectionElem.firstElementChild as HTMLInputElement;

    // Find the element with the class 'connection__status' within the connection element
    const statusElem = connectionElem.querySelector('.connection__status') as HTMLSpanElement;

    // Toggle the connection status based on the checkbox state
    if (checkbox.checked) {
      // If the checkbox is checked, call the function to connect
      emulateServerConnection(statusElem, connectionElem, 'connected');
    } else {
      // If the checkbox is not checked, call the function to disconnect
      emulateServerConnection(statusElem, connectionElem, 'disconnected');
    }
  }

  // Asynchronous function to simulate connecting to the server
  async function emulateServerConnection(
    statusElem: HTMLSpanElement,
    connectionElem: HTMLDivElement,
    status: TypeStatus
  ) {
    // Hide the error message if it is displayed
    errorMessage(null);

    const statusName = statusElem.querySelector('span') as HTMLSpanElement;

    try {
      // Change the status text to "Connecting" and add the 'disabled' class
      statusName.textContent = status.replace('ed', 'ing');
      connectionElem.classList.add('disabled');
      console.log('Connecting...');

      // Simulate a delay while connecting to the server
      const timeout = setTimeout(() => {
        // Remove the 'disabled' class and change the status text to "Connected"
        connectionElem.classList.remove('disabled');
        statusName.textContent = status;

        console.log(status);
        clearTimeout(timeout); // Clear the timer
      }, 3000);
    } catch (error) {
      // If an error occurs, show the error message
      console.log(error);
      errorMessage(null);
    }
  }

  // Add a 'click' event handler to all connection elements
  for (const connection of connections) {
    connection.addEventListener('click', connectCloud);
  }
});
