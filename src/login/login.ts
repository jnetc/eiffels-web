export default async function handlePhoneNumber(pathname: string) {
  // Find the login form on the page
  const loginForm = document.querySelector('.login__form') as HTMLFormElement;

  // Find the phone number input field
  const phoneNumberCode = document.getElementById('login__country-code') as HTMLSpanElement;
  const phoneNumberInput = document.getElementById('login__phone-number') as HTMLInputElement;

  phoneNumberInput.addEventListener('input', event => {
    // Get the current input value
    const input = (event.target as HTMLInputElement).value;

    // Remove any non-numeric characters from the input
    const value = input.replace(/\D/g, '');

    // Get the numeric country code from the country code element, defaulting to '358' if unavailable
    const code = phoneNumberCode.textContent?.slice(1) || '358';

    // If the input starts with the country code, remove the code from the beginning of the input value
    phoneNumberInput.value = value.startsWith(code) ? value.slice(code.length) : value;
  });

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
      const fullPhoneNumber = `${phoneNumberCode.textContent}${phoneNumberInput.value}`;

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
}
