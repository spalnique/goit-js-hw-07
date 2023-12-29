const loginForm = document.querySelector('.login-form');

const userData = {};

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const userData = { email, password };

  if (!email || !password) {
    return alert('All form fields must be filled in');
  }

  userData.email = email.trim();
  userData.password = password.trim();
  form.reset();
  console.log(userData);
  return userData;
});
