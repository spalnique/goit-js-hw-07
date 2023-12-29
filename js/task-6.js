const userInput = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  boxesContainer.textContent = '';
  if (userInput.value >= 1 && userInput.value <= 100) {
    const newBlocks = Array.from({ length: userInput.value }, (_, i) => {
      return `<div class="new-box" style="width: ${30 + 10 * i}px;
                                          height: ${30 + 10 * i}px;
                                          background-color: ${getRandomHexColor()}">
                                          </div>`;  
    });
    boxesContainer.insertAdjacentHTML('afterbegin', newBlocks.join('\n\n'));
    userInput.value = '';
  } else {
    alert('Enter a value from 1 to 100!');
    boxesContainer.textContent = '';
    userInput.value = '';
  }
}

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', e => {
  boxesContainer.textContent = '';
  userInput.value = '';
});
userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    createBoxes();
  }
});
