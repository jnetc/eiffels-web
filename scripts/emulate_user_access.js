// Get control elements by their IDs
const userEnable = document.getElementById('user-enable');
const userDisable = document.getElementById('user-disable');
// Main function to simulate user state
export default function emulate() {
    // Get the "Back" button element by its ID
    const backButton = document.getElementById('btn-back');
    // Check if there is a token in cookies
    if (document.cookie.match('tokken')) {
        // If the token exists, activate buttons for the enabled user state
        userEnable.className = 'btn-40 btn-blue';
        userDisable.className = 'btn-40 btn-blue-border';
        // If there is a "Back" button, change its link to the authorized users page
        if (backButton) {
            url.pathname = LOGGED_PATH;
            backButton.href = url.toString();
        }
    }
    else {
        // If there is no token, activate buttons for the disabled user state
        userDisable.className = 'btn-40 btn-blue';
        userEnable.className = 'btn-40 btn-blue-border';
        // If there is a "Back" button, change its link to the main page
        if (backButton) {
            url.pathname = INDEX_PATH;
            backButton.href = url.toString();
        }
    }
    // Add event listeners to buttons for setting and revoking the token
    userEnable === null || userEnable === void 0 ? void 0 : userEnable.addEventListener('click', () => setTokken('tokken', '1', 1));
    userDisable === null || userDisable === void 0 ? void 0 : userDisable.addEventListener('click', () => revokeTokken());
}
// Function to revoke the token
export function revokeTokken() {
    // Check if there is a token in cookies
    if (document.cookie.match('tokken')) {
        // If the token exists, remove it by setting its expiration date in the past
        document.cookie = 'tokken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        // Change button styles to the "disabled" state
        userDisable.className = 'btn-40 btn-blue';
        userEnable.className = 'btn-40 btn-blue-border';
        // If the user is not on the main page, redirect them to the main page
        if (window.location.pathname !== INDEX) {
            url.pathname = INDEX_PATH;
            window.location.href = url.toString();
            return;
        }
    }
}
// Function to set the token
export function setTokken(name, value, days) {
    console.log('set tokken', name, value, days);
    // Set the token expiration by adding the number of days to the current date
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    // Set the cookie with the name, value, expiration, and security parameters
    document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/;samesite=strict;secure`;
    // Change button styles to the "enabled" state
    userEnable.className = 'btn-40 btn-blue';
    userDisable.className = 'btn-40 btn-blue-border';
    // If (unauthorized) the user is on the "MARKETPLACE" page,
    // keep them on it after confirming login
    console.log('global value', MARKETPLACE);
    if (window.location.pathname.includes(MARKETPLACE)) {
        url.pathname = MARKETPLACE_PATH;
        console.log('path', MARKETPLACE_PATH);
        window.location.href = url.toString();
        return;
    }
    // If (unauthorized) the user is on the "INDEX" page,
    // redirect them to the "MARKETPLACE" page (needs clarification)
    if (window.location.pathname !== LOGGED) {
        url.pathname = LOGGED_PATH;
        // url.pathname = MARKETPLACE_PATH;
        window.location.href = url.toString();
    }
}
//# sourceMappingURL=emulate_user_access.js.map