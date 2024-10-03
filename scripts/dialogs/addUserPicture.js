"use strict";
document.addEventListener('DOMContentLoaded', async () => {
    // Dynamic import of modules to use functions for opening and closing dialogs
    const { openDialog, closeDialog } = await import('./dialogUtils.js');
    // Getting UI elements by their ID
    const openDialogAUP = document.getElementById('open__aup-dialog'); // Button to open the dialog
    const dialogAUP = document.getElementById('aup-dialog'); // The dialog itself
    const formAUP = document.getElementById('aup__form'); // Form inside the dialog
    // Image for preview in the dialog
    const imageUrl = document.getElementById('aup__photo-display');
    // Main profile picture
    const profilePicture = document.getElementById('profile__picture');
    // Input field for file selection
    const file = document.querySelector('#aup__picture-file');
    // Error message
    const { default: errorMessage } = await import('../components/errorMessage.js');
    // Event handler for opening the dialog when clicking the button
    openDialogAUP.addEventListener('click', () => {
        // Copy the profile picture from the main UI and display it in the dialog
        imageUrl.src = profilePicture.src;
        // Open the dialog
        openDialog(dialogAUP);
    });
    // Function to close the dialog when clicking the "Cancel" or "Close" button
    function cancelOrCloseDialogAUP() {
        // Clear the selected file and image
        file.value = '';
        imageUrl.src = '';
        // Hide the error message if it is displayed
        errorMessage(null);
        // Close the dialog
        closeDialog(dialogAUP);
    }
    // Asynchronous function to handle image file changes
    async function getImageData() {
        // Add a "change" event listener to the document
        document.addEventListener('change', (event) => {
            var _a;
            // Get the selected file from the input
            const file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
            // If a file is selected
            if (file) {
                const reader = new FileReader(); // Create a FileReader object to read the file
                // When the file is read, set it as the source for the image preview
                reader.onload = (e) => {
                    var _a;
                    // Check that the file read result is not null or undefined
                    if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                        imageUrl.src = e.target.result; // Set the image source for preview
                    }
                };
                // Read the selected file as a Data URL (base64)
                reader.readAsDataURL(file);
            }
            else {
                // Show an error message
                errorMessage(formAUP, 'The file you uploaded is either invalid or exceeds the maximum allowed size. Please upload a valid file that meets the size requirements.');
            }
        });
    }
    // Add an event handler for file selection and image preview
    file.addEventListener('click', getImageData);
    // Event handler for form submission
    formAUP.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form behavior
        const button = event.target.querySelector('button');
        const buttonName = button.querySelector('.btn-text');
        // Disable the input and button, and change the button text to indicate the upload is in progress
        file.disabled = true;
        button.disabled = true;
        buttonName.textContent = 'Uploading Image';
        // Simulate image upload to the server with a 3-second delay
        const timeout = setTimeout(() => {
            // If the image is successfully uploaded, update the profile picture
            if (imageUrl.src) {
                profilePicture.src = imageUrl.src; // Update the main profile image
            }
            // Close the dialog and reset the form
            cancelOrCloseDialogAUP();
            // Restore the original state of the button and input
            buttonName.textContent = 'Upload Image';
            file.disabled = false;
            button.disabled = false;
            clearTimeout(timeout);
        }, 3000); // 3-second delay
    });
});
//# sourceMappingURL=addUserPicture.js.map