"use strict";
document.addEventListener('DOMContentLoaded', async () => {
    // ------------------------------
    // КНОПКА МОБИЛЬНОГО МЕНЮ И КОНТЕЙНЕР МЕНЮ
    const { default: navigation } = await import('./index/navigation.js');
    navigation();
    // ------------------------------
    // ВЫПАДАЮЩЕЕ МЕНЮ ВЫБОРА КОДА СТРАНЫ РАЗДЕЛЕ HERO
    const { default: loadPhoneCodes } = await import('./login/phoneCodes.js');
    loadPhoneCodes();
    // ------------------------------
    // ПОЛЕ ДЛЯ ВВОДА НОМЕРА ТЕЛЕФОНА В РАЗДЕЛЕ HERO
    const { default: handlePhoneNumber } = await import('./login/login.js');
    handlePhoneNumber(INDEX);
    // ------------------------------
    // ПРОМО РОЛИК В РАЗДЕЛЕ OVERVIEW
    const { default: playAndPauseVideo } = await import('./index/sectionOverview.js');
    playAndPauseVideo();
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
//# sourceMappingURL=index.js.map