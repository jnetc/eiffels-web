document.addEventListener('DOMContentLoaded', async () => {
  // ------------------------------
  // ВЫБОР СТАНДАРТНОГО ПЛАНА ПО КОЛИЧЕСТВУ РАБОТНИКОВ
  const { default: sectionPricing } = await import('./sectionPricing.js');
  sectionPricing();

  // ------------------------------
  // ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ / FAQ
  const { default: sectionFAQ } = await import('../FAQ/sectionFAQ.js');
  sectionFAQ();
});
