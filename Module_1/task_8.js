'use strict'

const startYear = parseInt(prompt('Enter the start year:'));
const endYear = parseInt(prompt('Enter the end year:'));

// Select the HTML element with the ID 'target' to display the leap years
const list = document.querySelector('#target');

// Validate the input:
// - Both startYear and endYear must be valid numbers
// - Start year must be less than or equal to end year
if (isNaN(startYear) || isNaN(endYear) || startYear > endYear) {
      // If input is invalid, show a message inside a list item
      list.innerHTML = '<li>Please enter valid start and end years (start ≤ end).</li>';
} else {
      // Loop through all years in the range from startYear to endYear
      for (let year = startYear; year <= endYear; year++) {
            // Check if the current year is a leap year:
            // - Divisible by 4 AND not divisible by 100
            // - OR divisible by 400 (e.g. year 2000 is leap, but 1900 is not)
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                // Create a new list item element
                const li = document.createElement('li');

                // Set the text content to the leap year
                li.textContent = year;

                // Add the list item to the unordered list in the HTML
                list.appendChild(li);
            }
      }
}
