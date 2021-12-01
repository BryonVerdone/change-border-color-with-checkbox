// Btns
const redBtn = document.getElementById('red');
const greenBtn = document.getElementById('green');
const blueBtn = document.getElementById('blue');

// images

const imgOne = document.getElementById('grey');
const imgTwo = document.getElementById('code');
const imgThree = document.getElementById('desk');
// need to set up add border to all images

redBtn.addEventListener('click', function () {
  imgOne.classList.add('border-red');
  imgTwo.classList.add('border-red');
  imgThree.classList.add('border-red');
  if (imgOne.classList.contains('border-green')) {
    imgOne.classList.remove('border-green');
  }
});

greenBtn.addEventListener('click', function () {
  imgOne.classList.remove('border-red');
  imgTwo.classList.remove('border-red');
  imgThree.classList.remove('border-red');
  imgOne.classList.add('border-green');
  imgTwo.classList.add('border-green');
  imgThree.classList.add('border-green');
});
