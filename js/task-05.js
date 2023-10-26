const refs = {
  input: document.querySelector('#name-input'),
  nameLabel: document.querySelector('#name-output')
}

refs.input.addEventListener('input', onInputChange);
function onInputChange(event) {
  const EVENTjs=event.currentTarget.value.trim()
  if (EVENTjs !== '') {
    refs.nameLabel.textContent = EVENTjs;
  } else {
    refs.nameLabel.textContent = 'Anonymous'
  }
}

