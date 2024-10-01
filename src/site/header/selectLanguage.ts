export default function selectLanguage() {
  const selects = document.querySelectorAll('.header__language') as NodeListOf<HTMLSelectElement>;
  const checkCookieLang = document.cookie.match('lang');
  const docLang = document.documentElement.lang;

  if (!checkCookieLang) {
    document.cookie = `lang=${docLang};path=/;samesite=strict;secure`;
    return;
  }

  for (const select of selects) {
    select.addEventListener('change', () => {
      // Получаем выбранное значение языка из options
      const optionLangValue = select.options[select.selectedIndex].value;

      // Проверяем, есть ли новое значение и отличается ли оно от текущего языка
      if (optionLangValue && optionLangValue !== docLang) {
        // Создаем объект URL для безопасного обновления текущего URL
        const url = new URL(window.location.href);

        // Заменяем текущий язык в URL на выбранный
        const currentUrl = url.href.replace(docLang, optionLangValue);

        // Обновляем cookie с новым языковым параметром
        document.cookie = `lang=${optionLangValue};path=/;samesite=strict;secure`;

        // Перенаправляем пользователя на новый URL
        window.location.href = currentUrl;
      }
    });
  }
}
