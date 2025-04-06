'use strict';

const numbers = [];

// Ask the user to enter an integer
for(let i = 0; i < 5; i++) {
    const number = parseInt(prompt('Enter an integer:'));
    numbers.push(number);
}

numbers.reverse();

console.log(numbers);