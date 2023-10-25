const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.querySelector('#ingredients')
let jsList = []
ingredients.forEach((ingredient) => {
  const li = document.createElement('li')
  li.textContent = ingredient
  li.classList.add('item')
  jsList.push(li);
})
ulIngredients.append(...jsList);

console.log(ulIngredients)