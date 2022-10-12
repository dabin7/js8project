const randomRgb = document.getElementById('randomRgb');
const wrapper = document.getElementById('wrapper');
const colorBox = document.querySelectorAll('.colorBox');
const reset = document.querySelector('.reset');
const message = document.querySelector('.message');
const hardMode = document.querySelector('.hmode');
const easyMode = document.querySelector('.emode');
//easyMode 따로?

let colors = [];
let pickedColor;

function makeColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function colorPick() {
  colors = [];
  for (let i = 0; i < colorBox.length; i++) {
    if (colorBox[i].style.display !== 'none') {
      colors.push((colorBox[i].style.backgroundColor = makeColor()));
    }
  }
  console.log(colors);
  pickedColor = colors[Math.floor(Math.random() * colors.length)];
  randomRgb.innerHTML = pickedColor;
}
//display = none인거는 pick이 안되게

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

let deleteBox = 6;
let clicked = false;

function emode() {
  if (colorBox[3].style.display === 'none') {
    return;
  }
  if (clicked) {
    deleteBox = 3;
    clicked = false;
  } else {
    deleteBox = 6;
    clicked = true;
  }
  for (let i = deleteBox; i < colorBox.length; i++) {
    colorBox[i].style.display = 'none';
  }
  colorPick();
  //false가 되야되는데 왜 트루지?   = for문에 있어서
  //pickedColor가 없어진 colorBox 임 = ??
  //3번클릭시 clicked가 true가됨.
}

function hmode() {
  if (colorBox[6].style.display === '') {
    return;
  }
  if (clicked) {
    deleteBox = 0;
    clicked = false;
  } else {
    deleteBox = 3;
    clicked = true;
  }
  for (let i = deleteBox; i < colorBox.length; i++) {
    colorBox[8 - i].style.display = '';
  }
  colorPick();
}

easyMode.addEventListener('click', emode);
hardMode.addEventListener('click', hmode);
reset.addEventListener('click', resetColor);
wrapper.addEventListener('click', clickColor);

colorPick();

//#navBar > button x  button o
