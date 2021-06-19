import './styles/reset.scss';
import './styles/global.scss';
import './styles/main.scss';

const operandButtons = document.querySelectorAll('.operation__operand');
const operatorButtons = document.querySelectorAll('.operation__operator');
const inputScreen = document.querySelector('.interface__screen__input');
const enterButton = document.querySelector('.calculation__enter');
const clearButton = document.querySelector('.calculation__clear');
const posNegButton = document.querySelector('.operation__posneg');
const decimalButton = document.querySelector('.operation__decimal');

let operandOne = '';
let operandTwo = '';
let currentOperator = null;
let resetController = false;

operandButtons.forEach((operandButton) => {
  operandButton.addEventListener('click', (e) => {
    setOperandOne(e.target.dataset.key);
  });
});

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener('click', (e) => {
    setOperation(e.target.dataset.operator);
  });
});

enterButton.addEventListener('click', evaluate);

clearButton.addEventListener('click', () => {
  resetValues();
  clearScreen();
});

posNegButton.addEventListener('click', () => {
  inputScreen.textContent = posNeg(inputScreen.textContent);
});

decimalButton.addEventListener('click', decimal);

function setOperandOne(operandValue) {
  if (resetController === true) clearScreen();
  inputScreen.textContent += operandValue;
}

function setOperation(operator) {
  if (currentOperator !== null) evaluate();
  operandOne = inputScreen.textContent;
  currentOperator = operator;
  resetController = true;
}

function evaluate() {
  if (currentOperator === null) return;
  if (currentOperator == '/' && inputScreen.textContent == '0') {
    resetValues();
    clearScreen();
    alert("You can't handle infinity. Try again.");
  }
  operandTwo = inputScreen.textContent;
  inputScreen.textContent = round(operate(currentOperator, operandOne, operandTwo));
  resetValues();
  resetController = true;
}

function operate(operator, numOne, numTwo) {
  switch (operator) {
    case '+':
      return add(numOne, numTwo);
    case '-':
      return subtract(numOne, numTwo);
    case '*':
      return multiply(numOne, numTwo);
    case '/':
      return divide(numOne, numTwo);
    default:
      return null;
  }
}

function add(numOne, numTwo) {
  return +numOne + +numTwo;
}

function subtract(numOne, numTwo) {
  return +numOne - +numTwo;
}

function multiply(numOne, numTwo) {
  return +numOne * +numTwo;
}

function divide(numOne, numTwo) {
  return +numOne / +numTwo;
}

function round(number) {
  return Math.round(number * 100) / 100;
}

function resetValues() {
  operandOne = '';
  operandTwo = '';
  currentOperator = null;
}

function clearScreen() {
  inputScreen.textContent = '';
  resetController = false;
}

function posNeg(number) {
  return number * -1;
}

function decimal() {
  if (inputScreen.textContent.includes('.')) return;
  inputScreen.textContent += '.';
}
