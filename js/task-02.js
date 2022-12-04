const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const listItems = [];
for (let ingredient of ingredients) {
  const ingredItem = document.createElement("li");
  ingredItem.classList.add("item");
  ingredItem.textContent = `${ingredient}`;
  listItems.push(ingredItem);
}
ingredientsList.append(...listItems);
