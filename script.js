
var memory = "0",current = "0",operation = 0;

var display = document.querySelector('.display p');

function EnterEqual() {
    // If the operation used was *, multiply memory with current value.
    if (operation === 1) {
        current = eval(memory) * eval(current);
    }
    // If the operation used was /, multiply memory with current value.
    if (operation === 2){
        if (eval(current) !== 0) { // Only if not dividing by 0.
            current = eval(memory) / eval(current);
        } else {
            current = "Error";
        }
    }
    // Same for + and -
    if (operation === 3) {
        current = eval(memory) + eval(current);
    }
    if (operation === 4) {
        current = eval(memory) - eval(current);
    }

    // Reset memory and current. Also force current to a string after the calculation.
    current = current + "";
    operation = 0;
    memory = "0";


    display.innerHTML = current;
}

function EnterNumber(x) {
if ((current == 0) && (current.indexOf(".") === -1)) {
    current = ""+x+"";
    } else {
        current += ""+x+"";
    }
    display.innerHTML = current;
}

function addDecimal() {
    if (current.length === 0) {
        current = "0.";
    } else
      if (current.indexOf(".") === -1){
        current += ".";
      }
    display.innerHTML = current;
}

function EnterOperator(y) {
    if (operation !== 0) { // If user inputs a string of values and operations
        calculate(); // i.e (1+2*3-4) our calculator only deals with two calculations
    } // the calculation will always be right.

    if (y.indexOf("*") > -1) {
        operation = 1
    }; // Shortcut to using operations rather than using html.value.
    if (y.indexOf("/") > -1) {
        operation = 2
    };
    if (y.indexOf("+") > -1) {
        operation = 3
    };
    if (y.indexOf("-") > -1) {
        operation = 4
    };

    memory = current; // Store each entry in memory variable to always calculate 'current ipnut' against.
    current = ""; // Clear current so we can use it next, now that it is in memory.

    display.innerHTML = current;
}

function EnterClear() {
    current = "0";
    operation = 0;
    memory = "0";

   display.innerHTML = current;
}

//eval