'use strict'; // Enable strict mode to catch potential errors and enforce cleaner code

// Wait until the HTML document has been fully loaded and parsed
document.addEventListener('DOMContentLoaded', () => {

  // Select the element that will trigger the image change (e.g., a button or div)
  const trigger = document.getElementById('trigger');

  // Select the image element whose 'src' will be changed
  const targetImg = document.getElementById('target');

  // Store the original image source path
  const originalSrc = 'img/picA.jpg';

  // Store the alternate image source to be shown on hover
  const hoverSrc = 'img/picB.jpg';

  // Event listener for when the mouse enters the trigger element
  trigger.addEventListener('mouseenter', () => {
    targetImg.src = hoverSrc; // Change the image to the hover version
  });

  // Event listener for when the mouse leaves the trigger element
  trigger.addEventListener('mouseleave', () => {
    targetImg.src = originalSrc; // Revert the image back to the original
  });
});
