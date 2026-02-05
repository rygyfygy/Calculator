
const display = document.querySelector('#display');

// Append numbers to display ([0] = 'AC')
function input_number(pressed_button) {
    display.value += pressed_button.textContent;
}

let calcOperator = null;
let calcFirstNumber = null;
let calcSecondNumber = null;

// Clear the display
function clearAll(_) {
    display.value = "";
    calcOperator = null;
    calcFirstNumber = null;
    calcSecondNumber = null;    
}
function clearDisplay(_) {
    display.value = "";
}

//calculate
function operate(operator, number1, number2){
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    switch (operator){
        case '+': 
            return num1 + num2;
        case '-': 
            return num1 - num2;
        case '*': 
            return num1 * num2;
        case '/': 
            return num1 / num2;
    }
}

/*
function calculate() {
    display.value = eval(display.value)
}
*/

// button - action assignment
    //  num
    const buttons = Array.from(document.querySelectorAll('.num'));
    buttons.forEach(button => {
        button.addEventListener('click', (event) => input_number(event.target)); 
    });

    //  clear
    const AC = document.querySelector('#clear');
    AC.addEventListener('click', clearAll);

    //  equal
    const operators = document.querySelectorAll('.operator');
    operators.forEach((operatorButton) => operatorButton.addEventListener('click', () => {
        if (calcFirstNumber === null) {
            calcFirstNumber = display.value;
            clearDisplay();
        } else {
            calcSecondNumber = display.value;
        }
        calcOperator = operatorButton.textContent;
    }));

    const eq = document.querySelector('#equal');
    eq.addEventListener('click', () => {
        if (calcOperator && calcFirstNumber) {
            calcSecondNumber = display.value;
            display.value = operate(calcOperator, calcFirstNumber, calcSecondNumber);
        }});












