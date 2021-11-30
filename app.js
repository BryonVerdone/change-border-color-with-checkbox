// Btns
const redBtn = document.getElementById('red');
const greenBtn = document.getElementById('green');
const blueBtn = document.getElementById('blue');

// images

const images = document.querySelectorAll('.img');

redBtn.addEventListener('click', function (e) {
  e.classList.add('border-red');
});
