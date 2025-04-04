'use strict';

// Ask the user how many dice to roll
const numDice = parseInt(prompt('Enter the number of dice:'));

// Ask the user for the desired sum they want to get
const desiredSum = parseInt(prompt('Enter the desired sum:'));

// Number of simulations (how many times we roll the dice to estimate probability)
const simulations = 10000;

// Counter for how many times we achieve the desired sum
let successCount = 0;

// Get the HTML element where the result will be displayed
const resultElement = document.querySelector('#target');

// Validate the user input
// - Inputs must be numbers
// - Number of dice must be at least 1
// - The desired sum must be at least equal to the number of dice (minimum possible sum)
// - The desired sum must not exceed numDice * 6 (maximum possible sum)
if (
    isNaN(numDice) ||
    isNaN(desiredSum) ||
    numDice < 1 ||
    desiredSum < numDice ||
    desiredSum > numDice * 6
) {
  // If inputs are invalid, show error message
    resultElement.innerHTML =
    'Please enter valid numbers. Sum must be between ' +
    numDice +
    ' and ' +
    numDice * 6 +
    '.';
} else {
  // Run the simulation 10,000 times
    for (let i = 0; i < simulations; i++) {
        let sum = 0;

        // Roll the dice the specified number of times
        for (let j = 0; j < numDice; j++) {
        // Simulate a single die roll (random number from 1 to 6)
        sum += Math.floor(Math.random() * 6) + 1;
        }

        // If the total sum equals the desired sum, count it as a success
        if (sum === desiredSum) {
            successCount++;
        }
  }

  // Calculate the probability as a percentage
  const probability = (successCount / simulations) * 100;

  // Display the result with two decimal places
  resultElement.innerHTML = `🎯 Probability to get sum ${desiredSum} with ${numDice} dice is ${probability.toFixed(2)}%`;
}
