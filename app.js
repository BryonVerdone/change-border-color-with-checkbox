//select images

const images = document.querySelectorAll('.img-container img');

console.log(images);

// select btns

const redBtn = document.getElementById('red');
const greenBtn = document.getElementById('green');
const blueBtn = document.getElementById('blue');

// functionality

redBtn.addEventListener('click', function () {
  for (let i = 0; i < images.length; i++) {
    images[i].style.border = ' 3px solid red';
  }
});
greenBtn.addEventListener('click', function () {
  for (let i = 0; i < images.length; i++) {
    images[i].style.border = ' 3px solid green';
  }
});
blueBtn.addEventListener('click', function () {
  for (let i = 0; i < images.length; i++) {
    images[i].style.border = ' 3px solid blue';
  }
});
