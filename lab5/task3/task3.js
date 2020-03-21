let outputField = document.querySelector("#outputfield");
let backets = 0;
let operators = ["+","-","*","/",".","!","**","^","√"];
let evalResult = "0";
let floatNum = false;

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

function reset() {
    outputField.value = "0"; 
}

function eraselast() {
    if (outputField.value.slice(-1) == ")")
        broket++;
    else if (outputField.value.slice(-1) == "(")
        broket--;
    evalResult = outputField.value = outputField.value.slice(0, outputField.value.length - 1);
    if (outputField.value.length == 0) {
        outputField.value = "0";
    }
}

function createStrToEval(str) {

}

function addValue(val) {
    if (parseInt(val, 10)) { // digit
        if(outputField.value.slice(-1) == "0" && outputField.value.length == 1) {
            outputField.value = val;
        } else if (!")!".includes(outputField.value.slice(-1))) {
            outputField.value += val;
        }
    }
    else { //! ( ) - ^ + sqrt . /
        switch(val) {
            case '/': 
            case '*': 
            case '-': 
            case '+': 
                if (!"(√.^+-*/".includes(outputField.value.slice(-1))) {
                    outputField.value += val;
                }
                break;
            case '√': 
                if (!"0123456789!^)".includes(outputField.value.slice(-1))) {
                    outputField.value += val;
                } else if (outputField.value.length == 1 && outputField.value.slice(-1) == "0") {
                    outputField.value = val;
                }
                break;
            case '(': 
                if (!"0123456789.!)".includes(outputField.value.slice(-1))) {
                    outputField.value += val;
                }
                break;
            case ')': 
                if (!".+-*/√^(".includes(outputField.value.slice(-1))) {
                    outputField.value += val;
                }
                break; 
            case '!': 
                if (!".+-*/√(^".includes(outputField.value.slice(-1))) {
                    outputField.value += val;
                }
                break;
            case '^': 
                if (!".+-*/√".includes(outputField.value.slice(-1))) {
                    outputField.value += val;
                }
                break;
            case '.': 
                if ("0123456789.".includes(outputField.value.slice(-1)) && !outputField.value.includes('.')) {
                    outputField.value += val;
                }
                break;
        }
    }
}

function calculate() {

}