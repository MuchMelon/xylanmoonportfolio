//Variables for inputs
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');

//Variables for calculation buttons
let additionButton = document.querySelector('#addButton');
let subtractionButton = document.querySelector('#subtractButton')
let multiplicationButton = document.querySelector('#multiplicationButton')
let divisionButton = document.querySelector('#divisionButton')

let outputField = document.querySelector('#output');


//Function for adding numbers and sending value to outputField
function add() {
    let addition1 = Number(input1.value);
    let addition2 = Number(input2.value);
    let sum = addition1 + addition2;
    outputField.value = "= " +sum;
}

//Function for subtracting numbers and sending value to outputField
function subtract() {
    let subtraction1 = Number(input1.value);
    let subtraction2 = Number(input2.value);
    let difference = subtraction1 - subtraction2;
    outputField.value = "= " +difference;
}

//Function for multiplying numbers and sending value to outputField
function multiply() {
    let multiplier1 = Number(input1.value);
    let multiplier2 = Number(input2.value);
    let product = multiplier1*multiplier2;
    outputField.value = "= " +product;
}

//Function for dividing numbers and sending value to outputField
function divide() {
    let divisor1 = Number(input1.value);
    let divisor2 = Number(input2.value);
    let quotient = divisor1/divisor2;
    outputField.value = "= " +quotient;
}


//Connecting additionButton click to add function
additionButton.onclick = function () {
    add();
}
//Connecting subtractionButton click to subtract function
subtractionButton.onclick = () => subtract();

//Connecting multiplicationButton click to multiply function
multiplicationButton.onclick = () => multiply();


//Connecting divisionButton click to add function
divisionButton.onclick = () => divide();