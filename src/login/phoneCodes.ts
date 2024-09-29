export default function loadPhoneCodes() {
  // const buttonCountryCode = document.querySelector('.login__country-button') as HTMLElement;
  // const optionElements = document.querySelectorAll('.option') as NodeListOf<HTMLElement>;
  // const phoneCode = document.getElementById('login__phone-code') as HTMLSpanElement;
  // const wrapper = document.querySelector('.options-wrapper') as HTMLDivElement;
  // buttonCountryCode.addEventListener('click', () => {
  //   wrapper.hidden = false;
  // });
  // for (const option of optionElements) {
  //   option.addEventListener('click', () => {
  //     const countryShortName = option.querySelector('.short')?.textContent || 'FI';
  //     const countryPhoneCode = option.querySelector('.code')?.textContent || '+358';
  //     (buttonCountryCode.querySelector('span') as HTMLSpanElement).textContent = countryShortName;
  //     phoneCode.textContent = countryPhoneCode;
  //     wrapper.hidden = true;
  //   });
  // }

  const buttonCountryCode = document.getElementById('login__select-code') as HTMLButtonElement;
  const optionsWrapper = document.querySelector('.options-wrapper') as HTMLDivElement;
  const options = document.querySelectorAll('.option') as NodeListOf<HTMLDivElement>;
  const phoneCodeElement = document.getElementById('login__phone-code') as HTMLSpanElement;
  // const inputPhoneField = document.getElementById('login__phone-number') as HTMLInputElement;
  let currentIndex = -1;
  // Открытие/закрытие выпадающего списка
  // Открытие/закрытие выпадающего списка при клике и нажатии клавиш
  buttonCountryCode.addEventListener('click', toggleDropdown);
  buttonCountryCode.addEventListener('keydown', e => {
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
    const isExpanded = buttonCountryCode.getAttribute('aria-expanded') === 'true';
    buttonCountryCode.setAttribute('aria-expanded', `${!isExpanded}`);
    optionsWrapper.hidden = isExpanded;

    if (!isExpanded) {
      currentIndex = 0;
      options[currentIndex].focus();
    } else {
      buttonCountryCode.focus();
    }
  }

  // Закрытие списка при клике за его пределами
  document.addEventListener('click', event => {
    const el = event.target as HTMLElement;
    // Проверяем, был ли клик вне selectBox или optionsWrapper
    if (!buttonCountryCode.contains(el) && !optionsWrapper.contains(el)) {
      closeDropdown();
      document.removeEventListener('click', () => {});
    }
  });
  // Закрытие выпадающего списка
  function closeDropdown() {
    optionsWrapper.hidden = true;
    buttonCountryCode.setAttribute('aria-expanded', 'false');
  }
  // Функция выбора опции
  function selectOption(option: HTMLDivElement) {
    const shortCode = option.dataset.short;
    const phoneCode = option.dataset.code;
    (buttonCountryCode.querySelector('span') as HTMLSpanElement).textContent = shortCode || 'FI';

    phoneCodeElement.textContent = phoneCode || '+358';
    currentIndex = Array.from(options).indexOf(option);
  }
  ////////////////////////////////////
  // const countryCodeSelect = document.getElementById('login__select-code') as HTMLSelectElement;
  // const phoneCodeSpan = document.getElementById('login__phone-code') as HTMLSpanElement;
  // const phoneNumberInput = document.getElementById('login__phone-number') as HTMLInputElement;
  // const countryCode = document.getElementById('login__select-code') as HTMLSelectElement;
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
