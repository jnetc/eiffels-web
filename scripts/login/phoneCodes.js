export default function loadPhoneCodes() {
    const selectBox = document.querySelector('.select-box');
    const optionElements = document.querySelectorAll('.option');
    const phoneCode = document.getElementById('login__phone-code');
    selectBox.addEventListener('click', () => {
        var _a;
        console.log('click');
        (_a = document.querySelector('.options-wrapper')) === null || _a === void 0 ? void 0 : _a.classList.toggle('show');
    });
    // document.querySelectorAll('.option').forEach(option => {
    //   option.addEventListener('click', function () {
    //     document.querySelector('.select-box').textContent = this.textContent;
    //     document.querySelector('.options').classList.remove('show');
    //   });
    // });
    for (const option of optionElements) {
        option.addEventListener('click', () => {
            var _a, _b, _c;
            const countryShortName = ((_a = option.querySelector('.short')) === null || _a === void 0 ? void 0 : _a.textContent) || 'FI';
            const countryPhoneCode = ((_b = option.querySelector('.code')) === null || _b === void 0 ? void 0 : _b.textContent) || '+358';
            selectBox.textContent = countryShortName;
            phoneCode.textContent = countryPhoneCode;
            console.log(selectBox.textContent, countryShortName);
            (_c = document.querySelector('.options-wrapper')) === null || _c === void 0 ? void 0 : _c.classList.remove('show');
        });
    }
    // const countryCodeSelect = document.getElementById('login__country-code') as HTMLSelectElement;
    // const phoneCodeSpan = document.getElementById('login__phone-code') as HTMLSpanElement;
    // const phoneNumberInput = document.getElementById('login__phone-number') as HTMLInputElement;
    // const countryCode = document.getElementById('login__country-code') as HTMLSelectElement;
    // Функция для обновления отображения выбранной опции
    // function updateSelectedOption() {
    //   const selectedOption = countryCodeSelect.options[countryCodeSelect.selectedIndex];
    //   // const shortCode = selectedOption.getAttribute('data-short');
    //   // countryCodeSelect.options[countryCodeSelect.selectedIndex].text = shortCode || 'FI';
    //   phoneCodeSpan.textContent = selectedOption.value.split('-')[0];
    // }
    // // Функция для восстановления текста невыбранных опций
    // function restoreOptionText() {
    //   for (const option of countryCodeSelect.options) {
    //     if (option.selected) return;
    //     const country = option.getAttribute('data-country');
    //     option.text = country || '(+358) Finland';
    //   }
    //   // Array.from(countryCodeSelect.options).forEach(option => {
    //   //   if (option.selected) return;
    //   //   const country = option.getAttribute('data-country');
    //   //   option.text = country;
    //   // });
    // }
    // Инициализация при загрузке страницы
    // updateSelectedOption();
    // Обработчик изменения выбора
    // countryCodeSelect.addEventListener('change', () => {
    //   // restoreOptionText();
    //   updateSelectedOption();
    // });
}
//# sourceMappingURL=phoneCodes.js.map