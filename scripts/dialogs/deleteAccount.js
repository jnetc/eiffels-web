"use strict";
document.addEventListener('DOMContentLoaded', async () => {
    // Dynamic import of utilities for working with dialogs and functions for token revocation
    const { closeDialog, openDialog } = await import('../dialogs/dialogUtils.js');
    const { revokeTokken } = await import('../emulate_user_access.js');
    // Elements for interacting with the account deletion form
    const openDialogDA = document.getElementById('open__da-dialog');
    const dialogDA = document.getElementById('da-dialog');
    const formDA = document.getElementById('da__form');
    const cancelDialog = dialogDA.querySelector('#da-dialog__cancel');
    // Find all elements with the class "form__reason-delete"
    const inputs = [...dialogDA.querySelectorAll('.form__reason-delete')];
    // Error message
    const { default: errorMessage } = await import('../components/errorMessage.js');
    // Event handler for opening the dialog when clicking the button
    openDialogDA.addEventListener('click', () => {
        // Call the function to open the dialog
        openDialog(dialogDA);
    });
    // Function to close the dialog when canceled or closed
    function cancelOrCloseDialogDA() {
        // Find the element for displaying an error
        // Uncheck all checkboxes
        for (const el of inputs) {
            const radioBtn = el.querySelector('input');
            radioBtn.checked = false;
        }
        // Hide the error message
        errorMessage(null);
        // Close the dialog
        closeDialog(dialogDA);
    }
    // Add event handlers for the close and cancel buttons in the dialog
    cancelDialog.addEventListener('click', cancelOrCloseDialogDA);
    // Function to handle account deletion form submission
    function deleteThisAccount(event) {
        var _a;
        // Prevent default form behavior
        event.preventDefault();
        // Find the selected checkbox with the reason for account deletion
        const selectedElement = inputs.find(el => {
            const radioBtn = el.querySelector('input');
            if (radioBtn.checked)
                return el;
        });
        // Hide the error message
        if (selectedElement) {
            errorMessage(null);
        }
        // If no reason is selected, display an error message
        if (!selectedElement) {
            errorMessage(formDA, 'Please select at least one option. This field is required and must be completed to proceed.');
            return;
        }
        // Get the text of the selected reason
        const reason = ((_a = selectedElement.querySelector('label')) === null || _a === void 0 ? void 0 : _a.textContent) || '';
        // Log the selected reason (this log can be removed after verification)
        console.log(reason);
        // Redirect the user to the main page after account deletion
        url.pathname = INDEX_PATH;
        window.location.href = url.toString();
        // Revoke the user's token (implementation of the function in another module)
        revokeTokken();
    }
    // Add event handler for account deletion form submission
    formDA.addEventListener('submit', deleteThisAccount);
    // Add event handlers for changing the state of the checkboxes
    for (const input of inputs) {
        input.addEventListener('change', event => {
            const radioBtn = event.target;
            // Hide the error message when the state of the checkbox changes
            if (radioBtn.checked) {
                errorMessage(null);
            }
        });
    }
});
//# sourceMappingURL=deleteAccount.js.map