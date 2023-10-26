

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); 

  const formData = {};
  const formElements = loginForm.elements;

  for (let i = 0; i < formElements.length; i++) {
    if (formElements[i].type !== 'submit') {
      const value = formElements[i].value.trim();
      if (value === '') {
        alert('Всі поля повинні бути заповнені');
        return; 
      }
      formData[formElements[i].name] = value;
    }
  }

  if (!formData.email || !formData.password) {
    alert('Email і пароль повинні бути заповнені');
  } else {
    console.log(formData);

    loginForm.reset(); 
  }
});


//const loginForm = document.querySelector('.login-form');

//loginForm.addEventListener('submit', function (event) {
//  event.preventDefault(); 

 // const emailInput = loginForm.elements.email;
 // const passwordInput = loginForm.elements.password;

//  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
//    alert('Всі поля повинні бути заповнені');
 // } else {
 //   const loginData = {
 //     email: emailInput.value,
 //     password: passwordInput.value,
 //   };

 //   console.log(loginData);

//    loginForm.reset(); 
//  }
//});