const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); 

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('Всі поля повинні бути заповнені');
  } else {
    const loginData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log(loginData);

    loginForm.reset(); 
  }
});