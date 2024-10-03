// Add an event listener that triggers when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', async () => {
  // Define types for selections and user data
  type TypeSelection = 'preferences' | 'personal' | 'phone' | 'email' | 'role';
  type User = typeof user;

  // Simulated user data
  const user = {
    id: 1,
    language: 'fi',
    postalCode: '00110',
    firstName: 'Jussi',
    lastName: 'Heinola',
    phoneNumber: '+358501231234',
    emailAddress: 'jussi.heinola@example.com',
    role: 'jobs',
  };

  // Get form references by their IDs
  const preferencesForm = document.getElementById('settings__preferences') as HTMLFormElement;
  const personalForm = document.getElementById('settings__personal') as HTMLFormElement;
  const phoneForm = document.getElementById('settings__phone') as HTMLFormElement;
  const emailForm = document.getElementById('settings__email') as HTMLFormElement;
  const rolesForm = document.getElementById('settings__roles') as HTMLFormElement;
  const deleteAccountForm = document.getElementById('settings__delete-account') as HTMLFormElement;

  // Get input element references by their IDs
  const language = document.getElementById('preferences__language') as HTMLSelectElement;
  const postalCode = document.getElementById('preferences__postal-code') as HTMLInputElement;
  const firstName = document.getElementById('personal__first-name') as HTMLInputElement;
  const lastName = document.getElementById('personal__last-name') as HTMLInputElement;
  const phoneNumber = document.getElementById('phone__number') as HTMLInputElement;
  const emailAddress = document.getElementById('email__address') as HTMLInputElement;
  const role = document.getElementById('roles__role') as HTMLSelectElement;

  // Dynamically import the error message component
  const { default: errorMessage } = await import('../components/errorMessage.js');

  // Populate the form fields with user data
  language.value = user.language;
  postalCode.value = user.postalCode;
  firstName.value = user.firstName;
  lastName.value = user.lastName;
  phoneNumber.value = user.phoneNumber;
  emailAddress.value = user.emailAddress;
  role.value = user.role;

  // Function to handle form submission and update the account information
  function updateAccount(event: Event, section: TypeSelection) {
    event.preventDefault(); // Prevent the default form action
    const button = (event.target as HTMLFormElement).querySelector('[type="submit"]') as HTMLButtonElement; // Find the submit button in the form
    const buttonName = button.firstElementChild as HTMLSpanElement; // Get the text element of the button

    if (!button) throw new Error('No button found in form');

    button.disabled = true; // Disable the button
    buttonName.textContent = 'Saving'; // Change the button text to "Saving"

    // Update user data based on the section of the form being submitted
    switch (section) {
      case 'preferences':
        emulateSaveOnServer(button, null); // Call function to emulate saving preferences
        return;
      case 'personal':
        emulateSaveOnServer(button, {
          ...user,
          firstName: firstName.value,
          lastName: lastName.value,
        }); // Update personal details
        return;
      case 'phone':
        emulateSaveOnServer(button, {
          ...user,
          phoneNumber: phoneNumber.value,
        }); // Update phone number
        return;
      case 'email':
        emulateSaveOnServer(button, {
          ...user,
          emailAddress: emailAddress.value,
        }); // Update email address
        return;
      case 'role':
        emulateSaveOnServer(button, { ...user, role: role.value }); // Update user role
        return;
      default:
        user; // If no valid section is found, return the user data
    }
  }

  // Function to emulate saving data to the server
  async function emulateSaveOnServer(button: HTMLButtonElement, user: User | null) {
    // Hide the error message if it is displayed
    errorMessage(null);

    const parentElement = button.closest('.styled-box__footer') as HTMLDivElement; // Find the parent element of the button
    const buttonName = button.firstElementChild as HTMLSpanElement;

    try {
      // Artificially throw an error for testing purposes
      if (!user) {
        await new Promise((_, reject) => {
          setTimeout(() => {
            buttonName.textContent = 'Save';
            button.disabled = false;
            reject(
              new Error(
                'Server error: We encountered an issue while trying to save your changes. Please check your connection and try again. If the problem persists, contact our support team for assistance.'
              )
            );
          }, 1000);
        });
      }

      // Simulate a delay in saving data
      const timeout = setTimeout(() => {
        buttonName.textContent = 'Save';
        button.disabled = false;
        console.log('updated');
        clearTimeout(timeout);
      }, 1000);
      console.log('get preferences', user, parentElement);
    } catch (error) {
      // Cast error to Error type for message handling
      const errorMessageText = error instanceof Error ? error.message : 'An unknown error occurred';
      // Show the error message
      errorMessage(parentElement, errorMessageText);
    }
  }

  // Add event listeners for form submissions
  preferencesForm.addEventListener('submit', event => updateAccount(event, 'preferences'));
  personalForm.addEventListener('submit', event => updateAccount(event, 'personal'));
  phoneForm.addEventListener('submit', event => updateAccount(event, 'phone'));
  emailForm.addEventListener('submit', event => updateAccount(event, 'email'));
  rolesForm.addEventListener('submit', event => updateAccount(event, 'role'));

  // Function to handle account deletion
  async function deleteAccount(event: Event) {
    // Prevent the default form action
    event.preventDefault();

    try {
      // Log the message regarding account deletion
      console.log('delete account');
    } catch (error) {
      // Log any error to the console
      console.log(error);
    }
  }

  // Add event listener for account deletion
  deleteAccountForm.addEventListener('submit', deleteAccount);
});
