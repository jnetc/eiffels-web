export default function loadPhoneCodes() {
    const countryShortName = document.getElementById('login__short-name');
    const countrySelect = document.getElementById('login__country-select');
    const countryCode = document.getElementById('login__country-code');
    const inputPhoneNumber = document.getElementById('login__phone-number');
    // Add an event listener for when the user selects a different country from the dropdown
    countrySelect.addEventListener('change', () => {
        // Get the selected option directly via value and dataset
        const option = countrySelect.options[countrySelect.selectedIndex];
        // Update the text of countryCode with a fallback value of '+358' if option.value is empty
        countryCode.textContent = option.value || '+358';
        // Update the text of countryShortName with a fallback value of 'FI' if dataset.short is missing
        countryShortName.textContent = option.dataset.short || 'FI';
        // If inputPhoneNumber exists, set focus on it
        inputPhoneNumber.focus();
    });
}
//# sourceMappingURL=phoneCodes.js.map