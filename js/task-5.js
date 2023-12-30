const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const output = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  output.textContent = newColor;
}

button.addEventListener('click', changeColor);
