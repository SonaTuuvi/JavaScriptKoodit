'use strict';

// Ask the user to enter an integer
const number = parseInt(prompt('Enter an integer:'));

// Select the HTML element with the ID 'target' where the result will be displayed
const result = document.querySelector('#target');

// Check if the input is a valid number
if (isNaN(number)) {
  // If not a number, show an error message
  result.innerHTML = 'Please enter a valid number.';
}
// Check if the number is less than 2 (0 and 1 are not prime numbers)
else if (number < 2) {
  result.innerHTML = `${number} is not a prime number.`;
}
else {
    // Assume the number is prime until proven otherwise
    let isPrime = true;

    // Only check up to the square root of the number for efficiency
     for (let i = 2; i <= Math.sqrt(number); i++) {
        // If the number is divisible by i, it's not prime
        if (number % i === 0) {
        isPrime = false;
        break; // Exit the loop early if not prime
        }
     }

    // Display the result based on whether the number is prime
    if (isPrime) {
        result.innerHTML = `${number} is a prime number.`;
    } else {
        result.innerHTML = `${number} is not a prime number.`;
    }
}
