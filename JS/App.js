import { Calculator } from "./Calculator.js";
import { createCalculatorUI } from "./CalculatorUI.js";

const { output, numberButtons, operatorButtons, clearButton, equalButton } =
  createCalculatorUI();

const calc = new Calculator(output);

numberButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    calc.appendNumber(btn.dataset.number);
  });
});

operatorButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    calc.chooseOperator(btn.dataset.operator);
  });
});

equalButton.addEventListener("click", () => calc.equals());
clearButton.addEventListener("click", () => calc.clear());
