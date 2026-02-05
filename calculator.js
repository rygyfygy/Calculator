
const display = document.querySelector('#display');

// Append numbers to display ([0] = 'AC')
function input_number(pressed_button) {
    display.value += pressed_button.textContent;
}

// Clear the display
function clearAll(_) {
    display.value = "";
}

function operate(operator, num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
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
    const clear = document.querySelector('#clear');
    clear.addEventListener('click', clearAll);

    //  equal
    const eq = document.querySelector('#equal');
    eq.addEventListener('click', (e) => calculate());











