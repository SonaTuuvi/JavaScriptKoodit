'use strict';


const numbers = [];

while(true) {
    const number = parseInt(prompt('Enter a number:'));

    if (number === 0) {
        break;
    }
    numbers.push(number);
}

numbers.sort();
numbers.reverse();

numbers.forEach((number) => {
   console.log(number);
})