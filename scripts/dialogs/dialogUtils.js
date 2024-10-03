/**
 * Closes the dialog and restores the ability to scroll the page.
 *
 * @param {HTMLDialogElement} dialog - The dialog element that needs to be closed.
 */
export function closeDialog(dialog) {
    // Remove the overflow style to restore page scrolling
    document.body.removeAttribute('style');
    // Close the dialog
    dialog.close();
}
/**
 * Opens the dialog and disables page scrolling.
 *
 * @param {HTMLDialogElement} dialog - The dialog element that needs to be opened.
 */
export function openDialog(dialog) {
    // Disable page scrolling by adding the overflow: hidden style
    document.body.style.overflow = 'hidden';
    // Open the dialog in modal mode
    dialog.showModal();
}
//# sourceMappingURL=dialogUtils.js.map