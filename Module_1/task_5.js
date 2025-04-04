'use strict';

// Ask the user to input a year
const year = parseInt(prompt('Write year.'));  // Convert input to a number

// Check if the year is a valid number
if (isNaN(year)) {
    document.querySelector('#target').innerHTML = 'Please enter a valid year.';
} else {
      // Leap year check:
      // A year is a leap year if:
      // - It's divisible by 4 AND not divisible by 100
      // - OR it's divisible by 400
      if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
          document.querySelector('#target').innerHTML = year + ' is a leap year.';
      } else {
          document.querySelector('#target').innerHTML = year + ' is not a leap year.';
      }
}
