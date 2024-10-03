document.addEventListener('DOMContentLoaded', async () => {
  // Dynamically import the setCookie function from setCookie.js
  const { default: setCookie } = await import('./setCookie.js');

  // Get the element with the class "cookie" from the DOM
  const cookieElement = document.querySelector('.cookie') as HTMLDivElement;

  // Get the buttons for accepting and declining cookies by their ID
  const declineCookieBtn = document.getElementById('cookie-decline');
  const acceptCookieBtn = document.getElementById('cookie-accept');

  // Function to get a cookie by its name
  function getCookie(name: string) {
    return document.cookie.match(name)?.[0] || null;
  }

  // Check for the presence of 'accepted' or 'declined' cookies
  const isAccepted = getCookie('accepted');
  const isDeclined = getCookie('declined');

  // Check if any cookies are already set in the document
  if (isAccepted || isDeclined) {
    // If a cookie exists, remove the cookie information element from the DOM
    cookieElement.remove();
    return;
  }

  // Add event listener for the accept cookies button
  // Set the "accepted" cookie with a value of "1" for 1 day
  acceptCookieBtn?.addEventListener('click', () => setCookie('accepted', '1', 1));

  // Add event listener for the decline cookies button
  // Set the "declined" cookie with a value of "1" for a very short duration (about 1.44 minutes)
  declineCookieBtn?.addEventListener('click', () => setCookie('declined', '1', 0.001));
});
