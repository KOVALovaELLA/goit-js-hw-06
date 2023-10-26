const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
    const enteredValue = input.value;
    const htmlLength = Number(input.getAttribute("data-length"));
  if (enteredValue.length === htmlLength) {
    validOrInvalid("invalid", "valid");
        
  } else {
    validOrInvalid("valid", "invalid");
  }
}
function validOrInvalid(a, b) {
  input.classList.remove(a);
  input.classList.add(b);
}