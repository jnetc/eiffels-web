document.addEventListener('DOMContentLoaded', async () => {
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
  // ВЫБОР СТАНДАРТНОГО ПЛАНА ПО КОЛИЧЕСТВУ РАБОТНИКОВ
  const { default: sectionPricing } = await import('../pricing/sectionPricing.js');
  sectionPricing();

  // ------------------------------
  // ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ / FAQ
  const { default: sectionFAQ } = await import('../FAQ/sectionFAQ.js');
  sectionFAQ();
});
