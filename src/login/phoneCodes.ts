export default function loadPhoneCodes() {
  const countryShortName = document.getElementById('login__short-name') as HTMLDivElement;
  const countrySelect = document.getElementById('login__country-select') as HTMLSelectElement;
  const countryCode = document.getElementById('login__country-code') as HTMLSpanElement;
  const inputPhoneNumber = document.getElementById('login__phone-number') as HTMLInputElement;

  countrySelect.addEventListener('change', () => {
    // Получаем выбранную опцию напрямую через value и dataset
    const option = countrySelect.options[countrySelect.selectedIndex];

    // Обновляем текст countryCode с fallback значением '+358', если option.value пустой
    countryCode.textContent = option.value || '+358';

    // Обновляем текст countryShortName с fallback значением 'FI', если dataset.short отсутствует
    countryShortName.textContent = option.dataset.short || 'FI';

    // Если поле ввода inputPhoneNumber существует, ставим на него фокус
    inputPhoneNumber.focus();
  });
}
