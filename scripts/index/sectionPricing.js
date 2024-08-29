export default function sectionPricing() {
    // Элементы для выбора стандартного плана по количеству работников
    const standardPlan = document.querySelector('.plan-standard');
    const workerAmounts = document.getElementById('plan__select-workers');
    // ------------------------------
    // ВЫБОР СТАНДАРТНОГО ПЛАНА ПО КОЛИЧЕСТВУ РАБОТНИКОВ
    workerAmounts.addEventListener('change', event => {
        var _a;
        const workerAmount = event.target.value;
        const price = (_a = standardPlan.querySelector('.plan__price')) === null || _a === void 0 ? void 0 : _a.firstElementChild;
        if (!price)
            return;
        // Обновляем цену в зависимости от выбранного количества работников
        switch (workerAmount) {
            case '11-20':
                price.textContent = '€350';
                break;
            case '21-30':
                price.textContent = '€750';
                break;
            case '31-40':
                price.textContent = '€1100';
                break;
            case '41-50':
                price.textContent = '€1700';
                break;
            default:
                price.textContent = '€100';
                break;
        }
    });
}
//# sourceMappingURL=sectionPricing.js.map