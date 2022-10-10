const randomRgb = document.getElementById('randomRgb');
const colorBox = document.querySelectorAll('.colorBox');

let numSquares = 9;
let colors = [];
let pickedColor;

function makeColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

randomRgb.innerHTML = makeColor();

for (let i = 0; i < colorBox.length; i++) {
  colorBox[i].style.backgroundColor = makeColor();
}
// querySelectorAll 은 for문을 통해서만 변환
