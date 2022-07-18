const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

for (let ingredient of ingredients) {

  let listItems = [];

  const ingredItem = document.createElement('li');
  ingredItem.classList.add('item');
  ingredItem.textContent = `${ingredient}`;

  listItems.push(ingredItem);
  ingredientsList.append(...listItems);
}
