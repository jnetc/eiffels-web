"use strict";
var _a;
const lang = ((_a = document.querySelector('html')) === null || _a === void 0 ? void 0 : _a.getAttribute('lang')) || 'en';
console.log('global lang', lang);
// Define initial values for paths
const INDEX = `/${lang}/index`;
const LOGGED = `/${lang}/logged`;
const MARKETPLACE = `/${lang}/marketplace/`;
// Initialize path variables with initial values
// http://127.0.0.1:5500/
let ROOT_PATH = '/';
let INDEX_PATH = INDEX;
let LOGGED_PATH = LOGGED;
let MARKETPLACE_PATH = MARKETPLACE;
// Create a URL object from the current window's URL
const url = new URL(window.location.href);
// Check if the current URL uses HTTPS protocol
// https://jnetc.github.io/eiffels-web
if (url.protocol === 'https:') {
    // If HTTPS protocol, update resource paths
    ROOT_PATH = '/eiffels-web/';
    INDEX_PATH = `/eiffels-web/${lang}`;
    LOGGED_PATH = `/eiffels-web/${lang}/logged`;
    MARKETPLACE_PATH = `/eiffels-web/${lang}/marketplace/`;
}
// Add an event listener that will trigger after the document is fully loaded
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Asynchronously import the emulate_user_access.js module
        const { default: emulate } = await import('./emulate_user_access.js');
        // Call the emulate function from the imported module
        emulate();
    }
    catch (error) {
        // Catch and log errors if module import or function call fails
        console.log(error);
    }
});
//# sourceMappingURL=global.js.map