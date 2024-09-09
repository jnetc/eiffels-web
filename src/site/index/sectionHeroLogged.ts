document.addEventListener('DOMContentLoaded', async () => {
  // ------------------------------
  // КНОПКА МОБИЛЬНОГО МЕНЮ И КОНТЕЙНЕР МЕНЮ
  const { default: navigation } = await import('../header/navigation.js');
  navigation();

  // ------------------------------
  // ВЫБОР СТАНДАРТНОГО ПЛАНА ПО КОЛИЧЕСТВУ РАБОТНИКОВ
  const { default: sectionPricing } = await import('../pricing/sectionPricing.js');
  sectionPricing();

  // ------------------------------
  // ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ / FAQ
  const { default: sectionFAQ } = await import('../FAQ/sectionFAQ.js');
  sectionFAQ();
});
