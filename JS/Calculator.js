export class Calculator {
  constructor(outputElement) {
    this.output = outputElement;
    this.clear();
  }

  clear() {
    this.currentNumber = "";
    this.previousNumber = "";
    this.operator = null;
    this.updateDisplay();
  }

  appendNumber(number) {
    if (number === "." && this.currentNumber.includes(".")) return;
    this.currentNumber += number;
    this.updateDisplay();
  }

  chooseOperator(op) {
    if (op === "%") {
      if (this.currentNumber !== "") {
        this.currentNumber = (parseFloat(this.currentNumber) / 100).toString();
        this.updateDisplay();
      }
      return;
    }

    if (this.currentNumber === "" && this.previousNumber === "") return;
    if (this.currentNumber === "" && this.previousNumber !== "") {
      this.operator = op;
    } else {
      this.operator = op;
      this.previousNumber = this.currentNumber;
      this.currentNumber = "";
    }
    this.updateDisplay();
  }

  calculate() {
    const a = parseFloat(this.previousNumber);
    const b = parseFloat(this.currentNumber);

    if (!isNaN(a) || isNaN(b)) return;

    switch (this.operator) {
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

  equals() {
    if (!this.currentNumber && !this.previousNumber) return;
    const result = this.calculate();
    this.currentNumber = result.toString();
    this.previousNumber = "";
    this.operator = null;
    this.updateDisplay();
  }

  updateDisplay() {
    if (this.operator === null && this.currentNumber !== "") {
      this.output.textContent = this.currentNumber;
    } else if (this.operator && this.currentNumber === "") {
      this.output.textContent = `${this.previousNumber} ${this.operator}`;
    } else if (this.previousNumber && this.currentNumber && this.operator) {
      this.output.textContent = `${this.previousNumber} ${this.operator} ${this.currentNumber}`;
    } else {
      this.output.textContent = "0";
    }
  }
}
