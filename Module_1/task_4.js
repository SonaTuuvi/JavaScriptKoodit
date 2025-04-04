'use strict';

// Function to return a random integer from 0 to 3
function getRandomInt() {
    return Math.floor(Math.random() * 4);
}

// Ask the user for their name
const name = prompt('What is your name?');

// Array of Hogwarts houses
const hogwartsClasses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

// Get a random house index
const randomIndex = getRandomInt();

// Use switch-case to assign house
switch (randomIndex) {
    case 0:
        document.querySelector('#target').innerHTML = `${name}, you are ${hogwartsClasses[0]}!`;
        break;
    case 1:
        document.querySelector('#target').innerHTML = `${name}, you are ${hogwartsClasses[1]}!`;
        break;
    case 2:
        document.querySelector('#target').innerHTML = `${name}, you are ${hogwartsClasses[2]}!`;
        break;
    case 3:
        document.querySelector('#target').innerHTML = `${name}, you are ${hogwartsClasses[3]}!`;
        break;
    default:
        alert('Invalid class.');
}
