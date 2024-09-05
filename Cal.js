// CALCULATE PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function erase() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);  // Remove the last character
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}