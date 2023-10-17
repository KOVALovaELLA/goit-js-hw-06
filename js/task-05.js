const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', function() {
  // Отримуємо значення введеного тексту
  const enteredName = nameInput.value;

  // Оновлюємо вміст елементу span в залежності від значення
  if (enteredName.trim() === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = enteredName;
  }
});