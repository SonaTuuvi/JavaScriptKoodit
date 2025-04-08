'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('calculation');
  const button = document.getElementById('start');
  const result = document.getElementById('result');

  button.addEventListener('click', () => {
    const expression = input.value.trim();
    let value1, value2, output;

    // Check and handle addition
    if (expression.includes('+')) {
      [value1, value2] = expression.split('+').map(Number);
      output = value1 + value2;
    }
    // Check and handle subtraction
    else if (expression.includes('-')) {
      [value1, value2] = expression.split('-').map(Number);
      output = value1 - value2;
    }
    // Check and handle multiplication
    else if (expression.includes('*')) {
      [value1, value2] = expression.split('*').map(Number);
      output = value1 * value2;
    }
    // Check and handle division
    else if (expression.includes('/')) {
      [value1, value2] = expression.split('/').map(Number);
      if (value2 === 0) {
        result.textContent = 'Cannot divide by zero.';
        return;
      }
      output = Math.floor(value1 / value2); // Integer division
    }
    else {
      result.textContent = 'Invalid input. Please use +, -, *, or /.';
      return;
    }

    // Check for invalid numbers
    if (isNaN(value1) || isNaN(value2)) {
      result.textContent = 'Invalid numbers.';
      return;
    }

    result.textContent = `Result: ${output}`;
  });
});
