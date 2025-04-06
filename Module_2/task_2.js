const names = [];

for(let i = 0; i < 5; i++) {
    const name = prompt('Enter a name:');
    names.push(name);
}
names.sort();

const list = document.querySelector('#target');

for (let name of names) {
     const li = document.createElement('li');
    li.textContent = name;
    list.appendChild(li);
}
