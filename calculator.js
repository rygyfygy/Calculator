const display = document.querySelector('#display');

let calcOperator = null;
let calcFirstNumber = null;
let calcSecondNumber = null;


// Clear the display
function clearDisplay() {
    display.value = "";
}
function clearCache() {
    calcOperator = null;
    calcFirstNumber = null;
    calcSecondNumber = null;
}

function clearAll() {
    clearCache();
    clearDisplay();
}

// Append numbers to display
let shouldClearDisplay = false;

function enter(pressed_button) {
    if (shouldClearDisplay) {
        clearDisplay();
        shouldClearDisplay = false;
    }
    display.value += pressed_button.textContent;
}


//calculate
function operate(operator, number1, number2) {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (!num2) return 'ERROR'; 
            return num1 / num2;
    }
}

//// BUTTON - ACTION ASSIGNMENT
//  num
const buttons = Array.from(document.querySelectorAll('.num'));
buttons.forEach(button => {
    button.addEventListener('click', (event) => enter(event.target));
});

// dot
const dot = document.querySelector('#dot');
dot.addEventListener('click', (event) => {
    if (!display.value.includes('.')) { enter(event.target); }
});


//  clear
const AC = document.querySelector('#clear');
AC.addEventListener('click', clearAll);

//  equal
const operators = document.querySelectorAll('.operator');
operators.forEach((operatorButton) => operatorButton.addEventListener('click', () => {
    if (calcFirstNumber === null) {
        calcFirstNumber = display.value;
    }
    calcOperator = operatorButton.textContent;
    shouldClearDisplay = true;
}));

const eq = document.querySelector('#equal');
eq.addEventListener('click', () => {
    if (calcOperator && calcFirstNumber) {
        calcSecondNumber = display.value;
        display.value = operate(calcOperator, calcFirstNumber, calcSecondNumber);
        clearCache();
        calcFirstNumber = parseFloat(display.value);
    }
});












