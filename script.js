let displayValue = '';
let firstOperand = '';
let operator = '';
let waitingForSecondOperand = false;

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    firstOperand = '';
    operator = '';
    waitingForSecondOperand = false;
    updateDisplay();
}

function appendNumber(number) {
    if (waitingForSecondOperand) {
        displayValue = number.toString();
        waitingForSecondOperand = false;
    } else {
        displayValue += number.toString();
    }
    updateDisplay();
}
function clearLastDigit() {
    var currentValue = displayValue;
    if (currentValue.length > 0) {
        displayValue = currentValue.slice(0, -1);
    }
    updateDisplay();
}
function appendOperator(op) {
    if (operator === '' && displayValue !== '') {
        firstOperand = parseFloat(displayValue);
        operator = op;
        waitingForSecondOperand = true;
    } else if (operator !== '' && displayValue !== '') {
        calculate();
        operator = op;
        waitingForSecondOperand=true;
    }
    else calculate();
}

function calculate() {
    const secondOperand = parseFloat(displayValue);
    let result = 0;
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    displayValue = result.toString();
    firstOperand = result;
    operator = '';
    updateDisplay();
}

updateDisplay();
