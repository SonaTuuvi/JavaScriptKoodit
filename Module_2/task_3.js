'use strict';

const names = [];

for(let i = 0; i < 7; i++) {
    const name = prompt('Enter a name of dog:');
    names.push(name);
}
names.sort();
names.reverse();
const list = document.querySelector('#target');

for (let name of names) {
     const li = document.createElement('li');
    li.textContent = name;
    list.appendChild(li);
}