'use strict';

const numbers = [];

while (true) {
  const number = Number(prompt('Enter a number:'));

  // Check if this number is already in the array
  if (numbers.includes(number)) {
    alert('Number already entered! Program will stop.');
    break;
  }

  // Add the number to the array
  numbers.push(number);
}

// Sort and display the entered numbers
numbers.sort();

numbers.forEach((number) => {
   console.log(number);
})
