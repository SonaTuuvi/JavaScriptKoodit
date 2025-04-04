'use strict'
// Ask the user if they want to calculate the square root
const question = confirm('Should I calculate the square root?');

if (question) {
    // If user clicked "OK", ask them to enter a number
    const number = parseInt(prompt('Give your number:'));

    // Check if the number is greater than 0 (since square root of negatives is not real)
    if (number > 0) {
        // Calculate the square root using Math.sqrt()
        const squareRoot = Math.sqrt(number);

        // Display the result in the HTML element with ID 'target'
        document.querySelector('#target').innerHTML =
            'The square root of ' + number + ' is ' + squareRoot + '.';
    } else {
        // If the number is 0 or negative, show an error message
        document.querySelector('#target').innerHTML =
            'The square root of a negative number is not defined.';
    }
} else {
    // If the user clicked "Cancel", display a message
    document.querySelector('#target').innerHTML =
        'The square root is not calculated.';
}
