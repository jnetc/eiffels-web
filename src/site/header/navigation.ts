// Exporting the navigation function as the default export
export default function navigation() {
  // Mobile menu button and menu container
  const openMenuButton = document.getElementById('header__open-mob-menu') as HTMLButtonElement;
  const closeMenuButton = document.getElementById('header__close-mob-menu') as HTMLButtonElement;
  const mobNavigation = document.querySelector('.header__nav') as HTMLElement;

  // ------------------------------
  // MOBILE MENU

  // Handling click on the mobile menu open button
  openMenuButton.addEventListener('click', () => {
    mobNavigation.classList.add('open');
    // If the menu is open, add click events to links, otherwise remove them
    mobNavigation.classList.contains('open')
      ? addEventsToLinks(true) // If the menu is open, add click events
      : addEventsToLinks(false); // If the menu is closed, remove click events
  });

  // Handling click on the mobile menu close button
  closeMenuButton.addEventListener('click', () => {
    console.log('close'); // Log when closing the menu
    mobNavigation.classList.remove('open'); // Remove the 'open' class to close the menu
  });

  // Function to add or remove click events on links
  function addEventsToLinks(boolean: boolean) {
    for (const element of mobNavigation.querySelectorAll('a')) {
      if (boolean) {
        // Adding click handler to close the menu when a link is clicked
        element.addEventListener('click', () => {
          mobNavigation.classList.remove('open'); // Close the menu
        });
      } else {
        // Remove the click handler
        element.removeEventListener('click', () => {}); // This will not work as intended
      }
    }
  }
}
