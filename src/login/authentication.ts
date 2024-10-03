export default async function authentication(pathname: string) {
  // Import the setTokken function from another module
  const { setTokken } = await import('../emulate_user_access.js');
  // Error message
  const { default: errorMessage } = await import('../components/errorMessage.js');

  // Get form, numeric input fields, submit button, and error message elements
  const authForm = document.querySelector('.auth__form') as HTMLFormElement;
  const digits = document.querySelectorAll('[inputmode="numeric"]') as NodeListOf<HTMLInputElement>;
  const submitButton = document.querySelector('.auth__btn') as HTMLButtonElement;

  // Set focus on the first numeric input field
  // Wait for 300 milliseconds (200 milliseconds for the pop-up animation)
  const timeout = setTimeout(() => {
    digits[0].focus();
    clearTimeout(timeout);
  }, 300);

  // Add event listeners to each numeric input field
  digits.forEach((input, index) => {
    // Handle input event
    input.addEventListener('input', () => {
      // Remove the error message
      errorMessage(null);
      // Keep only the last entered character and remove any non-numeric characters
      input.value = input.value.replace(/[^0-9]/g, '').slice(-1);

      // If a digit is entered, move focus to the next input field, if it exists
      if (input.value.length === 1 && index < digits.length - 1) {
        digits[index + 1].focus();
      }
    });

    // Prevent pasting invalid characters
    input.addEventListener('paste', (event: ClipboardEvent) => {
      // Get the clipboard data
      const paste = event.clipboardData?.getData('text') || '';
      event.preventDefault();

      // Check if the pasted value contains exactly 6 digits
      if (!/^[0-9]{6}$/.test(paste)) {
        errorMessage(
          authForm,
          'Please enter exactly 6 digits. Only numerical values are allowed in this field. Ensure your entry is neither more nor less than 6 digits.'
        ); // Show the error message
        return;
      }

      // Remove the error message
      errorMessage(null);

      // Fill each input field with the corresponding digit from the pasted value
      digits.forEach((input, index) => {
        input.value = paste[index];
      });

      // After pasting, move focus to the submit button
      const breakPasteActivity = setTimeout(() => {
        submitButton.focus();
        clearTimeout(breakPasteActivity);
      }, 0);
    });

    // Prevent typing invalid characters from the keyboard
    input.addEventListener('keypress', event => {
      if (!/^[0-9]$/.test(event.key)) {
        event.preventDefault();
      }
    });

    // Prevent the cursor from moving to the end of the input field on click
    input.addEventListener('focus', () => {
      setTimeout(() => input.setSelectionRange(0, 1), 0); // Set selection to the first character
    });
  });

  // Handle form submission
  authForm.addEventListener('submit', event => {
    event.preventDefault(); // Prevent the default form submission behavior
    const title = document.querySelector('#auth-dialog__title-fill') as HTMLHeadingElement;
    title.classList.add('status-changed');

    // Simulate a server delay
    // And show an error message if authentication fails
    const serverTimeoutEmulator = setTimeout(() => {
      title.classList.remove('status-changed');
      // errorMessage.classList.add("show");

      if (pathname.includes(MARKETPLACE)) {
        // Set a cookie to indicate that the user has accepted the terms of use
        setTokken('tokken', '1', 1);
      }
      clearTimeout(serverTimeoutEmulator);
    }, 2000);

    // // Check if the user is authenticated
    // if (pathname.includes(LOGGED)) {
    // 	setTokken("tokken", "1", 1);
    // 	url.pathname = LOGGED_PATH; // Redirect to the page after authentication
    // 	window.location.href = url.toString();
    // 	return;
    // }
  });
}
