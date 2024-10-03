"use strict";
document.addEventListener('DOMContentLoaded', async () => {
    // Dynamically import the openDialog function from the "dialogUtils.js" module
    const { openDialog } = await import('./dialogUtils.js');
    // Get button and dialog elements by their IDs
    const buttonMPAddDialog = document.getElementById('button__mp-add-dialog');
    const dialogMPAdd = document.getElementById('mp-add-dialog');
    const dialogMPLogin = document.getElementById('mp-login-dialog');
    // Get category elements by their IDs
    const btnListVacancies = document.getElementById('list_vacancies');
    const btnSupplyServices = document.getElementById('supply_services');
    const btnSellMaterials = document.getElementById('sell_materials');
    // Check if the user is logged in by checking for a "tokken" cookie
    if (document.cookie.match('tokken')) {
        // If the user is logged in, open the add material/service dialog when clicking the button
        buttonMPAddDialog.addEventListener('click', () => {
            openDialog(dialogMPAdd);
        });
    }
    else {
        // If the user is not logged in, open the login dialog when clicking the button
        buttonMPAddDialog.addEventListener('click', async () => {
            openDialog(dialogMPLogin);
            // ------------------------------
            // Dynamically import the loadPhoneCodes function from the "phone_codes.js" module
            const { default: loadPhoneCodes } = await import('../login/phoneCodes.js');
            loadPhoneCodes();
            // Dynamically import the handlePhoneNumber function from the "login.js" module
            const { default: handlePhoneNumber } = await import('../login/login.js');
            // Execute the handlePhoneNumber function, passing the MARKETPLACE constant
            handlePhoneNumber(MARKETPLACE);
        });
    }
    // ------------------------------
    // Handlers for opening dialogs depending on the selected category
    // When clicking the vacancies list button, log a message to the console
    btnListVacancies.addEventListener('click', () => {
        console.log('handle vacancies');
    });
    // When clicking the services button, log a message to the console
    btnSupplyServices.addEventListener('click', () => {
        console.log('handle services');
    });
    // When clicking the materials button, log a message to the console
    btnSellMaterials.addEventListener('click', () => {
        console.log('handle materials');
    });
});
//# sourceMappingURL=mpAdd.js.map