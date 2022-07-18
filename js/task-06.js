const inputAttribute = document.querySelector('input');

const inputLength = Number(inputAttribute.dataset.length);

inputAttribute.onblur = function () {
  console.log(this.value.trim().length);
  console.log(inputLength);

  if (inputLength === this.value.trim().length) {
    this.classList.remove('invalid');
    this.classList.add('valid');
  } else {
    this.classList.remove('valid');
    this.classList.add('invalid');
  }
};