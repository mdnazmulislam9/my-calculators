// Enable keyboard input for calculator
document.addEventListener('keydown', function(event) {
    let key = event.key;
    if (key === 'Backspace') {
        clearDisplay();
    } else if (key === 'Enter') {
        calculateResult();
    } else if ('0123456789+-*/.%()'.includes(key)) {
        appendToDisplay(key);
    }
});

// Normal and Scientific Calculator functionality
let currentExpression = '';

function appendToDisplay(value) {
    currentExpression += value;
    document.getElementById('display').value = currentExpression;
}

function clearDisplay() {
    currentExpression = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        currentExpression = eval(currentExpression).toString();
        document.getElementById('display').value = currentExpression;
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}
