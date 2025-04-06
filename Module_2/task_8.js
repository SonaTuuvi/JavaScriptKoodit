'use strict'

// Define the array of names
const names = ['Johnny', 'DeeDee', 'Joey', 'Marky'];

// Function to concatenate elements manually with spaces (without join)
function concat(array) {
    let result = '';

    for (let i = 0; i < array.length; i++) {
        result += array[i];

        // Add space between words, but not after the last word
        if (i < array.length - 1) {
            result += ' ';
        }
    }

    return result;
}

// Call the function and display the result
const finalString = concat(names);
document.querySelector('#target').textContent = finalString;
