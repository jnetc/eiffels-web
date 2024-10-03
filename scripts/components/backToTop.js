// Exported function to enable a "Back to Top" button
export default function backToTop() {
    // Get the button element with the ID 'back-to-top'
    const btn = document.getElementById('back-to-top');
    // Add a click event listener to the button
    btn.addEventListener('click', () => {
        // Scroll to the top of the page instantly
        window.scrollTo({ top: 0, behavior: 'instant' });
    });
}
//# sourceMappingURL=backToTop.js.map