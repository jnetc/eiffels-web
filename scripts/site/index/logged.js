"use strict";
document.addEventListener('DOMContentLoaded', async () => {
    // ------------------------------
    // LANGUAGE
    // Import the language selection module and call its default function
    const { default: selectLanguage } = await import('../header/selectLanguage.js');
    selectLanguage();
    // ------------------------------
    // MOBILE MENU BUTTON AND MENU CONTAINER
    // Import the navigation module for handling the mobile menu and call its default function
    const { default: navigation } = await import('../header/navigation.js');
    navigation();
    // ------------------------------
    // SELECTION OF DEFAULT PLAN BY NUMBER OF EMPLOYEES
    // The section for pricing has been commented out; you can uncomment it if needed.
    // const { default: sectionPricing } = await import('../pricing/sectionPricing.js');
    // sectionPricing();
    // ------------------------------
    // FREQUENTLY ASKED QUESTIONS / FAQ
    // Import the FAQ section module and call its default function
    const { default: sectionFAQ } = await import('../FAQ/sectionFAQ.js');
    sectionFAQ();
    // ------------------------------
    // BACK TO TOP
    // Import the back-to-top functionality and call its default function
    const { default: backToTop } = await import('../../components/backToTop.js');
    backToTop();
});
//# sourceMappingURL=logged.js.map