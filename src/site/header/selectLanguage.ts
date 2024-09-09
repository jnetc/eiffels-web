export default function selectLanguage() {
  const selects = document.querySelectorAll('.site-language') as NodeListOf<HTMLSelectElement>;
  const checkCookieLang = document.cookie.match('lang');
  const docLang = document.documentElement.lang;

  if (!checkCookieLang) {
    document.cookie = `lang=${docLang};path=/;samesite=strict;secure`;
    return;
  }

  for (const select of selects) {
    select.addEventListener('change', () => {
      const optionLangValue = select.options[select.selectedIndex].value;
      const currentUrl = window.location.href.replace(docLang, optionLangValue);
      document.cookie = `lang=${optionLangValue};path=/;samesite=strict;secure`;
      if (optionLangValue) {
        window.location.href = currentUrl;
      }
    });
  }
}
