function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const userInput = document.querySelector('#controls input');
const createButton = document.querySelector('#controls [data-create]');
const destroyButton = document.querySelector('#controls [data-destroy]');
const divBoxes = document.querySelector('#boxes');
userInput.setAttribute('type', 'text');
divBoxes.style.visibility = 'hidden';

userInput.addEventListener('input', e => {
  const inputValue = e.currentTarget.value;
  console.log(inputValue);
});

createButton.addEventListener('click', e => {
  const input = Number(userInput.value);
  if (input >= 1 && input <= 100) {
    const newBlocks = Array.from({ length: input }, (_, i) => {
      const width = 30;
      const height = 30;
      return `<div class="new-box" style="width: ${width + 10 * i}px; height: ${
        height + 10 * i
      }px; background-color: ${getRandomHexColor()}"></div>`;
    });
    newBlocks.forEach(x => x.replace(/\s+/g, ' '));
    divBoxes.insertAdjacentHTML('afterbegin', newBlocks.join('\n\n'));
    divBoxes.style.visibility = 'visible';
  } else {
    alert('Value should be from 1 to 100!');
    userInput.value = '';
  }
});

destroyButton.addEventListener('click', e => {
  divBoxes.style.visibility = 'hidden';
  userInput.value = '';
});
