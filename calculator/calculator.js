const inputBox = document.querySelector('.text');
const number = document.querySelectorAll('.number');
const equal = document.querySelector('.result');
const clear = document.querySelector('.clear');
const operator = document.querySelectorAll('.operator');

function numberBtn() {
  inputBox.value = 1;
}

function resultBtn() {}

function clearBtn() {}

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener('click', numberBtn);
}
equal.addEventListener('click', resultBtn);
clear.addEventListener('click', clearBtn);
