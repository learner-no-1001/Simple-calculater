let inputA = '';
let operator = '';
let inputB = '';

// Append numbers to current input
function appendNumber(number) {
    inputA += number;
    updateDisplay();
}

// Append operations
function appendOperation(op) {
    if (inputA === '' && inputB === '') return;

    // Unary operations: calculate immediately
    if (op === '^2' || op === '^3' || op === 'SqRt' || op === 'CuRt') {
        operator = op;
        calculate();
        return;
    }

    // If there is already a previous input, calculate first
    if (inputB !== '' && inputA !== '') {
        calculate();
    }

    operator = op;
    inputB = inputA;
    inputA = '';
    updateDisplay();
}

// Perform calculation
function calculate() {
    if (operator === '' || (inputB === '' && operator !== '^2' && operator !== '^3' && operator !== 'SqRt' && operator !== 'CuRt')) return;

    let result;
    let b = parseFloat(inputB);
    let a = parseFloat(inputA || inputB); // For unary operations, use inputB if inputA is empty

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
        case "^2":
            result = a * a;
            break;
        case "^3":
            result = a * a * a;
            break;
        case "SqRt":
            result = Math.sqrt(a);
            break;
        case "CuRt":
            result = Math.cbrt(a);
            break;
        default:
            return;
    }

    // Save result for next operation
    inputA = result.toString();
    operator = '';
    inputB = '';
    updateDisplay();
}

// Clear all inputs
function clearDisplay() {
    inputA = '';
    inputB = '';
    operator = '';
    updateDisplay();
}

// Update the calculator display
function updateDisplay() {
    const display = document.getElementById('display');
    if (operator) {
        display.value = `${inputB} ${operator} ${inputA}`;
    } else {
        display.value = inputA;
    }
}


