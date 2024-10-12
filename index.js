 // Array of colors
const colors = ["#FF5733", "#33FFBD", "#337BFF", "#A933FF", "#FF33A1", "#33FF57"];

// Select the body and button elements
const body = document.body;
const btn = document.createElement('button');

// Create and style the button
btn.textContent = 'Click Me';
btn.classList.add('btn-hero');
document.body.appendChild(btn);

// Function to get a random color
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// Add event listener to the button for the color change
btn.addEventListener('click', function() {
  const randomColor = getRandomColor();
  body.style.backgroundColor = randomColor;
});
