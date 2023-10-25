
  
  function handleSubmit(event) {
    event.preventDefault(); 

    const form = event.target; 
    const formData = new FormData(form); 

    
    let isFormValid = true;
    formData.forEach((value) => {
      if (value.trim() === '') {
        isFormValid = false;
      }
    });

    if (!isFormValid) {
      alert('Всі поля повинні бути заповнені!');
    } else {
     
      const formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });

     
      console.log(formDataObject);

     
      form.reset();
    }
  }

  
  const loginForm = document.querySelector('.login-form');

  
  loginForm.addEventListener('submit', handleSubmit);