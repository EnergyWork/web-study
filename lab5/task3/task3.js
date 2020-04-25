'use strict';

let outputField = document.querySelector("#outputfield");

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

function checkingForAPoint() {
    var i = outputField.value.length;
    while (!"+-*/√^".includes(outputField.value[i - 1]) && i != 0) {
        if (outputField.value[i - 1] == '.') {
            return false;
        }
        i--;
    }
    return true;
}

function toBin() {
    outputField.value = parseInt(outputField.value, 10).toString(2);
}

function toDec() {
    outputField.value = parseInt(outputField.value, 2);
}

function reset() {
    outputField.value = "0";
}

/*function eraselast() {
    if (outputField.value.slice(-1) == ")") {
        backets++;
    }
    else if (outputField.value.slice(-1) == "(") {
        backets--;
    }
    outputField.value = outputField.value.slice(0, outputField.value.length - 1);
    if (outputField.value.length == 0) {
        outputField.value = "0";
    }
}*/

function addValue(val) {
    if (parseInt(val, 10) || val == 0) { // digit
        if(outputField.value.slice(-1) == "0" && outputField.value.length == 1) {
            outputField.value = val;
        } else if (!")!".includes(outputField.value.slice(-1))) {
            outputField.value += val;
        }
    } else { //! ( ) - ^ + sqrt . /
        switch(val) {
            case '/': 
            case '*': 
            case '-': 
            case '+': 
                if (!"(√.^".includes(outputField.value.slice(-1))) {
                    if ("+-*/".includes(outputField.value.slice(-1))) {
                        outputField.value = outputField.value.slice(0, -1) + val;
                    } else {
                        outputField.value += val;
                    }
                }
                break;
            case '√': 
                if (!"0123456789!^.)".includes(outputField.value.slice(-1))) {
                    outputField.value += val;
                } else if (outputField.value.length == 1 && outputField.value.slice(-1) == "0") {
                    outputField.value = val;
                }
                break;
            case '(': 
                if (!"0123456789.!()".includes(outputField.value.slice(-1))) {
                    outputField.value += val;
                }
                break;
            case ')': 
                if (!"!.+-*/√^(".includes(outputField.value.slice(-1))) {
                    outputField.value += val;
                }
                break; 
            case '!': 
                if (!".+-*/√(^".includes(outputField.value.slice(-1))) {
                    outputField.value += val;  
                }
                break;
            case '^': 
                if (!".+-*/√(".includes(outputField.value.slice(-1))) {
                    outputField.value += val;
                }
                break;
            case '.': 
                if ("0123456789.".includes(outputField.value.slice(-1)) && checkingForAPoint()) {
                    outputField.value += val;
                }
                break;
        }
    }
}

function createStrToEval(str) {
    str = str.split("");
    for (var i = str.length - 1; i != -1; i--) {   
        switch(str[i]) {
            case "!":
                str.splice(i, 1, ")");
                if (isFinite(str[i - 1])) {
                    for (let j = i - 1; j != -2; j--) {
                        if(isNaN(parseInt(str[j]))) {
                            str.splice(j + 1, 0, "factorial(");
                            break;
                        }
                    }
                }
                if (str[i - 1] == ")") {
                    let numOfBrocket = 0;
                    for (let j = i - 1; j != -2; j--) {
                        if (str[j] == ")") {
                            numOfBrocket++;
                        } else if (str[j] == "(") {
                            numOfBrocket--;
                        }
                        if (numOfBrocket == 0) {
                            str.splice(j + 1, 0, "factorial(");
                            break;
                        }
                    }
                }
                break;
            case "^":
                str.splice(i, 1, "**");
                break;
            case "√":
                str.splice(i, 1, "Math.sqrt(");
                if(isFinite(str[i + 1]) || str[i + 1] == "Math.sqrt(") {
                    for (let j = i + 1; j < str.length + 1; j++) {
                        if(!isFinite(str[j]) && str[j] != "Math.sqrt(") {
                            str.splice(j, 0, ")");
                            break;
                        }
                    } 
                }
                else if(str[i + 1] == "(") {
                    str.splice(i + 1, 1);         
                }  
                break;
        }
    }
    return str.join("");
}

function calculate() {
    outputField.value = eval(createStrToEval(outputField.value));
}