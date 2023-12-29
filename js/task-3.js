const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');
const header = document.querySelector('h1');

header.classList.add('output-text');

input.addEventListener('input', e =>
  e.currentTarget.value.trim()
    ? (span.textContent = e.currentTarget.value.trim())
    : (span.textContent = 'Anonymous'),
);
