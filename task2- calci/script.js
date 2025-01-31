let display = document.getElementById("display");
let num1 = "";
let num2 = "";
let operation = "";

function appendNumber(value) {
    if (value === '+' || value === '-') {
        if (num1 && !operation) {
            operation = value;
            display.value += " " + value + " ";
        }
    } else {
        if (!operation) {
            num1 += value;
        } else {
            num2 += value;
        }
        display.value += value;
    }
}

function calculate() {
    let result;
    if (num1 && num2) {
        let number1 = parseFloat(num1);
        let number2 = parseFloat(num2);
        
        if (operation === '+') {
            result = number1 + number2;
            alert("Addition is done!");
        } else if (operation === '-') {
            result = number1 - number2;
            alert("Subtraction is done!");
        }
        
        document.getElementById("result").innerText = "Result: " + result;
        resetCalculator();
    }
}

function resetCalculator() {
    num1 = "";
    num2 = "";
    operation = "";
    display.value = "0";
}

function clearDisplay() {
    display.value = "";
    num1 = "";
    num2 = "";
    operation = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
    if (!operation) {
        num1 = num1.slice(0, -1);
    } else {
        num2 = num2.slice(0, -1);
    }
}
