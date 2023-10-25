const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
    const enteredValue = input.value;
    const htmlLength = input.getAttribute("data-length");
    if (enteredValue.length == htmlLength) {
        input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}