"use strict";
document.addEventListener('DOMContentLoaded', async () => {
    // Get all <dialog> elements on the page
    const dialogs = document.querySelectorAll('dialog');
    // Dynamically import the module containing the closeDialog function
    const { closeDialog } = await import('./dialogUtils.js');
    // Iterate over each found <dialog> element
    for (const dialog of dialogs) {
        // Find the element inside <dialog> that has the attribute [data-button="close"]
        // and add a click event listener
        const closeBtn = dialog.querySelector('[data-button="close"]');
        if (!closeBtn)
            throw new Error('Close button not found');
        closeBtn.addEventListener('click', () => {
            // On click, call the closeDialog function, passing the current <dialog>
            closeDialog(dialog);
        });
    }
});
//# sourceMappingURL=dialog.js.map