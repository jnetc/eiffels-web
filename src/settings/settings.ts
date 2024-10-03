// Add an event listener that triggers when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', async () => {
  // Dynamically import the revokeTokken function from the emulate_user_access.js module
  const { revokeTokken } = await import('../emulate_user_access.js');

  // Get the sign-out button element by its ID
  const signOut = document.getElementById('settings__sign-out') as HTMLFormElement;

  // Get all setting list items by their class name
  const listItems = document.querySelectorAll('.settings__name') as NodeListOf<HTMLHeadingElement>;

  // Dynamically import the error message component
  const { default: errorMessage } = await import('../components/errorMessage.js');

  // Function to handle clicks on the settings list item
  function collapseList(event: Event) {
    // Get the clicked item
    const item = event.currentTarget as HTMLElement;

    // If the clicked item is already open, close it
    if (item.classList.contains('open-settings')) {
      item.classList.remove('open-settings');
      errorMessage(null);
      return;
    }

    // If the item is not open, close all other open items in the list
    for (const el of listItems) {
      if (el.classList.contains('open-settings')) {
        el.classList.remove('open-settings');
      }
    }

    // Open the clicked item
    item.classList.add('open-settings');
  }

  // Add click event handlers for each settings list item
  for (const item of listItems) {
    item.addEventListener('click', collapseList);
  }

  // Add a form submit event handler for the sign-out button
  signOut.addEventListener('submit', event => {
    // Prevent the default form behavior (page reload)
    event.preventDefault();

    // Redirect the user to the main page
    url.pathname = INDEX_PATH; // Assuming INDEX_PATH is defined elsewhere in your code
    window.location.href = url.toString();

    // Call the revokeTokken function to end the session
    revokeTokken();
  });
});
