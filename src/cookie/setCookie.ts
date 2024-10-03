// Exported function to set cookies
export default function setCookie(name: string, value: string, days: number) {
  // Find the element on the page with the class "cookie," which is likely the cookie banner
  const cookieElement = document.querySelector('.cookie') as HTMLDivElement;

  // Log the function call parameters to the console for debugging
  console.log('accept cookie', name, value, days);

  // Create a new Date object
  const date = new Date();

  // Set the expiration time of the cookie by adding the specified number of days to the current date
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

  // Format the expires string using the toUTCString() method
  const expires = `expires=${date.toUTCString()}`;

  // Set the cookie with the specified name, value, expiration time, path, and security parameters
  document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/;samesite=strict;secure`;

  // Remove the element with the class "cookie" from the page, likely after the user has accepted cookies
  cookieElement.remove();
}

// 1) Function setCookie: This exported function sets a cookie in the browser.
// 2) cookieElement: Used to find the element with the class .cookie, which likely represents the cookie information banner.
// 3) console.log("accept cookie", name, value, days): Logging the function parameters to see what is being passed when setting the cookie.
// 4) const date = new Date();: Creates a new Date object that will be used to set the cookie expiration date.
// 5) date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);: Sets the cookie expiration date by adding the specified number of days to the current time.
// 6) const expires = expires=${date.toUTCString()};: Formats the expires string that sets the cookie expiration date in UTC format.
// 7) document.cookie = ${name}=${encodeURIComponent(value)};${expires};path=/;samesite=strict;secure;: Sets the cookie with:

//     Name (name),
//     Value (value, encoded for use in a URL),
//     Expiration time (expires),
//     Availability across the entire site (path=/),
//     Security (secure — only through HTTPS),
//     SameSite policy (samesite=strict — cookie is sent only with requests from the same site).

// 8) cookieElement.remove();: Removes the .cookie element from the DOM, which likely hides the cookie banner after the user has agreed to their use.
