export default function sectionPricing() {
    // Элементы для выбора стандартного плана по количеству работников
    const standardPlan = document.querySelector('.plan-company');
    const workerAmounts = document.getElementById('plan__select-workers');
    const plansButtons = document.querySelectorAll('.plan__button');
    // ------------------------------
    // ВЫБОР СТАНДАРТНОГО ПЛАНА ПО КОЛИЧЕСТВУ РАБОТНИКОВ
    workerAmounts.addEventListener('change', event => {
        var _a;
        const workerAmount = +event.target.value;
        if (workerAmount < 1 || workerAmount > 50) {
            workerAmounts.setCustomValidity(workerAmounts.title);
        }
        else {
            // Очищаем сообщение об ошибке
            workerAmounts.setCustomValidity('');
        }
        // Показываем сообщение об ошибке
        workerAmounts.reportValidity();
        const price = (_a = standardPlan.querySelector('.plan__price')) === null || _a === void 0 ? void 0 : _a.firstElementChild;
        if (!price)
            return;
        // Обновляем цену в зависимости от выбранного количества работников
        // switch (workerAmount) {
        //   case '11-20':
        //     price.textContent = '€350';
        //     break;
        //   case '21-30':
        //     price.textContent = '€750';
        //     break;
        //   case '31-40':
        //     price.textContent = '€1100';
        //     break;
        //   case '41-50':
        //     price.textContent = '€1700';
        //     break;
        //   default:
        //     price.textContent = '€100';
        //     break;
        // }
    });
    // ------------------------------
    // ОТКРЫВАЕМ ДИАЛОГОВОЕ ОКНО С ВЫБРАННЫМ ПЛАНОМ
    for (const button of plansButtons) {
        button.addEventListener('click', () => {
            var _a, _b, _c;
            const plan = button.closest('.pricing__plan');
            const planName = (_a = plan === null || plan === void 0 ? void 0 : plan.querySelector('.plan__title')) === null || _a === void 0 ? void 0 : _a.textContent;
            const planPrice = (_c = (_b = plan === null || plan === void 0 ? void 0 : plan.querySelector('.plan__price')) === null || _b === void 0 ? void 0 : _b.firstElementChild) === null || _c === void 0 ? void 0 : _c.textContent;
            console.log(planName, planPrice, workerAmounts.value);
        });
    }
}
//# sourceMappingURL=sectionPricing.js.map