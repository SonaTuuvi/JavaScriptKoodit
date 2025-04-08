'use strict'; // Enables strict mode to catch common coding mistakes and promote cleaner code

// Wait until the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {

  // Get a reference to the form element with ID 'source'
  const form = document.getElementById('source');

  // Get a reference to the element where we want to display the output
  const target = document.getElementById('target');

  // Add a 'submit' event listener to the form
  form.addEventListener('submit', (event) => {

    event.preventDefault(); // Prevent the form from actually submitting and reloading the page

    // Get the value of the 'firstname' input, remove any extra whitespace
    const firstName = form.querySelector('input[name="firstname"]').value.trim();

    // Get the value of the 'lastname' input, remove any extra whitespace
    const lastName = form.querySelector('input[name="lastname"]').value.trim();

    // Display the full name inside the target element
    target.textContent = `Your name is ${firstName} ${lastName}`;
  });
});
