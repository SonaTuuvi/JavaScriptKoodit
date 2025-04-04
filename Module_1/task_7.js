'use strict'

const rolls = parseInt(prompt('How many dice would you like to roll?'));

// Check if the input is a valid number and greater than 0
if (isNaN(rolls) || rolls <= 0) {
    // If not, display an error message in the HTML element with ID 'target'
    document.querySelector('#target').innerHTML = 'Please enter a valid positive number.';
} else {
    // Initialize the sum of dice rolls
    let sum = 0;

    // Loop to simulate rolling the dice 'rolls' times
    for (let i = 0; i < rolls; i++) {
        // Simulate a single die roll (random number between 1 and 6)
        const roll = Math.floor(Math.random() * 6) + 1;

        // Add the result to the sum
        sum += roll;
    }

    // Display the total result in the HTML document
    document.querySelector('#target').innerHTML =
        `You rolled ${rolls} dice. The total sum is: ${sum}`;
}
