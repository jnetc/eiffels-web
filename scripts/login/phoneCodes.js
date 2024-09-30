export default function loadPhoneCodes() {
    const countryShortName = document.getElementById('login__short-name');
    const countrySelect = document.getElementById('login__country-select');
    const countryCode = document.getElementById('login__country-code');
    const inputPhoneNumber = document.getElementById('login__phone-number');
    countrySelect.addEventListener('change', event => {
        const options = event.target;
        countryCode.textContent = options.value || '+358';
        inputPhoneNumber === null || inputPhoneNumber === void 0 ? void 0 : inputPhoneNumber.focus();
        for (const option of options) {
            if (option.selected) {
                countryShortName.textContent = option.dataset.short || 'FI';
                return;
            }
        }
    });
    // for (const option of options) {
    //   if (option.selected) {
    //     countryCode.textContent = option.value || '+358';
    //     countryShortName.textContent = option.dataset.short || 'FI';
    //     return;
    //   }
    // }
}
//# sourceMappingURL=phoneCodes.js.map