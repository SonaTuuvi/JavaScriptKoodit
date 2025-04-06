'use strict';

// Function to roll a dice (returns a number from 1 to 6)
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

const list = document.querySelector('#target');
let result;

// Keep rolling the dice until we get a 6
do {
    result = rollDice();

    // Create a new <li> element for each roll
    const li = document.createElement('li');
    li.textContent = `Rolled: ${result}`;

    // Add it to the <ul> on the page
    list.appendChild(li);

} while (result !== 6);  // Stop when 6 is rolled