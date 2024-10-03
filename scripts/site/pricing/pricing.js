"use strict";
// Add an event listener that triggers when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', async () => {
    // ------------------------------
    // LANGUAGE
    const { default: selectLanguage } = await import('../header/selectLanguage.js');
    selectLanguage(); // Call the function to handle language selection
    // ------------------------------
    // MOBILE MENU BUTTON AND MENU CONTAINER
    const { default: navigation } = await import('../header/navigation.js');
    navigation(); // Call the function to initialize navigation components
    // ------------------------------
    // DEFAULT PRICING PLAN SELECTION BASED ON NUMBER OF EMPLOYEES
    const { default: sectionPricing } = await import('./sectionPricing.js');
    sectionPricing(); // Call the function to set up pricing section
    // ------------------------------
    // FREQUENTLY ASKED QUESTIONS / FAQ
    const { default: sectionFAQ } = await import('../FAQ/sectionFAQ.js');
    sectionFAQ(); // Call the function to initialize FAQ section
    // ------------------------------
    // BACK TO TOP BUTTON
    const { default: backToTop } = await import('../../components/backToTop.js');
    backToTop(); // Call the function to set up the back-to-top button
});
//# sourceMappingURL=pricing.js.map