'use strict';

// Function that returns a random roll from 1 to `sides`
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

// Ask user for number of sides on the dice
const sides = parseInt(prompt('How many sides does the dice have?'));

const list = document.querySelector('#target');
let result;

if (isNaN(sides) || sides < 2) {
    // Basic validation
    const li = document.createElement('li');
    li.textContent = 'Please enter a valid number of sides (minimum 2).';
    list.appendChild(li);
} else {
      // Keep rolling until the highest number is rolled
      do {
        result = rollDice(sides);

        const li = document.createElement('li');
        li.textContent = `Rolled: ${result}`;
        list.appendChild(li);

      } while (result !== sides); // Stop when we hit the max value
}