let displayValue = '';
let stack = [];
let x = 0; // Variable x inicializada en 0

function addToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        let result;
        if (displayValue.includes('x')) {
            // Si la expresión contiene la variable 'x', la reemplaza con su valor
            const exprWithX = displayValue.replace(/x/g, x);
            result = eval(exprWithX);
        } else {
            result = eval(displayValue);
        }
        displayValue = result.toString();
        document.getElementById('display').value = displayValue;
        stack.push(displayValue);
        displayStack();
    } catch (error) {
        alert('Error en la expresión.');
        clearDisplay();
    }
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function displayStack() {
    const stackTable = document.getElementById('pilaBody');
    stackTable.innerHTML = '';
    stack.forEach((operation, index) => {
        const row = `<tr><td>${index + 1}</td><td>${operation}</td></tr>`;
        stackTable.innerHTML += row;
    });
}

function setVariable() {
    const value = prompt('Ingrese el valor de x:');
    if (value !== null) {
        x = parseFloat(value); // Convierte el valor a número flotante
    }
}
