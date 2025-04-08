'use strict'; // Enables strict mode to help catch common coding errors and enforce cleaner JavaScript

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

  // Get references to all required DOM elements
  const num1 = document.getElementById('num1');         // First number input
  const num2 = document.getElementById('num2');         // Second number input
  const operation = document.getElementById('operation'); // Dropdown/select for choosing the operation
  const startButton = document.getElementById('start'); // Button to trigger the calculation
  const result = document.getElementById('result');     // Element where result will be displayed

  // Add a click event listener to the start button
  startButton.addEventListener('click', () => {
    // Convert input values to floating point numbers
    const value1 = parseFloat(num1.value);
    const value2 = parseFloat(num2.value);
    const selectedOp = operation.value; // Get the selected operation from the dropdown
    let calcResult; // Variable to store the result of the calculation

    // Check if both input values are valid numbers
    if (isNaN(value1) || isNaN(value2)) {
      result.textContent = 'Please enter valid numbers.'; // Show error message if not numbers
      return; // Exit the function early
    }

    // Perform the selected arithmetic operation based on user input
    switch (selectedOp) {
      case 'add': // If "add" is selected
        calcResult = value1 + value2;
        break;
      case 'sub': // If "sub" (subtract) is selected
        calcResult = value1 - value2;
        break;
      case 'multi': // If "multi" (multiply) is selected
        calcResult = value1 * value2;
        break;
      case 'div': // If "div" (division) is selected
        if (value2 === 0) {
          result.textContent = 'Cannot divide by zero.'; // Handle division by zero
          return;
        }
        calcResult = value1 / value2;
        break;
      default: // If an unknown operation is selected
        result.textContent = 'Unknown operation.';
        return;
    }

    // Display the result in the result element
    result.textContent = `Result: ${calcResult}`;
  });
});
