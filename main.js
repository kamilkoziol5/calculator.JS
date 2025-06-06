function calculator() {
  let currentNumber = "";
  let previousNumber = "";
  let operator = null;

  function renderCalculator() {
    const calc = document.createElement("div");
    calc.classList.add("calculator");

    calc.innerHTML = `
     <div class="output" id="output">0</div>
        <div class="buttons">
          <button class="btn clear">AC</button>
          <button data-operator="%" class="btn operator">%</button>
          <button data-operator="*" data-number="0" class="btn operator">*</button>
          <button data-number="7" class="btn number">7</button>
          <button data-number="8" class="btn number">8</button>
          <button data-number="9" class="btn number">9</button>
          <button data-operator="/" class="btn operator">/</button>
          
          <button data-number="4" class="btn number">4</button>
          <button data-number="5" class="btn number">5</button>
          <button data-number="6" class="btn number">6</button>
          <button data-operator="-" class="btn operator">-</button>
          
          <button data-number="1" class="btn number">1</button>
          <button data-number="2" class="btn number">2</button>
          <button data-number="3" class="btn number">3</button>
          <button data-operator="+" class="btn operator">+</button>
  
          <button data-number="0" class="btn number">0</button>
          <button class="btn dot" data-dot=".">.</button>
          <button class="btn equal">=</button>
        </div>
    `;
    document.querySelector(".app").append(calc);

    return {
      output: calc.querySelector("#output"),
      numberButtons: calc.querySelectorAll(".number"),
      operatorButtons: calc.querySelectorAll(".operator"),
      clearButton: calc.querySelector(".clear"),
      equalButton: calc.querySelector(".equal"),
      dotButton: calc.querySelector(".btn.dot"),
    };
  }

  const {
    output,
    numberButtons,
    operatorButtons,
    clearButton,
    equalButton,
    dotButton,
  } = renderCalculator();

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

  dotButton.addEventListener("click", () => {
    if (currentNumber.includes(".")) return;

    currentNumber += dotButton.dataset.dot;
    updateDisplay();
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
}

calculator();
