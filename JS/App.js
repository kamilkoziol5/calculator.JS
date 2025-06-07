import { Calculator } from "./Calculator.js";
import { createCalculatorUI } from "./CalculatorUI.js";

const {
  output,
  numberButtons,
  operatorButtons,
  clearButton,
  equalButton,
  dotButton,
} = createCalculatorUI();

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

dotButton.addEventListener("click", () => {
  calc.appendNumber(".");
});

equalButton.addEventListener("click", () => calc.equals());
clearButton.addEventListener("click", () => calc.clear());
