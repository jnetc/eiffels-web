export default function sectionPricing() {
    // Элементы для выбора стандартного плана по количеству работников
    // const standardPlan = document.querySelector('.plan-company') as HTMLElement;
    // const workerAmounts = document.getElementById('plan__select-workers') as HTMLSelectElement;
    // const plansButtons = document.querySelectorAll('.plan__button') as NodeListOf<HTMLButtonElement>;
    // // ------------------------------
    // // ВЫБОР СТАНДАРТНОГО ПЛАНА ПО КОЛИЧЕСТВУ РАБОТНИКОВ
    // workerAmounts.addEventListener('change', event => {
    //   const workerAmount = +(event.target as HTMLInputElement).value;
    //   if (workerAmount < 1 || workerAmount > 50) {
    //     workerAmounts.setCustomValidity(workerAmounts.title);
    //   } else {
    //     // Очищаем сообщение об ошибке
    //     workerAmounts.setCustomValidity('');
    //   }
    //   // Показываем сообщение об ошибке
    //   workerAmounts.reportValidity();
    //   const price = (standardPlan.querySelector('.plan__price') as HTMLSpanElement)?.firstElementChild;
    //   if (!price) return;
    // });
    // ------------------------------
    // ОТКРЫВАЕМ ДИАЛОГОВОЕ ОКНО С ВЫБРАННЫМ ПЛАНОМ
    // for (const button of plansButtons) {
    //   button.addEventListener('click', () => {
    //     const plan = button.closest('.pricing__plan');
    //     const planName = plan?.querySelector('.plan__title')?.textContent;
    //     const planPrice = plan?.querySelector('.plan__price')?.firstElementChild?.textContent;
    //     console.log(planName, planPrice, workerAmounts.value);
    //   });
    // }
    // Селекторы элементов
    // const pricingOptions = document.querySelector('.pricing__options') as HTMLElement;
    const yearlyOption = document.getElementById('yearly');
    const monthlyOption = document.getElementById('monthly');
    const individualPrice = document.querySelector('.plan-individuals .price');
    const individualTimeUnit = document.querySelector('.plan-individuals .time-unit');
    const companyPrice = document.querySelector('.plan-company .price');
    const companyTimeUnit = document.querySelector('.plan-company .time-unit');
    const workersInput = document.getElementById('plan__select-workers');
    const whatsappLinkIndividual = document.querySelector('.plan-individuals .plan__button');
    const whatsappLinkCompany = document.querySelector('.plan-company .plan__button');
    // Начальные цены
    const individualYearlyPrice = 31.2;
    const individualMonthlyPrice = 39; // Примерная цена при ежемесячной оплате
    const companyYearlyPrice = 47.2;
    const companyMonthlyPrice = 59.0; // Примерная цена при ежемесячной оплате
    const additionalCostPerWorker = 6.9;
    let individualSelectedPrice;
    let companySelectedPrice;
    // Функция обновления цен
    function updatePrices() {
        // Если выбран yearly, устанавливаем годовые цены
        if (yearlyOption.checked) {
            individualSelectedPrice = individualYearlyPrice;
            individualPrice.textContent = `€${individualSelectedPrice.toFixed(2)}`;
            individualTimeUnit.textContent = '/ annual';
            companySelectedPrice = companyYearlyPrice + getWorkersAdditionalCost();
            companyPrice.textContent = `€${companySelectedPrice.toFixed(2)}`;
            companyTimeUnit.textContent = '/ annual';
        }
        // Если выбран monthly, устанавливаем месячные цены
        else if (monthlyOption.checked) {
            individualSelectedPrice = individualMonthlyPrice;
            individualPrice.textContent = `€${individualSelectedPrice.toFixed(2)}`;
            individualTimeUnit.textContent = '/ monthly';
            companySelectedPrice = companyMonthlyPrice + getWorkersAdditionalCost();
            companyPrice.textContent = `€${companySelectedPrice.toFixed(2)}`;
            companyTimeUnit.textContent = '/ monthly';
        }
        // Обновляем ссылки WhatsApp
        updateWhatsAppLinks(individualSelectedPrice, companySelectedPrice);
    }
    // Функция для расчета дополнительной стоимости работников
    function getWorkersAdditionalCost() {
        const workersCount = Number(workersInput.value) || 0;
        return (workersCount - 0) * additionalCostPerWorker;
    }
    // Валидация и корректировка значения работников
    function validateWorkersInput() {
        let workersCount = Number(workersInput.value);
        // Если введено число меньше 1, устанавливаем 1
        if (Number.isNaN(workersCount) || workersCount < 0) {
            workersCount = 0;
        }
        // Если введено число больше 50, устанавливаем 50
        if (workersCount > 50) {
            workersCount = 50;
        }
        // Обновляем значение input
        workersInput.value = workersCount.toString();
    }
    // Функция обновления ссылки WhatsApp
    function updateWhatsAppLinks(individualPrice, companyPrice) {
        // Формирование текста для Individual
        const individualMessage = `The Individual plan for €${individualPrice.toFixed(2)}.`;
        const individualHref = `https://wa.me/3584578396777?text=${encodeURIComponent(individualMessage)}`;
        whatsappLinkIndividual.href = individualHref;
        // Формирование текста для Company
        const workersCount = workersInput.value || '0';
        if (workersCount === '0') {
            whatsappLinkCompany.href = '#';
            return;
        }
        const companyMessage = `The Company plan for €${companyPrice.toFixed(2)} with ${workersCount} workers.`;
        const companyHref = `https://wa.me/3584578396777?text=${encodeURIComponent(companyMessage)}`;
        whatsappLinkCompany.href = companyHref;
    }
    // Обработчик изменений в input работников
    workersInput.addEventListener('input', () => {
        validateWorkersInput(); // Валидация введенного значения
        // Обновляем цену для плана компании при изменении числа работников
        updatePrices();
    });
    // Обработчики переключения между yearly и monthly
    yearlyOption.addEventListener('change', updatePrices);
    monthlyOption.addEventListener('change', updatePrices);
    // Инициализация цен при загрузке
    updatePrices();
}
//# sourceMappingURL=sectionPricing.js.map