"use strict";
// Add an event listener that triggers when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the search form element by its ID
    const searchForm = document.getElementById('search__form');
    const searchInput = document.getElementById('search__input');
    const searchSubmit = document.getElementById('search__submit');
    // Variable to store the search value
    let searchValue = '';
    // Input event handler for the search field
    searchInput.addEventListener('input', event => {
        // If the input field is not empty, show the submit button
        if (event.target.value.length > 0) {
            searchSubmit.classList.add('show'); // Add the 'show' class to display the button
        }
        else {
            searchSubmit.classList.remove('show'); // Remove the 'show' class to hide the button
        }
        searchValue = event.target.value; // Update the search value
    });
    // Submit event handler for the search form
    searchForm.addEventListener('submit', event => {
        event.preventDefault(); // Prevent the default form submission
        console.log('send request', searchValue); // Log the search value (replace with actual request logic)
        searchInput.value = ''; // Clear the input field after form submission
        searchSubmit.classList.remove('show'); // Hide the submit button after form submission
    });
    // Debouncing function (uncomment and use if you want to reduce the frequency of function calls)
    // function debounce(func, wait) {
    //   let timeout;
    //   return function(...args) {
    //     clearTimeout(timeout); // Clear the timeout to prevent the function from being called too frequently
    //     timeout = setTimeout(() => func.apply(this, args), wait); // Set a new timeout
    //   };
    // }
    // Input event handler with debouncing
    // const handleInput = (event) => {
    //   if (event.target.value.length > 0) {
    //     searchSubmit.classList.add('show'); // Show the button if there is text in the input field
    //   } else {
    //     searchSubmit.classList.remove('show'); // Hide the button if the input field is empty
    //   }
    //   searchValue = event.target.value; // Update the search value
    //   console.log('searchValue', searchValue); // Log the current search value
    // };
    // Debounced input handler with a 5-second interval
    // const debouncedHandleInput = debounce(handleInput, 5000); // Use debouncing with a delay of 5000 ms
    // searchInput.addEventListener('input', debouncedHandleInput); // Add the input handler with debouncing
});
//# sourceMappingURL=mpSearch.js.map