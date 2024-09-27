export default function loadPhoneCodes() {
  const selectBox = document.querySelector('.select-box') as HTMLElement;
  const optionElements = document.querySelectorAll('.option') as NodeListOf<HTMLElement>;
  const phoneCode = document.getElementById('login__phone-code') as HTMLSpanElement;

  selectBox.addEventListener('click', () => {
    console.log('click');

    document.querySelector('.options-wrapper')?.classList.toggle('show');
  });

  // document.querySelectorAll('.option').forEach(option => {
  //   option.addEventListener('click', function () {
  //     document.querySelector('.select-box').textContent = this.textContent;
  //     document.querySelector('.options').classList.remove('show');
  //   });
  // });

  for (const option of optionElements) {
    option.addEventListener('click', () => {
      const countryShortName = option.querySelector('.short')?.textContent || 'FI';
      const countryPhoneCode = option.querySelector('.code')?.textContent || '+358';

      selectBox.textContent = countryShortName;
      phoneCode.textContent = countryPhoneCode;

      console.log(selectBox.textContent, countryShortName);

      document.querySelector('.options-wrapper')?.classList.remove('show');
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
