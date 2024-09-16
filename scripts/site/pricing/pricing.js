"use strict";
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
    // ВЫБОР СТАНДАРТНОГО ПЛАНА ПО КОЛИЧЕСТВУ РАБОТНИКОВ
    const { default: sectionPricing } = await import('./sectionPricing.js');
    sectionPricing();
    // ------------------------------
    // ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ / FAQ
    const { default: sectionFAQ } = await import('../FAQ/sectionFAQ.js');
    sectionFAQ();
});
//# sourceMappingURL=pricing.js.map