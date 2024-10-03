// Add an event listener that triggers when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', async () => {
  // ------------------------------
  // LANGUAGE
  // Dynamically import the language selection module and execute it
  const { default: selectLanguage } = await import('../header/selectLanguage.js');
  selectLanguage();

  // ------------------------------
  // MOBILE MENU BUTTON AND MENU CONTAINER
  // Import and initialize the navigation module for the mobile menu
  const { default: navigation } = await import('../header/navigation.js');
  navigation();

  // ------------------------------
  // COUNTRY CODE DROP-DOWN MENU IN THE HERO SECTION
  // Load the phone codes for country selection in the login section
  const { default: loadPhoneCodes } = await import('../../login/phoneCodes.js');
  loadPhoneCodes();

  // ------------------------------
  // PHONE NUMBER INPUT FIELD IN THE HERO SECTION
  // Import and handle phone number input in the login section
  const { default: handlePhoneNumber } = await import('../../login/login.js');
  handlePhoneNumber(INDEX); // Assuming INDEX is defined somewhere in your code

  // ------------------------------
  // PROMOTIONAL VIDEO IN THE OVERVIEW SECTION
  // Import and initialize video play/pause functionality for the overview section
  const { default: playAndPauseVideo } = await import('./sectionOverview.js');
  playAndPauseVideo();

  // ------------------------------
  // FREQUENTLY ASKED QUESTIONS / FAQ
  // Import and initialize the FAQ section
  const { default: sectionFAQ } = await import('../FAQ/sectionFAQ.js');
  sectionFAQ();

  // ------------------------------
  // BACK TO TOP
  // Import and initialize the back-to-top functionality
  const { default: backToTop } = await import('../../components/backToTop.js');
  backToTop();
});
