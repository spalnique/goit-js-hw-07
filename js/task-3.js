const inputElement = document.querySelector('#name-input');
const spanElement = document.querySelector('#name-output');
const headerElement = document.querySelector('h1');

headerElement.innerHTML = spanElement.outerHTML;

headerElement.classList.add('output-text');

inputElement.addEventListener('input', event =>
  event.currentTarget.value.trim()
    ? (headerElement.textContent = event.currentTarget.value.trim())
    : (headerElement.textContent = 'Anonymous'),
);
