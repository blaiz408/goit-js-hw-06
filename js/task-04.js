const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector('#value');

let counterValue = 0;

function incrementCount(e) {
    counterValue += 1;
    value.textContent = counterValue;
}

function decrementCount(e) {
    counterValue -= 1;
    value.textContent = counterValue;
}


incrementButton.addEventListener('click', incrementCount);
decrementButton.addEventListener('click', decrementCount);