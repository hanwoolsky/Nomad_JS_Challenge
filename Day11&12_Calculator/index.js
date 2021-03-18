const num = document.querySelector(".cal");
const screen = document.querySelector(".screen");
let isCal = false;
let num1 = "";
let num2 = "";
let num3 = "";
let operator = "";
let OperStack = [];
let NumStack = [];

function calculate() {
  let result = 0;
  while (OperStack.length) {
    let oper = OperStack.pop();
    let num = parseFloat(NumStack.pop());
    if (oper === "+") result += num;
    else if (oper === "-") result -= num;
  }
  result += parseFloat(NumStack.pop());
  num3 = result;
  num1 = result;
  screen.innerText = result;
}

function pushOperator(str) {
  isCal = false;

  if (str === "=") {
    NumStack.push(num1);
    calculate();
  } else if (str === "+" || str === "-") {
    NumStack.push(num1);
    OperStack.push(str);
  } else {
    num2 = num1;
    operator = str;
    isCal = true;
  }
}

function pushNumber(str) {
  num3 = str;
  if (isCal === false) num1 = num3;
  else {
    let n1 = 0;
    let n2 = parseFloat(num2);
    let n3 = parseFloat(num3);
    if (operator === "*") n1 = n2 * n3;
    else n1 = n2 / n3;
    num1 = String(n1);
  }
  screen.innerText = num3;
}

function btnClick(event) {
  const text = event.target.innerText;
  const number = parseInt(text, 10);
  if (text === "C") {
    screen.innerText = 0;
    OperStack = [];
    NumStack = [];
    num1 = "";
    num2 = "";
    num3 = "";
    operator = "";
  } else if (number || number === 0) {
    num3 += text;
    screen.innerText = num3;
    pushNumber(num3);
  } else {
    pushOperator(text);
    num3 = "";
  }
}

if (num) {
  num.addEventListener("click", btnClick);
}