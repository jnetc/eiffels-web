"use strict";
document.addEventListener('DOMContentLoaded', async () => {
    // ------------------------------
    // MOBILE MENU BUTTON AND MENU CONTAINER
    const { default: navigation } = await import('../header/navigation.js');
    navigation();
    // ------------------------------
    // DROPDOWN MENU FOR COUNTRY CODE SELECTION IN THE HERO SECTION
    const { default: loadPhoneCodes } = await import('../../login/phoneCodes.js');
    loadPhoneCodes();
    // ------------------------------
    // PHONE NUMBER INPUT FIELD IN THE HERO SECTION
    const { default: handlePhoneNumber } = await import('../../login/login.js');
    handlePhoneNumber(INDEX); // Assuming INDEX is defined somewhere in your code
    // ------------------------------
    // STANDARD PLAN SELECTION BY NUMBER OF EMPLOYEES
    const { default: sectionPricing } = await import('../pricing/sectionPricing.js');
    sectionPricing();
    // ------------------------------
    // FREQUENTLY ASKED QUESTIONS / FAQ
    const { default: sectionFAQ } = await import('../FAQ/sectionFAQ.js');
    sectionFAQ();
});
//# sourceMappingURL=sectionHeroUnlogged.js.map