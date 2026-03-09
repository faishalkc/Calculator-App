const resultDisplay = document.getElementById("result");
const expressionDisplay = document.getElementById("expression");

let currentValue = "0";
let previousValue = null;
let operator = null;
let shouldResetScreen = false;



/* Update display */

function updateDisplay() {
    resultDisplay.textContent = currentValue;

    if (operator && previousValue !== null) {
        expressionDisplay.textContent = `${previousValue} ${operator}`;
    } else {
        expressionDisplay.textContent = "";
    }
}



/* Number input */

function inputNumber(number) {

    if (currentValue === "Error") {
        clearAll();
    }

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

    if (currentValue === "Error") {
        clearAll();
    }

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
        updateDisplay();
        return;
    }

    if (operator !== null) {
        calculate();
    }

    previousValue = currentValue;
    operator = op;
    shouldResetScreen = true;

    updateDisplay();
}



/* Calculation */

function calculate() {

    if (operator === null || previousValue === null) return;

    let prev = parseFloat(previousValue);
    let current = parseFloat(currentValue);

    let result;

    switch (operator) {

        case "+":
            result = prev + current;
            break;

        case "-":
            result = prev - current;
            break;

        case "*":
            result = prev * current;
            break;

        case "/":
            result = current === 0 ? "Error" : prev / current;
            break;

        default:
            return;
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

    if (currentValue === "Error") {
        clearAll();
        return;
    }

    if (shouldResetScreen) return;

    if (currentValue.length === 1) {
        currentValue = "0";
    } else {
        currentValue = currentValue.slice(0, -1);
    }

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

        if (button.dataset.number) {
            inputNumber(button.dataset.number);
        }

        if (button.dataset.operator) {
            handleOperator(button.dataset.operator);
        }

        if (button.dataset.action === "decimal") {
            inputDecimal();
        }

        if (button.dataset.action === "equals") {
            calculate();
        }

        if (button.dataset.action === "clear") {
            clearAll();
        }

        if (button.dataset.action === "backspace") {
            backspace();
        }

        if (button.dataset.action === "plusminus") {
            toggleSign();
        }

    });

});



/* Highlight button effect */

function highlightButton(selector) {

    const button = document.querySelector(selector);

    if (!button) return;

    button.classList.add("key-active");

    setTimeout(() => {
        button.classList.remove("key-active");
    }, 100);

}



/* Keyboard support */

document.addEventListener("keydown", (event) => {

    const key = event.key;

    /* Numbers */

    if (!isNaN(key)) {
        inputNumber(key);
        highlightButton(`[data-number="${key}"]`);
    }

    /* Operators */

    if (key === "+" || key === "-" || key === "*" || key === "/") {
        handleOperator(key);
        highlightButton(`[data-operator="${key}"]`);
    }

    /* Decimal */

    if (key === ".") {
        inputDecimal();
        highlightButton(`[data-action="decimal"]`);
    }

    /* Equals */

    if (key === "Enter" || key === "=") {
        event.preventDefault();
        calculate();
        highlightButton(`[data-action="equals"]`);
    }

    /* Backspace */

    if (key === "Backspace") {
        backspace();
        highlightButton(`[data-action="backspace"]`);
    }

    /* Clear */

    if (key === "Escape") {
        clearAll();
        highlightButton(`[data-action="clear"]`);
    }

});



/* Initialize */

updateDisplay();