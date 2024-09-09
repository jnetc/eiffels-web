document.addEventListener('DOMContentLoaded', async () => {
  // ------------------------------
  // LANGUAGE
  const { default: selectLanguage } = await import('../header/selectLanguage.js');
  selectLanguage();

  // ------------------------------
  // КНОПКА МОБИЛЬНОГО МЕНЮ И КОНТЕЙНЕР МЕНЮ
  const { default: navigation } = await import('../header/navigation.js');
  navigation();

  // ------------------------------
  // ВЫПАДАЮЩЕЕ МЕНЮ ВЫБОРА КОДА СТРАНЫ РАЗДЕЛЕ HERO
  const { default: loadPhoneCodes } = await import('../../login/phoneCodes.js');
  loadPhoneCodes();

  // ------------------------------
  // ПОЛЕ ДЛЯ ВВОДА НОМЕРА ТЕЛЕФОНА В РАЗДЕЛЕ HERO
  const { default: handlePhoneNumber } = await import('../../login/login.js');
  handlePhoneNumber(INDEX);

  // ------------------------------
  // ПРОМО РОЛИК В РАЗДЕЛЕ OVERVIEW
  const { default: playAndPauseVideo } = await import('./sectionOverview.js');
  playAndPauseVideo();

  // ------------------------------
  // ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ / FAQ
  const { default: sectionFAQ } = await import('../FAQ/sectionFAQ.js');
  sectionFAQ();

  // ------------------------------
  // BACK TO TOP
  const { default: backToTop } = await import('../../components/backToTop.js');
  backToTop();
});
