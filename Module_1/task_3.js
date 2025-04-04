'use strict';

// Declare variables for the three input numbers
let number1, number2, number3;

// Ask the user to enter three numbers, and convert them from strings to integers
number1 = parseInt(prompt('Enter first number:'));
number2 = parseInt(prompt('Enter second number:'));
number3 = parseInt(prompt('Enter third number:'));

// Optional: check if any input is invalid (not a number)
if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
  document.querySelector('#target1').innerHTML = 'Please enter valid numbers.';
  document.querySelector('#target2').innerHTML = '';
  document.querySelector('#target3').innerHTML = '';
} else {
  // Calculate the sum of the three numbers
  const sum = number1 + number2 + number3;

  // Calculate the product of the three numbers
  const product = number1 * number2 * number3;

  // Calculate the average
  const average = sum / 3;

  // Display the results in separate HTML elements
  document.querySelector('#target1').innerHTML = 'The sum is ' + sum + '.';
  document.querySelector('#target2').innerHTML = 'The product is ' + product + '.';
  document.querySelector('#target3').innerHTML = 'The average is ' + average.toFixed(2) + '.'; // Rounded to 2 decimals
}
