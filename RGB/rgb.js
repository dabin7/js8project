const randomRgb = document.getElementById('randomRgb');
const wrapper = document.getElementById('wrapper');
const colorBox = document.querySelectorAll('.colorBox');
const reset = document.querySelector('.reset');
const message = document.querySelector('.message');

let colors = [];
let pickedColor;

function makeColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function colorPick() {
  for (let i = 0; i < colorBox.length; i++) {
    colors.push((colorBox[i].style.backgroundColor = makeColor()));
  }
  pickedColor = colors[Math.floor(Math.random() * colors.length)];
  randomRgb.innerHTML = pickedColor;
}

function clickColor(event) {
  const clickRgb = event.target.style.backgroundColor;
  if (clickRgb === pickedColor) {
    for (let i = 0; i < colorBox.length; i++) {
      colorBox[i].style.backgroundColor = pickedColor;
    }
    randomRgb.style.backgroundColor = pickedColor;
    message.textContent = 'correct !';
  } else {
    message.textContent = 'retry !';
    event.target.classList.add('hidden');
  }
  //clickRgb === pickedColor ?? 완전히 같아야됨. 띄어쓰기까지
}

function resetColor() {
  colors = [];
  colorPick();
  randomRgb.style.backgroundColor = '';
  for (let i = 0; i < colorBox.length; i++) {
    colorBox[i].classList.remove('hidden');
  }
  // querySelectorAll 은 for문을 통해서만 변환
}

reset.addEventListener('click', resetColor);
wrapper.addEventListener('click', clickColor);

colorPick();
