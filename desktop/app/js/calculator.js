const resultDisplay = document.getElementById("result");
const expressionDisplay = document.getElementById("expression");

let currentValue = "0";
let previousValue = null;
let operator = null;
let shouldResetScreen = false;

/* Update display */

function updateDisplay() {

    resultDisplay.textContent = currentValue;

    expressionDisplay.textContent =
        operator && previousValue !== null
            ? `${previousValue} ${operator}`
            : "";

}

/* Number input */

function inputNumber(number) {

    if (currentValue === "Error") clearAll();

    if (currentValue === "0" || shouldResetScreen) {
        currentValue = number;
        shouldResetScreen = false;
    } else {
        currentValue += number;
    }

    updateDisplay();
}

/* Decimal */

function inputDecimal() {

    if (currentValue === "Error") clearAll();

    if (shouldResetScreen) {
        currentValue = "0";
        shouldResetScreen = false;
    }

    if (!currentValue.includes(".")) {
        currentValue += ".";
    }

    updateDisplay();
}

/* Operator */

function handleOperator(op) {

    if (currentValue === "Error") return;

    if (operator && shouldResetScreen) {
        operator = op;
        return updateDisplay();
    }

    if (operator !== null) calculate();

    previousValue = currentValue;
    operator = op;
    shouldResetScreen = true;

    updateDisplay();
}

/* Calculation */

function calculate() {

    if (!operator || previousValue === null) return;

    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);

    let result;

    switch (operator) {

        case "+": result = prev + current; break;
        case "-": result = prev - current; break;
        case "*": result = prev * current; break;
        case "/": result = current === 0 ? "Error" : prev / current; break;
        default: return;

    }

    currentValue = result.toString();
    operator = null;
    previousValue = null;
    shouldResetScreen = true;

    updateDisplay();
}

/* Clear */

function clearAll() {

    currentValue = "0";
    previousValue = null;
    operator = null;
    shouldResetScreen = false;

    updateDisplay();
}

/* Backspace */

function backspace() {

    if (currentValue === "Error") return clearAll();
    if (shouldResetScreen) return;

    currentValue =
        currentValue.length === 1
            ? "0"
            : currentValue.slice(0, -1);

    updateDisplay();
}

/* Plus minus */

function toggleSign() {

    if (currentValue === "Error") return;

    currentValue = (parseFloat(currentValue) * -1).toString();

    updateDisplay();
}

/* Button events */

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", () => {

        const { number, operator: op, action } = button.dataset;

        if (number) inputNumber(number);
        if (op) handleOperator(op);

        switch (action) {

            case "decimal": inputDecimal(); break;
            case "equals": calculate(); break;
            case "clear": clearAll(); break;
            case "backspace": backspace(); break;
            case "plusminus": toggleSign(); break;

        }

    });

});

/* Highlight button */

function highlightButton(selector) {

    const button = document.querySelector(selector);
    if (!button) return;

    button.classList.add("key-active");

    setTimeout(() => button.classList.remove("key-active"), 100);
}

/* Keyboard support */

document.addEventListener("keydown", (event) => {

    const key = event.key;

    if (!isNaN(key)) {
        inputNumber(key);
        highlightButton(`[data-number="${key}"]`);
    }

    if ("+-*/".includes(key)) {
        handleOperator(key);
        highlightButton(`[data-operator="${key}"]`);
    }

    if (key === ".") {
        inputDecimal();
        highlightButton(`[data-action="decimal"]`);
    }

    if (key === "Enter" || key === "=") {
        event.preventDefault();
        calculate();
        highlightButton(`[data-action="equals"]`);
    }

    if (key === "Backspace") {
        backspace();
        highlightButton(`[data-action="backspace"]`);
    }

    if (key === "Escape") {
        clearAll();
        highlightButton(`[data-action="clear"]`);
    }

});

/* Initialize */

updateDisplay();