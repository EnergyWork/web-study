let outputField = document.querySelector("#outputfield");
let backets = 0;
let operators = ["+","-","*","/",".","!","**","^","√"];
let evalResult = 0;

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

function reset() {
    outputField.value = evalResult = "0"; 
}

function eraselast() {
    if (outputField.value.slice(-1) == ")")
        broket++;
    else if (outputField.value.slice(-1) == "(")
        broket--;
    evalResult = outputField.value = outputField.value.slice(0, outputField.value.length - 1);
    if (outputField.value.length == 0) {
        outputField.value = evalResult = "0";
    }
}

function createStrToEval(str) {

}

function addValue(val) {
    if (parseInt(val) || val == "0") {
        if(outputField.value.slice(-1) == "0" && outputField.value.length == 1) {
            outputField.value = val;
            evalResult = val;
        } else {
            outputField.value += val;
            evalResult += val;
        }
    }
}

function calculate() {

}