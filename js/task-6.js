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

function createBoxes() {
  divBoxes.innerHTML = '';
  if (userInput.value >= 1 && userInput.value <= 100) {
    const newBlocks = Array.from({ length: userInput.value }, (_, i) => {
      return `<div class="new-box" style="width: ${30 + 10 * i}px;
                                          height: ${30 + 10 * i}px;
                                          background-color: ${getRandomHexColor()}">
                                          </div>`;
    });
    divBoxes.insertAdjacentHTML('afterbegin', newBlocks.join('\n\n'));
    divBoxes.style.visibility = 'visible';
    userInput.value = '';
  } else {
    alert('Enter a value from 1 to 100!');
    divBoxes.innerHTML = '';
    divBoxes.style.visibility = 'hidden';
    userInput.value = '';
  }
}

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', e => {
  divBoxes.innerHTML = '';
  divBoxes.style.visibility = 'hidden';
  userInput.value = '';
});
userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    createBoxes();
  }
});
