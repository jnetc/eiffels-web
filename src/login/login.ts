export default async function handlePhoneNumber(pathname: string) {
  // Find the login form on the page
  const loginForm = document.querySelector('.login__form') as HTMLFormElement;

  // Find the phone number input field
  const phoneNumberCode = document.getElementById('login__country-code') as HTMLSpanElement;
  const phoneNumberInput = document.getElementById('login__phone-number') as HTMLInputElement;

  // Error message
  const { default: errorMessage } = await import('../components/errorMessage.js');

  // Variable to store the entered phone number
  let phoneNumber = '';

  // Check if the login form exists
  if (loginForm) {
    // Add an event listener for form submission
    loginForm.addEventListener('submit', async event => {
      // Prevent the browser's default behavior for form submission
      event.preventDefault();

      phoneNumberInput.disabled = true;

      // Dynamic import of modules for lazy loading
      const { default: authentication } = await import('./authentication.js');
      const { openDialog } = await import('../dialogs/dialogUtils.js');

      // Collect the phone number by concatenating the country code and the number from the input field
      const fullPhoneNumber = `${phoneNumberCode.innerText}${phoneNumber}`;

      // Check if pathname contains MARKETPLACE
      if (pathname.includes(MARKETPLACE)) {
        // Open the authentication dialog for the marketplace
        openDialog(document.getElementById('mp-auth-dialog') as HTMLDialogElement);

        // Call the authentication function for the marketplace
        authentication(MARKETPLACE);
        return;
      }

      // Check if pathname contains INDEX
      if (pathname.includes(INDEX)) {
        console.log('index', fullPhoneNumber);

        // Open the authentication dialog for the homepage
        openDialog(document.getElementById('hs-auth-dialog') as HTMLDialogElement);

        // Call the authentication function for the marketplace
        authentication(MARKETPLACE);

        // Call the authentication function for the homepage
        // authentication(LOGGED);
        return;
      }
    });
  }

  // Check if the phone number input field exists
  if (phoneNumberInput) {
    // Immediately set focus on the phone number input field
    // phoneNumberInput.focus();

    // Add an event listener for input text
    phoneNumberInput.addEventListener('input', event => {
      const input = (event.target as HTMLInputElement).value;

      // If the input field is empty
      if (input === '') {
        // Remove the error message
        errorMessage(null);
        return;
      }

      // If the entered value is not a number
      if (!/^[0-9]{0,}$/.test(input)) {
        console.log('input_error', input);

        // Show the error message
        errorMessage(
          loginForm,
          'Invalid input. The phone number must start with a plus sign (+) and contain only numerical values. Please correct your entry.'
        );

        return;
      }

      // Remove the error message if the entered value is valid
      errorMessage(null);

      // Update the phone number variable
      phoneNumber = input;
    });
  }
}
