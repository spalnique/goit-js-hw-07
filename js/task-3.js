const inputElement = document.querySelector('#name-input');
const spanElement = document.querySelector('#name-output');
const headerElement = document.querySelector('h1');

headerElement.classList.add('output-text');

inputElement.addEventListener('input', e =>
  e.currentTarget.value.trim()
    ? (spanElement.textContent = e.currentTarget.value.trim())
    : (spanElement.textContent = 'Anonymous'),
);
