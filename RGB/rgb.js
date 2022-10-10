const randomRgb = document.getElementById('randomRgb');
const colorBox = document.querySelectorAll('.colorBox');
const reset = document.querySelector('.reset');

let numSquares = 9;
let colors = [];
let pickedColor;

function makeColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function colorPick() {
  for (let i = 0; i < colorBox.length; i++) {
    colors.push((colorBox[i].style.backgroundColor = makeColor()));
  }
  pickedColor = colors[Math.floor(Math.random() * colors.length)];
  randomRgb.innerHTML = pickedColor;
}

function resetColor() {
  colors = [];
  colorPick();
  // querySelectorAll 은 for문을 통해서만 변환
}

reset.addEventListener('click', resetColor);

colorPick();
