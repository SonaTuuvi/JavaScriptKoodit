'use strict';

// Function that returns only even numbers
function even(array) {
    const evens = []; // New array to hold even numbers

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
          evens.push(array[i]);
        }
    }

    return evens;
}

// Hardcoded original array
const numbers = [2, 7, 4];

// Call the function
const evenNumbers = even(numbers);

// Print both arrays to the console
console.log('Original array:', numbers);
console.log('Even numbers:', evenNumbers);