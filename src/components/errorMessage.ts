// Exported function to display an error message
export default function errorMessage(parent: HTMLElement | null, message?: string) {
  // Check if an error message already exists
  const hasErrorMessage = document.querySelector('.error-message');

  // If there's already an error message and a parent is provided, do nothing
  if (parent && hasErrorMessage) return;

  // If an existing error message is found, remove it
  if (hasErrorMessage) {
    hasErrorMessage.classList.remove('show');
    const timer = setTimeout(() => {
      hasErrorMessage.remove(); // Remove the error message element from the DOM
      clearTimeout(timer);
    }, 500); // Delay before removal
    return;
  }

  // If no parent element is provided, exit the function
  if (!parent) return;

  // Create a container for the error message
  const container = document.createElement('div');
  const errorMessageElement = document.createElement('strong'); // Strong element for emphasis
  const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); // Create SVG element for icon
  const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'use'); // Path for the SVG icon

  // Set attributes for the container and icon
  container.setAttribute('class', 'error-message');
  container.setAttribute('role', 'alert'); // ARIA role for accessibility
  container.setAttribute('aria-live', 'assertive'); // Live region for screen readers
  icon.setAttribute('class', 'icon');
  icon.setAttribute('aria-hidden', 'true'); // Hide icon from screen readers
  iconPath.setAttribute('href', `${ROOT_PATH}public/svg/ui_icons.svg#warning`); // Link to the icon

  // Set the text content of the error message
  errorMessageElement.textContent = message || 'Sorry, there was an internal server error'; // Default message if none provided
  icon.appendChild(iconPath); // Append the icon path to the icon
  container.appendChild(icon); // Append the icon to the container
  container.appendChild(errorMessageElement); // Append the error message to the container

  // Insert the new error message at the beginning of the parent element
  parent.insertAdjacentElement('afterbegin', container);

  // Display the error message with a delay
  const timer = setTimeout(() => {
    container.classList.add('show'); // Add class to show the error message
    clearTimeout(timer);
  }, 100); // Delay before adding the 'show' class
}
