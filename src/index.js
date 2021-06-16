import './styles/reset.scss';
import './styles/global.scss';
import './styles/main.scss';

let op = '+';
let x = '10';
let y = '5';

operate(op, x, y);

function add(numOne, numTwo) {
  return numOne + numTwo;
}

function subtract(numOne, numTwo) {
  return numOne - numTwo;
}

function multiply(numOne, numTwo) {
  return numOne * numTwo;
}

function divide(numOne, numTwo) {
  return numOne / numTwo;
}

function operate(operator, numOne, numTwo) {
  switch (operator) {
    case '+':
      console.log(add(+numOne, +numTwo));
    case '-':
      console.log(subtract(+numOne, +numTwo));
    case '*':
      console.log(multiply(+numOne, +numTwo));
    case '/':
      console.log(divide(+numOne, +numTwo));
  }
}
