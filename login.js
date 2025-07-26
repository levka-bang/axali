const form            = document.querySelector('.login-form');
const emailInput      = document.getElementById('email');
const passwordInput   = document.getElementById('password');
const errorContainer  = document.getElementById('errorMessages');
const togglePassword  = document.getElementById('togglePassword');

togglePassword.addEventListener('click', () => {
  const isPwd = passwordInput.type === 'password';
  passwordInput.type = isPwd ? 'text' : 'password';
  togglePassword.textContent = isPwd ? 'Hide' : 'Show';
});

const emailRegex    = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

form.addEventListener('submit', e => {
  errorContainer.innerHTML = '';     
  const errors = [];

  const email = emailInput.value.trim();
  if (!email) {
    errors.push('Email is required.');
  } else if (!emailRegex.test(email)) {
    errors.push('მიუთითე სწორი მაილი');
  }

  const pwd = passwordInput.value.trim();
  if (!pwd) {
    errors.push('Password is required.');
  } else if (!passwordRegex.test(pwd)) {
    errors.push('პაროლის სიგრძე უნდა იყოს > 6');
  }

  if (errors.length) {
    e.preventDefault();
    const ul = document.createElement('ul');
    errors.forEach(msg => {
      const li = document.createElement('li');
      li.textContent = msg;
      ul.appendChild(li);
    });
    errorContainer.appendChild(ul);
  }
});
