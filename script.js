//CONSTANTS
const numButtons = document.querySelectorAll(".num");
const operButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const acButton = document.querySelector(".ac");
const equalsButton = document.querySelector(".equals");
const percButton = document.querySelector(".percent");
const display = document.querySelector("#display");
const display2 = document.querySelector("#display2");
let storedOper;
let prevVal;
let currVal;

//ARITHMETIC FUNCTIONS
function add(a, b) {
  return parseInt(a) + parseInt(b);
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}



//OPERATE FUNCTION
function operate(operator, a, b) {
  switch (operator) {
    case "+":
      display2.innerText = add(a, b);
      break;
    case "-":
      display2.innerText = subtract(a, b);
      break;
    case "*":
      display2.innerText = multiply(a, b);
      break;
    case "/":
      display2.innerText = divide(a, b);
      break;
}
}

function clearDisplay() {
  display.innerText = "";
  display2.innerText = "";
  prevVal = '';
  currVal = '';
  storedOper = '';
}

function backspace(newStr) {
 
}

function appNum(num) {
  display2.innerText = display2.innerText.toString() + num.toString();
  
}

//EVENT LISTENERS
function addEvent() {
  numButtons.forEach(button => {
    button.addEventListener("click", () => {
      appNum(button.innerText);
    });
  });

  operButtons.forEach(button => {
    button.addEventListener("click", () => {
      prevVal = display2.innerText;
      storedOper = button.id;
      display.innerText = display2.innerText + button.id;
      display2.innerText = '';
    });
  });

  equalsButton.addEventListener("click", () => {
    currVal = display2.innerText;
    operate(storedOper, prevVal, currVal);
    display.innerText = '';
  });
}

clearButton.addEventListener("click", clearDisplay);
acButton.addEventListener("click", backspace);

addEvent();
