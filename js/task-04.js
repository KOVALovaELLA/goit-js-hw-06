let counterValue = 0;

const incrementButton = document.querySelector('[data-action="increment"]')
const decrementButton = document.querySelector('[data-action="decrement"]')
const valueSpan = document.getElementById('value');

function increment() {
  counterValue += 1;
  valueSpan.textContent = counterValue;
}
function decrement() {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
}



incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);