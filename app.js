// Btns
const redBtn = document.getElementById('red');
const greenBtn = document.getElementById('green');
const blueBtn = document.getElementById('blue');

// images

// need to set up add border to all images

const images = document.querySelector('.img');

redBtn.addEventListener('click', function () {
  images.classList.add('border-red');
});
