"use strict";
// Add an event listener that triggers when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the <select> element with the ID "navigation-select"
    const navigationSelect = document.getElementById('navigation-select');
    // Check if the <select> element exists
    if (navigationSelect) {
        // Add a "change" event listener to the <select> element
        navigationSelect.addEventListener('change', function () {
            // If the selected value is not empty
            if (this.value) {
                // Redirect the user to the URL specified in the <select> value
                window.location.href = this.value;
            }
        });
    }
});
//# sourceMappingURL=mp.js.map