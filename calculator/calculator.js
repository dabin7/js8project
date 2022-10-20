const calcValue = document.querySelectorAll('.btn');
const inputBox = document.querySelector('.text');
//input과 btn을 따로 나눠서 분류했어야함.
const data = {
  num1: 0, // 최근 넘버?
  num2: 0, // 임시 넘버?
  operator: '',
};
//객체를 만들어서 함.
function setNumber(value) {
  if (data.operator) {
    const result = String(data.num2) + value;
    data.num2 = Number(result);
    renderNumber(data.num2);
  } else {
    const result = String(data.num1) + value;
    data.num1 = Number(result);
    renderNumber(data.num1);
  }
}

function setOperation(operator) {
  if (data.num1 && data.num2) {
    calculator();
    renderNumber(data.num1);
  }
  data.operator = operator;
}

function renderNumber(number) {
  if (inputBox) {
    inputBox.textContent = number;
  }
}

function reset() {
  data.num1 = 0;
  data.num2 = 0;
  data.operator = '';
  renderNumber(0);
}

function finish() {
  calculator();
  renderNumber(data.num1);
  data.operator = '';
}

function handleClickBtn(e) {
  const { value } = e.target;

  if (/[0-9]/.test(value)) {
    return setNumber(value);
  }
  if (value === 'c') {
    return reset();
  }
  if (value === '=') {
    return finish();
  }

  return setOperation(value);
}

function init() {
  calcValue.forEach((button) => {
    button.addEventListener('click', handleClickBtn);
  });
  renderNumber(0);
}

function calculator() {
  switch (data.operator) {
    case '+': {
      data.num1 += data.num2;
      break;
    }
    case '-': {
      data.num1 -= data.num2;
      break;
    }
    case 'x': {
      data.num1 *= data.num2;
      break;
    }
    case '/': {
      data.num1 /= data.num2;
      break;
    }
    default: {
      break;
    }
  }
  data.num2 = 0;
}

init();

// function numberBtn(e) {
//   if (inputBox.value[0] === '0') {
//     inputBox.value = '';
//     inputBox.value += e.target.value;
//   } else {
//     inputBox.value += e.target.value;
//   }
// }

// function operatorBtn(e) {
//   let result = 0;
//   if (e.target.value === '+') {
//     result = +inputBox.value +
//   }
//   if (e.target.value === '-') {
//   }
//   if (e.target.value === 'x') {
//   }
//   if (e.target.value === '/') {
//   }
// }

// for (let i = 0; i < number.length; i++) {
//   number[i].addEventListener('click', numberBtn);
// }
// for (let i = 0; i < operator.length; i++) {
//   operator[i].addEventListener('click', operatorBtn);
// }
// equal.addEventListener('click', resultBtn);
// clear.addEventListener('click', clearBtn);
