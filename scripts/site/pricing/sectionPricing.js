// Default export function for pricing section
export default function sectionPricing() {
    // Element selectors
    const yearlyOption = document.getElementById('yearly');
    const monthlyOption = document.getElementById('monthly');
    const individualPrice = document.querySelector('.plan-individuals .price');
    const individualTimeUnit = document.querySelector('.plan-individuals .time-unit');
    const companyPrice = document.querySelector('.plan-company .price');
    const companyTimeUnit = document.querySelector('.plan-company .time-unit');
    const workersInput = document.getElementById('plan__select-workers');
    const whatsappLinkIndividual = document.querySelector('.plan-individuals .plan__button');
    const whatsappLinkCompany = document.querySelector('.plan-company .plan__button');
    // Initial prices
    const individualYearlyPrice = 31.2;
    const individualMonthlyPrice = 39; // Approximate price for monthly payment
    const companyYearlyPrice = 47.2;
    const companyMonthlyPrice = 59.0; // Approximate price for monthly payment
    const additionalCostPerWorker = 6.9;
    let individualSelectedPrice;
    let companySelectedPrice;
    // Function to update prices
    function updatePrices() {
        // If yearly is selected, set yearly prices
        if (yearlyOption.checked) {
            individualSelectedPrice = individualYearlyPrice;
            individualPrice.textContent = `€${individualSelectedPrice.toFixed(2)}`;
            individualTimeUnit.textContent = '/ annual';
            companySelectedPrice = companyYearlyPrice + getWorkersAdditionalCost();
            companyPrice.textContent = `€${companySelectedPrice.toFixed(2)}`;
            companyTimeUnit.textContent = '/ annual';
        }
        // If monthly is selected, set monthly prices
        else if (monthlyOption.checked) {
            individualSelectedPrice = individualMonthlyPrice;
            individualPrice.textContent = `€${individualSelectedPrice.toFixed(2)}`;
            individualTimeUnit.textContent = '/ monthly';
            companySelectedPrice = companyMonthlyPrice + getWorkersAdditionalCost();
            companyPrice.textContent = `€${companySelectedPrice.toFixed(2)}`;
            companyTimeUnit.textContent = '/ monthly';
        }
        // Update WhatsApp links
        updateWhatsAppLinks(individualSelectedPrice, companySelectedPrice);
    }
    // Function to calculate additional cost for workers
    function getWorkersAdditionalCost() {
        const workersCount = Number(workersInput.value) || 0;
        return (workersCount - 0) * additionalCostPerWorker;
    }
    // Validation and adjustment of worker input value
    function validateWorkersInput() {
        let workersCount = Number(workersInput.value);
        // If a number less than 1 is entered, set it to 1
        if (Number.isNaN(workersCount) || workersCount < 0) {
            workersCount = 0;
        }
        // If a number greater than 50 is entered, set it to 50
        if (workersCount > 50) {
            workersCount = 50;
        }
        // Update the input value
        workersInput.value = workersCount.toString();
    }
    // Function to update WhatsApp links
    function updateWhatsAppLinks(individualPrice, companyPrice) {
        // Formulate the message for Individual
        const individualMessage = `The Individual plan for €${individualPrice.toFixed(2)}.`;
        const individualHref = `https://wa.me/3584578396777?text=${encodeURIComponent(individualMessage)}`;
        whatsappLinkIndividual.href = individualHref;
        // Formulate the message for Company
        const workersCount = workersInput.value || '0';
        if (workersCount === '0') {
            whatsappLinkCompany.href = '#';
            return;
        }
        const companyMessage = `The Company plan for €${companyPrice.toFixed(2)} with ${workersCount} workers.`;
        const companyHref = `https://wa.me/3584578396777?text=${encodeURIComponent(companyMessage)}`;
        whatsappLinkCompany.href = companyHref;
    }
    // Event handler for changes in the workers input
    workersInput.addEventListener('input', () => {
        validateWorkersInput(); // Validate the entered value
        // Update the company plan price when the number of workers changes
        updatePrices();
    });
    // Event handlers for switching between yearly and monthly
    yearlyOption.addEventListener('change', updatePrices);
    monthlyOption.addEventListener('change', updatePrices);
    // Initialize prices on load
    updatePrices();
}
//# sourceMappingURL=sectionPricing.js.map