const inputBox = document.querySelector('.text');
const number = document.querySelectorAll('.number');
const equal = document.querySelector('.result');
const clear = document.querySelector('.clear');
const operator = document.querySelectorAll('.operator');

function numberBtn(e) {
  if (inputBox.value[0] === '0') {
    inputBox.value = '';
    inputBox.value += e.target.value;
  } else {
    inputBox.value += e.target.value;
  }
}

function operatorBtn(e) {
  let result = 0;
  if (e.target.value === '+') {
    result = +inputBox.value + 
  }
  if (e.target.value === '-') {
  }
  if (e.target.value === 'x') {
  }
  if (e.target.value === '/') {
  }
}

function resultBtn() {}

function clearBtn() {}

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener('click', numberBtn);
}
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', operatorBtn);
}
equal.addEventListener('click', resultBtn);
clear.addEventListener('click', clearBtn);
