const categoriesNumber = document.querySelectorAll('.item');
// console.log(categoriesNumber);
console.log(`Number of categories: ${categoriesNumber.length}`);

categoriesNumber.forEach(function (el, index) {
  const numberOfElements = el.querySelectorAll('li');
  const nameOfElements = el.querySelector('h2');
  console.log();

  console.log(`Category: ${nameOfElements.textContent}`);
  console.log(`Elements: ${numberOfElements.length}`);
});