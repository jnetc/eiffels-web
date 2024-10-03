export default function selectLanguage() {
  // Select all language dropdowns with the class 'header__language'
  const selects = document.querySelectorAll('.header__language') as NodeListOf<HTMLSelectElement>;

  // Check if a language cookie exists
  const checkCookieLang = document.cookie.match('lang');

  // Get the current document language from the <html> element
  const docLang = document.documentElement.lang;

  // If the cookie does not exist, set it to the document language
  if (!checkCookieLang) {
    document.cookie = `lang=${docLang};path=/;samesite=strict;secure`;
    return;
  }

  // Add a change event listener to each language select element
  for (const select of selects) {
    select.addEventListener('change', () => {
      // Get the selected value of the language option
      const optionLangValue = select.options[select.selectedIndex].value;

      // Check if the new value is different from the current document language
      if (optionLangValue && optionLangValue !== docLang) {
        // Create a URL object for safely updating the current URL
        const url = new URL(window.location.href);

        // Replace the current language in the URL with the selected language
        const currentUrl = url.href.replace(docLang, optionLangValue);

        // Update the cookie with the new language parameter
        document.cookie = `lang=${optionLangValue};path=/;samesite=strict;secure`;

        // Redirect the user to the new URL
        window.location.href = currentUrl;
      }
    });
  }
}
