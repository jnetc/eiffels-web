"use strict";
document.addEventListener('DOMContentLoaded', async () => {
    // ------------------------------
    // LANGUAGE
    const { default: selectLanguage } = await import('./index/selectLanguage.js');
    selectLanguage();
    // ------------------------------
    // КНОПКА МОБИЛЬНОГО МЕНЮ И КОНТЕЙНЕР МЕНЮ
    const { default: navigation } = await import('./index/navigation.js');
    navigation();
    // ------------------------------
    // ВЫБОР СТАНДАРТНОГО ПЛАНА ПО КОЛИЧЕСТВУ РАБОТНИКОВ
    const { default: sectionPricing } = await import('./index/sectionPricing.js');
    sectionPricing();
    // ------------------------------
    // ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ / FAQ
    const { default: sectionFAQ } = await import('./index/sectionFAQ.js');
    sectionFAQ();
    // ------------------------------
    // BACK TO TOP
    const { default: backToTop } = await import('./components/backToTop.js');
    backToTop();
});
//# sourceMappingURL=logged.js.map