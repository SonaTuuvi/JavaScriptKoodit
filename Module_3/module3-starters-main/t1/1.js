// Get the element with id="target"
let targetElement = document.getElementById("target");

// Add HTML list items using innerHTML
targetElement.innerHTML = `
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
`;

// Add class "my-list" to the element
targetElement.className = "my-list";
