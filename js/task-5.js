function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const output = document.querySelector('.color');

button.addEventListener('click', _ => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  output.textContent = newColor;
});
