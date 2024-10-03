// Add an event listener that triggers when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', async () => {
  // ------------------------------
  // MOBILE MENU BUTTON AND MENU CONTAINER
  const { default: navigation } = await import('../header/navigation.js');
  navigation();

  // ------------------------------
  // SELECTING THE DEFAULT PLAN BASED ON THE NUMBER OF EMPLOYEES
  const { default: sectionPricing } = await import('../pricing/sectionPricing.js');
  sectionPricing();

  // ------------------------------
  // FREQUENTLY ASKED QUESTIONS / FAQ
  const { default: sectionFAQ } = await import('../FAQ/sectionFAQ.js');
  sectionFAQ();
});
