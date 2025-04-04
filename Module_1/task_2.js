'use strict';

// Prompt the user to type their name
const name = prompt('Type your name.');

// Output a greeting message to the HTML element with id="target"
document.querySelector('#target').innerHTML = 'Hello, ' + name + '!';
