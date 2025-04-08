'use strict'; // Enables strict mode to catch common coding mistakes and prevent unsafe actions

// Wait for the full HTML document to be loaded and parsed
document.addEventListener('DOMContentLoaded', () => {

  // Select the element with ID 'myButton' from the DOM
  const button = document.getElementById('myButton');

  // Check if the button exists to avoid errors
  if (button) {

    // Add a click event listener to the button
    button.addEventListener('click', () => {

      // Show an alert box when the button is clicked
      alert('Button Clicked');
    });
  }
});
