const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulElement = document.querySelector('#ingredients');
const elements = ingredients.map(ingredient => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.classList.add('item');
  ingredientsItem.textContent = ingredient;

  return ingredientsItem
})
ulElement.append(...elements);



