let inputA = '';
let operator = '';
let inputB = '';

function appendNumber(number) {
    inputA += number;
    document.getElementById('display').value = `${inputB} ${operator} ${inputA}`;
}

function appendOperation(op) {
    if (inputA === '') return;
    if (inputB !== '') {
        calculate(); 
    }
    operator = op;
    inputB = inputA;
    inputA = '';
    document.getElementById('display').value = `${inputB} ${operator}`;
}

function calculate() {
    if (inputB === '' || inputA === '') return;
    let result;
    let b = parseFloat(inputB);
    let a = parseFloat(inputA);

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

    inputA = result.toString();
    operator = '';
    inputB = '';
    document.getElementById('display').value = inputA;
}

function clearDisplay() {
    inputA = '';
    inputB = '';
    operator = '';
    document.getElementById('display').value = '';
}

