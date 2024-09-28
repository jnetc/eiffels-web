export default function loadPhoneCodes() {
  // const selectBox = document.querySelector('.login__country-button') as HTMLElement;
  // const optionElements = document.querySelectorAll('.option') as NodeListOf<HTMLElement>;
  // const phoneCode = document.getElementById('login__phone-code') as HTMLSpanElement;
  // const wrapper = document.querySelector('.options-wrapper') as HTMLDivElement;
  // selectBox.addEventListener('click', () => {
  //   wrapper.hidden = false;
  // });
  // for (const option of optionElements) {
  //   option.addEventListener('click', () => {
  //     const countryShortName = option.querySelector('.short')?.textContent || 'FI';
  //     const countryPhoneCode = option.querySelector('.code')?.textContent || '+358';
  //     (selectBox.querySelector('span') as HTMLSpanElement).textContent = countryShortName;
  //     phoneCode.textContent = countryPhoneCode;
  //     wrapper.hidden = true;
  //   });
  // }

  const selectBox = document.querySelector('#login__country-code') as HTMLButtonElement;
  const optionsWrapper = document.querySelector('.options-wrapper') as HTMLDivElement;
  const options = document.querySelectorAll('.option') as NodeListOf<HTMLDivElement>;
  const phoneCodeElement = document.getElementById('login__phone-code') as HTMLSpanElement;
  let currentIndex = -1;
  // Открытие/закрытие выпадающего списка
  // Открытие/закрытие выпадающего списка при клике и нажатии клавиш
  selectBox.addEventListener('click', toggleDropdown);
  selectBox.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleDropdown();
    }
  });

  // Перехват Tab и перемещение по списку
  optionsWrapper.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      currentIndex = (currentIndex + 1) % options.length;
      options[currentIndex].focus();
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      currentIndex = (currentIndex - 1 + options.length) % options.length;
      options[currentIndex].focus();
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      selectOption(options[currentIndex]);
      closeDropdown();
    }
    if (e.key === 'Escape') {
      closeDropdown();
    }
  });
  // Клик по опции для выбора
  for (const option of options) {
    option.addEventListener('click', () => {
      selectOption(option);
      closeDropdown();
    });
  }

  function toggleDropdown() {
    const isExpanded = selectBox.getAttribute('aria-expanded') === 'true';
    selectBox.setAttribute('aria-expanded', `${!isExpanded}`);
    optionsWrapper.hidden = isExpanded;

    if (!isExpanded) {
      currentIndex = 0;
      options[currentIndex].focus();
    } else {
      selectBox.focus();
    }
  }
  // Закрытие выпадающего списка
  function closeDropdown() {
    optionsWrapper.hidden = true;
    selectBox.setAttribute('aria-expanded', 'false');
    selectBox.focus();
  }
  // Функция выбора опции
  function selectOption(option: HTMLDivElement) {
    const shortCode = option.querySelector('.short')?.textContent;
    const phoneCode = option.querySelector('.code')?.textContent;
    (selectBox.querySelector('span') as HTMLSpanElement).textContent = shortCode || 'FI';
    console.log();

    phoneCodeElement.textContent = phoneCode || '+358';
    currentIndex = Array.from(options).indexOf(option);
  }
  ////////////////////////////////////
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
