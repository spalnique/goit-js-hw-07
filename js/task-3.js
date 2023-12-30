const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', e =>
  e.currentTarget.value.trim()
    ? (output.textContent = e.currentTarget.value.trim())
    : (output.textContent = 'Anonymous'),
);
