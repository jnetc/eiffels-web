// Default export function for pricing section
export default function sectionPricing() {
    // Element selectors
    const yearlyOption = document.getElementById('yearly'); // Yearly option radio button
    const monthlyOption = document.getElementById('monthly'); // Monthly option radio button
    const individualPrices = document.querySelectorAll('.plan-individuals .price'); // Price elements for individual plans
    const individualTimeUnits = document.querySelectorAll('.plan-individuals .time-unit'); // Time unit elements (e.g., per year, per month) for individual plans
    const companyPrices = document.querySelectorAll('.plan-company .price'); // Price elements for company plans
    const companyTimeUnits = document.querySelectorAll('.plan-company .time-unit'); // Time unit elements (e.g., per year, per month) for company plans
    const workersInput = document.getElementById('plan__select-workers'); // Input field to select the number of workers for company plans
    const whatsappLinkIndividual = document.querySelector('.plan-individuals .plan__button'); // WhatsApp link for individual plans
    const whatsappLinkCompany = document.querySelector('.plan-company .plan__button'); // WhatsApp link for company plans
    // Constants
    const additionalCostPerWorker = 6.9; // Additional cost per worker for company plans
    let companyYearlyPrice; // Company yearly base price
    let companyMonthlyPrice; // Company monthly base price
    let individualSelectedPrice; // The selected price for the individual plan
    let companySelectedPrice; // The selected price for the company plan
    let workersInitCount = 0; // Initial number of workers, starts at 0
    // Function to update prices based on the selected plan (yearly or monthly)
    function updatePrices() {
        // If yearly is selected, set yearly prices
        if (yearlyOption.checked) {
            individualSelectedPrice = Number(individualPrices[0].dataset.price); // Get the yearly price for individuals
            // Update the visibility of time units and prices for individual plans
            individualTimeUnits[0].classList.remove('unit-hide'); // Show yearly time unit
            individualTimeUnits[1].classList.add('unit-hide'); // Hide monthly time unit
            individualPrices[0].classList.remove('price-hide'); // Show yearly price
            individualPrices[1].classList.add('price-hide'); // Hide monthly price
            // Get the yearly price for companies and add the additional cost for workers
            companyYearlyPrice = Number(companyPrices[0].dataset.price);
            companySelectedPrice = companyYearlyPrice + getWorkersAdditionalCost();
            // Update the displayed company price if workers are selected
            if (workersInitCount !== 0) {
                companyPrices[0].textContent = `€${companySelectedPrice.toFixed(2)}`;
            }
            // Update the visibility of time units and prices for company plans
            companyTimeUnits[0].classList.remove('unit-hide'); // Show yearly time unit
            companyTimeUnits[1].classList.add('unit-hide'); // Hide monthly time unit
            companyPrices[0].classList.remove('price-hide'); // Show yearly price
            companyPrices[1].classList.add('price-hide'); // Hide monthly price
        }
        // If monthly is selected, set monthly prices
        else if (monthlyOption.checked) {
            individualSelectedPrice = Number(individualPrices[1].dataset.price); // Get the monthly price for individuals
            // Update the visibility of time units and prices for individual plans
            individualTimeUnits[0].classList.add('unit-hide'); // Hide yearly time unit
            individualTimeUnits[1].classList.remove('unit-hide'); // Show monthly time unit
            individualPrices[0].classList.add('price-hide'); // Hide yearly price
            individualPrices[1].classList.remove('price-hide'); // Show monthly price
            // Get the monthly price for companies and add the additional cost for workers
            companyMonthlyPrice = Number(companyPrices[1].dataset.price);
            companySelectedPrice = companyMonthlyPrice + getWorkersAdditionalCost();
            // Update the displayed company price if workers are selected
            if (workersInitCount !== 0) {
                companyPrices[1].textContent = `€${companySelectedPrice.toFixed(2)}`;
            }
            // Update the visibility of time units and prices for company plans
            companyTimeUnits[0].classList.add('unit-hide'); // Hide yearly time unit
            companyTimeUnits[1].classList.remove('unit-hide'); // Show monthly time unit
            companyPrices[0].classList.add('price-hide'); // Hide yearly price
            companyPrices[1].classList.remove('price-hide'); // Show monthly price
        }
        // Update WhatsApp links for both individual and company plans
        updateWhatsAppLinks(individualSelectedPrice, companySelectedPrice);
    }
    // Function to calculate additional cost for workers
    function getWorkersAdditionalCost() {
        const workersCount = Number(workersInput.value) || 0; // Get the current number of workers
        workersInitCount = workersCount; // Update the worker count
        return (workersCount - 0) * additionalCostPerWorker; // Calculate additional cost based on worker count
    }
    // Function to validate and adjust the worker input value
    function validateWorkersInput() {
        let workersCount = Number(workersInput.value);
        // If a number less than 1 is entered, set it to 0
        if (Number.isNaN(workersCount) || workersCount < 0) {
            workersCount = 0;
        }
        // If a number greater than 50 is entered, set it to 50
        if (workersCount > 50) {
            workersCount = 50;
        }
        // Update the input field value
        workersInput.value = workersCount.toString();
    }
    // Function to update WhatsApp links based on the selected prices
    function updateWhatsAppLinks(individualPrice, companyPrice) {
        // Formulate the message for the Individual plan
        const individualMessage = `The Individual plan for €${individualPrice.toFixed(2)}.`;
        const individualHref = `https://wa.me/3584578396777?text=${encodeURIComponent(individualMessage)}`;
        whatsappLinkIndividual.href = individualHref; // Update the WhatsApp link for individuals
        // Formulate the message for the Company plan
        const workersCount = workersInput.value || '0'; // Get the worker count
        if (workersCount === '0') {
            whatsappLinkCompany.href = '#'; // If no workers are selected, disable the link
            return;
        }
        const companyMessage = `The Company plan for €${companyPrice.toFixed(2)} with ${workersCount} workers.`;
        const companyHref = `https://wa.me/3584578396777?text=${encodeURIComponent(companyMessage)}`;
        whatsappLinkCompany.href = companyHref; // Update the WhatsApp link for companies
    }
    // Event handler for changes in the worker input field
    workersInput.addEventListener('input', () => {
        validateWorkersInput(); // Validate the worker count
        updatePrices(); // Update prices based on the worker count
    });
    // Event handlers for switching between yearly and monthly plans
    yearlyOption.addEventListener('change', updatePrices);
    monthlyOption.addEventListener('change', updatePrices);
    // Initialize prices on page load
    updatePrices();
}
//# sourceMappingURL=sectionPricing.js.map