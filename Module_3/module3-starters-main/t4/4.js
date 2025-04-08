'use strict';

const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

// Get the target element (e.g., a <select> element)
const targetElement = document.getElementById('target');

// Loop through the students array
for (let i = 0; i < students.length; i++) {
  const option = document.createElement('option');      // Create <option> element
  option.value = students[i].id;                         // Set the value attribute
  option.textContent = students[i].name;                 // Set the visible text
  targetElement.appendChild(option);                     // Append to the target element
}
