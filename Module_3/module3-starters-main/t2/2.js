// Get the target element
let targetElement = document.getElementById("target");

// Create the list items
let li1 = document.createElement("li");
li1.textContent = "First item";

let li2 = document.createElement("li");
li2.textContent = "Second item";
li2.className = "my-item";  // Add class to the second item

let li3 = document.createElement("li");
li3.textContent = "Third item";

// Append the list items to the target element
targetElement.appendChild(li1);
targetElement.appendChild(li2);
targetElement.appendChild(li3);
