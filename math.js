let inputA = '';
let operator = '';
let inputB = '';

// Append numbers
function appendNumber(number) {
    inputA += number;
    updateDisplay();
}

// Append operations
function appendOperation(op) {
    if (inputA === '' && op !== '^2' && op !== '^3' && op !== 'SqRt' && op !== 'CuRt') return;

    // Unary operations: calculate immediately using inputA
    if (op === '^2') {
        inputA = (parseFloat(inputA) ** 2).toString();
        updateDisplay();
        return;
    }
    if (op === '^3') {
        inputA = (parseFloat(inputA) ** 3).toString();
        updateDisplay();
        return;
    }
    if (op === 'SqRt') {
        inputA = (Math.sqrt(parseFloat(inputA))).toString();
        updateDisplay();
        return;
    }
    if (op === 'CuRt') {
        inputA = (Math.cbrt(parseFloat(inputA))).toString();
        updateDisplay();
        return;
    }

    // For binary operations
    if (inputB !== '' && inputA !== '') {
        calculate();
    }

    operator = op;
    inputB = inputA;
    inputA = '';
    updateDisplay();
}

// Perform calculation for binary operations
function calculate() {
    if (inputB === '' || inputA === '' || operator === '') return;

    let a = parseFloat(inputA);
    let b = parseFloat(inputB);
    let result;

    switch (operator) {
        case '+':
            result = b + a;
            break;
        case '-':
            result = b - a;
            break;
        case '*':
            result = b * a;
            break;
        case '/':
            if (a === 0) {
                document.getElementById("display").value = "ERROR";
                clearDisplay();
                return;
            }
            result = b / a;
            break;
        default:
            return;
    }

    inputA = result.toString();
    operator = '';
    inputB = '';
    updateDisplay();
}

// Clear display
function clearDisplay() {
    inputA = '';
    inputB = '';
    operator = '';
    updateDisplay();
}

// Update calculator display
function updateDisplay() {
    const display = document.getElementById('display');
    if (operator) {
        display.value = `${inputB} ${operator} ${inputA}`;
    } else {
        display.value = inputA;
    }
}
