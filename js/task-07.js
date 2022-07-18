const text = document.querySelector('#text');

document
  .getElementById('font-size-control')
  .addEventListener('input', function () {
    console.log(Number(this.value));

    text.style.fontSize = Number(this.value) + 'px';
  });