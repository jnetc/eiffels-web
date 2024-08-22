document.addEventListener('DOMContentLoaded', async () => {
  // ------------------------------
  // КНОПКА МОБИЛЬНОГО МЕНЮ И КОНТЕЙНЕР МЕНЮ
  const { default: navigation } = await import('./navigation.js');
  navigation();

  // ------------------------------
  // ВЫБОР СТАНДАРТНОГО ПЛАНА ПО КОЛИЧЕСТВУ РАБОТНИКОВ
  const { default: sectionPricing } = await import('./sectionPricing.js');
  sectionPricing();

  // ------------------------------
  // ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ / FAQ
  const { default: sectionFAQ } = await import('./sectionFAQ.js');
  sectionFAQ();
});
