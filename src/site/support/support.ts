// Add an event listener that triggers when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', async () => {
  // ------------------------------
  // LANGUAGE
  const { default: selectLanguage } = await import('../header/selectLanguage.js');
  selectLanguage(); // Call the function to handle language selection

  // ------------------------------
  // MOBILE MENU BUTTON AND MENU CONTAINER
  const { default: navigation } = await import('../header/navigation.js');
  navigation(); // Call the function to initialize navigation components

  // ------------------------------
  // BACK TO TOP BUTTON
  const { default: backToTop } = await import('../../components/backToTop.js');
  backToTop(); // Call the function to set up the back-to-top button

  const form = document.getElementById('support__form') as HTMLFormElement;
  form.addEventListener('submit', event => {
    event.preventDefault();
    // const button = (event.target as HTMLFormElement).querySelector('[type="submit"]') as HTMLButtonElement;
    // const buttonName = button.firstElementChild as HTMLSpanElement;
    // buttonName.textContent = 'Sending...';
    // button.disabled = true;
  });
});
