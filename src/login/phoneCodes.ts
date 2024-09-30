export default function loadPhoneCodes() {
  const countryShortName = document.getElementById('login__short-name') as HTMLDivElement;
  const countrySelect = document.getElementById('login__country-select') as HTMLSelectElement;
  const countryCode = document.getElementById('login__country-code') as HTMLSpanElement;
  const inputPhoneNumber = document.getElementById('login__phone-number');

  countrySelect.addEventListener('change', event => {
    const options = event.target as HTMLSelectElement;

    countryCode.textContent = options.value || '+358';
    inputPhoneNumber?.focus();

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
