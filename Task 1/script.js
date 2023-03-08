let display = document.getElementById("display");

function addToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    let screenValue = document.getElementById('display').value;
    document.getElementById('display').value = screenValue.
    substring(0, screenValue.length - 1);
}

function calculate() {
    let expression = display.value;
    let result = eval(expression);
    display.value = result;
}
