export default function loadPhoneCodes() {
  interface ICountryPhoneCodes {
    name: string;
    code: string;
    emoji: string;
    unicode: string;
    dial_code: string;
  }

  const country = {
    name: 'Finland',
    code: 'FI',
    emoji: '🇫🇮',
    unicode: 'U+1F1EB U+1F1EE',
    dial_code: '+358',
  };

  const countryCode = document.getElementById('login__country-code') as HTMLSelectElement;
  const phoneCode = document.getElementById('login__phone-code') as HTMLSpanElement;

  async function loadPhoneCodes() {
    // const country = navigator.geolocation.getCurrentPosition(pos => {
    //   console.log('country', pos.coords);
    // });
    async function getJson() {
      try {
        const response = await fetch(`${ROOT_PATH}public/json/phone_code.json`);

        // Проверяем, что запрос был успешным (статус 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status} _ ${ROOT_PATH}`);
        }

        const data = (await response.json()) as ICountryPhoneCodes[];
        return data;
      } catch (error) {
        console.error('Failed to fetch phone codes:', error);
        return [country];
      }
    }

    const data = (await getJson()) || [];

    for (const country of data) {
      const option = document.createElement('option');

      option.value = country.dial_code;
      option.textContent = `${country.emoji} ${country.name} (${country.dial_code})`;

      if (country.code === 'FI') {
        option.selected = true; // Устанавливаем выбранный элемент
        // Вставляем элемент с кодом 'FI' в начало списка
        countryCode.insertAdjacentElement('afterbegin', option);
        phoneCode.textContent = country.dial_code;
      } else {
        // Вставляем все остальные элементы в конец списка
        countryCode.insertAdjacentElement('beforeend', option);
      }
    }
  }

  loadPhoneCodes();

  countryCode.addEventListener('change', event => {
    const selectElem = (event.target as HTMLSelectElement).value;

    if (selectElem) {
      (document.getElementById('login__phone-number') as HTMLInputElement).focus();
      phoneCode.textContent = selectElem;
    }
  });
}
