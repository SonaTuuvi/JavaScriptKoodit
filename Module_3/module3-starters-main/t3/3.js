'use strict';

const names = ['John', 'Paul', 'Jones'];
const targetElement = document.getElementById('target');

// Initialize an empty string to hold the HTML
let listItems = '';

// Loop through the names array and build the HTML
for (let i = 0; i < names.length; i++) {
  listItems += `<li>${names[i]}</li>`;
}

// Insert the HTML into the target element
targetElement.innerHTML = listItems;
