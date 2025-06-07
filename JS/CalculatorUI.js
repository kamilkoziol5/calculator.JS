export function createCalculatorUI() {
  const calc = document.createElement("div");
  calc.classList.add("calculator");

  calc.innerHTML = `
   <div class="output" id="output">0</div>
      <div class="buttons">
        <button class="btn clear">AC</button>
        <button data-operator="%" class="btn operator">%</button>
        <button data-operator="*" class="btn operator">*</button>
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
        <button class="btn dot" data-number=".">.</button>
        <button class="btn equal">=</button>
      </div>
  `;
  document.querySelector(".app").append(calc);

  return {
    output: calc.querySelector("#output"),
    numberButtons: calc.querySelectorAll(".btn.number"),
    operatorButtons: calc.querySelectorAll(".btn.operator"),
    clearButton: calc.querySelector(".btn.clear"),
    equalButton: calc.querySelector(".btn.equal"),
    dotButton: calc.querySelector(".btn.dot"),
  };
}
