export default function sectionPricing() {
  // Элементы для выбора стандартного плана по количеству работников
  const standardPlan = document.querySelector('.plan-standard') as HTMLElement;
  const workerAmounts = document.getElementById('plan__select-workers') as HTMLSelectElement;

  // ------------------------------
  // ВЫБОР СТАНДАРТНОГО ПЛАНА ПО КОЛИЧЕСТВУ РАБОТНИКОВ
  workerAmounts.addEventListener('change', event => {
    const workerAmount = (event.target as HTMLInputElement).value;
    const price = (standardPlan.querySelector('.plan__price') as HTMLSpanElement)?.firstElementChild;

    if (!price) return;

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
