const output = document.querySelector("#output");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equal");

let currentNumber = "";
let previousNumber = "";
let operator = null;

numberButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentNumber += btn.dataset.number;
    updateDisplay();
  });
});

operatorButtons.forEach((opBtn) => {
  opBtn.addEventListener("click", () => {
    const clickedOperator = opBtn.dataset.operator;

    if (clickedOperator === "%") {
      if (currentNumber !== "") {
        currentNumber = (parseFloat(currentNumber) / 100).toString();
        updateDisplay();
      }
      return;
    }

    if (currentNumber === "" && previousNumber === "") return;

    if (currentNumber === "" && previousNumber !== "") {
      operator = clickedOperator;
    } else if (currentNumber !== "") {
      operator = clickedOperator;
      previousNumber = currentNumber;
      currentNumber = "";
    }

    updateDisplay();
  });
});

function updateDisplay() {
  if (operator === null && currentNumber !== "") {
    output.textContent = currentNumber;
  } else if (operator !== null && currentNumber === "") {
    output.textContent = `${previousNumber} ${operator}`;
  } else {
    output.textContent = `${previousNumber} ${operator} ${currentNumber}`;
  }
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = null;
  output.textContent = "0";
}

clearButton.addEventListener("click", clearDisplay);

equalButton.addEventListener("click", () => {
  if (!currentNumber || !previousNumber) return;

  const result = calculate();
  output.textContent = result;
  operator = null;
  currentNumber = result;
  previousNumber = "";
});

function calculate() {
  const a = parseFloat(previousNumber);
  const b = parseFloat(currentNumber);

  if (isNaN(a) || isNaN(b)) return;

  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Error";
    default:
      return b;
  }
}
